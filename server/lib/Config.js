var fs = require('fs');
var c = {}; // Config object


// Dotcloud Environment
try{
    env = JSON.parse(fs.readFileSync('/home/dotcloud/environment.json', 'utf-8'));
    c.live = true;
    c.basePath = "/home/dotcloud/current/client/";
}catch(e){
	env = false;
	c.live = false;
	c.basePath = "c:/cygwin/home/Hexus/gifted/server/client/";
    console.log("No environment file found: " + e);
}
env = (env) ? env : ((process.env)?process.env:false);
c.version = JSON.parse(fs.readFileSync('./package.json','utf-8')).version  || "Unknown"; 
c.httpPort = 8080;
c.clientPath = c.basePath+"index.php";
c.listenPort = (env.PORT_GAME)?env.PORT_GAME:7000;
c.listenPort2 = (env.PORT_GAME2)?env.PORT_GAME2:7001;
c.connectUrl = (env.DOTCLOUD_CLIENT_HTTP_HOST)?'http://'+env.DOTCLOUD_CLIENT_HTTP_HOST:"http://localhost:8080/client/";
c.motd = "Welcome to the new Gifted Server v" + c.version + "! Thanks for testing.";

c.env = env; // Might as well
module.exports = c;