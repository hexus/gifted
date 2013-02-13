define(['jquery','createjs','socket.io','lib/global','lib/player'],
function($,createjs,io,Global,Player){
    
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
        
        socket.connect(function(){
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
            socket.disconnect();
            console.log('Socket.io disconnected!');
            if(typeof onDisconnect === 'function'){
                onDisconnect();
            }
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
                    Global.player.gid = d[1] || 0;
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
                        //world.users[d[1]] = users[d[1]];
                        //users[d[1]].spawn();
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
                    if(d[1]!=id){
                        var u = users[d[1]];
                        if(u){
                            u.spawn();
                        }
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
                            Ui.showWorld();
                            socket.send('/info-request json');
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
                    world.overlay.updateMap();
                    world.addPlayer(player.gid,player);
                    world.focusOn(player);
                    // Ui.hideLoadingScreen(); // Implement a loading overlay!
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
                case "/m":
                    var s = JSON.parse(dstr);
                    if(s.id){
                        if(world.users[s.id]){
                            var user = world.users[s.id];
                            for(i in s){
                                if(user.state[i]!=null && typeof user.state[i] === typeof s[i]){
                                    user.state[i] = s[i];
                                }
                            }
                            user.tick(); // Keep physics in check immediately
                        }
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