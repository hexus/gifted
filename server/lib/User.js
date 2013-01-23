var Character = require('./shared/Character');

// Class
var User = function(args){
    this.super_Character.constructor.call(this,args);
    var that = this
    this.id = args.id; // Local ID
    this.aid = args.aid; // Account ID
    this.name = args.name; // Selected character name
    this.hitbox = {width:25,height:60};
    this.room = null;
    this.inLobby = true;
    this.socket = args.socket; // Socket of user
    this.socketType = (!args.socketType) ? "TCP" : args.socketType; // TCP/Socket.io
    
    this.state.__defineGetter__('isAiming',function(){
        return that.state.isAimingLeft || that.state.isAimingRight;
    });
    this.state.isAimingLeft = false;
    this.state.isAimingRight = false;
    this.state.aimAngle = 0;
    this.state.aimDir = 1;
}

var p = User.prototype = new Character();
p.super_Character = Character.prototype;

p.tick = function(){
    this.super_Character.tick.call(this);
}

p.send = function(str){
    if(this.socketType=="TCP"){
        console.log(this);
        this.socket.write(str + String.fromCharCode(0));
    }else{ // Assume Socket.io
        this.socket.send(str);
    }
}

p.sendTo = function(u){
    if(u instanceof User){
        u.send('/uc ' + this.id + ' ' + this.name);
    }
}

p.sendWorld = function(format){
    var m = this.room.map;
    var mp = m.getProperties();
    // World send (initial information)
    if(format!='json'){
        this.send('/ws '.concat(
            this.room.name,' ',
            mp.worldSize.width,' ',
            mp.worldSize.height,' ',
            mp.regionSize.width,' ',
            mp.regionSize.height,' ',
            mp.tileSize,' ',
            mp.spawn.x,' ',
            mp.spawn.y
        ));
    }else{
        this.send('/ws '.concat(JSON.stringify(mp)));
    }
    
    // World data (flattened map)
    this.send('/wd ' + m.flat());
}

module.exports = User;
