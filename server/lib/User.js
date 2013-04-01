var Character = require('./shared/Character');

// Class
var User = function(args){
    this.super_Character.constructor.call(this,args);
    var that = this
    this.id = args.id; // Local ID
    this.name = args.name; // Selected character name
    this.hitbox = {width:25,height:60};
    this.hitboxFull = JSON.parse(JSON.stringify(this.hitbox));
    this.room = null;
    this.inLobby = true;
    this.socket = args.socket; // Socket of user
    this.socketType = (!args.socketType) ? "TCP" : args.socketType; // TCP/Socket.io

    this.pingTime = 0;
    this.pongTime = 0;
    
    this.state.__defineGetter__('isAiming',function(){
        return that.state.isAimingLeft || that.state.isAimingRight;
    });
    this.state.isAimingLeft = false;
    this.state.isAimingRight = false;
    this.state.aimAngle = 0;
    this.state.aimDir = 1;
    this.state.outfit = {headwear:0};
    this.sendSelf = false;
}

var p = User.prototype = new Character();
p.super_Character = Character.prototype;

p.tick = function(){
    for(var e in this.effects){ // inform user about changes to self on next delta update
        if(this.effects[e]!=null){
            this.sendSelf = true;
        }
    }
    this.super_Character.tick.call(this);
}

p.getState = function(){
    var state = JSON.parse(JSON.stringify(this.state));
    state.id = this.id;
    return state;
}

p.getSelfDelta = function(){
    var state = {id:this.id};
    var share = ['xSpeed','ySpeed','health'];
    var currentState = JSON.parse(JSON.stringify(this.state));
    for(var i in share){
        state[i] = currentState[share[i]];
    }
    return state;
}

p.pickUpItem = function(side){
    this.super_Character.pickUpItem.call(this,side);
    var item = this.getItem(side);
    if(item){
        var json = JSON.stringify({
            id:this.id,
            side:side,
            eid:item.eid
        });
        this.room.send("/itemTake " + json);
    }
}

p.dropItem = function(side){
    this.super_Character.dropItem.call(this,side);
    this.room.send("/itemDrop " + this.id + " " + side);
}

p.getPing = function(){
    return Math.round((this.pongTime - this.pingTime) / 2);
}

p.ping = function(){
    this.pingTime = new Date().getTime();
    if(this.socketType=='TCP'){
        this.socket.write('/ping');
    }else{
        this.socket.emit('ping');
    }
}

p.pong = function(){
    this.pongTime = new Date().getTime();
}

p.send = function(str){
    if(this.socketType=="TCP"){
        this.socket.write(str + String.fromCharCode(0));
    }else{ // Assume Socket.io
        this.socket.send(str);
    }
}

p.sendTo = function(u){
    if(u instanceof User){
        u.send('/uc ' + this.id + ' ' + this.name);
        var state = {};
        state[this.id] = this.getState();
        u.send('/m ' + JSON.stringify(state));
        for(var i=0;i<2;i++){
            var side = i>0 ? 'r' : 'l';
            var item = this.getItem(side);
            if(item){
                var json = JSON.stringify({
                    id:this.id,
                    side:side,
                    eid:item.eid,
                    state:item.state
                });
                u.send("/itemGive " + json);
            }
        }
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
