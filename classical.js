// Reminder of classical inheritance model

function Class(v){ // Constructor
    this.va = v;
}
Class.prototype = { // Methods
    method: function(){
        return this.va;
    }
}