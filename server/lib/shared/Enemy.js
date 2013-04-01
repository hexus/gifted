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
        this.afterlife = 500;
        this.hitbox.width = this.hitbox.height = 30;
        this.state.isFlying = true;
        this.state.xLimit = this.state.flySpeed = 4;
        this.state.yLimit = 14;
        this.state.jumpStr = 8;
        this.state.ai = {
            sightRange:250,
            loseInterest:500,
            keepDistance:125
        }
    }
    
    var p = Enemy.prototype = new Character();
    p.super2 = Character.prototype;
    p.constructor = Enemy;
    
    p.tick = function(){
        this.super2.tick.call(this);
        doAiTick = true;
        if(!node){
            if(Global.socket.connected){
                doAiTick = false;
            }
        }
        if(this.state.health>0){
            if(doAiTick){
                this.aiTick();
            }
        }else{
            if(this.life<0){
                this.life = this.afterlife;
            }
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
