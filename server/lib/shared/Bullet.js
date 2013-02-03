define(['createjs','assets','lib/global','shared/Projectile'],
function(createjs,lib,Global,Projectile){
   var argz;
    
   var Bullet = function(args){
       this.super2.constructor.call(this,args);
       this.initialize();
       var that = this;
       
       this.scaleX = this.state.direction;
       this.clip = new lib.mcProjectile();
       this.addChild(this.clip);
   }
   
   var p = Bullet.prototype = new Projectile();
   p.super2 = Projectile.prototype;
   p.constructor = Bullet;
   
   p.tick = function(){
       this.super2.tick.call(this);
       
   }
   
   return Bullet; 
});