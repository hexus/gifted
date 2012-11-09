// Modules
var config = require('./lib/Config');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');

// Initial output
console.log("Gifted Server v"+config.version);

// Connect to database and start servers
console.log("Connecting to database...");
var db = require('./lib/DB').connect(function(err){
    if(!err){
        console.log("Connected!");
        var httpServer = http.start(config.httpPort);
        var tcpServer = sockets.tcp.start(config.listenPort);
        var ioServer = sockets.io.start(config.listenPort2);
    }else{
        console.log("Database connection error: " + err);
    }
});

