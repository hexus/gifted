(function(){
var node = typeof window === 'undefined';
var deps = ['createjs','assets','lib/global','shared/Entity','shared/Projectile','shared/Effect'];

var init = function(createjs,lib,Global,Entity,Projectile,Effect){
    
    if(node){
        Entity = require('./Entity');
        Projectile = require('./Projectile');
        Effect = require('./Effect');
    }
    
    var Bullet = function(args){
        if(!node){this.initialize();}
        this.super_Projectile.constructor.call(this,args);
        var that = this;
        this.state.projType = 'bullet';
        this.damage = 40;
        this.life = 60;
        this.isRubbishOnCollide = true;
        this.state.isFlying = true;
        this.alpha = 0;
        if(!node){
            this.scaleX = this.state.direction;
            this.clip = this.addChild(new lib.mcProjectile());
        }
    }
       
    var p = Bullet.prototype = new Projectile();
    p.super_Projectile = Projectile.prototype;
    p.constructor = Bullet;

    p.tick = function(){
        this.super_Projectile.tick.call(this);
        if(this.alpha<1){
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
        if(e instanceof Entity){
            e.applyEffect(new Effect({
                health:-10
            }));
            this.isRubbish = true;
        }
    }
   
    return Bullet; 
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());