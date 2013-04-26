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
        this.hitbox.width = 20;
        this.hitbox.height = 60;
        this.state.entityType = 'spawner';
        this.state.xLimit = this.state.yLimit = this.state.flySpeed = 10;
        this.state.health = 300;
        this.state.spawnerSkin = args.spawnerSkin || 'flybot';
        this.egg = args.egg || [];
        this.babbies = [];
        this.babbyLimit = args.babbyLimit || 4;
        this.deadTick = false;
        if(!node){
            this.mcSpawner = this.addChild(new lib.mcSpawner());
            this.mcSpawner.gotoAndStop(this.state.spawnerSkin);
            this.clip = this.mcSpawner['spawnerClip_'+this.state.spawnerSkin];
            this.cacheBase();
        }
    }
    
    var p = Spawner.prototype = new Entity();
    p.super2 = Entity.prototype;
    p.constructor = Spawner;
    
    p.cacheBase = function(){
        this.clip['base_'+this.state.spawnerSkin].cache(-this.hitbox.width/2,-this.hitbox.height/2,this.hitbox.width,this.hitbox.height,this.world.scale);
    }
    
    p.cacheClip = function(){
        this.clip.cache(-this.hitbox.width/2,-this.hitbox.height/2,this.hitbox.width,this.hitbox.height,this.world.scale);
    }
    
    p.tick = function(){
        this.super2.tick.call(this);
        if(this.state.xSpeed>0){
            this.state.xSpeed--;
        }
        if(this.state.xSpeed<0){
            this.state.xSpeed++;
        }
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
        }else{
            if(!node && !this.deadTick){
                this.clip.gotoAndStop('dead');
                this.cacheClip();
                this.deadTick = true;
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
                if(!node){
                    this.clip.gotoAndPlay('closing');
                }
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
