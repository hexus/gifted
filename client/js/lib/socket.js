define(['jquery','createjs','socket.io','lib/global','lib/player','shared/Item','shared/Weapon','shared/Bullet'],
function($,createjs,io,Global,Player,Item,Weapon,Bullet){
    
    var Socket = {}, stage, world, player, users, Ui;
    
    Socket.createSocket = function(socketUrl,onConnect,onDisconnect){
        
        var socket = Global.socket = io.connect(socketUrl,{
            'reconnect':false,
            'auto connect':false,
            'connect timeout':3000
        });
        
        socket.connect = function(f){ // shortcut
            this.socket.connect.call(this.socket,f);
        }
        
        socket.__defineGetter__('connected',function(){ // shortcut
           return this.socket.connected;
        });
        
        socket.reset = function(){ // So lazy
            stage = Global.stage,
            world = Global.world,
            player = Global.player,
            users = Global.users,
            Ui = Global.ui;
        }
        
        socket.reset();
        
        socket.connect();
        
        socket.on('connect',function(){
            console.log("Socket.io connected!");
            console.log(socket);
            socket.send('/worlds-pls');
            if(typeof onConnect === 'function'){
                onConnect();
            };
        });
        
        socket.on('connect_failed',function(){
            console.log('Socket.io failed to connect!');
        });
        
        socket.on('ping',function(){
            socket.emit('pong');
        });
        
        socket.on('disconnect',function(){
            //socket.disconnect();
            console.log('Socket.io disconnected!');
            if(typeof onDisconnect === 'function'){
                onDisconnect();
            }
        });
        
        socket.on('error',function(e){
            onDisconnect();
        });
        
        socket.on('message',function(data){
            var logData = true;
            var d = data.split(" ");
            var dstr = data.substr(d[0].length+1);
            switch(d[0]){
                case "/login-request":
                    $('#worldList input').remove();
                    var worlds = JSON.parse(dstr);
                    var html = '';
                    for(w in worlds){
                        $('<input>').attr({
                            'data-id':w,
                            type: 'button',
                            value: worlds[w].name
                        }).appendTo($('#worldList')).click(function(){
                            socket.send('/whoami ' + $(this).attr('data-id'));
                        });
                    }
                    break;
                case "/youare":
                    Global.player.uid = d[1] || 0;
                    Global.player.name = d[2] || 'guest';
                    users[d[1]] = Global.player;
                    break;
                case "/login-accept":
                    Ui.showLobby();
                    $('#buffer').empty();
                    break;
                case "/motd":
                    Ui.print(dstr);
                    break;
                case "/sm":
                    Ui.print('Server: ' + dstr);
                    break;
                case "/uc":
                    users[d[1]] = new Player({id:d[1],name:d[2]});
                    Ui.print(users[d[1]].name + ' connected');
                    if(Ui.selected()==='world'){
                        world.addPlayer(d[1],users[d[1]]);
                    }
                    break;
                case "/ud":
                    if(Ui.selected()==='world'){
                        world.removePlayer(d[1]);
                    }
                    Ui.print(users[d[1]].name + ' disconnected');
                    delete(users[d[1]]);
                    break;
                case "/us":
                    var u = users[d[1]];
                    if(u){
                        u.spawn();
                    }
                    break;
                case "/uw": // other user moving to lobby or world
                    if(d[1]&&d[2]){ // id && 0/1 (ie lobby/world)
                        // todo
                    }
                    break;
                case "/r": // Approval to move to into world or back to lobby
                    if(Ui.selected()==='lobby'){
                        if(d[1]=='1'){
                            Ui.showLoading("receiving world",function(){
                                socket.send('/info-request json');    
                            });
                        }
                    }else if(Ui.selected()==='world'){
                        if(d[1]=='0'){
                            Ui.showLobby();
                        }
                    }
                    break;
                case "/ws": // World send (properties)
                    world.map.setProperties(JSON.parse(dstr));
                    break;
                case "/wd": // World data (map)
                    world.map.expand(dstr);
                    Global.worldUi.updateMap();
                    world.addPlayer(player.uid,player);
                    world.focusOn(player);
                    Ui.showWorld(); // Implement a loading overlay!
                    logData = false;
                    break;
                case "/ping":
                    Global.debugObj.out.ping = d[1];
                    logData = false;
                    break;
                case "/c":
                    d = data.split(" ",2);
                    Ui.print(users[d[1]].name+": "+data.substr(d[0].length+d[1].length+2));
                    break;
                case "/m": // Update player state (move)
                    logData = false;
                    var deltas = JSON.parse(dstr);
                    for(var d in deltas){
                        var s = deltas[d];
                        if(world.users[d]){
                            var user = world.users[d];
                            if(user.thisPlayer){
                                if(user.state.health<1){
                                    Global.ui.showRespawnMenu();
                                }
                            }
                            user.bufferState(s);
                        }
                    }
                    break;
                case "/ec": // Create entity
                    logData = false;
                    var s = JSON.parse(dstr);
                    var e = world.recreateEntity(s);
                    if(e){
                        world.addEntity(e);
                        e.tick();
                    }
                    break;
                case "/er":
                    if(d[1]){
                        world.removeEntity(world.entities[d[1]]);
                    }
                    break;
                case "/ed": // Update entity state
                    logData = false;
                    var deltas = JSON.parse(dstr);
                    for(var eid in deltas){
                        var e = world.entities[eid];
                        if(!e){ // create entity if it doesn't exist
                            e = world.addEntity(world.recreateEntity(deltas[eid],eid));
                        }else{
                            e.bufferState(deltas[eid]);
                            /*
                            for(var i in deltas[eid]){
                                if(e){
                                    if(e.state[i]!=null && typeof e.state[i] === typeof deltas[eid][i]){
                                        e.state[i] = deltas[eid][i];
                                    }
                                }
                            }*/
                            //e.tick();
                        }
                    }
                    break;
                case "/itemGive":
                    var json = JSON.parse(dstr);
                    var item = world.recreateEntity(json.state,json.eid);
                    users[json.id].setItem(json.side,item);
                    break;
                case "/itemTake":
                    var json = JSON.parse(dstr);
                    var item = world.entities[json.eid];
                    if(item){
                        users[json.id].setItem(json.side,item);
                        world.removeEntity(item);
                    }
                    break;
                case "/itemDrop":
                    if(d[2]=='l'||d[2]=='r'){
                        users[d[1]].dropItem(d[2]);
                    }
                    break;
                default:
                    console.log("Unrecognised data: ");
                    logData = true;
            }
            if(logData){
                console.log("Data: " + data);
            }
        });
        
        return socket;
    }
    
    return Socket;
});