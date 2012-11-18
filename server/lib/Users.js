var async = require('async');
var empty = require('./Helpers').empty;
var User = require('./User');

var count = 0;

var warning = function(w){
    console.log("User collection warning: "  + w);
}

var error = function(e){
    if(e){console.log("User collection error: " + e);}
}

var Users = function(){
	this.collection = [];
};

var p = Users.prototype;

p.get = function(id){
	return (!id) ? this.collection : this.collection[id] || false;
}

p.add = function(u){
	if(u instanceof User){
		u.id = u.id || ++count;
		this.collection[u.id] = u;
	}
}

p.remove = function(u){
	var user;
	if(u instanceof User){
		user = u;
	}else if(typeof(u)=='number'){
		user = this.get(u);
	}
	if(user){
		delete(this.collection[user.id]);
	}
}

p.send = function(str,ex){
    if(empty(ex)){ex=null;}
    if(!empty(str)){
        async.forEach(this.collection,function(i,c){ // Parallel baby (only takes arrays >:/)
            if(i instanceof User){
            	if(ex==null || i!=ex){
                	i.send(str);
               	}
            }else{
                delete(this.collection[i.id]);
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

p.sendUser = function(u){
	this.send('/uc ' + u.id + ' ' + u.name, u); // Send user to all excluding self
}

p.sendTo = function(u){ // Send users to given user
    if(u instanceof User){ // Don't faff about mate
        // Asynchronous
        async.forEach(this.collection,function(i,c){
            if(i instanceof User){
                if(i!=u){u.send('/uc ' + i.id + ' ' + i.name)};
            }else{
                delete(this.collection[i.id]);
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

module.exports = Users;
