
function User(id,name,socket){
    this.id = id; // Database ID
    this.name = name; // Selected character bane
    this.socket = socket; // TCP/Socket.io
}
User.prototype = {
    send: function(str){
    	this.socket.write(str + String.fromCharCode(0));
    }
}

module.exports = User;