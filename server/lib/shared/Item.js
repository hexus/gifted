(function(){
var node = typeof window === 'undefined';
var deps = ['assets','shared/Projectile'];

var init = function(lib,Projectile){
    
    if(node){
        Projectile = require('./Projectile');
    }
    
    var Item = function(args){ // Abstract tbh
        if(!args){args={};}
        if(!node){this.initialize();}
        this.super2.constructor.call(this,args);
        this.type = 0;
        this.owner = null; // reference to holding character
        this.damage = 1;
        this.hitbox.width = this.hitbox.height = 15;
        if(!node){
            
        }
        if(args){
            this.owner = args.owner || this.owner;
        }
    }
    
    var p = Item.prototype = new Projectile();
    p.super2 = Projectile.prototype;
    p.constructor = Item;
    
    p.tick = function(){
        this.super2.tick.call(this);
    }
    
    p.use = function(){
        
    }
    
    return Item;
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());
