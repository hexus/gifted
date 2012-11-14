package giftedclient {
	import flash.display.MovieClip;
	import flash.events.*;
	import flash.ui.Keyboard;
	import flash.net.XMLSocket;
	import giftedclient.*;
	public class login extends MovieClip{
		
		private var _sock:sock;
		
		public function login(){
			_sock = game.gsock;
			this.addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event){
			trace("Login screen open")
			this.x = 423;
			this.y = 180;
			addListeners();
			txtUser.enabled = true;
			txtPass.enabled = true;
			btnLogin.enabled = true;
			if(game.setting.conError){ // Write any errors to status text
				lblStatus.text = game.setting.err;
				game.setting.conError = false;
			}
			if(game.setting.debug && !game.setting.conError){ // Debug: Auto login for me. :)
				txtUser.text = "Debugger";
				txtPass.text = "";
				//Attempt(); // Automatically login
			}
			removeEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		public function addListeners(){
			_sock.addEventListener(Event.CONNECT, connectHandler);
			_sock.addEventListener(DataEvent.DATA, DataHandler);
			_sock.addEventListener(Event.CLOSE, closeHandler);
			btnLogin.addEventListener(MouseEvent.CLICK, SendHandler);
			addEventListener(KeyboardEvent.KEY_DOWN, KeyDown);
		}
		
		public function removeListeners(){
			_sock.removeEventListener(Event.CONNECT, connectHandler);
			_sock.removeEventListener(DataEvent.DATA, DataHandler);
			_sock.removeEventListener(Event.CLOSE, closeHandler);
			btnLogin.removeEventListener(MouseEvent.CLICK, SendHandler);
			removeEventListener(KeyboardEvent.KEY_DOWN, KeyDown);
		}
		
		private function connectHandler(event:Event):void {
			trace("Connected");
			send("/login-pls");
			//btnSend.enabled=true;
		}
		
		private function closeHandler(event:Event):void {
			//trace("closeHandler: " + event);
			if(!game.setting.conError){game.setting.err = "Diconnected";}else{game.setting.conError = true;}; // Default message
		}		
		
		private function send(str:String){
			_sock.sendStr(str);
		}
		
		private function DataHandler(event:DataEvent){
			var data:String = event.data;
			data = StringUtils.trim(data);
			var datar:Array = data.split(" ",2);
			datar[1] = data.substr(datar[0].length + 1);
			trace("Data: " + data);
			trace("Data(0): " + datar[0]);
			trace("Data(1): " + datar[1]);
			switch(datar[0]){
				case "/login-request":
					lblStatus.text = "Logging in...";
					var rUsername = txtUser.text;
					var rPassword = StringUtils.trim(MD5.encrypt(txtPass.text));
					var rStr = "/login " + rUsername + " " + rPassword;
					send(rStr);
					break;
				case "/login-accept":
					removeListeners();
					game.setting.username = rUsername;
					_sock.gotoLobby();
					break;
				case "/login-reject":
					if(datar[1]){
						lblStatus.text = datar[1];
					}else{
						lblStatus.text = "Login rejected without reason";
					}
					game.setting.conError = true;
					Enable();
					break;
				default:
					lblStatus.text = "Server responded abnormally";
					trace("Unrecognised: " + data);
			}
		}
		
		private function SendHandler(eventObj:MouseEvent):void {
			Attempt();
		}
		
		private function KeyDown(event:KeyboardEvent):void {
			// Enter key to login
			if (btnLogin.enabled==true) {
				if (event.keyCode==Keyboard.ENTER) {
					Attempt();
				}
			}
		}
		
		private function Enable(){
			txtUser.enabled = true;
			txtPass.enabled = true;
			btnLogin.enabled = true;			
		}
		
		private function Attempt(){
			if(txtUser.length > 0){
				game.setting.err = "";
				game.setting.conError = false;
				trace("Connecting...");
				lblStatus.text = "Connecting...";
				_sock.connect(game.setting.HostIP, game.setting.HostPort);
				txtUser.enabled = false;
				txtPass.enabled = false;
				btnLogin.enabled = false;
			}else{
				lblStatus.text = "No details provided...";
			}
		}
		
	}
}