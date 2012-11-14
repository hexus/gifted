package giftedclient {
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.events.Event;
	import flash.filters.DropShadowFilter;
	
	public class charScreen extends MovieClip {
		// Properties
		public static var vals:Array = [];
		// Constructor
		public function charScreen(){
			this.visible = false; // Render invisible when created
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		// Pseudo-constructor
		private function init(e:Event):void{
			// Center window
			this.x = 0;
			this.y = 0;		
			
			// Listeners
			btnSave.addEventListener(MouseEvent.CLICK, editCharSave);
			btnCancel.addEventListener(MouseEvent.CLICK, editCharCancel);
			this.btnHeadPrev.addEventListener(MouseEvent.CLICK, headPrev);
			this.btnHeadNext.addEventListener(MouseEvent.CLICK, headNext);
			
			// Main display init
			this.displayMain.gotoAndStop(0);
			this.displayMain.head.wear.gotoAndStop(0);
			
			// Individual display init
			this.displayHead.gotoAndStop(0);
			
			applyFilters();
		}
		
		// Methods
		
		private function applyFilters(){
			var sh1:DropShadowFilter = new DropShadowFilter;
			var sh2:DropShadowFilter = new DropShadowFilter;
			with(sh1){
				blurX=10; blurY=10;
				strength=1.20; quality=5; // out of 15
				angle=0; distance=0;
				color=0x000000;
			}
			with(sh2){
				blurX=50; blurY=50;
				strength=0.36; quality=7;
				angle=0; distance=0;
				color=0x000000; inner=true;
			}
			this.filters = [sh1,sh2];
		}
		
		public function Set(headVal){
			if(headVal>-1){
				game.setting.outfit.head = headVal;
				this.displayHead.gotoAndStop(headVal);
				this.displayMain.head.wear.gotoAndStop(headVal);
			}
		}
		
		public function Save(DontSend:Boolean=false){
			vals[0] = this.displayHead.currentFrame;
			var savestr = "";
			for(var key in vals){
				savestr += vals[key];
			}
			game.setting.outfit.str = savestr;
			if(!DontSend){send("/o " + savestr);} // Fuck yeah, double negative
			trace("Outfit Saved:");
			trace("    Str:      " + savestr);
			trace("    Headwear: " + vals[0]);
		}
		
		private function send(str:String){
			game.gsock.sendStr(str);
		}
		
		// Button delegates
		private function editCharSave(eventObj:MouseEvent){
			Save();
			this.visible = false;
		}

		private function editCharCancel(eventObj:MouseEvent){
			this.visible = false;
		}
		
		private function headPrev(e:MouseEvent){
			this.displayHead.prevFrame();
			this.displayMain.head.wear.prevFrame();
		}
		
		private function headNext(e:MouseEvent){
			this.displayHead.nextFrame();
			this.displayMain.head.wear.nextFrame();
		}
		
	}
}