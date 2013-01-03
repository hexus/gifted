var node = typeof window === 'undefined'; // Node.js test
var deps = ['lib/foo','lib/bar']; // RequireJS dependencies

var init = function(foo,bar){ // Class definition (RequireJS dependencies as arguments)

    if(node){ // Node dependencies
        var foo = require('./foo');
        var bar = require('./bar');
    }
    
    var Class = function(args){ // Constructor
        this.super.constructor.call(this,args); // Superclass constructor
        this.get = this.__defineGetter__; // Getter shortcut
        this.set = this.__defineSetter__; // Setter shortcut
        var that = this;
        
        var privateProperty = 0;
        this.publicProperty = 0;
        
        this.privilegedMethod = function(){
            console.log(privateProperty);
            console.log(that.publicProperty);
        }
    }

    var p = Class.prototype = new SuperClass(); // Inheritance
    var p.super = SuperClass.prototype; // Superclass reference
    
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