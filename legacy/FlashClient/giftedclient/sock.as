package giftedclient{
	import flash.net.*;
	import flash.events.*;
	import giftedclient.*;
	public class sock extends XMLSocket{
		
		// Now very slim.
		// For static use.
		
		private var _g; // 
		
		public function sock(gRef:game):void{
			_g = gRef;
		}
		
		public function sendStr(... data){
			if(connected){
				var str = "";
				for(var i=0;i<data.length;i++){
					str += data[i] + game.chr0();
				}
				this.send(str); // Send to socket buffer
			}
		}
		
		public function gotoLogin(){_g.gotoLogin();}
		public function gotoLobby(){_g.gotoLobby();}
		public function gotoWorld(){_g.gotoWorld();}
		
	}
}