package giftedclient {
	
	//import flash.display.MovieClip;
	
	public class item extends giftedclient.physObj {
		
		public static var types:Object = {0:"Weapon",1:"Consumable",2:"Artifact",3:"Apparel"};
		
		private var id:int;
		private var clip:MovieClip;
		
		public function item(t:Number) {
			if(types[t]){ gotoAndStop(t+1); } // Set item type
			clip = MovieClip(getChildByName("itemClip"));
			hitbox = MovieClip(getChildByName("itemHitbox"));
			Accel = 1;
		}
		
		public function setFrame(n:Number){
			clip.gotoAndStop(n);
		}
		
		public override function tick():void{
			if(Math.abs(xSpeed)>Accel+1){
				xSpeed -= direction*Accel; // Slow down
			}else if(Accel!=0){
				xSpeed = 0;
			}
			super.tick();
		}
		
	}
	
}
