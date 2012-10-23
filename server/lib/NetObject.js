
// For generalising networked objects
// and abstracting the complexities
// of keeping them synchronised
// between client and server.

function netObj(){
	var history = []; // use this to store previous property sets
    var properties = {};
    
}
netObj.prototype = {
    set : function(key,value){
    	this.properties[key] = value;
    },
    get : function(key){
    	return this.properties[key];
    }
}

module.exports = netObj;