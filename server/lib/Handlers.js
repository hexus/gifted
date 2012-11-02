var config = require('./Config');
var users = require('./Users').collection;

var h = {};

h.handleData = function(data){ // Called in context of a User
    console.log("Data: " + data);
    var d = data.split(" ");
    switch(d[0]){
        case "<policy-file-request/>": // Flash policy
            this.send("<cross-domain-policy><allow-access-from domain=\"*\" to-ports=\"*\"/></cross-domain-policy>");
            break;
        case "/login-pls": // Client is ready to log in
            this.send("/login-request");
            break;
        case "/whoami": // Guest login
            this.send("/youare " + this.id + " " + this.name);
            this.send("/login-accept");
            this.send("/motd " + config.motd);
            users.send("/uc " + this.id + " " + this.name);
            users.sendTo(this);
            break;
        case "/login": // A login request
            if(d[1]!=""){this.name = d[1];}
            this.send("/login-accept");
            this.send("/motd " + config.motd);
            users.send("/uc " + this.id + " " + this.name);
            users.sendTo(this);
            break;
        // To be ignored / implemented / removed
        case "/info-request": case "/r":
            // Early days innit
            break;
        case "/c": // Chat
            users.send("/c " + this.id + " " + data.substr(3));
            break;
        default:
          console.log("Unrecognised data: " + data);
          break;
    }
};

h.handleLogin = function(name,hash){
  // Bettah do some database sheit here boi  
};

module.exports = h;