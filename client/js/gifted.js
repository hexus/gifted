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
        
        
        stage.addChild(world);
        stage.addChild(player);
        
        createjs.Ticker.setFPS(32);
        createjs.Ticker.addListener(stage);
        createjs.Ticker.addListener(function(){
            if(Ui.selected()=='world'){
                Global.world.tick();
            }
        });
        
        Global.ui = Ui;
        Ui.init();
        Ui.lobbyClear('Connecting...\n');
        Controls.init();
        
        // Ajax for socket address
        // then initialise socket and
        // enable mp button on main menu

    }
    
    $(function(){
        init();
    });
});