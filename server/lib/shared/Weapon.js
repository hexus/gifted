(function(){
var node = typeof window === 'undefined';
var deps = ['shared/Item','shared/Bullet'];

var init = function(Item,Bullet){
    
    if(node){
        Projectile = require('./Item');
    }
    
    var Weapon = function(args){ // Further abstract?!
        if(!args){args={};}
        this.super3.constructor.call(this,args);
        this.wid = args.wid || 0;
        this.damage = 5;
        this.spray = 3;
        this.state.isFlying = true;
        if(!node){
            this.clip = this.addChild(new lib.weaponsRanged()); 
            this.clip.gotoAndStop(this.wid);
        }
    }
    
    var p = Weapon.prototype = new Item();
    p.super3 = Item.prototype;
    p.constructor = Weapon;
    
    p.tick = function(){
        this.super3.tick.call(this);
    }
    
    p.sprayModifier = function(){ // two decimal places
        return Math.round((-this.spray/2+Math.random()*this.spray)*100)/100;
    }
    
    p.use = function(){ // fire
        this.super3.use.call(this);
        if(!this.owner){
            var ps = this.state;
            var proj = new Bullet({
                x:ps.x,
                y:ps.y,
                direction:ps.direction,
                angle:ps.angle+this.sprayModifier(),
                speed:40
            });
        }else{
            console.log("hallo! this weapon is firing with an owner");
            var ps = this.owner.state;
            var proj = new Bullet({
                x:ps.x,
                y:ps.y,
                direction:ps.aimDir,
                angle:ps.aimAngle+this.sprayModifier(),
                speed:40
            });
        }
        this.world.addProjectile(proj);
    }
    
    return Weapon;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
