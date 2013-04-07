define(['createjs','assets','lib/global','shared/Character','shared/Effect'],
function(createjs,lib,Global,Character,Effect){
    var Player = function(args){
        this.initialize();
        if(!args){args={};}
        var that = this;
    	this.super2.constructor.call(this,args);
    	
    	this.uid = args.id || 0; // Game ID (this.id is used by createjs)
    	this.name = args.name || 'guest';
        this.regen = true;
        this.regenSpeed = 10;
    	
        this.clip = this.addChild(new lib.giftedclientplayer()); // previously lib.mcPlayer_char()
        
        this.chatBubble = this.clip.chatBubble;
        this.chatBubble.stop();
        this.chatBubble.visible = false;
        
        this.hitbox = {
            width:this.clip.playerHitbox.nominalBounds.width,
            height:this.clip.playerHitbox.nominalBounds.height
        };
        
        this.hitboxFull = JSON.parse(JSON.stringify(this.hitbox));
        
        this.char = this.clip.playerChar;
        this.char.head.wear.stop();
        this.char.torso.stop();
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
            headwear:0,
            torso:0
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
        
        //this.char.shadow = new createjs.Shadow('#FFF',0,0,20);
    }
    
    var p = Player.prototype = new Character();
    p.super2 = Character.prototype;
    p.constructor = Player;
    
    p.useItem = function(side){
        this.super2.useItem.call(this,side);
        
        // Experimental telekinesis on click
        /*
        var wScale = this.world.scale;
        var mX = this.x + this.mouseX;
        var mY = this.y + this.mouseY;
        var aoi = this.world.getAoi(mX,mY,200);
        var entities = aoi.entities;
        for(var e in entities){
            var entity = entities[e];
            var angle = Math.atan2(entity.y-mY,entity.x-mX)*180/Math.PI;
            console.log(angle);
            var rads = angle * Math.PI/180;
            entity.applyEffect(new Effect({
                duration:8,
                xSpeed:Math.round(Math.cos(rads)*10),
                ySpeed:Math.round(Math.sin(rads)*10)
            }));
        }
        */
    }
    
    p.getStateDelta = function(readonly){ 
        var delta = this.super2.getStateDelta.call(this,readonly);
        for(var i in delta){
            if(i=='health'){
                delete(delta[i]);
            }
        }
        return delta;
    }
    
    p.setAnim = function(label){
        if(this.lastAnim!=label){
            this.char.gotoAndPlay(label);
            this.lastAnim = label;
            //setOutfit();
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
                case 'torso':
                    this.char.torso.gotoAndStop(this.state.outfit[part]);
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
    
    p.itemClips = function(){
        return {
            'l':[this.char.larm_l.itemUnder,this.char.larm_d.arm.l.itemUnder],
            'r':[this.char.rarm_l.itemOver,this.char.rarm_d.arm.l.itemOver]
        }
    }
    
    p.setItemClip = function(side,item){
        side = !side ? 'r' : side;
        var clips = this.itemClips();
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
                        if(itemType=='weaponsRanged'){
                            clip[itemType].muzzle.visible = false;
                        }
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
        var state = this.state;
        
        // Arm rotation
        if(this.thisPlayer){
            state.aimAngle = Math.atan2(this.mouseY,this.mouseX)*180/Math.PI;
            if(state.aimAngle<0){state.aimAngle+=360;}
            if(state.health>0){
                if(this.mouseX>0){
                    state.aimDir = 1;
                }else{
                    state.aimDir = -1;
                }
                if(!Global.socket.connected && this.world.step%this.regenSpeed==0 && state.health<state.maxHealth){
                    state.health++;
                }
            }
        }
        aimAngle2 = state.aimDir>0 ? (state.aimAngle+90)%180 : (270-state.aimAngle) % 180;
        
        if(!this.state.isAiming){ 
            state.aimDir = state.direction;
        }
        this.char.scaleX = state.aimDir>0 ? 1 : -1;
        
        var leftArm = state.aimDir>0 ? 'l' : 'r';
        var rightArm = state.aimDir>0 ? 'r' : 'l';
        
        if(state.isAimingRight){
            this.setDynamicPart('arm',leftArm,true);
            this.setDynamicPart('arm',rightArm,true);
            // Arm rotation
            this.char[rightArm+'arm_d'].arm.rotation = state.aimDir>0 ? state.aimAngle - 65 : state.aimAngle + 65;
            this.char[leftArm+'arm_d'].arm.rotation = state.aimDir>0 ? (90+40)-aimAngle2*0.1 : (90-40)+aimAngle2*0.1;
            // Lower arm rotation
            this.char[leftArm+'arm_d'].arm.l.rotation = -80 + aimAngle2*0.1;
            this.char[rightArm+'arm_d'].arm.l.rotation = -20;
            // Y Flip
            this.char[leftArm+'arm_d'].arm.scaleY = -state.aimDir;
            this.char[rightArm+'arm_d'].arm.scaleY = state.aimDir;
        }else{
            this.setDynamicPart('arm',leftArm,state.isAimingLeft);
            this.setDynamicPart('arm',rightArm,false);
        }
        
        if(state.isAimingLeft){
            this.setDynamicPart('arm',leftArm,true);
            this.setDynamicPart('arm',rightArm,true);
            this.char[leftArm+'arm_d'].arm.rotation = 180 + (state.aimDir>0 ? -state.aimAngle + 65 : -state.aimAngle - 65);
            this.char[leftArm+'arm_d'].arm.l.rotation = -20;
            this.char[leftArm+'arm_d'].arm.scaleY = -state.aimDir;
            if(!state.isAimingRight){
                this.char[rightArm+'arm_d'].arm.l.rotation = -40 - aimAngle2*0.1;
                this.char[rightArm+'arm_d'].arm.rotation = state.aimDir>0 ? (90-40) + aimAngle2*0.1 : (90+40) - aimAngle2*0.1;
                this.char[rightArm+'arm_d'].arm.scaleY = state.aimDir;
            }
        }else{
            this.setDynamicPart('arm',leftArm,state.isAimingRight);
            this.setDynamicPart('arm',rightArm,state.isAimingRight);
        }
        
        // Item display
        var clips = this.itemClips();
        
        this.setItemClip(leftArm,this.getItem('l'));
        this.setItemClip(rightArm,this.getItem('r'));
        
        // Muzzle flashes (so fahkin long and hacky)
        for(var side in [0,1]){
            side = side>0 ? 'r' : 'l';
            var side2 = side=='r' ? rightArm : leftArm;
            if(this.getItem(side)){
                var itemType = this.getItem(side).clipInfo.type;
                if(itemType=='weaponsRanged'){
                    if(this.getItem(side).state.inUse && this.getItem(side).state.coolDown==this.getItem(side).state.coolDownTime){
                        for(c in clips[side2]){
                            clips[side2][c][itemType].muzzle.visible = true;
                        }
                    }else{
                        for(c in clips[side2]){
                            clips[side2][c][itemType].muzzle.visible = false;
                        }
                    }
                }
            }
        }
        
        /*
        this.char.larm_l.wpnUnder.gotoAndStop(this.getItem(leftArm));
        this.char.larm_d.arm.l.wpnUnder.gotoAndStop(this.getItem(leftArm));
        
        this.char.rarm_l.wpnUnder.gotoAndStop(this.getItem(rightArm));
        this.char.rarm_d.arm.l.wpnOver.gotoAndStop(this.getItem(rightArm));
        */
        
        // Outfit display
        this.displayOutfit();
        
        // Animation
        if(state.onFloor){
            if(state.xSpeed!=0){
                if(!state.crouch){
                    if((state.xSpeed>0 && state.aimDir>0) || (state.xSpeed<0 && state.aimDir<0)){
                        this.setAnim("running");
                    }else{
                        this.setAnim("running_back");
                    }
                }else{
                    this.setAnim("crouch_move");
                }
            }else{
                if(!state.crouch){
                    if(this.lastAnim.indexOf("crouch")>-1){
                        this.setAnim("static_from_crouch");
                    }else{
                        if(this.lastAnim!="static_from_crouch"){
                            this.setAnim("static");
                        }
                    }
                }else{
                    if(this.lastAnim.indexOf("crouchjump")==0){
                        this.setAnim("crouch_from_crouchjump")
                    }else{
                        if(this.lastAnim.indexOf("static")>-1){
                            this.setAnim("crouch_from_static");
                        }else{
                            if(this.lastAnim.indexOf("crouch")<0 || this.lastAnim=="crouch_move"){
                                this.setAnim("crouch");
                            }
                        }
                    }
                }
            }
        }else{
            if(state.crouch){
                this.setAnim('crouchjump_from_jumping');
                if(this.lastAnim!="crouchjump_from_jumping"){
                    this.setAnim('crouchjump');
                }
            }else{
                //if(state.ySpeed!=0){
                    if(state.ySpeed<0){
                        this.setAnim("jumping");
                    }else if(state.ySpeed>(state.yLimit/5) || (state.ySpeed>0 && state.isFlying)){
                        this.setAnim("falling");
                    }
                //}
            }
            if(state.xSpeed!=0){
                if(state.isFlying && state.ySpeed<state.flySpeed/2 && state.ySpeed>-state.flySpeed/2){
                    if((state.xSpeed>state.flySpeed/4 && state.aimDir>0) || (state.xSpeed<-state.flySpeed/4 && state.aimDir<0)){
                        this.setAnim("flying");
                    }else{
                        this.setAnim("flying_back");
                    }
                }
            }else{
                if(state.isFlying && state.ySpeed==0){
                    this.setAnim("floating");
                }
            }
        }
    }
    
    p.itemTick = function(){
        this.super2.itemTick.call(this);
    }
    
    return Player;
});