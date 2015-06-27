var async = require('async');
var empty = require('./Helpers').empty;
var User = require('./User');

var warning = function(w) {
	console.log("User collection warning: " + w);
}
var error = function(e) {
	if (e) {
		console.log("User collection error: " + e);
	}
}
var count = 0;

var Users = function() {
	this.collection = [];
};

var p = Users.prototype;

p.get = function(id) {
	return (!id) ? this.collection : this.collection[id] || false;
}

p.resolve = function(u) {
	var user;

	if (u instanceof User) {// ref
		user = u;
	} else if (typeof u == 'number') {// id
		user = this.get(u);
	} else {
		user = false;
	}

	return user;
}

p.purify = function() {
	this.collection = this.collection.filter(function(i) {
		var keep = i instanceof User;
		
		if (!keep) {
			warning("Non-user removed from user collection");
		}
		
		return keep;
	});
}

p.add = function(u) {
	if (u instanceof User) {
		u.id = u.id || ++count;
		
		if (!this.collection[u.id]) {
			this.collection[u.id] = u;
		} else {
			error('User already exists in this collection with id ' + u.id);
		}
	}
}

p.remove = function(u) {
	var user = this.resolve(u);

	if (user) {
		//this.send('/ud ' + user.id);
		delete (this.collection[user.id]);
	}
}

p.ping = function() {
	async.each(this.collection, function(i, c) {
		if (i instanceof User) {
			i.ping();
		}
	}, error);
}

p.send = function(str, exclude) {
	if (empty(exclude)) {
		exclude = null;
	}
	
	if (!empty(str)) {
		this.purify();
		
		async.each(this.collection, function(i, c) {
			if (!exclude || i != exclude) {
				i.send(str);
			}
			
			c();
		}, error);
	}
}

/**
 * Send the given user to all users in the collection, other than themselves.
 * 
 * @param {User} u
 */
p.sendUser = function(user) {
	user = this.resolve(user);
	this.send('/uc ' + user.id + ' ' + user.name, user);
	// Send user to all excluding self
}

p.sendTo = function(u) {// Send users to given user
	if (u instanceof User) {// Don't faff about mate
		this.purify();
		
		// Asynchronous
		async.each(this.collection, function(i, c) {
			if (i != u) {
				i.sendTo(u);
			} else {
				u.sendSelf = true;
			}
			
			c();
		}, error);
	}
}

module.exports = Users;
