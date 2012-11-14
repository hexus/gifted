package giftedclient {
	import flash.display.MovieClip;
	import flash.ui.Keyboard;
	import flash.events.*;
	import flash.net.XMLSocket;
	import giftedclient.*;
	
	public class lobby extends MovieClip{
		
		private var _sock:sock;
		
		private var vScroll:int = 1;
		//var v:String = root.loaderInfo.parameters.v;
		private var id:int;
		private var uname:String;
		private var users:Object = {};
		private var map:maps;
		private var hasMap = false;
		private var cScrAlpha = 90;
		public var charScr;		
		
		public function lobby(){
			// Initial tasks
			_sock = game.gsock;
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event){
			addListeners();
			x = 0;
			y = 0;
			lblVer.text = "Client Version: " + game.setting.v;
			lstUsers.selectable = false;
			btnSend.enabled = true;
			btnJoin.enabled = true;
			charScr = new charScreen();
			addChild(charScr);
			send("/r 0");
			send("/info-request");
			removeEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		public function addListeners(){
			_sock.addEventListener(DataEvent.DATA, lobbyData);
			_sock.addEventListener(Event.CLOSE, lobbyClose);
			btnSend.addEventListener(MouseEvent.CLICK, lobbySendHandler);
			btnJoin.addEventListener(MouseEvent.CLICK, lobbyJoinHandler);
			btnChar.addEventListener(MouseEvent.CLICK, editChar);
			btnLogout.addEventListener(MouseEvent.CLICK, lobbyClose);
			addEventListener(KeyboardEvent.KEY_DOWN, lobbyKeyDown);
		}
		
		public function removeListeners(){
			_sock.removeEventListener(DataEvent.DATA, lobbyData);
			_sock.removeEventListener(Event.CLOSE, lobbyClose);
			btnSend.removeEventListener(MouseEvent.CLICK, lobbySendHandler);
			btnJoin.removeEventListener(MouseEvent.CLICK, lobbyJoinHandler);
			btnChar.removeEventListener(MouseEvent.CLICK, editChar);
			btnLogout.removeEventListener(MouseEvent.CLICK, lobbyClose);
			removeEventListener(KeyboardEvent.KEY_DOWN, lobbyKeyDown);
		}		
		
		private function enterGame(){
			if(hasMap){
				game.setting.username = users[id];
				users = null;
				send("/r 1");
			}
		}
		
		function editChar(eventObj:MouseEvent){
			charScr.visible = true;
		}
		
		private function send(str:String){
			_sock.sendStr(str);
		}
		private function sendTry():void {
			var Str:String = StringUtils.trim(txtMsg.text);
			if (Str!="" && Str.charAt(0)!="/") {
				if(_sock.connected==true){
					send("/c " + Str);
					txtMsg.text="";
				}else{
					writeLine("Not connected. :(");
				}
			}
			if(Str.charAt(0)=="/"){
				var param = Str.split(" ");
				var command = param[0];
				switch(command){
					case "/test": enterGame(); break;
					case "/guests": send("/guests"); break;
				}
				txtMsg.text="";
			}
		}
		
		public function updateList():void{
			lstUsers.removeAll();
			for(var lid in users){
				lstUsers.addItem({label:users[lid], data:lid});
			}
		}
		
		private function disconnectUser(d:Number):void{
			if(users[d]){
				delete users[d];
				updateList();
			}
		}				
		
		private function clearUsers():void { // Deprecated I think?
			for(var i in users){
				delete users[i];
			}
			updateList();
		}

		private function updateScroll():void {
			txtConsole.validateNow();
			if(vScroll<txtConsole.maxVerticalScrollPosition){
				if(txtConsole.verticalScrollPosition >= vScroll-2){
					txtConsole.verticalScrollPosition = txtConsole.maxVerticalScrollPosition;
					vScroll = txtConsole.maxVerticalScrollPosition;
				}
			}
		}
		
		public function write(Str:String):void {
			txtConsole.htmlText+=Str;
			updateScroll();
		}
		
		public function writeLine(Str:String):void {
			txtConsole.htmlText+=Str+"\n";
			updateScroll();
		}
		
		// Callbacks
		private function lobbyKeyDown(event:KeyboardEvent):void {
			if (btnSend.enabled==true) {
				if (event.keyCode==Keyboard.ENTER) {
					sendTry();
				}
			}
		}
		
		private function lobbySendHandler(eventObj:MouseEvent):void {
			trace("Send clicked");
			sendTry();
		}
		
		private function lobbyJoinHandler(eventObj:MouseEvent):void {
			trace("Join clicked");
			btnJoin.enabled = false;
			send("/world-request"); // Request entire world, join when received
		}
		
		function lobbyClose(event:Event):void{
			removeListeners();
			_sock.close();
			_sock.gotoLogin();
		}
		
		function lobbyData(event:DataEvent):void {
			var data:String = event.data;
			data = StringUtils.trim(data); // Trim
			data = data.replace(String.fromCharCode(0), "");
			trace("Data: " + data); // Trace
			lobbyHandler(data); // Process
		}
		
		function lobbyHandler(data:String):void{
			var show:Boolean = false;
			var datar:Array=data.split(" ");
			var getid = datar[1];
			switch (datar[0]) {
				case "/ping" :
					send("/pong");
					break;
				case "/id" :
					id = getid;
					game.setting.userid = id;
					break;
				case "/uc" :
					users[getid] = datar[2] || "...";
					updateList();
					break;
				case "/ud" :
					disconnectUser(getid);
					break;
				case "/uv" :
					var v:String = datar[2]; // Variable
					var d:String = datar[3]; // Data
					switch(v){
						case "name":
							if(users[getid]!=null){users[getid] = d;} // Update user name
							break;
						case "outfit":
							charScr.Set(d);
							charScr.Save(true); // Save without sending back
					}
					updateList();
					break;
				case "/r" :
					if(getid==id){
						removeListeners();
						if(datar[2]==1){_sock.gotoWorld();} // Accepted into world
					}else{
						disconnectUser(getid); // User has left
						writeLine(users[getid] + " has entered the world.");
					}
					break;
				case "/sm" :
					writeLine("<font size=\"14\">Server</font>: <b>" + data.substring(4) + "</b>");
					break;
				case "/motd" :
					writeLine("<b>Server message:</b> " + data.substring(6));
					break;
				case "/c" :
					writeLine("<b>" + users[datar[1]] + "</b>: " + data.substring(datar[0].length + datar[1].length + 2));
					break;
				case "/k" :
					game.setting.conError = true;
					game.setting.err = "Kicked from the server";					
					break;
				case "/ka":
					game.setting.conError = true;
					game.setting.err = "Every player was kicked";
					break;
				case "/heartbeat" :
					trace("Heartbeat...");
					break;
				case "/ws" : // (World send) Create a new world and wait for region info
					game.setting.Map = new maps(datar[4],
												datar[1], // World name
												datar[2], //  World size
												datar[3]); // Region size
					game.setting.Map.setSpawn(datar[5],datar[6]);
					write("Loading world: " + datar[1]);
					break;
				case "/wd" : // (World data) Entire world in one string.. ooh
					game.setting.Map.setMap(datar[1]);
					write("World received.");
					hasMap = true;
					enterGame();
					break;
				case "/wr" : // (World region) Region info
					game.setting.Map.setRegion(datar[1],datar[2],datar[3].split(",")); // Pass the region to the global map object
					break;
				case "/we" : // (World end) All world info received

					break;
				default : trace("Unrecognized: " + data);
			}
			if(data!=""&&show==true){ // Show received data
				writeLine(data);
			}
		}
		
	}
}