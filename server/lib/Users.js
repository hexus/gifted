var User = require('./User');

// Collection
var users = u = {}; // Collection of users (integer keys pls)
var count = users.count = 0; // Cumulative number of connections made
users.send = function(str){
    for(var i in this){
        if(this[i] instanceof User){
            this[i].send(str);
        }
    }
}
users.sendTo = function(u){ // Send users to given user
    if(u instanceof User){ // Don't faff about mate
        for(var i in this){
            if(this[i] instanceof User && i!=u){
                u.send('/uc ' + users[i].id + " " + users[i].name);
            }
        }
    }
}

module.exports = u;