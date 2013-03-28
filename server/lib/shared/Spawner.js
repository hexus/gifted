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
        this.egg = args.egg || [];
        this.babbies = [];
        this.babbyLimit = 1;
        this.state.entityType = 'spawner';
        this.state.xLimit = this.state.yLimit = this.state.flySpeed = 10;
        this.state.health = 300;
        if(!node){
            this.clip = this.addChild(new lib.mcSpawner()).clip;
        }
    }
    
    var p = Spawner.prototype = new Entity();
    p.super2 = Entity.prototype;
    p.constructor = Spawner;
    
    p.tick = function(){
        this.super2.tick.call(this);
        if(this.state.health>0){
            doSpawn = true;
            if(!node && Global.socket){
                if(Global.socket.connected){
                    doSpawn = false;
                }
            }
            if(doSpawn){
                if(this.babbies.length<this.babbyLimit){
                    this.cooldown--;
                    if(this.cooldown<1){
                        this.birth();
                        this.cooldown = this.cooldownTime;
                    }
                }
            }
        }
    }
    
    p.birth = function(){
        if(this.cooldown==0 && this.egg){
            var egg = JSON.parse(JSON.stringify(this.egg));
            if(egg.entityType!='spawner'){
                egg.x = this.x;
                egg.y = this.y;
                var babby = this.world.addEntity(this.world.recreateEntity(egg));
                babby.spawnerParent = this;
                this.babbies.push(babby);
                this.clip.gotoAndPlay('closing');
            }
        }
    }
    
    p.leave = function(babby){
        for(var b in this.babbies){
            var gotBabby = this.babbies.indexOf(babby);
            if(gotBabby>-1){
                this.babbies.splice(gotBabby,1); // index of babby shouldn't be important
            }
        }
    }
    
    return Spawner;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
