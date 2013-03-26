var empty = require('./Helpers').empty;
var User = require('./User');
var Users = require('./Users');
var Entity = require('./shared/Entity');
var Entities = require('./Entities');
var Bullet = require('./shared/Bullet');
var Item = require('./shared/Item');
var Map = require('./shared/Map');

Object.size = function(obj) { // This saves lines
    var size = 0;
    for(var key in obj) {
        if(obj[key]!=null){
            size++;
        }
    }
    return size;
};

var Room = function(args){
    var that = this;
    
	this.id = args.id;
    this.name = args.name;
    this.map = args.map || new Map(this.name);
    this.lobbyUsers = new Users(); // Users in room lobby
    this.users = new Users(); // Users in room world
    this.entities = new Entities();
    
    this.fps = args.fps || 32;
    this.step = 0;
    this.tickSpeed = 1/this.fps*1000;
    this.timer = setInterval(function(){that.tick();},this.tickSpeed);
    this.ontick = function(){};
    this.streamSpeed = 3;
}

var p = Room.prototype;

module.exports = Room;

p.tick = function(){
    this.step++;
    this.ontick.call(this);
    
    // User tick and deltas
    var userDeltas = {};
    for(var u in this.users.get()){
        var user = this.users.get(u);
        if(user instanceof User){
            user.tick();
            if(!user.inLobby){
                if(this.step%this.streamSpeed==0){
                    var userDelta = user.getStateDelta();
                    if(Object.size(userDelta)>0){
                        userDeltas[u] = userDelta;
                    }
                }
            }
        }
    }
    
    // Entity tick and deltas
    var eDeltas = {};
    for(var i in this.entities.get()){
    	var e = this.entities.get(i);
    	if(e instanceof Entity){
        	e.tick();
        	this.bulletCollisions(e);
            if(e.isRubbish){
                this.removeEntity(e);
            }else{
            	if(this.step%this.streamSpeed==0 && !(e instanceof Bullet)){
            		var eDelta = e.getStateDelta();
            		if(Object.size(eDelta)>0){
            			eDeltas[i] = eDelta;
            		}
        	   }
    	   }
    	}
    }
    
    for(u in this.users.get()){
        var user = this.users.get(u);
        if(user instanceof User){
            if(!user.inLobby){
                // User Deltas
                if(Object.size(userDeltas)>0){
                    var userDeltasMod = JSON.parse(JSON.stringify(userDeltas));
                    delete(userDeltasMod[u]); // Don't send to self by default
                    if(userDeltas[u] && user.sendSelf){ // Include self-delta if send-self is true
                        user.sendSelf = false;
                        //userDeltasMod[u] = userDeltas[u];
                        // Filtering
                        var share = ['x','y','xSpeed','ySpeed','health'];
                        userDeltasMod[u] = {};
                        for(var i in share){
                            if(this.users.get(u).state[share[i]]!=null){ // send all instead of just delta
                                userDeltasMod[u][share[i]] = this.users.get(u).state[share[i]];
                            }
                        }
                    }
                    if(Object.size(userDeltasMod)>0){
                        user.send('/m '+JSON.stringify(userDeltasMod));
                    }
                }
                
                // Entity deltas
                if(Object.size(eDeltas)>0){
                    this.send('/ed '+JSON.stringify(eDeltas));
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
		u.room = u.world = this;
		u.inLobby = lobby;
		if(lobby){ // Deferred when joining world
            space.sendTo(u);
		}else{
            u.spawn();
            for(var i in this.entities.get()){
                var e = this.entities.get(i);
                if(e){
                    var eState = JSON.parse(JSON.stringify(e.state));
                    eState.eid = e.eid;
                    u.send('/ec ' + JSON.stringify(eState));
                }
            }
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

p.addEntity = function(i){
    if(i instanceof Entity){
        var e = this.entities.add(i);
        e.room = e.world = this;
        if(!(e instanceof Item && e.owner)){
            var state = JSON.parse(JSON.stringify(e.state));
            state.eid = e.eid;
            this.users.send('/ec ' + JSON.stringify(state));
        }
    }
}

p.removeEntity = function(i){
    if(i instanceof Entity){
        this.entities.remove(i);
        if(!(i instanceof Item && i.owner) && !(i instanceof Bullet)){
            this.users.send('/ed ' + i.eid);
        }
    }
}

p.getNearestItem = function(x,y,maxDistance){
    maxDistance = !maxDistance ? 0 : maxDistance;
    var shortestDistance = -1;
    var nearestItem = false;
    for(var i in this.entities.get()){
        var e = this.entities.get(i);
        if(e instanceof Item){
            var distance = Math.sqrt(Math.pow(e.state.x - x,2) + Math.pow(e.state.y - y,2));
            if(shortestDistance<0 || distance < shortestDistance){
                if(distance < maxDistance || maxDistance === 0){
                    nearestItem = e;
                }
            }
        }
    }
    return nearestItem;
}

p.removeNearestItem = function(x,y,maxDistance){
    var item = this.getNearestItem(x,y,maxDistance);
    if(item){
        this.removeEntity(item);
    }
    return item;
}

p.bulletCollisions = function(e){
    if(e instanceof Bullet){
        var ray = e.getRay();
        var collidee = false;
        for(var r in ray){
            if(!collidee){
                for(var u in this.users.get()){
                    var user = this.users.get(u);
                    var c = user.chkCollision(ray[r][0],ray[r][1]);
                    if(c){
                        e.onContact(user);
                        collidee = user;
                    }
                }
            }
        }
    }
}
