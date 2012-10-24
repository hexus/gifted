var fs = require('fs');
var c = {}; // Config object


// Dotcloud Environment
try{
    env = JSON.parse(fs.readFileSync('/home/dotcloud/environment.json', 'utf-8'));
    c.basePath = "/home/dotcloud/current/client/";
}catch(e){
	env = false;
	c.basePath = "/cygwin/home/Hexus/gifted/client/";
    console.log("No environment file found: " + e);
}
env = (env) ? env : ((process.env)?process.env:false);
c.version = JSON.parse(fs.readFileSync('./package.json','utf-8')).version  || "Unknown"; 
c.httpPort = 8080;
c.listenPort = (env.PORT_GAME)?env.PORT_GAME:7000;
c.listenPort2 = (env.PORT_GAME2)?env.PORT_GAME2:7001;
c.connectUrl = (env.DOTCLOUD_SERVER_GAME_URL)?env.DOTCLOUD_SERVER_GAME_URL:"tcp://localhost:"+c.listenPort;
c.motd = "Welcome to the new Gifted Server v" + c.version + "! Thank you for testing.";

c.env = env; // Might as well
module.exports = c;