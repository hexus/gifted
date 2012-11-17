var async = require('async');
var empty = require('./Helpers').empty;
var Room = require('./Room');

var count = 0; // Count of rooms

var Rooms = function(args){
	this.collection = [];
};

var p = Rooms.prototype;

p.get = function(id){
	return (!id) ? this.collection : this.collection[id] || false;
}

p.list = function(){
	var json = {};
	for(var r in this.get()){
		if(this.get(r)){
			json[r] = {name:this.get(r).name};
		}
	}
	return JSON.stringify(json);
}

p.add = function(r){
	if(r instanceof Room){
		r.id = r.id || ++count;
		this.collection[r.id] = r;
	}
}

p.remove = function(r){
	if(r instanceof Room){
		delete[this.collection[r.id]];
	}
}

module.exports = Rooms;
