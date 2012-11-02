// Globals are conceptually ugly but this is a game, gimme a break.
var User = require('./User');

var g = {};

var count = g.count = 0; // Cumulative number of connections made
var users = g.users = {};
users.send = function(str){
    for(var i in this){
        if(this[i] instanceof User){
            this[i].send(str);
        }
    }
}
users.sendTo = function(u){ // Send current users to given user
    if(u instanceof User){ // Don't faff about mate
        for(var i in this){
            if(this[i] instanceof User){
                u.send('/uc ' + users[i].id + " " + users[i].name);
            }
        }
    }
}

module.exports = g;