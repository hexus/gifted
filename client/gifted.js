var Player = function(){
	this.char = this.addChild(new lib.mcPlayer_char());
	this.char.gotoAndStop("static");
	this.char.head.wear.gotoAndStop("trilby");
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
	this.char.scaleX = 3;
	this.char.scaleY = 3;
};
var p = Player.prototype = new createjs.MovieClip();