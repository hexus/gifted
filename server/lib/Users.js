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

users.add = function(u){
	if(u instanceof User){
		users[u.id] = u;
	}
}

users.remove = function(u){
	if(u instanceof User){
		delete[users[u.id]];
	}else if(typeof(u)=='number'){
		delete[users[u]];
	}
}

users.send = function(str,ex){
    if(empty(ex)){ex=null;}
    if(!empty(str)){
        async.forEach(users,function(i,c){ // Parallel baby (only takes arrays >:/)
            if(i instanceof User && i!=ex){
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
users.sendUser = function(u){
	users.send('/uc ' + u.id + ' ' + u.name, u); // Send user to all excluding self
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
