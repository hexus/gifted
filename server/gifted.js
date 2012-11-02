// Modules
var config = require('./lib/Config');
var http = require('./lib/HttpServer');
var sockets = require('./lib/Sockets');

// Initial output
console.log("Gifted Server v"+config.version);

// Start servers
var httpServer = http.start(config.httpPort);
var tcpServer = sockets.tcp.start(config.listenPort);
var ioServer = sockets.io.start(config.listenPort2);