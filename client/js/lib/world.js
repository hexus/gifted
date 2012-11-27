define(['createjs','assets'],function(createjs,lib){
    var World = function(){
        this.name = '';
        
    }
    var p = World.prototype = new createjs.Container
    return World;
});
