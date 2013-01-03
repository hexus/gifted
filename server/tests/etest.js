var Global = require('../lib/Global');
var Room = require('../lib/Room');
var Entity = require('../lib/shared/Entity');
var Character = require('../lib/shared/Character');

var r = new Room({name:'etest'});
r.map.generate();
var e1 = new Entity({world:r});
var e2 = new Character({world:r});