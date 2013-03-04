define([],
function(){
    var Global = {
        debug:true, // Debug mode
        debugObj:{  // Debug output object
            out:{},
            showHitboxes:false,
            showRays:false
        }, 
        ticker:null,// CreateJS Ticker
        stage:null, // CreateJS Stage
        dom:null,   // CreateJS DOMElement objects
        sUrl:null,  // Socket.io URL
        socket:null,// Socket.io
        ui: null,   // Ui object
        world:null, // Current world instance
        worlds:null,// World collection
        tiles:null, // Tiles spritesheet
        users:null, // Users in the current world
        player:null,// The current player
    }
    return Global;
});
