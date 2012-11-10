// Modules
var config = require('./lib/Config');
var db = require('./lib/DB');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');

// Initial output
console.log("Gifted Server v"+config.version);

// Connect to database server
console.log("Connecting to database server");
db.connect();
db.testDatabase(function(exists){
    if(!exists){
        db.create(function(){listen();});
    }else{
        listen();
    }
});

// Start the servers
var httpServer, tcpServer, ioServer;
var listen = function(){
    httpServer = http.start(config.httpPort);
    tcpServer = sockets.tcp.start(config.listenPort);
    ioServer = sockets.io.start(config.listenPort2);
}
