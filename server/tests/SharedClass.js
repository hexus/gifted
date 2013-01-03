var node = typeof window === 'undefined';
var deps = ['lib/foo','lib/bar']; // RequireJS dependencies

var init = function(foo,bar){ // Class definition (add RequireJS dependencies as arguments)

    if(node){ // Node dependencies
        var foo = require('./foo');
        var bar = require('./bar');
    }
    
    var Class = function(){ // Constructor
        this.get = this.__defineGetter__;
        this.set = this.__defineSetter__;
        var that = this;
        
        var privateProperty = 0;
        this.publicProperty = 0;
        
        this.privilegedMethod = function(){
            console.log(privateProperty);            
        }
    }

    var p = Class.prototype;
    
    p.publicMethod = function(){
        console.log(this.privilegedMethod());
        console.log(this.publicProperty);
    }
    
    return Class;
    
}

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}