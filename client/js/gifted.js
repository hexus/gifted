socketUrl = '//localhost:7001';
//socketUrl = '//192.168.0.2:7001';

requirejs.config({
    paths: {
        // CDN libs
        //'jquery':'//code.jquery.com/jquery-1.8.2',
        //'easeljs':'//code.createjs.com/easeljs-0.5.0.min',
        //'tweenjs':'//code.createjs.com/tweenjs-0.3.0.min',
        //'movieclip':'//code.createjs.com/movieclip-0.5.0.min',
        //'preloadjs':'//code.createjs.com/preloadjs-0.2.0.min',
        
        // Local libs
        'jquery':'jquery-1.8.2',
        'easeljs':'easeljs-0.5.0.min',
        'tweenjs':'tweenjs-0.3.0.min',
        'movieclip':'movieclip-0.5.0.min',
        'preloadjs':'preloadjs-0.2.0.min',
        
        // Dynamic libs
        'socket.io':socketUrl+'/socket.io/socket.io',
        'shared':'/client/js/shared',
    },
    shim: {
        'socket.io':{
            exports:'io'
        },
		'createjs':{
		    deps:['easeljs','tweenjs','movieclip'],
		    exports:'createjs'
		},
		'movieclip':['easeljs','tweenjs'], // make sure movieclip is loaded last (it is a plugin)
		'assets':{
		    deps:['createjs'],
		    exports:'lib'
		}
    }
});

requirejs(['jquery','socket.io','createjs','assets','lib/global','lib/ui','lib/controls','lib/player','lib/world','lib/tile','shared/Map','shared/Entity'],
function($,io,createjs,lib,Global,Ui,Controls,Player,World,Tile,Map,Entity){
    function init(){
        var canvas, stage, socket, player, id, users, world, aspect=2.35;
        
        window.gifted = Global; // Expose global object for debugging
        
        tileSheetBuilder = new createjs.SpriteSheetBuilder();
        tileSheetBuilder.addMovieClip(new lib.giftedclienttiles(),new createjs.Rectangle(-4,-4,72,72));
        tileSheetBuilder.build();
        tiles = Global.tiles = tileSheetBuilder.spriteSheet;
        
        canvas = document.getElementById("canvas");
        player = Global.player = new Player();
        users = Global.users = {};
        stage = Global.stage = new createjs.Stage(canvas);
        world = Global.world = new World(new Map());
        socket = Global.socket = io.connect(socketUrl);
        
        stage.addChild(world);
        stage.addChild(player);
        
        createjs.Ticker.setFPS(32);
        createjs.Ticker.addListener(stage);
        createjs.Ticker.addListener(function(){
            if(Ui.selected()=='world'){
                world.tick();
            }
        });
        
        Global.ui = Ui;
        Ui.init();
        Ui.lobbyClear('Connecting...\n');
        Controls.init();
        
        socket.on('connect',function(){
            console.log("Socket.io connected!");
            Ui.selectWorld();
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
                    player = world.users[0] = Global.player = new Player();
                    player.spawn();
                    world.focusOn(player);
                    logData = false;
                    break;
                case "/c":
                    d = data.split(" ",2)
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

    }
    
    $(function(){
        init();
    });
});