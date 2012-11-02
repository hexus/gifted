// Gifted modules
var config = require('./lib/Config');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');
var User = require('./lib/User'); // This will be better...

// Initial output
console.log("Gifted Server v"+config.version);

var count = 0; // Cumulative number of connections made
var users = {};
users.send = function(str){
	for(var i in this){
		if(this[i] instanceof User){
			this[i].send(str);
		}
	}
}
users.sendTo = function(u){ // Send current users to given user
	if(u instanceof User){ // Don't faff about mate
		for(var i in this){
			if(this[i] instanceof User){
				u.send('/uc ' + users[i].id + " " + users[i].name);
			}
		}
	}
}

// Start servers
var httpServer = http.start(config.httpPort);
var tcpServer = sockets.tcp.start(config.listenPort);
var ioServer = sockets.io.start(config.listenPort2);



function handleData(data){ // Called in context of a User
    console.log("Data: " + data);
    var d = data.split(" ");
    switch(d[0]){
        case "<policy-file-request/>": // Flash policy
			this.send("<cross-domain-policy><allow-access-from domain=\"*\" to-ports=\"*\"/></cross-domain-policy>");
			break;
        case "/login-pls": // Client is ready to log in
			this.send("/login-request");
			break;
		case "/whoami": // Guest login
			this.send("/youare " + this.id + " " + this.name);
			this.send("/login-accept");
			this.send("/motd " + config.motd);
			users.send("/uc " + this.id + " " + this.name);
			users.sendTo(this);
			break;
        case "/login": // A login request
        	if(d[1]!=""){this.name = d[1];}
			this.send("/login-accept");
			this.send("/motd " + config.motd);
			users.send("/uc " + this.id + " " + this.name);
			users.sendTo(this);
			break;
		// To be ignored / implemented / removed
        case "/info-request": case "/r":
        	// Early days innit
        	break;
        case "/c": // Chat
        	users.send("/c " + this.id + " " + data.substr(3));
        	break;
        default:
          console.log("Unrecognised data: " + data);
          break;
    }
}