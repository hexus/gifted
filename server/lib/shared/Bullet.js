(function(){
var node = typeof window === 'undefined';
var deps = ['createjs','assets','lib/global','shared/Projectile'];

var init = function(createjs,lib,Global,Projectile){
    
    var Bullet = function(args){
        if(!node){this.initialize();}
        this.super2.constructor.call(this,args);
        var that = this;
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
    p.super2 = Projectile.prototype;
    p.constructor = Bullet;

    p.tick = function(){
        this.super2.tick.call(this);
    }
   
    return Bullet; 
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());