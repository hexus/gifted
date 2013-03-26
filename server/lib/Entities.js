var async = require('async');
var empty = require('./Helpers').empty;
var Entity = require('./shared/Entity');

var count = 0; // Count of entities

var Entities = function(args){
	this.collection = [];
};

var p = Entities.prototype;

p.get = function(id){
	return (!id) ? this.collection : this.collection[id] || false;
}

p.add = function(i){
	if(i instanceof Entity){
		i.eid = !i.eid ? ++count : i.eid;
		this.collection[i.eid] = i;
		return i;
	}
}

p.remove = function(i){
	if(i instanceof Entity){
	    this.collection[i.eid] = false;
	}
}

module.exports = Entities;
