var async = require('async');
var empty = require('./Helpers').empty;
var Projectile = require('./shared/Projectile');

var count = 0; // Count of projectiles

var Projectiles = function(args){
	this.collection = [];
};

var p = Projectiles.prototype;

p.get = function(id){
	return (!id) ? this.collection : this.collection[id] || false;
}

p.add = function(i){
	if(i instanceof Projectile){
		i.pid = !i.pid ? ++count : i.pid;
		this.collection[i.pid] = i;
		return i;
	}
}

p.remove = function(i){
	if(i instanceof Projectile){
	    this.collection[i.pid] = false;
	}
}

module.exports = Projectiles;
