(function(){
var node = typeof window === 'undefined';
var deps = ['assets','lib/global','shared/Entity'];

var init = function(lib,Global,Entity){
    
    if(node){
        Entity = require('./Entity');
    }
    
    var Spawner = function(args){ // Abstract
        if(!args){args={};}
        this.super2.constructor.call(this,args);
        this.cooldownTime = 32;
        this.cooldown = this.cooldownTime;
        this.hitbox.width = this.hitbox.height = 40;
        this.eggs = args.eggs || [];
        this.babbies = [];
        this.state.entityType = 'spawner';
        this.state.xLimit = this.state.yLimit = this.state.flySpeed = 10;
    }
    
    var p = Spawner.prototype = new Entity();
    p.super2 = Character.prototype;
    p.constructor = Spawner;
    
    p.tick = function(){
        this.super2.tick.call(this);
        doSpawn = true;
        if(!node && Global.socket){
            if(Global.socket.connected){
                doSpawn = false;
            }
        }
        if(doSpawn){
            cooldown--;
            if(cooldown<1){
                this.birth();
                this.cooldown = this.cooldownTime;
            }
        }
    }
    
    p.birth = function(){
        
    }
    
    return Enemy;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
