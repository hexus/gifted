var empty = require('./Helpers').empty;
var User = require('./User');
var Users = require('./Users');
var Entity = require('./shared/Entity');
var Entities = require('./Entities');
var Weapon = require('./shared/Weapon');
var Bullet = require('./shared/Bullet');
var Spawner = require('./shared/Spawner');
var Flybot = require('./shared/Enemy/Flybot');
var BulletEnemy = require('./shared/BulletEnemy');
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
    this.generateMap();
    
    this.fps = args.fps || 32;
    this.step = 0;
    this.tickSpeed = 1/this.fps*1000;
    this.timer = setInterval(function(){that.tick();},this.tickSpeed);
    this.ontick = function(){};
    this.streamSpeed = 3;
    this.bulletAoiSpeed = Math.round(this.fps/2);
    this.importantStates = [ // For user state sending to their self
        'x','y','xSpeed','ySpeed','health','direction'
    ];
    this.lastStates = {
        users:{},
        entities:{}
    }
}

var p = Room.prototype;

module.exports = Room;

p.tick = function(){
    this.step++;
    this.ontick.call(this);
    var share = this.importantStates; 
    var longTick = this.step%(this.fps*15)==0; // every fifteen seconds
    var fullTick = this.step%(this.fps)==0 || longTick; // every second / longTick
    var deltaTick = this.step%this.streamSpeed==0; // every streamSpeed steps
    
    // User tick and deltas
    var userDeltas = {};
    for(var u in this.users.get()){
        var user = this.users.get(u);
        if(user instanceof User){
            user.tick();
            if(!user.inLobby){
                if(deltaTick || fullTick){
                    if(fullTick){ // Full update
                        var userState = JSON.stringify(user.state);
                        if(this.lastStates.users[u]!=userState){
                            userDeltas[u] = user.state;
                            this.lastStates.users[u] = userState;
                        }
                    }else{ // Delta update
                        var userDelta = user.getStateDelta();
                        //userDeltas[u] = {};
                        if(Object.size(userDelta)>0){
                            userDeltas[u] = userDelta;
                        }
                        /*for(var s in share){
                            if(user.state[share[s]]!=null){
                                userDeltas[u][share[s]] = user.state[share[s]];
                            }
                        }*/
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
            if(e.isRubbish){
                this.removeEntity(e);
            }else if(e instanceof Bullet){
                this.bulletCollisions(e);
            }else{
            	if(deltaTick || fullTick){
            	    if(fullTick){ // Full update
                	    var eState = JSON.stringify(e.state);
                	    if(this.lastStates.entities[i]!=eState){
                	        eDeltas[i] = e.state;
                            this.lastStates.entities[i] = eState; 
                        }
                    }else{ // Delta update
                        var eDelta = e.getStateDelta();
                        if(Object.size(eDelta)>0){
                            eDeltas[i] = eDelta;
                        }
                    }
            	}
            }
        }
    }
    
    for(var u in this.users.get()){
        var user = this.users.get(u);
        if(user instanceof User){
            if(!user.inLobby){
                // Aoi time
                var aoi = this.getAoi(user.x,user.y);
                
                // User Deltas
                if(Object.size(userDeltas)>0){
                    var userDeltasMod = JSON.parse(JSON.stringify(userDeltas));
                    delete(userDeltasMod[u]); // Don't send to self by default
                    if(userDeltas[u]){
                        if(userDeltas[u].health!=null && !fullTick){ // Always let them know their health if it changes (hacky soz)
                            userDeltasMod[u] = {health:userDeltas[u].health};
                        }
                        if(user.sendSelf){ // Include self-delta if send-self is true
                            user.sendSelf = false;
                            userDeltasMod[u] = {};
                            for(var i in share){ // == this.importantStates
                                userDeltasMod[u][share[i]] = this.users.get(u).state[share[i]];
                            }
                        }
                    }
                    if(!longTick){
                        for(var d in userDeltasMod){ // Restrict to AoI
                            if(d!=u){
                                if(!aoi.users[d]){
                                    delete(userDeltasMod[d]);
                                }
                            }
                        }
                    }
                    if(Object.size(userDeltasMod)>0){
                        user.send('/m '+JSON.stringify(userDeltasMod));
                    }
                }
                
                // Entity deltas
                if(Object.size(eDeltas)>0){
                    var eDeltasMod = JSON.parse(JSON.stringify(eDeltas));
                    if(!longTick){
                        for(var e in eDeltasMod){
                            if(!aoi.entities[e]){
                                delete(eDeltasMod[e]);
                            }
                        }
                    }
                    if(Object.size(eDeltasMod)>0){
                        this.send('/ed '+JSON.stringify(eDeltasMod));
                    }
                }
                
                if(this.step%this.fps==0){ // Ping every second
                    this.ping();
                }
            }
        }
    }
}

p.generateMap = function(){
    //this.map.load(function(success){// Try loading from database first
    //    if(!success){
            this.map.generate();
            
            this.addEntity(new Spawner({
                spawnerSkin:'weapon',
                babbyLimit:1,
                egg:{
                    entityType:'weapon'
                }
            }));
            
            // Surface spawners
            var tSize = this.map.getTileSize();
            var fullWidth = this.map.getWorldSize().width * this.map.getRegionSize().width;
            var fullHeight = this.map.getWorldSize().height * this.map.getRegionSize().height;
            var numSpawners = 12;
            for(var i=0;i<numSpawners;i++){
                var x = Math.floor((fullWidth/numSpawners*i) + (fullWidth/numSpawners)/2);
                this.addEntity(new Spawner({
                    x:x*tSize,
                    y:(fullHeight-Math.floor(this.map.heights[x]))*tSize,
                    egg:{entityType:'flybot'}
                }));
            }
            
            this.map.save();
    //    }
    //});
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
        e.spawn();
        if(!(e instanceof Item && e.owner)){
            var state = JSON.parse(JSON.stringify(e.state));
            state.eid = e.eid;
            this.users.send('/ec ' + JSON.stringify(state));
        }
        return e;
    }
}

p.removeEntity = function(i){
    if(i instanceof Entity){
        this.entities.remove(i);
        if(!(i instanceof Item && i.owner) && !(i instanceof Bullet)){
            this.users.send('/er ' + i.eid);
        }
    }
}

p.recreateEntity = function(s,eid){
    if(eid){
        s.eid = eid;
    }
    var e = false;
    switch(s.entityType){
        case 'weapon':
            e = new Weapon(s);
            break;
        case 'bullet':
            e = new Bullet(s);
            break;
        case 'spawner':
            e = new Spawner(s);
            break;
        case 'flybot':
            e = new Flybot(s);
            break;
        case 'bulletenemy':
            e = new BulletEnemy(s);
            break;
    }
    if(e){
        for(var i in s){
            e.state[i] = s[i];
        }
        e.updateRotation();
    }
    return e;
}

p.getDistance = function(x,y,e){
    var distance = false;
    if(e.x && e.y){
        distance = Math.sqrt(Math.pow(x - e.x,2) + Math.pow(y - e.y,2));
    }
    return distance;
}

p.getNearestEntity = function(Class,x,y,maxDistance){
    maxDistance = !maxDistance ? 0 : maxDistance;
    var collection = Class === User ? this.users : this.entities;
    var shortestDistance = -1;
    var nearest = false;
    for(var i in collection.get()){
        var e = collection.get(i);
        if(e instanceof Class || !Class){
            var distance = this.getDistance(x,y,e);
            if(shortestDistance<0 || distance < shortestDistance){
                if(distance < maxDistance || maxDistance === 0){
                    nearest = e;
                }
            }
        }
    }
    return nearest;
}

p.getNearestUser = function(x,y,maxDistance){
    return this.getNearestEntity(User,x,y,maxDistance);
}

p.getNearestItem = function(x,y,maxDistance){
    return this.getNearestEntity(Item,x,y,maxDistance);
}

p.getNearestPlayer = function(x,y,maxDistance){
    return this.getNearestUser(x,y,maxDistance);
}

p.getAoi = function(x,y,maxDistance){ // Area of interest
    if(!maxDistance){maxDistance = 800;}
    var aoi = {
        users:{},
        entities:{}
    }
    var users = this.users.get();
    for(var u in users){
        var user = users[u];
        if(user instanceof User){
            var distance = this.getDistance(x,y,user);
            if(distance<maxDistance){
                aoi.users[u] = user;
            }
        }
    }
    var entities = this.entities.get();
    for(var e in entities){
        var entity = entities[e];
        var distance = this.getDistance(x,y,entity);
        if(distance<maxDistance){
            aoi.entities[e] = entity;
        }
    }
    return aoi;
}

p.getBulletAoi = function(bullet){
    var maxDistance = bullet.state.flySpeed * this.bulletAoiSpeed;
    var aoi ={
        users:{},
        entities:{},
        life:this.bulletAoiSpeed // update every half second
    }
    
    if(bullet instanceof BulletEnemy){
        var users = this.users.get();
        for(var u in users){
            var user = users[u];
            if(user instanceof User){
                if(this.getDistance(bullet.x,bullet.y,user)<maxDistance){
                    aoi.users[u] = user;
                }
            }
        }
    }else{
        var entities = this.entities.get();
        for(var e in entities){
            var entity = entities[e];
            if(entity instanceof Entity){
                if(bullet!=entity && !(entity instanceof Bullet)
                && entity.state.health>0 && entity.state.spawnerSkin!='weapon'){
                    if(this.getDistance(bullet.x,bullet.y,entity)<maxDistance){
                        aoi.entities[e] = entity;
                    }
                }
            }
        }
    }
    return aoi;
}

p.bulletCollisions = function(e){
    var aoi = e.bulletAoi;
    if(!aoi){
        aoi = e.bulletAoi = this.getBulletAoi(e);
    }
    if(aoi.life>0){
        aoi.life--;
    }else{
        aoi = e.bulletAoi = this.getBulletAoi(e);
    }
    var users = aoi.users;
    var entities = aoi.entities;
    var rayPoints = e.getRay();
    var rayLen = rayPoints.length;
    var collidee = false;
    for(var u in users){
        var user = users[u];
        for(var r=0;r<rayLen && !collidee;r++){
            var ray = rayPoints[r];
            if(user.chkCollision(ray[0],ray[1])){
                if(e.onContact(user)){
                    collidee = user;
                }
            }
        }
    }
    collidee = false;
    for(var eid in entities){
        var entity = entities[eid];
        for(r=0;r<rayLen && !collidee;r++){
            var ray = rayPoints[r];
            if(entity.chkCollision(ray[0],ray[1])){
                if(e.onContact(entity)){
                    collidee = entity;
                }
            }
        }
    }
    delete(rayPoints);
}
