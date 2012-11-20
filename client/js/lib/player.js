define(['createjs','assets'],function(createjs,lib){
    // Classes
    var Player = function(){
        this.char = this.addChild(new lib.mcPlayer_char());
        //this.char.gotoAndStop("static");
        this.char.head.wear.gotoAndStop(0);
        this.char.larm_l.wpnOver.visible = false;
        this.char.larm_l.wpnUnder.visible = false;
        this.char.rarm_l.wpnOver.visible = false;
        this.char.rarm_l.wpnUnder.visible = false;
        this.char.larm_d.arm.l.wpnOver.visible = false;
        this.char.larm_d.arm.l.wpnUnder.visible = false;
        this.char.rarm_d.arm.l.wpnOver.visible = false;
        this.char.rarm_d.arm.l.wpnUnder.visible = false;
        this.char.larm_d.visible = false;
        this.char.rarm_d.visible = false;
        this.char.scaleX = 1;
        this.char.scaleY = 1;
    }
    var p = Player.prototype = new createjs.MovieClip();;
    return Player;
});