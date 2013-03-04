(function(){
var node = typeof window === 'undefined';
var deps = ['assets','shared/Projectile'];

var init = function(lib,Projectile){
    
    if(node){
        Projectile = require('./Projectile');
    }
    
    var Item = function(args){ // Abstract tbh
        if(!args){args={};}
        this.super2.constructor.call(this,args);
        this.hitbox.width = this.hitbox.height = 15;
        this.type = 0;
        this.owner = null; // reference to holding character
        if(args){ // can be passed on creation
            this.owner = args.owner || this.owner;
        }
        
        // Item state additions:
        this.state.inUse = false;
        this.state.coolDownTime = 0;
        this.state.chargeTime = 0;
        // Self-maintained:
        this.state.coolDown = 0;
        this.state.charge = 0;
        this.lastInUse = false;
    }
    
    var p = Item.prototype = new Projectile();
    p.super2 = Projectile.prototype;
    p.constructor = Item;
    
    p.tick = function(){
        // Air resistance
        if((this.state.ySpeed==this.state.yLimit || this.state.onFloor) && !this.state.isFlying){
            if(Math.abs(this.state.xSpeed) > this.state.Accel + 1){
                this.state.xSpeed -= this.state.direction * this.state.Accel;
            }else{
                this.state.xSpeed = 0;
                this.rotation = 0;
                this.state.angle = this.state.direction>0 ? 0 : 180;
            }
        }
        
        this.super2.tick.call(this);
        
        // Item usage
        if(this.state.coolDown>0){this.state.coolDown--;}
        if(this.state.inUse){
            if(this.state.coolDown===0){
                if(this.state.charge<this.state.chargeTime){
                    this.state.charge++;
                }else{
                    this.use();
                    this.state.coolDown = this.state.coolDownTime;
                    this.state.charge = 0;
                }
            }
            this.lastInUse = true;
        }else{
            if(this.lastInUse){
                this.stopUsing();
            }
            this.lastInUse = false;
        }
    }
    
    p.use = function(){
        
    }
    
    p.stopUsing = function(){
        
    }
    
    return Item;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
