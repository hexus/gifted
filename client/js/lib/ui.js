define(['jquery','createjs','lib/global','lib/socket','shared/Bullet','shared/Weapon'],
function($,createjs,Global,Socket,Bullet,Weapon){
    
    var Ui = {}, dom,stage,socket,player,world,selected;
    
    Ui.init = function(){

        var original = {
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
        });
        
        Ui.reset();
        
        $("#sp").click(function(){
            if(world){
                world.map.generate();
                var p = world.map.getProperties();
                world.addPlayer(Global.player.gid,Global.player);
                world.focusOn(Global.player);

                ps = Global.player.state;
                Global.wtest = Global.world.addProjectile(new Weapon({
                    wid:1,
                    x:ps.x,
                    y:ps.y,
                    speed:0
                }));
                
                Ui.showWorld();
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
    
    Ui.reset = function(){ // So very very lazy
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
        
        $(window).resize();
        
        dom.headwear_frame = 0;
        
        this.lobbyClear();
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
            player.state.x = 0;
            player.state.y = 0;
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
    
    Ui.updateDebug = function(str){
        $('#debug').html(str);
    }
    
    return Ui;
});
