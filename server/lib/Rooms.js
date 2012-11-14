var async = require('async');
var empty = require('./Helpers').empty;
var Room = require('./Room');

var rooms = [];

rooms.add = function(r){
	if(r instanceof Room){
		rooms[r.name] = r;
	}
}

rooms.remove = function(r){
	if(r instanceof Room){
		delete[rooms[r.name]];
	}else if(typeof(r)=='string'){
		delete[rooms[r]];
	}
}

module.exports = rooms;
