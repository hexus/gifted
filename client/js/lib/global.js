define([],
function(){
    var Global = {
        stage:null, // CreateJS Stage
        dom:null,   // CreateJS DOMElement objects
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
