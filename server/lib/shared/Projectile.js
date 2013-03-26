(function(){
var node = typeof window === 'undefined';
var deps = ['shared/Entity']; // RequireJS dependencies

var init = function(Entity){ // Class definition

    if(node){ // Node dependencies
        Entity = require('./Entity');
    }

    var Projectile = function(args){
        if(!args){args={};}
        this.super_Entity.constructor.call(this,args); // Superclass constructor
        this.rotateWithSpeed = true;
        this.hitbox.width = 4;
        this.hitbox.height = 4;
        this.state.xSpeed = 0;
        this.state.ySpeed = 0;
        this.state.xLimit = this.state.yLimit = this.state.flySpeed = 40;
        this.state.direction = 1;
        
        if(args){
            this.state.direction = args.direction || this.state.direction;
            this.state.flySpeed = args.speed || this.state.flySpeed;
            var rads = this.state.angle * (Math.PI/180);
            this.state.xSpeed = Math.round(Math.cos(rads) * args.speed) || this.state.xSpeed;
            this.state.ySpeed = Math.round(Math.sin(rads) * args.speed) || this.state.ySpeed;
            this.updateRotation();
        }
    }
    
    var p = Projectile.prototype = new Entity(); // Inheritance
    p.super_Entity = Entity.prototype; // Superclass reference
    p.constructor = Projectile;
    
    p.tick = function(){
        this.super_Entity.tick.call(this);
        if(!node){
            this.scaleX = this.state.direction>0 ? 1 : -1;
        }
    }
    
    return Projectile;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
