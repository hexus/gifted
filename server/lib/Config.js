var fs = require('fs');
var c = {}; // Config object
module.exports = c;

var readFile = function(file){ return fs.readFileSync(file,'utf-8'); }
var readJson = function(file){ return JSON.parse(readFile(file)); }

// Dotcloud Environment
try{
    env = readJson('/home/dotcloud/environment.json');
    c.live = true;
    c.basePath = "/home/dotcloud/current/";
    c.static = readJson(c.basePath+'server/config.json');
    console.log('### Live environment ###');
}catch(e){
	env = false;
	c.live = false;
	c.basePath = "C:/cygwin/home/Hexus/gifted/";
	c.static = readJson(c.basePath+'server/config.json');
    console.log("### Development environment ###");
}

env = (env) ? env : ((process.env)?process.env:false);
c.version = readJson('./package.json').version  || "Unknown"; 
c.httpPort = c.live ? 8080 : c.static.httpPort || 80;
c.db = {
    host        : env.DOTCLOUD_DB_MYSQL_HOST || 'localhost',
    port        : env.DOTCLOUD_DB_MYSQL_PORT || 3306,
    user        : env.DOTCLOUD_DB_MYSQL_LOGIN || 'root',
    password    : env.DOTCLOUD_DB_MYSQL_PASSWORD || 'novasex',
    database    : 'gifted_alpha',
    flags       : '-CONNECT_WITH_DB', // Prevents immediate connection to database (it might not exist)
    sql         : readFile(c.basePath+'server/sql/gifted.sql'),
    multipleStatements  : true
};
c.worlds = c.static.worlds || [
	"Buren"
];
c.clientPath = c.basePath+"client/index.html";
c.listenPort = env.PORT_GAME || c.static.tcpPort || 7000;
c.listenPort2 = env.PORT_GAME2 || c.static.websocketPort || 7001;
c.socketPort = env.DOTCLOUD_SERVER_GAME2_PORT || c.listenPort2;
c.socketUrl = "//" + (env.DOTCLOUD_SERVER_GAME_HOST || "localhost") + ":" + c.socketPort;
c.clientUrl = "/client/";//"http://" + (env.DOTCLOUD_SERVER_HTTP_HOST || "localhost") + "/client/";
c.motd = "Welcome to the new Gifted Server v" + c.version + "! Thanks for testing.";
c.fps = 32;

c.env = env;
