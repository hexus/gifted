(function(){
var node = typeof window === 'undefined';
var deps = ['shared/Entity']; // RequireJS dependencies

var init = function(Entity){ // Character definition (add RequireJS dependencies as arguments
    if(node){ // Node dependencies
        Entity = require('./Entity');
    }
    
    var Character = function(args){ // Constructor
        if(!args){args={};}
        this.super.constructor.call(this,args); // Superclass constructor
        var that = this;
        this.state.health = 100;
        this.state.xLimit = 10;
        this.state.Accel = 1;
        this.state.yLimit = 20;
        this.state.flySpeed = 20;
        this.state.jumpStr = 12;
        
        this.upDown = false;
        this.jump = false;
        this.state.moveLeft = false;
        this.state.moveRight = false;
        this.state.moveUp = false;
        this.state.moveDown = false;
        
        this.item = {
            left:false,
            right:false
        }
    }
    
    var p = Character.prototype = new Entity(); // Inheritance
    p.super = Entity.prototype; // Superclass reference
    p.constructor = Character;
    
    p.getStateDelta = function(readonly){ // Filter out unnecessary state properties
        var delta = this.super.getStateDelta.call(this,readonly);
        var giveashit;
        for(i in delta){
            giveashit = true;
            switch(i){
                case "aimAngle":
                    giveashit = this.state.isAiming;
                    break;
                case "flyDir":
                    giveashit = this.state.isFlying;
                    break;
                case "gravCount": case "onFloor": case "angle":
                    giveashit = false;
                    break;
            }
            if(!giveashit){
                delete(delta[i]);
            }
        }
        return delta;
    }
    
    p.getItem = function(side){
        side = !side ? 'r' : side;
        switch(side){
            case 'l': return this.item.left; break;
            case 'r': return this.item.right; break;
        }
    }
    
    p.setItem = function(side,item){
        side = !side ? 'r' : side;
        item = !item ? false : item;
        if(item){
            item.owner = this;
            switch(side){
                case 'l': 
                    this.item.left = item;
                    break;
                case 'r':
                    this.item.right = item;
                    break;
            }
        }
    }
    
    p.setItems = function(left,right){
        this.setItem('l',left);
        this.setItem('r',right);
    }
    
    p.unsetItem = function(side){
        side = !side ? 'r' : side;
        var i = this.getItem(side);
        if(i){
            i.owner = false;
            switch(side){
                case 'l':
                    this.item.left = false;
                    break;
                case 'r':
                    this.item.right = false;
                    break;
            }
        }
        return i;
    }
    
    p.useItem = function(side){
        side = !side ? 'r' : side;
        i = this.getItem(side);
        if(i){
            i.state.inUse = true;
        }
    }
    
    p.stopUsingItem = function(side){
        side = !side ? 'r' : side;
        i = this.getItem(side);
        if(i){
            i.state.inUse = false;
        }
    }
    
    p.pickUpItem = function(side){
        side = !side ? 'r' : side;
        var i = this.world.removeNearestItem(
            this.state.x,
            this.state.y,
            Math.round(this.hitbox.width + this.hitbox.height / 2)
        );
        if(i){
            this.setItem(side,i);
        }
    }
    
    p.dropItem = function(side){
        side = !side ? 'r' : side;
        var i = this.unsetItem(side);
        if(i){
            i.state.inUse = false;
            i.state.x = this.state.x;
            i.state.y = this.state.y;
            i.state.xSpeed = Math.round(this.state.xSpeed * 1.5);
            i.state.ySpeed = Math.round(this.state.ySpeed * 1.5);
            this.world.addProjectile(i);
        }
    }
    
    p.pickUpOrDropItem = function(side){
        side = !side ? 'r' : side;
        var i = this.getItem(side);
        if(i){
            this.dropItem(side);
        }else{
            this.pickUpItem(side);
        }
    }
    
    p.fly = function(){ with(this.state){flying = !isFlying; ySpeed %= flySpeed; flyDir = ySpeed>=0 ? 1 : -1;} }
    
    p.jump = function(){ with(this.state){if(onFloor && !isFlying){this.jump = true;}} }
    
    p.tick = function(){
        if(this.state.health>0){
            this.itemTick();
            with(this){
                if(state.moveUp && state.onFloor && !upDown && !state.isFlying){
                    jump = true;
                    upDown = true;
                }
                
                if(upDown && !state.moveUp){
                    upDown = false;
                }
                
                // Movement booleans
                if((state.moveLeft && !state.moveRight) || (state.moveRight && !state.moveLeft)){
                    state.direction = state.moveLeft ? -1 : 1;
                    state.xSpeed += state.direction*state.Accel;
                }else if(Math.abs(state.xSpeed)>state.Accel){
                    state.xSpeed -= state.direction*state.Accel;
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
                    if((state.moveUp && !state.moveDown) || (!state.moveUp && state.moveDown)){
                        state.flyDir = (state.moveUp) ? -1 : 1;
                        state.ySpeed += state.flyDir*state.Accel;
                    }else if(Math.abs(state.ySpeed)>state.Accel){
                        state.ySpeed -= state.flyDir*state.Accel;
                    }else{
                        state.ySpeed = 0;
                    }
                }
            }
        }
        this.super.tick.call(this);
    }
    
    p.itemTick = function(){
        if(this.getItem('l')){
            this.getItem('l').tick();
        }
        if(this.getItem('r')){
            this.getItem('r').tick();
        }
    }
    
    return Character;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
})();
