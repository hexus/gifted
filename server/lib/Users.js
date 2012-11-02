
var u = {};

// Class
var User = u.class = function(id,name,socket,socketType){
    this.id = id; // Database ID
    this.name = name; // Selected character bane
    this.socket = socket; // Socket of user
    this.socketType = (!socketType) ? "TCP" : socketType; // TCP/Socket.io
}
User.prototype = {
    send: function(str){
    	if(this.socketType=="TCP"){
    		this.socket.write(str + String.fromCharCode(0));
    	}else{
    		this.socket.send(str);
    	}
    }
}

// Collection
var users = u.collection = {}; // Collection of users (integer keys pls)
var count = users.count = 0; // Cumulative number of connections made
users.send = function(str){
    for(var i in this){
        if(this[i] instanceof User){
            this[i].send(str);
        }
    }
}
users.sendTo = function(u){ // Send current users to given user
    if(u instanceof User){ // Don't faff about mate
        for(var i in this){
            if(this[i] instanceof User){
                u.send('/uc ' + users[i].id + " " + users[i].name);
            }
        }
    }
}

module.exports = u;