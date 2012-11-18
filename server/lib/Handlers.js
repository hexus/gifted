var config = require('./Config');
var global = require('./Global');
var rooms = global.rooms;
var users = global.users;

var h = {};

h.handleData = function(data){ // Called in context of a User
    console.log("Data: " + data);
    var d = data.split(" ");
    switch(d[0]){
    	// Lobby handlers
        case "<policy-file-request/>": // Flash policy
            this.send("<cross-domain-policy><allow-access-from domain=\"*\" to-ports=\"*\"/></cross-domain-policy>");
            break;
        case "/login-pls": // Client is ready to log in
            this.send('/login-request ' + rooms.list());
            break;
        case "/whoami": case "login":
        	if(d[0]=="/whoami"){
        		this.send("/youare " + this.id + " " + this.name);
        	}else{ // login req
        		if(d[1]!=""){this.name = d[1];}
        	}
            this.send("/login-accept");
            this.send("/motd " + config.motd);
            rooms.get(1).joinUser(users.get(this.id),true);
            this.room.lobbyUsers.send("/uc " + this.id + " " + this.name);
            this.room.lobbyUsers.sendTo(this);
            break;
        case "/r":
        	
        	break;
        case "/info-request":
            // Early days innit
            this.sendWorld();
            break;
        case "/c": // Chat
            users.send("/c " + this.id + " " + data.substr(3));
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