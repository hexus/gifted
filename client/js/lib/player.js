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
        this.char.larm_l.itemOver.visible = false;
        this.char.larm_l.itemUnder.visible = true;
        this.char.rarm_l.itemOver.visible = true;
        this.char.rarm_l.itemUnder.visible = false;
        this.char.larm_d.arm.l.itemOver.visible = false;
        this.char.larm_d.arm.l.itemUnder.visible = true;
        this.char.rarm_d.arm.l.itemOver.visible = true;
        this.char.rarm_d.arm.l.itemUnder.visible = false;
        this.char.larm_d.regX = 0;
        this.char.rarm_d.regY = 0;
        this.char.larm_d.visible = false;
        this.char.rarm_d.visible = false;
        this.char.scaleX = 1;
        this.char.scaleY = 1;
        //this.char.shadow = new createjs.Shadow("#000000",0,0,4);
        
        this.lastAnim = "";
        this.setAnim("static");
        
        this.state.outfit = {
            headwear:0
        }
        
        this.setItemClips(); // hides
        
        this.get('thisPlayer',function(){
            return Global.player === that;
        });
        this.get('mouseX',function(){
            return Global.stage.mouseX/that.world.scale - (that.world.x/that.world.scale + that.x);
        });
        this.get('mouseY',function(){
            return Global.stage.mouseY/that.world.scale - (that.world.y/that.world.scale + that.y) + 10;
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
    
    p.setOutfit = function(part,value){
        this.state.outfit[part] = value;
        this.displayOutfit();
    }
    
    p.displayOutfit = function(){
        for(part in this.state.outfit){
            switch(part){
                case 'headwear':
                    this.char.head.wear.gotoAndStop(this.state.outfit[part]);
                    break;
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
    
    p.setItemClip = function(side,item){
        side = !side ? 'r' : side;
        var clips = {
            'l':[this.char.larm_l.itemUnder,this.char.larm_d.arm.l.itemUnder],
            'r':[this.char.rarm_l.itemOver,this.char.rarm_d.arm.l.itemOver]
        }
        if(item){
            if(item.clipInfo){
                var itemType = item.clipInfo.type;
                var frame = item.clipInfo.frame;
                for(c in clips[side]){
                    var clip = clips[side][c];
                    clip[itemType].gotoAndStop(frame);
                    if(!clip[itemType].visible){
                        for(i=0;i<clip.children.length;i++){
                            clip.children[i].visible = false;
                        }
                        clip[itemType].visible = true;
                    }
                }
            }
        }else{
            for(c in clips[side]){
                var clip = clips[side][c];
                for(i=0;i<clip.children.length;i++){
                    clip.children[i].visible = false;
                }
            }
        }
    }
    
    p.setItemClips = function(lItem,rItem){
        this.setItemClip('l',lItem);
        this.setItemClip('r',rItem);
    }

    
    p.tick = function(){
        this.super2.tick.call(this);

        with(this.state){
            
            // Arm rotation
            if(this.thisPlayer){
                aimAngle = Math.atan2(this.mouseY,this.mouseX)*180/Math.PI;
                if(aimAngle<0){aimAngle+=360;}
                //Global.debugObj.out.aimAngle = aimAngle;
                if(this.mouseX>0){
                    aimDir = 1;
                }else{
                    aimDir = -1;
                }
            }
            aimAngle2 = aimDir>0 ? (aimAngle+90)%180 : (270-aimAngle) % 180;
            
            this.char.scaleX = aimDir>0 ? 1 : -1;
            
            var leftArm = aimDir>0 ? 'l' : 'r';
            var rightArm = aimDir>0 ? 'r' : 'l';
            
            if(isAimingRight){
                this.setDynamicPart('arm',leftArm,true);
                this.setDynamicPart('arm',rightArm,true);
                // Arm rotation
                this.char[rightArm+'arm_d'].arm.rotation = aimDir>0 ? aimAngle - 65 : aimAngle + 65;
                this.char[leftArm+'arm_d'].arm.rotation = aimDir>0 ? (90+40)-aimAngle2*0.1 : (90-40)+aimAngle2*0.1;
                // Lower arm rotation
                this.char[leftArm+'arm_d'].arm.l.rotation = -80 + aimAngle2*0.1;
                this.char[rightArm+'arm_d'].arm.l.rotation = -20;
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
                this.char[leftArm+'arm_d'].arm.rotation = 180 + (aimDir>0 ? -aimAngle + 65 : -aimAngle - 65);
                this.char[leftArm+'arm_d'].arm.l.rotation = -20;
                this.char[leftArm+'arm_d'].arm.scaleY = -aimDir;
                if(!isAimingRight){
                    this.char[rightArm+'arm_d'].arm.l.rotation = -40 - aimAngle2*0.1;
                    this.char[rightArm+'arm_d'].arm.rotation = aimDir>0 ? (90-40) + aimAngle2*0.1 : (90+40) - aimAngle2*0.1;
                    this.char[rightArm+'arm_d'].arm.scaleY = aimDir;
                }
            }else{
                this.setDynamicPart('arm',leftArm,isAimingRight);
                this.setDynamicPart('arm',rightArm,isAimingRight);
            }
            
            // Item display
            this.setItemClip(leftArm,this.getItem('l'));
            this.setItemClip(rightArm,this.getItem('r'));
            /*
            this.char.larm_l.wpnUnder.gotoAndStop(this.getItem(leftArm));
            this.char.larm_d.arm.l.wpnUnder.gotoAndStop(this.getItem(leftArm));
            
            this.char.rarm_l.wpnUnder.gotoAndStop(this.getItem(rightArm));
            this.char.rarm_d.arm.l.wpnOver.gotoAndStop(this.getItem(rightArm));
            */
            
            // Outfit display
            this.displayOutfit();
            
            // Animation
            if(onFloor){
                if(xSpeed!=0){
                    if((xSpeed>0 && this.state.aimDir>0) || (xSpeed<0 && this.state.aimDir<0)){
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
                        if((xSpeed>flySpeed/4 && this.state.aimDir>0) || (xSpeed<-flySpeed/4 && this.state.aimDir<0)){
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
    
    p.itemTick = function(){
        if(!this.state.isAimingLeft){
            this.stopUsingItem('l');
        }
        if(!this.state.isAimingRight){
            this.stopUsingItem('r');
        }
        this.super2.itemTick.call(this);
    }
    
    return Player;
});