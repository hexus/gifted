package giftedclient{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.ui.Keyboard;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.events.TimerEvent;
	import flash.events.DataEvent;
	import flash.utils.Timer;
	import flash.filters.DropShadowFilter;
	
	import giftedclient.player;
	import giftedclient.maps;
	import giftedclient.charScreen;
	import giftedclient.worldBg;
	import flash.events.MouseEvent;
	
	public class world extends Sprite{
	
		private var _sock:sock;
		private var timer = new Timer(game.setting.clockSpeed,0); // Game clock
		
		// Scrolling
		private var scrollX = 0, scrollY = 0, scrollSensitivity = 0.36, scrollTarget;
		private var control:Boolean = true; // Enables/disables key controls
		public var ui:worldUi; // Interface object
		public var debugVars = new Object();
		public var Map:maps;
		private var bg:worldBg;
		private var updateRate = 10; // Speed in steps at which updateDisplay is called
		private var updateCount = 0; // Count of steps
		
		// Player
		private var id;
		private var username;
		private var outfit;
		var Players:Object = {}; // Player collection
		var Player:player; // Player instance
		
		// Controls
		var leftDown:Boolean = false;
		var rightDown:Boolean = false;
		var upDown:Boolean = false;
		var downDown:Boolean = false;
		
		// Ping
		private var pingSpeed = 50, // Steps
					pingCount = 0,
					pingSample = 3,
					pingTime,
					pingArray = new Array();
		public var 	ping = 0;
		
		public function world(sockRef:sock){ // User ID, User Interface
			_sock = sockRef;
			if(game.setting.online){
				Map = game.setting.Map;
			}else{
				Map = new maps(game.setting.tileSize, "Singleplayer");
				game.setting.Map = Map;
			}
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event){
			removeEventListener(Event.ADDED_TO_STAGE, init); // Kthx
			// Some setting initialisations
			id = game.setting.userid;
			username = game.setting.username;
			outfit = game.setting.outfit.str;
			
			if(game.setting.online){
				ui = new worldUi;
				ui.x = 1; ui.y = -1;
				this.stage.addChild(ui);
			}
			
			//bg = new worldBg();
			//addChild(bg);

			addChild(Map);
			//Map.loadmap();
			
			Player = new player(id, true);
			Player.Name = username;
			Player.setOutfit(outfit);
			Players[id] = Player; // Store in collection
			Player.Spawn(); // Spawn like a bitch
			focusOn(Player); // Focus scrolling on player
			addListeners();
			send("/m " + Player.x + " " + 0 + " " + Player.y + " " + 0);
			
			focusOn(Player,true);

			applyFilters();
			addListeners();
			
			Map.updateDisplay(Player.x,Player.y,2);
		}
		
		private function applyFilters(){
			var sh1:DropShadowFilter = new DropShadowFilter;
			with(sh1){
				blurX=6; blurY=6;
				strength=0.4; quality=4; // out of 15
				angle=45; distance=2;
				color=0x000000;
			}
			//this.Map.filters = [sh1];
			//this.Player.filters = [sh1];
		}		

		function addListeners(){
			if(game.setting.online){
				_sock.addEventListener(DataEvent.DATA, gameData);
				_sock.addEventListener(Event.CLOSE, gameClose);
				ui.btnLobby.addEventListener(MouseEvent.CLICK, lobbyButton);
			}
			stage.addEventListener(KeyboardEvent.KEY_DOWN, gameKeyDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, gameKeyUp);
			// Game tick
			timer.addEventListener(TimerEvent.TIMER, worldTick);
			timer.start();			
		}
		
		function removeListeners(){
			if(game.setting.online){
				_sock.removeEventListener(DataEvent.DATA, gameData);
				_sock.removeEventListener(Event.CLOSE, gameClose);
			}
			if(stage){
				stage.removeEventListener(KeyboardEvent.KEY_DOWN, gameKeyDown);
				stage.removeEventListener(KeyboardEvent.KEY_UP, gameKeyUp);
				this.stage.removeChild(ui);
			}
			timer.removeEventListener(TimerEvent.TIMER, worldTick);
		}
		
		function worldTick(e:TimerEvent){
			for (var key:String in Players){ Players[key].playerTick();	} // Tick players
			iScroll(); // Scroll viewport (move world object)
			wrapWorld(); // Shift back the infinite world at each edge
			if(pingCount>=pingSpeed){ // Send a ping request
				send("/ping");
				pingTime = new Date().getTime();
				pingCount=0;
			}else{
				pingCount++;
			}
			if(game.setting.debug){ // Debug display
				debugVars = {"X":Player.x,"Y":Player.y,"Ping":ping,"Flying":Player.flying};
				var debugStr = ""; for(var k in debugVars){ debugStr += k + ": " + debugVars[k] + "\n"; }
				game.setting.debugUi.text = debugStr;
			}
		}		
		
		function focusOn(target:MovieClip,lock=false):MovieClip{
			if(game.setting.World.contains(target)){
				if(lock){
					x = 0 - (target.x * scaleX) + (game.setting.scrW*0.5);
					y = 0 - (target.y * scaleY) + (game.setting.scrH*0.5);
				}
				scrollTarget = target;
			}else{ // If it doesn't exist in the world
				scrollTarget = Player;
			}
			return scrollTarget;
		}
		
		function iScroll(){ // Intelligent scrolling (easing and shit)
			focusOn(scrollTarget); // Double check that it's still there
			var t = scrollTarget;
 			var getx = Math.round(scrollTarget.x + x / scaleX);
			var gety = Math.round(scrollTarget.y + y / scaleY);
			var sens = scrollSensitivity;
			var refreshDisplay = false; // Whether to update the display after scroll step
			// Scrolling
			for(var i=0;i<2;i++){ // For each axis (x,y)
				var affect,targetCord,screenSpan,scale; // Main vars
				if(i==0){ // X main vars
					affect = "x"; // Axis to affect
					scale = scaleX;
					targetCord = getx; // Relative player position
					screenSpan = game.setting.scrW / scale; // Span of axis
				}else if(i==1){	// Y main vars
					affect = "y";
					scale = scaleY
					targetCord = gety;
					screenSpan = game.setting.scrH / scale;
				}
				var screenMid = screenSpan*0.5; // Middle of the screen
				var dif = (screenMid - targetCord); // Difference between screen and player positions
				
				var sign = 0; // Positive or negative difference
				if(dif>0){ sign = 1;
				}else if(dif<0){ sign = -1; }
				
				if(Math.abs(sign*(dif*sens))>3){
					this[affect] += Math.round((dif*sens)*scale);
				}else if(scale<=1){
					this[affect] += sign*(1 * scale);
				}
				if(dif!=0){
					refreshDisplay = true;
				}
			}
			// Update tiles displayed, every updateRate ticks
			if(refreshDisplay && updateCount>updateRate){
				Map.updateDisplay(scrollTarget.x,scrollTarget.y,1);
				updateCount = 0;
				//pScroll();
			}
			updateCount++;
		}
		
		function wrapWorld(){
			var t = scrollTarget || focusOn(Player);
			var shift = 0;
			var off = 0;
			var child; // For looping through children
			
			var wFull = Map.fullWidth;
			var wHalf = Math.floor(wFull*0.5);
			var wReg = Map.rSize*Map._tileW;
			
			// Shift when child passes boundary
				for(var j=0;j<numChildren;j++){
					child = getChildAt(j);
					if(child && child!=Map){
						// Set shift amount
						if(child.x > wHalf){
							shift = -wFull; 
						}else if(child.x < -wHalf){
							shift = wFull;
						}
						
						// Set offset amount
						if(child!=t){
							if(child.x > wHalf - wReg && t.x < -wHalf + wReg){
								off = -wFull; // If child is in rightmost region and viewport in leftmost
							}else if(child.x < -wHalf + wReg && t.x > wHalf - wReg){
								off = wFull; // If child is in leftmost region and viewport in rightmost
							}
						}
						
						// Apply shift
						if(shift!=0){
							trace("from: " + child.x);
							child.x += shift; // Shift child
							trace("to:   " + child.x);
							trace(" ");
							if(child == t){ // Shift world view if child is focused
								x -= shift*scaleX;
								Map.updateDisplay(t.x,t.y,2);
							}
						}
						
						// Apply offset
						child.offset = off;
					}
				}

			// Apply projection offsets to children on opposite boundary region to viewport
				/*if(t.x < -wHalf + wReg || t.x > wHalf - wReg){
					for(var k=0;k<numChildren;k++){
						child = getChildAt(k);
						if(child && child!=Map && child!=Player){ 
							if(child.x > wHalf - wReg && t.x < -wHalf + wReg){
								off = -wFull; // If child is in rightmost region and viewport in leftmost
							}else if(child.x < -wHalf + wReg && t.x > wHalf - wReg){
								off = wFull; // If child is in leftmost region and viewport in rightmost
							}
							child.offset = off;
						}
					}
				}*/
				
		}
		
		function pScroll(){ // Scroll parallax layers (deprecated)
			bg.x = Math.floor(x*0.2);
			bg.y = Math.floor(y*0.2);
		}
		
		function pong(){
			var pongTime = new Date().getTime();
			pingArray.push(Math.floor((pongTime - pingTime) * 0.5));
			if(pingArray.length>pingSample){
				pingArray.shift(); // Remove oldest sample
				
				// Copy and sort array
				var sortArray = new Array();
				for(var num in pingArray){ sortArray.push(pingArray[num]); }
				sortArray.sort(Array.NUMERIC);				
				
				// Calculate average
				var median = Math.floor(pingSample*0.5);
				if(pingSample>=3){ // Mean from median and its neighbours
					ping = Math.round((sortArray[median-1] + sortArray[median] + sortArray[median+1]) / 3);
				}else{ // Median only
					ping = sortArray[median];
				}
			}else{ // No averaging
				ping = pongTime - pingTime;
			}
			/* 
			trace("Ping = " + ping);
			trace(pingArray);
			trace(sortArray);
			/* */
		}
		
		private function send(str:String){
			_sock.sendStr(str);
		}

		function gameLeaveToLobby():void{
			send("/r 0");
			removeListeners();
			timer.stop();
			_sock.gotoLobby();
		}

		function gameClose(event:Event):void{
			removeListeners();
			timer.stop();
			if(!game.setting.conError){
				game.setting.conError = true;
				game.setting.err = "Connection closed";
			}
			_sock.gotoLogin();
		}

		function gameData(event:DataEvent):void{
			var data:String = event.data;
			data = StringUtils.trim(data);
			data = data.replace(String.fromCharCode(0), "");
			trace("Data: " + data); // Trace
			if(data.length>0){
				gameHandler(data);
			}
		}
		
		function gameHandler(data:String = ""):void{
			var show:Boolean = false;
			var datar:Array = data.split(" ");
			var comLen = datar[0].length + 1; // Length of the command
			var getid = datar[1]; // First parameter (usually a user id)
			switch (datar[0]) {
				case "/ping":
					send("/pong");
					break;
				case "/motd" :
					ui.chatWrite("<b>Server message: " + data.substring(comLen) + "</b>");
					break;						
				case "/sm" :
					ui.chatWrite("<b><font size=\"13\">Server</font>: " + data.substring(comLen) + "</b>");
					break;				
				case "/c":
					var chatstr = data.substring((datar[0].length + datar[1].length + 2));
					ui.chatWrite("<b>" + Players[getid].Name + "</b>: " + chatstr);
					Players[getid].Say(chatstr);
					break;
				case "/uc":
					if(!Players[getid]){
						var newPlayer:player = new player(getid);
						Players[getid] = newPlayer;
					}else{
						trace("Player already connected.");
					}
					break;
				case "/ud":
					Players[getid].Unspawn();
					delete Players[getid];
					break;
				case "/us":
					Players[getid].Spawn();
					break;
				case "/uv" :
					var uid:int = datar[1]; 
					var v:String = datar[2]; // Variable
					var d:String = datar[3]; // Data					
					switch(v){
						case "name":
							Players[getid].Name = d;
							break;
						case "outfit":
							Players[getid].setOutfit(d);
							break;
						case "flying":
							Players[getid].flying = d == "true";
							break;
					}
					break;
				case "/m": // Add to movement buffer
					Players[getid].iMoveBuffer(datar[2], datar[3], datar[4], datar[5]);
					break;
				case "/mt": // Telemove
					//Players[getid].MoveTo(datar[2], datar[3], datar[4]);
					Players[getid].iMove([datar[2],0,datar[3],0]);
					Players[getid].setDir(datar[4]);
					break;
				case "/k":
					game.setting.conError = true;
					game.setting.err = "Kicked from the server";
					break;
				case "/ka":
					game.setting.conError = true;
					game.setting.err = "Every player was kicked";
					break;
				case "/kl":
					gameLeaveToLobby();
					break; 
				case "/heartbeat":
					// Just keeping the connection alive :)
					break;
				case "/pong":
					pong();
					break;
				default:
					trace("Unrecognized data: " + data);
			}
		}
		
		function controlCheck(){ // Check whether character controls should be enabled
			if(game.setting.online){
				if(ui.chatCheck){ // Check for chat if online
					control = false;
				}else{
					control = true;
				}
			}else{
				control = true;
			}
		}
		
		function lobbyButton(e:MouseEvent){
			gameLeaveToLobby();
		}
		
		function gameKeyDown(e:KeyboardEvent):void{
			var sendStr:String;
			var key = e.keyCode; // keycode
			//trace(key);
			if(control){
				switch(key){
				case 68:
					Player.moveRight = true;
					if(!rightDown){rightDown = true;}
					break;
				case 65:
					Player.moveLeft = true;
					if(!leftDown){leftDown = true;}
					break;
				case 87:
					if(!upDown){upDown = true; Player.Jump();}
					break;
				case 83:
					if(!downDown){downDown = true; Player.Drop();}
					break;
				case 70:
					Player.fly(); // Toggle flight
					break;
				case Keyboard.NUMPAD_SUBTRACT:
					scaleX *= 0.5;
					scaleY *= 0.5;
					focusOn(Player,true);
					break;
				case Keyboard.NUMPAD_ADD:
					scaleX *= 2;
					scaleY *= 2;
					focusOn(Player,true);
					break;
				/*case 219:
					for(var pm in Players){Players[pm].interpSpeed = Players[pm].interpSpeed - 1;}
					break;
				case 221:
					for(var pp in Players){Players[pp].interpSpeed = Players[pp].interpSpeed + 1;}
					break;
				case 189:
					for(var pd in Players){Players[pd].splineDelay--;}
					break;
				case 187:
					for(var pd2 in Players){Players[pd2].splineDelay++;}
					break;*/			
				}
			}
			
			switch(key){
				case Keyboard.SHIFT:
					trace("Shift");
					break;
				case Keyboard.CONTROL:
					trace("Control");
					break;
				case 82: // R
					Player.setOutfit();
					break;
				case 89: // Y
					if(game.setting.online){
						if(!ui.chatCheck){
							ui.chatShow();
						}
					}
					break;
				case Keyboard.ENTER:
					if(game.setting.online){
						ui.onEnter();
						controlCheck();
					}
					break;
			}
		}
		
		function gameKeyUp(e:KeyboardEvent):void{
			var key = e.keyCode;
			switch(key){
				case 68: // RIGHT KEY UP
					Player.moveRight = false;
					rightDown = false;
					break;
				case 65: // LEFT KEY UP
					Player.moveLeft = false;
					leftDown = false;
					break;
				case 87: // UP KEY UP
					Player.moveUp = false;
					upDown = false;
					break;
				case 83: // DOWN KEY UP
					Player.moveDown = false;
					downDown = false;
					break;
			}
		}
		
	}
}