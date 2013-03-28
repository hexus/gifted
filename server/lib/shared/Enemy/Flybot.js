(function(){
var node = typeof window === 'undefined';
var deps = ['assets','shared/Enemy'];

var init = function(lib,Enemy){
    
    if(node){
        Enemy = require('./Enemy');
    }
    
    var Flybot = function(args){ // Abstract
        if(!args){args={};}
        this.super3.constructor.call(this,args);
        if(!node){
            this.char = this.addChild(new lib.mcFlybot()).flybotChar;
            this.turret = this.char.turret;
        }
    }
    
    var p = Flybot.prototype = new Enemy();
    p.super3 = Enemy.prototype;
    p.constructor = Flybot;
    
    p.tick = function(){
        this.super3.tick.call(this);
        if(!node){
            if(this)
            if(this.target){
                this.scaleX = this.x < this.target.x ? 1 : -1;
            }else{
                this.scaleX = this.state.direction;
            }
            this.turret.rotation = this.scaleX>0 ? this.state.aimAngle : 180-this.state.aimAngle;
        }
    }
    
    p.aiTick = function(){
        this.super3.aiTick.call(this);
        this.search();
        if(this.target){
            this.state.aimAngle = Math.atan2(this.target.y-this.y,this.target.x-this.x)*180/Math.PI;
            
            var rads = this.state.aimAngle * Math.PI/180;
            var xRad = Math.cos(rads)*this.state.flySpeed;
            var yRad = Math.sin(rads)*this.state.flySpeed;
            if(this.world.getDistance(this,this.target)>this.state.ai.keepDistance+this.state.flySpeed*2){
                this.state.moveUp = this.y > this.target.y + this.state.flySpeed;
                this.state.moveDown = this.y < this.target.y - this.state.flySpeed;
                this.state.moveLeft = this.x > this.target.x + this.state.flySpeed;
                this.state.moveRight = this.x < this.target.x - this.state.flySpeed;
                this.state.xSpeed = Math.cos(rads) > 0 ? Math.ceil(xRad) : Math.floor(xRad);
                this.state.ySpeed = Math.sin(rads) > 0 ? Math.ceil(yRad) : Math.floor(yRad);
            }else if(this.world.getDistance(this,this.target)<this.state.ai.keepDistance-this.state.flySpeed*2){
                // not sure if the next four lines are accurate
                this.state.moveUp = this.y < this.target.y - this.state.flySpeed;
                this.state.moveDown = this.y > this.target.y + this.state.flySpeed;
                this.state.moveLeft = this.x < this.target.x - this.state.flySpeed;
                this.state.moveRight = this.x > this.target.x + this.state.flySpeed;
                this.state.xSpeed = Math.cos(rads) > 0 ? -Math.ceil(xRad) : -Math.floor(xRad);
                this.state.ySpeed = Math.sin(rads) > 0 ? -Math.ceil(yRad) : -Math.floor(yRad);
            }else{
                this.state.moveLeft = false;
                this.state.moveRight = false;
                this.state.moveUp = false;
                this.state.moveDown = false;
            }
        }else{
            if(this.wander){
                
            }else{
                this.state.moveLeft = false;
                this.state.moveRight = false;
                this.state.moveUp = false;
                this.state.moveDown = false;
            }
            // Random
            //this.state.aimAngle = (this.state.aimAngle + 1) % 360;
            //this.state.xSpeed += -this.state.flySpeed+Math.round(Math.random()*(this.state.flySpeed*2));
            //this.state.ySpeed += -this.state.flySpeed+Math.round(Math.random()*(this.state.flySpeed*2));
        }
    }
    
    p.search = function(){
        var nearestPlayer = this.world.getNearestPlayer(this.x,this.y,this.state.ai.sightRange);
        if(!this.target){
            this.target = nearestPlayer;
        }else{
            if(this.world.getDistance(this,this.target)>this.state.ai.loseInterest){
                this.target = false;
            }
            if(nearestPlayer){
                var distance = this.world.getDistance(this,nearestPlayer);
                if(distance<Math.round(this.state.ai.sightRange/2)){
                    this.target = nearestPlayer;
                }
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
