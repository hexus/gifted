define(['createjs','assets','lib/global','shared/Character'],
function(createjs,lib,Global,Character){
    var Player = function(args){
        this.initialize();
        if(!args){args={};}
        var that = this;
    	this.super2.constructor.call(this,args);
    	
    	this.gid = args.id || 0; // Game ID (this.id is used by createjs)
    	this.name = args.name || 'guest';
    	
        this.clip = this.addChild(new lib.giftedclientplayer()); // previously lib.mcPlayer_char()
        
        this.chatBubble = this.clip.chatBubble;
        this.chatBubble.stop();
        this.chatBubble.visible = false;
        
        this.hitbox = {
            width:this.clip.playerHitbox.nominalBounds.width,
            height:this.clip.playerHitbox.nominalBounds.height
        };
        
        this.char = this.clip.playerChar;
        this.char.head.wear.stop();
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
        //this.char.shadow = new createjs.Shadow("#000000",0,0,4);
        
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
            return Global.stage.mouseX/that.world.scale - (that.world.x/that.world.scale + that.x);
        });
        this.get('mouseY',function(){
            return Global.stage.mouseY/that.world.scale - (that.world.y/that.world.scale + that.y) + 10;
        });
        
        var _aimAngle = 0,_aimDir = 1, _isAimingLeft = false, _isAimingRight = false;
        
        this.state.__defineGetter__('isAiming',function(){
            return that.state.isAimingLeft || that.state.isAimingRight;
        });
        this.state.__defineGetter__('isAimingLeft',function(){
            return _isAimingLeft;
        });
        this.state.__defineSetter__('isAimingLeft',function(v){
            _isAimingLeft = v;
        });
        this.state.__defineGetter__('isAimingRight',function(){
            return _isAimingRight;
        });
        this.state.__defineSetter__('isAimingRight',function(v){
            _isAimingRight = v;
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
    p.constructor = Player;
    
    p.setAnim = function(label){
        with(this){
            if(lastAnim!=label){
                char.gotoAndPlay(label);
                lastAnim = label;
                //setOutfit();
            }
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
            
            // Arm rotation
            if(this.thisPlayer){
                aimAngle = Math.atan2(this.mouseY,this.mouseX)*180/Math.PI;
                aimAngle2 = Math.round(Math.atan2(this.mouseY,Math.abs(this.mouseX))*180/Math.PI)+90;
                if(aimAngle<0){aimAngle+=360;}
                Global.debugObj.aimAngle = aimAngle;
                if(this.mouseX>0){
                    aimDir = 1;
                }else{
                    aimDir = -1;
                }
                //this.char.head.rotation = aimAngle*0.5;
            }
            
            this.char.scaleX = aimDir>0 ? 1 : -1;
            
            var leftArm = aimDir>0 ? 'l' : 'r';
            var rightArm = aimDir>0 ? 'r' : 'l';
            
            if(isAimingRight){
                this.setDynamicPart('arm',leftArm,true);
                this.setDynamicPart('arm',rightArm,true);
                // Arm rotation
                this.char[rightArm+'arm_d'].arm.rotation = aimDir>0 ? aimAngle - 72 : aimAngle + 72;
                this.char[leftArm+'arm_d'].arm.rotation = aimDir>0 ? (90+36)-aimAngle2*0.1 : (90-36)+aimAngle2*0.1;
                // Lower arm rotation
                this.char[leftArm+'arm_d'].arm.l.rotation = -72 + aimAngle2*0.1;
                this.char[rightArm+'arm_d'].arm.l.rotation = -16;
                // Y Flip
                this.char[leftArm+'arm_d'].arm.scaleY = -aimDir;
                this.char[rightArm+'arm_d'].arm.scaleY = aimDir;
            }else{
                this.setDynamicPart('arm',leftArm,isAimingLeft);
                this.setDynamicPart('arm',rightArm,false);
            }
            
            if(isAimingLeft){
                this.setDynamicPart('arm',leftArm,true);
                this.setDynamicPart('arm',rightArm,true);
                this.char[leftArm+'arm_d'].arm.rotation = 180 + (aimDir>0 ? -aimAngle + 72 : -aimAngle - 72);
                this.char[leftArm+'arm_d'].arm.l.rotation = -15;
                this.char[leftArm+'arm_d'].arm.scaleY = -aimDir;
                if(!isAimingRight){
                    this.char[rightArm+'arm_d'].arm.l.rotation = -36 - aimAngle2*0.1;
                    this.char[rightArm+'arm_d'].arm.rotation = aimDir>0 ? (90-36) + aimAngle2*0.1 : (90+36) - aimAngle2*0.1;
                    this.char[rightArm+'arm_d'].arm.scaleY = aimDir;
                }
            }else{
                this.setDynamicPart('arm',leftArm,isAimingRight);
                this.setDynamicPart('arm',rightArm,isAimingRight);
            }
            
            // Weapon display
            this.char.larm_l.wpnUnder.gotoAndStop(this.getItem(leftArm));
            this.char.larm_d.arm.l.wpnUnder.gotoAndStop(this.getItem(leftArm));
            
            this.char.rarm_l.wpnUnder.gotoAndStop(this.getItem(rightArm));
            this.char.rarm_d.arm.l.wpnOver.gotoAndStop(this.getItem(rightArm));
            
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
                        if((xSpeed>flySpeed/4 && this.state.direction>0) || (xSpeed<-flySpeed/4 && this.state.direction<0)){
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