package giftedclient{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.geom.Rectangle;
	import flash.ui.Keyboard;
	import flash.ui.Multitouch;
	import flash.ui.MultitouchInputMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.KeyboardEvent;
	import flash.events.TimerEvent;
	import flash.events.TouchEvent;
	import flash.events.DataEvent;
	import flash.utils.Timer;
	import flash.utils.getTimer;
	import flash.filters.DropShadowFilter;
	
	import giftedclient.player;
	import giftedclient.maps;
	import giftedclient.charScreen;
	import giftedclient.worldBg;
	import giftedclient.item;
	
	public class world extends Sprite{
	
		private var _sock:sock;
		private var timer = new Timer(game.setting.clockSpeed,0); // Game clock
		private var stepStart:Number;
		private var stepFinish:Number;
		private var stepSlowdown:Number = 0;
		
		// Scrolling
		private var scrollX = 0, scrollY = 0, scrollSensitivity = 0.36, scrollTarget;
		private var control:Boolean = true; // Enables/disables key controls
		public var ui:worldUi; // Interface object
		public var debugVars = new Object();
		public var Map:maps;
		private var bg:worldBg;
		private var updateRate = 10; // Speed in steps at which updateDisplay is called
		private var updateCount = 0; // Count of steps for the implementation of updateRate
		
		// Player
		private var id;
		private var username;
		private var outfit;
		private var Players:Object = {}; // Player collection
		private var Player:player; // Player instance
		
		// Items
		private var Items:Object = {}; // Item collection
		
		// Controls
		private var leftDown:Boolean = false,
					rightDown:Boolean = false,
					upDown:Boolean = false,
					downDown:Boolean = false;
		
		// Ping
		private var pingSpeed = 200, // Steps
					pingCount = 0,
					pingSample = 3,
					pingTime,
					pingArray = new Array();
		public var 	ping = 0;
		
		// Debuglist
		public static var debugList:Object = {};
		
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
			scrollRect = new Rectangle(Player.x-(game.setting.scrW*0.5),
									   Player.y-(game.setting.scrH*0.5),
									   game.setting.scrW,
									   game.setting.scrH);
			//focusOn(Player); 
			addListeners();
			//send("/m " + Player.x + " " + 0 + " " + Player.y + " " + 0);
			
			focusOn(Player,true); // Focus scrolling on player
			Player.stream = true;
			
			// net ghost
			Players[id].ghostPlayer = new player(id);
			Players[id].ghostPlayer.isGhost = true;

			applyFilters();
			addListeners();
		
			Map.updateDisplay(Player.x,Player.y,scaleX,1,true);
			
			Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT; 
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
			stage.addEventListener(MouseEvent.CLICK, gameMouseClick);
			// MOBILE OMG
			stage.addEventListener(TouchEvent.TOUCH_BEGIN, gameTouchBegin);
			stage.addEventListener(TouchEvent.TOUCH_END, gameTouchEnd);
			
			//stage.addEventListener(MouseEvent.MOUSE_MOVE, gameMouseMove); 
			// Game tick
			stage.addEventListener(Event.ENTER_FRAME, worldTick);
			//timer.addEventListener(TimerEvent.TIMER, worldTick);
			//timer.start();
			
			
		}
		
		function removeListeners(){
			if(game.setting.online){
				_sock.removeEventListener(DataEvent.DATA, gameData);
				_sock.removeEventListener(Event.CLOSE, gameClose);
			}
			if(stage){
				stage.removeEventListener(KeyboardEvent.KEY_DOWN, gameKeyDown);
				stage.removeEventListener(KeyboardEvent.KEY_UP, gameKeyUp);
				stage.removeEventListener(MouseEvent.CLICK, gameMouseClick);
				stage.removeEventListener(Event.ENTER_FRAME, worldTick);
				//stage.removeEventListener(MouseEvent.MOUSE_MOVE, gameMouseMove); 
				this.stage.removeChild(ui);
			}
			//timer.removeEventListener(TimerEvent.TIMER, worldTick);
		}
		
		public static function debug(key:String,str:String){
			debugList[key] = str;
		}
		
		//function worldTick(e:TimerEvent){
		function worldTick(e:Event){
			stepStart = getTimer();
			for (var key:String in Players){ Players[key].tick(); } // Tick players
			for (var ikey:String in Items){ Items[ikey].tick(); } // Tick items
			iScroll(); // Scroll viewport (move world object)
			wrapWorld(); // Shift back the infinite world at each edge
			if(pingCount>=pingSpeed){ // Send a ping request
				send("/ping");
				pingTime = new Date().getTime();
				pingCount=0;
			}else{
				pingCount++;
			}
			stepFinish = getTimer();
			stepSlowdown = stepFinish-stepStart;
			if(game.setting.debug){ // Debug display
				var c = Map.convertCords(Player.x,Player.y)
				var cords = c["rx"]+","+c["ry"]+":"+c["x"]+","+c["y"];
				debugVars = {"X":Player.x,"Y":Player.y,"R":cords,"Ping":ping,"Flying":Player.flying,"Clock":stepSlowdown,"Pool":Map.poolSize};
				for(var v in debugList){
					debugVars[v] = debugList[v];
				}
				var debugStr = ""; for(var k in debugVars){ debugStr += k + ": " + debugVars[k] + "\n"; }
				game.setting.debugUi.text = debugStr;
			}
		}		
		
		function focusOn(target:MovieClip,lock=false):MovieClip{
			if(contains(target)){
				if(lock){
					var rect:Rectangle = scrollRect;
					rect.x = target.x - (game.setting.scrW/scaleX)*0.5;
					rect.y = target.y - (game.setting.scrH/scaleY)*0.5;
					scrollRect = rect;
				}
				scrollTarget = target;
			}else{ // If it doesn't exist in the world
				scrollTarget = Player;
			}
			return scrollTarget;
		}
		
		function iScroll(){
			focusOn(scrollTarget);
			var t = scrollTarget;
			var sens = scrollSensitivity;
			
			for(var i=0;i<2;i++){
				var affect,affect2,targetCord,screenSpan,scale;
				if(i==0){
					affect = "x";
					affect2 = "width";
					scale = scaleX;
					targetCord = t.x;
					screenSpan = game.setting.scrW / scale;
				}else if(i==1){
					affect = "y";
					affect2 = "height";
					scale = scaleY;
					targetCord = t.y;
					screenSpan = game.setting.scrH / scale;
				}
				targetCord -= screenSpan * 0.5;
				// Need to sort out smoothing now innit. Use sens. <3
				var rect:Rectangle = scrollRect;
				var dif =  targetCord - rect[affect];
				if(Math.abs(dif*sens)>1){
					rect[affect] += dif*sens;
				}else{
					rect[affect] = targetCord;
				}
				rect[affect2] = screenSpan;
				scrollRect = rect;
			}
			
			if(updateCount>updateRate && stepSlowdown < 3){
				Map.updateDisplay(scrollTarget.x,scrollTarget.y,scaleX);
				updateCount = 0;
			}
			updateCount++;
		}
		
		function iScroll_old(){ // Intelligent scrolling (easing and shit)
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
					scale = scaleY;
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
					this[affect] += sign * (1 * scale);
				}
			}

			refreshDisplay = true;
			
			// Update tiles displayed, every updateRate ticks
			if(refreshDisplay && updateCount>updateRate){
				Map.updateDisplay(scrollTarget.x,scrollTarget.y,scaleX);
				updateCount = 0;
				//pScroll();
			}
			updateCount++;
		}
		
		function wrapWorld(){
			var t = scrollTarget || focusOn(Player);
			var child; // For looping through children
			
			var wFull = Map.fullWidth; // Full world width in units
			var wReg = Map.rSize*Map._tileW; // Region width in units
			
			// Offset and shift children when they pass boundary
				for(var j=0;j<numChildren;j++){
					var shift = 0;
					var off = 0;
					child = getChildAt(j);
					if(child && child!=Map){
						if(child!=t){
						// Set offset amount
							if(child.x > wFull - wReg && t.x < wReg){
								off = -wFull; // If child is in rightmost region and viewport in leftmost
							}
							if(child.x < wReg && t.x > wFull - wReg){
								off = wFull; // If child is in leftmost region and viewport in rightmost
							}
						// Apply offset
							child.offset = off;
							child.x = child.x;
						}
					// Shift
						if(child.x > wFull){ shift = -wFull; }
						if(child.x < 0){ shift = wFull; }
						if(shift!=0){
							child.x += shift;
							if(child != t){
								if(child is player){
									for each (var axis in new Array("x","y")){
										var toOffset = child.currentSpline(axis)[0];
										var fromOffset = child.currentSpline(axis)[1]; fromOffset[0] += off;
										child.iMove(toOffset,fromOffset,false);
									}
								}
							}
							var rect:Rectangle = scrollRect;
							if(child == t){ rect.x += shift; Map.updateDisplay(t.x,t.y,scaleX,1,true); }
							scrollRect = rect;
						}
					}
				}
			child = null;
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
					var tPlayers:Array = [Players[uid]]; // Target players
					if(uid==id && Player.ghostPlayer){tPlayers.push(Player.ghostPlayer);} // Affect ghost
					for(var t in tPlayers){
						switch(v){
							case "name":
								tPlayers[t].Name = d;
								break;
							case "outfit":
								tPlayers[t].setOutfit(d);
								break;
							case "flying":
								tPlayers[t].flying = d.toLowerCase() == "true";
								break;
							case "iteml": 
								tPlayers[t].setWeapon("l",d);
								break;
							case "itemr":
								tPlayers[t].setWeapon("r",d);
								break;
						}
					}
					break;
				case "/m": // Add to movement buffer
					var p = Players[getid];
					if(getid==id){
						p = p.ghostPlayer;
					}
					if(p){ // Very, very cool...
						p.iBuffer(new Array("x",datar[2],"xSpeed",datar[3]), new Array("y",datar[4],"ySpeed",datar[5]), new Array("aimAngle",datar[11]));
						p.setDir(datar[6]);
						p.moveLeft = datar[7]==1;
						p.moveRight = datar[8]==1;
						p.moveUp = datar[9]==1;
						p.moveDown = datar[10]==1;
						p.aimDir = datar[12];
						p.setDynamicPart("arm","l",datar[13]==1);
						p.setDynamicPart("arm","r",datar[14]==1);
					}
					break;
				case "/mt": // Telemove
					//Players[getid].MoveTo(datar[2], datar[3], datar[4]);
					Players[getid].iMove(new Array("x",datar[2]));
					Players[getid].iMove(new Array("y",datar[3]));
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
				case "/t":
					Map.setTile(datar[1],datar[2],datar[3],datar[4],datar[5],true);
					break;
				case "/itemCreate":
					var i = new item(0);
					i.setFrame(datar[2]);
					i.Spawn(datar[3],datar[5]);
					i.setSpeedX(datar[4]);
					i.setSpeedY(datar[6]);
					Items[getid] = i;
					break;
				case "/itemRemove":
					Items[datar[1]].Unspawn();
					delete Items[datar[2]];
					break;
				case "/itemGive":
					Players[getid].setWeapon(datar[2],datar[3]);
					break;
				case "/itemDrop":
					Players[getid].setWeapon(datar[2]);
					break;
				case "/itemMove":
					Items[getid].iBuffer(new Array("x",datar[2],"xSpeed",datar[3]), new Array("y",datar[4],"ySpeed",datar[5]));
					//i.MoveTo(datar[2],datar[4]);
					//i.setSpeedX(datar[3]);
					//i.setSpeedY(datar[5]);
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
				case 68: // D
					Player.moveRight = true;
					if(!rightDown){rightDown = true;}
					break;
				case 65: // A
					Player.moveLeft = true;
					if(!leftDown){leftDown = true;}
					break;
				case 87: // W
					Player.moveUp = true;
					if(!upDown){upDown = true;}
					break;
				case 83: // S
					Player.moveDown = true;
					if(!downDown){downDown = true;}
					break;
				case 69: // E
					if(!Player.isAimingRight){
						Player.toggleDynamicPart("arm","r");
					}
					break;
				case 81: // Q
					if(!Player.isAimingLeft){
						Player.toggleDynamicPart("arm","l");
					}
					break;					
				case 70: // F
					//Player.fly(); // Toggle flight
					send("/uv flying " + !Player.isFlying);
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
				case Keyboard.LEFTBRACKET:
					ui.indAdminTile.gotoAndStop(ui.indAdminTile.currentFrame - 1);
					break;
				case Keyboard.RIGHTBRACKET:
					ui.indAdminTile.gotoAndStop(ui.indAdminTile.currentFrame + 1);
					break;
				case Keyboard.O:
					Player.x = 1;
					Player.y = 3000;
					break;
				case Keyboard.C: case Keyboard.Z:
					var side = "r";
					switch(key){
						case Keyboard.C: side = "r"; break;
						case Keyboard.Z: side = "l"; break;
					}
					var wep = Player.getWeapon(side);
					if(wep==1){
						send("/itemPickup " + side);
					}else{
						Player.setWeapon(side); // empty the appropriate hand
						send("/itemDrop " + side);
					}
					break;
				case Keyboard.K: // Create a weapon at the position of the player
					send("/itemSpawn " + 3); // Spawn a knife
					break;
				case Keyboard.G:
					Player.showGhost = !Player.showGhost;
					break;
				case Keyboard.I:
					Player.ghostPlayer.interpolation = !Player.ghostPlayer.interpolation;
					break;
				case Keyboard.P:
					game.fullScreenToggle();
					break;
				case 222: // #
					game.toggleDebugUi();
					break;
				case Keyboard.PAGE_UP:
					Player.addEffect(new effect(2,10,32*3));
					break;
				case Keyboard.PAGE_DOWN:
					Player.addEffect(new effect(2,-10,32*3));
					break;
				case Keyboard.UP:
					Player.addEffect(new effect(4,-20,1));
					break;
				case Keyboard.DOWN:
					Player.addEffect(new effect(4,20,1));
					break;
				case Keyboard.LEFT:
					Player.addEffect(new effect(3,-100,1));
					break;
				case Keyboard.RIGHT:
					Player.addEffect(new effect(3,100,1));
					break;
				case Keyboard.NUMPAD_9:
					Player.addEffect(new effect(3,5,5));
					Player.addEffect(new effect(4,-12,1));
					break;
				}
				
					
			}
			
			switch(key){
				case Keyboard.SHIFT:
					
					break;
				case Keyboard.CONTROL:
					
					break;
				case 82: // R
					Player.setOutfit();
					break;
				case 89: // Y
					if(game.setting.online){
						if(!ui.chatCheck){
							ui.chatShow();
							ui.chatClear(true);
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
				case 69: // E
					if(Player.isAimingRight){
						Player.toggleDynamicPart("arm","r");
					}
					break;
				case 81: // Q
					if(Player.isAimingLeft){
						Player.toggleDynamicPart("arm","l");
					}
					break;
			}
		}
		
		function gameMouseClick(e:MouseEvent){
			if(scaleX==1 && Player.isAiming){
				var mX = scrollRect.x + e.stageX; var mY = scrollRect.y + e.stageY;
				trace(e.stageX,e.stageY);
				if(mY<0){mY=0;} if(mY>Map.fullWidth){mY=Map.fullWidth;} // constrain y
				var cords = Map.convertCords(mX,mY);
				var str = "/t " + cords["rx"] + " " + cords["ry"] + " " + cords["x"] + " " + cords["y"] + " " + ui.indAdminTile.currentFrame;
				send(str);
			}
		}
		
		function gameTouchBegin(e:TouchEvent){
			var tX = e.stageX;
			var tY = e.stageY;
			if(tY<100){
				Player.Jump();
			}else{
				if(tX<stage.stageWidth/2){
					Player.moveLeft = true;
				}else{
					Player.moveRight = true;
				}
			}
			//send("/c " + tX + "," + tY + " stage width:" + stage.width);
		}
		
		function gameTouchEnd(e:TouchEvent){
			Player.moveLeft = false;
			Player.moveRight = false;
			Player.moveRight = false;
			Player.moveUp = false;
			//send("/c BUTT LESS HURT");
		}
		
	}
}