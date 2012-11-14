package giftedclient {
	
	import giftedclient.effect;
	
	public class skill {
		
		public static var types:Object = {0:"Self",1:"Melee",2:"Projectile",3:"Target",4:"Area"};
		private var name:String = "Skill";
		private var type:Number = 0;
		private var coolDown = 0; // in steps
		private var powerRequired:Number = 0;
		private var hasEffects:Vector.<effect> = new Vector.<effect>(); // Effect skill triggers, if any
		private var animation:Number; // Animation skill triggers, if any

		public function skill(n:String, t:Number = 0, pReq:Number = 0 ) { // Defaults to natural self casting
			name = n;
			if(types[t]){ type = t; }
			if(power.type[pReq]){
				powerRequired = pReq;
			}
		}
		
		public function addEffect(e:effect){
			hasEffects.push(e);
		}
		
		public function getEffects(){
			var a:Array = [];
			for(var e:effect in hasEffects){
				a.push(e);
			}
			return a;
		}

	}
	
}
