define(['jquery','createjs','lib/global'],
function($,createjs,Global){
    
    var Ui = {}, dom,stage,socket,player,world;
    
    Ui.init = function(){
        
        dom = Global.dom = {},
        stage = Global.stage,
        socket = Global.socket,
        player = Global.player,
        world = Global.world;
        
        $('.screen').each(function(k,v){
            console.log(k,v);
            dom[v.id] = new createjs.DOMElement($('#'+v.id)[0]);
            dom[v.id].regX = dom[v.id].regY = dom[v.id].x = dom[v.id].y = 0;
            stage.addChild(dom[v.id]);
        });
        
        dom.headwear_frame = 0;
        
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
            Ui.showWorld();
        });
        
        Ui.hideAll();
        //$('#wrap').fadeTo('fast',1);
        $('#client').fadeTo('slow',1);
        $('#worldList').show();
        
    }
    
    Ui.hideAll = function(){
        $('#worldList').hide();
        $('#lobby').hide();
        player.visible = false;
        world.visible = false;
        //createjs.Ticker.removeListener(world);
    }
    
    Ui.selectWorld = function(){
        Ui.hideAll();
        $('#worldList').remove('input').show();
        socket.send('/login-pls');
    }
    
    Ui.showLobby = function(){
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
        Ui.hideAll();
        //createjs.Ticker.addListener(world);
        world.addChild(player);
        player.x = player.y = 200;
        player.scaleX = player.scaleY = 1;
        player.char.gotoAndStop(0);
        player.visible = true;
        world.visible = true;
        socket.send('/info-request json');
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
    
    Ui.msg = function(data){ // Chat is always controlled by Ui, it seems to fit in here
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
    
    return Ui;
});
