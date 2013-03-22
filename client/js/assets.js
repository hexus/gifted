(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.giftedclientgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mp:1},true);

	// Graphics
	this.text = new cjs.Text("GIFTED", "bold 36px Trebuchet MS");
	this.text.lineHeight = 51;
	this.text.lineWidth = 622;
	this.text.setTransform(49,312);
	this.text.shadow = new cjs.Shadow("rgba(96,19,147,1)",0,0,18);

	this.instance = new lib.mcLoad_Meng();
	this.instance.setTransform(812.4,289,1,1,0,0,0,20.1,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(1));

	// Container
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#FFFFFF","#CCCCCC"],[0,1],12.3,-109.7,11.8,179).beginStroke().moveTo(423,181).lineTo(-423,181).lineTo(-423,-181).lineTo(423,-181).closePath();
	this.shape.setTransform(423,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,846,362);


// symbols:
(lib._2956_2_500 = function() {
	this.initialize(img._2956_2_500);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,252);


(lib.batmanmask = function() {
	this.initialize(img.batmanmask);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,194);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap24 = function() {
	this.initialize(img.Bitmap24);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap25 = function() {
	this.initialize(img.Bitmap25);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap26 = function() {
	this.initialize(img.Bitmap26);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Bitmap28 = function() {
	this.initialize(img.Bitmap28);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.gasmask = function() {
	this.initialize(img.gasmask);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,321);


(lib.goodsy0 = function() {
	this.initialize(img.goodsy0);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,207);


(lib.Katana = function() {
	this.initialize(img.Katana);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1950,1000);


(lib.me800 = function() {
	this.initialize(img.me800);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,328);


(lib.sophace = function() {
	this.initialize(img.sophace);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,296);


(lib.mcTiles_Spawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Graphics
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#0000FF").beginStroke().moveTo(2.7,-4.7).curveTo(2.8,-4.7,2.8,-4.4).curveTo(2.8,-4.3,1.4,-3.1).curveTo(0,-1.8,0,-0.9).curveTo(0,-0.3,1.5,0.2).curveTo(3,0.6,3,2).curveTo(3,3.1,2.6,3.6).curveTo(1.9,4.4,-0.2,4.8).lineTo(-2.4,4.8).curveTo(-2.8,4.7,-2.8,4.7).curveTo(-3,4.6,-3,4.1).curveTo(-3,3.7,-2.8,3.6).curveTo(-2.6,3.6,-2.4,3.6).curveTo(-0.1,3.5,0.9,2.9).curveTo(1.2,2.7,1.8,2).curveTo(0.4,0.9,-0.8,0.1).curveTo(-1.3,-0.1,-1.3,-0.7).curveTo(-1.3,-2.3,-0.6,-3.3).curveTo(0.4,-4.9,2.6,-4.8).closePath();
	this.shape.setTransform(-19.2,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(10.6,-3.7).curveTo(10.6,-4,10.6,-4.1).curveTo(15.2,-3,18.1,0.7).curveTo(18.9,1.7,20,3.3).curveTo(20.3,3.6,20.5,3.9).lineTo(7,4).lineTo(5.9,4.1).lineTo(-3.8,4.1).curveTo(-4.4,3.6,-8.1,3.5).curveTo(-11.7,3.4,-15.3,3.5).curveTo(-19,3.6,-20.5,3.1).curveTo(-18.8,0.8,-18.7,0.7).curveTo(-17.3,-1.3,-16,-2).curveTo(-14,-3.2,-7.5,-3.5).curveTo(-7.2,-3.7,-7,-3.8).curveTo(-7,-3.8,-7,-3.9).curveTo(-6.5,-3,-5.7,-2.6).curveTo(-3.2,-1.5,5.1,-1.5).curveTo(10.6,-1.5,10.6,-3.7).closePath();
	this.shape_1.setTransform(0.5,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(10.9,-5.3).curveTo(11.7,-5.5,13.6,-5.5).curveTo(14.2,-5.1,18.6,-1.5).curveTo(23,2.3,23,3.6).curveTo(23,3.8,23,3.9).curveTo(23.2,4.3,23.2,4.4).curveTo(23.2,4.8,23.1,4.9).curveTo(22.9,5.1,22.6,5.3).lineTo(7.4,5.3).lineTo(6.3,5.5).lineTo(-3.4,5.5).curveTo(-3.8,5.3,-4,5).curveTo(-8.6,5.4,-9.5,5.1).curveTo(-10.4,4.7,-11.3,5).curveTo(-12.2,5.4,-15.6,5.3).curveTo(-18.9,5.3,-19.9,5).curveTo(-20.9,4.8,-21.9,5).curveTo(-22,5,-22.1,5).curveTo(-22.1,5,-22.3,5).curveTo(-22.9,5,-23,4.9).curveTo(-23,4.8,-23.1,4.8).curveTo(-23.2,4.7,-23.2,4.3).curveTo(-23.2,2.6,-18,-1.1).curveTo(-11.9,-5.4,-6.7,-4.8).curveTo(-6.6,-4.8,-6.5,-4.7).curveTo(-6.4,-4.2,-5.9,-4).curveTo(-5.4,-4.2,-4.9,-4.3).curveTo(-4.5,-4.2,-4,-3.9).curveTo(-2.5,-2.9,2.6,-2.9).lineTo(8.4,-2.9).curveTo(8.5,-3,9.6,-3.6).curveTo(10.5,-4.1,10.9,-4.3).curveTo(10.5,-4.3,10.3,-4.4).curveTo(10.2,-4.1,10.2,-4.5).curveTo(10.7,-4.6,10.8,-4.7).curveTo(10.9,-4.9,10.9,-5.3).closePath().moveTo(11.4,-3.7).curveTo(11.4,-1.5,5.9,-1.5).curveTo(-2.4,-1.5,-4.9,-2.6).curveTo(-5.7,-3,-6.2,-3.9).curveTo(-6.2,-3.8,-6.2,-3.8).curveTo(-6.4,-3.7,-6.7,-3.5).curveTo(-13.2,-3.2,-15.2,-2).curveTo(-16.5,-1.3,-17.9,0.8).curveTo(-18,0.8,-19.6,3.1).curveTo(-18.1,3.7,-14.5,3.5).curveTo(-10.9,3.4,-7.2,3.5).curveTo(-3.6,3.7,-3,4.1).lineTo(6.7,4.1).lineTo(7.8,4).lineTo(21.3,3.9).curveTo(21.1,3.6,20.9,3.3).curveTo(19.8,1.7,19,0.7).curveTo(16,-3,11.4,-4.1).curveTo(11.4,-4,11.4,-3.7).closePath();
	this.shape_2.setTransform(-0.3,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#0033FF").beginStroke().moveTo(-8.7,0.1).curveTo(-8.7,0.1,-8.7,0).curveTo(-8.7,-0.5,-7.3,-0.9).curveTo(-5.4,-1.6,-4.4,-1.9).lineTo(5.3,-1.9).lineTo(8.7,-0.5).lineTo(8.7,-0.4).curveTo(8.7,-0.1,8.5,0.1).curveTo(8.4,0.3,7.9,0.3).curveTo(7.9,0.7,8,0.4).curveTo(8.3,0.5,8.6,0.6).curveTo(8.3,0.7,7.3,1.3).curveTo(6.3,1.8,6.2,1.9).lineTo(0.4,1.9).curveTo(-4.8,1.9,-6.3,0.9).curveTo(-6.7,0.6,-7.1,0.5).curveTo(-7.6,0.6,-8.2,0.8).curveTo(-8.7,0.6,-8.7,0.1).closePath();
	this.shape_3.setTransform(1.9,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#0000FF").beginStroke().moveTo(5.9,-2.8).curveTo(4.4,-1.2,3.2,-1.2).curveTo(2.4,-1.2,2.1,-1.5).curveTo(2.3,-0.7,2.3,-0).curveTo(2.3,1.5,2.2,2.2).curveTo(1.8,3.8,0.8,4).curveTo(0.3,3.8,0.3,3.2).curveTo(1,0.7,1,0.1).curveTo(1,-1.6,0.7,-2.7).curveTo(0.3,-3.8,0.3,-4.8).curveTo(0.3,-6.8,0.8,-5.8).curveTo(1,-6.6,4,-6.5).curveTo(7.3,-6.4,7.3,-4.9).curveTo(7.3,-4.2,5.9,-2.8).closePath().moveTo(5.5,-5.3).curveTo(4.2,-5.4,2.5,-5.3).curveTo(1.5,-5.2,1,-5.3).curveTo(1.1,-5,1.3,-4.6).curveTo(1.8,-3.1,2,-1.9).curveTo(2.6,-1.9,3.4,-2.2).curveTo(5,-2.6,6,-4.8).closePath().moveTo(-3,-3.5).curveTo(-3,-2.9,-4.3,-1.7).curveTo(-5.6,-0.4,-5.8,0.2).curveTo(-2.8,1,-2.1,1.4).curveTo(-1.8,1.6,-1.8,2.7).curveTo(-1.8,3.7,-2.8,4.9).curveTo(-4.1,6.5,-6.2,6.5).curveTo(-6.9,6.5,-7.2,6.2).curveTo(-7.3,6.5,-7.3,5.8).curveTo(-7.3,5.6,-5.1,4.8).curveTo(-3,3.9,-3,2.7).curveTo(-3,2.3,-5,1.7).curveTo(-7,1.1,-7,0.1).curveTo(-7,-1.2,-6.3,-2).curveTo(-5.8,-2.4,-3.2,-4.1).lineTo(-3.1,-4).curveTo(-3,-3.9,-3,-3.5).closePath();
	this.shape_4.setTransform(-14,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#0000FF").beginStroke().moveTo(10.5,-2.8).lineTo(6.9,-2.8).curveTo(6.6,-2.3,6.5,-2.1).curveTo(6.4,-1.5,6,-0.1).curveTo(5.6,1.3,4.6,2.2).curveTo(4.3,2.1,4.2,2).curveTo(4,1.9,4,1.5).curveTo(5.7,-5.2,7.8,-6.5).curveTo(7.8,-7.5,9.3,-7.1).curveTo(10.9,-6.7,11.4,-5.1).curveTo(11.5,-4.6,11.6,-4).curveTo(11.7,-4,11.8,-4).curveTo(11.9,-3.9,11.9,-3.5).curveTo(11.9,-3.1,11.8,-3).curveTo(11.7,-2.9,11.7,-2.9).curveTo(11.7,-2.3,11.7,-1.7).curveTo(11.7,-0,11.6,0.9).lineTo(11.1,1.2).curveTo(10.5,0.5,10.5,-2.5).curveTo(10.5,-2.7,10.5,-2.8).closePath().moveTo(8.6,-5.8).curveTo(8.4,-5.3,7.8,-4.5).curveTo(7.7,-4.2,7.6,-4).lineTo(10.3,-4.1).curveTo(9.8,-5.1,8.6,-5.8).closePath().moveTo(-0.8,-4.4).curveTo(-2.6,-5,-3.5,-5.4).curveTo(-3.4,-5.3,-3.5,-5.2).curveTo(-3.5,-4.7,-3.7,-3.9).curveTo(-3.7,-3.9,-3.1,-1.2).curveTo(-1.2,-1.8,-0.5,-2.1).curveTo(0.8,-2.6,0.8,-3.1).curveTo(0.8,-3.9,-0.8,-4.4).closePath().moveTo(2,-3.1).curveTo(2,-2.2,1.1,-1.4).curveTo(-0.1,-0.3,-2.2,-0.3).curveTo(-2.6,-0.3,-2.9,-0.4).curveTo(-2.8,-0,-2.7,0.3).curveTo(-2.7,1.8,-2.8,2.2).curveTo(-3.3,3,-4.9,4.2).curveTo(-5.5,4,-5.5,3.4).curveTo(-5.5,3.3,-4.7,1.9).curveTo(-4,0.6,-4,0.2).curveTo(-4,-0.9,-4.5,-1.9).curveTo(-5,-3,-5,-4.1).curveTo(-5,-5.3,-4.9,-5.4).curveTo(-4.8,-6.4,-4.2,-6.6).curveTo(-4,-6.5,-3.8,-6.3).curveTo(-3.5,-6.9,-1.4,-6.8).curveTo(0,-5.8,1.4,-5).curveTo(2,-4.5,2,-3.1).closePath().moveTo(-9,-1.8).curveTo(-9,-0.7,-9.5,0.1).curveTo(-8.2,1.5,-7.3,1.7).curveTo(-7,1.8,-7,2.4).curveTo(-7,3.6,-7.8,5.2).curveTo(-9,7.2,-10.8,7.2).curveTo(-11.6,7.2,-11.9,6.8).curveTo(-12,7.1,-12,6.5).curveTo(-11.3,6.3,-10.5,5.8).curveTo(-9,4.6,-8.2,2.3).curveTo(-9.3,1.2,-10.3,0.7).curveTo(-10.7,0.4,-10.7,-0.1).curveTo(-10,-4.5,-7.7,-4.4).lineTo(-7.5,-4.4).curveTo(-7.5,-4.4,-7.5,-4).curveTo(-7.5,-3.7,-8.2,-3).curveTo(-9,-2.3,-9,-1.8).closePath();
	this.shape_5.setTransform(-8.5,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#0000FF").beginStroke().moveTo(12.9,-1.8).curveTo(12.9,-1.3,12.9,-0.7).lineTo(12.9,-0.6).curveTo(13.3,-1.2,15.5,-2.5).curveTo(17.3,-3.5,18.9,-4.2).curveTo(19.3,-4,19.4,-4).curveTo(19.5,-3.9,19.5,-3.5).curveTo(19.5,-2.9,18,-2.5).curveTo(16.1,-1.9,15,-0.9).curveTo(14.7,-0.5,13.9,0.9).curveTo(13.5,1.8,12.7,1.8).curveTo(11.8,1.8,11.7,0.9).curveTo(11.7,-0.1,11.7,-0.2).curveTo(11.6,-0.2,11.4,-0.5).curveTo(10.5,0.6,10.2,0.6).curveTo(8.6,0.6,7.9,-5.6).curveTo(7.9,-7.1,8.8,-6.2).curveTo(9.5,-5.4,9.7,-4.4).curveTo(9.7,-3.8,10.1,-1.4).curveTo(10.6,-1.8,11.1,-2.3).curveTo(11.5,-2.7,11.9,-2.7).curveTo(12.9,-2.7,12.9,-1.8).closePath().moveTo(1.3,-7).lineTo(1.3,-7).curveTo(3,-6.6,3.8,-3.3).curveTo(4.3,-1.4,4.4,0.5).curveTo(4.4,1,4.3,1.4).lineTo(3.8,1.6).curveTo(2.6,-0.1,1.9,-2.4).lineTo(1.9,-2.4).lineTo(0.1,-2.4).curveTo(-0.1,-2.5,-0.3,-2.6).lineTo(-0.3,-2.5).curveTo(-2,0.8,-2,0.8).curveTo(-2.7,0.8,-2.5,0.7).curveTo(-2.6,0.6,-2.7,0.6).curveTo(-2.7,0.5,-2.7,0.1).curveTo(-1.3,-6.1,0.8,-6.9).curveTo(0.8,-7,0.8,-7).curveTo(1,-7.1,1.2,-7).curveTo(1.3,-7,1.3,-7).closePath().moveTo(1.1,-5.5).curveTo(0.9,-4.8,0.3,-3.6).lineTo(1.6,-3.7).curveTo(1.4,-4.4,1.1,-5.5).closePath().moveTo(-8.6,-5.1).curveTo(-10.2,-5.1,-10.4,-4.8).curveTo(-10.4,-4.7,-10.5,-4.5).curveTo(-10,-3.8,-9.8,-2.3).curveTo(-9.8,-1.7,-9.8,-1.1).curveTo(-9.5,-1.4,-8.8,-2).curveTo(-7.7,-3,-7.7,-3.7).closePath().moveTo(-6.5,-3.7).curveTo(-6.5,-0.2,-9.2,-0.2).curveTo(-9.6,-0.2,-9.7,-0.3).curveTo(-9.7,-0.3,-9.8,-0.4).curveTo(-9.8,0.4,-10,1.2).curveTo(-10,1.8,-10.3,2.4).curveTo(-10.6,3.1,-10.8,4.4).lineTo(-11.4,4.6).curveTo(-12,4,-12,3.4).curveTo(-12,2.6,-11.6,2.1).curveTo(-11.2,1.6,-11.2,1).curveTo(-11.2,0.3,-11.7,-1.2).curveTo(-12.4,-3.1,-12.5,-3.8).lineTo(-12.5,-5.5).curveTo(-11.9,-5.6,-11.4,-5.4).curveTo(-11.4,-5.8,-11.2,-5.9).curveTo(-10.5,-6.4,-8.2,-6.4).curveTo(-6.5,-5.3,-6.5,-3.7).closePath().moveTo(-14.5,-3.4).curveTo(-14.5,-2.8,-16,-1.8).curveTo(-17.5,-0.9,-17.7,-0.2).curveTo(-16.5,0.6,-15.3,1.5).curveTo(-14,2.6,-14,3.1).curveTo(-14,4.3,-15.1,5.6).curveTo(-16.5,7.1,-18.8,7.1).curveTo(-19.1,7.1,-19.3,7).curveTo(-19.3,6.9,-19.4,6.7).curveTo(-19.5,7,-19.5,6.4).curveTo(-19.5,6,-17.4,5.3).curveTo(-15.4,4.6,-15.4,3.3).curveTo(-15.4,2.2,-17.3,1.6).curveTo(-19.2,0.9,-19.2,0.2).curveTo(-19.2,-1.2,-18.1,-2.4).curveTo(-16.8,-3.8,-14.7,-3.8).lineTo(-14.6,-3.7).curveTo(-14.5,-3.7,-14.5,-3.4).closePath();
	this.shape_6.setTransform(-1,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#0000FF").beginStroke().moveTo(23.5,2.6).curveTo(23.5,3.2,18.5,7.1).lineTo(17.8,6.9).curveTo(17.7,5.8,17.3,3.1).curveTo(17.1,1.7,17,0.7).curveTo(16.6,2.2,15.2,5.4).lineTo(14.9,5.6).curveTo(14.4,5.3,14.2,5.1).curveTo(14.2,4.9,14.2,4.5).curveTo(14.2,3.6,15.5,0.9).curveTo(16.5,-1.2,16.5,-1.3).curveTo(17,-1.9,17.1,-1.3).curveTo(18.6,-0.8,18.9,1.3).curveTo(19,2.6,19,4.8).curveTo(19,4.8,20.9,3.3).curveTo(22.5,2.1,22.7,2.1).curveTo(23.4,2.1,23.4,2.2).curveTo(23.4,2.3,23.5,2.6).closePath().moveTo(7.7,-3).curveTo(8.6,-3,8.6,-2.3).curveTo(8.6,-2,8.4,-1.3).lineTo(8.4,-1.2).curveTo(9.3,-1.5,10.5,-2.8).curveTo(12.2,-4,15.4,-4).curveTo(16,-4,16.1,-3.8).curveTo(16.1,-3.7,16.2,-3.4).curveTo(16.2,-3.3,7.9,1).lineTo(7.3,0.9).lineTo(7.1,-0.8).curveTo(6.8,-0.7,6,0.3).curveTo(5.3,1,4.4,1).lineTo(3.5,0.9).curveTo(3.4,-0.6,2.9,-3.6).lineTo(2.9,-6.1).curveTo(4.2,-6.1,4.3,-4.2).curveTo(4.7,-1.1,4.7,-1.1).lineTo(4.7,-0.9).curveTo(4.9,-1,6.3,-2.1).curveTo(7.4,-3,7.7,-3).closePath().moveTo(-3.3,-6.7).curveTo(-2,-6.4,-1.2,-4.2).curveTo(-0.6,-2.3,-0.6,0).curveTo(-0.6,0.7,-0.7,1).lineTo(-1.2,1.3).curveTo(-2,0.2,-2.6,-2.3).curveTo(-2.6,-2.3,-2.7,-2.4).curveTo(-3,-2.1,-3.7,-2).lineTo(-5.4,-2).curveTo(-6.9,0.9,-8.2,2.1).curveTo(-8.7,1.8,-8.7,1.3).curveTo(-8.3,-0.9,-7.4,-3).curveTo(-5.7,-7.1,-3.4,-7.1).curveTo(-3.4,-6.9,-3.3,-6.7).closePath().moveTo(-3.7,-5.3).curveTo(-4,-4.6,-4.6,-3.5).curveTo(-3.9,-3.5,-3,-3.6).curveTo(-3.3,-4.5,-3.7,-5.3).closePath().moveTo(-14,-4.9).lineTo(-16.4,-5).curveTo(-16.1,-3.5,-15.7,-0.8).curveTo(-15.5,-1.1,-14.5,-1.7).curveTo(-13.2,-2.5,-13.2,-3.3).curveTo(-13.2,-4.1,-14,-4.9).closePath().moveTo(-12,-3.3).curveTo(-12,-2.3,-12.9,-1.2).curveTo(-13.9,0,-15,0).curveTo(-15.7,0,-15.5,-0.1).curveTo(-15.5,-0.1,-15.6,-0.1).curveTo(-15.4,0.9,-15.2,2.1).curveTo(-15.2,2.4,-15.3,2.8).curveTo(-15.4,2.8,-15.4,2.9).curveTo(-15.5,3.1,-15.9,3.1).curveTo(-16.4,3.1,-17.2,-4.7).curveTo(-17.2,-5.1,-17.2,-5.5).curveTo(-17.2,-5.6,-17.2,-5.7).lineTo(-17.2,-6).lineTo(-17.2,-6).curveTo(-17.1,-7.3,-16.7,-6.2).lineTo(-13.4,-6.2).curveTo(-12.3,-5,-12.1,-4.6).curveTo(-12,-4.3,-12,-3.3).closePath().moveTo(-19.7,-3.9).lineTo(-20.6,-2.9).curveTo(-21.6,-1.8,-22,-0.9).curveTo(-21.6,-0.6,-19.6,1.3).curveTo(-18.7,2.1,-18.7,2.9).curveTo(-18.7,3.6,-20.1,5.1).curveTo(-21.6,6.6,-22.8,6.6).curveTo(-23.4,6.6,-23.2,6.4).curveTo(-23.4,6.3,-23.4,6.3).curveTo(-23.5,6.3,-23.5,5.8).curveTo(-23.5,5.6,-21.7,4.4).curveTo(-20,3.3,-20,3).curveTo(-20,2.5,-21.5,1.3).curveTo(-23.2,0.1,-23.2,-1.2).curveTo(-23.2,-2.1,-22.1,-3.4).curveTo(-21,-4.8,-19.9,-4.3).lineTo(-19.8,-4.3).curveTo(-19.7,-4.3,-19.7,-3.9).closePath();
	this.shape_7.setTransform(3.9,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#0000FF").beginStroke().moveTo(20.6,3).curveTo(20.6,3.9,16.8,6.7).curveTo(16.2,6.7,15.1,3.6).curveTo(14.6,2.3,14.3,1.5).curveTo(14.1,2,13.8,2.6).curveTo(12.5,5.1,12,5.4).curveTo(11.3,5.3,11.3,4.6).curveTo(11.3,4,12.5,1.7).curveTo(13.7,-0.7,14.5,-1.3).curveTo(14.9,-1.1,15,-1).curveTo(15.1,-0.8,15.1,-0.4).curveTo(15.1,-0.2,14.9,0.2).curveTo(15.6,0.6,16,1.8).curveTo(16.9,4.3,17.1,4.6).curveTo(17.4,4.4,18.4,3.4).curveTo(19.4,2.4,19.8,2.4).curveTo(20.5,2.4,20.5,2.6).curveTo(20.5,2.7,20.6,3).closePath().moveTo(5.1,-2.3).curveTo(6.3,-2.3,6.4,-2.1).curveTo(6.5,-1.9,6.4,-1.4).curveTo(7.4,-1.6,8.6,-2.1).curveTo(10.4,-2.9,11.7,-3.3).curveTo(12.2,-3.2,12.2,-3.2).curveTo(12.3,-3.1,12.3,-2.6).curveTo(12.3,-1.8,8.9,-0.5).curveTo(5.4,0.8,5,0.9).curveTo(4.5,0.5,4.4,0.1).curveTo(4.4,-0.2,4.3,-0.3).lineTo(4.3,-0.5).curveTo(2.5,0.7,2,0.7).curveTo(0.8,0.7,-0.4,-5.2).curveTo(-0.4,-7.7,0.3,-5.9).curveTo(0.8,-4.8,2.1,-1).curveTo(2.2,-1.1,3.5,-1.8).curveTo(4.4,-2.3,5.1,-2.3).closePath().moveTo(-5.5,-6.4).curveTo(-5.5,-6.3,-5.4,-6).curveTo(-3.7,-4.9,-2.7,-0.4).curveTo(-2.7,0.4,-2.8,0.7).curveTo(-3,1.2,-3.9,1.2).curveTo(-4.5,1.2,-4.4,1.1).curveTo(-4.6,1,-4.6,0.9).curveTo(-4.7,0.9,-4.7,0.5).curveTo(-4.7,0.2,-4.3,-0.1).curveTo(-3.9,-0.4,-3.9,-0.6).curveTo(-3.9,-0.9,-4.6,-2.1).curveTo(-4.7,-2.1,-4.8,-2.1).lineTo(-7.9,-1.8).curveTo(-8.7,-1.8,-9,-2.2).curveTo(-9.1,-1.9,-9.1,-2.5).curveTo(-10.3,-0.6,-10.4,1.7).lineTo(-11,1.9).curveTo(-11.5,1.8,-11.6,1.3).curveTo(-11.6,1.3,-11.6,0.5).curveTo(-11.6,-1.8,-10.3,-3.3).curveTo(-9.2,-4.7,-6.7,-5.9).lineTo(-6.6,-6.4).curveTo(-6.2,-6.4,-5.9,-6.3).curveTo(-5.7,-6.3,-5.5,-6.4).closePath().moveTo(-6.5,-5.4).curveTo(-7.1,-4.9,-7.8,-4.2).curveTo(-8.3,-3.6,-8.8,-3).curveTo(-8.7,-3,-8.5,-3.1).curveTo(-7.8,-3.3,-5.3,-3.3).curveTo(-6.1,-4.7,-6.5,-5.4).closePath().moveTo(-19.1,-4.7).curveTo(-18.3,-2.9,-18,-1.2).curveTo(-17.6,-1.4,-17.2,-1.6).curveTo(-15.6,-2.4,-15.6,-3.7).curveTo(-15.6,-4.8,-19.3,-5.1).curveTo(-19.2,-4.9,-19.1,-4.7).closePath().moveTo(-19.9,-6.3).curveTo(-14.3,-7.1,-14.3,-3.4).curveTo(-14.3,-2.5,-15.4,-1.2).curveTo(-16.5,0,-17.7,0.1).curveTo(-17.6,1.2,-17.6,2.2).curveTo(-17.6,2.8,-17.7,3.2).curveTo(-17.7,3.2,-17.8,3.3).curveTo(-17.9,3.4,-18.3,3.4).curveTo(-18.3,3.4,-20.6,-5.4).curveTo(-20.6,-7.2,-19.9,-6.3).closePath();
	this.shape_8.setTransform(6.8,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#0000FF").beginStroke().moveTo(16.7,2.4).curveTo(16.7,2.8,15,4.5).curveTo(13.8,5.7,13,6.4).lineTo(13,6.5).curveTo(12.6,6.7,12.4,6.8).curveTo(12,6.7,11.9,6.7).curveTo(11.7,6.6,11.7,6.1).curveTo(11.7,6.1,11.7,6).curveTo(11.1,5.1,10.4,3.8).curveTo(9.7,2.6,9.5,1.8).curveTo(9.2,2.3,8.9,2.9).curveTo(7.9,4.7,7.3,5.1).curveTo(6.7,4.9,6.7,4.3).curveTo(6.7,3.6,7.5,1.8).curveTo(8.5,-0.4,9.3,-0.7).curveTo(9.5,-0.6,9.7,-0.6).curveTo(10,-0.5,10,-0.1).curveTo(10,-0,10,0.1).curveTo(10.8,0.3,11.4,1.6).curveTo(12.3,3.7,12.8,4.3).curveTo(13.2,3.9,13.7,3.5).curveTo(15.7,1.7,16.6,2).curveTo(16.6,2.1,16.7,2.4).closePath().moveTo(0.3,-2.7).lineTo(0.9,-2.4).lineTo(0.9,-0.8).curveTo(5.8,-3.2,6,-3.2).curveTo(6.6,-3.2,6.6,-3).curveTo(6.6,-2.9,6.7,-2.6).curveTo(6.7,-2,0.6,1.3).lineTo(-0.3,1.2).lineTo(-0.3,-0.3).lineTo(-0.4,-0.5).curveTo(-1.5,1.4,-2.7,1.8).curveTo(-3.4,1.1,-3.5,-0).curveTo(-3.4,-1.4,-3.6,-2).curveTo(-3.8,-2.9,-4.6,-4.4).curveTo(-5.3,-5.7,-5.3,-5.8).curveTo(-5.3,-6.4,-4.7,-6.7).curveTo(-3.5,-5.8,-2.9,-4.2).curveTo(-2.6,-3.2,-2.1,-1.1).lineTo(-2.1,-0.9).curveTo(-1.7,-1.5,-1.3,-1.9).curveTo(-0.9,-2.5,0.3,-2.7).closePath().moveTo(-9.8,-2.3).curveTo(-9.8,-2.2,-10.2,-2.2).lineTo(-13.4,-2.2).curveTo(-13.8,-2.3,-14.2,-2.5).curveTo(-14.2,-2.4,-14.2,-2.3).curveTo(-14.3,-1.5,-14.8,-0.5).curveTo(-15.4,0.6,-16.1,1.3).curveTo(-16.7,1.1,-16.7,0.5).curveTo(-16.7,-0.6,-15.2,-3.2).curveTo(-13.6,-5.7,-11.9,-6.2).curveTo(-11.8,-7.9,-9.6,-5).curveTo(-7.3,-1.9,-7.3,0.1).lineTo(-7.3,1.2).curveTo(-7.4,1.8,-8.1,1.8).lineTo(-8.8,1.7).curveTo(-8.8,1.4,-8.7,0.8).curveTo(-8.6,0.2,-8.6,-0.1).curveTo(-8.6,-1,-9.6,-2.5).curveTo(-9.7,-2.4,-9.8,-2.3).closePath().moveTo(-11.9,-5.3).curveTo(-13.1,-5,-13.6,-4.1).curveTo(-13.7,-3.9,-13.8,-3.6).curveTo(-12.7,-3.6,-10.4,-3.4).curveTo(-11.4,-4.7,-11.7,-5.3).curveTo(-11.8,-5.3,-11.9,-5.3).closePath();
	this.shape_9.setTransform(11.7,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#0000FF").beginStroke().moveTo(10.8,2.6).curveTo(10.8,3.4,8.9,5.1).curveTo(7.8,6,6.9,6.7).lineTo(6.9,6.8).curveTo(6.8,7,6.8,7).curveTo(6.7,7,6.4,7.1).curveTo(6.3,7.1,6.3,7.1).curveTo(6.2,7.1,6.1,7).curveTo(6,6.9,5.9,6.9).curveTo(5.8,6.8,5.8,6.6).curveTo(5.2,6,4.2,4.5).curveTo(3.4,3.3,2.9,2.5).curveTo(2.3,3.5,1.3,5.1).lineTo(0.8,5).curveTo(0.6,4.9,0.5,4.8).curveTo(0.5,4.8,0.5,4.4).curveTo(0.5,3.5,1.5,1.6).curveTo(1.8,1.1,2,0.8).curveTo(2,0.7,2,0.7).curveTo(2.1,0.7,2.1,0.7).curveTo(2.8,-0.4,3.4,-0.4).curveTo(3.5,-0.3,3.8,-0.3).curveTo(4,-0.1,4,0.3).curveTo(4,0.5,3.7,1.1).curveTo(4.4,1.6,5.2,2.7).curveTo(6,3.7,6.4,4.9).curveTo(6.9,4.4,7.6,3.8).curveTo(9.4,2.2,10.6,2.2).curveTo(10.6,2.4,10.8,2.6).closePath().moveTo(2.3,-3.7).curveTo(2,-2.6,-0.7,-1).curveTo(-4.3,1,-4.8,1.3).lineTo(-4.8,1.3).curveTo(-4.8,1.4,-4.9,1.6).curveTo(-5,1.8,-5.4,1.8).curveTo(-6.1,1.8,-6.3,0.6).curveTo(-6.3,-0.6,-6.3,-0.6).curveTo(-6.3,-0.9,-6.3,-1.1).curveTo(-6.4,-1,-6.6,-0.8).curveTo(-7.8,0.3,-8.3,0.5).curveTo(-8.3,0.7,-8.4,0.8).curveTo(-8.3,1.1,-8.9,1.1).curveTo(-9.3,1.1,-10.1,-2).lineTo(-10.8,-5).curveTo(-10.8,-10.6,-8.5,-1).curveTo(-8.2,-1.3,-7.7,-1.7).curveTo(-6.6,-2.5,-5.8,-2.7).curveTo(-5.7,-2.9,-5.6,-2.9).curveTo(-5.5,-2.9,-5.5,-2.8).curveTo(-5.4,-2.8,-5.4,-2.8).curveTo(-5.4,-2.7,-5.3,-2.6).curveTo(-5,-2,-5,-0.9).curveTo(-5,-0.5,-5,-0).curveTo(-4.2,-0.6,-2.2,-1.9).curveTo(0.4,-3.5,1.6,-4.2).curveTo(2.1,-3.9,2.3,-3.7).closePath();
	this.shape_10.setTransform(17.9,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#0000FF").beginStroke().moveTo(5,-0.6).curveTo(3.4,2.4,1.5,3.6).lineTo(1.5,3.6).lineTo(1.4,4.2).curveTo(1.5,4.4,0.9,4.4).curveTo(-0.3,4.4,-1.5,0.6).curveTo(-2,-1.4,-2.3,-2.3).curveTo(-3.4,-0.7,-4,0.6).lineTo(-4.4,0.7).curveTo(-4.9,0.4,-5,0.2).curveTo(-5,0.1,-5,-0.4).curveTo(-5,-1.6,-3.9,-3).curveTo(-2.7,-4.5,-1.4,-4.4).curveTo(-1.4,-4.3,-1.3,-4).curveTo(-1.3,-3.8,-1.6,-3.3).curveTo(-1.3,-2.9,-0.9,-2.1).curveTo(0.1,-0.2,0.9,1.9).curveTo(1.3,1.4,1.8,0.8).curveTo(3.6,-1.1,4.9,-1.2).curveTo(4.9,-1,5,-0.6).closePath();
	this.shape_11.setTransform(23.9,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_7}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_8}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_9}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_11}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},1).wait(1));

	// Graphics 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#0033FF").beginStroke().moveTo(24.1,2.3).curveTo(24.1,2.4,18.2,6.9).curveTo(18,6.9,17.8,6.8).curveTo(17.8,6.9,17.7,6.9).curveTo(17.7,6.8,17.7,6.8).curveTo(17.3,6.7,17.1,6.5).curveTo(17.1,6.8,17.1,6.2).curveTo(17.1,6.1,17.1,6).curveTo(16.6,5.1,16.5,3.7).curveTo(16.4,3,16.4,1.6).curveTo(16.1,2.2,15.6,3.2).curveTo(14.5,5.3,13.7,5.6).curveTo(13.1,5.5,13.1,4.8).curveTo(13.6,4.2,14.2,3.4).curveTo(15.3,1.6,15.3,-0.2).curveTo(16.2,-0.5,16.4,-0.2).curveTo(16.6,-0.6,17,-0.9).curveTo(17.6,-0.3,17.8,1.1).curveTo(18.2,3,18.3,3.4).lineTo(18.3,5).curveTo(18.9,4.5,19.9,3.8).curveTo(22.9,1.8,24,1.8).curveTo(24,1.9,24.1,2.3).closePath().moveTo(14.1,-3.6).curveTo(14.1,-2.3,11.5,-0.1).curveTo(8.9,2.1,7.6,2.1).curveTo(7.3,2.1,7.1,2.1).curveTo(7,2.1,7,2.1).lineTo(6.9,2).curveTo(6.8,1.9,6.6,1.8).curveTo(6.6,2.1,6.6,1.4).curveTo(6.6,1.4,6.7,1.3).lineTo(6.4,0.5).curveTo(6.2,-0.2,6.1,-0.8).curveTo(5.9,-0.6,5.6,-0.3).curveTo(4.2,1.1,4,1.1).lineTo(3.8,1.1).curveTo(3.7,1.1,3.5,1.1).curveTo(2.3,1.1,2.1,-4.2).curveTo(2.1,-5.4,2.7,-5.9).curveTo(3.3,-4.9,3.5,-2.8).curveTo(3.6,-1.5,3.8,-0.5).curveTo(4,-0.8,4.4,-1.2).curveTo(5.6,-2.2,6.5,-2.4).curveTo(6.6,-2.5,6.7,-2.6).curveTo(6.8,-2.6,6.8,-2.5).curveTo(6.9,-2.5,7,-2.5).curveTo(7,-2.3,7.1,-2.1).lineTo(7.1,-2.1).curveTo(7.2,-1.8,7.2,-1.5).curveTo(7.2,-1,7.6,-0.6).lineTo(7.6,0.6).curveTo(7.9,0.5,8.3,0.2).curveTo(10.2,-0.9,10.7,-1.5).curveTo(11.1,-1.8,12,-3.2).curveTo(12.9,-4.3,14,-4).curveTo(14,-3.8,14.1,-3.6).closePath().moveTo(-3.5,-6).curveTo(-2.5,-5.2,-1.8,-3.8).curveTo(-0.7,-1.9,-0.7,-0.2).lineTo(-0.7,-0.1).curveTo(-0.7,0,-0.7,0.1).lineTo(-0.8,0.4).lineTo(-1.3,0.6).curveTo(-1.7,0.5,-1.9,0.3).curveTo(-1.9,0.6,-1.9,-0.1).curveTo(-2.5,-0.8,-3.1,-2.1).lineTo(-5.3,-2.1).curveTo(-6.5,-0.4,-8.5,2.1).curveTo(-9,1.9,-9.1,1.6).curveTo(-9.1,1.6,-9.1,1.1).curveTo(-9.1,0.4,-6.9,-2.8).curveTo(-7,-2.8,-7.1,-2.9).lineTo(-7.1,-3.5).curveTo(-6.9,-3.5,-6.3,-3.6).curveTo(-5.2,-5,-4.5,-5.7).curveTo(-4.6,-5.9,-4.6,-6.1).curveTo(-4.6,-6.2,-4.5,-6.6).curveTo(-4.2,-6.5,-3.9,-6.3).curveTo(-3.7,-6.4,-3.5,-6.5).curveTo(-3.5,-6.4,-3.5,-6).closePath().moveTo(-4,-4.1).curveTo(-4.2,-3.8,-4.4,-3.5).curveTo(-4,-3.5,-3.7,-3.5).curveTo(-3.9,-3.8,-4,-4.1).closePath().moveTo(-12.6,-3.4).curveTo(-12.6,-2.1,-12.8,-1.7).curveTo(-13.3,-0.6,-15.3,-0.6).lineTo(-15.3,-0.6).lineTo(-15.3,2).curveTo(-15.5,2,-16,2.4).curveTo(-16.7,1.7,-16.8,0.5).curveTo(-16.9,-1,-17.1,-1.5).curveTo(-18.1,-3.6,-18.1,-5.2).curveTo(-18.1,-6.4,-17.5,-6.9).curveTo(-17.5,-6.8,-17.4,-6.5).curveTo(-17.3,-6.6,-17.1,-6.6).curveTo(-16.4,-6.8,-14,-6.9).curveTo(-12.6,-6.6,-12.6,-3.4).closePath().moveTo(-14.1,-4.9).curveTo(-14.6,-5.4,-16.6,-5.4).curveTo(-16.8,-5.4,-17,-5.4).curveTo(-16.8,-4.9,-16.5,-4.2).curveTo(-16.1,-2.9,-15.6,-1.9).curveTo(-15.3,-2,-14.9,-2.2).curveTo(-13.8,-2.7,-13.8,-3.5).curveTo(-13.8,-4.6,-14.1,-4.9).closePath().moveTo(-20,-4.9).curveTo(-19.7,-4.8,-19.5,-4.8).curveTo(-19.3,-4.7,-19.3,-4.3).curveTo(-19.3,-4.1,-19.6,-3.9).curveTo(-19.7,-3.8,-20,-3.6).lineTo(-21.8,-3.5).lineTo(-22.6,-1.2).curveTo(-22.6,-0.9,-20.8,0.6).curveTo(-19.1,2.1,-19.1,3.3).curveTo(-23.3,6.9,-23.4,6.9).curveTo(-24,6.9,-23.8,6.8).curveTo(-24,6.7,-24,6.6).curveTo(-24.1,6.6,-24.1,6.2).curveTo(-24.1,5.4,-23.1,4.7).curveTo(-20.7,3.1,-20.6,3).curveTo(-21.2,2,-22.8,0.9).curveTo(-23.8,0.2,-23.8,-1.1).curveTo(-23.8,-2.4,-23.2,-3.7).curveTo(-22.2,-5.8,-20,-4.9).closePath();
	this.shape_12.setTransform(4.5,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,7.4,52.2,23.3);


(lib.mcTiles_Hitbox2 = function() {
	this.initialize();

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#747474").beginStroke().moveTo(31,31).lineTo(-31,31).lineTo(-31,-31).lineTo(31,-31).closePath();
	this.shape_13.setTransform(31,31);

	this.addChild(this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.tile_hitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-31,-31).lineTo(31,-31).lineTo(31,31).lineTo(-31,31).closePath();
	this.shape_14.setTransform(31,31);

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Bullet = function() {
	this.initialize();

	// Base
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFF8D9").beginStroke().moveTo(-21,-0).curveTo(-21,-0.1,-20.5,-0.4).lineTo(20.5,-0.4).lineTo(21,-0).curveTo(21,0.1,20.6,0.4).lineTo(-20.5,0.4).closePath();
	this.shape_15.setTransform(0.1,0);

	// More
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#F7DC1E").beginStroke().moveTo(21.7,-0.8).curveTo(22.4,-0.4,22.4,0.1).curveTo(22.4,0.4,22,0.8).curveTo(21.6,1.2,21,1.2).lineTo(-21,1.2).curveTo(-22.2,1.2,-22.4,0).curveTo(-22.4,-1,-21,-1.1).lineTo(19.5,-1.1).curveTo(20.7,-1.4,21.7,-0.8).closePath();

	this.addChild(this.shape_16,this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.4,-1.2,44.9,2.5);


(lib.giftedclientworld = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcLoad_percent = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcLoad_Meng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Meng
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11,-11.1).curveTo(14.8,-6.7,14.8,-2.4).curveTo(14.8,2.6,11.6,8.6).curveTo(8.2,15.1,3.3,17.8).lineTo(-1,17.8).curveTo(-10.1,15,-13.1,9.4).curveTo(-14.8,6.3,-14.8,0).curveTo(-14.8,-2.8,-14.1,-4).curveTo(-12.2,-7.6,-11.3,-10).curveTo(-10.5,-11.4,-5.7,-14.3).curveTo(-0.7,-17.3,-0.3,-17.8).curveTo(6.6,-16.4,11,-11.1).closePath();
	this.shape_17.setTransform(17.4,20.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(14.6,-44.2).curveTo(14.6,-39.1,11.3,-31.8).curveTo(6.9,-22,-0.4,-21.4).curveTo(-0.4,-21.3,-0.4,-21.1).curveTo(-0.4,-19.5,-0.2,-16).curveTo(0.4,-15.5,1.2,-14.1).curveTo(2.7,-11.6,5.6,-5.4).curveTo(7.2,-3.9,10.1,0.9).curveTo(13.4,5.2,18.8,6.7).curveTo(19.1,6.8,19.7,6.9).curveTo(20.1,7.1,20.1,7.9).curveTo(20.1,8.7,19.6,9).curveTo(19.5,9,18.8,9.2).lineTo(15.3,9.2).curveTo(12.5,7.7,5.5,-2.3).curveTo(1.9,-7.4,0.2,-10.4).curveTo(0.4,-8.1,0.6,-5.4).curveTo(1.6,6.9,1.6,7.4).curveTo(1.6,7.6,1.1,12.4).curveTo(0.9,14,0.8,15.4).curveTo(0.6,15.9,0.6,16.7).lineTo(0.6,16.9).curveTo(0.5,17.2,0.5,17.5).curveTo(0.5,17.6,0.7,18).curveTo(0.6,18,0.6,18.1).curveTo(0.6,18.2,0.6,18.4).curveTo(0.7,18.3,0.8,18.3).curveTo(1.2,18.4,1.6,18.8).curveTo(2.7,19.7,4.7,22.9).curveTo(8.2,28.6,11.1,35.2).curveTo(11.9,37.2,13.2,44.8).curveTo(14.6,52.7,14.6,56.1).curveTo(14.6,59.5,14.4,61.7).curveTo(13.8,62,13.3,62.2).curveTo(11.9,58.2,11.3,51.6).curveTo(10.4,42.6,10.1,40.9).curveTo(9.4,37,4.6,28.4).curveTo(2.3,24.1,0.1,20.1).curveTo(0.1,20,0.1,19.8).curveTo(-0.3,20,-0.7,20.2).curveTo(-0.8,20.1,-0.9,20.1).curveTo(-1.9,21.4,-3.5,23.3).curveTo(-8.9,30.1,-11.9,38.7).curveTo(-13.2,42.3,-13.1,48.8).curveTo(-13,57.6,-13.2,59.7).curveTo(-13.3,59.8,-14.2,60.2).curveTo(-15.1,58.3,-15.3,55.2).curveTo(-15.4,54.1,-15.4,50.3).curveTo(-15.4,39.3,-12.7,31.6).curveTo(-9.3,21.8,-1.8,18).curveTo(-1.8,17.9,-1.8,17.9).curveTo(-1.9,17.3,-1.9,15.6).curveTo(-1.9,15,-1.4,11.3).curveTo(-0.9,7.7,-0.9,7).curveTo(-1.4,1.5,-1.8,-4.3).curveTo(-2.7,-2.5,-3.9,-0.3).curveTo(-8.5,7.7,-12.4,7.7).curveTo(-13.6,7.7,-14.4,7.1).lineTo(-14.4,7.2).curveTo(-14.4,7.1,-14.4,6.3).curveTo(-14.4,6.2,-10.6,2.9).curveTo(-6.2,-1.1,-3.6,-4.8).curveTo(-2.5,-6.4,-2.5,-10.6).curveTo(-2.5,-11.9,-2.4,-12.9).curveTo(-2.9,-19.9,-2.9,-21.3).curveTo(-14.6,-21.9,-18.4,-31.6).curveTo(-20.5,-36.7,-19.9,-42.1).curveTo(-19.9,-49.9,-13.7,-55.5).curveTo(-12.4,-56.6,-9.4,-58.7).curveTo(-7.4,-60.1,-7.4,-60.7).curveTo(-7.4,-62.6,-4,-62).curveTo(-0.6,-61.5,3.6,-59).curveTo(14.6,-52.5,14.6,-44.2).closePath().moveTo(8.3,-53).curveTo(3.9,-58.2,-2.9,-59.7).curveTo(-3.3,-59.1,-8.3,-56.2).curveTo(-13.2,-53.3,-13.9,-51.8).curveTo(-14.8,-49.5,-16.8,-45.9).curveTo(-17.4,-44.6,-17.4,-41.9).curveTo(-17.4,-35.6,-15.7,-32.4).curveTo(-12.8,-26.9,-3.6,-24.1).lineTo(0.6,-24.1).curveTo(5.5,-26.8,9,-33.3).curveTo(12.1,-39.3,12.1,-44.3).curveTo(12.1,-48.5,8.3,-53).closePath();
	this.shape_18.setTransform(20,62.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(12.8,-45.6).curveTo(8.6,-49.2,8.1,-49.8).curveTo(5,-52.8,4.3,-53.6).curveTo(3.1,-54.8,0.9,-55.5).curveTo(-1.1,-56,-1.8,-57.1).curveTo(-10.7,-52.2,-13.7,-48.7).curveTo(-16.8,-45.2,-16.8,-39.9).curveTo(-16.8,-34.9,-14.3,-29.7).curveTo(-10.9,-22.5,-4.9,-22.6).lineTo(6.3,-22.6).curveTo(12.9,-32.3,13,-32.6).curveTo(15.3,-36.7,15.3,-41.8).curveTo(15.3,-43.5,12.8,-45.6).closePath().moveTo(17.8,-41.5).curveTo(17.8,-35.8,15.4,-30.9).curveTo(12.9,-25.6,7,-19.9).lineTo(2.1,-19.9).curveTo(2.3,-19.3,2.3,-17.5).curveTo(2.3,-15.4,2.1,-14.3).curveTo(2,-14.3,1.9,-14.2).curveTo(2.1,-13.4,2.4,-12.3).curveTo(3.1,-11.4,3.9,-10.3).curveTo(5.1,-8.4,7.4,-4.2).curveTo(12.3,3.9,19.3,5.6).curveTo(19,6,18.6,6.7).curveTo(18.3,7.1,17.5,7.1).curveTo(11.2,7.1,3.3,-6.8).curveTo(3.3,-6.5,3.3,-6.3).curveTo(4.3,1.6,4.3,9.7).curveTo(4.3,10.7,2.5,15.3).curveTo(0.8,19.7,0.1,20.6).curveTo(4.8,21.8,7.8,27.6).curveTo(8.2,28.4,10.4,33.3).curveTo(11.9,36.8,13.3,38.6).curveTo(15.8,52.2,17.8,59.6).curveTo(17.1,60.3,16.5,60.6).curveTo(15,57.2,13.3,49.8).curveTo(11.4,41.9,10.8,40.1).curveTo(8.6,34.6,5.9,30.1).curveTo(3.7,26.3,-0.4,20.9).curveTo(-8.5,29.4,-9.6,32.1).curveTo(-10.3,33.7,-10.3,41.9).curveTo(-10.3,44.7,-7.8,57).curveTo(-7.8,57.9,-7.9,58.7).curveTo(-8.5,58.9,-9,59.1).curveTo(-11.9,55.9,-12.5,50.7).curveTo(-12.8,48.9,-12.8,41.6).curveTo(-12.9,37.8,-12.9,35.6).curveTo(-12.8,31.8,-11.8,29.6).curveTo(-7.3,19.7,-0.5,20.2).lineTo(-0.4,20.5).curveTo(-0.2,20.5,-0.1,20.5).curveTo(-0.7,19.9,-1,19.1).curveTo(-1.3,18.5,-1.3,18.2).curveTo(-0.6,16.3,0.1,14.4).curveTo(1.3,10.5,1.3,9.4).curveTo(1.3,6.7,-0.1,-2.9).curveTo(-0.4,-2.2,-0.8,-1.4).curveTo(-3.5,5.1,-8,5.1).curveTo(-8.8,5.1,-9.2,4.9).curveTo(-9.2,4.9,-9.7,4.4).curveTo(-9.8,5,-9.8,3.7).curveTo(-9.8,3.3,-8.9,3).curveTo(-7.6,2.5,-7,2.1).curveTo(-3.9,0.3,-2.4,-4.9).curveTo(-1.8,-7.3,-1.1,-9).curveTo(-1.8,-13.6,-1.8,-14).curveTo(-1.8,-14.1,-1.4,-14.9).curveTo(-1.5,-14.9,-1.5,-14.9).curveTo(-1.8,-15.2,-1.8,-15.5).curveTo(-1.8,-16,-1.5,-16.3).curveTo(-1.7,-17.3,-1.8,-19.9).lineTo(-5.5,-19.9).curveTo(-12.9,-19.9,-16.7,-28.2).curveTo(-19.3,-33.8,-19.3,-39.8).curveTo(-19.3,-42,-17.6,-46.5).curveTo(-15.9,-51.3,-14,-52.9).curveTo(-0.7,-64.7,1.5,-58.6).curveTo(7,-55.3,11.8,-50.8).curveTo(17.8,-45.1,17.8,-41.5).closePath();
	this.shape_19.setTransform(18.5,60.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(13.6,-5.7).curveTo(16,-3.6,16,-2).curveTo(16,3.1,13.8,7.2).curveTo(13.6,7.5,7,17.2).lineTo(-4.2,17.2).curveTo(-10.2,17.4,-13.6,10.2).curveTo(-16,4.9,-16,-0).curveTo(-16,-5.4,-12.9,-8.9).curveTo(-9.9,-12.3,-1,-17.3).curveTo(-0.4,-16.2,1.6,-15.6).curveTo(3.9,-15,5,-13.8).curveTo(5.8,-13,8.8,-10).curveTo(9.4,-9.4,13.6,-5.7).closePath();
	this.shape_20.setTransform(17.8,20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(12.4,-8.9).curveTo(16,-6.4,16,-2.3).curveTo(15.6,2.2,13.5,6.5).curveTo(9.2,15.2,0.1,15.2).curveTo(-8.5,15.2,-13,9).curveTo(-16,4.9,-16,1.3).curveTo(-16,-2.7,-11.8,-8.3).curveTo(-6.9,-14.5,-1.5,-15.2).curveTo(-1.5,-14.7,-1.1,-14.2).curveTo(-0.8,-13.7,-0.3,-13.5).curveTo(8.9,-11.4,12.4,-8.9).closePath();
	this.shape_21.setTransform(18.8,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(17.5,-43.9).curveTo(17.5,-38.1,14,-31.9).curveTo(9.1,-23,-0.5,-23).curveTo(-1.1,-23,-1.6,-23).curveTo(-0.5,-21.9,0.1,-18.9).curveTo(0.6,-16,1,-14.2).curveTo(2.1,-12.2,3.8,-8.9).curveTo(8.5,-4.8,10,-3.8).curveTo(14,-1,19.3,0.6).lineTo(19.5,1.1).curveTo(19.3,1.5,19.1,2.1).curveTo(18.8,2.5,16.8,2.5).curveTo(9.8,2.5,3.1,-5.7).curveTo(2.9,-5.9,2.8,-6).curveTo(2.9,-5.1,2.9,-4.2).curveTo(3,-3.1,3,2.9).curveTo(3,5.5,2.3,9.5).curveTo(1.9,11.3,0.6,17.1).curveTo(0.5,17.1,0.5,17.1).curveTo(0.5,17.3,0.5,17.6).lineTo(-0.3,18.6).curveTo(2.9,20.4,6.2,25).curveTo(9.9,30.3,11,35).curveTo(12.6,38.8,14.2,44.7).curveTo(15,47.5,16.5,54.5).lineTo(16.5,57.8).curveTo(15.8,58.3,15.3,58.5).curveTo(14.1,55.8,12.5,49).curveTo(10.9,42.3,9.5,38.8).curveTo(8.3,35.8,2.9,28).curveTo(-0.6,22.8,-1.3,20.1).lineTo(-3.8,23.3).curveTo(-8,29,-8,32.1).curveTo(-8,34.8,-8.5,39.5).curveTo(-9,44.2,-9,45.8).curveTo(-9,48.6,-8.9,49.4).curveTo(-8.7,51.1,-7.5,53.1).lineTo(-7.5,55.3).curveTo(-7.7,55.3,-8,55.6).curveTo(-8.5,55.9,-8.8,56).curveTo(-10.9,53.1,-11.3,50.8).curveTo(-11.5,49.9,-11.5,46).curveTo(-11.5,38.1,-9.1,29.2).curveTo(-6,17.9,-0.8,16.9).curveTo(-1.5,15.9,-1.5,15).curveTo(-1.5,13.1,-0.5,8.6).curveTo(0.5,4,0.5,2.4).curveTo(0.5,-5.6,0.3,-6.6).curveTo(0.3,-6.7,0.3,-6.8).curveTo(-0.3,-4.5,-1.9,-1.9).curveTo(-5.1,3,-10,3).curveTo(-10.8,3,-11.2,2.9).lineTo(-11.5,2.8).curveTo(-11.9,2.6,-11.9,2.5).curveTo(-12,2.4,-12,1.6).curveTo(-12,1.3,-10.4,0.8).curveTo(-8.3,0,-7,-0.9).curveTo(-2,-4.3,-2,-12.7).curveTo(-1.9,-12.7,-1.8,-12.7).curveTo(-2.5,-14.2,-2.5,-15.2).curveTo(-2.5,-16.3,-2.4,-16.9).curveTo(-2.7,-18.1,-3,-19.5).lineTo(-3,-23.1).curveTo(-12.3,-23.9,-16.6,-30.7).curveTo(-19.5,-35.2,-19.5,-40).curveTo(-19.5,-41.4,-18.3,-45.7).curveTo(-16.9,-50.9,-15.2,-52.2).curveTo(-10.9,-55.7,-7.7,-57.3).curveTo(-2.7,-59.8,-2,-57).curveTo(8.9,-55.9,13.8,-51.7).curveTo(17.5,-48.6,17.5,-43.9).closePath().moveTo(11.4,-49.8).curveTo(7.9,-52.3,-1.3,-54.5).curveTo(-1.8,-54.7,-2.1,-55.2).curveTo(-2.5,-55.6,-2.5,-56.2).curveTo(-7.9,-55.5,-12.8,-49.2).curveTo(-17,-43.7,-17,-39.6).curveTo(-17,-36,-14,-31.9).curveTo(-9.5,-25.7,-0.9,-25.7).curveTo(8.2,-25.7,12.5,-34.4).curveTo(14.6,-38.8,15,-43.2).curveTo(15,-47.3,11.4,-49.8).closePath();
	this.shape_22.setTransform(19.8,60.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(12.6,-8.2).curveTo(16,-5.1,16,-1).curveTo(16.2,3.6,14.5,7.7).curveTo(11.1,15.9,1.6,15.9).curveTo(-9.5,15.9,-13.8,8.2).curveTo(-16,4.2,-16,-0.8).curveTo(-16,-6.5,-13.1,-10.2).curveTo(-8.5,-16.1,3,-15.8).curveTo(7.2,-12.5,12.6,-8.2).closePath();
	this.shape_23.setTransform(19.8,21.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000000").beginStroke().moveTo(17,-40.1).curveTo(17,-34.2,15,-29.7).curveTo(11,-20.5,0.3,-20.5).curveTo(-0.8,-20.5,-1.9,-20.5).curveTo(0.1,-17.8,1.2,-12.5).curveTo(1.2,-12.3,1.3,-12.2).curveTo(2.3,-10.5,2.6,-10.2).curveTo(4.4,-7.2,6.6,-5.9).curveTo(10.1,-4,18.8,-2.5).curveTo(19,-2.3,19.6,-2.3).curveTo(20,-2.1,20,-1.4).curveTo(20,-0.6,19.5,-0.3).curveTo(19.3,-0.1,18.8,0).lineTo(13.8,0).curveTo(6.3,-2.4,2.2,-6).curveTo(2.5,-2.6,2.5,1.3).curveTo(2.5,7.3,2.2,9).curveTo(1.7,12.3,-0.1,14.7).curveTo(0.8,15.7,2.3,17.9).curveTo(6.5,24.1,10,33.1).curveTo(11,35,13,43.8).curveTo(15,52.3,15,53.9).curveTo(15,56,14.8,57.1).curveTo(14.3,57.3,13.8,57.5).curveTo(12.5,54.6,11.5,47.3).curveTo(10.5,40.4,8.5,36.6).curveTo(4.5,29.5,2.2,25.3).curveTo(-0.9,19.6,-1.7,17).curveTo(-5.4,21.4,-8.2,27.3).curveTo(-11.5,34.4,-11.5,39.5).curveTo(-11.5,41,-10.5,46.1).curveTo(-9.5,51.1,-9.5,52.3).curveTo(-9.5,53,-9.6,53).curveTo(-9.8,52.9,-9.8,53).curveTo(-9.8,53.2,-10,53.4).curveTo(-10.2,53.5,-11,53.5).curveTo(-11.8,53.5,-12.2,53.4).lineTo(-12.4,53.3).curveTo(-12.5,52.1,-13.3,46.5).curveTo(-14,41.3,-14,39).curveTo(-14,32.1,-10.9,25.9).curveTo(-7.9,19.7,-2.6,16.2).curveTo(-2.6,16.1,-2.6,16.1).curveTo(-3,15.7,-3,14.9).curveTo(-3,14.5,-1.5,8.4).curveTo(0,2.2,0,1).curveTo(0,-1.3,-0.5,-4.2).curveTo(-0.8,-2.8,-1.3,-1.5).curveTo(-3.5,4.5,-9,4.5).curveTo(-9.8,4.5,-10.3,4.3).curveTo(-10.6,4.2,-10.9,3.8).curveTo(-11,4.4,-11,3.1).curveTo(-8.8,2.5,-6.8,0.8).curveTo(-2.5,-2.5,-2.5,-8.4).curveTo(-2.5,-10.6,-2.4,-12).curveTo(-3.9,-17.3,-4.6,-20.8).curveTo(-13.8,-22.3,-17.7,-29.7).curveTo(-20,-34.2,-20,-40.2).curveTo(-20,-46.4,-16,-51.8).curveTo(-11.2,-58.2,-3.8,-57.5).curveTo(4.6,-58,11.2,-51.5).curveTo(17,-45.8,17,-40.1).closePath().moveTo(11.1,-47.3).curveTo(5.7,-51.6,1.5,-54.9).curveTo(-9.9,-55.2,-14.6,-49.3).curveTo(-17.5,-45.6,-17.5,-39.9).curveTo(-17.5,-34.9,-15.3,-30.9).curveTo(-10.9,-23.2,0.1,-23.2).curveTo(9.6,-23.2,13,-31.4).curveTo(14.7,-35.5,14.5,-40.1).curveTo(14.5,-44.2,11.1,-47.3).closePath();
	this.shape_24.setTransform(21.3,60.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3,-15.4).curveTo(3.8,-14.3,11.1,-6.6).curveTo(16.5,-1,16.5,2.4).curveTo(16.5,5.1,14.5,9.1).curveTo(13.4,11.4,11,15.6).lineTo(1.8,15.6).curveTo(-0.7,15.8,-2.8,15.5).curveTo(-3,15.5,-3.2,15.5).curveTo(-10.7,14.4,-14.1,7.9).curveTo(-16.5,3.3,-16.5,-3.6).curveTo(-16.5,-7.5,-15.4,-8.7).curveTo(-11.6,-11.5,-6.4,-15.6).closePath();
	this.shape_25.setTransform(20.8,21.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000000").beginStroke().moveTo(14.7,-49.1).curveTo(19,-44.5,19,-39.3).curveTo(19,-36.5,16.6,-30.4).curveTo(14,-23.9,12.3,-23.4).lineTo(1.8,-23.4).curveTo(0.1,-23.4,-1.4,-23.4).curveTo(-0.1,-20.2,1.5,-14.4).curveTo(1.5,-13.5,1.6,-11.7).curveTo(3.2,-11.9,8.4,-7.5).curveTo(14,-2.8,17,0.6).curveTo(16.8,1,16.4,1.6).curveTo(16,2.1,15.5,2.1).curveTo(12.1,2.1,6.3,-3.9).curveTo(3.2,-7.1,1.9,-8.9).curveTo(2.3,-5.5,3,-0.5).curveTo(3,2.9,1.4,7.6).curveTo(0.4,10.6,-0.8,12.1).lineTo(-0.5,12.7).curveTo(-1,13.2,-1.5,13.6).curveTo(3.9,15.5,9.7,30.3).curveTo(15,43.8,15.9,52.9).curveTo(16,54.5,16,55.9).curveTo(16,58.9,13.8,60.1).curveTo(13,59.9,12.9,59.6).curveTo(12.5,59.3,12.5,58.4).curveTo(12.5,57.9,13,56.9).curveTo(13.5,56.1,13.5,55.4).curveTo(13.5,54.2,13.4,52.9).curveTo(12.8,44.7,8.2,33.6).curveTo(3.5,22.2,-2.5,14.6).curveTo(-9.7,21.1,-11.4,23.6).curveTo(-14,27.4,-14,34.2).curveTo(-14,35.6,-13.3,43.8).curveTo(-12.8,49.5,-12.4,52.9).curveTo(-12.2,54.8,-12,55.9).lineTo(-12.3,57.4).curveTo(-12.4,57.6,-13.3,57.6).curveTo(-14.4,57.6,-15.2,52.9).curveTo(-15.7,50.1,-16,45.8).curveTo(-16.5,33.9,-16.5,33.9).curveTo(-16.5,28.4,-16.4,27.8).curveTo(-16,25.3,-13.5,21.4).curveTo(-10.5,16.6,-8.9,15.1).curveTo(-6.6,12.9,-3.5,12.4).curveTo(-3.5,12.2,-3.5,11.9).curveTo(-3.5,10.6,-1.5,5.6).curveTo(0.5,0.6,0.5,-0.8).curveTo(0.5,-2.9,-0.2,-6.7).curveTo(-1,-4.6,-2.4,-1.9).curveTo(-6.3,5.1,-11.3,5.1).curveTo(-12.1,5.1,-12.4,4.9).curveTo(-12.4,4.9,-12.9,4.4).curveTo(-13,4.9,-13,3.7).curveTo(-13,3.6,-9.8,0.6).curveTo(-5.6,-3.3,-2.7,-6.1).curveTo(-1.6,-7.2,-1.9,-11.1).curveTo(-1.9,-12.6,-1.8,-13.8).curveTo(-3.3,-20.4,-3.5,-23.6).curveTo(-13.2,-25,-16.9,-32.5).curveTo(-19,-37,-19,-45.5).curveTo(-19,-52.2,-12.9,-56.4).curveTo(-8.3,-59.6,-3,-60.1).lineTo(3.8,-59.9).curveTo(8.1,-55.1,14.7,-49.1).closePath().moveTo(3,-57.1).lineTo(-6.4,-57.4).curveTo(-11.6,-53.3,-15.4,-50.4).curveTo(-16.5,-49.2,-16.5,-45.3).curveTo(-16.5,-38.5,-14.1,-33.8).curveTo(-10.7,-27.3,-3.2,-26.3).curveTo(-3,-26.2,-2.8,-26.2).curveTo(-0.7,-26,1.8,-26.1).lineTo(11,-26.1).curveTo(13.4,-30.4,14.5,-32.6).curveTo(16.5,-36.6,16.5,-39.3).curveTo(16.5,-42.8,11.1,-48.3).curveTo(3.8,-56,3,-57.1).closePath();
	this.shape_26.setTransform(20.8,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},4).to({state:[{t:this.shape_22},{t:this.shape_21}]},4).to({state:[{t:this.shape_24},{t:this.shape_23}]},4).to({state:[{t:this.shape_26},{t:this.shape_25}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.1,124.4);


(lib.PistolTactical = function() {
	this.initialize();

	// Gun
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FF0000").beginStroke().moveTo(0.2,0).lineTo(0,0.2).lineTo(-0.1,0.1).lineTo(-0.2,0).curveTo(-0.2,-0.1,-0.1,-0.2).curveTo(-0,-0.2,0,-0.2).closePath();
	this.shape_27.setTransform(9.7,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(6.2,-0.4).lineTo(6.1,0.4).lineTo(-6.2,0.2).curveTo(-6.2,0.1,-6.1,0).curveTo(-6.1,0,-6,-0).curveTo(-4.4,-0,-4.3,-0.1).curveTo(-4.2,-0.2,-4,-0.3).closePath();
	this.shape_28.setTransform(2.8,-3.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#333333").beginStroke().moveTo(-5.5,-2).curveTo(-5.6,-2,-5.7,-2).lineTo(-5.5,-2.2).curveTo(-5,-2.7,-4.6,-2.4).curveTo(-4.1,-2.2,-3.7,-2.6).lineTo(-2.9,-2.6).lineTo(-2.8,-2.5).lineTo(1.1,-2.5).curveTo(1,-2.5,1,-2.5).curveTo(0.9,-2.2,0.9,-2).closePath().moveTo(3.2,-3.5).lineTo(3.2,-5.2).curveTo(3.4,-5.3,3.7,-5.3).lineTo(11.9,-5.3).lineTo(11.9,-5.2).curveTo(11.8,-3.9,11.8,-3.3).curveTo(11.8,-3.1,11.8,-3).curveTo(11.4,-3.1,11.1,-3.4).lineTo(9.4,-3.4).curveTo(8.9,-3.8,8.7,-3.7).curveTo(8.6,-3.5,8.6,-3.6).lineTo(7.4,-3.6).curveTo(7.2,-3.5,6.8,-3.5).lineTo(5.3,-3.5).lineTo(5.2,-3.5).closePath().moveTo(-11.2,-0.9).curveTo(-11.1,-1.4,-11.2,-1.7).lineTo(-9.8,-1.8).curveTo(-9.7,-1.6,-9.4,-1.5).curveTo(-9.4,-1.4,-9.4,-1.2).curveTo(-9.4,-1.1,-9.4,-0.8).curveTo(-9.4,-0.9,-9.3,-0.9).lineTo(-9.3,3.7).lineTo(-9.8,4.9).curveTo(-9.8,5.1,-9.8,5.3).curveTo(-10.2,5.1,-10.7,4.9).curveTo(-11.5,4.6,-11.9,4.7).curveTo(-11.3,3.5,-11.2,-0.9).closePath().moveTo(1.3,0.5).curveTo(1.3,0.8,1.4,1).lineTo(-2.7,1).curveTo(-2.7,0.6,-2.7,-0.1).lineTo(-2.7,-0.1).curveTo(-2.6,-0.1,-2.4,-0.1).curveTo(-1.6,-0.1,-1.4,-0.3).lineTo(0.8,-0.3).curveTo(0.9,-0.1,1.1,-0.1).curveTo(1.1,-0.1,1.2,-0.1).curveTo(1.2,0.1,1.3,0.5).closePath();
	this.shape_29.setTransform(7.8,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(-4.9,-3.9).lineTo(-10,-3.9).lineTo(-10,-4).lineTo(-11,-4).lineTo(-11.1,-4.1).curveTo(-11.7,-3.9,-11.7,-3.4).curveTo(-11.6,-3.1,-11.6,-2.9).lineTo(-9.3,-2.9).curveTo(-8.4,-2.6,-7.1,-2.4).curveTo(-6.9,-2.4,-6.8,-2.3).curveTo(-6.3,-2.3,-5.5,-2.3).curveTo(-5.4,-3,-3.3,-3).lineTo(1.6,-3).curveTo(1.7,-3.4,1.7,-3.8).lineTo(1.7,-3.8).lineTo(-0.4,-3.8).lineTo(-0.5,-3.8).lineTo(-4.8,-3.9).closePath().moveTo(-5.1,-2.3).lineTo(1.3,-2.2).curveTo(1.4,-2.4,1.5,-2.7).curveTo(1.5,-2.7,1.5,-2.8).lineTo(-2.4,-2.8).lineTo(-2.4,-2.8).lineTo(-3.3,-2.8).curveTo(-3.7,-2.4,-4.1,-2.6).curveTo(-4.6,-2.9,-5,-2.5).lineTo(-5.2,-2.3).curveTo(-5.1,-2.3,-5.1,-2.3).closePath().moveTo(7.4,-3).lineTo(7.3,-3).lineTo(3.3,-3).curveTo(3.2,-3,3.2,-3.1).lineTo(3.2,-3.6).curveTo(3.1,-3.6,3.1,-3.8).curveTo(2.9,-3.7,2.7,-3.7).curveTo(2.6,-3.7,2.6,-3.8).curveTo(2.8,-1.5,1.8,-1.5).curveTo(1.7,-1.5,1.7,-1.5).curveTo(1.6,-1.4,1.5,-1.3).lineTo(0.9,-1.3).lineTo(1.1,-1).lineTo(1.4,-1).curveTo(1.5,-0.9,1.6,-0.8).curveTo(1.6,-1,1.9,-0.9).curveTo(2.3,-0.8,2.2,-0.3).lineTo(2.2,-0.3).curveTo(2.3,-0.3,2.3,-0.3).curveTo(2.6,-0.1,2.6,0.2).curveTo(2.6,0.7,2.4,0.7).curveTo(2.3,0.7,2.3,0.7).lineTo(2.3,0.8).curveTo(2.3,1,2.2,1.1).curveTo(2.2,1.2,2.1,1.3).lineTo(-2.6,1.3).curveTo(-2.8,1.2,-2.8,1.1).lineTo(-2.7,1).curveTo(-2.8,1,-2.8,0.9).curveTo(-2.8,0.6,-2.8,0.6).lineTo(-2.7,-0.6).curveTo(-2.7,-0.7,-2.7,-0.7).curveTo(-2.6,-1.1,-2.4,-0.9).lineTo(-2.4,-0.8).curveTo(-1.8,-0.8,-1,-1).curveTo(-1,-1.1,-1,-1.3).lineTo(-1,-1.3).lineTo(-5.3,-1.3).curveTo(-5.4,-1.3,-5.6,-1.3).curveTo(-5.6,-1.2,-5.5,-1).curveTo(-5.5,-0.9,-5.5,-0.7).curveTo(-5.5,-0.5,-5.5,-0.4).curveTo(-5.6,0.1,-6,0.7).curveTo(-6.8,1.7,-7.9,1.7).lineTo(-8.2,1.6).curveTo(-8.2,1.6,-8.2,1.4).curveTo(-8.2,1.2,-7.5,0.8).curveTo(-7,0.6,-6.8,0.4).curveTo(-6.9,0.4,-7,0.4).curveTo(-7.4,0.4,-7.5,-0.1).curveTo(-7.5,-0.3,-7.5,-0.6).lineTo(-7.4,-1.3).curveTo(-7.9,-1.3,-8.3,-1.4).curveTo(-8.3,-1.3,-8.3,-1.3).lineTo(-8.3,1.1).curveTo(-8.2,3.3,-8.3,3.9).curveTo(-8.5,4.8,-8.8,5.4).curveTo(-8.7,5.6,-8.7,5.8).curveTo(-8.7,6.2,-9,6.2).curveTo(-9.2,6.2,-9.3,6.2).curveTo(-9.4,6.3,-9.5,6.3).curveTo(-9.5,6.3,-9.5,6.2).curveTo(-9.8,6.1,-9.9,6).curveTo(-10.2,5.7,-10.4,5.6).curveTo(-11.4,5.6,-11.7,5.3).curveTo(-11.8,5.2,-11.8,4.9).curveTo(-11.9,5,-12,5).curveTo(-12.7,5,-12.5,4.3).curveTo(-12.5,4.2,-12.1,2.5).curveTo(-11.8,0.9,-11.8,0.3).curveTo(-11.6,-0.8,-11.6,-1.8).curveTo(-11.6,-1.9,-11.5,-2).lineTo(-12.3,-2).curveTo(-12.3,-2,-12.3,-2).curveTo(-12.8,-2,-12.8,-2.4).curveTo(-12.8,-2.9,-12.6,-4.2).curveTo(-12.3,-4.8,-11.4,-5.1).curveTo(-11.3,-5.1,-11,-5.1).curveTo(-10.9,-5.3,-10.6,-5.3).curveTo(-9.5,-5.4,-8.5,-5.7).lineTo(1.7,-5.9).lineTo(2,-6).lineTo(2.5,-6).curveTo(2.4,-5.8,2.4,-5.6).curveTo(2.6,-5.4,2.7,-5.1).curveTo(2.8,-5.2,3.1,-5.2).curveTo(3.1,-5.2,3.2,-5.1).curveTo(3.2,-5.2,3.2,-5.2).lineTo(3.2,-5.5).curveTo(3.3,-5.8,3.4,-5.9).curveTo(3.4,-6.2,3.5,-6.1).curveTo(3.7,-6.3,4.2,-6.3).lineTo(6.6,-6.3).lineTo(7.6,-6.2).lineTo(12.5,-6.2).curveTo(12.8,-5.9,12.8,-5.8).lineTo(12.8,-5.7).curveTo(12.9,-5.3,12.9,-5).curveTo(12.9,-4.5,12.8,-3.8).curveTo(12.6,-2.8,12.5,-2.8).lineTo(12.4,-2.8).curveTo(12.3,-2.7,12.1,-2.7).lineTo(11.5,-2.9).lineTo(9.8,-2.9).curveTo(9.4,-2.9,9.3,-2.8).curveTo(9.2,-2.8,9,-3.1).lineTo(7.6,-3).closePath().moveTo(-6.9,-1.1).curveTo(-6.8,-0.2,-6.7,0.1).lineTo(-6.7,0.3).curveTo(-6.5,0.2,-6.5,0.1).curveTo(-6.3,-0,-6.2,-0.7).curveTo(-6.1,-0.9,-5.9,-1).curveTo(-6.5,-1.1,-6.9,-1.1).closePath().moveTo(1.7,-4.8).lineTo(-8.4,-4.8).curveTo(-8.7,-4.6,-8.7,-4.5).curveTo(-8.9,-4.4,-10.5,-4.4).curveTo(-10.5,-4.4,-10.6,-4.4).curveTo(-10.6,-4.3,-10.6,-4.3).lineTo(1.7,-4).closePath().moveTo(3.6,-3.8).lineTo(5.7,-3.8).lineTo(5.8,-3.7).lineTo(7.2,-3.7).curveTo(7.6,-3.7,7.9,-3.9).lineTo(9,-3.9).curveTo(9.1,-3.8,9.2,-3.9).curveTo(9.3,-4,9.8,-3.6).lineTo(11.5,-3.6).curveTo(11.9,-3.4,12.2,-3.2).curveTo(12.2,-3.4,12.2,-3.5).curveTo(12.2,-4.1,12.4,-5.4).lineTo(12.4,-5.5).lineTo(4.1,-5.6).curveTo(3.9,-5.5,3.7,-5.4).closePath().moveTo(2.6,0.2).lineTo(2.4,-0).curveTo(2.4,0,2.3,0).curveTo(2.2,0.1,2.2,0.2).lineTo(2.3,0.3).lineTo(2.4,0.4).closePath().moveTo(1.7,0.3).curveTo(1.7,-0.1,1.6,-0.3).curveTo(1.6,-0.3,1.5,-0.3).curveTo(1.3,-0.3,1.2,-0.5).lineTo(-1,-0.5).curveTo(-1.2,-0.3,-2,-0.3).curveTo(-2.1,-0.3,-2.2,-0.3).lineTo(-2.2,-0.3).curveTo(-2.2,0.4,-2.3,0.8).lineTo(1.9,0.8).curveTo(1.8,0.6,1.7,0.3).closePath().moveTo(-10.8,-1.1).curveTo(-10.8,3.3,-11.4,4.5).curveTo(-11.1,4.4,-10.3,4.7).curveTo(-9.8,4.9,-9.4,5.1).curveTo(-9.4,4.9,-9.4,4.7).lineTo(-8.8,3.5).lineTo(-8.9,-1.1).curveTo(-8.9,-1.1,-8.9,-1).curveTo(-8.9,-1.3,-8.9,-1.5).curveTo(-8.9,-1.6,-8.9,-1.8).curveTo(-9.2,-1.8,-9.4,-2).lineTo(-10.8,-2).curveTo(-10.7,-1.6,-10.8,-1.1).closePath();
	this.shape_30.setTransform(7.3,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#666666").beginStroke().moveTo(-2.7,-0.7).lineTo(-2.7,-0.7).lineTo(1.7,-0.6).lineTo(1.7,-0.6).lineTo(3.8,-0.6).lineTo(3.8,-0.6).curveTo(3.8,-0.3,3.7,0.2).lineTo(-1.1,0.1).curveTo(-3.3,0.1,-3.3,0.9).curveTo(-4.1,0.8,-4.7,0.8).curveTo(-4.8,0.8,-4.9,0.8).curveTo(-6.3,0.6,-7.2,0.2).lineTo(-9.4,0.3).curveTo(-9.4,0.1,-9.6,-0.2).curveTo(-9.6,-0.8,-8.9,-0.9).lineTo(-8.9,-0.8).lineTo(-7.9,-0.8).lineTo(-7.8,-0.8).closePath().moveTo(9.4,0.2).lineTo(9.5,0.2).curveTo(9.5,0.4,9.6,0.5).lineTo(9.4,0.5).curveTo(9.4,0.4,9.4,0.2).closePath();
	this.shape_31.setTransform(5.2,-2.4);

	// Fill
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#333333").beginStroke().moveTo(-7.2,-1.9).lineTo(-8.2,-2.2).lineTo(-8.6,-2.2).curveTo(-8.8,-2,-8.8,-1.9).curveTo(-9,-1.6,-9.1,-1.5).curveTo(-9,-1.4,-9,-1.1).curveTo(-9,-0.8,-9,-0.3).curveTo(-8.8,5.5,-10.5,5.5).curveTo(-10.9,5.5,-11.9,4.3).curveTo(-11.9,4,-11.6,3.9).lineTo(-11.7,3.4).curveTo(-11.7,3,-11.6,2.9).lineTo(-11.6,0).curveTo(-11.5,-0.1,-11.4,-1.2).curveTo(-11.4,-1.9,-11,-2).curveTo(-11.1,-2.1,-11.1,-2.2).curveTo(-11.2,-2.2,-11.4,-2.2).curveTo(-11.9,-2.1,-12.1,-2.6).lineTo(-12.3,-3.3).curveTo(-12.3,-3.9,-11.9,-4.1).curveTo(-11.3,-4.4,-8.8,-4.6).lineTo(-7.1,-4.7).curveTo(-6.6,-4.7,-4.8,-4.7).lineTo(-3.3,-4.9).lineTo(-0.2,-4.9).lineTo(-0,-4.7).lineTo(0.8,-4.7).curveTo(1,-4.8,1.3,-4.8).curveTo(1.3,-4.8,1.5,-4.9).curveTo(1.6,-5.1,1.8,-5.1).curveTo(2.1,-5.1,2.2,-4.5).lineTo(2.1,-3.7).curveTo(2.3,-3.3,2.3,-3.3).curveTo(2.3,-3,2,-2.9).curveTo(1.6,-2.7,1.4,-2.4).curveTo(1.2,-2,1.2,-1.9).curveTo(0.9,-1.7,0.3,-1.7).lineTo(0.1,-1.8).lineTo(-1.3,-1.8).curveTo(-1.4,-1.8,-1.4,-1.8).lineTo(-4.7,-1.8).curveTo(-4.8,-1.9,-5.1,-1.9).closePath().moveTo(-1,-0.5).lineTo(0.5,-0.5).curveTo(0.6,-0.4,1,-0.1).curveTo(1,-0.4,1.3,-0.4).curveTo(1.7,-0.4,1.7,0.4).curveTo(1.7,0.9,1.7,1).curveTo(1.5,1.2,0.7,1.5).lineTo(-2.5,1.5).curveTo(-2.8,1.4,-2.8,0.8).curveTo(-2.9,0.7,-2.9,0.6).curveTo(-2.9,0,-2.7,-0.1).curveTo(-2.5,-0.2,-2.2,-0.3).curveTo(-2.1,-0.4,-1.8,-0.4).curveTo(-1.7,-0.4,-1.5,-0.4).curveTo(-1.3,-0.5,-1,-0.5).closePath().moveTo(3.7,-5.5).lineTo(10.3,-5.4).curveTo(10.8,-5.4,11.2,-5.4).curveTo(11.5,-5.5,11.8,-5.5).curveTo(11.8,-5.5,11.9,-5.5).lineTo(11.9,-5.5).curveTo(12.1,-5.5,12.2,-5.4).curveTo(12.3,-5.3,12.3,-5.2).lineTo(12.3,-5.1).curveTo(12.3,-5.1,12.3,-5).curveTo(12.2,-5,12.2,-4.9).curveTo(12.2,-4.8,12.2,-4.7).lineTo(12.1,-3.4).lineTo(12.1,-3.3).curveTo(12.1,-3.2,12,-3.1).curveTo(11.9,-3,11.9,-3).curveTo(11.8,-2.9,11.5,-2.9).curveTo(11.4,-2.9,11.3,-2.9).curveTo(9.9,-2.9,9.4,-3.2).curveTo(8.9,-3.3,8.4,-3.3).curveTo(7.1,-3.3,7,-3.2).curveTo(6.9,-3.2,6,-3.2).lineTo(3.5,-3.2).curveTo(3.5,-3.2,3.4,-3.2).curveTo(3.4,-3.2,3.3,-3.2).curveTo(3,-3.2,3,-3.6).lineTo(3,-3.8).lineTo(3,-3.8).curveTo(3,-4,3.1,-4.2).curveTo(3.1,-4.5,3,-4.9).curveTo(3,-5.1,3,-5.2).curveTo(3,-5.2,3.1,-5.2).lineTo(3.1,-5.3).curveTo(3.2,-5.4,3.4,-5.5).closePath();
	this.shape_32.setTransform(7.7,0.4);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.6,25.7,12.7);


(lib.Pistol = function() {
	this.initialize();

	// Gun
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#999999").beginStroke().moveTo(6.2,-0.4).lineTo(6.1,0.4).lineTo(-6.2,0.2).curveTo(-6.2,0.1,-6.1,0).curveTo(-6.1,0,-6,-0).curveTo(-4.4,-0,-4.3,-0.1).curveTo(-4.2,-0.2,-4,-0.3).closePath();
	this.shape_33.setTransform(2.8,-3.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#333333").beginStroke().moveTo(-0.1,-3.4).curveTo(-0.2,-3.4,-0.3,-3.4).lineTo(-0.1,-3.6).curveTo(0.4,-4,0.8,-3.8).curveTo(1.3,-3.5,1.7,-4).lineTo(2.5,-4).lineTo(2.6,-3.9).lineTo(6.5,-3.9).curveTo(6.4,-3.9,6.4,-3.9).curveTo(6.3,-3.5,6.3,-3.4).closePath().moveTo(-5.8,-2.3).curveTo(-5.7,-2.8,-5.8,-3.1).lineTo(-4.4,-3.1).curveTo(-4.3,-3,-4,-2.9).curveTo(-4,-2.8,-4,-2.6).curveTo(-4,-2.5,-4,-2.2).curveTo(-4,-2.3,-3.9,-2.3).lineTo(-3.9,2.3).lineTo(-4.4,3.5).curveTo(-4.4,3.8,-4.4,4).curveTo(-4.8,3.8,-5.3,3.5).curveTo(-6.1,3.3,-6.5,3.3).curveTo(-5.9,2.1,-5.8,-2.3).closePath();
	this.shape_34.setTransform(2.3,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(0.2,-4.1).lineTo(-4.9,-4.1).lineTo(-5,-4.2).lineTo(-6,-4.2).lineTo(-6,-4.3).curveTo(-6.6,-4.1,-6.6,-3.5).curveTo(-6.5,-3.3,-6.5,-3.1).lineTo(-4.3,-3.1).curveTo(-3.3,-2.8,-2,-2.6).curveTo(-1.9,-2.6,-1.8,-2.5).curveTo(-1.2,-2.5,-0.4,-2.4).curveTo(-0.4,-3.2,1.8,-3.2).lineTo(6.6,-3.2).curveTo(6.7,-3.6,6.7,-3.9).lineTo(6.7,-4).lineTo(4.6,-3.9).lineTo(4.6,-4).lineTo(0.2,-4).closePath().moveTo(-0,-2.4).lineTo(6.4,-2.4).curveTo(6.4,-2.6,6.5,-2.9).curveTo(6.5,-2.9,6.6,-2.9).lineTo(2.7,-2.9).lineTo(2.6,-3).lineTo(1.8,-3).curveTo(1.4,-2.6,0.9,-2.8).curveTo(0.5,-3.1,0,-2.6).lineTo(-0.2,-2.4).curveTo(-0.1,-2.4,-0,-2.4).closePath().moveTo(-0.5,-1.5).curveTo(-0.5,-1.4,-0.4,-1.2).curveTo(-0.5,-1.1,-0.5,-0.9).curveTo(-0.5,-0.7,-0.4,-0.6).curveTo(-0.5,-0.1,-1,0.5).curveTo(-1.7,1.5,-2.8,1.5).lineTo(-3.1,1.5).curveTo(-3.2,1.4,-3.2,1.2).curveTo(-3.2,1,-2.4,0.6).curveTo(-2,0.4,-1.7,0.2).curveTo(-1.8,0.2,-1.9,0.2).curveTo(-2.4,0.2,-2.4,-0.3).curveTo(-2.4,-0.5,-2.4,-0.8).lineTo(-2.4,-1.4).curveTo(-2.9,-1.5,-3.2,-1.6).curveTo(-3.2,-1.5,-3.3,-1.5).lineTo(-3.2,0.9).curveTo(-3.2,3.1,-3.3,3.7).curveTo(-3.4,4.6,-3.8,5.3).curveTo(-3.6,5.4,-3.6,5.6).curveTo(-3.6,6,-4,6).curveTo(-4.1,6,-4.3,6).curveTo(-4.4,6.1,-4.4,6.2).curveTo(-4.4,6.1,-4.4,6).curveTo(-4.7,5.9,-4.9,5.8).curveTo(-5.1,5.5,-5.4,5.4).curveTo(-6.3,5.4,-6.6,5.1).curveTo(-6.8,5,-6.7,4.8).curveTo(-6.8,4.8,-7,4.8).curveTo(-7.6,4.8,-7.5,4.1).curveTo(-7.5,4,-7.1,2.3).curveTo(-6.8,0.7,-6.8,0.1).curveTo(-6.6,-1,-6.6,-2).curveTo(-6.5,-2.1,-6.4,-2.1).lineTo(-7.2,-2.2).curveTo(-7.2,-2.2,-7.3,-2.2).curveTo(-7.8,-2.2,-7.8,-2.6).curveTo(-7.8,-3.1,-7.6,-4.4).curveTo(-7.2,-5,-6.4,-5.2).curveTo(-6.2,-5.3,-6,-5.3).curveTo(-5.9,-5.4,-5.5,-5.5).curveTo(-4.4,-5.6,-3.4,-5.9).lineTo(6.8,-6.1).lineTo(7.1,-6.2).lineTo(7.6,-6.2).curveTo(7.5,-6,7.4,-5.7).curveTo(8,-5.4,7.6,-4.2).curveTo(7.9,-1.6,6.8,-1.6).curveTo(6.8,-1.6,6.7,-1.6).curveTo(6.7,-1.6,6.6,-1.5).lineTo(-0.2,-1.5).curveTo(-0.4,-1.5,-0.5,-1.5).closePath().moveTo(-0.9,-1.2).curveTo(-1.4,-1.3,-1.8,-1.3).curveTo(-1.7,-0.4,-1.6,-0.1).lineTo(-1.7,0.1).curveTo(-1.5,-0,-1.4,-0.1).curveTo(-1.3,-0.2,-1.1,-0.9).curveTo(-1.1,-1.1,-0.9,-1.2).closePath().moveTo(6.8,-5).lineTo(-3.4,-4.9).curveTo(-3.6,-4.8,-3.7,-4.7).curveTo(-3.8,-4.6,-5.4,-4.6).curveTo(-5.5,-4.6,-5.5,-4.6).curveTo(-5.6,-4.5,-5.6,-4.4).lineTo(6.7,-4.2).closePath().moveTo(-5.7,-1.3).curveTo(-5.8,3.1,-6.4,4.3).curveTo(-6,4.2,-5.2,4.5).curveTo(-4.7,4.7,-4.3,4.9).curveTo(-4.3,4.7,-4.3,4.5).lineTo(-3.8,3.3).lineTo(-3.8,-1.3).curveTo(-3.9,-1.3,-3.9,-1.2).curveTo(-3.9,-1.5,-3.9,-1.6).curveTo(-3.9,-1.8,-3.9,-1.9).curveTo(-4.2,-2,-4.3,-2.2).lineTo(-5.7,-2.1).curveTo(-5.6,-1.8,-5.7,-1.3).closePath();
	this.shape_35.setTransform(2.2,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#666666").beginStroke().moveTo(0.1,-0.7).lineTo(0.2,-0.7).lineTo(4.5,-0.6).lineTo(4.6,-0.6).lineTo(6.7,-0.6).lineTo(6.7,-0.6).curveTo(6.7,-0.3,6.6,0.2).lineTo(1.7,0.1).curveTo(-0.4,0.1,-0.5,0.9).curveTo(-1.3,0.8,-1.8,0.8).curveTo(-1.9,0.8,-2.1,0.8).curveTo(-3.4,0.6,-4.3,0.2).lineTo(-6.6,0.3).curveTo(-6.6,0.1,-6.7,-0.2).curveTo(-6.7,-0.8,-6.1,-0.9).lineTo(-6,-0.8).lineTo(-5,-0.8).lineTo(-5,-0.8).closePath();
	this.shape_36.setTransform(2.2,-2.5);

	// Fill
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#333333").beginStroke().moveTo(1.6,-5.1).lineTo(4.7,-5.1).lineTo(4.9,-4.9).lineTo(5.7,-4.9).curveTo(5.9,-5,6.2,-5).curveTo(6.3,-5,6.4,-5.1).curveTo(6.6,-5.3,6.8,-5.3).curveTo(7.1,-5.3,7.1,-4.7).lineTo(7,-3.9).curveTo(7.3,-3.5,7.3,-3.5).curveTo(7.3,-3.2,6.9,-3.1).curveTo(6.5,-2.9,6.4,-2.6).curveTo(6.2,-2.2,6.1,-2.1).curveTo(5.9,-1.9,5.2,-1.9).lineTo(5,-2).lineTo(3.6,-2).curveTo(3.6,-2,3.5,-2).lineTo(0.2,-2).curveTo(0.1,-2.1,-0.1,-2.1).lineTo(-2.2,-2.1).lineTo(-3.2,-2.4).lineTo(-3.7,-2.4).curveTo(-3.8,-2.2,-3.9,-2.1).curveTo(-4,-1.8,-4.1,-1.7).curveTo(-4.1,-1.6,-4,-1.3).curveTo(-4,-1,-4.1,-0.5).curveTo(-3.8,5.3,-5.5,5.3).curveTo(-6,5.3,-7,4.1).curveTo(-7,3.8,-6.7,3.7).lineTo(-6.7,3.2).curveTo(-6.7,2.8,-6.6,2.7).lineTo(-6.6,-0.2).curveTo(-6.6,-0.3,-6.4,-1.4).curveTo(-6.4,-2.1,-6.1,-2.2).curveTo(-6.1,-2.3,-6.1,-2.4).curveTo(-6.2,-2.4,-6.4,-2.4).curveTo(-6.9,-2.3,-7.2,-2.8).lineTo(-7.3,-3.5).curveTo(-7.3,-4.1,-6.9,-4.3).curveTo(-6.3,-4.6,-3.8,-4.8).lineTo(-2.1,-4.9).curveTo(-1.7,-4.9,0.2,-4.9).closePath();
	this.shape_37.setTransform(2.5,0.5);

	this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.3,15.6,12.4);


(lib.MuzzleFlashs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Flashes
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.9,-2.5).curveTo(-9.7,-0.9,-9.7,0.2).curveTo(-9.7,0.7,-9.3,1.5).curveTo(-8.9,2.3,-8.3,2.8).curveTo(-6.3,4.8,-5.3,5).curveTo(-4.7,5.1,-2.8,5.8).curveTo(-1.1,6.5,-0.6,6.5).curveTo(-0.4,6.5,-0.3,6.4).curveTo(-0.2,6.2,-0.1,6.2).curveTo(0.3,6.5,0.7,6.8).curveTo(1.4,7.3,2.8,7.3).curveTo(4.8,7.3,4.6,6.3).curveTo(4.5,5.5,6,5.8).curveTo(6.1,5.5,6,4.5).curveTo(6,3.8,6.3,3.6).curveTo(7.4,2.9,7.4,2.6).curveTo(7.2,2.3,7.2,1.6).lineTo(7.3,0.6).lineTo(9.6,0.6).curveTo(9.9,0.4,9.9,0.2).curveTo(9.9,-0.3,8.8,-0.8).curveTo(7.7,-1.4,7.7,-1.8).curveTo(7.7,-2.3,9,-3).curveTo(8.8,-3.3,7.9,-3.6).curveTo(7.1,-3.9,7.1,-4.2).curveTo(7.1,-4.3,7.4,-4.5).curveTo(7.9,-4.7,8.1,-5).lineTo(1.3,-5).curveTo(0.7,-5.2,0.6,-5.3).curveTo(0.4,-5.3,0.4,-5.6).curveTo(0.4,-5.7,0.9,-6.1).curveTo(1.5,-6.6,1.6,-6.9).lineTo(-1.3,-6.9).lineTo(-4,-5.5).lineTo(-4.3,-5.6).curveTo(-4.4,-5.7,-4.4,-5.8).curveTo(-4.4,-6.1,-3.5,-7.3).curveTo(-5.5,-6.8,-7.7,-5.2).curveTo(-9.9,-3.6,-9.9,-2.5).closePath();
	this.shape_38.setTransform(10,1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-10,-0.1).curveTo(-10,1,-8.5,2.7).curveTo(-6.9,4.6,-5.1,4.7).curveTo(-5.3,4.5,-5.3,4.2).curveTo(-5.3,4.1,-5.3,4).curveTo(-5.2,3.9,-5,3.9).curveTo(-5,3.9,-3,4.9).curveTo(-1,5.8,-0.6,5.8).lineTo(0.2,5.7).curveTo(-0.1,5,-2.1,3.8).lineTo(-2.1,3.1).lineTo(-1.8,3.1).lineTo(0,4.2).curveTo(2.1,5.3,3.4,5.3).lineTo(7.4,4.5).curveTo(6.4,3.9,6.2,3.7).curveTo(5.8,3.5,5.8,3).curveTo(5.8,2.7,5.9,2.7).curveTo(6,2.5,6.5,2.6).lineTo(10,2.5).curveTo(9.1,2,8,1).curveTo(6.8,-0.2,6.8,-0.7).lineTo(6.8,-1.2).curveTo(7,-1.4,7.8,-1.4).lineTo(9.6,-1.2).curveTo(9.9,-1,9.9,-1.3).curveTo(9.9,-1.9,6.8,-2.3).curveTo(6.4,-2.5,6.4,-2.6).curveTo(6.4,-2.8,6.8,-3.1).curveTo(6.9,-3.2,7.4,-3.6).curveTo(6.9,-3.7,6.3,-3.9).curveTo(5.1,-4.1,2.5,-4.3).curveTo(2.2,-4.5,2.2,-4.6).curveTo(2.2,-5.1,3.4,-5.8).lineTo(1.4,-5.8).curveTo(-0.1,-5.5,-2.2,-4.5).curveTo(-4.3,-3.5,-4.8,-3.3).lineTo(-5.2,-3.4).lineTo(-5.2,-3.9).curveTo(-4.9,-4.1,-4.6,-4.8).curveTo(-7.7,-4.9,-9.1,-3.1).curveTo(-10,-1.8,-10,-0.1).closePath();
	this.shape_39.setTransform(10.6,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.1,-0.8).curveTo(-12.1,-1.8,-10.4,-3.3).curveTo(-8.4,-5,-6.1,-5).curveTo(-5.7,-5,-5.5,-4.8).curveTo(-5.5,-4.9,-5.5,-4.7).curveTo(-5.5,-4.6,-5.9,-4.2).lineTo(-6.3,-3.7).curveTo(-5.6,-3.9,-4.7,-4.5).curveTo(-3.4,-4.9,-0,-5.1).curveTo(0.2,-4.9,0.3,-4.7).curveTo(0.3,-4.6,-0,-4.2).curveTo(-0.3,-3.8,-0.3,-3.7).lineTo(8.7,-3.2).lineTo(9,-2.9).curveTo(9,-2.6,8.2,-2.3).curveTo(9.3,-2.3,10.5,-2).curveTo(11.8,-1.7,11.8,-1.4).curveTo(11.8,-1.1,11,-0.7).curveTo(10.1,-0.4,9.7,-0.3).curveTo(12.1,-0.4,12.2,0.3).curveTo(12.2,0.7,10.9,1.2).curveTo(9.5,1.7,8.1,1.7).curveTo(8.4,1.9,9.1,2.1).curveTo(9.4,2.3,9.4,2.4).curveTo(9.4,2.7,8.4,3.2).curveTo(7,3.9,5.1,3.9).curveTo(3.8,3.9,2.9,3.4).curveTo(2.2,2.9,1.9,2.8).lineTo(1.8,2.8).curveTo(2.1,3.3,2.3,3.5).curveTo(2.4,3.6,2.4,3.8).curveTo(2.4,4.7,0.4,4.7).curveTo(-0.9,4.7,-1.6,4.2).curveTo(-2.3,3.8,-2.4,3.8).curveTo(-2,4.4,-2,4.7).curveTo(-2,4.8,-2.3,5.1).curveTo(-4.4,4.8,-6.1,3.8).curveTo(-8.1,2.5,-9,2.2).curveTo(-9,2.3,-8.9,2.8).curveTo(-8.9,3.2,-9.4,3.2).curveTo(-10.1,3.2,-11,2.1).curveTo(-11.8,1.2,-11.9,0.6).curveTo(-12.1,0.3,-12.2,-0.2).curveTo(-12.2,-0.4,-12.1,-0.5).curveTo(-12.1,-0.6,-12.1,-0.8).closePath();
	this.shape_40.setTransform(12.1,0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.6,-4.1).curveTo(-7,-4.9,-5.4,-5.9).curveTo(-3.9,-6.9,-3.3,-6.9).lineTo(-2.7,-6.8).lineTo(-2.7,-6.5).curveTo(-2.7,-6.3,-3,-6).curveTo(-2.8,-6.1,-1.3,-6.7).curveTo(0,-7.2,0.8,-7.6).curveTo(1.1,-7.3,1,-7).curveTo(1.7,-7.2,1.8,-7.5).curveTo(2.3,-7.7,5.8,-7.7).lineTo(6.1,-7.4).curveTo(6.1,-7.1,5.6,-6.5).curveTo(5.1,-5.9,5,-5.8).curveTo(7.1,-5.7,7.1,-5.2).curveTo(7.1,-4.9,6.1,-3.9).curveTo(7.2,-3.8,7.5,-3.8).curveTo(7.8,-3.7,7.8,-3.4).curveTo(7.8,-3.1,6.1,-1).lineTo(7.2,-0.9).curveTo(7.4,-0.9,9.3,-1.5).lineTo(9.7,-1.4).lineTo(9.8,-1.1).curveTo(7.3,1.1,6.8,1.3).curveTo(8,1.5,8,2).curveTo(8,2.4,7.1,2.8).curveTo(6,3.2,5.8,3.3).curveTo(7.8,4.7,7.8,5.8).curveTo(7.8,5.9,7.6,5.9).curveTo(7.3,5.9,6.7,6.2).lineTo(4,6.3).curveTo(4.1,6.6,4.3,6.9).curveTo(4.5,7,4.5,7.1).curveTo(4.5,7.5,4.4,7.6).curveTo(4.1,7.7,2.8,7.7).curveTo(0.9,7.7,-0.2,6.9).curveTo(-1.3,6.1,-1.7,6.1).curveTo(-2.3,6.1,-3.3,5.4).curveTo(-4.3,4.7,-4.5,4).curveTo(-4.6,4.2,-5,4.2).curveTo(-5.4,4.2,-7.9,1.4).curveTo(-8,1.4,-8.2,1.5).curveTo(-8.3,1.6,-8.4,1.6).curveTo(-9.6,1.6,-9.8,-0.8).curveTo(-9.8,-1.8,-9.4,-2.3).curveTo(-8.5,-3.2,-7.6,-4.1).closePath();
	this.shape_41.setTransform(9.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-6.2,19.8,14.5);


(lib.ElvenDagger = function() {
	this.initialize();

	// Artwork
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#DCB67C").beginStroke().moveTo(-0.2,0.1).lineTo(-0.1,-0.1).lineTo(0.3,-0.6).curveTo(0.3,-0.6,0.3,-0.6).lineTo(0.4,-0.9).curveTo(0.7,-0.2,0.7,0.9).curveTo(0.5,0.9,0.2,0.8).curveTo(-0.2,0.7,-0.3,0.6).curveTo(-0.6,0.1,-0.7,-0.2).curveTo(-0.6,-0.2,-0.6,-0.2).curveTo(-0.3,0.1,-0.2,0.1).closePath();
	this.shape_42.setTransform(0.3,3.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#493036").beginStroke().moveTo(0.5,-2.8).lineTo(0.4,-1.7).curveTo(0.3,-0.5,0.3,-0).lineTo(0.4,1.3).curveTo(0.4,1.8,0.2,2.6).lineTo(0.1,2.8).lineTo(-0.2,2.5).curveTo(-0.3,1.8,-0.5,-2.3).curveTo(0.1,-2.5,0.5,-2.8).closePath();
	this.shape_43.setTransform(0,0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000000").beginStroke().moveTo(1.9,-4).curveTo(1.9,-3.2,2,-3.1).curveTo(2.2,-1.9,2,-1.1).curveTo(1.9,-0.8,1.9,-0.1).curveTo(2,0.7,2,0.8).curveTo(1.7,2.1,2.1,2.7).lineTo(2.1,2.8).curveTo(2.1,2.9,2.1,2.9).lineTo(2,3).curveTo(2,3,2,3).lineTo(1.9,3.1).lineTo(1.7,3.3).curveTo(1.5,3.5,1.5,3.9).lineTo(1.5,3.8).curveTo(1.5,4.2,1.4,4.8).lineTo(1.2,6.1).lineTo(1.4,8.2).lineTo(1.5,8.1).lineTo(1.9,10.8).curveTo(1.8,10.8,1.8,10.8).curveTo(1.8,10.8,1.8,10.9).curveTo(1.7,10.9,1.7,10.9).curveTo(1.3,11.5,0.2,10.7).curveTo(-0.4,10.2,-0.3,9.4).lineTo(-0.1,9.1).curveTo(-0.3,7.9,-0.4,4).curveTo(-0.4,4,-0.4,4).lineTo(-0.4,4).lineTo(-0.3,3.9).lineTo(-0.3,3.9).curveTo(-0.3,3.9,-0.3,3.9).lineTo(-0.3,3.9).curveTo(-0.2,0.1,-0.2,-1.8).curveTo(-0.2,-5.1,-1.5,-6.7).curveTo(-1.5,-6.7,-1.5,-6.7).lineTo(-1.5,-6.7).lineTo(-1.4,-6.7).lineTo(-1.4,-6.8).curveTo(-1.4,-7,-1.4,-7.5).curveTo(-1.5,-8.6,-1.5,-8.9).curveTo(-1.6,-9,-1.8,-9.9).curveTo(-2,-10.4,-2,-10.7).lineTo(-2.1,-10.8).lineTo(-2,-10.9).lineTo(-2,-10.9).lineTo(-2,-11).lineTo(-2,-11).lineTo(-1.9,-11).lineTo(-1.9,-11).lineTo(-1.9,-11.1).lineTo(-1.8,-11.1).lineTo(-1.7,-11.1).lineTo(-1.7,-11.1).curveTo(-1.5,-11,-1.4,-10.9).curveTo(0.4,-9.4,1.8,-5).curveTo(1.9,-4.7,1.9,-4).closePath().moveTo(0.2,2.1).lineTo(0.2,2.1).curveTo(0.2,3.3,0.1,3.8).curveTo(0.4,3.7,0.5,3.7).curveTo(0.9,3.3,1.2,3.4).curveTo(1.3,3.3,1.4,3.1).lineTo(1.5,3).curveTo(1.5,3,1.6,3).curveTo(1.6,2.9,1.7,2.9).lineTo(1.7,2.9).lineTo(1.7,2.9).curveTo(1.5,2.8,1.4,2.2).lineTo(1.4,2.2).lineTo(1.5,2.2).lineTo(1.4,2.2).curveTo(1.4,2.1,1.4,2.1).curveTo(1.4,1.6,1.3,0.9).curveTo(1.4,-0.6,1.5,-1.1).curveTo(1.9,-2.5,1.4,-4.9).curveTo(0.5,-8.1,-1.4,-10.2).curveTo(-1.2,-9.5,-1.1,-9).lineTo(-1,-9).curveTo(-1,-8.9,-1,-8.8).curveTo(-1,-8.8,-1,-8.7).curveTo(-0.8,-7.7,-1,-6.8).curveTo(0.1,-5.9,0.3,-1.1).curveTo(0.3,0.9,0.2,2.1).closePath().moveTo(1,3.9).curveTo(0.6,4.1,-0,4.3).curveTo(0.2,8.4,0.3,9.1).lineTo(0.6,9.4).lineTo(0.7,9.2).curveTo(0.9,8.4,0.9,7.9).lineTo(0.8,6.6).curveTo(0.8,6.1,0.9,4.9).closePath().moveTo(0.6,9.9).curveTo(0.5,9.9,0.2,9.6).curveTo(0.1,9.6,0.1,9.6).curveTo(0.2,9.9,0.5,10.4).curveTo(0.6,10.5,1,10.6).curveTo(1.3,10.7,1.5,10.7).curveTo(1.4,9.5,1.2,8.9).lineTo(1.1,9.2).curveTo(1.1,9.2,1.1,9.2).lineTo(0.7,9.7).closePath();
	this.shape_44.setTransform(-0.4,-5.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#CCCCCC").beginStroke().moveTo(0.7,1.3).lineTo(0.7,1.4).lineTo(0.3,1).curveTo(0.2,0.8,0.3,-0.1).curveTo(0.3,-0.9,0.2,-1.2).lineTo(0.2,-1.3).lineTo(0.1,-1.4).curveTo(-0.1,-1.8,-0.3,-2.5).curveTo(-0.4,-3.2,-0.4,-3.5).curveTo(-0.2,-3.2,-0.1,-2.2).curveTo(-0,-1.7,0.2,-1.5).lineTo(0.4,-1.3).curveTo(0.5,-1.1,0.4,0.1).curveTo(0.3,1,0.7,1.3).closePath().moveTo(1.3,5.4).lineTo(1.2,5.5).curveTo(0.9,4.9,0.9,4.1).curveTo(0.9,3.6,1,2.5).curveTo(1,0.6,0.7,-0.6).curveTo(0.2,-2.6,0,-3.2).curveTo(-0.4,-4.5,-1.1,-5.4).curveTo(-1.1,-5.5,-1.1,-5.5).curveTo(-1.2,-5.6,-1.2,-5.7).lineTo(-1.2,-5.7).curveTo(-1.4,-6.1,-1.5,-6.9).curveTo(0.4,-4.8,1.2,-1.6).curveTo(1.8,0.8,1.4,2.2).curveTo(1.3,2.7,1.2,4.2).curveTo(1.3,4.9,1.3,5.4).closePath().moveTo(0.1,5.4).lineTo(0.1,5.4).curveTo(0.3,4.8,0.5,3.5).curveTo(0.6,3.1,0.3,2).curveTo(0.9,3.4,0.4,4.8).lineTo(0.5,4.6).lineTo(0.7,4.7).lineTo(0.4,5).lineTo(0.4,4.9).curveTo(0.3,5.2,0.1,5.4).closePath().moveTo(0.5,5.9).curveTo(0.3,6.1,0.4,6.4).curveTo(0.4,6.7,0.5,6.8).lineTo(0.4,6.9).lineTo(0.2,6.6).curveTo(0.2,6,0.4,5.7).lineTo(0.8,6).lineTo(0.8,6.1).lineTo(0.6,6.4).curveTo(0.6,6.2,0.7,6).closePath().moveTo(-0.6,-2.9).curveTo(-1,-3.1,-0.8,-4.5).curveTo(-0.6,-3.5,-0.5,-3).closePath();
	this.shape_45.setTransform(-0.2,-9.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#DADADA").beginStroke().moveTo(0.5,0.4).curveTo(0.1,0.2,0.2,-0.8).curveTo(0.3,-1.9,0.2,-2.2).lineTo(-0,-2.3).curveTo(-0.2,-2.5,-0.3,-3.1).curveTo(-0.4,-4,-0.6,-4.4).curveTo(-0.6,-4.1,-0.5,-3.3).curveTo(-0.3,-2.6,-0.1,-2.2).lineTo(0,-2.1).lineTo(0,-2).curveTo(0.1,-1.7,0.1,-1).curveTo(0,-0,0.1,0.2).lineTo(0.5,0.5).closePath().moveTo(-0.1,4.6).curveTo(-0,3.3,-0.1,1.4).curveTo(-0.3,-3.4,-1.4,-4.4).curveTo(-1.1,-5.3,-1.3,-6.2).curveTo(-0.6,-5.4,-0.2,-4).curveTo(0,-3.4,0.5,-1.4).curveTo(0.8,-0.3,0.8,1.6).curveTo(0.7,2.7,0.7,3.2).curveTo(0.7,4.1,1,4.6).lineTo(1.1,4.6).curveTo(1.1,4.6,1.1,4.6).lineTo(1.1,4.6).lineTo(1,4.7).lineTo(1.1,4.7).curveTo(1.2,5.2,1.3,5.3).lineTo(1.4,5.4).lineTo(1.3,5.4).curveTo(1.3,5.4,1.2,5.4).curveTo(1.2,5.5,1.2,5.5).lineTo(1.1,5.6).curveTo(1,5.7,0.9,5.9).curveTo(0.6,5.8,0.2,6.1).curveTo(0,6.2,-0.3,6.2).curveTo(-0.1,5.8,-0.1,4.6).curveTo(0.1,4.3,0.2,4.1).lineTo(0.2,4.1).lineTo(0.5,3.9).lineTo(0.3,3.8).lineTo(0.2,3.9).curveTo(0.7,2.5,0.1,1.2).curveTo(0.4,2.2,0.3,2.7).curveTo(0.1,3.9,-0.1,4.6).closePath().moveTo(0.3,5).lineTo(0.5,5.2).curveTo(0.4,5.4,0.4,5.5).lineTo(0.6,5.3).lineTo(0.6,5.1).lineTo(0.2,4.8).curveTo(0,5.2,-0,5.8).lineTo(0.2,6).lineTo(0.3,5.9).curveTo(0.2,5.9,0.2,5.6).curveTo(0.1,5.2,0.3,5).closePath().moveTo(-0.8,-3.7).lineTo(-0.7,-3.8).curveTo(-0.8,-4.3,-1,-5.3).curveTo(-1.2,-4,-0.8,-3.7).closePath();
	this.shape_46.setTransform(0,-8.3);

	this.addChild(this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-17,4.2,22.3);


(lib.giftedclientchatBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Text
	this.Text = new cjs.Text("...", "bold 14px Trebuchet MS");
	this.Text.textAlign = "center";
	this.Text.lineHeight = 16;
	this.Text.lineWidth = 172;
	this.Text.setTransform(-4,-47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Text,p:{x:84.325,y:-26.7,lineWidth:172}}]}).to({state:[{t:this.Text,p:{x:84.275,y:-39.7,lineWidth:172}}]},1).to({state:[{t:this.Text,p:{x:84.075,y:-59.3,lineWidth:172}}]},1).to({state:[{t:this.Text,p:{x:83.375,y:-78,lineWidth:170}}]},1).to({state:[{t:this.Text,p:{x:84.775,y:-96.6,lineWidth:172}}]},1).wait(1));

	// Triangle
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill().beginStroke("#000000").setStrokeStyle(4,1,1).moveTo(6.2,-8.9).lineTo(1.1,9.8).moveTo(-0.5,9.8).lineTo(-1.8,5.3).moveTo(-2.5,3).lineTo(-6.2,-9.9);
	this.shape_47.setTransform(-0.2,-7.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,5.5).lineTo(-6.3,-7.4).lineTo(-4.6,-7.8).curveTo(-4.6,-8.1,-4.5,-8.4).curveTo(-5.1,-9,-5.2,-10.2).curveTo(-5.2,-11.9,-4.1,-12.5).lineTo(-1.1,-12.5).curveTo(-0.9,-12.4,-0.7,-12.2).curveTo(-0.6,-12.4,-0.4,-12.5).lineTo(2.1,-12.5).curveTo(2.1,-12.5,6,-11.9).curveTo(6.3,-11.3,6.3,-10.4).curveTo(6.3,-9.6,5.8,-8.9).curveTo(5.4,-8.3,4.8,-8).curveTo(5,-7.8,5.1,-7.5).curveTo(5.5,-6.9,6,-6.5).lineTo(1,12.3).curveTo(0.9,12.2,0.8,12.2).curveTo(0,12.2,-0.7,12.3).lineTo(-2,7.8).curveTo(-2.6,10,-3.2,12.1).curveTo(-3.4,12.1,-3.9,12.5).curveTo(-4.3,12.2,-4.4,12).curveTo(-4.5,11.9,-4.5,11.4).curveTo(-4.5,10.6,-2.8,5.9).curveTo(-2.7,5.7,-2.6,5.5).closePath();
	this.shape_48.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).wait(5));

	// Background
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#FFFFFF").beginStroke().moveTo(46,-17.2).curveTo(52.3,-16.8,56,-16.6).curveTo(57,-16.5,64.5,-14.7).lineTo(71.2,-14.7).curveTo(71.7,-14.9,73.6,-15.1).curveTo(75.6,-15.4,76.4,-15.4).curveTo(84,-15.4,89.4,-9.5).curveTo(95.1,-3.3,95.1,5.9).curveTo(95.1,9.6,88.7,11.9).curveTo(81.5,14.4,66.9,14.7).lineTo(52.7,14.7).curveTo(51.5,14.4,50.2,14.3).lineTo(40.5,14.3).curveTo(35.8,14.6,35.3,14.7).lineTo(24.7,14.8).curveTo(23.9,14.9,23.9,14.9).lineTo(17.5,15).curveTo(14.1,15.5,13.9,15.7).lineTo(2.5,15.8).curveTo(1.7,15.9,1.7,15.9).lineTo(-7.9,15.9).curveTo(-9.4,14.9,-11.3,15.2).curveTo(-14.3,15.5,-15.8,15.3).lineTo(-35,15.3).curveTo(-35.9,15.4,-36.5,16.3).curveTo(-37.1,17.2,-40.2,17.2).curveTo(-43.3,17.2,-45.8,16.5).lineTo(-64.7,16.4).curveTo(-70.7,15.8,-75.3,15).lineTo(-86.4,14.9).curveTo(-90.1,14.3,-92.6,10.3).curveTo(-95.1,6.3,-95.1,1.3).curveTo(-95.1,-2.2,-94.9,-3).curveTo(-94.4,-5,-92,-7.9).curveTo(-91.1,-9.3,-90.3,-10.2).curveTo(-88.9,-11.8,-87.2,-12.4).curveTo(-84.5,-13.3,-80.9,-14.3).curveTo(-77.3,-15.2,-75.8,-15.7).lineTo(-75,-15.5).lineTo(-56.6,-15.4).curveTo(-56.3,-15.2,-53.9,-14.8).curveTo(-51.5,-14.5,-50.8,-14.5).curveTo(-50,-14.5,-48.3,-14.7).curveTo(-46.5,-14.9,-45.7,-15.2).lineTo(-37,-15.2).lineTo(-36.2,-15.4).lineTo(-18.5,-15.4).lineTo(-17.8,-15.2).lineTo(-10.3,-15.2).curveTo(-10,-15.3,-4,-15.7).curveTo(1.8,-16.2,2.5,-16.4).lineTo(17.1,-16.4).curveTo(17.8,-16.4,18.1,-16.1).curveTo(18.5,-15.7,19.5,-15.5).lineTo(35.5,-15.5).curveTo(37.2,-15.9,40.7,-16.3).curveTo(44.3,-16.8,46,-17.2).closePath();
	this.shape_49.setTransform(-1.6,-34.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000000").beginStroke().moveTo(51.7,-21).curveTo(52.8,-20.8,56.4,-19.7).curveTo(61,-18.6,67.8,-18.6).curveTo(69.9,-18.6,72.6,-18.9).curveTo(75.3,-19.3,76.3,-19.3).curveTo(88.4,-19.3,94.4,-10.2).curveTo(98.8,-3.4,98.8,6).curveTo(98.8,11,92.2,14.5).curveTo(83.8,18.9,67.5,18.5).lineTo(52.2,18.5).curveTo(50.1,18.1,49.6,18).lineTo(41,18).curveTo(36.1,18.3,35.5,18.5).lineTo(25.5,18.5).lineTo(24.7,18.7).lineTo(18,18.8).lineTo(14.5,19.5).lineTo(3,19.5).lineTo(2.2,19.7).lineTo(-8.8,19.7).curveTo(-9.3,19.7,-10.1,19.4).curveTo(-11.7,19.2,-16.3,19).lineTo(-33.3,19).curveTo(-33.7,19.2,-34.6,20.1).curveTo(-36.2,21,-39.9,21).curveTo(-43.5,21,-46.3,20.3).lineTo(-65.3,20.2).curveTo(-69.7,19.2,-71.5,19.1).curveTo(-75,18.8,-75.5,18.8).lineTo(-87.3,18.7).curveTo(-91,19.4,-94.2,15.6).curveTo(-96.2,13.1,-97.2,10.4).curveTo(-98.6,6.5,-98.7,5.3).curveTo(-98.8,4.8,-98.8,1.1).curveTo(-98.8,-3.7,-98.7,-4.1).curveTo(-98.3,-6.3,-95.7,-9.9).curveTo(-94.7,-11.5,-93.9,-12.4).curveTo(-92.6,-14,-90,-15.3).curveTo(-89.3,-15.7,-87.9,-16.1).curveTo(-86.3,-16.5,-84.7,-17.2).curveTo(-84.1,-17.5,-83.8,-18.4).curveTo(-83.5,-19.2,-82,-19.5).lineTo(-75.5,-19.5).curveTo(-74.7,-19.4,-74.7,-19.4).lineTo(-56.3,-19.3).curveTo(-50.7,-18.4,-50.6,-18.4).lineTo(-46.5,-19).lineTo(-37.3,-19.1).curveTo(-37.2,-19.2,-36.5,-19.3).lineTo(-18,-19.3).curveTo(-17.2,-19.2,-17.2,-19.1).lineTo(-10.5,-19.1).curveTo(-10.1,-19.4,-4.8,-19.8).curveTo(1.8,-20.2,2.2,-20.3).lineTo(17.5,-20.3).curveTo(19.7,-19.6,20.1,-19.4).lineTo(35.1,-19.4).curveTo(35.7,-19.5,39.5,-20.1).curveTo(43.8,-20.8,45.2,-21).lineTo(45.2,-21).closePath().moveTo(46,-17.2).curveTo(44.3,-16.8,40.7,-16.4).curveTo(37.2,-16,35.5,-15.5).lineTo(19.5,-15.5).curveTo(18.5,-15.8,18.1,-16.1).curveTo(17.8,-16.4,17.1,-16.5).lineTo(2.5,-16.5).curveTo(1.8,-16.2,-4,-15.8).curveTo(-10,-15.3,-10.3,-15.3).lineTo(-17.8,-15.3).lineTo(-18.5,-15.5).lineTo(-36.2,-15.5).lineTo(-37,-15.3).lineTo(-45.7,-15.2).curveTo(-46.5,-15,-48.3,-14.7).curveTo(-50,-14.5,-50.8,-14.5).curveTo(-51.5,-14.5,-53.9,-14.9).curveTo(-56.3,-15.3,-56.6,-15.5).lineTo(-75,-15.5).lineTo(-75.8,-15.7).curveTo(-77.3,-15.3,-80.9,-14.3).curveTo(-84.5,-13.4,-87.2,-12.5).curveTo(-88.9,-11.9,-90.3,-10.2).curveTo(-91.1,-9.3,-92,-8).curveTo(-94.4,-5.1,-94.9,-3.1).curveTo(-95.1,-2.3,-95.1,1.3).curveTo(-95.1,6.3,-92.6,10.2).curveTo(-90.1,14.3,-86.4,14.9).lineTo(-75.3,15).curveTo(-70.7,15.7,-64.7,16.4).lineTo(-45.8,16.5).curveTo(-43.3,17.1,-40.2,17.1).curveTo(-37.1,17.1,-36.5,16.3).curveTo(-35.9,15.3,-35,15.2).lineTo(-15.8,15.2).curveTo(-14.3,15.4,-11.3,15.1).curveTo(-9.4,14.9,-7.9,15.9).lineTo(1.7,15.9).curveTo(1.7,15.8,2.5,15.7).lineTo(13.9,15.6).curveTo(14.1,15.5,17.5,15).lineTo(23.9,14.9).curveTo(23.9,14.8,24.7,14.7).lineTo(35.3,14.6).curveTo(35.8,14.5,40.5,14.2).lineTo(50.2,14.2).curveTo(51.5,14.3,52.7,14.6).lineTo(66.9,14.6).curveTo(81.5,14.3,88.7,11.8).curveTo(95.1,9.6,95.1,5.9).curveTo(95.1,-3.4,89.4,-9.5).curveTo(84,-15.5,76.4,-15.5).curveTo(75.6,-15.5,73.6,-15.2).curveTo(71.7,-14.9,71.2,-14.8).lineTo(64.5,-14.8).curveTo(57,-16.5,56,-16.6).curveTo(52.3,-16.8,46,-17.2).closePath();
	this.shape_50.setTransform(-1.6,-34.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#FFFFFF").beginStroke().moveTo(63.2,-22.6).lineTo(81.9,-22.5).curveTo(91.5,-20.6,94.1,-16.9).curveTo(95.3,-15,95.3,-9.4).curveTo(95.3,-7.9,94.7,0.1).curveTo(94.1,7.9,94.1,8.2).curveTo(93.7,9.8,93.3,12.7).curveTo(92.9,15.7,92.6,17).curveTo(91.9,19.8,86.5,20.7).curveTo(79.6,21.3,76.1,22.1).lineTo(20.7,22.2).curveTo(18.4,22.3,16.6,22.7).curveTo(14.6,23.3,12.9,23.6).lineTo(3,23.6).curveTo(2.1,23.4,-0.1,22.9).curveTo(-2.5,22.5,-3,22.4).lineTo(-13.2,22.3).curveTo(-15.8,21.7,-20,21.2).lineTo(-27.9,21.1).curveTo(-28,21,-28.8,20.9).lineTo(-47.3,20.9).curveTo(-50.9,21.6,-53.4,21.8).curveTo(-55.5,22,-56.8,22.2).lineTo(-67.9,22.3).lineTo(-75.4,20.8).curveTo(-76.8,20.5,-81.2,20.3).curveTo(-84.4,20.2,-87,18.9).curveTo(-89.3,17.8,-90.9,15.3).curveTo(-92.1,13.5,-92.6,11.4).curveTo(-93.1,9.5,-94.1,4.4).curveTo(-95.3,-1.9,-95.3,-3.7).curveTo(-95.3,-8.9,-94,-14.7).curveTo(-93.5,-16.9,-92.8,-17.7).curveTo(-91.5,-19,-87.6,-19.4).curveTo(-86.7,-19.5,-82.2,-21.2).curveTo(-78.5,-22.5,-74,-22.5).curveTo(-67.2,-22.5,-62.4,-21.9).curveTo(-57.6,-21.3,-54.1,-21.3).curveTo(-48.1,-21.3,-43,-22.3).curveTo(-38.5,-23.3,-37.7,-23.5).curveTo(-31.3,-23.7,-30.7,-23.5).curveTo(-30.9,-23.1,-29.8,-22.8).lineTo(-10.5,-22.8).curveTo(-8.4,-22.6,-7.3,-22.4).curveTo(-6.4,-22.1,-6,-22.1).lineTo(0.5,-22.1).curveTo(5.5,-23.3,7.1,-23.1).curveTo(7.9,-23,8.5,-22.8).lineTo(14.7,-22.8).curveTo(15.2,-23,17.3,-23.1).curveTo(19.2,-23.3,19.8,-23.3).curveTo(22.9,-23.3,23.7,-23.1).lineTo(49.9,-23).lineTo(50.7,-22.8).lineTo(62.4,-22.8).closePath();
	this.shape_51.setTransform(-0.9,-41.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000000").beginStroke().moveTo(63.6,-22.6).lineTo(62.8,-22.8).lineTo(51.1,-22.9).lineTo(50.3,-23.1).lineTo(24.1,-23.1).curveTo(23.3,-23.3,20.2,-23.3).curveTo(19.6,-23.3,17.7,-23.2).curveTo(15.6,-23,15.1,-22.9).lineTo(8.9,-22.8).curveTo(8.3,-23.1,7.5,-23.1).curveTo(5.9,-23.3,0.9,-22.1).lineTo(-5.6,-22.1).curveTo(-6,-22.2,-6.9,-22.4).curveTo(-8,-22.7,-10.1,-22.8).lineTo(-29.4,-22.9).curveTo(-30.5,-23.2,-30.3,-23.5).curveTo(-30.9,-23.7,-37.3,-23.6).curveTo(-38.1,-23.4,-42.6,-22.3).curveTo(-47.7,-21.4,-53.7,-21.4).curveTo(-57.2,-21.4,-62,-22).curveTo(-66.8,-22.6,-73.6,-22.6).curveTo(-78.1,-22.6,-81.8,-21.2).curveTo(-86.3,-19.6,-87.2,-19.5).curveTo(-91.1,-19,-92.4,-17.7).curveTo(-93.1,-17,-93.6,-14.7).curveTo(-94.9,-8.9,-94.9,-3.7).curveTo(-94.9,-1.9,-93.7,4.4).curveTo(-92.7,9.4,-92.2,11.4).curveTo(-91.7,13.4,-90.5,15.3).curveTo(-88.9,17.7,-86.6,18.9).curveTo(-84,20.2,-80.8,20.3).curveTo(-76.4,20.5,-75,20.8).lineTo(-67.5,22.3).lineTo(-56.4,22.2).curveTo(-55.1,21.9,-53,21.7).curveTo(-50.5,21.5,-46.9,20.9).lineTo(-28.4,20.9).curveTo(-27.6,21,-27.5,21).lineTo(-19.6,21.1).curveTo(-15.4,21.7,-12.8,22.3).lineTo(-2.6,22.4).curveTo(-2.1,22.4,0.3,22.9).curveTo(2.5,23.3,3.4,23.5).lineTo(13.3,23.5).curveTo(15,23.2,17,22.7).curveTo(18.8,22.3,21.1,22.1).lineTo(76.5,22).curveTo(80,21.2,86.9,20.6).curveTo(92.3,19.8,93,16.9).curveTo(93.3,15.7,93.7,12.7).curveTo(94.1,9.7,94.5,8.2).curveTo(94.5,7.9,95.1,0).curveTo(95.7,-7.9,95.7,-9.5).curveTo(95.7,-15.1,94.5,-16.9).curveTo(91.9,-20.7,82.3,-22.6).closePath().moveTo(51.9,-26.7).lineTo(63.6,-26.6).curveTo(64.3,-26.5,64.4,-26.5).lineTo(83.1,-26.4).curveTo(95.4,-23,98.3,-18.6).curveTo(99.4,-16.9,99.5,-14.3).curveTo(99.5,-11.3,99.5,-9.6).curveTo(99.5,-7.3,98.8,1.3).curveTo(98.1,9.4,98,10.3).curveTo(97.5,13.5,97.2,15.2).curveTo(96.7,18.3,95.7,20.2).curveTo(94.2,23.2,88.6,24.2).curveTo(81.2,25,76.9,25.9).lineTo(21.9,25.9).curveTo(19.9,26.4,18,26.7).curveTo(16.2,26.9,14.1,27.4).lineTo(2.6,27.4).lineTo(-3.4,26.2).lineTo(-13.4,26.1).lineTo(-20.4,24.9).lineTo(-28.1,24.9).lineTo(-28.9,24.7).lineTo(-46.3,24.7).curveTo(-48,25,-55.9,26.1).lineTo(-68.1,26.1).curveTo(-72.5,25.1,-77.9,24.3).curveTo(-78.5,24.2,-83.5,23.4).curveTo(-88.3,22.5,-89.3,21.9).curveTo(-91.9,20,-93.7,17.3).curveTo(-95.2,15,-95.9,12.7).curveTo(-96.2,11.6,-97.7,8).curveTo(-98.9,5,-99.2,3.4).curveTo(-99.7,0.5,-99.4,-5.6).curveTo(-99.4,-15.6,-95.8,-20).curveTo(-92.2,-24.4,-82.1,-26.6).lineTo(-69.6,-26.6).curveTo(-56.3,-25.2,-55.5,-25.2).curveTo(-48.7,-25.2,-43,-26.2).curveTo(-38.5,-27.3,-37.9,-27.3).lineTo(-37.9,-27.4).lineTo(-30.9,-27.4).curveTo(-29.2,-27.2,-28.5,-26.7).lineTo(-9.4,-26.6).curveTo(-7.1,-26.2,-6.6,-26.1).curveTo(-5.8,-26,-2.5,-26).curveTo(4.5,-26.1,8.1,-26.6).lineTo(14.3,-26.7).curveTo(15.8,-27.1,16.6,-27.1).lineTo(23.9,-27.1).curveTo(24.6,-27,24.6,-27).lineTo(51.1,-26.9).curveTo(51.8,-26.8,51.9,-26.7).closePath();
	this.shape_52.setTransform(-1.3,-41.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#FFFFFF").beginStroke().moveTo(33.1,-31.8).lineTo(34,-31.6).lineTo(80.6,-31.5).curveTo(88.7,-31.9,92.6,-25).curveTo(95.1,-20.5,95.1,-15.6).curveTo(95.1,-13.7,94.6,-9.9).curveTo(94.1,-6.2,94.1,-4.3).curveTo(94.1,-2.3,94.3,-1.3).lineTo(94.3,19.5).curveTo(95,23.6,90,28).curveTo(84.4,32.8,75.6,33.6).lineTo(69.1,33.5).curveTo(63.8,33,60,33.3).curveTo(56.8,33.8,56.1,33.8).lineTo(44.8,33.8).curveTo(42,33.3,41.5,33.2).curveTo(38.7,32.9,33.5,32.2).lineTo(17.7,32.2).curveTo(15.7,32.8,14,33.2).curveTo(10.9,34.1,8.2,34.1).curveTo(4.7,34.1,-4.5,32.9).lineTo(-26,32.9).lineTo(-28.8,33.3).lineTo(-62.9,33.3).curveTo(-68,32.3,-73.7,31.8).curveTo(-74.2,31.8,-80.9,31.2).curveTo(-86,30.8,-87,30.2).curveTo(-89.7,28.6,-91.3,26.1).curveTo(-92.3,24.6,-93.5,21.4).curveTo(-94.8,18,-95.1,3.1).curveTo(-95.1,-3.1,-95,-5.2).curveTo(-94.8,-9.2,-93.9,-14.4).curveTo(-92.6,-22.7,-92.3,-23.5).curveTo(-90.3,-28.6,-83.3,-32.3).curveTo(-80.1,-32.5,-74.5,-33.8).curveTo(-71.4,-34.5,-67.5,-33.3).lineTo(-54.4,-33.3).curveTo(-53.5,-33.1,-47.8,-32.8).curveTo(-42.8,-32.5,-40.3,-31.6).lineTo(-23.5,-31.6).lineTo(-22.7,-31.8).lineTo(-4.8,-31.8).lineTo(-3.9,-32).lineTo(8,-32.1).lineTo(8.7,-32.3).curveTo(9.3,-32.3,10.5,-31.8).closePath();
	this.shape_53.setTransform(-2.6,-51.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000000").beginStroke().moveTo(33.1,-31.7).lineTo(10.5,-31.8).curveTo(9.3,-32.2,8.7,-32.2).lineTo(8,-32).lineTo(-3.9,-32).lineTo(-4.8,-31.8).lineTo(-22.7,-31.7).lineTo(-23.5,-31.5).lineTo(-40.3,-31.5).curveTo(-42.8,-32.4,-47.8,-32.7).curveTo(-53.5,-33,-54.4,-33.2).lineTo(-67.5,-33.3).curveTo(-71.4,-34.4,-74.5,-33.7).curveTo(-80.1,-32.4,-83.3,-32.2).curveTo(-90.3,-28.5,-92.3,-23.4).curveTo(-92.6,-22.6,-93.9,-14.4).curveTo(-94.8,-9.2,-95,-5.2).curveTo(-95.1,-3.1,-95.1,3.1).curveTo(-94.8,18,-93.5,21.5).curveTo(-92.3,24.6,-91.3,26.1).curveTo(-89.7,28.7,-87,30.2).curveTo(-86,30.8,-80.9,31.2).curveTo(-74.2,31.8,-73.7,31.9).curveTo(-68,32.4,-62.9,33.4).lineTo(-28.8,33.4).lineTo(-26,33).lineTo(-4.5,33).curveTo(4.7,34.1,8.2,34.1).curveTo(10.9,34.1,14,33.3).curveTo(15.7,32.8,17.7,32.3).lineTo(33.5,32.3).curveTo(38.7,32.9,41.5,33.3).curveTo(42,33.3,44.8,33.9).lineTo(56.1,33.9).curveTo(56.8,33.8,60,33.4).curveTo(63.8,33.1,69.1,33.5).lineTo(75.6,33.6).curveTo(84.4,32.8,90,28).curveTo(95,23.7,94.3,19.5).lineTo(94.3,-1.3).curveTo(94.1,-2.2,94.1,-4.3).curveTo(94.1,-6.1,94.6,-9.9).curveTo(95.1,-13.6,95.1,-15.5).curveTo(95.1,-20.4,92.6,-24.9).curveTo(88.7,-31.8,80.6,-31.5).lineTo(34,-31.5).closePath().moveTo(9.2,-36).curveTo(10.7,-36,11.2,-35.7).lineTo(33.5,-35.5).curveTo(34.2,-35.4,34.2,-35.4).lineTo(81.2,-35.3).curveTo(91.2,-35.5,95.8,-27).curveTo(98.8,-21.6,98.8,-15.8).curveTo(98.1,5.5,98.1,9.3).curveTo(98.3,13.9,98.2,16.6).curveTo(98.1,21.7,96.7,25.2).curveTo(92.6,35.4,76.2,37.5).lineTo(69.2,37.5).curveTo(68.9,37.4,66.3,37.3).curveTo(63.8,37,63.2,37).curveTo(57.6,37.4,56.5,37.8).lineTo(44.7,37.8).curveTo(41.1,37.3,40.4,36.8).curveTo(38.3,35.6,36.9,36.1).curveTo(35.1,36.8,32.6,36).lineTo(18.5,36).curveTo(16.8,36.6,14.9,37.1).curveTo(11.3,38,8.5,38).curveTo(2.2,38,-5.3,36.8).lineTo(-25.2,36.8).curveTo(-25.6,36.9,-28,37.3).lineTo(-63.5,37.3).curveTo(-66.8,36.8,-76.8,36.1).curveTo(-86,35.1,-89.9,33).curveTo(-93,31.4,-94.7,28.4).curveTo(-95.7,26.8,-97,23).curveTo(-98.3,19.4,-98.8,3.2).curveTo(-98.8,-3.5,-98.6,-6.3).curveTo(-98.4,-8.7,-97.3,-18.5).curveTo(-96.1,-25.2,-94.8,-29.5).curveTo(-94,-31.9,-87.6,-34.6).curveTo(-80.6,-37.2,-79,-38).lineTo(-62.5,-38).curveTo(-60.6,-37.7,-50,-36.9).curveTo(-41,-36.2,-39.5,-35.4).lineTo(-24,-35.4).curveTo(-24,-35.4,-23.3,-35.5).lineTo(-5.3,-35.6).curveTo(-5.2,-35.7,-4.5,-35.8).lineTo(7.4,-35.9).curveTo(7.5,-36,9.2,-36).closePath();
	this.shape_54.setTransform(-2.6,-52);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#FFFFFF").beginStroke().moveTo(38.6,-42.7).curveTo(41.4,-42.3,43,-42).lineTo(53.5,-42).curveTo(56,-42.7,58.7,-42.9).lineTo(79,-42.9).curveTo(80,-42.4,84.8,-40.7).curveTo(89.6,-38.7,91.7,-36.7).curveTo(93.2,-35.3,94.3,-33).curveTo(94.8,-31.7,95.6,-29.2).lineTo(95.6,-14.7).curveTo(95.8,-13.5,95.8,-11.5).curveTo(95.8,-8.7,95.8,-8.2).curveTo(95.7,-6.6,95.1,-4.5).lineTo(95.1,6.3).curveTo(94.7,8.3,93.4,14.1).curveTo(92.8,16.6,92.8,20.3).curveTo(92.8,23.3,94,26.7).curveTo(95.2,30.1,95.2,30.8).curveTo(95.2,33.8,87.6,38.4).curveTo(79.2,43.5,72.1,42.2).lineTo(51,42.3).curveTo(50.3,42.2,49.5,42.6).curveTo(48.7,43.2,48.4,43.4).lineTo(37.1,43.4).curveTo(34.7,43,32.5,42.7).curveTo(28.2,42.2,26.7,42).lineTo(20.5,41.9).curveTo(20.4,41.9,19.7,41.8).lineTo(9.2,41.8).curveTo(7.5,42.1,7.4,42.2).lineTo(-0.2,42.2).curveTo(-6,40.9,-21.9,38.8).curveTo(-22.5,38.8,-23.9,39.7).curveTo(-25.5,40.8,-28.8,41.3).curveTo(-29.5,41.3,-36.8,42.7).lineTo(-44.1,42.7).curveTo(-44.5,42.6,-48.2,41.3).curveTo(-52.3,40,-55.3,40).curveTo(-58.4,40,-62.5,40.9).lineTo(-70.2,40.9).curveTo(-70.2,40.9,-71,40.8).lineTo(-78.4,40.7).curveTo(-91,40.3,-94.1,23.6).curveTo(-95.1,17.7,-95.2,8.7).curveTo(-95.3,3.8,-95.1,-5).curveTo(-95.1,-5.4,-95.7,-11.6).curveTo(-96.2,-18.7,-95.1,-24.5).curveTo(-91.6,-42.7,-74.1,-42.7).curveTo(-70.9,-42.7,-70.3,-42.5).lineTo(-63.8,-42.4).curveTo(-59.9,-42.2,-59.3,-42).lineTo(-38,-42).lineTo(-37.1,-42.2).lineTo(-25.3,-42.2).lineTo(-24.3,-42.4).lineTo(-7.8,-42.5).curveTo(-4.4,-43.2,-3.5,-43.4).lineTo(6.1,-43.4).lineTo(7,-43.2).lineTo(35.6,-43.2).curveTo(35.8,-43.1,38.6,-42.7).closePath();
	this.shape_55.setTransform(-3.9,-59.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000000").beginStroke().moveTo(38.4,-42.8).curveTo(35.5,-43.2,35.3,-43.2).lineTo(6.7,-43.3).lineTo(5.9,-43.5).lineTo(-3.8,-43.5).curveTo(-4.6,-43.2,-8,-42.5).lineTo(-24.6,-42.5).lineTo(-25.5,-42.3).lineTo(-37.3,-42.2).lineTo(-38.3,-42).lineTo(-59.5,-42).curveTo(-60.2,-42.2,-64,-42.5).lineTo(-70.5,-42.5).curveTo(-71.1,-42.7,-74.4,-42.7).curveTo(-91.9,-42.7,-95.3,-24.5).curveTo(-96.5,-18.8,-96,-11.7).curveTo(-95.3,-5.5,-95.3,-5).curveTo(-95.5,3.8,-95.5,8.7).curveTo(-95.4,17.6,-94.3,23.5).curveTo(-91.3,40.3,-78.7,40.6).lineTo(-71.3,40.8).curveTo(-70.5,40.8,-70.5,40.9).lineTo(-62.8,40.9).curveTo(-58.6,40,-55.5,40).curveTo(-52.6,40,-48.5,41.3).curveTo(-44.8,42.6,-44.3,42.6).lineTo(-37,42.6).curveTo(-29.8,41.3,-29,41.3).curveTo(-25.7,40.8,-24.1,39.7).curveTo(-22.8,38.8,-22.1,38.8).curveTo(-6.2,40.8,-0.4,42.1).lineTo(7.1,42.1).curveTo(7.2,42,9,41.8).lineTo(19.5,41.8).curveTo(20.2,41.8,20.2,41.9).lineTo(26.5,42).curveTo(27.9,42.2,32.2,42.7).curveTo(34.5,43,36.9,43.4).lineTo(48.1,43.4).curveTo(48.5,43.2,49.3,42.6).curveTo(50,42.2,50.7,42.3).lineTo(71.9,42.1).curveTo(78.9,43.5,87.4,38.4).curveTo(95,33.8,95,30.8).curveTo(95,30.1,93.8,26.7).curveTo(92.5,23.3,92.5,20.3).curveTo(92.5,16.5,93.1,14.1).curveTo(94.5,8.3,94.8,6.3).lineTo(94.8,-4.5).curveTo(95.4,-6.7,95.5,-8.2).curveTo(95.5,-8.7,95.5,-11.5).curveTo(95.5,-13.5,95.3,-14.7).lineTo(95.3,-29.3).curveTo(94.5,-31.8,94,-33).curveTo(93,-35.4,91.5,-36.8).curveTo(89.3,-38.8,84.5,-40.7).curveTo(79.8,-42.5,78.7,-43).lineTo(58.5,-43).curveTo(55.7,-42.7,53.2,-42).lineTo(42.7,-42).curveTo(41.1,-42.4,38.4,-42.8).closePath().moveTo(7.5,-47.1).lineTo(35.5,-47).curveTo(35.5,-47,42.8,-45.9).lineTo(52.4,-45.9).curveTo(53.7,-46.3,58.2,-46.8).lineTo(79.5,-46.8).curveTo(87.5,-44,93.4,-39.5).curveTo(99.9,-34.4,99,-30.5).lineTo(99,-15.6).curveTo(99.3,-14.3,99.3,-11.3).curveTo(99.3,-7.8,98.8,-5.5).lineTo(98.8,18.3).curveTo(98.2,21.5,98.2,22.5).curveTo(99,28.8,99,29.5).curveTo(99,34.3,92.1,39.8).curveTo(83.8,46.5,72.2,46).lineTo(51.6,46).curveTo(50.5,46.9,49,47.3).lineTo(37,47.3).curveTo(34.1,47,31,46.5).curveTo(28.4,46.1,28.2,46.1).curveTo(24.8,45.7,19.1,45.5).lineTo(9.5,45.5).lineTo(7.7,46).lineTo(-1,46).curveTo(-5.6,44.9,-21.1,42.8).curveTo(-21.3,42.8,-27,44.3).curveTo(-33.4,46,-36.5,46.5).lineTo(-44.5,46.5).curveTo(-46,46.1,-49.7,44.9).curveTo(-53.3,43.8,-55.8,43.8).curveTo(-57.6,43.8,-62.5,44.8).lineTo(-71.3,44.8).lineTo(-72,44.5).lineTo(-79.3,44.5).curveTo(-86.9,43.5,-90.5,40).curveTo(-92.6,38,-95.5,33.5).curveTo(-97.8,31,-98.3,27.3).curveTo(-98.7,25.2,-98.8,20.8).curveTo(-99.6,12.3,-99.1,-5).curveTo(-99.1,-10,-99.3,-19.1).curveTo(-99.2,-26.5,-97.8,-31).curveTo(-94.3,-42.7,-78,-46.5).lineTo(-70.8,-46.5).curveTo(-70,-46.4,-70,-46.4).lineTo(-63.8,-46.3).curveTo(-59.7,-46,-59.2,-45.9).lineTo(-38.3,-45.9).curveTo(-38.3,-45.9,-37.5,-46).lineTo(-25.6,-46.1).curveTo(-25.5,-46.1,-24.8,-46.3).lineTo(-8.5,-46.4).curveTo(-5.5,-46.7,-4.3,-47.3).lineTo(6.7,-47.3).curveTo(7.4,-47.2,7.5,-47.1).closePath();
	this.shape_56.setTransform(-3.6,-59.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#FFFFFF").beginStroke().moveTo(96.4,-34.5).curveTo(96,-31.7,95.6,-28.8).curveTo(94.7,-23.1,94.7,-19.3).curveTo(94.7,-17.8,95.1,-14.4).curveTo(95.4,-11,95.4,-9.7).curveTo(95.4,-7.1,94.6,-2.5).curveTo(93.7,2.2,93.7,5.2).curveTo(93.7,6.6,94.1,11.9).curveTo(94.4,17.2,94.4,23.9).curveTo(94.4,37.6,90.2,43.9).curveTo(84.3,52.7,68.8,52.7).curveTo(67.1,52.7,63.6,51.2).curveTo(60.1,49.7,54,49.7).curveTo(50,49.7,47,50.6).curveTo(44,51.6,40.5,51.6).curveTo(37.6,51.6,35.2,50.5).curveTo(32.8,49.4,30.5,49.4).curveTo(22.3,49.4,19,51.1).curveTo(17.1,52.8,16.3,52.8).curveTo(14.2,52.8,13.2,52.6).curveTo(12.4,52.3,11.9,52.2).lineTo(1.2,52.1).curveTo(-0.9,51.5,-3.4,51.1).curveTo(-8.2,50.2,-12.2,50.2).curveTo(-16,50.2,-16.1,50.3).lineTo(-29.1,50.4).curveTo(-32.9,50.7,-33.7,51).lineTo(-40,51.1).curveTo(-45.9,51,-47.1,50.7).curveTo(-48.3,50.4,-51.5,50.4).curveTo(-53.3,50.4,-57.6,51.1).curveTo(-61.9,51.8,-63.1,51.8).curveTo(-64.5,51.8,-65.7,51.6).curveTo(-66.4,51.5,-67.9,51.2).lineTo(-79.1,51.1).curveTo(-81.7,51.2,-84.2,49.2).curveTo(-84.8,48.7,-86.9,46.3).curveTo(-87.2,46,-89.9,43.6).curveTo(-92.4,41.5,-92.9,40.5).curveTo(-95.6,35.7,-96,34.2).curveTo(-96.4,32.7,-96.4,28.8).curveTo(-96.4,28.7,-95.9,19.7).curveTo(-95.4,10.2,-95.4,8).curveTo(-95.4,4.2,-95.8,-3.8).curveTo(-96.2,-11.6,-96.2,-15.5).curveTo(-96.2,-28,-94.3,-35.1).curveTo(-90.6,-49.6,-79.6,-50.3).lineTo(-70.9,-50.3).curveTo(-66.6,-50.8,-61.4,-51.6).curveTo(-56.7,-52.4,-51.8,-52.8).lineTo(-41.4,-52.8).curveTo(-38.5,-51.8,-36.2,-51.4).curveTo(-32.1,-50.6,-24.8,-50.6).curveTo(-21.8,-50.6,-19.3,-51.3).curveTo(-17.3,-52,-10.9,-51.6).lineTo(-3.9,-51.6).lineTo(-1.7,-52).lineTo(8.1,-52).curveTo(9.6,-51.5,10.8,-51.3).curveTo(12.8,-51,14.6,-50.6).lineTo(24.1,-50.6).curveTo(32.8,-51.5,34.6,-52).lineTo(44,-52).curveTo(44.9,-52,58.9,-51).curveTo(59.4,-51,63,-50).curveTo(66.5,-49.1,68.7,-49.1).curveTo(70.3,-49.1,72.8,-50).curveTo(75.4,-50.8,78.7,-50.8).curveTo(83.3,-50.8,89.3,-46.2).curveTo(96.4,-40.9,96.4,-34.5).closePath();
	this.shape_57.setTransform(-1.8,-70.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000000").beginStroke().moveTo(96.4,-34.5).curveTo(96.4,-40.9,89.3,-46.2).curveTo(83.3,-50.8,78.7,-50.8).curveTo(75.4,-50.8,72.8,-50).curveTo(70.3,-49.1,68.7,-49.1).curveTo(66.5,-49.1,63,-50.1).curveTo(59.4,-51,58.9,-51.1).curveTo(44.9,-52,44,-52.1).lineTo(34.6,-52.1).curveTo(32.8,-51.6,24.1,-50.6).lineTo(14.6,-50.6).curveTo(12.8,-51.1,10.8,-51.3).curveTo(9.6,-51.5,8.1,-52.1).lineTo(-1.7,-52.1).lineTo(-3.9,-51.6).lineTo(-10.9,-51.6).curveTo(-17.3,-52,-19.3,-51.4).curveTo(-21.8,-50.6,-24.8,-50.6).curveTo(-32.1,-50.6,-36.2,-51.4).curveTo(-38.5,-51.8,-41.4,-52.8).lineTo(-51.8,-52.8).curveTo(-56.7,-52.4,-61.4,-51.6).curveTo(-66.6,-50.8,-70.9,-50.4).lineTo(-79.6,-50.3).curveTo(-90.6,-49.7,-94.3,-35.1).curveTo(-96.2,-28,-96.2,-15.5).curveTo(-96.2,-11.7,-95.8,-3.8).curveTo(-95.4,4.2,-95.4,7.9).curveTo(-95.4,10.2,-95.9,19.7).curveTo(-96.4,28.7,-96.4,28.7).curveTo(-96.4,32.6,-96,34.1).curveTo(-95.6,35.6,-92.9,40.4).curveTo(-92.4,41.4,-89.9,43.5).curveTo(-87.2,45.9,-86.9,46.3).curveTo(-84.8,48.6,-84.2,49.1).curveTo(-81.7,51.1,-79.1,51).lineTo(-67.9,51.1).curveTo(-66.4,51.4,-65.7,51.6).curveTo(-64.5,51.8,-63.1,51.8).curveTo(-61.9,51.8,-57.6,51.1).curveTo(-53.3,50.4,-51.5,50.4).curveTo(-48.3,50.4,-47.1,50.7).curveTo(-45.9,51,-40,51).lineTo(-33.7,50.9).curveTo(-32.9,50.7,-29.1,50.4).lineTo(-16.1,50.3).curveTo(-16,50.1,-12.2,50.1).curveTo(-8.2,50.1,-3.4,51).curveTo(-0.9,51.5,1.2,52).lineTo(11.9,52.1).curveTo(12.4,52.2,13.2,52.5).curveTo(14.2,52.8,16.3,52.8).curveTo(17.1,52.8,19,51.1).curveTo(22.3,49.4,30.5,49.4).curveTo(32.8,49.4,35.2,50.5).curveTo(37.6,51.5,40.5,51.5).curveTo(44,51.5,47,50.6).curveTo(50,49.6,54,49.6).curveTo(60.1,49.6,63.6,51.2).curveTo(67.1,52.7,68.8,52.7).curveTo(84.3,52.7,90.2,43.9).curveTo(94.4,37.5,94.4,23.8).curveTo(94.4,17.2,94.1,11.9).curveTo(93.7,6.5,93.7,5.1).curveTo(93.7,2.2,94.6,-2.5).curveTo(95.4,-7.2,95.4,-9.7).curveTo(95.4,-11,95.1,-14.4).curveTo(94.7,-17.8,94.7,-19.3).curveTo(94.7,-23.2,95.6,-28.9).curveTo(96,-31.7,96.4,-34.5).closePath().moveTo(100.2,-34.5).curveTo(100.2,-33.4,99.3,-27.5).curveTo(98.4,-21.6,98.4,-19.2).curveTo(98.4,-15.6,98.8,-14.5).curveTo(99.2,-13.4,99.2,-9.8).curveTo(99.2,-7.3,98.3,-1.2).curveTo(97.4,5,97.4,5.1).curveTo(97.4,7,97.8,9.8).curveTo(98.2,14.4,98.2,14.7).curveTo(98.3,16.7,98.3,20.4).curveTo(98.2,23.8,98.2,24.1).curveTo(98.2,30.8,98,32.6).curveTo(97.6,37.2,95.7,41.4).curveTo(93.2,47,90,49.9).curveTo(82.6,56.6,68.9,56.6).curveTo(65.2,56.6,62.6,55).curveTo(59.9,53.4,53.9,53.4).curveTo(50.5,53.4,47.7,54.4).curveTo(44.9,55.4,39.4,55.4).curveTo(37.3,55.4,34.5,54.3).curveTo(31.7,53.2,30.3,53.2).curveTo(23.3,53.2,20.9,54.9).curveTo(18.5,56.6,15.5,56.6).curveTo(13.6,56.6,12.3,56.3).curveTo(11.4,55.9,11.3,55.9).lineTo(0.6,55.9).curveTo(-7.2,53.9,-12.4,53.9).curveTo(-14.8,53.9,-15.6,54.1).lineTo(-29.1,54.2).curveTo(-31.5,54.5,-33.1,54.9).lineTo(-40.4,54.9).curveTo(-40.8,54.8,-43.7,54.6).curveTo(-46.8,54.5,-47,54.4).curveTo(-47.2,54.4,-48.7,54.2).curveTo(-53.1,54.2,-57,54.9).curveTo(-61,55.6,-63.2,55.6).curveTo(-66.1,55.6,-66.8,55.4).curveTo(-67.2,55.3,-67.9,54.9).lineTo(-79.7,54.9).curveTo(-83.3,54.6,-86.3,52.5).curveTo(-88.5,51,-89.7,49.2).curveTo(-90.3,48.4,-93.1,45.9).curveTo(-95.6,43.7,-96.2,42.4).curveTo(-99.2,36.4,-99.6,35.2).curveTo(-100.2,33.1,-100.2,28.9).curveTo(-100.2,27.5,-99.7,19.1).curveTo(-99.2,10.7,-99.2,7.9).curveTo(-99.2,7.6,-99.2,3.3).curveTo(-99.3,-1.3,-99.4,-3.8).curveTo(-99.6,-4.9,-99.8,-9.2).curveTo(-99.9,-13.6,-99.9,-15.4).curveTo(-99.9,-29.8,-97.9,-37.1).curveTo(-93.6,-52.5,-80.2,-54.1).lineTo(-71.4,-54.2).curveTo(-67.9,-54.6,-62,-55.5).curveTo(-57.2,-56.2,-52.6,-56.6).lineTo(-52.6,-56.6).lineTo(-40.9,-56.6).curveTo(-37.2,-55.6,-35,-55.2).curveTo(-31.4,-54.5,-25,-54.5).curveTo(-22.5,-54.5,-20.8,-55).curveTo(-18.7,-55.6,-18.1,-55.6).lineTo(-11.1,-55.6).curveTo(-7,-55,-6.1,-55.1).curveTo(-4.4,-55.4,-1.9,-55.9).lineTo(8.9,-55.9).curveTo(9.1,-55.8,15.1,-54.5).lineTo(23.8,-54.5).curveTo(28.4,-55.5,33.9,-55.9).lineTo(44.6,-55.9).curveTo(46.8,-55.5,49,-55.1).curveTo(51,-54.9,56.6,-54.9).curveTo(59.6,-54.9,61.3,-54.7).curveTo(64.5,-54.3,65.8,-53.2).curveTo(67.8,-53.1,68.9,-53).curveTo(69.4,-53,70.1,-54.1).curveTo(70.6,-55.1,71.6,-54.9).lineTo(80.8,-54.9).curveTo(90.9,-52.6,96.2,-45.8).curveTo(100.2,-40.4,100.2,-34.5).closePath();
	this.shape_58.setTransform(-1.8,-70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-55.2,197.7,58.2);


(lib.mcCharScreen_bg = function() {
	this.initialize();

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#523D83").beginStroke().moveTo(303.1,-139.2).lineTo(-303.1,-139.2).curveTo(-315.1,-139.2,-323.6,-130.7).curveTo(-332.1,-122.1,-332.1,-110).lineTo(-332.1,110.1).curveTo(-332.1,122.1,-323.6,130.6).curveTo(-315.1,139.2,-303.1,139.2).lineTo(303.1,139.2).curveTo(315.1,139.2,323.6,130.6).curveTo(332.1,122.1,332.1,110.1).lineTo(332.1,-110).curveTo(332.1,-122.1,323.6,-130.7).curveTo(315.1,-139.2,303.1,-139.2).closePath();
	this.shape_59.setTransform(0,-139.1);

	this.addChild(this.shape_59);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.1,-278.2,664.3,278.3);


(lib.Border = function() {
	this.initialize();

	// Layer 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000000").beginStroke().moveTo(744,404.9).lineTo(-744,404.9).lineTo(-744,-404.9).lineTo(744,-404.9).closePath();
	this.shape_60.setTransform(744,405);

	this.addChild(this.shape_60);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1488,809.9);


(lib.TextInput_upSkin = function() {
	this.initialize();

	// skin
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#FFFFFF").beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath();
	this.shape_61.setTransform(76,11);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#D3D5D6").beginStroke().moveTo(-75,-0.5).lineTo(75,-0.5).lineTo(75,0.5).lineTo(-75,0.5).closePath();
	this.shape_62.setTransform(76,21.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#6D6F70").beginStroke().moveTo(75.5,-0.5).lineTo(75.5,0.5).lineTo(-74.5,0.5).lineTo(-75.5,0.5).lineTo(-75.5,-0.5).closePath();
	this.shape_63.setTransform(75.5,0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#C9CBCC").beginStroke().moveTo(75,-10).lineTo(75,-11).lineTo(76,-11).lineTo(76,11).lineTo(75,11).lineTo(75,10).closePath().moveTo(-75,10).lineTo(-75,11).lineTo(-76,11).lineTo(-76,-10).lineTo(-75,-10).closePath();
	this.shape_64.setTransform(76,11);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextInput_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("rgba(255,255,255,0.298)").beginStroke().moveTo(75,-10).lineTo(75,10).lineTo(-75,10).lineTo(-75,-10).closePath();
	this.shape_65.setTransform(76,11);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("rgba(211,213,214,0.298)").beginStroke().moveTo(-75,0.5).lineTo(-75,-0.5).lineTo(75,-0.5).lineTo(75,0.5).closePath();
	this.shape_66.setTransform(76,21.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("rgba(109,111,112,0.298)").beginStroke().moveTo(75.5,0.5).lineTo(-74.5,0.5).lineTo(-75.5,0.5).lineTo(-75.5,-0.5).lineTo(75.5,-0.5).closePath();
	this.shape_67.setTransform(75.5,0.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("rgba(201,203,204,0.298)").beginStroke().moveTo(-76,-10).lineTo(-75,-10).lineTo(-75,10).lineTo(-75,11).lineTo(-76,11).closePath().moveTo(75,-11).lineTo(76,-11).lineTo(76,11).lineTo(75,11).lineTo(75,10).lineTo(75,-10).closePath();
	this.shape_68.setTransform(76,11);

	this.addChild(this.shape_68,this.shape_67,this.shape_66,this.shape_65);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_upSkin = function() {
	this.initialize();

	// skin
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-75,10).lineTo(-75,-10).lineTo(75,-10).lineTo(75,10).closePath();
	this.shape_69.setTransform(76,11);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#6D6F70").beginStroke().moveTo(-75.5,0.5).lineTo(-75.5,-0.5).lineTo(75.5,-0.5).lineTo(75.5,0.5).lineTo(-74.5,0.5).closePath();
	this.shape_70.setTransform(75.5,0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#D3D5D6").beginStroke().moveTo(75,0.5).lineTo(-75,0.5).lineTo(-75,-0.5).lineTo(75,-0.5).closePath();
	this.shape_71.setTransform(76,21.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C9CBCC").beginStroke().moveTo(75,10).lineTo(75,-10).lineTo(75,-11).lineTo(76,-11).lineTo(76,11).lineTo(75,11).closePath().moveTo(-75,-10).lineTo(-75,10).lineTo(-75,11).lineTo(-76,11).lineTo(-76,-10).closePath();
	this.shape_72.setTransform(76,11);

	this.addChild(this.shape_72,this.shape_71,this.shape_70,this.shape_69);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("rgba(255,255,255,0.298)").beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath();
	this.shape_73.setTransform(76,11);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("rgba(211,213,214,0.298)").beginStroke().moveTo(75,0.5).lineTo(-75,0.5).lineTo(-75,-0.5).lineTo(75,-0.5).closePath();
	this.shape_74.setTransform(76,21.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("rgba(109,111,112,0.298)").beginStroke().moveTo(-74.5,0.5).lineTo(-75.5,0.5).lineTo(-75.5,-0.5).lineTo(75.5,-0.5).lineTo(75.5,0.5).closePath();
	this.shape_75.setTransform(75.5,0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("rgba(201,203,204,0.298)").beginStroke().moveTo(75,10).lineTo(75,-10).lineTo(75,-11).lineTo(76,-11).lineTo(76,11).lineTo(75,11).closePath().moveTo(-76,-10).lineTo(-75,-10).lineTo(-75,10).lineTo(-75,11).lineTo(-76,11).closePath();
	this.shape_76.setTransform(76,11);

	this.addChild(this.shape_76,this.shape_75,this.shape_74,this.shape_73);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#6633CC").beginStroke().moveTo(41,-7).curveTo(41,-11,37,-11).lineTo(-37,-11).curveTo(-41,-11,-41,-7).lineTo(-41,7).curveTo(-41,11,-37,11).lineTo(37,11).curveTo(41,11,41,7).closePath().moveTo(40,7).curveTo(40,9.9,37.1,10).lineTo(-37.1,10).curveTo(-40,9.9,-40,7).lineTo(-40,-7).curveTo(-40,-9.9,-37.1,-10).lineTo(37.1,-10).curveTo(40,-9.9,40,-7).closePath();
	this.shape_77.setTransform(41,11);

	this.addChild(this.shape_77);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#000000").beginStroke().moveTo(3.5,-2).lineTo(-3.5,-2).lineTo(-3.5,-1).lineTo(-2.5,-1).lineTo(-2.5,0).lineTo(-1.5,0).lineTo(-1.5,1).lineTo(-0.5,1).lineTo(-0.5,2).lineTo(0.5,2).lineTo(0.5,1).lineTo(1.5,1).lineTo(1.5,0).lineTo(2.5,0).lineTo(2.5,-1).lineTo(3.5,-1).closePath();
	this.shape_78.setTransform(3.5,2);

	this.addChild(this.shape_78);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#585F63").beginStroke().moveTo(0.5,-74).lineTo(0.5,74).lineTo(-0.5,74).lineTo(-0.5,-74).closePath();
	this.shape_79.setTransform(0.5,74);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginLinearGradientFill(["#94999B","#E7E7E7"],[0,1],-6.4,7,7.5,6.8).beginStroke().moveTo(6.5,-74).lineTo(6.5,74).lineTo(-6.5,74).lineTo(-6.5,-74).closePath();
	this.shape_80.setTransform(7.5,74);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#585F63").beginStroke().moveTo(0.5,-74).lineTo(0.5,74).lineTo(-0.5,74).lineTo(-0.5,-74).closePath();
	this.shape_81.setTransform(14.5,74);

	this.addChild(this.shape_81,this.shape_80,this.shape_79);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).beginStroke().moveTo(5.5,22).curveTo(5.5,25,2.7,25).lineTo(-5.5,25).lineTo(-5.5,-25).lineTo(2.7,-25).curveTo(5.5,-24.9,5.5,-22).closePath();
	this.shape_82.setTransform(6.5,26);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginLinearGradientFill(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).beginStroke().moveTo(6,-2.8).lineTo(6,-1.2).curveTo(6,2.8,2,2.8).lineTo(-6,2.8).lineTo(-6,1.8).lineTo(2.2,1.8).curveTo(5,1.8,5,-1.2).lineTo(5,-2.8).closePath();
	this.shape_83.setTransform(7,49.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginLinearGradientFill(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).beginStroke().moveTo(6,23.2).lineTo(5,23.2).lineTo(5,-19.2).curveTo(5,-22.1,2.2,-22.2).lineTo(-6,-22.2).lineTo(-6,-23.2).lineTo(2,-23.2).curveTo(6,-23.2,6,-19.2).closePath();
	this.shape_84.setTransform(7,23.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("rgba(255,0,0,0)").beginStroke().moveTo(1.5,-26).lineTo(1.5,26).lineTo(-1.5,26).lineTo(-1.5,-26).closePath();
	this.shape_85.setTransform(14.5,26);

	this.addChild(this.shape_85,this.shape_84,this.shape_83,this.shape_82);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("rgba(255,0,0,0)").beginStroke().moveTo(1.5,-26).lineTo(1.5,26).lineTo(-1.5,26).lineTo(-1.5,-26).closePath();
	this.shape_86.setTransform(14.5,26);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).beginStroke().moveTo(6,-2.8).lineTo(6,-1.2).curveTo(6,2.8,2,2.8).lineTo(-6,2.8).lineTo(-6,1.8).lineTo(2.2,1.8).curveTo(5,1.8,5,-1.2).lineTo(5,-2.8).closePath();
	this.shape_87.setTransform(7,49.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).beginStroke().moveTo(6,23.2).lineTo(5,23.2).lineTo(5,-19.2).curveTo(5,-22.1,2.2,-22.2).lineTo(-6,-22.2).lineTo(-6,-23.2).lineTo(2,-23.2).curveTo(6,-23.2,6,-19.2).closePath();
	this.shape_88.setTransform(7,23.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).beginStroke().moveTo(5.5,-22).lineTo(5.5,22).curveTo(5.5,24.9,2.7,25).lineTo(-5.5,25).lineTo(-5.5,-25).lineTo(2.7,-25).curveTo(5.5,-24.9,5.5,-22).closePath();
	this.shape_89.setTransform(6.5,26);

	this.addChild(this.shape_89,this.shape_88,this.shape_87,this.shape_86);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginLinearGradientFill(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).beginStroke().moveTo(2.7,-25).curveTo(5.5,-24.9,5.5,-22).lineTo(5.5,22).curveTo(5.5,25,2.7,25).lineTo(-5.5,25).lineTo(-5.5,-25).closePath();
	this.shape_90.setTransform(6.5,26);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).beginStroke().moveTo(6,-2.8).lineTo(6,-1.2).curveTo(6,2.8,2,2.8).lineTo(-6,2.8).lineTo(-6,1.8).lineTo(2.2,1.8).curveTo(5,1.8,5,-1.2).lineTo(5,-2.8).closePath();
	this.shape_91.setTransform(7,49.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).beginStroke().moveTo(6,23.2).lineTo(5,23.2).lineTo(5,-19.2).curveTo(5,-22.1,2.2,-22.2).lineTo(-6,-22.2).lineTo(-6,-23.2).lineTo(2,-23.2).curveTo(6,-23.2,6,-19.2).closePath();
	this.shape_92.setTransform(7,23.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("rgba(255,0,0,0)").beginStroke().moveTo(1.5,-26).lineTo(1.5,26).lineTo(-1.5,26).lineTo(-1.5,-26).closePath();
	this.shape_93.setTransform(14.5,26);

	this.addChild(this.shape_93,this.shape_92,this.shape_91,this.shape_90);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#5A6165").beginStroke().moveTo(2.5,0.5).lineTo(-2.5,0.5).lineTo(-2.5,-0.5).lineTo(2.5,-0.5).closePath();
	this.shape_94.setTransform(2.5,2.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#5A6165").beginStroke().moveTo(2.5,0.5).lineTo(-2.5,0.5).lineTo(-2.5,-0.5).lineTo(2.5,-0.5).closePath();
	this.shape_95.setTransform(2.5,0.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#5A6165").beginStroke().moveTo(2.5,0.5).lineTo(-2.5,0.5).lineTo(-2.5,-0.5).lineTo(2.5,-0.5).closePath();
	this.shape_96.setTransform(2.5,4.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#5A6165").beginStroke().moveTo(2.5,0.5).lineTo(-2.5,0.5).lineTo(-2.5,-0.5).lineTo(2.5,-0.5).closePath();
	this.shape_97.setTransform(2.5,6.5);

	this.addChild(this.shape_97,this.shape_96,this.shape_95,this.shape_94);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).beginStroke().moveTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).lineTo(-6.5,3.3).closePath();
	this.shape_98.setTransform(7.5,4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginLinearGradientFill(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).beginStroke().moveTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).lineTo(7.5,7).closePath().moveTo(-6.5,-6).lineTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).closePath();
	this.shape_99.setTransform(7.5,7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).lineTo(6.5,-6).closePath();
	this.shape_100.setTransform(7.5,7);

	this.addChild(this.shape_100,this.shape_99,this.shape_98);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).beginStroke().moveTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).lineTo(-6.5,3.3).closePath();
	this.shape_101.setTransform(7.5,4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginLinearGradientFill(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).beginStroke().moveTo(-6.5,-6).lineTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).closePath().moveTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).lineTo(7.5,7).closePath();
	this.shape_102.setTransform(7.5,7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).lineTo(6.5,-6).closePath();
	this.shape_103.setTransform(7.5,7);

	this.addChild(this.shape_103,this.shape_102,this.shape_101);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.List_skin = function() {
	this.initialize();

	// Layer 2
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#CCCCCC").beginStroke().moveTo(132,-96).curveTo(133.9,-96,135.2,-94.7).curveTo(136.5,-93.4,136.5,-91.5).lineTo(136.5,95.5).curveTo(136.5,95.7,136.4,95.8).curveTo(136.2,96,136,96).lineTo(-136,96).curveTo(-136.2,96,-136.3,95.8).curveTo(-136.5,95.7,-136.5,95.5).lineTo(-136.5,-91.5).curveTo(-136.5,-93.4,-135.2,-94.7).curveTo(-133.9,-96,-132,-96).closePath().moveTo(134.5,-94).curveTo(133.4,-95,132,-95).lineTo(-132,-95).curveTo(-133.5,-95,-134.5,-94).curveTo(-135.5,-93,-135.5,-91.5).lineTo(-135.5,95).lineTo(135.5,95).lineTo(135.5,-91.5).curveTo(135.5,-93,134.5,-94).closePath();
	this.shape_104.setTransform(136.5,96);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#FFFFFF").beginStroke().moveTo(134.5,-94).curveTo(135.5,-93,135.5,-91.5).lineTo(135.5,95).lineTo(-135.5,95).lineTo(-135.5,-91.5).curveTo(-135.5,-93,-134.5,-94).curveTo(-133.5,-95,-132,-95).lineTo(132,-95).curveTo(133.4,-95,134.5,-94).closePath();
	this.shape_105.setTransform(136.5,96);

	this.addChild(this.shape_105,this.shape_104);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,192);


(lib.CellRenderer_upSkin = function() {
	this.initialize();

	// border
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginLinearGradientFill(["#5B5D5E","#B7BABC"],[0,1],67.5,-9.8,67.5,3).beginStroke().moveTo(-75,9.8).lineTo(-75,10).lineTo(75,10).lineTo(75,9.8).lineTo(76,9.8).lineTo(76,11).lineTo(-76,11).lineTo(-76,9.8).closePath().moveTo(-75,-10).lineTo(-76,-10).lineTo(-76,-11).lineTo(76,-11).lineTo(76,-10).lineTo(75,-10).closePath();
	this.shape_106.setTransform(76,11);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#B7BABC").beginStroke().moveTo(-76,-9.9).lineTo(-75,-9.9).lineTo(-75,9.9).lineTo(-76,9.9).closePath().moveTo(76,9.9).lineTo(75,9.9).lineTo(75,-9.9).lineTo(76,-9.9).closePath();
	this.shape_107.setTransform(76,10.9);

	// fill
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#FFFFFF").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_108.setTransform(76,11);

	this.addChild(this.shape_108,this.shape_107,this.shape_106);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedUpSkin = function() {
	this.initialize();

	// border
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginLinearGradientFill(["#5B5D5E","#B7BABC"],[0,1],-67.4,9.9,-67.4,-2.9).beginStroke().moveTo(-76,-9.8).lineTo(-76,-11).lineTo(76,-11).lineTo(76,-9.8).lineTo(75,-9.8).lineTo(75,-10).lineTo(-75,-10).lineTo(-75,-9.8).closePath().moveTo(75,10).lineTo(76,10).lineTo(76,11).lineTo(-76,11).lineTo(-76,10).lineTo(-75,10).closePath();
	this.shape_109.setTransform(76,11);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#B7BABC").beginStroke().moveTo(75,9.9).lineTo(75,-9.9).lineTo(76,-9.9).lineTo(76,9.9).closePath().moveTo(-76,-9.9).lineTo(-75,-9.9).lineTo(-75,9.9).lineTo(-76,9.9).closePath();
	this.shape_110.setTransform(76,11.1);

	// fill
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#9AD8FF").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_111.setTransform(76,11);

	this.addChild(this.shape_111,this.shape_110,this.shape_109);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedOverSkin = function() {
	this.initialize();

	// highlight
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,6,-12.4,-5.5).beginStroke().moveTo(75,5.5).lineTo(-75,5.5).lineTo(-75,-5.5).lineTo(75,-5.5).closePath();
	this.shape_112.setTransform(76,6.5);

	// fill
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginLinearGradientFill(["rgba(238,238,238,0.651)","rgba(255,255,255,0.749)"],[0,1],-12.4,11.6,-12.4,-11).beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath();
	this.shape_113.setTransform(76,11);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).beginStroke().moveTo(76,-11).lineTo(76,11).lineTo(-76,11).lineTo(-76,-11).closePath().moveTo(75,10).lineTo(75,-10).lineTo(-75,-10).lineTo(-75,10).closePath();
	this.shape_114.setTransform(76,11);

	// border
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#DAF1FF").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_115.setTransform(76,11);

	this.addChild(this.shape_115,this.shape_114,this.shape_113,this.shape_112);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDownSkin = function() {
	this.initialize();

	// border
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath().moveTo(76,-11).lineTo(-76,-11).lineTo(-76,11).lineTo(76,11).closePath();
	this.shape_116.setTransform(76,11);

	// fill
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#9AD8FF").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_117.setTransform(76,11);

	this.addChild(this.shape_117,this.shape_116);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDisabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.2)"],[0,1],-12.4,6,-12.4,-5.5).beginStroke().moveTo(75,5.5).lineTo(-75,5.5).lineTo(-75,-5.5).lineTo(75,-5.5).closePath();
	this.shape_118.setTransform(76,6.5);

	// fill
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginLinearGradientFill(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-12.4,11.6,-12.4,-11).beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath();
	this.shape_119.setTransform(76,11);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginLinearGradientFill(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],-67.4,9.9,-67.4,-2.9).beginStroke().moveTo(76,-11).lineTo(76,11).lineTo(-76,11).lineTo(-76,-11).closePath().moveTo(75,10).lineTo(75,-10).lineTo(-75,-10).lineTo(-75,10).closePath();
	this.shape_120.setTransform(76,11);

	this.addChild(this.shape_120,this.shape_119,this.shape_118);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.CellRenderer_overSkin = function() {
	this.initialize();

	// border
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).beginStroke().moveTo(76,-11).lineTo(-76,-11).lineTo(-76,11).lineTo(76,11).closePath().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath();
	this.shape_121.setTransform(76,11);

	// fill
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#DAF1FF").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_122.setTransform(76,11);

	this.addChild(this.shape_122,this.shape_121);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_downSkin = function() {
	this.initialize();

	// border
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath().moveTo(76,-11).lineTo(-76,-11).lineTo(-76,11).lineTo(76,11).closePath();
	this.shape_123.setTransform(76,11);

	// fill
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#9AD8FF").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_124.setTransform(76,11);

	this.addChild(this.shape_124,this.shape_123);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_disabledSkin = function() {
	this.initialize();

	// border
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginLinearGradientFill(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],67.5,-9.8,67.5,3).beginStroke().moveTo(75,10).lineTo(-75,10).lineTo(-75,-10).lineTo(75,-10).closePath().moveTo(76,-11).lineTo(-76,-11).lineTo(-76,11).lineTo(76,11).closePath();
	this.shape_125.setTransform(76,11);

	// fill
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("rgba(255,255,255,0.298)").beginStroke().moveTo(76,11).lineTo(-76,11).lineTo(-76,-11).lineTo(76,-11).closePath();
	this.shape_126.setTransform(76,11);

	this.addChild(this.shape_126,this.shape_125);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).beginStroke().moveTo(20,5.5).lineTo(-20,5.5).lineTo(-20,-2.5).curveTo(-20,-5.5,-17,-5.5).lineTo(20,-5.5).closePath();
	this.shape_127.setTransform(21,6.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).beginStroke().moveTo(-20,5.5).lineTo(-20,-5.5).lineTo(17,-5.5).curveTo(20,-5.5,20,-2.5).lineTo(20,5.5).closePath();
	this.shape_128.setTransform(61,6.5);

	// fill
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).beginStroke().moveTo(20,10).lineTo(-17.1,10).curveTo(-20,9.9,-20,7).lineTo(-20,-7).curveTo(-20,-9.9,-17.1,-10).lineTo(20,-10).closePath();
	this.shape_129.setTransform(21,11);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).beginStroke().moveTo(-20,10).lineTo(-20,-10).lineTo(17.1,-10).curveTo(20,-9.9,20,-7).lineTo(20,7).curveTo(20,9.9,17.1,10).closePath();
	this.shape_130.setTransform(61,11);

	// border
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginLinearGradientFill(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).lineTo(20.5,10).lineTo(20.5,11).lineTo(-16.4,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.4,-11).closePath();
	this.shape_131.setTransform(20.5,11);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginLinearGradientFill(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).beginStroke().moveTo(-20.5,-10).lineTo(-20.5,-11).lineTo(16.5,-11).curveTo(20.5,-11,20.5,-7).lineTo(20.5,7).curveTo(20.5,11,16.5,11).lineTo(-20.5,11).lineTo(-20.5,10).lineTo(16.7,10).curveTo(19.5,9.9,19.5,7).lineTo(19.5,-7).curveTo(19.5,-9.9,16.7,-10).closePath();
	this.shape_132.setTransform(61.5,11);

	this.addChild(this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).beginStroke().moveTo(-11,-10).lineTo(8.1,-10).curveTo(11,-9.9,11,-7).lineTo(11,7).curveTo(11,9.9,8.1,10).lineTo(-11,10).closePath();
	this.shape_133.setTransform(52,11);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).beginStroke().moveTo(20,10).lineTo(-17.1,10).curveTo(-20,9.9,-20,7).lineTo(-20,-7).curveTo(-20,-9.9,-17.1,-10).lineTo(20,-10).closePath();
	this.shape_134.setTransform(21,11);

	// border
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginLinearGradientFill(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,11).lineTo(-16.5,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.5,-11).lineTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).lineTo(20.5,10).closePath();
	this.shape_135.setTransform(20.5,11);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginLinearGradientFill(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).beginStroke().moveTo(-11.5,11).lineTo(-11.5,10).lineTo(7.6,10).curveTo(10.5,9.9,10.5,7).lineTo(10.5,-7).curveTo(10.5,-9.9,7.6,-10).lineTo(-11.5,-10).lineTo(-11.5,-11).lineTo(7.5,-11).curveTo(11.5,-11,11.5,-7).lineTo(11.5,7).curveTo(11.5,11,7.5,11).closePath();
	this.shape_136.setTransform(52.5,11);

	this.addChild(this.shape_136,this.shape_135,this.shape_134,this.shape_133);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).beginStroke().moveTo(20,10).lineTo(-17.1,10).curveTo(-20,9.9,-20,7).lineTo(-20,-7).curveTo(-20,-9.9,-17.1,-10).lineTo(20,-10).closePath();
	this.shape_137.setTransform(21,11);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).beginStroke().moveTo(-11,10).lineTo(-11,-10).lineTo(8.1,-10).curveTo(11,-9.9,11,-7).lineTo(11,7).curveTo(11,9.9,8.1,10).closePath();
	this.shape_138.setTransform(52,11);

	// border
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,11).lineTo(-16.5,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.5,-11).lineTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).lineTo(20.5,10).closePath();
	this.shape_139.setTransform(20.5,11);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).beginStroke().moveTo(-11.5,11).lineTo(-11.5,10).lineTo(7.6,10).curveTo(10.5,9.9,10.5,7).lineTo(10.5,-7).curveTo(10.5,-9.9,7.6,-10).lineTo(-11.5,-10).lineTo(-11.5,-11).lineTo(7.5,-11).curveTo(11.5,-11,11.5,-7).lineTo(11.5,7).curveTo(11.5,11,7.5,11).closePath();
	this.shape_140.setTransform(52.5,11);

	this.addChild(this.shape_140,this.shape_139,this.shape_138,this.shape_137);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginLinearGradientFill(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).beginStroke().moveTo(20,10).lineTo(-17.1,10).curveTo(-20,9.9,-20,7).lineTo(-20,-7).curveTo(-20,-9.9,-17.1,-10).lineTo(20,-10).closePath();
	this.shape_141.setTransform(21,11);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginLinearGradientFill(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).beginStroke().moveTo(-11,-10).lineTo(8.1,-10).curveTo(11,-9.9,11,-7).lineTo(11,7).curveTo(11,9.9,8.1,10).lineTo(-11,10).closePath();
	this.shape_142.setTransform(52,11);

	// border
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,11).lineTo(-16.5,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.5,-11).lineTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).lineTo(20.5,10).closePath();
	this.shape_143.setTransform(20.5,11);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).beginStroke().moveTo(-11.5,11).lineTo(-11.5,10).lineTo(7.6,10).curveTo(10.5,9.9,10.5,7).lineTo(10.5,-7).curveTo(10.5,-9.9,7.6,-10).lineTo(-11.5,-10).lineTo(-11.5,-11).lineTo(7.5,-11).curveTo(11.5,-11,11.5,-7).lineTo(11.5,7).curveTo(11.5,11,7.5,11).closePath();
	this.shape_144.setTransform(52.5,11);

	this.addChild(this.shape_144,this.shape_143,this.shape_142,this.shape_141);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginLinearGradientFill(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).beginStroke().moveTo(20,10).lineTo(-17.1,10).curveTo(-20,9.9,-20,7).lineTo(-20,-7).curveTo(-20,-9.9,-17.1,-10).lineTo(20,-10).closePath();
	this.shape_145.setTransform(21,11);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginLinearGradientFill(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).beginStroke().moveTo(-11,10).lineTo(-11,-10).lineTo(8.1,-10).curveTo(11,-9.9,11,-7).lineTo(11,7).curveTo(11,9.9,8.1,10).closePath();
	this.shape_146.setTransform(52,11);

	// border
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginLinearGradientFill(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,11).lineTo(-16.5,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.5,-11).lineTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).lineTo(20.5,10).closePath();
	this.shape_147.setTransform(20.5,11);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginLinearGradientFill(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).beginStroke().moveTo(-11.5,11).lineTo(-11.5,10).lineTo(7.6,10).curveTo(10.5,9.9,10.5,7).lineTo(10.5,-7).curveTo(10.5,-9.9,7.6,-10).lineTo(-11.5,-10).lineTo(-11.5,-11).lineTo(7.5,-11).curveTo(11.5,-11,11.5,-7).lineTo(11.5,7).curveTo(11.5,11,7.5,11).closePath();
	this.shape_148.setTransform(52.5,11);

	this.addChild(this.shape_148,this.shape_147,this.shape_146,this.shape_145);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).beginStroke().moveTo(20,5.5).lineTo(-20,5.5).lineTo(-20,-2.5).curveTo(-20,-5.5,-17,-5.5).lineTo(20,-5.5).closePath();
	this.shape_149.setTransform(21,6.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).beginStroke().moveTo(-20,5.5).lineTo(-20,-5.5).lineTo(17,-5.5).curveTo(20,-5.5,20,-2.5).lineTo(20,5.5).closePath();
	this.shape_150.setTransform(61,6.5);

	// fill
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginLinearGradientFill(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).beginStroke().moveTo(40,7).curveTo(40,9.9,37.1,10).lineTo(-37.1,10).curveTo(-40,9.9,-40,7).lineTo(-40,-7).curveTo(-40,-9.9,-37.1,-10).lineTo(37.1,-10).curveTo(40,-9.9,40,-7).closePath();
	this.shape_151.setTransform(41,11);

	// border
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,10).lineTo(20.5,11).lineTo(-16.4,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.4,-11).lineTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).closePath();
	this.shape_152.setTransform(20.5,11);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).beginStroke().moveTo(-20.5,11).lineTo(-20.5,10).lineTo(16.7,10).curveTo(19.5,9.9,19.5,7).lineTo(19.5,-7).curveTo(19.5,-9.9,16.7,-10).lineTo(-20.5,-10).lineTo(-20.5,-11).lineTo(16.5,-11).curveTo(20.5,-11,20.5,-7).lineTo(20.5,7).curveTo(20.5,11,16.5,11).closePath();
	this.shape_153.setTransform(61.5,11);

	this.addChild(this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("rgba(255,255,255,0)").beginStroke().drawRoundRect(-40.05,-10,80.1,20,3);
	this.shape_154.setTransform(41,11);

	// border
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginLinearGradientFill(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).beginStroke().moveTo(41,-7).curveTo(41,-11,37,-11).lineTo(-37,-11).curveTo(-41,-11,-41,-7).lineTo(-41,7).curveTo(-41,11,-37,11).lineTo(37,11).curveTo(41,11,41,7).closePath().moveTo(40,7).curveTo(40,9.9,37.1,10).lineTo(-37.1,10).curveTo(-40,9.9,-40,7).lineTo(-40,-7).curveTo(-40,-9.9,-37.1,-10).lineTo(37.1,-10).curveTo(40,-9.9,40,-7).closePath();
	this.shape_155.setTransform(41,11);

	this.addChild(this.shape_155,this.shape_154);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).beginStroke().moveTo(20,5.5).lineTo(-20,5.5).lineTo(-20,-2.5).curveTo(-20,-5.5,-17,-5.5).lineTo(20,-5.5).closePath();
	this.shape_156.setTransform(21,6.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).beginStroke().moveTo(-20,5.5).lineTo(-20,-5.5).lineTo(17,-5.5).curveTo(20,-5.5,20,-2.5).lineTo(20,5.5).closePath();
	this.shape_157.setTransform(61,6.5);

	// fill
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginLinearGradientFill(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).beginStroke().moveTo(20,-10).lineTo(20,10).lineTo(-17.1,10).curveTo(-20,9.9,-20,7).lineTo(-20,-7).curveTo(-20,-9.9,-17.1,-10).closePath();
	this.shape_158.setTransform(21,11);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginLinearGradientFill(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).beginStroke().moveTo(-20,10).lineTo(-20,-10).lineTo(17.1,-10).curveTo(20,-9.9,20,-7).lineTo(20,7).curveTo(20,9.9,17.1,10).closePath();
	this.shape_159.setTransform(61.1,11);

	// border
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,10).lineTo(20.5,11).lineTo(-16.4,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.4,-11).lineTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).closePath();
	this.shape_160.setTransform(20.5,11);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).beginStroke().moveTo(-20.5,11).lineTo(-20.5,10).lineTo(16.7,10).curveTo(19.5,9.9,19.5,7).lineTo(19.5,-7).curveTo(19.5,-9.9,16.7,-10).lineTo(-20.5,-10).lineTo(-20.5,-11).lineTo(16.5,-11).curveTo(20.5,-11,20.5,-7).lineTo(20.5,7).curveTo(20.5,11,16.5,11).closePath();
	this.shape_161.setTransform(61.5,11);

	this.addChild(this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginLinearGradientFill(["rgba(204,204,204,0)","rgba(255,255,255,0.149)"],[0,1],39.5,1.6,39.5,-4.8).beginStroke().moveTo(40,5.5).lineTo(-40,5.5).lineTo(-40,-2.5).curveTo(-40,-5.5,-37,-5.5).lineTo(37,-5.5).curveTo(40,-5.5,40,-2.5).closePath();
	this.shape_162.setTransform(41,6.5);

	// fill
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginLinearGradientFill(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).beginStroke().moveTo(40,7).curveTo(40,9.9,37.1,10).lineTo(-37.1,10).curveTo(-40,9.9,-40,7).lineTo(-40,-7).curveTo(-40,-9.9,-37.1,-10).lineTo(37.1,-10).curveTo(40,-9.9,40,-7).closePath();
	this.shape_163.setTransform(41,11);

	// border
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginLinearGradientFill(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).beginStroke().moveTo(20.5,-11).lineTo(20.5,-10).lineTo(-16.6,-10).curveTo(-19.5,-9.9,-19.5,-7).lineTo(-19.5,7).curveTo(-19.5,9.9,-16.6,10).lineTo(20.5,10).lineTo(20.5,11).lineTo(-16.5,11).curveTo(-20.5,11,-20.5,7).lineTo(-20.5,-7).curveTo(-20.5,-11,-16.5,-11).closePath();
	this.shape_164.setTransform(20.5,11);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginLinearGradientFill(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).beginStroke().moveTo(-20.5,-10).lineTo(-20.5,-11).lineTo(16.5,-11).curveTo(20.5,-11,20.5,-7).lineTo(20.5,7).curveTo(20.5,11,16.5,11).lineTo(-20.5,11).lineTo(-20.5,10).lineTo(16.6,10).curveTo(19.5,9.9,19.5,7).lineTo(19.5,-7).curveTo(19.5,-9.9,16.6,-10).closePath();
	this.shape_165.setTransform(61.5,11);

	this.addChild(this.shape_165,this.shape_164,this.shape_163,this.shape_162);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#FFFFFF").beginStroke("#000000").setStrokeStyle(0.1,1,1).moveTo(40,11).lineTo(-40,11).lineTo(-40,-11).lineTo(40,-11).closePath();
	this.shape_166.setTransform(40,11);

	this.addChild(this.shape_166);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.Trilby = function() {
	this.initialize();

	// Hat
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#999999").beginStroke().moveTo(7.2,-1.6).curveTo(7.2,-1,7.2,-0.3).curveTo(7.2,-0,4.9,0.8).lineTo(2.3,0.9).curveTo(1,1.2,-0.6,1.4).curveTo(-1,1.4,-1.2,1.6).curveTo(-2.3,1.3,-3.6,1.1).curveTo(-4.3,1,-7.2,0.4).curveTo(-7.2,0.1,-7.2,-0.4).curveTo(-7,-0.3,-6.8,-0.3).curveTo(-4.8,0,-4.7,0.1).lineTo(-0.2,0.1).lineTo(-0.1,-0).lineTo(2.9,-0.1).curveTo(3.6,0,5.4,-0.7).curveTo(6.8,-1.2,7.2,-1.6).closePath();
	this.shape_167.setTransform(-0.5,3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.3,-4.3).curveTo(5.9,-3.4,5.9,-2).curveTo(6.2,-0.7,6.5,0.5).curveTo(6.5,0.6,6.5,0.6).curveTo(6.2,0.4,5,0.8).curveTo(2.8,1.7,2.2,1.8).lineTo(-0.8,1.8).lineTo(-1.1,1.9).lineTo(-4.9,2).curveTo(-6.3,1.6,-7.7,1.5).curveTo(-7.7,-0.9,-7.6,-1.3).curveTo(-7.4,-2.6,-5.9,-3.8).curveTo(-3.6,-5.8,0.2,-5.8).curveTo(4.2,-5.8,5.3,-4.3).closePath().moveTo(-8.9,2.2).curveTo(-8.8,2.2,-8.6,2.1).curveTo(-8.6,2.7,-8.6,3.1).curveTo(-9.7,2.8,-10.2,2.8).curveTo(-10.2,2.6,-8.9,2.2).closePath().moveTo(-4.5,4.8).lineTo(-0.6,5.5).curveTo(-0.4,5.5,0.2,5.7).lineTo(-4.9,5.8).curveTo(-5.4,5.5,-7.4,5.6).curveTo(-8.9,5.6,-9.5,4.8).curveTo(-9.8,4.3,-10,3.8).curveTo(-9.6,4,-9,4.1).curveTo(-6.5,4.5,-4.5,4.8).closePath().moveTo(7.8,2.5).curveTo(7.8,2.3,7.7,2).curveTo(10.2,3.5,10.2,4).curveTo(10.2,4.6,7.2,5.3).lineTo(3.9,5.3).curveTo(3.1,5.3,1.5,5).curveTo(1.8,4.9,2,4.8).lineTo(4.7,4.7).curveTo(6.1,4.7,7,3.8).curveTo(7.8,3.1,7.8,2.5).closePath();
	this.shape_168.setTransform(0,0.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#000000").beginStroke().moveTo(5.3,-4.3).curveTo(4.2,-5.8,0.2,-5.8).curveTo(-3.6,-5.8,-5.9,-3.8).curveTo(-7.4,-2.5,-7.6,-1.3).curveTo(-7.7,-0.9,-7.7,1.6).curveTo(-6.3,1.6,-4.9,2).lineTo(-1.1,2).lineTo(-0.8,1.9).lineTo(2.2,1.9).curveTo(2.8,1.7,5,0.8).curveTo(6.2,0.4,6.5,0.7).curveTo(6.5,0.6,6.5,0.5).curveTo(6.2,-0.7,5.9,-2).curveTo(5.9,-3.4,5.3,-4.3).closePath().moveTo(6.8,-2.5).curveTo(6.8,-2.3,7.3,-0.2).curveTo(7.5,0.5,7.6,1.1).lineTo(8.3,1.1).curveTo(9.4,1.9,10.5,2.7).curveTo(11.1,3.3,11.1,4.1).curveTo(11.1,4.9,10.2,5.6).curveTo(9.1,6.3,7.3,6.3).lineTo(4.2,6.3).curveTo(4,6.4,2.6,6.7).lineTo(-5.1,6.7).curveTo(-5.3,6.7,-7.7,6.5).curveTo(-10,6.2,-10.5,5.3).curveTo(-10.8,4.4,-11.1,3.9).curveTo(-11.1,3.8,-11.1,2.9).curveTo(-11.1,1.8,-9.4,1.3).curveTo(-9,1.1,-8.7,1.1).curveTo(-8.6,0.9,-8.6,0.7).curveTo(-8.6,-2.5,-7.6,-3.6).curveTo(-5.4,-5.8,-3.2,-6.3).curveTo(-2,-6.7,0.4,-6.7).curveTo(3,-6.7,4.6,-5.9).curveTo(6.9,-4.8,6.8,-2.5).closePath().moveTo(6.6,1.3).curveTo(6.3,1.7,4.9,2.2).curveTo(3.1,2.9,2.4,2.8).lineTo(-0.6,2.9).lineTo(-0.7,3).lineTo(-5.2,3).curveTo(-5.3,2.9,-7.3,2.6).curveTo(-7.5,2.6,-7.7,2.5).curveTo(-7.7,2.9,-7.7,3.3).curveTo(-4.8,3.9,-4.1,3.9).curveTo(-2.8,4.2,-1.7,4.4).curveTo(-1.5,4.3,-1.1,4.3).curveTo(0.5,4.1,1.8,3.8).lineTo(4.4,3.7).curveTo(6.7,2.9,6.7,2.6).curveTo(6.7,1.9,6.6,1.3).closePath().moveTo(7.8,2.5).curveTo(7.8,3.1,7,3.9).curveTo(6.1,4.7,4.7,4.7).lineTo(2,4.8).curveTo(1.8,4.9,1.5,5.1).curveTo(3.1,5.3,3.9,5.3).lineTo(7.2,5.3).curveTo(10.2,4.6,10.2,4.1).curveTo(10.2,3.5,7.7,2).curveTo(7.8,2.3,7.8,2.5).closePath().moveTo(-4.5,4.8).curveTo(-6.5,4.6,-9,4.2).curveTo(-9.6,4,-10,3.8).curveTo(-9.8,4.3,-9.5,4.8).curveTo(-8.9,5.6,-7.4,5.6).curveTo(-5.4,5.6,-4.9,5.8).lineTo(0.2,5.7).curveTo(-0.4,5.5,-0.6,5.5).closePath().moveTo(-8.9,2.3).curveTo(-10.2,2.6,-10.2,2.8).curveTo(-9.7,2.8,-8.6,3.1).curveTo(-8.6,2.7,-8.7,2.1).curveTo(-8.8,2.2,-8.9,2.3).closePath();
	this.shape_169.setTransform(0,0.2);

	this.addChild(this.shape_169,this.shape_168,this.shape_167);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-6.5,22.3,13.4);


(lib.GasMask = function() {
	this.initialize();

	// Mask
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#666666").beginStroke().moveTo(3.2,-1.9).curveTo(3.2,-1.6,3,-0.8).curveTo(2.7,-0,2.7,0.4).curveTo(2.7,1.9,-0.6,2).curveTo(-0.4,1.6,-0.9,1.3).curveTo(-1.6,1,-1.9,0.8).curveTo(-2.3,0.7,-3,0.1).lineTo(-3.2,-0).curveTo(-3.2,-0.1,-3.2,-0.2).lineTo(-3.2,-0.3).curveTo(-2.6,-0.3,-2.2,-0.6).curveTo(-1.4,-1.2,-0.4,-1.4).curveTo(-0.1,-1.5,2.5,-1.9).curveTo(2.9,-1.9,3.2,-2).closePath();
	this.shape_170.setTransform(3.2,6.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#999999").beginStroke().moveTo(4.6,-1.9).curveTo(4.7,-1.6,4.8,-1.3).curveTo(5.1,0,5.5,0.7).curveTo(3.9,1.4,3.6,1.4).curveTo(2.9,1.6,0.5,2).curveTo(-0.3,2.1,-1.2,2.8).curveTo(-2.4,3.5,-2.7,3.6).lineTo(-4.4,3.6).curveTo(-4.7,2.6,-5.3,1.6).curveTo(-5.5,1.2,-5.5,0.1).curveTo(-5.5,-1,-4.2,-1.6).curveTo(-3.9,-1.8,-3.7,-1.9).curveTo(-3.1,-2.4,-2.9,-2.7).curveTo(-2.8,-2.7,-2.6,-2.7).curveTo(-0.9,-2.7,0.1,-3.5).curveTo(0.2,-3.5,0.3,-3.6).curveTo(0.5,-3.4,1.2,-3.2).lineTo(4,-3.1).curveTo(4.3,-2.6,4.6,-1.9).closePath();
	this.shape_171.setTransform(6,12);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.2,-2.7).lineTo(4.3,-2.7).curveTo(4.6,-2.2,4.9,-1.4).curveTo(5.2,-0.5,5.2,-0).curveTo(5.2,1.3,4.6,2.5).curveTo(4.5,2.3,4.4,2.1).curveTo(3.9,0.7,3.9,-0.6).lineTo(3.9,-1.9).curveTo(3.9,-2.2,4.2,-2.7).closePath().moveTo(0.6,-0.9).curveTo(0.9,-0.7,0.9,-0.1).curveTo(0.9,0.6,0.5,1.4).curveTo(-0.5,2.7,-2.8,2.7).curveTo(-5.2,2.7,-5.2,0.3).curveTo(-5.2,-0.8,-4.8,-1.3).curveTo(-4,-2.1,-1.2,-2.3).curveTo(-0.3,-1.4,0.6,-0.9).closePath();
	this.shape_172.setTransform(1,-4.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#000000").beginStroke().moveTo(3.8,-12.6).curveTo(4.2,-10.7,4.4,-9.9).curveTo(4.6,-9.3,5.6,-8.5).curveTo(6.6,-7.8,6.7,-7.4).curveTo(7.1,-6.2,7.1,-5.9).curveTo(7.1,-5.8,7.1,-4.9).curveTo(7.1,-3.7,6.3,-2.1).lineTo(5.6,-0.6).lineTo(6.7,3).curveTo(7.2,3.2,7.3,3.5).curveTo(7.4,3.7,7.4,4.3).curveTo(7.4,4.8,7.2,5.5).curveTo(7,6.3,7,7).curveTo(7,7.2,7,7.3).curveTo(7.2,7.4,7.6,7.8).lineTo(10.5,7.8).curveTo(10.9,8.4,11.6,10).curveTo(12,11.1,12.6,12.8).curveTo(12.6,13.5,11.5,13.8).curveTo(9.8,14.3,8.3,14.7).curveTo(6.7,15.1,4.8,16.1).curveTo(3.6,16.6,2.4,16.6).curveTo(0.7,16.6,0.3,15.7).curveTo(0.2,14.8,0,14.4).curveTo(-0.1,14.2,-0.2,13.2).curveTo(-0.4,12.4,-0.4,12.1).curveTo(-0.4,10.7,0,10.2).curveTo(0.2,10.1,0.4,10).curveTo(1.2,9.5,1.8,9.1).curveTo(1.5,9,1.5,8.9).curveTo(1.5,8.2,1,8).curveTo(-0.2,7.6,-0.5,7.4).curveTo(-0.9,7.1,-0.9,6.6).curveTo(-0.9,6.5,-0.9,6.3).lineTo(-0.9,6.3).curveTo(-1,6.2,-0.9,6.1).curveTo(-0.9,6,-0.9,6).curveTo(-4.4,5.7,-7.7,2.9).curveTo(-10.3,0.6,-10.7,-0.8).curveTo(-12.2,-4.3,-12.3,-5.3).curveTo(-12.6,-6.1,-12.6,-8.8).curveTo(-12.6,-14,-7,-15.9).curveTo(-1.7,-17.6,1.2,-15).curveTo(3.2,-14.2,3.8,-12.6).closePath().moveTo(0.8,-14.1).lineTo(-0.4,-14.9).curveTo(-1.5,-15.4,-3.7,-15.4).curveTo(-6,-15.4,-6.8,-14.9).curveTo(-7.3,-14.3,-8.1,-14).curveTo(-9.9,-13.1,-10.4,-12.5).curveTo(-11.4,-11.2,-11.6,-10.4).curveTo(-11.6,-10.1,-11.6,-8.8).curveTo(-11.6,-6.5,-11.3,-5.3).curveTo(-11.3,-5.2,-9.8,-1.1).curveTo(-9.5,-0.1,-6.9,2.2).curveTo(-3.7,5,-0.7,5).lineTo(-0.7,3.9).curveTo(-0.2,3.2,-0.2,3.2).curveTo(0.3,2.7,0.7,3).curveTo(0.7,3,0.7,3.2).curveTo(0.7,3.3,0.3,3.7).curveTo(-0.1,4.1,-0.1,4.3).curveTo(-0.1,4.6,-0,4.9).curveTo(0.2,4.8,0.3,4.6).curveTo(0.7,4.2,1.2,4.1).curveTo(1.7,4,5.4,3.5).curveTo(5.4,3.5,5.5,3.5).curveTo(5.6,3.5,5.6,3.3).curveTo(5.6,2.3,5.1,1.1).curveTo(4.7,-0,4.7,-0.7).curveTo(4.7,-0.9,4.9,-1.1).curveTo(4.2,-1.6,4,-3.1).curveTo(3.8,-4.3,3.9,-5.4).lineTo(3.9,-7.4).curveTo(3.9,-7.6,4,-7.8).curveTo(3.7,-7.9,3.7,-8.1).curveTo(3.6,-8.2,3.8,-8.5).curveTo(3.8,-8.6,2.9,-12.3).curveTo(2.9,-12.8,2.3,-13.2).curveTo(1.4,-13.7,0.8,-14.1).closePath().moveTo(0.7,-13.5).curveTo(0.7,-13.3,-3.5,-12.3).curveTo(-3.9,-12.3,-4,-12.5).lineTo(-4,-12.7).curveTo(-4,-13.1,-2.1,-13.4).curveTo(-0.4,-13.7,0.7,-13.7).curveTo(0.7,-13.8,0.7,-13.5).closePath().moveTo(5.2,-7.5).curveTo(4.9,-7,4.9,-6.7).lineTo(4.9,-5.4).curveTo(4.9,-4.2,5.4,-2.8).curveTo(5.5,-2.6,5.6,-2.4).curveTo(6.2,-3.5,6.2,-4.9).curveTo(6.2,-5.4,5.9,-6.3).curveTo(5.6,-7.1,5.3,-7.6).closePath().moveTo(2.6,-10.9).curveTo(1.5,-11,1.3,-11.1).curveTo(1.2,-11.2,0.8,-11.4).lineTo(-0.5,-11.4).lineTo(-1.7,-10.7).lineTo(-1.9,-10.7).curveTo(-2,-10.9,-2,-11).curveTo(-2,-11.4,-1.3,-11.7).curveTo(-0.6,-12.1,0.3,-12.1).curveTo(1,-12.1,1.4,-11.8).curveTo(2,-11.6,2.6,-11.5).lineTo(2.9,-11.2).closePath().moveTo(2.2,-6.7).curveTo(2.8,-6.2,2.8,-4.8).curveTo(2.8,-1.1,-1.1,-1.1).curveTo(-3.9,-1.1,-4.8,-2.6).curveTo(-5.1,-3.2,-5.1,-4.6).curveTo(-5.1,-6,-5,-6.3).curveTo(-4.5,-7,-2.4,-8.1).curveTo(-0.5,-9,0.9,-7.6).closePath().moveTo(1.6,-5.7).curveTo(0.7,-6.2,-0.2,-7.2).curveTo(-3,-6.9,-3.8,-6.1).curveTo(-4.2,-5.6,-4.2,-4.6).curveTo(-4.2,-2.1,-1.8,-2.1).curveTo(0.5,-2.1,1.5,-3.5).curveTo(1.9,-4.2,1.9,-4.9).curveTo(1.9,-5.6,1.6,-5.7).closePath().moveTo(10.7,10).curveTo(10.4,9.3,10,8.9).lineTo(7.3,8.8).curveTo(6.5,8.5,6.3,8.4).curveTo(6.2,8.4,6.2,8.5).curveTo(5.1,9.3,3.4,9.3).curveTo(3.3,9.3,3.1,9.3).curveTo(3,9.6,2.3,10).curveTo(2.1,10.1,1.8,10.3).curveTo(0.5,11,0.5,12.1).curveTo(0.5,13.1,0.8,13.5).curveTo(1.3,14.6,1.7,15.6).lineTo(3.3,15.6).curveTo(3.7,15.5,4.8,14.7).curveTo(5.8,14,6.5,13.9).curveTo(8.9,13.5,9.6,13.4).curveTo(9.9,13.3,11.6,12.7).curveTo(11.2,12,10.9,10.6).curveTo(10.7,10.3,10.7,10).closePath().moveTo(6.5,4.3).lineTo(6.4,4.2).curveTo(6.1,4.3,5.7,4.3).curveTo(3.1,4.8,2.9,4.8).curveTo(1.8,5,1.1,5.6).curveTo(0.7,5.9,0,6).lineTo(0,6).curveTo(0,6.1,0,6.2).lineTo(0.2,6.3).curveTo(1,7,1.3,7.1).curveTo(1.7,7.3,2.4,7.6).curveTo(2.9,7.8,2.7,8.3).curveTo(6,8.2,6,6.6).curveTo(6,6.2,6.2,5.5).curveTo(6.5,4.7,6.5,4.3).closePath();

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#333333").beginStroke().moveTo(3.8,-8.3).curveTo(3.8,-8.6,3.7,-8.4).curveTo(2.6,-8.4,1,-8.2).curveTo(-1,-7.8,-1,-7.4).lineTo(-1,-7.3).curveTo(-0.9,-7.1,-0.4,-7.1).curveTo(3.8,-8.1,3.8,-8.3).closePath().moveTo(3.8,-8.9).curveTo(4.4,-8.4,5.3,-7.9).curveTo(5.9,-7.6,6,-7.1).curveTo(6.8,-3.4,6.8,-3.3).curveTo(6.6,-3,6.7,-2.8).curveTo(6.8,-2.7,7.1,-2.5).curveTo(7,-2.4,7,-2.2).lineTo(7,-0.2).curveTo(6.8,1,7,2.1).curveTo(7.3,3.6,7.9,4.2).curveTo(7.7,4.3,7.7,4.5).curveTo(7.7,5.2,8.2,6.3).curveTo(8.6,7.5,8.6,8.6).curveTo(8.6,8.7,8.6,8.7).curveTo(8.5,8.7,8.4,8.8).curveTo(4.7,9.2,4.2,9.3).curveTo(3.7,9.4,3.3,9.8).curveTo(3.2,10.1,3,10.2).curveTo(3,9.8,2.9,9.6).curveTo(2.9,9.3,3.3,8.9).curveTo(3.8,8.6,3.8,8.4).curveTo(3.8,8.2,3.7,8.3).curveTo(3.3,8,2.9,8.4).curveTo(2.9,8.4,2.3,9.1).lineTo(2.3,10.2).curveTo(-0.6,10.2,-3.9,7.4).curveTo(-6.5,5.2,-6.8,4.2).curveTo(-8.3,0,-8.3,-0).curveTo(-8.6,-1.3,-8.6,-3.6).curveTo(-8.6,-4.8,-8.5,-5.2).curveTo(-8.3,-6,-7.3,-7.3).curveTo(-6.9,-7.9,-5,-8.8).curveTo(-4.3,-9.1,-3.7,-9.7).curveTo(-3,-10.2,-0.6,-10.2).curveTo(1.6,-10.2,2.7,-9.7).closePath().moveTo(5.3,-1.5).lineTo(4,-2.3).curveTo(2.5,-3.8,0.7,-2.9).curveTo(-1.5,-1.8,-1.9,-1).curveTo(-2.1,-0.8,-2.1,0.7).curveTo(-2.1,2,-1.8,2.6).curveTo(-0.9,4.1,1.9,4.1).curveTo(5.8,4.1,5.8,0.4).curveTo(5.8,-1,5.3,-1.5).closePath().moveTo(5.7,-5.7).lineTo(6,-5.9).lineTo(5.7,-6.3).curveTo(5.1,-6.4,4.4,-6.6).curveTo(4,-6.8,3.3,-6.8).curveTo(2.4,-6.8,1.7,-6.4).curveTo(1,-6.2,1,-5.8).curveTo(1,-5.7,1.2,-5.5).lineTo(1.4,-5.4).lineTo(2.6,-6.2).lineTo(3.8,-6.2).curveTo(4.2,-6,4.4,-5.8).curveTo(4.6,-5.8,5.7,-5.7).closePath();
	this.shape_174.setTransform(-3,-5.2);

	this.addChild(this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-16.5,25.2,33.2);


(lib.BatmanMask = function() {
	this.initialize();

	// Layer 6
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#666666").beginStroke().moveTo(2.3,-1.2).curveTo(3.1,-0.7,3.4,-0.1).curveTo(3.3,0,3,0).curveTo(2.7,0,1,-1.1).curveTo(1.4,-1.9,2.3,-1.2).closePath().moveTo(-2.6,1).curveTo(-2.7,1.3,-3,1.5).lineTo(-3.3,1.2).curveTo(-3.3,0.6,-2.9,-0.2).curveTo(-2.2,-1.3,-1.3,-0.7).curveTo(-1.3,-0.8,-1.3,-0.6).curveTo(-2.4,0.3,-2.5,0.5).curveTo(-2.5,0.9,-2.6,1).closePath();
	this.shape_175.setTransform(-3.7,-5.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.2,-0.5).lineTo(0.9,-0.4).curveTo(0.8,-0.3,0.8,-0.3).curveTo(0.6,-0.2,0.1,0.3).curveTo(-0.5,0.7,-1.6,0.7).curveTo(-2.3,0.7,-3.2,0.3).lineTo(-4.1,-0).lineTo(-4.3,0).lineTo(-4.2,-0.7).lineTo(-3.6,-0.7).lineTo(-2.6,-0.5).closePath().moveTo(3.5,0).curveTo(3.5,-0.2,3.7,-0.5).curveTo(3.9,-0.6,4,-0.7).curveTo(4.1,-0.7,4.2,-0.7).lineTo(4.1,-0.4).curveTo(4.2,0.2,4.3,0.7).curveTo(4,0.5,4,0.5).curveTo(3.5,0.2,3.5,0).closePath();
	this.shape_176.setTransform(0,-3.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#333333").beginStroke().moveTo(9.4,-3).curveTo(9.5,-1.7,9.7,-1.2).curveTo(10.1,0.6,10.1,0.8).curveTo(9.8,1.6,9.8,1.7).curveTo(9.8,1.8,9.7,1.9).curveTo(9.4,2.3,7.3,2.3).curveTo(6.5,2.1,6.4,2.1).lineTo(3.7,2.1).curveTo(3.1,1.9,2.1,1.9).curveTo(1.3,1.9,1.1,2.5).curveTo(1.1,2.5,1.1,3.3).curveTo(1.1,3.9,1.3,4.4).curveTo(1.6,5.4,2.7,5.4).curveTo(3,5.4,3.1,5.2).curveTo(3,5,2.3,4.4).curveTo(2,4.2,2,3.9).curveTo(3.6,4.6,4.5,4.6).curveTo(5.5,4.6,6.3,3.9).curveTo(6.8,3.6,7,3.4).lineTo(7,3.4).lineTo(7.4,3.2).curveTo(7.7,3.1,7.8,2.9).lineTo(8,2.9).curveTo(8.4,2.9,8.9,2.9).curveTo(8.9,3,8.9,3.1).curveTo(8.9,3.5,9.1,3.8).curveTo(9.3,4.2,9.6,4.3).lineTo(9.6,4.4).lineTo(10.4,6.1).curveTo(10.6,7.3,10.6,7.8).curveTo(9.4,7.7,8.4,7).curveTo(7.7,6.6,7,7.3).lineTo(7.7,7.7).curveTo(3.3,7.7,2.4,8.4).curveTo(2,9.6,0.4,10.5).curveTo(0.4,10.6,0.4,10.7).curveTo(0.2,10.8,-0.4,11.2).curveTo(-1,11.3,-1.8,12.1).curveTo(-3.1,12.6,-5.1,12.6).curveTo(-8.4,12.6,-8.6,10.5).curveTo(-8.6,8.8,-9.1,8).curveTo(-9.1,7.8,-8.9,7.7).curveTo(-9.3,7.3,-9.4,6.9).curveTo(-9.4,5.6,-10.1,4.2).curveTo(-10.6,2.8,-10.6,1.8).curveTo(-10.6,0.6,-9.8,-1.5).curveTo(-9.5,-2.1,-9.3,-2.7).curveTo(-9.1,-3.1,-8.9,-3.3).lineTo(-8.9,-3.4).lineTo(-8.9,-3.4).lineTo(-9,-3.8).curveTo(-8.7,-4.5,-8.4,-5.7).curveTo(-8.1,-7.6,-7.8,-8.3).curveTo(-6.6,-10.9,-5.2,-12.6).curveTo(-5,-11.6,-5,-11).curveTo(-4.9,-9.9,-4.4,-9.1).curveTo(-4.5,-9.1,-4.5,-8.9).curveTo(-4.3,-8.8,-4.1,-8.7).curveTo(-3.8,-8.2,-3.4,-7.6).curveTo(-2.3,-6,-1.9,-6).curveTo(-1.7,-6.1,-1.7,-6.1).lineTo(-1.7,-6.6).curveTo(-2,-7.1,-3,-8.2).curveTo(-3.3,-8.4,-3.5,-8.6).lineTo(0.7,-8.6).curveTo(0.8,-8.6,0.8,-8.6).curveTo(1.6,-8.6,2,-9.5).curveTo(2,-9.5,2.3,-10.7).curveTo(2.4,-11.1,2.8,-11.5).lineTo(2.8,-11.5).curveTo(3,-11.5,3.3,-11.9).curveTo(3.3,-12,3.4,-12).curveTo(3.5,-12.1,3.6,-12.2).curveTo(3.7,-12.2,3.8,-12.2).curveTo(3.9,-12.3,4,-12.3).curveTo(4.4,-11.3,4.8,-8.9).curveTo(5,-6.4,5.8,-6.4).lineTo(5.8,-6.4).curveTo(6.4,-5.8,7.7,-4.8).curveTo(9.3,-3.6,9.4,-3).closePath().moveTo(-0.3,2.1).curveTo(-0.3,2,-0.2,1.6).curveTo(-0.1,1.4,1,0.5).curveTo(1,0.3,1,0.4).curveTo(0.1,-0.2,-0.6,0.9).curveTo(-1,1.7,-1,2.3).lineTo(-0.7,2.6).curveTo(-0.4,2.4,-0.3,2.1).closePath().moveTo(4.6,-0.1).curveTo(3.7,-0.8,3.3,0).curveTo(5,1.1,5.3,1.1).curveTo(5.6,1.1,5.6,1).curveTo(5.5,0.4,4.6,-0.1).closePath();
	this.shape_177.setTransform(-6,-6.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#000000").beginStroke().moveTo(6.1,-6.5).curveTo(7.2,-6.2,8.2,-5.4).curveTo(8.8,-4.7,10.1,-3.3).curveTo(10.3,-2.9,10.3,-2.2).curveTo(10.3,-1.5,10.4,-1.1).curveTo(10.8,-0.3,10.8,-0).curveTo(10.8,0.4,10.8,0.9).curveTo(10.8,1.5,10.7,1.9).lineTo(10.7,1.9).curveTo(10.7,3.7,10.8,4.7).curveTo(10.8,6.5,11.3,7.5).lineTo(11.3,8.7).lineTo(11,8.8).curveTo(9.6,8.8,8.6,8.3).lineTo(8.5,8.2).curveTo(7.8,8.6,6,8.5).curveTo(3.7,8.5,2.8,9.6).lineTo(0.5,11.8).curveTo(0.4,11.8,0.4,11.7).curveTo(0.2,12.1,-1.8,12.9).lineTo(-2.2,12.9).curveTo(-3.3,13.4,-3.7,13.4).lineTo(-6.7,13.4).curveTo(-9.1,13.1,-9.1,10.7).curveTo(-9.1,9.8,-9.4,8.9).curveTo(-9.8,8.3,-9.8,8).curveTo(-10.1,7.7,-10.1,7.3).curveTo(-10.5,5.5,-10.6,5.4).curveTo(-11.3,4.4,-11.3,1.9).curveTo(-11.3,0.3,-10.7,-1.4).curveTo(-10.1,-2.8,-9.5,-3.4).curveTo(-9.7,-3.5,-9.7,-3.6).curveTo(-9.7,-5.8,-8.1,-9.5).curveTo(-6.7,-12.7,-5.3,-13.3).curveTo(-4.9,-13.5,-4.7,-13.4).curveTo(-4.6,-13.5,-4.6,-13.3).curveTo(-4.7,-13.1,-4.8,-13).curveTo(-4.3,-12.6,-4.2,-11.7).curveTo(-3.9,-10,-3.8,-9.6).lineTo(-3.8,-9.6).curveTo(-3.8,-9.4,-3.8,-9.2).curveTo(-3.6,-9.2,-3.4,-9.1).lineTo(0.5,-9.1).lineTo(0.5,-9).curveTo(0.6,-9.1,0.7,-9.1).curveTo(1,-9.4,1.1,-9.8).lineTo(1.7,-10.9).curveTo(1.7,-11,1.8,-11.2).curveTo(2,-11.4,2.1,-11.6).curveTo(2.3,-11.8,2.4,-12).curveTo(2.6,-12.2,2.8,-12.4).curveTo(3,-12.6,3,-12.8).lineTo(3.1,-12.8).curveTo(3.1,-12.9,3.2,-13).curveTo(3.5,-13.3,3.9,-13.4).lineTo(3.9,-13.4).curveTo(4.2,-13.5,4.3,-13.4).curveTo(4.3,-13.4,4.5,-13.4).lineTo(4.5,-13.4).curveTo(4.6,-13.3,4.8,-13.1).curveTo(5.1,-12.8,5.1,-12.3).lineTo(5.1,-12).curveTo(5.1,-11.8,5.1,-11.7).curveTo(5,-10.3,5.1,-10).curveTo(5.3,-9.3,5.8,-8).curveTo(6.1,-6.8,6.1,-6.6).curveTo(6.1,-6.6,6.1,-6.5).closePath().moveTo(9.3,-2.9).curveTo(9.2,-3.4,7.7,-4.6).curveTo(6.3,-5.6,5.8,-6.3).lineTo(5.8,-6.3).curveTo(5,-6.3,4.7,-8.8).curveTo(4.4,-11.2,4,-12.2).curveTo(3.9,-12.1,3.7,-12.1).curveTo(3.6,-12.1,3.5,-12).curveTo(3.5,-11.9,3.4,-11.8).curveTo(3.3,-11.8,3.2,-11.8).curveTo(3,-11.4,2.8,-11.3).lineTo(2.8,-11.4).curveTo(2.4,-10.9,2.3,-10.5).curveTo(2,-9.4,2,-9.3).curveTo(1.6,-8.5,0.8,-8.5).curveTo(0.7,-8.5,0.7,-8.5).lineTo(-3.5,-8.5).curveTo(-3.3,-8.3,-3.1,-8).curveTo(-2,-6.9,-1.7,-6.5).lineTo(-1.7,-6).curveTo(-1.8,-6,-1.9,-5.9).curveTo(-2.3,-5.9,-3.4,-7.5).curveTo(-3.8,-8,-4.2,-8.6).curveTo(-4.3,-8.7,-4.6,-8.8).curveTo(-4.5,-8.9,-4.4,-9).curveTo(-4.9,-9.7,-5,-10.8).curveTo(-5.1,-11.4,-5.3,-12.5).curveTo(-6.7,-10.8,-7.8,-8.1).curveTo(-8.2,-7.4,-8.5,-5.5).curveTo(-8.8,-4.3,-9.1,-3.6).lineTo(-9,-3.3).lineTo(-9,-3.2).lineTo(-8.9,-3.2).curveTo(-9.2,-3,-9.3,-2.6).curveTo(-9.6,-2,-9.8,-1.4).curveTo(-10.7,0.7,-10.7,2).curveTo(-10.7,3,-10.1,4.3).curveTo(-9.5,5.8,-9.4,7).curveTo(-9.3,7.5,-8.9,7.8).curveTo(-9.1,8,-9.2,8.2).curveTo(-8.7,8.9,-8.6,10.6).curveTo(-8.4,12.8,-5.2,12.8).curveTo(-3.2,12.8,-1.8,12.2).curveTo(-1.1,11.5,-0.4,11.3).curveTo(0.2,10.9,0.3,10.8).curveTo(0.3,10.7,0.3,10.6).curveTo(1.9,9.7,2.4,8.6).curveTo(3.2,7.9,7.7,7.8).lineTo(6.9,7.4).curveTo(7.7,6.7,8.3,7.2).curveTo(9.4,7.9,10.6,8).curveTo(10.5,7.4,10.4,6.2).lineTo(9.6,4.6).lineTo(9.6,4.5).curveTo(9.3,4.3,9.1,3.9).curveTo(8.9,3.6,8.8,3.3).curveTo(8.8,3.1,8.8,3).curveTo(8.4,3.1,8,3.1).lineTo(7.7,3.1).curveTo(7.7,3.2,7.3,3.4).lineTo(7,3.6).lineTo(6.9,3.6).curveTo(6.8,3.7,6.3,4.1).curveTo(5.5,4.7,4.5,4.7).curveTo(3.5,4.7,1.9,4).curveTo(2,4.3,2.3,4.5).curveTo(3,5.1,3,5.3).curveTo(3,5.5,2.6,5.5).curveTo(1.5,5.5,1.3,4.5).curveTo(1,4.1,1.1,3.5).curveTo(1.1,2.7,1.1,2.6).curveTo(1.3,2,2,2).curveTo(3.1,2,3.6,2.2).lineTo(6.3,2.3).curveTo(6.5,2.3,7.3,2.5).curveTo(9.4,2.5,9.7,2.1).curveTo(9.7,2,9.8,1.9).curveTo(9.8,1.7,10.1,1).curveTo(10.1,0.7,9.7,-1).curveTo(9.4,-1.6,9.3,-2.9).closePath().moveTo(9.4,3.4).curveTo(9.4,3.6,9.9,3.8).curveTo(10.1,3.9,10.3,4).curveTo(10.2,3.5,10.1,3).lineTo(10.2,2.6).curveTo(10.1,2.6,10.1,2.7).curveTo(9.9,2.7,9.7,2.8).curveTo(9.4,3.1,9.4,3.4).closePath().moveTo(6.2,2.9).lineTo(3.4,2.8).lineTo(2.4,2.7).lineTo(1.8,2.7).lineTo(1.8,3.4).lineTo(1.9,3.3).lineTo(2.8,3.7).curveTo(3.7,4.1,4.4,4.1).curveTo(5.5,4.1,6.1,3.6).curveTo(6.5,3.2,6.8,3.1).curveTo(6.8,3,6.9,3).closePath();
	this.shape_178.setTransform(-5.9,-6.8);

	this.addChild(this.shape_178,this.shape_177,this.shape_176,this.shape_175);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-20.3,22.6,26.9);


(lib.torso_stick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#000000").beginStroke().moveTo(1,0.1).curveTo(1.2,8.3,0.7,10.9).curveTo(0.7,11.1,0.7,11.3).curveTo(0.7,11.3,0.7,11.4).curveTo(0.6,11.5,0.6,11.7).curveTo(0.6,11.7,0.6,11.8).curveTo(0.5,11.8,0.4,11.9).curveTo(0.4,11.9,0.3,12).curveTo(0.2,12,0.1,12.2).curveTo(0,12.2,0,12.2).lineTo(-0.2,12.2).curveTo(-0.4,11.9,-0.7,11.8).curveTo(-0.7,11.7,-0.8,11.5).curveTo(-0.8,9.6,-0.8,7).curveTo(-0.8,6.6,-0.8,6.2).curveTo(-0.9,4.2,-0.9,2.3).curveTo(-0.9,0.2,-1,-2).curveTo(-1.2,-4,-1.6,-7.2).curveTo(-2,-11.1,-0.5,-11.9).curveTo(-0.4,-12.1,-0,-12.2).curveTo(0.2,-12.2,0.4,-12).curveTo(1.9,-11.8,1.7,-7.6).curveTo(1,-1.9,1,0.1).closePath();
	this.shape_179.setTransform(-0.5,-1.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#000000").beginStroke().moveTo(0.7,-11).lineTo(0.7,3).curveTo(1.1,8,1.1,10.5).curveTo(1.1,10.9,1.1,11.2).curveTo(1.1,11.4,1.1,11.6).curveTo(0.8,12.2,0.5,12.2).curveTo(-0.2,12.2,-0.7,11.5).curveTo(-1,9.8,-1.1,6.7).curveTo(-1.2,3.4,-1.1,-0).curveTo(-1.1,-5.9,-0.9,-8.2).curveTo(-0.9,-9.8,-0.8,-11.2).curveTo(-0.8,-11.6,-0.8,-12).curveTo(-0.8,-12,-0.8,-12).curveTo(-0.7,-12.1,-0.6,-12.2).curveTo(-0.4,-12.1,-0.2,-12.1).curveTo(-0.1,-12.2,0.1,-12.1).curveTo(0.2,-12.1,0.4,-12.2).curveTo(0.4,-12,0.6,-11.9).lineTo(0.6,-11.4).curveTo(0.6,-11.2,0.7,-11).closePath();
	this.shape_180.setTransform(-0.5,-0.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#000000").beginStroke().moveTo(1,-5.1).curveTo(1,-4.8,1.2,-4.5).curveTo(1,-3.8,0.9,-2.8).curveTo(0.9,-2.9,0.9,-2.9).lineTo(0.8,8.8).curveTo(0.9,10,1.1,11.4).curveTo(1.1,11.6,1,11.9).curveTo(0.4,12.4,0.2,12.4).curveTo(-0.3,12.4,-0.7,12.2).curveTo(-1.2,1.7,-1.2,-0.8).curveTo(-1.2,-5.3,-1.2,-6.5).curveTo(-1.1,-8.6,-0.8,-10.1).curveTo(-0.8,-10.3,-0.8,-10.7).curveTo(-0.8,-11.4,-0.8,-11.9).curveTo(-0.5,-12.1,-0.3,-12.4).curveTo(-0.1,-12,0.2,-11.8).curveTo(0.3,-11.7,0.3,-11.5).curveTo(1.4,-10.3,1.2,-7.2).curveTo(1.1,-6.1,1,-5.1).closePath();
	this.shape_181.setTransform(-0.6,-1.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#000000").beginStroke().moveTo(0.7,-5.8).curveTo(0.8,-5.7,0.8,-5.7).curveTo(0.8,-5.5,0.8,-5.2).curveTo(0.8,-5.1,0.8,-5).curveTo(0.8,-4.4,0.8,-3.6).curveTo(0.7,-3.4,0.7,-3.1).lineTo(1.2,7.4).curveTo(1.3,9.4,1.2,10.8).curveTo(1.2,10.8,1.1,10.9).curveTo(0.8,11.4,0.4,12.4).lineTo(-0.5,12.4).curveTo(-0.6,12.3,-0.7,12.1).lineTo(-0.7,1.3).curveTo(-1.1,-2.4,-1.1,-4.5).curveTo(-1.1,-5.6,-1,-6.7).curveTo(-1.2,-8.4,-1.2,-9.4).curveTo(-1.2,-10.6,-0.8,-11.4).curveTo(-0.9,-11.4,-0.9,-11.4).curveTo(-0.6,-11.8,-0.2,-12.2).curveTo(-0.2,-12.3,-0.1,-12.4).curveTo(0.1,-12.3,0.3,-12.2).curveTo(0.4,-12.1,0.4,-12).curveTo(1.2,-13.3,1.2,-10.1).curveTo(0.9,-7.2,0.7,-5.8).closePath();
	this.shape_182.setTransform(-0.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_179}]}).to({state:[{t:this.shape_180}]},5).to({state:[{t:this.shape_181}]},5).to({state:[{t:this.shape_182}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-13.6,3.4,24.4);


(lib.torso_skinny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.5,-10.1).curveTo(0.8,-9.4,0.8,-8.6).curveTo(0.5,-4.2,0.5,-3.1).curveTo(0.5,-2.8,0.5,-2.6).curveTo(0.5,-2.5,0.4,-2.3).lineTo(0.4,2).curveTo(0.5,2.7,0.5,4.5).curveTo(0.3,10.1,-0.6,10.1).curveTo(-1.1,10.1,-1.3,9.6).curveTo(-1.4,8.9,-1.5,8.8).lineTo(-1.5,3.6).curveTo(-1.7,-1.8,-1.7,-2.8).curveTo(-1.7,-2.9,-1.8,-3.4).curveTo(-1.5,-3.5,-1.5,-4.1).lineTo(-1.8,-6.7).curveTo(-1.8,-9.4,-0.9,-10.1).closePath().moveTo(1.8,-9).curveTo(1.8,-9.1,1.8,-9.2).curveTo(1.8,-9.1,1.8,-9.1).closePath();
	this.shape_183.setTransform(-0.2,-1.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#000000").beginStroke().moveTo(2.3,-10.9).curveTo(2.4,-10.9,2.4,-10.8).curveTo(2.4,-10.5,2.4,-10.1).curveTo(2.4,-8.9,2.3,-8.4).lineTo(2.3,-4.4).curveTo(1.7,-1.5,1.7,-0.3).curveTo(2.1,8,1,10.6).curveTo(1,10.8,1,11).curveTo(1.2,11,1.3,11).curveTo(1,11.2,0.9,11.4).curveTo(0.8,11.4,0.8,11.4).curveTo(0.7,11.5,0.6,11.6).curveTo(0.4,11.6,0.4,11.7).curveTo(-0,11.7,-0.3,11.8).curveTo(-0.4,11.8,-0.4,11.9).lineTo(-0.9,11.9).curveTo(-1.2,11.6,-1.8,11.5).curveTo(-1.9,11.3,-2.1,11.2).curveTo(-2.1,9.2,-2.1,6.7).curveTo(-2.2,6.3,-2.2,5.8).curveTo(-2.3,3.9,-2.3,2).curveTo(-2.4,0.2,-2.4,-1.9).curveTo(-2.4,-2.1,-2.4,-2.4).curveTo(-2.4,-2.4,-2.4,-2.5).lineTo(-2.3,-9).curveTo(-2.1,-9.5,-1.8,-9.9).curveTo(-1.5,-10.5,-1.4,-11.4).curveTo(-0.8,-11.7,-0.2,-11.9).curveTo(0.8,-11.6,1.8,-11.6).curveTo(2,-11.3,2.3,-10.9).closePath().moveTo(2.1,-9).lineTo(2.1,-9.1).curveTo(2.1,-9.1,2.1,-9.2).curveTo(2.1,-9.1,2.1,-9).closePath().moveTo(0.9,-10.2).lineTo(-0.6,-10.1).curveTo(-1.5,-9.5,-1.5,-6.7).lineTo(-1.2,-4.1).curveTo(-1.2,-3.5,-1.5,-3.4).curveTo(-1.4,-2.9,-1.4,-2.9).curveTo(-1.4,-1.8,-1.2,3.5).lineTo(-1.2,8.7).curveTo(-1.1,8.9,-0.9,9.5).curveTo(-0.7,10.1,-0.2,10.1).curveTo(0.7,10.1,0.9,4.5).curveTo(0.9,2.6,0.8,2).lineTo(0.8,-2.4).curveTo(0.8,-2.5,0.9,-2.7).curveTo(0.8,-2.8,0.9,-3.1).curveTo(0.9,-4.2,1.2,-8.7).curveTo(1.2,-9.5,0.9,-10.2).closePath();
	this.shape_184.setTransform(-0.5,-1.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.2,-8.6).lineTo(2.2,-8.4).lineTo(2.2,-6.6).curveTo(2.2,-6.3,2,-6).lineTo(2,-8.2).curveTo(2.1,-8.4,2.2,-8.6).closePath().moveTo(1.1,-9.9).curveTo(1.2,-9.7,1.2,-9.1).lineTo(1.1,-8.4).lineTo(1.1,-3.7).curveTo(1.1,-3.5,1,-3.3).lineTo(1,3.7).curveTo(0.8,4.9,0.6,7.3).curveTo(0.3,9.4,-0.6,10.7).curveTo(-1.3,9.8,-1.4,7.5).curveTo(-1.4,4.8,-1.6,3.5).lineTo(-1.6,-1.2).curveTo(-1.6,-1.9,-2.2,-4.6).curveTo(-2,-5.5,-1.9,-7.1).curveTo(-1.6,-10.5,0,-10.7).curveTo(0.2,-10.7,0.4,-10.7).curveTo(1,-10.1,1.1,-9.9).closePath();
	this.shape_185.setTransform(-0.5,-1.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#000000").beginStroke().moveTo(1.6,-10).curveTo(1.4,-10.3,0.8,-10.8).curveTo(0.6,-10.9,0.4,-10.9).curveTo(-1.1,-10.6,-1.5,-7.2).curveTo(-1.6,-5.6,-1.8,-4.7).curveTo(-1.2,-2,-1.1,-1.4).lineTo(-1.1,3.4).curveTo(-1,4.6,-1,7.4).curveTo(-0.8,9.7,-0.2,10.6).curveTo(0.7,9.2,1,7.1).curveTo(1.2,4.7,1.4,3.5).lineTo(1.4,-3.4).curveTo(1.5,-3.6,1.6,-3.9).lineTo(1.6,-8.6).lineTo(1.6,-9.2).curveTo(1.6,-9.9,1.6,-10).closePath().moveTo(2.6,-8.8).curveTo(2.5,-8.5,2.5,-8.3).lineTo(2.5,-6.1).curveTo(2.6,-6.4,2.6,-6.7).lineTo(2.6,-3.4).curveTo(2.5,-3.2,2.5,-3).lineTo(2.5,4.2).curveTo(2.1,7,1.7,8.7).curveTo(0.9,12,-0.4,12).curveTo(-2,12,-2.2,8.8).curveTo(-2.1,5,-2.2,3.8).lineTo(-2.2,2.7).curveTo(-2.1,2.5,-2.1,2.3).curveTo(-2.1,1.3,-2.2,0.6).lineTo(-2.2,-1.1).curveTo(-2.3,-1.5,-2.4,-1.9).lineTo(-2.4,-3.8).curveTo(-2.7,-3.9,-2.6,-4.7).curveTo(-2.6,-9.2,-1.5,-10.9).curveTo(-1.1,-12,-0.6,-12).curveTo(-0.1,-12,0.3,-11.9).curveTo(1.6,-11.9,2.2,-10.7).curveTo(2.6,-10,2.6,-9.3).curveTo(2.6,-9,2.6,-8.8).closePath();
	this.shape_186.setTransform(-0.9,-1.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,-4).curveTo(1.5,-3.9,1.6,-2.9).curveTo(1.6,-2.8,1.6,-2.7).curveTo(1.5,-1.9,1.5,-0.8).lineTo(1.6,3.8).curveTo(1.6,4.9,1.6,5.3).curveTo(1.6,6.2,1.3,7).curveTo(1.1,7.4,0.6,9).curveTo(-0,10.5,-0.4,10.5).curveTo(-0.8,10.5,-0.8,9.9).curveTo(-0.7,8.4,-0.7,8).curveTo(-0.6,7.3,-1.1,5.3).lineTo(-1.1,-1.5).curveTo(-1.1,-1.9,-1.7,-4).curveTo(-1.5,-4.7,-1.4,-5.5).curveTo(-0.6,-10.5,-0,-10.5).curveTo(0.9,-10.5,1.5,-8.7).closePath();
	this.shape_187.setTransform(-0.7,-1.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#000000").beginStroke().moveTo(2.7,-3.6).curveTo(2.7,-2.9,2.5,-2.6).curveTo(2.6,-2.5,2.6,-2.4).curveTo(2.5,-1,2.7,1).lineTo(2.7,6.3).curveTo(2.5,7,1.6,9.6).curveTo(0.6,11.9,-0.5,11.9).curveTo(-2.2,11.9,-2.3,10.7).curveTo(-1.9,9.3,-1.9,8.8).curveTo(-1.9,8.1,-2.2,5.7).lineTo(-2.2,-0.7).curveTo(-2.9,-0.9,-2.7,-2.2).curveTo(-2.7,-6.8,-1.7,-9.8).curveTo(-0.2,-14.2,2.5,-9.2).lineTo(2.5,-4.7).curveTo(2.7,-4.4,2.7,-3.6).closePath().moveTo(1.6,-4.2).lineTo(1.6,-8.9).curveTo(1,-10.7,0.1,-10.7).curveTo(-0.5,-10.7,-1.3,-5.7).curveTo(-1.4,-4.9,-1.5,-4.2).curveTo(-1,-2.1,-0.9,-1.7).lineTo(-0.9,5.1).curveTo(-0.5,7.1,-0.6,7.8).curveTo(-0.6,8.2,-0.7,9.7).curveTo(-0.7,10.3,-0.3,10.3).curveTo(0.1,10.3,0.7,8.8).curveTo(1.2,7.2,1.4,6.8).curveTo(1.7,6,1.8,5.1).curveTo(1.8,4.7,1.8,3.6).lineTo(1.6,-1).curveTo(1.6,-2.1,1.7,-2.9).curveTo(1.7,-3,1.7,-3.1).curveTo(1.6,-4.1,1.6,-4.2).closePath();
	this.shape_188.setTransform(-0.8,-1.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.8,-7.2).curveTo(1.8,-7.1,1.8,-7).lineTo(1.6,-3.7).curveTo(1.5,-2.9,1.6,-2.4).curveTo(1.1,-0.5,1.1,1).curveTo(1.1,2.5,1.3,3.2).curveTo(1.5,3.9,1.5,5.3).curveTo(1.5,6.9,1,7.7).curveTo(0.1,8.9,-0.8,10.3).lineTo(-0.8,3.7).curveTo(-1.3,1.7,-1.1,0.8).curveTo(-1,0.4,-1.4,-0.6).curveTo(-1.6,-0.9,-1.6,-1.1).curveTo(-1.8,-1.9,-1.8,-2.4).curveTo(-1.8,-4.1,-1.4,-6.5).curveTo(-1.3,-7.8,-1,-8.8).curveTo(-0.9,-9.7,-0.7,-10.3).curveTo(1.2,-9.9,1.6,-8.8).curveTo(1.8,-8.5,1.8,-7.2).closePath();
	this.shape_189.setTransform(-0.8,-1.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#000000").beginStroke().moveTo(2.4,-9.4).curveTo(2.5,-9,2.5,-7.6).curveTo(2.4,-5.8,2.4,-4.6).lineTo(2.4,-2.9).curveTo(2.4,-2.5,2.7,-1.6).curveTo(2.7,-1.5,2.7,-1.4).curveTo(2.5,-0.1,2.5,0.6).curveTo(2.5,1.2,2.7,2.8).curveTo(2.9,4.4,2.9,5.1).curveTo(2.9,6.5,2.8,6.9).curveTo(2.6,7.8,1.9,8.7).curveTo(1.7,9,0.8,10.6).curveTo(-0.1,12,-1.1,12).curveTo(-1.2,12,-1.2,12).curveTo(-1.3,12,-1.4,12).curveTo(-1.9,12,-2.1,11.7).lineTo(-2.1,3.6).curveTo(-2.5,3.1,-2.6,2.1).curveTo(-2.6,1.8,-2.6,1.3).curveTo(-3,0.2,-2.8,-2.9).curveTo(-2.8,-4.9,-2.6,-5.7).curveTo(-2.3,-6.8,-2.1,-10).curveTo(-2.1,-11.2,-1.2,-11.7).curveTo(-0.1,-12.4,1.2,-11.1).curveTo(2.2,-10.5,2.4,-9.4).closePath().moveTo(1.6,-7.7).curveTo(1.6,-9,1.5,-9.3).curveTo(1,-10.5,-0.8,-10.9).curveTo(-1,-10.2,-1.2,-9.3).curveTo(-1.4,-8.3,-1.6,-7).curveTo(-1.9,-4.6,-1.9,-2.9).curveTo(-1.9,-2.5,-1.8,-1.7).curveTo(-1.7,-1.4,-1.6,-1.1).curveTo(-1.2,-0.2,-1.3,0.3).curveTo(-1.4,1.2,-0.9,3.2).lineTo(-0.9,9.8).curveTo(-0,8.3,0.8,7.2).curveTo(1.4,6.3,1.4,4.7).curveTo(1.4,3.4,1.2,2.7).curveTo(1,2,1,0.4).curveTo(1,-1.1,1.4,-2.9).curveTo(1.4,-3.5,1.4,-4.2).lineTo(1.6,-7.5).curveTo(1.6,-7.6,1.6,-7.7).closePath();
	this.shape_190.setTransform(-0.6,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_184},{t:this.shape_183}]}).to({state:[{t:this.shape_186},{t:this.shape_185}]},6).to({state:[{t:this.shape_188},{t:this.shape_187}]},5).to({state:[{t:this.shape_190},{t:this.shape_189}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-13,4.9,23.8);


(lib.leg_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#000000").beginStroke().moveTo(1.5,5.4).curveTo(0.8,5.4,0.4,3.5).curveTo(-0.3,0.7,-0.3,0.5).curveTo(-1,-0.7,-1.5,-1.6).curveTo(-2.4,-3.3,-2.4,-4.2).curveTo(-2.4,-7,0,-2.7).curveTo(2.4,1.5,2.4,4).curveTo(2.4,5.4,1.5,5.4).closePath();
	this.shape_191.setTransform(2.4,5.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#000000").beginStroke().moveTo(-1.5,-1.8).curveTo(-2.4,-3.4,-2.4,-4.2).curveTo(-2.4,-5.2,-1.6,-5.1).curveTo(-0.8,-5.1,-0.5,-3.8).curveTo(-0.4,-3.4,0.2,-2.4).curveTo(0.8,-1.4,0.9,-1.1).curveTo(1,-0.8,1.7,1.5).curveTo(2.4,3.7,2.4,4.1).curveTo(2.4,5.1,1.6,5.1).curveTo(0.9,5.1,0.3,3.3).curveTo(-0.2,1.1,-0.4,0.5).curveTo(-0.4,0.3,-1.5,-1.8).closePath();
	this.shape_192.setTransform(2.4,5.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#000000").beginStroke().moveTo(-1.5,-1.6).curveTo(-2.3,-3.3,-2.3,-4.2).curveTo(-2.3,-5.1,-1.7,-5.1).curveTo(-1.1,-5.2,-0.7,-3.9).lineTo(0.7,-1.1).curveTo(0.7,-1.1,1.5,1.3).curveTo(2.3,3.8,2.3,4.2).curveTo(2.3,5.1,1.6,5.1).curveTo(0.7,5.1,0.2,3.2).curveTo(-0.3,1.1,-0.4,0.6).curveTo(-0.5,0.5,-1.5,-1.6).closePath();
	this.shape_193.setTransform(2.5,5.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#000000").beginStroke().moveTo(-2.4,-4.2).curveTo(-2.4,-5.2,-1.8,-5.1).curveTo(-1.2,-5,-0.6,-3.8).curveTo(0.7,-1.8,0.9,-1).curveTo(1.3,0.8,2.4,4.3).curveTo(2.4,4.5,2.2,4.8).curveTo(2,5.1,1.6,5.1).curveTo(0.5,5.1,-0.1,3.2).curveTo(-0.4,1,-0.5,0.5).curveTo(-0.6,0.2,-1.5,-1.8).curveTo(-2.4,-3.7,-2.4,-4.2).closePath();
	this.shape_194.setTransform(2.6,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_191}]}).to({state:[{t:this.shape_192}]},5).to({state:[{t:this.shape_193}]},5).to({state:[{t:this.shape_194}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,10.7);


(lib.leg_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#000000").beginStroke().moveTo(-0.3,0.5).curveTo(-1.8,-4.1,-1.8,-5.3).curveTo(-1.8,-6.6,-0.9,-6.2).curveTo(-0.1,-5.8,0.1,-4.6).curveTo(0.2,-3.6,1.1,-1.6).curveTo(1.8,2.9,1.8,4.4).curveTo(1.8,4.5,1.8,5.5).curveTo(1.7,6.3,1,6.3).curveTo(0.3,6.3,0.1,3.9).curveTo(-0.2,1.2,-0.3,0.5).closePath();
	this.shape_195.setTransform(1.8,6.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#000000").beginStroke().moveTo(0.9,5.7).curveTo(-0.4,5.7,-0.4,0.7).curveTo(-0.4,0.1,-1.1,-1.9).curveTo(-1.8,-4,-1.8,-4.2).curveTo(-1.8,-5.2,-1.1,-5.6).curveTo(-0.5,-6,-0.2,-4.3).curveTo(0,-3.4,0.9,-1.3).curveTo(1.8,1.1,1.8,4.5).curveTo(1.8,5.7,0.9,5.7).closePath();
	this.shape_196.setTransform(2,6.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#000000").beginStroke().moveTo(-1.8,-4.6).curveTo(-1.8,-5.5,-1,-5.5).curveTo(-0.2,-5.5,-0.2,-4.6).lineTo(-0.2,-4.5).curveTo(-0,-4.2,0.1,-3.8).lineTo(1,-1.2).curveTo(1.8,3.6,1.8,4).lineTo(1.8,4.9).curveTo(1.7,5.5,1,5.5).curveTo(0.5,5.5,0,3.6).curveTo(-0.4,2,-0.4,0.8).curveTo(-0.4,-0.4,-1.6,-3.8).curveTo(-1.8,-4,-1.8,-4.6).closePath();
	this.shape_197.setTransform(2,6.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#000000").beginStroke().moveTo(0.9,5.2).curveTo(-0.1,5.2,-1.7,-4.3).curveTo(-1.7,-5.6,-0.8,-5).curveTo(0.1,-4.5,0.3,-3.7).curveTo(0.4,-3.4,0.6,-2.4).curveTo(0.9,-1.5,0.9,-1.1).curveTo(0.8,-0.4,1.2,1.4).curveTo(1.6,3.4,1.6,4.1).curveTo(1.6,5.2,0.9,5.2).closePath();
	this.shape_198.setTransform(2.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_195}]}).to({state:[{t:this.shape_196}]},5).to({state:[{t:this.shape_197}]},5).to({state:[{t:this.shape_198}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,12.7);


(lib.arm_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#000000").beginStroke().moveTo(-1.1,-0.5).curveTo(-2.2,-3.4,-1.8,-3.7).curveTo(-1,-4,-0.2,-3.1).curveTo(0.3,-2.1,0.3,-2).curveTo(2,0.8,1.8,2.8).curveTo(1.6,4.9,0.3,2.7).curveTo(-0.2,1.8,-1.1,-0.5).closePath();
	this.shape_199.setTransform(1.9,3.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#000000").beginStroke().moveTo(1.2,3.9).curveTo(-0.1,3.9,-2,-2.7).curveTo(-2,-4.6,-1,-3.5).curveTo(-0.4,-2.7,0.5,-0.9).curveTo(0.6,-0.1,1.3,1.5).curveTo(1.7,2.3,2,3.1).curveTo(2,3.9,1.2,3.9).closePath();
	this.shape_200.setTransform(2,3.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#000000").beginStroke().moveTo(2,3.2).curveTo(1.8,3.4,1.5,3.4).curveTo(0.7,3.4,-2.3,-2.5).curveTo(-2.3,-3.1,-1.9,-3.4).curveTo(-1.4,-3.7,-0.8,-2.8).curveTo(-0.7,-2.5,-0.1,-1.9).curveTo(0.6,-1.2,0.7,-1).curveTo(0.7,-0.9,0.9,-0.2).curveTo(1.1,0.4,1.4,0.8).curveTo(1.5,1,2,1.7).curveTo(2.3,2.3,2.3,2.5).curveTo(2.3,2.9,2,3.2).closePath();
	this.shape_201.setTransform(1.7,3.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#000000").beginStroke().moveTo(1.6,4.2).curveTo(0.8,4.2,-2.4,-3).curveTo(-2.4,-5.1,-1.3,-3.6).curveTo(-0.7,-2.8,0.3,-1.1).curveTo(0.6,-0.4,1.6,1.1).curveTo(2.4,2.5,2.4,3.4).curveTo(2.4,4.2,1.6,4.2).closePath();
	this.shape_202.setTransform(1.9,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_199}]}).to({state:[{t:this.shape_200}]},5).to({state:[{t:this.shape_201}]},5).to({state:[{t:this.shape_202}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.7,7.6);


(lib.mcPlayer_static_torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#000000").beginStroke().moveTo(1,0.1).curveTo(1.2,8.3,0.7,10.9).curveTo(0.7,11.1,0.7,11.3).curveTo(0.7,11.3,0.7,11.4).curveTo(0.6,11.5,0.6,11.7).curveTo(0.6,11.7,0.6,11.8).curveTo(0.5,11.8,0.4,11.9).curveTo(0.4,11.9,0.3,12).curveTo(0.2,12,0.1,12.2).curveTo(0,12.2,0,12.2).lineTo(-0.2,12.2).curveTo(-0.4,11.9,-0.7,11.8).curveTo(-0.7,11.7,-0.8,11.5).curveTo(-0.8,9.6,-0.8,7).curveTo(-0.8,6.6,-0.8,6.2).curveTo(-0.9,4.2,-0.9,2.3).curveTo(-0.9,0.2,-1,-2).curveTo(-1.2,-4,-1.6,-7.2).curveTo(-2,-11.1,-0.5,-11.9).curveTo(-0.4,-12.1,-0,-12.2).curveTo(0.2,-12.2,0.4,-12).curveTo(1.9,-11.8,1.7,-7.6).curveTo(1,-1.9,1,0.1).closePath();
	this.shape_203.setTransform(-0.5,-1.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#000000").beginStroke().moveTo(0.7,-11.6).lineTo(0.7,2.4).curveTo(1,7.3,1,9.9).curveTo(1,10.3,1,10.6).curveTo(1.2,11.2,1.2,11.6).curveTo(1.2,12.5,0.6,12.7).lineTo(0.6,12.7).curveTo(0.3,12.8,0.1,12.8).curveTo(0,12.7,-0,12.7).curveTo(-0.1,12.5,-0.3,12.4).curveTo(-1,11.1,-1.1,6.1).curveTo(-1.2,2.8,-1.1,-0.6).curveTo(-1.1,-6.5,-1,-8.8).curveTo(-1,-10.5,-0.9,-11.8).curveTo(-0.8,-12.3,-0.8,-12.6).curveTo(-0.8,-12.6,-0.8,-12.6).curveTo(-0.7,-12.8,-0.6,-12.8).curveTo(-0.4,-12.8,-0.2,-12.8).curveTo(-0.1,-12.8,0,-12.8).curveTo(0.2,-12.8,0.3,-12.8).curveTo(0.4,-12.6,0.5,-12.5).lineTo(0.5,-12).curveTo(0.6,-11.8,0.7,-11.6).closePath();
	this.shape_204.setTransform(-0.4,-0.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#000000").beginStroke().moveTo(1,-6.1).curveTo(1,-5.8,1.2,-5.5).curveTo(1,-4.8,0.9,-3.9).curveTo(0.9,-3.9,0.9,-4).lineTo(0.8,7.8).curveTo(0.9,9,1.1,10.4).curveTo(1.1,11.2,0.7,11.7).curveTo(0.7,12,0.7,12.4).lineTo(0.7,12.7).curveTo(0.5,13,0.4,13.4).curveTo(0.1,13,-0.3,12.8).curveTo(-0.3,12.4,-0.4,12.1).lineTo(-0.6,12).curveTo(-1.2,0.8,-1.2,-1.9).curveTo(-1.2,-6.4,-1.2,-7.6).curveTo(-1.1,-9.6,-0.8,-11.1).curveTo(-0.8,-11.4,-0.8,-11.7).curveTo(-0.8,-12.4,-0.8,-12.9).curveTo(-0.5,-13.1,-0.3,-13.4).curveTo(-0.1,-13.1,0.2,-12.8).curveTo(0.3,-12.7,0.3,-12.5).curveTo(1.4,-11.4,1.2,-8.2).curveTo(1.1,-7.1,1,-6.1).closePath();
	this.shape_205.setTransform(-0.6,0);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#000000").beginStroke().moveTo(0.7,-6.8).curveTo(0.8,-6.7,0.8,-6.7).curveTo(0.8,-6.5,0.8,-6.2).curveTo(0.8,-6.1,0.8,-6).curveTo(0.8,-5.4,0.8,-4.6).curveTo(0.7,-4.4,0.7,-4.1).lineTo(1.2,6.4).curveTo(1.5,13.3,0.3,13.3).curveTo(-0.1,13.3,-0.6,12.7).lineTo(-0.6,11.7).curveTo(-0.7,11.6,-0.7,11.6).curveTo(-0.7,11.5,-0.6,11.5).curveTo(-0.7,11.5,-0.7,11.4).lineTo(-0.7,0.3).curveTo(-1.1,-3.4,-1.1,-5.5).curveTo(-1.1,-6.6,-1,-7.6).curveTo(-1.2,-9.4,-1.2,-10.4).curveTo(-1.2,-11.6,-0.8,-12.4).curveTo(-0.9,-12.4,-0.9,-12.4).curveTo(-0.6,-12.7,-0.2,-13.2).curveTo(-0.2,-13.2,-0.1,-13.3).curveTo(0.1,-13.2,0.3,-13.2).curveTo(0.4,-13.1,0.4,-13).curveTo(1.2,-14.3,1.2,-11.1).curveTo(0.9,-8.2,0.7,-6.8).closePath();
	this.shape_206.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_203}]}).to({state:[{t:this.shape_204}]},5).to({state:[{t:this.shape_205}]},5).to({state:[{t:this.shape_206}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-13.6,3.4,24.4);


(lib.mcPlayer_static_legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#000000").beginStroke().moveTo(1.4,-8.7).curveTo(2.3,-7.2,3,-5.5).curveTo(3.1,-5.3,3.1,-5.1).curveTo(6.9,2.9,6.9,8.9).curveTo(6.9,10,6,10).curveTo(5.9,10,5.8,10).curveTo(5.6,10.2,5.4,10.2).curveTo(5.3,9.9,5.1,9.6).curveTo(4.5,8.7,4.1,6.4).curveTo(3.9,5.4,3.8,4.6).curveTo(3.1,1.2,2.9,0.5).curveTo(2.7,-0.1,1.8,-2.4).lineTo(1.5,-3.1).curveTo(1.2,-3.8,0.8,-4.7).curveTo(0.5,-5.5,0.3,-6.1).lineTo(0.1,-6.6).curveTo(-0.1,-7.2,-0.3,-7.6).curveTo(-0.6,-7.1,-1.1,-6.5).curveTo(-1.8,-4.7,-2.5,-2.9).curveTo(-4,1.1,-4.6,4.9).curveTo(-4.6,5.6,-4.7,6.3).curveTo(-4.7,7.3,-4.8,8.1).curveTo(-4.8,8.5,-4.8,8.8).curveTo(-4.8,10.1,-5.1,10.8).lineTo(-5.6,11).curveTo(-5.7,10.9,-5.8,10.7).curveTo(-5.9,10.9,-6,11).lineTo(-6.8,10.7).curveTo(-6.9,9.4,-6.9,6.6).curveTo(-6.9,3.9,-6.5,2.8).curveTo(-6.2,1.8,-6,0.9).curveTo(-5.8,0.4,-5.7,-0.2).curveTo(-5.3,-1.6,-5,-2.6).curveTo(-4,-7.6,-1.6,-10).curveTo(0.5,-12.2,0.6,-9.6).curveTo(1,-9.3,1.4,-8.7).closePath();
	this.shape_207.setTransform(0,19.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#000000").beginStroke().moveTo(0.4,-9.1).curveTo(0.3,-11.4,-1.3,-8.9).curveTo(-1.3,-8.8,-1.3,-8.8).curveTo(-2.1,-7.9,-3,-6).curveTo(-5.6,-1,-6,3.8).curveTo(-6,4,-6,4.2).curveTo(-6.7,8,-6.7,8.8).curveTo(-6.7,9.6,-6.5,9.9).lineTo(-5.8,10.2).curveTo(-5.6,10.1,-5.5,9.9).curveTo(-5.4,10.1,-5.3,10.1).curveTo(-4.8,10.1,-4.8,10).curveTo(-4.6,9.8,-4.5,9.8).curveTo(-4.5,8.8,-4.5,7.9).curveTo(-4.1,6.8,-3.9,5.5).curveTo(-3.6,2.4,-3.3,0.9).curveTo(-2.9,-0.8,-1.1,-4.8).curveTo(-0.6,-6,-0.3,-6.9).curveTo(0.1,-5.8,1.1,-3.9).curveTo(3,0.1,3.3,1.1).curveTo(3.4,1.4,3.7,2.9).curveTo(3.9,4,4.3,5.5).curveTo(4.7,7.8,5.1,8.7).curveTo(5.5,10,5.8,10).curveTo(6.5,10,6.7,9).curveTo(6.7,7.8,6.7,7.5).curveTo(6.7,2.1,3,-4.8).curveTo(2,-6.7,1.1,-7.8).curveTo(0.8,-8.5,0.4,-9).closePath();
	this.shape_208.setTransform(0,20.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#000000").beginStroke().moveTo(4.2,-1.5).curveTo(4.8,-0.2,5.8,4).curveTo(6.7,7.8,6.7,8.4).curveTo(6.7,9.7,5.8,9.7).curveTo(4.6,9.7,4,6).curveTo(3.1,1.1,2.9,0.5).curveTo(0.3,-4.9,-0.6,-7.1).curveTo(-1,-6.3,-1.7,-5).curveTo(-3.5,-1.7,-4,1).curveTo(-4.2,2.4,-4.5,5.6).curveTo(-4.7,6.9,-4.9,7.9).curveTo(-4.7,8.6,-4.7,8.9).lineTo(-4.7,9.3).curveTo(-4.8,9.4,-4.9,9.6).curveTo(-5,9.8,-5.5,9.8).curveTo(-5.5,9.8,-5.5,9.8).curveTo(-5.6,10,-5.7,10.2).lineTo(-6.5,9.9).curveTo(-6.5,9.5,-6.6,8.8).curveTo(-6.7,8.5,-6.7,8.2).lineTo(-6.7,6.5).curveTo(-6.7,5.8,-6.7,5.1).curveTo(-6.7,3.6,-6.7,3.2).lineTo(-6.4,2.2).curveTo(-5.9,-1.4,-4.5,-4.6).curveTo(-3.3,-7.8,-1.9,-9.4).curveTo(-1.1,-10.2,-0.7,-10.1).curveTo(-0.1,-10.4,1.1,-8.7).curveTo(3.3,-5.7,4.2,-1.5).closePath();
	this.shape_209.setTransform(0.2,20.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#000000").beginStroke().moveTo(0.1,-8.6).curveTo(0.1,-8.6,0.1,-8.5).curveTo(1.2,-7.2,2.5,-4.9).curveTo(6.7,2.5,6.7,8.1).curveTo(6.7,8.9,6.6,9).curveTo(6.6,9.1,6.5,9.2).curveTo(6.4,10.3,5.8,10.3).curveTo(5.5,10.3,5.1,9.4).lineTo(4.9,9.4).curveTo(4.3,5.7,1.3,-2.4).curveTo(1.2,-2.8,1.1,-3.1).curveTo(0.7,-3.9,0.3,-4.8).curveTo(-0.4,-6.2,-0.7,-7.1).curveTo(-1.1,-6.3,-1.6,-5.3).curveTo(-3.6,-1.4,-4,1).curveTo(-4.1,2,-4.5,6.5).curveTo(-4.6,7.5,-4.7,8.3).curveTo(-4.7,8.5,-4.7,8.8).curveTo(-4.7,9.4,-5,9.9).lineTo(-5.2,9.9).curveTo(-5.4,10.4,-5.7,10.4).curveTo(-7,10.4,-6.6,6.6).curveTo(-6.6,4.7,-6.4,2.8).curveTo(-6.1,0.1,-5.1,-2.6).curveTo(-4.4,-4.9,-3.2,-7).curveTo(-1.9,-9.5,-0.9,-10.2).curveTo(0.2,-10.9,0.2,-9).curveTo(0.2,-9,0,-8.7).curveTo(0.1,-8.6,0.1,-8.6).closePath();
	this.shape_210.setTransform(0.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_207}]}).to({state:[{t:this.shape_208}]},5).to({state:[{t:this.shape_209}]},5).to({state:[{t:this.shape_210}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,8.9,13.8,22.1);


(lib.mcPlayer_static_arms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#000000").beginStroke().moveTo(3.8,-1.3).curveTo(4.1,-0.2,4.7,2.6).curveTo(5.4,4.7,6.2,7.1).curveTo(6.2,7.9,5.3,8).curveTo(5.1,8.4,4.7,8.5).curveTo(3.4,7.2,3.2,4.6).curveTo(3.2,4.5,3.2,4.4).curveTo(2.8,2.8,2.3,0.4).curveTo(1.2,-1.9,0.5,-3.6).curveTo(0.2,-4.3,-0.1,-4.9).curveTo(-0.2,-4.9,-0.3,-4.9).curveTo(-0.5,-5,-0.7,-4.9).curveTo(-0.8,-4.6,-0.9,-4.4).curveTo(-2.2,-1.5,-2.8,0.5).curveTo(-3,3,-3.3,4.6).curveTo(-3.5,5.8,-3.8,6.5).curveTo(-4,8.2,-4.3,9.2).lineTo(-4.8,9.2).curveTo(-5.4,8.7,-5.5,7.6).curveTo(-5.6,7.5,-5.5,7.5).curveTo(-6.2,7.3,-6.2,6.7).curveTo(-6.2,5.8,-4.4,-1.4).curveTo(-3.3,-6.3,-1.5,-8.2).curveTo(-1.4,-8.3,-1.4,-8.3).curveTo(-1.2,-8.6,-1.1,-8.8).curveTo(-1,-8.9,-1.1,-9).curveTo(-0.8,-9,-0.6,-9.1).curveTo(-0.5,-9.4,-0.1,-9.1).curveTo(-0,-9,0.1,-9).curveTo(0.2,-8.8,0.4,-8.7).lineTo(0.4,-8.7).curveTo(0.7,-8.4,1,-7.9).curveTo(2.6,-5.5,3.8,-1.3).closePath();
	this.shape_211.setTransform(-0.4,0.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#000000").beginStroke().moveTo(2.4,-3.7).curveTo(3.9,-0.2,4.6,2.4).curveTo(5.4,4.2,6.2,6.2).curveTo(6.2,7.1,6.1,7.2).curveTo(6,7.6,5.3,8).lineTo(5.2,7.9).curveTo(5,8.3,4.5,8.3).curveTo(4.3,8.3,3.4,5.1).curveTo(3.4,4.9,3.3,4.6).curveTo(2.5,2.4,1,-0.8).curveTo(0,-3.2,-0.6,-4.6).curveTo(-0.9,-3.8,-1.4,-2.7).curveTo(-2.9,0.6,-3,1.1).curveTo(-3.1,3.5,-3.3,5.1).curveTo(-3.6,7,-4.3,7.7).curveTo(-4.3,7.8,-4.3,7.8).curveTo(-4.3,7.8,-4.5,8).curveTo(-4.5,8,-4.6,8).curveTo(-4.9,8.2,-5.2,8.2).curveTo(-6.5,8.2,-6.1,7.1).curveTo(-6.1,4.3,-5.3,1.4).curveTo(-4.7,-1.7,-3.2,-4.8).curveTo(-1.9,-7.7,-1.3,-8.1).curveTo(-1.2,-8.1,-1.2,-8.1).curveTo(-1.1,-8.2,-1,-8.3).curveTo(-0.8,-8.3,-0.7,-8.3).curveTo(-0.6,-8.3,-0.5,-8.3).curveTo(-0.3,-8.2,-0.1,-8.1).curveTo(0.2,-7.9,0.4,-7.8).curveTo(1.1,-6.9,2.4,-3.7).closePath();
	this.shape_212.setTransform(-0.2,0.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#000000").beginStroke().moveTo(0.7,-3.9).curveTo(0.6,-4,0.6,-4.1).lineTo(0.6,-4).curveTo(0.4,-4.1,0,-4.2).curveTo(-0.1,-4.2,-0.1,-4.2).curveTo(-0.7,-4.2,-0.9,-3.8).lineTo(-0.9,-3.9).curveTo(-2.2,-0.9,-2.8,-0.2).curveTo(-3.9,0.9,-3.8,3.6).curveTo(-3.7,6.2,-5.1,7.5).curveTo(-5.9,7.4,-5.9,6.5).curveTo(-5.9,1.4,-2.6,-4.9).curveTo(-1.7,-6.7,-1.1,-7.7).curveTo(-0.7,-8,-0.3,-8.3).curveTo(-0.1,-8.2,-0,-8.1).curveTo(0.4,-7.6,0.8,-7.3).curveTo(1.5,-6.1,2.4,-4.3).curveTo(5.9,2.8,5.9,7.2).curveTo(5.9,8.3,5.1,8.3).curveTo(3.6,8.3,3.1,5).curveTo(2.8,1.1,2.4,0).curveTo(2,-1.1,0.9,-3.5).curveTo(0.8,-3.7,0.7,-3.9).closePath();
	this.shape_213.setTransform(-0.3,0);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#000000").beginStroke().moveTo(0,-7.9).curveTo(1.1,-10.2,6.3,7.1).curveTo(6.3,7.6,6,7.9).curveTo(5.8,8,5.6,8.1).curveTo(5.4,8.2,5,8.2).curveTo(4.2,8.2,3.3,5).curveTo(3.1,4,2.9,3.2).curveTo(2.5,2.3,2.1,1.2).curveTo(0.9,-2.1,-0.2,-5.2).curveTo(-0.2,-5.3,-0.3,-5.4).curveTo(-0.3,-5.4,-0.3,-5.4).curveTo(-0.6,-4.8,-1,-4).curveTo(-2.6,-0.7,-3,0.3).curveTo(-3.2,0.8,-3.7,4.2).curveTo(-3.9,5.4,-4.4,6.3).lineTo(-4.4,6.9).lineTo(-4.6,7.1).curveTo(-4.8,7.1,-5,7.2).curveTo(-5.1,7.4,-5.4,7.6).lineTo(-6.2,7.3).curveTo(-6.3,7,-6.3,6.4).curveTo(-6.3,5.2,-6.1,4.1).curveTo(-6.1,-0.7,-2.9,-5.7).curveTo(-2.1,-7,-1.4,-7.7).curveTo(-1.1,-7.9,-0.8,-8.1).curveTo(-0.5,-8,0,-7.9).closePath();
	this.shape_214.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_211}]}).to({state:[{t:this.shape_212}]},5).to({state:[{t:this.shape_213}]},5).to({state:[{t:this.shape_214}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-9,12.3,18.5);


(lib.mcPlayer_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,-7.2).curveTo(4.9,-6.7,6.4,-5.2).curveTo(7.6,-3.8,7.6,-2.5).curveTo(7.6,-0.2,6.1,2.8).curveTo(4.3,6.2,2.1,7.4).lineTo(-1.7,7.4).curveTo(-5.7,6.5,-7,4.7).curveTo(-7.6,3.8,-7.6,1.8).curveTo(-7.6,-1.2,-6.1,-3.7).curveTo(-3.6,-8,2.4,-7.2).closePath();
	this.shape_215.setTransform(0,-22);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#000000").beginStroke().moveTo(6.3,-29.5).curveTo(9.1,-27.7,9.1,-24.6).curveTo(9.1,-21.6,7.4,-18.1).curveTo(4.9,-13.1,0.2,-13.1).curveTo(0,-13.1,-0.1,-13.1).lineTo(-0.1,-8.5).curveTo(0.1,-8.2,0.5,-7.7).curveTo(2.1,-5.3,3.3,-1.1).curveTo(3.7,0.1,4.3,3.7).curveTo(4.9,7.1,4.9,7.6).curveTo(4.9,8.5,4.1,8.6).curveTo(2.9,7.4,2.7,4.7).curveTo(2.4,1.5,2,0.5).curveTo(1.8,-0,0.3,-3.6).curveTo(0.1,-4.2,-0.1,-4.6).lineTo(-0.1,1.6).curveTo(0.1,3.3,0.1,6.5).curveTo(0.1,8.4,0.1,9.8).curveTo(0.6,10.1,1.3,11.2).curveTo(3.3,14.2,4,18.6).curveTo(4.5,20.3,5.3,24.1).curveTo(6.1,28.1,6.1,28.6).curveTo(6.1,30,5.4,30.1).curveTo(4.6,28.4,4,25.3).curveTo(3.1,21.1,2.9,20.4).curveTo(2.6,19.5,0.8,15.2).curveTo(-0.1,13,-0.4,11.8).curveTo(-1.5,14.4,-2.5,17).curveTo(-4.9,23,-4.9,28.7).curveTo(-4.9,30,-5.1,30.7).lineTo(-5.6,30.9).curveTo(-6.4,29.9,-6.6,28).curveTo(-6.6,27.3,-6.6,25.2).curveTo(-6.6,20.6,-3.4,13.9).curveTo(-2.1,11.4,-1.4,10.4).curveTo(-1.4,5.1,-1.6,-4.5).curveTo(-1.8,-4.1,-2,-3.5).curveTo(-3.5,0.6,-3.6,0.9).curveTo(-4,2.5,-4.2,5.3).curveTo(-4.4,7.9,-4.9,9.3).lineTo(-5.4,9.4).curveTo(-5.9,8.9,-6.1,7.7).curveTo(-6.1,7.3,-6.1,5.8).curveTo(-6.1,2.5,-3.4,-4.7).curveTo(-2.3,-7.7,-1.6,-8.7).curveTo(-1.5,-11.8,-1.2,-13.2).curveTo(-6.5,-13.5,-8.3,-16.5).curveTo(-9.1,-17.8,-9.1,-20.3).curveTo(-9.1,-25.1,-6.3,-27.9).curveTo(-3.8,-30.4,0,-30.8).curveTo(3.6,-31.1,6.3,-29.5).closePath().moveTo(2.4,-29.3).curveTo(-3.6,-30.1,-6.1,-25.7).curveTo(-7.6,-23.2,-7.6,-20.3).curveTo(-7.6,-18.3,-7,-17.4).curveTo(-5.7,-15.6,-1.7,-14.7).lineTo(2.1,-14.7).curveTo(4.3,-15.9,6.1,-19.2).curveTo(7.6,-22.3,7.6,-24.5).curveTo(7.6,-25.9,6.4,-27.2).curveTo(4.9,-28.8,2.4,-29.3).closePath();

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#000000").beginStroke().moveTo(0.1,-28.6).curveTo(-6.9,-27.1,-6.9,-18.3).curveTo(-6.9,-17.4,-4.9,-15.9).curveTo(-3.1,-14.6,-1.5,-14.4).lineTo(-1.5,-14.4).curveTo(-1.2,-14.3,-0.9,-14.3).curveTo(-0.6,-14.3,-0.5,-14.4).curveTo(3,-14.6,5.4,-19.2).curveTo(7.1,-22.7,7.1,-24.4).curveTo(7.1,-26.8,4.9,-28).curveTo(2.8,-29.2,0.1,-28.6).closePath().moveTo(6.8,-18.3).curveTo(4.2,-13.1,-0.4,-12.8).lineTo(-0.4,-7.3).curveTo(0.3,-6.5,1.8,-3.1).curveTo(4.6,3.9,4.6,7).lineTo(4.6,8.2).curveTo(4.5,9,3.9,9).curveTo(3.6,9,2.8,5.8).curveTo(1.8,2.1,1.4,1.3).curveTo(0.8,-0,0.1,-2.2).curveTo(-0.2,-2.9,-0.4,-3.5).lineTo(-0.4,0.2).curveTo(0.1,6.7,0.1,9.8).curveTo(0.1,10.9,0,11.6).curveTo(0.9,13,2.4,16).curveTo(6.1,23.9,6.1,29.2).curveTo(6.1,30,5.2,30).curveTo(4.6,30,3.9,26.2).curveTo(2.9,21.3,2.6,20.6).curveTo(1.9,18.9,0.1,14.9).curveTo(-0.4,13.6,-0.8,12.8).curveTo(-1.2,13.7,-1.8,15.4).curveTo(-3.5,19.5,-4,21.1).curveTo(-4.6,23,-4.8,25.8).curveTo(-4.8,27.3,-4.9,30.5).curveTo(-5,30.5,-5.1,30.6).curveTo(-5.2,30.7,-5.6,30.7).curveTo(-6.6,30.7,-6.4,26.1).curveTo(-6.4,20.5,-3.4,14.6).curveTo(-2.3,12.4,-1.4,11.5).curveTo(-1.6,5.8,-1.9,-4.8).curveTo(-2.1,-4.1,-2.6,-2.9).curveTo(-3.8,0.1,-3.9,1).curveTo(-3.9,2.3,-4.4,4.7).curveTo(-4.8,7.1,-4.9,8.5).curveTo(-5,8.5,-5.1,8.6).curveTo(-5.2,8.7,-5.6,8.7).curveTo(-6.6,8.7,-6.4,6.1).curveTo(-6.4,1.2,-3.9,-4.2).curveTo(-2.5,-7.1,-1.9,-7.5).curveTo(-1.9,-10,-1.8,-12).curveTo(-1.7,-12.5,-1.7,-12.8).curveTo(-4.8,-13.1,-6.9,-15.5).curveTo(-8.6,-17.5,-8.6,-18.4).curveTo(-8.6,-20.6,-7.4,-24).curveTo(-6,-27.9,-4.4,-28.8).curveTo(1.8,-32.2,5.7,-29.5).curveTo(8.6,-27.5,8.6,-24.4).curveTo(8.6,-21.9,6.8,-18.3).closePath();
	this.shape_217.setTransform(0.4,-0.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-7.1).curveTo(2.7,-7.7,4.8,-6.5).curveTo(7,-5.3,7,-2.9).curveTo(7,-1.2,5.3,2.3).curveTo(2.9,6.9,-0.6,7.2).curveTo(-0.7,7.3,-1,7.3).curveTo(-1.3,7.3,-1.6,7.2).lineTo(-1.6,7.2).curveTo(-3.2,7,-5,5.6).curveTo(-7,4.2,-7,3.3).curveTo(-7,-5.5,0,-7.1).closePath();
	this.shape_218.setTransform(0.5,-21.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-6.8).curveTo(2.8,-7.2,4.7,-6).curveTo(6.8,-4.7,6.8,-1.9).curveTo(6.8,-0.2,5.5,2.7).curveTo(3.6,6.9,0.7,6.9).curveTo(-4.1,6.9,-5.8,3.5).curveTo(-6.8,1.7,-6.8,-0.9).curveTo(-6.8,-3.2,-4.7,-4.9).curveTo(-2.7,-6.5,0,-6.8).closePath();
	this.shape_219.setTransform(0.3,-21.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#000000").beginStroke().moveTo(3.2,-30.1).curveTo(5.5,-29.2,6.5,-28.1).curveTo(7.8,-27.3,8.2,-25.7).curveTo(8.3,-25.2,8.3,-23.5).curveTo(8.3,-21,6.8,-17.6).curveTo(4.7,-12.8,1,-12.8).curveTo(0.1,-12.8,-0.8,-12.9).curveTo(-0.1,-10.8,0,-8.3).curveTo(0,-8.1,0,-7.8).curveTo(0,-7.8,0,-7.7).curveTo(0,-7.5,0,-7.2).lineTo(0,-7.1).curveTo(0.7,-5.9,1.8,-3.9).curveTo(5.3,3.2,5.3,7.6).curveTo(5.3,8.7,4.5,8.7).curveTo(3,8.7,2.5,5.4).curveTo(2.2,1.5,1.8,0.4).curveTo(1.4,-0.8,0,-3.7).lineTo(-0.1,11.2).curveTo(0.2,11.5,0.6,12).curveTo(2.6,14.9,4.2,19.4).curveTo(6.5,28.3,6.5,29.4).curveTo(6.5,30.4,5.8,30.4).curveTo(4.6,30.4,4,26.6).curveTo(3.2,21.4,3,21.1).curveTo(1.9,18.4,0,14.9).curveTo(-0.3,14.2,-0.6,13.7).curveTo(-0.7,13.7,-0.7,13.7).curveTo(-0.9,13.7,-1,13.7).curveTo(-1.5,14.5,-2.2,15.7).curveTo(-4.4,19.3,-4.6,19.8).curveTo(-5.3,21.4,-5.4,23.7).curveTo(-5.4,25,-5.2,27.4).curveTo(-5.2,27.7,-5,28.6).curveTo(-4.7,29.5,-4.7,29.8).lineTo(-4.7,30.2).curveTo(-4.8,30.3,-4.9,30.5).curveTo(-5.1,30.7,-5.5,30.7).curveTo(-6.5,30.7,-6.7,29.1).lineTo(-6.7,27.4).curveTo(-6.7,20.1,-3.5,14.4).curveTo(-2.4,12.5,-1.5,11.8).lineTo(-1.5,-3.5).curveTo(-2.8,-0.5,-3.4,0.2).curveTo(-4.5,1.3,-4.4,4).curveTo(-4.3,6.6,-5.7,7.9).curveTo(-6.5,7.8,-6.5,6.9).curveTo(-6.5,1.8,-3.2,-4.5).curveTo(-2.3,-6.3,-1.6,-7.3).curveTo(-1.7,-7.6,-1.7,-7.7).curveTo(-1.7,-8.6,-1.5,-8.7).lineTo(-1.5,-9.1).curveTo(-1.7,-9.8,-1.7,-11.4).curveTo(-1.7,-12.4,-1.7,-13).curveTo(-5.9,-13.8,-7.5,-17.3).curveTo(-8.5,-19.6,-8.2,-22.2).curveTo(-8.2,-25.3,-7.3,-26.3).curveTo(-6.1,-27.6,0,-30.6).curveTo(1,-31,3.2,-30.1).closePath().moveTo(0,-28.3).curveTo(-2.7,-28,-4.6,-26.4).curveTo(-6.7,-24.7,-6.7,-22.4).curveTo(-6.7,-19.8,-5.8,-18).curveTo(-4.1,-14.6,0.7,-14.6).curveTo(3.7,-14.6,5.5,-18.8).curveTo(6.8,-21.7,6.8,-23.4).curveTo(6.8,-26.2,4.7,-27.5).curveTo(2.8,-28.7,0,-28.3).closePath();
	this.shape_220.setTransform(0.2,-0.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#000000").beginStroke().moveTo(5.5,-18.1).curveTo(7.3,-21.7,7.3,-24).curveTo(7.3,-25.2,4,-27.3).curveTo(0.7,-29.5,-1.1,-28.4).curveTo(-4,-27.5,-5.8,-25.5).curveTo(-7.3,-23.6,-7.3,-21.7).curveTo(-7.3,-19.5,-6,-17.5).curveTo(-4.6,-15.1,-1.8,-13.9).lineTo(1.5,-13.9).curveTo(3.5,-14.3,5.5,-18.1).closePath().moveTo(-0,-12.4).curveTo(-0.1,-12.1,-0.3,-11.6).curveTo(-0.5,-10.9,-0.5,-10.6).curveTo(-0.4,-9.2,-0.4,-8).curveTo(-0.3,-8,-0.2,-8).curveTo(-0.3,-7.9,-0.3,-7.7).curveTo(-0.2,-7.4,-0.1,-7.1).curveTo(-0.1,-7.1,-0.1,-7.1).curveTo(0.7,-5.8,2.1,-2.3).curveTo(5.5,5.7,5.5,8.3).curveTo(5.5,8.9,5.4,8.8).curveTo(5.3,9.1,4.6,9.1).curveTo(3.8,9.1,3,5.9).curveTo(2,2.2,1.8,1.1).curveTo(1.6,0.7,0.1,-2.9).curveTo(-0,-3.3,-0.2,-3.6).curveTo(0,0.7,0,2.5).curveTo(0,7.3,-0.1,10.2).curveTo(-0.1,10.3,0,10.4).curveTo(0,10.5,0,10.6).curveTo(0,10.7,0.3,11.9).curveTo(0.5,12.2,0.7,12.4).curveTo(1.6,13.9,2.9,16.7).curveTo(6.8,25,6.8,29.1).curveTo(6.8,30.6,6,30.6).curveTo(5.3,30.6,4.5,26.8).curveTo(3.4,22,3.1,21.3).curveTo(2.5,19.8,0.5,15.5).curveTo(-0.3,13.8,-0.7,12.9).curveTo(-1.1,13.8,-2,15.4).curveTo(-3.9,18.9,-4.3,20.7).curveTo(-4.6,22.7,-4.6,25.1).curveTo(-4.5,26.4,-4.5,29.2).curveTo(-4.5,29.8,-4.8,30.2).lineTo(-5.3,30.4).curveTo(-6,30.2,-6.2,28).curveTo(-6.3,27.3,-6.3,25).curveTo(-6.3,19.7,-3.3,14.1).curveTo(-2.2,12.2,-1.4,11.4).curveTo(-1.5,11.4,-1.5,11.4).lineTo(-1.5,-4.5).curveTo(-2.9,-1.7,-3.5,-0).curveTo(-4.8,4,-4.9,4.5).curveTo(-4.8,5.3,-4.8,7.3).lineTo(-4.8,7.8).lineTo(-5,8).curveTo(-5.3,8.1,-5.6,8.1).curveTo(-6.8,8.1,-6.5,5.2).curveTo(-6.5,0.3,-3.3,-4.8).curveTo(-2.4,-6.1,-1.7,-6.9).curveTo(-2,-9.2,-2,-10.4).curveTo(-2,-11.7,-1.6,-12.5).curveTo(-5.6,-13.1,-7.5,-17).curveTo(-8.6,-19.3,-8.8,-21.8).curveTo(-8.8,-24.5,-7.5,-26.3).curveTo(-5.8,-28.5,-1.6,-30.2).curveTo(1.4,-31.4,5.2,-29.1).curveTo(8.8,-26.8,8.8,-24.1).curveTo(8.8,-20.7,7.5,-17.7).curveTo(5.3,-12.4,-0,-12.4).closePath();
	this.shape_221.setTransform(0.3,-0.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.5,3.2).curveTo(3.5,7,1.5,7.4).lineTo(-1.8,7.4).curveTo(-4.6,6.3,-6,3.9).curveTo(-7.3,1.9,-7.3,-0.3).curveTo(-7.3,-2.3,-5.8,-4.1).curveTo(-4,-6.2,-1.1,-7).curveTo(0.7,-8.2,4,-5.9).curveTo(7.3,-3.8,7.3,-2.7).curveTo(7.3,-0.3,5.5,3.2).closePath();
	this.shape_222.setTransform(0.3,-21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_216},{t:this.shape_215}]}).to({state:[{t:this.shape_218},{t:this.shape_217}]},5).to({state:[{t:this.shape_220},{t:this.shape_219}]},5).to({state:[{t:this.shape_222},{t:this.shape_221}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-30.8,18.3,61.7);


(lib.mcPlayer_running_torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,-0.2).curveTo(-0.1,-0.2,0,-0.2).curveTo(0.1,0,0.2,0.2).curveTo(0.1,0.2,0.1,0.2).curveTo(-0,-0.1,-0.2,-0.2).closePath();
	this.shape_223.setTransform(5.2,-15.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#000000").beginStroke().moveTo(4.8,-8.5).curveTo(4.9,-8.4,5,-8.1).curveTo(5.1,-8.1,5.2,-8.1).curveTo(5.3,-7.9,5.3,-7.7).curveTo(5.1,-7.2,5.1,-6.5).curveTo(5,-6.5,4.9,-6.5).curveTo(4.5,-5.5,2.9,-2.5).curveTo(2.9,-2.5,2.9,-2.4).curveTo(2.9,-2.4,2.9,-2.3).curveTo(2.7,-2,2.5,-1.5).curveTo(2,-1.2,1.9,-0.4).curveTo(0.3,2.7,-0.2,4).curveTo(-1,7.6,-1.7,10).curveTo(-2.4,12.6,-3.2,13.7).curveTo(-3.2,13.7,-3.1,13.8).curveTo(-3.4,14.1,-3.7,14.5).curveTo(-3.8,14.7,-3.9,14.9).curveTo(-5.3,13.9,-5.3,13).curveTo(-5.3,12.8,-5.3,12.7).curveTo(-4.7,9.3,-0.1,-0.4).curveTo(-0.1,-0.5,-0.1,-0.5).curveTo(0.2,-1,0.3,-1.4).curveTo(0.3,-1.4,0.3,-1.4).lineTo(0.3,-1.4).curveTo(0.3,-1.5,0.3,-1.6).curveTo(0.7,-2.1,0.8,-2.7).curveTo(1,-2.8,1.1,-3).lineTo(1.1,-3).curveTo(2.2,-5.2,3,-6.5).curveTo(3.3,-6.7,3.5,-7.1).curveTo(3.7,-7.5,3.8,-7.9).curveTo(4.4,-8.3,4.8,-8.5).closePath().moveTo(-1,-14.9).curveTo(-1.1,-14.9,-1.1,-14.9).curveTo(-1.1,-14.9,-1.1,-15).curveTo(-1.1,-14.9,-1,-14.9).closePath();
	this.shape_224.setTransform(0.3,-6.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#000000").beginStroke().moveTo(2.5,-10.1).curveTo(2.4,-10,2.3,-9.9).lineTo(2.3,-9.9).curveTo(2.1,-9.6,1.9,-9.2).curveTo(1.8,-8.4,0,-5.1).curveTo(-0.2,-4.8,-0.4,-4.5).curveTo(-1,-2.9,-1.6,-1).curveTo(-1.9,-0.1,-2.8,4.5).curveTo(-3.4,7.9,-3.6,9.3).curveTo(-3.7,9.4,-3.7,9.6).curveTo(-3.3,10.3,-2.5,10.7).curveTo(-1.4,8.8,-0.7,6).curveTo(-0.4,4.5,0,0.9).curveTo(0.1,-0.3,0.8,-2.2).lineTo(0.8,-2.2).curveTo(1.1,-3.6,2.3,-5.2).lineTo(2.3,-5.2).curveTo(2.3,-6,2.7,-6.5).lineTo(2.7,-6.6).curveTo(2.6,-6.8,2.6,-6.9).curveTo(3.1,-8.2,3.7,-9.5).curveTo(3.7,-9.5,3.7,-9.6).curveTo(3.7,-9.6,3.7,-9.6).curveTo(3.7,-9.6,3.7,-9.6).curveTo(3.7,-9.8,3.7,-10).curveTo(3.5,-10.3,3.3,-10.7).curveTo(3,-10.5,2.8,-10.5).curveTo(2.7,-10.4,2.7,-10.4).curveTo(2.6,-10.3,2.5,-10.1).closePath();
	this.shape_225.setTransform(1,-2.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#000000").beginStroke().moveTo(5,-10.1).curveTo(4.9,-10,4.9,-10).curveTo(4.2,-9.4,3.6,-9).curveTo(3.7,-8.9,3.8,-8.9).curveTo(3.5,-8.5,3.2,-8).curveTo(3.2,-7.9,3.2,-7.8).curveTo(3.2,-7.5,0.9,-4.1).curveTo(0,-2.9,-0.6,-1.9).curveTo(-0.5,-2,-0.4,-2.2).curveTo(-4.6,5.2,-5.6,8.3).curveTo(-5.5,9.4,-5.3,10).curveTo(-5.1,10,-4.9,10.1).curveTo(-4.7,9.9,-4.4,9.6).curveTo(-4.3,9.5,-4.2,9.5).curveTo(-1.8,5.1,-0,1.8).curveTo(-0,2,-0,2.1).curveTo(0.1,2,0.2,1.9).curveTo(0.8,0.8,2.1,-1.2).lineTo(2.9,-3).curveTo(2.9,-3.3,3,-3.6).curveTo(4.9,-7,5.4,-8.1).curveTo(5.5,-9,5.8,-9.7).curveTo(5.6,-9.9,5,-10.1).closePath().moveTo(-5.8,6.8).lineTo(-5.8,6.8).curveTo(-5.8,6.8,-5.8,6.7).curveTo(-5.8,6.8,-5.8,6.8).closePath();
	this.shape_226.setTransform(1.5,-3.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.5,0.8).curveTo(0.3,0.8,0.1,0.8).curveTo(-0.1,0.2,-0.5,-0.8).lineTo(-0.5,-0.8).curveTo(0.3,-0.4,0.5,0.1).curveTo(0.5,0.3,0.5,0.8).closePath();
	this.shape_227.setTransform(7.6,-23.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#000000").beginStroke().moveTo(5.4,-11.8).curveTo(6,-11.8,6.6,-11.9).curveTo(6.5,-11.1,6.4,-10.6).curveTo(6,-9.8,3.9,-6.3).curveTo(3.8,-6.2,3.7,-6).curveTo(3.8,-6,3.8,-5.9).curveTo(2.2,-3.5,-0.2,1.6).curveTo(-1.1,2.5,-1.3,3.9).curveTo(-1.8,4.5,-2,5).curveTo(-2.1,4.9,-2.1,4.8).curveTo(-2.4,5.6,-2.7,6.5).curveTo(-3.4,8.2,-4.1,9.4).curveTo(-5.1,10.2,-5.4,11.9).curveTo(-5.6,11.8,-6.3,10.9).curveTo(-6.4,10.7,-6.6,10.5).curveTo(-6.4,8.2,-3.8,2.9).curveTo(-3.4,2.5,-2.9,1.9).curveTo(-2,0.6,-2,-0.1).curveTo(-2,-0.3,-2,-0.4).curveTo(-1.6,-1.2,-1,-2.1).curveTo(0.4,-4.2,1,-5.4).curveTo(1.3,-5.8,1.7,-6.3).curveTo(2.8,-7.9,2.9,-8.7).curveTo(4.2,-10.7,5,-11.5).lineTo(5,-11.5).curveTo(5.2,-11.7,5.4,-11.8).closePath().moveTo(-1,2.1).lineTo(-1,2.2).lineTo(-1,2.2).curveTo(-1,2.2,-1,2.1).closePath();
	this.shape_228.setTransform(1.7,-0.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#000000").beginStroke().moveTo(4.3,-11.3).curveTo(3.3,-10.2,1.6,-7.2).curveTo(1.5,-7.2,1.5,-7.1).curveTo(1.4,-7,1.3,-6.8).curveTo(1.1,-6.4,0.6,-5.6).curveTo(0.5,-5.4,0.3,-5.1).curveTo(0.2,-5,0.2,-4.9).lineTo(0.2,-4.9).curveTo(0.2,-4.6,-0,-4.3).curveTo(0,-4.4,0.1,-4.5).curveTo(0,-4.3,-0,-4.2).curveTo(-3.5,2.5,-4.8,6.4).curveTo(-5.1,7.3,-5.3,8).curveTo(-5.4,9,-5.6,9.7).curveTo(-5.5,10.6,-5.3,11.4).curveTo(-4.9,11.2,-4.2,10.9).curveTo(-4.3,10.9,-4.3,11).lineTo(-4.3,10.9).curveTo(-2.9,9,-2,6.2).curveTo(-1.7,5.2,-1.5,4.4).curveTo(-1.5,4.2,-1.4,4.1).curveTo(-0.8,2,-0.4,0.7).curveTo(-0.3,0.3,0.9,-1.7).curveTo(0.8,-1.5,0.8,-1.4).curveTo(0.9,-1.7,1.1,-2).curveTo(1.3,-2.3,1.5,-2.7).curveTo(2.5,-4.5,2.7,-5).curveTo(2.8,-5.2,3.2,-5.9).curveTo(3.5,-6.3,3.9,-6.9).curveTo(3.9,-7.3,4.3,-7.6).curveTo(4.3,-7.6,4.3,-7.7).curveTo(5.4,-9.8,5.6,-10.4).curveTo(5.1,-11.4,5,-11.4).curveTo(4.7,-11.4,4.3,-11.3).closePath().moveTo(-1,-3.5).lineTo(-1.1,-3.4).curveTo(-1,-3.5,-1,-3.5).closePath();
	this.shape_229.setTransform(1.8,-2.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#000000").beginStroke().moveTo(5.4,-11.2).curveTo(5.1,-11,4.8,-10.7).curveTo(3.8,-10,2.7,-8.7).curveTo(2.6,-8.4,2.5,-8.2).curveTo(2.1,-7.7,1.6,-7.5).curveTo(1.1,-6.9,0.5,-6.1).curveTo(0.6,-6.1,0.7,-6.1).curveTo(0.4,-5.7,0.1,-5.3).curveTo(-6.7,4.2,-6.7,9.7).lineTo(-6.7,9.8).curveTo(-6.7,9.8,-6.7,9.8).curveTo(-6.5,10.2,-6.5,10.7).lineTo(-6.5,10.8).curveTo(-6.5,10.8,-6.5,10.9).curveTo(-6.3,11.2,-6.2,11.4).curveTo(-6.1,11.4,-6.1,11.4).curveTo(-5.7,11.5,-5,11.5).lineTo(-5.1,11.3).curveTo(-5.1,10.9,-4.8,10.6).curveTo(-4.8,10.2,-4.8,9.9).curveTo(-4.8,9.9,-4.8,9.9).curveTo(-4.2,8.8,-3.4,6.3).curveTo(-1.6,0.8,-1.4,0.3).curveTo(-0.7,-0.8,1.2,-3.2).curveTo(1.1,-3.1,1.1,-3).curveTo(1.4,-3.5,2,-3.9).curveTo(2.2,-4.2,2.5,-4.5).curveTo(2.8,-4.9,3.2,-5.3).curveTo(3.3,-5.6,3.6,-5.9).curveTo(3.6,-6,3.6,-6.2).curveTo(6.2,-9.2,6.7,-10.2).curveTo(6.4,-11.1,6,-11.5).curveTo(5.8,-11.3,5.4,-11.2).closePath();
	this.shape_230.setTransform(2.3,-1.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,-0.7).lineTo(-0.2,-0.8).curveTo(0.3,-0.3,0.3,0.8).curveTo(0.2,0.7,-0.1,0.6).curveTo(-0.3,0.4,-0.3,0.1).curveTo(-0.3,-0.6,-0.2,-0.7).closePath();
	this.shape_231.setTransform(13.8,-18.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#000000").beginStroke().moveTo(4.5,-11.8).curveTo(4.7,-12,4.8,-12.2).curveTo(5,-12.5,5.1,-12.7).curveTo(5.2,-12.8,5.4,-12.9).curveTo(6.1,-12.9,6.7,-12.4).curveTo(6.4,-12,6.4,-11.3).curveTo(6.4,-11.2,6.4,-11.2).curveTo(6.3,-11.2,6.2,-11.2).curveTo(6,-10,3.6,-6.4).curveTo(3.2,-5.8,2.9,-5.2).curveTo(2.6,-4.9,2.5,-4.5).curveTo(1.8,-3.7,1.6,-2.6).curveTo(1.6,-2.7,1.6,-2.7).curveTo(1.3,-2.1,0.9,-1.4).curveTo(-1.4,2.8,-1.8,3.8).curveTo(-3.4,9.1,-3.4,9.3).curveTo(-3.8,10.3,-4.2,11.1).curveTo(-4.1,11.1,-4,11.2).curveTo(-4,11.4,-4,11.7).lineTo(-4,11.7).curveTo(-4,11.8,-4,11.8).curveTo(-4.2,12.2,-4.3,12.7).curveTo(-4.3,12.7,-4.3,12.7).curveTo(-4.6,12.8,-4.8,12.9).curveTo(-5.4,12.8,-6.2,12.9).curveTo(-6.3,12.8,-6.4,12.7).curveTo(-6.5,12.6,-6.7,12.4).curveTo(-6.6,12.4,-6.6,12.4).curveTo(-6.6,12.2,-6.6,12).curveTo(-6.6,9.2,-1.8,-0.5).curveTo(-0.6,-2.9,0.2,-4.5).curveTo(0.2,-4.5,0.2,-4.5).curveTo(0.4,-4.8,0.6,-5.1).curveTo(1.5,-6.7,1.8,-7.8).curveTo(1.8,-7.7,1.8,-7.7).curveTo(3.5,-10.6,4.5,-11.8).closePath();
	this.shape_232.setTransform(2.2,-2.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#000000").beginStroke().moveTo(11.7,-10.6).curveTo(11.4,-10.8,11,-10.9).curveTo(10,-10.9,9.4,-10.9).curveTo(8.8,-10.5,8.1,-9.8).curveTo(7.3,-9,6.4,-7.9).curveTo(6.3,-8,6.3,-8).curveTo(5.8,-7,4.6,-5.8).curveTo(3.5,-4.3,2.3,-2.6).curveTo(1.4,-1.3,-0.9,3.1).curveTo(-2,5.2,-2.6,6.4).curveTo(-2.6,7,-3,7.5).curveTo(-3,7.5,-3.1,7.6).curveTo(-3.1,8.3,-3.5,8.8).curveTo(-3.6,9,-3.8,9.1).curveTo(-3.8,9.5,-3.8,10).curveTo(-3.8,10.9,-2.4,10.9).curveTo(-2.1,10.9,-1.8,10.8).curveTo(-1.7,10.3,-1.5,10).lineTo(-1.6,9.9).curveTo(-1.6,9.4,-1.4,9).curveTo(-1.5,8.7,-1.6,8.5).curveTo(-0.8,7.7,0.7,4.8).curveTo(3.3,-0.5,3.5,-0.7).curveTo(4.2,-1.9,5.4,-3.3).curveTo(6.1,-4.9,8.2,-6.3).curveTo(8.2,-6.4,8.2,-6.4).curveTo(8.4,-6.7,8.7,-6.9).curveTo(11,-9.4,11.5,-10.2).curveTo(11.6,-10.2,11.6,-10.2).curveTo(11.6,-10.4,11.7,-10.6).closePath().moveTo(-11.3,-2.7).curveTo(-11.7,-2.2,-11.7,-2).curveTo(-11.7,-2,-11.7,-1.9).curveTo(-11.5,-2.2,-11.3,-2.7).closePath();
	this.shape_233.setTransform(-2.4,-0.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.1,0.1).curveTo(-0,-0,-0.2,-0.1).lineTo(0.2,-0.1).closePath();
	this.shape_234.setTransform(9.6,-13);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#000000").beginStroke().moveTo(14.1,-15.3).lineTo(14.1,-15.3).curveTo(14.1,-15.3,14.1,-15.3).curveTo(14.1,-15.3,14.1,-15.3).closePath().moveTo(1.1,-6.5).curveTo(1,-5.9,1,-5.3).curveTo(0.5,-4.9,0.2,-4.5).curveTo(0.1,-4.6,0.1,-4.6).curveTo(-0.6,-3.7,-2.2,-1.9).curveTo(-2.4,-1.7,-2.5,-1.5).curveTo(-2.5,-1.4,-2.6,-1.2).curveTo(-2.9,-0.8,-3.3,-0.4).curveTo(-5.3,1.7,-6.4,3.7).curveTo(-6.3,3.4,-6.2,3.1).curveTo(-7,4.2,-7.6,5.2).curveTo(-8.8,7.1,-12.3,13.8).lineTo(-12.3,13.8).curveTo(-12.5,14,-12.6,14.4).curveTo(-13.4,14.8,-13.9,15.3).curveTo(-13.9,15.2,-14,15.1).curveTo(-14.3,14.8,-14.1,13.9).curveTo(-14.1,10.6,-6.7,0.3).curveTo(-6.5,-0,-6.3,-0.3).curveTo(-6.3,-0.3,-6.3,-0.3).curveTo(-6.2,-0.4,-6.2,-0.5).curveTo(-6,-0.8,-5.9,-1.1).curveTo(-5.4,-1.8,-5,-2.4).curveTo(-4.5,-2.5,-4.2,-3).curveTo(-4.1,-3.2,-4,-3.3).curveTo(-3.2,-4.3,-2.6,-5).curveTo(-1.5,-5.6,-0.4,-6.7).lineTo(0.8,-6.7).curveTo(0.9,-6.6,1.1,-6.5).closePath();
	this.shape_235.setTransform(8.7,-6.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-0.1).curveTo(0.1,0,0.2,0.1).lineTo(-0.2,-0.1).closePath();
	this.shape_236.setTransform(7.5,-17.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#000000").beginStroke().moveTo(7.5,-9.9).curveTo(7.3,-9.4,5,-6).curveTo(5,-5.8,5.1,-5.5).curveTo(3.3,-4,1.9,-1.7).curveTo(0.8,0,-1.1,2.3).curveTo(-1.4,2.8,-1.7,3.3).curveTo(-3.9,6.4,-5.2,8.1).lineTo(-4.9,8.1).curveTo(-5.5,8.8,-6.3,9.9).curveTo(-6.5,10.2,-6.7,10.5).curveTo(-6.8,10.6,-7.1,10.6).curveTo(-7.4,10.8,-7.8,10.9).lineTo(-7.9,10.2).lineTo(-7.9,10.1).curveTo(-7.8,9.8,-7.7,9.5).curveTo(-7.7,9.4,-7.8,9.1).lineTo(-7.8,9.1).curveTo(-7.8,9,-7.5,8.7).curveTo(-7.5,8.6,-7.4,8.6).curveTo(-4.8,4.1,-2.2,0.1).curveTo(-2.2,-0.1,-2.3,-0.3).curveTo(-2.1,-0.5,-1.9,-0.8).curveTo(-1.1,-1.7,-0.6,-2.3).curveTo(-0.6,-2.3,-0.6,-2.2).curveTo(-0.4,-2.6,-0.1,-3).curveTo(0.1,-3.3,0.3,-3.5).curveTo(4.8,-8.7,4.8,-9.4).curveTo(4.8,-9.4,4.8,-9.4).curveTo(5.4,-10.1,5.8,-10.6).curveTo(5.7,-10.6,5.5,-10.7).curveTo(5.6,-10.8,5.8,-10.9).lineTo(7.9,-10.9).curveTo(7.7,-10.4,7.6,-9.9).curveTo(7.6,-9.9,7.5,-9.9).closePath();
	this.shape_237.setTransform(1.4,0);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#000000").beginStroke().moveTo(13.6,-20.7).curveTo(13.8,-20.6,13.9,-20.5).curveTo(13,-19.6,11.6,-17.8).curveTo(11.4,-17.8,11.3,-17.8).curveTo(10.9,-17.1,10,-15.9).curveTo(9.6,-15.5,9.3,-15.1).curveTo(9.5,-15.2,9.6,-15.2).curveTo(9.1,-14.5,8.5,-13.6).curveTo(2,-4.1,1.3,-1.8).curveTo(0.6,-0.9,-0.4,0.6).curveTo(-0,0.8,0.9,0.8).curveTo(1.2,0.8,1.5,0.6).curveTo(2.1,-0.7,3.4,-1.8).curveTo(3.5,-1.9,3.6,-2.1).curveTo(3.5,-2.1,3.4,-2.1).curveTo(4.6,-3.8,5.7,-5.2).curveTo(6.1,-6.8,8.1,-8.7).curveTo(8.2,-8.8,8.3,-8.9).curveTo(8.7,-10.3,10.3,-11.3).curveTo(10.6,-12,11.1,-12.6).curveTo(11.3,-13.2,11.6,-13.5).curveTo(11.8,-14,12.2,-14.3).curveTo(12.3,-14.5,12.4,-14.7).curveTo(14.4,-17.7,15.3,-19.1).curveTo(15.3,-19.7,15.3,-20.4).curveTo(14.5,-20.6,13.6,-20.7).closePath().moveTo(-15,20).curveTo(-15.1,20.2,-15.3,20.4).lineTo(-15.2,20.7).curveTo(-15.1,20.4,-15,20).closePath();
	this.shape_238.setTransform(-7.3,9.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#000000").beginStroke().moveTo(5.4,-11.4).curveTo(4,-10.1,1.6,-6.7).lineTo(1.6,-6.7).curveTo(1.5,-6.6,1.5,-6.4).curveTo(1.3,-6.3,1.2,-6.1).curveTo(1.1,-5.7,0.7,-5.3).curveTo(0.6,-5.1,0.5,-5).curveTo(-4.7,2.7,-5.7,6.3).curveTo(-4.8,7.4,-4.1,8.3).lineTo(-3.8,8.3).curveTo(-3.6,7.9,-3.1,7.7).curveTo(-3.1,6.6,-2.8,5.8).curveTo(-2.9,5.8,-2.9,5.8).curveTo(-2.5,5,-2.1,4.1).curveTo(-0.9,0.7,0.7,-0.9).curveTo(1.5,-1.7,2.7,-3.4).curveTo(2.7,-3.3,2.7,-3.3).curveTo(3.3,-4.1,4,-4.9).lineTo(4.1,-5).curveTo(4.1,-5.7,4.6,-6.1).curveTo(4.6,-6.2,4.6,-6.3).curveTo(4.6,-6.3,4.7,-6.4).curveTo(6.9,-10,7.1,-10.8).lineTo(7,-10.8).curveTo(6.9,-11.1,6.8,-11.5).curveTo(6.7,-11.6,6.5,-11.7).curveTo(6.4,-11.7,6.4,-11.7).curveTo(5.9,-11.5,5.4,-11.4).closePath().moveTo(-7.1,11.5).curveTo(-7.1,11.6,-7,11.7).curveTo(-7,11.7,-7,11.6).curveTo(-7,11.6,-7.1,11.5).closePath();
	this.shape_239.setTransform(2.1,0.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#000000").beginStroke().moveTo(4.5,-11.1).curveTo(4.7,-11,4.8,-10.9).curveTo(3.4,-9.8,0.9,-6).curveTo(0.8,-6,0.7,-6).curveTo(0.6,-6,0.6,-5.9).lineTo(0.6,-5.9).curveTo(0.5,-5.8,0.5,-5.7).curveTo(0.4,-5.6,0.3,-5.5).curveTo(0.1,-4.9,-0.5,-3.9).curveTo(-0.5,-3.8,-0.6,-3.7).curveTo(-0.7,-3.5,-0.8,-3.4).curveTo(-7.2,6.9,-7,9.9).curveTo(-7.2,10.6,-6.8,10.9).curveTo(-7,10.9,-7.2,11.1).curveTo(-6.3,11.1,-6,11.8).curveTo(-6,11.7,-5.9,11.6).lineTo(-5.9,11.5).curveTo(-5.9,10.8,-5.7,10.4).lineTo(-5.7,10.4).curveTo(-1.9,2.5,-0.7,0.6).curveTo(0.7,-1.5,1.7,-3).curveTo(1.9,-3.8,2.3,-4.2).curveTo(2.5,-4.8,3.1,-5.1).curveTo(3.3,-5.7,3.8,-6).curveTo(4.9,-7.6,5.5,-8.6).curveTo(5.7,-9.7,7.2,-11.2).curveTo(6.5,-11.5,5.7,-11.8).curveTo(5.2,-11.5,4.5,-11.1).closePath();
	this.shape_240.setTransform(1.4,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_224},{t:this.shape_223}]}).to({state:[{t:this.shape_225}]},2).to({state:[{t:this.shape_226}]},2).to({state:[{t:this.shape_228},{t:this.shape_227}]},2).to({state:[{t:this.shape_229}]},2).to({state:[{t:this.shape_230}]},2).to({state:[{t:this.shape_232},{t:this.shape_231}]},2).to({state:[{t:this.shape_233}]},2).to({state:[{t:this.shape_235},{t:this.shape_234}]},2).to({state:[{t:this.shape_237},{t:this.shape_236}]},2).to({state:[{t:this.shape_238}]},2).to({state:[{t:this.shape_239}]},2).to({state:[{t:this.shape_240}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-21.9,10.7,29.9);


(lib.mcPlayer_running_legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#000000").beginStroke().moveTo(12.4,12).curveTo(11.7,12,10.5,7.3).curveTo(10.2,6.4,8.7,0.4).curveTo(7.3,-5.5,6.7,-8.5).curveTo(5.8,-7.3,4.2,-5.5).curveTo(2.1,-3,1.1,-2).curveTo(1,-1.7,0.6,-1.4).curveTo(-0.1,-0.9,-1.4,-0.8).lineTo(-8.4,-0.8).curveTo(-10,-1.3,-12.2,-1.7).curveTo(-13.3,-1.8,-13.3,-2.4).curveTo(-13.3,-3.2,-12.4,-3.4).curveTo(-11.2,-3.6,-7.9,-2.8).lineTo(-1.5,-2.8).curveTo(-0.7,-3.2,-0.2,-3.2).curveTo(1.7,-6.2,3.6,-8.6).curveTo(5.2,-10.7,6.3,-11.5).curveTo(6.3,-11.6,6.3,-11.7).curveTo(6.7,-11.8,7.1,-12).curveTo(7.8,-11.5,8.6,-11.2).curveTo(8.5,-11.1,8.4,-11.1).curveTo(8.6,-10.8,8.6,-10.5).curveTo(9.3,-9.1,9.4,-7.5).curveTo(9.4,-6.8,9.9,-4.6).curveTo(10.3,-2.6,10.4,-1.5).curveTo(10.4,-1.3,11.8,4).curveTo(13.3,9.2,13.3,10.7).curveTo(13.3,12,12.4,12).closePath();
	this.shape_241.setTransform(-11.3,17.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#000000").beginStroke().moveTo(6.4,-0).curveTo(6.4,1.5,5.3,2.5).curveTo(5.2,6.3,5.2,7.6).curveTo(4.9,11.6,4,11.8).lineTo(3.2,11.5).lineTo(3.3,3.7).curveTo(0.4,4.8,-5.3,4.8).curveTo(-6.1,4.8,-6.3,4.4).curveTo(-6.4,4.3,-6.4,4).curveTo(-6.4,3.1,-0.9,2.3).curveTo(1.9,1.9,3.3,1.3).lineTo(2.6,-8.4).curveTo(2.6,-8.6,2.6,-8.7).curveTo(2.6,-9.1,2.6,-9.4).lineTo(2.6,-9.5).curveTo(2.6,-11.3,2.8,-11.8).curveTo(3.2,-11.5,3.8,-11.4).curveTo(4,-11.1,4.2,-10.9).curveTo(4.1,-10.7,4,-10.5).curveTo(4.6,-8.9,4.8,-7.5).curveTo(5,-7,5.3,-6.5).curveTo(5.4,-3.8,5.9,-2.7).curveTo(6.4,-1.7,6.4,-0).closePath();
	this.shape_242.setTransform(-5.4,18.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#000000").beginStroke().moveTo(6.8,2.6).curveTo(6.4,3.8,4.5,4.4).curveTo(3.1,4.9,-1,5.9).curveTo(-1.1,6.5,-1.3,7.2).curveTo(-1.7,9.9,-2.3,11).curveTo(-2.3,11,-2.3,11.1).curveTo(-2.3,12,-3.5,12.8).lineTo(-4.3,12.5).curveTo(-4.4,12.2,-4.4,11.6).curveTo(-4.4,10.8,-3.9,10.4).curveTo(-3.7,9.5,-3.1,6.4).curveTo(-5.4,7,-5.8,7).curveTo(-6.6,7,-6.8,6.6).curveTo(-6.9,6.5,-6.9,6.2).curveTo(-6.9,4.6,-2.5,3.8).curveTo(-1.7,-0.2,-1.3,-1.5).curveTo(-0.3,-5.7,-0.4,-7.5).curveTo(0.4,-10.2,0.5,-10.5).curveTo(0.3,-10.8,0.3,-10.9).curveTo(0.3,-12,0.7,-12.2).curveTo(0.7,-12.4,0.8,-12.7).curveTo(1,-12.7,1.2,-12.8).curveTo(1.6,-12.4,2.1,-12.2).curveTo(2.2,-12,2.3,-11.9).curveTo(2.2,-11.8,2.1,-11.7).curveTo(2.5,-11.3,2.5,-10.5).curveTo(3,-9.7,3.6,-8.6).curveTo(6.9,-3,6.9,0.4).curveTo(6.9,2.2,6.8,2.6).closePath().moveTo(2,-7.6).curveTo(1.9,-6.7,1.6,-5.5).curveTo(0.7,-0.9,0,0.9).curveTo(-0.2,1.3,-0.6,3.5).curveTo(5,2.6,5,0.4).curveTo(5,-0.9,3.3,-5.3).curveTo(3.1,-5.7,2,-7.6).closePath();
	this.shape_243.setTransform(-4.9,17.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#000000").beginStroke().moveTo(7.4,-6.8).curveTo(5.2,-7.9,4.1,-8.4).curveTo(3.2,-5.9,-2.3,1.4).curveTo(-9.3,10.7,-13,10.7).curveTo(-14.1,10.7,-14.1,9.8).curveTo(-14.1,9.7,-9.8,5.9).curveTo(-5.1,1.9,-3.9,-0.5).curveTo(-2.1,-4.1,0.9,-7.8).curveTo(1.7,-8.8,2.3,-9.4).curveTo(2.3,-9.4,2.3,-9.5).curveTo(2.3,-9.8,2.4,-10.1).curveTo(2.5,-10.2,2.6,-10.3).curveTo(3.8,-10.4,4.8,-10.7).lineTo(4.7,-10.6).curveTo(7.1,-10.4,12.6,-6.8).curveTo(14.1,-8.1,14.1,-5.7).lineTo(14.1,-5.7).curveTo(14.1,-5.6,14.1,-5.5).curveTo(14.1,-5,10,-0.3).curveTo(5.9,4.5,4.5,5.4).lineTo(3.7,5.1).curveTo(3.6,5,3.6,4.4).curveTo(3.6,4.1,5.7,1.7).curveTo(8.4,-1.3,8.9,-2).curveTo(10.3,-4,11.3,-5.3).curveTo(9.8,-5.8,7.4,-6.8).closePath();
	this.shape_244.setTransform(-7.2,19.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#000000").beginStroke().moveTo(11.9,-10.1).curveTo(11.7,-10.1,11.5,-10.1).curveTo(11.1,-10.1,10.8,-10.2).curveTo(10.8,-10.1,10.8,-10.1).curveTo(7.2,-9.6,6.4,-9.5).curveTo(6.2,-9.4,6,-9.4).curveTo(5.5,-9.1,4.7,-9.1).curveTo(4.4,-9.1,4.1,-9.1).curveTo(3,-8.6,1.2,-6.9).curveTo(-2,-3.8,-4.5,-0.4).curveTo(-7.9,4.2,-12.9,7.7).curveTo(-15.5,9.4,-17.4,10.2).curveTo(-17.4,11.1,-16.4,11.1).curveTo(-13.6,11.1,-8.4,6.7).curveTo(-4.3,3.2,-3.8,2.2).curveTo(-2.8,0.7,1.7,-3.7).curveTo(4.1,-6,5,-7.2).lineTo(10.3,-7.2).curveTo(12.2,-7.6,14.7,-8.2).curveTo(14.1,-7.2,13.4,-5.8).curveTo(9.5,2.2,9.5,4).curveTo(9.5,4.8,10.6,4.8).curveTo(11.9,4.8,17.4,-9.6).curveTo(17.4,-9.7,17.4,-9.8).lineTo(17.4,-9.8).curveTo(17.4,-9.8,17.4,-9.9).curveTo(17.3,-11.7,16.4,-10.8).curveTo(15,-10.6,13.8,-10.5).curveTo(13.1,-10.1,12.3,-10.1).curveTo(12.1,-10.1,11.9,-10.1).closePath();
	this.shape_245.setTransform(-7.9,17.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#000000").beginStroke().moveTo(18.2,-9.2).curveTo(18.2,-9,15.4,-2.6).curveTo(15.1,-1.8,14.9,0.7).curveTo(14.8,2.7,13.8,3.7).lineTo(12.9,3.4).curveTo(12.8,2.7,12.8,1).curveTo(12.8,-2,15.5,-7.3).curveTo(15.6,-7.6,15.7,-7.8).curveTo(15.2,-7.6,14.7,-7.4).curveTo(10.4,-6,4.8,-6).curveTo(4.1,-6,3.7,-6.1).curveTo(-10.7,10.5,-17.2,10.5).curveTo(-18.2,10.5,-18.1,9.4).lineTo(-13.7,6.5).curveTo(-8.4,2.9,-5,0.1).curveTo(-0.8,-4.2,1.2,-6.1).curveTo(2.3,-7.2,3.1,-7.8).lineTo(3.1,-7.8).curveTo(3.1,-8,3.1,-8.1).curveTo(3.7,-7.7,4.7,-7.7).curveTo(4.8,-7.7,4.9,-7.7).lineTo(5,-7.7).curveTo(8.8,-7.9,13.8,-9.3).curveTo(15.2,-9.6,17.1,-10.4).curveTo(17.3,-10.5,17.6,-10.5).curveTo(18.2,-10.4,18.2,-9.5).lineTo(18.2,-9.4).curveTo(18.2,-9.3,18.2,-9.2).closePath();
	this.shape_246.setTransform(-7.4,15.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#000000").beginStroke().moveTo(11,-5.6).curveTo(7.9,-7.5,6.6,-8.3).curveTo(5.7,-7.1,2.2,-4.3).curveTo(-0.3,-2.3,-3.4,0).curveTo(-4.7,1.4,-9,3.6).curveTo(-14.8,6.6,-19.4,6.6).curveTo(-20.5,6.6,-20.5,5.7).curveTo(-20.5,5.2,-14,3).curveTo(-6.6,0.4,-4,-2.2).curveTo(-3.2,-3.2,1.5,-6.7).curveTo(3.9,-8.4,5.2,-9.1).curveTo(5.2,-9.1,5.2,-9.2).curveTo(5.8,-9.4,6.2,-10).curveTo(6.6,-10.5,7.8,-10.6).curveTo(7.7,-10.5,7.7,-10.3).curveTo(7.8,-10.3,8.1,-10.3).curveTo(10.4,-9.8,13.1,-7.4).curveTo(13.3,-7.3,15.9,-5.3).curveTo(18,-3.7,18.5,-2.6).curveTo(19.1,-1.1,19.7,2.1).curveTo(20.3,5.4,20.3,7.4).curveTo(20.3,7.5,20.3,7.6).curveTo(20.5,8,20.5,8.9).curveTo(20.5,9.7,20.5,9.9).curveTo(20.3,10.6,19.6,10.6).curveTo(18.8,10.6,18.7,9.8).curveTo(18.6,9,18.6,9).curveTo(18.6,8.8,18.6,8.7).curveTo(18.2,7.7,17.9,5.5).curveTo(17.3,0.4,17,-0.3).curveTo(16.4,-2.3,11,-5.6).closePath();
	this.shape_247.setTransform(-9.5,18.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#000000").beginStroke().moveTo(13.5,-15.3).lineTo(13.5,-15.3).lineTo(13.6,-15.3).curveTo(13.5,-15.3,13.5,-15.3).closePath().moveTo(3.9,15.3).curveTo(2.7,15.3,0.2,4.3).curveTo(-0.5,1.3,-1.1,-1.6).curveTo(-1.1,-0.6,-1.2,0.7).curveTo(-1.2,3.1,-4.2,4.8).curveTo(-7.3,6.5,-12,6.5).curveTo(-13.2,6.5,-13.5,6.1).curveTo(-13.6,6.1,-13.6,5.7).curveTo(-13.6,4.6,-11.6,4.1).curveTo(-5.9,2.6,-5.4,2.5).curveTo(-2.8,1.6,-2.7,0.7).curveTo(-3.1,-0.5,-3.1,-1.1).lineTo(-3.1,-5.1).curveTo(-3.1,-6.6,-2.1,-7.7).curveTo(-2,-8.1,-2,-8.3).curveTo(-1.7,-8.1,-1.5,-7.9).curveTo(-0.9,-7.4,-0.4,-7).curveTo(-0.5,-6.9,-0.6,-6.8).curveTo(-0.2,-5.8,0.3,-4.3).curveTo(0.6,-3.3,1.8,1.9).curveTo(2.1,3.5,3.6,9).curveTo(5,14,5,14.4).curveTo(5,15.2,3.9,15.3).closePath();
	this.shape_248.setTransform(-3.5,15.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#000000").beginStroke().moveTo(1.2,-9.7).curveTo(0.9,-10.1,1.1,-11).curveTo(1.1,-11.3,1.2,-11.8).curveTo(1.3,-11.8,1.4,-11.8).curveTo(1.7,-11.8,1.9,-11.8).curveTo(2.2,-11.7,2.5,-11.6).curveTo(2.7,-11.4,3,-11.3).curveTo(2.9,-11.2,2.9,-11.1).curveTo(4.6,-8.6,7.9,-0.2).curveTo(7.9,1.7,3,3.7).curveTo(3.1,4.2,3.1,4.7).curveTo(3.5,7.6,3.5,8.8).curveTo(3.5,10.2,3.5,10.4).curveTo(3.3,11.8,2.5,11.8).curveTo(1.7,11.8,1.1,4.4).curveTo(-2.1,5.5,-6.8,6.6).curveTo(-7.9,6.6,-7.9,5.7).curveTo(-7.9,5.3,-0.9,3.1).curveTo(0.1,2.8,0.9,2.5).curveTo(0.9,2,0.8,1.4).curveTo(1.3,-4.4,1.3,-7.4).curveTo(1.3,-8.6,1.4,-9.3).curveTo(1.3,-9.5,1.2,-9.7).closePath().moveTo(3.2,-5.9).lineTo(2.8,1.3).curveTo(2.8,1.5,2.8,1.8).curveTo(6.1,0.5,6.1,-0.4).curveTo(6.1,-0.6,3.2,-5.9).closePath();
	this.shape_249.setTransform(-6.4,18.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#000000").beginStroke().moveTo(9.4,-10.1).curveTo(9.4,-9.6,4.5,-3.8).curveTo(-0.5,2.1,-1.3,2.1).curveTo(-2.3,2.1,-2.2,1).curveTo(-2.2,0.7,3.5,-5.9).curveTo(5.1,-7.9,6.2,-9.2).lineTo(-1.3,-9.2).curveTo(-1.3,-9.1,-1.3,-9).curveTo(-5.2,7.5,-8.5,11.6).lineTo(-9.3,11.3).curveTo(-9.4,11.2,-9.4,10.5).curveTo(-9.4,9.9,-7.7,5.6).curveTo(-5.9,1.1,-5.7,-1.5).curveTo(-4,-5.1,-3.5,-7.5).curveTo(-3.2,-8.7,-2.8,-9.6).curveTo(-2.9,-9.8,-2.9,-10).lineTo(-2.9,-10).curveTo(-2.9,-10.2,-2.7,-10.5).curveTo(-2.6,-10.5,-2.6,-10.6).curveTo(-2.3,-11,-2.1,-11.3).lineTo(-2.1,-11.3).curveTo(-1,-11.3,-0.1,-11.6).curveTo(-0.1,-11.6,0,-11.6).curveTo(0,-11.6,0.1,-11.6).curveTo(-0.1,-11.3,-0.3,-11.1).lineTo(7.9,-11.1).curveTo(9.4,-12.3,9.4,-10.1).closePath();
	this.shape_250.setTransform(-3.4,19.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#000000").beginStroke().moveTo(12,-12.2).curveTo(11.9,-12.2,11.8,-12.2).curveTo(11.3,-11.9,10.6,-11.9).curveTo(10.5,-11.9,10.3,-12).curveTo(9.3,-11.9,8.1,-11.7).curveTo(5.3,-11.4,3.7,-11.1).curveTo(3.8,-11.2,3.8,-11.3).curveTo(2.7,-11.1,1.6,-11).curveTo(1.6,-10.9,1.6,-10.8).curveTo(0.5,-9.5,-1.3,-6.7).curveTo(-1.8,-5.9,-2.4,-3.6).curveTo(-3,-1.4,-3.6,-0.7).curveTo(-5.3,1.6,-8.9,5.2).curveTo(-13.4,9.5,-15,11.4).lineTo(-14.9,11.9).lineTo(-14.1,12.2).curveTo(-9.7,10.4,-6.8,7.1).curveTo(-4,3.1,-2.4,1.1).curveTo(-0.6,-1,1.6,-5.7).curveTo(2.8,-8.1,3.3,-9.3).lineTo(6.1,-9.3).curveTo(10.7,-9.9,12.3,-10.1).curveTo(11.8,-9.2,11.1,-7.9).curveTo(7.5,-0.7,7.5,2.1).curveTo(7.5,3,8.5,3).curveTo(8.6,3,11.7,-3.7).curveTo(13.1,-6.8,13.9,-8.6).curveTo(13.9,-9.1,14.4,-10).curveTo(15,-10.9,15,-11.2).curveTo(15,-11.6,14.3,-12.2).lineTo(14.3,-12.2).curveTo(13.9,-12.2,13.4,-12.2).curveTo(13,-12.2,12.7,-12.2).curveTo(12.4,-12.2,12,-12.2).closePath();
	this.shape_251.setTransform(-7.6,18.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#000000").beginStroke().moveTo(17.6,-12).curveTo(18.6,-11.8,19.6,-7.6).curveTo(20.5,-4,20.5,-2.4).curveTo(20.5,-2.2,20.5,-0.9).curveTo(20.4,0.3,19.6,0.3).curveTo(19.1,0.3,17.1,-9.9).curveTo(10,-10,8.5,-9.5).curveTo(7.7,-9.2,7.4,-8.7).lineTo(6.6,-8.7).curveTo(6.4,-8.5,6.1,-8.2).lineTo(6.1,-8.2).curveTo(5.4,-6.9,2.6,-3.1).curveTo(-0.2,0.8,-2.6,3.8).curveTo(-2.6,3.8,-2.6,3.9).lineTo(-2.8,3.9).curveTo(-3.2,4.5,-3.6,5).lineTo(-4.3,4.7).curveTo(-5.1,5.1,-6.1,5.6).curveTo(-9.8,7.5,-10.9,8.5).curveTo(-12.2,9.6,-19.5,12).curveTo(-20.5,12,-20.5,11.2).curveTo(-16,8.1,-11.6,5.6).curveTo(-6.5,2.9,-4.3,2.7).curveTo(-3.9,1.4,-2.8,-0).curveTo(-0.7,-2.5,0.2,-3.9).curveTo(2.8,-7.8,3.9,-9).curveTo(4.4,-9.6,4.8,-9.9).curveTo(4.9,-10.3,5.4,-10.5).lineTo(5.4,-10.5).curveTo(6.2,-10.7,7,-11.2).curveTo(7.2,-11.1,7.4,-11.1).curveTo(7.9,-11.1,8.3,-11.3).curveTo(8.3,-11.2,8.3,-11.2).curveTo(10.4,-11.7,11.1,-11.9).closePath();
	this.shape_252.setTransform(-9,17.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#000000").beginStroke().moveTo(14,-6.5).curveTo(19.4,-2.5,19.7,2.3).curveTo(20,5.5,18.9,6.4).lineTo(18,6.1).curveTo(17.9,2.9,17.9,2.3).curveTo(17.6,-1.7,13.2,-4.8).curveTo(11.3,-6,9.6,-6.8).curveTo(9.5,-6.6,9.4,-6.4).curveTo(7.8,-6.7,5.7,-6.5).curveTo(5.2,-6.8,5,-6.9).curveTo(4.9,-7,4.9,-7.1).curveTo(3.8,-6,1,-3.7).curveTo(-4,0.5,-4.3,0.8).curveTo(-6,2.9,-8.6,4.7).curveTo(-13.6,8.4,-18.3,8.7).curveTo(-19.6,8.8,-19.7,8).curveTo(-19.8,7.2,-18.9,6.9).curveTo(-18,6.5,-14.7,6).curveTo(-13.9,5.5,-3.2,-2.9).curveTo(2.5,-7.4,4.4,-8.1).curveTo(4.1,-8.2,4.1,-8.6).curveTo(4.9,-8.6,5.5,-8.7).curveTo(5.4,-8.6,5.4,-8.6).curveTo(6.5,-9.1,9.4,-8.3).curveTo(9.7,-8.4,10.3,-8.3).curveTo(11.8,-8.1,14,-6.5).closePath();
	this.shape_253.setTransform(-9.7,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_241}]}).to({state:[{t:this.shape_242}]},2).to({state:[{t:this.shape_243}]},2).to({state:[{t:this.shape_244}]},2).to({state:[{t:this.shape_245}]},2).to({state:[{t:this.shape_246}]},2).to({state:[{t:this.shape_247}]},2).to({state:[{t:this.shape_248}]},2).to({state:[{t:this.shape_249}]},2).to({state:[{t:this.shape_250}]},2).to({state:[{t:this.shape_251}]},2).to({state:[{t:this.shape_252}]},2).to({state:[{t:this.shape_253}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,5.7,26.6,24);


(lib.mcPlayer_running_arms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#000000").beginStroke().moveTo(4.2,-3.5).curveTo(4.7,-3,5.3,-2.1).curveTo(7,0.5,7.5,2).curveTo(8.8,1.3,11.1,-0).curveTo(16.3,-2.9,16.3,-1.2).curveTo(16.3,-0.4,12.6,1.9).curveTo(8.9,4.2,7.5,4.2).curveTo(7.2,4.2,6.9,4.2).curveTo(6.8,4.2,6.7,4.2).curveTo(6.7,4.2,6.6,4.1).curveTo(6.2,4,6,3.8).curveTo(5.9,3.6,5.9,3.3).curveTo(5.9,3.2,6,3.1).curveTo(5.5,2.3,4.6,0.7).curveTo(4.1,-0.3,3.8,-1).curveTo(3.4,-2.6,1.4,-2.6).curveTo(0.3,-2.6,-0.4,-2.1).lineTo(-0.4,-2.1).curveTo(-0.8,-2,-5.4,-1.4).curveTo(-9.3,-0.9,-9.7,-0.6).curveTo(-11.3,0.5,-15.4,3.4).lineTo(-16.2,3.1).curveTo(-16.2,2.9,-16.3,2.3).curveTo(-16.3,-1.1,-6.4,-3.2).curveTo(-2.7,-4,0.4,-4.1).curveTo(1.7,-4.2,2.5,-4.1).curveTo(2.5,-4.1,2.5,-4.2).curveTo(2.9,-4.1,3.4,-4.1).curveTo(3.5,-4,3.5,-4).curveTo(3.9,-3.7,4.3,-3.5).closePath();
	this.shape_254.setTransform(-1,-5.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#000000").beginStroke().moveTo(2.6,-4.1).curveTo(2.5,-4.3,2.4,-4.5).curveTo(2.3,-4.6,2.2,-4.8).curveTo(2.1,-4.8,2.1,-4.9).curveTo(1.7,-5,1.4,-5.2).curveTo(1.4,-5.1,1.3,-5).curveTo(0.5,-5.1,-0.8,-3.8).curveTo(-1.4,-3.2,-3.6,-2.5).curveTo(-6,-1.7,-6.1,-1.6).curveTo(-11.9,1.6,-11.9,4.1).curveTo(-12,5.2,-11,5.2).curveTo(-6.9,0.9,-6,0.6).curveTo(-4,0,-1.3,-1.3).curveTo(-0.7,-1.6,-0.1,-1.9).curveTo(-0.2,-1.7,-0.3,-1.4).curveTo(0.9,-1.3,0.9,-0.2).curveTo(0.9,0,0.8,0.3).curveTo(0.8,0.3,0.8,0.4).curveTo(0.8,0.5,0.8,0.5).curveTo(0.8,0.6,0.8,0.6).curveTo(0.8,0.8,0.7,1).curveTo(0.7,1.1,0.7,1.2).curveTo(0.8,1.1,0.8,1.1).curveTo(0.9,3.7,1.8,4.7).lineTo(3.5,4.7).curveTo(11.9,1.1,11.9,0).curveTo(11.9,-1,10.9,-1).curveTo(10.5,-1,6.9,0.8).curveTo(3,2.6,2.7,2.7).lineTo(2.7,-3.4).curveTo(2.6,-3.5,2.6,-3.7).curveTo(2.6,-3.8,2.7,-3.9).curveTo(2.7,-4,2.6,-4.1).closePath();
	this.shape_255.setTransform(1,-5.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#000000").beginStroke().moveTo(2.5,-8.2).lineTo(2.5,-8.2).curveTo(2.3,-8.1,2,-8).curveTo(0.2,-7,-2.3,-4.2).curveTo(-8.6,2.7,-8.6,7.1).curveTo(-9,8.2,-7.7,8.2).curveTo(-7.5,8.2,-7.3,7.9).curveTo(-7,7.6,-6.6,7).curveTo(-6.2,6.2,-5.5,4.9).curveTo(-4.7,3.1,-3.5,0.6).curveTo(-2.9,-0.5,-1.7,-1.9).curveTo(-1.5,-2.1,-1.4,-2.2).curveTo(-1.1,-2.6,-0.7,-2.9).curveTo(-0.7,-3,-0.6,-3.1).curveTo(-0.6,-3,-0.7,-2.9).curveTo(-0.6,-2.9,-0.5,-2.9).curveTo(0.5,-2.8,0.5,-2).curveTo(0.5,-1.9,0.4,-1.7).curveTo(0.5,-1.6,0.5,-1.4).curveTo(0.5,-1.2,0.3,-0.9).curveTo(0.3,-0.8,0.2,-0.8).curveTo(0.2,-0.7,0.1,-0.5).curveTo(0.1,-0.4,0.1,-0.4).curveTo(0.1,-0.1,-0,0.2).curveTo(-0,0.3,-0,0.5).curveTo(-0,0.6,-0,0.8).curveTo(-0,0.9,-0,1).curveTo(-0,1.3,-0.2,1.7).curveTo(-0.2,1.8,-0.2,1.9).curveTo(3.1,6,7.3,6).curveTo(8.7,6,8.7,5.1).curveTo(8.7,4.4,5.2,3.2).curveTo(1.7,2.1,1.7,1.6).curveTo(2.5,-2.7,2.8,-4.5).curveTo(3,-4.8,3.1,-5.1).lineTo(3.5,-7).curveTo(3.5,-7.8,2.9,-8.2).curveTo(2.7,-8.2,2.5,-8.2).closePath().moveTo(-5.6,6.8).curveTo(-5.6,6.8,-5.6,6.9).curveTo(-5.6,6.9,-5.5,6.9).closePath();
	this.shape_256.setTransform(1.7,-3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#000000").beginStroke().moveTo(12.5,-18.9).curveTo(12.6,-18.6,12.7,-18.3).curveTo(12.9,-18,13,-17.9).curveTo(13.2,-17,13.5,-16.4).curveTo(13.5,-16.2,13.5,-16.1).curveTo(13.5,-15.1,12.3,-13.8).curveTo(11,-12.4,10.8,-11.5).curveTo(10.9,-9.7,11,-8.9).curveTo(11.1,-7.4,9.9,-7.4).curveTo(9.4,-7.4,9.1,-7.7).curveTo(9.2,-7.5,9.3,-7.4).curveTo(10.5,-4.7,10.5,-3.7).curveTo(10.5,-3.1,10.5,-2.9).curveTo(10.3,-2.4,9.6,-2.2).lineTo(8.7,-2.5).curveTo(8.2,-4.5,7.5,-6.3).curveTo(7.4,-6.9,7,-7.3).curveTo(7,-7.4,6.9,-7.5).curveTo(6.9,-7.7,6.8,-7.9).curveTo(6.8,-8,6.8,-8.1).curveTo(6.8,-8.9,6.3,-9.3).curveTo(6.4,-9.4,6.4,-9.4).curveTo(6.2,-10.4,6.2,-11.5).curveTo(6.2,-14.7,10.1,-18).curveTo(11,-18.7,11.7,-19.2).curveTo(12.1,-19,12.5,-18.9).closePath().moveTo(8.6,-9).lineTo(8.6,-9).curveTo(8.6,-9,8.6,-9).closePath().moveTo(-13.4,18.8).curveTo(-13.5,19,-13.5,19.2).curveTo(-13.5,19.1,-13.5,19).curveTo(-13.5,19,-13.4,18.8).closePath();
	this.shape_257.setTransform(-7.8,10.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#000000").beginStroke().moveTo(5.4,-9.3).curveTo(5.3,-9.3,5.2,-9.3).curveTo(5,-9.3,4.9,-9.3).curveTo(3.4,-8.5,2.8,-8.5).lineTo(2.7,-8.5).curveTo(1.1,-7.8,-0.5,-6.4).curveTo(-6.2,-1.4,-6.2,7.6).curveTo(-6.2,8.4,-5.1,8.4).curveTo(-4.5,8.4,-4,7.4).curveTo(-3.8,7.1,-3.7,6.7).curveTo(-3.5,6,-3.3,4.9).curveTo(-3,3,-2.8,0.3).curveTo(-2.2,-2.3,0.8,-5.1).curveTo(1.2,-5.4,1.6,-5.8).curveTo(1.7,-5.9,1.9,-6).curveTo(1.8,-5.9,1.8,-5.8).curveTo(2.7,-5.6,2.7,-4.9).lineTo(2.7,-4.7).curveTo(2.7,-4.7,2.7,-4.6).curveTo(2.7,-4.5,2.7,-4.4).curveTo(2.7,-4.1,2.5,-3.9).curveTo(2.6,-3.7,2.6,-3.5).curveTo(2.6,-3.2,2.5,-3).curveTo(2.6,-3.1,2.6,-3.3).curveTo(2.5,-3,2.5,-2.7).curveTo(2.3,-2.3,2.2,-2).curveTo(1.3,0.8,1.3,1.9).curveTo(1.4,3.9,1.8,5.8).curveTo(2.2,7.6,2.8,8.5).curveTo(2.6,8.6,2.4,8.6).curveTo(3.2,8.8,3.5,9.3).curveTo(3.9,9.2,4.3,9.3).curveTo(4.4,9.3,4.6,9.3).curveTo(4.8,9.1,5.1,9).curveTo(5.1,8.6,5.2,8.2).curveTo(5.2,8.2,5.1,8.2).curveTo(5,7.7,4.2,5.5).curveTo(3.1,2.9,3.1,1.9).curveTo(3.1,1.6,3.8,-0.2).curveTo(4.5,-2.3,4.7,-3).curveTo(4.8,-3.3,5.5,-5.5).curveTo(6.2,-7.8,6.2,-8.2).curveTo(6.2,-8.7,6.1,-9.1).curveTo(5.7,-9.1,5.4,-9.3).closePath().moveTo(-3,4.7).curveTo(-3,4.8,-3,4.8).curveTo(-3,4.8,-3,4.8).curveTo(-3,4.7,-3,4.7).closePath().moveTo(-3.5,6.2).curveTo(-3.5,6.2,-3.5,6.3).curveTo(-3.5,6.3,-3.4,6.2).curveTo(-3.4,6.2,-3.5,6.2).closePath();
	this.shape_258.setTransform(0,-1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#000000").beginStroke().moveTo(3.9,-6.5).curveTo(3.3,-6.5,2.9,-6.7).curveTo(2.5,-6.7,2.1,-6.7).curveTo(-0.6,-6.8,-3.6,-6.1).curveTo(-11.9,-4.2,-11.9,0.3).curveTo(-12.2,1.8,-11,1.8).curveTo(-7.9,-1.8,-7.2,-2.3).curveTo(-5.1,-4.2,0.2,-4.7).curveTo(0.4,-4.7,0.5,-4.7).curveTo(0.6,-4.8,0.7,-4.8).curveTo(0.9,-5,1.3,-4.9).curveTo(1.4,-4.9,1.5,-4.9).curveTo(1.6,-4.9,1.7,-4.9).curveTo(1.7,-4.9,1.7,-4.8).curveTo(2.2,-4.6,2.2,-4).curveTo(2.4,-3.8,2.4,-3.4).curveTo(2.4,-3.3,2.4,-3.3).curveTo(2.4,-3.2,2.4,-3).curveTo(2.4,-2.9,2.4,-2.9).curveTo(2.4,-2.7,2.4,-2.6).curveTo(2.4,-2,2.1,-1.7).curveTo(1.3,1,1.3,3.1).curveTo(1.3,4.2,5,5.5).curveTo(8.5,6.7,10.4,6.7).curveTo(11.9,6.7,11.9,5.8).curveTo(11.9,5.1,7.9,3.9).curveTo(5.1,3.1,3.3,2.8).curveTo(3.3,2.5,4.1,-1.1).curveTo(4.7,-3.9,4.7,-4.6).curveTo(4.7,-4.8,4.7,-4.9).curveTo(4.7,-5,4.8,-5.1).curveTo(4.5,-5.7,4.1,-6.4).lineTo(4.1,-6.5).curveTo(4,-6.5,3.9,-6.5).closePath().moveTo(1.6,-1.3).curveTo(1.6,-1.2,1.6,-1.2).curveTo(1.6,-1.2,1.7,-1.3).curveTo(1.6,-1.3,1.6,-1.3).closePath();
	this.shape_259.setTransform(1.2,-2.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#000000").beginStroke().moveTo(0.6,-4).curveTo(1,-4.3,1.3,-4.1).curveTo(1.3,-4.1,1.4,-4.1).lineTo(1.4,-4.1).curveTo(1.3,-4,1.3,-4).curveTo(1.5,-3.6,1.6,-2.9).curveTo(2,-1.5,2.1,-0.6).curveTo(2.1,-0.7,2.1,-0.8).curveTo(2.4,0.2,2.9,2).curveTo(3.4,3.8,3.8,4.7).curveTo(3.6,5,3.6,5.1).curveTo(3.6,5.8,4.5,5.9).curveTo(4.6,6,4.6,6).curveTo(4.7,6,4.8,6).curveTo(5,6,5.1,6).curveTo(15.8,1.1,15.8,0.7).curveTo(15.8,-1.1,9.7,1.4).curveTo(6.9,2.6,5.4,3.5).curveTo(5,1.4,3.7,-2.3).curveTo(3.5,-2.8,3.4,-3.2).curveTo(3.4,-3.3,3.5,-3.4).curveTo(3.3,-3.8,3.1,-4.2).curveTo(2.6,-5.1,2.3,-5.8).curveTo(1.3,-6.1,-1.1,-5.9).curveTo(-5.1,-5.5,-11,-3.7).curveTo(-12.9,-3.1,-14.1,-1.5).curveTo(-14.8,-0.7,-15.8,0.9).lineTo(-15.7,1.5).lineTo(-14.9,1.8).curveTo(-13.1,1.2,-12.1,-0.1).curveTo(-11.1,-1.5,-10,-1.9).curveTo(-5.5,-3.6,-0.3,-3.9).curveTo(0.1,-3.9,0.5,-4).curveTo(0.5,-4,0.6,-4).closePath();
	this.shape_260.setTransform(1.6,-4.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#000000").beginStroke().moveTo(3.5,-3.7).curveTo(3.1,-3.9,2.8,-4.3).curveTo(2.5,-4.3,2.3,-4.4).lineTo(2.3,-4.4).curveTo(-4.7,-6.5,-10.8,-3).curveTo(-12.9,-1.8,-14.5,-0.1).curveTo(-15.8,1.2,-15.8,1.6).curveTo(-15.8,2.5,-14.7,2.5).curveTo(-13.1,1.2,-11.1,-0.1).curveTo(-7.2,-2.7,-5,-2.7).curveTo(-2.7,-2.7,-0,-2.5).curveTo(1.5,-3.2,1.7,-1.3).curveTo(1.9,-1,2,-0.5).curveTo(2,-0.5,2.1,-0.6).curveTo(1.9,0.7,1.9,2.1).curveTo(1.8,2.9,1.9,3.6).curveTo(2.1,5.1,3.1,5.1).curveTo(15.8,1.6,15.8,0.4).curveTo(15.7,-0.7,14.9,-0.7).curveTo(12.9,-0.7,8.6,1).curveTo(6.4,1.9,3.8,3).lineTo(3.8,0.7).curveTo(4.3,-0.1,4.3,-1.7).curveTo(4.3,-2.1,4.2,-2.5).curveTo(4.1,-2.6,4,-2.8).curveTo(3.8,-3,3.8,-3.4).curveTo(3.6,-3.5,3.5,-3.7).closePath();
	this.shape_261.setTransform(1.6,-3.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#000000").beginStroke().moveTo(6.1,-7.1).curveTo(5.5,-7.1,5,-7.4).curveTo(3.7,-7.2,1,-6.2).curveTo(-4.4,-4.2,-5.2,-3).curveTo(-10,3,-10,4).curveTo(-10,4.9,-9,4.9).curveTo(-8.6,4.9,-6.7,2.4).curveTo(-5.2,0.5,-4,-1.3).curveTo(-3.5,-2,1.7,-4).curveTo(1.9,-4,2,-4.1).curveTo(2.4,-4.2,2.8,-4.4).lineTo(2.8,-4.4).curveTo(3.8,-4.4,3.8,-3.4).curveTo(3.8,-3.2,3.6,-2.8).lineTo(3.6,-2.8).curveTo(3.6,-2.5,3.4,-2.2).curveTo(3.3,-2.2,3.3,-2.2).curveTo(3.3,-2.1,3.3,-2).curveTo(3.3,-1.8,3.1,-1.5).curveTo(3.1,-1.4,3.1,-1.4).curveTo(3.1,-1.3,3.1,-1.3).curveTo(2.8,-0.8,2.6,-0.3).curveTo(2.2,0.8,1.9,1.9).curveTo(7.3,7.4,9.1,7.4).curveTo(9.6,7.4,9.9,7).curveTo(10,6.7,10,6.5).curveTo(10,5.2,7.7,3.8).curveTo(4.9,2.4,4,1.7).curveTo(4.4,0.8,5.4,-1.9).curveTo(6.5,-4.8,6.5,-5.6).curveTo(6.6,-5.6,6.6,-5.7).curveTo(6.5,-5.8,6.5,-5.9).curveTo(6.5,-6.1,6.5,-6.2).curveTo(6.5,-6.2,6.5,-6.3).curveTo(6.3,-6.6,6.3,-6.9).curveTo(6.2,-7,6.1,-7.1).closePath().moveTo(-2.9,4.3).curveTo(-2.8,4.2,-2.8,4).curveTo(-2.8,4.2,-2.9,4.3).closePath();
	this.shape_262.setTransform(-0.3,-2.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#000000").beginStroke().moveTo(3.6,-7.6).curveTo(3.6,-7.6,3.7,-7.6).curveTo(4.2,-7.2,4.4,-6.8).curveTo(4.6,-6.1,4.8,-5.6).curveTo(4.7,-5.5,4.7,-5.5).curveTo(4.8,-5.2,4.8,-4.8).curveTo(4.8,-4.5,3.4,-2.7).curveTo(2.1,-0.7,2,-0.4).curveTo(1.8,1,1.7,1.9).curveTo(1.5,3.5,0.6,3.5).curveTo(0.5,3.5,0.3,3.5).curveTo(1,5.3,1,5.6).curveTo(1,6.8,0.1,6.8).curveTo(-0.7,6.8,-1.6,3.8).curveTo(-1.6,3.7,-1.6,3.7).curveTo(-1.6,3.3,-1.9,3).curveTo(-2.1,2,-2.2,1.7).curveTo(-2.2,1.2,-2.3,0.9).curveTo(-2.3,0.6,-2.5,0.4).curveTo(-2.7,-0.3,-2.8,-0.9).curveTo(-2.8,-3.9,1.1,-6.4).curveTo(2.4,-7.2,3.3,-7.5).curveTo(3.3,-7.6,3.3,-7.6).curveTo(3.5,-7.6,3.6,-7.6).closePath().moveTo(-0.4,-2.4).curveTo(0,-3.1,0.5,-3.7).curveTo(-0.6,-2.9,-0.9,-1.7).curveTo(-0.7,-2.1,-0.4,-2.4).closePath().moveTo(-4.7,7.4).lineTo(-4.7,7.5).curveTo(-4.7,7.6,-4.8,7.6).closePath();
	this.shape_263.setTransform(1.7,-0.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#000000").beginStroke().moveTo(6.5,-8.5).curveTo(4.3,-8.6,3,-8.9).curveTo(0.8,-8.5,-3,-7.1).curveTo(-12,-3.7,-12,-2.1).curveTo(-12,-1.5,-11.9,-1.3).lineTo(-11.1,-1).curveTo(-9.5,-1.4,-7.4,-2.6).curveTo(-5.3,-4,-4.5,-4.5).curveTo(-2.8,-5.7,1.3,-6.3).curveTo(1.4,-6.4,1.5,-6.4).curveTo(1.8,-6.5,2.1,-6.5).curveTo(2.4,-6.5,2.5,-6.5).curveTo(2.6,-6.5,2.6,-6.5).lineTo(2.6,-6.5).curveTo(3.1,-6.3,3.1,-5.6).curveTo(3.1,-5.3,2.9,-5).curveTo(2.7,-4.8,2.5,-4.7).curveTo(2.4,-4.3,2.2,-3.6).curveTo(2.2,-3.5,2.2,-3.5).curveTo(2.2,-2.8,2.1,-2.3).curveTo(2.1,-2.2,2.1,-2).curveTo(2.1,-1.3,2,-1).curveTo(1.9,-0.9,1.8,-0.7).curveTo(1.8,-0.5,1.6,-0.4).curveTo(1.7,-0.3,1.6,-0.3).curveTo(1.7,0.3,1.6,0.7).curveTo(1.6,1.3,1.4,1.6).curveTo(1.4,2.1,1.4,2.5).curveTo(1.4,3.6,3.9,5.7).curveTo(3.8,5.7,3.7,5.7).curveTo(3.8,5.8,3.9,5.9).curveTo(4.5,6.3,4.8,6.7).curveTo(5.2,6.9,6,7.4).curveTo(6.2,7.4,6.3,7.5).curveTo(6.9,7.7,7.3,8).curveTo(9.3,8.9,11.1,8.9).curveTo(11.6,8.9,11.9,8.5).curveTo(12,8.3,12,8).curveTo(12,7.6,7.7,5.5).curveTo(7.5,5.4,7.3,5.3).curveTo(7.2,5.2,7,5.2).curveTo(3.3,3.3,3.3,2.5).curveTo(3.3,-0.1,4.4,-3.3).curveTo(5.1,-5.2,5.3,-6).curveTo(6,-6.9,6.5,-7.7).closePath();
	this.shape_264.setTransform(-0.3,0.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#000000").beginStroke().moveTo(0.2,-3.9).curveTo(0.2,-3.9,0.2,-3.8).curveTo(-1,-4.1,-2.9,-4.4).curveTo(-8,-5.3,-9.8,-4.5).curveTo(-10.9,-4,-14.4,-2.8).curveTo(-17.4,-1.6,-17.4,-0.4).curveTo(-17.4,0.5,-16.3,0.5).curveTo(-16.3,0.5,-6.6,-3.4).curveTo(-3.3,-2.6,-1.4,-2.3).curveTo(-1.2,-2.3,-1,-2.3).curveTo(-1,-2.3,-0.9,-2.3).curveTo(-0.2,-2.6,0.2,-1.9).curveTo(0.5,-1.7,0.7,-1.3).curveTo(1,-1,1.1,-0.3).curveTo(1.2,-0.4,1.3,-0.5).curveTo(1.3,1.3,1.4,1.8).curveTo(1.8,3.7,3.5,4.9).lineTo(6.3,4.9).curveTo(9.5,3.8,14.9,2.6).curveTo(17.4,2.1,17.4,1.1).curveTo(17.4,0.1,16.4,0.1).curveTo(15.9,0.1,14.9,0.7).curveTo(13.8,1.4,13.6,1.5).curveTo(11.9,1.9,8.9,2.3).curveTo(4.9,2.9,4.2,3).curveTo(3.1,-0.1,3.2,-2.4).curveTo(3.2,-2.6,3.2,-2.7).curveTo(2,-3.1,0.6,-3.7).curveTo(0.4,-3.8,0.2,-3.9).closePath();
	this.shape_265.setTransform(3.5,-2.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#000000").beginStroke().moveTo(0.8,-3.7).curveTo(-1.5,-3.9,-4.6,-4.9).curveTo(-7.3,-5.7,-11,-4.6).curveTo(-12.9,-4,-15.1,-2.3).curveTo(-17.3,-0.7,-17.3,0.2).curveTo(-17.2,1.1,-16.3,1.1).curveTo(-14.9,0,-13.2,-1.1).curveTo(-10,-3.3,-8.2,-3.4).curveTo(-6.4,-3.5,-3.7,-2.5).curveTo(-2.1,-1.9,-0.8,-1.7).curveTo(-0.6,-1.8,-0.3,-1.8).curveTo(0.1,-1.8,0.3,-1.6).curveTo(0.5,-1.6,0.7,-1.5).curveTo(0.7,-1.5,0.8,-1.5).curveTo(1.1,-1.5,1.4,-1.4).curveTo(1.6,-1.3,1.8,-1.2).curveTo(1.9,-1.1,2,-0.9).curveTo(2.1,-1,2.1,-1.1).curveTo(2.4,0.4,2.9,2).curveTo(4,5.3,5.4,5.2).curveTo(5.5,5.2,5.6,5.2).curveTo(5.7,5.2,5.9,5.2).curveTo(17.3,-0.6,17.3,-1.1).curveTo(17.2,-2.7,10.8,0.1).curveTo(7.3,1.6,5.7,2.8).curveTo(5.5,2.3,5.2,1.7).curveTo(4,-0.6,4,-1.3).curveTo(3.9,-2.2,3.8,-2.8).curveTo(3.5,-2.9,3.2,-3.2).curveTo(2.9,-3.3,2.7,-3.4).curveTo(2.5,-3.5,2.3,-3.5).lineTo(1.2,-3.5).curveTo(1,-3.6,0.8,-3.7).closePath().moveTo(-1,3.4).curveTo(-1.2,3.4,-1.4,3.4).curveTo(-1.3,3.7,-1.3,4.1).curveTo(-1.1,3.7,-0.9,3.4).curveTo(-1,3.4,-1,3.4).closePath();
	this.shape_266.setTransform(1.3,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_254}]}).to({state:[{t:this.shape_255}]},2).to({state:[{t:this.shape_256}]},2).to({state:[{t:this.shape_257}]},2).to({state:[{t:this.shape_258}]},2).to({state:[{t:this.shape_259}]},2).to({state:[{t:this.shape_260}]},2).to({state:[{t:this.shape_261}]},2).to({state:[{t:this.shape_262}]},2).to({state:[{t:this.shape_263}]},2).to({state:[{t:this.shape_264}]},2).to({state:[{t:this.shape_265}]},2).to({state:[{t:this.shape_266}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-10,32.6,8.4);


(lib.mcPlayer_jumping_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#000000").beginStroke().moveTo(-1.1,-21.3).curveTo(-0.5,-21.9,-0.5,-20.2).curveTo(-1,-18.1,-1.4,-16.6).curveTo(-1.4,-16.5,-1.5,-16.5).curveTo(-2.1,-15.5,-2.1,-14.4).curveTo(-2,-14.2,-2,-13.9).curveTo(-2,-13.9,-2,-14).curveTo(-2,-13.9,-2,-13.8).lineTo(-2.1,-13.8).curveTo(-2.2,-12.9,-2.2,-12.5).curveTo(-2.2,-8.6,-0.9,-4.2).curveTo(-0,-1.4,0.3,-0.1).curveTo(0.6,-0.1,1,-0.2).curveTo(2.8,-1,4.3,-0.9).curveTo(5.1,-0.8,5.7,-0.7).curveTo(6,-0.7,6.3,-0.7).curveTo(10.7,-0.9,11.8,1.4).curveTo(12.2,2.1,12.2,4.7).lineTo(12.2,7.7).curveTo(11.9,9.9,10.8,10.2).curveTo(10.6,10.5,10.5,10.5).curveTo(10.3,10.5,10.2,10.5).curveTo(10.1,10.5,10,10.5).curveTo(9.6,10.4,9.6,10.3).curveTo(9.4,10.2,9.4,9.9).curveTo(9.3,9.7,9.3,9.4).curveTo(10.3,5.2,10.3,4.7).curveTo(10.3,3.2,10.2,2.8).curveTo(10.1,2.1,9.8,1.7).curveTo(9.3,1.4,8.6,1.1).lineTo(6.4,1.1).curveTo(5.3,0.8,2.5,1.8).lineTo(1.3,1.8).curveTo(2.2,3.5,2.2,5.4).curveTo(2.2,11.4,-1.4,16).curveTo(-1.8,16.9,-2.5,17.9).curveTo(-2.7,18.1,-3,18.5).curveTo(-5.2,21.5,-7.5,21.5).curveTo(-8.1,21.5,-8,21.4).curveTo(-8.2,21.2,-8.2,21.2).curveTo(-8.3,21.1,-8.3,20.7).curveTo(-8.2,20.6,-8.1,20.5).curveTo(-8.1,20.4,-8.1,20.2).curveTo(-6,18.1,-3.9,15.3).curveTo(0.3,9.7,0.3,5.4).curveTo(0.3,4.4,-0.3,3.1).curveTo(-0.5,2.6,-0.6,2.3).curveTo(-0.7,2.4,-0.7,2.6).curveTo(-1.7,1.7,-2.7,-1.7).curveTo(-3.4,-4.1,-3.8,-6.5).curveTo(-4.1,-8.9,-4,-11).curveTo(-4,-11.3,-4.1,-11.6).curveTo(-4.1,-11.5,-4.1,-11.5).curveTo(-6.3,-8.9,-6.3,-6.9).curveTo(-6.3,-5.4,-5.6,-4.7).curveTo(-4.4,-3.3,-3.7,-1.6).lineTo(-3.8,-0.9).lineTo(-4.1,-0.7).curveTo(-4.3,-0.5,-4.8,-0.5).curveTo(-7.1,-0.5,-8,-3.7).curveTo(-8.5,-5.3,-8.5,-7).curveTo(-8.5,-12,-5.2,-14.2).curveTo(-4.4,-14.7,-3.8,-14.8).curveTo(-3.7,-14.9,-3.7,-14.9).curveTo(-4.8,-14.7,-6.8,-14.6).curveTo(-7.9,-13.2,-8.9,-12).curveTo(-10.8,-9.6,-11.1,-9.6).curveTo(-12,-9.6,-12.1,-10.2).curveTo(-12.2,-10.6,-12.1,-11).curveTo(-12.1,-12.2,-9.7,-15).curveTo(-6.7,-18.5,-3.7,-17).curveTo(-3.5,-17,-3.4,-16.9).curveTo(-3.4,-17,-3.4,-17.1).curveTo(-2.9,-18.5,-2.7,-19.6).curveTo(-2.2,-21.4,-1.5,-21.4).curveTo(-1.3,-21.4,-1.1,-21.3).closePath();
	this.shape_267.setTransform(0.2,8.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#000000").beginStroke().moveTo(-0.5,-20.8).curveTo(-0.4,-20.3,-0.4,-19.7).curveTo(-0.4,-19.5,-1.1,-15.9).curveTo(-1.2,-15.6,-1.3,-15.3).curveTo(-1.3,-15.3,-1.3,-15.2).lineTo(-1.3,-15.1).curveTo(-1.3,-14.9,-1.3,-14.6).curveTo(-1.7,-13.9,-1.7,-12.9).curveTo(-1.7,-12.7,-1.6,-12.5).curveTo(-1.8,-10.7,-1.8,-9).curveTo(-1.8,-4.6,-0.2,-0.4).curveTo(0.2,-0.8,0.9,-1.1).curveTo(3.5,-2.3,8.7,-1.8).curveTo(10.6,-1,11.5,2.4).curveTo(12.1,4.7,12.1,7.2).curveTo(12.2,9.5,11.2,10.1).lineTo(10.1,9.8).curveTo(10.1,9.7,10.1,9.6).curveTo(9.9,9.5,9.8,9.4).curveTo(9.7,9.2,9.7,9).lineTo(10,7.1).curveTo(9.5,4.2,8.8,1.8).curveTo(8.2,1.3,7.8,1).curveTo(6.8,0.4,5.7,0.2).lineTo(3.3,0.2).curveTo(2.5,0.4,1.7,0.8).curveTo(1.5,1,1.4,1.1).curveTo(1.2,1.4,1,1.7).curveTo(1.5,2,1.7,2.7).curveTo(2,3.6,2,6.6).curveTo(2,6.7,2,6.8).curveTo(2.1,7.3,2.1,7.8).curveTo(2.1,10.1,-0.4,15.2).curveTo(-3.6,21.9,-7.7,21.9).curveTo(-8,21.9,-8.2,21.8).curveTo(-8.8,21.8,-8.9,21.4).curveTo(-9,21.3,-9.1,21.3).curveTo(-9.1,20.9,-9.1,20.8).curveTo(-9,20.7,-8.9,20.7).curveTo(-8.8,19.7,-7.4,19.5).curveTo(-7.3,19.4,-7.2,19.4).curveTo(-5.8,18.1,-4.4,16.5).curveTo(0.2,11.3,0.2,7.8).curveTo(0.2,6.7,-0.6,4.3).curveTo(-1.1,3.6,-1.3,2.4).curveTo(-1.4,2.1,-1.6,1.8).curveTo(-2.9,0.6,-3.4,-3.4).curveTo(-3.4,-3.5,-3.4,-3.6).curveTo(-3.5,-4,-3.6,-4.3).lineTo(-3.6,-5.6).curveTo(-3.6,-6,-3.6,-6.4).curveTo(-3.7,-7.7,-3.7,-9).curveTo(-3.7,-9.3,-3.7,-9.6).curveTo(-4,-10.9,-4,-13).lineTo(-4,-13.1).curveTo(-4,-13.1,-4,-13).curveTo(-6.1,-11.2,-6.2,-10.7).curveTo(-6.1,-9,-6.2,-7.9).curveTo(-6.2,-7.2,-6.4,-6.8).curveTo(-4.9,-4.6,-4.9,-3.3).curveTo(-4.9,-2.1,-6,-2.1).curveTo(-7,-2.1,-7.7,-4.2).curveTo(-8.1,-5.3,-8.2,-6.4).curveTo(-8.4,-6.5,-8.4,-6.5).curveTo(-8.5,-7.4,-8.5,-9.1).curveTo(-8.5,-12,-6.1,-14.5).lineTo(-7.1,-14.6).curveTo(-7.2,-14.6,-7.3,-14.6).curveTo(-8.7,-13,-9.6,-11.4).curveTo(-9.7,-11.2,-9.8,-11).curveTo(-9.9,-11.1,-10,-11.2).curveTo(-10.3,-10.9,-10.6,-10.9).curveTo(-11.8,-10.9,-11.7,-12).curveTo(-11.9,-12,-12.1,-12).curveTo(-10.9,-15.3,-7.5,-16.4).curveTo(-5.6,-17,-3.9,-16.5).curveTo(-3.8,-16.5,-3.7,-16.5).curveTo(-3.7,-16.5,-3.6,-16.5).curveTo(-3.3,-18.3,-2.5,-19.8).curveTo(-2.1,-20.5,-1.8,-20.9).curveTo(-2.3,-21,-2.8,-21).curveTo(-2.3,-21,-1.7,-21).curveTo(-1.4,-21.5,-1.3,-21.4).curveTo(-0.6,-22.6,-0.5,-20.9).curveTo(-0.1,-20.8,0.4,-20.8).curveTo(0.2,-20.8,0,-20.8).curveTo(-0.2,-20.8,-0.5,-20.8).closePath();
	this.shape_268.setTransform(0.6,8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#000000").beginStroke().moveTo(-1.9,-21.2).curveTo(-0.9,-22.2,-0.9,-20.3).curveTo(-0.9,-20.4,-1.7,-17.9).curveTo(-1.8,-17.5,-1.9,-17.2).curveTo(-2,-16.6,-2,-16).curveTo(-1.9,-16.1,-1.8,-16).curveTo(-2,-15.5,-2,-14.7).curveTo(-2,-14.7,-2,-14.6).curveTo(-2,-14.6,-2,-14.5).curveTo(-2,-14.4,-2,-14.3).curveTo(-2,-14.1,-1.9,-13.8).curveTo(-1.9,-13.7,-1.8,-13.6).curveTo(-1.9,-13.6,-1.9,-13.6).curveTo(-1.8,-13.1,-1.8,-12.6).curveTo(-1.8,-12,-2,-11.7).curveTo(-1.4,-8.6,-0.1,-2.9).curveTo(0.2,-1.8,0.4,-0.8).curveTo(0.8,-2.2,2.2,-2.2).curveTo(3.8,-2.3,6.3,-0.8).curveTo(6.4,-0.8,6.5,-0.7).curveTo(8.8,-0,10,1.8).curveTo(10.2,2.1,10.4,2.4).curveTo(10.4,2.4,10.4,2.5).curveTo(12.2,4.5,12.2,6.5).curveTo(12.2,8.2,11.4,8.9).curveTo(11.3,9.2,11.1,9.3).curveTo(11.1,9.4,11.1,9.6).lineTo(10.6,9.8).curveTo(10.6,9.3,10.6,8.9).curveTo(10.5,8.8,10.5,8.7).lineTo(10.4,8.7).curveTo(10.4,8.6,10.4,8.5).curveTo(10.3,8.1,10.2,7.4).curveTo(9.7,5.5,8.3,3.3).curveTo(7.4,2,6.5,1.2).curveTo(4.9,0.4,4.1,0.4).curveTo(3.1,0.4,2.2,0.6).curveTo(1.8,1.2,1.3,1.3).lineTo(1,1.2).curveTo(1,1.2,0.9,1.3).curveTo(2.2,7.2,2.2,7.7).curveTo(2.2,12,0.8,14.3).curveTo(-0,15.7,-1.9,17.5).curveTo(-2.9,18.6,-4.2,19.7).curveTo(-5.1,20.3,-6.1,20.9).curveTo(-6.5,21.2,-6.9,21.5).lineTo(-7.1,21.4).curveTo(-7.3,21.5,-7.4,21.6).curveTo(-7.6,21.4,-7.7,21.2).lineTo(-7.7,21.2).curveTo(-7.8,21.2,-7.8,21.1).curveTo(-8,20.8,-8,20.6).curveTo(-7.9,20.5,-7.8,20.5).lineTo(-7.8,20.5).curveTo(-5.8,18.6,-3.7,16.1).curveTo(-0.5,12,0.2,9).curveTo(0.2,8.5,-0.4,5.6).curveTo(-1,2.7,-1.2,1.7).lineTo(-1.2,1.7).curveTo(-1.7,0.1,-2.7,-2.8).curveTo(-3,-3.7,-3.2,-4.4).curveTo(-3.7,-5.6,-3.8,-6.4).curveTo(-3.9,-7,-3.9,-7.8).curveTo(-4,-8.4,-4,-8.8).curveTo(-4,-10.4,-3.9,-11.7).curveTo(-3.9,-11.7,-3.9,-11.8).curveTo(-4.1,-12.1,-4.2,-12.6).curveTo(-4.5,-12.3,-4.8,-11.9).curveTo(-7,-9.5,-7,-7.4).curveTo(-7,-6.4,-5.8,-4.9).curveTo(-4.7,-3.4,-4.7,-3.3).curveTo(-4.7,-2.2,-5.9,-2.2).curveTo(-7.9,-2.2,-8.7,-4.6).curveTo(-9.1,-5.8,-9.2,-7.1).curveTo(-9.2,-11.3,-5.9,-14.2).curveTo(-5.7,-14.4,-5.5,-14.5).curveTo(-7,-14.2,-8.3,-13.8).curveTo(-9,-13.6,-9.8,-12.6).curveTo(-10.5,-11.6,-11.1,-11.6).curveTo(-11.6,-11.6,-11.7,-11.7).curveTo(-11.8,-11.8,-12.2,-12).lineTo(-12.2,-12.9).curveTo(-12.2,-16.5,-4.1,-16.9).curveTo(-3.8,-18.3,-3.1,-19.5).curveTo(-2.9,-21.1,-2.2,-21.2).curveTo(-2.1,-21.2,-1.9,-21.2).closePath();
	this.shape_269.setTransform(0.9,8.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#000000").beginStroke().moveTo(8.9,-17.3).curveTo(9,-17.3,9.1,-17.2).lineTo(8.7,-17.2).curveTo(8.8,-17.3,8.9,-17.3).closePath().moveTo(11.3,3.9).curveTo(12,5.5,12,7.7).curveTo(12,8.9,11.1,8.9).curveTo(9.9,8.9,9.8,7.1).curveTo(9.8,5,9.6,4.5).curveTo(9.4,3.7,7.6,2.3).curveTo(6.3,1.2,4.8,0.2).lineTo(3.1,0.2).curveTo(2.7,0.3,2.3,0.5).curveTo(1.7,1,0.8,2).curveTo(0.4,2.4,-0.1,2.6).curveTo(-0.2,2.7,-0.3,2.8).curveTo(-0.2,3.2,-0.2,3.7).curveTo(0,5.3,0,6.9).curveTo(0,8.1,-0.4,9.9).curveTo(-0.6,12.1,-1.4,14.1).curveTo(-1.6,14.6,-1.8,15.1).curveTo(-2,15.8,-2.6,16.6).curveTo(-2.6,16.7,-2.7,16.8).curveTo(-2.8,17,-2.9,17.2).curveTo(-5,21.1,-7.7,21.1).curveTo(-8.2,21.3,-8.6,21.3).curveTo(-9,21.3,-9.2,21).curveTo(-9.3,20.9,-9.3,20.9).curveTo(-9.3,20.8,-9.4,20.8).curveTo(-9.4,21.1,-9.4,20.4).curveTo(-8.6,20.1,-7.4,19.3).curveTo(-6,18.3,-4.8,16.9).curveTo(-3.9,15.5,-3.5,13.6).curveTo(-3.1,11.7,-2.4,9.8).curveTo(-1.9,8.5,-1.9,6.9).curveTo(-1.9,4.9,-2.3,3.2).curveTo(-2.4,2.8,-2.5,2.5).curveTo(-3,1.8,-3.3,0.4).curveTo(-3.3,0.2,-3.3,0.1).lineTo(-3.3,0.1).curveTo(-4.2,-1.8,-4.5,-4.9).curveTo(-4.7,-5.7,-4.7,-6.7).curveTo(-4.8,-7.3,-4.8,-8).curveTo(-4.8,-8.5,-4.8,-9.1).curveTo(-4.9,-10,-4.9,-10.2).curveTo(-4.9,-10.6,-4.8,-11.6).curveTo(-4.7,-12,-4.7,-12.4).curveTo(-4.9,-12.3,-5,-12.2).curveTo(-7.3,-10,-7.3,-8.5).curveTo(-7.3,-7.4,-6.4,-6.1).curveTo(-5.6,-4.7,-5.6,-4.4).curveTo(-5.6,-3.8,-5.9,-3.5).curveTo(-6.3,-3.2,-6.7,-3.2).curveTo(-8.6,-3.2,-9.2,-5.8).curveTo(-9.5,-7.2,-9.5,-8.6).curveTo(-9.5,-11.3,-6.1,-14.2).curveTo(-5.9,-14.4,-5.8,-14.5).lineTo(-8.2,-14.5).curveTo(-9,-14,-9.5,-12.3).curveTo(-9.9,-10.9,-11,-10.9).curveTo(-11.4,-10.9,-11.6,-11).curveTo(-12,-11.2,-12,-11.3).lineTo(-12,-12.1).curveTo(-12,-12.9,-11.7,-14).curveTo(-11.3,-15.2,-10.7,-15.8).curveTo(-8.7,-17.9,-5.7,-17.3).curveTo(-5,-17.2,-4.5,-17).curveTo(-4.4,-17.8,-3.9,-18.9).lineTo(-3.9,-19.2).curveTo(-3.7,-20,-3.2,-20.7).curveTo(-3.1,-20.9,-3.1,-21).curveTo(-3,-21,-2.9,-21).lineTo(-2.9,-21).curveTo(-2.1,-22,-2.1,-19.4).curveTo(-2.3,-18.1,-2.4,-16.9).curveTo(-2.6,-16.3,-2.6,-15.4).curveTo(-2.6,-15.1,-2.5,-14.8).curveTo(-2.6,-14.4,-2.6,-14).curveTo(-2.6,-13.7,-2.6,-13.3).curveTo(-2.6,-13.4,-2.7,-13.4).curveTo(-2.9,-10.8,-2.9,-9.8).curveTo(-2.9,-4.1,-1.4,-0.6).curveTo(-1.3,-0.3,-1.2,-0.1).curveTo(-0.7,-1,0.5,-1.5).curveTo(2.2,-2.1,4.5,-1.5).lineTo(6,-1.5).curveTo(8.1,-0.7,9.4,0.6).curveTo(10.7,1.9,11.3,3.9).closePath();
	this.shape_270.setTransform(2.1,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_267}]}).to({state:[{t:this.shape_268}]},5).to({state:[{t:this.shape_269}]},5).to({state:[{t:this.shape_270}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-13.2,24.4,42.9);


(lib.mcPlayer_jumping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#000000").beginStroke().moveTo(5.2,-25.8).curveTo(7.6,-23.8,7.6,-21.2).curveTo(7.6,-18.2,6.4,-15.3).curveTo(4.7,-11.2,1.3,-10.5).lineTo(-0.4,-10.5).lineTo(-0.4,-10.4).lineTo(-0.7,-10.4).curveTo(-0.6,-10.5,-0.6,-10.5).lineTo(-1.8,-10.5).curveTo(-1.9,-10.2,-2,-9.9).curveTo(-2.5,-8.1,-3,-6.3).curveTo(-3.2,-5.8,-3.2,-5.3).curveTo(-2.7,-5.1,-1.4,-4.1).curveTo(0.5,-2.7,2,-2.9).curveTo(5.1,-3.3,6.9,-5.4).curveTo(7.8,-6.5,8.4,-7.6).curveTo(8.7,-7.6,8.8,-7.6).curveTo(9,-7.5,9.1,-7.1).curveTo(9.3,-5.6,7.8,-4).curveTo(5.9,-2,2.4,-1.5).curveTo(0.4,-1.2,-2,-2.7).curveTo(-2.8,-3.2,-3.6,-3.8).curveTo(-4.2,-0.1,-3.8,3).curveTo(-3.6,4.5,-2.6,6.6).curveTo(-2.1,7.5,-1.3,9.2).curveTo(-0.9,9,-0.3,8.7).curveTo(1.5,7.9,3,8.1).curveTo(8.8,8.6,10.2,10.2).curveTo(10.6,10.7,10.6,13.4).curveTo(10.6,15.5,10.5,16.1).curveTo(10.2,17.9,8.8,18.2).curveTo(8.4,18.1,8.3,18).curveTo(8.1,17.9,8.1,17.5).curveTo(9.4,13.9,9.4,13.4).curveTo(9.4,11.4,9.3,11.1).curveTo(8.4,9.3,4.7,9.3).curveTo(0.6,9.3,-0.2,10).curveTo(-0.3,10.1,-0.4,10.2).curveTo(0.9,11.3,0.9,14.1).curveTo(-3.5,27.9,-8.7,27.9).curveTo(-9.3,27.9,-9.3,27.8).curveTo(-9.4,27.7,-9.5,27.7).curveTo(-9.5,27.6,-9.5,27.2).curveTo(-7.2,25.4,-4.9,22.9).curveTo(-0.4,17.9,-0.4,14.3).curveTo(-0.4,13.3,-1.3,11.8).curveTo(-1.6,11.2,-1.9,10.9).curveTo(-1.9,11,-2,11.1).curveTo(-2.9,10.4,-4,7.3).curveTo(-4.6,5.2,-5,3).curveTo(-5.6,-1.1,-4.9,-4.4).lineTo(-4.9,-4.4).curveTo(-8,-2.5,-8.8,-0.5).curveTo(-9.6,1,-9.2,3.7).curveTo(-9.1,4.3,-8.3,6.9).curveTo(-8.2,7.4,-8.2,7.8).lineTo(-8.8,8.1).curveTo(-9.8,7.2,-10.1,6.2).curveTo(-10.2,6,-10.5,4.1).curveTo(-11,0.5,-10,-2).curveTo(-8.7,-5.5,-4.7,-5.1).curveTo(-4.2,-7.2,-3,-9.8).curveTo(-2.8,-10.1,-2.6,-10.5).lineTo(-5.5,-10.5).curveTo(-7.9,-10.5,-9.4,-14).curveTo(-10.5,-16.6,-10.5,-18.7).curveTo(-10.5,-21.5,-9,-24).curveTo(-6.6,-27.9,-1.5,-27.9).curveTo(2.6,-27.9,5.2,-25.8).closePath().moveTo(6.4,-21.1).curveTo(6.4,-23,3.8,-24.8).curveTo(0.6,-27,-4.4,-26.2).curveTo(-6.2,-25.6,-7.8,-22.9).curveTo(-9.3,-20.5,-9.3,-18.7).curveTo(-9.3,-16.8,-8.3,-14.8).curveTo(-7,-12.3,-5.1,-11.9).lineTo(1.1,-11.9).curveTo(3.1,-11.8,4.9,-15.8).curveTo(6.4,-19.2,6.4,-21.1).closePath();
	this.shape_271.setTransform(1.5,-3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.8,-1.9).curveTo(7.8,-0,6.3,3.3).curveTo(4.6,7.4,2.6,7.2).lineTo(-3.7,7.2).curveTo(-5.6,6.9,-6.8,4.4).curveTo(-7.8,2.3,-7.8,0.4).curveTo(-7.8,-1.3,-6.3,-3.8).curveTo(-4.7,-6.4,-2.9,-7).curveTo(2,-7.9,5.2,-5.7).curveTo(7.8,-3.9,7.8,-1.9).closePath();
	this.shape_272.setTransform(0,-22.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.5,-7.5).curveTo(2.4,-7.4,3.7,-7.4).curveTo(6.9,-4.3,7.3,-3.8).curveTo(7.6,-3.5,7.6,-1).curveTo(7.5,1.3,6.6,3.5).curveTo(4.8,7.6,0.5,7.6).curveTo(-4.1,7.6,-6.2,4.6).curveTo(-7.6,2.7,-7.6,0.5).curveTo(-7.6,-1.4,-6.2,-3.9).curveTo(-4.8,-6.4,-3,-7.6).curveTo(-1.2,-7.6,0.5,-7.5).closePath();
	this.shape_273.setTransform(0,-21.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#000000").beginStroke().moveTo(6,-25.9).curveTo(8.7,-23.5,8.7,-19.3).curveTo(8.7,-16.2,7.6,-13.8).curveTo(5.6,-9.4,0.5,-9.4).curveTo(0,-9.4,-0.4,-9.4).curveTo(-0.8,-7.7,-1.2,-6).curveTo(-1.3,-5.4,-1.4,-4.8).curveTo(-1,-4.8,-0.8,-4.4).curveTo(-0.5,-3.8,0.4,-3.6).lineTo(6.2,-3.6).curveTo(7.4,-3.9,8.1,-5).curveTo(8.3,-5.4,8.5,-5.8).curveTo(8.7,-6.3,8.7,-6.7).curveTo(8.7,-7,8.7,-7.2).curveTo(8.9,-7.3,9,-7.3).curveTo(9.4,-8,10.1,-8.1).curveTo(10.2,-7.9,10.2,-7.3).curveTo(10.2,-7,10,-6.3).curveTo(9.9,-5.3,9,-4).curveTo(8,-2.4,6.6,-2.1).lineTo(0.1,-2.1).curveTo(-1,-2.3,-1.7,-3).curveTo(-1.9,-1.1,-1.9,0.7).curveTo(-1.9,4.8,-1.8,5.3).curveTo(-1.1,6.9,0,9.2).curveTo(0.8,8.2,3.1,7.8).curveTo(7,7.1,10.2,9.4).curveTo(11.4,10,11.8,12.8).curveTo(12,14.3,12,15.7).curveTo(12,16.3,12,17.2).curveTo(11.9,17.8,11.2,17.8).lineTo(10.5,17.7).curveTo(10.5,17.4,10.6,16.7).curveTo(10.7,16.1,10.7,15.8).curveTo(10.7,12.2,10.5,11.7).curveTo(9.3,8.9,4.2,8.9).curveTo(2.8,8.9,1.9,10).curveTo(1.7,10.2,1.5,10.5).curveTo(1.9,10.7,2.2,11.3).curveTo(2.5,12.1,2.5,14.8).curveTo(2.5,17.2,-0.2,22).curveTo(-3.5,28,-7.4,28).curveTo(-8.5,28,-8.6,27.8).curveTo(-8.6,27.5,-8.7,27.3).curveTo(-6.8,26.5,-5.9,26).curveTo(-4.1,25,-3.5,24.4).curveTo(-2,22.7,-1.4,21.3).curveTo(-0.7,19.5,0.6,17.6).curveTo(1.2,16.7,1.2,14.9).curveTo(1.2,13.9,0.3,13.2).curveTo(-0.7,12.5,-0.9,10.7).curveTo(-2.4,9.8,-2.9,5.9).curveTo(-3.3,3.4,-3.2,0.7).curveTo(-3.2,-2.1,-3.1,-3.5).curveTo(-3.3,-3.6,-3.5,-3.7).curveTo(-4.5,-4,-4.7,-4.1).lineTo(-6.7,-4.1).curveTo(-10.7,-0.3,-10.7,3.7).curveTo(-10.7,4.3,-10.3,5).curveTo(-9.9,5.6,-9.9,6.8).curveTo(-10,6.9,-10.1,7.1).curveTo(-10.2,7.3,-10.6,7.3).curveTo(-11.7,7.3,-11.9,5.4).curveTo(-12,4.5,-11.9,3.6).curveTo(-11.9,-0.4,-10.4,-2.9).curveTo(-8.1,-6.9,-3,-4.7).curveTo(-3,-4.9,-3,-5.1).curveTo(-2.7,-7.9,-1.3,-9.5).curveTo(-5.6,-10,-7.6,-13.1).curveTo(-8.9,-15.3,-8.9,-17.9).curveTo(-8.9,-22.6,-6.2,-25.4).curveTo(-3.7,-27.9,-0.1,-28).curveTo(3.5,-28.2,6,-25.9).closePath().moveTo(0.4,-26).curveTo(-1.3,-26.1,-3.1,-26.1).curveTo(-4.9,-24.9,-6.3,-22.3).curveTo(-7.7,-19.8,-7.7,-18).curveTo(-7.7,-15.8,-6.3,-13.9).curveTo(-4.2,-10.8,0.4,-10.8).curveTo(4.7,-10.8,6.5,-15).curveTo(7.4,-17.1,7.5,-19.5).curveTo(7.5,-22,7.2,-22.3).curveTo(6.8,-22.8,3.6,-25.8).curveTo(2.3,-25.8,0.4,-26).closePath();
	this.shape_274.setTransform(0.1,-3.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.1,-6.3).curveTo(7.4,-4.8,7.4,-2.9).curveTo(7.4,0.4,6.7,2.4).curveTo(5.6,5.3,2.5,7.6).lineTo(-0.5,7.6).curveTo(-4.3,8.5,-6.2,5.3).curveTo(-7.4,3.3,-7.4,1.2).curveTo(-7.4,-7.8,0,-7.8).curveTo(2.9,-7.8,5.1,-6.3).closePath();
	this.shape_275.setTransform(0.4,-22);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#000000").beginStroke().moveTo(5.6,-24.9).curveTo(3.4,-26.4,0.5,-26.4).curveTo(-6.9,-26.4,-6.9,-17.4).curveTo(-6.9,-15.4,-5.7,-13.3).curveTo(-3.7,-10.2,-0,-11).lineTo(3,-11).curveTo(6.1,-13.4,7.2,-16.3).curveTo(8,-18.2,8,-21.5).curveTo(8,-23.4,5.6,-24.9).closePath().moveTo(9.2,-21.4).curveTo(9.2,-17.8,8.1,-14.8).curveTo(6.2,-9.6,1.5,-9.6).curveTo(0.2,-9.6,-0.9,-9.7).curveTo(-0.4,-9.1,-0.4,-8.2).curveTo(-0.8,-6.2,-1.1,-4.6).curveTo(-0.5,-4.2,0.5,-3.7).curveTo(2.6,-2.3,4.5,-2.3).curveTo(7.5,-2.3,9.1,-3.3).curveTo(9.9,-3.8,10.9,-4.6).curveTo(11.2,-4.5,11.3,-4.5).curveTo(11.4,-4.3,11.4,-3.9).curveTo(11.4,-3.4,9.4,-2.2).curveTo(7.1,-0.8,4.5,-0.8).curveTo(1.5,-0.8,-1.3,-3.3).curveTo(-1.7,-0.5,-1.7,1.4).curveTo(-1.7,3.1,0.7,9).curveTo(1.1,8.7,2,8.4).curveTo(3.9,7.8,6.2,8.1).curveTo(12.2,8.9,12.2,14.8).curveTo(12.2,16.4,12.1,17.4).lineTo(11.6,17.6).curveTo(11.6,14.8,11.2,12.9).curveTo(10.4,9.3,5.9,9.3).curveTo(3.4,9.3,2,10).curveTo(1.7,10.1,1.4,10.3).curveTo(1.8,10.9,2.1,12.4).curveTo(2.5,14.4,2.5,16.9).curveTo(2.5,20.1,0.4,22.9).curveTo(-2,26.1,-6.4,27.9).curveTo(-6.9,27.3,-6.9,27.1).curveTo(-4.9,25.5,-2.8,23.4).curveTo(1.2,19.4,1.2,16.9).curveTo(1.2,16.4,0.6,13.9).curveTo(0.1,11.4,-0.2,10.5).curveTo(-0.2,10.5,-0.1,10.4).curveTo(-0.6,9,-1.6,6.5).curveTo(-2.9,3.3,-2.9,1.3).curveTo(-2.9,-1.2,-2.7,-3.1).curveTo(-3,-3.1,-3.2,-3.3).curveTo(-3.5,-3.3,-4.2,-3.8).lineTo(-7.7,-3.8).curveTo(-9.1,-2.6,-9.8,-0.5).curveTo(-10.4,0.9,-10.9,3.4).curveTo(-11.1,3.4,-11.6,3.6).curveTo(-12.1,3.1,-12.2,2.5).curveTo(-12.2,0.1,-9.8,-3.2).curveTo(-6.7,-7.1,-2.5,-4.6).curveTo(-2.5,-4.9,-2.4,-5.3).curveTo(-2.2,-5.8,-1.9,-6.9).curveTo(-1.7,-7.9,-1.7,-8.7).curveTo(-1.7,-9.4,-1.5,-9.8).curveTo(-5.9,-10.4,-7.4,-13.1).curveTo(-8.2,-14.4,-8.2,-17.5).curveTo(-8.2,-22.8,-5.5,-25.5).curveTo(-3.1,-27.8,0.5,-27.9).curveTo(3.9,-27.9,6.5,-26).curveTo(9.2,-24.1,9.2,-21.4).closePath();
	this.shape_276.setTransform(0,-3.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-7.6).curveTo(3.1,-7.6,5.1,-5.9).curveTo(7.4,-4,7.4,-0.8).curveTo(7.3,1.3,6.2,3.4).curveTo(4.2,7.7,0.1,7.7).curveTo(-4.6,7.7,-6.4,3.7).curveTo(-7.4,1.5,-7.4,-1.4).curveTo(-7.4,-4.4,-5.1,-6.1).curveTo(-3,-7.7,0,-7.6).closePath();
	this.shape_277.setTransform(0.7,-21.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#000000").beginStroke().moveTo(0.1,-25.8).curveTo(-2.9,-25.9,-5,-24.3).curveTo(-7.3,-22.6,-7.3,-19.6).curveTo(-7.3,-16.7,-6.3,-14.5).curveTo(-4.5,-10.5,0.2,-10.5).curveTo(4.3,-10.5,6.3,-14.7).curveTo(7.4,-16.8,7.6,-19).curveTo(7.6,-22.1,5.2,-24).curveTo(3.2,-25.7,0.1,-25.8).closePath().moveTo(6.1,-25).curveTo(8.8,-22.7,8.8,-19).curveTo(8.8,-16.5,7.3,-13.6).curveTo(5,-9,0.2,-9).curveTo(-0.3,-9,-0.8,-9.1).curveTo(-0.9,-8.5,-1.3,-5.7).curveTo(-1.5,-4.8,-1.6,-3.8).lineTo(-1.6,-3.8).curveTo(-1.6,-3.6,-1.6,-3.5).curveTo(-1.6,-3.5,-1.5,-3.5).curveTo(-1.4,-3.5,-0.8,-3.5).curveTo(-0.2,-3.5,0.5,-3.2).curveTo(1.1,-3,4.1,-3).curveTo(8.4,-3,9.3,-4.2).curveTo(9.4,-4.3,9.8,-5.2).curveTo(10,-5.7,10.5,-5.8).curveTo(10.8,-5.7,10.9,-5.7).curveTo(11.1,-5.5,11.1,-5.1).curveTo(11.1,-4.5,9.9,-3.2).curveTo(8.5,-1.8,7.5,-1.5).lineTo(1,-1.5).curveTo(0.5,-1.8,0.1,-2).curveTo(-0.7,-2.4,-1.7,-2.6).curveTo(-1.8,-1,-1.8,0.5).curveTo(-1.8,4,-1.6,4.7).curveTo(-0.9,6.7,0.3,10).curveTo(0.7,8.8,2.1,8.3).curveTo(3.9,7.5,6.5,8.1).curveTo(12.8,9.4,12.8,14.2).curveTo(12.8,15.6,12.7,16.4).lineTo(12.2,16.6).curveTo(12.2,14.1,11.7,12.4).curveTo(10.7,9.3,5.1,9.3).curveTo(2.6,9.3,1.9,10.6).curveTo(1.5,11.1,1.3,11.5).curveTo(1.5,11.9,1.3,12.5).lineTo(1.3,16).curveTo(1.3,20,-1.1,23.6).curveTo(-3.7,27.4,-6.9,27.4).curveTo(-7.5,27.4,-7.8,27).curveTo(-7.8,27.3,-7.8,26.7).curveTo(-7,26.5,-5.8,25.8).curveTo(-3.5,24.4,-1.8,21.9).curveTo(0.1,19.2,0.1,16.1).curveTo(-0.4,12.6,-0.5,11.5).curveTo(-1.3,11.1,-1.7,9.5).curveTo(-2.4,6.3,-2.5,6).curveTo(-3.1,5,-3.1,3.3).curveTo(-3.2,2.4,-3.1,0.6).curveTo(-3.1,-1.1,-2.8,-3).curveTo(-3.9,-3.1,-5.2,-3.1).curveTo(-6.7,-3.2,-8.1,-3.2).curveTo(-10.4,-1.4,-11.3,1.1).curveTo(-12,3.3,-11.3,5.4).curveTo(-12,5.9,-12,5.9).curveTo(-12.7,5.6,-12.8,4.8).curveTo(-12.8,4.6,-12.8,3.4).curveTo(-12.8,0,-11.8,-1.6).curveTo(-9.5,-5.3,-2.6,-4.3).curveTo(-2.3,-5.8,-1.9,-7.3).curveTo(-1.7,-8.5,-1.4,-9.1).curveTo(-6.1,-9.8,-7.8,-14.1).curveTo(-8.8,-16.7,-8.6,-19.6).curveTo(-8.6,-23.5,-5.9,-25.6).curveTo(-3.4,-27.5,0.1,-27.3).curveTo(3.6,-27.1,6.1,-25).closePath();
	this.shape_278.setTransform(0.5,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_272},{t:this.shape_271}]}).to({state:[{t:this.shape_274},{t:this.shape_273}]},5).to({state:[{t:this.shape_276},{t:this.shape_275}]},5).to({state:[{t:this.shape_278},{t:this.shape_277}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-30.9,21.3,55.9);


(lib.mcPlayer_falling_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#000000").beginStroke().moveTo(6,-15.6).lineTo(3.5,-15.6).curveTo(2.7,-15.4,1.9,-15).curveTo(0.8,-14.6,-0.4,-14.2).curveTo(-0.8,-12.1,-0.8,-10.4).curveTo(-0.8,-6,0.9,-2.5).curveTo(1.9,-0.6,2.3,0.7).curveTo(2.8,0.6,3.6,0.7).curveTo(6.3,1.3,7.4,3.7).curveTo(7.5,4.4,8.6,6).curveTo(10.1,8.2,10.2,8.4).curveTo(11.5,10.8,11.7,13.1).curveTo(11.8,14.2,11.7,16.4).curveTo(11.8,16.9,11.8,17.5).curveTo(11.7,17.8,11.7,18).curveTo(11.6,19.6,11.6,19.9).curveTo(11.4,21.9,10.5,22.4).lineTo(9.6,22.1).curveTo(9.6,21.9,9.7,21.5).curveTo(9.6,21.5,9.6,21.4).lineTo(9.5,21).curveTo(9.5,20.7,9.7,20).curveTo(9.8,19,9.8,17.6).curveTo(9.8,15,8.9,11).curveTo(8.5,10.3,8.3,9.9).curveTo(6.9,7.6,6.3,6.5).curveTo(6.3,6.4,6.3,6.4).curveTo(6.2,6.3,6.1,6.1).curveTo(5.4,4.9,3.5,3.7).curveTo(3.3,3.6,3.1,3.4).lineTo(2.4,3.4).curveTo(2.6,4,2.6,4.5).curveTo(2.6,7.9,0,12.5).curveTo(-2.7,17.1,-4.8,17.2).curveTo(-5,17.2,-5.1,17.2).curveTo(-5.5,17.2,-5.7,17).curveTo(-5.9,16.8,-5.9,16.3).curveTo(-5.9,15.9,-3.3,12.6).curveTo(-0.6,9,-0.1,8).curveTo(0.8,5.5,0.8,3.9).curveTo(0.9,3.3,0.9,2.8).curveTo(0.4,2.1,-0.4,0.5).curveTo(-1.5,-2,-2,-3.6).curveTo(-2.8,-6.6,-2.8,-7.6).curveTo(-2.6,-8.8,-2.6,-10.5).curveTo(-2.6,-12,-2.4,-14.8).lineTo(-5.5,-14.8).curveTo(-6.7,-14.2,-7.8,-13).curveTo(-9.3,-11.4,-9.8,-10.5).curveTo(-10.1,-9.8,-10.9,-8.3).curveTo(-11.4,-7.3,-11.9,-6.5).curveTo(-12.1,-5.1,-12.5,-5.1).curveTo(-13.2,-5.1,-13.3,-6.1).curveTo(-13.4,-6.4,-13.4,-7.1).curveTo(-13.3,-7.3,-13.2,-7.6).curveTo(-13,-10.5,-10.7,-13.3).curveTo(-8.6,-15.9,-6.8,-16.1).curveTo(-4.7,-17.1,-2.2,-16.4).curveTo(-2.2,-16.7,-2.1,-17).curveTo(-2,-18,-1.3,-20.2).curveTo(-0.8,-21.4,0.3,-22.2).curveTo(1.4,-23.1,1.4,-21.1).curveTo(1.4,-20.8,0.3,-17.1).curveTo(0.3,-17,0.3,-16.9).lineTo(0.5,-16.9).curveTo(0.7,-17,1,-17.1).curveTo(3.6,-18.1,6.5,-17.9).curveTo(13.4,-13.3,13.4,-12.5).curveTo(13.4,-12,13,-11.7).lineTo(13,-11.7).curveTo(13,-11,12.5,-11).curveTo(12.2,-11.3,11.8,-11.6).curveTo(10.8,-12,8.8,-13.7).curveTo(7,-15,6,-15.6).closePath();
	this.shape_279.setTransform(-1.2,8.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#000000").beginStroke().moveTo(2.5,-16.5).lineTo(6,-16.5).curveTo(7.1,-16.1,9.4,-15.6).curveTo(10.9,-15.1,11.8,-14.2).curveTo(13.5,-13,13.5,-11.4).curveTo(13.5,-11.1,13.5,-10.9).curveTo(13.5,-10.8,13.5,-10.7).curveTo(13.5,-10.1,13,-10.1).curveTo(12.7,-10.1,12.4,-10.3).curveTo(11.9,-10.7,10.5,-11.9).curveTo(8.3,-13.9,7,-14.7).curveTo(2.8,-14.3,1.4,-14.1).curveTo(0.5,-13.9,0.4,-13.9).curveTo(0.1,-13.9,-0.1,-14).curveTo(-0.6,-11.6,-0.6,-9.9).curveTo(-0.6,-7,1.2,-2.6).curveTo(2.2,-0.3,2.6,1.1).curveTo(3.7,1.9,5.3,4).curveTo(6.6,5,7.1,5.8).curveTo(7.3,6,8.6,7.9).curveTo(9.5,9.3,9.8,10).curveTo(10.1,10.7,10.3,11.6).curveTo(12.3,15.1,12.3,17.3).curveTo(12.3,18,11.8,19.5).curveTo(11.3,21.5,10.6,21.5).lineTo(10.6,21.5).curveTo(10.5,21.5,10.4,21.5).curveTo(9.9,21.5,9.7,21.2).lineTo(9.6,20.9).lineTo(9.7,20.6).curveTo(9.6,20.2,9.6,20.2).curveTo(9.6,20,9.8,19.6).lineTo(9.9,18.4).curveTo(9.9,16.7,9.5,14.1).lineTo(9.5,14.1).curveTo(8.3,11.5,5.7,7.8).curveTo(4.2,5.8,2.8,4).curveTo(2.8,4.4,2.8,4.8).curveTo(2.8,7.4,2.6,8).curveTo(2.3,9.6,0.6,11.5).curveTo(0.4,11.6,0,12.1).curveTo(-0.6,13.2,-1.6,14.5).curveTo(-2.6,15.7,-3.3,16.3).curveTo(-4.3,17.5,-4.7,17.5).curveTo(-5.8,17.5,-5.8,16.6).curveTo(-5.8,15.8,-2.6,11.9).curveTo(-0.1,8.8,0.5,7.7).curveTo(0.7,6.9,0.9,5.8).curveTo(1,4.7,1,3.1).curveTo(0.2,1.9,-0.7,-1.2).curveTo(-1.3,-2.4,-1.6,-3.2).curveTo(-2.2,-4.8,-2.4,-6.8).curveTo(-2.4,-7,-2.4,-9.1).curveTo(-2.5,-9.6,-2.5,-10).curveTo(-2.5,-11,-2.4,-12.2).curveTo(-2.4,-12.5,-2.4,-12.7).curveTo(-2.4,-13.1,-2.3,-13.7).curveTo(-5.2,-13.1,-6.6,-12.6).curveTo(-8.8,-11.9,-10.1,-10.4).curveTo(-10.7,-9.8,-11.2,-8.1).curveTo(-11.5,-7.1,-12,-6.5).curveTo(-12.2,-5.8,-12.4,-5.1).curveTo(-13.2,-5.1,-13.2,-6).lineTo(-13.4,-6.1).curveTo(-13.5,-6.4,-13.5,-7.2).curveTo(-13.5,-9.6,-11.3,-12.1).curveTo(-8.6,-15.2,-3.8,-15.5).curveTo(-3.4,-15.7,-2.9,-15.7).curveTo(-2.3,-15.7,-1.9,-15.7).curveTo(-1.9,-15.8,-1.9,-15.9).curveTo(-1.3,-18.2,-1.1,-18.8).curveTo(-0.8,-19.5,0,-20.3).curveTo(0.2,-20.6,0.3,-20.8).curveTo(1.5,-22.5,1.5,-20.1).curveTo(1,-18.3,0.5,-16.3).curveTo(0.5,-16.3,0.4,-16.2).curveTo(1.2,-16.5,2.4,-16.4).curveTo(2.5,-16.5,2.5,-16.5).closePath();
	this.shape_280.setTransform(-1.3,7.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#000000").beginStroke().moveTo(9.6,-12.4).curveTo(7.9,-14.4,1.1,-14.4).curveTo(0.4,-14.2,-0.6,-13.7).curveTo(-1.4,-10.9,-1.4,-8.3).curveTo(-1.4,-6,1.3,-0.8).curveTo(2.8,2,4,3.6).curveTo(4.7,4.2,5.8,5.3).curveTo(5.8,5.3,5.9,5.3).curveTo(6.5,5.6,7.2,6.6).curveTo(8.1,7.5,8.5,7.9).curveTo(9.6,9.1,9.7,10.1).curveTo(10,11.8,10.3,13.2).curveTo(11.8,17.2,11.8,19.2).curveTo(12,21.3,10.9,22).lineTo(10,21.7).curveTo(10,21.3,10,21).curveTo(9.9,20.5,9.9,19.8).curveTo(9.9,19.1,9.9,18.5).curveTo(9.2,11,4.1,6.5).curveTo(3.6,6,3,5.3).curveTo(2.6,6.4,1.7,8.3).curveTo(1.4,9.3,0.9,10.3).curveTo(0.8,10.7,-0.1,11.9).curveTo(-0.1,11.9,-0.1,12).curveTo(-0.7,13.2,-1.3,14.1).curveTo(-1.5,14.8,-2,15.5).curveTo(-2.5,16.3,-3,16.6).curveTo(-3,16.7,-3.1,16.7).lineTo(-3.2,16.7).curveTo(-3.4,16.8,-3.6,16.8).curveTo(-4.3,16.8,-4.4,16.1).curveTo(-4.4,16,-3.3,14.4).curveTo(-3,13.8,-2.4,12.8).curveTo(-0.7,9.8,-0.4,8.7).curveTo(0.5,6.5,1.4,4.6).curveTo(1.5,4.3,1.5,3.9).curveTo(1.6,3.8,1.6,3.7).curveTo(0.1,1.8,-1.1,-0.7).curveTo(-3.3,-5.2,-3.3,-8.4).curveTo(-3.3,-10.4,-2.9,-11.5).curveTo(-2.8,-11.5,-2.8,-11.6).curveTo(-2.8,-12.5,-2.7,-13.5).curveTo(-4.9,-13.6,-7.3,-11.9).curveTo(-8.1,-11.3,-8.5,-10.8).curveTo(-8.7,-10.4,-9.3,-9.7).curveTo(-9.5,-9.4,-10.5,-7.5).curveTo(-11.6,-5.8,-12.2,-5.8).curveTo(-12.5,-5.8,-12.7,-5.8).lineTo(-12.7,-5.8).curveTo(-13.6,-5.8,-13.4,-6.8).curveTo(-13.4,-9.1,-11.3,-11).curveTo(-10.8,-11.4,-10.1,-11.9).curveTo(-6.5,-16.2,-2.5,-15).lineTo(-2.5,-15).curveTo(-2.5,-15.4,-2.5,-15.8).curveTo(-2.5,-17.4,-0.4,-20.5).curveTo(1.8,-23.6,1.8,-20.3).curveTo(1.8,-20.2,0.5,-16.8).curveTo(2.1,-17.4,6.4,-16.1).curveTo(13.1,-14,13.3,-11.5).curveTo(13.4,-11.3,13.4,-11.1).lineTo(13.4,-10.6).curveTo(13.3,-10.2,12.8,-10.2).curveTo(12.7,-10.2,12.4,-10.4).lineTo(12.4,-10.4).curveTo(11.1,-10.4,10.6,-11).curveTo(10.1,-11.9,9.6,-12.4).closePath();
	this.shape_281.setTransform(-1.3,7.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#000000").beginStroke().moveTo(2.3,-14.4).curveTo(0.6,-14.4,-0.3,-14.2).curveTo(-1.1,-9.9,-1.1,-8.7).curveTo(-1.1,-6.2,1.9,-0.2).curveTo(2.9,1.8,3.9,3.6).lineTo(4,3.6).curveTo(4.6,4.4,5.8,5.6).curveTo(6.4,6.4,7.4,7.5).curveTo(8.2,8.4,8.7,9.6).curveTo(10.5,13.2,10.7,13.7).curveTo(11.2,15.1,11.2,17.4).curveTo(11.2,17.6,11.1,17.8).curveTo(11.3,18.8,11.3,19.6).curveTo(11.3,19.9,11.3,20.9).curveTo(11.2,21.7,10.4,21.7).curveTo(9.8,21.7,9.1,18.5).curveTo(8.2,14.4,8,14).curveTo(7.5,12.9,6.1,10.8).curveTo(4.2,8.2,3.2,6.4).curveTo(2.7,5.5,2.2,4.7).lineTo(1.9,5.8).curveTo(-0.7,15.6,-3.6,17.1).curveTo(-4.3,18,-4.7,18).curveTo(-5.3,18,-5.3,17.3).lineTo(-5.3,17.3).curveTo(-5.7,17.1,-5.7,16.6).curveTo(-5.7,16.3,-3.9,13.7).curveTo(-1.7,10.5,-0.8,8.7).curveTo(0.3,6.6,0.4,4.8).curveTo(0.6,3.2,1.1,2.9).curveTo(-0.7,-0.3,-1.4,-1.7).curveTo(-2,-2.9,-2.3,-4.1).curveTo(-3.3,-7.1,-3.3,-10).curveTo(-3.3,-11,-3,-13).curveTo(-2.9,-13.5,-2.8,-14).curveTo(-2.9,-14,-3,-14).curveTo(-3.9,-13.5,-5,-12.9).curveTo(-9.6,-10.5,-12.8,-7.1).lineTo(-12.9,-7.1).curveTo(-13,-7,-13.1,-6.9).curveTo(-13.8,-6.9,-13.8,-7.6).curveTo(-13.8,-7.9,-13.7,-8.3).curveTo(-13.5,-9,-12.9,-9.7).curveTo(-11.5,-11.5,-7.9,-13.5).curveTo(-6.4,-14.3,-5.3,-14.8).curveTo(-3.6,-15.7,-2.6,-15.8).curveTo(-2.6,-15.9,-2.6,-16).curveTo(-2.5,-16.5,-2.2,-17.5).curveTo(-2,-18,-1.6,-19).curveTo(-1.3,-19.9,-1,-20.5).curveTo(-0.6,-21.3,0.1,-21.6).curveTo(0.9,-22,0.9,-20.7).curveTo(0.9,-20.2,0.2,-16.5).curveTo(2.2,-16.6,5.7,-16.1).curveTo(13.8,-14.8,13.8,-12.1).curveTo(13.8,-11.4,13.4,-11.2).curveTo(13.3,-10.9,12.9,-10.9).curveTo(12.7,-10.9,11.2,-12.2).curveTo(10.8,-12.4,10.4,-12.7).curveTo(7.3,-14.4,2.3,-14.4).closePath();
	this.shape_282.setTransform(-0.8,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_279}]}).to({state:[{t:this.shape_280}]},5).to({state:[{t:this.shape_281}]},5).to({state:[{t:this.shape_282}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-13.9,26.8,44.9);


(lib.mcPhysObj_hitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#000000").beginStroke().moveTo(15,-15).lineTo(15,15).lineTo(-15,15).lineTo(-15,-15).closePath();

	this.addChild(this.shape_283);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.mcCharacter_hitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(12.5,-30).lineTo(12.5,30).lineTo(-12.5,30).lineTo(-12.5,-30).closePath();
	this.shape_284.setTransform(15,30);

	this.addChild(this.shape_284);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,0,25,60);


(lib.mcCharacter_char = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.giftedclientworldBg = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.giftedclienttiles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Spill
	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#484848").beginStroke().moveTo(-25.9,-32.2).lineTo(-21.2,-32.2).lineTo(-20.9,-32.3).lineTo(1.1,-32.3).curveTo(2.9,-32.1,4.5,-32.4).curveTo(6.3,-32.6,6.5,-32.6).lineTo(24.8,-32.6).curveTo(30,-32.2,31,-31.6).curveTo(31.5,-31.3,31.5,-29.7).lineTo(31.3,-26.3).curveTo(31.3,-24.9,31.7,-22.1).curveTo(32,-19.4,32,-18).curveTo(32,-16.1,31.8,-14.6).curveTo(31.6,-13.1,31.6,-12.5).curveTo(31.6,-10.1,32,-7.3).curveTo(32.3,-4.7,32.3,-4.5).curveTo(32.3,-4.1,32.3,-2.4).curveTo(32.3,-1.1,32,1.3).curveTo(31.8,4.7,31.8,4.9).curveTo(31.8,5.4,32.1,12.6).curveTo(32.1,16.2,31.8,19.2).curveTo(31.5,22.2,31.5,23.2).lineTo(32.1,25.1).curveTo(32.1,26,31.8,27.5).curveTo(31.5,29,31.5,29.7).curveTo(31.5,30.1,31.1,30.9).curveTo(30.6,31.8,30.3,31.8).curveTo(30.1,31.8,29.8,31.6).lineTo(29.6,31.4).curveTo(28.1,31.4,27.1,31.7).curveTo(26.1,31.9,25.2,31.8).lineTo(20.7,31.9).curveTo(20.3,32.1,20.1,32.1).lineTo(15.9,32.2).lineTo(15.6,32.3).lineTo(5.3,32.3).lineTo(3.3,32.5).lineTo(0.5,32.5).lineTo(0.4,32.6).lineTo(-15.6,32.6).curveTo(-19,32.2,-21.1,32).lineTo(-24,32).curveTo(-26.4,32.1,-27.3,32.2).curveTo(-28,32.3,-28.7,32.3).curveTo(-30.8,32.3,-31.7,31.3).curveTo(-32.2,30.7,-32.2,29.9).curveTo(-32.2,29.8,-31.8,28.5).curveTo(-31.5,27.2,-31.5,25.9).lineTo(-31.7,21).lineTo(-31.5,17.1).curveTo(-31.5,16.4,-31.6,15.8).curveTo(-31.4,15.2,-31.4,14.3).curveTo(-31.4,12.8,-31.7,8.8).curveTo(-31.5,8,-31.5,7.2).curveTo(-31.5,6.1,-31.9,1.7).curveTo(-32.3,-2.8,-32.3,-5.8).curveTo(-32,-12.3,-32,-13.8).lineTo(-32.2,-21.4).curveTo(-32.2,-24.4,-32.1,-25.7).curveTo(-32,-27,-32,-31).curveTo(-32,-31.5,-31.2,-31.8).lineTo(-27.7,-31.9).curveTo(-27.3,-32,-25.9,-32.2).closePath().moveTo(6.4,-31).curveTo(5.5,-30.8,4.8,-30.8).curveTo(3.4,-30.6,1,-30.7).lineTo(-20.7,-30.7).lineTo(-21,-30.7).lineTo(-25.7,-30.6).lineTo(-27.5,-30.2).lineTo(-30.2,-30.2).curveTo(-30.2,-26.8,-30.4,-25.1).curveTo(-30.7,-23.4,-30.7,-21.4).lineTo(-30.5,-9.7).curveTo(-30.5,-8.4,-30.7,-5.8).curveTo(-30.7,-3.7,-30.3,1.5).curveTo(-29.9,6.6,-29.9,7.2).curveTo(-29.9,9,-30.4,10.3).curveTo(-31,11.5,-31,12.3).curveTo(-31,12.9,-30.6,13.4).curveTo(-30.2,13.9,-30,14.8).curveTo(-29.9,15.1,-29.9,17.2).curveTo(-29.9,18.1,-30.2,21.1).curveTo(-30.2,21.3,-29.9,25.9).lineTo(-29.9,27.9).curveTo(-29.9,28.1,-30.3,28.9).curveTo(-30.6,29.6,-30.6,29.9).curveTo(-30.6,30.2,-29.9,30.5).curveTo(-29.2,30.8,-28.1,30.8).curveTo(-27.8,30.8,-27,30.6).curveTo(-24.4,30.5,-24.2,30.4).lineTo(-21.4,30.4).curveTo(-20.1,30.6,-18.8,30.9).curveTo(-17.7,31,-15.3,31).curveTo(-15.1,31,-14.7,30.6).curveTo(-14,30.3,-12.5,30.3).curveTo(-12.3,30.3,-9,30.5).lineTo(-3.2,30.5).curveTo(-2.9,30.5,-2.6,30.7).curveTo(-1.9,30.8,0.3,30.9).lineTo(3.1,30.9).curveTo(3.3,30.8,5.2,30.7).lineTo(15.4,30.6).lineTo(15.8,30.5).lineTo(20,30.5).lineTo(20.6,30.3).lineTo(25,30.3).curveTo(25.2,30.2,27.6,30.2).curveTo(29.2,30.1,29.3,29).curveTo(29.4,28,29.9,27.1).lineTo(29.9,22.6).curveTo(30.5,17.7,30.5,12.6).curveTo(30.5,11.4,30.4,8.6).curveTo(30.2,5.9,30.2,5).curveTo(30.7,-1.1,30.7,-2.4).curveTo(30,-12.3,30,-12.4).curveTo(30.4,-16.4,30.4,-18.1).curveTo(30.4,-20.1,30.4,-20.4).curveTo(30.2,-21.4,29.8,-23.8).lineTo(29.8,-28.7).curveTo(29.9,-29,29.9,-29.6).curveTo(29.9,-30.3,29.3,-30.4).curveTo(29.3,-30.5,24.8,-31).closePath();
	this.shape_285.setTransform(30.9,30.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#B4B4B4").beginStroke().moveTo(-27.2,-32).lineTo(-26.9,-32.1).lineTo(-20.5,-32.2).curveTo(-20.3,-32.2,-19.1,-32.4).lineTo(-9.2,-32.4).curveTo(-8.9,-32.3,-7.4,-32.2).lineTo(3.6,-32.1).lineTo(3.9,-32).lineTo(9.9,-32).curveTo(10.2,-32.1,12.1,-32.2).curveTo(13.9,-32.4,14.1,-32.5).lineTo(14.1,-32.5).lineTo(26.8,-32.5).curveTo(26.9,-32.5,29.9,-32.2).curveTo(31.9,-31.9,31.9,-31.2).lineTo(31.9,-29.1).curveTo(31.8,-28.4,32.2,-27).curveTo(32.4,-25.6,32.4,-25.1).curveTo(32.4,-22.5,31.9,-21.6).lineTo(31.9,9).curveTo(31.9,10.6,32.2,14.1).curveTo(32.5,17.5,32.5,19.1).curveTo(32.5,20.6,32.2,26.3).lineTo(32.2,30.8).curveTo(31.8,31.5,31.6,31.6).curveTo(31.1,32,29.9,32).curveTo(28.7,32,28.4,31.9).curveTo(28.2,31.9,28,31.6).curveTo(25.7,31.5,25.6,31.5).lineTo(23,31.5).curveTo(22.9,31.5,20.8,31.7).lineTo(14.7,31.7).lineTo(13.2,32).lineTo(8.6,32.1).lineTo(7.3,32.3).lineTo(3.4,32.4).lineTo(3.1,32.5).lineTo(-2.4,32.5).lineTo(-4.2,32.2).lineTo(-7.3,32.2).curveTo(-7.9,32.1,-8.1,32.1).curveTo(-9.4,32.1,-12.1,32.2).curveTo(-15.4,32.4,-15.6,32.5).lineTo(-21.8,32.5).curveTo(-24.6,32.3,-25.4,32).curveTo(-25.5,32,-29.6,32).curveTo(-31.9,32,-31.9,30.6).curveTo(-31.6,29.2,-31.6,28.9).curveTo(-32.4,20.1,-32.4,18.8).curveTo(-32.4,14.4,-31.9,13.1).curveTo(-31.6,11.9,-31.6,8.1).curveTo(-31.6,6.1,-31.6,5.1).curveTo(-31.6,3.3,-31.9,2.1).lineTo(-31.9,-6.4).lineTo(-31.9,-6.7).lineTo(-31.9,-11.5).lineTo(-32.1,-11.9).lineTo(-32.1,-17).curveTo(-32.2,-18,-32.4,-18.4).lineTo(-32.4,-24.4).curveTo(-32.5,-25.3,-32.5,-27.2).curveTo(-32.5,-29.3,-32.3,-29.9).curveTo(-31.8,-31.5,-29.8,-32).closePath().moveTo(30.8,-25.1).curveTo(30.8,-25.7,30.6,-26.2).curveTo(30.3,-26.7,30.3,-27.8).curveTo(30.3,-29.6,30.4,-30.5).curveTo(27.9,-30.6,27.8,-30.6).curveTo(27.8,-30.6,26.6,-30.9).lineTo(14.3,-30.9).curveTo(13.4,-30.5,11.8,-30.5).lineTo(3.5,-30.5).lineTo(3.4,-30.5).lineTo(-7.8,-30.5).lineTo(-9.1,-30.8).lineTo(-19,-30.8).lineTo(-20.4,-30.5).lineTo(-26.8,-30.5).lineTo(-27.1,-30.5).lineTo(-29.6,-30.4).curveTo(-30.6,-30.1,-30.8,-28.7).curveTo(-30.9,-28.3,-30.9,-27).lineTo(-30.8,-18.9).curveTo(-30.6,-18.5,-30.6,-17.4).lineTo(-30.6,-12.2).lineTo(-30.4,-11.8).lineTo(-30.4,-6.8).lineTo(-30.3,-6.7).lineTo(-30.3,1.8).curveTo(-30.1,3.5,-30.1,8.1).curveTo(-30.1,11.7,-30.4,14.1).curveTo(-30.8,16.5,-30.8,18.8).curveTo(-30.8,19,-30.4,23.8).curveTo(-30.1,28.4,-30.1,29.5).curveTo(-28.1,29.3,-27.8,29.6).curveTo(-27.6,29.7,-27.4,30.2).lineTo(-21.3,30.9).lineTo(-16,31).curveTo(-15,31,-13.5,30.7).curveTo(-11.9,30.5,-9.3,30.5).lineTo(-4.2,30.6).curveTo(-3.9,30.7,-2.2,30.8).lineTo(2.9,30.8).lineTo(3.3,30.7).lineTo(7.2,30.7).lineTo(8.4,30.5).lineTo(13.2,30.5).lineTo(14.6,30.1).lineTo(20.7,30.1).curveTo(20.9,30,22.9,29.9).lineTo(25.6,29.9).curveTo(26.6,30.2,27.2,30).curveTo(27.7,29.8,28.7,30.2).curveTo(29.3,30.4,29.5,30.5).lineTo(30.4,30.5).lineTo(30.6,30.4).lineTo(30.6,26.1).curveTo(30.9,21.2,30.9,19.1).curveTo(30.9,17.5,30.6,13.9).curveTo(30.2,10.6,30.3,8.7).curveTo(30.3,-1.2,30.3,-1.4).curveTo(30.3,-9.6,30.4,-13.7).lineTo(30.4,-22.2).curveTo(30.8,-22.9,30.8,-25.1).closePath();
	this.shape_286.setTransform(30.8,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_285}]},9).to({state:[]},1).to({state:[{t:this.shape_286}]},2).to({state:[]},1).wait(1));

	// Tile
	this.instance = new lib.mcTiles_Spawn();
	this.instance.setTransform(33.2,25.2,1,1,0,0,0,0.8,-6.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#FF0000").beginStroke().moveTo(15.3,-5).curveTo(14.6,-4.7,10.4,-3.3).curveTo(9,-2.8,8,-1.2).curveTo(7.1,0.2,6.1,0.2).curveTo(4.4,0.2,4.4,-1.3).curveTo(4.4,-4.7,10.9,-7.4).curveTo(17.3,-10.1,17.3,-7.2).curveTo(17.3,-5.9,15.3,-5).closePath().moveTo(-17.3,-6.6).curveTo(-17.3,-9.1,-11.1,-7.1).curveTo(-4.9,-5.1,-4.9,-2.1).curveTo(-4.9,-1.5,-5.3,-1.1).curveTo(-5.6,-0.5,-6.5,-0.5).curveTo(-6.9,-0.5,-9.6,-2.2).curveTo(-12.4,-4.1,-12.6,-4.1).curveTo(-14.1,-4.7,-16.1,-5.1).curveTo(-17.3,-5.4,-17.3,-6.6).closePath().moveTo(-7.5,6.4).curveTo(-7.5,4.6,0.3,4.8).curveTo(8,5,8,7.2).curveTo(8,8.1,7.4,8.4).curveTo(6.8,8.7,5.5,8.7).curveTo(-3.8,8.7,-6.3,7.9).curveTo(-7.5,7.5,-7.5,6.4).closePath();
	this.shape_287.setTransform(31.3,32.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#000000").beginStroke().moveTo(-28.2,-32.4).lineTo(-27.9,-32.4).curveTo(-27.9,-32.5,-28,-32.6).curveTo(-27.7,-32.8,-26,-32.6).curveTo(-23.1,-32.4,-20.5,-32.2).curveTo(-20.1,-32.4,-19.9,-32.4).lineTo(-13.2,-32.4).curveTo(-11.4,-32.4,-9.7,-32.4).curveTo(-9.5,-32.4,-9.4,-32.4).curveTo(-4,-32.4,0.7,-32.1).curveTo(0.9,-32.1,1.1,-32.1).lineTo(2.6,-32.1).lineTo(11.5,-32.2).lineTo(14.1,-32.2).curveTo(14.7,-32.3,16.2,-32.4).curveTo(18,-32.5,21.1,-32.6).curveTo(27.1,-32.7,28.6,-32).curveTo(29.2,-31.8,29.7,-31.4).lineTo(30.3,-31.4).lineTo(30.3,-31.4).lineTo(30.3,-30.7).curveTo(30.4,-30.7,30.4,-30.6).curveTo(30.4,-30.5,30.3,-30.5).lineTo(30.3,26.8).curveTo(30.4,26.8,30.6,26.8).curveTo(30.6,27,30.7,27.2).curveTo(30.7,27.8,29.4,29.2).curveTo(28.3,30.2,27.3,31).curveTo(26.6,30.4,26.6,29.5).curveTo(26.8,28.5,26.7,28.2).curveTo(26.5,28.5,26.3,29.4).curveTo(26.1,30.2,24.9,30.2).curveTo(24,30.2,23.6,29.9).curveTo(22.9,29.5,22.7,29.4).curveTo(22.6,29.7,22.4,30).curveTo(22.2,30.2,21.9,30.2).curveTo(21.2,30.2,21.1,29.7).curveTo(21.2,29.1,21.1,28.9).curveTo(21,29,20.4,29.7).curveTo(19.7,30.2,19.1,30.2).curveTo(18.6,30.2,17.8,29.8).curveTo(17.1,29.5,17.1,29.5).curveTo(16.7,29.5,16.6,30.1).curveTo(16.3,30.8,15.8,31).curveTo(15.2,30.8,15.2,30.1).curveTo(13.6,32.2,13,32.6).curveTo(12.9,32.6,12.8,32.7).curveTo(12.7,32.6,12.7,32.6).curveTo(12.2,32.4,12.2,32).curveTo(12.2,31.7,11.8,31.7).curveTo(11.2,31.7,11.1,31.2).curveTo(11.2,30.6,11.1,30.4).lineTo(10.7,30.3).curveTo(10.4,30.6,9.3,32).curveTo(8.7,31.8,8.8,31.1).curveTo(8.8,30.7,7.3,30.7).curveTo(7,30.7,6.7,31.2).curveTo(6.4,31.7,5.8,31.7).curveTo(4.6,31.7,2.8,30.3).curveTo(1.5,29.3,0.7,28.2).curveTo(0,30.2,-0.1,30.4).curveTo(-0.8,32.2,-1.4,32.2).curveTo(-2,32.2,-2.2,32.1).lineTo(-2.2,30.6).curveTo(-2,29.4,-1.8,28.7).curveTo(-6,31,-6.2,31.2).curveTo(-6.7,31,-6.7,30.4).curveTo(-6.7,30.3,-6.7,30.2).curveTo(-6.7,30.2,-6.7,30.1).curveTo(-6.7,29.5,-6.7,29.3).lineTo(-7.1,29).curveTo(-7.2,29.1,-7.8,30).curveTo(-8.3,30.7,-8.7,30.7).curveTo(-8.9,30.7,-9,30.4).curveTo(-9.2,30.1,-9.3,29.8).curveTo(-9.4,30,-9.3,31).curveTo(-9.4,31.7,-10.3,31.7).curveTo(-10.9,31.7,-10.9,31.6).curveTo(-11,30.5,-10.7,29.7).lineTo(-10.8,29.5).lineTo(-11.9,29.6).curveTo(-12.1,30.7,-12.1,30.8).curveTo(-12.4,31.5,-13.3,30.9).curveTo(-13.8,31.6,-13.8,31.6).curveTo(-14,32,-14.4,32).curveTo(-15,32,-15,31.9).curveTo(-15.3,31.3,-15,30.7).curveTo(-15.5,29.9,-16.6,29.2).curveTo(-17.6,28.4,-17.9,28).curveTo(-18.8,28.3,-18.8,29.3).curveTo(-18.7,31,-18.8,31.2).lineTo(-19.4,31.4).curveTo(-19.9,31.3,-20.6,30.8).curveTo(-21.4,30.2,-21.7,29.7).curveTo(-21.8,29.8,-22.1,30.7).curveTo(-22.3,31.3,-22.9,31.7).curveTo(-23.3,31.2,-23.4,31).curveTo(-23.5,30.6,-23.6,30.4).curveTo(-23.7,30.8,-23.8,31.3).curveTo(-23.9,31.7,-24.5,31.7).curveTo(-25.2,31.7,-25.2,31.6).lineTo(-25.2,30.4).lineTo(-25.3,30.4).curveTo(-25.6,31.6,-25.7,31.8).lineTo(-26.2,32).curveTo(-26.7,31.8,-26.9,31.1).curveTo(-27.1,30.5,-27,29.9).curveTo(-27,29.8,-27,29.8).curveTo(-27.1,29.6,-27.5,29.6).curveTo(-27.8,29.6,-28.1,29.8).curveTo(-28.3,30.1,-28.4,30.2).curveTo(-29.1,29.9,-29,29.4).lineTo(-29,28.5).curveTo(-29.2,28.6,-29.6,28.9).curveTo(-29.9,29.1,-30.2,29.2).curveTo(-30.7,29,-30.7,28.3).curveTo(-30.7,28,-29.7,26.6).lineTo(-29.7,-31.3).curveTo(-29.7,-31.4,-29.7,-31.5).curveTo(-29.7,-32.4,-28.7,-32.4).closePath().moveTo(14.6,-6.6).curveTo(16.6,-7.5,16.6,-8.8).curveTo(16.6,-11.6,10.2,-8.9).curveTo(3.7,-6.3,3.7,-2.9).curveTo(3.7,-1.4,5.4,-1.4).curveTo(6.5,-1.4,7.3,-2.8).curveTo(8.3,-4.4,9.7,-4.9).curveTo(14,-6.3,14.6,-6.6).closePath().moveTo(-8.2,4.8).curveTo(-8.2,6,-7,6.4).curveTo(-4.4,7.1,4.8,7.1).curveTo(6.1,7.1,6.7,6.8).curveTo(7.3,6.5,7.3,5.6).curveTo(7.3,3.5,-0.4,3.3).curveTo(-8.2,3,-8.2,4.8).closePath().moveTo(-17.9,-8.1).curveTo(-17.9,-6.9,-16.7,-6.6).curveTo(-14.7,-6.3,-13.2,-5.7).curveTo(-13.1,-5.6,-10.3,-3.8).curveTo(-7.6,-2,-7.2,-2).curveTo(-6.3,-2,-5.9,-2.6).curveTo(-5.6,-3.1,-5.6,-3.6).curveTo(-5.6,-6.6,-11.7,-8.6).curveTo(-17.9,-10.6,-17.9,-8.1).closePath();
	this.shape_288.setTransform(31.9,33.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.7,1.7).lineTo(1.6,1.6).lineTo(-0.1,1.7).curveTo(-4.9,1.4,-10.2,1.4).lineTo(-10.3,1.4).curveTo(-10.4,1.4,-10.6,1.4).curveTo(-12.3,1.4,-14,1.4).lineTo(-20.8,1.4).curveTo(-20.9,1.4,-21.3,1.6).curveTo(-23.9,1.4,-26.8,1.2).curveTo(-28.6,1,-28.8,1.2).curveTo(-28.8,1.3,-28.7,1.4).lineTo(-29.1,1.4).curveTo(-29.3,1.3,-29.5,1.3).curveTo(-30.8,1.2,-30.8,-0.1).curveTo(-30.8,-1.1,-29.8,-1.5).curveTo(-28.9,-1.8,-26.6,-1.8).curveTo(-24.6,-1.8,-24.4,-1.7).curveTo(-24.2,-1.3,-23.8,-0.9).lineTo(-13.8,-1).curveTo(-12.9,-1.8,-10.6,-1.8).curveTo(-8.6,-1.8,-7.9,-1.2).curveTo(-7.1,-0.6,-5.5,-0.6).curveTo(-3.9,-0.6,-3.1,-1.1).curveTo(-2.3,-1.6,0.3,-1.6).curveTo(3.5,-1.6,3.9,-1.1).curveTo(4.4,-0.6,5.9,-0.6).curveTo(8.3,-0.6,9,-1.2).curveTo(10.2,-1.9,11,-2.1).curveTo(15.4,-2.7,16.4,-2).curveTo(17.7,-1.1,21,-1.1).lineTo(25.6,-1.8).curveTo(28,-1.8,29.6,-0.5).curveTo(30.8,0.4,30.8,1).curveTo(30.8,2.1,29.5,2.4).lineTo(28.9,2.4).curveTo(28.4,2,27.8,1.8).curveTo(26.2,1.1,20.3,1.2).curveTo(17.1,1.3,15.4,1.4).curveTo(14,1.1,13.3,1.1).curveTo(11.4,1.1,10.6,1.6).closePath();
	this.shape_289.setTransform(32.8,-0.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#91D2FF").beginStroke().moveTo(-24.9,-29.9).curveTo(-24.7,-30,-24.5,-30).curveTo(-24.5,-29.9,-24.4,-29.9).curveTo(-24.4,-29.9,-24.4,-29.9).curveTo(-24.3,-29.8,-24.3,-29.5).curveTo(-24.3,-29,-25.1,-28.3).curveTo(-25.8,-27.5,-25.8,-27.1).curveTo(-25.8,-26.3,-23.7,-25.3).curveTo(-21.6,-24.3,-21.6,-23.7).curveTo(-21.6,-23.1,-22.5,-22.4).curveTo(-23.9,-21.3,-24.1,-21).curveTo(-23.9,-20.9,-23.5,-20.5).curveTo(-23.2,-20.2,-23.1,-20).curveTo(-23.1,-20,-23.2,-19.6).curveTo(-23.4,-19.3,-23.8,-19.3).curveTo(-25.1,-19.3,-25.6,-21.2).curveTo(-25.6,-21.7,-24.7,-22.4).curveTo(-23.7,-23.1,-23.3,-23.5).lineTo(-23.3,-23.6).curveTo(-25.6,-24.8,-26.2,-25.3).curveTo(-27.1,-26,-27.1,-27.1).curveTo(-27.1,-28.2,-26.7,-28.7).curveTo(-26.2,-29.4,-24.9,-29.9).closePath().moveTo(18.7,29).curveTo(18.7,29.1,18.7,29.1).lineTo(18.7,29.2).lineTo(18.2,29.3).curveTo(17.7,29.2,17.6,28.8).lineTo(17.6,23).curveTo(19,22.9,19.1,24.4).curveTo(19.1,25.2,18.8,26).curveTo(18.8,27.9,18.7,29).closePath().moveTo(23.6,-27.2).curveTo(23.5,-26.9,23.4,-26.8).curveTo(23.2,-26.6,22.8,-26.6).curveTo(22,-26.6,21.8,-26.6).curveTo(21.6,-26.7,20.6,-27.7).lineTo(20.6,-27.6).curveTo(20.6,-27.7,20.6,-28.1).curveTo(20.6,-28.4,21.7,-29.5).curveTo(22.9,-30.6,23.7,-30.8).curveTo(23.8,-30.9,23.8,-30.3).curveTo(23.8,-29.8,23.4,-29.3).curveTo(22.8,-28.7,22.6,-28.5).curveTo(23.6,-27.4,23.6,-27.2).closePath().moveTo(13.8,-27.1).lineTo(14.7,-28.1).curveTo(15.6,-29.1,16.2,-29).curveTo(16.3,-29.2,16.3,-28.5).curveTo(16.3,-27.9,15.7,-27.1).curveTo(15.1,-26.3,14.6,-26.3).curveTo(14.5,-26.3,14.4,-26.3).curveTo(14.5,-26.2,14.6,-26.1).curveTo(14.4,-25.7,14.3,-25.6).curveTo(14.1,-25.3,13.8,-25.3).curveTo(13.1,-25.3,11.4,-26.3).curveTo(11.1,-25.8,9.9,-24.9).curveTo(11.1,-25,12.6,-23.6).curveTo(14.3,-22.2,14.3,-21.8).curveTo(14.3,-21.4,13.6,-20.8).lineTo(12.8,-20.2).curveTo(13.6,-20.2,14.8,-19.4).curveTo(15.6,-18.8,16.1,-18.1).curveTo(15.9,-17.7,15.8,-17.6).curveTo(15.6,-17.3,15.2,-17.3).curveTo(14.6,-17.3,13.9,-18.3).curveTo(13.2,-19.1,11.5,-18.8).curveTo(11.3,-18.9,11,-19).curveTo(10.8,-19.2,10.8,-19.6).curveTo(10.8,-19.6,11.5,-20.5).curveTo(12.2,-21.4,12.4,-21.6).curveTo(12.3,-21.7,12.2,-21.9).curveTo(11.8,-21.4,10.9,-20.6).curveTo(9.6,-19.4,8.7,-19.1).curveTo(8.5,-19.2,8.3,-19.3).curveTo(8.1,-19.4,8.1,-19.8).curveTo(8.1,-20.1,9.7,-21.4).curveTo(10.8,-22.2,11.5,-22.6).curveTo(11.1,-22.9,10.7,-23.2).curveTo(9.7,-24,9.4,-24.5).curveTo(8,-23.4,7.2,-23.1).curveTo(6.6,-23.8,6.6,-23.9).curveTo(6.6,-24.5,8.9,-25.9).curveTo(9.9,-26.6,10.6,-26.9).curveTo(9.8,-27.5,9.1,-28).curveTo(9.1,-28.7,10.3,-30).curveTo(11.5,-31.2,12.2,-31.3).curveTo(12.3,-31.3,12.3,-30.7).curveTo(12.3,-29.8,10.6,-28.3).curveTo(12.8,-27.4,13.9,-26.7).curveTo(13.8,-26.8,13.8,-27.1).closePath().moveTo(8.5,-7.3).curveTo(6.6,-6.9,4.8,-6.8).curveTo(6.6,-4.7,7.3,-4.1).curveTo(7.1,-3.7,7,-3.6).curveTo(6.8,-3.3,6.6,-3.3).curveTo(5.1,-3.3,3.2,-6).curveTo(1.6,-8.3,1.6,-8.8).curveTo(1.6,-9.5,2.2,-9.6).curveTo(2.7,-9.2,4,-7.8).curveTo(4.4,-8.1,6.6,-8.4).curveTo(8.5,-8.7,10.2,-8.8).curveTo(10.3,-8.9,10.3,-8.3).curveTo(10.3,-7.8,8.5,-7.3).closePath().moveTo(23.7,-10.7).curveTo(24.2,-12.9,25.2,-13).curveTo(25.3,-13.1,25.3,-12.4).curveTo(25.3,-11.4,24.9,-9.7).curveTo(24.5,-7.8,24,-7.3).curveTo(23.6,-7.4,23.5,-7.5).curveTo(23.3,-7.7,23.3,-8.1).curveTo(23.3,-9.2,23.7,-10.7).closePath().moveTo(21.1,1.7).curveTo(21.3,1.8,21.3,2.1).curveTo(21.3,2.7,20.5,3.6).curveTo(20.6,3.6,20.6,3.7).curveTo(21.6,5,21.3,5.7).curveTo(21.3,6.1,20.7,6.1).curveTo(20.5,6.1,19.7,5.1).curveTo(19.5,4.8,19.4,4.6).curveTo(19,4.9,18.5,5.3).curveTo(17.8,5.2,17.8,4.5).curveTo(17.8,3.8,19.1,2.8).curveTo(20.7,1.7,20.7,1.6).curveTo(20.9,1.7,21.1,1.7).closePath().moveTo(16.8,4).curveTo(16,5.8,15.3,7.2).curveTo(15.6,7.1,15.7,7.2).curveTo(15.7,7.4,15.8,7.6).curveTo(15.8,8.5,14.8,8.6).curveTo(14.6,8.6,14.5,8.6).curveTo(13.5,10.2,12.7,10.8).curveTo(12.1,10.7,12.1,10).curveTo(12.1,7.9,14.6,5.2).curveTo(14.1,5.4,13.6,5.9).curveTo(13.2,6.3,12.8,6.3).lineTo(12.3,6.2).curveTo(12.2,6.1,12.1,6.1).curveTo(12.1,6,12.1,5.6).curveTo(12.1,5,13.6,4.2).curveTo(15.3,3.4,16.7,3.5).curveTo(16.7,3.6,16.8,4).closePath().moveTo(-9.8,-25.6).curveTo(-9.1,-24.9,-9.1,-24.7).curveTo(-9.1,-24.6,-9.2,-24.4).curveTo(-7.2,-23.1,-6.6,-20.4).curveTo(-6.6,-20.4,-6.8,-20.2).curveTo(-6.9,-20.1,-7.3,-20.1).curveTo(-8.4,-20.1,-9.3,-21.2).curveTo(-10.1,-22.4,-10.7,-22.9).curveTo(-10.8,-22.8,-10.9,-22.8).curveTo(-12.2,-21.8,-13,-21.3).curveTo(-13.2,-21.4,-13.4,-21.6).curveTo(-13.6,-21.8,-13.6,-22.2).curveTo(-13.6,-22.6,-12.8,-23.1).curveTo(-12.4,-23.4,-11,-24.3).lineTo(-14.8,-24.3).curveTo(-15,-24.3,-15.1,-24.4).curveTo(-15.2,-24.5,-15.3,-24.7).lineTo(-15.3,-24.6).curveTo(-15.3,-24.7,-15.3,-25.1).lineTo(-15.3,-25.1).curveTo(-15.3,-25.2,-15.3,-25.3).curveTo(-15.3,-25.3,-15,-25.4).curveTo(-7.1,-32.7,-7.1,-31).curveTo(-7.1,-30.5,-10.1,-27.5).curveTo(-11.3,-26.3,-12.3,-25.5).curveTo(-11.2,-25.6,-9.8,-25.6).closePath().moveTo(-0.1,-16.4).curveTo(-1.1,-14.7,-1.3,-14.4).curveTo(-1,-14.2,1.2,-13.2).curveTo(2.8,-12.4,2.8,-11.7).curveTo(2.8,-11.3,1.5,-9.3).curveTo(-0,-7,-1,-6.3).curveTo(-1.2,-6.4,-1.4,-6.6).curveTo(-1.6,-6.8,-1.6,-7.2).curveTo(-1.6,-7.9,-0.5,-9.3).curveTo(0.1,-10,1.3,-11.5).curveTo(1,-11.6,-0.9,-12.8).curveTo(-2.8,-14,-2.8,-14.2).curveTo(-1.3,-18.6,0.7,-18.8).curveTo(0.8,-18.9,0.8,-18.3).curveTo(0.8,-18,-0.1,-16.4).closePath().moveTo(-14.5,-4.8).curveTo(-14.5,-4.7,-14.4,-4.7).curveTo(-14.3,-4.6,-14.3,-4.3).curveTo(-16.1,0.3,-16.1,1.1).curveTo(-16.1,1.6,-15.2,2.7).curveTo(-14.3,3.8,-14.3,4.2).curveTo(-14.3,6.4,-15.5,7.6).curveTo(-16.6,8.6,-21.8,11.8).curveTo(-22.1,11.7,-22.2,11.7).curveTo(-22.3,11.6,-22.3,11.1).curveTo(-20.6,10,-18.9,8.7).curveTo(-15.6,6.3,-15.6,4.2).curveTo(-15.6,3.8,-16.4,2.7).curveTo(-17.3,1.6,-17.3,1).curveTo(-17.3,-0.2,-16.5,-2.4).curveTo(-15.5,-4.9,-14.5,-4.8).closePath().moveTo(-20.5,6.1).curveTo(-25.1,1.7,-25.1,1.4).curveTo(-25.1,-0.3,-23,1.6).curveTo(-21.1,3.4,-19.8,5.5).curveTo(-19.9,5.6,-20,5.9).curveTo(-20.1,6.1,-20.5,6.1).closePath().moveTo(-3.6,15.1).curveTo(-3.1,12.8,-3.1,11.5).curveTo(-2.1,11.2,-1.9,11.6).curveTo(-1.8,11.7,-1.8,12.6).curveTo(-1.8,13.2,-2.4,16.1).lineTo(-3,16.3).curveTo(-3.6,15.8,-3.6,15.1).closePath().moveTo(2.5,23.6).curveTo(1.8,23.2,1.8,21.2).curveTo(1.8,19.1,2.5,18.8).curveTo(3,19.1,3.1,19.3).lineTo(3.1,23.2).curveTo(2.7,23.5,2.5,23.6).closePath().moveTo(5.8,27.8).curveTo(5.6,30.1,4.6,30.1).lineTo(3.9,30).curveTo(3.8,30,3.8,29.4).curveTo(5.8,14.6,5.8,25).curveTo(5.8,25.3,5.8,27.8).closePath().moveTo(-8.3,18.7).curveTo(-8.3,19.8,-8.4,20.1).curveTo(-8.6,20.9,-9.5,21.3).curveTo(-10.1,21.1,-10.1,20.5).curveTo(-10.1,20.1,-9.8,19.3).curveTo(-9.6,18.4,-9.6,17.2).curveTo(-8.7,16.8,-8.4,17.5).curveTo(-8.3,17.8,-8.3,18.7).closePath().moveTo(-11.8,31.2).lineTo(-12.4,31.3).lineTo(-13,31.2).curveTo(-13.1,30.2,-13.3,28.2).curveTo(-13.6,26.2,-13.6,26).curveTo(-13.6,25.7,-13.5,25.5).curveTo(-11.8,25.4,-11.5,28).curveTo(-11.4,29.2,-11.6,30.7).curveTo(-11.6,31.3,-11.8,31.2).closePath().moveTo(-19.1,21.5).curveTo(-17.3,21.4,-17.1,22.4).curveTo(-16.9,23.1,-17.1,24.9).curveTo(-17.1,25.3,-17.4,28.4).lineTo(-18,28.6).curveTo(-18.3,27.9,-18.3,25).curveTo(-18.3,24.6,-18.7,23.5).curveTo(-19.1,22.5,-19.1,21.5).closePath().moveTo(-19.3,28.5).curveTo(-19.4,28.5,-19.5,28.7).curveTo(-19.6,28.8,-20,28.8).curveTo(-20.4,28.8,-21.6,25.5).lineTo(-21.5,25).curveTo(-19.6,24.6,-19.3,28.5).closePath().moveTo(-26.3,28.6).curveTo(-27,28.6,-27.4,26.4).lineTo(-27.6,24.4).curveTo(-27.6,23.3,-27,22.6).curveTo(-26.4,21.9,-26.3,24).curveTo(-26.3,24.6,-25.9,25.9).curveTo(-25.6,27.1,-25.6,27.7).curveTo(-25.6,28,-25.7,28.3).curveTo(-25.7,28.3,-25.8,28.5).curveTo(-25.9,28.6,-26.3,28.6).closePath().moveTo(27.5,28.1).lineTo(27,28.3).curveTo(26.1,26.8,25.5,23.6).curveTo(25.1,20.8,25.1,18.5).curveTo(25.1,16.6,26.3,19.7).curveTo(27.6,22.8,27.6,25.5).curveTo(27.6,27.1,27.5,28.1).closePath().moveTo(23.3,27.7).curveTo(23,28,22.7,28.1).curveTo(22.1,27.4,22.1,26.1).curveTo(22.1,24.6,22.7,24.1).curveTo(23.2,24.4,23.3,24.6).closePath().moveTo(15.1,23.6).curveTo(15.1,24.1,13.6,27.5).lineTo(13.2,27.6).curveTo(12.7,27.3,12.6,27.1).curveTo(12.6,27,12.6,26.5).curveTo(12.7,25.7,13,24.9).curveTo(13.7,23.3,15,23.2).curveTo(15,23.4,15.1,23.6).closePath();
	this.shape_290.setTransform(33.3,32);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-29.9,-33.3).curveTo(-30.8,-33.4,-31,-34).curveTo(-31.2,-34.4,-31.1,-34.6).curveTo(-31.1,-35.9,-29.7,-35.9).curveTo(-29.6,-35.9,-29.5,-35.9).curveTo(-29.1,-36.2,-28.6,-36.2).curveTo(-28.5,-36.2,-25.4,-35.5).curveTo(-22.4,-34.8,-20.9,-34.8).curveTo(-15.4,-34.8,-14.1,-35.4).curveTo(-13.5,-36,-12.4,-36.2).lineTo(-5.1,-36.3).curveTo(-3.3,-36.9,0.6,-36.8).curveTo(4.5,-36.7,5.9,-36).lineTo(20.6,-36).curveTo(20.8,-36,22.2,-36.5).curveTo(24.2,-37,27,-37).curveTo(29.1,-37,30,-36.3).curveTo(31.1,-35.9,31.1,-34.4).curveTo(31.1,-33.7,30.6,-33.3).curveTo(30.3,-33.1,29.9,-33.1).curveTo(29.9,-33.1,29.8,-33.1).curveTo(29.4,-33.1,29,-33.3).curveTo(28.8,-33.5,28.6,-33.8).curveTo(28,-33.8,27,-33.8).curveTo(25,-33.8,23.6,-33.5).curveTo(23.4,-33.5,23.2,-33.4).curveTo(21.9,-33,21.4,-32.9).lineTo(5.6,-32.9).lineTo(1.8,-33.5).lineTo(0.4,-33.8).curveTo(-0.1,-33.8,-1.8,-33.5).curveTo(-2.8,-33.4,-4.4,-33.1).lineTo(-9.4,-33).lineTo(-10.2,-33).curveTo(-10.2,-32.9,-10.3,-32.8).curveTo(-11.4,-31.6,-16,-31.6).curveTo(-16.4,-31.6,-16.7,-31.7).curveTo(-18.3,-31.6,-20.6,-31.6).curveTo(-23.4,-31.6,-26.8,-32.7).curveTo(-28.1,-33.1,-28.9,-33.6).curveTo(-29.3,-33.3,-29.8,-33.3).curveTo(-29.9,-33.3,-29.9,-33.3).closePath().moveTo(1.5,-17.1).curveTo(2.5,-18.7,2.5,-19).curveTo(2.5,-19.6,2.4,-19.5).curveTo(0.3,-19.3,-1.2,-14.9).curveTo(-1.2,-14.7,0.8,-13.5).curveTo(2.7,-12.3,3,-12.2).curveTo(1.7,-10.7,1.1,-10).curveTo(0.1,-8.6,0.1,-7.9).curveTo(0.1,-7.5,0.2,-7.3).curveTo(0.5,-7.1,0.6,-7).curveTo(1.6,-7.7,3.1,-10).curveTo(4.5,-12,4.5,-12.4).curveTo(4.5,-13.1,2.8,-13.9).curveTo(0.6,-14.9,0.4,-15.1).curveTo(0.5,-15.4,1.5,-17.1).closePath().moveTo(-8.1,-26.3).curveTo(-9.6,-26.3,-10.6,-26.2).curveTo(-9.7,-27,-8.4,-28.2).curveTo(-5.4,-31.2,-5.4,-31.7).curveTo(-5.4,-33.4,-13.3,-26.1).curveTo(-13.6,-26,-13.7,-26).curveTo(-13.7,-25.9,-13.6,-25.8).lineTo(-13.7,-25.8).curveTo(-13.7,-25.4,-13.6,-25.3).lineTo(-13.6,-25.4).curveTo(-13.5,-25.2,-13.5,-25.1).curveTo(-13.4,-25,-13.1,-25).lineTo(-9.4,-25).curveTo(-10.7,-24.1,-11.2,-23.8).curveTo(-11.9,-23.3,-11.9,-22.9).curveTo(-11.9,-22.5,-11.8,-22.3).curveTo(-11.5,-22.1,-11.4,-22).curveTo(-10.5,-22.5,-9.2,-23.5).curveTo(-9.1,-23.5,-9,-23.6).curveTo(-8.5,-23.1,-7.6,-21.9).curveTo(-6.8,-20.8,-5.6,-20.8).curveTo(-5.2,-20.8,-5.1,-20.9).curveTo(-5,-21.1,-4.9,-21.1).curveTo(-5.6,-23.8,-7.5,-25.1).curveTo(-7.4,-25.3,-7.4,-25.4).curveTo(-7.4,-25.6,-8.1,-26.3).closePath().moveTo(18.5,3.3).curveTo(18.4,2.9,18.4,2.8).curveTo(16.9,2.8,15.3,3.5).curveTo(13.7,4.3,13.7,4.9).curveTo(13.7,5.3,13.8,5.4).curveTo(13.8,5.4,14,5.5).lineTo(14.5,5.6).curveTo(14.9,5.6,15.3,5.3).curveTo(15.7,4.8,16.2,4.5).curveTo(13.7,7.3,13.7,9.3).curveTo(13.7,10,14.4,10.1).curveTo(15.2,9.5,16.2,7.9).curveTo(16.3,7.9,16.5,7.9).curveTo(17.5,7.8,17.5,6.9).curveTo(17.4,6.7,17.4,6.5).curveTo(17.3,6.4,17,6.5).curveTo(17.7,5.1,18.5,3.3).closePath().moveTo(22.8,1).curveTo(22.5,1,22.4,0.9).curveTo(22.3,1,20.8,2.1).curveTo(19.5,3.1,19.5,3.8).curveTo(19.5,4.5,20.1,4.6).curveTo(20.6,4.3,21,3.9).curveTo(21.2,4.1,21.4,4.4).curveTo(22.2,5.4,22.4,5.4).curveTo(23,5.4,23,5).curveTo(23.3,4.3,22.3,3).curveTo(22.2,2.9,22.2,2.9).curveTo(23,2,23,1.4).curveTo(23,1.1,22.8,1).closePath().moveTo(25.3,-11.4).curveTo(25,-9.9,25,-8.8).curveTo(25,-8.4,25.2,-8.2).curveTo(25.3,-8.1,25.6,-8).curveTo(26.1,-8.5,26.6,-10.4).curveTo(27,-12.1,27,-13.1).curveTo(27,-13.8,26.9,-13.7).curveTo(25.9,-13.6,25.3,-11.4).closePath().moveTo(10.1,-8).curveTo(12,-8.5,12,-9).curveTo(12,-9.6,11.9,-9.5).curveTo(10.1,-9.4,8.2,-9.1).curveTo(6,-8.8,5.6,-8.5).curveTo(4.3,-9.9,3.9,-10.3).curveTo(3.2,-10.2,3.2,-9.5).curveTo(3.2,-9,4.8,-6.7).curveTo(6.7,-4,8.2,-4).curveTo(8.5,-4,8.7,-4.3).curveTo(8.8,-4.4,9,-4.8).curveTo(8.2,-5.4,6.4,-7.5).curveTo(8.3,-7.6,10.1,-8).closePath().moveTo(15.5,-27.8).curveTo(15.5,-27.5,15.5,-27.4).curveTo(14.5,-28.1,12.2,-29).curveTo(14,-30.5,14,-31.4).curveTo(14,-32,13.9,-32).curveTo(13.1,-31.9,11.9,-30.7).curveTo(10.7,-29.4,10.7,-28.7).curveTo(11.4,-28.2,12.2,-27.6).curveTo(11.6,-27.3,10.5,-26.6).curveTo(8.2,-25.2,8.2,-24.6).curveTo(8.2,-24.5,8.9,-23.8).curveTo(9.6,-24.1,11.1,-25.2).curveTo(11.4,-24.7,12.3,-23.9).curveTo(12.8,-23.6,13.1,-23.3).curveTo(12.4,-22.9,11.3,-22.1).curveTo(9.7,-20.8,9.7,-20.5).curveTo(9.7,-20.1,9.9,-20).curveTo(10.2,-19.9,10.4,-19.8).curveTo(11.2,-20.1,12.6,-21.3).curveTo(13.5,-22.1,13.8,-22.6).curveTo(13.9,-22.4,14,-22.3).curveTo(13.8,-22.1,13.2,-21.2).curveTo(12.5,-20.3,12.5,-20.3).curveTo(12.5,-19.9,12.7,-19.7).curveTo(12.9,-19.6,13.1,-19.5).curveTo(14.9,-19.8,15.5,-19).curveTo(16.3,-18,16.9,-18).curveTo(17.2,-18,17.4,-18.3).curveTo(17.5,-18.4,17.7,-18.8).curveTo(17.2,-19.5,16.4,-20.1).curveTo(15.3,-20.9,14.5,-20.9).lineTo(15.2,-21.5).curveTo(16,-22.1,16,-22.5).curveTo(16,-22.9,14.2,-24.3).curveTo(12.7,-25.7,11.6,-25.6).curveTo(12.7,-26.5,13.1,-27).curveTo(14.7,-26,15.5,-26).curveTo(15.7,-26,15.9,-26.3).curveTo(16,-26.4,16.2,-26.8).curveTo(16.2,-26.9,16,-27).curveTo(16.1,-27,16.2,-27).curveTo(16.8,-27,17.4,-27.8).curveTo(18,-28.6,18,-29.2).curveTo(18,-29.9,17.9,-29.7).curveTo(17.3,-29.8,16.3,-28.8).closePath().moveTo(25.2,-27.9).curveTo(25.2,-28.1,24.2,-29.2).curveTo(24.4,-29.4,25,-30).curveTo(25.5,-30.5,25.5,-31).curveTo(25.5,-31.6,25.4,-31.5).curveTo(24.5,-31.3,23.3,-30.2).curveTo(22.2,-29.1,22.2,-28.8).curveTo(22.2,-28.4,22.3,-28.3).lineTo(22.3,-28.4).curveTo(23.2,-27.4,23.5,-27.3).curveTo(23.6,-27.3,24.5,-27.3).curveTo(24.9,-27.3,25.1,-27.5).curveTo(25.2,-27.6,25.2,-27.9).closePath().moveTo(20.4,28.3).curveTo(20.5,27.2,20.5,25.3).curveTo(20.8,24.5,20.7,23.8).curveTo(20.7,22.3,19.2,22.3).lineTo(19.2,28.1).curveTo(19.4,28.5,19.9,28.6).lineTo(20.3,28.5).curveTo(19.9,29,19.5,29.8).curveTo(18.9,31,18.1,32.7).curveTo(17.4,32,16.8,29.4).curveTo(16.3,27.1,15.6,27.1).curveTo(14.5,27.1,13.4,28.8).curveTo(12.8,29.8,12,31.1).lineTo(12,31).curveTo(12,30.4,11.4,28.9).curveTo(10.8,27.4,10.5,27.4).curveTo(10,27.4,9.9,27.7).curveTo(9.7,27.6,9.5,27.6).curveTo(8.5,27.6,6.2,30.3).curveTo(5.1,31.8,3.8,33.5).lineTo(3.7,33.5).curveTo(2.7,29.1,1.3,20.3).curveTo(0.5,15.4,-0.1,15.4).curveTo(-1.6,15.4,-2,22.1).curveTo(-2.2,24.8,-2.2,33).lineTo(-2.3,33).curveTo(-2.5,32.5,-3.8,26.8).curveTo(-4.8,22.9,-6.6,22.9).curveTo(-6.7,22.9,-8.9,28.8).curveTo(-11.5,35.1,-13.5,37).lineTo(-13.6,36.8).curveTo(-13.6,33.3,-13.8,31.3).curveTo(-14.1,27.9,-15.6,27.9).curveTo(-16.4,27.9,-16.9,30.7).curveTo(-17.6,34.3,-18.9,35.9).curveTo(-19.5,32.8,-19.9,31.1).curveTo(-20.7,27.9,-21.7,27.9).curveTo(-23.1,27.9,-24.1,29.6).curveTo(-24.6,30.5,-25.1,32).lineTo(-25.3,32).curveTo(-25.2,30.4,-25.2,29.5).curveTo(-25.3,27.9,-26.4,27.9).curveTo(-27.3,27.9,-27.6,28.6).lineTo(-27.7,28.5).curveTo(-29.5,19.1,-29.6,18.2).curveTo(-29.7,17.3,-29.7,10.4).curveTo(-29.2,1.3,-29,-1.4).curveTo(-28.9,-1.5,-28.7,-1.5).curveTo(-28.8,-1.9,-29,-2.2).lineTo(-28.9,-2.6).curveTo(-28.9,-4.8,-29.5,-3.9).curveTo(-29.5,-6.3,-29.6,-9.2).curveTo(-29.7,-12,-29.7,-15.5).curveTo(-29.8,-18.4,-29.9,-21.9).curveTo(-29.9,-24.3,-29.5,-26).curveTo(-29.2,-27.6,-29.2,-31.7).lineTo(-26.4,-31.7).curveTo(-24.1,-30.6,-23.3,-30.6).curveTo(-24.5,-30.1,-25,-29.4).curveTo(-25.4,-28.9,-25.4,-27.8).curveTo(-25.4,-26.7,-24.5,-26).curveTo(-23.9,-25.5,-21.6,-24.3).lineTo(-21.7,-24.2).curveTo(-22,-23.8,-23.1,-23.1).curveTo(-23.9,-22.4,-23.9,-21.9).curveTo(-23.5,-20,-22.1,-20).curveTo(-21.8,-20,-21.6,-20.3).curveTo(-21.5,-20.7,-21.4,-20.7).curveTo(-21.5,-20.9,-21.8,-21.2).curveTo(-22.2,-21.6,-22.4,-21.7).curveTo(-22.2,-22,-20.8,-23.1).curveTo(-19.9,-23.8,-19.9,-24.4).curveTo(-19.9,-25,-22,-26).curveTo(-24.2,-27,-24.2,-27.8).curveTo(-24.2,-28.2,-23.4,-29).curveTo(-22.7,-29.7,-22.7,-30.2).curveTo(-22.7,-30.5,-22.7,-30.6).curveTo(-21.7,-30.6,-21.4,-30.5).lineTo(-13.4,-30.5).curveTo(-9.3,-31.2,-6.1,-32.2).lineTo(1.5,-32.2).lineTo(1.9,-32).lineTo(18.4,-32).curveTo(18.5,-32.1,21.8,-32.1).curveTo(23.8,-32.1,29.2,-32).curveTo(29.9,-28,30.2,-26).curveTo(30.7,-22.6,30.7,-20.3).curveTo(30.7,-17.7,30.6,-15.5).curveTo(30.4,-12.3,30,-9.8).lineTo(30,4.2).curveTo(30.7,5.9,30.7,9.2).curveTo(30.8,15.1,30.2,20.9).curveTo(29.1,32.5,26.2,32.5).curveTo(26.1,32.5,21.7,27.4).curveTo(21.1,27.4,20.4,28.3).closePath().moveTo(29.1,27.4).curveTo(29.2,26.4,29.2,24.8).curveTo(29.2,22.1,28,19).curveTo(26.7,15.9,26.7,17.8).curveTo(26.7,20.1,27.2,22.9).curveTo(27.7,26.1,28.6,27.6).closePath().moveTo(-24.6,27.9).curveTo(-24.2,27.9,-24.1,27.8).curveTo(-24.1,27.6,-24,27.6).curveTo(-23.9,27.3,-23.9,27).curveTo(-23.9,26.4,-24.3,25.2).curveTo(-24.7,23.9,-24.7,23.3).curveTo(-24.7,21.3,-25.3,21.9).curveTo(-25.9,22.6,-25.9,23.7).lineTo(-25.7,25.8).curveTo(-25.3,27.9,-24.6,27.9).closePath().moveTo(-17.7,27.8).curveTo(-18,23.9,-19.9,24.3).lineTo(-19.9,24.8).curveTo(-18.7,28.1,-18.4,28.1).curveTo(-18,28.1,-17.9,28).curveTo(-17.7,27.8,-17.7,27.8).closePath().moveTo(-17.4,20.8).curveTo(-17.4,21.8,-17,22.8).curveTo(-16.7,23.9,-16.7,24.3).curveTo(-16.7,27.2,-16.4,27.9).lineTo(-15.8,27.7).curveTo(-15.4,24.6,-15.4,24.2).curveTo(-15.2,22.4,-15.4,21.8).curveTo(-15.7,20.7,-17.4,20.8).closePath().moveTo(-10.1,30.5).curveTo(-9.9,30.6,-9.9,30).curveTo(-9.7,28.5,-9.9,27.3).curveTo(-10.2,24.8,-11.9,24.8).curveTo(-11.9,25,-11.9,25.3).curveTo(-11.9,25.5,-11.7,27.5).curveTo(-11.4,29.5,-11.4,30.5).lineTo(-10.7,30.6).closePath().moveTo(-6.7,18).curveTo(-6.7,17.1,-6.8,16.8).curveTo(-7,16.1,-7.9,16.5).curveTo(-7.9,17.7,-8.2,18.6).curveTo(-8.4,19.4,-8.4,19.8).curveTo(-8.4,20.4,-7.9,20.6).curveTo(-7,20.3,-6.8,19.4).curveTo(-6.7,19.1,-6.7,18).closePath().moveTo(7.5,27.1).curveTo(7.5,24.6,7.5,24.3).curveTo(7.5,13.9,5.5,28.7).curveTo(5.5,29.3,5.5,29.3).lineTo(6.2,29.4).curveTo(7.3,29.4,7.5,27.1).closePath().moveTo(4.1,22.9).curveTo(4.4,22.8,4.7,22.5).lineTo(4.7,18.6).curveTo(4.6,18.4,4.1,18.1).curveTo(3.5,18.4,3.5,20.5).curveTo(3.5,22.5,4.1,22.9).closePath().moveTo(-1.9,14.4).curveTo(-1.9,15.1,-1.4,15.6).lineTo(-0.8,15.4).curveTo(-0.2,12.5,-0.2,11.9).curveTo(-0.2,11,-0.3,10.9).curveTo(-0.5,10.5,-1.4,10.8).curveTo(-1.4,12.1,-1.9,14.4).closePath().moveTo(-18.9,5.4).curveTo(-18.5,5.4,-18.3,5.2).curveTo(-18.2,4.9,-18.2,4.8).curveTo(-19.4,2.7,-21.3,0.9).curveTo(-23.4,-1,-23.4,0.7).curveTo(-23.4,1,-18.9,5.4).closePath().moveTo(-12.9,-5.5).curveTo(-13.9,-5.6,-14.8,-3.1).curveTo(-15.7,-0.9,-15.7,0.3).curveTo(-15.7,0.9,-14.8,2).curveTo(-13.9,3.1,-13.9,3.5).curveTo(-13.9,5.6,-17.3,8).curveTo(-19,9.3,-20.7,10.4).curveTo(-20.7,10.9,-20.5,11).curveTo(-20.5,11,-20.1,11.1).curveTo(-14.9,7.9,-13.9,6.9).curveTo(-12.7,5.8,-12.7,3.5).curveTo(-12.7,3.1,-13.5,2).curveTo(-14.4,0.9,-14.4,0.4).curveTo(-14.4,-0.4,-12.7,-5).curveTo(-12.7,-5.3,-12.8,-5.4).curveTo(-12.9,-5.4,-12.9,-5.5).closePath().moveTo(16.7,22.9).curveTo(16.6,22.7,16.6,22.5).curveTo(15.4,22.6,14.7,24.2).curveTo(14.3,25,14.2,25.8).curveTo(14.2,26.3,14.3,26.4).curveTo(14.4,26.6,14.9,26.9).lineTo(15.2,26.8).curveTo(16.7,23.4,16.7,22.9).closePath().moveTo(25,27).lineTo(25,23.9).curveTo(24.9,23.7,24.4,23.4).curveTo(23.7,23.9,23.7,25.4).curveTo(23.7,26.8,24.4,27.4).curveTo(24.6,27.3,25,27).closePath();
	this.shape_291.setTransform(31.6,32.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#000000").beginStroke().moveTo(-2.2,-36).lineTo(1.4,-36).lineTo(5.2,-35.4).lineTo(21,-35.4).curveTo(21.5,-35.5,22.8,-36).curveTo(23,-36,23.2,-36).curveTo(23.5,-36,28.6,-35.8).curveTo(29,-35.6,29.4,-35.6).curveTo(29.5,-35.6,29.5,-35.6).curveTo(30.4,-32.8,31,-29.4).curveTo(31.6,-25.9,31.6,-22.9).curveTo(31.6,-20.5,31.4,-18).curveTo(31.2,-15,30.8,-11.9).lineTo(30.8,-4.3).curveTo(30.9,-3.9,30.9,-3.3).curveTo(30.8,0,30.8,0.1).curveTo(30.8,1,31.2,3.3).curveTo(31.6,5.5,31.6,6.5).curveTo(31.6,8.5,31.3,12.9).curveTo(31.1,17.1,31.1,19.3).curveTo(31.1,23.3,30.4,26.2).curveTo(29.4,30.3,27.2,31.3).lineTo(25.5,31.3).curveTo(24.6,31,24.4,30.3).curveTo(24.2,29.6,24,29.2).curveTo(24,29.2,23.8,31.3).curveTo(23.7,32.6,22.8,32.6).lineTo(22.3,32.5).curveTo(22.2,32.3,22.1,32.3).curveTo(22.1,32.2,22.1,31.8).curveTo(22.1,31.5,22.3,30.8).curveTo(22.6,30.1,22.6,29.8).curveTo(22.6,28.8,22.2,28.2).curveTo(21.7,27.4,21.3,26.3).curveTo(20,28.5,17,34.8).curveTo(16.6,34.3,16.6,32).curveTo(16.6,30.5,14.7,26.3).curveTo(10.8,31.8,10.3,31.8).lineTo(9.6,31.8).lineTo(9.6,31).curveTo(10.3,29.3,10.3,28.7).curveTo(10.3,27.8,10.1,27.3).curveTo(9.8,26.6,9.6,26.1).curveTo(8.6,27.1,5.4,30.3).curveTo(2.7,34.3,2.3,34.3).curveTo(1.7,34.3,1.6,34.3).lineTo(1.6,33.5).curveTo(1.6,33.2,1.8,32.4).curveTo(2.1,31.6,2.1,31.3).curveTo(2.1,31.1,0.8,25).curveTo(-0.6,18.8,-0.6,16.4).lineTo(-0.7,16.3).curveTo(-1,20.3,-1.4,34.7).lineTo(-2,34.8).curveTo(-3.4,32.7,-4.7,28.6).curveTo(-6.2,24,-6.9,22.4).curveTo(-7.2,26,-9.3,30.8).curveTo(-11.7,36.1,-13.9,36.1).curveTo(-15.4,36.1,-15.6,33.2).curveTo(-15.5,29.5,-15.8,28.3).curveTo(-16.2,29.2,-16.9,31.8).curveTo(-17.8,34.3,-19.3,35.6).curveTo(-20.8,34,-21.4,31.5).curveTo(-21.6,30.7,-22.1,26.9).lineTo(-22.1,26.6).curveTo(-23,27.4,-24.5,30.7).curveTo(-25.9,33.8,-26.1,33.8).curveTo(-26.8,33.8,-26.8,33.8).curveTo(-27,29.4,-27.1,27.1).lineTo(-27.2,27).curveTo(-27.6,27.9,-28.1,29.8).curveTo(-28.6,31.4,-30.3,32.1).curveTo(-30.8,31.9,-30.8,31.3).curveTo(-30.8,31.1,-30.1,29.6).curveTo(-29.3,28,-29.3,26.7).curveTo(-29.3,25.4,-30.2,21.6).curveTo(-31.1,17.5,-31.2,17.1).curveTo(-31.4,15.3,-31.4,11.6).curveTo(-31.3,8.2,-31.3,7.9).lineTo(-31.3,0.1).curveTo(-31.3,-2,-30.8,-3.8).curveTo(-31,-3.8,-31.1,-3.8).curveTo(-31.2,-7.1,-31.2,-11.8).curveTo(-31.3,-14.5,-31.4,-18).curveTo(-31.5,-20.9,-31.6,-24.3).curveTo(-31.6,-29.1,-31.3,-31.5).curveTo(-31.8,-35,-30.3,-35.9).curveTo(-30.3,-35.9,-30.2,-35.9).curveTo(-29.7,-35.9,-29.3,-36.1).curveTo(-28.5,-35.6,-27.2,-35.3).curveTo(-23.8,-34.1,-21,-34.1).curveTo(-18.7,-34.1,-17.1,-34.2).curveTo(-16.8,-34.1,-16.4,-34.1).curveTo(-11.8,-34.1,-10.7,-35.4).curveTo(-10.1,-35.5,-9.8,-35.5).lineTo(-4.8,-35.6).curveTo(-3.2,-35.9,-2.2,-36).closePath().moveTo(19.9,26).lineTo(20,25.9).curveTo(20,25.9,20,25.8).curveTo(20.7,24.9,21.3,24.9).curveTo(25.7,30,25.8,30).curveTo(28.7,30,29.8,18.4).curveTo(30.4,12.5,30.3,6.6).curveTo(30.3,3.4,29.6,1.6).lineTo(29.6,-12.3).curveTo(30,-14.8,30.2,-18).curveTo(30.3,-20.3,30.3,-22.9).curveTo(30.3,-25.1,29.8,-28.5).curveTo(29.5,-30.5,28.8,-34.5).curveTo(23.4,-34.6,21.4,-34.6).curveTo(18.1,-34.6,18,-34.5).lineTo(1.5,-34.5).lineTo(1.1,-34.8).lineTo(-6.5,-34.8).curveTo(-9.7,-33.8,-13.8,-33).lineTo(-21.8,-33).curveTo(-22.1,-33.1,-23.1,-33.1).curveTo(-23.1,-33.1,-23.2,-33.1).curveTo(-23.3,-33.1,-23.3,-33.3).curveTo(-23.5,-33.2,-23.7,-33.1).curveTo(-24.5,-33.1,-26.8,-34.3).lineTo(-29.6,-34.3).curveTo(-29.6,-30.1,-29.9,-28.5).curveTo(-30.3,-26.8,-30.3,-24.4).curveTo(-30.2,-20.9,-30.1,-18).curveTo(-30.1,-14.5,-30,-11.8).curveTo(-29.9,-8.8,-29.9,-6.4).curveTo(-29.3,-7.4,-29.3,-5.1).lineTo(-29.4,-4.7).curveTo(-29.2,-4.4,-29.1,-4).curveTo(-29.3,-4,-29.4,-3.9).curveTo(-29.6,-1.3,-30.1,7.9).curveTo(-30.1,14.8,-30,15.6).curveTo(-29.9,16.5,-28.1,26).lineTo(-28,26.1).curveTo(-27.7,25.4,-26.8,25.4).curveTo(-25.7,25.4,-25.6,27).curveTo(-25.6,27.9,-25.7,29.4).lineTo(-25.5,29.4).curveTo(-25,28,-24.5,27).curveTo(-23.5,25.4,-22.1,25.4).curveTo(-21.1,25.4,-20.3,28.5).curveTo(-19.9,30.3,-19.3,33.3).curveTo(-18,31.7,-17.3,28.1).curveTo(-16.8,25.4,-16,25.4).curveTo(-14.5,25.4,-14.2,28.8).curveTo(-14,30.7,-14,34.3).lineTo(-13.9,34.4).curveTo(-11.9,32.5,-9.3,26.3).curveTo(-7.1,20.4,-7,20.4).curveTo(-5.2,20.4,-4.2,24.3).curveTo(-2.9,30,-2.7,30.4).lineTo(-2.6,30.4).curveTo(-2.6,22.3,-2.4,19.6).curveTo(-2,12.9,-0.5,12.9).curveTo(0.1,12.9,0.9,17.8).curveTo(2.3,26.5,3.3,31).lineTo(3.4,31).curveTo(4.7,29.2,5.8,27.8).curveTo(8.1,25.1,9.1,25.1).curveTo(9.3,25.1,9.5,25.1).curveTo(9.6,24.9,10.1,24.9).curveTo(10.4,24.9,11,26.4).curveTo(11.6,27.9,11.6,28.5).lineTo(11.6,28.6).curveTo(12.4,27.3,13,26.3).curveTo(14.1,24.6,15.2,24.6).curveTo(15.9,24.6,16.4,26.9).curveTo(17,29.5,17.7,30.2).curveTo(18.5,28.5,19.1,27.3).curveTo(19.5,26.5,19.9,26).closePath();
	this.shape_292.setTransform(32,35.3);

	this.hitbox = new lib.tile_hitbox();
	this.hitbox.setTransform(31.4,32,1,1,0,0,0,31,31);
	this.hitbox.alpha = 0;

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#91D2FF").beginStroke().moveTo(29.6,-25.6).curveTo(29.5,-25.9,29.3,-26.2).curveTo(28.7,-27.1,27.8,-27.9).curveTo(27.4,-28.1,27.1,-28.3).curveTo(27,-29.8,25.5,-29.8).curveTo(24.1,-29.8,22.9,-29.1).curveTo(22.6,-29.5,21.6,-29.8).lineTo(9.9,-29.8).curveTo(9.1,-29.8,8.7,-29.4).curveTo(7.7,-29.5,6.7,-29.6).curveTo(2.8,-30.3,2.2,-29).lineTo(-6.6,-29.1).curveTo(-6.7,-29.3,-7.4,-29.3).lineTo(-11.4,-29.3).curveTo(-8.7,-29.8,-6.5,-30.5).lineTo(1.1,-30.5).lineTo(1.5,-30.3).lineTo(18,-30.3).curveTo(18.1,-30.4,21.4,-30.4).curveTo(23.4,-30.4,28.8,-30.3).curveTo(29.2,-27.9,29.5,-26.2).curveTo(29.6,-25.9,29.6,-25.6).closePath().moveTo(26.7,-24).curveTo(26.8,-23.6,26.8,-23.4).curveTo(26.6,-23.5,26.3,-23.4).curveTo(26.4,-24.3,26.4,-25.3).curveTo(26.5,-24.7,26.7,-24).closePath().moveTo(18.7,-20.1).curveTo(18.6,-19.9,18.6,-19.8).curveTo(17.7,-19.6,16.3,-18.6).curveTo(16.6,-18.9,16.6,-19.4).curveTo(16.6,-19.6,16.6,-19.9).lineTo(17.9,-19.9).curveTo(18.2,-20,18.7,-20.1).closePath().moveTo(20.7,-23.5).curveTo(20.2,-24,19.4,-24.6).curveTo(19.8,-24.9,20,-25.1).lineTo(21.9,-25.1).curveTo(22,-25.2,23.6,-25.8).curveTo(22.8,-24.5,22.3,-23.6).curveTo(21.7,-23.6,20.7,-23.5).closePath().moveTo(29.6,4).curveTo(29.4,2.8,28.6,1.9).lineTo(28.6,-6).curveTo(28.8,-6.8,29.3,-10.2).curveTo(29.9,-13.9,29.9,-14.6).curveTo(29.9,-14.8,29.9,-14.9).curveTo(30.2,-16,30.3,-17.9).curveTo(30.3,-12,29.6,-8.1).closePath().moveTo(29.6,5.2).lineTo(29.6,13.9).curveTo(29.4,11.8,28.1,11.8).curveTo(28.2,11.3,28.3,10.7).curveTo(28.3,10.5,28.3,10.1).curveTo(28.6,9.7,28.6,9.5).curveTo(28.6,8.5,28.5,8).curveTo(28.5,7.1,28.6,6.2).curveTo(29.4,6,29.6,5.2).closePath().moveTo(29.6,16.8).lineTo(29.6,23.4).curveTo(29.3,22.1,27.9,22.1).curveTo(27.6,22.1,26.8,22.4).curveTo(26.5,22.4,26.2,22.5).lineTo(26.2,22.5).curveTo(28.1,21.5,28.1,20.3).curveTo(28,18.8,26.9,18.6).curveTo(27.1,18,27.3,17.5).curveTo(27.6,17.8,28.1,17.8).curveTo(29.3,17.8,29.6,16.8).closePath().moveTo(29.6,24.1).lineTo(29.6,27.2).curveTo(29.3,26.8,28.9,26.5).curveTo(28.9,26.3,28.9,26.2).curveTo(28.9,25.8,28.4,25.4).curveTo(28.6,25.3,28.7,25.1).curveTo(29.4,24.8,29.6,24.1).closePath().moveTo(27.5,29.8).lineTo(26.5,29.8).curveTo(26.1,29.4,25.5,29).curveTo(24.5,28.5,22.8,28.4).curveTo(23.1,28.3,23.2,28.3).curveTo(23.9,28,23.9,27).curveTo(23.9,26.9,23.9,26.9).curveTo(24.8,27.1,25.6,27.4).curveTo(25.7,27.8,26.4,28.8).curveTo(27,29.5,27.5,29.8).closePath().moveTo(19.4,28.5).curveTo(18.7,28.5,17.8,28.6).curveTo(13.8,28.9,12.8,29).lineTo(6,29.1).curveTo(3.6,29.5,-2.1,30.5).lineTo(-12.8,30.5).lineTo(-29.6,28.3).curveTo(-29.8,25.5,-30.1,24).curveTo(-30.3,23.1,-30.3,21.1).curveTo(-30.2,20.1,-30.2,19.3).curveTo(-29.8,20,-28.9,20).lineTo(-28.8,20).curveTo(-28.8,21,-28.1,21.1).curveTo(-27.9,21.1,-27.5,21.2).curveTo(-29.1,21.9,-29.1,23).curveTo(-29.1,23.4,-28.9,23.8).curveTo(-28.6,24.5,-27.7,24.5).curveTo(-29.4,25.1,-29.4,26.5).curveTo(-29.4,27,-29.2,27.3).curveTo(-28.8,28,-27.7,28).curveTo(-27.4,28,-26.5,27.8).curveTo(-25.6,27.5,-25.2,27.5).curveTo(-24.1,27.5,-23,27.5).curveTo(-22.7,28.4,-20.6,29).curveTo(-18.2,29.8,-15.6,29.8).curveTo(-14.1,29.8,-13.7,29).curveTo(-10.8,28.9,-9.1,28.3).curveTo(-8.9,28.1,-8.7,28.1).curveTo(-8.1,28.5,-6.9,28.5).curveTo(-6.6,28.5,-6.4,28.5).curveTo(-6.3,28.6,-6.2,29.3).curveTo(-5.4,30,-2.2,30).curveTo(0.5,30,1.2,29.8).curveTo(1.9,29.5,1.9,28.5).curveTo(1.9,28.4,1.9,28.3).curveTo(7.6,28,9.6,27.3).curveTo(12.1,28.4,19.4,28.5).closePath().moveTo(-29.9,14.5).curveTo(-29.8,12.8,-29.8,11.6).lineTo(-29.8,2).curveTo(-29.4,6,-28.3,7.7).curveTo(-28.4,8,-28.4,8.3).curveTo(-28.4,8.7,-27.9,11.8).curveTo(-29.3,13,-29.9,14.5).closePath().moveTo(-30,-7.8).curveTo(-30.1,-12.8,-30.3,-20.1).curveTo(-30.3,-22.6,-29.9,-24.3).curveTo(-29.8,-25,-29.7,-26.2).curveTo(-29.6,-27.7,-29.6,-30).lineTo(-26.8,-30).curveTo(-24.3,-28.9,-23.6,-28.9).curveTo(-22.1,-28.9,-21.8,-28.8).lineTo(-17.9,-28.8).curveTo(-19.1,-28.6,-20.8,-28.3).curveTo(-24.4,-27.6,-24.4,-26.3).lineTo(-24.4,-26.2).curveTo(-24.4,-26.1,-24.4,-25.9).curveTo(-25.6,-25.9,-25.6,-24.5).curveTo(-25.6,-23.9,-25.5,-23.8).curveTo(-25.2,-23.3,-24.1,-22.9).lineTo(-19.9,-22.9).curveTo(-19.8,-22.9,-19.6,-22.8).curveTo(-19.9,-22.8,-20.1,-22.7).curveTo(-20.5,-23,-21.3,-22.4).curveTo(-26.1,-21.3,-26.1,-20).curveTo(-26.1,-19.4,-26,-19.3).curveTo(-25.7,-18.9,-24.8,-18.4).curveTo(-25.6,-17.3,-26.1,-16.4).curveTo(-26.3,-18.1,-26.3,-19.6).curveTo(-25.9,-24.3,-25.7,-26.2).lineTo(-25.5,-27.7).curveTo(-25.5,-30.5,-27.2,-29).curveTo(-28.6,-27.8,-29,-26.2).curveTo(-29.1,-25.9,-29.1,-25.6).curveTo(-29.4,-23.9,-29.4,-19.6).curveTo(-29.4,-16.4,-29,-13.4).curveTo(-29.9,-12.6,-29.9,-11.3).curveTo(-29.8,-10.3,-30,-8.1).curveTo(-30,-7.9,-30,-7.8).closePath().moveTo(4.9,-19.8).lineTo(8.1,-19.9).curveTo(7.7,-19.6,7.2,-19.1).curveTo(6.3,-19.6,4.9,-19.8).closePath().moveTo(25.3,14).curveTo(24.8,14.8,24.6,15.5).curveTo(24.6,15.5,24.1,17).curveTo(23.3,16.5,21.8,16.7).curveTo(22.8,15.9,24,14.8).curveTo(24.6,14.2,25.1,13.8).curveTo(25.2,13.9,25.3,14).closePath().moveTo(17.3,12.9).lineTo(17.4,12.8).curveTo(17.9,12.1,19.1,11).curveTo(19.8,10.4,20.1,9.7).curveTo(20.8,9.5,21.6,9).curveTo(22.7,8.7,23.6,8.5).curveTo(19.9,11.2,17.3,12.9).closePath().moveTo(16.2,16.9).lineTo(16.1,17).curveTo(15.9,17.4,16.1,18.2).curveTo(15.6,18,15.1,17.6).curveTo(14.9,17.5,14.8,17.5).curveTo(15.3,17.3,16.2,16.9).closePath().moveTo(9.4,5.6).curveTo(8.9,5.6,8.5,5.5).curveTo(9.2,5.3,9.8,5).curveTo(9.6,5.4,9.4,5.6).closePath().moveTo(15.7,9.3).curveTo(15.3,9.5,14.8,10).curveTo(13.4,9.6,10.2,11).curveTo(9.9,11,9.7,11.2).curveTo(9.6,11,9.5,11).curveTo(9.9,10.9,10.9,10.1).curveTo(12,10,13.3,9.9).curveTo(14.5,9.8,15,9.3).closePath().moveTo(11.5,-6.1).lineTo(14.5,-6.1).curveTo(14.4,-6,14.2,-5.9).curveTo(13.1,-6.1,11.4,-6.1).curveTo(11.4,-6.1,11.5,-6.1).closePath().moveTo(25.3,4.6).curveTo(25.4,4.4,25.5,4).lineTo(25.5,4.3).curveTo(25.5,4.4,25.4,4.6).curveTo(25.3,4.6,25.3,4.6).closePath().moveTo(19.5,2).curveTo(20.3,1.8,20.8,1.5).curveTo(20.3,3.5,18.6,5.6).curveTo(18.4,5.9,18.3,6).lineTo(15.6,6.1).curveTo(17.9,3.9,19.5,2).closePath().moveTo(19.9,-6.1).lineTo(21.4,-6.1).curveTo(18.5,-3.9,15.7,-1.2).curveTo(14.6,-0.9,13.3,-0.5).curveTo(12.7,-0.3,12.2,-0.1).curveTo(12.6,-0.4,13.1,-0.8).curveTo(18.1,-4.2,19.9,-6.1).closePath().moveTo(24.5,-2.5).lineTo(24.4,-2.5).curveTo(24.4,-6.2,22.7,-6.6).curveTo(23,-6.6,23.2,-6.6).curveTo(23.9,-6.6,24.4,-6.9).curveTo(24.5,-5.6,24.5,-5.1).closePath().moveTo(20.5,-10.8).curveTo(20.2,-10.9,20,-10.9).curveTo(20.1,-11.1,20.2,-11.3).curveTo(20.5,-11.6,20.7,-11.9).curveTo(21,-12.5,21.3,-13.2).curveTo(21.7,-13.9,22,-14.7).curveTo(22.5,-13.1,22.5,-11.8).lineTo(22.5,-10.8).closePath().moveTo(25,-16.4).curveTo(24.9,-16.9,24.7,-17.4).curveTo(24.9,-17.4,25.1,-17.6).curveTo(25,-17,25,-16.4).closePath().moveTo(11.6,-11.1).curveTo(11.6,-11.1,11.6,-11.1).curveTo(11.6,-11.3,11.6,-11.4).lineTo(12.1,-11.3).curveTo(11.9,-11.1,11.6,-11.1).closePath().moveTo(15.6,-13.6).curveTo(15.5,-13.7,15.4,-13.8).curveTo(15.8,-14.1,16.3,-14.4).curveTo(16.9,-14.9,17.4,-15.2).curveTo(17.3,-14.9,17.2,-14.4).curveTo(17.1,-14.2,17.1,-13.9).lineTo(17,-13.9).curveTo(16.5,-13.6,15.9,-13.3).curveTo(15.7,-13.4,15.6,-13.6).closePath().moveTo(15.6,-18.2).curveTo(15.7,-18.3,15.9,-18.3).curveTo(14.8,-17.6,13.6,-16.4).curveTo(13.5,-16.7,13.4,-16.9).curveTo(14.4,-17.6,15.6,-18.2).closePath().moveTo(11.8,-25.8).curveTo(11.9,-25.8,11.9,-25.7).curveTo(10.8,-25.4,9.6,-25.1).curveTo(5.8,-24.1,3.4,-23.3).lineTo(2.9,-23.3).curveTo(2,-23.1,1,-23).lineTo(0.6,-23).curveTo(0.1,-22.9,-0.4,-22.9).curveTo(2.4,-24.7,3.6,-25.9).closePath().moveTo(9.3,-19.9).lineTo(12.8,-19.9).curveTo(11.2,-19,10.6,-19).lineTo(9.9,-19.5).curveTo(9.6,-19.8,9.3,-19.9).closePath().moveTo(4.4,-10.4).curveTo(4.2,-10.1,4.2,-9.9).curveTo(3.4,-9.8,2.5,-9.6).curveTo(3.4,-10.1,4.4,-10.4).closePath().moveTo(4,-15.1).curveTo(4,-14.7,4.1,-14.4).curveTo(3.1,-14.9,1.8,-15.3).curveTo(-0,-15.8,-1.2,-15.9).curveTo(-1.2,-15.9,-1.1,-15.9).curveTo(0,-16.5,0.8,-17).curveTo(3.1,-16.7,4.7,-16.5).curveTo(4,-15.6,4,-15.1).closePath().moveTo(-9.3,-10.5).curveTo(-8.1,-11.2,-7.1,-11.8).curveTo(-6.2,-10.8,-5.3,-9.9).curveTo(-7.9,-10.1,-9.7,-10.3).curveTo(-9.5,-10.4,-9.3,-10.5).closePath().moveTo(-3.8,-14.8).curveTo(-3.7,-14.9,-3.6,-14.9).curveTo(-3.6,-14.7,-3.6,-14.5).curveTo(-3.6,-13.7,-3.1,-13.3).curveTo(-2.2,-12.7,0.2,-12.6).curveTo(0.4,-12.6,1.2,-12.2).curveTo(-0.3,-11.6,-1.7,-11).curveTo(-2.5,-11.8,-3.2,-12.4).curveTo(-4,-13.1,-4.7,-13.6).curveTo(-4.1,-14.3,-3.8,-14.8).closePath().moveTo(-3.9,-24.4).curveTo(-4.3,-24.1,-5.1,-23.8).curveTo(-5.7,-23.8,-6.4,-23.8).lineTo(-7.8,-23.8).closePath().moveTo(11,19.5).curveTo(11,20,11.4,20.5).curveTo(11.1,20.4,10.9,20.4).curveTo(10.9,20.3,10.9,20.3).curveTo(10.9,19.7,10.7,19.5).curveTo(10.6,19.4,10.4,19.2).curveTo(10.8,19.1,11.1,19).curveTo(11,19.2,11,19.5).closePath().moveTo(-26.4,24.2).curveTo(-26.7,24.3,-26.9,24.3).curveTo(-26.7,24.2,-26.4,24.1).closePath().moveTo(-21.9,21.5).curveTo(-21.8,21.5,-21.6,21.5).curveTo(-21.6,21.5,-21.5,21.5).curveTo(-21.7,21.6,-21.8,21.8).curveTo(-21.8,21.6,-21.9,21.5).closePath().moveTo(-11.3,25.4).curveTo(-11.4,25.4,-11.5,25.5).curveTo(-12.9,25.8,-13.2,25.8).curveTo(-13.2,25.8,-14.4,25).lineTo(-11,25).curveTo(-11.2,25.2,-11.3,25.4).closePath().moveTo(-10.5,19.4).curveTo(-10.5,19.3,-10.5,19.3).curveTo(-10.5,19.1,-10.6,19).curveTo(-9.7,18.7,-8.4,18.4).curveTo(-8.1,18.3,-7.8,18.2).curveTo(-8.2,18.4,-8.6,18.5).curveTo(-9.6,19,-10.5,19.4).closePath().moveTo(4.7,17.5).curveTo(4,18,4,18.5).lineTo(4.1,18.6).lineTo(2.6,18.6).curveTo(0.9,19,-1.3,19.4).curveTo(0.2,18.6,1.9,17.9).curveTo(2.8,17.5,3.8,17.1).curveTo(4.2,17.5,4.7,17.5).closePath().moveTo(6.1,16.9).curveTo(6.1,16.8,6.1,16.8).curveTo(6.4,16.4,6.4,15.9).curveTo(8.5,15,10.2,14.2).curveTo(8.5,15.8,8.3,16.3).curveTo(7,16.5,6.1,16.9).closePath().moveTo(7.9,10.5).curveTo(8,10.5,8.1,10.5).lineTo(8.1,10.5).curveTo(8,10.5,7.9,10.5).closePath().moveTo(-11.4,10.6).lineTo(-11.2,10.5).curveTo(-11.1,10.5,-11,10.4).curveTo(-11,10.5,-10.9,10.6).curveTo(-10.2,11.5,-7.9,11.5).curveTo(-5.2,11.5,-2.1,11.3).curveTo(-2.6,11.4,-3.2,11.5).curveTo(-5.5,12,-8,13).curveTo(-8.1,12.3,-8.8,12).curveTo(-10.8,11,-11.4,10.6).closePath().moveTo(-3.1,5.9).curveTo(-2.7,6.5,-1.9,6.5).curveTo(-0.9,6.5,0.3,6.4).curveTo(0.3,6.4,0.3,6.5).curveTo(0.3,6.5,0.4,7.4).curveTo(0.5,7.6,0.6,7.8).curveTo(-0.3,7.9,-1.1,8).curveTo(-2.5,7.4,-4.8,6.7).curveTo(-4.1,6.3,-3.1,5.9).closePath().moveTo(-8.5,2.3).curveTo(-8.5,1.4,-7.9,0.5).curveTo(-7.8,0.4,-7.7,0.3).curveTo(-6.2,1.9,-4.9,3).curveTo(-6.8,3.9,-9.4,4.7).curveTo(-10,5,-10.5,5.3).curveTo(-10.7,5.2,-10.9,5.1).curveTo(-10.9,4.1,-10.9,3.9).curveTo(-8.5,4.4,-8.5,2.3).closePath().moveTo(-11.5,-4.9).curveTo(-11.7,-4.8,-11.8,-4.7).curveTo(-12,-4.8,-12.1,-4.9).closePath().moveTo(-5.7,-2.1).curveTo(-5.5,-2.1,-5.2,-2).curveTo(-4.9,-1.9,-4.7,-1.8).curveTo(-3.8,-0.7,-3,0.3).curveTo(-4.2,-0.6,-5.3,-1.3).curveTo(-5.5,-1.6,-5.7,-2.1).closePath().moveTo(5.7,-1.3).curveTo(6.4,-1.9,6.8,-2.5).lineTo(10.3,-2.8).curveTo(8.9,-1.9,6.3,-0.4).curveTo(6.2,-0.3,6.1,-0.3).curveTo(6.1,-0.9,5.7,-1.3).closePath().moveTo(6.1,-6.1).curveTo(5.7,-5.9,5.3,-5.6).curveTo(0.7,-5.1,-1.1,-4.5).curveTo(-2.1,-4.6,-3.3,-4.8).curveTo(-3.4,-4.9,-3.5,-5.1).curveTo(1.5,-5.6,5,-6.1).closePath().moveTo(-25,6.3).curveTo(-24.9,4.9,-24.8,3.5).curveTo(-22.3,5,-20.7,6).curveTo(-23.5,6,-25,6.3).closePath().moveTo(-24.1,16.1).curveTo(-22.5,16.8,-20.9,17.4).curveTo(-21.4,17.7,-21.8,18).curveTo(-21.9,18,-21.9,18).curveTo(-23,18,-23.8,18).curveTo(-23.9,18,-23.9,17.9).curveTo(-24,16.9,-24.1,16.1).closePath().moveTo(-15.6,15.4).curveTo(-15.8,15.6,-16,16).curveTo(-16.4,15.8,-16.8,15.6).curveTo(-16.3,15.5,-15.5,15.3).closePath().moveTo(-18.6,14.4).curveTo(-18.5,14.7,-18.4,15).curveTo(-19,14.6,-19.5,14.5).curveTo(-19,14.5,-18.6,14.4).closePath().moveTo(-16.9,10.5).curveTo(-16.9,10.6,-16.9,10.8).curveTo(-17.4,10.8,-17.9,10.9).curveTo(-18.2,10.9,-18.4,10.9).curveTo(-18.6,10,-19.7,9.2).lineTo(-15.8,9.1).curveTo(-16.9,10,-16.9,10.5).closePath().moveTo(-27.3,16.3).curveTo(-27.2,16.5,-27.2,16.9).curveTo(-27.1,17.3,-27.1,18.4).curveTo(-27.3,16.6,-27.3,16.3).closePath().moveTo(-25,9.3).lineTo(-23.9,9.3).curveTo(-23.9,9.4,-23.9,9.5).curveTo(-22.9,10.7,-22.2,11.5).curveTo(-24.1,12,-24.1,13).curveTo(-24.1,13,-24.1,13.1).curveTo(-24.4,13.1,-24.5,13.1).closePath().moveTo(-24.5,-3.1).curveTo(-24.6,-2.9,-24.8,-2.5).curveTo(-24.8,-2.9,-24.8,-3.4).curveTo(-24.7,-3.3,-24.5,-3.1).closePath().moveTo(-23.9,-5).curveTo(-24.7,-4.9,-24.8,-4).curveTo(-24.9,-5,-24.9,-5.9).lineTo(-23.3,-5.9).curveTo(-23.7,-5.5,-23.9,-5).closePath().moveTo(-13.6,2.1).curveTo(-13.6,2.2,-13.6,2.4).curveTo(-14.3,1.9,-14.8,1.3).closePath().moveTo(-20.3,0.8).curveTo(-19.6,1.4,-19.1,1.9).curveTo(-19.3,2.1,-19.3,2.6).curveTo(-20.4,2.1,-21.7,1.5).curveTo(-22.5,1.3,-23.1,1).curveTo(-22.6,0.3,-22,-0.8).curveTo(-21.1,-0.1,-20.3,0.8).closePath().moveTo(-18.9,-5.7).curveTo(-18.9,-5.2,-18.8,-4.9).curveTo(-18.5,-4.4,-17.6,-4.1).curveTo(-19.1,-3.9,-19.1,-2.5).lineTo(-19.1,-2.4).curveTo(-19.9,-3.1,-20.5,-3.4).curveTo(-19.8,-4.9,-19.8,-5.1).curveTo(-19.8,-5.6,-19.8,-5.9).lineTo(-18.9,-5.9).curveTo(-18.9,-5.8,-18.9,-5.7).closePath().moveTo(-22.6,-9).lineTo(-25.1,-9).curveTo(-25.3,-9.9,-25.4,-10.8).curveTo(-24.7,-10.6,-23.9,-10.6).curveTo(-22.6,-10.6,-20.1,-11.8).curveTo(-19.8,-11.9,-19.5,-12.1).curveTo(-22.6,-10.2,-22.6,-9.5).curveTo(-22.6,-9.3,-22.6,-9).closePath().moveTo(-22.8,-15.3).curveTo(-23,-15.2,-23.2,-15.1).curveTo(-22.3,-16.4,-21.5,-17.4).curveTo(-21.2,-17.9,-20.9,-18.2).curveTo(-20.4,-18.4,-19.4,-18.7).curveTo(-19.3,-18.8,-19.2,-18.8).curveTo(-18.8,-18.1,-17.9,-18.1).lineTo(-15.6,-18.4).curveTo(-17.9,-17.6,-18.7,-17).lineTo(-18.7,-17.1).curveTo(-19.1,-18,-20.1,-18).curveTo(-21.1,-18,-22.1,-16.4).curveTo(-22.5,-15.7,-22.8,-15.3).closePath().moveTo(-14.9,-26).lineTo(-16.1,-26).lineTo(-15.9,-26.1).lineTo(-11,-26.1).curveTo(-12.2,-25.6,-12.6,-25.2).curveTo(-13.7,-25.9,-14.9,-26).closePath();
	this.shape_293.setTransform(32.1,32);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#000000").beginStroke().moveTo(-30,-31.8).curveTo(-30,-31.7,-29.9,-31.7).curveTo(-29.4,-30.9,-27.2,-30.9).curveTo(-26.5,-30.9,-25.9,-31).curveTo(-25.1,-30.6,-23.6,-30.4).curveTo(-22.5,-30.2,-21.7,-30.2).curveTo(-20.3,-30.2,-18.5,-30.2).curveTo(-17.7,-30.2,-16.6,-30.3).lineTo(-14.1,-30.3).curveTo(-12.6,-30.7,-11.6,-30.9).curveTo(-8.4,-31.4,-7,-31.8).curveTo(-6.9,-31.8,-6.8,-31.8).lineTo(-2.7,-31.8).lineTo(11.3,-31.8).lineTo(12.1,-31.7).lineTo(22.4,-31.7).curveTo(23.3,-31.7,24.1,-31.8).curveTo(25.5,-31.7,29.5,-31.6).curveTo(30.3,-29.1,30.8,-26.2).curveTo(30.9,-25.7,31,-25.1).curveTo(31.6,-21.6,31.6,-18.7).curveTo(31.6,-13.3,30.8,-7.7).lineTo(30.8,29.6).curveTo(30.6,29.8,30.4,30.4).curveTo(30.1,31,29.7,31.1).lineTo(26.2,31.1).curveTo(25.5,30.6,25,30.3).curveTo(24,29.7,22.1,29.7).curveTo(21.4,29.7,18,29.9).curveTo(14.2,30.2,13.2,30.3).lineTo(6,30.5).curveTo(0.3,31.4,-2,31.8).lineTo(-12.5,31.8).curveTo(-22,29.6,-29.1,29.9).curveTo(-30.8,29.6,-31.3,27.8).curveTo(-31.6,26.5,-31.6,21).curveTo(-31.1,4.2,-31.1,1.7).curveTo(-31.1,-2.6,-31.6,-20).curveTo(-31.6,-23.9,-31.4,-26.2).curveTo(-31.4,-26.8,-31.3,-27.3).curveTo(-31.8,-31.1,-30,-31.8).closePath().moveTo(-11.4,-29.3).lineTo(-15.6,-29.3).curveTo(-15.7,-29.2,-17.9,-28.8).lineTo(-21.8,-28.8).curveTo(-22.1,-28.9,-23.6,-28.9).curveTo(-24.3,-28.9,-26.8,-30).lineTo(-29.6,-30).curveTo(-29.6,-27.7,-29.7,-26.2).curveTo(-29.8,-25,-29.9,-24.3).curveTo(-30.3,-22.6,-30.3,-20.2).curveTo(-30.1,-12.8,-30,-7.8).curveTo(-30.1,-6,-30.1,-5.9).curveTo(-30.3,-2.1,-29.9,1.6).curveTo(-29.9,1.8,-29.8,2).lineTo(-29.8,11.6).curveTo(-29.8,12.8,-29.9,14.4).curveTo(-30.4,15.6,-30.4,16.9).curveTo(-30.4,17,-30.4,18.5).curveTo(-30.3,18.9,-30.2,19.2).curveTo(-30.2,20.1,-30.3,21.1).curveTo(-30.3,23.1,-30.1,24).curveTo(-29.8,25.5,-29.6,28.2).lineTo(-12.8,30.5).lineTo(-2.1,30.5).curveTo(3.6,29.5,6,29.1).lineTo(12.8,29).curveTo(13.8,28.8,17.8,28.6).curveTo(18.7,28.5,19.4,28.5).curveTo(19.9,28.5,20.5,28.5).curveTo(22.1,28.5,22.8,28.4).curveTo(24.5,28.4,25.5,29).curveTo(26.1,29.3,26.5,29.7).lineTo(27.5,29.7).curveTo(28,30,28.4,30).curveTo(29.9,30,29.9,28.4).curveTo(29.9,27.7,29.6,27.2).lineTo(29.6,24.1).curveTo(29.6,23.9,29.6,23.7).curveTo(29.6,23.5,29.6,23.3).lineTo(29.6,16.8).curveTo(29.6,16.7,29.6,16.6).curveTo(29.6,16.5,29.6,14.9).curveTo(29.6,14.3,29.6,13.8).lineTo(29.6,5.2).curveTo(29.6,4.9,29.6,4.6).curveTo(29.6,4.3,29.6,3.9).lineTo(29.6,-8.1).curveTo(30.3,-12,30.3,-17.9).curveTo(30.4,-18.6,30.4,-19.5).curveTo(30.4,-21.6,29.9,-24.9).curveTo(29.8,-25.3,29.6,-25.6).curveTo(29.6,-25.9,29.5,-26.2).curveTo(29.2,-27.9,28.8,-30.3).curveTo(23.4,-30.4,21.4,-30.4).curveTo(18.1,-30.4,18,-30.3).lineTo(1.5,-30.3).lineTo(1.1,-30.5).lineTo(-6.5,-30.5).curveTo(-8.7,-29.8,-11.4,-29.3).closePath();
	this.shape_294.setTransform(32.1,32);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.8,-27.7).curveTo(-13.1,-27.7,-13.4,-27.6).curveTo(-16.1,-27.2,-17.8,-27.1).curveTo(-19,-27,-19.8,-27).curveTo(-21.5,-27,-22.9,-27).curveTo(-23.8,-27,-24.8,-27.2).curveTo(-26.3,-27.4,-27.2,-27.8).curveTo(-27.8,-27.7,-28.5,-27.7).curveTo(-30.6,-27.7,-31.2,-28.5).curveTo(-31.3,-28.5,-31.3,-28.6).curveTo(-31.5,-28.9,-31.4,-29.3).curveTo(-31.4,-31,-28.4,-31).curveTo(-27.4,-31,-26.8,-30.7).curveTo(-26,-30.8,-25,-30.8).curveTo(-22.7,-30.8,-22.1,-30.5).curveTo(-21.5,-30.1,-18.4,-30.1).curveTo(-17.8,-30.1,-15.9,-30.5).curveTo(-12.9,-31.2,-8.9,-31.8).lineTo(-0.4,-31.9).curveTo(-0.3,-32,0.4,-32.1).lineTo(9.4,-32.1).curveTo(11,-31.8,11.4,-31.6).lineTo(20.6,-31.6).curveTo(20.7,-31.6,20.8,-31.6).curveTo(20.8,-34,25.1,-32.6).curveTo(27,-32,28,-31.4).curveTo(28.5,-31.4,29.1,-31.1).curveTo(31.6,-30.2,31.6,-28.8).curveTo(31.6,-28.2,31.4,-27.8).curveTo(31,-27.3,30.4,-27.3).curveTo(29.6,-27.3,28.3,-28.5).curveTo(28.1,-28.5,27.9,-28.5).curveTo(26.4,-28.5,24.5,-29.1).curveTo(23.9,-28.7,22.8,-28.6).curveTo(22.1,-28.5,21.1,-28.5).lineTo(10.9,-28.5).lineTo(10,-28.6).lineTo(8.6,-28.9).lineTo(0.9,-28.9).lineTo(0.1,-28.7).lineTo(-3.9,-28.6).lineTo(-8,-28.6).lineTo(-8.1,-28.6).curveTo(-8.2,-28.6,-8.3,-28.6).curveTo(-9.6,-28.2,-12.8,-27.7).closePath().moveTo(-19.1,-25.6).curveTo(-16.9,-26,-16.9,-26.1).lineTo(-12.6,-26.1).lineTo(-8.6,-26.1).curveTo(-8,-26.1,-7.9,-25.9).lineTo(0.9,-25.8).curveTo(1.5,-27.1,5.5,-26.5).curveTo(6.5,-26.3,7.5,-26.2).curveTo(7.8,-26.6,8.6,-26.6).lineTo(20.4,-26.6).curveTo(21.3,-26.3,21.6,-25.9).curveTo(22.8,-26.6,24.2,-26.6).curveTo(25.7,-26.6,25.9,-25.1).curveTo(26.1,-25,26.5,-24.7).curveTo(27.5,-23.9,28,-23).curveTo(28.2,-22.7,28.4,-22.4).curveTo(28.5,-22.1,28.6,-21.7).curveTo(29.1,-18.4,29.1,-16.3).curveTo(29.1,-15.4,29.1,-14.7).curveTo(29,-12.8,28.6,-11.8).curveTo(28.6,-11.6,28.6,-11.4).curveTo(28.6,-10.8,28.1,-7).curveTo(27.5,-3.6,27.4,-2.8).lineTo(27.4,5.1).curveTo(28.1,5.9,28.3,7.1).curveTo(28.4,7.5,28.4,7.8).curveTo(28.4,8.1,28.3,8.4).curveTo(28.1,9.2,27.3,9.4).curveTo(27.3,10.3,27.3,11.1).curveTo(27.4,11.7,27.4,12.6).curveTo(27.4,12.9,27.1,13.3).curveTo(27.1,13.6,27,13.9).curveTo(27,14.5,26.9,15).curveTo(28.1,14.9,28.3,17).curveTo(28.4,17.5,28.4,18.1).curveTo(28.4,19.7,28.4,19.8).curveTo(28.4,19.9,28.3,20).curveTo(28,20.9,26.9,20.9).curveTo(26.4,20.9,26.1,20.7).curveTo(25.8,21.2,25.6,21.8).curveTo(26.7,22,26.9,23.4).curveTo(26.9,24.7,25,25.6).lineTo(24.9,25.7).curveTo(25.3,25.6,25.6,25.5).curveTo(26.4,25.3,26.6,25.3).curveTo(28.1,25.3,28.3,26.5).curveTo(28.4,26.7,28.4,26.9).curveTo(28.4,27.1,28.3,27.3).curveTo(28.1,27.9,27.5,28.3).curveTo(27.3,28.4,27.1,28.5).curveTo(27.6,29,27.6,29.4).curveTo(27.6,29.5,27.6,29.6).curveTo(28.1,29.9,28.3,30.4).curveTo(28.6,30.9,28.6,31.6).curveTo(28.6,33.2,27.1,33.2).curveTo(26.7,33.2,26.3,32.9).curveTo(25.7,32.6,25.1,31.9).curveTo(24.4,31,24.3,30.5).curveTo(23.6,30.3,22.6,30).curveTo(22.6,30.1,22.6,30.2).curveTo(22.6,31.1,22,31.4).curveTo(21.8,31.5,21.6,31.6).curveTo(20.8,31.7,19.2,31.7).curveTo(18.6,31.7,18.1,31.7).curveTo(10.8,31.6,8.3,30.4).curveTo(6.3,31.2,0.6,31.5).curveTo(0.6,31.6,0.6,31.7).curveTo(0.6,32.7,-0,32.9).curveTo(-0.8,33.2,-3.5,33.2).curveTo(-6.6,33.2,-7.4,32.4).curveTo(-7.6,31.8,-7.6,31.7).curveTo(-7.9,31.7,-8.1,31.7).curveTo(-9.3,31.7,-9.9,31.3).curveTo(-10.1,31.3,-10.3,31.4).curveTo(-12,32.1,-14.9,32.2).curveTo(-15.4,32.9,-16.9,32.9).curveTo(-19.4,32.9,-21.8,32.2).curveTo(-24,31.5,-24.3,30.7).curveTo(-25.3,30.7,-26.5,30.7).curveTo(-26.8,30.7,-27.8,30.9).curveTo(-28.7,31.2,-29,31.2).curveTo(-30.1,31.2,-30.5,30.4).curveTo(-30.6,30.1,-30.6,29.6).curveTo(-30.6,28.3,-28.9,27.7).curveTo(-29.8,27.6,-30.2,26.9).curveTo(-30.4,26.5,-30.4,26.1).curveTo(-30.4,25,-28.8,24.4).curveTo(-29.1,24.3,-29.3,24.3).curveTo(-30,24.1,-30.1,23.2).lineTo(-30.1,23.2).curveTo(-31.1,23.2,-31.4,22.4).curveTo(-31.6,22.1,-31.6,21.7).curveTo(-31.6,20.2,-31.6,20.1).curveTo(-31.6,18.8,-31.1,17.6).curveTo(-30.5,16.1,-29.2,14.9).curveTo(-29.6,11.9,-29.6,11.5).curveTo(-29.6,11.1,-29.5,10.9).curveTo(-30.6,9.2,-31.1,5.2).curveTo(-31.1,5,-31.1,4.8).curveTo(-31.5,1.1,-31.4,-2.7).curveTo(-31.4,-2.8,-31.3,-4.6).curveTo(-31.3,-4.8,-31.3,-5).curveTo(-31.1,-7.1,-31.1,-8.1).curveTo(-31.1,-9.5,-30.3,-10.3).curveTo(-30.6,-13.2,-30.6,-16.5).curveTo(-30.6,-20.8,-30.4,-22.5).curveTo(-30.3,-22.8,-30.3,-23).curveTo(-29.8,-24.6,-28.5,-25.8).curveTo(-26.8,-27.3,-26.8,-24.5).lineTo(-26.9,-23).curveTo(-27.1,-21.1,-27.5,-16.5).curveTo(-27.5,-14.9,-27.4,-13.2).curveTo(-26.9,-14.1,-26,-15.3).curveTo(-27,-15.7,-27.3,-16.1).curveTo(-27.4,-16.3,-27.4,-16.8).curveTo(-27.4,-18.1,-22.5,-19.3).curveTo(-21.8,-19.8,-21.3,-19.5).curveTo(-21.1,-19.6,-20.9,-19.6).curveTo(-21,-19.7,-21.2,-19.7).lineTo(-25.4,-19.7).curveTo(-26.5,-20.1,-26.8,-20.6).curveTo(-26.9,-20.8,-26.9,-21.3).curveTo(-26.9,-22.7,-25.6,-22.8).curveTo(-25.6,-22.9,-25.6,-23).lineTo(-25.6,-23.1).curveTo(-25.6,-24.4,-22.1,-25.1).curveTo(-20.3,-25.4,-19.1,-25.6).closePath().moveTo(19.5,-20.3).curveTo(20.4,-20.5,21.1,-20.5).curveTo(21.6,-21.3,22.4,-22.6).curveTo(20.8,-22,20.6,-22).lineTo(18.7,-22).curveTo(18.5,-21.7,18.1,-21.4).curveTo(18.9,-20.8,19.5,-20.3).closePath().moveTo(17.4,-16.9).curveTo(17,-16.8,16.6,-16.7).lineTo(15.4,-16.7).curveTo(15.4,-16.5,15.4,-16.2).curveTo(15.4,-15.8,15,-15.4).curveTo(16.5,-16.4,17.4,-16.6).curveTo(17.4,-16.7,17.4,-16.9).closePath().moveTo(25.4,-20.8).curveTo(25.2,-21.5,25.1,-22.1).curveTo(25.1,-21.1,25.1,-20.3).curveTo(25.3,-20.3,25.6,-20.2).curveTo(25.5,-20.5,25.4,-20.8).closePath().moveTo(8.1,-16.7).curveTo(8.4,-16.6,8.6,-16.3).lineTo(9.4,-15.8).curveTo(10,-15.8,11.6,-16.7).closePath().moveTo(10.6,-22.6).lineTo(2.3,-22.7).curveTo(1.1,-21.5,-1.6,-19.7).curveTo(-1.1,-19.8,-0.6,-19.8).lineTo(-0.3,-19.8).curveTo(0.7,-20,1.6,-20.1).lineTo(2.1,-20.1).curveTo(4.5,-20.9,8.4,-21.9).curveTo(9.6,-22.3,10.6,-22.5).curveTo(10.6,-22.6,10.6,-22.6).closePath().moveTo(14.4,-15).curveTo(13.1,-14.5,12.1,-13.7).curveTo(12.3,-13.5,12.3,-13.2).curveTo(13.6,-14.4,14.6,-15.1).curveTo(14.5,-15.1,14.4,-15).closePath().moveTo(14.3,-10.4).curveTo(14.5,-10.3,14.6,-10.1).curveTo(15.2,-10.5,15.8,-10.8).lineTo(15.8,-10.8).curveTo(15.9,-11,15.9,-11.3).curveTo(16,-11.7,16.1,-12).curveTo(15.6,-11.7,15.1,-11.3).curveTo(14.6,-10.9,14.1,-10.6).curveTo(14.3,-10.5,14.3,-10.4).closePath().moveTo(10.4,-7.9).curveTo(10.6,-8,10.9,-8.1).lineTo(10.3,-8.3).curveTo(10.4,-8.1,10.4,-8).curveTo(10.4,-7.9,10.4,-7.9).closePath().moveTo(23.8,-13.2).curveTo(23.8,-13.8,23.8,-14.4).curveTo(23.6,-14.3,23.5,-14.2).curveTo(23.6,-13.8,23.8,-13.2).closePath().moveTo(19.2,-7.6).lineTo(21.3,-7.6).lineTo(21.3,-8.6).curveTo(21.3,-10,20.8,-11.5).curveTo(20.4,-10.7,20.1,-10).curveTo(19.7,-9.3,19.4,-8.8).curveTo(19.3,-8.4,19,-8.1).curveTo(18.9,-7.9,18.8,-7.8).curveTo(19,-7.7,19.2,-7.6).closePath().moveTo(23.2,0.7).lineTo(23.3,-1.9).curveTo(23.3,-2.5,23.1,-3.7).curveTo(22.6,-3.5,22,-3.5).curveTo(21.7,-3.5,21.4,-3.5).curveTo(23.1,-3,23.1,0.7).closePath().moveTo(18.6,-3).curveTo(16.8,-1,11.9,2.4).curveTo(11.4,2.8,10.9,3.1).curveTo(11.5,2.9,12.1,2.7).curveTo(13.4,2.2,14.4,2).curveTo(17.2,-0.7,20.1,-3).closePath().moveTo(18.2,5.2).curveTo(16.6,7,14.3,9.3).lineTo(17,9.2).curveTo(17.1,9,17.3,8.8).curveTo(19.1,6.6,19.6,4.6).curveTo(19,4.9,18.2,5.2).closePath().moveTo(24,7.8).curveTo(24.1,7.8,24.1,7.8).curveTo(24.2,7.6,24.3,7.4).lineTo(24.3,7.2).curveTo(24.1,7.5,24,7.8).closePath().moveTo(10.3,-3).curveTo(10.1,-2.9,10.1,-2.9).curveTo(11.8,-2.9,13,-2.7).curveTo(13.1,-2.8,13.3,-3).closePath().moveTo(14.4,12.4).lineTo(13.8,12.4).curveTo(13.3,13,12.1,13.1).curveTo(10.7,13.2,9.6,13.3).curveTo(8.6,14.1,8.2,14.2).curveTo(8.3,14.2,8.4,14.4).curveTo(8.6,14.2,9,14.1).curveTo(12.1,12.8,13.6,13.1).curveTo(14,12.7,14.4,12.4).closePath().moveTo(8.1,8.8).curveTo(8.3,8.5,8.6,8.2).curveTo(8,8.5,7.3,8.7).curveTo(7.6,8.8,8.1,8.8).closePath().moveTo(15,20).curveTo(14.1,20.4,13.5,20.7).curveTo(13.6,20.7,13.9,20.8).curveTo(14.4,21.1,14.9,21.4).curveTo(14.6,20.6,14.9,20.2).closePath().moveTo(16,16).curveTo(18.6,14.4,22.3,11.6).curveTo(21.4,11.9,20.3,12.2).curveTo(19.6,12.6,18.8,12.9).curveTo(18.6,13.5,17.9,14.2).curveTo(16.6,15.3,16.1,15.9).closePath().moveTo(24,17.2).curveTo(23.9,17.1,23.8,16.9).curveTo(23.3,17.4,22.7,17.9).curveTo(21.5,19,20.6,19.9).curveTo(22.1,19.6,22.8,20.2).curveTo(23.4,18.7,23.4,18.7).curveTo(23.6,17.9,24,17.2).closePath().moveTo(3.6,-16.6).curveTo(5.1,-16.4,5.9,-16).curveTo(6.5,-16.5,6.9,-16.7).closePath().moveTo(-5.2,-21.2).lineTo(-9,-20.6).lineTo(-7.6,-20.6).curveTo(-7,-20.6,-6.4,-20.6).curveTo(-5.5,-21,-5.2,-21.2).closePath().moveTo(-5,-11.6).curveTo(-5.3,-11.1,-5.9,-10.5).curveTo(-5.3,-10,-4.5,-9.3).curveTo(-3.8,-8.6,-3,-7.8).curveTo(-1.6,-8.5,-0.1,-9).curveTo(-0.9,-9.4,-1,-9.4).curveTo(-3.5,-9.5,-4.3,-10.1).curveTo(-4.9,-10.5,-4.9,-11.3).curveTo(-4.9,-11.5,-4.8,-11.7).curveTo(-4.9,-11.7,-5,-11.6).closePath().moveTo(-10.6,-7.3).curveTo(-10.8,-7.2,-11,-7.1).curveTo(-9.2,-7,-6.6,-6.7).curveTo(-7.4,-7.6,-8.3,-8.6).curveTo(-9.3,-8,-10.6,-7.3).closePath().moveTo(2.8,-12).curveTo(2.8,-12.5,3.4,-13.3).curveTo(1.9,-13.5,-0.4,-13.8).curveTo(-1.3,-13.3,-2.4,-12.8).curveTo(-2.4,-12.8,-2.5,-12.7).curveTo(-1.3,-12.6,0.5,-12.1).curveTo(1.8,-11.7,2.8,-11.2).curveTo(2.8,-11.5,2.8,-12).closePath().moveTo(3.1,-7.2).curveTo(2.1,-6.9,1.2,-6.4).curveTo(2.1,-6.6,2.9,-6.7).curveTo(3,-6.9,3.1,-7.2).closePath().moveTo(-16.1,-22.8).curveTo(-14.9,-22.7,-13.9,-22).curveTo(-13.4,-22.5,-12.3,-22.9).lineTo(-17.1,-22.9).lineTo(-17.4,-22.8).closePath().moveTo(-24.1,-12.1).curveTo(-23.8,-12.5,-23.3,-13.2).curveTo(-22.4,-14.8,-21.4,-14.8).curveTo(-20.3,-14.8,-19.9,-13.9).lineTo(-19.9,-13.8).curveTo(-19.1,-14.4,-16.9,-15.2).lineTo(-19.1,-15).curveTo(-20.1,-15,-20.4,-15.6).curveTo(-20.5,-15.6,-20.6,-15.5).curveTo(-21.6,-15.2,-22.2,-15).curveTo(-22.4,-14.7,-22.8,-14.3).curveTo(-23.5,-13.2,-24.5,-12).curveTo(-24.3,-12,-24.1,-12.1).closePath().moveTo(-23.8,-5.8).curveTo(-23.9,-6.1,-23.9,-6.3).curveTo(-23.9,-7,-20.8,-8.9).curveTo(-21,-8.8,-21.4,-8.6).curveTo(-23.9,-7.5,-25.1,-7.5).curveTo(-26,-7.5,-26.6,-7.6).curveTo(-26.5,-6.8,-26.4,-5.8).closePath().moveTo(-20.1,-2.5).curveTo(-20.1,-2.6,-20.1,-2.7).lineTo(-21.1,-2.7).curveTo(-21,-2.4,-21,-2).curveTo(-21,-1.7,-21.8,-0.3).curveTo(-21.1,0.1,-20.4,0.7).lineTo(-20.4,0.7).curveTo(-20.4,-0.7,-18.9,-0.9).curveTo(-19.8,-1.3,-20,-1.8).curveTo(-20.1,-2,-20.1,-2.5).closePath().moveTo(-21.5,3.9).curveTo(-22.4,3.1,-23.3,2.4).curveTo(-23.9,3.5,-24.4,4.2).curveTo(-23.8,4.4,-22.9,4.7).curveTo(-21.6,5.3,-20.6,5.8).curveTo(-20.5,5.3,-20.3,5).curveTo(-20.9,4.5,-21.5,3.9).closePath().moveTo(-14.9,5.3).lineTo(-16.1,4.5).curveTo(-15.5,5,-14.9,5.6).curveTo(-14.9,5.4,-14.9,5.3).closePath().moveTo(-25.2,-1.8).curveTo(-25,-2.3,-24.6,-2.7).lineTo(-26.1,-2.7).curveTo(-26.1,-1.8,-26.1,-0.8).curveTo(-25.9,-1.7,-25.2,-1.8).closePath().moveTo(-25.8,0.1).curveTo(-25.9,-0.1,-26.1,-0.2).curveTo(-26.1,0.2,-26,0.7).curveTo(-25.9,0.3,-25.8,0.1).closePath().moveTo(-26.3,12.4).lineTo(-25.8,16.3).curveTo(-25.6,16.3,-25.4,16.3).curveTo(-25.4,16.2,-25.4,16.1).curveTo(-25.4,15.2,-23.4,14.7).curveTo(-24.2,13.9,-25.1,12.6).curveTo(-25.1,12.5,-25.1,12.4).closePath().moveTo(-28.5,19.4).curveTo(-28.5,19.8,-28.3,21.5).curveTo(-28.4,20.5,-28.4,20).curveTo(-28.5,19.7,-28.5,19.4).closePath().moveTo(-18.1,13.6).curveTo(-18.1,13.2,-17,12.3).lineTo(-20.9,12.4).curveTo(-19.9,13.1,-19.6,14.1).curveTo(-19.4,14,-19.2,14).curveTo(-18.6,14,-18.1,14).curveTo(-18.1,13.8,-18.1,13.6).closePath().moveTo(-19.8,17.6).curveTo(-20.3,17.6,-20.8,17.6).curveTo(-20.3,17.8,-19.6,18.1).curveTo(-19.8,17.9,-19.8,17.6).closePath().moveTo(-16.9,18.6).lineTo(-16.8,18.4).curveTo(-17.5,18.7,-18.1,18.8).curveTo(-17.7,18.9,-17.3,19.1).curveTo(-17.1,18.8,-16.9,18.6).closePath().moveTo(-25.4,19.3).curveTo(-25.3,20.1,-25.1,21).curveTo(-25.1,21.1,-25.1,21.2).curveTo(-24.3,21.2,-23.2,21.2).curveTo(-23.1,21.2,-23.1,21.2).curveTo(-22.6,20.9,-22.2,20.6).curveTo(-23.8,19.9,-25.4,19.3).closePath().moveTo(-26.3,9.4).curveTo(-24.8,9.2,-21.9,9.2).curveTo(-23.6,8.2,-26.1,6.6).curveTo(-26.2,8,-26.3,9.4).closePath().moveTo(4.8,-3).lineTo(3.7,-3).curveTo(0.2,-2.5,-4.8,-1.9).curveTo(-4.6,-1.8,-4.5,-1.6).curveTo(-3.4,-1.5,-2.4,-1.3).curveTo(-0.6,-2,4,-2.4).curveTo(4.4,-2.7,4.8,-3).closePath().moveTo(4.5,1.9).curveTo(4.8,2.2,4.9,2.9).curveTo(4.9,2.9,5,2.8).curveTo(7.6,1.3,9.1,0.4).lineTo(5.6,0.7).curveTo(5.1,1.2,4.5,1.9).closePath().moveTo(-7,1.1).curveTo(-6.8,1.6,-6.5,1.9).curveTo(-5.4,2.6,-4.3,3.4).curveTo(-5.1,2.5,-5.9,1.4).curveTo(-6.2,1.3,-6.4,1.2).curveTo(-6.8,1.1,-7,1.1).closePath().moveTo(-12.8,-1.7).lineTo(-13.3,-1.7).curveTo(-13.3,-1.6,-13.1,-1.5).curveTo(-12.9,-1.6,-12.8,-1.7).closePath().moveTo(-9.8,5.5).curveTo(-9.8,7.5,-12.1,7.1).curveTo(-12.2,7.3,-12.1,8.3).curveTo(-11.9,8.4,-11.8,8.4).curveTo(-11.3,8.1,-10.6,7.9).curveTo(-8.1,7,-6.1,6.2).curveTo(-7.4,5.1,-9,3.4).curveTo(-9.1,3.5,-9.1,3.6).curveTo(-9.8,4.5,-9.8,5.5).closePath().moveTo(-4.4,9.1).curveTo(-5.3,9.5,-6.1,9.9).curveTo(-3.8,10.5,-2.4,11.1).curveTo(-1.6,11.1,-0.6,11).curveTo(-0.8,10.8,-0.9,10.6).curveTo(-1,9.7,-1,9.7).curveTo(-1,9.6,-0.9,9.5).curveTo(-2.2,9.7,-3.1,9.7).curveTo(-4,9.7,-4.4,9.1).closePath().moveTo(-12.6,13.8).curveTo(-12,14.2,-10.1,15.1).curveTo(-9.4,15.5,-9.3,16.2).curveTo(-6.8,15.2,-4.5,14.7).curveTo(-3.9,14.5,-3.3,14.4).curveTo(-6.5,14.7,-9.1,14.7).curveTo(-11.4,14.7,-12.1,13.8).curveTo(-12.3,13.7,-12.3,13.5).curveTo(-12.4,13.6,-12.4,13.7).closePath().moveTo(6.6,13.7).curveTo(6.8,13.7,6.9,13.7).lineTo(6.9,13.7).curveTo(6.8,13.7,6.6,13.7).closePath().moveTo(4.8,20.1).curveTo(5.7,19.7,7.1,19.4).curveTo(7.3,19,8.9,17.4).curveTo(7.3,18.1,5.1,19.1).curveTo(5.1,19.5,4.9,19.9).curveTo(4.8,20,4.8,20.1).closePath().moveTo(3.5,20.7).curveTo(2.9,20.6,2.5,20.3).curveTo(1.6,20.6,0.6,21.1).curveTo(-1.1,21.8,-2.6,22.5).curveTo(-0.4,22.2,1.4,21.8).lineTo(2.8,21.8).lineTo(2.8,21.6).curveTo(2.8,21.1,3.5,20.7).closePath().moveTo(-11.8,22.5).curveTo(-10.9,22.1,-9.8,21.7).curveTo(-9.5,21.5,-9.1,21.4).curveTo(-9.4,21.5,-9.6,21.5).curveTo(-10.9,21.9,-11.9,22.2).curveTo(-11.8,22.3,-11.8,22.4).curveTo(-11.8,22.5,-11.8,22.5).closePath().moveTo(-12.5,28.6).curveTo(-12.4,28.4,-12.3,28.2).lineTo(-15.7,28.2).curveTo(-14.5,28.9,-14.4,28.9).curveTo(-14.1,28.9,-12.8,28.6).curveTo(-12.6,28.6,-12.5,28.6).closePath().moveTo(-23.1,24.7).curveTo(-23.1,24.8,-23.1,24.9).curveTo(-22.9,24.8,-22.8,24.7).curveTo(-22.8,24.7,-22.9,24.7).curveTo(-23,24.7,-23.1,24.7).closePath().moveTo(-27.7,27.4).lineTo(-27.7,27.3).curveTo(-27.9,27.4,-28.2,27.5).curveTo(-27.9,27.4,-27.7,27.4).closePath().moveTo(9.8,22.6).curveTo(9.8,22.4,9.9,22.2).curveTo(9.5,22.3,9.1,22.4).curveTo(9.4,22.5,9.5,22.7).curveTo(9.6,22.9,9.6,23.4).curveTo(9.6,23.5,9.6,23.6).curveTo(9.9,23.6,10.1,23.6).curveTo(9.8,23.2,9.8,22.6).closePath();
	this.shape_295.setTransform(33.4,28.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#2F5B13").beginStroke().moveTo(-21.4,-2.2).curveTo(-21.3,-2.9,-20.4,-3.3).curveTo(-19.3,-3.8,-19.3,-2.8).curveTo(-19.3,-2.7,-19.4,-2.5).curveTo(-19.6,-2.2,-19.9,-1.8).curveTo(-20.4,-1.1,-20.7,-1.1).curveTo(-21.6,-1.1,-21.5,-1.9).curveTo(-21.5,-2.1,-21.4,-2.2).closePath().moveTo(-4.2,-2.5).curveTo(-4.1,-2.3,-4.1,-2).curveTo(-4.1,-1.4,-4.2,-1.3).curveTo(-4.3,-0.9,-4.9,-0.7).lineTo(-5.6,-0.9).curveTo(-5.6,-1.2,-5.8,-1.9).curveTo(-5.8,-2,-5.8,-2).curveTo(-6,-2.6,-6,-2.9).curveTo(-6,-3.7,-5.1,-3.4).curveTo(-4.3,-3.2,-4.2,-2.5).closePath().moveTo(11.3,-2.7).curveTo(11.3,-2.3,11.1,-1.9).curveTo(10.8,-1.3,10.4,-1.3).curveTo(9.7,-1.3,9.6,-1.7).curveTo(9.5,-1.9,9.6,-2.2).curveTo(9.6,-2.4,9.6,-2.5).curveTo(9.7,-3.7,10.5,-3.9).curveTo(11.3,-4.2,11.3,-2.8).curveTo(11.3,-2.8,11.3,-2.7).closePath().moveTo(24.7,-2.6).curveTo(24.3,-2.3,23.7,-1.7).curveTo(22.2,-0.3,21.9,-0.3).curveTo(21.4,-0.3,21.2,-0.7).curveTo(21.1,-0.9,21.2,-1.1).lineTo(22.4,-2.6).lineTo(23.1,-3.4).curveTo(25.1,-5.3,25.1,-3.3).curveTo(25.1,-3.2,24.7,-2.6).closePath().moveTo(29.4,0.4).curveTo(29.4,1.1,28.3,1.1).curveTo(26.2,1.1,24.7,0.6).curveTo(23.6,0.3,23.6,0).curveTo(23.6,-1.3,26.5,-0.8).curveTo(29.4,-0.3,29.4,0.4).closePath().moveTo(17.2,0.5).curveTo(17.1,0.3,17.1,0.1).curveTo(17.1,-1.3,19.5,-1).curveTo(20.3,-0.7,20.3,-0.2).curveTo(20.3,0.1,19.7,0.5).curveTo(19,0.9,17.9,0.9).curveTo(17.3,0.9,17.2,0.5).closePath().moveTo(17.6,-2.1).curveTo(17.6,-1.5,17.6,-1.3).curveTo(17.4,-0.7,16.9,-0.7).curveTo(16.2,-0.7,16.1,-1.4).curveTo(16,-1.8,16.1,-2.1).lineTo(16.1,-2.2).curveTo(16.1,-3.8,16.9,-3.8).curveTo(17.6,-3.9,17.6,-2.2).curveTo(17.6,-2.2,17.6,-2.1).closePath().moveTo(10,0.1).curveTo(9.7,-0.1,9.8,-0.4).curveTo(9.8,-1.3,11.6,-1.1).curveTo(13.4,-1,13.4,-0.2).curveTo(13.4,0.5,12.3,0.5).curveTo(10.6,0.5,10,0.1).closePath().moveTo(5.1,0).curveTo(5.1,-2.3,8.3,1.2).curveTo(8.3,1.5,8.1,1.7).curveTo(7.8,1.9,7.5,1.9).curveTo(6.7,1.9,5.8,0.9).curveTo(5.4,0.4,5.1,0).closePath().moveTo(3.8,-0.2).curveTo(3.8,0.1,3.5,0.3).curveTo(3.3,0.5,3.1,0.5).lineTo(1.4,0.5).curveTo(1.2,0.3,0.9,0.1).curveTo(0.7,-0,0.7,-0.2).curveTo(0.7,-0.6,1,-0.8).curveTo(1.5,-1,3.1,-1).curveTo(3.8,-0.7,3.8,-0.2).closePath().moveTo(0.4,-2.3).curveTo(0.2,-1.9,-0.2,-1.4).curveTo(-1.4,0.3,-1.4,0.3).curveTo(-2.3,0.3,-2.2,-0.5).curveTo(-2.2,-1.4,-1.4,-2.5).curveTo(-1.1,-2.9,-0.6,-3.4).curveTo(1,-5.2,1,-3.4).curveTo(1,-3.2,0.4,-2.3).closePath().moveTo(-1.8,1.8).curveTo(-1.6,1.4,-1.1,1.3).curveTo(-0.3,1.1,-0.2,2.1).lineTo(-0.2,2.2).curveTo(-0.2,2.9,-1.2,3.5).lineTo(-1.9,3.3).lineTo(-2,2.7).curveTo(-2,2.2,-1.8,1.8).closePath().moveTo(-8.5,1.5).curveTo(-8.3,1.1,-7.9,0.8).curveTo(-6.7,-0.2,-6.7,1.2).curveTo(-6.7,1.3,-6.8,1.5).curveTo(-6.9,2,-7.4,2.9).curveTo(-8,4.3,-8.3,4.3).curveTo(-9.3,4.3,-9.1,3.4).curveTo(-9.1,2.4,-8.5,1.5).closePath().moveTo(-11.2,-1.5).curveTo(-11.3,-1.2,-11.4,-0.9).curveTo(-11.9,0.3,-12.5,0.3).curveTo(-13.3,0.3,-13.3,-0.4).curveTo(-13,-1,-12.8,-1.5).curveTo(-11,-5.1,-11,-2.4).curveTo(-11,-2.1,-11.2,-1.5).closePath().moveTo(-15.2,1.8).curveTo(-15.7,1.1,-16.2,0.4).curveTo(-16.2,-1.4,-14.5,0.3).curveTo(-13.8,1,-13.4,1.6).curveTo(-12.8,2.4,-12.8,2.8).curveTo(-12.8,3.5,-13.7,3.5).curveTo(-14,3.5,-15.1,1.9).curveTo(-15.2,1.9,-15.2,1.8).closePath().moveTo(-20.5,1.4).curveTo(-20.4,1,-19.9,0.9).curveTo(-19.4,0.8,-19.2,1.3).curveTo(-19.1,1.6,-19.1,2).curveTo(-19.1,2.9,-19.9,3.1).lineTo(-20.6,2.9).lineTo(-20.7,2).curveTo(-20.7,1.7,-20.5,1.4).closePath().moveTo(-23.2,-1.6).curveTo(-23.1,-1.3,-23,-1.1).curveTo(-23,-0.7,-23.4,0).curveTo(-23.8,0.9,-24.4,0.9).curveTo(-25.2,0.9,-25.1,0.1).lineTo(-25,-1.5).lineTo(-24.9,-3.2).curveTo(-24.9,-5.9,-23.2,-1.6).closePath().moveTo(-27.5,-1.5).lineTo(-27.5,-1.4).curveTo(-27.5,-0.5,-28.2,-0.5).curveTo(-28.9,-0.5,-29.2,-1.5).curveTo(-29.3,-1.8,-29.4,-2.1).curveTo(-29.4,-3.3,-28.4,-2.8).curveTo(-27.5,-2.3,-27.5,-1.5).closePath();
	this.shape_296.setTransform(31.4,0);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#418316").beginStroke().moveTo(-23,-2).curveTo(-22.4,-2.1,-21.7,-2.4).curveTo(-21.5,-2.5,-21.2,-2.6).curveTo(-21.3,-2.5,-21.3,-2.3).curveTo(-21.4,-1.5,-20.5,-1.5).curveTo(-20.2,-1.5,-19.7,-2.2).curveTo(-19.4,-2.6,-19.2,-2.9).curveTo(-18.6,-2.8,-17,-2.6).curveTo(-14.8,-2.3,-13.6,-1.9).lineTo(-12.6,-1.9).curveTo(-12.8,-1.4,-13.1,-0.8).curveTo(-13.1,-0.1,-12.3,-0.1).curveTo(-11.7,-0.1,-11.2,-1.3).curveTo(-11.1,-1.6,-11,-1.9).lineTo(-7.3,-1.9).curveTo(-6.4,-2.2,-5.6,-2.4).curveTo(-5.6,-2.4,-5.6,-2.3).curveTo(-5.4,-1.6,-5.4,-1.3).lineTo(-4.7,-1.1).curveTo(-4.1,-1.3,-4,-1.7).curveTo(-3.9,-1.8,-3.9,-2.4).curveTo(-3.9,-2.7,-4,-2.9).curveTo(-3.4,-3,-3,-3).curveTo(-2.6,-3,-1.2,-2.9).curveTo(-2,-1.8,-2,-0.9).curveTo(-2.1,-0.1,-1.2,-0.1).curveTo(-1.2,-0.1,0,-1.8).curveTo(0.4,-2.3,0.6,-2.7).curveTo(2.5,-2.5,5.5,-2.1).curveTo(6.9,-2.1,8.3,-2.6).curveTo(9,-2.8,9.8,-2.9).curveTo(9.8,-2.8,9.8,-2.6).curveTo(9.7,-2.3,9.8,-2.1).curveTo(9.9,-1.7,10.6,-1.7).curveTo(11,-1.7,11.3,-2.3).curveTo(11.5,-2.7,11.5,-3).curveTo(11.6,-3,11.8,-3).curveTo(13.3,-3,13.6,-3).curveTo(13.8,-2.9,14.4,-2.5).lineTo(16.3,-2.5).curveTo(16.2,-2.2,16.3,-1.8).curveTo(16.4,-1.1,17.1,-1.1).curveTo(17.6,-1.1,17.8,-1.7).curveTo(17.8,-1.9,17.8,-2.5).lineTo(20.9,-2.5).curveTo(21.5,-2.9,22.6,-3).lineTo(21.4,-1.5).curveTo(21.3,-1.3,21.4,-1.1).curveTo(21.6,-0.7,22.1,-0.7).curveTo(22.4,-0.7,23.9,-2.1).curveTo(24.5,-2.7,24.9,-3).curveTo(27.1,-2.9,29.5,-2).curveTo(32.1,-0.9,32.1,-0.2).curveTo(32.1,0.2,31.8,0.6).curveTo(31.6,0.9,31.2,1).curveTo(31.2,1,31.1,1.1).curveTo(31.1,1.4,30.9,1.7).curveTo(30.5,2.3,29.8,2.3).lineTo(29.7,2.2).curveTo(28.9,2,24.4,0.2).curveTo(23.6,0.2,21.8,0.7).curveTo(19.9,1.3,13.2,1.3).curveTo(11.4,1.3,10.7,1.6).curveTo(9.9,1.8,8.1,1.8).curveTo(6,1.8,5.1,1.6).curveTo(4.6,1.3,4.5,1.3).curveTo(3,1.3,2.6,1.6).curveTo(2.1,1.8,1.2,1.8).curveTo(0.8,1.8,-0,1.7).curveTo(-0.1,0.7,-0.9,0.9).curveTo(-1.4,1,-1.6,1.5).curveTo(-2.6,1.2,-2.7,1.1).lineTo(-6.6,1.1).curveTo(-6.5,0.9,-6.5,0.8).curveTo(-6.5,-0.6,-7.7,0.4).curveTo(-8.1,0.7,-8.3,1.1).lineTo(-13,1.1).curveTo(-13.1,1.1,-13.2,1.2).curveTo(-13.6,0.6,-14.3,-0.1).curveTo(-16,-1.8,-16,0).curveTo(-15.5,0.7,-15,1.4).curveTo(-15.5,1.4,-16.1,1.3).curveTo(-18.1,1.2,-18.8,0.9).lineTo(-19,0.9).curveTo(-19.2,0.4,-19.7,0.5).curveTo(-20.2,0.6,-20.3,1.1).lineTo(-27.1,1.1).curveTo(-27.4,1.3,-28.9,2.2).curveTo(-29.4,2.4,-29.7,2.6).curveTo(-30.5,3,-30.8,3).curveTo(-31.3,3,-31.6,2.9).curveTo(-32.2,2.6,-32.1,1.8).curveTo(-32.1,1.6,-31.9,1.2).curveTo(-32.1,0.7,-32.1,0.4).curveTo(-32.1,-0.4,-31.7,-0.7).curveTo(-31.4,-1.6,-30,-1.8).curveTo(-29.8,-1.9,-29,-1.9).curveTo(-28.7,-0.9,-28,-0.9).curveTo(-27.3,-0.9,-27.3,-1.8).lineTo(-27.3,-1.9).curveTo(-26.2,-1.9,-24.8,-1.9).lineTo(-24.9,-0.3).curveTo(-25,0.6,-24.2,0.6).curveTo(-23.6,0.6,-23.2,-0.4).curveTo(-22.8,-1.1,-22.8,-1.5).curveTo(-22.9,-1.7,-23,-2).closePath().moveTo(4,-0.6).curveTo(4,-1.1,3.3,-1.4).curveTo(1.7,-1.4,1.2,-1.2).curveTo(0.9,-1,0.9,-0.6).curveTo(0.9,-0.4,1.1,-0.3).curveTo(1.4,-0.1,1.6,0.1).lineTo(3.3,0.1).curveTo(3.5,0.1,3.7,-0.1).curveTo(4,-0.3,4,-0.6).closePath().moveTo(5.3,-0.4).curveTo(5.6,0,6,0.6).curveTo(6.9,1.6,7.7,1.6).curveTo(8,1.6,8.3,1.3).curveTo(8.5,1.1,8.5,0.8).curveTo(5.3,-2.7,5.3,-0.4).closePath().moveTo(10.2,-0.3).curveTo(10.8,0.1,12.5,0.1).curveTo(13.6,0.1,13.6,-0.6).curveTo(13.6,-1.4,11.8,-1.5).curveTo(10,-1.7,10,-0.8).curveTo(9.9,-0.5,10.2,-0.3).closePath().moveTo(17.4,0.1).curveTo(17.5,0.6,18.1,0.6).curveTo(19.2,0.6,19.9,0.1).curveTo(20.5,-0.3,20.5,-0.6).curveTo(20.5,-1.1,19.7,-1.4).curveTo(17.3,-1.7,17.3,-0.3).curveTo(17.3,-0.1,17.4,0.1).closePath().moveTo(29.6,0).curveTo(29.6,-0.7,26.7,-1.2).curveTo(23.8,-1.7,23.8,-0.4).curveTo(23.8,-0.1,24.9,0.2).curveTo(26.4,0.7,28.5,0.7).curveTo(29.6,0.7,29.6,0).closePath();
	this.shape_297.setTransform(31.2,0.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#703A23").beginStroke().moveTo(22.8,-13.4).curveTo(19.1,-12.5,18.6,-12.2).curveTo(17.9,-11.6,18.1,-9.8).curveTo(18.3,-8.3,17.4,-8.3).curveTo(16.8,-8.3,16.5,-9.6).curveTo(16.4,-10.3,16.4,-11).curveTo(16.4,-12.7,18.4,-13.8).curveTo(20.2,-14.7,24.1,-15.3).lineTo(24.3,-15.4).curveTo(23.8,-16.2,22.8,-17.6).curveTo(21.7,-19,21,-19.6).curveTo(20,-20.6,17.1,-21.8).curveTo(14.7,-22.8,14.7,-23).curveTo(14.7,-25.6,20.4,-21.6).curveTo(26,-17.5,26,-14.7).curveTo(26,-14.1,22.8,-13.4).closePath().moveTo(23.4,-1.1).curveTo(22.5,1.3,22.5,3.7).curveTo(22.5,6,25.3,8.3).curveTo(28.1,10.6,28.1,13.2).curveTo(28.1,14.2,28,14.6).curveTo(27.6,15.2,26.2,16.3).curveTo(22.8,18.9,22.8,19.1).curveTo(22.8,21.7,24.3,23.6).curveTo(25.8,25.5,25.8,26.2).curveTo(25.8,27.1,24.9,27.1).curveTo(24.2,27.1,24.1,26.6).curveTo(24.1,26.2,24.1,26.1).curveTo(24.1,26,20.3,19.3).curveTo(20.3,19.1,23.4,16.6).curveTo(26.6,14.2,26.6,13.1).curveTo(26.6,11.3,23.7,9).curveTo(20.9,6.7,20.9,3.7).curveTo(20.9,0.7,22.7,-2.5).curveTo(24.4,-5.7,24.4,-3.6).curveTo(24.4,-3.5,23.4,-1.1).closePath().moveTo(8.5,-3.5).curveTo(8.8,-2.9,8.8,-2.3).curveTo(8.8,-1.6,8.7,-1.4).curveTo(8.6,-0.9,8,-0.9).curveTo(7.2,-0.9,7.2,-1.6).curveTo(7.2,-2,7.2,-2.6).curveTo(6.6,-3.7,6.6,-4.4).curveTo(6.6,-5.6,7.9,-8.5).curveTo(8.7,-10,9.9,-12.4).curveTo(7.1,-13.5,3.9,-15.9).curveTo(0.6,-18.4,0.6,-19.9).curveTo(0.6,-21.6,2.6,-23.6).curveTo(4.6,-25.5,4.6,-23.6).curveTo(4.6,-23.2,3.4,-22.1).curveTo(2.1,-21.1,2.1,-19.9).curveTo(2.1,-18.9,6.9,-15.8).curveTo(11.7,-12.7,11.7,-12.7).curveTo(11.7,-12.6,9.9,-9.2).curveTo(8.2,-5.9,8.2,-4.5).curveTo(8.2,-4,8.5,-3.5).closePath().moveTo(10.2,12).curveTo(6.4,10.5,6.4,9.8).curveTo(6.4,8.5,11.2,10.6).curveTo(16.1,12.8,16.1,14.1).curveTo(16.1,15.2,13.2,17.7).curveTo(10.4,20.2,10.4,22.2).curveTo(10.4,22.7,10.6,25.2).curveTo(13.4,24.9,13.4,26).curveTo(13.4,26.9,11.1,26.9).curveTo(9.6,26.9,9.1,24.6).curveTo(8.9,22.2,8.9,22.2).curveTo(8.9,21.1,11,18.4).curveTo(13.6,15.4,14.5,14.2).curveTo(14.2,13.5,10.2,12).closePath().moveTo(-7,-23).curveTo(-7,-20.9,-5,-19).curveTo(-2.9,-17.1,-2.9,-15.1).curveTo(-2.9,-14.1,-2.9,-14).curveTo(-3.2,-13.1,-4.3,-13.1).curveTo(-5.1,-13.1,-5.1,-13.8).curveTo(-5.1,-13.9,-4.7,-14.5).curveTo(-4.4,-15.1,-4.4,-15.4).curveTo(-4.4,-16.3,-6.5,-18.3).curveTo(-8.6,-20.4,-8.6,-23.1).curveTo(-8.6,-24.6,-7.2,-26.3).curveTo(-5.8,-28,-5.8,-26.2).curveTo(-7,-23.5,-7,-23).closePath().moveTo(-11.1,-18.1).curveTo(-11.4,-18.1,-13.4,-19.1).curveTo(-14.4,-19.7,-15.3,-20.2).curveTo(-16.2,-20.2,-16.6,-19.3).curveTo(-16.9,-18.9,-17.2,-18.7).curveTo(-17.8,-16.3,-17.8,-15.7).curveTo(-17.8,-13.7,-16.3,-12.3).curveTo(-14.7,-10.9,-14.7,-10).curveTo(-14.7,-9.7,-16.3,-5.5).curveTo(-17.9,-1.3,-18,-1.3).curveTo(-18.7,-1.3,-18.8,-1.7).curveTo(-18.8,-2,-18.8,-2.3).curveTo(-18.8,-2.8,-16.3,-9.9).curveTo(-16.3,-10.1,-17.8,-12).curveTo(-19.4,-14,-19.4,-15.7).curveTo(-19.4,-17.6,-18.3,-19.1).curveTo(-18.4,-19.2,-18.4,-19.3).curveTo(-18.4,-24.8,-10.4,-18.8).curveTo(-10.4,-18.1,-11.1,-18.1).closePath().moveTo(-26.7,-22.4).curveTo(-25.3,-19.4,-25.3,-18.1).curveTo(-25.3,-17.6,-26,-15.7).curveTo(-26.6,-13.7,-26.9,-13.7).curveTo(-28,-13.7,-27.7,-14.8).curveTo(-27.7,-15.6,-27.3,-16.5).curveTo(-26.9,-17.3,-26.9,-18).curveTo(-26.9,-18.4,-27.5,-20.2).curveTo(-28.1,-22,-28.1,-22.6).curveTo(-28.1,-25.4,-26.7,-22.4).closePath().moveTo(-27.1,-8).curveTo(-27.1,-10.6,-25.4,-6.8).curveTo(-23.7,-3.1,-23.7,-1).curveTo(-23.7,-0.4,-23.9,-0.2).curveTo(-24.1,0.2,-24.5,0.9).curveTo(-25.1,2.2,-25.1,2.7).curveTo(-25.1,2.9,-23.5,5.2).curveTo(-21.8,7.4,-21.8,9.4).curveTo(-21.8,10.7,-22.2,12.8).curveTo(-22.6,14.9,-22.6,16.6).curveTo(-22.6,17.5,-22.7,17.9).curveTo(-23,19.1,-24,19.1).curveTo(-24.9,19.1,-24.8,18.4).lineTo(-24.4,14.7).curveTo(-24.4,14.5,-23.9,12.3).curveTo(-23.4,10.2,-23.4,9.5).curveTo(-23.4,7.1,-25,5.5).curveTo(-26.7,4,-26.7,2.7).curveTo(-26.7,1.2,-25.3,-0.6).curveTo(-25.1,-0.9,-24.9,-1).curveTo(-25.3,-2,-26,-4.1).curveTo(-26.5,-6.1,-27.1,-8).closePath().moveTo(-8.3,-8.5).curveTo(-8.3,-8.2,-9,-6.8).curveTo(-9.7,-5.5,-9.7,-4.8).curveTo(-9.7,-3.1,-5.9,-0.1).curveTo(-2,2.9,-2,3.6).curveTo(-2,4,-3.2,4.7).curveTo(-4.3,5.8,-4.3,8.6).curveTo(-4.3,9.1,-4.2,11.2).curveTo(-4.2,13.1,-5.1,13.1).curveTo(-6.1,13.1,-5.9,9.3).curveTo(-5.9,4.6,-4.1,3.4).curveTo(-6,1.7,-9.2,-0.9).curveTo(-11.3,-2.9,-11.3,-4.8).curveTo(-11.3,-6.8,-9.8,-8.6).curveTo(-8.3,-10.5,-8.3,-8.5).closePath().moveTo(-2.6,19.5).curveTo(-3.2,19.5,-4.8,18.8).curveTo(-6.8,17.9,-8.3,17.6).lineTo(-13.9,17.6).curveTo(-13,18.6,-11.1,18.9).curveTo(-9.7,19.1,-9.7,20.2).curveTo(-11.6,24.5,-13.8,24.5).curveTo(-14.7,24.5,-14.6,23.8).curveTo(-14.6,23.5,-13.2,22.2).curveTo(-11.6,20.6,-11.3,20.2).curveTo(-11.7,19.9,-12,19.8).curveTo(-12.7,19.5,-14.3,19.5).curveTo(-15,19.2,-15.9,17.2).curveTo(-15.9,16.8,-15.5,16.5).curveTo(-15.1,16.1,-14.5,16).lineTo(-8.4,16).curveTo(-5.9,16.4,-4.5,16.7).curveTo(-1.8,17.4,-1.8,18.8).curveTo(-1.8,19.5,-2.6,19.5).closePath();
	this.shape_298.setTransform(33.2,34.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#80472F").beginStroke().moveTo(28.4,-22.4).curveTo(28.4,-21.5,27.7,-21.5).curveTo(26.9,-21.5,25.9,-24.5).curveTo(25.4,-25.9,25,-27.3).curveTo(25,-31.1,28.4,-22.4).closePath().moveTo(13.2,-13.4).curveTo(13.1,-15.3,12.1,-17.5).curveTo(11.1,-19.7,11.1,-20.7).curveTo(11.1,-22.5,12.9,-20).curveTo(14.7,-17.6,14.7,-15.4).curveTo(14.7,-13.6,13.9,-13.1).closePath().moveTo(17.4,2.1).curveTo(17.8,4.5,17.8,5.9).curveTo(17.8,7.1,17.1,7.1).curveTo(16.8,7.1,15.2,0.4).curveTo(15.2,-1.3,16.3,-0.1).curveTo(17.3,1.1,17.4,2.1).closePath().moveTo(25.3,14.6).curveTo(25.3,15.2,24.5,15.7).lineTo(23.8,15.4).curveTo(23.8,15.1,23.5,14.4).curveTo(23.1,13.7,23.1,13.5).curveTo(23.1,12.5,24.2,13.1).curveTo(25.3,13.7,25.3,14.6).closePath().moveTo(-12,-11).curveTo(-10.8,-12.9,-9.6,-14.2).curveTo(-7.1,-16.8,-7.1,-14.4).curveTo(-7.1,-13.8,-8.6,-12.1).curveTo(-10.2,-10.3,-11.1,-10.3).curveTo(-12,-10.3,-12,-11).closePath().moveTo(-22,-23.5).curveTo(-22.9,-23.5,-23,-24.7).curveTo(-23.1,-25.2,-23,-25.8).curveTo(-23,-28.9,-22.1,-27.2).curveTo(-21.3,-25.6,-21.3,-24.3).curveTo(-21.3,-23.5,-22,-23.5).closePath().moveTo(-20.7,-13.3).curveTo(-19.8,-14.1,-19.8,-12.2).curveTo(-19.8,-10.2,-20,-8.3).curveTo(-20.4,-4.5,-21.2,-4.5).curveTo(-22.1,-4.5,-22,-5.3).curveTo(-22,-5.4,-21.8,-7.1).curveTo(-21.6,-8.8,-21.6,-9.7).curveTo(-21.6,-12.6,-20.7,-13.3).closePath().moveTo(4.5,4.8).curveTo(3,11.5,2.9,11.5).curveTo(1.9,11.5,2.1,8.8).curveTo(2.1,7.3,3.3,5).curveTo(4.5,2.7,4.5,4.8).closePath().moveTo(6.6,21.1).curveTo(6.6,21.6,3.7,24.3).curveTo(2.9,24.3,3,23.4).curveTo(3,22.6,4.8,21).curveTo(6.6,19.4,6.6,21.1).closePath().moveTo(-21.4,20.8).curveTo(-15.9,9.2,-15.9,13.8).curveTo(-20.4,21.5,-20.6,21.5).curveTo(-21.5,21.5,-21.4,20.8).closePath().moveTo(-26.5,27.5).curveTo(-26.5,28.5,-27.2,28.5).curveTo(-28.4,28.5,-28.4,25.8).curveTo(-28.4,23.4,-27.4,25).curveTo(-26.5,26.7,-26.5,27.5).closePath();
	this.shape_299.setTransform(32.3,34.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#643926").beginStroke().moveTo(30,-30.3).curveTo(30.5,-29.3,30.5,-29).lineTo(30.3,-26.3).curveTo(30.3,-26.3,30.3,-25.4).lineTo(30.2,-25.4).lineTo(30.2,-19).curveTo(30,-11.7,30,-11.2).curveTo(30,-8.5,30.8,2.4).curveTo(30.8,4.7,30.3,8.5).curveTo(29.8,12.3,29.8,12.3).curveTo(29.8,13.3,30.4,15.7).curveTo(31,18,31,20.8).curveTo(31,23.8,30.6,25.1).curveTo(30.2,26.5,30.2,28.3).curveTo(30.2,28.3,30.2,29.8).curveTo(30.2,29.9,30.3,30).lineTo(29.5,30).lineTo(25,31.1).lineTo(13.1,31.1).curveTo(9.9,30.9,9.6,30.8).lineTo(-3.1,30.8).curveTo(-5.5,31.1,-10.1,31.6).curveTo(-14.7,32.1,-20.3,32.1).curveTo(-25.1,32.1,-29.6,30.7).curveTo(-30.4,30.5,-31,30.4).curveTo(-30.2,29.6,-30,27.9).lineTo(-30,24.5).curveTo(-31,15.2,-31,15).curveTo(-31,14.3,-30.7,12.4).curveTo(-30.4,10.7,-30.2,10.2).lineTo(-30.2,2.6).curveTo(-30.1,2.1,-30,-0.5).curveTo(-29.8,-3,-29.8,-4.2).curveTo(-29.8,-5.5,-30.1,-8.1).curveTo(-30.4,-10.7,-30.6,-11.7).curveTo(-31,-13.2,-31,-15.5).curveTo(-31.1,-16.8,-31,-19.2).curveTo(-30.8,-22.9,-30.6,-25).curveTo(-30.7,-24.9,-30.8,-24.9).lineTo(-30.8,-27.3).curveTo(-30.6,-28.1,-30.6,-29.3).curveTo(-30.6,-31.1,-30.6,-31.2).lineTo(-29.1,-31.2).curveTo(-27.3,-30.8,-26.8,-30.8).lineTo(-16.3,-30.8).curveTo(-12.7,-31,-12,-31.3).lineTo(-1.3,-31.1).curveTo(-0.1,-31.1,0.6,-31.3).lineTo(9.8,-31.4).curveTo(10.1,-31.5,13,-32.1).lineTo(21.1,-32.1).lineTo(22,-31.9).lineTo(25.7,-31.9).curveTo(26.9,-31.3,28,-31.4).curveTo(28.6,-31.4,29.4,-31.5).curveTo(29.6,-31.2,30,-30.3).closePath().moveTo(13.4,-11.3).lineTo(14.1,-11.1).curveTo(14.9,-11.6,14.9,-13.3).curveTo(14.9,-15.5,13.1,-18).curveTo(11.3,-20.5,11.3,-18.7).curveTo(11.3,-17.7,12.3,-15.5).curveTo(13.3,-13.2,13.4,-11.3).closePath().moveTo(28.6,-20.3).curveTo(25.2,-29,25.2,-25.3).curveTo(25.6,-23.9,26.1,-22.4).curveTo(27.1,-19.5,27.9,-19.5).curveTo(28.6,-19.5,28.6,-20.3).closePath().moveTo(9.6,-1.1).curveTo(9.3,-1.6,9.3,-2.1).curveTo(9.3,-3.5,11.1,-6.8).curveTo(12.8,-10.2,12.8,-10.3).curveTo(12.8,-10.3,8.1,-13.4).curveTo(3.3,-16.5,3.3,-17.5).curveTo(3.3,-18.7,4.5,-19.7).curveTo(5.8,-20.8,5.8,-21.2).curveTo(5.8,-23.1,3.7,-21.2).curveTo(1.7,-19.2,1.7,-17.5).curveTo(1.7,-16,5.1,-13.5).curveTo(8.2,-11.1,11,-10).curveTo(9.8,-7.6,9.1,-6.1).curveTo(7.7,-3.2,7.7,-2).curveTo(7.7,-1.3,8.4,-0.2).curveTo(8.3,0.4,8.3,0.8).curveTo(8.3,1.5,9.1,1.5).curveTo(9.7,1.5,9.9,1).curveTo(9.9,0.8,9.9,0.1).curveTo(9.9,-0.5,9.6,-1.1).closePath().moveTo(24.6,1.3).curveTo(25.5,-1.1,25.5,-1.2).curveTo(25.5,-3.3,23.8,-0.1).curveTo(22.1,3.1,22.1,6.1).curveTo(22.1,9.1,24.9,11.4).curveTo(27.7,13.7,27.7,15.5).curveTo(27.7,16.6,24.6,19).curveTo(21.5,21.5,21.5,21.7).curveTo(25.3,28.4,25.3,28.5).curveTo(25.3,28.6,25.2,29).curveTo(25.3,29.5,26.1,29.5).curveTo(27,29.5,27,28.6).curveTo(27,27.9,25.5,26).curveTo(24,24.1,24,21.5).curveTo(24,21.3,27.4,18.7).curveTo(28.8,17.6,29.1,17).curveTo(29.3,16.6,29.3,15.6).curveTo(29.3,13,26.5,10.7).curveTo(23.7,8.4,23.7,6.1).curveTo(23.7,3.7,24.6,1.3).closePath().moveTo(23.9,-11).curveTo(27.2,-11.7,27.2,-12.3).curveTo(27.2,-15.1,21.5,-19.2).curveTo(15.9,-23.2,15.9,-20.6).curveTo(15.9,-20.4,18.3,-19.4).curveTo(21.1,-18.2,22.2,-17.2).curveTo(22.8,-16.6,23.9,-15.2).curveTo(25,-13.8,25.4,-13).lineTo(25.3,-12.9).curveTo(21.4,-12.3,19.6,-11.4).curveTo(17.5,-10.3,17.5,-8.6).curveTo(17.5,-7.9,17.7,-7.2).curveTo(17.9,-5.9,18.5,-5.9).curveTo(19.5,-5.9,19.3,-7.4).curveTo(19,-9.2,19.8,-9.8).curveTo(20.2,-10.1,23.9,-11).closePath().moveTo(17.6,4.1).curveTo(17.5,3.1,16.5,1.9).curveTo(15.4,0.7,15.4,2.4).curveTo(17,9.1,17.3,9.1).curveTo(18,9.1,18,7.9).curveTo(18,6.5,17.6,4.1).closePath().moveTo(11.4,14.4).curveTo(15.4,15.9,15.6,16.6).curveTo(14.7,17.8,12.1,20.8).curveTo(10,23.5,10,24.6).curveTo(10,24.6,10.2,27).curveTo(10.8,29.3,12.3,29.3).curveTo(14.5,29.3,14.5,28.4).curveTo(14.5,27.3,11.8,27.6).curveTo(11.6,25.1,11.6,24.6).curveTo(11.6,22.6,14.4,20.1).curveTo(17.2,17.6,17.2,16.5).curveTo(17.2,15.2,12.4,13).curveTo(7.5,10.9,7.5,12.2).curveTo(7.5,12.9,11.4,14.4).closePath().moveTo(25.5,16.6).curveTo(25.5,15.7,24.4,15.1).curveTo(23.3,14.5,23.3,15.5).curveTo(23.3,15.7,23.7,16.5).curveTo(24,17.2,24,17.5).lineTo(24.7,17.7).curveTo(25.5,17.2,25.5,16.6).closePath().moveTo(-10,-15.7).curveTo(-9.2,-15.7,-9.2,-16.4).curveTo(-17.2,-22.4,-17.2,-16.9).curveTo(-17.2,-16.8,-17.2,-16.7).curveTo(-18.3,-15.2,-18.3,-13.3).curveTo(-18.3,-11.6,-16.7,-9.6).curveTo(-15.1,-7.7,-15.1,-7.5).curveTo(-17.6,-0.4,-17.6,0.1).curveTo(-17.7,0.4,-17.6,0.7).curveTo(-17.5,1.1,-16.9,1.1).curveTo(-16.7,1.1,-15.2,-3.1).curveTo(-13.6,-7.3,-13.6,-7.6).curveTo(-13.6,-8.5,-15.1,-9.9).curveTo(-16.7,-11.3,-16.7,-13.3).curveTo(-16.7,-13.9,-16,-16.3).curveTo(-15.8,-16.5,-15.5,-16.9).curveTo(-15,-17.8,-14.2,-17.8).curveTo(-13.3,-17.3,-12.3,-16.7).curveTo(-10.3,-15.7,-10,-15.7).closePath().moveTo(-5.9,-20.6).curveTo(-5.9,-21.1,-4.6,-23.8).curveTo(-4.6,-25.6,-6,-23.9).curveTo(-7.4,-22.2,-7.4,-20.7).curveTo(-7.4,-18,-5.4,-15.9).curveTo(-3.3,-13.9,-3.3,-13).curveTo(-3.3,-12.7,-3.6,-12.1).curveTo(-3.9,-11.5,-3.9,-11.4).curveTo(-3.9,-10.7,-3.1,-10.7).curveTo(-2,-10.7,-1.8,-11.6).curveTo(-1.7,-11.7,-1.7,-12.7).curveTo(-1.7,-14.7,-3.8,-16.6).curveTo(-5.9,-18.5,-5.9,-20.6).closePath().moveTo(-21.8,-21.5).curveTo(-21.1,-21.5,-21.1,-22.2).curveTo(-21.1,-23.5,-21.9,-25.2).curveTo(-22.8,-26.9,-22.8,-23.7).curveTo(-22.9,-23.2,-22.8,-22.6).curveTo(-22.7,-21.5,-21.8,-21.5).closePath().moveTo(-11.8,-9).curveTo(-11.8,-8.3,-10.9,-8.3).curveTo(-10,-8.3,-8.4,-10.1).curveTo(-6.9,-11.7,-6.9,-12.4).curveTo(-6.9,-14.8,-9.4,-12.1).curveTo(-10.6,-10.8,-11.8,-9).closePath().moveTo(-25.6,-20).curveTo(-27,-23,-27,-20.2).curveTo(-27,-19.6,-26.4,-17.8).curveTo(-25.7,-16,-25.7,-15.6).curveTo(-25.7,-14.9,-26.2,-14.1).curveTo(-26.6,-13.2,-26.6,-12.4).curveTo(-26.8,-11.3,-25.8,-11.3).curveTo(-25.5,-11.3,-24.8,-13.3).curveTo(-24.2,-15.2,-24.2,-15.7).curveTo(-24.2,-17,-25.6,-20).closePath().moveTo(-20.5,-11.3).curveTo(-21.4,-10.5,-21.4,-7.7).curveTo(-21.4,-6.8,-21.6,-5.1).curveTo(-21.8,-3.3,-21.8,-3.2).curveTo(-21.9,-2.5,-21,-2.5).curveTo(-20.2,-2.5,-19.8,-6.2).curveTo(-19.6,-8.1,-19.6,-10.2).curveTo(-19.6,-12,-20.5,-11.3).closePath().moveTo(-7.1,-6.1).curveTo(-7.1,-8.1,-8.6,-6.2).curveTo(-10.1,-4.4,-10.1,-2.4).curveTo(-10.1,-0.5,-8,1.5).curveTo(-4.9,4.1,-2.9,5.8).curveTo(-4.7,7,-4.7,11.7).curveTo(-5,15.5,-4,15.5).curveTo(-3.1,15.5,-3,13.6).curveTo(-3.2,11.5,-3.2,11).curveTo(-3.2,8.2,-2,7.1).curveTo(-0.9,6.4,-0.9,6).curveTo(-0.9,5.3,-4.7,2.3).curveTo(-8.6,-0.7,-8.6,-2.4).curveTo(-8.6,-3.1,-7.9,-4.4).curveTo(-7.1,-5.8,-7.1,-6.1).closePath().moveTo(-25.9,-5.6).curveTo(-25.4,-3.7,-24.8,-1.7).curveTo(-24.2,0.4,-23.8,1.4).curveTo(-24,1.5,-24.1,1.8).curveTo(-25.5,3.6,-25.5,5.1).curveTo(-25.5,6.4,-23.9,7.9).curveTo(-22.2,9.5,-22.2,11.9).curveTo(-22.2,12.6,-22.7,14.7).curveTo(-23.2,16.9,-23.2,17.1).lineTo(-23.7,20.8).curveTo(-23.8,21.5,-22.9,21.5).curveTo(-21.8,21.5,-21.6,20.3).curveTo(-21.5,19.9,-21.5,19).curveTo(-21.5,17.3,-21.1,15.2).curveTo(-20.6,13.1,-20.6,11.8).curveTo(-20.6,9.8,-22.3,7.6).curveTo(-24,5.3,-24,5.1).curveTo(-24,4.6,-23.4,3.3).curveTo(-22.9,2.6,-22.8,2.2).curveTo(-22.5,2,-22.5,1.4).curveTo(-22.5,-0.7,-24.2,-4.4).curveTo(-25.9,-8.2,-25.9,-5.6).closePath().moveTo(6.8,23.2).curveTo(6.8,21.5,5,23.1).curveTo(3.2,24.7,3.2,25.5).curveTo(3.1,26.3,3.9,26.3).curveTo(6.8,23.6,6.8,23.2).closePath().moveTo(4.7,6.9).curveTo(4.7,4.7,3.5,7).curveTo(2.3,9.3,2.3,10.9).curveTo(2.1,13.5,3.1,13.5).curveTo(3.2,13.5,4.7,6.9).closePath().moveTo(-1.5,21.9).curveTo(-0.7,21.9,-0.7,21.2).curveTo(-0.7,19.8,-3.3,19.1).curveTo(-4.8,18.8,-7.3,18.4).lineTo(-13.3,18.4).curveTo(-14,18.5,-14.4,18.9).curveTo(-14.7,19.2,-14.7,19.6).curveTo(-13.8,21.6,-13.1,21.9).curveTo(-11.5,21.9,-10.8,22.2).curveTo(-10.5,22.3,-10.1,22.6).curveTo(-10.4,23,-12,24.6).curveTo(-13.5,25.9,-13.5,26.2).curveTo(-13.6,26.9,-12.7,26.9).curveTo(-10.4,26.9,-8.6,22.6).curveTo(-8.6,21.5,-10,21.3).curveTo(-11.9,21,-12.7,20).lineTo(-7.1,20).curveTo(-5.6,20.3,-3.6,21.2).curveTo(-2,21.9,-1.5,21.9).closePath().moveTo(-26.3,29.6).curveTo(-26.3,28.7,-27.2,27.1).curveTo(-28.2,25.5,-28.2,27.9).curveTo(-28.2,30.5,-27,30.5).curveTo(-26.3,30.5,-26.3,29.6).closePath().moveTo(-21.2,22.8).curveTo(-21.3,23.5,-20.4,23.5).curveTo(-20.2,23.5,-15.7,15.9).curveTo(-15.7,11.3,-21.2,22.8).closePath();
	this.shape_300.setTransform(32.1,32.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#4F2D1D").beginStroke().moveTo(-7.5,-33).curveTo(-6.4,-32.7,-4.5,-32.6).lineTo(-1.1,-32.6).lineTo(0.6,-33).lineTo(9.6,-33).lineTo(12.9,-33.7).lineTo(21.2,-33.7).lineTo(22.1,-33.5).lineTo(26,-33.5).curveTo(32.1,-34,32.1,-28.9).curveTo(32,-27,31.8,-25.9).lineTo(31.8,-18.5).lineTo(31.6,-18.1).lineTo(31.6,-4.4).curveTo(31.7,-4,32,-1.2).curveTo(32.4,1.7,32.4,2.3).curveTo(32.4,6.3,31.9,8).curveTo(31.3,9.8,31.3,12.2).curveTo(31.3,12.6,32,15.3).curveTo(32.6,17.9,32.6,20.7).curveTo(32.6,24.4,32.3,25.4).curveTo(32,26.4,32,30.4).curveTo(32,30.5,32,30.6).curveTo(32,30.7,32,30.8).curveTo(32,31.4,30.2,31.7).curveTo(26.7,32.3,25.2,32.7).lineTo(13.3,32.7).curveTo(10,32.5,9.6,32.4).lineTo(-3.3,32.4).curveTo(-6,32.7,-10.1,33.3).curveTo(-14.2,33.7,-20.3,33.7).curveTo(-26.5,33.7,-29.9,32.4).curveTo(-32.2,31.5,-32.2,30.8).curveTo(-32.2,30.6,-32,30.5).lineTo(-32.1,30.5).lineTo(-32.2,29).curveTo(-32.2,28.1,-31.9,26.8).curveTo(-31.6,25.4,-31.6,24.6).curveTo(-32.6,15.8,-32.6,15.2).curveTo(-32.6,12.7,-31.8,9.8).lineTo(-31.8,2).curveTo(-31.7,1.6,-31.5,-0.9).curveTo(-31.4,-3.3,-31.4,-4.3).curveTo(-31.4,-8,-32,-12.2).curveTo(-32.6,-16.5,-32.6,-19.1).lineTo(-32.6,-24.4).curveTo(-32.6,-24.6,-32.6,-24.7).lineTo(-32.6,-24.7).curveTo(-32.5,-24.9,-32.5,-25.2).curveTo(-32.2,-27.9,-32.2,-29.1).curveTo(-32.6,-30.6,-32.6,-31.4).curveTo(-32.4,-32.9,-30,-32.9).curveTo(-27.5,-32.9,-27.3,-32.8).curveTo(-27.1,-32.8,-26.6,-32.4).lineTo(-16.4,-32.4).curveTo(-13.1,-32.6,-11.8,-33).closePath().moveTo(30,-30.3).curveTo(29.6,-31.2,29.4,-31.5).curveTo(28.6,-31.4,28,-31.4).curveTo(26.9,-31.3,25.7,-31.9).lineTo(22,-31.9).lineTo(21.1,-32.1).lineTo(13,-32.1).curveTo(10.1,-31.5,9.8,-31.4).lineTo(0.6,-31.3).curveTo(-0.1,-31.1,-1.3,-31.1).lineTo(-12,-31.3).curveTo(-12.7,-31,-16.3,-30.8).lineTo(-26.8,-30.8).curveTo(-27.3,-30.8,-29.1,-31.2).lineTo(-30.6,-31.2).curveTo(-30.6,-31.1,-30.6,-29.3).curveTo(-30.6,-28.1,-30.8,-27.3).lineTo(-30.8,-24.9).curveTo(-30.7,-24.9,-30.6,-25).curveTo(-30.8,-22.9,-31,-19.2).curveTo(-31.1,-16.8,-31,-15.5).curveTo(-31,-13.2,-30.6,-11.7).curveTo(-30.4,-10.7,-30.1,-8.1).curveTo(-29.8,-5.5,-29.8,-4.2).curveTo(-29.8,-3,-30,-0.5).curveTo(-30.1,2.1,-30.2,2.6).lineTo(-30.2,10.2).curveTo(-30.4,10.7,-30.7,12.4).curveTo(-31,14.3,-31,15).curveTo(-31,15.2,-30,24.5).lineTo(-30,27.9).curveTo(-30.2,29.6,-31,30.4).curveTo(-30.4,30.5,-29.6,30.7).curveTo(-25.1,32.1,-20.3,32.1).curveTo(-14.7,32.1,-10.1,31.6).curveTo(-5.5,31.1,-3.1,30.8).lineTo(9.6,30.8).curveTo(9.9,30.9,13.1,31.1).lineTo(25,31.1).lineTo(29.5,30).lineTo(30.3,30).curveTo(30.2,29.9,30.2,29.8).curveTo(30.2,28.3,30.2,28.3).curveTo(30.2,26.5,30.6,25.1).curveTo(31,23.8,31,20.8).curveTo(31,18,30.4,15.7).curveTo(29.8,13.3,29.8,12.3).curveTo(29.8,12.3,30.3,8.5).curveTo(30.8,4.7,30.8,2.4).curveTo(30,-8.5,30,-11.2).curveTo(30,-11.7,30.2,-19).lineTo(30.2,-25.4).lineTo(30.3,-25.4).curveTo(30.3,-26.3,30.3,-26.3).lineTo(30.5,-29).curveTo(30.5,-29.3,30,-30.3).closePath();
	this.shape_301.setTransform(32.1,32.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#DBCA93").beginStroke().moveTo(22,-19.4).curveTo(21,-19.4,20.6,-20.1).curveTo(20.4,-20.6,20.4,-21).curveTo(20.4,-22.5,22,-22.5).curveTo(23.5,-22.5,23.5,-20.9).curveTo(23.5,-20.4,23.1,-19.9).curveTo(22.7,-19.4,22,-19.4).closePath().moveTo(18.1,-22.9).curveTo(17.7,-22.4,17,-22.4).curveTo(16,-22.4,15.6,-23.1).curveTo(15.4,-23.6,15.4,-24).curveTo(15.4,-25.5,17,-25.5).curveTo(18.5,-25.5,18.5,-23.9).curveTo(18.5,-23.4,18.1,-22.9).closePath().moveTo(15.5,-17.4).curveTo(15.5,-16.9,15.1,-16.4).curveTo(14.7,-15.9,14,-15.9).curveTo(13,-15.9,12.6,-16.6).curveTo(12.4,-17.1,12.4,-17.5).curveTo(12.4,-19,14,-19).curveTo(15.5,-19,15.5,-17.4).closePath().moveTo(9.7,-9.8).curveTo(11.3,-9.8,11.3,-8.1).curveTo(11.3,-7.6,10.9,-7.1).curveTo(10.4,-6.6,9.8,-6.6).curveTo(8.8,-6.6,8.4,-7.4).curveTo(8.2,-7.8,8.2,-8.3).curveTo(8.2,-9.8,9.7,-9.8).closePath().moveTo(23.5,-13.8).curveTo(23.5,-13.4,23.3,-13).curveTo(22.9,-12.5,22.3,-12.5).curveTo(21.4,-12.5,21.1,-13.2).lineTo(21,-13.8).curveTo(21,-15,22.3,-15).curveTo(23.5,-15,23.5,-13.8).closePath().moveTo(19.3,-3.6).curveTo(17.7,-3.6,17.7,-5.4).curveTo(17.7,-7,19.2,-7).curveTo(20.8,-7,20.8,-5.4).curveTo(20.8,-4.9,20.5,-4.4).curveTo(20.1,-3.6,19.3,-3.6).closePath().moveTo(25.6,4.5).curveTo(25.2,5,24.5,5).curveTo(23.5,5,23.1,4.3).curveTo(22.9,3.9,22.9,3.5).curveTo(22.9,2,24.5,2).curveTo(26,2,26,3.5).curveTo(26,4,25.6,4.5).closePath().moveTo(15,0.4).curveTo(16.8,1,16.8,3.7).curveTo(16.8,5.3,15.3,5.3).curveTo(13.9,5.3,13.4,3.8).lineTo(13.2,2.4).curveTo(13.2,-0.4,15,0.4).closePath().moveTo(8.2,5.7).curveTo(8.2,4.2,9.7,4.2).curveTo(11.3,4.2,11.3,5.8).curveTo(11.3,6.3,10.9,6.8).curveTo(10.4,7.3,9.8,7.3).curveTo(8.8,7.3,8.4,6.5).curveTo(8.2,6.1,8.2,5.7).closePath().moveTo(14.5,17.3).curveTo(14.5,18.6,14.5,18.6).curveTo(14.3,19.8,13,19.8).curveTo(11.8,19.8,11.5,18.6).curveTo(11.4,18.4,11.4,17.4).curveTo(11.4,14.9,13,14.9).curveTo(14.5,14.8,14.5,17.3).closePath().moveTo(15.9,9).curveTo(15.9,7.1,17.7,7.4).curveTo(19.5,7.6,19.5,9.8).curveTo(19.5,11.8,18,11.8).curveTo(17.1,11.8,16.4,10.5).curveTo(15.9,9.5,15.9,9).closePath().moveTo(-2,-22.4).curveTo(-2.5,-21.9,-3.2,-21.9).curveTo(-4.8,-21.9,-4.7,-23.5).curveTo(-4.7,-25,-3.2,-25).curveTo(-1.6,-25,-1.6,-23.4).curveTo(-1.6,-22.9,-2,-22.4).closePath().moveTo(-12,-21.6).curveTo(-12.5,-21.1,-13.2,-21.1).curveTo(-14.8,-21.1,-14.7,-22.8).curveTo(-14.7,-24.3,-13.2,-24.3).curveTo(-11.6,-24.3,-11.6,-22.6).curveTo(-11.6,-22.1,-12,-21.6).closePath().moveTo(-12,-18).curveTo(-12,-19.5,-10.4,-19.5).curveTo(-8.9,-19.5,-8.9,-17.9).curveTo(-8.9,-17.4,-9.3,-16.9).curveTo(-9.8,-16.4,-10.5,-16.4).curveTo(-12,-16.4,-12,-18).closePath().moveTo(-8.2,-10.2).curveTo(-8.7,-9.6,-9.5,-9.6).curveTo(-11,-9.6,-11.6,-10.7).curveTo(-12,-11.3,-12,-11.9).curveTo(-12,-14.4,-9.9,-13.4).curveTo(-7.9,-12.5,-7.9,-11.3).curveTo(-7.9,-10.7,-8.2,-10.2).closePath().moveTo(0,-9.1).curveTo(-1.4,-9.1,-1.7,-10.6).curveTo(-1.8,-11.4,-1.7,-12.1).curveTo(-1.7,-14.9,-0.1,-14.5).curveTo(1.5,-14.2,1.5,-10.6).curveTo(1.5,-10.1,1.1,-9.6).curveTo(0.7,-9.1,0,-9.1).closePath().moveTo(4.2,-19.3).curveTo(4.2,-20.5,6.2,-21.1).curveTo(8.3,-21.8,8.3,-19.6).curveTo(8.3,-18.9,7.3,-18.3).curveTo(6.4,-17.6,5.9,-17.6).curveTo(4.2,-17.6,4.2,-19.3).closePath().moveTo(-22,-25.4).curveTo(-22.5,-24.9,-23.2,-24.9).curveTo(-24.7,-24.9,-24.7,-26.5).curveTo(-24.7,-28,-23.2,-28).curveTo(-21.6,-28,-21.6,-26.4).curveTo(-21.6,-25.9,-22,-25.4).closePath().moveTo(-18.4,-21.5).curveTo(-16.9,-21.6,-16.9,-19.6).curveTo(-16.9,-19,-17.2,-18.5).curveTo(-17.6,-17.9,-18.5,-17.9).curveTo(-19.6,-17.9,-19.9,-18.8).curveTo(-20,-19.3,-20,-19.7).curveTo(-20,-21.4,-18.4,-21.5).closePath().moveTo(-25.5,-16.8).curveTo(-25.5,-18.3,-23.9,-18.3).curveTo(-22.4,-18.3,-22.4,-16.6).curveTo(-22.4,-16.1,-22.8,-15.6).curveTo(-23.3,-15.1,-24,-15.1).curveTo(-25.5,-15.1,-25.5,-16.8).closePath().moveTo(-16.2,-15).curveTo(-16.2,-16.5,-14.7,-16.5).curveTo(-13.1,-16.5,-13.1,-14.9).curveTo(-13.1,-14.4,-13.5,-13.9).curveTo(-14,-13.4,-14.7,-13.4).curveTo(-16.3,-13.4,-16.2,-15).closePath().moveTo(-15.5,-2.1).curveTo(-17,-2.1,-17,-3.8).curveTo(-17,-5.3,-15.4,-5.3).curveTo(-13.9,-5.3,-13.9,-3.6).curveTo(-13.9,-3.1,-14.3,-2.6).curveTo(-14.8,-2.1,-15.5,-2.1).closePath().moveTo(-22.5,2).curveTo(-24,2,-24,0.5).curveTo(-24,-1,-22.4,-1).curveTo(-20.9,-1,-20.9,0.5).curveTo(-20.9,1,-21.3,1.5).curveTo(-21.8,2,-22.5,2).closePath().moveTo(-15.3,2.9).curveTo(-13.6,3,-13.6,4.5).curveTo(-13.6,5.3,-14.3,5.7).curveTo(-14.8,6,-15.3,6).curveTo(-16.4,6,-16.8,5.3).curveTo(-17,4.9,-17,4.5).curveTo(-17,2.8,-15.3,2.9).closePath().moveTo(-25.6,-4.8).curveTo(-25.8,-5.3,-25.7,-5.7).curveTo(-25.7,-7.4,-24.2,-7.5).curveTo(-22.6,-7.6,-22.6,-5.6).curveTo(-22.6,-3.9,-24.2,-3.9).curveTo(-25.3,-3.9,-25.6,-4.8).closePath().moveTo(-23.6,17.3).curveTo(-23.6,19,-25.2,19).curveTo(-26.3,19,-26.6,18.1).lineTo(-26.7,17.3).curveTo(-26.7,15.5,-25.2,15.5).curveTo(-23.6,15.4,-23.6,17.3).closePath().moveTo(-25.9,9.5).curveTo(-24.4,9.5,-24.4,11).curveTo(-24.4,11.5,-24.8,12).curveTo(-25.3,12.5,-26,12.5).curveTo(-27.5,12.5,-27.5,11).curveTo(-27.5,9.5,-25.9,9.5).closePath().moveTo(-20.2,15.5).curveTo(-20.2,14,-18.7,14).curveTo(-17.1,14,-17.1,15.5).curveTo(-17.1,16,-17.5,16.5).curveTo(-18,17,-18.7,17).curveTo(-20.2,17,-20.2,15.5).closePath().moveTo(4.6,-4.9).curveTo(4.2,-4.4,3.5,-4.4).curveTo(1.9,-4.4,1.9,-6).curveTo(1.9,-7.5,3.5,-7.5).curveTo(5,-7.5,5,-5.9).curveTo(5,-5.4,4.6,-4.9).closePath().moveTo(6.8,4.8).curveTo(6.8,5.3,6.4,5.8).curveTo(5.9,6.3,5.3,6.3).curveTo(3.7,6.3,3.7,4.7).curveTo(3.7,3.2,5.2,3.2).curveTo(6.8,3.2,6.8,4.8).closePath().moveTo(-8.4,4.2).curveTo(-8.4,5.5,-8.4,5.8).curveTo(-8.7,7,-10,7).curveTo(-11.3,7,-11.5,5.8).curveTo(-11.5,4.4,-11.5,4.3).curveTo(-11.5,1.3,-9.9,1.3).curveTo(-8.4,1.3,-8.4,4.2).closePath().moveTo(-6.7,-3.8).curveTo(-6.7,-5.9,-4.9,-6.6).curveTo(-3.1,-7.4,-3.1,-5.4).curveTo(-3.5,-2.1,-5.2,-2.1).curveTo(-6.7,-2.1,-6.7,-3.8).closePath().moveTo(-4.8,7.8).curveTo(-5.3,8.3,-6,8.3).curveTo(-6.9,8.3,-7.3,7.5).curveTo(-7.5,6.8,-7.5,6.7).curveTo(-7.5,5.2,-5.9,5.2).curveTo(-4.4,5.2,-4.4,6.8).curveTo(-4.4,7.3,-4.8,7.8).closePath().moveTo(-5.2,13).curveTo(-3.6,13,-3.6,14.5).curveTo(-3.6,15,-4,15.5).curveTo(-4.5,16,-5.2,16).curveTo(-6.7,16,-6.7,14.5).curveTo(-6.7,13,-5.2,13).closePath().moveTo(-1,15.2).curveTo(-1,13,0.7,13).curveTo(2.3,12.9,2.3,14.8).curveTo(2.3,15.5,1.8,16.1).curveTo(1.2,16.8,0.5,16.8).curveTo(-1.1,16.8,-1,15.2).closePath().moveTo(-2.3,25.8).curveTo(-2.8,26.3,-3.5,26.3).curveTo(-4.4,26.3,-4.8,25.5).curveTo(-5,24.8,-5,24.7).curveTo(-5,23.2,-3.4,23.2).curveTo(-1.9,23.2,-1.9,24.8).curveTo(-1.9,25.3,-2.3,25.8).closePath().moveTo(7,22.5).curveTo(8.5,22.5,8.5,24).curveTo(8.5,24.5,8.1,25).curveTo(7.7,25.5,7,25.5).curveTo(6,25.5,5.6,24.8).curveTo(5.4,24,5.4,24).curveTo(5.4,22.5,7,22.5).closePath().moveTo(4.8,18.9).curveTo(4.7,18.5,4.7,17.8).curveTo(4.7,15.6,6.2,15.6).curveTo(7.8,15.6,7.8,17.7).curveTo(7.8,19.8,6.3,19.8).curveTo(5.1,19.8,4.8,18.9).closePath().moveTo(-10.9,23.8).curveTo(-10.9,24.3,-11.3,24.8).curveTo(-11.8,25.3,-12.5,25.3).curveTo(-14,25.3,-14,23.7).curveTo(-14,22.2,-12.4,22.2).curveTo(-10.9,22.2,-10.9,23.8).closePath().moveTo(-11,19).curveTo(-11.5,19.5,-12.2,19.5).curveTo(-13.2,19.5,-13.6,18.8).curveTo(-13.7,18,-13.7,18).curveTo(-13.7,16.5,-12.2,16.5).curveTo(-10.6,16.5,-10.6,18).curveTo(-10.6,18.5,-11,19).closePath().moveTo(-21.8,22.8).curveTo(-22.3,23.3,-23,23.3).curveTo(-23.9,23.3,-24.3,22.5).curveTo(-24.5,22.1,-24.5,21.7).curveTo(-24.5,20.2,-22.9,20.2).curveTo(-21.4,20.2,-21.4,21.8).curveTo(-21.4,22.3,-21.8,22.8).closePath().moveTo(26,19).curveTo(27.5,19,27.5,20.5).curveTo(27.5,21,27.1,21.5).curveTo(26.7,22,26,22).curveTo(25,22,24.6,21.3).curveTo(24.4,20.9,24.4,20.5).curveTo(24.4,19,26,19).closePath().moveTo(18,19.5).curveTo(18,18.2,19.3,18.2).curveTo(20.5,18.2,20.5,19.5).curveTo(20.5,19.9,20.3,20.3).curveTo(19.9,20.8,19.3,20.8).curveTo(18.4,20.8,18.1,20).closePath().moveTo(15.2,25).curveTo(16.8,25,16.8,26.5).curveTo(16.8,27,16.4,27.5).curveTo(15.9,28,15.3,28).curveTo(14.3,28,13.9,27.3).curveTo(13.7,26.9,13.7,26.5).curveTo(13.7,25,15.2,25).closePath();
	this.shape_302.setTransform(33,31.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginLinearGradientFill(["#E0D2A6","#E2D4A6"],[0,1],-0.8,24.1,1.4,-28.5).beginStroke().moveTo(28.8,-24).curveTo(29.6,-20.2,29.6,-17.9).lineTo(29.6,-6.1).curveTo(29.6,-1.2,29.1,18.6).curveTo(29.4,25.8,29.9,28.6).lineTo(23.6,28.5).lineTo(23.1,28.4).lineTo(16.3,28.3).lineTo(14.8,27.9).lineTo(8.1,27.8).curveTo(1.7,27.7,0.4,27.4).curveTo(0.2,27.2,-0.4,27.1).lineTo(-9.2,27.1).lineTo(-9.2,27.3).curveTo(-11.2,27.4,-11.6,27.5).lineTo(-12.2,27.5).curveTo(-15.9,27.2,-16.6,27.2).curveTo(-17.6,27.2,-17.9,27.6).lineTo(-19.4,27.6).curveTo(-24.9,28.6,-29.3,28.9).curveTo(-29.2,28.6,-29.2,28.3).curveTo(-29.2,27.4,-29.5,25.5).curveTo(-29.9,23.5,-29.9,22.5).lineTo(-29.9,16.4).curveTo(-29.9,14.2,-28.9,0).curveTo(-28.9,-2.7,-29.4,-8).lineTo(-29.4,-22.3).curveTo(-29.7,-24.4,-29.7,-28.4).curveTo(-29.7,-28.7,-29.7,-28.9).lineTo(-26.4,-28.6).lineTo(28.1,-28.6).curveTo(28.2,-26.9,28.8,-24).closePath().moveTo(16.3,24.6).curveTo(14.7,24.6,14.7,26.1).curveTo(14.7,26.5,14.9,26.9).curveTo(15.3,27.6,16.3,27.6).curveTo(17,27.6,17.4,27.1).curveTo(17.8,26.7,17.8,26.1).curveTo(17.8,24.6,16.3,24.6).closePath().moveTo(19.1,19.1).lineTo(19.2,19.7).curveTo(19.5,20.4,20.3,20.4).curveTo(21,20.4,21.3,19.9).curveTo(21.6,19.5,21.6,19.1).curveTo(21.6,17.9,20.3,17.9).curveTo(19.1,17.9,19.1,19.1).closePath().moveTo(27,18.6).curveTo(25.5,18.6,25.5,20.1).curveTo(25.5,20.5,25.7,20.9).curveTo(26.1,21.6,27.1,21.6).curveTo(27.7,21.6,28.2,21.1).curveTo(28.6,20.7,28.6,20.1).curveTo(28.6,18.6,27,18.6).closePath().moveTo(-20.7,22.4).curveTo(-20.3,21.9,-20.3,21.4).curveTo(-20.3,19.9,-21.9,19.9).curveTo(-23.4,19.9,-23.4,21.4).curveTo(-23.4,21.8,-23.3,22.1).curveTo(-22.9,22.9,-21.9,22.9).curveTo(-21.2,22.9,-20.7,22.4).closePath().moveTo(-10,18.6).curveTo(-9.6,18.2,-9.6,17.6).curveTo(-9.6,16.1,-11.1,16.1).curveTo(-12.7,16.1,-12.7,17.6).curveTo(-12.7,17.6,-12.5,18.4).curveTo(-12.1,19.1,-11.2,19.1).curveTo(-10.5,19.1,-10,18.6).closePath().moveTo(-9.8,23.4).curveTo(-9.8,21.9,-11.4,21.9).curveTo(-12.9,21.9,-12.9,23.4).curveTo(-13,24.9,-11.4,24.9).curveTo(-10.7,24.9,-10.2,24.4).curveTo(-9.8,23.9,-9.8,23.4).closePath().moveTo(5.8,18.5).curveTo(6.2,19.4,7.3,19.4).curveTo(8.8,19.4,8.8,17.4).curveTo(8.8,15.3,7.3,15.3).curveTo(5.7,15.3,5.7,17.4).curveTo(5.7,18.2,5.8,18.5).closePath().moveTo(8,22.1).curveTo(6.5,22.1,6.5,23.6).curveTo(6.5,23.6,6.7,24.4).curveTo(7.1,25.1,8.1,25.1).curveTo(8.7,25.1,9.2,24.6).curveTo(9.6,24.2,9.6,23.6).curveTo(9.6,22.1,8,22.1).closePath().moveTo(-1.2,25.4).curveTo(-0.8,24.9,-0.8,24.4).curveTo(-0.8,22.9,-2.4,22.9).curveTo(-3.9,22.9,-3.9,24.4).curveTo(-3.9,24.4,-3.8,25.1).curveTo(-3.4,25.9,-2.4,25.9).curveTo(-1.7,25.9,-1.2,25.4).closePath().moveTo(0.1,14.9).curveTo(-0,16.4,1.6,16.4).curveTo(2.3,16.4,2.8,15.8).curveTo(3.3,15.1,3.3,14.4).curveTo(3.3,12.5,1.7,12.6).curveTo(0.1,12.7,0.1,14.9).closePath().moveTo(-4.1,12.6).curveTo(-5.7,12.6,-5.7,14.1).curveTo(-5.7,15.6,-4.2,15.6).curveTo(-3.5,15.6,-3,15.1).curveTo(-2.6,14.7,-2.6,14.1).curveTo(-2.6,12.6,-4.1,12.6).closePath().moveTo(-3.7,7.4).curveTo(-3.3,6.9,-3.3,6.4).curveTo(-3.3,4.9,-4.9,4.9).curveTo(-6.4,4.9,-6.4,6.4).curveTo(-6.4,6.4,-6.2,7.1).curveTo(-5.9,7.9,-4.9,7.9).curveTo(-4.2,7.9,-3.7,7.4).closePath().moveTo(-5.7,-4.1).curveTo(-5.7,-2.5,-4.2,-2.5).curveTo(-2.5,-2.5,-2.1,-5.8).curveTo(-2.1,-7.8,-3.9,-7).curveTo(-5.7,-6.3,-5.7,-4.1).closePath().moveTo(-7.3,3.9).curveTo(-7.3,0.9,-8.9,0.9).curveTo(-10.4,0.9,-10.4,3.9).curveTo(-10.4,4,-10.4,5.4).curveTo(-10.2,6.6,-8.9,6.6).curveTo(-7.7,6.6,-7.4,5.4).curveTo(-7.3,5.1,-7.3,3.9).closePath().moveTo(7.8,4.4).curveTo(7.8,2.9,6.3,2.9).curveTo(4.7,2.9,4.7,4.4).curveTo(4.7,5.9,6.3,5.9).curveTo(7,5.9,7.4,5.4).curveTo(7.8,4.9,7.8,4.4).closePath().moveTo(5.7,-5.3).curveTo(6.1,-5.7,6.1,-6.3).curveTo(6.1,-7.9,4.5,-7.9).curveTo(3,-7.9,3,-6.4).curveTo(3,-4.8,4.6,-4.8).curveTo(5.2,-4.8,5.7,-5.3).closePath().moveTo(-19.2,15.1).curveTo(-19.2,16.6,-17.7,16.6).curveTo(-17,16.6,-16.5,16.1).curveTo(-16.1,15.7,-16.1,15.1).curveTo(-16.1,13.6,-17.6,13.6).curveTo(-19.2,13.6,-19.2,15.1).closePath().moveTo(-24.9,9.1).curveTo(-26.4,9.1,-26.4,10.6).curveTo(-26.5,12.1,-24.9,12.1).curveTo(-24.2,12.1,-23.7,11.6).curveTo(-23.3,11.2,-23.3,10.6).curveTo(-23.3,9.1,-24.9,9.1).closePath().moveTo(-22.6,16.9).curveTo(-22.6,15,-24.1,15.1).curveTo(-25.7,15.1,-25.7,16.9).lineTo(-25.6,17.8).curveTo(-25.3,18.6,-24.2,18.6).curveTo(-22.6,18.6,-22.6,16.9).closePath().moveTo(-24.6,-5.2).curveTo(-24.3,-4.3,-23.2,-4.3).curveTo(-21.6,-4.3,-21.6,-6).curveTo(-21.6,-8,-23.1,-7.9).curveTo(-24.7,-7.8,-24.7,-6.1).curveTo(-24.7,-5.6,-24.6,-5.2).closePath().moveTo(-14.2,2.5).curveTo(-15.9,2.4,-15.9,4.1).curveTo(-15.9,4.5,-15.7,4.9).curveTo(-15.3,5.6,-14.3,5.6).curveTo(-13.7,5.6,-13.3,5.4).curveTo(-12.6,4.9,-12.6,4.1).curveTo(-12.6,2.6,-14.2,2.5).closePath().moveTo(-21.4,1.6).curveTo(-20.7,1.6,-20.2,1.1).curveTo(-19.8,0.7,-19.8,0.1).curveTo(-19.8,-1.4,-21.4,-1.4).curveTo(-22.9,-1.4,-22.9,0.1).curveTo(-22.9,1.6,-21.4,1.6).closePath().moveTo(-14.4,-2.5).curveTo(-13.7,-2.5,-13.2,-3).curveTo(-12.8,-3.5,-12.8,-4).curveTo(-12.8,-5.6,-14.4,-5.6).curveTo(-15.9,-5.6,-15.9,-4.1).curveTo(-16,-2.5,-14.4,-2.5).closePath().moveTo(-15.2,-15.4).curveTo(-15.2,-13.8,-13.7,-13.8).curveTo(-13,-13.8,-12.5,-14.3).curveTo(-12.1,-14.7,-12.1,-15.3).curveTo(-12.1,-16.9,-13.6,-16.9).curveTo(-15.2,-16.9,-15.2,-15.4).closePath().moveTo(-24.4,-17.1).curveTo(-24.4,-15.5,-22.9,-15.5).curveTo(-22.2,-15.5,-21.7,-16).curveTo(-21.3,-16.5,-21.3,-17).curveTo(-21.3,-18.6,-22.9,-18.6).curveTo(-24.4,-18.6,-24.4,-17.1).closePath().moveTo(-17.4,-21.9).curveTo(-18.9,-21.8,-18.9,-20.1).curveTo(-19,-19.6,-18.8,-19.2).curveTo(-18.5,-18.3,-17.4,-18.3).curveTo(-16.6,-18.3,-16.2,-18.9).curveTo(-15.8,-19.4,-15.8,-20).curveTo(-15.8,-22,-17.4,-21.9).closePath().moveTo(-21,-25.8).curveTo(-20.6,-26.2,-20.6,-26.8).curveTo(-20.6,-28.4,-22.1,-28.4).curveTo(-23.7,-28.4,-23.7,-26.9).curveTo(-23.7,-25.3,-22.2,-25.3).curveTo(-21.5,-25.3,-21,-25.8).closePath().moveTo(5.2,-19.6).curveTo(5.2,-18,6.9,-18).curveTo(7.5,-18,8.3,-18.6).curveTo(9.3,-19.3,9.3,-20).curveTo(9.3,-22.1,7.3,-21.5).curveTo(5.2,-20.9,5.2,-19.6).closePath().moveTo(1.1,-9.5).curveTo(1.7,-9.5,2.2,-10).curveTo(2.6,-10.5,2.6,-11).curveTo(2.6,-14.6,1,-14.9).curveTo(-0.7,-15.2,-0.7,-12.5).curveTo(-0.8,-11.8,-0.6,-11).curveTo(-0.3,-9.5,1.1,-9.5).closePath().moveTo(-7.2,-10.6).curveTo(-6.8,-11.1,-6.8,-11.6).curveTo(-6.8,-12.9,-8.9,-13.8).curveTo(-10.9,-14.8,-10.9,-12.3).curveTo(-10.9,-11.7,-10.6,-11.1).curveTo(-10,-10,-8.4,-10).curveTo(-7.6,-10,-7.2,-10.6).closePath().moveTo(-10.9,-18.4).curveTo(-10.9,-16.8,-9.4,-16.8).curveTo(-8.7,-16.8,-8.2,-17.3).curveTo(-7.8,-17.7,-7.8,-18.3).curveTo(-7.8,-19.9,-9.4,-19.9).curveTo(-10.9,-19.9,-10.9,-18.4).closePath().moveTo(-11,-22).curveTo(-10.6,-22.5,-10.6,-23).curveTo(-10.6,-24.6,-12.1,-24.6).curveTo(-13.7,-24.6,-13.7,-23.1).curveTo(-13.7,-21.5,-12.2,-21.5).curveTo(-11.5,-21.5,-11,-22).closePath().moveTo(-1,-22.8).curveTo(-0.6,-23.2,-0.6,-23.8).curveTo(-0.6,-25.4,-2.1,-25.4).curveTo(-3.7,-25.4,-3.7,-23.9).curveTo(-3.7,-22.3,-2.2,-22.3).curveTo(-1.5,-22.3,-1,-22.8).closePath().moveTo(17,8.6).curveTo(17,9.1,17.5,10.1).curveTo(18.1,11.4,19.1,11.4).curveTo(20.6,11.4,20.6,9.4).curveTo(20.6,7.3,18.8,7).curveTo(17,6.8,17,8.6).closePath().moveTo(15.6,16.9).curveTo(15.6,14.4,14,14.5).curveTo(12.5,14.5,12.5,17).curveTo(12.5,18,12.5,18.3).curveTo(12.8,19.4,14.1,19.4).curveTo(15.3,19.4,15.6,18.3).curveTo(15.6,18.3,15.6,16.9).closePath().moveTo(9.2,5.4).curveTo(9.2,5.8,9.4,6.1).curveTo(9.8,6.9,10.8,6.9).curveTo(11.5,6.9,11.9,6.4).curveTo(12.3,5.9,12.3,5.4).curveTo(12.3,3.9,10.8,3.9).curveTo(9.2,3.9,9.2,5.4).closePath().moveTo(16,0).curveTo(14.2,-0.7,14.2,2).lineTo(14.4,3.4).curveTo(14.9,4.9,16.3,4.9).curveTo(17.8,4.9,17.8,3.4).curveTo(17.8,0.6,16,0).closePath().moveTo(26.7,4.1).curveTo(27.1,3.7,27.1,3.1).curveTo(27.1,1.6,25.5,1.6).curveTo(24,1.6,24,3.1).curveTo(24,3.5,24.2,3.9).curveTo(24.6,4.6,25.6,4.6).curveTo(26.2,4.6,26.7,4.1).closePath().moveTo(20.3,-4).curveTo(21.2,-4,21.6,-4.8).curveTo(21.8,-5.2,21.8,-5.7).curveTo(21.8,-7.4,20.3,-7.4).curveTo(18.7,-7.4,18.7,-5.7).curveTo(18.7,-4,20.3,-4).closePath().moveTo(24.6,-14.1).curveTo(24.6,-15.4,23.3,-15.4).curveTo(22.1,-15.4,22.1,-14.1).lineTo(22.2,-13.6).curveTo(22.5,-12.9,23.3,-12.9).curveTo(24,-12.9,24.3,-13.4).curveTo(24.6,-13.7,24.6,-14.1).closePath().moveTo(10.8,-10.1).curveTo(9.2,-10.1,9.2,-8.6).curveTo(9.2,-8.2,9.4,-7.8).curveTo(9.8,-7,10.8,-7).curveTo(11.5,-7,11.9,-7.5).curveTo(12.3,-8,12.3,-8.5).curveTo(12.3,-10.1,10.8,-10.1).closePath().moveTo(16.6,-17.8).curveTo(16.6,-19.4,15,-19.4).curveTo(13.5,-19.4,13.5,-17.9).curveTo(13.5,-17.4,13.7,-17).curveTo(14.1,-16.3,15.1,-16.3).curveTo(15.7,-16.3,16.2,-16.8).curveTo(16.6,-17.2,16.6,-17.8).closePath().moveTo(19.2,-23.3).curveTo(19.6,-23.7,19.6,-24.3).curveTo(19.6,-25.9,18,-25.9).curveTo(16.5,-25.9,16.5,-24.4).curveTo(16.5,-23.9,16.7,-23.5).curveTo(17.1,-22.8,18.1,-22.8).curveTo(18.7,-22.8,19.2,-23.3).closePath().moveTo(23.1,-19.8).curveTo(23.7,-19.8,24.2,-20.3).curveTo(24.6,-20.7,24.6,-21.3).curveTo(24.6,-22.9,23,-22.9).curveTo(21.5,-22.9,21.5,-21.4).curveTo(21.5,-20.9,21.7,-20.5).curveTo(22.1,-19.8,23.1,-19.8).closePath();
	this.shape_303.setTransform(31.9,32.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#B19560").beginStroke().moveTo(31.4,-25.9).curveTo(31.6,-24.2,31.6,-19.3).lineTo(31.6,-6.3).curveTo(31.6,-2.3,31.1,18.3).lineTo(31.6,26.7).curveTo(31.6,27.1,31.6,28.8).curveTo(31.6,29,31.6,29.2).curveTo(31.6,29.3,31.6,29.4).curveTo(31.6,29.8,31.4,30).curveTo(31.1,30.2,30.8,30.3).lineTo(24,30.3).lineTo(23.5,30.2).lineTo(16.8,30.1).curveTo(12,31.4,8.5,30.7).curveTo(7.9,30.4,5.1,30.3).curveTo(2.3,30.2,0,29.9).lineTo(-7.3,29.8).curveTo(-7.6,29.8,-8.3,29.8).curveTo(-15.1,31,-19,30.4).curveTo(-20.1,30.5,-23,30.5).curveTo(-25.9,30.5,-28.4,30.4).curveTo(-31,30.3,-31.3,29.9).curveTo(-31.4,29.8,-31.4,29.5).curveTo(-31.4,29,-30.6,28.8).curveTo(-31.4,27.7,-31.6,22.7).curveTo(-31.6,16.4,-31.6,16.3).lineTo(-31.6,7.9).curveTo(-31.6,6.8,-31.1,4).curveTo(-30.6,1.1,-30.6,-0.3).curveTo(-30.6,-2.8,-31.1,-7.9).lineTo(-31.1,-22.1).curveTo(-31.4,-23.6,-31.4,-26.6).curveTo(-31.4,-28.2,-30.4,-29.9).curveTo(-30.4,-30,-30.4,-30).curveTo(-30.4,-30.2,-30.1,-30.4).curveTo(-29.9,-30.8,-29.5,-31).lineTo(29.3,-31).curveTo(31.1,-30.9,31.1,-29.7).curveTo(31.1,-29.4,30.9,-29.1).curveTo(31,-28.5,31.2,-27.6).curveTo(31.4,-26.5,31.4,-25.9).closePath().moveTo(29,-24.2).curveTo(28.4,-27.1,28.3,-28.8).lineTo(-26.3,-28.8).lineTo(-29.5,-29.1).curveTo(-29.5,-28.9,-29.5,-28.6).curveTo(-29.5,-24.6,-29.3,-22.5).lineTo(-29.3,-8.2).curveTo(-28.8,-2.9,-28.8,-0.2).curveTo(-29.8,14,-29.8,16.2).lineTo(-29.8,22.3).curveTo(-29.8,23.3,-29.4,25.3).curveTo(-29,27.2,-29,28.1).curveTo(-29,28.4,-29.1,28.6).curveTo(-24.7,28.4,-19.3,27.4).lineTo(-17.7,27.4).curveTo(-17.4,27,-16.4,27).curveTo(-15.8,27,-12,27.3).lineTo(-11.4,27.3).curveTo(-11,27.2,-9,27.1).lineTo(-9,26.9).lineTo(-0.3,26.9).curveTo(0.4,27,0.5,27.2).curveTo(1.9,27.5,8.3,27.6).lineTo(15,27.7).lineTo(16.5,28.1).lineTo(23.3,28.2).lineTo(23.8,28.3).lineTo(30.1,28.4).curveTo(29.6,25.6,29.3,18.4).curveTo(29.8,-1.4,29.8,-6.3).lineTo(29.8,-18.1).curveTo(29.8,-20.4,29,-24.2).closePath();
	this.shape_304.setTransform(31.8,32.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginRadialGradientFill(["#C5D7D4","#889C98"],[0,1],-0.2,0.2,0,-0.2,0.2,41).beginStroke().moveTo(28.5,-28.6).curveTo(28.6,-27.8,28.9,-26.6).curveTo(29.4,-24.6,29.4,-23.5).curveTo(29.4,-20.1,29.6,-17.6).curveTo(29.9,-13.7,29.9,-5.9).curveTo(29.9,0.1,28.1,17.7).lineTo(28.6,28.6).curveTo(27.4,28.4,25.6,28.4).curveTo(23.5,28.4,17.5,29.1).lineTo(-20.9,29.1).curveTo(-27.4,28.3,-29.9,28.4).curveTo(-29.5,26.1,-29.4,21.2).curveTo(-29.2,16.3,-29.4,11.2).curveTo(-29.4,2.3,-29.6,-1.9).lineTo(-29.6,-13.3).curveTo(-29.9,-15.6,-29.9,-20).curveTo(-29.5,-27.3,-29.4,-28.8).curveTo(-29.3,-28.8,-29.1,-28.8).curveTo(-28,-28.8,-26.9,-29.1).lineTo(-10.4,-29.1).lineTo(-9.9,-29.1).lineTo(4.6,-28.6).lineTo(26.6,-28.6).curveTo(27.6,-28.5,28.5,-28.6).closePath();
	this.shape_305.setTransform(32.4,31.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#6B7775").beginStroke().moveTo(31.1,-30.5).curveTo(31.1,-30.1,30.8,-29.6).curveTo(31,-29.4,31.1,-29).curveTo(31.9,-27.6,31.9,-25.6).curveTo(31.7,-22.5,32,-18.9).curveTo(32.3,-14.6,32.4,-5.6).lineTo(32.1,6).curveTo(32.1,7.8,31.3,12.6).curveTo(30.6,17.4,30.6,17.6).lineTo(31.1,28.6).curveTo(31.1,29.6,30.9,30.3).curveTo(30.8,30.8,30.5,30.9).curveTo(30.2,31.3,29.6,31.3).curveTo(29.1,31.3,28.8,31).curveTo(27.6,31.1,25.4,31.1).lineTo(17.6,31.8).lineTo(-20.9,31.8).curveTo(-26.3,30.8,-30.5,30.5).curveTo(-30.7,30.8,-30.9,30.8).curveTo(-31.4,30.8,-31.8,30.3).curveTo(-32.1,30,-32.1,29.7).curveTo(-32.1,29.6,-32.1,29.5).curveTo(-32.3,28.9,-32.4,27.7).curveTo(-32.5,25.4,-31.9,22.9).lineTo(-31.9,-0.6).lineTo(-32.1,-1.3).lineTo(-32.1,-12.8).curveTo(-32.4,-15.1,-32.4,-19.9).lineTo(-32.4,-26.1).curveTo(-32.3,-26.4,-32.2,-27.6).curveTo(-32,-28.6,-31.9,-29.1).curveTo(-31.7,-29.8,-31.4,-30.1).curveTo(-31.3,-30.7,-30.7,-31).curveTo(-30,-31.3,-27.1,-31.8).lineTo(-10.1,-31.8).lineTo(-9.6,-31.6).lineTo(0.6,-31.5).curveTo(0.9,-31.4,2.5,-31.3).curveTo(4.1,-31.1,4.4,-31.1).lineTo(26.3,-31.1).lineTo(29.9,-31.8).curveTo(30.9,-31.8,31.1,-30.5).closePath().moveTo(28.5,-28.6).curveTo(27.6,-28.4,26.6,-28.5).lineTo(4.6,-28.5).lineTo(-9.9,-29).lineTo(-10.4,-29.1).lineTo(-26.9,-29.1).curveTo(-28,-28.8,-29.1,-28.8).curveTo(-29.3,-28.8,-29.4,-28.8).curveTo(-29.5,-27.2,-29.9,-19.9).curveTo(-29.9,-15.5,-29.6,-13.3).lineTo(-29.6,-1.8).curveTo(-29.4,2.4,-29.4,11.3).curveTo(-29.2,16.4,-29.4,21.2).curveTo(-29.5,26.1,-29.9,28.5).curveTo(-27.4,28.4,-20.9,29.1).lineTo(17.5,29.1).curveTo(23.5,28.5,25.6,28.5).curveTo(27.4,28.5,28.6,28.6).lineTo(28.1,17.7).curveTo(29.9,0.1,29.9,-5.8).curveTo(29.9,-13.6,29.6,-17.6).curveTo(29.4,-20,29.4,-23.4).curveTo(29.4,-24.6,28.9,-26.6).curveTo(28.6,-27.8,28.5,-28.6).closePath();
	this.shape_306.setTransform(32.4,31.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginRadialGradientFill(["#9C863B","#725E2C"],[0,1],0.2,-0.2,0,0.2,-0.2,41.2).beginStroke().moveTo(28.8,-29.1).curveTo(28.8,-28,29.1,-26.9).lineTo(29.1,-10.4).lineTo(29.1,-9.9).lineTo(28.6,4.6).lineTo(28.6,26.6).curveTo(28.5,27.6,28.6,28.5).curveTo(27.8,28.6,26.6,28.9).curveTo(24.7,29.4,23.5,29.4).curveTo(20.1,29.4,17.6,29.6).curveTo(13.7,29.9,5.9,29.9).curveTo(-0,29.9,-17.6,28.1).lineTo(-28.6,28.6).curveTo(-28.4,27.4,-28.4,25.6).curveTo(-28.4,23.5,-29,17.5).lineTo(-29.1,-20.9).curveTo(-28.3,-27.4,-28.4,-29.9).curveTo(-26,-29.5,-21.1,-29.4).curveTo(-16.3,-29.2,-11.2,-29.4).curveTo(-2.3,-29.4,1.9,-29.6).lineTo(13.3,-29.6).curveTo(15.6,-29.9,20,-29.9).curveTo(27.3,-29.5,28.8,-29.4).curveTo(28.8,-29.3,28.8,-29.1).closePath();
	this.shape_307.setTransform(32.3,32.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#625025").beginStroke().moveTo(26.2,-32.4).curveTo(26.5,-32.3,27.7,-32.2).curveTo(28.7,-32,29.2,-31.9).curveTo(29.8,-31.7,30.1,-31.4).curveTo(30.7,-31.3,31,-30.7).curveTo(31.3,-30,31.8,-27.1).lineTo(31.8,-10.1).lineTo(31.6,-9.6).lineTo(31.5,0.6).curveTo(31.4,0.9,31.3,2.5).curveTo(31.2,4.1,31.1,4.4).lineTo(31.1,26.3).lineTo(31.8,29.9).curveTo(31.8,30.9,30.5,31.1).curveTo(30.1,31.1,29.6,30.8).curveTo(29.4,31,29,31.1).curveTo(27.7,31.9,25.7,31.9).curveTo(22.5,31.7,18.9,32).curveTo(14.6,32.3,5.6,32.4).lineTo(-6,32.1).curveTo(-7.7,32.1,-12.6,31.3).curveTo(-17.4,30.6,-17.6,30.6).lineTo(-28.6,31.1).curveTo(-29.6,31.1,-30.3,30.9).curveTo(-30.7,30.8,-30.9,30.5).curveTo(-31.2,30.2,-31.2,29.6).curveTo(-31.2,29.1,-31,28.8).curveTo(-31.1,27.6,-31.1,25.4).lineTo(-31.7,17.6).lineTo(-31.7,-20.9).curveTo(-30.7,-26.3,-30.5,-30.5).curveTo(-30.7,-30.7,-30.7,-30.9).curveTo(-30.7,-31.4,-30.3,-31.8).curveTo(-30,-32.1,-29.7,-32.1).curveTo(-29.6,-32.1,-29.5,-32.1).curveTo(-28.8,-32.3,-27.7,-32.4).curveTo(-25.4,-32.5,-22.9,-31.9).lineTo(0.7,-31.9).lineTo(1.3,-32.1).lineTo(12.8,-32.1).curveTo(15.1,-32.4,19.9,-32.4).closePath().moveTo(28.8,-29.1).curveTo(28.8,-29.3,28.8,-29.4).curveTo(27.2,-29.5,19.9,-29.9).curveTo(15.5,-29.9,13.3,-29.6).lineTo(1.8,-29.6).curveTo(-2.4,-29.4,-11.2,-29.4).curveTo(-16.4,-29.2,-21.2,-29.4).curveTo(-26.1,-29.5,-28.5,-29.9).curveTo(-28.4,-27.4,-29.1,-20.9).lineTo(-29.1,17.5).curveTo(-28.5,23.5,-28.5,25.6).curveTo(-28.5,27.4,-28.6,28.6).lineTo(-17.7,28.1).curveTo(-0.1,29.9,5.8,29.9).curveTo(13.7,29.9,17.6,29.6).curveTo(20,29.4,23.4,29.4).curveTo(24.6,29.4,26.6,28.9).curveTo(27.8,28.6,28.6,28.5).curveTo(28.5,27.6,28.5,26.6).lineTo(28.5,4.6).lineTo(29,-9.9).lineTo(29.1,-10.4).lineTo(29.1,-26.9).curveTo(28.8,-28,28.8,-29.1).closePath();
	this.shape_308.setTransform(32.4,32.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#7E7E7E").beginStroke().moveTo(26,-18.8).curveTo(26,-16.8,25.8,-15.9).lineTo(25.5,-15.8).curveTo(24.4,-21,24.4,-25.6).curveTo(24.4,-26.5,24.8,-26.7).curveTo(25.6,-24,25.8,-22.5).curveTo(26,-21.3,26,-18.8).closePath().moveTo(15,-21.1).curveTo(15,-21.8,15.5,-22).curveTo(15.8,-20.3,16.4,-15.1).curveTo(17.1,-10.2,17.1,-9.5).lineTo(17,-8.1).lineTo(16.7,-7.9).curveTo(16.2,-10.5,15.5,-14.4).curveTo(15.1,-17.4,15.1,-20.4).curveTo(15.1,-20.4,15,-21.1).closePath().moveTo(10.4,-14).curveTo(10.4,-15.3,10.8,-15.5).curveTo(11.4,-12.2,11.4,-9.7).lineTo(11.3,-9).lineTo(11,-8.7).curveTo(10.4,-9.1,10.4,-12.5).curveTo(10.4,-12.6,10.4,-14).closePath().moveTo(28.9,-0.7).lineTo(28.7,4.2).lineTo(28.4,4.5).curveTo(28,4.1,28,2).curveTo(28,-1.6,28.6,-2.3).curveTo(28.9,-1.7,28.9,-0.7).closePath().moveTo(20.2,2.6).curveTo(22.8,8.8,23.7,12.8).curveTo(24.5,16.5,24.5,22.3).curveTo(24.5,22.9,24.4,23.4).curveTo(24.3,23.9,24.2,24.2).lineTo(23.9,24.2).curveTo(23.9,24.2,23.8,23.4).curveTo(23.8,22.2,23.7,19.2).curveTo(23.6,16,23,13.9).curveTo(19.9,5.5,19.9,3.5).curveTo(19.9,2.8,20.2,2.6).closePath().moveTo(11.3,0.7).curveTo(11.7,8.4,11.7,8.6).curveTo(11.8,9.7,11.8,14.6).curveTo(11.8,16.2,11.7,18.4).curveTo(11.6,21.8,11.4,22.6).lineTo(11.1,22.6).curveTo(10.8,21.5,11,19.9).lineTo(11,11.8).curveTo(10.8,12.2,10.8,11.7).curveTo(10.7,7.9,10.6,6).curveTo(10.6,2.6,11.3,0.7).closePath().moveTo(3.5,-19.3).lineTo(3.5,-10.9).curveTo(3.7,-10,3.9,-7.4).curveTo(4.1,-5.1,4.1,-4.6).lineTo(4.1,-3.1).lineTo(3.8,-2.8).curveTo(3,-6.3,2.9,-9.1).curveTo(2.8,-10.5,2.8,-14.7).curveTo(2.8,-14.9,2.4,-17).curveTo(2.2,-19.2,3.2,-20).curveTo(3.4,-19.8,3.5,-19.3).closePath().moveTo(-7.1,-19.8).curveTo(-7.1,-19.2,-7.3,-18.6).lineTo(-7.5,-18.5).curveTo(-7.9,-19.9,-8.2,-20.7).curveTo(-8.2,-20.9,-8.2,-22.4).curveTo(-8.2,-24.3,-7.8,-24.5).curveTo(-7.1,-23.3,-7.1,-19.8).closePath().moveTo(-10.5,-6.3).curveTo(-10.5,-2.7,-10.5,-1.8).curveTo(-10.6,0.2,-11.1,3).lineTo(-11.4,3.1).curveTo(-11.6,2.5,-11.6,1.2).curveTo(-11.6,0.2,-11.2,-1.9).lineTo(-11.2,-11.4).curveTo(-11.1,-12,-10.8,-12.1).curveTo(-10.5,-10.6,-10.5,-6.3).closePath().moveTo(-21.8,-23.3).curveTo(-21.5,-22.8,-21.5,-22.2).curveTo(-21.5,-22.1,-22.2,-20.3).curveTo(-22.9,-18.4,-22.9,-17.4).curveTo(-22.9,-16.1,-22,-14.1).curveTo(-21,-12,-21,-8.8).curveTo(-21,-5.8,-21.6,-4).curveTo(-23.4,1.2,-23.7,2.1).lineTo(-24,2.1).lineTo(-24.1,0.8).curveTo(-24.1,-0.5,-22.9,-3.5).curveTo(-21.8,-6.5,-21.8,-8.9).curveTo(-21.8,-11.1,-22.7,-13.3).curveTo(-23.7,-15.5,-23.7,-17.4).curveTo(-23.7,-19,-23.2,-20.5).curveTo(-22.7,-22.3,-21.8,-23.3).closePath().moveTo(-27.2,-13.5).curveTo(-27.2,-12.1,-27.4,-11.3).curveTo(-27.7,-10.5,-28.7,-8.7).curveTo(-28.7,-8.8,-28.8,-8.9).curveTo(-28.8,-9,-28.8,-9.1).curveTo(-28.9,-9.4,-28.9,-9.7).curveTo(-28.9,-11.1,-28.5,-12.7).curveTo(-28.1,-14.4,-27.5,-15.3).curveTo(-27.2,-14.6,-27.2,-13.5).closePath().moveTo(-21,14.8).curveTo(-21,16.5,-21.6,19.6).curveTo(-22.2,22.9,-22.4,25.1).lineTo(-22.7,25.3).curveTo(-23,24.7,-23,22.4).curveTo(-23,19.7,-22.8,17.8).curveTo(-22.2,14.2,-21.4,13.6).curveTo(-21,14,-21,14.8).closePath().moveTo(-14.9,14.8).curveTo(-14.5,19.3,-14.5,20.3).curveTo(-14.5,21.2,-14.7,21.8).lineTo(-14.9,21.8).curveTo(-16.1,12.5,-16.1,10.7).curveTo(-16.1,9.5,-15.7,9.1).curveTo(-15.4,10.1,-14.9,14.8).closePath().moveTo(-12,13.3).curveTo(-12,9.7,-11.2,8.9).curveTo(-10.9,9.3,-10.9,10.1).curveTo(-10.9,10.8,-11.5,14.2).lineTo(-11.8,14.3).curveTo(-12,13.9,-12,13.3).closePath().moveTo(-4.7,3.2).curveTo(-4.7,5.5,-5.5,9.3).curveTo(-6.5,14.5,-6.7,16.1).lineTo(-7,16.3).curveTo(-7.4,16,-7.4,15.3).curveTo(-7.4,7.1,-5,2.2).curveTo(-4.7,2.6,-4.7,3.2).closePath().moveTo(5.7,11.2).lineTo(5.4,11.3).curveTo(5.1,10.3,5.1,8.5).curveTo(5.1,6.2,5.5,5.9).curveTo(5.9,6.8,5.9,8.6).curveTo(5.9,10.2,5.7,11.2).closePath().moveTo(-0,11.5).curveTo(0.2,12.2,0.2,13.4).curveTo(0.2,15.6,-0.6,17.7).curveTo(-1,19,-2.3,22.2).lineTo(-2.6,22.2).lineTo(-2.7,21.2).curveTo(-2.7,19.4,-1,15.5).curveTo(0.2,12.6,-0,11.5).closePath().moveTo(16.7,23.5).curveTo(16.3,26.3,16.1,26.7).curveTo(15.7,26.4,15.7,25.8).curveTo(15.7,24.4,15.9,22.6).curveTo(16.2,19.9,16.7,19.3).curveTo(17.1,19.7,17.1,20.5).curveTo(17.1,21,16.7,23.5).closePath();
	this.shape_309.setTransform(31.4,30,0.996,0.996);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#747474").beginStroke().moveTo(29.5,-10.9).curveTo(29.9,-7.1,29.9,-3.9).curveTo(29.9,-0.8,29,16.1).curveTo(29,17.4,29.2,18).lineTo(29.2,27.7).curveTo(28.9,27.8,27.8,28.4).curveTo(26.4,29.2,24.8,29.2).lineTo(10.9,29).curveTo(10.7,29.2,10.4,29.2).lineTo(-0.4,29.2).curveTo(-0.6,29.2,-0.7,29.1).curveTo(-0.9,29.2,-1.3,29.2).curveTo(-1.5,29.2,-1.6,29.2).curveTo(-2.6,29.3,-4.3,29.4).lineTo(-9.2,29.4).curveTo(-9.6,29.7,-10.5,29.7).curveTo(-11.8,29.7,-14.1,29.4).curveTo(-16.4,29.2,-17.5,29.1).lineTo(-18.9,29.1).curveTo(-19.1,29.1,-19.4,29.1).lineTo(-28.6,29).curveTo(-29.2,28.7,-29.2,28.1).curveTo(-29.2,27.9,-29,27.8).curveTo(-29.1,27.6,-29.1,27.4).curveTo(-29.1,27.2,-29,27.1).curveTo(-29.7,26.7,-29.8,23.7).curveTo(-29.6,19.7,-29.6,18.5).lineTo(-29.6,1.2).curveTo(-29.7,-0.3,-29.7,-1).curveTo(-29.7,-2.3,-29.6,-3.2).curveTo(-29.8,-4.9,-29.9,-5.8).curveTo(-29.9,-6.3,-29.8,-6.6).curveTo(-29.8,-6.9,-29.7,-7.4).curveTo(-29.7,-8.4,-29.6,-9.1).curveTo(-29.7,-9.7,-29.8,-10.4).lineTo(-29.4,-22).curveTo(-29.4,-22.1,-29.5,-27.4).curveTo(-29.5,-27.7,-29.5,-28).curveTo(-29.7,-28.2,-29.6,-28.5).curveTo(-29.6,-28.6,-29.6,-28.7).curveTo(-29.6,-28.8,-29.6,-28.8).lineTo(-29.6,-28.8).curveTo(-29.4,-29.4,-28.4,-29.5).curveTo(-28,-29.5,-27.8,-29.4).curveTo(-27,-29.5,-25.1,-29.7).lineTo(-25.1,-29.7).lineTo(-21,-29.7).lineTo(-20.6,-29.6).lineTo(-15.2,-29.6).curveTo(-14.5,-29.4,-13.3,-29.2).curveTo(-11.3,-29.7,-10,-29.6).curveTo(-9.6,-29.6,-9.3,-29.5).curveTo(-8.7,-29.5,-8.6,-29.6).lineTo(0.2,-29.6).curveTo(3.8,-29.4,4.6,-29.3).curveTo(4.8,-29.3,4.9,-29.3).lineTo(10.1,-29.3).lineTo(10.5,-29.4).lineTo(24,-29.4).curveTo(24.1,-29.3,24.5,-29.3).curveTo(25.1,-29.2,26.4,-29).curveTo(27.3,-28.9,27.9,-28.8).curveTo(28.1,-29.1,28.4,-29.1).curveTo(29.1,-29.1,29.3,-28.3).curveTo(29.8,-28.1,29.7,-26.8).lineTo(29.6,-14.9).curveTo(29.6,-14.3,29.7,-12.2).curveTo(29.7,-11.4,29.5,-10.9).closePath().moveTo(-10,-7.4).curveTo(-10,-11.7,-10.3,-13.2).curveTo(-10.6,-13.1,-10.8,-12.5).lineTo(-10.8,-3).curveTo(-11.2,-0.9,-11.2,0.1).curveTo(-11.2,1.4,-10.9,2).lineTo(-10.6,1.9).curveTo(-10.2,-0.9,-10.1,-2.9).curveTo(-10,-3.8,-10,-7.4).closePath().moveTo(-6.6,-20.9).curveTo(-6.6,-24.4,-7.4,-25.6).curveTo(-7.8,-25.4,-7.8,-23.5).curveTo(-7.8,-22,-7.7,-21.8).curveTo(-7.5,-21,-7.1,-19.6).lineTo(-6.8,-19.7).curveTo(-6.6,-20.3,-6.6,-20.9).closePath().moveTo(4,-20.4).curveTo(3.9,-20.9,3.6,-21.1).curveTo(2.6,-20.3,2.9,-18.1).curveTo(3.2,-16,3.2,-15.8).curveTo(3.2,-11.6,3.3,-10.2).curveTo(3.5,-7.4,4.2,-3.9).lineTo(4.5,-4.2).lineTo(4.6,-5.7).curveTo(4.6,-6.2,4.4,-8.5).curveTo(4.1,-11.1,4,-12).closePath().moveTo(11.7,-0.4).curveTo(11,1.5,11.1,4.9).curveTo(11.1,6.8,11.3,10.6).curveTo(11.3,11.1,11.5,10.7).lineTo(11.5,18.8).curveTo(11.2,20.4,11.5,21.6).lineTo(11.8,21.5).curveTo(12,20.7,12.2,17.3).curveTo(12.2,15.1,12.2,13.6).curveTo(12.2,8.6,12.2,7.6).curveTo(12.2,7.3,11.7,-0.4).closePath().moveTo(20.7,1.5).curveTo(20.4,1.7,20.4,2.4).curveTo(20.4,4.4,23.5,12.8).curveTo(24.1,14.9,24.2,18.1).curveTo(24.3,21.1,24.3,22.3).curveTo(24.3,23.1,24.3,23.1).lineTo(24.6,23.1).curveTo(24.8,22.8,24.8,22.3).curveTo(24.9,21.8,24.9,21.2).curveTo(24.9,15.4,24.2,11.7).curveTo(23.3,7.7,20.7,1.5).closePath().moveTo(29.4,-1.8).curveTo(29.4,-2.8,29.1,-3.4).curveTo(28.4,-2.7,28.4,0.9).curveTo(28.4,3.1,28.8,3.4).lineTo(29.1,3.1).closePath().moveTo(10.8,-15.1).curveTo(10.9,-13.7,10.9,-13.6).curveTo(10.9,-10.2,11.4,-9.8).lineTo(11.8,-10.1).lineTo(11.8,-10.8).curveTo(11.8,-13.3,11.3,-16.6).curveTo(10.8,-16.4,10.8,-15.1).closePath().moveTo(15.5,-22.2).curveTo(15.5,-21.5,15.5,-21.5).curveTo(15.5,-18.5,16,-15.5).curveTo(16.7,-11.6,17.1,-9).lineTo(17.5,-9.2).lineTo(17.5,-10.6).curveTo(17.5,-11.3,16.9,-16.2).curveTo(16.3,-21.4,15.9,-23.1).curveTo(15.5,-22.9,15.5,-22.2).closePath().moveTo(26.4,-19.9).curveTo(26.4,-22.4,26.3,-23.6).curveTo(26,-25.1,25.3,-27.8).curveTo(24.8,-27.6,24.8,-26.7).curveTo(24.8,-22.1,25.9,-16.9).lineTo(26.2,-17).curveTo(26.4,-17.9,26.4,-19.9).closePath().moveTo(17.1,22.4).curveTo(17.5,19.9,17.5,19.4).curveTo(17.5,18.6,17.2,18.2).curveTo(16.7,18.8,16.4,21.5).curveTo(16.2,23.3,16.2,24.7).curveTo(16.2,25.3,16.5,25.6).curveTo(16.8,25.2,17.1,22.4).closePath().moveTo(0.4,10.4).curveTo(0.6,11.6,-0.6,14.4).curveTo(-2.3,18.3,-2.3,20.1).lineTo(-2.2,21.1).lineTo(-1.9,21.1).curveTo(-0.6,17.9,-0.2,16.6).curveTo(0.6,14.6,0.6,12.3).curveTo(0.6,11.1,0.4,10.4).closePath().moveTo(6.1,10.1).curveTo(6.3,9.1,6.3,7.5).curveTo(6.3,5.7,6,4.8).curveTo(5.6,5.1,5.6,7.4).curveTo(5.6,9.2,5.8,10.2).closePath().moveTo(-4.3,2.1).curveTo(-4.3,1.6,-4.6,1.1).curveTo(-6.9,6,-6.9,14.2).curveTo(-6.9,14.9,-6.6,15.2).lineTo(-6.3,15).curveTo(-6,13.4,-5,8.2).curveTo(-4.3,4.4,-4.3,2.1).closePath().moveTo(-11.6,12.2).curveTo(-11.6,12.8,-11.3,13.2).lineTo(-11.1,13.1).curveTo(-10.4,9.7,-10.4,9).curveTo(-10.4,8.2,-10.8,7.8).curveTo(-11.6,8.6,-11.6,12.2).closePath().moveTo(-14.4,13.7).curveTo(-14.9,9,-15.2,8).curveTo(-15.6,8.4,-15.6,9.6).curveTo(-15.6,11.4,-14.5,20.7).lineTo(-14.2,20.7).curveTo(-14,20.1,-14,19.2).curveTo(-14,18.2,-14.4,13.7).closePath().moveTo(-20.6,13.7).curveTo(-20.6,12.9,-20.9,12.5).curveTo(-21.7,13.1,-22.3,16.7).curveTo(-22.6,18.6,-22.6,21.3).curveTo(-22.6,23.6,-22.2,24.2).lineTo(-21.9,24).curveTo(-21.8,21.8,-21.2,18.6).curveTo(-20.6,15.4,-20.6,13.7).closePath().moveTo(-26.7,-14.6).curveTo(-26.7,-15.7,-27,-16.4).curveTo(-27.7,-15.5,-28.1,-13.8).curveTo(-28.5,-12.2,-28.5,-10.8).curveTo(-28.5,-10.5,-28.4,-10.2).curveTo(-28.4,-10.1,-28.3,-10).curveTo(-28.3,-9.9,-28.2,-9.8).curveTo(-27.2,-11.6,-27,-12.4).curveTo(-26.7,-13.2,-26.7,-14.6).closePath().moveTo(-21.3,-24.4).curveTo(-22.2,-23.4,-22.7,-21.6).curveTo(-23.2,-20.1,-23.2,-18.5).curveTo(-23.2,-16.6,-22.3,-14.4).curveTo(-21.3,-12.2,-21.3,-10).curveTo(-21.3,-7.6,-22.5,-4.6).curveTo(-23.6,-1.6,-23.6,-0.3).lineTo(-23.5,1).lineTo(-23.2,1).curveTo(-23,0.1,-21.2,-5.1).curveTo(-20.6,-6.9,-20.6,-9.9).curveTo(-20.6,-13.1,-21.5,-15.2).curveTo(-22.5,-17.2,-22.5,-18.5).curveTo(-22.5,-19.5,-21.7,-21.4).curveTo(-21,-23.2,-21,-23.3).curveTo(-21,-23.9,-21.3,-24.4).closePath();
	this.shape_310.setTransform(30.9,31,0.996,0.996);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#484848").beginStroke().moveTo(29.6,-10.8).curveTo(29.8,-11.2,29.8,-12.1).curveTo(29.6,-14.1,29.6,-14.8).lineTo(29.8,-26.6).curveTo(29.9,-27.9,29.4,-28.1).curveTo(29.2,-28.9,28.5,-28.9).curveTo(28.1,-28.9,28,-28.6).curveTo(27.4,-28.7,26.5,-28.8).curveTo(25.2,-29,24.5,-29.1).curveTo(24.2,-29.1,24,-29.2).lineTo(10.5,-29.2).lineTo(10.1,-29.1).lineTo(5,-29.1).curveTo(4.9,-29.1,4.7,-29.1).curveTo(3.9,-29.3,0.3,-29.4).lineTo(-8.5,-29.4).curveTo(-8.6,-29.3,-9.2,-29.4).curveTo(-9.5,-29.4,-9.9,-29.4).curveTo(-11.3,-29.5,-13.3,-29).curveTo(-14.4,-29.2,-15.1,-29.4).lineTo(-20.6,-29.4).lineTo(-20.9,-29.6).lineTo(-25.1,-29.6).lineTo(-25.1,-29.5).curveTo(-26.9,-29.4,-27.7,-29.3).curveTo(-27.9,-29.4,-28.4,-29.3).curveTo(-29.3,-29.2,-29.5,-28.6).lineTo(-29.6,-28.6).curveTo(-29.6,-28.6,-29.5,-28.6).curveTo(-29.6,-28.4,-29.6,-28.4).curveTo(-29.6,-28,-29.4,-27.8).curveTo(-29.4,-27.6,-29.4,-27.2).curveTo(-29.3,-21.9,-29.3,-21.9).lineTo(-29.7,-10.2).curveTo(-29.6,-9.5,-29.6,-8.9).curveTo(-29.6,-8.2,-29.6,-7.2).curveTo(-29.7,-6.8,-29.7,-6.4).curveTo(-29.8,-6.1,-29.8,-5.6).curveTo(-29.8,-4.7,-29.6,-3).curveTo(-29.6,-2.1,-29.6,-0.9).curveTo(-29.6,-0.1,-29.6,1.4).lineTo(-29.6,18.6).curveTo(-29.6,19.9,-29.7,23.9).curveTo(-29.6,26.9,-28.9,27.3).curveTo(-29.1,27.4,-29.1,27.5).curveTo(-29.1,27.8,-28.9,28).curveTo(-29.1,28.1,-29.1,28.3).curveTo(-29.1,28.9,-28.5,29.1).lineTo(-19.4,29.2).curveTo(-19.1,29.2,-18.8,29.2).lineTo(-17.4,29.2).curveTo(-16.4,29.4,-14.1,29.6).curveTo(-11.7,29.9,-10.4,29.9).curveTo(-9.5,29.9,-9.1,29.6).lineTo(-4.2,29.6).curveTo(-2.5,29.5,-1.6,29.4).curveTo(-1.4,29.4,-1.2,29.4).curveTo(-0.9,29.4,-0.6,29.3).curveTo(-0.5,29.4,-0.3,29.4).lineTo(10.5,29.4).curveTo(10.8,29.4,11,29.1).lineTo(24.9,29.4).curveTo(26.5,29.4,27.9,28.5).curveTo(29,28,29.3,27.9).lineTo(29.3,18.1).curveTo(29.1,17.5,29.1,16.2).curveTo(30,-0.6,30,-3.8).curveTo(30,-6.9,29.6,-10.8).closePath().moveTo(-31.2,-31.3).lineTo(31.3,-31.3).lineTo(31.3,31.3).lineTo(-2.5,31.3).curveTo(-4.3,31.2,-6.9,31.2).curveTo(-9.9,31.1,-12.1,31.3).lineTo(-31.3,31.3).lineTo(-31.3,-23.1).curveTo(-31.3,-23.4,-31.2,-23.6).curveTo(-31.2,-24,-31.3,-24.4).lineTo(-31.3,-31.2).closePath();
	this.shape_311.setTransform(30.9,30.9,0.996,0.996);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#2E2E2E").beginStroke().moveTo(24.6,-26.4).curveTo(25.3,-23.8,25.6,-22.3).curveTo(25.7,-21.1,25.7,-18.6).curveTo(25.7,-16.6,25.5,-15.7).lineTo(25.2,-15.6).curveTo(24.1,-20.8,24.1,-25.4).curveTo(24.1,-26.2,24.6,-26.4).closePath().moveTo(15.3,-21.8).curveTo(15.7,-20.1,16.3,-14.9).curveTo(16.9,-10.1,16.9,-9.4).lineTo(16.9,-8.1).lineTo(16.5,-7.8).curveTo(16.1,-10.4,15.4,-14.2).curveTo(14.9,-17.2,14.9,-20.1).curveTo(14.9,-20.2,14.9,-20.9).curveTo(14.9,-21.6,15.3,-21.8).closePath().moveTo(10.7,-15.4).curveTo(11.3,-12.1,11.3,-9.6).lineTo(11.2,-8.9).lineTo(10.9,-8.6).curveTo(10.3,-9,10.3,-12.4).curveTo(10.3,-12.5,10.3,-13.9).curveTo(10.3,-15.1,10.7,-15.4).closePath().moveTo(28.6,-0.6).lineTo(28.4,4.2).lineTo(28.1,4.5).curveTo(27.7,4.1,27.7,2).curveTo(27.7,-1.6,28.3,-2.3).curveTo(28.6,-1.7,28.6,-0.6).closePath().moveTo(20,2.5).curveTo(22.6,8.8,23.5,12.6).curveTo(24.2,16.4,24.2,22.1).curveTo(24.2,23.3,23.9,24).lineTo(23.6,24).curveTo(23.6,23.9,23.5,19).curveTo(23.4,15.8,22.8,13.8).curveTo(19.7,5.5,19.7,3.5).curveTo(19.7,2.8,20,2.5).closePath().moveTo(11.7,14.5).curveTo(11.7,16,11.6,18.2).curveTo(11.5,21.5,11.3,22.4).lineTo(11,22.4).curveTo(10.7,21.3,10.9,19.7).lineTo(10.9,11.7).curveTo(10.7,12.1,10.7,11.6).curveTo(10.6,7.8,10.5,5.9).curveTo(10.5,2.5,11.2,0.8).curveTo(11.6,8.4,11.6,8.5).curveTo(11.7,9.6,11.7,14.5).closePath().moveTo(-7.7,-24.3).curveTo(-7,-23,-7,-19.6).curveTo(-7,-18.9,-7.2,-18.4).lineTo(-7.4,-18.3).curveTo(-7.8,-19.7,-8.1,-20.5).curveTo(-8.1,-20.7,-8.1,-22.2).curveTo(-8.1,-24,-7.7,-24.3).closePath().moveTo(-10.6,-11.9).curveTo(-10.3,-10.5,-10.3,-6.2).curveTo(-10.3,-2.6,-10.4,-1.8).curveTo(-10.5,0.3,-10.9,3).lineTo(-11.2,3).curveTo(-11.5,2.5,-11.5,1.1).curveTo(-11.5,0.2,-11.1,-1.9).lineTo(-11.1,-11.3).curveTo(-10.9,-11.9,-10.6,-11.9).closePath().moveTo(3.5,-10.8).curveTo(3.7,-9.9,3.9,-7.3).curveTo(4.1,-5,4.1,-4.6).lineTo(4.1,-3.1).lineTo(3.8,-2.8).curveTo(3,-6.3,2.9,-8.9).curveTo(2.8,-10.4,2.8,-14.6).curveTo(2.8,-14.7,2.4,-16.8).curveTo(2.2,-19,3.2,-19.8).curveTo(3.4,-19.6,3.5,-19.1).closePath().moveTo(-21.5,-23.1).curveTo(-21.2,-22.6,-21.2,-22).curveTo(-21.2,-21.9,-21.9,-20.1).curveTo(-22.7,-18.2,-22.7,-17.2).curveTo(-22.7,-15.9,-21.7,-13.9).curveTo(-20.8,-11.9,-20.8,-8.7).curveTo(-20.8,-5.7,-21.4,-3.9).curveTo(-23.2,1.2,-23.4,2).lineTo(-23.7,2).lineTo(-23.8,0.8).curveTo(-23.8,-0.4,-22.7,-3.5).curveTo(-21.5,-6.4,-21.5,-8.8).curveTo(-21.5,-10.9,-22.5,-13.1).curveTo(-23.4,-15.3,-23.4,-17.2).curveTo(-23.4,-18.8,-22.9,-20.3).curveTo(-22.4,-22.1,-21.5,-23.1).closePath().moveTo(-26.9,-13.4).curveTo(-26.9,-12,-27.1,-11.2).curveTo(-27.4,-10.4,-28.4,-8.6).curveTo(-28.6,-8.9,-28.6,-9.6).curveTo(-28.6,-11,-28.2,-12.6).curveTo(-27.8,-14.3,-27.2,-15.1).curveTo(-26.9,-14.4,-26.9,-13.4).closePath().moveTo(-14.7,14.7).curveTo(-14.3,19.1,-14.3,20.1).curveTo(-14.3,21,-14.5,21.5).lineTo(-14.8,21.6).curveTo(-15.9,12.4,-15.9,10.6).curveTo(-15.9,9.4,-15.5,9).curveTo(-15.2,10,-14.7,14.7).closePath().moveTo(-11.6,14.1).curveTo(-11.9,13.8,-11.9,13.1).curveTo(-11.9,9.6,-11.1,8.8).curveTo(-10.7,9.3,-10.7,10).curveTo(-10.7,10.6,-11.4,14.1).closePath().moveTo(-20.8,14.6).curveTo(-20.8,16.4,-21.4,19.5).curveTo(-22,22.7,-22.1,24.8).lineTo(-22.4,25).curveTo(-22.8,24.5,-22.8,22.2).curveTo(-22.8,19.5,-22.5,17.6).curveTo(-21.9,14.1,-21.1,13.5).curveTo(-20.8,13.9,-20.8,14.6).closePath().moveTo(-4.7,3.2).curveTo(-4.7,5.5,-5.4,9.3).curveTo(-6.4,14.4,-6.6,15.9).lineTo(-6.9,16.1).curveTo(-7.3,15.8,-7.3,15.1).curveTo(-7.3,7,-5,2.1).curveTo(-4.7,2.6,-4.7,3.2).closePath().moveTo(-0,11.4).curveTo(0.2,12,0.2,13.3).curveTo(0.2,15.5,-0.6,17.5).curveTo(-1,18.9,-2.3,22).lineTo(-2.6,22).lineTo(-2.7,21).curveTo(-2.7,19.3,-1,15.3).curveTo(0.2,12.5,-0,11.4).closePath().moveTo(5.8,8.5).curveTo(5.8,10.1,5.6,11.1).lineTo(5.3,11.1).curveTo(5.1,10.2,5.1,8.5).curveTo(5.1,6.1,5.5,5.8).curveTo(5.8,6.7,5.8,8.5).closePath().moveTo(16.9,20.3).curveTo(16.9,20.8,16.5,23.3).curveTo(16.2,26,15.9,26.5).curveTo(15.6,26.1,15.6,25.5).curveTo(15.6,24.1,15.8,22.4).curveTo(16.1,19.8,16.6,19.1).curveTo(16.9,19.5,16.9,20.3).closePath();
	this.shape_312.setTransform(31.4,31.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#484848").beginStroke().moveTo(29.4,-28.3).curveTo(29.5,-28.3,29.5,-28.3).curveTo(28.9,-26.9,28.9,-25.4).curveTo(28.9,-22.1,29.8,-15.4).curveTo(30.8,-8.6,30.8,-3.7).curveTo(30.8,-0.6,29.9,16.1).curveTo(29.9,17.4,30.1,18).lineTo(30.1,27.7).curveTo(29.8,27.8,28.7,28.3).curveTo(27.2,29.1,25.6,29.1).lineTo(18.5,28.9).curveTo(15.1,28.7,14.8,28.6).lineTo(4,28.3).lineTo(3.3,27.8).lineTo(-6.8,27.7).curveTo(-7.2,27.6,-9.8,27.4).lineTo(-19.4,27.3).curveTo(-20.4,27.2,-24.1,27.3).curveTo(-26.9,27.4,-26.9,27.1).curveTo(-26.9,27.1,-26.9,27).curveTo(-28.2,27.1,-29.4,27.3).curveTo(-28.8,24.1,-29,12.5).curveTo(-29,5.2,-30.8,-10).lineTo(-30.3,-21.6).curveTo(-30.3,-21.6,-30.4,-26.9).curveTo(-30.4,-27.7,-30.6,-28.3).lineTo(-14.9,-28.3).curveTo(-12.1,-29.1,-10.3,-29.1).curveTo(-9.1,-28.9,-8.9,-29).lineTo(0.1,-29).curveTo(4.6,-28.8,5,-28.7).lineTo(10.4,-28.7).lineTo(10.8,-28.8).lineTo(24.6,-28.8).curveTo(25.3,-28.7,27.1,-28.5).curveTo(28.9,-28.3,29.4,-28.3).closePath().moveTo(16.2,19.3).curveTo(16.2,18.6,15.9,18.1).curveTo(15.4,18.8,15.1,21.4).curveTo(14.9,23.2,14.9,24.5).curveTo(14.9,25.1,15.2,25.5).curveTo(15.5,25,15.8,22.3).curveTo(16.2,19.8,16.2,19.3).closePath().moveTo(5.1,7.5).curveTo(5.1,5.7,4.8,4.8).curveTo(4.4,5.2,4.4,7.5).curveTo(4.4,9.2,4.6,10.2).lineTo(4.9,10.1).curveTo(5.1,9.2,5.1,7.5).closePath().moveTo(-0.8,10.4).curveTo(-0.5,11.5,-1.7,14.3).curveTo(-3.4,18.3,-3.4,20).lineTo(-3.3,21).lineTo(-3,21).curveTo(-1.7,17.9,-1.3,16.6).curveTo(-0.5,14.5,-0.5,12.3).curveTo(-0.5,11.1,-0.8,10.4).closePath().moveTo(-5.4,2.2).curveTo(-5.4,1.6,-5.7,1.2).curveTo(-8,6,-8,14.2).curveTo(-8,14.8,-7.6,15.2).lineTo(-7.3,14.9).curveTo(-7.1,13.4,-6.1,8.3).curveTo(-5.4,4.5,-5.4,2.2).closePath().moveTo(-21.5,13.7).curveTo(-21.5,12.9,-21.8,12.5).curveTo(-22.6,13.1,-23.3,16.7).curveTo(-23.5,18.5,-23.5,21.2).curveTo(-23.5,23.5,-23.1,24.1).lineTo(-22.8,23.8).curveTo(-22.7,21.7,-22.1,18.5).curveTo(-21.5,15.4,-21.5,13.7).closePath().moveTo(-12.3,13.2).lineTo(-12.1,13.1).curveTo(-11.4,9.7,-11.4,9).curveTo(-11.4,8.3,-11.8,7.8).curveTo(-12.6,8.6,-12.6,12.2).curveTo(-12.6,12.8,-12.3,13.2).closePath().moveTo(-15.4,13.7).curveTo(-15.9,9,-16.2,8).curveTo(-16.6,8.4,-16.6,9.6).curveTo(-16.6,11.4,-15.5,20.6).lineTo(-15.3,20.6).curveTo(-15,20,-15,19.1).curveTo(-15,18.2,-15.4,13.7).closePath().moveTo(-27.6,-14.3).curveTo(-27.6,-15.4,-27.9,-16.1).curveTo(-28.5,-15.2,-28.9,-13.5).curveTo(-29.3,-12,-29.3,-10.6).curveTo(-29.3,-9.9,-29.1,-9.6).curveTo(-28.1,-11.4,-27.8,-12.2).curveTo(-27.6,-13,-27.6,-14.3).closePath().moveTo(-22.3,-24).curveTo(-23.1,-23.1,-23.6,-21.3).curveTo(-24.1,-19.7,-24.1,-18.2).curveTo(-24.1,-16.3,-23.2,-14.1).curveTo(-22.3,-11.9,-22.3,-9.8).curveTo(-22.3,-7.4,-23.4,-4.5).curveTo(-24.5,-1.4,-24.5,-0.2).lineTo(-24.4,1.1).lineTo(-24.1,1.1).curveTo(-23.9,0.2,-22.1,-4.9).curveTo(-21.5,-6.7,-21.5,-9.7).curveTo(-21.5,-12.9,-22.4,-14.9).curveTo(-23.4,-16.9,-23.4,-18.2).curveTo(-23.4,-19.2,-22.6,-21).curveTo(-21.9,-22.8,-21.9,-23).curveTo(-21.9,-23.5,-22.3,-24).closePath().moveTo(2.8,-11.7).lineTo(2.8,-20).curveTo(2.7,-20.6,2.5,-20.8).curveTo(1.5,-20,1.7,-17.8).curveTo(2.1,-15.7,2.1,-15.5).curveTo(2.1,-11.3,2.1,-9.9).curveTo(2.3,-7.2,3.1,-3.8).lineTo(3.4,-4).lineTo(3.4,-5.5).curveTo(3.4,-6,3.2,-8.3).curveTo(3,-10.8,2.8,-11.7).closePath().moveTo(-11.3,-12.9).curveTo(-11.6,-12.8,-11.8,-12.3).lineTo(-11.8,-2.9).curveTo(-12.2,-0.8,-12.2,0.2).curveTo(-12.2,1.5,-11.9,2.1).lineTo(-11.6,2).curveTo(-11.2,-0.7,-11.1,-2.8).curveTo(-11,-3.6,-11,-7.2).curveTo(-11,-11.5,-11.3,-12.9).closePath().moveTo(-8.4,-25.2).curveTo(-8.8,-25,-8.8,-23.2).curveTo(-8.8,-21.7,-8.8,-21.5).curveTo(-8.5,-20.7,-8.1,-19.3).lineTo(-7.9,-19.3).curveTo(-7.7,-19.9,-7.7,-20.6).curveTo(-7.7,-24,-8.4,-25.2).closePath().moveTo(11,13.5).curveTo(11,8.7,10.9,7.6).curveTo(10.9,7.4,10.5,-0.2).curveTo(9.8,1.6,9.8,4.9).curveTo(9.9,6.8,10,10.6).curveTo(10,11.1,10.2,10.7).lineTo(10.2,18.7).curveTo(10,20.3,10.3,21.4).lineTo(10.6,21.4).curveTo(10.8,20.6,10.9,17.2).curveTo(11,15.1,11,13.5).closePath().moveTo(19.3,1.6).curveTo(19,1.8,19,2.5).curveTo(19,4.5,22.1,12.8).curveTo(22.6,14.8,22.8,18).curveTo(22.9,22.9,22.9,23).lineTo(23.2,23).curveTo(23.5,22.3,23.5,21.1).curveTo(23.5,15.4,22.8,11.7).curveTo(21.9,7.8,19.3,1.6).closePath().moveTo(27.9,-1.6).curveTo(27.9,-2.7,27.6,-3.2).curveTo(27,-2.5,27,1).curveTo(27,3.1,27.4,3.5).lineTo(27.6,3.2).closePath().moveTo(10,-16.3).curveTo(9.6,-16.1,9.6,-14.8).curveTo(9.6,-13.5,9.6,-13.3).curveTo(9.6,-10,10.1,-9.6).lineTo(10.5,-9.8).lineTo(10.6,-10.5).curveTo(10.6,-13.1,10,-16.3).closePath().moveTo(14.6,-22.8).curveTo(14.1,-22.6,14.1,-21.9).curveTo(14.2,-21.2,14.2,-21.1).curveTo(14.2,-18.2,14.6,-15.2).curveTo(15.4,-11.4,15.8,-8.8).lineTo(16.1,-9).lineTo(16.2,-10.3).curveTo(16.2,-11,15.6,-15.9).curveTo(15,-21.1,14.6,-22.8).closePath().moveTo(23.9,-27.4).curveTo(23.4,-27.2,23.4,-26.3).curveTo(23.4,-21.8,24.5,-16.6).lineTo(24.8,-16.7).curveTo(25,-17.6,25,-19.6).curveTo(25,-22,24.9,-23.2).curveTo(24.6,-24.7,23.9,-27.4).closePath();
	this.shape_313.setTransform(32.2,32.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#292929").beginStroke().moveTo(32.6,-29).curveTo(31.5,-22.7,31.5,-19.2).curveTo(31.5,-15,32.3,-11.9).curveTo(33.1,-8.7,33.1,-5.7).curveTo(33.1,-2.8,32.8,-2.4).lineTo(32.8,20.4).curveTo(32.6,21.3,32.6,25.8).curveTo(32.6,27,32.4,28.1).curveTo(32.8,28.1,32.8,28.7).curveTo(32.8,29.7,31.8,30.9).curveTo(30.4,32.5,28,32.3).lineTo(19.6,32.3).curveTo(18.7,32.1,14.4,31.8).lineTo(0.3,31.7).curveTo(-2,31.5,-7.2,31.5).curveTo(-12.4,31.5,-15.3,31.7).curveTo(-18.1,32,-19.5,31.8).curveTo(-23.1,32.5,-27.8,32.1).curveTo(-30.5,31.7,-30.9,31.7).curveTo(-32,31.7,-32.1,31.2).curveTo(-32.5,30.9,-32.5,30.3).curveTo(-32.5,29.9,-32.5,29.5).curveTo(-32.8,29.3,-32.8,29.2).curveTo(-32.8,29,-32.4,28.8).curveTo(-32.4,25.9,-32.1,21).curveTo(-31.7,14.8,-31.7,11.8).curveTo(-31.7,3.3,-32.4,-1.5).curveTo(-33.1,-6.3,-33.1,-10.8).curveTo(-33.1,-14.3,-32.3,-22.8).curveTo(-32.3,-23.8,-32.8,-25.6).curveTo(-33.1,-27.4,-33.1,-28).curveTo(-33.1,-28.9,-32.4,-29.3).curveTo(-32.8,-29.5,-32.8,-29.6).curveTo(-32.8,-30.1,-31.9,-30.5).curveTo(-24.9,-31.8,-21.1,-31.4).curveTo(-17.4,-31.1,-14.8,-31.4).curveTo(-12.3,-31.7,-9.3,-31.8).curveTo(-0.5,-32.7,8.3,-31.8).curveTo(16.6,-32.6,19.8,-32.3).curveTo(20.3,-31.7,25.1,-31.8).lineTo(31.1,-31.8).curveTo(31.6,-32.1,32,-32).curveTo(32.2,-32.2,32.4,-32.2).curveTo(32.9,-32.2,32.9,-30.8).curveTo(32.9,-30.5,32.9,-30.1).curveTo(32.9,-30,32.9,-29.6).curveTo(32.9,-29.3,32.6,-29).closePath().moveTo(29.4,-27.7).curveTo(28.9,-27.7,27.1,-27.9).curveTo(25.3,-28.1,24.6,-28.2).lineTo(10.8,-28.2).lineTo(10.4,-28.1).lineTo(5,-28.1).curveTo(4.6,-28.2,0.1,-28.4).lineTo(-8.9,-28.4).curveTo(-9.1,-28.3,-10.3,-28.5).curveTo(-12.1,-28.5,-14.9,-27.7).lineTo(-30.6,-27.7).curveTo(-30.4,-27.1,-30.4,-26.3).curveTo(-30.3,-21,-30.3,-21).lineTo(-30.8,-9.4).curveTo(-29,5.8,-29,13.1).curveTo(-28.8,24.7,-29.4,27.9).curveTo(-28.2,27.7,-26.9,27.6).curveTo(-26.9,27.7,-26.9,27.7).curveTo(-26.9,28,-24.1,27.9).curveTo(-20.4,27.8,-19.4,27.9).lineTo(-9.8,28).curveTo(-7.2,28.2,-6.8,28.3).lineTo(3.3,28.4).lineTo(4,28.9).lineTo(14.8,29.2).curveTo(15.1,29.3,18.5,29.5).lineTo(25.6,29.7).curveTo(27.2,29.7,28.7,28.9).curveTo(29.8,28.4,30.1,28.3).lineTo(30.1,18.6).curveTo(29.9,18,29.9,16.7).curveTo(30.8,0,30.8,-3.1).curveTo(30.8,-8,29.8,-14.8).curveTo(28.9,-21.5,28.9,-24.8).curveTo(28.9,-26.3,29.5,-27.7).curveTo(29.5,-27.7,29.4,-27.7).closePath();
	this.shape_314.setTransform(32.2,32.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#703A23").beginStroke().moveTo(26,-14.7).curveTo(26,-14.1,22.8,-13.4).curveTo(19.1,-12.5,18.6,-12.2).curveTo(17.9,-11.6,18.1,-9.8).curveTo(18.3,-8.3,17.4,-8.3).curveTo(16.8,-8.3,16.5,-9.6).curveTo(16.4,-10.3,16.4,-11).curveTo(16.4,-12.7,18.4,-13.8).curveTo(20.2,-14.7,24.1,-15.3).lineTo(24.3,-15.4).curveTo(23.8,-16.2,22.8,-17.6).curveTo(21.7,-19,21,-19.6).curveTo(20,-20.6,17.1,-21.8).curveTo(14.7,-22.8,14.7,-23).curveTo(14.7,-25.6,20.4,-21.6).curveTo(26,-17.5,26,-14.7).closePath().moveTo(24.4,-3.6).curveTo(24.4,-3.5,23.4,-1.1).curveTo(22.5,1.3,22.5,3.7).curveTo(22.5,6,25.3,8.3).curveTo(28.1,10.6,28.1,13.2).curveTo(28.1,14.2,28,14.6).curveTo(27.6,15.2,26.2,16.3).curveTo(22.8,18.9,22.8,19.1).curveTo(22.8,21.7,24.3,23.6).curveTo(25.8,25.5,25.8,26.2).curveTo(25.8,27.1,24.9,27.1).curveTo(24.2,27.1,24.1,26.6).curveTo(24.1,26.2,24.1,26.1).curveTo(24.1,26,20.3,19.3).curveTo(20.3,19.1,23.4,16.6).curveTo(26.6,14.2,26.6,13.1).curveTo(26.6,11.3,23.7,9).curveTo(20.9,6.7,20.9,3.7).curveTo(20.9,0.7,22.7,-2.5).curveTo(24.4,-5.7,24.4,-3.6).closePath().moveTo(8.5,-3.5).curveTo(8.8,-2.9,8.8,-2.3).curveTo(8.8,-1.6,8.7,-1.4).curveTo(8.6,-0.9,8,-0.9).curveTo(7.2,-0.9,7.2,-1.6).curveTo(7.2,-2,7.2,-2.6).curveTo(6.6,-3.7,6.6,-4.4).curveTo(6.6,-5.6,7.9,-8.5).curveTo(8.7,-10,9.9,-12.4).curveTo(7.1,-13.5,3.9,-15.9).curveTo(0.6,-18.4,0.6,-19.9).curveTo(0.6,-21.6,2.6,-23.6).curveTo(4.6,-25.5,4.6,-23.6).curveTo(4.6,-23.2,3.4,-22.1).curveTo(2.1,-21.1,2.1,-19.9).curveTo(2.1,-18.9,6.9,-15.8).curveTo(11.7,-12.7,11.7,-12.7).curveTo(11.7,-12.6,9.9,-9.2).curveTo(8.2,-5.9,8.2,-4.5).curveTo(8.2,-4,8.5,-3.5).closePath().moveTo(16.1,14.1).curveTo(16.1,15.2,13.2,17.7).curveTo(10.4,20.2,10.4,22.2).curveTo(10.4,22.7,10.6,25.2).curveTo(13.4,24.9,13.4,26).curveTo(13.4,26.9,11.1,26.9).curveTo(9.6,26.9,9.1,24.6).curveTo(8.9,22.2,8.9,22.2).curveTo(8.9,21.1,11,18.4).curveTo(13.6,15.4,14.5,14.2).curveTo(14.2,13.5,10.2,12).curveTo(6.4,10.5,6.4,9.8).curveTo(6.4,8.5,11.2,10.6).curveTo(16.1,12.8,16.1,14.1).closePath().moveTo(-7.2,-26.3).curveTo(-5.8,-28,-5.8,-26.2).curveTo(-7,-23.5,-7,-23).curveTo(-7,-20.9,-5,-19).curveTo(-2.9,-17.1,-2.9,-15.1).curveTo(-2.9,-14.1,-2.9,-14).curveTo(-3.2,-13.1,-4.3,-13.1).curveTo(-5.1,-13.1,-5.1,-13.8).curveTo(-5.1,-13.9,-4.7,-14.5).curveTo(-4.4,-15.1,-4.4,-15.4).curveTo(-4.4,-16.3,-6.5,-18.3).curveTo(-8.6,-20.4,-8.6,-23.1).curveTo(-8.6,-24.6,-7.2,-26.3).closePath().moveTo(-11.1,-18.1).curveTo(-11.4,-18.1,-13.4,-19.1).curveTo(-14.4,-19.7,-15.3,-20.2).curveTo(-16.2,-20.2,-16.6,-19.3).curveTo(-16.9,-18.9,-17.2,-18.7).curveTo(-17.8,-16.3,-17.8,-15.7).curveTo(-17.8,-13.7,-16.3,-12.3).curveTo(-14.7,-10.9,-14.7,-10).curveTo(-14.7,-9.7,-16.3,-5.5).curveTo(-17.9,-1.3,-18,-1.3).curveTo(-18.7,-1.3,-18.8,-1.7).curveTo(-18.8,-2,-18.8,-2.3).curveTo(-18.8,-2.8,-16.3,-9.9).curveTo(-16.3,-10.1,-17.8,-12).curveTo(-19.4,-14,-19.4,-15.7).curveTo(-19.4,-17.6,-18.3,-19.1).curveTo(-18.4,-19.2,-18.4,-19.3).curveTo(-18.4,-24.8,-10.4,-18.8).curveTo(-10.4,-18.1,-11.1,-18.1).closePath().moveTo(-26.7,-22.4).curveTo(-25.3,-19.4,-25.3,-18.1).curveTo(-25.3,-17.6,-26,-15.7).curveTo(-26.6,-13.7,-26.9,-13.7).curveTo(-28,-13.7,-27.7,-14.8).curveTo(-27.7,-15.6,-27.3,-16.5).curveTo(-26.9,-17.3,-26.9,-18).curveTo(-26.9,-18.4,-27.5,-20.2).curveTo(-28.1,-22,-28.1,-22.6).curveTo(-28.1,-25.4,-26.7,-22.4).closePath().moveTo(-25.4,-6.8).curveTo(-23.7,-3.1,-23.7,-1).curveTo(-23.7,-0.4,-23.9,-0.2).curveTo(-24.1,0.2,-24.5,0.9).curveTo(-25.1,2.2,-25.1,2.7).curveTo(-25.1,2.9,-23.5,5.2).curveTo(-21.8,7.4,-21.8,9.4).curveTo(-21.8,10.7,-22.2,12.8).curveTo(-22.6,14.9,-22.6,16.6).curveTo(-22.6,17.5,-22.7,17.9).curveTo(-23,19.1,-24,19.1).curveTo(-24.9,19.1,-24.8,18.4).lineTo(-24.4,14.7).curveTo(-24.4,14.5,-23.9,12.3).curveTo(-23.4,10.2,-23.4,9.5).curveTo(-23.4,7.1,-25,5.5).curveTo(-26.7,4,-26.7,2.7).curveTo(-26.7,1.2,-25.3,-0.6).curveTo(-25.1,-0.9,-24.9,-1).curveTo(-25.3,-2,-26,-4.1).curveTo(-26.5,-6.1,-27.1,-8).curveTo(-27.1,-10.6,-25.4,-6.8).closePath().moveTo(-8.3,-8.5).curveTo(-8.3,-8.2,-9,-6.8).curveTo(-9.7,-5.5,-9.7,-4.8).curveTo(-9.7,-3.1,-5.9,-0.1).curveTo(-2,2.9,-2,3.6).curveTo(-2,4,-3.2,4.7).curveTo(-4.3,5.8,-4.3,8.6).curveTo(-4.3,9.1,-4.2,11.2).curveTo(-4.2,13.1,-5.1,13.1).curveTo(-6.1,13.1,-5.9,9.3).curveTo(-5.9,4.6,-4.1,3.4).curveTo(-6,1.7,-9.2,-0.9).curveTo(-11.3,-2.9,-11.3,-4.8).curveTo(-11.3,-6.8,-9.8,-8.6).curveTo(-8.3,-10.5,-8.3,-8.5).closePath().moveTo(-2.6,19.5).curveTo(-3.2,19.5,-4.8,18.8).curveTo(-6.8,17.9,-8.3,17.6).lineTo(-13.9,17.6).curveTo(-13,18.6,-11.1,18.9).curveTo(-9.7,19.1,-9.7,20.2).curveTo(-11.6,24.5,-13.8,24.5).curveTo(-14.7,24.5,-14.6,23.8).curveTo(-14.6,23.5,-13.2,22.2).curveTo(-11.6,20.6,-11.3,20.2).curveTo(-11.7,19.9,-12,19.8).curveTo(-12.7,19.5,-14.3,19.5).curveTo(-15,19.2,-15.9,17.2).curveTo(-15.9,16.8,-15.5,16.5).curveTo(-15.1,16.1,-14.5,16).lineTo(-8.4,16).curveTo(-5.9,16.4,-4.5,16.7).curveTo(-1.8,17.4,-1.8,18.8).curveTo(-1.8,19.5,-2.6,19.5).closePath();
	this.shape_315.setTransform(33.2,34.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#80472F").beginStroke().moveTo(25,-27.3).curveTo(25,-31.1,28.4,-22.4).curveTo(28.4,-21.5,27.7,-21.5).curveTo(26.9,-21.5,25.9,-24.5).curveTo(25.4,-25.9,25,-27.3).closePath().moveTo(13.9,-13.1).lineTo(13.2,-13.4).curveTo(13.1,-15.3,12.1,-17.5).curveTo(11.1,-19.7,11.1,-20.7).curveTo(11.1,-22.5,12.9,-20).curveTo(14.7,-17.6,14.7,-15.4).curveTo(14.7,-13.6,13.9,-13.1).closePath().moveTo(17.4,2.1).curveTo(17.8,4.5,17.8,5.9).curveTo(17.8,7.1,17.1,7.1).curveTo(16.8,7.1,15.2,0.4).curveTo(15.2,-1.3,16.3,-0.1).curveTo(17.3,1.1,17.4,2.1).closePath().moveTo(24.2,13.1).curveTo(25.3,13.7,25.3,14.6).curveTo(25.3,15.2,24.5,15.7).lineTo(23.8,15.4).curveTo(23.8,15.1,23.5,14.4).curveTo(23.1,13.7,23.1,13.5).curveTo(23.1,12.5,24.2,13.1).closePath().moveTo(-12,-11).curveTo(-10.8,-12.9,-9.6,-14.2).curveTo(-7.1,-16.8,-7.1,-14.4).curveTo(-7.1,-13.8,-8.6,-12.1).curveTo(-10.2,-10.3,-11.1,-10.3).curveTo(-12,-10.3,-12,-11).closePath().moveTo(-22,-23.5).curveTo(-22.9,-23.5,-23,-24.7).curveTo(-23.1,-25.2,-23,-25.8).curveTo(-23,-28.9,-22.1,-27.2).curveTo(-21.3,-25.6,-21.3,-24.3).curveTo(-21.3,-23.5,-22,-23.5).closePath().moveTo(-20.7,-13.3).curveTo(-19.8,-14.1,-19.8,-12.2).curveTo(-19.8,-10.2,-20,-8.3).curveTo(-20.4,-4.5,-21.2,-4.5).curveTo(-22.1,-4.5,-22,-5.3).curveTo(-22,-5.4,-21.8,-7.1).curveTo(-21.6,-8.8,-21.6,-9.7).curveTo(-21.6,-12.6,-20.7,-13.3).closePath().moveTo(3.3,5).curveTo(4.5,2.7,4.5,4.8).curveTo(3,11.5,2.9,11.5).curveTo(1.9,11.5,2.1,8.8).curveTo(2.1,7.3,3.3,5).closePath().moveTo(6.6,21.1).curveTo(6.6,21.6,3.7,24.3).curveTo(2.9,24.3,3,23.4).curveTo(3,22.6,4.8,21).curveTo(6.6,19.4,6.6,21.1).closePath().moveTo(-21.4,20.8).curveTo(-15.9,9.2,-15.9,13.8).curveTo(-20.4,21.5,-20.6,21.5).curveTo(-21.5,21.5,-21.4,20.8).closePath().moveTo(-26.5,27.5).curveTo(-26.5,28.5,-27.2,28.5).curveTo(-28.4,28.5,-28.4,25.8).curveTo(-28.4,23.4,-27.4,25).curveTo(-26.5,26.7,-26.5,27.5).closePath();
	this.shape_316.setTransform(32.3,34.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#643926").beginStroke().moveTo(29.4,-31.5).curveTo(29.6,-31.2,30,-30.3).curveTo(30.5,-29.3,30.5,-29).lineTo(30.3,-26.3).curveTo(30.3,-26.3,30.3,-25.4).lineTo(30.2,-25.4).lineTo(30.2,-19).curveTo(30,-11.7,30,-11.2).curveTo(30,-8.5,30.8,2.4).curveTo(30.8,4.7,30.3,8.5).curveTo(29.8,12.3,29.8,12.3).curveTo(29.8,13.3,30.4,15.7).curveTo(31,18,31,20.8).curveTo(31,23.8,30.6,25.1).curveTo(30.2,26.5,30.2,28.3).curveTo(30.2,28.3,30.2,29.8).curveTo(30.2,29.9,30.3,30).lineTo(29.5,30).lineTo(25,31.1).lineTo(13.1,31.1).curveTo(9.9,30.9,9.6,30.8).lineTo(-3.1,30.8).curveTo(-5.5,31.1,-10.1,31.6).curveTo(-14.7,32.1,-20.3,32.1).curveTo(-25.1,32.1,-29.6,30.7).curveTo(-30.4,30.5,-31,30.4).curveTo(-30.2,29.6,-30,27.9).lineTo(-30,24.5).curveTo(-31,15.2,-31,15).curveTo(-31,14.3,-30.7,12.4).curveTo(-30.4,10.7,-30.2,10.2).lineTo(-30.2,2.6).curveTo(-30.1,2.1,-30,-0.5).curveTo(-29.8,-3,-29.8,-4.2).curveTo(-29.8,-5.5,-30.1,-8.1).curveTo(-30.4,-10.7,-30.6,-11.7).curveTo(-31,-13.2,-31,-15.5).curveTo(-31.1,-16.8,-31,-19.2).curveTo(-30.8,-22.9,-30.6,-25).curveTo(-30.7,-24.9,-30.8,-24.9).lineTo(-30.8,-27.3).curveTo(-30.6,-28.1,-30.6,-29.3).curveTo(-30.6,-31.1,-30.6,-31.2).lineTo(-29.1,-31.2).curveTo(-27.3,-30.8,-26.8,-30.8).lineTo(-16.3,-30.8).curveTo(-12.7,-31,-12,-31.3).lineTo(-1.3,-31.1).curveTo(-0.1,-31.1,0.6,-31.3).lineTo(9.8,-31.4).curveTo(10.1,-31.5,13,-32.1).lineTo(21.1,-32.1).lineTo(22,-31.9).lineTo(25.7,-31.9).curveTo(26.9,-31.3,28,-31.4).curveTo(28.6,-31.4,29.4,-31.5).closePath().moveTo(14.1,-11.1).curveTo(14.9,-11.6,14.9,-13.3).curveTo(14.9,-15.5,13.1,-18).curveTo(11.3,-20.5,11.3,-18.7).curveTo(11.3,-17.7,12.3,-15.5).curveTo(13.3,-13.2,13.4,-11.3).closePath().moveTo(25.2,-25.3).curveTo(25.6,-23.9,26.1,-22.4).curveTo(27.1,-19.5,27.9,-19.5).curveTo(28.6,-19.5,28.6,-20.3).curveTo(25.2,-29,25.2,-25.3).closePath().moveTo(25.5,-1.2).curveTo(25.5,-3.3,23.8,-0.1).curveTo(22.1,3.1,22.1,6.1).curveTo(22.1,9.1,24.9,11.4).curveTo(27.7,13.7,27.7,15.5).curveTo(27.7,16.6,24.6,19).curveTo(21.5,21.5,21.5,21.7).curveTo(25.3,28.4,25.3,28.5).curveTo(25.3,28.6,25.2,29).curveTo(25.3,29.5,26.1,29.5).curveTo(27,29.5,27,28.6).curveTo(27,27.9,25.5,26).curveTo(24,24.1,24,21.5).curveTo(24,21.3,27.4,18.7).curveTo(28.8,17.6,29.1,17).curveTo(29.3,16.6,29.3,15.6).curveTo(29.3,13,26.5,10.7).curveTo(23.7,8.4,23.7,6.1).curveTo(23.7,3.7,24.6,1.3).curveTo(25.5,-1.1,25.5,-1.2).closePath().moveTo(27.2,-12.3).curveTo(27.2,-15.1,21.5,-19.2).curveTo(15.9,-23.2,15.9,-20.6).curveTo(15.9,-20.4,18.3,-19.4).curveTo(21.1,-18.2,22.2,-17.2).curveTo(22.8,-16.6,23.9,-15.2).curveTo(25,-13.8,25.4,-13).lineTo(25.3,-12.9).curveTo(21.4,-12.3,19.6,-11.4).curveTo(17.5,-10.3,17.5,-8.6).curveTo(17.5,-7.9,17.7,-7.2).curveTo(17.9,-5.9,18.5,-5.9).curveTo(19.5,-5.9,19.3,-7.4).curveTo(19,-9.2,19.8,-9.8).curveTo(20.2,-10.1,23.9,-11).curveTo(27.2,-11.7,27.2,-12.3).closePath().moveTo(17.6,4.1).curveTo(17.5,3.1,16.5,1.9).curveTo(15.4,0.7,15.4,2.4).curveTo(17,9.1,17.3,9.1).curveTo(18,9.1,18,7.9).curveTo(18,6.5,17.6,4.1).closePath().moveTo(17.2,16.5).curveTo(17.2,15.2,12.4,13).curveTo(7.5,10.9,7.5,12.2).curveTo(7.5,12.9,11.4,14.4).curveTo(15.4,15.9,15.6,16.6).curveTo(14.7,17.8,12.1,20.8).curveTo(10,23.5,10,24.6).curveTo(10,24.6,10.2,27).curveTo(10.8,29.3,12.3,29.3).curveTo(14.5,29.3,14.5,28.4).curveTo(14.5,27.3,11.8,27.6).curveTo(11.6,25.1,11.6,24.6).curveTo(11.6,22.6,14.4,20.1).curveTo(17.2,17.6,17.2,16.5).closePath().moveTo(9.6,-1.1).curveTo(9.3,-1.6,9.3,-2.1).curveTo(9.3,-3.5,11.1,-6.8).curveTo(12.8,-10.2,12.8,-10.3).curveTo(12.8,-10.3,8.1,-13.4).curveTo(3.3,-16.5,3.3,-17.5).curveTo(3.3,-18.7,4.5,-19.7).curveTo(5.8,-20.8,5.8,-21.2).curveTo(5.8,-23.1,3.7,-21.2).curveTo(1.7,-19.2,1.7,-17.5).curveTo(1.7,-16,5.1,-13.5).curveTo(8.2,-11.1,11,-10).curveTo(9.8,-7.6,9.1,-6.1).curveTo(7.7,-3.2,7.7,-2).curveTo(7.7,-1.3,8.4,-0.2).curveTo(8.3,0.4,8.3,0.8).curveTo(8.3,1.5,9.1,1.5).curveTo(9.7,1.5,9.9,1).curveTo(9.9,0.8,9.9,0.1).curveTo(9.9,-0.5,9.6,-1.1).closePath().moveTo(24.4,15.1).curveTo(23.3,14.5,23.3,15.5).curveTo(23.3,15.7,23.7,16.5).curveTo(24,17.2,24,17.5).lineTo(24.7,17.7).curveTo(25.5,17.2,25.5,16.6).curveTo(25.5,15.7,24.4,15.1).closePath().moveTo(-10,-15.7).curveTo(-9.2,-15.7,-9.2,-16.4).curveTo(-17.2,-22.4,-17.2,-16.9).curveTo(-17.2,-16.8,-17.2,-16.7).curveTo(-18.3,-15.2,-18.3,-13.3).curveTo(-18.3,-11.6,-16.7,-9.6).curveTo(-15.1,-7.7,-15.1,-7.5).curveTo(-17.6,-0.4,-17.6,0.1).curveTo(-17.7,0.4,-17.6,0.7).curveTo(-17.5,1.1,-16.9,1.1).curveTo(-16.7,1.1,-15.2,-3.1).curveTo(-13.6,-7.3,-13.6,-7.6).curveTo(-13.6,-8.5,-15.1,-9.9).curveTo(-16.7,-11.3,-16.7,-13.3).curveTo(-16.7,-13.9,-16,-16.3).curveTo(-15.8,-16.5,-15.5,-16.9).curveTo(-15,-17.8,-14.2,-17.8).curveTo(-13.3,-17.3,-12.3,-16.7).curveTo(-10.3,-15.7,-10,-15.7).closePath().moveTo(-6,-23.9).curveTo(-7.4,-22.2,-7.4,-20.7).curveTo(-7.4,-18,-5.4,-15.9).curveTo(-3.3,-13.9,-3.3,-13).curveTo(-3.3,-12.7,-3.6,-12.1).curveTo(-3.9,-11.5,-3.9,-11.4).curveTo(-3.9,-10.7,-3.1,-10.7).curveTo(-2,-10.7,-1.8,-11.6).curveTo(-1.7,-11.7,-1.7,-12.7).curveTo(-1.7,-14.7,-3.8,-16.6).curveTo(-5.9,-18.5,-5.9,-20.6).curveTo(-5.9,-21.1,-4.6,-23.8).curveTo(-4.6,-25.6,-6,-23.9).closePath().moveTo(-21.8,-21.5).curveTo(-21.1,-21.5,-21.1,-22.2).curveTo(-21.1,-23.5,-21.9,-25.2).curveTo(-22.8,-26.9,-22.8,-23.7).curveTo(-22.9,-23.2,-22.8,-22.6).curveTo(-22.7,-21.5,-21.8,-21.5).closePath().moveTo(-11.8,-9).curveTo(-11.8,-8.3,-10.9,-8.3).curveTo(-10,-8.3,-8.4,-10.1).curveTo(-6.9,-11.7,-6.9,-12.4).curveTo(-6.9,-14.8,-9.4,-12.1).curveTo(-10.6,-10.8,-11.8,-9).closePath().moveTo(-25.6,-20).curveTo(-27,-23,-27,-20.2).curveTo(-27,-19.6,-26.4,-17.8).curveTo(-25.7,-16,-25.7,-15.6).curveTo(-25.7,-14.9,-26.2,-14.1).curveTo(-26.6,-13.2,-26.6,-12.4).curveTo(-26.8,-11.3,-25.8,-11.3).curveTo(-25.5,-11.3,-24.8,-13.3).curveTo(-24.2,-15.2,-24.2,-15.7).curveTo(-24.2,-17,-25.6,-20).closePath().moveTo(-20.5,-11.3).curveTo(-21.4,-10.5,-21.4,-7.7).curveTo(-21.4,-6.8,-21.6,-5.1).curveTo(-21.8,-3.3,-21.8,-3.2).curveTo(-21.9,-2.5,-21,-2.5).curveTo(-20.2,-2.5,-19.8,-6.2).curveTo(-19.6,-8.1,-19.6,-10.2).curveTo(-19.6,-12,-20.5,-11.3).closePath().moveTo(-7.1,-6.1).curveTo(-7.1,-8.1,-8.6,-6.2).curveTo(-10.1,-4.4,-10.1,-2.4).curveTo(-10.1,-0.5,-8,1.5).curveTo(-4.9,4.1,-2.9,5.8).curveTo(-4.7,7,-4.7,11.7).curveTo(-5,15.5,-4,15.5).curveTo(-3.1,15.5,-3,13.6).curveTo(-3.2,11.5,-3.2,11).curveTo(-3.2,8.2,-2,7.1).curveTo(-0.9,6.4,-0.9,6).curveTo(-0.9,5.3,-4.7,2.3).curveTo(-8.6,-0.7,-8.6,-2.4).curveTo(-8.6,-3.1,-7.9,-4.4).curveTo(-7.1,-5.8,-7.1,-6.1).closePath().moveTo(-24.2,-4.4).curveTo(-25.9,-8.2,-25.9,-5.6).curveTo(-25.4,-3.7,-24.8,-1.7).curveTo(-24.2,0.4,-23.8,1.4).curveTo(-24,1.5,-24.1,1.8).curveTo(-25.5,3.6,-25.5,5.1).curveTo(-25.5,6.4,-23.9,7.9).curveTo(-22.2,9.5,-22.2,11.9).curveTo(-22.2,12.6,-22.7,14.7).curveTo(-23.2,16.9,-23.2,17.1).lineTo(-23.7,20.8).curveTo(-23.8,21.5,-22.9,21.5).curveTo(-21.8,21.5,-21.6,20.3).curveTo(-21.5,19.9,-21.5,19).curveTo(-21.5,17.3,-21.1,15.2).curveTo(-20.6,13.1,-20.6,11.8).curveTo(-20.6,9.8,-22.3,7.6).curveTo(-24,5.3,-24,5.1).curveTo(-24,4.6,-23.4,3.3).curveTo(-22.9,2.6,-22.8,2.2).curveTo(-22.5,2,-22.5,1.4).curveTo(-22.5,-0.7,-24.2,-4.4).closePath().moveTo(6.8,23.2).curveTo(6.8,21.5,5,23.1).curveTo(3.2,24.7,3.2,25.5).curveTo(3.1,26.3,3.9,26.3).curveTo(6.8,23.6,6.8,23.2).closePath().moveTo(3.5,7).curveTo(2.3,9.3,2.3,10.9).curveTo(2.1,13.5,3.1,13.5).curveTo(3.2,13.5,4.7,6.9).curveTo(4.7,4.7,3.5,7).closePath().moveTo(-1.5,21.9).curveTo(-0.7,21.9,-0.7,21.2).curveTo(-0.7,19.8,-3.3,19.1).curveTo(-4.8,18.8,-7.3,18.4).lineTo(-13.3,18.4).curveTo(-14,18.5,-14.4,18.9).curveTo(-14.7,19.2,-14.7,19.6).curveTo(-13.8,21.6,-13.1,21.9).curveTo(-11.5,21.9,-10.8,22.2).curveTo(-10.5,22.3,-10.1,22.6).curveTo(-10.4,23,-12,24.6).curveTo(-13.5,25.9,-13.5,26.2).curveTo(-13.6,26.9,-12.7,26.9).curveTo(-10.4,26.9,-8.6,22.6).curveTo(-8.6,21.5,-10,21.3).curveTo(-11.9,21,-12.7,20).lineTo(-7.1,20).curveTo(-5.6,20.3,-3.6,21.2).curveTo(-2,21.9,-1.5,21.9).closePath().moveTo(-26.3,29.6).curveTo(-26.3,28.7,-27.2,27.1).curveTo(-28.2,25.5,-28.2,27.9).curveTo(-28.2,30.5,-27,30.5).curveTo(-26.3,30.5,-26.3,29.6).closePath().moveTo(-21.2,22.8).curveTo(-21.3,23.5,-20.4,23.5).curveTo(-20.2,23.5,-15.7,15.9).curveTo(-15.7,11.3,-21.2,22.8).closePath();
	this.shape_317.setTransform(32.1,32.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#4F2D1D").beginStroke().moveTo(-11.8,-33).lineTo(-7.5,-33).curveTo(-6.4,-32.7,-4.5,-32.6).lineTo(-1.1,-32.6).lineTo(0.6,-33).lineTo(9.6,-33).lineTo(12.9,-33.7).lineTo(21.2,-33.7).lineTo(22.1,-33.5).lineTo(26,-33.5).curveTo(32.1,-34,32.1,-28.9).curveTo(32,-27,31.8,-25.9).lineTo(31.8,-18.5).lineTo(31.6,-18.1).lineTo(31.6,-4.4).curveTo(31.7,-4,32,-1.2).curveTo(32.4,1.7,32.4,2.3).curveTo(32.4,6.3,31.9,8).curveTo(31.3,9.8,31.3,12.2).curveTo(31.3,12.6,32,15.3).curveTo(32.6,17.9,32.6,20.7).curveTo(32.6,24.4,32.3,25.4).curveTo(32,26.4,32,30.4).curveTo(32,30.5,32,30.6).curveTo(32,30.7,32,30.8).curveTo(32,31.4,30.2,31.7).curveTo(26.7,32.3,25.2,32.7).lineTo(13.3,32.7).curveTo(10,32.5,9.6,32.4).lineTo(-3.3,32.4).curveTo(-6,32.7,-10.1,33.3).curveTo(-14.2,33.7,-20.3,33.7).curveTo(-26.5,33.7,-29.9,32.4).curveTo(-32.2,31.5,-32.2,30.8).curveTo(-32.2,30.6,-32,30.5).lineTo(-32.1,30.5).lineTo(-32.2,29).curveTo(-32.2,28.1,-31.9,26.8).curveTo(-31.6,25.4,-31.6,24.6).curveTo(-32.6,15.8,-32.6,15.2).curveTo(-32.6,12.7,-31.8,9.8).lineTo(-31.8,2).curveTo(-31.7,1.6,-31.5,-0.9).curveTo(-31.4,-3.3,-31.4,-4.3).curveTo(-31.4,-8,-32,-12.2).curveTo(-32.6,-16.5,-32.6,-19.1).lineTo(-32.6,-24.4).curveTo(-32.6,-24.6,-32.6,-24.7).lineTo(-32.6,-24.7).curveTo(-32.5,-24.9,-32.5,-25.2).curveTo(-32.2,-27.9,-32.2,-29.1).curveTo(-32.6,-30.6,-32.6,-31.4).curveTo(-32.4,-32.9,-30,-32.9).curveTo(-27.5,-32.9,-27.3,-32.8).curveTo(-27.1,-32.8,-26.6,-32.4).lineTo(-16.4,-32.4).curveTo(-13.1,-32.6,-11.8,-33).closePath().moveTo(29.4,-31.5).curveTo(28.6,-31.4,28,-31.4).curveTo(26.9,-31.3,25.7,-31.9).lineTo(22,-31.9).lineTo(21.1,-32.1).lineTo(13,-32.1).curveTo(10.1,-31.5,9.8,-31.4).lineTo(0.6,-31.3).curveTo(-0.1,-31.1,-1.3,-31.1).lineTo(-12,-31.3).curveTo(-12.7,-31,-16.3,-30.8).lineTo(-26.8,-30.8).curveTo(-27.3,-30.8,-29.1,-31.2).lineTo(-30.6,-31.2).curveTo(-30.6,-31.1,-30.6,-29.3).curveTo(-30.6,-28.1,-30.8,-27.3).lineTo(-30.8,-24.9).curveTo(-30.7,-24.9,-30.6,-25).curveTo(-30.8,-22.9,-31,-19.2).curveTo(-31.1,-16.8,-31,-15.5).curveTo(-31,-13.2,-30.6,-11.7).curveTo(-30.4,-10.7,-30.1,-8.1).curveTo(-29.8,-5.5,-29.8,-4.2).curveTo(-29.8,-3,-30,-0.5).curveTo(-30.1,2.1,-30.2,2.6).lineTo(-30.2,10.2).curveTo(-30.4,10.7,-30.7,12.4).curveTo(-31,14.3,-31,15).curveTo(-31,15.2,-30,24.5).lineTo(-30,27.9).curveTo(-30.2,29.6,-31,30.4).curveTo(-30.4,30.5,-29.6,30.7).curveTo(-25.1,32.1,-20.3,32.1).curveTo(-14.7,32.1,-10.1,31.6).curveTo(-5.5,31.1,-3.1,30.8).lineTo(9.6,30.8).curveTo(9.9,30.9,13.1,31.1).lineTo(25,31.1).lineTo(29.5,30).lineTo(30.3,30).curveTo(30.2,29.9,30.2,29.8).curveTo(30.2,28.3,30.2,28.3).curveTo(30.2,26.5,30.6,25.1).curveTo(31,23.8,31,20.8).curveTo(31,18,30.4,15.7).curveTo(29.8,13.3,29.8,12.3).curveTo(29.8,12.3,30.3,8.5).curveTo(30.8,4.7,30.8,2.4).curveTo(30,-8.5,30,-11.2).curveTo(30,-11.7,30.2,-19).lineTo(30.2,-25.4).lineTo(30.3,-25.4).curveTo(30.3,-26.3,30.3,-26.3).lineTo(30.5,-29).curveTo(30.5,-29.3,30,-30.3).curveTo(29.6,-31.2,29.4,-31.5).closePath();
	this.shape_318.setTransform(32.1,32.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#999999").beginStroke().moveTo(25.7,-22.4).curveTo(25.9,-21.2,25.9,-18.7).curveTo(25.9,-16.7,25.7,-15.8).lineTo(25.6,-15.8).lineTo(25.4,-15.7).curveTo(24.3,-20.9,24.3,-25.5).curveTo(24.3,-25.8,24.4,-26.1).curveTo(24.5,-26.5,24.7,-26.6).curveTo(25.5,-23.9,25.7,-22.4).closePath().moveTo(15.4,-21.9).curveTo(15.8,-20.2,16.4,-15).curveTo(17,-10.1,17,-9.4).lineTo(17,-8.1).lineTo(16.9,-8).lineTo(16.6,-7.8).curveTo(16.2,-10.4,15.5,-14.3).curveTo(15,-17.3,15,-20.3).curveTo(15,-20.3,15,-21).curveTo(15,-21.2,15,-21.3).curveTo(15.1,-21.8,15.4,-21.9).closePath().moveTo(10.8,-15.4).curveTo(11.4,-12.2,11.4,-9.6).lineTo(11.3,-8.9).lineTo(11.3,-8.8).lineTo(10.9,-8.6).curveTo(10.7,-8.8,10.5,-9.7).curveTo(10.4,-10.7,10.4,-12.3).curveTo(10.4,-12.3,10.4,-12.4).curveTo(10.4,-12.8,10.3,-13.8).curveTo(10.3,-13.9,10.3,-13.9).curveTo(10.3,-15.2,10.8,-15.4).closePath().moveTo(28.8,-0.6).lineTo(28.6,4.2).lineTo(28.3,4.5).curveTo(28.3,4.5,28.2,4.5).curveTo(27.9,4,27.9,2).curveTo(27.9,-1.2,28.4,-2.1).curveTo(28.5,-2.2,28.5,-2.2).curveTo(28.8,-1.7,28.8,-0.6).closePath().moveTo(20.1,2.7).curveTo(20.1,2.6,20.2,2.6).curveTo(22.8,8.8,23.6,12.8).curveTo(24.4,16.5,24.4,22.3).curveTo(24.4,23.5,24.1,24.2).lineTo(23.8,24.2).lineTo(23.8,24.1).curveTo(23.8,23.5,23.6,19.1).curveTo(23.5,15.9,23,13.9).curveTo(19.9,5.6,19.9,3.5).curveTo(19.9,2.9,20.1,2.7).closePath().moveTo(10.8,2.3).curveTo(11,1.5,11.2,0.9).curveTo(11.3,0.8,11.3,0.8).curveTo(11.7,8.4,11.7,8.6).curveTo(11.8,9.7,11.8,14.6).curveTo(11.8,16.2,11.7,18.3).curveTo(11.6,21.7,11.4,22.5).lineTo(11,22.6).curveTo(10.9,22.1,10.9,21.5).curveTo(10.9,21.4,10.9,21.2).curveTo(10.9,20.9,10.9,20.5).curveTo(10.9,20.2,11,19.8).lineTo(11,11.8).curveTo(10.8,12.2,10.8,11.7).curveTo(10.6,7.9,10.6,6).curveTo(10.6,5.8,10.6,5.6).closePath().moveTo(3.6,-19.2).lineTo(3.6,-10.8).curveTo(3.7,-9.9,4,-7.3).curveTo(4.2,-5,4.2,-4.6).lineTo(4.1,-3.1).lineTo(3.8,-2.8).curveTo(3.8,-3,3.7,-3.2).curveTo(3.7,-3.5,3.6,-3.7).curveTo(3.3,-5.1,3.1,-6.4).curveTo(2.9,-7.8,2.9,-9).curveTo(2.8,-10.4,2.8,-14.6).curveTo(2.8,-14.8,2.4,-16.9).curveTo(2.2,-19.1,3.2,-19.9).curveTo(3.5,-19.7,3.6,-19.2).closePath().moveTo(-7.6,-24.1).curveTo(-7,-22.8,-7,-19.7).curveTo(-7,-19.1,-7.2,-18.4).lineTo(-7.4,-18.4).lineTo(-7.5,-18.4).curveTo(-7.9,-19.8,-8.1,-20.6).curveTo(-8.2,-20.8,-8.2,-22.3).curveTo(-8.2,-24.1,-7.8,-24.4).curveTo(-7.7,-24.2,-7.6,-24.1).closePath().moveTo(-10.7,-12).curveTo(-10.7,-11.9,-10.6,-11.8).curveTo(-10.4,-10.3,-10.4,-6.2).curveTo(-10.4,-2.6,-10.4,-1.8).curveTo(-10.5,0.3,-11,3).lineTo(-11.2,3.1).lineTo(-11.3,3.1).curveTo(-11.5,2.5,-11.5,1.2).curveTo(-11.5,0.2,-11.1,-1.9).lineTo(-11.1,-11.4).curveTo(-11,-11.9,-10.7,-12).closePath().moveTo(-22.1,-20.2).curveTo(-22.8,-18.3,-22.8,-17.3).curveTo(-22.8,-16,-21.9,-14).curveTo(-20.9,-12,-20.9,-8.7).curveTo(-20.9,-5.7,-21.5,-4).curveTo(-23.3,1.2,-23.6,2.1).lineTo(-23.9,2.1).lineTo(-24,0.8).curveTo(-24,-0.4,-22.8,-3.5).curveTo(-21.7,-6.5,-21.7,-8.8).curveTo(-21.7,-11,-22.6,-13.2).curveTo(-23.6,-15.4,-23.6,-17.3).curveTo(-23.6,-18.9,-23.1,-20.4).curveTo(-22.6,-22.2,-21.7,-23.2).curveTo(-21.6,-23,-21.6,-22.9).curveTo(-21.4,-22.5,-21.4,-22.1).curveTo(-21.4,-22,-22.1,-20.2).closePath().moveTo(-27,-13.4).curveTo(-27,-12.1,-27.3,-11.3).curveTo(-27.5,-10.5,-28.5,-8.8).curveTo(-28.5,-8.7,-28.6,-8.6).curveTo(-28.8,-9,-28.8,-9.6).curveTo(-28.8,-11.1,-28.4,-12.6).curveTo(-28,-14.3,-27.3,-15.2).curveTo(-27.3,-15.1,-27.2,-14.9).curveTo(-27,-14.3,-27,-13.4).closePath().moveTo(-21.3,13.6).curveTo(-21.2,13.6,-21.2,13.7).curveTo(-20.9,14.1,-20.9,14.8).curveTo(-20.9,16.5,-21.5,19.6).curveTo(-22.1,22.9,-22.3,25).lineTo(-22.6,25.2).curveTo(-22.9,24.6,-22.9,22.4).curveTo(-22.9,19.6,-22.7,17.8).curveTo(-22.1,14.2,-21.3,13.6).closePath().moveTo(-15.6,9.1).curveTo(-15.6,9.1,-15.5,9.2).curveTo(-15.2,10.4,-14.8,14.8).curveTo(-14.4,19.3,-14.4,20.2).curveTo(-14.4,21.1,-14.6,21.7).curveTo(-14.6,21.7,-14.6,21.7).lineTo(-14.9,21.8).curveTo(-16,12.4,-16,10.7).curveTo(-16,9.5,-15.6,9.1).closePath().moveTo(-11.4,14.2).lineTo(-11.7,14.3).curveTo(-11.9,13.9,-11.9,13.3).curveTo(-11.9,9.7,-11.1,8.9).curveTo(-11.1,8.9,-11.1,8.9).curveTo(-10.8,9.4,-10.8,10.1).curveTo(-10.8,10.7,-11.4,14.2).closePath().moveTo(-4.7,3.2).curveTo(-4.7,5.6,-5.4,9.3).curveTo(-6.4,14.5,-6.7,16).lineTo(-6.9,16.2).lineTo(-7,16.3).curveTo(-7.3,15.9,-7.3,15.3).curveTo(-7.3,7.1,-5,2.2).curveTo(-5,2.2,-4.9,2.3).curveTo(-4.7,2.7,-4.7,3.2).closePath().moveTo(5.7,11.2).lineTo(5.4,11.2).curveTo(5.1,10.3,5.1,8.5).curveTo(5.1,6.2,5.5,5.9).curveTo(5.9,6.8,5.9,8.6).curveTo(5.9,10.2,5.7,11.2).closePath().moveTo(0.1,11.8).curveTo(0.2,12.4,0.2,13.4).curveTo(0.2,15.6,-0.6,17.7).curveTo(-0.8,18.3,-1.2,19.4).curveTo(-1.6,20.5,-2.2,22.1).curveTo(-2.3,22.1,-2.3,22.2).lineTo(-2.6,22.2).lineTo(-2.7,21.1).curveTo(-2.7,19.4,-1,15.4).curveTo(0.2,12.6,-0,11.4).curveTo(0,11.6,0.1,11.8).closePath().moveTo(16.6,23.4).curveTo(16.3,26.2,16,26.6).curveTo(15.9,26.5,15.8,26.3).curveTo(15.7,26,15.7,25.7).curveTo(15.7,24.3,15.9,22.5).curveTo(16.2,19.9,16.7,19.2).curveTo(17,19.7,17,20.5).curveTo(17,21,16.6,23.4).closePath();
	this.shape_319.setTransform(31.4,29.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#B4B4B4").beginStroke().moveTo(-31.1,-31.1).lineTo(31.1,-31.1).lineTo(31.1,31.1).lineTo(-2.5,31.1).curveTo(-4.3,31.1,-6.8,31.1).curveTo(-9.9,31,-12.1,31.1).lineTo(-31.1,31.1).lineTo(-31.1,-23).curveTo(-31.1,-23.3,-31.1,-23.6).curveTo(-31.1,-23.9,-31.1,-24.3).lineTo(-31.1,-31.1).closePath().moveTo(0.6,10.8).curveTo(0.5,10.6,0.5,10.5).curveTo(0.7,11.6,-0.5,14.5).curveTo(-2.2,18.4,-2.2,20.2).lineTo(-2.1,21.2).lineTo(-1.8,21.2).curveTo(-1.8,21.2,-1.7,21.1).curveTo(-1.1,19.6,-0.7,18.5).curveTo(-0.3,17.4,-0.1,16.7).curveTo(0.7,14.6,0.7,12.5).curveTo(0.7,11.5,0.6,10.8).closePath().moveTo(6.2,10.2).curveTo(6.4,9.3,6.4,7.6).curveTo(6.4,5.8,6,4.9).curveTo(5.6,5.3,5.6,7.6).curveTo(5.6,9.3,5.9,10.3).closePath().moveTo(-4.2,2.3).curveTo(-4.2,1.7,-4.4,1.4).curveTo(-4.5,1.3,-4.5,1.2).curveTo(-6.8,6.1,-6.8,14.3).curveTo(-6.8,15,-6.5,15.3).lineTo(-6.4,15.3).lineTo(-6.2,15.1).curveTo(-5.9,13.5,-4.9,8.4).curveTo(-4.2,4.6,-4.2,2.3).closePath().moveTo(-10.9,13.3).lineTo(-10.9,13.3).curveTo(-10.3,9.8,-10.3,9.1).curveTo(-10.3,8.4,-10.6,8).curveTo(-10.6,8,-10.6,7.9).curveTo(-11.4,8.7,-11.4,12.3).curveTo(-11.4,13,-11.2,13.3).closePath().moveTo(-15.1,8.1).curveTo(-15.5,8.5,-15.5,9.7).curveTo(-15.5,11.5,-14.4,20.8).lineTo(-14.1,20.8).curveTo(-14.1,20.7,-14.1,20.7).curveTo(-13.9,20.1,-13.9,19.3).curveTo(-13.9,18.3,-14.3,13.9).curveTo(-14.7,9.4,-15,8.3).curveTo(-15.1,8.2,-15.1,8.1).closePath().moveTo(-20.8,12.6).curveTo(-21.6,13.3,-22.2,16.8).curveTo(-22.4,18.7,-22.4,21.4).curveTo(-22.4,23.7,-22.1,24.3).lineTo(-21.8,24).curveTo(-21.6,21.9,-21,18.6).curveTo(-20.4,15.5,-20.4,13.8).curveTo(-20.4,13.1,-20.7,12.7).curveTo(-20.7,12.7,-20.8,12.6).closePath().moveTo(-26.5,-14.4).curveTo(-26.5,-15.3,-26.7,-15.9).curveTo(-26.8,-16,-26.8,-16.2).curveTo(-27.5,-15.3,-27.9,-13.6).curveTo(-28.3,-12,-28.3,-10.6).curveTo(-28.3,-9.9,-28.1,-9.6).curveTo(-28,-9.7,-28,-9.8).curveTo(-27,-11.4,-26.8,-12.2).curveTo(-26.5,-13,-26.5,-14.4).closePath().moveTo(-21.6,-21.1).curveTo(-20.9,-22.9,-20.9,-23.1).curveTo(-20.9,-23.5,-21.1,-23.9).curveTo(-21.1,-24,-21.2,-24.1).curveTo(-22.1,-23.2,-22.6,-21.4).curveTo(-23.1,-19.8,-23.1,-18.2).curveTo(-23.1,-16.3,-22.1,-14.2).curveTo(-21.2,-12,-21.2,-9.8).curveTo(-21.2,-7.4,-22.3,-4.5).curveTo(-23.5,-1.4,-23.5,-0.1).lineTo(-23.4,1.1).lineTo(-23.1,1.1).curveTo(-22.8,0.3,-21,-4.9).curveTo(-20.4,-6.7,-20.4,-9.7).curveTo(-20.4,-12.9,-21.4,-14.9).curveTo(-22.3,-16.9,-22.3,-18.2).curveTo(-22.3,-19.2,-21.6,-21.1).closePath().moveTo(-10.2,-13).curveTo(-10.5,-12.9,-10.6,-12.3).lineTo(-10.6,-2.8).curveTo(-11,-0.7,-11,0.2).curveTo(-11,1.5,-10.8,2.1).lineTo(-10.7,2.1).lineTo(-10.5,2.1).curveTo(-10,-0.7,-9.9,-2.7).curveTo(-9.9,-3.6,-9.9,-7.2).curveTo(-9.9,-11.2,-10.1,-12.8).curveTo(-10.2,-12.9,-10.2,-13).closePath().moveTo(-7.1,-25.1).curveTo(-7.2,-25.2,-7.3,-25.3).curveTo(-7.7,-25.1,-7.7,-23.3).curveTo(-7.7,-21.8,-7.6,-21.6).curveTo(-7.4,-20.8,-7,-19.3).lineTo(-6.9,-19.3).lineTo(-6.7,-19.4).curveTo(-6.5,-20,-6.5,-20.7).curveTo(-6.5,-23.7,-7.1,-25.1).closePath().moveTo(4.1,-20.1).curveTo(4,-20.7,3.7,-20.9).curveTo(2.7,-20.1,2.9,-17.8).curveTo(3.3,-15.7,3.3,-15.6).curveTo(3.3,-11.3,3.4,-9.9).curveTo(3.4,-8.7,3.6,-7.4).curveTo(3.8,-6.1,4.1,-4.6).curveTo(4.2,-4.4,4.2,-4.2).curveTo(4.3,-4,4.3,-3.7).lineTo(4.6,-4).lineTo(4.7,-5.5).curveTo(4.7,-6,4.5,-8.3).curveTo(4.2,-10.8,4.1,-11.8).closePath().moveTo(11.3,1.4).lineTo(11.1,4.6).curveTo(11.1,4.8,11.1,5).curveTo(11.1,6.9,11.3,10.7).curveTo(11.3,11.2,11.5,10.8).lineTo(11.5,18.9).curveTo(11.4,19.2,11.4,19.6).curveTo(11.4,19.9,11.4,20.2).curveTo(11.4,20.4,11.4,20.6).curveTo(11.4,21.2,11.5,21.6).lineTo(11.9,21.6).curveTo(12.1,20.8,12.2,17.4).curveTo(12.3,15.2,12.3,13.7).curveTo(12.3,8.8,12.2,7.7).curveTo(12.2,7.5,11.8,-0.2).curveTo(11.8,-0.1,11.7,-0.1).curveTo(11.5,0.6,11.3,1.4).closePath().moveTo(20.6,1.7).curveTo(20.4,2,20.4,2.6).curveTo(20.4,4.6,23.5,12.9).curveTo(24,15,24.1,18.2).curveTo(24.3,22.5,24.3,23.1).lineTo(24.3,23.2).lineTo(24.6,23.2).curveTo(24.9,22.5,24.9,21.3).curveTo(24.9,15.5,24.1,11.8).curveTo(23.3,7.9,20.7,1.6).curveTo(20.6,1.7,20.6,1.7).closePath().moveTo(29.3,-1.6).curveTo(29.3,-2.6,29,-3.2).curveTo(29,-3.1,28.9,-3).curveTo(28.4,-2.2,28.4,1).curveTo(28.4,3,28.7,3.5).curveTo(28.8,3.5,28.8,3.6).lineTo(29.1,3.3).closePath().moveTo(11.3,-16.4).curveTo(10.8,-16.2,10.8,-14.9).curveTo(10.8,-14.8,10.8,-14.7).curveTo(10.9,-13.7,10.9,-13.4).curveTo(10.9,-13.3,10.9,-13.2).curveTo(10.9,-11.6,11,-10.7).curveTo(11.2,-9.8,11.4,-9.6).lineTo(11.8,-9.8).lineTo(11.8,-9.8).lineTo(11.9,-10.5).curveTo(11.9,-13.1,11.3,-16.4).closePath().moveTo(15.9,-22.9).curveTo(15.6,-22.7,15.5,-22.3).curveTo(15.5,-22.1,15.5,-22).curveTo(15.5,-21.3,15.5,-21.2).curveTo(15.5,-18.2,16,-15.2).curveTo(16.7,-11.4,17.1,-8.8).lineTo(17.4,-9).lineTo(17.5,-9).lineTo(17.5,-10.3).curveTo(17.5,-11,16.9,-16).curveTo(16.3,-21.2,15.9,-22.9).closePath().moveTo(26.2,-23.3).curveTo(26,-24.8,25.2,-27.6).curveTo(25,-27.4,24.9,-27.1).curveTo(24.8,-26.8,24.8,-26.4).curveTo(24.8,-21.9,25.9,-16.7).lineTo(26.1,-16.7).lineTo(26.2,-16.7).curveTo(26.4,-17.7,26.4,-19.7).curveTo(26.4,-22.1,26.2,-23.3).closePath().moveTo(-6.5,27.8).lineTo(-6.4,27.8).curveTo(-6.5,27.8,-6.7,27.8).curveTo(-6.6,27.8,-6.5,27.8).closePath().moveTo(-25.8,27.3).lineTo(-25.9,27.3).lineTo(-25.8,27.3).closePath().moveTo(17.1,22.5).curveTo(17.5,20,17.5,19.5).curveTo(17.5,18.7,17.2,18.3).curveTo(16.7,18.9,16.4,21.6).curveTo(16.2,23.4,16.2,24.7).curveTo(16.2,25.1,16.3,25.3).curveTo(16.4,25.5,16.5,25.7).curveTo(16.8,25.2,17.1,22.5).closePath();
	this.shape_320.setTransform(30.9,30.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#878787").beginStroke("#878787").setStrokeStyle(1,1,1).moveTo(5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.9).curveTo(-5.4,2.3,-5.4,0).curveTo(-5.4,-2.3,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.3,5.5,0).closePath();
	this.shape_321.setTransform(32.3,45.2,0.803,0.803);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#878787").beginStroke("#878787").setStrokeStyle(1,1,1).moveTo(-5.4,0).curveTo(-5.4,-2.3,-3.9,-3.9).curveTo(-2.3,-5.4,0,-5.4).curveTo(2.3,-5.4,3.8,-3.9).curveTo(5.4,-2.3,5.4,0).curveTo(5.4,2.3,3.8,3.9).curveTo(2.3,5.5,0,5.5).curveTo(-2.3,5.5,-3.9,3.9).curveTo(-5.4,2.3,-5.4,0).closePath();
	this.shape_322.setTransform(43.5,37.2,0.803,0.803);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#878787").beginStroke("#878787").setStrokeStyle(1,1,1).moveTo(5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.9).curveTo(-5.4,2.3,-5.4,0).curveTo(-5.4,-2.3,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.3,5.5,0).closePath();
	this.shape_323.setTransform(20.8,37,0.803,0.803);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#878787").beginStroke("#878787").setStrokeStyle(1,1,1).moveTo(5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.9).curveTo(-5.4,2.3,-5.4,0).curveTo(-5.4,-2.3,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.3,5.5,0).closePath();
	this.shape_324.setTransform(43.8,25.2,0.803,0.803);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#878787").beginStroke("#878787").setStrokeStyle(1,1,1).moveTo(5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.9).curveTo(-5.4,2.3,-5.4,0).curveTo(-5.4,-2.3,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.3,5.5,0).closePath();
	this.shape_325.setTransform(20.8,25.2,0.803,0.803);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#878787").beginStroke("#878787").setStrokeStyle(1,1,1).moveTo(0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.3,5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.9).curveTo(-5.4,2.3,-5.4,0).curveTo(-5.4,-2.3,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).closePath();
	this.shape_326.setTransform(32.2,16.3,0.803,0.803);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#484848").beginStroke().moveTo(29.5,-27.7).curveTo(29.4,-27.7,29.4,-27.7).curveTo(28.9,-27.7,27.1,-27.9).curveTo(25.3,-28.1,24.6,-28.2).lineTo(10.8,-28.2).lineTo(10.4,-28.1).lineTo(4.9,-28.1).curveTo(4.5,-28.2,0.1,-28.4).lineTo(-8.9,-28.4).curveTo(-9.2,-28.3,-10.4,-28.5).curveTo(-12.1,-28.5,-15,-27.7).lineTo(-30.6,-27.7).curveTo(-30.5,-27.1,-30.4,-26.3).curveTo(-30.3,-21,-30.3,-21).lineTo(-30.8,-9.4).curveTo(-29.1,5.8,-29.1,13.1).curveTo(-28.8,24.7,-29.5,27.9).curveTo(-28.2,27.7,-26.9,27.6).curveTo(-27,27.7,-27,27.7).curveTo(-27,28,-24.2,27.9).curveTo(-20.4,27.8,-19.4,27.9).lineTo(-9.8,28).curveTo(-7.2,28.2,-6.9,28.3).lineTo(3.3,28.4).lineTo(4,28.9).lineTo(14.8,29.2).curveTo(15.1,29.3,18.5,29.5).lineTo(25.5,29.7).curveTo(27.2,29.7,28.7,28.9).curveTo(29.8,28.4,30.1,28.3).lineTo(30.1,18.6).curveTo(29.9,18,29.9,16.7).curveTo(30.8,0,30.8,-3.1).curveTo(30.8,-8,29.8,-14.8).curveTo(28.9,-21.5,28.9,-24.8).curveTo(28.9,-26.3,29.5,-27.7).closePath().moveTo(32.6,-29).curveTo(31.5,-22.7,31.5,-19.2).curveTo(31.5,-15,32.3,-11.9).curveTo(33.1,-8.7,33.1,-5.7).curveTo(33.1,-2.8,32.7,-2.4).lineTo(32.7,20.4).curveTo(32.6,21.3,32.6,25.8).curveTo(32.6,27,32.4,28.1).curveTo(32.7,28.1,32.7,28.7).curveTo(32.7,29.7,31.8,30.9).curveTo(30.4,32.5,27.9,32.3).lineTo(19.6,32.3).curveTo(18.7,32.1,14.4,31.8).lineTo(0.3,31.7).curveTo(-2,31.5,-7.2,31.5).curveTo(-12.5,31.5,-15.3,31.7).curveTo(-18.1,32,-19.5,31.8).curveTo(-23.2,32.5,-27.8,32.1).curveTo(-30.6,31.7,-30.9,31.7).curveTo(-32.1,31.7,-32.1,31.2).curveTo(-32.6,30.9,-32.5,30.3).curveTo(-32.5,29.9,-32.5,29.5).curveTo(-32.8,29.3,-32.8,29.2).curveTo(-32.8,29,-32.5,28.8).curveTo(-32.4,25.9,-32.1,21).curveTo(-31.7,14.8,-31.7,11.8).curveTo(-31.7,3.3,-32.4,-1.5).curveTo(-33.1,-6.3,-33.1,-10.8).curveTo(-33.1,-14.3,-32.3,-22.8).curveTo(-32.3,-23.8,-32.8,-25.6).curveTo(-33.1,-27.4,-33.1,-28).curveTo(-33.1,-28.9,-32.5,-29.3).curveTo(-32.8,-29.5,-32.8,-29.6).curveTo(-32.8,-30.1,-32,-30.5).curveTo(-24.9,-31.8,-21.2,-31.4).curveTo(-17.5,-31.1,-14.9,-31.4).curveTo(-12.3,-31.7,-9.3,-31.8).curveTo(-0.6,-32.7,8.3,-31.8).curveTo(16.6,-32.6,19.8,-32.3).curveTo(20.3,-31.7,25,-31.8).lineTo(31.1,-31.8).curveTo(31.6,-32.1,32,-32).curveTo(32.2,-32.2,32.4,-32.2).curveTo(32.9,-32.2,32.9,-30.8).curveTo(32.9,-30.5,32.9,-30.1).curveTo(32.9,-30,32.9,-29.6).curveTo(32.9,-29.3,32.6,-29).closePath();
	this.shape_327.setTransform(32,31);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#747474").beginStroke().moveTo(29.5,-28.3).curveTo(28.9,-26.9,28.9,-25.4).curveTo(28.9,-22.1,29.8,-15.4).curveTo(30.8,-8.6,30.8,-3.7).curveTo(30.8,-0.6,29.9,16.1).curveTo(29.9,17.4,30.1,18).lineTo(30.1,27.7).curveTo(29.8,27.8,28.7,28.3).curveTo(27.2,29.1,25.5,29.1).lineTo(18.5,28.9).curveTo(15.1,28.7,14.8,28.6).lineTo(4,28.3).lineTo(3.3,27.8).lineTo(-6.9,27.7).curveTo(-7.2,27.6,-9.8,27.4).lineTo(-19.4,27.3).curveTo(-20.4,27.2,-24.2,27.3).curveTo(-27,27.4,-27,27.1).curveTo(-27,27.1,-26.9,27).curveTo(-28.2,27.1,-29.5,27.3).curveTo(-28.8,24.1,-29.1,12.5).curveTo(-29.1,5.2,-30.8,-10).lineTo(-30.3,-21.6).curveTo(-30.3,-21.6,-30.4,-26.9).curveTo(-30.5,-27.7,-30.6,-28.3).lineTo(-15,-28.3).curveTo(-12.1,-29.1,-10.4,-29.1).curveTo(-9.2,-28.9,-8.9,-29).lineTo(0.1,-29).curveTo(4.5,-28.8,4.9,-28.7).lineTo(10.4,-28.7).lineTo(10.8,-28.8).lineTo(24.6,-28.8).curveTo(25.3,-28.7,27.1,-28.5).curveTo(28.9,-28.3,29.4,-28.3).curveTo(29.4,-28.3,29.5,-28.3).closePath();
	this.shape_328.setTransform(32,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_292},{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.hitbox}]},1).to({state:[{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_304},{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_311},{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321}]},1).wait(1));

	// Background
	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#623928").beginStroke().moveTo(30.3,-32.2).lineTo(30.3,32.2).lineTo(-30.3,32.2).lineTo(-30.3,-32.2).closePath();
	this.shape_329.setTransform(31.4,31.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#747474").beginStroke().moveTo(29.4,-28.3).curveTo(29.5,-28.3,29.5,-28.3).curveTo(28.9,-26.9,28.9,-25.4).curveTo(28.9,-22.1,29.8,-15.4).curveTo(30.8,-8.6,30.8,-3.7).curveTo(30.8,-0.6,29.9,16.1).curveTo(29.9,17.4,30.1,18).lineTo(30.1,27.7).curveTo(29.8,27.8,28.7,28.3).curveTo(27.2,29.1,25.5,29.1).lineTo(18.5,28.9).curveTo(15.1,28.7,14.8,28.6).lineTo(4,28.3).lineTo(3.3,27.8).lineTo(-6.9,27.7).curveTo(-7.2,27.6,-9.8,27.4).lineTo(-19.4,27.3).curveTo(-20.4,27.2,-24.1,27.3).curveTo(-24.8,27.3,-25.2,27.4).curveTo(-25.4,27.4,-25.6,27.4).curveTo(-26,27.4,-26.3,27.3).curveTo(-26.9,27.3,-26.9,27.1).curveTo(-26.9,27.1,-26.9,27.1).curveTo(-27,27.1,-27,27).curveTo(-28.3,27.1,-29.4,27.3).curveTo(-28.8,24.1,-29.1,12.5).curveTo(-29.1,5.2,-30.8,-10).lineTo(-30.3,-21.6).curveTo(-30.3,-21.6,-30.4,-26.9).curveTo(-30.4,-27.7,-30.6,-28.3).lineTo(-14.9,-28.3).curveTo(-12.1,-29.1,-10.4,-29.1).curveTo(-9.1,-28.9,-8.9,-29).lineTo(0.1,-29).curveTo(4.5,-28.8,5,-28.7).lineTo(10.4,-28.7).lineTo(10.8,-28.8).lineTo(24.6,-28.8).curveTo(25.3,-28.7,27.1,-28.5).curveTo(28.9,-28.3,29.4,-28.3).closePath().moveTo(-12.2,8.6).curveTo(-11.9,8.3,-11.6,8).curveTo(-11.7,7.9,-11.8,7.8).curveTo(-12.1,8.1,-12.2,8.6).closePath().moveTo(-0.7,11.1).lineTo(-0.6,11.1).curveTo(-0.6,10.7,-0.8,10.4).curveTo(-0.7,10.7,-0.7,11.1).closePath().moveTo(-6.4,2.9).curveTo(-6.4,2.8,-6.4,2.8).curveTo(-6,1.9,-5.7,1.2).curveTo(-6.1,2,-6.4,2.9).closePath();
	this.shape_330.setTransform(31.8,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_329}]}).to({state:[{t:this.shape_330}]},6).wait(8));

	// Hitbox
	this.instance_1 = new lib.mcTiles_Hitbox2("synched",0);
	this.instance_1.setTransform(30.9,30.9,1.004,1.004,0,0,0,31,31);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-1,62.3,64.4);


(lib.mcProjectile = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bullet("synched",0);
	this.instance_2.setTransform(-1,0,1,1,0,0,0,-1.2,0);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-1.2,44.9,2.5);


(lib.weaponsRanged = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pistol:0,pistolTactical:1},true);

	// Muzzle
	this.muzzle = new lib.MuzzleFlashs1();
	this.muzzle.setTransform(21.7,-2,1,1,0,0,0,12.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.muzzle).to({_off:true},1).wait(1));

	// Weapons
	this.pistol = new lib.Pistol();
	this.pistol.setTransform(4.6,0.8,1,1,0,0,0,4.6,0.8);

	this.pistolTactical = new lib.PistolTactical();
	this.pistolTactical.setTransform(7.3,0.7,1,1,0,0,0,7.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pistol}]}).to({state:[{t:this.pistolTactical}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-9.1,35.1,16.1);


(lib.weaponsMelee = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.ElvenDagger("synched",0);
	this.instance_3.setTransform(-0.3,-5.8,1,1,0,0,0,-0.4,-5.9);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-17,4.2,22.3);


(lib.item = function() {
	this.initialize();

	// weaponsMelee
	this.weaponsMelee = new lib.weaponsMelee();
	this.weaponsMelee.setTransform(-9.9,-3.4,1,1,90,0,0,-3.5,10);

	// weaponsRanged
	this.weaponsRanged = new lib.weaponsRanged();
	this.weaponsRanged.setTransform(-0.5,-17.4,1,1,0,0,0,-0.6,-17.5);

	this.addChild(this.weaponsRanged,this.weaponsMelee);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.flcontrolsTextInput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_4 = new lib.focusRectSkin();
	this.instance_4.setTransform(126.5,124.4,1,1,0,0,0,41.1,11);

	this.instance_5 = new lib.TextInput_upSkin();
	this.instance_5.setTransform(91.5,29.2,1,1,0,0,0,76,11);

	this.instance_6 = new lib.TextInput_disabledSkin();
	this.instance_6.setTransform(91.5,76.7,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	// avatar
	this.instance_7 = new lib.Component_avatar();
	this.instance_7.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.flcontrolsLabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// avatar
	this.instance_8 = new lib.Component_avatar();
	this.instance_8.setTransform(0.1,0,1.25,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,22);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_9 = new lib.arrowIcon();
	this.instance_9.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_10 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_10.setTransform(4,4);

	// fill
	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).beginStroke().moveTo(6.5,3.3).lineTo(-6.5,3.3).lineTo(-6.5,-3.3).lineTo(6.5,-3.3).closePath();
	this.shape_331.setTransform(7.6,4.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).beginStroke().moveTo(7.5,7).lineTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).closePath().moveTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).lineTo(6.5,-6).closePath();
	this.shape_332.setTransform(7.5,7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginLinearGradientFill(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).lineTo(6.5,-6).closePath();
	this.shape_333.setTransform(7.5,7);

	this.addChild(this.shape_333,this.shape_332,this.shape_331,this.instance_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_11 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_12 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_12.setTransform(4,5);

	// fill
	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).beginStroke().moveTo(-6.5,3.3).lineTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).closePath();
	this.shape_334.setTransform(7.5,4.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).beginStroke().moveTo(-6.5,-6).lineTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).closePath().moveTo(-7.5,7).lineTo(7.5,7).lineTo(7.5,-7).lineTo(-7.5,-7).closePath();
	this.shape_335.setTransform(7.5,7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginLinearGradientFill(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(-6.5,-6).lineTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).closePath();
	this.shape_336.setTransform(7.5,7);

	this.addChild(this.shape_336,this.shape_335,this.shape_334,this.instance_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolslistClassesCellRenderer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_13 = new lib.CellRenderer_selectedUpSkin();
	this.instance_13.setTransform(95.6,236.3,1,1,0,0,0,76,11);

	this.instance_14 = new lib.CellRenderer_selectedOverSkin();
	this.instance_14.setTransform(95.6,206.3,1,1,0,0,0,76,11);

	this.instance_15 = new lib.CellRenderer_selectedDownSkin();
	this.instance_15.setTransform(95.6,178.3,1,1,0,0,0,76,11);

	this.instance_16 = new lib.CellRenderer_selectedDisabledSkin();
	this.instance_16.setTransform(95.6,148.6,1,1,0,0,0,76,11);

	this.instance_17 = new lib.CellRenderer_upSkin();
	this.instance_17.setTransform(95.6,56.6,1,1,0,0,0,76,11);

	this.instance_18 = new lib.CellRenderer_overSkin();
	this.instance_18.setTransform(95.6,86.6,1,1,0,0,0,76,11);

	this.instance_19 = new lib.CellRenderer_downSkin();
	this.instance_19.setTransform(95.6,116.6,1,1,0,0,0,76,11);

	this.instance_20 = new lib.CellRenderer_disabledSkin();
	this.instance_20.setTransform(95.6,26.6,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},1).wait(1));

	// avatar
	this.instance_21 = new lib.CellRenderer_upSkin();
	this.instance_21.setTransform(76,11,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.flcontrolsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_22 = new lib.focusRectSkin();
	this.instance_22.setTransform(70.1,310.9,1,1,0,0,0,41.1,11);

	this.instance_23 = new lib.Button_upSkin();
	this.instance_23.setTransform(70,213,1,1,0,0,0,41,11);

	this.instance_24 = new lib.Button_selectedUpSkin();
	this.instance_24.setTransform(88,18.7,1,1,0,0,0,41,11);

	this.instance_25 = new lib.Button_selectedOverSkin();
	this.instance_25.setTransform(88,50.7,1,1,0,0,0,41,11);

	this.instance_26 = new lib.Button_selectedDownSkin();
	this.instance_26.setTransform(88,114.7,1,1,0,0,0,41,11);

	this.instance_27 = new lib.Button_selectedDisabledSkin();
	this.instance_27.setTransform(88.1,82.7,1,1,0,0,0,41.1,11);

	this.instance_28 = new lib.Button_overSkin();
	this.instance_28.setTransform(70,181,1,1,0,0,0,41,11);

	this.instance_29 = new lib.Button_emphasizedSkin();
	this.instance_29.setTransform(70.1,245,1,1,0,0,0,41.1,11);

	this.instance_30 = new lib.Button_downSkin();
	this.instance_30.setTransform(70,149,1,1,0,0,0,41,11);

	this.instance_31 = new lib.Button_disabledSkin();
	this.instance_31.setTransform(70.1,277,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},1).wait(1));

	// avatar
	this.instance_32 = new lib.Component_avatar();
	this.instance_32.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.Headwear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{none:0,trilby:1,gasmask:2,batman:3,shades:4},true);

	// Headwear
	this.instance_33 = new lib.Trilby();
	this.instance_33.setTransform(-0.3,-5.6,1.115,1,-6.4,0,0,0.5,-5.1);

	this.instance_34 = new lib.GasMask();
	this.instance_34.setTransform(4.8,13.4);

	this.instance_35 = new lib.BatmanMask();
	this.instance_35.setTransform(0.8,2.4,1,1,0,0,0,-3.9,-4.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#000000").beginStroke().moveTo(8.3,-0.9).curveTo(7.8,1.7,7.2,1.7).curveTo(7,1.7,6.1,0.6).lineTo(6.1,0.6).curveTo(6.1,0.8,6.1,0.9).lineTo(6.1,1.4).curveTo(6.1,1.7,5.9,1.8).curveTo(5.8,2.2,5.5,2.1).lineTo(2.1,2.2).curveTo(2,2.2,1.9,2.2).curveTo(1.8,2.2,1.8,2.2).curveTo(0.7,2.2,-1.4,0).lineTo(-1.4,-0).curveTo(-2.6,-0.2,-4,-0.4).curveTo(-5.2,-0.6,-6,-0.8).curveTo(-6.3,-0.6,-7.3,-0.5).curveTo(-7.3,-0.5,-7.3,-0.3).curveTo(-7.4,-0.2,-7.7,-0.2).curveTo(-8.3,-0.2,-8.2,-0.9).curveTo(-8.2,-1.1,-8.1,-1.3).curveTo(-8.2,-1.3,-8.3,-1.3).curveTo(-8.3,-1.3,-8.2,-1.4).curveTo(-7.8,-1.8,-7.6,-2.1).curveTo(-7.4,-2.1,-7.4,-2.1).curveTo(-6.4,-2,-4.7,-1.6).curveTo(-3.1,-1.3,-1.1,-1.1).curveTo(1.1,-1.3,2,-0.9).curveTo(2.8,-0.6,3.1,-0.6).curveTo(3.1,-0.6,3.2,-0.6).lineTo(3.2,-0.5).lineTo(5.7,-0.5).curveTo(6.3,-0.9,6.8,-1.2).curveTo(7.7,-1.8,8,-1.6).curveTo(8.1,-1.6,8.2,-1.5).curveTo(8.3,-1.4,8.3,-1.2).curveTo(8.3,-1.1,8.3,-1.1).curveTo(8.3,-1,8.3,-0.9).closePath().moveTo(0.7,0.3).lineTo(0.7,0.2).lineTo(0.6,0.2).curveTo(0.6,0.3,0.7,0.3).closePath();
	this.shape_337.setTransform(-2.2,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.shape_337}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.clip = new lib.torso_stick();
	this.clip.setTransform(-0.4,-1.1,1,1,0,0,0,-0.5,-1.2);

	this.clip_1 = new lib.torso_skinny();
	this.clip_1.setTransform(-0.3,-1.3,1,1,0,0,0,-0.4,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clip}]}).to({state:[{t:this.clip_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-13.6,3.4,24.4);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear = new lib.Headwear();
	this.wear.setTransform(1.3,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.wear).wait(1).to({regX:1.9,regY:8.4,x:3.2,y:-21},0).wait(3).wait(1).to({rotation:0,x:3.5,y:-21.1},0).wait(4).wait(1).to({x:3.4,y:-21.5},0).wait(4).wait(1).to({x:3.1,y:-21.6},0).wait(5));

	// Character
	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-7.3).curveTo(5.5,-6.1,6.8,-4.4).curveTo(7.3,-3.9,7.3,-1.2).curveTo(7.3,-0.4,7.2,0.2).curveTo(6.8,1.4,6.1,2.8).curveTo(5.8,3.4,5.5,3.9).curveTo(4.8,5,4,5.8).curveTo(3.4,6.5,2.7,7).curveTo(2.5,7.2,2.3,7.3).lineTo(0,7.3).curveTo(-0.5,7.2,-1,7).curveTo(-4.4,6,-5.9,4.6).curveTo(-7.3,3.3,-7.3,1.4).curveTo(-7.3,0.8,-6.3,-3.4).curveTo(-6.2,-3.5,-6.1,-3.7).curveTo(-5.9,-4.1,-5.6,-4.4).curveTo(-5.1,-4.8,-4.1,-5.3).curveTo(-1.5,-6.7,-0.6,-7.3).curveTo(-0.3,-7.3,0,-7.3).closePath();
	this.shape_338.setTransform(0,-22);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#000000").beginStroke().moveTo(8.9,-5.8).lineTo(9,-3.8).curveTo(9.2,-3.1,9.2,-2.4).curveTo(9.2,-2,9.1,-1.5).lineTo(9.2,-0.8).curveTo(9.2,1.4,7.6,4.7).curveTo(6.9,6.2,6.1,7.2).curveTo(4.2,9.5,1.5,9.5).curveTo(-1.9,9.5,-4.2,8.5).curveTo(-5.9,8.1,-7,7.2).curveTo(-7.8,6.6,-8.3,5.7).curveTo(-9,4.6,-9.1,2.6).curveTo(-9.2,1.5,-9.1,0.4).curveTo(-9.1,-3,-8.3,-4.3).curveTo(-6.8,-6.7,-1.2,-9.1).curveTo(1,-10.1,4.9,-8.6).curveTo(8.5,-7.2,8.9,-5.8).closePath().moveTo(0,-7.2).curveTo(-0.3,-7.2,-0.6,-7.1).curveTo(-1.4,-6.5,-4.1,-5.2).curveTo(-5.1,-4.7,-5.6,-4.3).curveTo(-5.9,-3.9,-6.1,-3.5).curveTo(-6.2,-3.4,-6.2,-3.3).curveTo(-7.2,0.9,-7.2,1.6).curveTo(-7.2,3.5,-5.9,4.8).curveTo(-4.4,6.1,-1,7.2).curveTo(-0.5,7.3,0,7.5).lineTo(2.3,7.5).curveTo(2.5,7.3,2.7,7.2).curveTo(3.4,6.7,4.1,6).curveTo(4.8,5.2,5.5,4.1).curveTo(5.8,3.6,6.1,3).curveTo(6.8,1.6,7.2,0.4).curveTo(7.3,-0.3,7.3,-1).curveTo(7.3,-3.7,6.8,-4.3).curveTo(5.6,-5.9,0,-7.2).closePath();
	this.shape_339.setTransform(0,-22.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#000000").beginStroke().moveTo(6.2,-7.3).curveTo(8.9,-5.4,8.9,-2.5).curveTo(8.9,-0.1,7,3.4).curveTo(6,5.3,4.5,6.6).curveTo(2.4,8.9,-0.7,9.1).lineTo(-0.7,9.1).curveTo(-0.7,9.1,-0.8,9.1).curveTo(-1,9.1,-1.1,9.2).curveTo(-1.2,9.2,-1.3,9.1).lineTo(-1.8,9.1).curveTo(-1.8,9.1,-1.9,9.1).curveTo(-2,9.1,-2.1,9.1).lineTo(-2,9.1).curveTo(-3.8,8.9,-5.3,8).curveTo(-7.5,7.2,-8.3,5.3).curveTo(-8.4,5.1,-8.4,4.8).curveTo(-8.9,4,-8.9,3.5).curveTo(-8.9,2.3,-8.6,0.7).curveTo(-8.3,-3.9,-5.9,-6.6).curveTo(-3.5,-9.1,0.2,-9.2).curveTo(3.6,-9.3,6.2,-7.3).closePath().moveTo(-0.2,-6.7).curveTo(-1.7,-6.4,-2.9,-5.7).curveTo(-5.2,-3.2,-5.7,-2.5).curveTo(-6.7,-0.9,-6.7,1.7).curveTo(-6.7,3.4,-6.5,3.7).curveTo(-6.3,4.3,-4,6.6).lineTo(1.3,6.6).curveTo(3.7,4.7,5.2,2.4).curveTo(6.8,-0.9,6.8,-2.5).curveTo(6.8,-3.1,6.7,-3.6).curveTo(6.2,-4.4,5.1,-5.3).curveTo(3.5,-6.6,1.3,-6.9).curveTo(0.6,-6.9,-0.2,-6.7).closePath();
	this.shape_340.setTransform(0.7,-22);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.3,-6.6).curveTo(0.5,-6.8,1.3,-6.8).curveTo(3.4,-6.5,5,-5.1).curveTo(6.1,-4.2,6.6,-3.5).curveTo(6.8,-3,6.8,-2.4).curveTo(6.8,-0.8,5.2,2.5).curveTo(3.6,4.9,1.3,6.8).lineTo(-4,6.8).curveTo(-6.3,4.5,-6.6,3.9).curveTo(-6.8,3.6,-6.8,1.9).curveTo(-6.8,-0.7,-5.8,-2.3).curveTo(-5.3,-3.1,-3,-5.6).curveTo(-1.8,-6.2,-0.3,-6.6).closePath();
	this.shape_341.setTransform(0.8,-22.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-6.7).curveTo(0.1,-6.7,0.2,-6.8).curveTo(3.7,-6.3,5.4,-5.4).curveTo(6.8,-4.1,6.8,-1.8).curveTo(6.8,-1.1,6.5,-0.1).curveTo(6.1,1.2,5.5,2.4).curveTo(3.4,6.8,0.3,6.8).curveTo(0.2,6.8,0,6.4).curveTo(-0.1,6.1,-3,6).curveTo(-3.6,5.3,-5.5,3.3).curveTo(-6.1,2.5,-6.5,1.9).curveTo(-6.8,0.7,-6.8,-0.8).curveTo(-6.8,-0.9,-6.8,-1).curveTo(-6.6,-1.4,-6.5,-1.7).curveTo(-6,-3,-5.5,-3.5).curveTo(-5.2,-4,-3.5,-5.2).curveTo(-2.9,-5.7,-2.5,-6.1).curveTo(-1.3,-6.6,0,-6.7).closePath();
	this.shape_342.setTransform(0.3,-21.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#000000").beginStroke().moveTo(0,-6.6).curveTo(-1.3,-6.4,-2.5,-5.9).curveTo(-2.9,-5.5,-3.5,-5).curveTo(-5.2,-3.8,-5.5,-3.4).curveTo(-6,-2.9,-6.5,-1.6).curveTo(-6.6,-1.2,-6.8,-0.9).curveTo(-6.8,-0.7,-6.8,-0.6).curveTo(-6.8,0.9,-6.5,2).curveTo(-6.1,2.7,-5.5,3.4).curveTo(-3.6,5.5,-3,6.2).curveTo(-0.1,6.2,0,6.6).curveTo(0.2,6.9,0.3,6.9).curveTo(3.4,6.9,5.5,2.6).curveTo(6.1,1.3,6.5,0).curveTo(6.8,-0.9,6.8,-1.7).curveTo(6.8,-3.9,5.4,-5.2).curveTo(3.7,-6.1,0.2,-6.6).curveTo(0.1,-6.6,0,-6.6).closePath().moveTo(6.1,-7.1).curveTo(8.9,-5.1,8.9,-1.9).curveTo(8.9,0.2,7.2,3.9).curveTo(4.8,8.9,1.1,8.9).curveTo(1.1,8.9,1,8.9).lineTo(0.3,8.9).curveTo(-0.3,8.9,-0.8,8.8).lineTo(-0.8,8.9).curveTo(-1.1,8.7,-1.6,8.7).curveTo(-1.7,8.7,-1.8,8.7).curveTo(-5.9,7.9,-7.5,4.4).curveTo(-7.6,4.2,-7.7,4).curveTo(-8.9,2.2,-8.9,0.3).curveTo(-8.9,-4.2,-6.1,-6.7).curveTo(-3.7,-8.9,0,-8.9).curveTo(0.2,-8.9,0.4,-8.9).curveTo(0.9,-9,1.6,-8.8).curveTo(4.1,-8.5,6.1,-7.1).closePath();
	this.shape_343.setTransform(0.3,-22.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#000000").beginStroke().moveTo(8.2,-5.3).curveTo(8.9,-4.2,8.9,-3).curveTo(8.9,-2,8.9,-1).curveTo(8.8,2.5,8,4).curveTo(6.7,6.7,1.7,9.5).lineTo(-0.5,9.5).curveTo(-2.3,9,-3.8,7.9).curveTo(-6,6.7,-7.3,4.1).curveTo(-7.3,4.1,-7.3,4).curveTo(-8.9,1.6,-8.9,-0.3).curveTo(-8.9,-2.7,-7.6,-4.6).curveTo(-7.4,-4.9,-7.3,-5.2).curveTo(-6.4,-6.3,-5,-7.3).curveTo(-4.1,-7.8,-3,-8.4).curveTo(-2.3,-8.7,-1.4,-9.1).curveTo(0.3,-9.8,2.2,-9.3).curveTo(4.4,-9.2,6,-8).curveTo(7.5,-7,8.2,-5.3).closePath().moveTo(4.3,-6.2).curveTo(3.9,-6.4,3.6,-6.6).curveTo(1.7,-7.1,-1,-7.2).curveTo(-1.6,-7,-2.2,-6.8).curveTo(-4.9,-4.4,-5.4,-3.8).curveTo(-7,-2,-7,-0.4).curveTo(-7,-0.3,-7,-0.2).curveTo(-7,-0.1,-7,-0).curveTo(-6.9,1.2,-4.7,4).curveTo(-2.8,6.5,-1.1,7.2).lineTo(1.7,7.2).curveTo(3.7,6.8,5.7,3).curveTo(6.4,1.6,6.8,0.3).curveTo(7,-0.8,7,-1.9).curveTo(7,-3.4,6.8,-4.2).curveTo(6,-5,4.3,-6.2).closePath();
	this.shape_344.setTransform(0.1,-21.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.3,-6.1).curveTo(6,-5,6.8,-4.2).curveTo(7,-3.3,7,-1.9).curveTo(7,-0.8,6.8,0.3).curveTo(6.4,1.6,5.7,3).curveTo(3.7,6.8,1.7,7.2).lineTo(-1.1,7.2).curveTo(-2.8,6.5,-4.7,4.1).curveTo(-6.9,1.3,-7,-0).curveTo(-7,-0.1,-7,-0.2).curveTo(-7,-0.3,-7,-0.3).curveTo(-6.9,-2,-5.4,-3.8).curveTo(-4.8,-4.4,-2.2,-6.8).curveTo(-1.6,-7,-1,-7.2).curveTo(1.8,-7.1,3.6,-6.6).curveTo(4,-6.4,4.3,-6.1).closePath();
	this.shape_345.setTransform(0,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_339},{t:this.shape_338}]}).to({state:[{t:this.shape_341},{t:this.shape_340}]},5).to({state:[{t:this.shape_343},{t:this.shape_342}]},5).to({state:[{t:this.shape_345},{t:this.shape_344}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-31.6,18.4,19);


(lib.arm_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Item 
	this.itemOver = new lib.item();
	this.itemOver.setTransform(2.4,8.5,1,1,84.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.itemOver}]}).wait(20));

	// Arm
	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#000000").beginStroke().moveTo(-1.3,-4).lineTo(-1.3,-4).curveTo(-1.3,-3.9,-1.3,-3.8).curveTo(-1.3,-3.8,-1.3,-3.7).lineTo(-1.3,-3.6).curveTo(-1.1,-3.4,-1.1,-3.1).curveTo(-1,-2.7,-1,-2).curveTo(-0.8,-0.7,-0.7,0.1).curveTo(-0.7,1,-0.7,1.1).curveTo(-0.6,1.3,-0.5,2.4).curveTo(-0.4,3.1,-0.2,3.7).lineTo(0.3,4.9).curveTo(0.8,5.3,1.2,3.9).curveTo(1.2,3.8,1.2,3.7).curveTo(1.2,3.1,1.3,2.7).curveTo(1.2,2.5,1.2,2.4).curveTo(1.2,2.3,1.2,2.2).curveTo(1.1,1,1,0.1).curveTo(1,-0,1,-0.1).lineTo(0.7,-2.4).curveTo(0.7,-2.5,0.7,-2.6).curveTo(0.7,-2.6,0.7,-2.7).curveTo(0.7,-2.9,0.6,-3.2).curveTo(0.6,-3.5,0.5,-3.7).curveTo(0.5,-4.7,-0.3,-4.9).curveTo(-0.8,-5.1,-1,-4.7).curveTo(-1.3,-4.8,-1.3,-4).closePath();
	this.shape_346.setTransform(1.8,4.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#000000").beginStroke().moveTo(1.5,3.8).curveTo(1.5,4,1.3,4.3).curveTo(0.9,4.7,0.5,4.7).curveTo(-0.8,4.7,-0.8,3.1).curveTo(-0.7,1.3,-0.9,0.9).curveTo(-1.1,0.5,-1.3,-1.2).curveTo(-1.5,-2.6,-1.5,-3).curveTo(-1.5,-5,-0.4,-4.6).curveTo(0.8,-4.2,0.6,-1.5).curveTo(0.6,-1.3,1,1).curveTo(1.5,3.3,1.5,3.8).closePath();
	this.shape_347.setTransform(1.9,4.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#000000").beginStroke().moveTo(-1.1,0.8).curveTo(-1.3,-1.2,-1.3,-3.1).curveTo(-1.3,-3.9,-0.6,-4.5).curveTo(0.1,-5.1,0.3,-3.7).curveTo(0.3,-3,0.5,-1.3).curveTo(0.7,0.1,1,1.6).curveTo(1.3,2.9,1.3,3.6).curveTo(1.3,4.7,0.5,4.7).curveTo(-0.6,4.7,-1.1,0.8).closePath();
	this.shape_348.setTransform(1.7,4.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#000000").beginStroke().moveTo(-0.2,3).curveTo(-0.1,1.9,-0.2,1.6).curveTo(-0.3,1.1,-0.9,-1.1).curveTo(-1.4,-2.8,-1.4,-4).curveTo(-1.4,-4.7,-0.4,-4.7).curveTo(0.5,-4.7,0.7,-3.3).curveTo(0.7,-1.6,0.8,-1.2).curveTo(1.4,1.1,1.4,2.3).curveTo(1.4,3.3,1.2,4).curveTo(0.8,5.2,0.1,4.4).curveTo(-0.3,3.9,-0.2,3).closePath();
	this.shape_349.setTransform(1.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_346}]}).to({state:[{t:this.shape_347}]},5).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_349}]},5).wait(5));

	// Item Under
	this.itemUnder = new lib.item();
	this.itemUnder.setTransform(2.1,8.4,1,1,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.itemUnder}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-0.1,20.1,38.6);


(lib.mcPlayer_static_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear_1 = new lib.Headwear();
	this.wear_1.setTransform(1.3,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.wear_1).wait(1).to({regX:1.9,regY:8.4,x:3.2,y:-21},0).wait(3).wait(1).to({rotation:0,x:3.5,y:-21.1},0).wait(4).wait(1).to({x:3.4,y:-21.5},0).wait(4).wait(1).to({x:3.1,y:-21.6},0).wait(5));

	// Character
	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-7.3).curveTo(5.5,-6.1,6.8,-4.4).curveTo(7.3,-3.9,7.3,-1.2).curveTo(7.3,-0.4,7.2,0.2).curveTo(6.8,1.4,6.1,2.8).curveTo(5.8,3.4,5.5,3.9).curveTo(4.8,5,4,5.8).curveTo(3.4,6.5,2.7,7).curveTo(2.5,7.2,2.3,7.3).lineTo(0,7.3).curveTo(-0.5,7.2,-1,7).curveTo(-4.4,6,-5.9,4.6).curveTo(-7.3,3.3,-7.3,1.4).curveTo(-7.3,0.8,-6.3,-3.4).curveTo(-6.2,-3.5,-6.1,-3.7).curveTo(-5.9,-4.1,-5.6,-4.4).curveTo(-5.1,-4.8,-4.1,-5.3).curveTo(-1.5,-6.7,-0.6,-7.3).curveTo(-0.3,-7.3,0,-7.3).closePath();
	this.shape_350.setTransform(0,-22);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#000000").beginStroke().moveTo(8.9,-5.8).lineTo(9,-3.8).curveTo(9.2,-3.1,9.2,-2.4).curveTo(9.2,-2,9.1,-1.5).lineTo(9.2,-0.8).curveTo(9.2,1.4,7.6,4.7).curveTo(6.9,6.2,6.1,7.2).curveTo(4.2,9.5,1.5,9.5).curveTo(-1.9,9.5,-4.2,8.5).curveTo(-5.9,8.1,-7,7.2).curveTo(-7.8,6.6,-8.3,5.7).curveTo(-9,4.6,-9.1,2.6).curveTo(-9.2,1.5,-9.1,0.4).curveTo(-9.1,-3,-8.3,-4.3).curveTo(-6.8,-6.7,-1.2,-9.1).curveTo(1,-10.1,4.9,-8.6).curveTo(8.5,-7.2,8.9,-5.8).closePath().moveTo(0,-7.2).curveTo(-0.3,-7.2,-0.6,-7.1).curveTo(-1.4,-6.5,-4.1,-5.2).curveTo(-5.1,-4.7,-5.6,-4.3).curveTo(-5.9,-3.9,-6.1,-3.5).curveTo(-6.2,-3.4,-6.2,-3.3).curveTo(-7.2,0.9,-7.2,1.6).curveTo(-7.2,3.5,-5.9,4.8).curveTo(-4.4,6.1,-1,7.2).curveTo(-0.5,7.3,0,7.5).lineTo(2.3,7.5).curveTo(2.5,7.3,2.7,7.2).curveTo(3.4,6.7,4.1,6).curveTo(4.8,5.2,5.5,4.1).curveTo(5.8,3.6,6.1,3).curveTo(6.8,1.6,7.2,0.4).curveTo(7.3,-0.3,7.3,-1).curveTo(7.3,-3.7,6.8,-4.3).curveTo(5.6,-5.9,0,-7.2).closePath();
	this.shape_351.setTransform(0,-22.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#000000").beginStroke().moveTo(6.2,-7.3).curveTo(8.9,-5.4,8.9,-2.5).curveTo(8.9,-0.1,7,3.4).curveTo(6,5.3,4.5,6.6).curveTo(2.4,8.9,-0.7,9.1).lineTo(-0.7,9.1).curveTo(-0.7,9.1,-0.8,9.1).curveTo(-1,9.1,-1.1,9.2).curveTo(-1.2,9.2,-1.3,9.1).lineTo(-1.8,9.1).curveTo(-1.8,9.1,-1.9,9.1).curveTo(-2,9.1,-2.1,9.1).lineTo(-2,9.1).curveTo(-3.8,8.9,-5.3,8).curveTo(-7.5,7.2,-8.3,5.3).curveTo(-8.4,5.1,-8.4,4.8).curveTo(-8.9,4,-8.9,3.5).curveTo(-8.9,2.3,-8.6,0.7).curveTo(-8.3,-3.9,-5.9,-6.6).curveTo(-3.5,-9.1,0.2,-9.2).curveTo(3.6,-9.3,6.2,-7.3).closePath().moveTo(5.1,-5.3).curveTo(3.5,-6.6,1.3,-6.9).curveTo(0.6,-6.9,-0.2,-6.7).curveTo(-1.7,-6.4,-2.9,-5.7).curveTo(-5.2,-3.2,-5.7,-2.5).curveTo(-6.7,-0.9,-6.7,1.7).curveTo(-6.7,3.4,-6.5,3.7).curveTo(-6.3,4.3,-4,6.6).lineTo(1.3,6.6).curveTo(3.7,4.7,5.2,2.4).curveTo(6.8,-0.9,6.8,-2.5).curveTo(6.8,-3.1,6.7,-3.6).curveTo(6.2,-4.4,5.1,-5.3).closePath();
	this.shape_352.setTransform(0.7,-22);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5,-5.1).curveTo(6.1,-4.2,6.6,-3.5).curveTo(6.8,-3,6.8,-2.4).curveTo(6.8,-0.8,5.2,2.5).curveTo(3.6,4.9,1.3,6.8).lineTo(-4,6.8).curveTo(-6.3,4.5,-6.6,3.9).curveTo(-6.8,3.6,-6.8,1.9).curveTo(-6.8,-0.7,-5.8,-2.3).curveTo(-5.3,-3.1,-3,-5.6).curveTo(-1.8,-6.2,-0.3,-6.6).curveTo(0.5,-6.8,1.3,-6.8).curveTo(3.4,-6.5,5,-5.1).closePath();
	this.shape_353.setTransform(0.8,-22.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-6.7).curveTo(0.1,-6.7,0.2,-6.8).curveTo(3.7,-6.3,5.4,-5.4).curveTo(6.8,-4.1,6.8,-1.8).curveTo(6.8,-1.1,6.5,-0.1).curveTo(6.1,1.2,5.5,2.4).curveTo(3.4,6.8,0.3,6.8).curveTo(0.2,6.8,0,6.4).curveTo(-0.1,6.1,-3,6).curveTo(-3.6,5.3,-5.5,3.3).curveTo(-6.1,2.5,-6.5,1.9).curveTo(-6.8,0.7,-6.8,-0.8).curveTo(-6.8,-0.9,-6.8,-1).curveTo(-6.6,-1.4,-6.5,-1.7).curveTo(-6,-3,-5.5,-3.5).curveTo(-5.2,-4,-3.5,-5.2).curveTo(-2.9,-5.7,-2.5,-6.1).curveTo(-1.3,-6.6,0,-6.7).closePath();
	this.shape_354.setTransform(0.3,-21.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#000000").beginStroke().moveTo(0,-6.6).curveTo(-1.3,-6.4,-2.5,-5.9).curveTo(-2.9,-5.5,-3.5,-5).curveTo(-5.2,-3.8,-5.5,-3.4).curveTo(-6,-2.9,-6.5,-1.6).curveTo(-6.6,-1.2,-6.8,-0.9).curveTo(-6.8,-0.7,-6.8,-0.6).curveTo(-6.8,0.9,-6.5,2).curveTo(-6.1,2.7,-5.5,3.4).curveTo(-3.6,5.5,-3,6.2).curveTo(-0.1,6.2,0,6.6).curveTo(0.2,6.9,0.3,6.9).curveTo(3.4,6.9,5.5,2.6).curveTo(6.1,1.3,6.5,0).curveTo(6.8,-0.9,6.8,-1.7).curveTo(6.8,-3.9,5.4,-5.2).curveTo(3.7,-6.1,0.2,-6.6).curveTo(0.1,-6.6,0,-6.6).closePath().moveTo(0.4,-8.9).curveTo(0.9,-9,1.6,-8.8).curveTo(4.1,-8.5,6.1,-7.1).curveTo(8.9,-5.1,8.9,-1.9).curveTo(8.9,0.2,7.2,3.9).curveTo(4.8,8.9,1.1,8.9).curveTo(1.1,8.9,1,8.9).lineTo(0.3,8.9).curveTo(-0.3,8.9,-0.8,8.8).lineTo(-0.8,8.9).curveTo(-1.1,8.7,-1.6,8.7).curveTo(-1.7,8.7,-1.8,8.7).curveTo(-5.9,7.9,-7.5,4.4).curveTo(-7.6,4.2,-7.7,4).curveTo(-8.9,2.2,-8.9,0.3).curveTo(-8.9,-4.2,-6.1,-6.7).curveTo(-3.7,-8.9,0,-8.9).curveTo(0.2,-8.9,0.4,-8.9).closePath();
	this.shape_355.setTransform(0.3,-22.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#000000").beginStroke().moveTo(8.2,-5.3).curveTo(8.9,-4.2,8.9,-3).curveTo(8.9,-2,8.9,-1).curveTo(8.8,2.5,8,4).curveTo(6.7,6.7,1.7,9.5).lineTo(-0.5,9.5).curveTo(-2.3,9,-3.8,7.9).curveTo(-6,6.7,-7.3,4.1).curveTo(-7.3,4.1,-7.3,4).curveTo(-8.9,1.6,-8.9,-0.3).curveTo(-8.9,-2.7,-7.6,-4.6).curveTo(-7.4,-4.9,-7.3,-5.2).curveTo(-6.4,-6.3,-5,-7.3).curveTo(-4.1,-7.8,-3,-8.4).curveTo(-2.3,-8.7,-1.4,-9.1).curveTo(0.3,-9.8,2.2,-9.3).curveTo(4.4,-9.2,6,-8).curveTo(7.5,-7,8.2,-5.3).closePath().moveTo(4.3,-6.2).curveTo(3.9,-6.4,3.6,-6.6).curveTo(1.7,-7.1,-1,-7.2).curveTo(-1.6,-7,-2.2,-6.8).curveTo(-4.9,-4.4,-5.4,-3.8).curveTo(-7,-2,-7,-0.4).curveTo(-7,-0.3,-7,-0.2).curveTo(-7,-0.1,-7,-0).curveTo(-6.9,1.2,-4.7,4).curveTo(-2.8,6.5,-1.1,7.2).lineTo(1.7,7.2).curveTo(3.7,6.8,5.7,3).curveTo(6.4,1.6,6.8,0.3).curveTo(7,-0.8,7,-1.9).curveTo(7,-3.4,6.8,-4.2).curveTo(6,-5,4.3,-6.2).closePath();
	this.shape_356.setTransform(0.1,-21.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.3,-6.1).curveTo(6,-5,6.8,-4.2).curveTo(7,-3.3,7,-1.9).curveTo(7,-0.8,6.8,0.3).curveTo(6.4,1.6,5.7,3).curveTo(3.7,6.8,1.7,7.2).lineTo(-1.1,7.2).curveTo(-2.8,6.5,-4.7,4.1).curveTo(-6.9,1.3,-7,-0).curveTo(-7,-0.1,-7,-0.2).curveTo(-7,-0.3,-7,-0.3).curveTo(-6.9,-2,-5.4,-3.8).curveTo(-4.8,-4.4,-2.2,-6.8).curveTo(-1.6,-7,-1,-7.2).curveTo(1.8,-7.1,3.6,-6.6).curveTo(4,-6.4,4.3,-6.1).closePath();
	this.shape_357.setTransform(0,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_351},{t:this.shape_350}]}).to({state:[{t:this.shape_353},{t:this.shape_352}]},5).to({state:[{t:this.shape_355},{t:this.shape_354}]},5).to({state:[{t:this.shape_357},{t:this.shape_356}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-31.6,18.4,19);


(lib.mcPlayer_running_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear_2 = new lib.Headwear();
	this.wear_2.setTransform(9.5,-25.7,1,1,0,0,0,0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.wear_2).wait(1).to({regX:1.9,regY:8.4,x:11.4,y:-20.3},0).wait(1).to({x:10.9,y:-18.2},0).wait(1).wait(1).to({x:13.9,y:-19},0).wait(1).wait(1).to({x:15.2,y:-17.7},0).wait(1).wait(1).to({x:14.9,y:-19.7},0).wait(1).wait(1).to({x:15.7,y:-18.7},0).wait(1).wait(1).to({x:13.7,y:-20},0).wait(1).wait(1).to({x:16.2,y:-17},0).wait(1).wait(1).to({x:16.4},0).wait(1).wait(1).to({x:16.2,y:-16.7},0).wait(1).wait(1).to({x:15.9,y:-18.2},0).wait(1).wait(1).to({x:15.4,y:-17.7},0).wait(1).wait(1).to({x:13.4,y:-18.7},0).wait(2));

	// Character
	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.3,-3.6).curveTo(-5.9,-5,-2.3,-6.7).curveTo(-1.8,-6.9,-1.3,-7.2).curveTo(0.3,-7.1,2.2,-7.1).curveTo(5.7,-7.1,6.8,-4.1).curveTo(7.3,-2.7,7.3,0).curveTo(7.3,2.9,7.2,3.4).curveTo(6.8,4.6,4.8,7.2).lineTo(-0.7,7.2).curveTo(-1.9,7.2,-2.9,6.8).curveTo(-3.1,6.2,-3.5,6.5).curveTo(-5.5,5.4,-6.8,2.5).curveTo(-6.8,2.6,-6.8,2.6).curveTo(-6.9,2.4,-7,2.1).curveTo(-7.3,1.7,-7.3,1.4).curveTo(-7.3,0.5,-6.3,-3.6).closePath();
	this.shape_358.setTransform(8.2,-21.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#000000").beginStroke().moveTo(-6.4,-3.5).curveTo(-7.4,0.7,-7.4,1.5).curveTo(-7.4,1.9,-7.2,2.3).curveTo(-7,2.5,-7,2.7).curveTo(-6.9,2.7,-6.9,2.7).curveTo(-5.6,5.5,-3.6,6.6).curveTo(-3.2,6.4,-3,6.9).curveTo(-2,7.3,-0.8,7.3).lineTo(4.7,7.3).curveTo(6.7,4.8,7,3.5).curveTo(7.2,3,7.2,0.2).curveTo(7.2,-2.6,6.7,-3.9).curveTo(5.6,-6.9,2,-6.9).curveTo(0.2,-6.9,-1.4,-7).curveTo(-1.9,-6.8,-2.4,-6.6).curveTo(-6,-4.8,-6.4,-3.5).closePath().moveTo(-0.5,-9.2).curveTo(-0.2,-9.2,0.1,-9.1).curveTo(0.1,-9.2,0.1,-9.3).curveTo(0.5,-9.3,0.8,-9.3).curveTo(0.8,-9.2,0.8,-9.2).lineTo(0.8,-9.3).curveTo(6.8,-8.7,8.6,-4.9).curveTo(9.2,-3.6,9.2,-1.8).curveTo(9.1,-0.1,9.1,0).curveTo(9.4,2.6,8.7,4.8).curveTo(7.3,9.3,2,9.3).curveTo(-0.9,9.3,-3.1,8.5).curveTo(-3.6,7.9,-4.6,7.8).lineTo(-4.6,7.8).curveTo(-6.7,6.6,-8.1,4.5).curveTo(-9.2,4.2,-9.2,1.5).curveTo(-9.2,-6.1,-4.1,-8.5).curveTo(-2.3,-9.3,-0.5,-9.2).closePath();
	this.shape_359.setTransform(8.3,-22);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.8,-4.1).curveTo(6.9,-3.2,6.9,-1.1).curveTo(7.1,0.7,6.1,2.5).curveTo(4.1,6.1,-2.4,6.1).curveTo(-3.7,6.1,-5.4,4.4).curveTo(-7,2.8,-7,2).curveTo(-7,1.2,-5.3,-1.9).curveTo(-3.5,-5.2,-2.1,-6.1).curveTo(3.9,-5.6,5.8,-4.1).closePath();
	this.shape_360.setTransform(7.4,-19.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#000000").beginStroke().moveTo(1,-8).curveTo(5.5,-7.6,7.5,-4.9).curveTo(8.8,-3.2,8.8,-1.2).curveTo(8.8,1.6,7.6,3.9).curveTo(5.5,8.2,0.1,8.2).curveTo(-1.4,8.2,-2.7,7.9).curveTo(-2.7,8,-2.7,8).curveTo(-2.7,8.1,-2.8,8.1).curveTo(-3.3,7.7,-4.1,7.7).curveTo(-4.1,7.6,-4.1,7.6).curveTo(-6.4,6.9,-7.7,5.2).curveTo(-8.8,3.7,-8.8,2).curveTo(-8.8,0.4,-8.5,-0.3).curveTo(-7.7,-2.2,-7.4,-3.3).curveTo(-7,-4.7,-5.9,-5.9).curveTo(-5.8,-6,-5,-6.6).curveTo(-4.3,-7.1,-4.1,-7.2).curveTo(-3.1,-7.9,-3,-7.9).curveTo(-0.2,-8.3,0.6,-8.1).curveTo(0.2,-8,-0.1,-8).curveTo(0.5,-8,1,-8).curveTo(1,-7.9,1,-7.8).curveTo(1,-7.9,1,-8).closePath().moveTo(5.8,-4).curveTo(3.9,-5.5,-2.1,-6.1).curveTo(-3.5,-5.2,-5.3,-1.8).curveTo(-7,1.2,-7,2).curveTo(-7,2.8,-5.4,4.4).curveTo(-3.7,6.2,-2.4,6.2).curveTo(4.1,6.2,6.1,2.6).curveTo(7.1,0.8,6.9,-1.1).curveTo(6.9,-3.1,5.8,-4).closePath();
	this.shape_361.setTransform(7.4,-19.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.9,-0).curveTo(7.9,6.3,0.5,6.3).curveTo(-4.4,6.3,-6.6,3.9).curveTo(-7.9,2.3,-7.9,0.8).curveTo(-7.9,-1.2,-7.1,-3.3).curveTo(-5.8,-6.7,-3.2,-6.3).curveTo(3.7,-6.5,6.4,-3.9).curveTo(7.9,-2.4,7.9,-0).closePath();
	this.shape_362.setTransform(10.8,-20);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#000000").beginStroke().moveTo(6.4,-6.9).curveTo(9.8,-4.1,9.8,0.3).curveTo(9.8,2.9,8.6,4.9).curveTo(6.4,8.5,0.7,8.5).curveTo(-1.9,8.5,-3.8,8).curveTo(-3.8,8.1,-3.9,8.2).curveTo(-4.4,7.6,-5.4,7.4).curveTo(-7.4,6.5,-8.5,5).curveTo(-9.8,3.2,-9.8,1.1).curveTo(-9.8,-3.4,-7.6,-5.9).curveTo(-3.6,-10.5,6.4,-6.9).closePath().moveTo(7.9,0.2).curveTo(7.9,-2.2,6.4,-3.7).curveTo(3.7,-6.3,-3.2,-6.1).curveTo(-5.8,-6.5,-7.1,-3.1).curveTo(-7.9,-1,-7.9,1).curveTo(-7.9,2.5,-6.6,4.1).curveTo(-4.4,6.5,0.5,6.5).curveTo(7.9,6.5,7.9,0.2).closePath();
	this.shape_363.setTransform(10.8,-20.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,5.8).curveTo(-8.4,3.4,-8.4,0.4).curveTo(-8.4,-0.2,-8.2,-1.3).curveTo(-7.8,-3.1,-7,-4.5).curveTo(-4.6,-8.8,0.6,-7.5).curveTo(1.7,-6.4,5.6,-4.3).curveTo(8.4,-2.8,8.4,-1.6).curveTo(8.3,0.8,7.3,3.1).curveTo(5.3,7.8,1.1,7.8).curveTo(-1.1,7.8,-4.4,5.8).closePath();
	this.shape_364.setTransform(12.3,-19.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#000000").beginStroke().moveTo(0,-9.4).curveTo(4,-9,7.1,-6.9).curveTo(10.3,-4.6,10.3,-1.9).curveTo(10,1.2,8.7,3.9).curveTo(6.1,9.4,1.3,9.4).curveTo(-1.6,9.4,-4.2,7.9).curveTo(-4.2,8,-4.3,8.1).curveTo(-4.4,7.8,-4.6,7.6).curveTo(-5.2,7,-5.8,6.8).curveTo(-7,5.9,-8,4.9).curveTo(-10.3,3.4,-10.3,0.2).curveTo(-10.3,-5.1,-7.1,-7.6).curveTo(-4.3,-9.8,0,-9.4).closePath().moveTo(-4.4,5.5).curveTo(-1.1,7.4,1.1,7.4).curveTo(5.3,7.4,7.3,2.8).curveTo(8.3,0.4,8.4,-2).curveTo(8.4,-3.1,5.6,-4.7).curveTo(1.7,-6.8,0.6,-7.8).curveTo(-4.6,-9.1,-7,-4.8).curveTo(-7.8,-3.5,-8.2,-1.7).curveTo(-8.4,-0.5,-8.4,0).curveTo(-8.4,3.1,-4.4,5.5).closePath();
	this.shape_365.setTransform(12.3,-19.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.7,-3.3).curveTo(-5.5,-6.8,-2.8,-7.6).curveTo(2.1,-7.6,5.1,-3.6).curveTo(7.4,-0.6,7.4,2).curveTo(7.4,4.1,7.1,4.7).curveTo(6.2,6.3,2.7,7.6).lineTo(-0.9,7.6).curveTo(-5.8,6.6,-7,4.7).curveTo(-7.4,4.1,-7.4,1.8).curveTo(-7.4,-1,-6.7,-3.3).closePath();
	this.shape_366.setTransform(11.8,-22.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#000000").beginStroke().moveTo(0,-9.4).curveTo(3.7,-8.8,6.4,-5.7).curveTo(9.3,-2.4,9.3,1.9).curveTo(9.3,5,8.7,6.2).curveTo(7,9.5,0.9,9.5).curveTo(-2.1,9.5,-4.3,8.8).curveTo(-4.8,8.4,-5.7,8.3).lineTo(-5.7,8.2).curveTo(-7.4,7.3,-8.4,5.8).curveTo(-9.6,3.9,-9.3,1.7).curveTo(-9.3,-4.5,-6.4,-7.5).curveTo(-3.9,-10,0,-9.4).closePath().moveTo(-6.7,-3.4).curveTo(-7.4,-1.2,-7.4,1.7).curveTo(-7.4,3.9,-7,4.6).curveTo(-5.8,6.5,-0.9,7.5).lineTo(2.7,7.5).curveTo(6.2,6.1,7.1,4.6).curveTo(7.4,3.9,7.4,1.8).curveTo(7.4,-0.7,5.1,-3.8).curveTo(2.1,-7.8,-2.8,-7.8).curveTo(-5.5,-7,-6.7,-3.4).closePath();
	this.shape_367.setTransform(11.8,-22.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,-5.2).curveTo(-2.9,-6.7,0,-6.4).curveTo(2.9,-6.1,4.9,-4.2).curveTo(7.2,-2,7.2,1.3).curveTo(7.2,4.2,6.3,5.2).curveTo(5.1,6.5,1.7,6.5).curveTo(-3.7,6.5,-5.9,3.5).curveTo(-7.2,1.7,-7.2,-0.5).curveTo(-7.2,-3.6,-4.9,-5.2).closePath();
	this.shape_368.setTransform(12.8,-20.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#000000").beginStroke().moveTo(2.7,-7.8).curveTo(9.1,-7.2,9.1,1.1).curveTo(9.1,3.8,8.3,5.2).curveTo(6.7,8.3,1.8,8.3).curveTo(-1.4,8.3,-3.7,7.4).lineTo(-3.7,7.4).curveTo(-4.1,7,-4.8,6.9).curveTo(-6.7,5.9,-7.8,4.1).curveTo(-9.1,1.9,-9.1,-0.4).curveTo(-9.1,-3.7,-7.4,-5.7).curveTo(-4.5,-9.4,2.7,-7.8).closePath().moveTo(-4.9,-5.4).curveTo(-7.2,-3.8,-7.2,-0.7).curveTo(-7.2,1.6,-5.9,3.3).curveTo(-3.7,6.3,1.7,6.3).curveTo(5.1,6.3,6.3,5.1).curveTo(7.2,4,7.2,1.2).curveTo(7.2,-2.2,4.9,-4.3).curveTo(2.9,-6.3,0,-6.6).curveTo(-2.9,-6.9,-4.9,-5.4).closePath();
	this.shape_369.setTransform(12.8,-20);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-6.5).curveTo(2.8,-6,5,-4.3).curveTo(7.3,-2.6,7.3,-0.8).curveTo(7.3,0.7,6.4,3.1).curveTo(5.3,5.9,3.8,6.6).lineTo(-1,6.6).curveTo(-4.9,5.5,-6.3,3.3).curveTo(-7.3,2,-7.3,-0.2).curveTo(-7.3,-7.7,0,-6.5).closePath();
	this.shape_370.setTransform(10.5,-22);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#000000").beginStroke().moveTo(0,-6.5).curveTo(-7.3,-7.7,-7.3,-0.2).curveTo(-7.3,2,-6.3,3.3).curveTo(-4.9,5.5,-1,6.6).lineTo(3.8,6.6).curveTo(5.3,5.9,6.4,3.1).curveTo(7.3,0.7,7.3,-0.8).curveTo(7.3,-2.6,5,-4.3).curveTo(2.8,-6,0,-6.5).closePath().moveTo(0,-8.6).curveTo(3.7,-8.3,6.4,-6.2).curveTo(9.2,-3.9,9.2,-0.8).curveTo(9.2,2,8.3,4.1).curveTo(6.4,8.6,1.4,8.6).curveTo(-0.5,8.6,-2.1,8.3).curveTo(-2.1,8.3,-2.1,8.3).curveTo(-2.4,8.3,-2.6,8.2).curveTo(-3.1,8,-3.9,7.9).curveTo(-3.8,7.8,-3.7,7.7).curveTo(-6.1,6.7,-7.6,4.5).curveTo(-9.2,2.2,-9.2,-0).curveTo(-9.2,-4.7,-6.3,-7).curveTo(-3.8,-8.9,0,-8.6).closePath();
	this.shape_371.setTransform(10.5,-22);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.8,4.9).curveTo(-7.9,3.2,-7.9,1.6).curveTo(-7.9,-1.3,-7.2,-3).curveTo(-6,-5.5,-2.7,-7.4).curveTo(5.8,-4.7,7.1,-3.8).curveTo(7.9,-3.2,7.9,-0.3).curveTo(7.9,4.3,5.2,6).curveTo(3,7.4,-2.1,7.4).curveTo(-5.2,7.4,-6.8,4.9).closePath();
	this.shape_372.setTransform(13.3,-19);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#000000").beginStroke().moveTo(10.5,-20.7).curveTo(10.9,-20.5,12.2,-20.5).curveTo(14.2,-20.5,14.7,-17.8).curveTo(14.8,-17,14.8,-14.4).curveTo(14.9,-11.7,13.8,-9.3).curveTo(11.7,-4.6,5.8,-4.6).curveTo(2.8,-4.6,0.7,-5.3).curveTo(0.6,-5.2,0.6,-5.1).curveTo(0.3,-5.3,-0.1,-5.3).curveTo(-0.5,-5.9,-1.3,-6.1).curveTo(-4.8,-8,-4.8,-12.6).curveTo(-4.8,-14,-4,-16.5).curveTo(-3,-19.6,-1.6,-20.6).curveTo(-0.4,-21.5,2,-23.6).curveTo(4.2,-25,6.6,-22.9).curveTo(6.9,-22.7,10.5,-20.7).closePath().moveTo(-1.8,-9.1).curveTo(-0.2,-6.6,2.9,-6.6).curveTo(8,-6.6,10.2,-8).curveTo(12.9,-9.7,12.9,-14.3).curveTo(12.9,-17.2,12.1,-17.8).curveTo(10.8,-18.7,2.3,-21.4).curveTo(-1,-19.5,-2.2,-17).curveTo(-2.9,-15.3,-2.9,-12.4).curveTo(-2.9,-10.8,-1.8,-9.1).closePath().moveTo(-14.8,24.2).curveTo(-14.7,24,-14.6,23.9).curveTo(-14.6,23.9,-14.6,24).curveTo(-14.7,24.1,-14.8,24.2).closePath();
	this.shape_373.setTransform(8.3,-5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.7,-6).curveTo(-3.4,-7.7,0,-7.1).curveTo(3.3,-6.6,5.7,-4.5).curveTo(8.3,-2.2,8.3,0.5).curveTo(8.3,3.3,7.3,4.6).curveTo(4.9,7.5,-2.2,7.3).curveTo(-8.3,2.6,-8.3,0.5).curveTo(-8.3,-4,-5.7,-6).closePath();
	this.shape_374.setTransform(13.2,-19.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#000000").beginStroke().moveTo(2,-10.2).curveTo(6.1,-9.6,9,-7).curveTo(12.2,-4.2,12.2,-0.5).curveTo(12.2,2.6,11.4,4.1).curveTo(9.9,6.6,5.3,8.3).lineTo(-0.7,8.3).curveTo(-1.6,7.7,-2.4,7.1).lineTo(-2.4,7.1).curveTo(-2.7,7,-3.1,6.9).curveTo(-3.6,6.2,-4.2,5.9).curveTo(-4.2,5.8,-4.1,5.8).curveTo(-8.2,2.4,-8.2,-0.6).curveTo(-8.2,-6,-5,-8.5).curveTo(-2.2,-10.7,2,-10.2).closePath().moveTo(-3.7,-7).curveTo(-6.3,-5,-6.3,-0.5).curveTo(-6.3,1.6,-0.2,6.3).curveTo(6.9,6.5,9.3,3.6).curveTo(10.3,2.3,10.3,-0.5).curveTo(10.3,-3.2,7.7,-5.5).curveTo(5.3,-7.6,2,-8.1).curveTo(-1.4,-8.7,-3.7,-7).closePath().moveTo(-12.2,10.3).lineTo(-12.2,10.3).lineTo(-12.2,10.3).closePath();
	this.shape_375.setTransform(11.2,-18.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,0.8).curveTo(-7.8,-1.1,-7.2,-3.6).curveTo(-6.5,-6.4,-5.4,-7.3).curveTo(7.8,-7.1,7.8,-2.1).curveTo(7.8,0.4,6.7,2.4).curveTo(5.7,4.1,2.6,7.3).lineTo(-2,7.3).curveTo(-2.4,7.1,-4.4,7).curveTo(-7.8,5.5,-7.8,0.8).closePath();
	this.shape_376.setTransform(13.2,-18.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#000000").beginStroke().moveTo(2.9,-8.6).curveTo(9.8,-6.3,9.8,-1.7).curveTo(9.8,1.1,8.3,4.3).curveTo(5.8,9.6,0.4,9.6).curveTo(-2.3,9.6,-4.3,9.1).curveTo(-4.3,9.1,-4.3,9.2).curveTo(-4.6,8.9,-5.1,8.9).curveTo(-5.5,8.6,-6,8.4).curveTo(-8.1,7.4,-9,5.5).curveTo(-10.1,3.5,-9.6,1.2).curveTo(-9.6,-0.7,-8.9,-3.6).curveTo(-8.1,-7.1,-7.1,-8).curveTo(-3.8,-10.9,2.9,-8.6).closePath().moveTo(-7.7,1.1).curveTo(-7.7,5.8,-4.4,7.3).curveTo(-2.4,7.4,-2,7.6).lineTo(2.6,7.6).curveTo(5.7,4.4,6.7,2.7).curveTo(7.9,0.8,7.9,-1.7).curveTo(7.9,-6.8,-5.4,-6.9).curveTo(-6.4,-6.1,-7.1,-3.2).curveTo(-7.7,-0.8,-7.7,1.1).closePath();
	this.shape_377.setTransform(13.1,-19);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.3,-7.9).lineTo(2.5,-7.9).curveTo(4,-6.5,6.8,-5).curveTo(8.1,-4.4,8.1,-2.6).curveTo(8.1,-0.4,5.9,2.9).curveTo(3.7,6.4,1.1,7.9).lineTo(-2.7,7.9).curveTo(-4.1,7.9,-6,5.9).curveTo(-8,3.7,-8,1.6).curveTo(-8,-1.7,-6.8,-3.5).curveTo(-4.9,-6.3,0.3,-7.9).closePath();
	this.shape_378.setTransform(13,-19.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#000000").beginStroke().moveTo(0,-9.6).curveTo(4,-9.9,6.9,-8.1).curveTo(10,-6.1,10,-2.7).curveTo(9.7,0.6,8.2,3.7).curveTo(5.2,9.7,-0.7,9.7).curveTo(-2.6,9.7,-4.2,9.2).curveTo(-4.8,8.9,-5.7,8.9).curveTo(-5.8,8.8,-6,8.8).curveTo(-6.2,8.6,-6.5,8.4).curveTo(-6.5,8.4,-6.4,8.3).curveTo(-8.1,7.4,-9,5.7).curveTo(-10.1,3.7,-9.9,1.5).curveTo(-9.9,-3.6,-6.8,-6.6).curveTo(-4.1,-9.2,0,-9.6).closePath().moveTo(0.3,-8.1).curveTo(-4.9,-6.5,-6.8,-3.7).curveTo(-8,-1.9,-8,1.4).curveTo(-8,3.5,-6,5.7).curveTo(-4.1,7.7,-2.7,7.7).lineTo(1.1,7.7).curveTo(3.7,6.2,6,2.7).curveTo(8.1,-0.6,8.1,-2.8).curveTo(8.1,-4.6,6.8,-5.2).curveTo(4,-6.7,2.5,-8.1).closePath();
	this.shape_379.setTransform(12.9,-19.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.5,3.1).curveTo(6.2,4.9,2.7,7.1).lineTo(-3.6,7.1).curveTo(-6,4.8,-7.9,3.2).curveTo(-8.7,2.4,-8.7,0.2).curveTo(-8.7,-2.9,-7.5,-4.3).curveTo(-5.1,-7.3,2.4,-7.1).curveTo(5.8,-6.1,7.4,-4.1).curveTo(8.7,-2.6,8.7,-0.8).curveTo(8.7,1.4,7.5,3.1).closePath();
	this.shape_380.setTransform(12.6,-19.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#000000").beginStroke().moveTo(0,-15.7).curveTo(4.2,-15.2,7.3,-12.8).curveTo(10.6,-10.2,10.6,-7).curveTo(10.6,-4,9.3,-2.1).curveTo(7.6,0.4,3.2,2.8).lineTo(-3.4,2.8).curveTo(-3.9,2.5,-4.4,2.3).curveTo(-4.8,1.8,-5.3,1.6).curveTo(-8,-0.8,-10,-2.3).curveTo(-10.6,-3,-10.6,-6.1).curveTo(-10.6,-11.5,-7.3,-14).curveTo(-4.4,-16.2,0,-15.7).closePath().moveTo(7.5,-3.2).curveTo(8.7,-4.8,8.7,-7).curveTo(8.7,-8.9,7.4,-10.4).curveTo(5.8,-12.3,2.4,-13.3).curveTo(-5.1,-13.5,-7.5,-10.5).curveTo(-8.7,-9.1,-8.7,-6).curveTo(-8.7,-3.8,-7.9,-3).curveTo(-6,-1.5,-3.6,0.8).lineTo(2.7,0.8).curveTo(6.2,-1.4,7.5,-3.2).closePath().moveTo(-5.3,15.7).curveTo(-5.2,15.7,-5.2,15.7).curveTo(-5.2,15.7,-5.2,15.7).closePath();
	this.shape_381.setTransform(12.6,-13.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,-7.7).curveTo(2.5,-7.5,4.9,-5.9).curveTo(7.4,-4.2,7.6,-2.5).curveTo(7.9,0.6,7,3.3).curveTo(5,8.5,-1.5,7.7).curveTo(-3.7,5.7,-6.2,3.6).curveTo(-7.5,2.2,-7.6,-0.3).curveTo(-8.2,-8.5,-0.5,-7.7).closePath();
	this.shape_382.setTransform(10,-20.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,-7.5).curveTo(-8.2,-8.2,-7.6,-0).curveTo(-7.4,2.4,-6.1,3.8).curveTo(-3.7,5.9,-1.5,8).curveTo(5.1,8.7,7,3.5).curveTo(8,0.9,7.6,-2.3).curveTo(7.5,-4,5,-5.6).curveTo(2.5,-7.2,-0.4,-7.5).closePath().moveTo(-0.6,-9.8).curveTo(3.2,-9.8,6.1,-7.8).curveTo(9.3,-5.6,9.5,-2.4).curveTo(9.8,1,8.9,3.8).curveTo(7.1,9.4,1.2,9.8).curveTo(-0.6,9.9,-2.2,9.4).lineTo(-2.2,9.5).curveTo(-2.4,9.4,-2.6,9.3).curveTo(-3.1,9,-3.8,8.7).curveTo(-3.8,8.7,-3.8,8.7).curveTo(-5.2,7.9,-6.4,6.4).curveTo(-9.3,3.3,-9.5,-0.1).curveTo(-9.9,-5,-7,-7.6).curveTo(-4.6,-9.8,-0.6,-9.8).closePath();
	this.shape_383.setTransform(10,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_359},{t:this.shape_358}]}).to({state:[{t:this.shape_361},{t:this.shape_360}]},2).to({state:[{t:this.shape_363},{t:this.shape_362}]},2).to({state:[{t:this.shape_365},{t:this.shape_364}]},2).to({state:[{t:this.shape_367},{t:this.shape_366}]},2).to({state:[{t:this.shape_369},{t:this.shape_368}]},2).to({state:[{t:this.shape_371},{t:this.shape_370}]},2).to({state:[{t:this.shape_373},{t:this.shape_372}]},2).to({state:[{t:this.shape_375},{t:this.shape_374}]},2).to({state:[{t:this.shape_377},{t:this.shape_376}]},2).to({state:[{t:this.shape_379},{t:this.shape_378}]},2).to({state:[{t:this.shape_381},{t:this.shape_380}]},2).to({state:[{t:this.shape_383},{t:this.shape_382}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-31.3,18.4,18.6);


(lib.mcPlayer_running = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,-6.7).curveTo(-1.8,-6.9,-1.3,-7.2).curveTo(0.3,-7.1,2.2,-7.1).curveTo(5.7,-7.1,6.8,-4.1).curveTo(7.3,-2.7,7.3,0).curveTo(7.3,2.9,7.2,3.4).curveTo(6.8,4.6,4.8,7.2).lineTo(-0.7,7.2).curveTo(-1.9,7.2,-2.9,6.8).curveTo(-3.1,6.2,-3.5,6.5).curveTo(-5.5,5.4,-6.8,2.5).curveTo(-6.8,2.6,-6.8,2.6).curveTo(-6.9,2.4,-7,2.1).curveTo(-7.3,1.7,-7.3,1.4).curveTo(-7.3,0.5,-6.3,-3.6).curveTo(-5.9,-5,-2.3,-6.7).closePath();
	this.shape_384.setTransform(8.2,-21.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#000000").beginStroke().moveTo(9.5,-27.8).curveTo(5.9,-26,5.5,-24.7).curveTo(4.5,-20.5,4.5,-19.7).curveTo(4.5,-19.3,4.7,-18.9).curveTo(4.9,-18.7,4.9,-18.5).curveTo(5,-18.5,5,-18.5).curveTo(6.2,-15.7,8.3,-14.6).curveTo(8.7,-14.8,8.9,-14.3).curveTo(9.9,-13.9,11.1,-13.9).lineTo(16.6,-13.9).curveTo(18.6,-16.4,18.9,-17.7).curveTo(19.1,-18.2,19.1,-21).curveTo(19.1,-23.8,18.6,-25.1).curveTo(17.5,-28.1,13.9,-28.1).curveTo(12.1,-28.1,10.5,-28.2).curveTo(10,-28,9.5,-27.8).closePath().moveTo(12.7,-30.4).curveTo(18.7,-29.9,20.4,-26.1).curveTo(21.1,-24.8,21.1,-22.9).curveTo(21,-21.3,21,-21.2).curveTo(21.3,-18.6,20.6,-16.4).curveTo(19.1,-11.9,13.9,-11.9).curveTo(11,-11.9,8.8,-12.7).curveTo(8.3,-11.6,6.8,-8.7).curveTo(6.7,-8.6,6.7,-8.6).curveTo(7.2,-8.1,7.8,-7.1).curveTo(9.4,-4.6,10,-3).curveTo(11.3,-3.8,13.5,-5.1).curveTo(18.7,-8,18.7,-6.2).curveTo(18.7,-5.5,15,-3.2).curveTo(11.3,-0.9,9.9,-0.9).curveTo(9.6,-0.9,9.3,-0.9).curveTo(9.3,-0.9,9.2,-0.9).curveTo(9.1,-0.9,9.1,-1).curveTo(8.6,-1.1,8.4,-1.3).curveTo(8.3,-1.4,8.3,-1.8).curveTo(8.3,-1.9,8.4,-1.9).curveTo(7.9,-2.8,7.1,-4.4).curveTo(6.3,-6,5.8,-6.8).curveTo(4.2,-3.6,3.7,-2.1).curveTo(2.9,1.5,2.2,3.8).curveTo(1.4,6.4,0.6,7.5).curveTo(0.8,7.7,0.8,8).curveTo(1.5,9.4,1.6,11).curveTo(1.6,11.8,2.1,13.9).curveTo(2.5,16,2.6,17).curveTo(2.6,17.3,4,22.5).curveTo(5.5,27.7,5.5,29.2).curveTo(5.5,30.5,4.6,30.5).curveTo(3.9,30.5,2.7,25.9).curveTo(2.4,24.9,0.9,19).curveTo(-0.5,13,-1.1,10.1).curveTo(-2,11.2,-3.6,13.1).curveTo(-5.7,15.6,-6.7,16.6).curveTo(-6.8,16.8,-7.2,17.1).curveTo(-7.9,17.6,-9.2,17.8).lineTo(-16.2,17.8).curveTo(-17.8,17.2,-20,16.9).curveTo(-21.1,16.7,-21.1,16.2).curveTo(-21.1,15.3,-20.2,15.2).curveTo(-19,15,-15.7,15.8).lineTo(-9.3,15.8).curveTo(-8.5,15.4,-8,15.4).curveTo(-6.1,12.3,-4.2,10).curveTo(-2.6,7.8,-1.6,7).curveTo(-1.2,3.9,3.7,-6.6).curveTo(4,-7.2,4.2,-7.6).curveTo(3,-7.3,2.1,-7.1).curveTo(1.7,-7,-2.9,-6.4).curveTo(-6.8,-5.9,-7.2,-5.6).curveTo(-8.8,-4.5,-12.9,-1.6).lineTo(-13.7,-1.9).curveTo(-13.7,-2.1,-13.8,-2.7).curveTo(-13.8,-6.2,-3.9,-8.3).curveTo(-0.3,-9,2.9,-9.2).curveTo(4.2,-9.3,4.9,-9.2).curveTo(6.3,-12,7.2,-13.4).curveTo(5.1,-14.6,3.8,-16.7).curveTo(2.7,-17,2.7,-19.7).curveTo(2.7,-27.3,7.8,-29.7).curveTo(9.6,-30.5,11.4,-30.4).curveTo(11.7,-30.4,12,-30.3).curveTo(12,-30.4,12,-30.5).curveTo(12.3,-30.5,12.6,-30.4).curveTo(12.7,-30.4,12.7,-30.4).closePath();
	this.shape_385.setTransform(-3.5,-0.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.8,-4.1).curveTo(6.9,-3.2,6.9,-1.1).curveTo(7.1,0.7,6.1,2.5).curveTo(4.1,6.1,-2.4,6.1).curveTo(-3.7,6.1,-5.4,4.4).curveTo(-7,2.8,-7,2).curveTo(-7,1.2,-5.3,-1.9).curveTo(-3.5,-5.2,-2.1,-6.1).curveTo(3.9,-5.6,5.8,-4.1).closePath();
	this.shape_386.setTransform(7.4,-19.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#000000").beginStroke().moveTo(6.3,-29.2).curveTo(10.8,-28.8,12.8,-26.1).curveTo(14,-24.4,14,-22.4).curveTo(14,-19.6,12.9,-17.3).curveTo(10.8,-13,5.4,-13).curveTo(3.8,-13,2.5,-13.3).curveTo(2.5,-13.2,2.5,-13.2).curveTo(2,-11.9,1.5,-10.6).curveTo(1.5,-10.5,1.5,-10.3).lineTo(1.5,-4.3).curveTo(1.9,-4.4,5.7,-6.2).curveTo(9.4,-7.9,9.7,-7.9).curveTo(10.8,-7.9,10.8,-6.9).curveTo(10.8,-5.8,2.4,-2.3).lineTo(0.6,-2.3).curveTo(-0.2,-3.2,-0.3,-5.9).curveTo(-1,-4,-1.1,-2.8).curveTo(-1.5,0.8,-1.9,2.3).curveTo(-2.5,5.2,-3.7,7.1).curveTo(-3,8.7,-2.8,10.1).curveTo(-2.6,10.5,-2.4,11.1).curveTo(-2.2,13.8,-1.7,14.9).curveTo(-1.2,15.9,-1.2,17.5).curveTo(-1.2,19,-2.4,20.1).curveTo(-2.4,23.9,-2.5,25.1).curveTo(-2.7,29.2,-3.6,29.4).lineTo(-4.4,29.1).lineTo(-4.3,21.2).curveTo(-7.2,22.4,-12.9,22.4).curveTo(-13.7,22.4,-14,22).curveTo(-14,21.9,-14,21.5).curveTo(-14,20.6,-8.5,19.9).curveTo(-5.7,19.5,-4.3,18.9).lineTo(-5,9.1).curveTo(-5,9,-5,8.9).curveTo(-5,8.5,-5,8.2).lineTo(-5,8).curveTo(-5,6,-4.7,5.6).curveTo(-4.6,4.3,-3.9,0.8).curveTo(-3.1,-3.8,-2.8,-4.7).curveTo(-2,-7,-1.2,-8.8).curveTo(-1.8,-8.5,-2.4,-8.2).curveTo(-5.1,-6.9,-7.1,-6.3).curveTo(-8,-6.1,-12.1,-1.8).curveTo(-13.1,-1.8,-13,-2.9).curveTo(-13,-5.4,-7.3,-8.5).curveTo(-7.1,-8.6,-4.7,-9.4).curveTo(-2.6,-10.2,-2,-10.8).curveTo(-0.6,-12,0.2,-11.9).curveTo(0.4,-12.3,0.6,-12.7).curveTo(0.9,-13.2,1.2,-13.6).curveTo(-1.2,-14.3,-2.4,-16).curveTo(-3.5,-17.5,-3.5,-19.2).curveTo(-3.5,-20.8,-3.3,-21.5).curveTo(-2.5,-23.4,-2.1,-24.5).curveTo(-1.7,-25.9,-0.6,-27.1).curveTo(-0.5,-27.2,0.2,-27.8).curveTo(0.9,-28.3,1.1,-28.4).curveTo(2.1,-29.1,2.3,-29.1).curveTo(5,-29.5,5.9,-29.3).curveTo(5.4,-29.2,5.2,-29.2).curveTo(5.7,-29.2,6.2,-29.2).curveTo(6.3,-29.1,6.3,-29).curveTo(6.3,-29.1,6.3,-29.2).closePath().moveTo(11,-25.2).curveTo(9.1,-26.7,3.1,-27.3).curveTo(1.7,-26.4,-0.1,-23).curveTo(-1.7,-20,-1.7,-19.2).curveTo(-1.7,-18.4,-0.2,-16.8).curveTo(1.6,-15,2.9,-15).curveTo(9.3,-15,11.4,-18.6).curveTo(12.4,-20.4,12.1,-22.3).curveTo(12.1,-24.3,11,-25.2).closePath();
	this.shape_387.setTransform(2.1,1.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.9,-0).curveTo(7.9,6.3,0.5,6.3).curveTo(-4.4,6.3,-6.6,3.9).curveTo(-7.9,2.3,-7.9,0.8).curveTo(-7.9,-1.2,-7.1,-3.3).curveTo(-5.8,-6.7,-3.2,-6.3).curveTo(3.7,-6.5,6.4,-3.9).curveTo(7.9,-2.4,7.9,-0).closePath();
	this.shape_388.setTransform(10.8,-20);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#000000").beginStroke().moveTo(12.9,-27.8).curveTo(16.3,-25,16.3,-20.7).curveTo(16.3,-18,15.1,-16.1).curveTo(12.9,-12.4,7.1,-12.4).curveTo(4.6,-12.4,2.7,-13).curveTo(2.2,-12,0.2,-8.3).curveTo(-0.2,-6.5,-1,-2.1).curveTo(-1,-1.7,2.5,-0.5).curveTo(6,0.6,6,1.3).curveTo(6,2.2,4.6,2.2).curveTo(0.4,2.2,-2.9,-1.9).curveTo(-2.9,-2.4,-2.8,-2.8).curveTo(-4.7,0.5,-7.2,5).curveTo(-6.9,5.4,-6.9,6.2).curveTo(-6.4,7,-5.7,8.1).curveTo(-2.5,13.7,-2.5,17.1).curveTo(-2.5,18.9,-2.6,19.3).curveTo(-3,20.5,-4.9,21.1).curveTo(-6.3,21.6,-10.4,22.6).curveTo(-10.5,23.2,-10.6,23.9).curveTo(-11.1,26.6,-11.6,27.7).curveTo(-11.6,27.7,-11.6,27.8).curveTo(-11.6,28.7,-12.9,29.5).lineTo(-13.7,29.2).curveTo(-13.8,28.9,-13.8,28.3).curveTo(-13.8,27.5,-13.3,27.1).curveTo(-13.1,26.2,-12.4,23.1).curveTo(-14.8,23.7,-15.1,23.7).curveTo(-16,23.7,-16.2,23.3).curveTo(-16.3,23.2,-16.3,22.9).curveTo(-16.3,21.3,-11.9,20.5).curveTo(-11.1,16.5,-10.7,15.2).curveTo(-9.7,11,-9.8,9.2).curveTo(-9,6.5,-8.9,6.2).curveTo(-9,5.9,-9,5.8).curveTo(-9,4.7,-8.7,4.5).curveTo(-8.1,1.8,-3.2,-6.8).curveTo(-5.4,-4.7,-6.2,-3.2).curveTo(-7.3,-0.7,-8.2,1.1).curveTo(-9.8,4.5,-10.4,4.5).curveTo(-11.6,4.5,-11.3,3.3).curveTo(-11.3,-1.1,-5,-8).curveTo(-2.5,-10.7,-0.7,-11.7).curveTo(-0.4,-11.9,-0.1,-12).curveTo(0.5,-12.9,1,-13.5).curveTo(-0.9,-14.4,-2.1,-16).curveTo(-3.4,-17.8,-3.4,-19.8).curveTo(-3.4,-24.3,-1.1,-26.9).curveTo(2.9,-31.5,12.9,-27.8).closePath().moveTo(14.4,-20.8).curveTo(14.4,-23.1,12.9,-24.6).curveTo(10.2,-27.3,3.3,-27.1).curveTo(0.7,-27.4,-0.6,-24.1).curveTo(-1.5,-21.9,-1.5,-20).curveTo(-1.5,-18.4,-0.1,-16.9).curveTo(2.1,-14.4,6.9,-14.4).curveTo(14.4,-14.4,14.4,-20.8).closePath().moveTo(-7.3,9.1).curveTo(-7.5,10,-7.7,11.2).curveTo(-8.7,15.8,-9.4,17.6).curveTo(-9.5,17.9,-9.9,20.2).curveTo(-4.4,19.3,-4.4,17.1).curveTo(-4.4,15.8,-6.1,11.4).curveTo(-6.3,11,-7.3,9.1).closePath();
	this.shape_389.setTransform(4.4,0.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,5.8).curveTo(-8.4,3.4,-8.4,0.4).curveTo(-8.4,-0.2,-8.2,-1.3).curveTo(-7.8,-3.1,-7,-4.5).curveTo(-4.6,-8.8,0.6,-7.5).curveTo(1.7,-6.4,5.6,-4.3).curveTo(8.4,-2.8,8.4,-1.6).curveTo(8.3,0.8,7.3,3.1).curveTo(5.3,7.8,1.1,7.8).curveTo(-1.1,7.8,-4.4,5.8).closePath();
	this.shape_390.setTransform(12.3,-19.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#000000").beginStroke().moveTo(11.7,-29.4).curveTo(15.7,-29.1,18.8,-26.9).curveTo(22,-24.7,22,-21.9).curveTo(21.7,-18.9,20.4,-16.1).curveTo(17.8,-10.6,13,-10.6).curveTo(10.1,-10.6,7.5,-12.1).curveTo(7.2,-11.5,5,-7.8).curveTo(4.9,-7.7,4.8,-7.6).curveTo(5,-7.2,5,-6.4).curveTo(5,-5.4,3.8,-4.1).curveTo(2.5,-2.7,2.3,-1.8).curveTo(2.4,-0,2.5,0.8).curveTo(2.6,2.3,1.4,2.3).curveTo(0.9,2.3,0.6,2).curveTo(0.7,2.1,0.8,2.3).curveTo(2,5,2,6).curveTo(2,6.6,2,6.8).curveTo(1.8,7.3,1.1,7.5).lineTo(0.2,7.2).curveTo(-0.3,5.2,-1,3.3).curveTo(-1.3,4.1,-1.6,5).curveTo(-2.4,6.8,-3.1,8.2).curveTo(-0.8,8.4,4.7,12.1).curveTo(6.2,10.7,6.3,13.1).lineTo(6.3,13.2).curveTo(6.3,13.2,6.3,13.3).curveTo(6.3,13.9,2.2,18.6).curveTo(-2,23.4,-3.4,24.3).lineTo(-4.2,24).curveTo(-4.3,23.9,-4.3,23.2).curveTo(-4.3,22.9,-2.1,20.5).curveTo(0.5,17.6,1,16.9).curveTo(2.4,14.8,3.4,13.6).curveTo(1.9,13.1,-0.5,12).curveTo(-2.7,11,-3.8,10.4).curveTo(-4.6,13,-10.1,20.2).curveTo(-17.2,29.5,-20.9,29.5).curveTo(-22,29.5,-22,28.7).curveTo(-22,28.5,-17.7,24.8).curveTo(-13,20.8,-11.8,18.4).curveTo(-10,14.7,-7,11.1).curveTo(-6.1,10,-5.5,9.5).curveTo(-5.5,9.4,-5.5,9.4).curveTo(-5.5,6.9,-2.1,0.2).curveTo(-2.3,-0.7,-2.3,-1.8).curveTo(-2.3,-5,1.6,-8.3).curveTo(2.9,-9.3,3.7,-9.8).curveTo(5.2,-12.2,6.2,-13).curveTo(4.8,-14,3.7,-15.1).curveTo(1.4,-16.7,1.4,-19.9).curveTo(1.4,-25.2,4.6,-27.7).curveTo(7.4,-29.8,11.7,-29.4).closePath().moveTo(7.3,-14.6).curveTo(10.6,-12.6,12.8,-12.6).curveTo(17,-12.6,19,-17.3).curveTo(20,-19.6,20.1,-22).curveTo(20.1,-23.2,17.3,-24.7).curveTo(13.4,-26.8,12.3,-27.9).curveTo(7.1,-29.2,4.7,-24.9).curveTo(3.9,-23.5,3.5,-21.7).curveTo(3.3,-20.6,3.3,-20).curveTo(3.3,-17,7.3,-14.6).closePath().moveTo(0.1,0.7).lineTo(0.2,0.7).curveTo(0.1,0.7,0.1,0.6).closePath();
	this.shape_391.setTransform(0.6,0.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,-7.6).curveTo(2.1,-7.6,5.1,-3.6).curveTo(7.4,-0.6,7.4,2).curveTo(7.4,4.1,7.1,4.7).curveTo(6.2,6.3,2.7,7.6).lineTo(-0.9,7.6).curveTo(-5.8,6.6,-7,4.7).curveTo(-7.4,4.1,-7.4,1.8).curveTo(-7.4,-1,-6.7,-3.3).curveTo(-5.5,-6.8,-2.8,-7.6).closePath();
	this.shape_392.setTransform(11.8,-22.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#000000").beginStroke().moveTo(14,-30.1).curveTo(17.6,-29.5,20.4,-26.4).curveTo(23.3,-23.1,23.3,-18.8).curveTo(23.3,-15.7,22.6,-14.5).curveTo(20.9,-11.2,14.9,-11.2).curveTo(11.7,-11.2,9.5,-12).curveTo(9.5,-11.8,9.5,-11.6).curveTo(9.5,-11.2,8.2,-8.8).curveTo(8.3,-8.4,8.3,-7.7).curveTo(8.3,-7.3,7.6,-5.1).curveTo(6.9,-2.8,6.8,-2.5).curveTo(6.6,-1.8,5.9,0.3).curveTo(5.3,2.1,5.3,2.4).curveTo(5.3,3.4,6.3,6).curveTo(7.1,8.2,7.3,8.7).curveTo(8.7,8.5,10.5,8.3).curveTo(11.5,7.4,11.5,9.2).curveTo(11.5,9.2,11.5,9.3).lineTo(11.5,9.3).curveTo(11.5,9.4,11.5,9.5).curveTo(6,23.9,4.7,23.9).curveTo(3.6,23.9,3.6,23.1).curveTo(3.6,21.3,7.6,13.3).curveTo(8.2,11.9,8.8,10.9).curveTo(6.3,11.5,4.4,11.9).lineTo(-0.8,11.9).curveTo(-1.8,13.1,-4.2,15.4).curveTo(-8.7,19.8,-9.6,21.3).curveTo(-10.1,22.3,-14.3,25.8).curveTo(-19.5,30.2,-22.2,30.2).curveTo(-23.3,30.2,-23.3,29.3).curveTo(-21.4,28.5,-18.8,26.8).curveTo(-13.7,23.3,-10.4,18.7).curveTo(-7.9,15.3,-4.6,12.2).curveTo(-2.8,10.5,-1.7,9.9).curveTo(-1.8,9.7,-1.8,9.3).curveTo(-1.8,5.7,3.9,-5.3).curveTo(4,-5.4,4,-5.6).curveTo(3.9,-5.4,3.7,-5.3).curveTo(-0,-2.1,-0.6,0.8).curveTo(-0.9,3.5,-1.2,5.4).curveTo(-1.8,8.9,-3,8.9).curveTo(-4,8.9,-4,8.1).curveTo(-4,-0.9,1.6,-5.9).curveTo(3.5,-7.6,5.5,-8.2).curveTo(7.3,-11.4,8.3,-12.5).curveTo(6.5,-13.4,5.5,-14.9).curveTo(4.4,-16.8,4.6,-19).curveTo(4.6,-25.2,7.5,-28.2).curveTo(10.1,-30.7,14,-30.1).closePath().moveTo(11.1,-28.5).curveTo(8.4,-27.7,7.3,-24.1).curveTo(6.5,-21.9,6.5,-19).curveTo(6.5,-16.8,6.9,-16.1).curveTo(8.2,-14.2,13,-13.2).lineTo(16.6,-13.2).curveTo(20.2,-14.6,21,-16.1).curveTo(21.4,-16.8,21.4,-18.9).curveTo(21.4,-21.4,19.1,-24.5).curveTo(16,-28.5,11.1,-28.5).closePath().moveTo(3.5,-0.4).curveTo(2.9,1.5,1.9,5.1).curveTo(1,8,-0.4,9.9).lineTo(-0.4,9.9).curveTo(0,9.8,0.6,9.6).curveTo(1.3,9.5,4.9,9).curveTo(4.3,8.1,3.9,6.2).curveTo(3.5,4.4,3.4,2.4).curveTo(3.4,1.1,4.8,-2.8).curveTo(3.6,-0.7,3.5,-0.4).closePath();
	this.shape_393.setTransform(-2,-1.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,-5.2).curveTo(-2.9,-6.7,0,-6.4).curveTo(2.9,-6.1,4.9,-4.2).curveTo(7.2,-2,7.2,1.3).curveTo(7.2,4.2,6.3,5.2).curveTo(5.1,6.5,1.7,6.5).curveTo(-3.7,6.5,-5.9,3.5).curveTo(-7.2,1.7,-7.2,-0.5).curveTo(-7.2,-3.6,-4.9,-5.2).closePath();
	this.shape_394.setTransform(12.8,-20.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#000000").beginStroke().moveTo(17.4,-26.9).curveTo(23.8,-26.3,23.8,-18).curveTo(23.8,-15.3,23,-13.9).curveTo(21.4,-10.8,16.5,-10.8).curveTo(13.3,-10.8,11,-11.7).curveTo(11,-11.5,11,-11.3).curveTo(11,-10.7,7.8,-6.8).curveTo(7.8,-6.6,7.8,-6.4).curveTo(7.8,-5.8,7.2,-3).curveTo(6.4,0.6,6.4,1).curveTo(8.2,1.3,11,2.1).curveTo(15,3.2,15,4).curveTo(15,4.9,13.5,4.9).curveTo(11.6,4.9,8.1,3.6).curveTo(4.4,2.3,4.4,1.3).curveTo(4.4,-1,5.3,-3.9).curveTo(3.4,-1.5,2.8,-0.3).curveTo(2.5,0.1,0.7,5.7).curveTo(-0.1,8.1,-0.7,9.2).curveTo(3.1,9,8.1,7.6).curveTo(9.6,7.3,11.4,6.5).curveTo(11.7,6.4,11.9,6.4).curveTo(12.5,6.5,12.5,7.4).lineTo(12.5,7.5).curveTo(12.5,7.6,12.5,7.7).curveTo(12.5,7.9,9.8,14.3).curveTo(9.5,15.1,9.3,17.6).curveTo(9.2,19.6,8.1,20.6).lineTo(7.2,20.3).curveTo(7.1,19.6,7.1,17.9).curveTo(7.1,14.9,9.8,9.6).curveTo(10,9.3,10.1,9.1).curveTo(9.6,9.3,9,9.5).curveTo(4.8,10.9,-0.9,10.9).curveTo(-1.6,10.9,-2,10.8).curveTo(-16.4,27.4,-22.9,27.4).curveTo(-23.9,27.4,-23.8,26.3).lineTo(-19.4,23.4).curveTo(-14.1,19.8,-10.7,17).curveTo(-6.4,12.7,-4.4,10.8).curveTo(-3.3,9.7,-2.5,9.1).lineTo(-2.5,9.1).curveTo(-2.5,3.5,4.3,-6).curveTo(4.6,-6.4,4.8,-6.7).curveTo(4.2,-6.6,3.3,-6.6).curveTo(-2,-6,-4.1,-4.2).curveTo(-4.8,-3.6,-7.9,-0).curveTo(-9.1,-0,-8.8,-1.6).curveTo(-8.8,-6,-0.5,-7.9).curveTo(2.5,-8.6,5.2,-8.6).curveTo(5.8,-8.6,6.2,-8.5).curveTo(7.7,-10.3,8.9,-11.4).curveTo(9.6,-11.9,10,-12.1).curveTo(8,-13.1,6.9,-15).curveTo(5.6,-17.2,5.6,-19.5).curveTo(5.6,-22.8,7.3,-24.8).curveTo(10.2,-28.5,17.4,-26.9).closePath().moveTo(9.8,-24.5).curveTo(7.5,-22.9,7.5,-19.8).curveTo(7.5,-17.5,8.8,-15.8).curveTo(11,-12.8,16.4,-12.8).curveTo(19.8,-12.8,21,-14).curveTo(21.9,-15.1,21.9,-17.9).curveTo(21.9,-21.3,19.6,-23.4).curveTo(17.6,-25.4,14.7,-25.7).curveTo(11.8,-26,9.8,-24.5).closePath();
	this.shape_395.setTransform(-1.8,-0.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,-6.5).curveTo(2.8,-6,5,-4.3).curveTo(7.3,-2.6,7.3,-0.8).curveTo(7.3,0.7,6.4,3.1).curveTo(5.3,5.9,3.8,6.6).lineTo(-1,6.6).curveTo(-4.9,5.5,-6.3,3.3).curveTo(-7.3,2,-7.3,-0.2).curveTo(-7.3,-7.7,0,-6.5).closePath();
	this.shape_396.setTransform(10.5,-22);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#000000").beginStroke().moveTo(15.7,-27.9).curveTo(8.4,-29.2,8.4,-21.6).curveTo(8.4,-19.5,9.3,-18.1).curveTo(10.8,-16,14.7,-14.8).lineTo(19.5,-14.8).curveTo(21,-15.6,22.1,-18.4).curveTo(23,-20.7,23,-22.3).curveTo(23,-24.1,20.7,-25.8).curveTo(18.5,-27.5,15.7,-27.9).closePath().moveTo(15.7,-30.1).curveTo(19.4,-29.8,22.1,-27.6).curveTo(24.9,-25.4,24.9,-22.3).curveTo(24.9,-19.5,24,-17.3).curveTo(22.1,-12.8,17.1,-12.8).curveTo(15.2,-12.8,13.6,-13.2).curveTo(13.4,-12,11.1,-8.4).curveTo(10.6,-7.7,10.3,-7.1).curveTo(10.4,-6.7,10.6,-6.2).curveTo(11.9,-2.5,12.3,-0.4).curveTo(13.8,-1.3,16.6,-2.5).curveTo(22.6,-5,22.6,-3.2).curveTo(22.6,-2.8,12,2.1).curveTo(11.8,2.1,11.7,2.1).curveTo(11.6,2.1,11.5,2.1).curveTo(11.4,2.1,11.4,2).curveTo(10.5,1.9,10.5,1.2).curveTo(10.5,1.1,10.7,0.8).curveTo(10.3,-0.1,9.8,-1.9).curveTo(9.3,-3.7,9,-4.7).curveTo(8.7,-4.1,8.3,-3.4).curveTo(6,0.8,5.7,1.8).curveTo(4,7.1,4,7.3).curveTo(3.6,8.4,3.3,9.2).curveTo(3.5,9.2,3.7,9.2).curveTo(6,9.7,8.8,12.1).curveTo(8.9,12.2,11.5,14.2).curveTo(13.7,15.8,14.1,16.9).curveTo(14.8,18.4,15.3,21.6).curveTo(15.9,24.9,15.9,26.9).curveTo(15.9,27,15.9,27.1).curveTo(16.1,27.5,16.1,28.4).curveTo(16.1,29.2,16.1,29.4).curveTo(15.9,30.1,15.3,30.1).curveTo(14.4,30.1,14.3,29.3).curveTo(14.3,28.5,14.3,28.5).curveTo(14.3,28.3,14.3,28.2).curveTo(13.8,27.3,13.6,25).curveTo(12.9,19.9,12.7,19.2).curveTo(12,17.2,6.6,13.9).curveTo(3.5,12,2.2,11.2).curveTo(1.4,12.4,-2.2,15.2).curveTo(-4.7,17.2,-7.8,19.5).curveTo(-9.1,20.9,-13.4,23.1).curveTo(-19.1,26.1,-23.8,26.1).curveTo(-24.9,26.1,-24.9,25.2).curveTo(-24.9,24.7,-18.4,22.5).curveTo(-11,19.9,-8.4,17.3).curveTo(-7.6,16.3,-2.8,12.8).curveTo(-0.5,11.1,0.8,10.4).curveTo(0.8,10.3,0.8,10).curveTo(0.8,7.2,5.7,-2.5).curveTo(6.8,-4.9,7.7,-6.4).curveTo(7.5,-6.4,7.4,-6.5).curveTo(7.8,-7.2,8.3,-8).lineTo(8.3,-8).curveTo(7.6,-7.9,6.6,-7.8).curveTo(1.4,-7.5,-3.2,-5.8).curveTo(-4.3,-5.4,-5.3,-4).curveTo(-6.3,-2.7,-8,-2.1).lineTo(-8.8,-2.4).lineTo(-8.9,-3).curveTo(-7.9,-4.6,-7.2,-5.4).curveTo(-6,-7,-4.2,-7.6).curveTo(1.8,-9.4,5.8,-9.8).curveTo(8.3,-10,9.3,-9.7).curveTo(10.9,-12.5,12,-13.7).curveTo(9.6,-14.8,8.1,-16.9).curveTo(6.5,-19.3,6.5,-21.5).curveTo(6.5,-26.1,9.4,-28.4).curveTo(11.9,-30.4,15.7,-30.1).closePath();
	this.shape_397.setTransform(-5.2,-0.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.8,4.9).curveTo(-7.9,3.2,-7.9,1.6).curveTo(-7.9,-1.3,-7.2,-3).curveTo(-6,-5.5,-2.7,-7.4).curveTo(5.8,-4.7,7.1,-3.8).curveTo(7.9,-3.2,7.9,-0.3).curveTo(7.9,4.3,5.2,6).curveTo(3,7.4,-2.1,7.4).curveTo(-5.2,7.4,-6.8,4.9).closePath();
	this.shape_398.setTransform(13.3,-19);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#000000").beginStroke().moveTo(15.8,-26.4).curveTo(16.2,-26.2,17.5,-26.2).curveTo(19.5,-26.2,20,-23.5).curveTo(20.1,-22.7,20.1,-20.1).curveTo(20.2,-17.4,19.1,-15).curveTo(17,-10.3,11.1,-10.3).curveTo(8.1,-10.3,6,-10.9).curveTo(5.5,-10.2,3.2,-7.7).curveTo(2.9,-7.4,2.7,-7.1).curveTo(2.9,-6.6,2.9,-6).curveTo(2.9,-4.4,2.4,-3.6).lineTo(2.4,-1.3).curveTo(5,-2.4,7.2,-3.3).curveTo(11.5,-5,13.5,-5).curveTo(14.3,-5,14.4,-3.9).curveTo(14.4,-2.7,1.7,0.8).curveTo(0.7,0.8,0.5,-0.7).curveTo(0.4,-1.4,0.5,-2.2).curveTo(0.5,-3.6,0.7,-4.9).curveTo(-1,-2.9,-2,-1.5).curveTo(-2.2,-1.3,-4.8,4.1).curveTo(-6.2,7,-7.1,7.8).curveTo(-6.8,8.7,-6.3,10.3).curveTo(-6,11.3,-4.8,16.4).curveTo(-4.5,18.1,-3,23.5).curveTo(-1.6,28.5,-1.6,28.9).curveTo(-1.6,29.7,-2.7,29.8).curveTo(-3.9,29.8,-6.4,18.8).curveTo(-7.1,15.9,-7.7,12.9).curveTo(-7.7,14,-7.8,15.3).curveTo(-7.8,17.7,-10.8,19.3).curveTo(-13.9,21.1,-18.6,21.1).curveTo(-19.8,21.1,-20.1,20.7).curveTo(-20.2,20.6,-20.2,20.2).curveTo(-20.2,19.2,-18.2,18.7).curveTo(-12.5,17.2,-12,17).curveTo(-9.4,16.2,-9.3,15.2).curveTo(-9.7,14.1,-9.7,13.4).lineTo(-9.7,9.4).curveTo(-9.7,7.9,-8.6,6.9).curveTo(-8.5,5.6,-8.2,5.8).curveTo(-7.6,4.7,-6.4,2.4).curveTo(-4.1,-2,-3.2,-3.4).curveTo(-1.9,-5.2,-0.7,-6.7).curveTo(-3.9,-7,-6.4,-7).curveTo(-8.6,-7,-12.5,-4.4).curveTo(-14.5,-3.1,-16.1,-1.8).curveTo(-17.2,-1.8,-17.2,-2.7).curveTo(-17.2,-3.1,-15.9,-4.4).curveTo(-14.3,-6.1,-12.2,-7.3).curveTo(-6.1,-10.8,0.9,-8.7).curveTo(1.8,-9.7,2.6,-10.5).curveTo(3.4,-11.3,4,-11.7).curveTo(0.5,-13.7,0.5,-18.3).curveTo(0.5,-19.7,1.3,-22.2).curveTo(2.3,-25.3,3.7,-26.3).curveTo(4.9,-27.2,7.3,-29.3).curveTo(9.5,-30.7,11.9,-28.6).curveTo(12.2,-28.4,15.8,-26.4).closePath().moveTo(3.5,-14.8).curveTo(5.1,-12.3,8.2,-12.3).curveTo(13.3,-12.3,15.5,-13.7).curveTo(18.2,-15.4,18.2,-20).curveTo(18.2,-22.9,17.4,-23.5).curveTo(16.1,-24.4,7.6,-27.1).curveTo(4.3,-25.2,3.1,-22.7).curveTo(2.4,-21,2.4,-18.1).curveTo(2.4,-16.5,3.5,-14.8).closePath();
	this.shape_399.setTransform(3,0.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.7,-6).curveTo(-3.4,-7.7,0,-7.1).curveTo(3.3,-6.6,5.7,-4.5).curveTo(8.3,-2.2,8.3,0.5).curveTo(8.3,3.3,7.3,4.6).curveTo(4.9,7.5,-2.2,7.3).curveTo(-8.3,2.6,-8.3,0.5).curveTo(-8.3,-4,-5.7,-6).closePath();
	this.shape_400.setTransform(13.2,-19.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#000000").beginStroke().moveTo(8.7,-29.2).curveTo(12.8,-28.7,15.7,-26).curveTo(18.9,-23.2,18.9,-19.5).curveTo(18.9,-16.5,18.1,-15).curveTo(16.6,-12.4,12,-10.8).lineTo(6,-10.8).curveTo(5.1,-11.4,4.3,-12).curveTo(3.5,-11,2,-9.2).curveTo(1.8,-9,1.7,-8.8).curveTo(1.6,-8.1,0.6,-5.2).curveTo(-0.4,-2.4,-0.9,-1.5).curveTo(0.1,-0.8,2.9,0.6).curveTo(5.2,1.9,5.2,3.2).curveTo(5.2,3.5,5,3.7).curveTo(4.8,4.1,4.3,4.1).curveTo(2.4,4.1,-3,-1.3).curveTo(-2.5,-2.9,-2,-4.2).curveTo(-2.8,-3.2,-3.4,-2.2).curveTo(-4.6,-0.2,-8.1,6.4).curveTo(-6.4,9,-3.1,17.4).curveTo(-3.1,19.3,-8,21.2).curveTo(-7.9,21.7,-7.8,22.3).curveTo(-7.5,25.1,-7.5,26.3).curveTo(-7.5,27.7,-7.5,28).curveTo(-7.7,29.4,-8.5,29.4).curveTo(-9.3,29.4,-9.9,21.9).curveTo(-13.1,23,-17.8,24.1).curveTo(-18.9,24.1,-18.9,23.3).curveTo(-18.9,22.8,-11.9,20.6).curveTo(-10.9,20.3,-10.1,20).curveTo(-10.1,19.5,-10.1,18.9).curveTo(-9.6,13.1,-9.6,10.1).curveTo(-9.6,9,-9.6,8.2).curveTo(-9.7,8,-9.8,7.8).curveTo(-10.1,7.4,-9.9,6.6).curveTo(-9.9,3.2,-2.5,-7.1).curveTo(-2.3,-7.4,-2.1,-7.6).curveTo(-2.6,-7.5,-3.1,-7.2).curveTo(-8.4,-5.3,-8.9,-4.5).curveTo(-10,-2.8,-11.5,-0.8).curveTo(-13.4,1.6,-13.8,1.6).curveTo(-14.9,1.6,-14.9,0.8).curveTo(-14.9,-0.2,-10,-6.3).curveTo(-9.3,-7.5,-3.8,-9.4).curveTo(-1.2,-10.4,0.2,-10.6).curveTo(1.5,-12.4,2.5,-13.3).curveTo(-1.5,-16.7,-1.5,-19.7).curveTo(-1.5,-25.1,1.7,-27.6).curveTo(4.5,-29.8,8.7,-29.2).closePath().moveTo(3,-26).curveTo(0.4,-24,0.4,-19.6).curveTo(0.4,-17.4,6.5,-12.8).curveTo(13.6,-12.6,15.9,-15.5).curveTo(17,-16.8,17,-19.5).curveTo(17,-22.3,14.4,-24.6).curveTo(11.9,-26.7,8.7,-27.2).curveTo(5.3,-27.7,3,-26).closePath().moveTo(-7.8,11.6).lineTo(-8.3,18.9).curveTo(-8.3,19,-8.2,19.3).curveTo(-4.9,18,-4.9,17.2).curveTo(-4.9,16.9,-7.8,11.6).closePath();
	this.shape_401.setTransform(4.5,0.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,0.8).curveTo(-7.8,-1.1,-7.2,-3.6).curveTo(-6.5,-6.4,-5.4,-7.3).curveTo(7.8,-7.1,7.8,-2.1).curveTo(7.8,0.4,6.7,2.4).curveTo(5.7,4.1,2.6,7.3).lineTo(-2,7.3).curveTo(-2.4,7.1,-4.4,7).curveTo(-7.8,5.5,-7.8,0.8).closePath();
	this.shape_402.setTransform(13.2,-18.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#000000").beginStroke().moveTo(11.1,-28.6).curveTo(17.9,-26.3,17.9,-21.8).curveTo(17.9,-18.9,16.4,-15.8).curveTo(13.9,-10.5,8.5,-10.5).curveTo(5.8,-10.5,3.9,-11).curveTo(3.7,-10.5,1.4,-7.1).curveTo(1.4,-6.8,1.4,-6.4).curveTo(1.4,-6.1,0.1,-4.3).curveTo(-1.2,-2.3,-1.4,-2).curveTo(-1.5,-0.6,-1.6,0.3).curveTo(-1.8,1.9,-2.7,1.9).curveTo(-2.9,1.9,-3,1.9).curveTo(-2.3,3.7,-2.3,4).curveTo(-2.3,5.2,-3.2,5.2).curveTo(-4.1,5.2,-5,1.9).curveTo(-7.5,5.2,-8.8,7).lineTo(-0.6,7).curveTo(0.9,5.8,0.9,8).curveTo(0.9,8.5,-4,14.3).curveTo(-9,20.2,-9.8,20.2).curveTo(-10.8,20.2,-10.6,19.1).curveTo(-10.6,18.8,-5,12.2).curveTo(-3.4,10.2,-2.3,8.9).lineTo(-9.8,8.9).curveTo(-9.8,9,-9.8,9.1).curveTo(-13.6,25.6,-17,29.7).lineTo(-17.8,29.4).curveTo(-17.9,29.3,-17.9,28.6).curveTo(-17.9,28,-16.2,23.7).curveTo(-14.4,19.2,-14.1,16.6).curveTo(-12.5,13,-12,10.6).curveTo(-11.7,9.4,-11.3,8.5).curveTo(-11.4,8.3,-11.4,8.1).lineTo(-11.4,8.1).curveTo(-11.4,7.9,-11.1,7.6).curveTo(-11.1,7.6,-11.1,7.5).curveTo(-8.4,3.1,-5.8,-1).curveTo(-6,-1.8,-6.1,-2.5).curveTo(-6.1,-5.5,-2.2,-8).curveTo(-0.9,-8.8,-0.1,-9.1).curveTo(1.3,-10.9,2.2,-11.6).curveTo(0.1,-12.6,-0.9,-14.5).curveTo(-1.9,-16.6,-1.5,-18.9).curveTo(-1.5,-20.7,-0.8,-23.7).curveTo(0,-27.1,1,-28).curveTo(4.4,-30.9,11.1,-28.6).closePath().moveTo(0.4,-18.9).curveTo(0.4,-14.2,3.8,-12.7).curveTo(5.8,-12.6,6.2,-12.5).lineTo(10.8,-12.5).curveTo(13.9,-15.7,14.9,-17.3).curveTo(16,-19.3,16,-21.8).curveTo(16,-26.8,2.8,-27).curveTo(1.7,-26.2,1,-23.3).curveTo(0.4,-20.9,0.4,-18.9).closePath().moveTo(-2.9,-5.3).curveTo(-4,-4.5,-4.3,-3.3).curveTo(-4,-3.7,-3.7,-4).curveTo(-3.3,-4.7,-2.9,-5.3).closePath();
	this.shape_403.setTransform(5,1);

	this.instance_36 = new lib.Headwear();
	this.instance_36.setTransform(17.2,-27.2,1,1,23.7,0,0,0,-0.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.3,-7.9).lineTo(2.5,-7.9).curveTo(4,-6.5,6.8,-5).curveTo(8.1,-4.4,8.1,-2.6).curveTo(8.1,-0.4,5.9,2.9).curveTo(3.7,6.4,1.1,7.9).lineTo(-2.7,7.9).curveTo(-4.1,7.9,-6,5.9).curveTo(-8,3.7,-8,1.6).curveTo(-8,-1.7,-6.8,-3.5).curveTo(-4.9,-6.3,0.3,-7.9).closePath();
	this.shape_404.setTransform(13,-19.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#000000").beginStroke().moveTo(12.8,-29.8).curveTo(16.8,-30.1,19.7,-28.3).curveTo(22.8,-26.3,22.8,-22.9).curveTo(22.5,-19.6,21,-16.5).curveTo(18,-10.5,12.1,-10.5).curveTo(9.8,-10.5,8.1,-11.1).curveTo(7.5,-9.9,4.8,-6.1).curveTo(4.6,-5.3,3.9,-3.3).curveTo(2.8,-0.1,2.8,2.5).curveTo(2.8,3.2,6.5,5.1).curveTo(6.7,5.1,6.8,5.2).curveTo(7,5.3,7.2,5.4).curveTo(11.5,7.6,11.5,8).curveTo(11.5,8.2,11.4,8.5).curveTo(11.1,8.9,10.6,8.9).curveTo(8.7,8.9,6.6,7.8).curveTo(5.9,9.6,3.9,14).curveTo(0.8,20.6,0.7,20.6).curveTo(-0.3,20.6,-0.3,19.8).curveTo(-0.3,17,3.4,9.7).curveTo(4,8.4,4.5,7.5).curveTo(2.9,7.8,-1.6,8.4).lineTo(-4.5,8.4).curveTo(-5,9.6,-6.1,12).curveTo(-8.4,16.6,-10.1,18.7).curveTo(-11.7,20.7,-14.6,24.7).curveTo(-17.5,28,-21.9,29.9).lineTo(-22.7,29.6).lineTo(-22.8,29).curveTo(-21.2,27.2,-16.7,22.8).curveTo(-13,19.3,-11.4,17).curveTo(-10.8,16.2,-10.2,14).curveTo(-9.5,11.8,-9,11).curveTo(-7.3,8.2,-6.2,6.9).curveTo(-5.5,4.5,1,-5).curveTo(1.6,-5.8,2.1,-6.5).curveTo(1.9,-6.5,1.7,-6.5).curveTo(-3.1,-5.9,-5,-4.6).curveTo(-5.8,-4.1,-7.9,-2.7).curveTo(-10,-1.4,-11.6,-1).lineTo(-12.4,-1.3).curveTo(-12.5,-1.5,-12.5,-2.1).curveTo(-12.5,-3.7,-3.5,-7.1).curveTo(1.9,-9.2,4,-9.1).curveTo(5.4,-11,6.4,-11.9).curveTo(4.7,-12.8,3.8,-14.5).curveTo(2.7,-16.5,2.9,-18.7).curveTo(2.9,-23.8,6,-26.8).curveTo(8.7,-29.4,12.8,-29.8).closePath().moveTo(13.1,-28.3).curveTo(7.9,-26.7,6,-23.9).curveTo(4.8,-22.1,4.8,-18.8).curveTo(4.8,-16.7,6.8,-14.5).curveTo(8.7,-12.5,10.1,-12.5).lineTo(13.9,-12.5).curveTo(16.5,-14,18.8,-17.5).curveTo(20.9,-20.8,20.9,-23).curveTo(20.9,-24.8,19.6,-25.4).curveTo(16.8,-26.9,15.3,-28.3).closePath().moveTo(3.4,5.6).curveTo(0.9,3.5,0.9,2.4).curveTo(0.9,0.8,1.3,-0.9).curveTo(-1,2.2,-4.1,6.6).curveTo(-2.5,6.2,0.4,5.9).curveTo(2.1,5.7,3.4,5.6).closePath();
	this.shape_405.setTransform(0.1,0.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.5,3.1).curveTo(6.2,4.9,2.7,7.1).lineTo(-3.6,7.1).curveTo(-6,4.8,-7.9,3.2).curveTo(-8.7,2.4,-8.7,0.2).curveTo(-8.7,-2.9,-7.5,-4.3).curveTo(-5.1,-7.3,2.4,-7.1).curveTo(5.8,-6.1,7.4,-4.1).curveTo(8.7,-2.6,8.7,-0.8).curveTo(8.7,1.4,7.5,3.1).closePath();
	this.shape_406.setTransform(12.6,-19.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#000000").beginStroke().moveTo(15.9,-29.2).curveTo(20,-28.7,23.1,-26.3).curveTo(26.4,-23.7,26.4,-20.5).curveTo(26.4,-17.5,25.1,-15.6).curveTo(23.4,-13.1,19,-10.7).lineTo(12.4,-10.7).curveTo(12.4,-10.1,9.9,-6.2).curveTo(9.9,-6.1,9.9,-6).curveTo(9.9,-5.6,9.9,-5.1).curveTo(9.8,-2.8,10.9,0.3).curveTo(11.6,0.2,15.6,-0.3).curveTo(18.6,-0.7,20.4,-1.2).curveTo(20.6,-1.2,21.6,-1.9).curveTo(22.7,-2.6,23.1,-2.6).curveTo(24.1,-2.6,24.1,-1.6).curveTo(24.1,-0.5,21.6,-0).curveTo(16.3,1.1,13,2.2).lineTo(10.3,2.2).curveTo(8.6,1.1,8.2,-0.8).curveTo(8,-1.4,8,-3.2).curveTo(6.8,-1.5,6,-0.7).curveTo(4.4,0.9,3.1,4.3).curveTo(2.8,5.2,2.4,6).curveTo(4.6,5.6,5.3,5.3).lineTo(11.8,5.2).curveTo(12.8,5.4,13.8,9.6).curveTo(14.7,13.2,14.7,14.8).curveTo(14.7,15,14.7,16.3).curveTo(14.6,17.5,13.8,17.5).curveTo(13.3,17.5,11.3,7.3).curveTo(4.1,7.2,2.6,7.7).curveTo(1.9,8,1.5,8.5).lineTo(0.8,8.5).curveTo(0.5,8.8,0.3,9).lineTo(0.2,9).curveTo(-0.5,10.4,-3.3,14.1).curveTo(-6.1,18,-8.5,21).curveTo(-8.5,21.1,-8.5,21.1).lineTo(-8.6,21.2).curveTo(-9.1,21.7,-9.5,22.2).lineTo(-10.2,22).curveTo(-10.9,22.3,-11.9,22.8).curveTo(-15.6,24.7,-16.8,25.7).curveTo(-18.1,26.8,-25.4,29.2).curveTo(-26.4,29.2,-26.4,28.4).curveTo(-21.9,25.3,-17.4,22.8).curveTo(-12.4,20.1,-10.2,19.9).curveTo(-9.8,18.7,-8.7,17.2).curveTo(-6.6,14.7,-5.7,13.3).curveTo(-3,9.4,-2,8.2).curveTo(-1.5,7.7,-1.1,7.3).curveTo(-1,7,-0.5,6.7).curveTo(0.4,3.2,5.8,-4.8).curveTo(3.9,-5.1,0.1,-6.1).curveTo(-9.5,-2.2,-9.6,-2.2).curveTo(-10.7,-2.2,-10.7,-3.1).curveTo(-10.7,-4.3,-7.7,-5.5).curveTo(-4.2,-6.7,-3,-7.2).curveTo(-1.3,-7.9,3.9,-7.1).curveTo(5.7,-6.8,6.9,-6.5).curveTo(9.7,-10.4,11.1,-11.5).curveTo(8,-14.2,5.8,-15.8).curveTo(5.3,-16.5,5.3,-19.6).curveTo(5.3,-25,8.6,-27.5).curveTo(11.4,-29.7,15.9,-29.2).closePath().moveTo(23.3,-16.7).curveTo(24.5,-18.3,24.5,-20.5).curveTo(24.5,-22.4,23.2,-23.9).curveTo(21.6,-25.8,18.3,-26.8).curveTo(10.7,-27,8.3,-24).curveTo(7.2,-22.6,7.2,-19.5).curveTo(7.2,-17.3,7.9,-16.5).curveTo(9.8,-15,12.3,-12.7).lineTo(18.5,-12.7).curveTo(22,-14.9,23.3,-16.7).closePath();
	this.shape_407.setTransform(-3.2,0.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,-7.7).curveTo(2.5,-7.5,4.9,-5.9).curveTo(7.4,-4.2,7.6,-2.5).curveTo(7.9,0.6,7,3.3).curveTo(5,8.5,-1.5,7.7).curveTo(-3.7,5.7,-6.2,3.6).curveTo(-7.5,2.2,-7.6,-0.3).curveTo(-8.2,-8.5,-0.5,-7.7).closePath();
	this.shape_408.setTransform(10,-20.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#000000").beginStroke().moveTo(14.5,-26.2).curveTo(6.8,-27,7.4,-18.8).curveTo(7.5,-16.3,8.8,-14.9).curveTo(11.3,-12.8,13.5,-10.8).curveTo(20,-10,22,-15.2).curveTo(22.9,-17.9,22.6,-21).curveTo(22.4,-22.7,19.9,-24.4).curveTo(17.5,-26,14.5,-26.2).closePath().moveTo(14.4,-28.6).curveTo(18.1,-28.5,21.1,-26.5).curveTo(24.2,-24.4,24.5,-21.1).curveTo(24.7,-17.7,23.8,-15).curveTo(22,-9.4,16.1,-9).curveTo(14.3,-8.9,12.7,-9.3).curveTo(12.8,-9.1,10,-4.9).lineTo(10,-4.9).curveTo(10.1,-4.1,10.2,-2.8).curveTo(10.3,-2.1,11.5,0.3).curveTo(11.7,0.9,12,1.4).curveTo(13.5,0.2,17,-1.4).curveTo(23.4,-4.1,23.5,-2.6).curveTo(23.5,-2,12.1,3.8).curveTo(12,3.8,11.8,3.8).curveTo(11.7,3.8,11.6,3.8).curveTo(10.3,3.9,9.2,0.5).curveTo(8.6,-1,8.4,-2.6).curveTo(7.2,-0.9,5.6,1.5).curveTo(4.4,3.3,0.6,11.2).curveTo(1.7,10.7,4.6,11.5).curveTo(4.9,11.4,5.5,11.5).curveTo(7,11.7,9.2,13.3).curveTo(14.6,17.3,14.9,22.1).curveTo(15.2,25.3,14.1,26.2).lineTo(13.2,25.9).curveTo(13.1,22.7,13.1,22.1).curveTo(12.8,18.1,8.4,15).curveTo(6.5,13.8,4.8,13).curveTo(4.7,13.2,4.6,13.4).curveTo(3,13.1,0.9,13.3).curveTo(0.4,13,0.2,12.9).curveTo(0.1,12.8,0.1,12.7).curveTo(-1,13.8,-3.8,16.1).curveTo(-8.8,20.3,-9.1,20.6).curveTo(-10.8,22.7,-13.4,24.5).curveTo(-18.4,28.2,-23.1,28.5).curveTo(-24.4,28.6,-24.5,27.8).curveTo(-24.6,27,-23.7,26.7).curveTo(-22.8,26.3,-19.5,25.8).curveTo(-18.7,25.3,-8,16.9).curveTo(-2.3,12.4,-0.4,11.7).curveTo(-0.8,11.5,-0.7,10.8).curveTo(-0.9,7.7,5.8,-2.9).curveTo(5.8,-3,5.9,-3.1).curveTo(4.4,-3.2,2.6,-4).curveTo(-0.1,-5,-2,-4.9).curveTo(-3.8,-4.7,-7,-2.5).curveTo(-8.6,-1.4,-10,-0.4).curveTo(-10.9,-0.3,-11,-1.2).curveTo(-11.1,-2.1,-8.9,-3.8).curveTo(-6.7,-5.5,-4.7,-6.1).curveTo(-1,-7.2,1.6,-6.3).curveTo(4.8,-5.3,7.2,-5.1).curveTo(9.8,-9,11.2,-10.1).curveTo(9.8,-10.9,8.5,-12.3).curveTo(5.7,-15.5,5.4,-18.8).curveTo(5.1,-23.7,7.9,-26.3).curveTo(10.4,-28.6,14.4,-28.6).closePath();
	this.shape_409.setTransform(-4.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_385},{t:this.shape_384}]}).to({state:[{t:this.shape_387},{t:this.shape_386}]},2).to({state:[{t:this.shape_389},{t:this.shape_388}]},2).to({state:[{t:this.shape_391},{t:this.shape_390}]},2).to({state:[{t:this.shape_393},{t:this.shape_392}]},2).to({state:[{t:this.shape_395},{t:this.shape_394}]},2).to({state:[{t:this.shape_397},{t:this.shape_396}]},2).to({state:[{t:this.shape_399},{t:this.shape_398}]},2).to({state:[{t:this.shape_401},{t:this.shape_400}]},2).to({state:[{t:this.shape_403},{t:this.shape_402}]},2).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.instance_36}]},2).to({state:[{t:this.shape_407},{t:this.shape_406}]},2).to({state:[{t:this.shape_409},{t:this.shape_408}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-31.3,42.2,61);


(lib.mcPlayer_jumping_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear_3 = new lib.Headwear();
	this.wear_3.setTransform(1.2,-27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wear_3}]}).wait(20));

	// Character
	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#000000").beginStroke().moveTo(6.4,-7.4).curveTo(9.3,-5.4,9.3,-2).curveTo(9.3,-0.2,8.4,1.9).curveTo(8.2,2.9,7.8,3.8).curveTo(6,7.8,2.6,8.6).lineTo(1.9,8.6).curveTo(0.7,8.9,-0.6,8.9).curveTo(-2.1,8.9,-3.3,8.6).lineTo(-4.1,8.6).curveTo(-6.5,8.6,-8,5.1).curveTo(-8.3,4.5,-8.5,3.9).curveTo(-9.3,2.1,-9.3,0.1).curveTo(-9.3,-3.4,-7.1,-5.7).curveTo(-4.7,-8.8,-0.1,-8.9).curveTo(-0,-8.9,0,-8.9).curveTo(3.7,-9.1,6.4,-7.4).closePath().moveTo(7.4,-2).curveTo(7.4,-3.9,6.3,-4.7).curveTo(4.4,-6.2,-1.3,-6.9).curveTo(-5.1,-5.7,-6.5,-3.6).curveTo(-7.4,-2.3,-7.4,-0).curveTo(-7.4,1.8,-6.1,3.9).curveTo(-4.3,6.9,-0.7,6.9).curveTo(3.5,6.9,5.9,2.6).curveTo(7,0.4,7.4,-2).closePath();
	this.shape_410.setTransform(0.1,-22);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.4,-2).curveTo(7,0.4,5.9,2.6).curveTo(3.5,6.9,-0.7,6.9).curveTo(-4.3,6.9,-6.1,3.9).curveTo(-7.4,1.8,-7.4,-0).curveTo(-7.4,-2.3,-6.5,-3.6).curveTo(-5.1,-5.7,-1.3,-6.9).curveTo(4.4,-6.2,6.3,-4.7).curveTo(7.4,-3.9,7.4,-2).closePath();
	this.shape_411.setTransform(0.1,-22);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#FFFFFF").beginStroke().moveTo(6.6,-4.6).curveTo(6.7,-4.5,6.8,-4.4).curveTo(7.1,-3.9,7.1,-1.8).curveTo(7.1,1.1,6.4,3.3).curveTo(5.2,7.2,2.1,7.5).lineTo(-1.4,7.5).curveTo(-5.7,4.6,-6.6,3.9).curveTo(-6.8,3.4,-7,3).curveTo(-7.1,2.2,-7.1,0.8).curveTo(-7.1,-0.7,-7,-1.7).curveTo(-6.6,-2.7,-6,-3.8).curveTo(-5.5,-4.7,-5,-5.4).curveTo(-3.3,-6.8,-0.1,-7.5).curveTo(0.1,-7.5,0.3,-7.4).curveTo(5.5,-5.6,6.6,-4.6).closePath();
	this.shape_412.setTransform(0,-21.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#000000").beginStroke().moveTo(8.4,4.2).curveTo(6.7,9.6,0.6,9.6).curveTo(-6,9.6,-8.2,5.3).curveTo(-9.3,3.1,-9.1,0.8).curveTo(-9.1,-4,-6.3,-6.8).curveTo(-3.8,-9.4,-0,-9.6).curveTo(3.6,-9.8,6.2,-7.8).curveTo(9,-5.5,9,-1.5).curveTo(9.3,1.5,8.4,4.2).closePath().moveTo(6.6,-4.5).curveTo(5.5,-5.4,0.3,-7.3).curveTo(0.1,-7.3,-0.2,-7.3).curveTo(-3.3,-6.6,-5,-5.3).curveTo(-5.6,-4.5,-6.1,-3.6).curveTo(-6.7,-2.5,-7,-1.6).curveTo(-7.2,-0.5,-7.2,0.9).curveTo(-7.2,2.3,-7,3.1).curveTo(-6.9,3.5,-6.6,4).curveTo(-5.8,4.7,-1.4,7.6).lineTo(2.1,7.6).curveTo(5.1,7.3,6.4,3.5).curveTo(7.1,1.3,7.1,-1.6).curveTo(7.1,-3.8,6.7,-4.3).curveTo(6.7,-4.4,6.6,-4.5).closePath();
	this.shape_413.setTransform(0,-22);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7,-3.4).curveTo(7,-3.3,7,-3.2).curveTo(7,0.1,6.3,2).curveTo(6.2,2.3,6,2.6).curveTo(6,2.7,5.9,2.8).curveTo(4.4,5.2,0.9,7.3).lineTo(-3.6,7.3).curveTo(-6.4,4.4,-6.6,4).curveTo(-6.8,3.7,-6.8,1.2).curveTo(-6.8,-0.1,-7,-2.2).curveTo(-6.9,-4,-5.2,-6.2).curveTo(2.4,-8.4,5.4,-6.2).curveTo(5.6,-6,5.8,-5.8).curveTo(7,-4.7,7,-3.4).closePath();
	this.shape_414.setTransform(0.8,-21.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#000000").beginStroke().moveTo(7,-3.2).curveTo(7,-4.6,5.8,-5.7).curveTo(5.6,-5.9,5.4,-6).curveTo(2.5,-8.3,-5.2,-6.1).curveTo(-6.9,-3.9,-7,-2.1).curveTo(-6.8,0,-6.8,1.4).curveTo(-6.8,3.8,-6.6,4.2).curveTo(-6.4,4.6,-3.5,7.4).lineTo(1,7.4).curveTo(4.5,5.4,6,2.9).curveTo(6,2.8,6,2.8).curveTo(6.2,2.5,6.3,2.2).curveTo(7,0.2,7,-3.1).curveTo(7,-3.1,7,-3.2).closePath().moveTo(1.7,-9.2).lineTo(3.5,-9.2).curveTo(7.5,-8,8.6,-5.5).curveTo(9.1,-4.5,9.1,-1.5).curveTo(9.1,1.5,7.7,4.2).curveTo(5.1,9.4,-1.3,9.4).curveTo(-6.5,9.4,-8.1,5.6).curveTo(-8.3,5.5,-8.3,5.3).curveTo(-9.1,4,-9.1,0.9).curveTo(-9.1,-2.6,-7.8,-5.1).curveTo(-6.5,-9.5,-3.5,-9.2).lineTo(-2.3,-9.2).curveTo(-1.4,-9.4,-0.4,-9.4).curveTo(0.7,-9.4,1.7,-9.2).closePath();
	this.shape_415.setTransform(0.8,-21.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7,-0).curveTo(7,0.1,7,0.2).curveTo(6.7,1.9,5.8,3.6).curveTo(5.8,3.8,5.7,3.9).curveTo(3.5,7.4,-1.6,7.4).curveTo(-4.5,7.4,-6,3.5).curveTo(-7,1,-7,-1).curveTo(-7,-3.7,-6.8,-4.4).curveTo(-6.8,-4.5,-6.8,-4.6).curveTo(-6.3,-5.3,-5.5,-5.9).curveTo(-3.9,-7.1,-1.8,-7.4).curveTo(4.1,-6.5,6,-4.2).curveTo(7,-3,7,-0).closePath();
	this.shape_416.setTransform(1,-22);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#000000").beginStroke().moveTo(7.3,0.1).curveTo(7.3,-2.8,6.3,-4).curveTo(4.4,-6.4,-1.5,-7.2).curveTo(-3.6,-7,-5.2,-5.8).curveTo(-6,-5.2,-6.5,-4.4).curveTo(-6.6,-4.3,-6.6,-4.3).curveTo(-6.7,-3.6,-6.7,-0.8).curveTo(-6.7,1.1,-5.7,3.7).curveTo(-4.2,7.5,-1.4,7.5).curveTo(3.8,7.5,6,4).curveTo(6.1,3.9,6.1,3.8).curveTo(7,2.1,7.3,0.4).curveTo(7.3,0.2,7.3,0.1).closePath().moveTo(6.3,-6.3).curveTo(9.2,-3.7,9.2,0).curveTo(9.2,2.8,7.9,5.2).curveTo(5.7,9.5,0.1,9.5).curveTo(-0.7,9.5,-1.4,9.4).lineTo(-1.4,9.4).curveTo(-1.6,9.5,-1.7,9.5).curveTo(-1.7,9.4,-1.7,9.4).curveTo(-6.3,8.7,-8,4.4).curveTo(-8.5,3.1,-8.7,1.8).curveTo(-9.3,-1,-9.1,-3.9).curveTo(-9.1,-7.1,-6.3,-8.6).curveTo(-3.7,-10,0,-9.3).curveTo(3.8,-8.7,6.3,-6.3).closePath();
	this.shape_417.setTransform(0.7,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_411},{t:this.shape_410}]}).to({state:[{t:this.shape_413},{t:this.shape_412}]},5).to({state:[{t:this.shape_415},{t:this.shape_414}]},5).to({state:[{t:this.shape_417},{t:this.shape_416}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-31,18.6,17.8);


(lib.arm_dyn_arm = function() {
	this.initialize();

	// arm_upper
	this.u = new lib.arm_upper();
	this.u.setTransform(1.8,3.3,1,1,0,0,0,1.8,3.3);

	// arm_lower
	this.l = new lib.arm_lower();
	this.l.setTransform(3.3,6.5,1,1,-14.9,0,0,1.4,0.1);

	this.addChild(this.l,this.u);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,0,29.4,45.3);


(lib.arm_dyn = function() {
	this.initialize();

	// Arm
	this.arm = new lib.arm_dyn_arm();

	this.addChild(this.arm);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,0,29.4,45.3);


(lib.giftedclientphysObj = function() {
	this.initialize();

	// Hitbox
	this.hitbox_1 = new lib.mcPhysObj_hitbox();
	this.hitbox_1.setTransform(0,0,1.003,1.005);

	this.addChild(this.hitbox_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-15,30.1,30.1);


(lib.giftedclientcharacter = function() {
	this.initialize();

	// Hitbox
	this.charHitbox = new lib.mcCharacter_hitbox();
	this.charHitbox.setTransform(0.2,0.2,0.72,1,0,0,0,15,30);
	this.charHitbox.alpha = 0;

	this.addChild(this.charHitbox);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-29.8,18,60);


(lib.giftedclientlogin = function() {
	this.initialize();

	//  
	this.instance_37 = new lib.mcLoad_Meng();
	this.instance_37.setTransform(-256.6,5,1,1,0,0,0,20.3,62.1);

	// UI
	this.text = new cjs.Text("Password:", "bold 0px Trebuchet MS", "#999999");
	this.text.lineHeight = 14;
	this.text.lineWidth = 70;
	this.text.setTransform(-88.9,50.2);

	this.text_1 = new cjs.Text("Username:", "bold 0px Trebuchet MS", "#999999");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 70;
	this.text_1.setTransform(-88.8,-3.4);

	this.lblStatus = new cjs.Text("Log in to play", "bold 24px Trebuchet MS", "#FFFFFF");
	this.lblStatus.textAlign = "center";
	this.lblStatus.lineHeight = 26;
	this.lblStatus.lineWidth = 636;
	this.lblStatus.setTransform(-1.9,-69.5);
	this.lblStatus.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,103);

	this.lblGifted = new cjs.Text("GIFTED", "bold 35px Trebuchet MS", "#EEEEEE");
	this.lblGifted.textAlign = "center";
	this.lblGifted.lineHeight = 37;
	this.lblGifted.lineWidth = 835;
	this.lblGifted.setTransform(4.4,-137.4,0.987,1);
	this.lblGifted.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,89);

	this.txtPass = new lib.flcontrolsTextInput();
	this.txtPass.setTransform(-0.9,80.1,1.758,1,0,0,0,50,11);

	this.txtUser = new lib.flcontrolsTextInput();
	this.txtUser.setTransform(-0.9,26.6,1.759,1,0,0,0,50,11);

	this.btnLogin = new lib.flcontrolsButton();
	this.btnLogin.setTransform(-0.9,123.5,1.19,1.273,0,0,0,50,11);

	// Back
	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginLinearGradientFill(["#7964AC","#5A4392"],[0,1],-401.1,295.2,-401.3,-68.7).beginLinearGradientStroke(["#3F2F59","#2F234B"],[0,1],180.6,-138.1,-180.4,138.2).setStrokeStyle(6,1,1).moveTo(394.7,-171).lineTo(-394.7,-171).curveTo(-415,-171,-415,-155.5).lineTo(-415,155.5).curveTo(-415,171,-394.7,171).lineTo(394.7,171).curveTo(415,171,415,155.5).lineTo(415,-155.5).curveTo(415,-171,394.7,-171).closePath();
	this.shape_418.setTransform(-419.8,-179.8,1,1,0,0,0,-419.9,-179.9);

	this.addChild(this.shape_418,this.btnLogin,this.txtUser,this.txtPass,this.lblGifted,this.lblStatus,this.text_1,this.text,this.instance_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-415,-170.9,830.1,342);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_38 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_38.setTransform(4,4);

	// fill
	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).beginStroke().moveTo(-6.5,3.3).lineTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).closePath();
	this.shape_419.setTransform(7.5,4.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginLinearGradientFill(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).beginStroke().moveTo(7.5,7).lineTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).closePath().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_420.setTransform(7.5,7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_421.setTransform(7.5,7);

	this.addChild(this.shape_421,this.shape_420,this.shape_419,this.instance_38);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_39 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_39.setTransform(4,4);

	// fill
	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).beginStroke().moveTo(-6.5,3.3).lineTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).closePath();
	this.shape_422.setTransform(7.6,4.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).beginStroke().moveTo(7.5,7).lineTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).closePath().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_423.setTransform(7.5,7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_424.setTransform(7.5,7);

	this.addChild(this.shape_424,this.shape_423,this.shape_422,this.instance_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_40 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_40.setTransform(4,5);

	// fill
	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).beginStroke().moveTo(-6.5,3.3).lineTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).closePath();
	this.shape_425.setTransform(7.5,4.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginLinearGradientFill(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).beginStroke().moveTo(7.5,7).lineTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).closePath().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_426.setTransform(7.5,7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_427.setTransform(7.5,7);

	this.addChild(this.shape_427,this.shape_426,this.shape_425,this.instance_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_41 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_41.setTransform(4,5);

	// fill
	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginLinearGradientFill(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).beginStroke().moveTo(-6.5,3.3).lineTo(-6.5,-3.3).lineTo(6.5,-3.3).lineTo(6.5,3.3).closePath();
	this.shape_428.setTransform(7.5,4.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginLinearGradientFill(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).beginStroke().moveTo(7.5,7).lineTo(7.5,-7).lineTo(-7.5,-7).lineTo(-7.5,7).closePath().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_429.setTransform(7.5,7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginLinearGradientFill(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).beginStroke().moveTo(6.5,-6).lineTo(6.5,6).lineTo(-6.5,6).lineTo(-6.5,-6).closePath();
	this.shape_430.setTransform(7.5,7);

	this.addChild(this.shape_430,this.shape_429,this.shape_428,this.instance_41);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_42 = new lib.ScrollBar_thumbIcon();
	this.instance_42.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_43 = new lib.ScrollBar_thumbIcon();
	this.instance_43.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_44 = new lib.ScrollBar_thumbIcon();
	this.instance_44.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_45 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_45.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_46 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_46.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_47 = new lib.ScrollArrowDown_upSkin();
	this.instance_47.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_48 = new lib.ScrollThumb_upSkin();
	this.instance_48.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_49 = new lib.ScrollArrowUp_upSkin();
	this.instance_49.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_50 = new lib.ScrollArrowUp_overSkin();
	this.instance_50.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_51 = new lib.ScrollThumb_overSkin();
	this.instance_51.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_52 = new lib.ScrollArrowDown_overSkin();
	this.instance_52.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_53 = new lib.ScrollThumb_downSkin();
	this.instance_53.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_54 = new lib.ScrollArrowDown_downSkin();
	this.instance_54.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_55 = new lib.ScrollArrowUp_downSkin();
	this.instance_55.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_56 = new lib.ScrollTrack_skin();
	this.instance_56.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_57 = new lib.ScrollTrack_skin();
	this.instance_57.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_58 = new lib.ScrollTrack_skin();
	this.instance_58.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_59 = new lib.ScrollTrack_skin();
	this.instance_59.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_60 = new lib.focusRectSkin();
	this.instance_60.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42}]},1).wait(1));

	// avatar
	this.instance_61 = new lib.ScrollTrack_skin();
	this.instance_61.setTransform(7.5,50,1,0.676,0,0,0,7.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.mcPlayer_char = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{static:0,running:8,running_back:37,jumping:66,falling:74,flying:82,flying_back:91,floating:100},true);

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.gotoAndPlay("running");
	}
	this.frame_65 = function() {
		this.gotoAndPlay("running_back");
	}
	this.frame_73 = function() {
		this.stop();
	}
	this.frame_81 = function() {
		this.stop();
	}
	this.frame_90 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_123 = function() {
		this.gotoAndPlay("floating");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(29).call(this.frame_36).wait(29).call(this.frame_65).wait(8).call(this.frame_73).wait(8).call(this.frame_81).wait(9).call(this.frame_90).wait(9).call(this.frame_99).wait(24).call(this.frame_123));

	// LArm Dynamic
	this.larm_d = new lib.arm_dyn();
	this.larm_d.setTransform(-3.6,-0.2,1,1,0,0,180,3.7,8);

	this.timeline.addTween(cjs.Tween.get(this.larm_d).wait(1).to({regX:12.3,regY:24.3,x:-12.1,y:16},0).wait(6).wait(1).to({regX:3.7,regY:8,x:-1.6,y:-0.1},0).wait(1).to({regX:12.3,regY:24.3,x:-10.1,y:16.3},0).wait(1).to({x:-9.9,y:16.6},0).wait(1).to({x:-9.6,y:17},0).wait(1).to({x:-9.4,y:17.5},0).wait(1).to({x:-9.7,y:17.2},0).wait(1).to({x:-10,y:16.9},0).wait(1).to({x:-10.1,y:16.6},0).wait(1).to({x:-10.2,y:16.3},0).wait(1).to({x:-9.5,y:16.9},0).wait(1).to({x:-8.9,y:17.6},0).wait(1).to({x:-9,y:17.9},0).wait(1).to({x:-9.2,y:18.3},0).wait(1).to({x:-8.5,y:19},0).wait(1).to({x:-7.9,y:19.7},0).wait(1).to({x:-8.1,y:19.6},0).wait(1).to({x:-8.4},0).wait(1).to({x:-8.1,y:19.8},0).wait(1).to({x:-7.9,y:20.1},0).wait(1).to({x:-8.3,y:20},0).wait(1).to({x:-8.7,y:19.9},0).wait(1).to({x:-8.9,y:19.8},0).wait(1).to({x:-9.1,y:19.7},0).wait(1).to({x:-9.6,y:19.2},0).wait(1).to({x:-10.2,y:18.7},0).wait(1).to({x:-9.8,y:18.9},0).wait(1).to({x:-9.5,y:19.1},0).wait(1).to({x:-9.4,y:17},0).wait(1).to({y:15},0).wait(1).to({regX:3.7,regY:8,x:-6.7,y:0.9},0).wait(1).to({regX:12.3,regY:24.3,x:-15.5,y:17},0).wait(1).to({x:-15.6,y:16.9},0).wait(1).to({x:-16.4},0).wait(1).to({x:-17.1,y:17},0).wait(1).to({x:-16.9,y:17.3},0).wait(1).to({x:-16.6,y:17.7},0).wait(1).to({x:-17.1,y:18.2},0).wait(1).to({x:-17.5,y:18.7},0).wait(1).to({x:-18.5,y:19},0).wait(1).to({x:-19.4,y:19.4},0).wait(1).to({x:-19.3,y:19},0).wait(1).to({x:-19.2,y:18.7},0).wait(1).to({x:-18.9,y:18.9},0).wait(1).to({x:-18.5,y:19.2},0).wait(1).to({x:-17.7,y:18.4},0).wait(1).to({x:-16.8,y:17.7},0).wait(1).to({x:-16.6,y:17.1},0).wait(1).to({x:-16.4,y:16.5},0).wait(1).to({x:-16.5,y:16.7},0).wait(1).to({x:-16.6,y:16.9},0).wait(1).to({y:17.2},0).wait(1).to({y:17.5},0).wait(1).to({x:-16.5,y:18.3},0).wait(1).to({x:-16.4,y:19.1},0).wait(1).to({x:-15.2,y:19.2},0).wait(1).to({x:-13.9,y:19.4},0).wait(1).to({x:-14.4,y:18.9},0).wait(1).to({x:-14.9,y:18.4},0).wait(1).to({regX:3.7,regY:8,x:-3,y:0.6},0).wait(1).to({regX:12.3,regY:24.3,x:-11.4,y:17.5},0).wait(1).to({x:-11.3,y:18.2},0).wait(1).to({x:-10.7},0).wait(1).to({x:-10.1,y:18.3},0).wait(3).wait(1).to({regX:3.7,regY:8,x:-1.1,y:0.4},0).wait(1).to({regX:12.3,regY:24.3,x:-10.5,y:16.4},0).wait(1).to({x:-11.3,y:16.1},0).wait(1).to({x:-12.5,y:16.7},0).wait(1).to({x:-13.7,y:17.3},0).wait(1).to({x:-13.4,y:17.4},0).wait(1).to({x:-13.1,y:17.6},0).wait(1).wait(1).to({regX:3.7,regY:8,x:-0.8,y:0.6},0).wait(1).to({regX:12.3,regY:24.3,x:-9.5,y:16.5},0).wait(1).to({x:-9.7,y:16.2},0).wait(1).to({x:-9.8,y:15.8},0).wait(1).to({x:-10,y:15.5},0).wait(1).to({x:-10.1,y:15.1},0).wait(1).to({x:-9.8,y:15.3},0).wait(1).to({x:-9.4,y:15.6},0).wait(1).to({x:-9.1,y:15.8},0).wait(1).to({regX:3.7,regY:8,x:-0.6,y:0.1},0).wait(1).to({regX:12.3,regY:24.3,x:-12,y:16},0).wait(1).to({x:-14.7,y:15.7},0).wait(1).to({x:-14.1,y:15.8},0).wait(1).to({x:-13.4,y:15.9},0).wait(1).to({x:-13.6,y:16.7},0).wait(1).to({x:-13.7,y:17.6},0).wait(1).to({x:-14.2,y:18.6},0).wait(1).to({x:-14.6,y:19.6},0).wait(1).to({regX:3.7,regY:8,x:-2.2,y:-8.9},0).wait(1).to({regX:12.3,regY:24.3,x:-10.8,y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({x:-10.7,y:8},0).wait(1).to({y:8.2},0).wait(1).to({y:8.5},0).wait(1).to({x:-10.6,y:8.7},0).wait(1).to({y:9},0).wait(1).to({y:9.2},0).wait(1).to({x:-10.5,y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({x:-10.4,y:9.9},0).wait(1).to({x:-10.5,y:9.7},0).wait(1).to({y:9.5},0).wait(1).to({y:9.3},0).wait(1).to({x:-10.6,y:9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({x:-10.7,y:8.4},0).wait(1).to({y:8.1},0).wait(1).to({y:7.9},0).wait(1).to({x:-10.8,y:7.7},0).wait(1).to({y:7.5},0).wait(1).to({y:7.2},0).wait(1));

	// LArm U
	this.larm_u = new lib.arm_upper();
	this.larm_u.setTransform(-2.3,-4.9,0.998,0.998,44.9,0,0,1.7,4);

	this.timeline.addTween(cjs.Tween.get(this.larm_u).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:45,x:-1.6,y:-5.2},0).wait(6).wait(1).to({regY:3.8,scaleX:1,scaleY:1,rotation:78.7,x:-1.4,y:-6.6},0).wait(1).to({regY:3.3,scaleX:1,scaleY:1,x:-0.8,y:-6.5},0).wait(1).to({x:-0.5,y:-6.2},0).wait(1).to({x:0,y:-6.1},0).wait(1).to({x:0.5,y:-5.9},0).wait(1).to({rotation:80.7,x:0.1},0).wait(1).to({rotation:82.7,x:0,y:-6},0).wait(1).to({rotation:54.6,x:0.8,y:-5.4},0).wait(1).to({rotation:26.6,x:1.8,y:-4.7},0).wait(1).to({rotation:34.1,x:2.4,y:-4.3},0).wait(1).to({rotation:41.5,x:2.9,y:-3.9},0).wait(1).to({rotation:19,x:3.1},0).wait(1).to({rotation:-3.3,x:3.3,y:-3.7},0).wait(1).to({rotation:4,x:3.9,y:-2},0).wait(1).to({rotation:11.5,x:4.6,y:-0.3},0).wait(1).to({rotation:26.5,x:3.9},0).wait(1).to({rotation:41.5,x:3.3,y:-0.2},0).wait(1).to({x:2.9,y:-0.9},0).wait(1).to({x:2.5,y:-1.7},0).wait(1).to({rotation:71.5,x:1.2,y:-1.8},0).wait(1).to({rotation:101.5,x:0,y:-1.9},0).wait(1).to({rotation:109,x:0,y:-2.8},0).wait(1).to({rotation:116.5,x:-0.1,y:-3.7},0).wait(1).to({rotation:120.5,x:-0.9,y:-3.9},0).wait(1).to({rotation:124.6,x:-1.6,y:-4},0).wait(1).to({rotation:120.5,x:-1.1,y:-4.5},0).wait(1).to({rotation:116.5,x:-0.5,y:-4.9},0).wait(1).to({rotation:97.6,x:-0.7,y:-5.8},0).wait(1).to({rotation:78.7,x:-1,y:-6.7},0).wait(1).to({regY:3.6,scaleX:1,scaleY:1,x:-7,y:-4},0).wait(1).to({regY:3.3,scaleX:1,scaleY:1,rotation:67.6,x:-6.5,y:-4.1},0).wait(1).to({rotation:56.5,x:-6.4,y:-4.2},0).wait(1).to({rotation:53.1,x:-7.1,y:-4},0).wait(1).to({rotation:49.6,x:-7.8,y:-3.9},0).wait(1).to({rotation:53.1,x:-7.4,y:-3.1},0).wait(1).to({rotation:56.7,x:-7.1,y:-2.4},0).wait(1).to({rotation:49.1,x:-7.6,y:-2.3},0).wait(1).to({rotation:41.5,x:-7.9,y:-1.7},0).wait(1).to({rotation:19,x:-6.9,y:-1.3},0).wait(1).to({rotation:-3.2,x:-5.9,y:-0.4},0).wait(1).to({rotation:-3.3,x:-5.8,y:-0.6},0).wait(1).to({x:-5.6,y:-0.7},0).wait(1).to({x:-5.5},0).wait(1).to({x:-5.4,y:-0.6},0).wait(1).to({x:-4.5,y:-2.1},0).wait(1).to({x:-3.5,y:-3.6},0).wait(1).to({rotation:4.1,x:-3.3,y:-3.9},0).wait(1).to({rotation:11.6,x:-3,y:-4.3},0).wait(1).to({x:-3.2,y:-3.6},0).wait(1).to({x:-3.4,y:-3},0).wait(1).to({rotation:47.1,x:-5.7,y:-3.4},0).wait(1).to({rotation:82.7,x:-8.1,y:-3.8},0).wait(1).to({rotation:77.1,y:-2.7},0).wait(1).to({rotation:71.5,x:-8.2,y:-1.7},0).wait(1).to({rotation:75.1,x:-6.6,y:-1.6},0).wait(1).to({rotation:78.7,x:-5.2,y:-2.1},0).wait(1).to({x:-6,y:-3.2},0).wait(1).to({x:-6.7,y:-4.2},0).wait(1).to({regX:1.7,regY:3.5,scaleX:1,scaleY:1,rotation:59.9,x:-0.5,y:-4.7},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:63.7,x:-0.3,y:-4.5},0).wait(1).to({rotation:67.4,y:-4.2},0).wait(1).to({rotation:71.2,x:0.4,y:-4.1},0).wait(1).to({rotation:74.9,x:1.2,y:-3.9},0).wait(3).wait(1).to({regX:1.4,regY:3.9,scaleX:1,scaleY:1,rotation:119.8,x:-1.4,y:-7.7},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:112.4,x:-1.6,y:-6.7},0).wait(1).to({rotation:104.8,x:-2.1,y:-6.3},0).wait(1).to({rotation:97.4,x:-4,y:-5.3},0).wait(1).to({rotation:89.9,x:-6,y:-4.4},0).wait(1).to({x:-5.5,y:-4.3},0).wait(1).to({x:-5,y:-4.2},0).wait(1).wait(1).to({regX:1.7,regY:3.5,scaleX:1,scaleY:1,rotation:75,x:1,y:-3.9},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:79.9,x:0.9,y:-4},0).wait(1).to({rotation:85,x:0.6},0).wait(1).to({rotation:90,x:0.3,y:-4.2},0).wait(1).to({rotation:87,x:0.1},0).wait(1).to({rotation:84,x:0,y:-4.4},0).wait(1).to({rotation:80.9,y:-4.2},0).wait(1).to({rotation:77.9,x:0.2,y:-4.1},0).wait(1).to({rotation:74.9,x:0.3,y:-4},0).wait(1).to({regX:1.7,regY:3.5,scaleX:1,scaleY:1,rotation:75,x:1,y:-3.9},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:67.4,x:-1.4,y:-3.6},0).wait(1).to({rotation:59.8,x:-4.2,y:-3.4},0).wait(1).to({rotation:52.4,x:-3.7,y:-3.8},0).wait(1).to({rotation:45,x:-3.3,y:-4.3},0).wait(1).to({x:-3.6},0).wait(1).to({x:-3.8,y:-4.4},0).wait(1).to({rotation:52.5,x:-4.2,y:-3.2},0).wait(1).to({rotation:59.9,x:-4.7,y:-2},0).wait(1).to({regX:1.2,regY:0,scaleX:1,scaleY:1,rotation:44.9,x:1.4,y:-17.3},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,x:-0.4,y:-14.2},0).wait(1).to({y:-13.8},0).wait(1).to({y:-13.5},0).wait(1).to({x:-0.5,y:-13.1},0).wait(1).to({y:-12.8},0).wait(1).to({y:-12.4},0).wait(1).to({y:-12},0).wait(1).to({x:-0.6,y:-11.7},0).wait(1).to({y:-11.3},0).wait(1).to({y:-11},0).wait(1).to({x:-0.7,y:-10.6},0).wait(1).to({x:-0.6,y:-10.9},0).wait(1).to({y:-11.3},0).wait(1).to({y:-11.6},0).wait(1).to({y:-11.9},0).wait(1).to({x:-0.5,y:-12.2},0).wait(1).to({y:-12.6},0).wait(1).to({y:-12.9},0).wait(1).to({y:-13.2},0).wait(1).to({x:-0.4,y:-13.6},0).wait(1).to({y:-13.9},0).wait(1).to({y:-14.2},0).wait(1).to({y:-14.6},0).wait(1));

	// LArm L
	this.larm_l = new lib.arm_lower();
	this.larm_l.setTransform(-4.1,1.9,1.149,0.999,21.1,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.larm_l).wait(1).to({regX:5.1,regY:21.3,scaleX:1.15,scaleY:1,rotation:21.2,x:-6.3,y:19.5},0).wait(6).wait(1).to({regX:0.8,regY:4.6,scaleX:1.12,scaleY:1,rotation:44.9,x:-7.6,y:-1.3},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.12,scaleY:1,x:-15.7,y:14},0).wait(1).to({x:-15.5,y:14.3},0).wait(1).to({rotation:37.4,x:-12.3,y:15.6},0).wait(1).to({rotation:29.9,x:-9,y:16.7},0).wait(1).to({rotation:7.4,x:-0.9,y:17.3},0).wait(1).to({rotation:-15,x:6.6,y:15.4},0).wait(1).to({rotation:-15,x:8.9,y:16.9},0).wait(1).to({x:11.2,y:18.4},0).wait(1).to({rotation:-37.4,x:18,y:13},0).wait(1).to({rotation:-59.9,x:22.7,y:6.1},0).wait(1).to({rotation:-89.9,x:24.2,y:-5},0).wait(1).to({rotation:-120,x:21.1,y:-14.9},0).wait(1).to({x:21.3,y:-12.9},0).wait(1).to({x:21.4,y:-10.8},0).wait(1).to({rotation:-97.4,x:23.9,y:-3.7},0).wait(1).to({rotation:-74.9,y:4.2},0).wait(1).to({rotation:-44.9,x:19.6,y:13.7},0).wait(1).to({rotation:-15,x:11.2,y:20.9},0).wait(1).to({rotation:14.9,x:-1.9,y:21.3},0).wait(1).to({rotation:44.9,x:-15.4,y:17},0).wait(1).to({rotation:52.4,x:-17.8,y:13.9},0).wait(1).to({rotation:59.9,x:-20,y:10.5},0).wait(1).to({x:-20.5,y:10.1},0).wait(1).to({x:-21,y:9.7},0).wait(1).to({rotation:67.4,x:-22.3,y:7.2},0).wait(1).to({rotation:74.9,x:-23.2,y:4.4},0).wait(1).to({rotation:59.9,x:-20,y:9.5},0).wait(1).to({rotation:44.9,x:-15.9,y:13.7},0).wait(1).to({regX:0.8,regY:4.5,scaleX:1.12,scaleY:1,rotation:29.8,x:-12,y:1.1},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.12,scaleY:1,rotation:22.4,x:-13,y:18.9},0).wait(1).to({rotation:15,x:-9.8,y:19.3},0).wait(1).to({rotation:0,x:-4.8},0).wait(1).to({rotation:-14.9,x:-0.1,y:18.2},0).wait(1).to({rotation:-7.4,x:-2.3,y:19.8},0).wait(1).to({rotation:0,x:-4.6,y:21.1},0).wait(1).to({rotation:0,y:21.5},0).wait(1).to({y:21.9},0).wait(1).to({rotation:-14.9,x:2.6,y:20.3},0).wait(1).to({rotation:-29.9,x:9.4,y:17.8},0).wait(1).to({rotation:-44.9,x:12.9,y:13.5},0).wait(1).to({rotation:-60,x:15.4,y:8.5},0).wait(1).to({rotation:-74.9,x:16.5,y:3.2},0).wait(1).to({rotation:-89.9,x:16.4,y:-1.9},0).wait(1).to({x:17.3,y:-3.6},0).wait(1).to({x:18.3,y:-5.4},0).wait(1).to({rotation:-74.9,x:18.6,y:0},0).wait(1).to({rotation:-59.9,x:17.6,y:5.4},0).wait(1).to({rotation:-37.4,x:13.1,y:12.7},0).wait(1).to({rotation:-15,x:6.5,y:18.4},0).wait(1).to({rotation:-15,x:2.1,y:17.6},0).wait(1).to({x:-2.1,y:16.7},0).wait(1).to({rotation:3.7,x:-8.4,y:20},0).wait(1).to({rotation:22.6,x:-15,y:21.6},0).wait(1).to({rotation:33.8,x:-17.6,y:19.9},0).wait(1).to({rotation:44.9,x:-20.3,y:17.6},0).wait(1).to({x:-21,y:17},0).wait(1).to({x:-21.6,y:16.3},0).wait(1).to({regX:2,regY:4.4,scaleX:1.15,scaleY:1,rotation:-23.6,x:-0.7,y:1.1},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.15,scaleY:1,rotation:-31.2,x:11.6,y:13.7},0).wait(1).to({rotation:-38.6,x:13.7,y:12.1},0).wait(1).to({x:14.2,y:11.9},0).wait(1).to({x:14.7,y:11.8},0).wait(3).wait(1).to({regX:1.8,regY:4.8,scaleX:1.15,scaleY:1,rotation:126.1,x:-7.9,y:-9.6},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.15,scaleY:1,rotation:103.6,x:-25.7,y:-7.3},0).wait(1).to({rotation:81,x:-25.4,y:1.5},0).wait(1).to({rotation:58.6,x:-22.4,y:9.5},0).wait(1).to({rotation:36.2,x:-17.5,y:15.7},0).wait(1).to({x:-17.3,y:16.1},0).wait(1).to({x:-17,y:16.5},0).wait(1).wait(1).to({regX:2,regY:4.5,scaleX:1.15,scaleY:1,rotation:-38.6,x:1.4,y:0.9},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.15,scaleY:1,rotation:-28.6,x:11.8,y:13.9},0).wait(1).to({rotation:-18.6,x:8.5,y:15.6},0).wait(1).to({rotation:-8.6,x:4.9,y:16.8},0).wait(1).to({x:4.5,y:17},0).wait(1).to({x:4.2,y:17.2},0).wait(1).to({rotation:-13.6,x:6.1,y:16.8},0).wait(1).to({rotation:-18.6,x:8,y:16.1},0).wait(1).to({rotation:-23.6,x:9.7,y:15.4},0).wait(1).to({regX:2,regY:4.5,scaleX:1.15,scaleY:1,rotation:-38.6,x:1.4,y:0.9},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.15,scaleY:1,rotation:-53.6,x:15,y:7.7},0).wait(1).to({rotation:-68.6,x:14.2,y:3.2},0).wait(1).to({rotation:-31.2,x:8.2,y:14.5},0).wait(1).to({rotation:6.1,x:-2.4,y:20.6},0).wait(1).to({rotation:-1.2,x:-0.1,y:19.6},0).wait(1).to({rotation:-8.7,x:2.1,y:18.4},0).wait(1).to({x:1.3,y:19.3},0).wait(1).to({rotation:-8.6,x:0.5,y:20.1},0).wait(1).to({regX:1.5,regY:4.8,scaleX:1.15,scaleY:1,rotation:21.1,x:-3.2,y:-6.7},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1.15,scaleY:1,x:-5.3,y:10.3},0).wait(1).to({y:10.7},0).wait(1).to({y:11},0).wait(1).to({y:11.4},0).wait(1).to({x:-5.4,y:11.7},0).wait(1).to({y:12},0).wait(1).to({y:12.4},0).wait(1).to({y:12.7},0).wait(1).to({y:13.1},0).wait(1).to({y:13.4},0).wait(1).to({y:13.7},0).wait(1).to({y:13.4},0).wait(1).to({y:13.1},0).wait(1).to({y:12.8},0).wait(1).to({y:12.5},0).wait(1).to({y:12.2},0).wait(1).to({y:11.9},0).wait(1).to({y:11.6},0).wait(1).to({x:-5.3,y:11.2},0).wait(1).to({y:10.9},0).wait(1).to({y:10.6},0).wait(1).to({y:10.3},0).wait(1).to({y:10},0).wait(1));

	// LLeg U
	this.instance_62 = new lib.leg_upper();
	this.instance_62.setTransform(-1.8,15.4,1.143,1,0,0,180,2.5,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(7).wait(1).to({x:-4.9},0).wait(1).to({skewX:-22.3,skewY:157.5,x:-2.3,y:15.8},0).wait(1).to({skewX:-44.8,skewY:135,x:0.2,y:16},0).wait(1).to({skewX:-52.3,skewY:127.5,x:-0.3,y:15.3},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-1,y:14.5},0).wait(1).to({skewX:-67.2,skewY:112.6,x:-2,y:13.5},0).wait(1).to({skewX:-74.7,skewY:105.1,x:-3,y:12.4},0).wait(1).to({skewX:-97.2,skewY:82.6,x:-1.8,y:10.7},0).wait(1).to({skewX:-119.8,skewY:60,x:-0.6,y:8.9},0).wait(1).to({y:8.6},0).wait(1).to({x:-0.7,y:8.3},0).wait(1).to({skewX:-97.2,skewY:82.6,x:-1,y:10.6},0).wait(1).to({skewX:-74.6,skewY:105.2,x:-1.2,y:12.9},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-3,y:14.4},0).wait(1).to({skewX:-44.7,skewY:135.1,x:-4.6,y:15.9},0).wait(1).to({skewX:-37.2,skewY:142.6,x:-5.5},0).wait(1).to({skewX:-29.7,skewY:150.1,x:-6.4,y:15.8},0).wait(1).to({skewX:-22.2,skewY:157.6,x:-6.8,y:15.9},0).wait(1).to({skewX:-14.6,skewY:165.2,x:-7.3,y:16},0).wait(1).to({skewX:-7.1,skewY:172.7,x:-7.4,y:15.9},0).wait(1).to({skewX:0.2,skewY:180.3,x:-7.5,y:15.8},0).wait(1).to({skewX:7.6,skewY:187.7,x:-7.7,y:15.6},0).wait(1).to({skewX:15.1,skewY:195.2,x:-7.9,y:15.4},0).wait(1).to({x:-8.2,y:14.5},0).wait(1).to({x:-8.5,y:13.6},0).wait(1).to({x:-7.6,y:14.5},0).wait(1).to({x:-6.7,y:15.4},0).wait(1).to({skewX:7.5,skewY:187.6,x:-5.8},0).wait(1).to({skewX:0,skewY:180,x:-4.9},0).wait(1).wait(1).to({skewX:7.5,skewY:187.6,x:-5.8},0).wait(1).to({skewX:15.1,skewY:195.2,x:-6.7},0).wait(1).to({x:-7.6,y:14.5},0).wait(1).to({x:-8.5,y:13.6},0).wait(1).to({x:-8.2,y:14.5},0).wait(1).to({x:-7.9,y:15.4},0).wait(1).to({skewX:7.6,skewY:187.7,x:-7.7,y:15.6},0).wait(1).to({skewX:0.2,skewY:180.3,x:-7.5,y:15.8},0).wait(1).to({skewX:-7.1,skewY:172.7,x:-7.4,y:15.9},0).wait(1).to({skewX:-14.6,skewY:165.2,x:-7.3,y:16},0).wait(1).to({skewX:-22.2,skewY:157.6,x:-6.8,y:15.9},0).wait(1).to({skewX:-29.7,skewY:150.1,x:-6.4,y:15.8},0).wait(1).to({skewX:-37.2,skewY:142.6,x:-5.5,y:15.9},0).wait(1).to({skewX:-44.7,skewY:135.1,x:-4.6},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-3.1,y:14.1},0).wait(1).to({skewX:-74.6,skewY:105.2,x:-1.4,y:12.2},0).wait(1).to({skewX:-89.6,skewY:90.2,x:-1.1,y:10.6},0).wait(1).to({skewX:-104.7,skewY:75.2,x:-0.9,y:8.9},0).wait(1).to({x:-1,y:9.4},0).wait(1).to({x:-1.1,y:9.9},0).wait(1).to({skewX:-89.7,skewY:90.1,x:-1.7,y:11.5},0).wait(1).to({skewX:-74.7,skewY:105.1,x:-2.4,y:12.9},0).wait(1).to({skewX:-67.2,skewY:112.6,x:-1.9,y:13.5},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-1.5,y:13.8},0).wait(1).to({skewX:-52.3,skewY:127.5,x:-0.3,y:14.9},0).wait(1).to({skewX:-44.8,skewY:135,x:0.6,y:16},0).wait(1).to({skewX:-22.3,skewY:157.5,x:-2.1,y:15.7},0).wait(1).to({skewX:0,skewY:180,x:-4.9,y:15.4},0).wait(1).to({regX:2.6,regY:4.9,scaleX:1.14,scaleY:1,skewX:-29.6,skewY:150.2,x:-3.3,y:15.9},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-22.1,skewY:157.7,x:-3.8,y:16.1},0).wait(1).to({skewX:-14.6,skewY:165.2,x:-4.6,y:15.8},0).wait(1).to({x:-4.3},0).wait(1).to({x:-4.1},0).wait(3).wait(1).to({regX:2.6,regY:5.2,scaleX:1.14,scaleY:1,x:-3,y:15.2},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-22.2,skewY:157.6,x:-1.2,y:16.3},0).wait(1).to({skewX:-29.6,skewY:150.2,x:0.2,y:17.3},0).wait(1).to({x:0.3,y:17.1},0).wait(1).to({x:0.4,y:16.8},0).wait(1).to({y:16.3},0).wait(1).to({y:15.8},0).wait(1).wait(1).to({regX:2.4,regY:4.9,scaleX:1.14,scaleY:1,skewX:-14.6,skewY:165.2,x:-4.3,y:15.4},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-11.6,skewY:168.2,x:-4.8,y:15.9},0).wait(1).to({skewX:-8.6,skewY:171.2,x:-5.3},0).wait(1).to({skewX:-5.6,skewY:174.2,x:-5.9,y:15.8},0).wait(1).to({skewX:-2.6,skewY:177.2,x:-6.5,y:15.9},0).wait(1).to({skewX:0.2,skewY:180.3,x:-7,y:15.8},0).wait(1).to({skewX:10.2,skewY:190.3,x:-7.3,y:15.2},0).wait(1).to({skewX:20.2,skewY:200.3,x:-7.6,y:14.5},0).wait(1).to({skewX:30.2,skewY:210.3,x:-7.8,y:13.9},0).wait(1).to({regY:5,scaleX:1.14,scaleY:1,skewX:-29.6,skewY:150.2,x:-3.2,y:15.5},0).wait(1).to({regY:5.4,scaleX:1.14,scaleY:1,skewX:-37.1,skewY:142.7,x:-2.7,y:15.2},0).wait(1).to({skewX:-44.6,skewY:135.2,x:-2.5,y:14.6},0).wait(1).to({skewX:-52.1,skewY:127.7,x:0},0).wait(1).to({skewX:-59.7,skewY:120.1,x:2.3,y:14.5},0).wait(1).to({skewX:-67.2,skewY:112.6,x:3.6,y:14.6},0).wait(1).to({skewX:-74.7,skewY:105.1,x:4.7,y:14.7},0).wait(1).to({skewX:-82.2,skewY:97.6,x:4.5,y:15},0).wait(1).to({skewX:-89.8,skewY:90,x:4.3,y:15.3},0).wait(1).to({regX:2.4,regY:5.1,scaleX:1.14,scaleY:1,skewX:-29.6,skewY:150.2,x:0.3,y:4.9},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-29.6,y:5.5},0).wait(1).to({x:0.4,y:5.7},0).wait(1).to({y:5.9},0).wait(1).to({x:0.5,y:6.1},0).wait(1).to({y:6.3},0).wait(1).to({x:0.6,y:6.5},0).wait(1).to({y:6.7},0).wait(1).to({x:0.7,y:6.9},0).wait(1).to({y:7.2},0).wait(1).to({x:0.8,y:7.4},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({x:0.7,y:7.2},0).wait(1).to({y:7},0).wait(1).to({x:0.6,y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({x:0.5,y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({x:0.4,y:5.8},0).wait(1).to({y:5.6},0).wait(1).to({x:0.3,y:5.4},0).wait(1).to({y:5.2},0).wait(1));

	// LLeg L
	this.instance_63 = new lib.leg_lower();
	this.instance_63.setTransform(-4.8,24.6,1.143,1,0,0,180,1.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(1).to({regX:1.9},0).wait(6).wait(1).to({regX:1.5,regY:6.6,skewX:75,skewY:255.1,x:-12.6,y:20.5},0).wait(1).to({regX:1.9,regY:6.3,skewX:67.5,skewY:247.6,x:-8,y:21},0).wait(1).to({skewX:60,skewY:240.1,x:-3.6,y:22},0).wait(1).to({skewX:52.5,skewY:232.6,x:-3.5,y:21.3},0).wait(1).to({skewX:45,skewY:225.1,y:20.5},0).wait(1).to({skewX:30,skewY:210.1,x:-2.7,y:20.2},0).wait(1).to({skewX:15,skewY:195.1,x:-1.8,y:20},0).wait(1).to({skewX:7.4,skewY:187.5,x:0.3,y:16.8},0).wait(1).to({skewX:0,skewY:179.8,x:2.5,y:13.6},0).wait(1).to({skewX:0,x:2.4,y:13.4},0).wait(1).to({x:2.3,y:13.2},0).wait(1).to({skewX:-15,skewY:164.8,x:2.9,y:17.3},0).wait(1).to({skewX:-30,skewY:149.8,x:3.6,y:21.4},0).wait(1).to({x:0.7,y:23.4},0).wait(1).to({x:-2,y:25.3},0).wait(1).to({skewX:-22.4,skewY:157.4,x:-3.7},0).wait(1).to({skewX:-14.9,skewY:164.9,x:-5.5,y:25.2},0).wait(1).to({skewX:-7.3,skewY:172.5,x:-7.1,y:25.4},0).wait(1).to({skewX:0,skewY:180,x:-8.8,y:25.6},0).wait(1).to({skewX:7.5,skewY:187.6,x:-10.6,y:25.5},0).wait(1).to({skewX:15,skewY:195.1,x:-12.5},0).wait(1).to({skewX:26.1,skewY:206.2,x:-13.9,y:24.1},0).wait(1).to({skewX:37.3,skewY:217.4,x:-15.4,y:22.8},0).wait(1).to({skewX:44.8,skewY:224.9,x:-16.1,y:21.2},0).wait(1).to({skewX:52.3,skewY:232.4,x:-16.9,y:19.7},0).wait(1).to({skewX:67.4,skewY:247.5,x:-15.8,y:18.9},0).wait(1).to({skewX:82.4,skewY:262.5,x:-14.8,y:18.2},0).wait(1).to({skewX:78.7,skewY:258.8,x:-13.6,y:19.1},0).wait(1).to({skewX:75,skewY:255.1,x:-12.4,y:20},0).wait(1).to({regX:1.5,regY:6.6,x:-12.6,y:20.5},0).wait(1).to({regX:1.9,regY:6.3,skewX:78.7,skewY:258.8,x:-13.6,y:19.1},0).wait(1).to({skewX:82.4,skewY:262.5,x:-14.8,y:18.2},0).wait(1).to({skewX:67.4,skewY:247.5,x:-15.8,y:18.9},0).wait(1).to({skewX:52.3,skewY:232.4,x:-16.9,y:19.7},0).wait(1).to({skewX:44.8,skewY:224.9,x:-16.1,y:21.2},0).wait(1).to({skewX:37.3,skewY:217.4,x:-15.4,y:22.8},0).wait(1).to({skewX:26.1,skewY:206.2,x:-13.9,y:24.1},0).wait(1).to({skewX:15,skewY:195.1,x:-12.5,y:25.5},0).wait(1).to({skewX:7.5,skewY:187.6,x:-10.6},0).wait(1).to({skewX:0,skewY:180,x:-8.8,y:25.6},0).wait(1).to({skewX:-7.3,skewY:172.5,x:-7.1,y:25.4},0).wait(1).to({skewX:-14.9,skewY:164.9,x:-5.5,y:25.2},0).wait(1).to({skewX:-22.4,skewY:157.4,x:-3.7,y:25.3},0).wait(1).to({skewX:-30,skewY:149.8,x:-2},0).wait(1).to({x:0.7,y:23.4},0).wait(1).to({x:3.6,y:21.4},0).wait(1).to({skewX:-15,skewY:164.8,x:2.9,y:18.5},0).wait(1).to({skewX:0,skewY:179.8,x:2.3,y:15.5},0).wait(1).to({skewX:0,x:2.2,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({skewX:7.4,skewY:187.5,x:0.3,y:18.1},0).wait(1).to({skewX:15,skewY:195.1,x:-1.5,y:20.4},0).wait(1).to({skewX:30,skewY:210.1,x:-2.5},0).wait(1).to({skewX:45,skewY:225.1,x:-3.5,y:20.5},0).wait(1).to({skewX:52.5,skewY:232.6,y:21.3},0).wait(1).to({skewX:60,skewY:240.1,x:-3.6,y:22},0).wait(1).to({skewX:67.5,skewY:247.6,x:-8,y:21},0).wait(1).to({skewX:75,skewY:255.1,x:-12.4,y:20},0).wait(1).to({regX:2.1,regY:6.6,scaleX:1.14,scaleY:1,skewX:29.8,skewY:209.9,x:-6.9,y:25.1},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:29.8,x:-7.5,y:24.7},0).wait(1).to({x:-8.5,y:24.4},0).wait(1).to({x:-8.4,y:24.3},0).wait(1).to({x:-8.2,y:24.2},0).wait(3).wait(1).to({regX:1.7,regY:5.4,scaleX:1.14,scaleY:1,skewX:14.8,skewY:194.9,x:-5.8,y:24},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:29.9,skewY:210,x:-5.6,y:24.7},0).wait(1).to({skewX:44.8,skewY:224.9,x:-4.9,y:24.6},0).wait(1).to({skewX:41.1,skewY:221.2,x:-4.4,y:24.8},0).wait(1).to({skewX:37.3,skewY:217.4,x:-3.8,y:25},0).wait(1).to({skewX:33.6,skewY:213.7,x:-3.4,y:24.7},0).wait(1).to({skewX:29.9,skewY:210,x:-3,y:24.3},0).wait(1).wait(1).to({regX:2.1,regY:6.8,scaleX:1.14,scaleY:1,skewX:29.8,skewY:209.9,x:-8.8,y:24.5},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:33.6,skewY:213.7,x:-9.3,y:23.8},0).wait(1).to({skewX:37.3,skewY:217.4,x:-10.2,y:23.6},0).wait(1).to({skewX:41.1,skewY:221.2,x:-11.3,y:23.3},0).wait(1).to({skewX:44.8,skewY:224.9,x:-12.3,y:23},0).wait(1).to({skewX:48.6,skewY:228.7,x:-13.2,y:22.7},0).wait(1).to({skewX:52.3,skewY:232.4,x:-14.4,y:21.4},0).wait(1).to({skewX:56.1,skewY:236.2,x:-15.6,y:20},0).wait(1).to({skewX:59.8,skewY:239.9,x:-16.7,y:18.7},0).wait(1).to({regY:6.7,scaleX:1.14,scaleY:1,skewX:14.8,skewY:194.9,x:-4.6,y:25.6},0).wait(1).to({regY:6.3,scaleX:1.14,scaleY:1,skewX:7.3,skewY:187.4,x:-3.2,y:24.6},0).wait(1).to({skewX:0,skewY:179.8,x:-1.9,y:23.9},0).wait(1).to({skewX:0,skewY:179.9,x:0.8,y:23.6},0).wait(1).to({skewY:180,x:3.8,y:23.2},0).wait(1).to({skewY:179.9,x:5.5,y:23},0).wait(1).to({skewX:0,skewY:179.8,x:7.3,y:22.8},0).wait(1).to({skewX:-14.9,skewY:164.9,x:8.7,y:22.3},0).wait(1).to({skewX:-29.9,skewY:149.9,x:10.1,y:21.9},0).wait(1).to({regX:2.1,regY:4,scaleX:1.14,scaleY:1,skewX:29.8,skewY:209.9,x:-2,y:12.9},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:29.8,x:-2.8,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({x:-2.7,y:15.6},0).wait(1).to({x:-2.6,y:15.8},0).wait(1).to({x:-2.5,y:16.1},0).wait(1).to({x:-2.4,y:16.3},0).wait(1).to({x:-2.3,y:16.5},0).wait(1).to({x:-2.2,y:16.7},0).wait(1).to({x:-2.1,y:16.9},0).wait(1).to({x:-2,y:17.1},0).wait(1).to({x:-1.9,y:17.3},0).wait(1).to({x:-2,y:17.1},0).wait(1).to({x:-2.1,y:17},0).wait(1).to({x:-2.2,y:16.8},0).wait(1).to({y:16.6},0).wait(1).to({x:-2.3,y:16.4},0).wait(1).to({x:-2.4,y:16.2},0).wait(1).to({x:-2.5,y:16},0).wait(1).to({x:-2.6,y:15.8},0).wait(1).to({x:-2.7,y:15.6},0).wait(1).to({x:-2.8,y:15.4},0).wait(1).to({x:-2.9,y:15.2},0).wait(1).to({y:15},0).wait(1));

	// Head
	this.head = new lib.head();
	this.head.setTransform(0,-20.8,1,1,0,0,0,0.2,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:3.3,regY:-21.3,x:3.1,y:-20.3},0).wait(6).wait(1).to({regX:0.2,regY:-21.7,x:5.8,y:-18.7},0).wait(1).to({regX:3.3,regY:-21.3,x:8.6,y:-17.5},0).wait(1).to({x:9.4,y:-17.9},0).wait(1).to({x:10.6,y:-17.2},0).wait(1).to({x:10.9,y:-17.4},0).wait(1).to({x:11.1,y:-17.1},0).wait(1).to({x:11.3,y:-16.7},0).wait(1).to({x:11.4,y:-16.3},0).wait(1).to({x:11.5,y:-15.9},0).wait(1).to({x:11.6,y:-15.4},0).wait(1).to({y:-15},0).wait(1).to({y:-14.6},0).wait(1).to({x:11.5,y:-14.2},0).wait(1).to({x:12.4,y:-14},0).wait(1).to({x:13.3,y:-13.5},0).wait(1).to({x:13.1,y:-13.6},0).wait(1).to({x:12.9,y:-13.8},0).wait(1).to({x:12.6,y:-14},0).wait(1).to({x:12.3,y:-14.2},0).wait(1).to({x:12,y:-14.5},0).wait(1).to({x:11.7,y:-14.8},0).wait(1).to({x:11.4,y:-15},0).wait(1).to({x:11.1,y:-15.2},0).wait(1).to({x:10.8,y:-15.5},0).wait(1).to({x:10.5,y:-15.7},0).wait(1).to({x:10.2,y:-16},0).wait(1).to({x:9.9,y:-16.3},0).wait(1).to({x:9.4,y:-17.3},0).wait(1).to({x:8.9,y:-18.3},0).wait(1).to({regX:0.2,regY:-21.7,x:-3.7,y:-18.7},0).wait(1).to({regX:3.3,regY:-21.3,x:-0.9,y:-18},0).wait(1).to({x:-1.1,y:-17.6},0).wait(1).to({x:-0.7,y:-18.2},0).wait(1).to({x:-2.4,y:-18.7},0).wait(1).to({x:-2.5,y:-18.4},0).wait(1).to({x:-1.4,y:-18},0).wait(1).to({x:-1.7,y:-17.5},0).wait(1).to({x:-2.1,y:-17},0).wait(1).to({x:-2.8},0).wait(1).to({x:-3.6,y:-17.1},0).wait(1).to({x:-3.9,y:-17.4},0).wait(1).to({x:-4.2,y:-17.8},0).wait(1).to({x:-3.7,y:-17.7},0).wait(1).to({x:-3.2,y:-17.8},0).wait(1).to({x:-2.3,y:-18.4},0).wait(1).to({x:-1.5,y:-19.2},0).wait(1).to({x:-0.4,y:-19.4},0).wait(1).to({x:0.5,y:-19.7},0).wait(1).to({x:0.3,y:-19.1},0).wait(1).to({x:0,y:-18.6},0).wait(1).to({x:-0.1,y:-18.3},0).wait(1).to({x:-0.4,y:-18.1},0).wait(1).to({x:-1.1,y:-17.8},0).wait(1).to({x:-1.7,y:-17.4},0).wait(1).to({x:-0.3,y:-17.9},0).wait(1).to({x:1,y:-18},0).wait(1).to({x:0.3,y:-18.1},0).wait(1).to({x:-0.2,y:-18.3},0).wait(1).to({regX:-0.3,regY:-20.6,scaleX:1,scaleY:1,rotation:14.8,x:4.6,y:-17.7},0).wait(1).to({regX:3.3,regY:-21.3,scaleX:1,scaleY:1,rotation:7.4,x:8.2,y:-17.4},0).wait(1).to({rotation:0,x:8,y:-17.5},0).wait(1).to({rotation:-7.4,x:8.6,y:-18},0).wait(1).to({rotation:-14.8,x:9.2,y:-18.4},0).wait(3).wait(1).to({regX:0.8,regY:-21.9,scaleX:1,scaleY:1,rotation:-14.9,x:5.6,y:-19},0).wait(1).to({regX:3.3,regY:-21.3,scaleX:1,scaleY:1,rotation:-7.4,x:6.3,y:-18.3},0).wait(1).to({rotation:0,x:4.6,y:-17.6},0).wait(1).to({rotation:3.7,x:3.6,y:-17.2},0).wait(1).to({rotation:7.4,x:2.5,y:-16.8},0).wait(1).to({y:-16.5},0).wait(1).to({y:-16.1},0).wait(1).wait(1).to({regX:-0.3,regY:-20.6,scaleX:1,scaleY:1,rotation:-14.8,x:5.8,y:-16.8},0).wait(1).to({regX:3.3,regY:-21.3,scaleX:1,scaleY:1,rotation:-11.9,x:9,y:-18.3},0).wait(1).to({rotation:-8.9,x:8.7,y:-18},0).wait(1).to({rotation:-5.9,x:8.5,y:-17.9},0).wait(1).to({rotation:-2.9,x:8.2,y:-17.7},0).wait(1).to({rotation:0,x:8,y:-17.5},0).wait(1).to({rotation:0,x:8.5},0).wait(1).to({x:9},0).wait(1).to({x:9.5},0).wait(1).to({regX:-1.2,regY:-21,rotation:6,x:5.8,y:-16.8},0).wait(1).to({regX:3.3,regY:-21.3,rotation:5,x:7.2,y:-17.2},0).wait(1).to({rotation:3.8,x:4,y:-17.9},0).wait(1).to({rotation:2.5,x:3.3,y:-18.5},0).wait(1).to({rotation:1.3,x:2.6,y:-19.1},0).wait(1).to({rotation:1.6,x:1.6,y:-18.9},0).wait(1).to({rotation:1.9,x:0.5,y:-18.7},0).wait(1).to({x:-0.2,y:-17.7},0).wait(1).to({x:-1,y:-16.7},0).wait(1).to({regX:-1.7,regY:-34.4,rotation:1.5,x:0.6,y:-39.3},0).wait(1).to({regX:3.3,regY:-21.3,rotation:1.1,x:5.4,y:-25.8},0).wait(1).to({rotation:0.6,x:5.5,y:-25.4},0).wait(1).to({rotation:0.1,x:5.7,y:-25.2},0).wait(1).to({rotation:-0.2,x:5.8,y:-24.9},0).wait(1).to({rotation:-0.6,x:5.9,y:-24.6},0).wait(1).to({rotation:-1.1,x:6,y:-24.3},0).wait(1).to({rotation:-1.6,x:6.2,y:-24},0).wait(1).to({rotation:-2.1,x:6.3,y:-23.7},0).wait(1).to({rotation:-2.6,x:6.4,y:-23.4},0).wait(1).to({rotation:-3,x:6.6,y:-23.1},0).wait(1).to({rotation:-3.5,x:6.7,y:-22.8},0).wait(1).to({rotation:-3.1,x:6.6,y:-23.1},0).wait(1).to({rotation:-2.6,x:6.5,y:-23.3},0).wait(1).to({rotation:-2.2,x:6.3,y:-23.7},0).wait(1).to({rotation:-1.8,x:6.2,y:-23.9},0).wait(1).to({rotation:-1.3,x:6.1,y:-24.2},0).wait(1).to({rotation:-0.9,x:6,y:-24.4},0).wait(1).to({rotation:-0.4,x:5.9,y:-24.7},0).wait(1).to({rotation:0,x:5.7,y:-25},0).wait(1).to({rotation:0.2,y:-25.3},0).wait(1).to({rotation:0.7,x:5.5,y:-25.5},0).wait(1).to({rotation:1.1,x:5.4,y:-25.8},0).wait(1).to({rotation:1.5,x:5.3,y:-26},0).wait(1));

	// Torso
	this.torso = new lib.torso();
	this.torso.setTransform(0.2,0,1,1,0,0,0,-0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.torso).wait(1).to({regX:-0.5,regY:-1.1,x:0.1,y:-0.8},0).wait(6).wait(1).to({regX:-1,regY:-0.4,scaleX:1,scaleY:1,rotation:14.8,x:0,y:0.7},0).wait(1).to({regX:-0.5,regY:-1.1,scaleX:1,scaleY:1,rotation:12.8,x:0.8,y:0.5},0).wait(1).to({rotation:10.6,x:1.2,y:0.7},0).wait(1).to({rotation:18.1,x:0.7,y:0.2},0).wait(1).to({rotation:25.5,x:0.2,y:-0.1},0).wait(1).to({rotation:28.3,x:0,y:-0.6},0).wait(1).to({rotation:31,x:-0.4,y:-1.1},0).wait(1).to({rotation:28.6,x:-0.3,y:-1.3},0).wait(1).to({rotation:26.1,x:-0.1,y:-1.6},0).wait(1).to({rotation:28.3,x:0,y:-1.5},0).wait(1).to({rotation:30.5,x:0.4,y:-1.4},0).wait(1).to({rotation:27.9,x:0.3,y:-1},0).wait(1).to({rotation:25.3,x:0.2,y:-0.5},0).wait(1).to({rotation:29.9,x:0.3,y:0.3},0).wait(1).to({rotation:34.5,x:0.4,y:1.3},0).wait(1).to({x:0.3,y:1.2},0).wait(1).to({x:0.2,y:1.1},0).wait(1).to({y:1.7},0).wait(1).to({x:0.3,y:2.3},0).wait(1).to({rotation:32.2,x:0.4,y:1.8},0).wait(1).to({rotation:29.9,y:1.3},0).wait(1).to({rotation:27.7,x:0.5,y:1.4},0).wait(1).to({rotation:25.6,x:0.6,y:1.6},0).wait(1).to({x:0.1,y:0.8},0).wait(1).to({x:-0.1,y:0},0).wait(1).to({rotation:22.5,x:0.1,y:0.3},0).wait(1).to({rotation:19.3,x:0.5,y:0.7},0).wait(1).to({rotation:17.2,y:0.4},0).wait(1).to({rotation:15,y:0.2},0).wait(1).to({regX:-1.9,regY:-0.2,rotation:-3.6,x:-5.2,y:0.5},0).wait(1).to({regX:-0.5,regY:-1.1,rotation:-3.4,x:-4,y:0},0).wait(1).to({rotation:-3.2,y:0.1},0).wait(1).to({rotation:-3.5,x:-4.7,y:-0.6},0).wait(1).to({rotation:-3.9,x:-5.4,y:-1.5},0).wait(1).to({rotation:-2.9,x:-5,y:-0.9},0).wait(1).to({rotation:-2,x:-4.6,y:-0.3},0).wait(1).to({rotation:-1.5,x:-5,y:0},0).wait(1).to({rotation:-1,x:-5.5,y:0},0).wait(1).to({rotation:-2.5,x:-6.2},0).wait(1).to({rotation:-4,x:-6.9},0).wait(1).to({rotation:-4.5,x:-7.1,y:-0.5},0).wait(1).to({rotation:-4.9,x:-7.7,y:-0.8},0).wait(1).to({rotation:-4,x:-7.3,y:-0.9},0).wait(1).to({rotation:-3,x:-6.9,y:-0.7},0).wait(1).to({rotation:-2.3,x:-6.5,y:-1.6},0).wait(1).to({rotation:-1.7,x:-5.4,y:-2.2},0).wait(1).to({rotation:1.2,x:-5.2,y:-2.7},0).wait(1).to({rotation:4.3,x:-5,y:-3.2},0).wait(1).to({x:-4.8,y:-2.5},0).wait(1).to({rotation:4.4,x:-4.7,y:-1.8},0).wait(1).to({rotation:4,x:-5.5,y:-1.6},0).wait(1).to({rotation:3.7,x:-6.1,y:-1.3},0).wait(1).to({rotation:-0.2,x:-5.8,y:-0.9},0).wait(1).to({rotation:-4.3,x:-5.4,y:-0.7},0).wait(1).to({x:-3.6,y:-0.1},0).wait(1).to({x:-1.7,y:-0.3},0).wait(1).to({rotation:-4.4,x:-2.6,y:-0.6},0).wait(1).to({rotation:-4.5,x:-3.9,y:-1},0).wait(1).to({regX:-0.2,regY:-0.4,scaleX:1,scaleY:1,rotation:14.8,x:-0.7,y:0.2},0).wait(1).to({regX:-0.5,regY:-1.1,scaleX:1,scaleY:1,rotation:16.4,x:-0.8,y:0},0).wait(1).to({rotation:17.8,y:0.5},0).wait(1).to({rotation:19.2,x:-0.3,y:0.7},0).wait(1).to({rotation:20.6,x:0,y:1},0).wait(3).wait(1).to({regX:-0.1,regY:-0.4,scaleX:1,scaleY:1,rotation:14.8,x:0.7,y:0.2},0).wait(1).to({regX:-0.5,regY:-1.1,scaleX:1,scaleY:1,rotation:7.4,x:0.3,y:0.4},0).wait(1).to({rotation:0,x:0.1,y:1.5},0).wait(1).to({rotation:-3.1,x:-0.4},0).wait(1).to({rotation:-6.3,x:-1},0).wait(1).to({x:-0.8,y:1.9},0).wait(1).to({x:-0.5,y:2.3},0).wait(1).wait(1).to({regY:-0.2,scaleX:1,scaleY:1,rotation:20.5,x:0,y:1.8},0).wait(1).to({regY:-1.1,scaleX:1,scaleY:1,rotation:20.6,x:0.1,y:0.9},0).wait(1).to({x:0,y:0.8},0).wait(1).to({x:-0.1,y:0.7},0).wait(1).to({x:-0.3,y:0.6},0).wait(1).to({x:-0.5,y:0.5},0).wait(1).to({x:-0.2,y:0.6},0).wait(1).to({x:0,y:0.8},0).wait(1).to({x:0.3,y:1},0).wait(1).to({regY:-0.2,scaleX:1,scaleY:1,rotation:20.5,x:0,y:1.8},0).wait(1).to({regY:-1.1,scaleX:1,scaleY:1,rotation:13,x:-1.4,y:0},0).wait(1).to({rotation:5.5,x:-3.2,y:-1},0).wait(1).to({rotation:0.7,x:-2.1},0).wait(1).to({rotation:-4,x:-1},0).wait(1).to({rotation:-6.3,x:-0.9,y:-0.7},0).wait(1).to({rotation:-8.6,x:-0.7,y:-0.3},0).wait(1).to({x:-1.4,y:0.4},0).wait(1).to({x:-2,y:1.2},0).wait(1).to({regX:-1.8,regY:1.7,rotation:1.3,x:-0.3,y:-9.1},0).wait(1).to({regX:-0.5,regY:-1.1,rotation:1.4,x:0.9,y:-11.6},0).wait(1).to({x:1,y:-11.4},0).wait(1).to({y:-11.1},0).wait(1).to({y:-10.9},0).wait(1).to({x:1.1,y:-10.6},0).wait(1).to({y:-10.3},0).wait(1).to({x:1.2,y:-10.1},0).wait(1).to({y:-9.8},0).wait(1).to({y:-9.6},0).wait(1).to({x:1.3,y:-9.3},0).wait(1).to({y:-9},0).wait(1).to({y:-9.3},0).wait(1).to({x:1.2,y:-9.5},0).wait(1).to({y:-9.8},0).wait(1).to({y:-10},0).wait(1).to({x:1.1,y:-10.2},0).wait(1).to({y:-10.5},0).wait(1).to({y:-10.7},0).wait(1).to({x:1,y:-10.9},0).wait(1).to({y:-11.2},0).wait(1).to({y:-11.4},0).wait(1).to({x:0.9,y:-11.7},0).wait(1).to({y:-11.9},0).wait(1));

	// RLeg U
	this.instance_64 = new lib.leg_upper();
	this.instance_64.setTransform(2.2,15.6,1,1,0,0,0,2.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(1).to({regX:2.5,x:2.3},0).wait(6).wait(1).to({regX:2.4,x:-0.6,y:16.1},0).wait(1).to({regX:2.5,rotation:7.5,x:-0.4,y:16.4},0).wait(1).to({rotation:15,x:-0.3,y:16.7},0).wait(1).to({rotation:22.4,x:-2.8,y:15.6},0).wait(1).to({rotation:29.8,x:-5.4,y:14.5},0).wait(1).to({rotation:44.8,x:-7.8,y:14.1},0).wait(1).to({rotation:59.8,x:-10.2,y:13.6},0).wait(1).to({rotation:67.4,x:-10,y:12.9},0).wait(1).to({rotation:74.9,x:-9.7,y:12},0).wait(1).to({x:-9.8,y:11.9},0).wait(1).to({x:-10,y:11.7},0).wait(1).to({x:-9.4,y:12.2},0).wait(1).to({x:-8.8,y:12.6},0).wait(1).to({rotation:52.4,x:-8.1,y:14.2},0).wait(1).to({rotation:30,x:-7.3,y:15.7},0).wait(1).to({rotation:7.4,x:-5.5,y:15.3},0).wait(1).to({rotation:-15,x:-3.8,y:15},0).wait(1).to({rotation:-44.9,x:-3,y:13.1},0).wait(1).to({rotation:-74.8,x:-2.3,y:11.3},0).wait(1).to({x:-1.4,y:10.8},0).wait(1).to({x:-0.6,y:10.4},0).wait(1).to({x:0,y:10.5},0).wait(1).to({x:0.5,y:10.7},0).wait(1).to({rotation:-59.9,x:0.1,y:11.2},0).wait(1).to({rotation:-45,x:-0.2,y:11.6},0).wait(1).to({rotation:-30,x:-0.5,y:13.6},0).wait(1).to({rotation:-14.9,x:-0.8,y:15.6},0).wait(1).to({rotation:-7.4,x:-0.6,y:15.8},0).wait(1).to({rotation:0,x:-0.5,y:16.1},0).wait(1).to({regX:2.4,x:-0.6},0).wait(1).to({regX:2.5,rotation:-7.4,y:15.8},0).wait(1).to({rotation:-14.9,x:-0.8,y:15.6},0).wait(1).to({rotation:-30,x:-0.5,y:13.6},0).wait(1).to({rotation:-45,x:-0.2,y:11.6},0).wait(1).to({rotation:-52.5,x:0,y:11.7},0).wait(1).to({rotation:-60,x:0.1,y:11.9},0).wait(1).to({rotation:-67.4,x:-0.2,y:11.4},0).wait(1).to({rotation:-74.8,x:-0.8,y:11},0).wait(1).to({x:-1.1},0).wait(1).to({x:-1.5},0).wait(1).to({rotation:-44.9,x:-2.3,y:13},0).wait(1).to({rotation:-15,x:-3.1,y:15.1},0).wait(1).to({rotation:7.4,x:-5.1,y:15.3},0).wait(1).to({rotation:30,x:-7.3,y:15.7},0).wait(1).to({rotation:52.4,x:-8.1,y:14.2},0).wait(1).to({rotation:74.9,x:-8.8,y:12.6},0).wait(1).to({x:-9.4,y:12.2},0).wait(1).to({x:-10,y:11.7},0).wait(1).to({x:-9.8,y:11.9},0).wait(1).to({x:-9.7,y:12},0).wait(1).to({rotation:67.4,x:-10,y:12.9},0).wait(1).to({rotation:59.8,x:-10.2,y:13.6},0).wait(1).to({rotation:44.8,x:-7.8,y:14.1},0).wait(1).to({rotation:29.8,x:-5.4,y:14.5},0).wait(1).to({rotation:22.4,x:-2.8,y:15.6},0).wait(1).to({rotation:15,x:-0.3,y:16.7},0).wait(1).to({rotation:7.5,x:-0.4,y:16.4},0).wait(1).to({rotation:0,x:-0.5,y:16.1},0).wait(1).to({regX:3.6,regY:6.5,scaleX:1,scaleY:1,rotation:-74.8,x:1.8,y:9.8},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1,scaleY:1,rotation:-82.2,x:0.3,y:10},0).wait(1).to({rotation:-89.8,x:0,y:9.6},0).wait(1).to({x:0.1,y:9.5},0).wait(1).to({x:0.3,y:9.3},0).wait(3).wait(1).to({regX:2.3,regY:4.7,scaleX:1,scaleY:1,rotation:-74.8,x:2.9,y:9.5},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1,scaleY:1,rotation:-59.8,x:4.1,y:11.5},0).wait(1).to({rotation:-44.8,x:4.6,y:13.6},0).wait(1).to({rotation:-37.2,x:4.7,y:14.3},0).wait(1).to({rotation:-29.7,y:15},0).wait(1).to({y:14.7},0).wait(1).to({y:14.5},0).wait(1).wait(1).to({regX:3.3,regY:5.9,rotation:-89.8,x:1.3,y:8.2},0).wait(1).to({regX:2.5,regY:5.4,rotation:-83.8,x:0.9,y:9.4},0).wait(1).to({rotation:-77.8,x:1,y:10},0).wait(1).to({rotation:-71.8,x:1.1,y:10.4},0).wait(1).to({rotation:-65.8,x:1.2,y:11},0).wait(1).to({rotation:-59.8,x:1.3,y:11.5},0).wait(1).to({rotation:-54.8,x:1,y:12},0).wait(1).to({rotation:-49.8,x:0.7,y:12.6},0).wait(1).to({rotation:-44.8,x:0.4,y:13.2},0).wait(1).to({regX:3.3,regY:5.9,rotation:-89.8,x:1.3,y:8.2},0).wait(1).to({regX:2.5,regY:5.4,rotation:-74.8,x:0.7,y:9.3},0).wait(1).to({rotation:-59.8,y:9.6},0).wait(1).to({rotation:-59.7,x:2.6,y:10.1},0).wait(1).to({x:4.6,y:10.6},0).wait(1).to({rotation:-67.2,x:5.5,y:10.4},0).wait(1).to({rotation:-74.7,x:6.2,y:10.3},0).wait(1).to({x:5.6,y:11.1},0).wait(1).to({x:5,y:12},0).wait(1).to({regX:3,regY:5.2,scaleX:1,scaleY:1,rotation:-14.6,x:3.6,y:2.9},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1,scaleY:1,rotation:-14.6,x:3.2,y:3.4},0).wait(1).to({y:3.7},0).wait(1).to({y:3.9},0).wait(1).to({y:4.2},0).wait(1).to({y:4.4},0).wait(1).to({y:4.6},0).wait(1).to({y:4.9},0).wait(1).to({y:5.1},0).wait(1).to({y:5.4},0).wait(1).to({y:5.6},0).wait(1).to({y:5.9},0).wait(1).to({y:5.6},0).wait(1).to({y:5.4},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.7},0).wait(1).to({y:4.6},0).wait(1).to({y:4.3},0).wait(1).to({y:4.1},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.4},0).wait(1).to({y:3.2},0).wait(1));

	// RLeg L
	this.instance_65 = new lib.leg_lower();
	this.instance_65.setTransform(4.6,24.8,1,1,0,0,0,1.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(1).to({regX:1.9,x:4.7},0).wait(6).wait(1).to({regX:1.8,x:2.1,y:25.3},0).wait(1).to({regX:1.9,rotation:7.5,x:1.1,y:25.6},0).wait(1).to({rotation:15,x:0,y:25.9},0).wait(1).to({rotation:22.4,x:-3.9,y:24.9},0).wait(1).to({rotation:29.8,x:-7.8,y:24.1},0).wait(1).to({rotation:44.9,x:-12.2,y:22.2},0).wait(1).to({rotation:59.9,x:-16.5,y:20.2},0).wait(1).to({rotation:67.4,x:-17.1,y:18.5},0).wait(1).to({rotation:74.9,x:-17.7,y:16.9},0).wait(1).to({rotation:82.5,x:-18.1,y:16.2},0).wait(1).to({rotation:90,x:-18.6,y:15.4},0).wait(1).to({rotation:97.5,x:-18.2,y:15.3},0).wait(1).to({rotation:105,x:-17.7,y:15},0).wait(1).to({x:-15.6,y:17.4},0).wait(1).to({x:-13.5,y:19.7},0).wait(1).to({rotation:89.9,x:-9.9,y:20.4},0).wait(1).to({rotation:74.8,x:-6.3,y:21.2},0).wait(1).to({rotation:59.9,x:-3.5,y:18.5},0).wait(1).to({rotation:44.9,x:-0.7,y:15.9},0).wait(1).to({rotation:37.4,x:0.5,y:15.7},0).wait(1).to({rotation:29.9,x:2,y:15.5},0).wait(1).to({rotation:14.9,x:4.1,y:15.7},0).wait(1).to({rotation:0,x:6.1,y:15.8},0).wait(1).to({rotation:0,x:5.6,y:17.4},0).wait(1).to({x:5,y:19.1},0).wait(1).to({x:3.8,y:21.4},0).wait(1).to({x:2.6,y:23.7},0).wait(1).to({rotation:0,x:2.4,y:24.5},0).wait(1).to({x:2.2,y:25.3},0).wait(1).to({regX:1.8,x:2.1},0).wait(1).to({regX:1.9,x:2.4,y:24.5},0).wait(1).to({rotation:0,x:2.6,y:23.7},0).wait(1).to({x:3.8,y:21.4},0).wait(1).to({x:5,y:19.1},0).wait(1).to({x:5.4,y:18.5},0).wait(1).to({x:5.8,y:17.9},0).wait(1).to({rotation:14.9,x:3.8,y:17.1},0).wait(1).to({rotation:29.9,x:1.7,y:16.2},0).wait(1).to({rotation:37.4,x:0.9,y:16.1},0).wait(1).to({rotation:44.9,x:0.2,y:16},0).wait(1).to({rotation:59.9,x:-2.6,y:18.8},0).wait(1).to({rotation:74.8,x:-5.6,y:21.6},0).wait(1).to({rotation:89.9,x:-9.6,y:20.6},0).wait(1).to({rotation:105,x:-13.5,y:19.7},0).wait(1).to({x:-15.6,y:17.4},0).wait(1).to({x:-17.7,y:15},0).wait(1).to({rotation:97.5,x:-18.2,y:15.3},0).wait(1).to({rotation:90,x:-18.6,y:15.4},0).wait(1).to({rotation:82.5,x:-18.1,y:16.2},0).wait(1).to({rotation:74.9,x:-17.7,y:16.9},0).wait(1).to({rotation:67.4,x:-17.1,y:18.5},0).wait(1).to({rotation:59.9,x:-16.5,y:20.2},0).wait(1).to({rotation:44.9,x:-12.2,y:22.2},0).wait(1).to({rotation:29.8,x:-7.8,y:24.1},0).wait(1).to({rotation:22.4,x:-3.9,y:24.9},0).wait(1).to({rotation:15,x:0,y:25.9},0).wait(1).to({rotation:7.5,x:1.1,y:25.6},0).wait(1).to({rotation:0,x:2.2,y:25.3},0).wait(1).to({regX:0.9,regY:6.2,scaleX:1,scaleY:1,rotation:29.9,x:4.3,y:14.8},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:30,x:4.5,y:14.6},0).wait(1).to({x:3.9,y:13.8},0).wait(1).to({x:4,y:13.7},0).wait(1).to({x:4.1,y:13.6},0).wait(3).wait(1).to({regX:1.8,rotation:0,x:9.1,y:15},0).wait(1).to({regX:1.9,rotation:-7.3,x:10.3,y:17.6},0).wait(1).to({rotation:-14.8,x:11.4,y:20.2},0).wait(1).to({rotation:-11,x:10.6,y:21.6},0).wait(1).to({rotation:-7.2,x:9.9,y:23},0).wait(1).to({rotation:-3.4,y:23.2},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.2},0).wait(1).to({regX:0.9,regY:6.2,scaleX:1,scaleY:1,rotation:29.9,x:3.3,y:13},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:34.5,x:3.7,y:14.3},0).wait(1).to({rotation:39,x:3.3,y:15},0).wait(1).to({rotation:43.4,x:2.9,y:15.6},0).wait(1).to({rotation:47.9,x:2.4,y:16.3},0).wait(1).to({rotation:52.4,x:2,y:17},0).wait(1).to({rotation:54.9,x:1.4,y:17.8},0).wait(1).to({rotation:57.4,x:0.8,y:18.6},0).wait(1).to({rotation:59.9,x:0.2,y:19.4},0).wait(1).to({regX:0.9,regY:6.2,scaleX:1,scaleY:1,rotation:29.9,x:3.3,y:13},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:18.7,x:4.6,y:14.7},0).wait(1).to({rotation:7.5,x:5.1,y:15.8},0).wait(1).to({rotation:-3.6,x:8.3,y:16},0).wait(1).to({rotation:-14.9,x:11.5,y:16.3},0).wait(1).to({rotation:-22.4,x:12.8,y:15.2},0).wait(1).to({rotation:-29.9,x:14.2,y:14.1},0).wait(1).to({rotation:-37.4,x:13.9,y:14.3},0).wait(1).to({rotation:-44.9,x:13.5,y:14.4},0).wait(1).to({regX:2.1,regY:7.9,scaleX:1,scaleY:1,rotation:15.1,x:6.3,y:13.8},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:15.2,x:6.4,y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({x:6.3,y:13.3},0).wait(1).to({y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({x:6.2,y:14},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({y:14.4},0).wait(1).to({y:14.2},0).wait(1).to({y:14},0).wait(1).to({x:6.3,y:13.8},0).wait(1).to({y:13.6},0).wait(1).to({y:13.4},0).wait(1).to({y:13.2},0).wait(1).to({x:6.4,y:13},0).wait(1).to({y:12.8},0).wait(1).to({y:12.6},0).wait(1).to({y:12.4},0).wait(1).to({x:6.5,y:12.2},0).wait(1));

	// RArm Dynamic
	this.rarm_d = new lib.arm_dyn();
	this.rarm_d.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.rarm_d).wait(1).to({regX:12.3,regY:24.3,x:12.3,y:15.7},0).wait(6).wait(1).to({regX:2.6,regY:8.2,x:5,y:0},0).wait(1).to({regX:12.3,regY:24.3,x:14.9,y:16.4},0).wait(1).to({x:15.2,y:16.7},0).wait(1).to({y:17},0).wait(1).to({y:17.3},0).wait(1).to({x:14.8,y:16.9},0).wait(1).to({x:14.4,y:16.5},0).wait(1).to({x:14.1},0).wait(1).to({x:13.8},0).wait(1).to({x:14.4,y:17.2},0).wait(1).to({x:15.1,y:17.9},0).wait(1).to({x:14.6,y:18.2},0).wait(1).to({x:14.2,y:18.5},0).wait(1).to({x:14.6,y:19},0).wait(1).to({x:15.1,y:19.5},0).wait(1).to({x:15},0).wait(1).to({x:14.9,y:19.4},0).wait(1).to({x:15.2,y:19.5},0).wait(1).to({x:15.5,y:19.7},0).wait(1).to({x:15.3},0).wait(1).to({x:15},0).wait(1).to({x:15.1,y:20},0).wait(1).to({x:15.2,y:20.2},0).wait(1).to({x:14.4},0).wait(1).to({x:13.7},0).wait(1).to({x:14.1,y:19.7},0).wait(1).to({x:14.5,y:19.2},0).wait(1).to({x:14.7,y:17.2},0).wait(1).to({x:15,y:15.2},0).wait(1).to({regX:2.6,regY:8.2,x:-1.5,y:0.9},0).wait(1).to({regX:12.3,regY:24.3,x:7.7,y:16.9},0).wait(1).to({x:7.3,y:16.7},0).wait(1).to({x:6.7,y:16.9},0).wait(1).to({x:6,y:17.1},0).wait(1).to({x:6.3,y:17.3},0).wait(1).to({x:6.6,y:17.5},0).wait(1).to({x:6.1,y:17.9},0).wait(1).to({x:5.6,y:18.2},0).wait(1).to({x:4.7,y:18.6},0).wait(1).to({x:3.8,y:18.9},0).wait(1).to({x:3.9},0).wait(1).to({x:4},0).wait(1).to({x:4.3,y:19.2},0).wait(1).to({x:4.6,y:19.4},0).wait(1).to({x:5.4,y:18.1},0).wait(1).to({x:6.2,y:16.8},0).wait(1).to({x:6.8,y:16.5},0).wait(1).to({x:7.3,y:16.1},0).wait(1).to({x:7,y:16.2},0).wait(1).to({x:6.8,y:16.3},0).wait(1).to({x:6.6,y:16.7},0).wait(1).to({x:6.3,y:17},0).wait(1).to({x:6.4,y:17.9},0).wait(1).to({x:6.5,y:18.8},0).wait(1).to({x:7.9,y:19},0).wait(1).to({x:9.3,y:19.2},0).wait(1).to({x:8.6,y:18.6},0).wait(1).to({x:7.8,y:17.9},0).wait(1).to({regX:2.6,regY:8.2,x:2.9,y:1.5},0).wait(1).to({regX:12.3,regY:24.3,x:12.9,y:18.3},0).wait(1).to({x:13.1,y:18.9},0).wait(1).to({x:13.5,y:18.5},0).wait(1).to({x:13.9,y:18.1},0).wait(3).wait(1).to({regX:2.6,regY:8.2,x:4.8,y:0.5},0).wait(1).to({regX:12.3,regY:24.3,x:13.6,y:16.6},0).wait(1).to({x:12.7},0).wait(1).to({x:11.7,y:17},0).wait(1).to({x:10.7,y:17.4},0).wait(1).to({x:11,y:17.8},0).wait(1).to({x:11.3,y:18.2},0).wait(1).wait(1).to({regX:2.6,regY:8.2,x:5.8,y:0.1},0).wait(1).to({regX:12.3,regY:24.3,x:15.2,y:15.9},0).wait(1).to({x:15,y:15.5},0).wait(1).to({x:14.7,y:15.2},0).wait(1).to({x:14.5,y:14.8},0).wait(1).to({x:14.2,y:14.5},0).wait(1).to({x:14.5,y:14.8},0).wait(1).to({x:14.8,y:15.1},0).wait(1).to({x:15.1,y:15.3},0).wait(1).to({regX:2.6,regY:8.2,x:5.1,y:-0.1},0).wait(1).to({regX:12.3,regY:24.3,x:11.9,y:15.7},0).wait(1).to({x:8.9},0).wait(1).to({x:9.6,y:15.4},0).wait(1).to({x:10.3,y:15.1},0).wait(1).to({x:10,y:15.8},0).wait(1).to({x:9.8,y:16.4},0).wait(1).to({x:9.3,y:17.6},0).wait(1).to({x:8.8,y:18.7},0).wait(1).to({regX:2.6,regY:8.2,x:3.4,y:-8.5},0).wait(1).to({regX:12.3,regY:24.3,x:13.1,y:7.6},0).wait(1).to({y:7.8},0).wait(1).to({y:8},0).wait(1).to({y:8.2},0).wait(1).to({y:8.4},0).wait(1).to({y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({x:13.2,y:9.6},0).wait(1).to({x:13.1,y:9.5},0).wait(1).to({y:9.3},0).wait(1).to({y:9.1},0).wait(1).to({y:8.9},0).wait(1).to({y:8.7},0).wait(1).to({y:8.5},0).wait(1).to({y:8.4},0).wait(1).to({y:8.2},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1));

	// RArm U
	this.rarm_u = new lib.arm_upper();
	this.rarm_u.setTransform(2.3,-4.7,1,1,0,0,0,1.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.rarm_u).wait(1).to({regX:1.8,regY:3.3,x:2.2,y:-5.1},0).wait(6).wait(1).to({regX:1.9,regY:3.8,x:3.8,y:-3.4},0).wait(1).to({regX:1.8,regY:3.3,rotation:7.5,x:3.6,y:-3.7},0).wait(1).to({rotation:15,x:3.5,y:-3.4},0).wait(1).to({rotation:22.4,x:3.2,y:-3.5},0).wait(1).to({rotation:29.8,x:2.9,y:-3.6},0).wait(1).to({rotation:37.3,x:2.4,y:-3.8},0).wait(1).to({rotation:44.8,x:1.8,y:-4},0).wait(1).to({rotation:59.8,x:0.3,y:-4.9},0).wait(1).to({rotation:74.8,x:-1.1,y:-5.7},0).wait(1).to({rotation:89.9,x:-0.8,y:-6.3},0).wait(1).to({rotation:104.9,x:-0.6,y:-6.8},0).wait(1).to({rotation:112.4,x:-0.8,y:-7.1},0).wait(1).to({rotation:119.8,x:-1,y:-7.5},0).wait(1).to({x:-0.2,y:-6.1},0).wait(1).to({x:0.4,y:-4.7},0).wait(1).to({rotation:104.8,y:-3.9},0).wait(1).to({rotation:89.8,x:0.3,y:-3.2},0).wait(1).to({rotation:82.4,x:0.7,y:-2.6},0).wait(1).to({rotation:75,x:0.9,y:-2.2},0).wait(1).to({rotation:52.5,x:1.5,y:-1},0).wait(1).to({rotation:30,x:2,y:0},0).wait(1).to({rotation:22.4,x:2.3},0).wait(1).to({rotation:14.9,x:2.5},0).wait(1).to({x:2.2,y:-0.1},0).wait(1).to({x:1.9,y:-0.4},0).wait(1).to({x:2.5,y:-0.9},0).wait(1).to({x:3,y:-1.4},0).wait(1).to({rotation:7.4,x:3.3,y:-2.7},0).wait(1).to({rotation:0,x:3.7,y:-3.9},0).wait(1).to({regX:1.3,regY:3,x:-2.7,y:-4.2},0).wait(1).to({regX:1.8,regY:3.3,x:-2.3,y:-3.6},0).wait(1).to({rotation:0,x:-2.5,y:-3.4},0).wait(1).to({x:-3.2,y:-3.7},0).wait(1).to({x:-4,y:-3.9},0).wait(1).to({rotation:7.3,y:-3.3},0).wait(1).to({rotation:14.9,x:-4.2,y:-2.8},0).wait(1).to({rotation:22.4,x:-5.6,y:-2.2},0).wait(1).to({rotation:30,x:-6.8,y:-1},0).wait(1).to({rotation:37.5,x:-8.4,y:-0.9},0).wait(1).to({rotation:45,x:-10,y:-0.8},0).wait(1).to({rotation:67.4,y:-1.6},0).wait(1).to({rotation:89.8,y:-2.5},0).wait(1).to({rotation:74.8,x:-9.7,y:-1.9},0).wait(1).to({rotation:59.8,x:-9.4,y:-1.4},0).wait(1).to({rotation:52.3,x:-8.3,y:-2.7},0).wait(1).to({rotation:44.8,x:-7.2,y:-3.9},0).wait(1).to({rotation:52.3,y:-4.3},0).wait(1).to({rotation:59.8,y:-4.7},0).wait(1).to({rotation:52.4,x:-6.9,y:-4},0).wait(1).to({rotation:44.9,x:-6.7,y:-3.3},0).wait(1).to({rotation:29.9,x:-5.3},0).wait(1).to({rotation:14.9,x:-3.9,y:-2.9},0).wait(1).to({rotation:7.3,x:-3.6,y:-2},0).wait(1).to({rotation:0,x:-3.4,y:-1},0).wait(1).to({rotation:7.4,x:-1.9,y:-1.1},0).wait(1).to({rotation:15,x:-0.2,y:-1.2},0).wait(1).to({rotation:3.8,x:-0.5,y:-1.9},0).wait(1).to({rotation:-7.3,x:-0.8,y:-2.7},0).wait(1).to({regX:2.2,regY:3.6,scaleX:1,scaleY:1,rotation:104.8,x:-0.7,y:-8.1},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:105,x:-0.1,y:-8.3},0).wait(1).to({x:0,y:-8.1},0).wait(1).to({x:0.2,y:-7.6},0).wait(1).to({x:0.5,y:-7.1},0).wait(3).wait(1).to({regX:1.9,regY:3.8,rotation:270.1,x:6,y:-7.2},0).wait(1).to({regX:1.8,regY:3.3,rotation:277.6,x:4.5,y:-7},0).wait(1).to({rotation:285.1,x:3.6,y:-6.9},0).wait(1).to({x:3.1,y:-6.7},0).wait(1).to({x:2.6,y:-6.4},0).wait(1).to({x:2.3,y:-6.3},0).wait(1).to({x:2.1,y:-6.2},0).wait(1).wait(1).to({regX:2.5,regY:3.7,scaleX:1,scaleY:1,rotation:464.8,x:0.2,y:-6.5},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:465,x:0.7,y:-7},0).wait(1).to({x:0.5},0).wait(1).to({x:0.4,y:-6.9},0).wait(1).to({x:0.3,y:-7.1},0).wait(1).to({x:0.2,y:-7.2},0).wait(1).to({x:0.6},0).wait(1).to({x:1},0).wait(1).to({x:1.4},0).wait(1).to({regX:2.5,regY:3.7,rotation:450,x:0.8,y:-5.7},0).wait(1).to({regX:1.8,regY:3.3,rotation:427.4,x:-1.3,y:-5.5},0).wait(1).to({rotation:404.9,x:-4,y:-4.3},0).wait(1).to({rotation:382.4,x:-1.7,y:-4.5},0).wait(1).to({rotation:359.9,x:0.4,y:-4.6},0).wait(1).to({rotation:352.5,x:0.3,y:-4.8},0).wait(1).to({rotation:345.1,x:0.1},0).wait(1).to({rotation:337.5,x:-0.2,y:-3.5},0).wait(1).to({rotation:330,x:-0.7,y:-2.3},0).wait(1).to({regX:2.1,regY:3.6,rotation:360,x:2.7,y:-14.5},0).wait(1).to({regX:1.8,regY:3.3,x:2.5,y:-14.4},0).wait(1).to({y:-14.1},0).wait(1).to({x:2.6,y:-13.8},0).wait(1).to({y:-13.5},0).wait(1).to({x:2.7,y:-13.1},0).wait(1).to({y:-12.8},0).wait(1).to({x:2.8,y:-12.5},0).wait(1).to({y:-12.2},0).wait(1).to({x:2.9,y:-11.8},0).wait(1).to({y:-11.5},0).wait(1).to({x:3,y:-11.2},0).wait(1).to({y:-11.5},0).wait(1).to({x:2.9,y:-11.8},0).wait(1).to({y:-12.1},0).wait(1).to({x:2.8,y:-12.4},0).wait(1).to({y:-12.7},0).wait(1).to({x:2.7,y:-13},0).wait(1).to({y:-13.3},0).wait(1).to({x:2.6,y:-13.6},0).wait(1).to({y:-13.9},0).wait(1).to({x:2.5,y:-14.2},0).wait(1).to({y:-14.5},0).wait(1).to({x:2.4,y:-14.8},0).wait(1));

	// RArm L
	this.rarm_l = new lib.arm_lower();
	this.rarm_l.setTransform(5.2,3.3,1,1,-7.2,0,0,1.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.rarm_l).wait(1).to({regX:5.1,regY:21.3,x:10.2,y:17.9},0).wait(6).wait(1).to({regX:0.7,regY:3.6,rotation:-104.8,x:8.7,y:-1.2},0).wait(1).to({regX:5.1,regY:21.3,x:24,y:-9.7},0).wait(1).to({x:23.4,y:-9.3},0).wait(1).to({rotation:-89.8,x:24.3,y:-4},0).wait(1).to({rotation:-74.8,x:24,y:1.4},0).wait(1).to({rotation:-44.8,x:19.1,y:11},0).wait(1).to({rotation:-14.8,x:10.2,y:18.1},0).wait(1).to({rotation:0,x:2.6,y:18.6},0).wait(1).to({rotation:15.1,x:-5.2,y:17.9},0).wait(1).to({rotation:37.5,x:-13.3,y:14.2},0).wait(1).to({rotation:60,x:-20.3,y:8},0).wait(1).to({rotation:67.6,x:-22.4,y:4.6},0).wait(1).to({rotation:75.1,x:-24.2,y:1.1},0).wait(1).to({rotation:67.7,x:-21.8,y:5.1},0).wait(1).to({rotation:60.2,x:-19.1,y:9},0).wait(1).to({rotation:52.7,x:-17.1,y:12.6},0).wait(1).to({rotation:45.2,x:-14.9,y:16.1},0).wait(1).to({rotation:22.7,x:-6.6,y:20},0).wait(1).to({rotation:0.1,x:1.9,y:21.2},0).wait(1).to({rotation:-29.7,x:13.6,y:17.8},0).wait(1).to({rotation:-59.8,x:22.1,y:10.8},0).wait(1).to({rotation:-74.8,x:23.7,y:5.4},0).wait(1).to({rotation:-89.7,x:24.2,y:0},0).wait(1).to({rotation:-97.3,x:23.3,y:-2.9},0).wait(1).to({rotation:-104.8,x:22.1,y:-5.9},0).wait(1).to({x:22.5,y:-6.3},0).wait(1).to({x:23,y:-6.7},0).wait(1).to({x:23.8,y:-8.4},0).wait(1).to({x:24.7,y:-10},0).wait(1).to({regX:1,regY:2.6,x:1,y:-0.6},0).wait(1).to({regX:5.1,regY:21.3,x:18.2,y:-9.4},0).wait(1).to({x:18.4,y:-9.2},0).wait(1).to({x:17.5,y:-9.3},0).wait(1).to({x:16.7},0).wait(1).to({rotation:-97.3,x:16.8,y:-5.9},0).wait(1).to({rotation:-89.7,x:16.6,y:-2.6},0).wait(1).to({rotation:-74.8,x:14.9,y:3.6},0).wait(1).to({rotation:-59.8,x:12,y:9.8},0).wait(1).to({rotation:-29.7,x:3.8,y:18.2},0).wait(1).to({rotation:0.1,x:-7.6,y:22.8},0).wait(1).to({rotation:22.7,x:-16.9,y:20.9},0).wait(1).to({rotation:45.2,x:-25.7,y:16.2},0).wait(1).to({rotation:37.7,x:-22.4,y:18.7},0).wait(1).to({rotation:30.2,x:-19.1,y:20.9},0).wait(1).to({x:-17.6,y:20},0).wait(1).to({x:-16.1,y:19},0).wait(1).to({x:-16.5,y:18.7},0).wait(1).to({rotation:30.1,x:-16.9,y:18.3},0).wait(1).to({rotation:22.6,x:-13.4,y:19.5},0).wait(1).to({rotation:15.1,x:-9.8,y:20.3},0).wait(1).to({rotation:0,x:-2,y:20.1},0).wait(1).to({rotation:-14.8,x:5.3,y:18.7},0).wait(1).to({rotation:-44.8,x:14.3,y:12.7},0).wait(1).to({rotation:-74.8,x:18.9,y:3.9},0).wait(1).to({rotation:-89.8,x:19.9,y:-1.4},0).wait(1).to({rotation:-104.8,x:19.5,y:-6.7},0).wait(1).to({rotation:-108.5,x:19.2,y:-9.5},0).wait(1).to({rotation:-112.3,x:18.9,y:-12.2},0).wait(1).to({regX:2.1,regY:5.8,scaleX:1,scaleY:1,rotation:52.7,x:-7.4,y:-4.1},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1,scaleY:1,rotation:52.7,x:-17.8,y:7.7},0).wait(1).to({x:-17.6,y:8},0).wait(1).to({x:-17.1,y:8.2},0).wait(1).to({x:-16.6,y:8.5},0).wait(3).wait(1).to({regX:2.6,regY:5.6,scaleX:1,scaleY:1,rotation:-112.1,x:13,y:-11.4},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1,scaleY:1,rotation:-104.6,x:26.9,y:-16.6},0).wait(1).to({rotation:-97.1,x:27,y:-13.4},0).wait(1).to({rotation:-82.1,x:27.1,y:-7.8},0).wait(1).to({rotation:-67.1,x:26.2,y:-2.1},0).wait(1).to({x:26},0).wait(1).to({rotation:-67.2,x:25.9,y:-1.9},0).wait(1).wait(1).to({regX:1.6,regY:5.9,scaleX:1,scaleY:1,rotation:37.6,x:-5.6,y:-2.3},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1,scaleY:1,rotation:39.6,x:-13,y:11.6},0).wait(1).to({rotation:41.5,x:-13.7,y:11.3},0).wait(1).to({rotation:43.4,x:-14.5,y:10.9},0).wait(1).to({rotation:45.3,x:-15.3,y:10.4},0).wait(1).to({rotation:47.2,x:-16,y:9.9},0).wait(1).to({rotation:54,x:-17.4,y:8.3},0).wait(1).to({rotation:60.8,x:-18.5,y:6.5},0).wait(1).to({rotation:67.7,x:-19.5,y:4.6},0).wait(1).to({regX:1.8,regY:6,scaleX:1,scaleY:1,rotation:52.7,x:-5.6,y:-1.5},0).wait(1).to({regX:5.1,regY:21.3,scaleX:1,scaleY:1,rotation:30.1,x:-10.6,y:16.1},0).wait(1).to({rotation:7.6,x:-4.7,y:19.8},0).wait(1).to({rotation:-7.2,x:4.4,y:18.5},0).wait(1).to({rotation:-22.1,x:13.2,y:16.2},0).wait(1).to({rotation:-29.6,x:15.6,y:14.1},0).wait(1).to({rotation:-37.1,x:17.7,y:11.8},0).wait(1).to({rotation:-52.1,x:20.7,y:8.4},0).wait(1).to({rotation:-67.2,x:22.7,y:4.5},0).wait(1).to({regX:-0.2,regY:2.5,rotation:-7.1,x:2.4,y:-10.3},0).wait(1).to({regX:5.1,regY:21.3,rotation:-7.1,x:10.2,y:7.8},0).wait(1).to({x:10.3,y:8.2},0).wait(1).to({x:10.4,y:8.6},0).wait(1).to({x:10.5,y:9},0).wait(1).to({y:9.4},0).wait(1).to({x:10.6,y:9.8},0).wait(1).to({x:10.7,y:10.2},0).wait(1).to({x:10.8,y:10.5},0).wait(1).to({y:10.9},0).wait(1).to({x:10.9,y:11.3},0).wait(1).to({x:11,y:11.7},0).wait(1).to({x:10.9,y:11.3},0).wait(1).to({y:11},0).wait(1).to({x:10.8,y:10.6},0).wait(1).to({x:10.7,y:10.3},0).wait(1).to({x:10.6,y:9.9},0).wait(1).to({y:9.6},0).wait(1).to({x:10.5,y:9.2},0).wait(1).to({x:10.4,y:8.9},0).wait(1).to({y:8.5},0).wait(1).to({x:10.3,y:8.2},0).wait(1).to({x:10.2,y:7.8},0).wait(1).to({x:10.1,y:7.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-30.8,51.7,70.3);


(lib.giftedclientplayer = function() {
	this.initialize();

	// Interface
	this.chatBubble = new lib.giftedclientchatBubble();
	this.chatBubble.setTransform(-1,-64.2,0.627,0.637,0,0,0,-1.8,-33.4);

	// Character
	this.playerChar = new lib.mcPlayer_char();
	this.playerChar.setTransform(0.5,-0.2,1,1,0,0,0,0.3,0.1);

	// Hitbox
	this.playerHitbox = new lib.mcCharacter_hitbox();
	this.playerHitbox.setTransform(0.5,-0.3,0.72,1,0,0,0,15,30);
	this.playerHitbox.alpha = 0;

	this.addChild(this.playerHitbox,this.playerChar,this.chatBubble);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-78.2,124.1,117.2);


(lib.mcPlayer_char_old = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{static:0,running:1,jumping:2,falling:3},true);

	// Head
	this.instance_66 = new lib.mcPlayer_static_head();
	this.instance_66.setTransform(0.2,0.1);

	this.instance_67 = new lib.mcPlayer_running_head();
	this.instance_67.setTransform(8.9,-6.1,1,1,0,0,0,8.4,-6.3);

	this.instance_68 = new lib.mcPlayer_jumping_head();
	this.instance_68.setTransform(-1,-10.2,1,1,0,0,0,-0.4,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_66}]}).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).wait(1));

	// Torso
	this.instance_69 = new lib.mcPlayer_static_torso();
	this.instance_69.setTransform(-0.3,-6.3,1,1,0,0,0,-0.6,-6.4);

	this.instance_70 = new lib.mcPlayer_running_torso();
	this.instance_70.setTransform(0.6,3,1,1,0,0,0,0.1,2.9);

	this.instance_71 = new lib.mcPlayer_jumping_body();
	this.instance_71.setTransform(0.1,8.6,1,1,0,0,0,0.5,5.9);

	this.instance_72 = new lib.mcPlayer_falling_body("synched",0);
	this.instance_72.setTransform(0.2,10.7,1,1,0,0,0,0.8,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_69}]}).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).wait(1));

	// Arms
	this.arms = new lib.mcPlayer_static_arms();
	this.arms.setTransform(0.1,0.2,1,1,0,0,0,-0.2,0.1);

	this.arms_1 = new lib.mcPlayer_running_arms();
	this.arms_1.setTransform(0.2,9.5,1,1,0,0,0,-0.2,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arms}]}).to({state:[{t:this.arms_1}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Legs
	this.legs = new lib.mcPlayer_static_legs();
	this.legs.setTransform(0.5,20.4,1,1,0,0,0,0.2,20.3);

	this.legs_1 = new lib.mcPlayer_running_legs();
	this.legs_1.setTransform(-8.8,5.6,1,1,0,0,0,-9.3,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.legs}]}).to({state:[{t:this.legs_1}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Ref
	this.ref = new lib.mcPlayer_static();
	this.ref.setTransform(0.3,0.1);
	this.ref.alpha = 0;

	this.instance_73 = new lib.mcPlayer_running();
	this.instance_73.setTransform(-2.7,-0.2,1,1,0,0,0,-3.3,-0.5);
	this.instance_73.alpha = 0;

	this.instance_74 = new lib.mcPlayer_jumping("synched",0);
	this.instance_74.setTransform(-0.1,3,1,1,0,0,0,0.5,-0.2);
	this.instance_74.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ref}]}).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-31.6,18.4,62.7);


(lib.giftedclientcharScreen = function() {
	this.initialize();

	// Display
	this.displayMain = new lib.mcPlayer_char_old();
	this.displayMain.setTransform(508.3,139.4,2.302,2.302,0,0,0,1.1,-3.5);

	// Interface
	this.btnCancel = new lib.flcontrolsButton();
	this.btnCancel.setTransform(111.2,249.3,0.5,1,0,0,0,49.9,11);

	this.btnSave = new lib.flcontrolsButton();
	this.btnSave.setTransform(45.3,249.3,0.521,1,0,0,0,50,11);

	this.text_2 = new cjs.Text("Character Apparel", "bold 25px Trebuchet MS", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 212;
	this.text_2.setTransform(327.5,9);
	this.text_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,136);

	this.displayHead = new lib.Headwear();
	this.displayHead.setTransform(131.2,60.2,4.158,4.158);

	this.btnHeadPrev = new lib.flcontrolsButton();
	this.btnHeadPrev.setTransform(54,61.5,0.28,1,0,0,0,50,11);

	this.btnHeadNext = new lib.flcontrolsButton();
	this.btnHeadNext.setTransform(207.5,61.5,0.28,1,0,0,0,50,11);

	// Pretty
	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginRadialGradientFill(["#9487B2","#523D83"],[0,1],0,0,0,0,0,118.1).beginStroke().moveTo(-82.4,-13.5).curveTo(-48.3,-19.1,0,-19.1).curveTo(48.3,-19.1,82.4,-13.5).curveTo(116.5,-7.8,116.5,0).curveTo(116.5,7.9,82.4,13.5).curveTo(48.3,19.1,0,19.1).curveTo(-48.3,19.1,-82.4,13.5).curveTo(-116.5,7.9,-116.5,0).curveTo(-116.5,-7.8,-82.4,-13.5).closePath();
	this.shape_431.setTransform(504.7,219.2);

	// Back
	this.instance_75 = new lib.mcCharScreen_bg("single",0);
	this.instance_75.setTransform(332.2,139.2,1,1,0,0,0,0,-139.1);

	this.addChild(this.instance_75,this.shape_431,this.btnHeadNext,this.btnHeadPrev,this.displayHead,this.text_2,this.btnSave,this.btnCancel,this.displayMain);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,664.3,278.3);


(lib.flcontrolsUIScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_76 = new lib.ScrollBar_thumbIcon();
	this.instance_76.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_77 = new lib.ScrollBar_thumbIcon();
	this.instance_77.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_78 = new lib.ScrollBar_thumbIcon();
	this.instance_78.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_79 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_79.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_80 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_80.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_81 = new lib.ScrollArrowDown_upSkin();
	this.instance_81.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_82 = new lib.ScrollThumb_upSkin();
	this.instance_82.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_83 = new lib.ScrollArrowUp_upSkin();
	this.instance_83.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_84 = new lib.ScrollArrowUp_overSkin();
	this.instance_84.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_85 = new lib.ScrollThumb_overSkin();
	this.instance_85.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_86 = new lib.ScrollArrowDown_overSkin();
	this.instance_86.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_87 = new lib.ScrollThumb_downSkin();
	this.instance_87.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_88 = new lib.ScrollArrowDown_downSkin();
	this.instance_88.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_89 = new lib.ScrollArrowUp_downSkin();
	this.instance_89.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_90 = new lib.ScrollTrack_skin();
	this.instance_90.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_91 = new lib.ScrollTrack_skin();
	this.instance_91.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_92 = new lib.ScrollTrack_skin();
	this.instance_92.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_93 = new lib.ScrollTrack_skin();
	this.instance_93.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_94 = new lib.focusRectSkin();
	this.instance_94.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76}]},1).wait(1));

	// avatar
	this.instance_95 = new lib.Component_avatar();
	this.instance_95.setTransform(7.5,50,0.188,4.545,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_95).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.flcontrolsTextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Assets
	this.instance_96 = new lib.flcontrolsUIScrollBar();
	this.instance_96.setTransform(173.9,230.4,1,1,0,0,0,7.5,50);

	this.instance_97 = new lib.focusRectSkin();
	this.instance_97.setTransform(140.4,136.4,1,1,0,0,0,41.1,11);

	this.instance_98 = new lib.TextArea_upSkin();
	this.instance_98.setTransform(105.4,44,1,1,0,0,0,76,11);

	this.instance_99 = new lib.TextArea_disabledSkin();
	this.instance_99.setTransform(105.4,91.5,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96}]},1).wait(1));

	// avatar
	this.instance_100 = new lib.Component_avatar();
	this.instance_100.setTransform(50,22,1.25,2,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_100).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,44);


(lib.flcontrolsList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_101 = new lib.flcontrolsScrollBar();
	this.instance_101.setTransform(166.5,183.6,1,1,0,0,0,7.5,50.3);

	this.instance_102 = new lib.focusRectSkin();
	this.instance_102.setTransform(136.1,322.3,1,1,0,0,0,41.1,11);

	this.instance_103 = new lib.flcontrolslistClassesCellRenderer();
	this.instance_103.setTransform(101,277.3,1,1,0,0,0,76,11);

	this.instance_104 = new lib.List_skin();
	this.instance_104.setTransform(121,67.6,0.39,0.39,0,0,0,136,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101}]},1).wait(1));

	// avatar
	this.instance_105 = new lib.Component_avatar();
	this.instance_105.setTransform(62.6,50,1.25,4.545,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_105).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,100);


(lib.giftedclientworldUi = function() {
	this.initialize();

	// Border
	this.instance_106 = new lib.Border();
	this.instance_106.setTransform(1269,180.1,0.569,0.494,0,0,0,744,405.1);
	this.instance_106.cache(-1,-1,1492,814);

	this.instance_107 = new lib.Border();
	this.instance_107.setTransform(-422.7,181,0.569,0.494,0,0,0,744,405.1);
	this.instance_107.cache(-1,-1,1492,814);

	this.instance_108 = new lib.Border();
	this.instance_108.setTransform(423,540.1,0.606,0.444,0,0,0,744,405.1);
	this.instance_108.cache(-1,-1,1492,814);

	this.instance_109 = new lib.Border();
	this.instance_109.setTransform(422.5,-179.7,0.606,0.445,0,180,0,744,405.1);
	this.instance_109.cache(-1,-1,1492,814);

	// UI
	this.indAdminTile = new lib.giftedclienttiles();
	this.indAdminTile.setTransform(776,287);
	this.indAdminTile.cache(-1,-2,66,68);

	this.btnLobby = new lib.flcontrolsButton();
	this.btnLobby.setTransform(780,25.4,1,1,0,0,0,50,11);

	this.txtMsg = new lib.flcontrolsTextInput();
	this.txtMsg.setTransform(179.8,349,3.589,1,0,0,0,50,11);
	this.txtMsg.alpha = 0.801;

	this.txtChat = new lib.flcontrolsTextArea();
	this.txtChat.setTransform(179.9,267.6,3.591,3.228,0,0,0,50,21.9);
	this.txtChat.alpha = 0.602;

	this.addChild(this.txtChat,this.txtMsg,this.btnLobby,this.indAdminTile,this.instance_109,this.instance_108,this.instance_107,this.instance_106);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-845.7,-359.7,2537.8,1079.8);


(lib.giftedclientlobby = function() {
	this.initialize();

	// UI
	this.btnLogout = new lib.flcontrolsButton();
	this.btnLogout.setTransform(788.5,324.3,0.65,1,0,0,0,50,11);

	this.btnChar = new lib.flcontrolsButton();
	this.btnChar.setTransform(388.6,43,1.19,1,0,0,0,50,11);

	this.btnJoin = new lib.flcontrolsButton();
	this.btnJoin.setTransform(512.1,43,1.19,1,0,0,0,50,11);

	this.lstUsers = new lib.flcontrolsList();
	this.lstUsers.setTransform(514.5,178.9,1.15,2.41,0,0,0,50.1,50);

	this.btnSend = new lib.flcontrolsButton();
	this.btnSend.setTransform(513.4,324.3,1.19,1,0,0,0,50,11);

	this.txtMsg_1 = new lib.flcontrolsTextInput();
	this.txtMsg_1.setTransform(234,324.3,4.319,1,0,0,0,50.1,11);

	this.txtConsole = new lib.flcontrolsTextArea();
	this.txtConsole.setTransform(233.4,179,4.317,5.502,0,0,0,50,22.1);

	// Labels
	this.lblVer = new lib.flcontrolsLabel();
	this.lblVer.setTransform(771,30,1,1,0,0,0,50.1,11);
	this.lblVer.alpha = 0.199;

	this.lblLobby = new cjs.Text("LOBBY", "bold 35px Trebuchet MS", "#EEEEEE");
	this.lblLobby.textAlign = "center";
	this.lblLobby.lineHeight = 37;
	this.lblLobby.lineWidth = 835;
	this.lblLobby.setTransform(168,8.8,1.03,1);
	this.lblLobby.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,104);

	// Back
	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginLinearGradientFill(["#7964AC","#5A4392"],[0,1],-402.5,295.2,-402.7,-68.7).beginLinearGradientStroke(["#3F2F59","#2F234B"],[0,1],181.2,-138.1,-181.1,138.2).setStrokeStyle(6,1,1).moveTo(396.1,-171).lineTo(-396.1,-171).curveTo(-416.5,-171,-416.5,-155.5).lineTo(-416.5,155.5).curveTo(-416.5,171,-396.1,171).lineTo(396.1,171).curveTo(416.5,171,416.5,155.5).lineTo(416.5,-155.5).curveTo(416.5,-171,396.1,-171).closePath();
	this.shape_432.setTransform(420,177);

	this.addChild(this.shape_432,this.lblLobby,this.lblVer,this.txtConsole,this.txtMsg_1,this.btnSend,this.lstUsers,this.btnJoin,this.btnChar,this.btnLogout);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.5,6,1086,342);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;