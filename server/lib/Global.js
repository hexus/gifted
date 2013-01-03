var Rooms = require('./Rooms');
var Users = require('./Users');

var g = {
    rooms : new Rooms(), // All of the hosted worlds
    users : new Users(), // Full list of players
};

module.exports = g;
