package giftedclient {
	import flash.display.MovieClip;	
	import flash.events.Event;
	import giftedclient.tile;
	import giftedclient.maps;	
	
	public class character extends MovieClip{

		public var Name:String = "...";
		protected var _world:world,
					char, hitbox,
					xSpeed:Number = 0,
					xLimit:Number = 7,
					xAccel:Number = 1,
					xOffset:Number = 0, // X Position Offset (for infinite world)
					direction:Number = 1,
					gravity:Number = 1,
					gravSpeed:Number = 0, // Number of steps between each time it is applied
					gravCount:Number = 0,
					ySpeed:Number = 0,
					yLimit:Number = 15,
					jumpStr:Number = 15,
					isFlying:Boolean = false,
					flySpeed:Number = 8;

		// Left, right, moving
			public var moveLeft:Boolean = false;
			public var moveRight:Boolean = false;
			public var moveUp:Boolean = false;
			public var moveDown:Boolean = false;
			protected var moving:Boolean = false;
		// Jump, on floor
			protected var _jump:Boolean = false;
			public var onFloor:Boolean = false;
		
		// Map reference, tile heights, region coordinates
			protected var _map:maps,
						_tileH:Number,
						_tileW:Number;

		public function character() {
			addEventListener(Event.ADDED_TO_STAGE, init);
			_world = game.setting.World; // Global
			_map = game.setting.Map; // Global, OH GOD you ugly bastard
			_tileH = _map._tileH;
			_tileW = _map._tileW;
		}
		
		protected function init(e:Event){
			removeEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		public function Unspawn() {
			trace("Character " + Name + " unspawned");
			_world.removeChild(this);
		}		
		
		public function Spawn(sX=null,sY=null) {
			if(!_world.contains(this)){
				_world.addChild(this);
				if(!(sX && sY)){
					x = _map.spawnX*_tileW+_tileW*0.5;
					y = _map.spawnY*_tileH+_tileH*0.5;
					trace("Spawnin here: " + x + "," + y);
				}else{
					x = sX;
					y = sY;
				}
				trace("Character " + Name + " spawned");
			}else{
				trace("Character " + Name + " is already spawned!")
			}
		}
		
		// GETTERS AND SETTERS
		
		// Toggle flight
		public function fly(){
			flying = !isFlying;
			//if(isFlying){gravity=1;}else{gravity=1;}
		}
		
		public function get flying(){
			return isFlying;
		}				
		
		public function set flying(b:Boolean){
			isFlying = b;
		}
		
		public function setDir(dir:Number){
			if(dir>0){direction=1;}else
			if(dir<0){direction=-1;}
			char.scaleX = direction;
		}		
		
		public function setXspeed(val:int){
			if(val<_tileW){
				xLimit = Math.abs(val);
				xAccel = xLimit;
			}
		}
		
		public function set offset(n:Number){xOffset = n;}
		public function get offset(){return xOffset;}
		override public function set x(n:Number):void{super.x = n + xOffset;}
		override public function get x():Number{return super.x - xOffset;}
		
		public function Jump(){
			moveUp = true;
			if(onFloor){_jump = true;}
		}
		
		public function Drop(){
			moveDown = true;
			//_jump = false;
		}
		
		public function MoveTo(xcord:Number, ycord:Number, direc:Number){
			x = xcord;
			y = ycord;
			if(direc!=0){setDir(direc);}
		}
		
		protected function chkSolid(xCord:Number, yCord:Number):Boolean{ // Find whether a tile is solid
			var cords = _map.convertCords(xCord,yCord), // Check and Region coords
					cx = cords["x"],
					cy = cords["y"],
					rx = cords["rx"],
					ry = cords["ry"];
			if(cx>=0 && cy>=0 && cx<_map.rSize && cy<_map.rSize){
				//if(cx<_map.rSize){ // Check that coords are not too big or small
					if(_map.solidarr.indexOf(_map.world[ry][rx][cy][cx])>-1){ // Check map array for tile
						return true;
					}else{
						return false;
					}
			}else{
				trace("wait what? " + cx + " " + cy + " " + rx + " " + ry);
				return true;
			}
		}
		
		protected function c2(v:Number, Y:Boolean=false){ // Returns uncollided coordinate (ie coordinate of tile)
			var tSize:Number = _tileW; if(Y){tSize=_tileH;}
			return Math.floor(v/tSize) * tSize;
		}
		
		public function tick():void{
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
				pLx = Lx-xLimit;
				pRx = Rx+xLimit;
			}
			// Determine direction before any calculations
			var _moving:Boolean = true;
			if(moveLeft && !moveRight){direction = -1; // Left
			}else if(moveRight && !moveLeft){direction = 1; // Right
			}else{_moving = false;}
			//if(xSpeed!=0){_moving = true;}
			moving = _moving;

			var cLx = Lx, cRx = Rx;
			if(moveLeft && !moveRight){cLx = pLx; cRx = pLx + hitbox.width;}
			if(moveRight && !moveLeft){cLx = pRx - hitbox.width; cRx = pRx;}
			
			if(isFlying){
				if(moveUp && !moveDown){ySpeed=0-flySpeed;
				}else if(!moveUp && moveDown){ySpeed=flySpeed;
				}else{ySpeed=0;}
			}
			
			//Y
			if(!chkSolid(Lx,pBy) && !chkSolid(Rx,pBy)){ // In mid-air
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
					if(chkSolid(Lx,pTy) || chkSolid(Rx,pTy) || chkSolid(Cx,pTy)){
						ySpeed = 0;
					}
				}
			}else{ // On a surface
				onFloor = true;
				if(ySpeed>=0 || (isFlying && ySpeed<0)){ // if fallin and there's shit below, land on dat shit
					if(chkSolid(cLx,pBy) || chkSolid(cRx,pBy) || chkSolid(Cx,pBy)){
						y = Math.floor(c2(pBy) - (hitbox.height*0.5));
					}
				}
				if((!isFlying && ySpeed!=0) || (isFlying && ySpeed>0)){
					ySpeed = 0;
				}
				if(_jump){ // Perform jump if there's nothing in the way above
					if((!chkSolid(Lx,pTy) || !chkSolid(Rx,pTy)) && !chkSolid(Cx,pTy)){
						ySpeed -= jumpStr;
					}
					_jump = false;
				}
			}

			this.y += ySpeed;

			//X
			if(moving){
				var doMove:Boolean = false;
				if(xSpeed<xLimit && xSpeed>0-xLimit){ // Accelerate when within speed limit
					xSpeed += direction*xAccel;
				}else{
					xSpeed = direction*xLimit; // Prevent going over the limit
					if(isFlying){xSpeed = direction*flySpeed;}
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
						var h = hitbox.width * 0.5;
						if(moveLeft){ c = c + h + _tileW; // Position equations
						}else if(moveRight){ c = c - h - 1; } // -1 works because of rounding 
						x = Math.round(c); // Move next to collided object
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
					x += xSpeed;
				}else{
					xSpeed = 0;
				}
			}else{
				if(xSpeed!=0){ // Declerate
					xSpeed = 0;
				}
			}			
		}

	}
	
}
