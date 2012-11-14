package giftedclient {
	import flash.display.MovieClip;
	import flash.events.Event;
	import giftedclient.maps;
	import giftedclient.tile;
	public class physObj extends MovieClip {

		private var _sock:sock;
	// Main variables
		protected var _world:world,
					hitbox:MovieClip,
					xSpeed:Number = 0,
					xLimit:Number = 20,
					xOffset:Number = 0, // X Position Offset (for infinite world)
					ySpeed:Number = 0,
					yLimit:Number = 20,
					Accel:Number = 1,
					direction:Number = 1,
					jumpStr:Number = 15,
					flySpeed:Number = 10,
					flyDir:Number = -1;
		
		protected static var gravity:Number = 1,
							gravSpeed:Number = 1; // Number of steps between each time it is applied
		protected var gravCount:Number = 0;
		
		public var onFloor:Boolean = false, isFlying:Boolean = false;
		
	// Map reference, tile heights, region coordinates
		protected var _map:maps,
					_tileH:Number,
					_tileW:Number;
	
	// Streaming and spline variables
		// Streaming
			public var stream = false; // Whether to stream this object
			protected var streamSpeed = 2, // Speed of position streaming in steps
						streamStep = 0, // Stream step
						streamx = 0, // Last x position streamed
						streamy = 0, // Last y position streamed
						streamxvel = 0, // Last x velocity streamed
						streamyvel = 0; // Last y velocity streamed
			
			private var sendBuffer:Array = [], // Buffer of strings to send to server (prevents button spam)
						buffer = 0;
			
		// Cubic spline interpolation
			public var interpolation = true; // Whether to interpolate buffered data or just perform immediately
			private var splineSpeed = streamSpeed; // How fast to progress from start to finish, in steps
			private var splineStep = splineSpeed+1; // How far through the spline we are
			
			private var splineBuffer:Array = new Array(); // Buffer of received coordinates
			
			// Sub elements per element in splines object:
			// Coefficient, start, start velocity, end, end velocity
			private var spline:Object = {}; // Basically stores start and end points for each variable
											// with the option of velocities, which can be left at 0
											
		// Powers
			protected var effects:Vector.<effect> = new Vector.<effect>;
			protected var mod:Object = {}; // Modifiers
			protected var mul:Object = {}; // Multipliers
			

		public function physObj() {
			addEventListener(Event.ADDED_TO_STAGE, init);
			_world = game.setting.World;
			_map = game.setting.Map;
			_sock = game.gsock;
			_tileH = _map._tileH;
			_tileW = _map._tileW;
		}
		
		protected function init(e:Event){
			removeEventListener(Event.ADDED_TO_STAGE, init);
		}
	
	// GETTERS AND SETTERS
		// Coordinates + offset
			public function set offset(n:Number){xOffset = n;}
			public function get offset(){return xOffset;}
			override public function set x(n:Number):void{super.x = n + xOffset;}
			override public function get x():Number{return super.x - xOffset;}
		
		// Flight
			public function fly(){ isFlying = !isFlying; }
			public function get flying(){ return isFlying; }
			public function set flying(b:Boolean){ isFlying = b; }
		
		// Speed
			public function getSpeedX(){ return xSpeed; }
			public function setSpeedX(n:Number){ xSpeed = n; }
			public function getSpeedY(){ return ySpeed; }
			public function setSpeedY(n:Number){ ySpeed = n; }
			
	// General functions
		
		public function Spawn(sX=null,sY=null) {
			if(!_world.contains(this)){
				_world.addChild(this);
			}
			
			if(!(sX && sY)){
				x = _map.spawnX*_tileW;
				y = _map.spawnY*_tileH;
				trace("Spawnin here: " + x + " " + y);
			}else{
				x = sX;
				y = sY;
			}
			iMove(new Array("x",x));
			iMove(new Array("y",y));
		}	
	
		public function Unspawn() {
			if(_world.contains(this)){
				_world.removeChild(this);
			}
		}			
		
		public function MoveTo(xcord:Number, ycord:Number, direc:Number=0){
			x = xcord;
			y = ycord;
			if(direc!=0){setDir(direc);}
		}
		
		public function setDir(dir:Number){
			if(dir>0){direction=1;}else
			if(dir<0){direction=-1;}
		}
		
	// Effect functions
		public function addEffect(e:effect){
			effects.push(e);
		}
	
	// Physics rules
		protected function c2(v:Number, Y:Boolean=false){ // Returns uncollided coordinate (ie coordinate of tile)
			var tSize:Number = _tileW; if(Y){tSize=_tileH;}
			return Math.floor(v/tSize) * tSize;
		}
		
		protected function chkSolid(xCord:Number, yCord:Number):Boolean{ // Find whether a tile is solid
			var cords = _map.convertCords(xCord,yCord), // Check and Region coords
					cx = cords["x"],
					cy = cords["y"],
					rx = cords["rx"],
					ry = cords["ry"];
					
			if((ry==0 && cy<=0) || ry>_map.wSize && cy>=_map.rSize){// Prevent Y looping
				return true;
			}
			if((cx>=0 && cy>=0 && cx<_map.rSize && cy<_map.rSize) &&
			   (ry>=0 && ry<_map.wSize)){
				var leTile = _map.world[ry][rx][cy][cx]; // Check map array for tile
				if(leTile!=null){
					if(maps.solidarr.indexOf(leTile.val)>-1){ // Check map's solid array
						return true;
					}else{
						return false;
					}
				}else{
					return false;
				}
			}else{
				trace("Collision prevented: " + cx + " " + cy + " " + rx + " " + ry);
				return true;
			}
		}
		
		public function tick():void{
			/* These variables represent the current position of the character */
			var Cx:Number = x; // Center of the object
			var Cy:Number = y;
			var Ty:Number = Math.round(y - (hitbox.height * 0.5));
			var By:Number = Math.round(y + (hitbox.height * 0.5));
			var Lx:Number = Math.round(x - (hitbox.width  * 0.5));
			var Rx:Number = Math.round(x + (hitbox.width  * 0.5));
			/* 	These variables predict which tile the character would be in were it to start or
				continue moving. They are used for checking ahead with the axis in question. */
			var pTy:Number;
			var pBy:Number;
			if(ySpeed!=0){
				pTy = Ty+ySpeed;
				pBy = By+ySpeed;
			}else{
				pTy = Ty-jumpStr;
				pBy = By+Accel; // jumpStr
				if(isFlying){
					pTy = Ty-Accel; // flyspeed
					pBy = By+Accel; // flySpeed
				}
			}
			var pLx:Number;
			var pRx:Number;
			if(xSpeed!=0){
				pLx = Lx+xSpeed;
				pRx = Rx+xSpeed;
			}else{
				pLx = Lx+(Accel*direction);
				pRx = Rx+(Accel*direction);
			}
			
			// Switch back to true direction and make extra prediction cords
			var pDx:Number; // Prediction of X location after movement based on direction			
			var cLx = Lx, cRx = Rx;
			if(xSpeed<0){
				direction = -1;
				cLx = pLx; 
				cRx = pLx + hitbox.width;
				pDx = pLx;
			}else if(xSpeed>0){
				direction = 1;
				cLx = pRx - hitbox.width; 
				cRx = pRx;
				pDx = pRx;
			}
			
			// Fly direction
			flyDir = ySpeed>0 ? 1 : -1;
			
			var hh = Math.floor(hitbox.height*0.5); // Half height
			var hw = Math.floor(hitbox.width*0.5); // Half width
			var qh = Math.floor(hitbox.height*0.25); // Quarter height
			
			// Y
			if(!chkSolid(Lx,pBy) && !chkSolid(Rx,pBy) && !chkSolid(Cx,pBy)){ // In mid-air
				onFloor = false;
				if((ySpeed+gravity)<=yLimit && gravCount>=gravSpeed){ // Apply gravity
					if(!isFlying){
						ySpeed += gravity;
						gravCount=0;
					}
				}else{
					gravCount++;
				}
				if(ySpeed<=0){ // if travellin upwards and there's shit above, stop dis shit
					if( !(chkSolid(Lx,pTy) && chkSolid(Rx,pTy)) && !chkSolid(Cx,pTy) ){
						// nudge character a bit if there ain't that much shit above
						if(!chkSolid(Lx,Ty) && chkSolid(Rx,Ty)){ x = Math.floor(c2(Rx) - hw) - 1; }
						if(chkSolid(Lx,Ty) && !chkSolid(Rx,Ty)){ x = Math.floor(c2(Lx) + _tileW + hw); }
					}else{
						ySpeed = 0;
						y = Math.floor(c2(pTy) + _tileH + hh);						
					}
				}
			}else{ // On a surface
				onFloor = true;
				if(ySpeed>=0 || (isFlying && ySpeed<0)){ // if fallin and there's shit below, land on dat shit
					if((chkSolid(cLx,pBy) || chkSolid(cRx,pBy)) || chkSolid(Cx,pBy)){
						y = Math.floor(c2(pBy) - hh);
					}
				}
				if((!isFlying && ySpeed!=0) || (isFlying && ySpeed>0)){
					ySpeed = 0;
				}
				if(ySpeed<0){ // Move up if there's not too much in the way above
					if((chkSolid(Lx,pTy) && chkSolid(Rx,pTy)) && chkSolid(Cx,pTy)){
						ySpeed = 0;
					}
				}
			}
			
			// X
			if(xSpeed!=0){
				var doMove:Boolean = false;
				// Test for collisions and such
				if(!chkSolid(pDx,pTy) && !chkSolid(pDx,pBy) && !chkSolid(pDx,Cy)
				   && !((chkSolid(pDx,Cy+qh)) || (chkSolid(pDx,Cy-qh)))){
					doMove = true;
				}else{
					if(!chkSolid(pDx,Cy)){ // Main X rules
						if( !((chkSolid(pDx,pBy) && ySpeed>0) || 
							  (chkSolid(pDx,pTy) && ySpeed<0) || 
							  (chkSolid(pDx,Ty) && ySpeed==0)||
							  (chkSolid(pDx,Cy+qh)) ||
							  (chkSolid(pDx,Cy-qh)) )
						   ){
							doMove = true;
						}
					}
				}
				if(!doMove){ // If there is a collision
					var c = c2(pDx);
					if(xSpeed<0){ 
						c = c + hw + _tileW; // Position sums
					}else if(xSpeed>0){
						c = c - hw - 1; // -1 works because of rounding 
					} 
					x = Math.round(c); // Move next to collided object
					xSpeed = 0;
				}
			}
			
			// Effects management
				mod = {};
				for(var e in effects){
					var k;
					var ef = effects[e];
					//trace("e: " + e + " ef: " + ef.type + " dur: " + ef.durationCount);
					if(ef.durationCount>0){
						switch(ef.type){
							case 2: k = "xLim"; break;
							case 3: k = "xForce"; break;
							case 4: k = "yForce"; break;
						}
						if(k){
							if(!mod[k]){mod[k] = 0;} // initialise
							mod[k] += ef.amount; // modify
						}
						ef.durationCount--;
					}
					world.debug("e",e);
					world.debug("ef",ef.type.toString());
					world.debug("ed",ef.durationCount);
					if(ef.durationCount<1){
						var r = effects.splice(e,1); // Delete expended effects
					}
				}
			
			// Enforce limits
				var xLim = isFlying ? flySpeed : xLimit;
				xLim += mod["xLim"] ? mod["xLim"] : 0;
				var yLim = isFlying ? flySpeed : yLimit;
				yLim += mod["yLim"] ? mod["yLim"] : 0;
				if(xLim<1){xLim = 1;} // Ensure they aren't
				if(yLim<1){yLim = 1;} // negative limits
				if(Math.abs(xSpeed)>xLim){ xSpeed = xSpeed > 0 ? xLim : -xLim; }
				if(Math.abs(ySpeed)>yLim){ ySpeed = ySpeed > 0 ? yLim : -yLim; }
			
			// Apply force effects
				xSpeed += mod["xForce"] ? mod["xForce"] : 0;
				ySpeed += mod["yForce"] ? mod["yForce"] : 0;
			
			// Apply movement based on above calculations
				x += xSpeed;
				y += ySpeed;
				
			streamTick(); // Bewm, generalised spline interpolation bitches
		}
		
		public function get interpSpeed(){
			return splineSpeed;
		}
		
		public function set interpSpeed(num:Number){
			splineSpeed = num;
		}
		
		public function currentSpline(v:String):Array{ 
			if(spline[v]){
				return new Array(new Array(spline[v]["name"],spline[v]["3"],spline[v]["vel"],spline[v]["3v"]), 
								 new Array(spline[v]["1"],spline[v]["1v"]));
			}
			return null;
		}
		
		protected function send(data:String):void {
			_sock.sendStr(data);
		}
		
		protected function sendb(data:String):void{
			sendBuffer.push(data);
		}
		
		public function iBuffer(... valVels):void{ // each input array should contain: valName:String, val:Number, velName:String="", vel:Number=0
			if(interpolation){
				var buff:Array = new Array();
				for(var key in valVels){
					if(valVels[key].length>=2){
						buff.push(valVels[key]);
						//trace(valVels[key][0] + valVels[key][1]);
					}
				}
				splineBuffer.push(buff);
			}else{
				for(var bkey in valVels){
					var v = valVels[bkey];
					if(v.length>=2){
						this[v[0]] = v[1];
						if(valVels[bkey].length>=4){
							this[v[2]] = v[3];
							//iMove(valVels[bkey]);
						}
					}
				}
			}
		}
		
		// Updates spline according to packet
		public function iMove(to:Array,from:Array=null,restart=true):void{
			//trace(xcord + " " + xvel + " " + ycord + " " + yvel);
			var v = to[0];
			if(!spline[v]){ spline[v] = {}; spline[v]["name"] = v; }
			var vel = spline[v]["vel"] = to[2] || "";
			var coefficient = (spline[v]["coefficient"]) ? spline[v]["coefficient"] : 1;
			// Interpolate
				if(restart){splineStep=0;}
				// Current values
					if(from){ // Last position received or
						spline[v]["1"] = from[0];
						spline[v]["1v"] = from[1];
					}else{ // Actual current position
						spline[v]["1"] = (v!="") ? this[v] : 0;
						spline[v]["1v"] = (vel!="") ? this[vel] : 0;
					}
					spline[v]["2"] = spline[v]["1"] + spline[v]["1v"] * coefficient;
				// Received values
					spline[v]["3"] = to[1]; 
					spline[v]["3v"] = to[3] || 0;
					spline[v]["4"] = spline[v]["3"] - spline[v]["3v"] * coefficient;
				// Calculate variables for the spline
					spline[v]["A"] = spline[v]["4"] - (3 * spline[v]["3"]) + (3 * spline[v]["2"]) - spline[v]["1"];
					spline[v]["B"] = 3 * spline[v]["3"] - 6 * spline[v]["2"] + 3 * spline[v]["1"];
					spline[v]["C"] = 3 * spline[v]["2"] - 3 * spline[v]["1"];
					spline[v]["D"] = spline[v]["1"];
		}
		
		// Returns a position on the current spline
		private function iSpline(v:String,t:Number):Number{
			function splineGive(a,b,c,d){
				return (a * Math.pow(t,2)) + (b * Math.pow(t,2)) + (c*t) + d;
			}
			var val = splineGive(spline[v]["A"],spline[v]["B"],spline[v]["C"],spline[v]["D"]);
			return Math.round(val);
		}
		
		private function iSplineSimple(v:String,t:Number):Number{
			return Math.floor(spline[v]["1v"] + (t * (spline[v]["3v"] - spline[v]["1v"])));;
		}
		
		protected function streamTick():void{
			// Stream step counting
				if(streamStep<streamSpeed){
					streamStep++;
				}else{
					streamStep = 0;
				}
				
			// Send buffer at stream speed
				if(streamStep>=streamSpeed && sendBuffer.length>0){ send(sendBuffer.shift()); }
			
			if(interpolation){
			// Coordinate buffering
				// Number of coordinates in buffer
					var bufLen = splineBuffer.length;
				// Variable spline interpolation speed
					var spSp = bufLen>2 ? splineSpeed-1 : splineSpeed; // Speed up if buffer is too full
					spSp = bufLen<1 ? splineSpeed+1 : splineSpeed; // Slow down if buffer is too empty
			
				if(bufLen>1){ //  || xSpeed!=0 || ySpeed!=0
					if(splineStep>=spSp){
						if(bufLen>0){
							// There is always at least one set of values in the buffer
							// ie, the last set interpolated to (current position)
							splineBuffer.shift(); // Remove current position from buffer
							for(var key in splineBuffer[0]){ // For each variable buffered at this index
								iMove(splineBuffer[0][key]); // Update the spline
							}
						}else{
							// splineStep = 0; // Try it online some time, see if it stops the initial hiccuping
						}
					}
				}
				
			// Perform interpolation
				if(splineStep<=spSp){ 
					var t = 1/(spSp/splineStep);
					for(var skey in spline){
						var val = iSpline(skey,t);
						if(!isNaN(val)){ // On spawn, is NaN because iMove isn't immediately called
							this[skey] = val;
							if(spline[skey]["vel"]){ // Smooth velocity if there is velocity
								this[spline[skey]["vel"]] = iSplineSimple(skey,t);
							}
						}
					}
					splineStep++;
				}
			}
			
		}

		
	}
	
}
