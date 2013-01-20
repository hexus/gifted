define(['jquery','createjs','socket.io','lib/global'],
function($,createjs,io,Global){
    
    var Socket = {};
    
    Socket.createSocket = function(socketUrl){
        dom = Global.dom = {},
        stage = Global.stage,
        world = Global.world,
        player = Global.player,
        users = Global.users,
        Ui = Global.ui;
        
        var socket = Global.socket = io.connect(socketUrl);
        
        socket.on('connect',function(){
            console.log("Socket.io connected!");
            $('#worldList, #mp').removeAttr('disabled');
        });
        
        socket.on('message',function(data){
            var logData = true;
            var d = data.split(" ");
            var dstr = data.substr(d[0].length+1);
            switch(d[0]){
                case "/login-request":
                    $('#worldList input').remove();
                    var worlds = JSON.parse(data.substr(d[0].length+1));
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
                    id = d[1];
                    users[d[1]] = {name:d[2]};
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
                    if(d[1]!=id){
                        users[d[1]] = {name:d[2]};
                        Ui.print(users[d[1]].name + ' connected');
                    }
                    break;
                case "/ud":
                    if(d[1]!=id){
                        Ui.print(users[d[1]].name + ' disconnected');
                        delete(users[d[1]]);
                    }
                    break;
                case "/uw": // other user moving to lobby or world
                    if(d[1]&&d[2]){ // id && 0/1 (ie lobby/world)
                        // todo
                    }
                    break;
                case "/ws": // World send (properties)
                    world.map.setProperties(JSON.parse(dstr));
                    break;
                case "/wd": // World data (map)
                    world.map.expand(dstr);
                    var p = world.map.getProperties();
                    world.removeChild(player);
                    player = world.users[0] = Global.player;
                    player.spawn();
                    world.focusOn(player);
                    logData = false;
                    break;
                case "/c":
                    d = data.split(" ",2);
                    Ui.print(users[d[1]].name+": "+data.substr(d[0].length+d[1].length+2));
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