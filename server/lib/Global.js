var Rooms = require('./Rooms');
var Users = require('./Users');

var g = {};

g.rooms = new Rooms(); // All of the hosted worlds
g.users = new Users(); // Full list of connections

module.exports = g;
