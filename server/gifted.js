// Core modules
var net = require('net');
var ws = require('socket.io');

// Gifted modules
var config = require('./lib/Config');
var User = require('./lib/User'); // This will be better...

// Initial output
console.log("Gifted Server v"+config.version);

// Helper functions
var helpers = require('./lib/Helpers');
var chr = helpers.chr;
var empty = helpers.empty;

var count = 0; // Increments with each connection made
var users = {};
users.send = function(str){
	for(var i in this){
		if(this[i] instanceof User){
			this[i].send(str);
		}
	}
}

var httpServer = require('./lib/HttpServer').start(config.httpPort);

// Setup a tcp server
var server = net.createServer(function(socket){
	socket.setEncoding('utf8');
	socket.setKeepAlive(true,10000);
	var local = {}; // Local scope socket info (retains for close event when socket no longer exists)
	local.remoteAddress = socket.remoteAddress;
    var user = {};
	user = new User(++count,"guest"+count,socket);
	users[count] = user;
	
	// Listeners for this client
	socket.addListener("connect",function(){
		console.log(local.remoteAddress + " connected");
	});
	socket.addListener("data",function(data){
		// console.log(data); // Print raw data
		data = data.split("\0");
		for(var i=0;i<data.length;i++){
            var datum = data[i].replace(/\0/g,"");
            if(!empty(datum)){
        	    handleData.call(user,datum);
    	    }
	    }
	});
	socket.addListener("close",function(e){
		delete(users[user.id]);
		users.send("/ud " + user.id);
		console.log("Closed: " + local.remoteAddress);
		if(e){console.log(", transmission error");}
	});
	
});
server.listen(config.listenPort, function(){
	console.log("TCP listening on " + config.listenPort);
});

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
        case "/login": // A login request
        	if(d[1]!=""){this.name = d[1];}
			this.send("/login-accept");
			this.send("/motd " + config.motd);
			users.send("/uc " + this.id + " " + this.name);
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

/* // Useless on dotcloud
var policy = net.createServer(function(socket){
	socket.addListener("data",function(data){
		console.log("Policy data: " + data);
	});
});

policy.listen(843,function(){
	console.log("Policy server listening on 843");
});
*/