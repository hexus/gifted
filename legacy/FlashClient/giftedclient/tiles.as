package giftedclient {
	
	import flash.display.MovieClip;
	
	public class tiles extends MovieClip {
		
		private var tileRef:tile;
		
		public function tiles() {
			cacheAsBitmap = true;
		}
		
		public function set data(t:tile){
			tileRef = t;
		}
		public function get data(){ return tileRef; }
		
		
	}
	
}
