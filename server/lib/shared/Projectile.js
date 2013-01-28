(function(){
var node = typeof window === 'undefined';
var deps = ['shared/Entity']; // RequireJS dependencies

var init = function(Entity){ // Class definition

    var Projectile = function(args){
        this.super.constructor.call(this,args); // Superclass constructor
        this.pid = 0;
        this.hitbox.width = 4;
        this.hitbox.height = 4;
        this.state.isFlying = false;
        this.state.xLimit = 40;
        this.state.yLimit = 40;
        this.updateState(args);
    }
    
    var p = Projectile.prototype = new Entity(); // Inheritance
    p.super = Entity.prototype; // Superclass reference
    p.constructor = Projectile;
    
    p.updateState = function(args){
        if(args){
            this.state.direction = args.direction || 1;
            //this.state.angle = args.angle || 0;
            var rads = args.angle * (Math.PI/180);
            this.state.xSpeed = Math.round(Math.cos(rads) * args.speed);
            this.state.ySpeed = Math.round(Math.sin(rads) * args.speed);
            this.updateRotation();
        }
    }
    
    p.updateRotation = function(){
        var dAngle = Math.atan2(-this.state.ySpeed,-this.state.xSpeed)/(Math.PI/180);
        this.rotation = dAngle-180;
        if(this.state.direction<0){this.rotation+=180;}
    }
    
    p.tick = function(){
        this.super.tick.call(this);
        if(this.hasCollided){
            this.state.xSpeed = 0;
            this.state.ySpeed = 0;
            this.state.isFlying = true;
        }else{
            this.updateRotation();            
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
