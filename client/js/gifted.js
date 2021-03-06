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
        'easeljs':'easeljs-0.7.0.min',
        'tweenjs':'tweenjs-0.5.0.min',
        'movieclip':'movieclip-0.7.0.min',
        'preloadjs':'preloadjs-0.4.0.min',
        
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
    $.get('/socket','',function(d){ // Don't require anything else until socket.io port is known
        socketUrl = Global.sUrl = '//'+window.location.hostname+':'+d;
        $('#worldList, #mp').removeAttr('disabled');
        requirejs.config({ // Update config
            paths:{
                'socket.io':socketUrl+'/socket.io/socket.io'
            }
        });
        $('#loading').show({easing:'linear'});
        require(['createjs','assets','lib/ui','lib/controls','lib/player','lib/world','lib/worldUi'],
        function(createjs,lib,Ui,Controls,Player,World,WorldUi){
            function init(){
                var canvas, stage, socket, player, id, users, world, aspect=2.35, debugStr;
                
                window.gifted = Global; // Expose global object for debugging
                
                canvas = document.getElementById("canvas");
                debugObj = Global.debugObj;
                ticker = Global.ticker = createjs.Ticker;
                stage = Global.stage = new createjs.Stage(canvas);
                world = Global.world = new World();
                worldUi = Global.worldUi = new WorldUi(world);
                player = Global.player = new Player();
                
                users = Global.users = {};
                
                stage.addChild(world);
                stage.addChild(worldUi);
                stage.addChild(player);
                stage.snapToPixelEnabled = true;
                
                Global.ui = Ui;
                Ui.init();
                Controls.init();
                
                ticker.setFPS(32);
                ticker.addEventListener('tick',stage);
                ticker.addEventListener('tick',function(timeElapsed,paused){
                    if(Ui.selected()==='world'){
                        Controls.tick();
                        Global.world.tick(timeElapsed,paused);
                        Global.worldUi.tick();
                        if(ticker.getTicks()%3==0){
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
                        }
                        if(Global.debug && ticker.getTicks()%6==0){ // every half second
                            debugStr = '';
                            debugObj.out.fps = Math.round(ticker.getMeasuredFPS());
                            debugObj.out.x = Global.player.x;
                            debugObj.out.y = Global.player.y;
                            debugObj.out.health = Global.player.state.health;
                            for(i in debugObj.out){
                                if(debugStr.length>0){debugStr = debugStr.concat('<br/>');}
                                debugStr = debugStr.concat(i+' : '+debugObj.out[i]);
                            }
                            Ui.updateDebug(debugStr);
                        }
                    }
                });
                
                Global.reset = function(){
                    with(Global){
                        stage.removeAllChildren();
                        world = new World();
                        world.scale = stage.canvas.width/ui.original().width;
                        worldUi = new WorldUi(world);
                        player = new Player();
                        users = {};
                        stage.addChild(world);
                        stage.addChild(worldUi);
                        stage.addChild(player);

                        ui.reset();
                        ui.showMain();
                        
                        if(socket){
                            socket.disconnect();
                            socket.reset();
                        }
                    }
                }
            }
            
            $(function(){
                init();
            });
        });
    });
});