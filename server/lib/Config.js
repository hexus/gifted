var fs = require('fs');
var c = {}; // Config object
module.exports = c;

var readFile = function(file){ return fs.readFileSync(file,'utf-8'); }
var readJson = function(file){ return JSON.parse(readFile(file)); }

process.chdir('../');
c.basePath = process.cwd()+'/';

// Dotcloud Environment

c.static = readJson(c.basePath+'server/config.json');
c.live = c.static.live;

c.version = readJson('server/package.json').version  || "?"; 
c.httpPort = c.live ? 8080 : c.static.httpPort || 80;
c.worlds = c.static.worlds || [
	"Buren"
];
c.clientPath = c.basePath+"client/index.html";
c.listenPort = c.static.tcpPort || 7000;
c.listenPort2 = c.static.websocketPort || 7001;
c.socketPort = c.listenPort2;
c.clientUrl = "/client/";
c.motd = "Welcome to the new Gifted Server v" + c.version + "! Thanks for testing.";
c.fps = 32;
