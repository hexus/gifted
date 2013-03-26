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
            this.clip = this.addChild(new lib.mcFlybot());
            this.char = this.clip.flybotChar;
            this.turret = this.char.turret;
        }
    }
    
    var p = Flybot.prototype = new Enemy();
    p.super3 = Enemy.prototype;
    p.constructor = Flybot;
    
    p.tick = function(){
        this.super3.tick.call(this);
        if(!node){
            this.turret.rotation = this.state.aimAngle;
        }
    }
    
    p.aiTick = function(){
        this.super3.aiTick.call(this);
        this.state.aimAngle = (this.state.aimAngle + 1) % 360;
    }
    
    return Flybot;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
