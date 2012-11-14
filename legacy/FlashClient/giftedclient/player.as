package giftedclient {
	// Imports
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.net.XMLSocket;
	import flash.filters.*;
	import giftedclient.character;
	
	// Start class
	public class player extends character {
		
		private var _id:Number;
		
		public var thisPlayer:Boolean = false; // Is this instace the current player?
		
		// Ting
			protected var lastStr:String = "";
			protected var lastAnim:String;
			protected var outfit = new Object();
			protected var weapons = [0,0];
			protected var _aimAngle = 5;
			protected var _aimDir = 1;
			protected var powers:Vector.<power> = new Vector.<power>;
			public var ghostPlayer:player = null;
			public var showGhost:Boolean = false;
			public var isGhost:Boolean = false;
			
			/*
			private var splineXc = 1; // Curve coefficient
			private var splineYc = 1; // Curve coefficient
			// From X1 and Y1
			private var splineX1, splineX1v; // Start X
			private var splineY1, splineY1v = 0; // Start Y
			private var splineX2, splineY2; // Coord + Velocity
			// To   X2 and Y2
			private var splineX3, splineX3v; // End X
			private var splineY3, splineY3v = 0; // End Y
			private var splineX4, splineY4; // Coord - Velocity
			
			// Spline calculation vars
			private var sA, sB, sC, sD; // X
			private var sE, sF, sG, sH; // Y
			*/
		
		// Constructor
		public function player(gid:Number, thisPlay:Boolean=false){ // Global player ID, this player
			super();
			_id = gid;
			thisPlayer = thisPlay;
			// Correctly inherit the char and hitbox children of the character class
			char = MovieClip(getChildByName("playerChar"));
			hitbox = MovieClip(getChildByName("playerHitbox"));
			
			char.larm_l.wpnOver.visible = false;
			char.larm_l.wpnUnder.visible = true;
			char.rarm_l.wpnOver.visible = true;
			char.rarm_l.wpnUnder.visible = false;
			char.larm_d.arm.l.wpnOver.visible = false;
			char.larm_d.arm.l.wpnUnder.visible = true;
			char.rarm_d.arm.l.wpnOver.visible = true;
			char.rarm_d.arm.l.wpnUnder.visible = false;
			
			setWeapon("l",1); // So it begins..
			setWeapon("r",1);
			
			char.larm_d.visible = false;
			char.rarm_d.visible = false;
			//filters = [new DropShadowFilter(0,0,0xAA11BB,1,8,8,2,1)]; // Fun fun.. what will the future bring
		}
		
		protected override function init(e:Event){
			super.init(e);
		}					
		
		public override function Spawn(sX=null,sY=null){
			super.Spawn(sX,sY);
			if(ghostPlayer){ghostPlayer.Spawn(sX,sY); ghostPlayer.isGhost = true;}
			setOutfit();
		}
		
		// GETTERS AND SETTERS
		
		public function get id(){
			return _id;
		}
		
		public override function set flying(b:Boolean){
			super.flying = b;
			//sendb("/uv flying " + b);
		}
		
		public function get aimAngle(){ return Math.round(_aimAngle); }
		public function set aimAngle(a:Number){ _aimAngle = a; }
		public function get aimDir(){ return _aimDir; }
		public function set aimDir(d:Number){ _aimDir = (d>0) ? 1 : -1;}
		
		public function setAnim(frame){
			if(lastAnim!=frame){
				char.gotoAndPlay(frame);
				lastAnim = frame;
				setOutfit();
			}
		}
		
		public function getWeapon(side:String = "r"){
			switch(side){
				case "l": return char.larm_l.wpnUnder.currentFrame; break;
				case "r": return char.rarm_l.wpnOver.currentFrame; break;
			}
		}
		
		public function setWeapon(side:String = "r",frame:int=1){
			switch(side){
				case "l": char.larm_l.wpnUnder.gotoAndStop(frame); char.larm_d.arm.l.wpnUnder.gotoAndStop(frame); break;
				case "r": char.rarm_l.wpnOver.gotoAndStop(frame); char.rarm_d.arm.l.wpnOver.gotoAndStop(frame); break;
			}
		}
		
		public function dropWeapon(side:String = "r"){
			var weapon;
			switch(side){
				case "l":
					weapon = getWeapon("l"); break;
				case "r":
					weapon = getWeapon("r"); break;
			}
		}
		
		public function setOutfit(outfitStr:String = ""){
			if(outfitStr.length>0){ // Store changes in within this player object
				outfit.head = outfitStr.substr(0,1); // Extracts player headwear selection
				if(char){ // Make visible changes to stage child
					// char.head.gotoAndStop should go before, of course, then the child. same with all parts.
					char.head.wear.gotoAndStop(outfit.head); // Update active display object
				}
			}

		}
		
		public function get isAiming():Boolean{
			return isAimingLeft || isAimingRight;
		}
		
		public function get isAimingLeft():Boolean{
			return getPart("arm","l","d").visible;
		}
		
		public function get isAimingRight():Boolean{
			return getPart("arm","r","d").visible;
		}
		
		public function getChild(str:String){
			if(str!="" && this.char.getChildByName(str)){
				return this.char.getChildByName(str);
			}
			return false;
		}
		
		public function getPart(part:String = "arm",side:String = "r",type:String="d"){
			return getChild(side+part+"_"+type);
		}
		
		public function togglePart(part:String = "arm",side:String = "r",type:String="d"){
			var p = getPart(part,side,type);
			if(p){p.visible = !p.visible;}
		}
						
		public function toggleDynamicPart(part:String = "arm",side:String = "r"){
			var lower = getPart(part,side,"l");
			var upper = getPart(part,side,"u");
			var dynam = getPart(part,side,"d");
			if(lower){lower.visible = !lower.visible;}
			if(upper){upper.visible = !upper.visible;}
			if(dynam){dynam.visible = !dynam.visible;}
		}
		
		public function setDynamicPart(part:String = "arm",side:String = "r",vis:Boolean=false){
			var lower = getPart(part,side,"l");
			var upper = getPart(part,side,"u");
			var dynam = getPart(part,side,"d");
			if(lower){lower.visible = !vis;}
			if(upper){upper.visible = !vis;}
			if(dynam){dynam.visible = vis;}
		}
		
		public function Say(str){
			chatBubble.say(str);
		}		
		
		public override function tick():void {
			super.tick();
			
			if(isGhost && alpha!=0.5){
				alpha = 0.5;
			}
			
			if(ghostPlayer){
				ghostPlayer.visible = showGhost;
				ghostPlayer.tick();
			}
			
			// Arm rotaty stuff
			if(isAiming){
				if(thisPlayer){
					// Calculate angle
					aimAngle = Math.atan2(-char.mouseY,-char.mouseX)/(Math.PI/180); // Setter rounds the result automatically
					if(aimAngle<0){aimAngle+=360;} // Keep the number positive so interpolation stays smooth
					if(mouseX>0){ // Face player to the mouse
						aimDir = 1;
					}else{
						aimDir = -1;
					}
				}
				if(isAimingLeft){
					//angle = Math.atan2(-char.larm_d.mouseY,-char.larm_d.mouseX)/(Math.PI/180);
					char.larm_d.arm.rotation = isAimingRight ? aimAngle + 130 : -aimAngle - 80;
				}
				if(isAimingRight){
					//angle = Math.atan2(-char.rarm_d.mouseY,-char.rarm_d.mouseX)/(Math.PI/180);
					char.rarm_d.arm.rotation = aimAngle + 130;
				}
				char.scaleX = aimDir;
			}else{
				char.scaleX = direction;
			}
			
			// Animation
			if(onFloor){
				if(xSpeed!=0){
					if((xSpeed>0 && char.scaleX>0) || (xSpeed<0 && char.scaleX<0)){
						setAnim("running");
					}else{
						setAnim("running_back");
					}
				}else{
					setAnim("static");
				}
			}else{
				if(ySpeed!=0){
					if(ySpeed<0){
						setAnim("jumping");
					}else if(ySpeed>(yLimit/5) || (ySpeed>0 && isFlying)){
						setAnim("falling");
					}
				}
				if(xSpeed!=0){
					if(isFlying && ySpeed<flySpeed/2 && ySpeed>-flySpeed/2){
						if((xSpeed>flySpeed/4 && char.scaleX>0) || (xSpeed<-flySpeed/4 && char.scaleX<0)){
							setAnim("flying");
						}else{
							setAnim("flying_back");
						}
					}
				}else{
					if(isFlying && ySpeed==0){
						setAnim("floating");
					}
				}
			}
			
			// Position stream
			if(stream && streamStep == 0){				
				var posStr = ["/m",x,xSpeed,y,ySpeed,direction].join(" ");
				var controlStr = [(moveLeft?1:0),(moveRight?1:0),(moveUp?1:0),(moveDown?1:0)].join(" ");
				var aimingStr = [aimAngle,aimDir,(isAimingLeft?1:0),(isAimingRight?1:0)].join(" ");
				var sendStr = [posStr,controlStr,aimingStr].join(" ");
				if(sendStr != lastStr){
					send(sendStr);
					lastStr = sendStr;
				}
			}
		}
	}
}