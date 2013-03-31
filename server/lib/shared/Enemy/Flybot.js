(function(){
var node = typeof window === 'undefined';
var deps = ['assets','shared/Enemy'];

var init = function(lib,Enemy){
    
    if(node){
        Enemy = require('../Enemy');
    }
    
    var Flybot = function(args){ // Abstract
        if(!args){args={};}
        this.super3.constructor.call(this,args);
        this.wander = false;
        if(!node){
            this.char = this.addChild(new lib.mcFlybot()).flybotChar;
            this.turret = this.char.turret;
            this.cacheBody();
        }
    }
    
    var p = Flybot.prototype = new Enemy();
    p.super3 = Enemy.prototype;
    p.constructor = Flybot;
    
    p.cacheBody = function(){
        this.char.body.cache(-this.hitbox.width/2,-this.hitbox.height/2,this.hitbox.width,this.hitbox.height,this.world.scale);
    }
    
    p.cacheChar = function(){
        this.char.cache(-this.hitbox.width/2,-this.hitbox.height/2,this.hitbox.width,this.hitbox.height,this.world.scale);
    }
    
    p.tick = function(){
        this.super3.tick.call(this);
        if(!node){
            if(this.state.health>0){
                if(this.target){
                    this.scaleX = this.x < this.target.x ? 1 : -1;
                }else{
                    this.scaleX = this.state.direction;
                }
                this.turret.rotation = this.scaleX>0 ? this.state.aimAngle : 180-this.state.aimAngle;
            }else{
                if(this.char.currentFrame<1){
                    this.char.gotoAndStop('dead');
                    this.cacheChar();
                }
            }
        }
    }
    
    p.stopMoving = function(){
        this.state.moveUp = false;
        this.state.moveDown = false;
        this.state.moveLeft = false;
        this.state.moveRight = false;
    }
    
    p.aiTick = function(){
        this.super3.aiTick.call(this);
        //this.search();
        this.wanderStep();
        if(this.target){
            this.state.isFlying = true;
            this.state.aimAngle = Math.atan2(this.target.y-this.y,this.target.x-this.x)*180/Math.PI;
            if(!this.wander){
                var rads = this.state.aimAngle * Math.PI/180;
                var xRad = Math.cos(rads)*this.state.flySpeed;
                var yRad = Math.sin(rads)*this.state.flySpeed;
                if(this.world.getDistance(this.x,this.y,this.target)>this.state.ai.keepDistance+this.state.flySpeed*2){
                    this.state.moveUp = this.y > this.target.y + this.state.flySpeed;
                    this.state.moveDown = this.y < this.target.y - this.state.flySpeed;
                    this.state.moveLeft = this.x > this.target.x + this.state.flySpeed;
                    this.state.moveRight = this.x < this.target.x - this.state.flySpeed;
                    this.state.xSpeed = Math.cos(rads) > 0 ? Math.ceil(xRad) : Math.floor(xRad);
                    this.state.ySpeed = Math.sin(rads) > 0 ? Math.ceil(yRad) : Math.floor(yRad);
                }else if(this.world.getDistance(this.x,this.y,this.target)<this.state.ai.keepDistance-this.state.flySpeed*2){
                    // not sure if the next four lines are accurate
                    this.state.moveUp = this.y < this.target.y - this.state.flySpeed;
                    this.state.moveDown = this.y > this.target.y + this.state.flySpeed;
                    this.state.moveLeft = this.x < this.target.x - this.state.flySpeed;
                    this.state.moveRight = this.x > this.target.x + this.state.flySpeed;
                    this.state.xSpeed = Math.cos(rads) > 0 ? -Math.ceil(xRad) : -Math.floor(xRad);
                    this.state.ySpeed = Math.sin(rads) > 0 ? -Math.ceil(yRad) : -Math.floor(yRad);
                }else{
                    this.stopMoving();
                }
            }
        }else{
            this.state.isFlying = false;
            if(!this.wander){
                this.stopMoving();
            }else{
                if(this.wander.jump){
                    this.state.moveUp = true;
                }
            }
        }
        // Random
        //this.state.aimAngle = (this.state.aimAngle + 1) % 360;
        //this.state.xSpeed += -this.state.flySpeed+Math.round(Math.random()*(this.state.flySpeed*2));
        //this.state.ySpeed += -this.state.flySpeed+Math.round(Math.random()*(this.state.flySpeed*2));
    }
    
    p.search = function(){
        var nearestPlayer = this.world.getNearestPlayer(this.x,this.y,this.state.ai.sightRange);
        if(!this.target){
            this.target = nearestPlayer;
        }else{
            if(this.world.getDistance(this.x,this.y,this.target)>this.state.ai.loseInterest){
                this.target = false;
            }
            if(nearestPlayer){
                var distance = this.world.getDistance(this.x,this.y,nearestPlayer);
                if(distance<Math.round(this.state.ai.sightRange/2)){
                    this.target = nearestPlayer;
                }
            }
        }
        
    }
    
    p.wanderStep = function(){
        if(!this.wander){
            if(this.target ? Math.random()<0.1 : Math.random()<0.01){
                var direction = this.target ? Math.round(Math.random()*4) : (Math.random()<0.5 ? 0 : 2);
                this.wander = {
                    steps:6+Math.round(Math.random()*8),
                    direction:direction,
                    jump:Math.random()<0.2
                }
            }
        }
        if(this.wander){
            if(this.wander.steps>0){
                this.freemove = false;
                this.stopMoving();
                switch(this.wander.direction){
                    case 0: this.state.moveRight = true; break;
                    case 1: this.state.moveDown = true; break;
                    case 2: this.state.moveLeft = true; break;
                    case 3: this.state.moveUp = true; break;
                }
                this.wander.steps--;
            }else{
                this.stopMoving();
                this.wander = false;
            }
        }
    }
    
    return Flybot;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
