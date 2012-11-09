var fs = require('fs');
var c = {}, env; // Config object
c.env = env; // Might as well
module.exports = c;

var readJson = function(file){ return JSON.parse(fs.readFileSync(file,'utf-8')); }

// Dotcloud Environment
try{
    env = readJson('/home/dotcloud/environment.json');
    c.live = true;
    c.basePath = "/home/dotcloud/current/client/";
}catch(e){
	env = false;
	c.live = false;
	c.basePath = "C:/cygwin/home/Hexus/gifted/src/client/";
    console.log("No environment file found: " + e);
}
env = (env) ? env : ((process.env)?process.env:false);
c.version = readJson('./package.json').version  || "Unknown"; 
c.httpPort = 8080;
c.db = {
  host     : env.DOTCLOUD_DB_MYSQL_HOST || 'localhost',
  user     : env.DOTCLOUD_DB_MYSQL_LOGIN || 'root',
  password : env.DOTCLOUD_DB_MYSQL_PASSWORD || 'novasex',
  database : 'gifted_alpha'
};
c.clientPath = c.basePath+"index.php";
c.listenPort = env.PORT_GAME || 7000;
c.listenPort2 = env.PORT_GAME2 || 7001;
c.connectUrl = "http://" + (env.DOTCLOUD_CLIENT_HTTP_HOST || "localhost:8080/client/");
c.motd = "Welcome to the new Gifted Server v" + c.version + "! Thanks for testing.";