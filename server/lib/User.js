// Class
var User = function(args){
    this.id = args.id; // Local ID
    this.aid = args.aid; // Account ID
    this.name = args.name; // Selected character bane
    this.socket = args.socket; // Socket of user
    this.socketType = (!args.socketType) ? "TCP" : args.socketType; // TCP/Socket.io
}
User.prototype = {
    send: function(str){
        if(this.socketType=="TCP"){
            console.log(this);
            this.socket.write(str + String.fromCharCode(0));
        }else{ // Assume Socket.io
            this.socket.send(str);
        }
    }
}

module.exports = User;
