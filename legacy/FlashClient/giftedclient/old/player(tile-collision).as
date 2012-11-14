package giftedclient {
	// Imports
	import flash.display.MovieClip;
	import flash.events.Event;
    import flash.utils.Timer;
    import flash.events.TimerEvent;
	import flash.net.*;
	import giftedclient.tile;
	import giftedclient.maps;
	import giftedclient.timerCollection;
	import gs.TweenLite;
	import gs.easing.*
	
	// Start class
	public class player extends MovieClip{
		
		private var _id:Number;
		public var Name:String;
		private var timer:Timer,
					_sock:sock,
					_container:MovieClip;
		private var xSpeed:Number = 0,
					xLimit:Number = 6,
					xAccel:Number = 6,
					direction:Number = 1,
					gravity:Number = 2,
					ySpeed:Number = 0,
					yLimit:Number = 10,
					jumpStr:Number = 20;
		
		/* MoveTo globals
		private var moveX:Number = -1, moveY:Number = -1; // coords
		private var moveXrel:Number = 0, moveYrel:Number = 0; // relative*/
		
		// MoveToEase globals
		private var easeX:Number = -1, easeY:Number = -1; // coords
		private var easeXt:Number = -1, easeYt:Number = -1; // temp/old coords (used to compare with new)
		private var easeXnew:Boolean = true, easeYnew:Boolean = true; // new ease coords?
		private var easeXrel:Number = 0, easeYrel:Number = 0; // relative
		private var easeXrem:Number = 0, easeYrem:Number = 0; // remaining
		private var easeXdir:Number, easeYdir:Number; // positive or negative
		
		private var stopSend:Boolean = false;
		public var thisPlayer:Boolean = false; // Is this object the current player?
		// Left, right, moving
			public var moveLeft:Boolean = false;
			public var moveRight:Boolean = false;
			public var moveUp:Boolean = false;
			public var moveDown:Boolean = false;
			public var moving:Boolean;
		// Jump, on floor
			private var _jump:Boolean = false;
			public var onFloor:Boolean = false;
		
		// Map reference and tile heights
			private var _map:maps;
			private var _tileH:Number;
			private var _tileW:Number;
			
		// Outfit related
			private var outfit = new Object();
		
		// Temp
			private var stream:Number = 0;
			private var streamx:Number = 0; // Last x position streamed
			private var streamy:Number = 0; // Last y position streamed
		
		// Constructor
		public function player(container:MovieClip, gid:Number, uName:String, uOutfit:String="", thisPlay:Boolean=false) {
			_container = container;
			_sock = game.gsock;
			_map = container.Map;
			_tileH = _map._tileH;
			_tileW = _map._tileW;
			_id = gid;
			Name = uName; trace("New Player: " + Name);
			outfit.str = uOutfit;
			thisPlayer = thisPlay;
			timer = new Timer(30,0);
			timer.addEventListener(TimerEvent.TIMER, onTimer);
			timer.start();
			addEventListener(Event.ADDED_TO_STAGE,init);
		}
		
		public function init(e:Event){
			setOutfit(outfit.str);
			removeEventListener(Event.ADDED_TO_STAGE,init);
		}
		
		public function Unspawn() {
			trace("Player removed");
			_container.removeChild(this);
		}		
		
		public function Spawn() {
			trace("Player spawned");
			_container.addChild(this);
			this.x += _container.getChildByName("spawn").x;
			this.y += _container.getChildByName("spawn").y;
			/*trace("Player X: " + this.x);
			trace("Player Y: " + this.y);
			trace("Container X: " + _container.x);
			trace("Container Y: " + _container.y);*/
			setOutfit();
		}
		
		public function setAnim(frame){
			if(char.currentFrameLabel==frame || char.currentFrame==frame){
				// Already on this animation
			}else{
				char.gotoAndStop(frame);
				setOutfit();
			}
		}
		
		public function setOutfit(outfitStr:String = ""){
			if(outfitStr.length>0){ // Store changes in within this player object
				outfit.head = outfitStr.substr(0,1); // Extracts player headwear selection
			}
			trace("BOOM outfit change: " + outfitStr);
			if(char){ // Make visible changes to stage child
				//if(outfit.head>0 || outfit.head!="none"){char.head.visible = false;} // Hide head
				char.head.wear.gotoAndStop(outfit.head); // Update active display object
			}
		}
		
		public function Say(str){
			chatBubble.say(str);
		}		
		
		public function MoveTo(xcord:Number = -1, ycord:Number = -1, ease:Boolean=true) {
			if(ease){
				easeX = xcord;
				easeY = ycord;
			}else{
				if(xcord>-1){this.x = xcord};
				if(ycord>-1){this.y = ycord};
			}
			//if(ycord>-1){this.y = ycord};
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
		
		public function getx():Number {
			return this.x + _container.x;
		}
		
		public function gety():Number {
			return this.y + _container.y;
		}
		
		private function send(data:String):void {
			if(thisPlayer){_sock.send(data);}
		}
		
		private function chkSolid(xEle:Number, yEle:Number):Boolean{ // Check map array for tile
			if(_map.solid.indexOf(_map.mapArr[yEle][xEle])>-1){
				return true;
			}else{
				return false;
			}
		}		
		
		private function onTimer(event:TimerEvent):void {
			var Ty:Number = this.y-(this.hitbox.height/2);
			var By:Number = this.y+(this.hitbox.height/2);			
			var Lx:Number = this.x-(this.hitbox.width/2);
			var Rx:Number = this.x+(this.hitbox.width/2);
			
			/* These variables predict which tile the character would be in were it to continue moving */
			/* They are used for checking ahead with the axis in question */
			/* They are divided by the tile sizes in order to aquire the array positions to check */
			var pTy:Number;
			var pBy:Number;
			if(ySpeed!=0){
				pTy = Math.floor((Ty+ySpeed)/_tileH);
				pBy = Math.floor((By+ySpeed)/_tileH);
			}else{
				pTy = Math.floor((Ty-jumpStr)/_tileH);
				pBy = Math.floor((By+jumpStr)/_tileH);
			}
			
			var pLx:Number;
			var pRx:Number;
			if(xSpeed!=0){
				pLx = Math.floor((Lx-xSpeed)/_tileW);
				pRx = Math.floor((Rx+xSpeed)/_tileW);
			}else{
				pLx = Math.floor((Lx-xAccel)/_tileW);
				pRx = Math.floor((Rx+xAccel)/_tileW);
			}
			
			
			
			var cenU:Number = Math.floor(Ty/_tileH);
			var cenD:Number = Math.floor(By/_tileH);
			var cenL:Number = Math.floor(Lx/_tileW);
			var cenR:Number = Math.floor(Rx/_tileW);
			var cenX:Number = Math.floor((this.x/_tileW)); // Center of the object
			var cenY:Number = Math.floor((this.y/_tileH));
			
			//Y
			if(!chkSolid(cenL,pBy) && !chkSolid(cenR,pBy)){ // In mid-air
				onFloor = false;
				if((ySpeed+gravity)<=yLimit){
					ySpeed += gravity;
				}
				if(_jump && !thisPlayer){
					ySpeed = 0 - jumpStr;
					_jump = false;
				}
				if(ySpeed<=0){ // if in midair and travellin upwards, stop dis shit
					if(chkSolid(cenL,pTy) || chkSolid(cenR,pTy) || chkSolid(cenX,pTy)){
						/*
						var sety;
						if(chkSolid(cenL,pTy)){
							sety = pTy;
						}else if(chkSolid(cenR,pTy)){
							sety = pTy;
						}else if(chkSolid(cenX,pTy)){
							sety = pTy;
						}
						*/
						// Now THIS is efficient
						this.y = (pTy * _tileH + (_tileH * 1.5));
						ySpeed = 0;
					}
				}
			}else{ // On a surface
				onFloor = true;
				if(ySpeed>=0){
					if(chkSolid(cenL,pBy) || chkSolid(cenR,pBy) || chkSolid(cenX,pBy)){
						/*
						var ychild;
						if(chkSolid(cenX,pBy)){
							ychild = _container.getChildByName("t_"+cenX+"_"+pBy);
						}else if(chkSolid(cenL,pBy)){
							ychild = _container.getChildByName("t_"+cenL+"_"+pBy);
						}else if(chkSolid(cenR,pBy)){
							ychild = _container.getChildByName("t_"+cenR+"_"+pBy);
						}
						this.y = ychild.y-(ychild.hitbox.height/2)-(Math.floor(this.hitbox.height/2)+1);
						*/
						this.y = (pBy * _tileH) - _tileH/2;
					}
				}
				if(ySpeed!=0){
					ySpeed = 0;
					send("/my " + this.y);
				}
				if(_jump){
					if(!chkSolid(cenL,pTy) && !chkSolid(cenR,pTy)){
						var jumpdir;
						if(moveLeft || moveRight){
							jumpdir = direction;
						}else{
							jumpdir = 0;
						}
						ySpeed -= jumpStr;
						send("/mj " + jumpdir);
					}
					_jump = false;
				}
			}
			
			this.y += ySpeed;

			//X
			var _moving:Boolean;
			
			if(moveLeft || moveRight){
				_moving = true;
			}
			
			moving = _moving;
			
			if(moving){
				stopSend = true;
				var doMove:Boolean = true
				var xchild;
				if(xSpeed<xLimit){ // Accelerate
					xSpeed += xAccel;
				}
				if(moveRight){ // Moving Right
					if(!moveLeft){ 
						// Collision checks and movement
						if(!chkSolid(pRx,cenU) && !chkSolid(pRx,cenD)  && !chkSolid(pRx, cenY)){
							doMove = true;
							if(doMove){
								this.x += xSpeed;
							}else{
								xSpeed = 0;
							}
							direction = 1;
						}else{
							 xchild = _container.getChildByName("t_"+pRx+"_"+cenY);
							 if(chkSolid(pRx,cenY)){
								this.x = xchild.x-(xchild.hitbox.width/2)-(Math.ceil(this.hitbox.width/2));
							 }
						}
						// Animation
						this.char.scaleX = 1;
						if(onFloor){
							setAnim("running");
						}
					}
				}else if(moveLeft){ // Moving Left
					if(!moveRight){
						if(!chkSolid(pLx,cenU) && !chkSolid(pLx,cenD) && !chkSolid(pLx, cenY)){
							doMove = true;
							if(doMove){
								this.x -= xSpeed;
							}else{
								xSpeed = 0;
							}
							direction = -1;
						}else{
							xchild = _container.getChildByName("t_"+pLx+"_"+cenY);
							if(chkSolid(pLx,cenY)){
								this.x = xchild.x+(xchild.hitbox.width/2)+(Math.ceil(this.hitbox.width/2));
							}
						}
						// Animation
						this.char.scaleX = -1;
						if(onFloor){
							setAnim("running");
						}						
					}
				}
			}else{
				if(xSpeed>0){ // Decelerate
					xSpeed -= xAccel;
					if(direction==1){
						this.x -= xSpeed;
					}else if(direction==-1){
						this.x += xSpeed;
					}
				}else{
					if(onFloor && easeX<0){
						setAnim("static");
					}
				}
			}
			
			// X MoveTo Ease
			if(easeX>-1){
				var espeed = xLimit; // Ease at maximum speed
				if(easeX!=easeXt){easeXnew = true;}; // Check if ease has changed
				if(easeXnew){ // If this is a new coordinate
					easeXnew = false; // Make sure that the following variables are not calculated again until new coord
					easeXt = easeX; // Store coord to compare this
					easeXrel = Math.abs(this.x-easeX); // Relative distance
					easeXrem = easeXrel; // Remaining
					if(this.x<easeX){ 
						easeXdir = 1; // Direction left
					}else if(this.x>easeX){ 
						easeXdir = -1; // Direction right
					}
				}
				if(easeXrem>espeed && easeXrem<_tileW*1.5){ // If there is enough distance remaining, but not too much, ease
					// Normal easing
					if(easeXdir < 0 ){
						this.x -= espeed;
					}else if(easeXdir > 0){
						this.x += espeed;
					}
					easeXrem -= espeed;
					setAnim("running"); // Give the illusion of continued motion
					if(easeXrem>espeed*2 && !moving){
						this.char.scaleX = easeXdir;
					}
				}else{ // Easing completed
					if(!moving){ // If not in motion
						if(easeXdir == -1){ // Teleport the remaining distance ( finish the ease)
							this.x -= easeXrem;
						}else if(easeXdir == 1){
							this.x += easeXrem;
						}
						// Reinitialise variables
						easeX = -1; 
						easeXt = -1;
						easeXnew = true;
						easeXrel = 0;
						easeXrem = 0;
						easeXdir = 0;
						if(onFloor){setAnim("static");}
						this.char.scaleX = direction; // Face character in original direction (before ease)
					}
				}
			}
			
			// Y MoveTo Ease
			if(easeY>-1){
				var espeedy = yLimit/4; // Ease speed based on maximum Y speed
				if(easeY!=easeYt){easeYnew = true;}; // Check if ease has changed
				if(easeYnew){ // If this is a new coordinate
					easeYnew = false; // Make sure that the following variables are not calculated again until new coord
					easeYt = easeY; // Store coord to compare this
					easeYrel = Math.abs(this.y-easeY); // Relative distance
					easeYrem = easeYrel; // Remaining
					if(this.y<easeY){ 
						easeYdir = 1; // Direction left
					}else if(this.y>easeY){ 
						easeYdir = -1; // Direction right
					}
				}
				if(easeYrem>espeedy && easeYrem<_tileH*1.5){ // If there is enough distance remaining, but not too much, ease
					if(easeYdir == -1){
						this.y -= espeedy;
					}else if(easeYdir == 1){
						this.y += espeedy;
					}
					easeYrem -= espeedy;
				}else{ // Easing completed
					if(!moving){
						if(easeYdir == -1){ // Teleport the remaining (finish the ease)
							this.y -= easeYrem; // Up
						}else if(easeYdir == 1){
							//this.y += easeYrem; // Down
						}
						// Reinitialise variables
						easeY = -1; 
						easeYt = -1;
						easeYnew = true;
						easeYrel = 0;
						easeYrem = 0;
						easeYdir = 0;
					}
				}
			}
			
			// Movement Stream
			// // && = only stream when both axis change, || = always stream
			if(thisPlayer){
				stream++;
				if(moving){
					if(stream>3){
						if(this.x!=streamx || this.y!=streamy){
							send("/me " + this.x + " " + this.y);
								streamx = this.x;
								streamy = this.y;
						}
						stream = 0;
					}
				}else{
					if(stream>19){
						if(this.x!=streamx || this.y!=streamy){
							send("/m " + this.x + " " + this.y);
								streamx = this.x;
								streamy = this.y;
						}
						stream = 0;
					}
				}
			}
		}
	}
}