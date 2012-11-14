package giftedclient{
	import flash.display.MovieClip;
	import flash.events.Event;
	public class worldUi extends MovieClip{
		
		private var _sock:sock;
		private var chatOpen:Boolean = false;
		private var gvScroll:Number = 1;
		
		public function worldUi(){
			_sock = game.gsock;
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event){
			txtChat.visible = false;
			txtMsg.visible = false;
			btnLobby.visible = false;
			indAdminTile.visible = true;
			indAdminTile.gotoAndStop(0);
			removeEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function send(str:String){
			_sock.send(str);
		}
		
		public function onEnter(){
			if(!chatOpen){
				chatShow();
			}else if(chatOpen){
				var msg = StringUtils.trim(txtMsg.text);
				if(msg!=""){
					if(msg.charAt(0)=="/"){
						send(msg);
					}else{
						send("/c " + msg);
						txtMsg.text = "";
					}
				}else{
					chatHide();
				}
			}
		}		
		
		public function get chatCheck(){
			return chatOpen;
		}
		
		public function chatWrite(str:String){
			txtChat.htmlText+=str+"\n";
			chatUpdate();
		}
		
		public function chatUpdate(){
			txtChat.validateNow();
			if(gvScroll<txtChat.maxVerticalScrollPosition){
				if(txtChat.verticalScrollPosition >= gvScroll-2){
					txtChat.verticalScrollPosition = txtChat.maxVerticalScrollPosition;
					gvScroll = txtChat.maxVerticalScrollPosition;
				}
			}
		}
		
		public function chatClear(msg:Boolean){
			if(msg){
				txtMsg.text = "";
			}else{
				txtChat.text = "";
			}
		}
		
		public function chatShow(){
			txtChat.visible = true;
			txtMsg.visible = true;
			txtMsg.drawFocus(false); txtMsg.setFocus();
			chatOpen = true;
			txtMsg.text = "";
			btnLobby.visible = true;
			//indAdminTile.visible = true;
		}
		
		public function chatHide(){
			txtChat.visible = false;
			txtMsg.visible = false;
			this.stage.focus;
			chatOpen = false;
			btnLobby.visible = false;
			//indAdminTile.visible = false;
		}
		
	}
}