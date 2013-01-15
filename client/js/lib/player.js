define(['createjs','assets','lib/global','shared/Character'],
function(createjs,lib,Global,Character){
    var Player = function(args){
        var that = this;
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
        this.char.larm_l.wpnOver.stop();
        this.char.larm_l.wpnUnder.stop();
        this.char.rarm_l.wpnOver.stop();
        this.char.rarm_l.wpnUnder.stop();
        this.char.larm_d.arm.l.wpnOver.stop();
        this.char.larm_d.arm.l.wpnUnder.stop();
        this.char.rarm_d.arm.l.wpnOver.stop();
        this.char.rarm_d.arm.l.wpnUnder.stop();
        this.char.larm_d.regX = 0;
        this.char.rarm_d.regY = 0;
        this.char.larm_d.visible = false;
        this.char.rarm_d.visible = false;
        this.char.scaleX = 1;
        this.char.scaleY = 1;
        
        this.lastAnim = "";
        this.setAnim("static");
        
        this.weapon = {
            left:0,
            right:0
        }
        
        this.get('thisPlayer',function(){
            return Global.player === that;
        });
        this.get('mouseX',function(){
            return Global.stage.mouseX - (that.world.x + that.x);
        });
        this.get('mouseY',function(){
            return Global.stage.mouseY - (that.world.y + that.y) + 10;
        });
        
        var _aimAngle=0,_aimDir=0;
        
        this.state.__defineGetter__('isAiming',function(){
            return that.state.isAimingLeft || that.state.isAimingRight;
        });
        this.state.__defineGetter__('isAimingLeft',function(){
            return that.getPart('arm','l','d').visible;
        });
        this.state.__defineGetter__('isAimingRight',function(){
            return that.getPart('arm','r','d').visible;
        });
        this.state.__defineGetter__('aimAngle',function(){
            return Math.round(_aimAngle);
        });
        this.state.__defineSetter__('aimAngle',function(a){
            _aimAngle = a;
        });
        this.state.__defineGetter__('aimDir',function(){
            return _aimDir;
        });
        this.state.__defineSetter__('aimDir',function(d){
            _aimDir = (d>0) ? 1 : -1;
        });
        
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
    
    p.getWeapon = function(side){
        side = !side ? 'r' : side;
        switch(side){
            case 'l': return this.weapon.left; break;
            case 'r': return this.weapon.right; break;
        }
    }
    
    p.setWeapon = function(side,frame){
        side = !side ? 'r' : side;
        frame = !frame ? 0 : frame;
        switch(side){
            case 'l': case 'b':
                this.char.larm_l.wpnUnder.gotoAndStop(frame);
                this.char.larm_d.arm.l.wpnUnder.gotoAndStop(frame);
                this.weapon.left = frame;
                break;
            case 'r': case 'b':
                this.char.rarm_l.wpnUnder.gotoAndStop(frame);
                this.char.rarm_d.arm.l.wpnOver.gotoAndStop(frame);
                this.weapon.right = frame;
                break;
        }
    }
    
    p.getPart = function(part,side,type){
        part = !part ? 'arm' : part;
        side = !side ? 'r' : side;
        type = !type ? 'd' : type;
        return this.char[side+part+'_'+type] || false;
    }
    
    p.togglePart = function(part,side,type){
        var part = this.getPart(part,side,type);
        if(part){part.visible = !part.visible;}
    }
    
    p.setPart = function(part,side,type,vis){
        vis = !vis ? false : true;
        var part = this.getPart(part,side,type);
        if(part){part.visible = vis;}
    }
    
    p.toggleDynamicPart = function(part,side){
        this.togglePart(part,side,'d');
        this.togglePart(part,side,'u');
        this.togglePart(part,side,'l');
    }
    
    p.setDynamicPart = function(part,side,vis){
        vis = !vis ? false : true;
        this.setPart(part,side,'d',vis);
        this.setPart(part,side,'u',!vis);
        this.setPart(part,side,'l',!vis);
    }
    
    p.tick = function(){
        this.super2.tick.call(this);

        with(this.state){
            
            // Animation
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
            
            // Arm rotation
            if(isAiming){
                if(this.thisPlayer){
                    aimAngle = Math.atan2(-this.mouseY,-Math.abs(this.mouseX))/(Math.PI/180);
                    if(aimAngle<0){aimAngle+=360;}
                    if(this.mouseX>0){
                        aimDir = 1;
                    }else{
                        aimDir = -1;
                    }
                }
                if(isAimingLeft){
                    this.char.larm_d.arm.rotation = isAimingRight ? aimAngle + 110 : -aimAngle - 60;
                }
                if(isAimingRight){
                    this.char.rarm_d.arm.rotation = aimAngle + 110;
                }
                this.char.scaleX = aimDir;
            }else{
                this.char.scaleX = direction;
            }
        }
    }
    
    return Player;
});