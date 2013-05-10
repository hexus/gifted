(function(){
var node = typeof window === 'undefined';
var deps = ['assets','lib/global','shared/Enemy','shared/BulletEnemy'];

var init = function(lib,Global,Enemy,BulletEnemy){
    
    if(node){
        Enemy = require('../Enemy');
        BulletEnemy = require('../BulletEnemy');
    }
    
    var Flybot = function(args){ // Abstract
        if(!args){args={};}
        this.super3.constructor.call(this,args);
        this.state.entityType = 'flybot';
        this.state.health = 50;
        this.state.maxHealth = 50;
        this.wander = false;
        this.searchFrequency = 5;
        this.shootFrequency = 16;
        this.spray = 26;
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
    
    p.sprayModifier = function(){ // two decimal places
        return Math.round((-this.spray/2+Math.random()*this.spray)*100)/100;
    }
    
    p.tick = function(){
        this.super3.tick.call(this);
        var state = this.state;
        if(!node){
            if(state.health>0){
                this.char.scaleX = state.aimDir;
                this.turret.rotation = this.char.scaleX>0 ? state.aimAngle : 180-state.aimAngle;
            }else{
                if(this.char.currentFrame<1){
                    this.stopMoving();
                    this.char.gotoAndStop('dead');
                    this.cacheChar();
                }
            }
        }
    }
    
    p.stopMoving = function(){
        var state = this.state;
        state.moveUp = false;
        state.moveDown = false;
        state.moveLeft = false;
        state.moveRight = false;
    }
    
    p.aiTick = function(){
        this.super3.aiTick.call(this);
        var state = this.state;
        var step = this.world.step;
        if(step%this.searchFrequency==0){
            this.targetDistance = this.world.getDistance(state.x,state.y,this.target);
            this.search();
        }
        this.wanderStep();
        if(this.target){
            state.isFlying = true;
            state.isAimingLeft = true;
            state.aimAngle = Math.atan2(this.target.y-state.y,this.target.x-state.x)*180/Math.PI;
            state.aimDir = state.x < this.target.x ? 1 : -1;
            if(!this.wander){
                var rads = state.aimAngle * Math.PI/180;
                var cos = Math.cos(rads);
                var sin = Math.sin(rads);
                var xRad = cos*state.flySpeed;
                var yRad = sin*state.flySpeed;
                var xRadC = Math.ceil(xRad);
                var xRadF = Math.floor(xRad);
                var yRadC = Math.ceil(yRad);
                var yRadF = Math.floor(yRad);
                if(this.targetDistance>state.ai.keepDistance+state.flySpeed*2){
                    state.moveUp = state.y > this.target.y + state.flySpeed;
                    state.moveDown = state.y < this.target.y - state.flySpeed;
                    state.moveLeft = state.x > this.target.x + state.flySpeed;
                    state.moveRight = state.x < this.target.x - state.flySpeed;
                    state.xSpeed = cos > 0 ? xRadC : xRadF;
                    state.ySpeed = sin > 0 ? yRadC : yRadF;
                }else if(this.targetDistance<state.ai.keepDistance-this.state.flySpeed*2){
                    // not sure if the next four lines are accurate
                    state.moveUp = state.y < this.target.y - state.flySpeed;
                    state.moveDown = state.y > this.target.y + state.flySpeed;
                    state.moveLeft = state.x < this.target.x - state.flySpeed;
                    state.moveRight = state.x > this.target.x + state.flySpeed;
                    state.xSpeed = cos > 0 ? -xRadC : -xRadF;
                    state.ySpeed = sin > 0 ? -yRadC : -yRadF;
                }else{
                    this.stopMoving();
                }
            }
            if(step%this.shootFrequency==0){
                var bullet = new BulletEnemy({
                    owner:this,
                    x:state.x,
                    y:state.y,
                    direction:state.aimDir,
                    angle:state.aimAngle+this.sprayModifier(),
                    speed:30
                });
                this.world.addEntity(bullet);
            }
        }else{
            state.isFlying = false;
            state.isAimingLeft = false;
            state.aimAngle = state.direction>0 ? 0 : 180;
            state.aimDir = state.direction;
            if(!this.wander){
                this.stopMoving();
            }else{
                if(this.wander.jump){
                    state.moveUp = true;
                }
            }
        }
    }
    
    p.search = function(){
        var nearestPlayer = this.world.getNearestPlayer(this.x,this.y,this.state.ai.sightRange);
        if(!this.target){
            if(nearestPlayer){
                if(nearestPlayer.state.health>0){
                    this.target = nearestPlayer;
                }
            }
        }else{
            if(this.targetDistance>this.state.ai.loseInterest || this.target.state.health<1){
                this.target = false;
            }
            if(node){
                if(!this.world.users.get(this.target.id)){
                    this.target = false;
                }
            }else{
                if(!this.world.users[this.target.uid]){
                    this.target = false;
                }
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
