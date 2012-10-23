var fs = require('fs');
var c = {}; // Config object

// Dotcloud Environment
try{
    env = JSON.parse(fs.readFileSync('/home/dotcloud/environment.json', 'utf-8'));
}catch(e){
	console.log("No environment file found: " + e);
    env = false;
}
env = (env) ? env : ((process.env)?process.env:false);
c.version = "0.0.1"; 
c.listenPort = (env.PORT_GAME)?env.PORT_GAME:37955;
c.connectUrl = (env.DOTCLOUD_SERVER_GAME_URL)?env.DOTCLOUD_SERVER_GAME_URL:"tcp://localhost:"+c.listenPort;
c.motd = "Welcome to the new Gifted Server v" + c.version + "! Thank you for testing.";

c.env = env; // Might as well
module.exports = c;