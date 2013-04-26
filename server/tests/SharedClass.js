(function(){
var node = typeof window === 'undefined'; // Node.js test
var deps = ['shared/SuperClass','lib/foo','lib/bar']; // RequireJS dependencies

var init = function(SuperClass,foo,bar){ // Class definition (RequireJS dependencies as arguments)

    if(node){ // Node dependencies
        var SuperClass = require('./SuperClass');
        var foo = require('../foo');
        var bar = require('../bar');
    }
    
    var Class = function(args){ // Constructor
        if(!args){args={};}
        this.super.constructor.call(this,args); // Superclass constructor
        this.get = this.__defineGetter__; // Getter shortcut
        this.set = this.__defineSetter__; // Setter shortcut
        var that = this; // Access to context for privileged methods
        
        var privateProperty = 0;
        this.publicProperty = 0;
        
        this.privilegedMethod = function(){
            console.log(privateProperty);
            console.log(that.publicProperty);
        }
    }

    var p = Class.prototype = new SuperClass(); // Inheritance
    p.super = SuperClass.prototype; // Superclass reference
    p.constructor = Class;
    
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
}());
