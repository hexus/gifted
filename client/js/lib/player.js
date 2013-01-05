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
        
        this.lastAnim = "";
        this.setAnim("static");
    }
    var p = Player.prototype = new Character();
    p.super2 = Character.prototype;
    
    p.setAnim = function(label){
        with(this){
            if(lastAnim!=label){
                char.gotoAndPlay(label);
                lastAnim = label;
                //setOutfit();
            }
        }
    }
    
    p.tick = function(){
        this.super2.tick.call(this);
        
        this.char.scaleX = this.state.direction;
        
        // Animation
        with(this.state){
            if(onFloor){
                if(xSpeed!=0){
                    if((xSpeed>0 && this.char.scaleX>0) || (xSpeed<0 && this.char.scaleX<0)){
                        this.setAnim("running");
                    }else{
                        this.setAnim("running_back");
                    }
                }else{
                    this.setAnim("static");
                }
            }else{
                if(ySpeed!=0){
                    if(ySpeed<0){
                        this.setAnim("jumping");
                    }else if(ySpeed>(yLimit/5) || (ySpeed>0 && isFlying)){
                        this.setAnim("falling");
                    }
                }
                if(xSpeed!=0){
                    if(isFlying && ySpeed<flySpeed/2 && ySpeed>-flySpeed/2){
                        if((xSpeed>flySpeed/4 && this.char.scaleX>0) || (xSpeed<-flySpeed/4 && this.char.scaleX<0)){
                            this.setAnim("flying");
                        }else{
                            this.setAnim("flying_back");
                        }
                    }
                }else{
                    if(isFlying && ySpeed==0){
                        this.setAnim("floating");
                    }
                }
            }
            
            
        }
    }
    
    return Player;
});