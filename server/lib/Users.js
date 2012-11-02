
function User(id,name,socket,socketType){
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

module.exports = User;