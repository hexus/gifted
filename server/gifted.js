// Modules
var config = require('./lib/Config');
var db = require('./lib/DB');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');
var global = require('./lib/Global');
var Room = require('./lib/Room');
var Map = require('./lib/Map');
var rooms = global.rooms;

// Initial output
console.log("Gifted Server v"+config.version);

// Prepare servers
var httpServer, tcpServer, ioServer;
var boot = function(){
	rooms.add(new Room('Buren',new Map()));
    httpServer = http.start(config.httpPort);
    tcpServer = sockets.tcp.start(config.listenPort);
    ioServer = sockets.io.start(config.listenPort2);
    setTimeout(function(){console.log(rooms.Buren.map.getProperties());},500);
}

// Database (listens on success, terminates on failure)
console.log("Connecting to database server");
db.init(boot);
