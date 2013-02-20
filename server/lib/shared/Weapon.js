(function(){
var node = typeof window === 'undefined';
var deps = ['shared/Item','shared/Bullet'];

var init = function(Item,Bullet){
    
    if(node){
        Item = require('./Item');
        Bullet = require('./Bullet');
    }
    
    var Weapon = function(args){ // Further abstract?!
        if(!args){args={};}
        this.super3.constructor.call(this,args);
        this.state.projType = 'item';
        this.state.itemType = 'weapon';
        this.state.weaponId = args.weaponId || 0;
        this.state.weaponDamage = 5;
        //this.spray = 3;
        //this.state.isFlying = true; // For testing
        if(!node){
            this.clipInfo = {
                type:'weaponsRanged',
                frame:this.state.weaponId
            }
            this.clip = this.addChild(new lib.weaponsRanged()); 
            this.clip.gotoAndStop(this.clipInfo.frame);
        }
    }
    
    var p = Weapon.prototype = new Item();
    p.super3 = Item.prototype;
    p.constructor = Weapon;
    
    p.tick = function(){
        this.super3.tick.call(this);
        if(!node){
            this.clip.gotoAndStop(this.clipInfo.frame);
        }
    }
    
    p.sprayModifier = function(){ // two decimal places
        return Math.round((-this.spray/2+Math.random()*this.spray)*100)/100;
    }
    
    p.use = function(){ // fire
        this.super3.use.call(this);
        if(this.owner){
            var ps = this.owner.state;
            var proj = new Bullet({
                x:ps.x,
                y:ps.y-15,
                direction:ps.aimDir,
                angle:ps.aimAngle,//+this.sprayModifier(),
                speed:40
            });
        }else{
            var ps = this.state;
            var proj = new Bullet({
                x:ps.x,
                y:ps.y,
                direction:ps.direction,
                angle:ps.angle,//+this.sprayModifier(),
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
