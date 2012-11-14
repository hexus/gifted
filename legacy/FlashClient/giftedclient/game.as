// Document Class
// GIFTED MULTIPLAYER
package giftedclient {
	import flash.display.*;
	import flash.events.*;
	import flash.net.*;
	import flash.ui.*;
	import flash.geom.Rectangle;
	import flash.system.Security;
	import giftedclient.*;
	import MD5;
	import BasicInfo;
	import giftedclient.sp.nonsock;
	
	Security.allowDomain("nova.hex72.com");
	
	public class game extends MovieClip {
		
		// Globals
		private static var _glob:game;
		public static function get glob():game {return _glob;};
		public static var setting:Object; 
		
		// Main entities of the game interface
		public static var gSocket:sock;
		public static function get gsock():sock {return gSocket;}
		
		private var Login:login;
		private var Lobby:lobby;
		private var World:world;
		
		// Constructor
		public function game(){
			stop();
			// Empty the right click menu
				var CM:ContextMenu = new ContextMenu(); 
				CM.hideBuiltInItems();
				contextMenu = CM;
			// Wait for the document to finish loading
			loaderInfo.addEventListener(Event.COMPLETE, init);
		}
		
		private function init(e:Event){
			_glob = this; // Yay static power
			// Specify full-screen area
				//stage.fullScreenSourceRect = new Rectangle(0,0,stage.fullScreenWidth,stage.fullScreenHeight);
				stage.scaleMode = StageScaleMode.SHOW_ALL;
			setting = new Object();
			// Initialise setting
				// Core static vars
					setting.v = "0.3.28";
					setting.debug = false;
					setting.online = true;
					setting.scrW = stage.stageWidth;
					setting.scrH = stage.stageHeight;
					setting.clockSpeed = 10; // Number of milliseconds between every game step.
					setting.tileSize = 40; // Size of tiles in units.
					setting.Map; // World map
					setting.World; // World instance
					setting.debugUi = new BasicInfo();
				// Socket related
					//setting.HostIP = "nova.hex72.com";
					//setting.HostIP = "86.27.87.175";
					setting.HostIP = "localhost";
					//setting.HostIP = "192.168.0.2";
					//setting.HostIP = "192.168.0.145";
					//setting.HostIP = "gifted-hex72.dotcloud.com"
					setting.HostPort = 7000;
					//setting.HostPort = 37955;
					setting.conError = false;
					setting.err = "Disconnected";
				// Player related
					setting.username = "Player";
					setting.userid = 0;
					// Outfit intialisation
					setting.outfit = new Object();
						setting.outfit.str = "0";
			if(setting.online){
				// Create socket
					gSocket = new sock(this); // Static Socket
				// Add its basic error listeners
					gSocket.addEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);
					gSocket.addEventListener(SecurityErrorEvent.SECURITY_ERROR, securityErrorHandler);
				// Go to login screen	
					gotoAndStop("mp");
					gotoLogin();
			}else{
				// Socket stand-in
					gotoAndStop("mp");
					gSocket = new nonsock(this);
				// Rely on world to class create map (instead of Lobby in MP)
					gotoWorld();
			}
			// Debug stats
				if(setting.debug){
					stage.addChild(setting.debugUi);
				}
		}
		
		private function delRef(ref){ // Remove display child, listeners and reference to a screen
			if(ref){
				if(contains(ref)){
					removeChild(ref);
				}
				ref.removeListeners();
				ref = null;
			}
		}
		
		public function clearScreens(){ // Remove all screens
			delRef(Login);
			delRef(Lobby);
			delRef(World);
		}
		
		public function gotoLogin(){
			clearScreens();
			Login = new login();
			addChild(Login);
		}
		
		public function gotoLobby(){
			clearScreens();
			Lobby = new lobby();
			addChild(Lobby);
		}
		
		public function gotoWorld(){
			clearScreens();
			World = new world(gSocket);
			setting.World = World;
			addChild(World);
		}
		
		public static function fullScreen(b:Boolean){
			if(b){
				glob.stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;
			}else{
				glob.stage.displayState = StageDisplayState.NORMAL;
			}
		}
		
		public static function fullScreenToggle(){
			if(glob.stage.displayState == StageDisplayState.FULL_SCREEN){
				glob.stage.displayState = StageDisplayState.NORMAL;
			}else{
				glob.stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;
			}
		}
		
		public static function toggleDebugUi(){
			if(glob.stage.contains(setting.debugUi)){
				glob.stage.removeChild(setting.debugUi);
			}else{
				glob.stage.addChild(setting.debugUi);
			}
		}
		
		public static function chr0():String{
			return String.fromCharCode(0);
		}
		
		public function send(data:String):void {
			gSocket.sendStr(data);
		}
		
		public function ioErrorHandler(event:IOErrorEvent):void {
			trace("io: " + event);
		}
		
		public function securityErrorHandler(event:SecurityErrorEvent):void {
			trace("security: " + event);
			if(!setting.conError){
				setting.conError = true;
				setting.err = "Could not connect to server";
			}
			gotoLogin();
		}		
	}
}