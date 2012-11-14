package giftedclient {
	
	import flash.events.Event;
	import flash.utils.getTimer;
	
	public class character extends physObj {

		public var Name:String = "...";
		protected var char, upDown = false, moveLimit:Number = 8;

	// Movement
		public var 	moveLeft:Boolean = false,
					moveRight:Boolean = false,
					moveUp:Boolean = false,
					moveDown:Boolean = false,
					jump:Boolean = false;

		public function character() {
			super();
			xLimit = 20;
			Accel = 1;
			yLimit = 20;
			flySpeed = 12;
			jumpStr = 13;
			hitbox = MovieClip(getChildByName("charHitbox"));
		}
		
		protected override function init(e:Event){
			super.init(e);
		}
		
		public override function fly(){ flying = !isFlying; ySpeed %= flySpeed; flyDir = ySpeed>=0 ? 1 : -1; }
		
		public function Jump(){
			if(onFloor && !isFlying){jump = true;}
		}
		
		public override function setDir(dir:Number){
			super.setDir(dir);
			char.scaleX = direction;
		}
		
		public override function tick():void{

			if(moveUp && onFloor && !upDown){
				jump = true;
				upDown = true;
			}
			
			if(upDown && !moveUp){
				upDown = false;
			}
	
			// Movement booleans
			if((moveLeft && !moveRight) || (moveRight && !moveLeft)){
				direction = moveLeft ? -1 : 1;
				xSpeed += direction*Accel;
				for(var l=0;l<2;l++){xSpeed -= Math.abs(xSpeed) > moveLimit ? direction*Accel : 0;}
			}else if(Math.abs(xSpeed)>Accel){
				xSpeed -= direction*Accel; // Slow down if not moving
			}else{
				xSpeed = 0; // Reach zero instead of going on forever
			}
			
			// Y booleans
			if(!isFlying){
				if(jump){
					ySpeed = -jumpStr;
					jump = false;
				}
			}else{ // Same smoothing as X axis when flying
				if((moveUp && !moveDown) || (!moveUp && moveDown)){
					flyDir = (moveUp) ? -1 : 1;
					ySpeed += flyDir*Accel;
				}else if(Math.abs(ySpeed)>Accel){
					ySpeed -= flyDir*Accel;
				}else{
					ySpeed = 0;
				}
			}
			
			// Calculate physics step
			super.tick();
			
		}

	}
	
}
