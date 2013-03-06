(function(){
var node = typeof window === 'undefined';
var deps = ['createjs','assets','lib/global'];

var init = function(createjs,lib,Global){
    if(node){
        
    }
    
    var Effect = function(args){
        if(!args){args={};}
        var that = this;
        this.state = {};
        this.state.duration = args.duration || 1; // how many steps to stay active
        this.state.affects = {
            health: args.health || 0,
            xSpeed: args.xSpeed || 0,
            ySpeed: args.ySpeed || 0
        }
        this.state.life = this.state.duration;
    }
       
    var p = Effect.prototype;
   
    return Effect; 
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
}());