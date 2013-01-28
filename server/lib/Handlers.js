var config = require('./Config');
var global = require('./Global');
var Room = require('./Room');
var rooms = global.rooms;

var h = {};

h.handleData = function(data){ // Called in context of a User
    var log = true;
    var d = data.split(" ");
    switch(d[0]){
    	// Lobby handlers
        case "<policy-file-request/>": // Flash policy
            this.send('<cross-domain-policy><allow-access-from domain="*" to-ports="*"/></cross-domain-policy>');
            break;
        case "/worlds-pls": // Client is ready to log in and wants a list of worlds
            this.send('/login-request ' + rooms.list());
            break;
        case "/whoami": case "login":
        	var room = rooms.get(1);
    	    switch(d[0]){
                case '/whoami':
                    this.send("/youare " + this.id + " " + this.name);
                    if(d[1])
                        room = rooms.get(d[1]) || room;
                    break;
                case '/login':
                    if(d[1]!=""){this.name = d[1];}
                    break;
    	    }
            if(room instanceof Room){
                this.send("/login-accept " + room.id);
                this.send("/motd " + config.motd);
                room.joinUser(this,true);
            }else{
                this.send("/login-reject Invalid room");
            }
            break;
        case "/r":
            this.send('/r ' + d[1]); // lazy atm
            this.room.joinUser(this,(d[1]!=1));
        	break;
        case "/info-request":
            var format = d[1] || null;
            this.sendWorld(format);
            this.room.users.sendTo(this);
            break;
        case "/c": // Chat
            this.room.send("/c " + this.id + " " + data.substr(3),true);
            break;
        case "/m": // Move (state update)
            log = false;
            var stateDelta = JSON.parse(data.substr(3));
            for(i in stateDelta){
                if(typeof stateDelta[i] === typeof this.state[i]){
                    this.state[i] = stateDelta[i];
                }
            }
            this.tick();
            break;
        default:
          log = false;
          console.log("Unrecognised data: " + data);
          break;
    }
    if(log){
        console.log("Data: " + data);
    }
};

h.handleLogin = function(name,hash){
  // Bettah do some database sheit here boi  
};

module.exports = h;