define(['jquery','createjs','lib/global','lib/socket','shared/Bullet','shared/Weapon'],
function($,createjs,Global,Socket,Bullet,Weapon){
    
    var Ui = {}, dom,stage,socket,player,world,worldUi,selected,original;
    
    Ui.init = function(){
        
        original = {
            width: parseInt($('#client').css('width')),
            height:parseInt($('#client').css('height'))
        };
        original.aspect = original.width/original.height;
        
        $(window).resize(function(){
            $('#client').css({
                'width':        ($(window).width())+'px',
                'height':       Math.round($(window).width()/original.aspect)+'px',
                'margin-left':  (-$(window).width()/2)+'px',
                'margin-top':   Math.round(-($(window).width()/original.aspect)/2)+'px'
            });
            $('#canvas').attr({
               'width':$(window).width()+'px',
               'height':Math.round($(window).width()/original.aspect)+'px'
            });
            world.scale = $(window).width()/original.width;
            worldUi.scaleX = worldUi.scaleY = $(window).width()/original.width;
        });
        
        Ui.reset();
        
        $("#sp").click(function(){
            if(world){
                $('#client').hide();
                var cb = function(){
                    world.generateMap();
                    var p = world.map.getProperties();
                    world.addPlayer(Global.player.uid,Global.player);
                    world.focusOn(Global.player);
                    Ui.showWorld();
                    $('#client').show();
                };
                Ui.showLoading('generating world',cb);
            }
        });
        
        $("#mp").click(function(){
            if(!socket){
                socket = Global.socket = Socket.createSocket(socketUrl,null,Global.reset);
            }else{
                socket.connect();
            }
            Ui.selectWorld();
        });
        
        $("#headwear_prev").click(function(){
            if(dom.headwear_frame>0){
                dom.headwear_frame--;
            }else{
                dom.headwear_frame = player.char.head.wear.timeline.duration-1;
            }
            player.setOutfit('headwear',dom.headwear_frame);
            //player.char.head.wear.gotoAndStop(dom.headwear_frame);
        });
        
        $("#headwear_next").click(function(){
            if(dom.headwear_frame<player.char.head.wear.timeline.duration-1){
                dom.headwear_frame++;
            }else{
                dom.headwear_frame = 0;
            }
            player.setOutfit('headwear',dom.headwear_frame);
            //player.char.head.wear.gotoAndStop(dom.headwear_frame);
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
           //Ui.selectWorld();
           Global.reset();
        });
        
        $('#play').click(function(){
            socket.send('/r 1');
        });
        
        $('#respawn').click(function(){
            var respawn = true;
            if(Global.socket){
                if(Global.socket.connected){
                    respawn = false;
                }
            }
            //Global.player.hasRespawned = true;
            if(respawn){
                Global.player.respawn();
            }else{
                socket.send('/respawn');
            }
            
            $('#respawnMenu').hide();
        });
        
        $('#resume').click(function(){
            $('#worldMenu').hide();
        });
        
        $('#quit').click(function(){
            $('#worldMenu').hide();
            Global.reset();
        });
        
        $('#client').fadeTo('slow',1);
        Ui.showMain();
    }
    
    Ui.original = function(){
        return original;
    }
    
    Ui.reset = function(){ // So very very lazy
        dom = Global.dom = {},
        stage = Global.stage,
        socketUrl = Global.sUrl,
        socket = Global.socket,
        player = Global.player,
        world = Global.world,
        worldUi = Global.worldUi;
        
        $('.screen').each(function(k,v){
            dom[v.id] = new createjs.DOMElement($('#'+v.id)[0]);
            dom[v.id].regX = dom[v.id].regY = dom[v.id].x = dom[v.id].y = 0;
            stage.addChild(dom[v.id]);
        });
        
        $(window).resize();
        
        dom.headwear_frame = 0;
        
        this.lobbyClear();
    }
    
    Ui.hideAll = function(){
        $('#loading').hide();
        $('#client').show();
        $('#mainMenu').hide();
        $('#world').hide();
        $('#worldList').hide();
        $('#lobby').hide();
        $('#worldMenu').hide();
        $('#respawnMenu').hide();
        player.visible = false;
        world.visible = false;
        worldUi.visible = false;
        //createjs.Ticker.removeListener(world);
    }
    
    Ui.showLoading = function(text,cb){
        selected = 'loading';
        Ui.hideAll();
        $('#client').hide();
        $('#loading h2').html(text);
        $('#loading').show({
            easing:'linear',
            complete:cb
        });
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
        selected = 'world';
        Ui.hideAll();
        $('#world').show();
        player.scaleX = player.scaleY = 1;
        player.visible = true;
        world.visible = true;
        worldUi.visible = true;
    }
    
    Ui.toggleWorldMenu = function(){
        $('#worldMenu').toggle();
    }
    
    Ui.showRespawnMenu = function(){
        $('#respawnMenu').show();
    }
    
    Ui.hideRespawnMenu = function(){
        $('#respawnMenu').hide();
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
    
    Ui.toggleDebug = function(){
        $('#debug').toggle();
    }
    
    Ui.updateDebug = function(str){
        $('#debug').html(str);
    }
    
    return Ui;
});
