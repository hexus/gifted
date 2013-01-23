socketUrl = '//localhost:7001'; // Default socket.io address
//socketUrl = '//192.168.0.2:7001';

requirejs.config({
    waitSeconds: 10,
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
        'shared':['/client/js/shared'],
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

require(['jquery','lib/global'],
function($,Global){
    $.get('/socket','',function(d){ // Don't require anything else until socket.io address is loaded
        socketUrl = Global.sUrl = d;
        $('#worldList, #mp').removeAttr('disabled');
        requirejs.config({ // Update config
            paths:{
             'socket.io':socketUrl+'/socket.io/socket.io'
            }
        });        
        require(['createjs','assets','lib/ui','lib/controls','lib/player','lib/world'],
        function(createjs,lib,Ui,Controls,Player,World){
            function init(){
                var canvas, stage, socket, player, id, users, world, aspect=2.35, debugStr;
                
                window.gifted = Global; // Expose global object for debugging
                
                canvas = document.getElementById("canvas");
                ticker = Global.ticker = createjs.Ticker;
                stage = Global.stage = new createjs.Stage(canvas);
                world = Global.world = new World();
                player = Global.player = new Player();
                users = Global.users = {};
                
                stage.addChild(world);
                stage.addChild(player);
                
                ticker.setFPS(32);
                ticker.addListener(stage);
                ticker.addListener(function(timeElapsed,paused){
                    if(Ui.selected()==='world'){
                        Global.world.tick(timeElapsed,paused);
                        if(Global.ticker.getTicks()%3==0){
                            var newDelta = Global.player.getStateDelta();
                            var deltaSize = 0;
                            for(i in newDelta){
                                deltaSize++;
                            }
                            if(Global.socket){
                                if(Global.socket.connected && deltaSize>0){
                                    Global.socket.send('/m '+JSON.stringify(newDelta));
                                }
                            }
                            Global.debugObj.stateDelta = JSON.stringify(newDelta);
                        }
                        if(Global.debug && Global.ticker.getTicks()%16==0){ // every half second
                            Global.debugObj.fps = Math.round(Global.ticker.getMeasuredFPS());
                            debugStr = '';
                            for(i in Global.debugObj){
                                if(debugStr.length>0){debugStr = debugStr.concat('<br/>');}
                                debugStr = debugStr.concat(i+' : '+Global.debugObj[i]);
                            }
                            Global.ui.updateDebug(debugStr);
                        }
                    }else{
                        
                    }
                });
                
                Global.ui = Ui;
                Ui.init();
                Ui.lobbyClear('Connecting...\n');
                Controls.init();
                
                Global.reset = function(){
                    with(Global){
                        stage.removeAllChildren();
                        world = new World();
                        player = new Player();
                        users = {};
                        
                        stage.addChild(world);
                        stage.addChild(player);
                        
                        ui.reset();
                        ui.showMain();
                        
                        socket.reset();
                    }
                }
            }
            
            $(function(){
                init();
            });
        });
    });
});