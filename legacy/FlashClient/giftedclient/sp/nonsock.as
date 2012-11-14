package giftedclient.sp {
	import giftedclient.game;
	import giftedclient.sock;
	public class nonsock extends sock{
		private var _g;
		public function nonsock(gRef:game):void{
			super(gRef);
			_g = gRef;
		}
		override public function sendStr(... data) {
			//trace("Offline socket send caught: " + data);
		}
		override public function gotoLogin(){} // Emptied multiplayer functions
		override public function gotoLobby(){}
		override public function gotoWorld(){_g.gotoWorld();}
	}
	
}
