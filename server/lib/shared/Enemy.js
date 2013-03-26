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
        this.hitbox.width = this.hitbox.height = 30;
        this.state.isFlying = true;
        this.state.xLimit = this.state.yLimit = this.state.flySpeed = 10;
    }
    
    var p = Enemy.prototype = new Character();
    p.super2 = Character.prototype;
    p.constructor = Enemy;
    
    p.tick = function(){
        this.super2.tick.call(this);
        if(!node){ // Client side
            doAiTick = true;
            if(Global.socket){
                if(Global.socket.connected){
                    doAiTick = false;
                }
            }
            if(doAiTick){
                this.aiTick();
            }
        }else{ // Server side
            this.aiTick(); 
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
