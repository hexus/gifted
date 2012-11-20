requirejs.config({
    paths: {
       'jquery':'//code.jquery.com/jquery-1.8.2',
       'socket.io':'http://localhost:7001/socket.io/socket.io',
       'easeljs':'http://code.createjs.com/easeljs-0.5.0.min',
       'tweenjs':'http://code.createjs.com/tweenjs-0.3.0.min',
       'movieclip':'http://code.createjs.com/movieclip-0.5.0.min',
       'preloadjs':'http://code.createjs.com/preloadjs-0.2.0.min'
    },
    shim: {
        'socket.io':{
            exports:'io',
            init:function(){
                return this.io;
            }
        },
		'createjs':{
		    deps:['easeljs','tweenjs','movieclip'],
		    exports:'createjs',
		    init:function(){
		        return this.createjs;
		    }
		},
		'movieclip':['easeljs','tweenjs'],
		'assets':{
		    deps:['createjs'],
		    exports:'lib',
		    init:function(){
		        return this.lib;
		    }
		}
    }
});

requirejs(['jquery','socket.io','createjs','assets','lib/player'],
function($,io,createjs,lib,Player){
    var canvas, stage, socket, player, id, users, dom, aspect=2.35;

    canvas = document.getElementById("canvas");
    
    player = new Player();
    player.x = 90;
    player.y = 180;
    player.scaleX = player.scaleY = 3;
    player.char.gotoAndStop(0);

    player.onClick = function(){
        player.char.gotoAndPlay("running");
    };
    
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
    stage.addChild(dom.worldList);
    stage.addChild(dom.head_prev);
    stage.addChild(dom.head_next);
    stage.addChild(dom.chat);
    
    createjs.Ticker.setFPS(32);
    createjs.Ticker.addListener(stage);
    
    
    // 
    function print(str){$('#buffer').append(str+"\n");}
    users = {};
    
    socket = io.connect('http://localhost:7001');
    
    socket.on('connect',function(){
        console.log("Socket.io connected!");
        $('#buffer').empty().text('Logging in...\n');
        socket.send('/login-pls');
    });
    
    socket.on('message',function(data){
        console.log("Data: " + data);
        var d = data.split(" ");
        switch(d[0]){
            case "/login-request":
            	var worlds = JSON.parse(data.substr(d[0].length+1));
            	var html = '';
            	for(w in worlds){
            		$('<input>').attr({
            			type: 'button',
            			value: worlds[w].name
            		}).appendTo($('#worldList'));
            	}
                //this.send("/whoami");
                break;
            case "/youare":
                id = d[1];
                users[d[1]] = {name:d[2]};
                break;
            case "/login-accept":
                $('#buffer').empty();
                $('#msg').focus();
                break;
            case "/motd":
                print(data.substr(d[0].length+1));
                break;
            case "/uc":
                if(d[1]!=id){
                    users[d[1]] = {name:d[2]};
                    print(users[d[1]].name + " connected");
                }
                break;
            case "/ud":
                delete(users[d[1]]);
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
    
    function msg(){
        var str = $('#msg').val();
        if(str!=''){
            socket.send("/c " + $('#msg').val());
            $('#msg').val('');
        }
    }
    
    $('#send').click(function(){
        msg();
    });
    
    $('#send').parent().keydown(function(event) {
        if(event.which == 13) {
            //event.preventDefault();
            msg();
        }
    });

});