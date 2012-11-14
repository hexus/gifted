var empty = require('./Helpers').empty;
var User = require('./User');

var Room = function(name,map){
    this.name = name;
    this.users = new require('./Users');
    this.map = map || new require('./Map');
}

module.exports = Room;

Room.prototype.send = function(str){
	users.send(str);
}

Room.prototype.joinUser = function(u){
	if(u instanceof User){
		if(!empty(u.room)){
			u.room.leave(u);
		}
		u.room = this;
		users.sendTo(u);
		this.users.add(u);
		users.sendUser(u);
	}
}

Room.prototype.leaveUser = function(u){
	if(u instanceof User){
		u.room = null;
		this.users.remove(u);
		users.send('/ud ' + u.id);
	}
}
