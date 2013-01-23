// Modules
var config = require('./lib/Config');
var db = require('./lib/DB');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');
var global = require('./lib/Global');
var Room = require('./lib/Room');
var Map = require('./lib/shared/Map');
var rooms = require('./lib/Global').rooms;

// Initial output
console.log("Gifted Server v"+config.version);

// Prepare servers
var httpServer, tcpServer, ioServer;
var boot = function(){
	for(var m in config.worlds){
		rooms.add(new Room({
			name:config.worlds[m],
			fps:config.fps
		}));
		if(m==1){
		    rooms.get(1).ontick = function(){
                var sec = this.step/this.fps;
                if(sec%600==0){
                    console.log('World tick: ' + sec/60 + ' minutes (step ' + this.step + ')');
                }
            }
		}
	}
    httpServer = http.start(config.httpPort);
    tcpServer = sockets.tcp.start(config.listenPort);
    ioServer = sockets.io.start(config.listenPort2);
}

// Database (boots on success, terminates on failure)
console.log("Connecting to database server");
db.init(boot);
