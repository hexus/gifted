define([],
function(){
    var Global = {
        debug:true, // Debug mode
        debugObj:{  // Debug output object
            out:{},
            showHitboxes:false,
            showRays:false,
            showGhosts:false,
            interpTrace:false,
            tk:false
        }, 
        ticker:null, // CreateJS Ticker
        stage:null,  // CreateJS Stage
        dom:null,    // CreateJS DOMElement objects
        sUrl:null,   // Socket.io URL
        socket:false,// Socket.io
        ui: null,    // Ui object
        world:null,  // Current world instance
        worlds:null, // World collection
        tiles:null,  // Tiles spritesheet
        users:null,  // Users in the current world
        player:null, // The current player
    }
    return Global;
});
