package giftedclient {
	// Imports
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.net.XMLSocket;
	import giftedclient.tile;
	import giftedclient.maps;
	import giftedclient.character;
	
	// Start class
	public class player extends character{
		
		private var _id:Number;
		public var Name:String = "...";
		private var _sock:sock,_world:world;
		private var xSpeed:Number = 0,
					xLimit:Number = 7,
					xAccel:Number = xLimit,
					direction:Number = 1,
					gravity:Number = 1,
					ySpeed:Number = 0,
					yLimit:Number = 10,
					jumpStr:Number = 16;
		
		public var thisPlayer:Boolean = false; // Is this object the current player?
		// Left, right, moving
			public var moveLeft:Boolean = false;
			public var moveRight:Boolean = false;
			public var moveUp:Boolean = false;
			public var moveDown:Boolean = false;
			public var moving:Boolean = false;
		// Jump, on floor
			private var _jump:Boolean = false;
			public var onFloor:Boolean = false;
		
		// Map reference and tile heights
			private var _map:maps;
			private var _tileH:Number;
			private var _tileW:Number;
			
		// Outfit related
			private var outfit = new Object();
		
		// Streaming
			private var streamSpeed = 10; // Speed of position streaming in steps
			private var stream:Number = 0; // Stream step
			private var streamx:Number = 0; // Last x position streamed
			private var streamy:Number = 0; // Last y position streamed
			private var streamxvel:Number = 0; // Last x velocity streamed
			private var streamyvel:Number = 0; // Last y velocity streamed
			
		// Cubic spline interpolation
			private var splineSpeedX = Math.floor(xLimit*(xLimit/streamSpeed)); // How fast to progress from start to finish, in steps
			private var splineStepX = splineSpeedX + 1; // How far through the spline we are
			private var splineSpeedY = Math.floor(yLimit*(yLimit/streamSpeed*0.5)); // How fast to progress from start to finish, in steps
			private var splineStepY = splineSpeedY + 1; // How far through the spline we are
			
			private var splineXc = 2; // Curve coefficient
			private var splineYc = 1; // Curve coefficient
			// From X1 and Y1
			private var splineX1; private var splineX1v; // Start X
			private var splineY1; private var splineY1v; // Start Y
			private var splineX2, splineY2; // Plus velocity
			// To   X2 and Y2
			private var splineX3; private var splineX3v;
			private var splineY3; private var splineY3v;
			private var splineX4, splineY4; // Plus velocity
			// Half way spline vars
			private var sA, sB, sC, sD; // X
			private var sE, sF, sG, sH; // Y
		
		// Constructor
		public function player(gid:Number, thisPlay:Boolean=false){ // Global player ID, this player
			addEventListener(Event.ADDED_TO_STAGE,init);
			_world = game.setting.World;
			_sock = game.gsock; // Global, oh you ugly bastard
			_map = game.setting.Map; // Global, OH GOD you ugly bastard
			_tileH = _map._tileH;
			_tileW = _map._tileW;
			_id = gid;
			thisPlayer = thisPlay;
		}
		
		public function init(e:Event){
			removeEventListener(Event.ADDED_TO_STAGE,init);
			// Anything magic to do upon creation? Pleh.
		}
		
		public function Unspawn() {
			trace("Player " + Name + " unspawned");
			_world.removeChild(this);
		}		
		
		public function Spawn(sX=null,sY=null) {
			if(!_world.contains(this)){
				_world.addChild(this);
				setOutfit();
				if(!(sX && sY)){
					x = _map.spawnX*_tileW+_tileW*0.5;
					y = _map.spawnY*_tileH+_tileH*0.5;
				}else{
					x = sX;
					y = sY;
				}
				trace("Player " + Name + " spawned");
			}else{
				trace("Player " + Name + " is already spawned!")
			}
		}
		
		public function setDir(dir:Number){
			if(dir>0){direction=1;}else
			if(dir<0){direction=-1;}
			this.char.scaleX = direction;
		}
		
		public function setAnim(frame){
			if(char.currentFrameLabel==frame || char.currentFrame==frame){
				// Already on this frame
			}else{
				char.gotoAndStop(frame);
				setOutfit();
			}
		}
		
		public function setOutfit(outfitStr:String = ""){
			if(outfitStr.length>0){ // Store changes in within this player object
				outfit.head = outfitStr.substr(0,1); // Extracts player headwear selection
			}
			if(char){ // Make visible changes to stage child
				char.head.wear.gotoAndStop(outfit.head); // Update active display object
			}
		}
		
		public function Say(str){
			chatBubble.say(str);
		}		
		
		// Updates spline according to packet
		public function iMove(xcord,xvel,ycord,yvel){
			// Interpolate
				splineStepX=0;
				splineStepY=0;
				// Current values
					splineX1 = x; splineX1v = xSpeed;
					splineY1 = y; splineY1v = ySpeed;
					splineX2 = splineX1 + splineX1v * splineXc;
					splineY2 = splineY1 + splineY1v * splineYc;
				// Received values
					splineX3 = xcord; splineX3v = xvel;
					splineY3 = ycord; splineY3v = yvel;
					splineX4 = splineX3 - splineX3v * splineXc;
					splineY4 = splineY3 - splineY3v * splineYc;
				
				// Calculate variables for the spline
					// X
					sA = splineX4 - (3 * splineX3) + (3 * splineX2) - splineX1;
					sB = 3 * splineX3 - 6 * splineX2 + 3 * splineX1;
					sC = 3 * splineX2 - 3 * splineX1;
					sD = splineX1;
					// Y
					sE = splineY4 - (3 * splineY3) + (3 * splineY2) - splineY1;
					sF = (3 * splineY3) - (6 * splineY2) + (3*splineY1);
					sG = (3 * splineY2) - (3 * splineY1);
					sH = splineY1;
			if(xvel<0){moveLeft =true;}else{moveLeft =false;}
			if(xvel>0){moveRight=true;}else{moveRight=false;}
		}
		
		// Returns a position on the current spline
		private function iSpline(axis:String,time:Number){
			function splineGive(a,b,c,d){
				var t = time;
				return (a * Math.pow(t,3)) + (b * Math.pow(t,3)) + (c*t) + d;
			}
			var coord:Number;
			switch(axis){
				case "x": coord = splineGive(sA,sB,sC,sD); break;
				case "y": coord = splineGive(sE,sF,sG,sH);
			}
			return Math.round(coord);
		}
		
		public function MoveTo(xcord:Number = -1, ycord:Number = -1, direc:Number = 0){
			if(xcord>-1){this.x = xcord};
			if(ycord>-1){this.y = ycord};
			if(direc!=0){setDir(direc);}
		}
		
		public function Jump(){
			if(thisPlayer){
				if(onFloor){_jump = true;};
			}else{
				_jump = true;
			}
		}
		
		public function setXspeed(val:Number){
			if(!moveLeft && !moveRight){
				xLimit = Math.floor(val);
				xAccel = Math.floor(xLimit);
			}
		}
		
		private function send(data:String):void {
			if(thisPlayer){_sock.sendStr(data);}
		}
		
		private function chkSolid(xEle:Number, yEle:Number):Boolean{ // Find whether a tile is solid
			xEle = Math.floor(xEle/_tileW);
			yEle = Math.floor(yEle/_tileH);
			if(xEle>=0 && yEle>=0 && yEle<_map.arr.length){
				if(xEle<_map.arr[yEle].length){ // Check that coords are not too big or small
					if(_map.solidarr.indexOf(_map.arr[yEle][xEle])>-1){ // Check map array for tile
						return true;
					}else{
						return false;
					}
				}else{ // Left/right edge of map
					return true;
				}
			}else{ // Top/bottom of map
				return true;
			}
		}
		
		private function c2(v:Number, Y:Boolean=false){ // Returns uncollided coordinate (ie coordinate of tile)
			var tSize:Number = _tileW; if(Y){tSize=_tileH;}
			return Math.floor(v/tSize) * tSize;
		}
		
		public function playerTick():void {
			/* These variables represent the current position of the character */
			var Cx:Number = this.x; // Center of the object
			var Cy:Number = this.y;
			var Ty:Number = Math.round(this.y-(this.hitbox.height*0.5));
			var By:Number = Math.round(this.y+(this.hitbox.height*0.5));
			var Lx:Number = Math.round(this.x-(this.hitbox.width*0.5));
			var Rx:Number = Math.round(this.x+(this.hitbox.width*0.5));
			/* 	These variables predict which tile the character would be in were it to start or
				continue moving. They are used for checking ahead with the axis in question. */
			var pTy:Number;
			var pBy:Number;
			if(ySpeed!=0){
				pTy = Ty+ySpeed;
				pBy = By+ySpeed;
			}else{
				pTy = Ty-jumpStr;
				pBy = By+jumpStr;
			}
			var pLx:Number;
			var pRx:Number;
			if(xSpeed!=0){
				pLx = Lx+xSpeed;
				pRx = Rx+xSpeed;
			}else{
				pLx = Lx-xAccel;
				pRx = Rx+xAccel;
			}
			// Determine direction before any calculations
			var _moving:Boolean = true;
			if(moveLeft && !moveRight){direction = -1; // Left
			}else if(moveRight && !moveLeft){direction = 1; // Right
			}else{_moving = false;}
			//if(xSpeed!=0){_moving = true;}
			moving = _moving;
			
			//Y
			if(!chkSolid(Lx,pBy) && !chkSolid(Rx,pBy)){ // In mid-air
				onFloor = false;
				if((ySpeed+gravity)<=yLimit){ // Apply gravity
					ySpeed += gravity;
				}
				if(_jump && !thisPlayer){ // Packet jump
					ySpeed = 0 - jumpStr;
					_jump = false;
				}
				if(ySpeed<=0){ // if in midair and travellin upwards, stop dis shit
					if(chkSolid(Lx,pTy) || chkSolid(Rx,pTy) || chkSolid(Cx,pTy)){
						this.y = Math.floor(c2(pTy) + _tileH + (hitbox.height*0.5));
						ySpeed = 0;
					}
				}
			}else{ // On a surface
				onFloor = true;
				if(ySpeed>=0){ // if fallin and there's shit below, land on dat shit
					if(chkSolid(Lx,pBy) || chkSolid(Rx,pBy) || chkSolid(Cx,pBy)){
						this.y = Math.floor(c2(pBy) - (hitbox.height*0.5));
					}
				}
				if(ySpeed!=0){ // send y on collision
					ySpeed = 0;
					//send("/my " + this.y);
				}
				if(_jump){ // Perform jump if there's nothing in the way above
					if(!chkSolid(Cx,pTy) || !chkSolid(Rx,pTy)){ySpeed -= jumpStr;}
					_jump = false;
				}				
			}
			this.y += ySpeed;

			//X
			if(moving){
				var doMove:Boolean = false;
				if(xSpeed<xLimit && (xSpeed>(0-xLimit))){ // Accelerate when within speed limit
					xSpeed += direction*xAccel;
				}else{
					xSpeed = direction*xLimit; // Prevent going over the limit
				}
				var pDx:Number; // Prediction of X location after movement based on direction
				if(moveLeft){pDx = pLx;}
				if(moveRight){pDx = pRx;}
				// Test for collisions and such
				if(!chkSolid(pDx,pTy) && !chkSolid(pDx,pBy) && !chkSolid(pDx,Cy)){
					doMove = true;
				}else{
					if(chkSolid(pDx,Cy)){ // If there is a centre collision
						doMove = false;
						var c = c2(pDx);
						var h = hitbox.width;
						if(moveLeft){ // Pos. equations
							c = Math.round(c + (h * 0.5) + _tileW);
						}else if(moveRight){ // The bracketed negatives prevent this weird rebounding shit when speeds vary
							c = Math.round(c - (h * 0.5) - 1); // For some reason these are the values that work!
						} 
						x = c; // Move next to collided object
						c = null; h = null;
					}else{
						// The following prevents moving back onto a tile after falling off
						if((chkSolid(pDx,By) && ySpeed>0) || (chkSolid(pDx,Ty) && ySpeed<0)){ 
							doMove = false;
						}else{
							doMove = true;
						}
					}
				}	
				if(doMove){ // Move based on above tests
					this.x += xSpeed;
				}else{
					xSpeed = 0;
					//if(moveLeft){moveLeft=false;}
					//if(moveRight){moveRight=false;}
				}
			}else{
				if(xSpeed!=0){ // Stop moving
					if(thisPlayer){
						xSpeed = 0;
					}
				}
			}
			
			if(onFloor){
				if(xSpeed!=0){
					setAnim("running");
				}else{
					setAnim("static");
				}
			}else{
				if(ySpeed!=0){
					if(ySpeed<0){ // Y Animations
						setAnim("jumping");
					}else if(ySpeed>(jumpStr/3)){
						setAnim("falling");
					}					
				}
				
			}
			this.char.scaleX = direction;			
			
			// Movement Stream
			if(thisPlayer){ // Send
				stream++;
				if(stream>=streamSpeed){
					if(this.x!=streamx || this.y!=streamy || this.xSpeed!=streamxvel || this.ySpeed!=streamyvel){
						send("/m " + x + " " + xSpeed + " " + y + " " + ySpeed);
							streamx = x;
							streamy = y;
							streamxvel = xSpeed;
							streamyvel = ySpeed;
					}
					stream = 0;
				}
			}else{ // Receive
			// Spline interpolation
				var xdif = 0; // Difference between new and old positions
				if(splineStepX<=splineSpeedX){ // X
					var tx = 1/(splineSpeedX/splineStepX);
					xSpeed = Math.floor(splineX1v + (tx * (splineX3v - splineX1v)));
					var newX = iSpline("x",tx); xdif = newX - x;
					x = newX;
					moving = true;
					splineStepX++;
				}
				if(splineStepY<=splineSpeedY){ // Y
					var ty = 1/(splineSpeedY/splineStepY);
					ySpeed = Math.floor(splineY1v + (ty * (splineY3v - splineY1v)));
					y = iSpline("y",ty);
					splineStepY++;
				}
				if((xSpeed!=0 || xdif!=0) && onFloor){ // Animate that shit
					setAnim("running");
				}
			}
		}
	}
}