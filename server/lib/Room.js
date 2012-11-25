var empty = require('./Helpers').empty;
var User = require('./User');
var Users = require('./Users');
var Map = require('./Map');

var Room = function(args){
	this.id = args.id;
    this.name = args.name;
    this.map = args.map || new Map(this.name);
    this.lobbyUsers = new Users(); // Users in room lobby
    this.users = new Users(); // Users in room world
}

module.exports = Room;

Room.prototype.send = function(str,lobby){
	lobby = !lobby ? false : true;
	if(lobby)
		this.lobbyUsers.send(str);
	else
		this.users.send(str);
}

Room.prototype.joinUser = function(u,lobby){
	lobby = !lobby ? false : true;
	var space = lobby ? this.lobbyUsers : this.users;
	if(u instanceof User){
		if(!empty(u.room)){
			if(u.room instanceof Room){
				u.room.leaveUser(u);
			}
		}
		u.room = this;
		u.inLobby = lobby;
		space.sendTo(u);
		space.add(u);
		space.sendUser(u);
	}
}

Room.prototype.leaveUser = function(u){
	if(u instanceof User){
		var space;
		if(this.lobbyUsers.get(u.id)){
			space = this.lobbyUsers;
		}else if(this.users.get(u.id)){
			space = this.users;
		}
		if(space){
			u.room = null;
			space.remove(u);
			space.send('/ud ' + u.id);
		}
	}
}
