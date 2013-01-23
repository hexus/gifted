var empty = require('./Helpers').empty;
var User = require('./User');
var Users = require('./Users');
var Map = require('./shared/Map');

var Room = function(args){
    var that = this;
    
	this.id = args.id;
    this.name = args.name;
    this.map = args.map || new Map(this.name);
    this.lobbyUsers = new Users(); // Users in room lobby
    this.users = new Users(); // Users in room world
    
    this.fps = args.fps || 32;
    this.step = 0;
    this.tickSpeed = 1/this.fps*1000;
    this.timer = setInterval(function(){that.tick();},this.tickSpeed);
    this.ontick = function(){};
}

var p = Room.prototype;

module.exports = Room;

p.tick = function(){
    this.step++;
    this.ontick.call(this);
    for(u in this.users.get()){
        var user = this.users.get(u);
        if(user instanceof User){
            if(!user.inLobby){
                user.tick();
                if(this.step%3==0){
                    var delta = user.getStateDelta();
                    var deltaSize = 0;
                    for(i in delta){
                        deltaSize++;
                    }
                    if(deltaSize>0){
                        delta.id = user.id;
                        user.room.send('/m '+JSON.stringify(delta),user.inLobby,user);
                    }
                }
                if(this.step%32==0){
                    this.ping();
                }
            }
        }
    }
}

p.send = function(str,lobby,ex){
	lobby = !lobby ? false : true;
	if(lobby)
		this.lobbyUsers.send(str,ex);
	else
		this.users.send(str,ex);
}

p.contains = function(u){ // for Entity
    return this.users.resolve(u);
}

p.resolveUser = function(u){
	return this.lobbyUsers.resolve(u) || this.users.resolve(u);
}

p.space = function(u){
	u = this.resolveUser(u);
	return (this.lobbyUsers.get(u.id)) ? this.lobbyUsers : this.users;
}

p.ping = function(){
    this.lobbyUsers.ping();
    this.users.ping();
}

p.joinUser = function(u,lobby){
	lobby = !lobby ? false : true;
	var space = lobby ? this.lobbyUsers : this.users;
	if(u instanceof User){
		if(!empty(u.room)){
			if(u.room instanceof Room){
				u.room.leaveUser(u);
			}
		}
		u.room = this;
		u.world = this;
		u.inLobby = lobby;
		if(lobby){ // Deferred when joining world
            space.sendTo(u);
		}else{
            u.spawn();
		}
		space.add(u);
		space.sendUser(u);
	}
}

p.swapUser = function(u){ // May go unused
	u = this.resolveUser(u);
	if(u instanceof User){
		var from = this.space(u);
		var to = (from==lobbyUsers) ? this.users : this.lobbyUsers;
		delete(from[u.id]);
		to[u.id] = u;
		u.inLobby = (to==this.lobbyUsers);
		from.send('/ud ' + u.id);
		to.sendUser(u);
	}
}

p.leaveUser = function(u){
	u = this.resolveUser(u);
	if(u instanceof User){
		var space;
		if(this.lobbyUsers.get(u.id)){
			space = this.lobbyUsers;
		}else if(this.users.get(u.id)){
			space = this.users;
		}
		if(space){
			u.room = null;
			u.world = null;
			space.remove(u);
			space.send('/ud ' + u.id);
		}
	}
}