define(['createjs','assets','shared/Character'],
function(createjs,lib,Character){
    var Player = function(args){
    	this.super2.constructor.call(this,args);
    	this.initialize();
    	
        this.clip = this.addChild(new lib.giftedclientplayer()); // previously lib.mcPlayer_char()
        
        this.chatBubble = this.clip.chatBubble;
        this.chatBubble.stop();
        this.chatBubble.visible = false;
        
        this.hitbox = {
            width:this.clip.playerHitbox.nominalBounds.width,
            height:this.clip.playerHitbox.nominalBounds.height
        };
        
        this.char = this.clip.playerChar;
        this.char.gotoAndStop("static");
        this.char.head.wear.gotoAndStop(0);
        this.char.larm_l.wpnOver.visible = false;
        this.char.larm_l.wpnUnder.visible = false;
        this.char.rarm_l.wpnOver.visible = false;
        this.char.rarm_l.wpnUnder.visible = false;
        this.char.larm_d.arm.l.wpnOver.visible = false;
        this.char.larm_d.arm.l.wpnUnder.visible = false;
        this.char.rarm_d.arm.l.wpnOver.visible = false;
        this.char.rarm_d.arm.l.wpnUnder.visible = false;
        this.char.larm_d.visible = false;
        this.char.rarm_d.visible = false;
        this.char.scaleX = 1;
        this.char.scaleY = 1;
    }
    var p = Player.prototype = new Character();
    p.super2 = Character.prototype;
    
    p.tick = function(){
        this.super2.tick.call(this);
    }
    
    return Player;
});