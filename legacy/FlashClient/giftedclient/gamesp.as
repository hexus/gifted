// Document Class
// GIFTED SINGLEPLAYER
package giftedclient {
	//Security.allowDomain("80.6.236.173");
	import flash.display.*;
	import flash.events.*;
	import flash.net.*;
	import flash.ui.*;
	import flash.geom.Rectangle;
	import giftedclient.*;
	import giftedclient.sp.*;
	import MD5;
	
	public class game extends MovieClip {
		
		// Globals
		private static var _glob:game;
		public static function get glob():game {return _glob;};
		public static var setting:Object; 
		
		// Main entities of the game interface
		public static var gSocket:nonsock;
		public static function get gsock():nonsock {return gSocket;}
		//public var gId:Number;
		//public var gName:String;
		
		private var World:world;
		
		// Constructor
		public function game(){
			gotoAndStop("mp");
			// Empty the right click menu
				var CM:ContextMenu = new ContextMenu(); 
				CM.hideBuiltInItems();
				contextMenu = CM;
			// Wait for the document to finish loading
			loaderInfo.addEventListener(Event.COMPLETE, init);
		}
		
		private function init(e:Event){
			// Specify full-screen area
				//stage.fullScreenSourceRect = new Rectangle(0,0,stage.stageWidth,stage.stageHeight);
				//stage.scaleMode = StageScaleMode.NO_BORDER;
			setting = new Object();
			// Initialise setting
				// Core static vars
					setting.v = "0.3.3";
					setting.debug = false;
					setting.online = true;
					setting.scrW = this.stage.stageWidth;
					setting.scrH = this.stage.stageHeight;					
					setting.clockSpeed = 20; // Number of milliseconds between every game step.
					setting.tileSize = 62;
				// Socket related
					setting.conError = false;
					setting.err = "Offline Game";
				// Player related
					setting.username = "Player";
					setting.userid = 0;
					// Outfit intialisation
					setting.outfit = new Object();
						setting.outfit.str = "2";
			gSocket = new nonsock(this);
			gotoWorld();
		}
		
		private function delRef(ref){
			if(ref){
				if(contains(ref)){
					removeChild(ref);
				}
				ref = null;
			}
		}
		
		public function clearScreens(){
			delRef(World);
		}
		
		public function gotoWorld(){
			clearScreens();
			World = new world(gSocket);
			addChild(World);
		}
		
		public static function chr0():String{
			return String.fromCharCode(0);
		}
		
		public function send(data:String):void {
			gSocket.sendStr(data);
		}
	}
}