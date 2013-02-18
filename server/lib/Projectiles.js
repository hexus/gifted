var async = require('async');
var empty = require('./Helpers').empty;
var Projectile = require('./shared/Projectile');

var count = 0; // Count of rooms

var Projectiles = function(args){
	this.collection = [];
};

var p = Projectiles.prototype;

p.get = function(id){
	return (!id) ? this.collection : this.collection[id] || false;
}

p.add = function(i){
	if(i instanceof Projectile){
		i.eid = i.eid || ++count;
		this.collection[i.eid] = i;
	}
}

p.remove = function(i){
	if(i instanceof Projectile){
		delete[this.collection[i.eid]];
	}
}

module.exports = Projectiles;
