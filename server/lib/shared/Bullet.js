(function(){
var node = typeof window === 'undefined';
var deps = ['createjs','assets','lib/global','shared/Enemy','shared/Projectile','shared/Effect','shared/Spawner'];

var init = function(createjs,lib,Global,Enemy,Projectile,Effect,Spawner){
    
    if(node){
        Enemy = require('./Enemy');
        Projectile = require('./Projectile');
        Effect = require('./Effect');
        Spawner = require('./Spawner');
    }
    
    var Bullet = function(args){
        if(!args){args={};}
        if(!node){this.initialize();}
        this.super_Projectile.constructor.call(this,args);
        var that = this;
        this.life = 60;
        this.owner = args.owner || false;
        this.isRubbishOnCollide = true;
        this.state.entityType = 'bullet';
        this.state.isFlying = true;
        this.state.damage = args.damage || 10;
        this.state.knockback = args.knockback || 5;
        if(!node){
            this.alpha = 0;
            this.scaleX = this.state.direction;
            this.clip = this.addChild(new lib.mcProjectile());
            this.clip.stop();
            this.cacheClip();
        }
    }
       
    var p = Bullet.prototype = new Projectile();
    p.super_Projectile = Projectile.prototype;
    p.constructor = Bullet;
    
    p.cacheClip = function(){
        if(this.world){
            this.clip.cache(-23,-1.5,46,3,this.world.scale);
        }
    }

    p.tick = function(){
        this.super_Projectile.tick.call(this);
        if(!node && this.alpha<1){
            this.alpha += 0.1;
        }
    }
    
    p.updateRotation = function(){
        this.super_Projectile.updateRotation.call(this);
        with(this.state){
            this.rotation = direction>0 ? angle : angle-180;
        }
    }
    
    p.onContact = function(e){
        var doApply = false, doRemove = false;
        if((e instanceof Enemy || e instanceof Spawner) && e!=this.owner){
            doApply = true;
            doRemove = true;
            if(!node && Global.socket){ // Authoritative server
                if(Global.socket.connected){
                    doApply = false;
                }
            }
            if(e.state.health<1 || e.state.spawnerSkin=='weapon'){
                doApply = false;
                doRemove = false;
            }
            if(doApply){
                var effect = {health:-this.state.damage};
                if(e instanceof Enemy){ // Only knock back enemies, not spawners
                    var rads = this.state.angle * Math.PI/180;
                    effect.xSpeed = Math.round(Math.cos(rads) * this.state.knockback);
                    effect.ySpeed = Math.round(Math.sin(rads) * this.state.knockback);
                }
                e.applyEffect(new Effect(effect));
            }
            if(doRemove){
                this.isRubbish = true;
            }
        }
        return doApply || doRemove;
    }
   
    return Bullet; 
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());