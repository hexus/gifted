package giftedclient {
	public class timerCollection{
		private var timers:Array = new Array(); // Collection
		public function timerCollection(){} // Constructor lol
		
		public function addTimer(newTimer){ // Add a timer
			timers.push = newTimer;
		}
		
		public function stopAllTimers(){ // Magic
			for each (var t:Timer in timers){
				t.stop();
			}
		}
	}
}