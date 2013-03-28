(function(){
var node = typeof window === 'undefined';
var deps = ['assets','lib/global','shared/Character'];

var init = function(lib,Global,Character){
    
    if(node){
        Character = require('./Character');
    }
    
    var Enemy = function(args){ // Abstract
        if(!args){args={};}
        this.super2.constructor.call(this,args);
        this.target = false;
        this.freemove = true;
        this.hitbox.width = this.hitbox.height = 30;
        this.state.entityType = 'flybot';
        this.state.isFlying = true;
        this.state.xLimit = this.state.flySpeed = 4;
        this.state.yLimit = 14;
        this.state.ai = {
            sightRange:400,
            loseInterest:600,
            keepDistance:150
            
        }
    }
    
    var p = Enemy.prototype = new Character();
    p.super2 = Character.prototype;
    p.constructor = Enemy;
    
    p.tick = function(){
        this.super2.tick.call(this);
        doAiTick = true;
        if(!node){
            if(Global.socket){
                if(Global.socket.connected){
                    doAiTick = false;
                }
            }
        }
        if(doAiTick && this.state.health>0){
            this.aiTick();
        }
        if(this.state.health<1){
            if(this.spawnerParent){
                this.spawnerParent.leave(this);
            }
        }
        
    }
    
    p.aiTick = function(){
        
    }
    
    return Enemy;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
