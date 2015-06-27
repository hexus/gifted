// Modules
var config = require('./lib/Config');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');
var global = require('./lib/Global');
var Room = require('./lib/Room');
var Map = require('./lib/shared/Map');
var rooms = require('./lib/Global').rooms;

// Initial output
console.log("Gifted Server v" + config.version);

// Prepare servers
var httpServer, tcpServer, ioServer;
var boot = function(){
	for(var m in config.worlds){
		rooms.add(new Room({
			name:config.worlds[m],
			fps:config.fps
		}));
	}
	
	httpServer = http.start(config.httpPort);
	tcpServer = sockets.tcp.start(config.listenPort);
	ioServer = sockets.io.start(config.listenPort2);
};

boot();
