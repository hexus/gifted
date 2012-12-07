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

requirejs(['jquery','socket.io','createjs','assets','lib/player','lib/world','lib/tile'],
function($,io,createjs,lib,Player,World,Tile){
    function init(){
        var canvas, stage, socket, player, id, users, dom, aspect=2.35;
        
        canvas = document.getElementById("canvas");
        
        player = new Player();
    
        player.onClick = function(){
            player.char.gotoAndPlay("running");
        };
        
        var world = window.world = new World();
        for(var i=0;i<11;i++){
	        var tile = world.addChild(new Tile());
	        tile.frame = i;
	        tile.x = i*62;
	        tile.y = 10;
        }
        window.Tile = Tile;
        console.log(world);
        
        function center(domele,ele){
        	domele.regX = parseInt($(ele).css('width'),10)/2;
        	domele.regY = parseInt($(ele).css('height'),10)/2;
        	domele.x = canvas.width/2-15;
        	domele.y = canvas.height/2;
        }
        
        dom = {};
        
        dom.worldList = new createjs.DOMElement($('#worldList')[0]);
        center(dom.worldList,'#worldList');
        
        dom.head_prev = new createjs.DOMElement($("#headwear_prev")[0]);
        dom.head_next = new createjs.DOMElement($("#headwear_next")[0]);
        dom.head_prev.regX = dom.head_prev.regY = 0;
        dom.head_prev.x = 20;
        dom.head_prev.y = 80;
        dom.head_next.x = 140;
        dom.head_next.y = 80;
        
        dom.chat = new createjs.DOMElement($('#chat')[0]);
        dom.chat.regX = parseInt($('#chat').css('width'),10);
        dom.chat.x = canvas.width-20; // Right aligned
        dom.chat.regY = parseInt($('#chat').css('height'),10)/2;
        dom.chat.y = canvas.height/2;
        
        dom.head_frame = 0;
        
        $("#headwear_prev").click(function(){
            if(dom.head_frame>0){
                dom.head_frame--;
            }else{
                dom.head_frame = player.char.head.wear.timeline.duration-1;
            }
            player.char.head.wear.gotoAndStop(dom.head_frame);
        });
        
        $("#headwear_next").click(function(){
            if(dom.head_frame<player.char.head.wear.timeline.duration-1){
                dom.head_frame++;
            }else{
                dom.head_frame = 0;
            }
            player.char.head.wear.gotoAndStop(dom.head_frame);
        });
        
        stage = new createjs.Stage(canvas);
        stage.addChild(player);
        stage.addChild(world);
        stage.addChild(dom.worldList);
        stage.addChild(dom.head_prev);
        stage.addChild(dom.head_next);
        stage.addChild(dom.chat);
        
        createjs.Ticker.setFPS(32);
        createjs.Ticker.addListener(stage);
        
        
        // 
        function print(){
        	for(i=0;i<arguments.length;i++)
        	$('#buffer').append(arguments[i]+"\n");
        }
        users = {};
        
        window.socket = socket = io.connect(socketUrl);
        $('#buffer').empty().text('Connecting...\n');
        
        socket.on('connect',function(){
            console.log("Socket.io connected!");
            selectWorld();
        });
        
        socket.on('message',function(data){
            console.log("Data: " + data);
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
                    //this.send("/whoami");
                    break;
                case "/youare":
                    id = d[1];
                    users[d[1]] = {name:d[2]};
                    break;
                case "/login-accept":
                	showLobby();
					$('#buffer').empty();
                    break;
                case "/motd":
                    print(dstr);
                    break;
                case "/sm":
                	print('Server: ' + dstr);
                	break;
                case "/uc":
                    if(d[1]!=id){
                        users[d[1]] = {name:d[2]};
                        print(users[d[1]].name + ' connected');
                    }
                    break;
                case "/ud":
                    if(d[1]!=id){
                        print(users[d[1]].name + ' disconnected');
                        delete(users[d[1]]);
                    }
                    break;
                case "/ur":
                	if(d[1]&&d[2]){
                		// todo
                	}
                	break;
                case "/ws": // World send
                    //
                    break;
                case "/wd": // World data
                    //
                    break;
                case "/c":
                    d = data.split(" ",2)
                    print(users[d[1]].name+": "+data.substr(d[0].length+d[1].length+2));
                    break;
                default:
                    console.log("^ Unrecognised");
            }
        });
        
        function msg(data){
            data = data || '';
            if(data!=''){
                var c = data.split(' ');
                var cstr = data.substr(c[0].length+1);
                if(data.substr(0,1)=='/'){ // Command
                    switch(c[0]){
                        case '/worlds':
                            selectWorld();
                            break;
						case '/play':
							showWorld();
							break;
                    }
                }else{ // Chat
                    socket.send("/c " + data);
                }
            }
        }
        
        $('#send').click(function(){
            msg();
        });
        
        $('#send').parent().keydown(function(event){
            if(event.which == 13) {
                //event.preventDefault();
                msg($('#msg').val());
                $('#msg').val('');
            }
        });
        
        
        function hideAll(){
        	$('#worldList').hide();
            $('#lobby').hide();
            player.visible = false;
            world.visible = false;
        }
        
        function selectWorld(){
            hideAll();
            $('#worldList').remove('input').show();
            socket.send('/login-pls');
        }
        function showLobby(){
            hideAll();
	        player.x = 90;
	        player.y = 180;
	        player.scaleX = player.scaleY = 3;
	        player.char.gotoAndStop(0);
	        player.visible = true;
            $('#lobby').show();
            $('#msg').focus();
        }
        function showWorld(){
        	hideAll();
        	player.x = player.y = 200;
        	player.scaleX = player.scaleY = 1;
        	player.char.gotoAndStop(0);
        	player.visible = true;
        	world.visible = true;
        }
        
        hideAll();
        $('#wrap').fadeTo('fast',1);
        $('#worldList').show();
    }
    
    $(function(){
        init();
    });
});