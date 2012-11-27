var config = require('./Config');
var global = require('./Global');
var Room = require('./Room');
var rooms = global.rooms;
var users = global.users;

var h = {};

h.handleData = function(data){ // Called in context of a User
    console.log("Data: " + data);
    var d = data.split(" ");
    switch(d[0]){
    	// Lobby handlers
        case "<policy-file-request/>": // Flash policy
            this.send('<cross-domain-policy><allow-access-from domain="*" to-ports="*"/></cross-domain-policy>');
            break;
        case "/login-pls": // Client is ready to log in
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
                room.joinUser(users.get(this.id),true);
            }else{
                this.send("/login-reject Invalid room");
            }
            break;
        case "/r":
        	
        	break;
        case "/info-request":
            // Early days innit
            this.sendWorld();
            break;
        case "/c": // Chat
            this.room.send("/c " + this.id + " " + data.substr(3),true);
            break;
        default:
          console.log("Unrecognised data: " + data);
          break;
    }
};

h.handleLogin = function(name,hash){
  // Bettah do some database sheit here boi  
};

module.exports = h;