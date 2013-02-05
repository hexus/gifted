(function(){
var node = typeof window === 'undefined';
var deps = ['shared/Entity']; // RequireJS dependencies

var init = function(Entity){ // Class definition

    if(node){ // Node dependencies
        Entity = require('./Entity');
    }

    var Projectile = function(args){
        if(!args){args={};}
        this.super.constructor.call(this,args); // Superclass constructor
        this.life = -1;
        this.damage = 10;
        this.rotateWithSpeed = true;
        this.hitbox.width = 4;
        this.hitbox.height = 4;
        this.state.xSpeed = 0;
        this.state.ySpeed = 0;
        this.state.xLimit = this.state.yLimit = this.state.flySpeed = 40;
        this.state.direction = 1;
        this.state.angle = 0;
        
        if(args){
            this.state.direction = args.direction || this.state.direction;
            this.state.angle = args.angle || this.state.angle;
            var rads = this.state.angle * (Math.PI/180);
            this.state.flySpeed = args.speed || this.state.flySpeed;
            this.state.xSpeed = Math.round(Math.cos(rads) * args.speed) || this.state.xSpeed; // Round these if
            this.state.ySpeed = Math.round(Math.sin(rads) * args.speed) || this.state.ySpeed; // you get problems
            this.updateRotation();
        }
    }
    
    var p = Projectile.prototype = new Entity(); // Inheritance
    p.super = Entity.prototype; // Superclass reference
    p.constructor = Projectile;
    
    p.tick = function(){
        this.super.tick.call(this);
        if(this.life===0){
            this.onDeath();
        }
        if(!node){
            this.scaleX = this.state.direction>0 ? 1 : -1;
        }
    }
    
    p.onDeath = function(){
        
    }
    
    return Projectile;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
