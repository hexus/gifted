package giftedclient {
	
	import flash.display.MovieClip;
	import giftedclient.tiles;

	public class tile {
		
		private var xCord:Number;
		private var yCord:Number;
		private var tileNo:Number = 0;
		private var mc:tiles;
		public static var scale:Number;		
		
		public function tile(){
			tile.scale = game.setting.tileSize/62;
		}
		
		public function set clip(t:tiles){
			mc = t;
			if(mc!=null){
				mc.gotoAndStop(tileNo);
				mc.x = x;
				mc.y = y;
				mc.scaleX = mc.scaleY = tile.scale;
				mc.data = this;
			}
		}
		public function get clip(){return mc;}
		
		public function set val(n:Number){ tileNo = n; if(mc){mc.gotoAndStop(tileNo);} }
		public function get val(){ return tileNo; }
		
		public function set x(n:Number){xCord = n; if(mc){mc.x = xCord;} }
		public function set y(n:Number){yCord = n; if(mc){mc.y = yCord;} }
		public function get x(){return xCord;}
		public function get y(){return yCord;}
	}
}