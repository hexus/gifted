package giftedclient {
	
	public class effect {

		// Static
		public static var durationTypes:Object = {0:"Instant",1:"Temporary",2:"Permanent"};
		public static var types:Object = {0:"Health",1:"Defense",2:"Speed",3:"ForceX",4:"ForceY",5:"Visibility"};
		public static var amountTypes:Object = {0:"Modifier",1:"Multiplier",2:"Setter"};
		
		// Private
		private var _durationType:Number, // [type] duration effect
					_duration:Number = 1, // If temporary, use this value
					_durationCount:Number = _duration, // For counting
					_type:Number, // 
					_amountType:Number, // Modify/multiply
					_amount:Number; // By this amount
					
		public var originalValue; // Slot for holding the value before the change
		
		// Public getters/setters
		public function get durationType(){ return _durationType; }
		public function set durationType(v:Number){ if(durationTypes[v]){ _durationType = v; } }
		
		public function get duration(){ return _duration; }
		public function set duration(v:Number){ _duration = v >= 0 ? v : 0; _durationCount = _duration; }
		
		public function get durationCount(){ return _durationCount; }
		public function set durationCount(v:Number){ _durationCount = v >= 0 ? v : 0; }
		
		public function get type(){ return _type; }
		public function set type(v:Number){ if(types[v]){ _type = v; } }
		
		public function get amountType(){ return _amountType; }
		public function set amountType(v:Number){ if(amountTypes[v]){ _amountType = v; } }
		
		public function get amount(){ return _amount; }
		public function set amount(v:Number){  _amount = v; }

		// Constructor
		public function effect(t:Number,v:Number,d:Number=1,a:Number=0) { // Duration, type, amount, amountType
			type = t;
			amount = v;
			duration = d;
			amountType = a;
		}

	}
	
}
