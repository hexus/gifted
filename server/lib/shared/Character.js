var node = typeof window === 'undefined';
var deps = ['shared/Entity']; // RequireJS dependencies

var init = function(Entity){ // Character definition (add RequireJS dependencies as arguments
    if(node){ // Node dependencies
        Entity = require('./Entity');
    }
    
    var Character = function(args){ // Constructor
        this.super.constructor.call(this,args); // Superclass constructor
        this.upDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        this.jump = false;
        with(this.state){
            xLimit = 20,
            Accel = 1,
            yLimit = 20,
            flySpeed = 12,
            jumpStr = 13
        }
    }
    
    var p = Character.prototype = new Entity(); // Inheritance
    p.super = Entity.prototype; // Superclass reference
    
    p.fly = function(){ with(this.state){flying = !isFlying; ySpeed %= flySpeed; flyDir = ySpeed>=0 ? 1 : -1;} }
    
    p.jump = function(){ with(this.state){if(onFloor && !isFlying){this.jump = true;}} }
    
    p.tick = function(){
        
        with(this){
            if(moveUp && state.onFloor && !upDown){
                jump = true;
                upDown = true;
            }
            
            if(upDown && !moveUp){
                upDown = false;
            }
            
            // Movement booleans
            if((moveLeft && !moveRight) || (moveRight && !moveLeft)){
                state.direction = moveLeft ? -1 : 1;
                state.xSpeed += state.direction*state.Accel;
            }else if(Math.abs(state.xSpeed)>state.Accel){
                state.xSpeed -= state.direction*state.Accel
            }else{
                state.xSpeed = 0;
            }
            
            // Y Booleans
            if(!state.isFlying){
                if(jump){
                    state.ySpeed = -state.jumpStr;
                    jump = false;
                }
            }else{
                if((moveUp && !moveDown) || (!moveUp && moveDown)){
                    state.flyDir = (moveUp) ? -1 : 1;
                    state.ySpeed += state.flyDir*state.Accel;
                }else if(Math.abs(state.ySpeed)>state.Accel){
                    state.ySpeed -= state.flyDir*state.Accel;
                }else{
                    state.ySpeed = 0;
                }
            }
        }
        
        this.super.tick.call(this);
    }
    
    return Character;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}