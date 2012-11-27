define(['createjs','assets'],function(createjs,lib){
    var World = function(){
        this.initialize(); // The necessity of this call is not clear ANYWHERE in the docs >:/
        //this.name = '';
    }
    var p = World.prototype = new createjs.Container();
    return World;
});
