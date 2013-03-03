(function(){
var node = typeof window === 'undefined';
var deps = ['createjs','assets','lib/global','shared/Projectile'];

var init = function(createjs,lib,Global,Projectile){
    
    if(node){
        Projectile = require('./Projectile');
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
        if(!node){
            this.scaleX = this.state.direction;
            this.clip = this.addChild(new lib.mcProjectile());
        }
        //this.tick();
    }
       
    var p = Bullet.prototype = new Projectile();
    p.super_Projectile = Projectile.prototype;
    p.constructor = Bullet;

    p.tick = function(){
        this.super_Projectile.tick.call(this);
    }
    
    p.updateRotation = function(){
        this.super_Projectile.updateRotation.call(this);
        with(this.state){
            this.rotation = direction>0 ? angle : angle-180;
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