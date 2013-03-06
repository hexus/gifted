var empty = require('./Helpers').empty;
var User = require('./User');
var Users = require('./Users');
var Projectile = require('./shared/Projectile');
var Projectiles = require('./Projectiles');
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
    this.projectiles = new Projectiles();
    
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
    
    // Projectile tick and deltas
    var projDeltas = {};
    for(var i in this.projectiles.get()){
    	var proj = this.projectiles.get(i);
    	if(proj instanceof Projectile){
        	proj.tick();
        	this.bulletCollisions(proj);
            if(proj.isRubbish){
                this.removeProjectile(proj);
            }else{
            	if(this.step%this.streamSpeed==0 && !(proj instanceof Bullet)){
            		var projDelta = proj.getStateDelta();
            		if(Object.size(projDelta)>0){
            			projDeltas[i] = projDelta;
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
                        userDeltasMod[u] = userDeltas[u];
                        // old filtering
                        /*var share = ['x','y','xSpeed','ySpeed','health'];
                        userDeltasMod[u] = {};
                        for(var i in share){
                            if(userDeltas[u][share[i]]!=null){
                                userDeltasMod[u][share[i]] = userDeltas[u][share[i]];
                            }
                        }*/
                    }
                    if(Object.size(userDeltasMod)>0){
                        user.send('/m '+JSON.stringify(userDeltasMod));
                    }
                }
                
                // Projectile deltas
                if(Object.size(projDeltas)>0){
                    this.send('/pd '+JSON.stringify(projDeltas));
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
            for(var i in this.projectiles.get()){
                var proj = this.projectiles.get(i);
                if(proj){
                    var projState = JSON.parse(JSON.stringify(proj.state));
                    projState.pid = proj.pid;
                    u.send('/pc ' + JSON.stringify(projState));
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

p.addProjectile = function(i){
    if(i instanceof Projectile){
        var proj = this.projectiles.add(i);
        proj.room = proj.world = this;
        if(!(proj instanceof Item && proj.owner)){
            var state = JSON.parse(JSON.stringify(proj.state));
            state.pid = proj.pid;
            this.users.send('/pc ' + JSON.stringify(state));
        }
    }
}

p.removeProjectile = function(i){
    if(i instanceof Projectile){
        this.projectiles.remove(i);
        if(!(i instanceof Item && i.owner) && !(i instanceof Bullet)){
            this.users.send('/pd ' + i.pid);
        }
    }
}

p.getNearestItem = function(x,y,maxDistance){
    maxDistance = !maxDistance ? 0 : maxDistance;
    var shortestDistance = -1;
    var nearestItem = false;
    for(var i in this.projectiles.get()){
        var proj = this.projectiles.get(i);
        if(proj instanceof Item){
            var distance = Math.sqrt(Math.pow(proj.state.x - x,2) + Math.pow(proj.state.y - y,2));
            if(shortestDistance<0 || distance < shortestDistance){
                if(distance < maxDistance || maxDistance === 0){
                    nearestItem = proj;
                }
            }
        }
    }
    return nearestItem;
}

p.removeNearestItem = function(x,y,maxDistance){
    var item = this.getNearestItem(x,y,maxDistance);
    if(item){
        this.removeProjectile(item);
    }
    return item;
}

p.bulletCollisions = function(proj){
    if(proj instanceof Bullet){
        var ray = proj.getRay();
        var collidee = false;
        for(var r in ray){
            if(!collidee){
                for(var u in this.users.get()){
                    var user = this.users.get(u);
                    var c = user.chkCollision(ray[r][0],ray[r][1]);
                    if(c){
                        proj.onContact(user);
                        collidee = user;
                    }
                }
            }
        }
    }
}
