var async = require('async');
var empty = require('./Helpers').empty;
var User = require('./User');

var warning = function(w){
    console.log("User collection warning: "  + w);
}

var error = function(e){
    if(e){console.log("User collection error: " + e);}
}

// Collection
var users = []; // Collection of users (integer keys pls)
var count = users.count = 0; // Cumulative number of connections made
users.send = function(str){
    if(!empty(str)){
        async.forEach(users,function(i,c){ // Parallel baby (only takes arrays >:/)
            if(i instanceof User){
                i.send(str);
            }else{
                delete(users[i.id]);
                warning("Non-user removed from collection");
            }
            c();
        },error);
        
        /* // Synchronous
        for(var i in this){
            if(this[i] instanceof User){
                this[i].send(str);
            }
        }*/
    }
}
users.sendTo = function(u){ // Send users to given user
    if(u instanceof User){ // Don't faff about mate
        // Asynchronous
        async.forEach(users,function(i,c){
            if(i instanceof User){
                if(i!=u){u.send('/uc ' + i.id + ' ' + i.name)};
            }else{
                delete(users[i.id]);
                warning("Non-User removed from collection");
            }
            c();
        },error);
        
        /* // Synchronous
        for(var i in this){
            if(this[i] instanceof User){
                if(i!=u){u.send('/uc ' + users[i].id + " " + users[i].name)};
            }
        } */
    }
}

module.exports = users;
