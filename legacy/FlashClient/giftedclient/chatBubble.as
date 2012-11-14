package giftedclient {
	import flash.display.MovieClip;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.events.Event;
    import flash.events.TimerEvent;
	import flash.utils.Timer;
	
	// Start class
	public class chatBubble extends MovieClip {
		private var bTimer:Timer = new Timer(5000, 1);
 
		public function chatBubble() {
			this.visible = false;
			Text.autoSize = TextFieldAutoSize.CENTER;
			bTimer.addEventListener(TimerEvent.TIMER, hideBubble);
		}
		
		public function say(str){
			if(str!=""){
				this.visible = false;
				Text.text = str;
				resizeBubble(this.Text.numLines);
				Text.text = str; // Needs to be done twice
				this.visible = true;
				bTimer.stop();
				bTimer.start();
			}
		}
		
		private function resizeBubble(lines){
			this.gotoAndStop(lines);
		}
		
		public function hideBubble(e:TimerEvent):void{
			this.visible = false;
			bTimer.stop();
		}				
	}
}