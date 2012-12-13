define(['createjs','assets','node/Map'],function(createjs,lib,Map){
    var World = function(map){
        if(map instanceof Map){ 
            this.initialize();
            
            this.id = 0;
            this.name = '';
            
            this.map = map;
        }
    }
    var p = World.prototype = new createjs.Container();

    p.tick = function(){
        
    }
    
    return World;
});
