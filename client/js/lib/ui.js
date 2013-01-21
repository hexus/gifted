define(['jquery','createjs','lib/global','lib/socket'],
function($,createjs,Global,Socket){
    
    var Ui = {}, dom,stage,socket,player,world,selected;
    
    Ui.init = function(){
        
        dom = Global.dom = {},
        stage = Global.stage,
        socketUrl = Global.sUrl,
        socket = Global.socket,
        player = Global.player,
        world = Global.world;
        
        $('.screen').each(function(k,v){
            dom[v.id] = new createjs.DOMElement($('#'+v.id)[0]);
            dom[v.id].regX = dom[v.id].regY = dom[v.id].x = dom[v.id].y = 0;
            stage.addChild(dom[v.id]);
        });
        
        dom.headwear_frame = 0;
        
        $("#sp").click(function(){
            if(world){
                world.map.generate();
                var p = world.map.getProperties();
                player = world.users[0] = Global.player;
                player.world = world;
                player.spawn();
                world.focusOn(player);
                Ui.showWorld();
            }
        });
        
        $("#mp").click(function(){
            socket = Global.socket = Socket.createSocket(socketUrl,function(){
                Ui.selectWorld();
            });
        })
        
        $("#headwear_prev").click(function(){
            if(dom.headwear_frame>0){
                dom.headwear_frame--;
            }else{
                dom.headwear_frame = player.char.head.wear.timeline.duration-1;
            }
            player.char.head.wear.gotoAndStop(dom.headwear_frame);
        });
        
        $("#headwear_next").click(function(){
            if(dom.headwear_frame<player.char.head.wear.timeline.duration-1){
                dom.headwear_frame++;
            }else{
                dom.headwear_frame = 0;
            }
            player.char.head.wear.gotoAndStop(dom.headwear_frame);
        });
        
        $('#send').click(function(){
            Ui.msg();
        });
        
        $('#send').parent().keydown(function(event){
            if(event.which == 13) {
                //event.preventDefault();
                Ui.msg($('#msg').val());
                $('#msg').val('');
            }
        });
        
        $('#leave').click(function(){
           Ui.selectWorld(); 
        });
        
        $('#play').click(function(){
            socket.send('/r 1');
        });
        
        Ui.hideAll();
        $('#client').fadeTo('slow',1);
        Ui.showMain();
    }
    
    Ui.hideAll = function(){
        $('#mainMenu').hide();
        $('#worldList').hide();
        $('#lobby').hide();
        player.visible = false;
        world.visible = false;
        //createjs.Ticker.removeListener(world);
    }
    
    Ui.showMain = function(){
        selected = 'main';
        Ui.hideAll();
        $('#mainMenu').show();
    }
    
    Ui.selectWorld = function(){
        selected = 'worldList';
        Ui.hideAll();
        $('#worldList').remove('input').show();
        socket.send('/login-pls');
    }
    
    Ui.showLobby = function(){
        selected = 'lobby';
        Ui.hideAll();
        stage.addChild(player);
        player.x = 90;
        player.y = 180;
        player.scaleX = player.scaleY = 3;
        player.char.gotoAndStop(0);
        player.visible = true;
        $('#lobby').show();
        $('#msg').focus();
    }
    
    Ui.showWorld = function(){
        if(selected=='lobby'){
            world.addPlayer(player);
        }
        selected = 'world';
        Ui.hideAll();
        player.scaleX = player.scaleY = 1;
        player.visible = true;
        world.visible = true;
    }
    
    Ui.selected = function(){
        return selected;
    }
    
    Ui.lobbyClear = function(){
        $('#buffer').empty();
        Ui.lobbyPrint.apply(Ui,arguments);
    }
    
    Ui.lobbyPrint = function(){
        for(i=0;i<arguments.length;i++){
            $('#buffer').append(arguments[i]+"\n");
        }
    }
    
    Ui.print = function(){
        Ui.lobbyPrint.apply(Ui,arguments);
    }
    
    // Chat is always controlled by Ui, it seems to fit in here
    Ui.msg = function(data){ 
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
    
    Ui.updateFPS = function(fps){
        $('#fps').html(fps);
    }
    
    return Ui;
});
