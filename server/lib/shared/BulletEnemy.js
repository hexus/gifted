(function(){
var node = typeof window === 'undefined';
var deps = ['createjs','assets','lib/global','lib/player','shared/Bullet','shared/Effect'];

var init = function(createjs,lib,Global,Player,Bullet,Effect){
    
    if(node){
        Player = require('../User');
        Bullet = require('./Bullet');
        Effect = require('./Effect');
    }
    
    var BulletEnemy = function(args){
        if(!node){this.initialize();}
        this.super_Bullet.constructor.call(this,args);
        var that = this;
        this.life = 50;
        this.state.entityType = 'bulletenemy';
        this.state.damage = 1;
        this.state.knockback = 2;
        if(!node){
            this.clip.gotoAndStop('bullet_enemy');
            this.cacheClip();
        }
    }
       
    var p = BulletEnemy.prototype = new Bullet();
    p.super_Bullet = Bullet.prototype;
    p.constructor = BulletEnemy;

    p.tick = function(){
        this.super_Bullet.tick.call(this);
    }
    
    p.onContact = function(e){
        var doApply = false, doRemove = false;
        if(e instanceof Player){
            doApply = true;
            doRemove = true;
            if(!node && Global.socket){ // Authoritative server
                if(Global.socket.connected){
                    doApply = false;
                }
            }
            if(e.state.health<1){
                doApply = false;
                doRemove = false;
            }
            if(doApply){
                var rads = this.state.angle * Math.PI/180;
                var effect = {
                    health:-this.state.damage,
                    xSpeed:Math.round(Math.cos(rads) * this.state.knockback),
                    ySpeed:Math.round(Math.sin(rads) * this.state.knockback)
                };
                e.applyEffect(new Effect(effect));
            }
            if(doRemove){
                this.isRubbish = true;
            }
        }
        return doApply || doRemove;
    }
   
    return BulletEnemy; 
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());