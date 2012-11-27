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
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],12.3,-109.7,11.8,179).s().p("EBCGAcSMiELAAAMAAAg4jMCELAAAMAAAA4j").cp();
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
	this.shape.graphics.f("#0000FF").s().p("AAaguQABAAAAAEQAAAAgNANQgOAMAAAJQAAAHAPACQAPAFAAANQAAALgFAGQgHAIgSAEIgXAAQgEgBAAgBQgCgBAAgEQAAgEACgBQADAAABgBQAXgBAJgFQACgCAGgIQgNgLgLgHQgEgBAAgGQAAgPAHgLQAHgPAWABIABAA").cp();
	this.shape.setTransform(-19.2,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABqgkQAAgDgBgBQAuAMAeAiQAIAKALARQACADACACIiGABIgMACIheAAQgHgFgkgBQgkgBglABQgkABgPgFQAQgXABgBQAPgSAMgIQAVgMBBgDQADgCABgBQABAAAAAAQAFAJAHADQAaALBRAAQA3AAAAgWIAAAA").cp();
	this.shape_1.setTransform(0.5,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABtg0QAHgBAUgBQAFAFAtAkQArAjAAANQAAACAAABQADAEAAABQAAAEgBABQgDACgCACIiYAAIgLADIhgAAQgEgCgBgDQguAEgJgEQgJgDgJADQgJADgiAAQgiAAgKgDQgJgDgLADQgBAAgBAAQAAAAgBAAQgHAAAAgCQgBgBgBAAQgBgBAAgEQAAgRA1gjQA8gqA1AGQABAAABAAQAAAFAFACQAGgBAFgCQAEACAEADQAPAKAxAAIA7AAQABgCALgFQAJgGADgBQgDgBgDAAQAAACAAgEQAEAAABgCQACgBAAgEIAAgBABygkQAAAWg3AAQhRAAgagLQgHgDgFgJQAAAAgBAAQgBABgDACQhBADgVAMQgMAIgPASQgBABgQAXQAPAFAkgBQAlgBAkABQAkABAHAFIBfAAIALgBICGgCQgBgCgDgDQgLgRgIgKQgdgigugMQAAABAAADIAAAA").cp();
	this.shape_2.setTransform(-0.3,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AhWAAQAAAAAAAAQAAgEAOgEQATgGAKgEIBgAAIAhAOIABABQgBADgBAAQgBACgFABQAAADABgCQACABAEAAQgEABgJAGQgLAGgBABIg6AAQgxAAgPgKQgFgDgEgBQgFABgFACQgFgDgBgFIAAAA").cp();
	this.shape_3.setTransform(1.9,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AA7gbQgPAQgMAAQgIAAgDgDQABAJAAAFQAAAPgBAHQgDAQgKACQgGgCAAgGQAIgaAAgGQAAgPgEgKQgEgLAAgKQAAgUAFAKQACgJAfABQAgABAAAPQAAAHgNAOIAAAAAA3g0QgNgBgRACQgLABgEgBQABADABADQAFAPADAMQAGAAAHgCQAQgEALgXIgFgFAgdgiQAAAGgNANQgNAMgBAEQAeAIAGAEQAEADAAAKQAAAKgKANQgNAQgVAAQgHAAgEgEQAAADAAgGQAAgCAWgJQAUgIAAgMQAAgEgUgGQgUgGAAgLQAAgLAIgHQAEgFAbgQIABABQAAAAAAAEIAAAA").cp();
	this.shape_4.setTransform(-14,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("ABpgbIgkAAQgDAGgBACQgCAFgDAOQgEANgKAIQgEgBgBAAQgBgBAAgFQAQhAAWgOQAAgJAOAEQAQAEAFAQQABAEABAHQABAAABAAQACABAAADQAAAEgCACQAAAAgBAAQABAGAAAHQAAAPgBAJIgFACQgGgGAAgdQAAgBAAgCIAAAAABWg4QgDAFgFAIQgBACgBACIAaAAQgFgKgLgHIAAAAAgHgrQgSgGgIgEQAAABAAABQgBAFgCAIQAAABAHAbQATgHAGgDQALgFAAgFQAAgHgOgGIAAAAAAUgeQAAAJgKAIQgKALgUAAQgEAAgDAAQABACAAADQAAAOgBAEQgEAJgRALQgFgCAAgGQAAgBAHgNQAIgOAAgDQAAgJgFgLQgFgKAAgMQAAgLAAgCQABgJAHgCQACABABABQAEgFAUAAQANAKANAIQAHAGAAANIAAAAAhYgRQAAAMgFAFQAMAPAJABQAEABAAAGQAAANgJAPQgMAUgRAAQgJAAgDgDQAAADAAgHQAHgBAHgGQAQgLAHgXQgKgLgKgGQgFgCAAgEQAHgrAYAAIABABQABAAAAADQAAADgIAIQgHAHAAAEIAAAA").cp();
	this.shape_5.setTransform(-8.5,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("ACAgRQAAAFAAAHIAAAAQAFgGAWgMQARgKAQgHQAEABABAAQABABAAAFQAAAFgOAFQgTAFgLALQgEADgHAMQgEAKgIAAQgKAAgBgKQABgIAAAAQgBAAgDgEQgIAJgDAAQgRAAgGg8QAAgPAIAJQAIAJACAKQAAAGAEAYQAFgEAFgGQAEgDAEAAQAJAAAAAIIAAAAAANhFIAAABQAQADAJAhQAFATABASQAAAEgBAEIgFACQgNgPgHgWIAAgBIgSAAQAAgBgBAAIAAAAQgRAggBAAQgGAAACgBQgCgBAAgBQgBAAAAgEQAOg8AUgJQAAAAgBgBQADAAABAAQABAAABAAIAAAAAALg1QgDAGgGAMIANAAQgBgIgDgKIAAAAAhUgyQgRAAgBADQgBACgBABQAFAIACAOQABAGgBAHQADgDAHgHQALgKAAgGIgIgPAg/gjQAAAjgbAAQgEAAgBgBQAAAAgCgCQAAAGgBAJQAAAGgDAGQgEAHgCAMIgGACQgFgFAAgHQAAgHAEgFQADgGAAgFQAAgHgFgOQgGgTgBgGIAAgSQAGAAAEACQABgEACgBQAGgFAYgBQARALAAARIAAAAAiPggQAAAFgQAKQgPAKgCAHQANAFALAKQAOALAAAFQAAAMgMAMQgOAPgWAAQgEAAgBgBQAAgBgCgBQAAADAAgHQAAgEAUgHQAUgHAAgMQAAgLgSgHQgUgGAAgHQAAgMALgMQAOgOAVAAIABAAQABAAAAAEIAAAA").cp();
	this.shape_6.setTransform(-1,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("ADqAZQAAAGgyAnIgHgBQAAgLgFgcQgBgNgBgKQgEAPgOAgIgEABQgFgCgBgDQAAgBAAgEQAAgKAMgaQAKgTABgBQAEgHACAHQAOAEADAUQACAMgBAXQABgBASgOQARgNACAAQAGAAAAABQAAACABACIAAAAABNgcQAJAAAAAGQAAAEgCAGIAAABQAIgDANgNQAQgLAgAAQAGAAACABQAAACABACQAAABhTAqIgHgBIgBgQQgDACgIAHQgHAIgJAAIgJgBQgBgNgFgeIAAgZQAMgBACATQADAfAAABIAAABQADgBANgKQAMgJADAAIAAAAAgghBQAOACAHAWQAHAUAAAVQAAAGgBAEIgFACQgIgLgHgWQAAgBAAgBQgDADgHACIgRAAQgQAbgMALQgGgCAAgGQAEgTAJgVQARgpAXAAQAAABABADIAAAAAgkg0QgDAIgFAKQAGAAAJAAQgDgJgEgJIAAAAAiKgwIgZAAQAEAPAEAaQACgDAKgGQAMgHAAgIQAAgIgHgJIAAAAAh2gfQAAAJgJALQgLALgLAAQgGAAACAAQgBAAAAAAQACAIABAMQAAAEgBAEQAAAAgBABQgBABgEAAQgEAAgJhMQAAgEAAgDQAAgBAAgBIAAgEIABAAQABgNADAMIAhgBQAMANACAEQABACAAALIAAAAAjEgmIgJAKQgKALgDAJQADAEAUAQQAJAIAAAJQAAAHgOAOQgPAPgLAAQgHAAACgBQgBgBgBAAQAAgBAAgEQAAgCARgMQASgMAAgCQAAgFgQgNQgRgLAAgLQAAgJALgNQALgPALAFIABABQABAAAAADIAAAA").cp();
	this.shape_7.setTransform(3.9,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("ADNAdQAAAKglAbQgHAAgLgeQgFgOgCgIQgDAFgDAGQgNAagFADQgGgCAAgGQAAgHALgWQANgWAHgHQAEADABABQABABAAAFQAAACgBACQAGAEAEALQAKAZACADQACgBAKgLQAKgJAFAAQAGAAAAABQAAACABACIAAAAAAygWQANAAABADQAAACgBAEQALgCAMgFQARgHAOgFQAEACABAAQABABAAAEQAAAIgiAOQgkAKgEACQgEgFgBgEQgBgBAAgBIAAgCQgSAKgGAAQgMAAgKg4QAAgaAGASQAEALANAmQABAAANgIQAJgFAHAAIAAAAAg2g/QAAACABACQASAMAKAsQAAAHgBACQgDAFgJAAQgGAAABgBQgBgBgBAAQAAgBAAgEQAAgCAEgCQADgDAAgBQAAgDgHgNQAAABgBAAIgfACQgJAAgDgDQAAADAAgHQgMATgCAVIgGADQgEgCgBgEQAAgBAAgIQAAgVAMgPQALgNAagNIAAgFQAEAAADACQACgBACgBIAAAAAg/g0QgHAFgGAHQgGAFgEAHQABgBABAAQAIgCAYgBQgIgOgDgGIAAAAAi9gtQAHARAEASQADgCAFgCQAQgJAAgMQAAgLglgDQABACABACIAAAAAjGg9QA4gIAAAkQAAAJgLANQgLALgMABQACAKAAALQAAAGgBADQgBAAAAACQgBABgEAAQgBAAgWhWQAAgTAGAKIAAAA").cp();
	this.shape_8.setTransform(6.8,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("ACnAXQAAAFgSARQgMALgIAHIAAABQgDADgDABQgEgBAAgBQgCgBAAgEQAAgBAAAAQgHgJgHgNQgGgMgDgJQgCAFgDAGQgKATgGADQgGgBAAgHQAAgGAHgSQAKgUAJgDQABABADAAQACABAAADQAAAAAAAAQAJADAGAMQAJAVAEAHQAEgEAGgFQAUgSAJADQAAACABACIAAAAAADgZIAGADIAAAQQAwgYACAAQAHAAAAABQAAACABACQAAAGg+AgIgGgBIgBgNIgBgDQgLASgLAEQgIgHAAgLQAAgMgBgHQgCgJgIgOQgIgOAAAAQAAgHAHgCQAMAJAFAQQAEAJAFAVIAAADQAEgHADgDQAEgGALgCIAAAAAhggWQgBABgDABIghAAQgEgCgDgCQgBABAAACQgBAHgFALQgGAJgHAHQgGgCAAgHQAAgIAQgaQAPgaARgEQACgSAVAdQAXAgAAARIAAAMQgBAGgGAAIgHgBQgBgDACgGQABgHAAgBQAAgJgLgOQAAABgBAAIAAAAAh1gzQgMACgFAJQgCADgBADQALgBAYACQgKgMgEgGQAAAAgBAAIAAAA").cp();
	this.shape_9.setTransform(11.7,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("ABrAaQAAAHgTARQgKAKgJAGIgBACQAAABgBABQgBAAgDAAQAAAAgBAAQAAAAgBgBQgCAAAAAAQgBgBgBgCQgFgHgLgPQgHgLgGgJQgGALgKAPIgFgBQgCgBAAAAQAAgBAAgEQAAgIAKgTQADgFACgEQAAAAAAAAQAAgBAAAAQAIgJAFAAQACABACABQADABAAACQAAACgEAGQAIAFAHALQAIALAFALQAEgFAHgGQATgPAMAAQAAABABADIAAAAAAWgjQgCALgaAPQgjASgFADIAAABQgBABAAACQgBACgEAAQgIAAgBgMQAAgKAAgBQAAgDAAgCQgCACgCACQgMAJgEACQgBABAAACQABACgGAAQgFAAgIgdIgGgdQAAg4AWBgQADgEAFgDQALgJAIgCQABgBABgBQABABABABQAAAAABAAQAAAAAAABQAEAGgBALQAAAFAAADQAIgFAUgMQAZgRAMgGQAFADABACIAAAA").cp();
	this.shape_10.setTransform(17.9,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AAygFQgRAcgSANIAAAAIgCAFQACADgHAAQgJAAgNgnQgFgRgCgJQgLAPgHALIgDABQgFgCgBgDQgBgBAAgCQAAgMALgOQAMgQAOABQAAACABACQAAACgDAGQADAEADAHQAIAUAIATQAEgFAGgHQASgRAMAAQAAABACAEIAAAA").cp();
	this.shape_11.setTransform(23.9,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_7}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_8}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_9}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_11}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},1).wait(1));

	// Graphics 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033FF").s().p("ADwAXQAAABg6AsQgDAAgCAAQAAAAAAAAQAAAAgBAAQgDgBgCgCQgBADAAgHQAAAAABgBQgFgKgCgNQgBgHAAgPQgDAHgFAJQgLAVgHAEQgHgCAAgGQAGgGAGgJQALgRAAgRQAIgCADACQABgDAEgDQAGAGADAMQADASACAEIAAAQQAGgFAJgGQAegVALAAQAAACABAEIAAAAACMgiQAAANgaAVQgZAVgOAAQgCAAgCgBQgBABgBAAIAAgBQgCgBgBgCQgBADAAgGQAAgBACgBIgDgIQgDgFAAgGQgDADgCACQgOANgDAAIgCgBQgBABgCAAQgMAAgCg0QAAgLAHgFQAFAKACAVQABANACAJQADgDAEgDQALgKAKgDQAAgBACgBQAAABABABQABAAAAAAQAAABABADIAAAAQABADAAACQABAGADADIAAALQADgCAEgCQAUgKAFgFQADgEAJgOQAJgLALAEQAAABABADIAAAAAghg6QAJAHAIAOQAKAUABARIAAAAQAAAAgBABIAAADIgFACQgEgBgCgDQgBADAAgFQgFgGgHgOIgVAAQgMASgVAXQgEgDgBgCQAAgBAAgFQAAgHAVgdQAAgBgBAAIAAgGQACgBAFAAQALgOAHgIQAAgCAAgBQAAgCAAgDQADABADACQADgCABAAQAAABABAEIAAAAAgngoQgBADgCADQADABADAAQgBgEgCgDIAAAAAh8ggQAAAMgCAEQgFALgUAAIgBAAIAAAZQgCAAgFADQgHgGAAgMQgBgNgCgFQgKgWAAgQQAAgMAFgEQABABABACQABAAABgBQAHgCAYAAQAPACAAAhIAAAAAiLgvQgFgFgVAAQgCAAgBgBQACAGACAHQAFANAEAKQADgCAEgBQALgFAAgIQAAgMgCgCIAAAAAjHgvQAEAAABABQACABAAADQAAACgCACQgCABgDACIgSACIgHAXQAAACARANQASAPAAAMQgqAkgBAAQgHAAACgBQgBgBgBAAQAAgBAAgEQAAgHAKgHQAYgRABAAQgHgKgPgLQgLgIAAgKQAAgNAHgNQAKgVAVAJIAAAA").cp();
	this.shape_12.setTransform(4.5,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,7.4,52.2,23.3);


(lib.tile_hitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ak1k1IJrAAIAAJrIprAAIAApr").cp();
	this.shape_13.setTransform(31,31);

	this.addChild(this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


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
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABuhuQAlAtAAAqQAAAwgfA8QgiBBgyAcIgoAAQhcgdgdg3QgRggAAg+QAAgaAGgNQAUgkAJgXQAHgPAxgdQAygdAEgGQBCAPAtA0IAAAA").cp();
	this.shape_14.setTransform(17.4,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ACRm4QAAAzggBIQgsBihHAHQgBABAAABQAAAQADAkQADAFAIANQAQAZAcA+QARAQAcAtQAhArA3APQADACAFABQAEABAAAIQAAAIgEADQgBABgHABIgjAAQgdgOhGhiQgjgzgSgfQACAXACAbQAKB5AAAFQAAADgFAvQgBARgBANQgDAGAAAHIABADQgBACAAAEQAAAAABAFQAAAAAAAAQAAACAAABQABAAABAAQADAAAFAEQALAKATAfQAkA6AcBBQAIAVAOBLQANBPAAAiQAAAigCAXQgFACgFACQgPgngGhCQgJhbgDgQQgHgngvhXQgYgqgWgoQAAgCAAgBQgCACgDABQgBAAgBgBQgLANgPAUQg2BDgfBWQgNAkABBCQACBYgCAUQgCACgIADQgKgTgCgeQgBgLAAgnQAAhtAbhOQAihiBLgmQAAAAAAgBQgBgGAAgQQAAgGAFglQAFglAAgGQgEg4gEg4QgJASgNAWQguBOgnAAQgMAAgHgGIAAABQgBAAAAgIQAAgBAmghQAsgnAaglQAMgQgBgqQAAgMABgLQgFhFAAgPQh0gGgnhgQgUg0AFg1QAAhOA/g4QAMgLAfgWQATgOAAgFQAAgUAjAGQAhAGAoAZQBuBBAABTIAAAAABToQQgsg1hDgOQgEAFgyAeQgwAdgIAOQgJAYgTAkQgHAMAAAcQAAA+ARAgQAeA4BbAcIAoAAQAygcAihBQAfg7AAgzQAAgqglgsIAAAA").cp();
	this.shape_15.setTransform(20,62.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ACAnGQgqglgGgGQgegegIgIQgLgMgXgGQgSgGgGgLQhZAygfAiQgeAjAAA2QAAAxAYA1QAiBIA8gCIBuAAQBChhACgDQAWgpAAgzQAAgQgYgVIAAAAACxmeQAAA6gXAxQgaA1g6A5IgyAAQACAGAAARQAAAWgCAKQgBABgBAAQADAJACAKQAIAJAHAMQAMASAXArQAyBPBFARQgDAEgDAGQgEAFgHAAQg/AAhQiJQAAACABACQAJBNAABSQAAAKgRAuQgSAsgHAIQAvAMAfA7QAEAIAVAwQAQAjANATQAZCHAUBLQgGAHgGADQgPgigShLQgShOgHgSQgVg3gcguQgWgmgmg2QhRBVgMAcQgGAPAABSQAAAdAZB6QAAAKgCAHQgGADgFACQgcghgHg0QgCgRAAhJQgCgmABgWQABgnAKgVQAshkBEAFIACADQABAAABABQgFgGgEgIQgCgGAAgDQAGgTAFgUQANgmAAgLQAAgbgNhfQgDAIgDAIQgcA/gtAAQgIAAgDgCQgBAAgFgFQAAAFAAgMQAAgEAIgDQAOgGAFgDQAfgTAPgxQAHgZAHgRQgHgtAAgFQAAAAADgIQAAAAgBgBQgCgDAAgDQAAgFACgDQgCgJAAgaIgmAAQhKgBgmhSQgZg5AAg7QAAgXAQgsQASgxASgPQCGh2AUA9QA3AhAwAtQA7A4AAAkIAAAA").cp();
	this.shape_16.setTransform(18.5,60.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACHg4QAZAVAAARQAAAxgXApQgBADhCBhIhuAAQg9ABghhIQgZg0AAgxQAAg0AfgjQAegjBZgxQAHALASAFQAWAHAMAMQAHAIAfAeQAFAGAqAkIAAAA").cp();
	this.shape_17.setTransform(17.8,20.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AB8hXQAkAZAAApQgEAqgVAsQgrBXhbAAQhVAAgtg+QgegpAAgkQAAgnArg3QAwg/A2gHQAAAGAEAEQADAFAGACQBZAWAkAZIAAAA").cp();
	this.shape_18.setTransform(18.8,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ACvm1QAAA6gjA9QgyBaheAAQgFAAgGgBQAMAMAEAeQAFAdADASQAMAUARAgQAvApAPALQAnAbA1AOIADAGQgDAEgBAGQgEAEgUAAQhFAAhEhQQgBgCgCgCQABAJABAJQABALAAA6QAAAbgIAnQgEASgNA6QAAAAgBABQABABAAAEIgGAKQAeASAgAuQAmA0ALAwQAQAmAQA6QAHAdAQBGIAAAhQgIAEgFADQgLgcgQhEQgQhCgOgkQgMgdg3hPQghgzgHgcIgYAhQgrA4AAAfQAAAcgFAvQgFAvAAAPQAAAdABAHQADASALATIAAAXQgBAAgEACQgFAEgCABQgVgdgFgXQgCgJAAgnQAAhPAZhZQAehxA0gLQgHgJAAgJQAAgTAKguQAJgtAAgRQAAhOgCgJQgBgBAAgBQgDAWgRAaQggAwgxAAQgIAAgEgBIgDgCQgDgCgBAAQgBgBAAgIQAAgDAQgGQAVgHANgHQAygiAAhUQACgBABAAQgIgPAAgKQAAgKACgGQgDgNgEgNIAAgkQhdgIgrhFQgdgsAAgwQAAgPAMgqQAPg0AQgNQAsgjAfgQQAzgaAGAdQBrALAxApQAmAgAAAvIAAAAABynxQgkgZhZgVQgGgCgDgFQgEgFAAgFQg2AHgwA+QgrA4AAAoQAAAkAeApQAtA+BXAAQBZAAArhXQAVgrAEgtQAAgpgkgZIAAAA").cp();
	this.shape_19.setTransform(19.8,60.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AB+hRQAhAgAAApQACArgRApQgiBShfAAQhsAAgrhNQgXgoAAgvQAAg6AdgkQAvg8BwADQAqAiA3AqIAAAA").cp();
	this.shape_20.setTransform(19.8,21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ACqmQQAAA8gUAtQgoBchsAAQgJAAgKgBQARAcALA0QABACAAACQAKARADADQASAeAXAMQAiAUBXAPQADABAGABQAEABAAAIQAAAIgFADQgDABgFAAIgyAAQhLgXgpgkQAEAjAAAkQAAA8gEARQgFAhgQAZQAIAJAPAWQAqA/AjBZQAJATAVBYQAUBWAAAPQAAAWgDAKQgFADgFACQgNgegKhIQgJhFgUgnQgohHgYgqQgdg5gIgZQgkArgcA7QgiBHAAA0QAAAPAKAyQAKAzAAALQAAAHgBAAQgBgBAAACQgBABgCACQgCACgIAAQgIAAgEgBIgCgCQgBgMgIg4QgHg0AAgWQAAhFAfg+QAfg+A1gkQgBAAAAgBQgEgDAAgJQAAgDAPg+QAOg+AAgLQAAgWgDgcQgDAOgFANQgXA6g3AAQgIAAgEgCQgDgBgEgEQgBAFAAgMQAWgGAVgRQAqggAAg7QAAgVACgPQgPg0gHgkQhdgOgnhLQgXgsAAg9QAAg9Aog2QAxhBBKAIQBSgFBCBBQA6A5AAA4IAAAAABvnYQg3gqgpgiQhxgDgvA8QgdAkAAA6QAAAxAXAoQArBNBtAAQBfAAAihSQARgpgCgtQAAgpgiggIAAAA").cp();
	this.shape_21.setTransform(21.3,60.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAeiZQAHALBKBNQA2A4AAAgQAAAbgVApQgLAWgXAqIhcAAQgXACgWgCQgCgBgBAAQhMgKgihBQgYgvAAhCQAAgnAMgMQAlgdA0gpIBdAC").cp();
	this.shape_22.setTransform(20.8,21.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ACTnpQArAuAAAzQAAAcgYA+QgaBAgSAFIhpAAQgQABgNgBQAMAgAPA7QAAAJABARQAQgBA0ArQA4AwAeAgQgDAEgEAGQgDAFgFAAQgiAAg6g6QgfgggNgSQAEAhAHAyQAAAggRAvQgKAegJAQIACAFQgFAFgFAFQA0ASA7CUQA1CHAIBbQACAQAAAPQAAAdgXANQgHgDgCgCQgDgDAAgJQAAgGAFgJQAFgIAAgHQAAgNgBgNQgHhSgthuQgwhzg6hMQhIBBgRAaQgaAmAABDQAAAOAHBSQAFA6AEAhQACAUACALIgCAOQgCADgIAAQgMAAgIgwQgEgbgEgrQgFh3AAgBQAAg3ABgFQAEgaAZgnQAegvAQgPQAXgWAggGQgBgCAAgCQAAgNAUgyQATgyAAgMQAAgVgGgmQgHAUgPAcQgnBEgxAAQgIAAgEgDQAAAAgFgFQgBAGAAgNQAAAAAggeQArglAdgdQAKgKgCgoQgBgPABgLQgPhDgBggQhhgNglhMQgWgtAAhVQAAhDA9gqQAuggA1gFIBCACQAsAwBCA9IAAAAAAeo6IhdgCQg0ApglAcQgMAMAAAnQAABFAYAuQAiBCBMAKQABAAACABQAWACAXgCIBcAAQAXgqALgWQAVgpAAgbQAAgig2g4QhKhNgHgLIAAAA").cp();
	this.shape_23.setTransform(20.8,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},4).to({state:[{t:this.shape_19},{t:this.shape_18}]},4).to({state:[{t:this.shape_21},{t:this.shape_20}]},4).to({state:[{t:this.shape_23},{t:this.shape_22}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.1,124.4);


(lib.Katana_1 = function() {
	this.initialize();

	// Artwork
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6A6ABD").s().p("AAAg9IgCACIABADQABgBACABIAAAAQABgBgBgCQAAgBgCgBIAAAAAAHg9QgBADAAAIQgBAOACAHQACAIgBAKQAAAGgCAJIAAAkQgBAFABANQAAACgBADQgBgBgEAAQgEgBgEAAIADhdQAAgXAAgHQADABACgBQAAgBAFACIACAAAAAg0IgCACIABACIADgCQABgBgBgBQAAAAgCAAIAAAAAACgtIgEACIABADIABAAIADgCIAAgCIgBgBAACglIgCAAQAAABgBAEIABgBQAAAAACgEIAAAAAABgdIgDAEIABACIAAAAIAEgDIgBgBIgBgCAACgUIgEAEIABACIABAAIADgDIAAgCIgBgBAAAgGIADgDIAAgCIgCAAIgDADIABACIABAAAAAAAIAEgBQAAAAAAgBIgCgBIgDACQAAABAAAAIABAAAAEADQgBgCgDACQgDADABADIACgBIADgDIABgCAABAMIgDADIABACIABAAIADgCIAAgCIgCgBAAAAUQgEADACADIACgBIADgEQgCgBgBAAIAAAAAACAcQgBgBgBABIgDACIABACIACgBQABAAABgDIAAAAAgCA4IACgCIAAgCIAAgBIgEADIABACIABAAAgDAoQAAABADAAIADgDIAAgBIgCgBIgDACQgBAAAAACIAAAAAgDAxIADgBQABgBACgDQgCgBgBAAIgDAEIAAAC").cp();
	this.shape_24.setTransform(0.1,2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAg6QACAAABACQABABgBABIgBAAQgCgBgBABIgBgCIACgCAgCAzIgBgBIAEgEQABgBACABQgCAEgCAAIgCABAgDArQAAgCACAAIADgDIABACIAAABIgDACQgDAAAAAAIAAAAAgCA7IgBAAIgBgCIAEgDIABABIAAABIgDADAACAeQAAADgCABIgBABIgBgCIACgDQABAAABAAIAAAAAAAAXQABgBACACIgDADIgBABQgCgDADgCIAAAAAACAPIACABIgBACIgDACIgBAAIgBgDIAEgCAAEAFIAAACIgEAEIgBABQgCgEADgCQADgCABABIAAAAAAAADIgBgBQABgCgBAAIAEgBIABABQABAAgBAAIgEADAAAgEIAAAAIgCgCIAEgDIABABIAAACIgDACAACgRIACABIAAABIgEADIgBABIgBgDIAEgDAACgbIAAACIABACIgDADIgBgBIgBgCIAEgEAACgiQgBAEgBAAIAAABQAAgEAAgBIACAAAACgrIABABIABACIgEADIAAgBIgBgCIADgDAAAgyQADAAAAABQAAAAAAACIgDABIgCgCIACgC").cp();
	this.shape_25.setTransform(0.1,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA8E1B").s().p("AABAJIgBAAIAAgCIAAAAIABABIAAABAAEADIAAACIgCAAIAAgDIACAAIAAABAAAgIIABABIgBACIAAAAIAAgCIAAgBAAEgDIABACIgCABIgBgBQAAgCABAAQABAAAAAAIAAAAAgCgBIgCABQAAgDABgBIABABQABABgBABIAAAAAgEAEQAAgDACgBIABACQAAAAAAABIgDAB").cp();
	this.shape_26.setTransform(0.1,-5.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0AD22").s().p("AgEhTQAEgBAGACIABAOQACADAEAAQAFABABABQgEgBgDACQgCABgBADQgBADABACIAAAAIAAABQgDgBgFAAQgBAAgFAAQgBgCAAgDIgDgEQgBgBgDAAQgCABgDgBIAEgCIAHAAQABAAABgIQAAgFABgCQAAgBAAgCIAAAAAgDg+IADAAQAAgBAAgBIgBgBQgCABAAACIAAAAAgBhEQABgCgBAAIgBgBQgBABAAACIACAAAAFhGQAAgBgBAAQgBABAAACIABAAIACgBIgBgBAABhLIgBAAIAAADIABgBIABgBIgBgBAAFg+IAAgCIgCAAIAAAEIACgBIAAgBAACg4IAAgCIgBgBIgBAAIAAADIACAAAAABMQADAAADACQAAAEgCACIAAAAQgBAAAAAAQgCgBgBAAQAAAAgBABIAAgBQgBABgBgBQgBAAAAAAIgEgGIABgBQADgBAEABIAAAA").cp();
	this.shape_27.setTransform(0.1,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AAAAAA").s().p("AgPivIABAAIABADQANBdAFA5QABACAAACQACASABAOQACAVABATQABAYgBAUQAAAGAAAFQAEATgBATQAAALgCASIgBAAIABgkQgDghAAgJQAAgBAAgBQAAgMAAgdQgCgQgBgXQAAgBAAgBQAAgLgDgYQgDgWgBggQgJhGgGgeIAAAA").cp();
	this.shape_28.setTransform(-1.2,-25.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D8D8D8").s().p("AgGiWQACATAAADQAEAUAAAXQAGAkABAMIAEArQAAAEAAAFQACAPABAXQAAABAAABQAAAdACAPQAAAAAAABQACARABAZQAAABAAAVQgBAOACAGQgDAAgDAAQgEAAgCAAQgBgIAAgVQgCgvAAgIIAAgBQAAgOgCgZQgBgUgCgZQAAgEAAgFQAAgKgBgMQgNiVgFgSQAFACACAEQADAHADAUIAAAAAgOiuQAFAeAJBHQACAfACAXQADAXABALQAAACAAABQABAWABARQABAdgBALQAAABAAACQAAAJAEAgIgBAkIAAABQACgSABgLQAAgUgDgSQAAgGAAgFQAAgVgBgYQgBgTgBgVQgCgPgBgQQgBgDAAgBQgGg5gMheIgCgDIAAAA").cp();
	this.shape_29.setTransform(-1.2,-26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgNjsQgCgTgDgHQgCgEgFgDQAEATANCVQABALABAMQABAFAAAFQACAZACAUQABAXAAAOIAAAAQAAAJAAAvQABAUAAAJQADgBADAAQAEAAACAAQgBgFAAgOQAAgVAAgBQgBgagCgRQAAAAAAgBQgBgNgBgdQAAAAAAgBQgBgYgBgOQAAgGgBgEIgEgsQAAgMgEglQgDgXgDgUQgBgCgCgUIAAAAAgckSQAHgBAGALQAGALAJBVIAJBhQAAABAAACQACAMAAAZQAAACAAABQABAhABAJQACARABAiQAAAcgBAGQABAAAAABIACAPQABABAFACQAFAAAAACQACADgEACIgDAAQgCgBgCABQABAIgCACQABAFAAALQgBARAAAFQABAGAAAKQgBAGgBAMQAAAFAAAeQAAAZgFAGIgBAAIgDACIgBAAQgCgBgDAAIAAAAIgBAAQgBgBgBgBQgDgIgBgHQACgIgBgCQAAgMABgFQABgOgBgUQAAgKABgdIABgXIgDgFIgBgEIgDABQgDABgCgDQgCgDAAgCIABgBIAKgCQAAgHABgDQAAgGACgBQgDg1AAggQAAgCAAgBQAAgOgBgTQgBgWgDgYQAAgIgBgIQgBgGgBgKQgCgagGg0IgJhgAABBlQAAADAAAAQgBADAAAFQAAAHAAABIgHgBIgDACQACACACgBQADgBABABIACAFQAAADAAABQAFABADgBQAFABADAAIAAAAIAAAAQgBgDABgCQABgEACgBQADgBAEABQgBgBgFgBQgEAAgCgDIgBgOQgIgCgEAAIAAAAAAPCIIgCAAQgFgCgCABQgCABgDgBQAAAHAAAXIgBBfQACAAAGABQAEAAABABQABgDAAgCQgBgNABgFIAAgkQACgLAAgGQABgKgCgIQgCgHABgOQAAgIABgDIAAAAAAGEGQgFAAgBAAIAAACIABAFQAAABABAAQABAAABAAIAAAAQACgBAAABQACgBACACQAAgBABAAIAAAAQACgCAAgEQgDgCgEAAIAAAA").cp();
	this.shape_30.setTransform(-0.6,-17.5);

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,-45,6,55.1);


(lib.itemHitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABLBLIiVAAIAAiVICVAAIAACV").cp();
	this.shape_31.setTransform(7.5,7.5);

	this.addChild(this.shape_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.ElvenDagger = function() {
	this.initialize();

	// Artwork
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DCB67C").s().p("AAHAJQgBACgFgCQgCgBgBgBQgFgHABgCIABAAQAAABABABQADAAABAAIACgDQAAAAAAAAIACgGQADAHAAALIAAAA").cp();
	this.shape_32.setTransform(0.3,3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#493036").s().p("AAGgbIgBALQgCALABAFIAAALQABAGgCAIIgDADIgBgDQgBgHgDgoQAGgCAFgDIAAAA").cp();
	this.shape_33.setTransform(0.1,0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAOAUQAAgFgBgIQABgNABgEQAEgPgFgYQgJgigUgVQADAKACAGIAAAAQAAABABABQACAKgDAKQAKAJABAwQABAlgCAKQACgBACAAQAFgEADACQAAgDACgCQABgBACgBIAAgBQgCgBgBgFIAAAAIABgBIgBAAAASgdQADAMgCAIQgCADAAAGQACAHgBABQgCANADAGIAAABQABABgBAAIgDADQgDADABAEIgBgBQABAEgCAGIgBANIACAVIAAgBIAEAbQgEAFgLgHQgEgGABgIIABgDQgBgMgBgmQAAgBABAAQABgmAAgRQAAghgNgQQAAAAABgBQAAgCAAgGQgBgKAAgEQgBAAgCgKQgCgFAAgDIgBgBIABgBIAAAAIABAAIABAAQABABACABQAQAPAOAsQABADAAAHQAAAIAAABIAAAAAAKAlQgEADgGACQABAqABAHIADADIACgDQACgIAAgGIgBgNQAAgFABgLIABgLAAPBqQAAgNgEgHIgBAGQgBAAABAAIgEAFQgBAAgDgCQgBgBgBgBIAAAAQAAACADAJQABABAEABQAFACACgCIAAAA").cp();
	this.shape_34.setTransform(-0.3,-5.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("AAHAPIgEgDQgBgCABgKQAAgFgBgDIAAgBIgBgBQgBgEgBgHQgBgIAAgDQACAEAAAJQAAAGACACIACABQABADgBAJQgBAKAEACIAAABAAOA3IgBAAIgBABQgDgFAAgJQAAgFABgLQAAgTgDgJQgFgUgCgGQgDgPgHgIQAAgBAAgBIgBAAQgBgGgDgKQATAVAJAiQAGAWgEAPQgBAEgBAPQABAIAAAFIAAAAAAEAzIAAAAQgBACgCADQACgGACgNQABgFgDgKQAGANgFAOIABgBIACABIgDACAAFA8QgCACABAEQAAADABAAIgBABIgCgCQAAgGACgEIAEADIAAACIgCACQAAgBABgCIgCgCAgEgZQgEgDACgNQACAKABAFIgBAB").cp();
	this.shape_35.setTransform(-0.3,-9.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DADADA").s().p("AALAtIABAAIgBABIAAAAQABAFACABIAAAAQgCABgBABQgCADAAADQgDgDgGAEQAAABgCAAQACgJAAgnQgCgugLgKQACgJgCgLQAHAJAFAOQABAGAEAUQADAMAAARQAAALAAAFQAAAJADAFIABgCIAAABAAEAFIABgBQgFgDABgHQABgMgBgCIgBgCQgBgCgBgFQgBgKgCgDQAAADABAHQACAHACAEIAAABIAAABQAAADAAAIQAAAIAAABIAEAEAACAyIADABQgCACAAACIADgDIgBgBIgEgDQgBADAAAGIABADIACgBQgCgBAAgCQgBgEACgCIAAAAAABApIAEgDIgCgBIgCACQAGgOgHgOQADALAAAEQgDAOAAAGQAAgDABgCIAAAAAgHgkIABgBQgBgFgCgKQgCAOAEACIAAAA").cp();
	this.shape_36.setTransform(0,-8.4);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-17,4.1,22.2);


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
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4,1,1).p("AA9hYIgyC6AgEBiIgNgtAgXAeIglh/");
	this.shape_37.setTransform(-0.2,-7.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgZA2Iglh/IARgEQAAgDABgCQgFgHgBgLQAAgSALgGIAdAAQACACACACQABgCACgCIAXAAQABAAAmAHQAEAFAAAKQAAAIgFAHQgEAFgGADQABADACACQADAGAFAFIgyC5QAAAAgBAAQgIAAgFAAIgNgtQgGAWgHAWQgCAAgFADQgDgCgBgCQgBgCAAgEQAAgIARgwQAAgCABgCIAAAA").cp();
	this.shape_38.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(5));

	// Background
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AHLiqQBAAEAlACQAKABBKARIBEAAQAFgBATgDQAUgDAIAAQBMAAA2A8QA4A9AABbQAAAlhAAWQhIAZiSADIiNAAQgMgDgNgBIhiAAQgvADgEABIhqABQgIABgBABIhAABQghAFgDABIhyABQgHABAAABIhfAAQgPgKgTACQgdADgPgCIjBAAQgIABgHAKQgFAIgfAAQggAAgYgGIi9gBQg9gHgtgHIhwgBQgkgGgZgpQgZgnAAgzQAAghACgIQAFgUAXgdQAJgNAIgJQAOgRASgGQAbgJAjgJQAlgKAPgEIAHACIC5AAQADACAYAEQAXAEAIAAQAIAAAQgCQASgDAJgCIBWgBIAJgCICwAAIAIACIBLAAQADAAA7gFQA4gEAHgDICTAAQAGABADADQAEADAKADICgAAQASgFAjgEQAkgEAQgEIAAAA").cp();
	this.shape_39.setTransform(-1.6,-34.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AIFjRQALACAkAMQAtAKBEAAQAWAAAbgDQAagDALAAQB5AAA7BaQAtBEAABcQAAAyhCAjQhUAtikgFIiYAAQgWgDgEgBIhXAAQgwACgHACIhkABIgHACIhEAAIgjAHIhzABIgHACIhsAAQgFgBgJgCQgPgDgugBIirAAQgDABgKAJQgPAJglAAQgkAAgcgHIi+AAQgtgKgSgCQgjgCgFgBIh1AAQglAHgggnQgVgYgJgcQgOgngCgMQgBgFAAglQAAguABgDQAEgWAbgkQAKgRAIgJQANgPAZgNQAIgEAOgEQAQgFAQgHQAGgCADgKQADgIAOgDIBBAAQAIABABABIC4ABQA4AJAAAAIApgHIBdgBQAAAAAHgBIC5AAQAIABABAAIBCAAQAFgDA0gDQBAgFAFAAICYAAQAXAGAEADICWAAQAFgBAngHQAqgHAPgBIAAgBIBBAAAHLirQgQAEgkAFQgjAEgSAEIigAAQgKgCgEgEQgDgDgGAAIiTAAQgHACg4AFQg7AEgDABIhLAAIgIgCIiwAAIgJACIhWAAQgJADgSACQgQACgIAAQgIAAgXgDQgYgEgDgCIi5gBIgHgCQgPAFglAJQgjAKgbAJQgSAGgOAQQgIAJgJAOQgXAdgFAUQgCAIAAAhQAAAyAZAoQAZAoAkAHIBwAAQAtAIA9AHIC9AAQAYAHAgAAQAfAAAFgJQAHgJAIgBIDBAAQAPACAdgDQATgCAPAKIBfAAQAAgBAHgBIBygBQADgCAhgFIBAAAQABgBAIgBIBqgBQAEgBAvgDIBiAAQANABAMADICNAAQCSgDBIgZQBAgXAAglQAAhag4g+Qg2g7hMAAQgIAAgUADQgTACgFACIhEAAQhKgSgKgBQglgChAgEIAAAA").cp();
	this.shape_40.setTransform(-1.6,-34.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AJ4jgIC6AAQBhATAZAmQANASAAA4QAAAQgGBNQgGBPgBADQgEAPgEAeQgEAegDAMQgGAdg2AIQhGAGgiAIIoqABQgXACgSAEQgVAFgRADIhjAAQgIgCgVgEQgYgFgFAAIhlgBQgbgGgqgGIhPgBQAAAAgIgBIi5AAQglAGgYACQgWACgNADIhvABIhLgPQgOgDgsgCQgfgBgbgNQgXgMgPgYQgMgTgFgUQgFgUgKgyQgNg9AAgSQAAg0ANg6QAFgXAHgHQAOgNAngFQAJgBAsgQQAlgOAtAAQBEAAAwAGQAwAGAjAAQA8AAA0gJQAsgLAJgCQA/gBAGACQgBADALADIDAABQAVABAMADQAJACADABIA/AAQAzgMAQACQAIAAAFADIA/gBQAEgBAVgCQATgBAGAAQAgAAAIACIEFAAIAJACIB0ABIAJAC").cp();
	this.shape_41.setTransform(-0.9,-41.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AJ8jhIgJgCIh0AAIgJgCIkFgBQgIgCggAAQgGAAgTACQgVABgEACIg/AAQgFgCgIgBQgQgCgzAMIg/AAQgDAAgJgDQgMgCgVgCIjAAAQgLgDABgEQgGgCg/ACQgJACgsAKQg0AKg8AAQgjAAgwgGQgwgGhEAAQgtAAglANQgsARgJABQgnAEgOANQgHAIgFAWQgNA6AAA0QAAASANA9QAKAzAFATQAFAVAMASQAPAZAXALQAbANAfABQAsACAOADIBLAPIBvgBQANgCAWgCQAYgCAlgHIC5AAQAIABAAABIBPABQAqAFAbAGIBlABQAFABAWAEQAXAFAIACIBjAAQARgDAVgGQASgEAXgBIIqgBQAigIBGgGQA2gJAGgcQADgNAEgeQAEgdAEgQQABgDAGhOQAGhOAAgPQAAg4gNgTQgZglhhgTIi6gBAIGkKIB2ABQAHABAAABIC8ABQB7AiAcAsQAMARABAZQgBAfAAAQQAAAXgHBVQgGBQgCAJQgEAggDARQgFAfgKATQgPAeg4ALQhKAIgsAIIomABQgUAFgSACQgTADgUAEIhzAAIg6gMIhkAAIhGgMIhOgBIgHgCIiuAAQgSAEhOALIh7AAQgrgLg3gIQgGgBgxgIQgxgIgJgHQgagSgSgcQgPgWgHgYQgDgKgQglQgMgdgCgQQgFgdACg7QAAhkAkgsQAkgtBlgWIB9AAQCFAOAIAAQBEAAA5gKQAugKAGgBIAAAAIBGAAQAQACAHAEIDAABQAWAFAGABQAHABAiAAQBEgBAkgGIA9gBQAQgDAIgBIBIAAQAHABABABIEJABQAHABAAAAIAAAA").cp();
	this.shape_42.setTransform(-1.3,-41.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AFLk8IAIACIHTAAQBRgDAmBFQAZAtAAAxQAAATgFAlQgFAmAAASQAAAVADAJIAADOQAHAqgzArQg4AwhXAIIhBgBQg1gEgnADQgfAEgHABIhxAAQgdgGgFAAQgbgEg1gHIidAAQgVAGgQAFQggAIgbAAQgjAAhagLIjXAAIgbAEIlWAAQgzgKg4gFQgFgBhEgGQgygEgLgGQgagPgRgaQgJgPgNgfQgNgjgCiVQAAg8ABgVQACgoAIg0QANhSADgIQAVgzBGglQAggCA4gNQAegHAnALICDABQAJACA6ADQAyADAZAJICnAAIAJgCICzgBIAIgCIB1AAIAIgCQAGAAALAEIDjAB").cp();
	this.shape_43.setTransform(-2.6,-51.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AFLk8IjjAAQgLgFgGAAIgIACIh1ABIgIACIizAAIgJACIinAAQgZgJgygDQg6gDgJgCIiDAAQgngMgeAHQg4ANggACQhGAlgVAzQgDAIgNBTQgIA0gCAoQgBAVAAA8QACCVANAiQANAgAJAPQARAZAaAQQALAGAyAEQBEAGAFABQA4AFAzAKIFWAAIAbgEIDXAAQBaALAjAAQAbAAAggIQAQgFAVgGICdAAQA1AHAbAEQAFAAAdAGIBxAAQAHgBAfgEQAngEA1AFIBBABQBXgIA4gwQAzgsgHgpIAAjOQgDgKAAgUQAAgTAFglQAFgmAAgTQAAgxgZgtQgmhFhRAEInTgBIgIgCABclnQAPAAAFADIDeACQAHABABABIHWABQBjgCAvBUQAeA2AAA7QgIDTAAAlQADAvgBAbQgBAygOAkQgqBmijAVIhGAAQgDgBgagCQgagCgFAAQg5AEgLADIh1AAQgkgFgIgEQgUgNgPAGQgSAHgYgIIiOAAQgRAFgSAFQgkAKgdAAQg+AAhJgMIjHAAQgEABgZADIljAAQgggEhkgIQhcgKgogUQgegQgSgeQgKgQgNgmQgMgkgGijQAAhBADgcQACgXAKhjQAMhCAOgrQAHgZBBgbQBGgaAPgIIClAAQATAEBqAIQBaAGAPAJICbAAQABgBAHgBIC0gBQAAAAAHgBIB1gBQACgCARAAIAAAA").cp();
	this.shape_44.setTransform(-2.6,-52);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AGCmqQAbAEAQAEIBpAAQAZgHAcgDIDKAAQALAFAwASQAvATAWAUQAPAOAKAXQAGANAHAZIAACSQADAMAAAUQAAAcgBAFQgBAPgGAWIAABqQgDATgOA7QgFAYAAAmQAAAeAMAiQAMAiAAAHQAAAehMAuQhVAzhGgOIjUABQgHAAgHAEQgIAGgEACIhwAAQgYgEgXgDQgrgFgOgCIg/gBQAAgBgHgBIhpAAQgSADgBABIhJAAQg6gNifgVQgHAAgNAKQgQALghAEQgIABhIANIhJAAQgFAAglgOQgpgMgdAAQgfAAgqAJIhMAAQgBgBgIgBIhKgBQh9gEgfinQgLg7gBhZQAAgyAChVQAAgFgHg+QgEhHALg5QAii2CvAAQAhAAAGACIBBAAQAmADAHACIDUAAIAKgCIB2gBIAJgCICmAAQAigHAIgDIBfAAIAIACIEeABQACAAAdAEIAAAA").cp();
	this.shape_45.setTransform(-3.9,-59.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AF/mqQgcgEgCgBIkeAAIgJgCIheAAQgJACgiAHIilABIgKACIh2AAIgKACIjUAAQgHgCgmgCIhBgBQgGgCggAAQivAAgjC2QgLA6AEBHQAHA+AAAEQgCBWAAAxQACBaAKA7QAfCnB9AEIBKABQAIABABABIBMAAQAqgJAfAAQAdAAApAMQAlANAFABIBJAAQBIgNAIgBQAhgEAQgMQAOgJAGAAQCfAVA6ANIBKAAQABgBARgDIBpAAQAHABABABIA+ABQAPABArAFQAWAEAYAEIBxAAQADgDAIgGQAIgEAHABIDTgBQBHAOBUgzQBMguAAgeQAAgHgMgjQgMgiAAgeQAAglAGgZQANg6AEgUIAAhqQAGgVABgQQAAgFAAgcQAAgUgCgMIAAiRQgIgZgFgNQgLgXgPgOQgVgUgwgUQgwgRgKgFIjLAAQgbACgZAHIhpAAQgQgDgcgEIAAAAABKnWIEYABQABAABJAMIBfAAQAOgEAtgFIDUAAQBRAcA7AtQBBAygJAoIAACUQADAOAAAeQAAAjgFAXIAADrQgGAhAAAKQAIA/AAAHQAAAwhFA3QhUBDhzgFIjPAAQgKAJgQADIh4AAQgcgCgggFQgagFgBAAQgigEg5gBIhhAAIgRAFIhWAAQgtgLibgVQgCAAg6APQhAARgfAFIhQAAQgPgEgkgMQgkgLgaAAQgSAAgxAJIhYAAIgHgCIhJAAQhLgKglgjQgVgUgdgtQgWgZgGglQgEgWgBgsQgIhVAFirQAAgygBhbQAAhKAOgtQAkh1CigmIBIAAQAIABABABIA9ABQApACAFACIDRAAQAAAAAIgCIB4gBQAAAAAIgBICigBQAegEANgFIBsAAQAHABAAAAIAAAA").cp();
	this.shape_46.setTransform(-3.6,-59.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("APElXQgEAbgEAdQgKA5AAAnQAAAPAFAiQADAhAAANQAAAagIAuQgKAuAAAdQAAAOAFA2QADA1AABCQAACJgrBAQg6BYicAAQgRAAgjgPQgjgQg9AAQgoAAgdAKQgeAJgjAAQgdAAgYgKQgYgLgYAAQhRAAgiARQgSARgJAAQgVAAgKgDQgHgDgGgBIhqgBQgUgFgYgFQgxgJgoAAQgmAAgBACIiCABQgmADgHACIhAABQg6AAgNgDQgMgDggAAQgRAAgsAHQgrAHgMAAQgOAAgLgCQgIgCgPgDIhvgBQgaABgZgUQgGgFgWgXQgCgEgcgYQgZgVgFgKQgagwgFgPQgEgPAAgnQAAAAAFhaQAFhfAAgXQAAglgEhOQgDhPAAgnQAAh8AShHQAmiSBugHIBWAAQAsgEAzgJQAvgHAxgFIBoAAQAdAKAYAFQAoAIBKAAQAeAAAYgIQAUgHBBAEIBGAAIAWgEIBgAAQAOAFANACQAUADASAFIBfAAQBWgKATgFIBeAAQAJAACLAKQAFAAAlAKQAjAKAVAAQARAAAZgJQAagJAgAAQAvAAA8AuQBHA2AABAIAAAA").cp();
	this.shape_47.setTransform(-1.8,-70.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("APElXQAAhBhHg1Qg8gugvAAQggAAgaAJQgZAIgRAAQgVAAgjgJQglgKgFAAQiLgKgJAAIheAAQgTAFhWAJIhfAAQgSgEgUgDQgNgCgOgFIhgAAIgWAEIhGAAQhBgEgUAHQgYAHgeAAQhKAAgogIQgYgEgdgKIhoAAQgxAEgvAIQgzAJgsAEIhWAAQhuAHgmCRQgSBIAAB8QAAAnADBPQAEBNAAAmQAAAWgFBfQgFBaAAABQAAAnAEAPQAFAPAaAwQAFAKAZAVQAcAYACADQAWAYAGAFQAZAUAagBIBvABQAPADAIABQALACAOAAQAMAAArgHQAsgHARAAQAgAAAMADQANADA6ABIBAgBQAHgDAmgDICCgBQABgBAmAAQAoAAAxAJQAYAEAUAGIBqABQAGABAHADQAKACAVAAQAJAAASgRQAigRBRAAQAYAAAYALQAYALAdAAQAjAAAegKQAdgJAoAAQA9AAAjAPQAjAPARAAQCcAAA6hYQArg/AAiJQAAhDgDg1QgFg1AAgOQAAgeAKgtQAIguAAgaQAAgNgDgiQgFghAAgQQAAgmAKg5QAEgdAEgbIAAAAAPplXQAAALgIA6QgJA7AAAYQAAAlAEALQADALAAAjQAAAagIA9QgJA7AAABQAAATADAdQAEAtAAADQACAUAAAlQgCAjAAADQAABCgBATQgEAugUAqQgZA3gfAeQhKBDiJAAQgmAAgagQQgagQg8AAQgiAAgcAKQgcAJg4AAQgUAAgcgLQgdgLgNAAQhGAAgYASQgYARgfAAQgTAAgNgEQgJgDgBAAIhqgBQhNgTgzAAQgYAAgJACIiHAAQgYAEgQADIhJAAQgDgBgdgBQgfgCgDAAQgBAAgPgDQgtAAgnAIQgoAHgWAAQgcAAgHgDQgEgBgIgDIh1gBQglgCgegWQgWgPgLgSQgGgIgcgYQgagXgFgMQgeg9gEgMQgGgUAAgqQAAgOAFhUQAFhUAAgdQAAgDAAgrQgBgsgCgZQgBgLgCgqQgCgsAAgSQAAiRAUhJQAsiZCGgRIBXgBQAjgDA7gJQAwgIAugDIAAgBIB1AAQAmAKAVAFQAlAHA/AAQAZAAASgFQAUgGAGgBIBGAAQAqAGAIAAQASgEAZgEIBpAAQACAAA9AOIBWAAQAugKA3gEIBsAAQAVADAXAEQAUADA4AAQAeAAARACQAfADANALQAVABALACQAFAAAGgLQAGgKAKACIBcAAQBlAWA0BFQAoA1AAA8IAAAA").cp();
	this.shape_48.setTransform(-1.8,-70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-55.2,197.7,58.2);


(lib.mcCharScreen_bg = function() {
	this.initialize();

	// Layer 1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#523D83").s().p("EAvWgVuMherAAAQh5AAhVBVQhVBVAAB5MAAAAiXQAAB5BVBVQBVBVB5AAMBerAAAQB5AABVhVQBVhVAAh5MAAAgiXQAAh5hVhVQhVhVh5AAIAAAA").cp();
	this.shape_49.setTransform(0,-139.1);

	this.addChild(this.shape_49);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.1,-278.2,664.3,278.3);


(lib.Border = function() {
	this.initialize();

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("EB0QA/RMjofAAAMAAAh+hMDofAAAMAAAB+h").cp();
	this.shape_50.setTransform(744,405);

	this.addChild(this.shape_50);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1488,809.9);


(lib.TextInput_upSkin = function() {
	this.initialize();

	// skin
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_51.setTransform(76,11);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D3D5D6").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_52.setTransform(76,21.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6D6F70").s().p("ALzgEIAAAJI3bAAIgKAAIAAgJIXlAA").cp();
	this.shape_53.setTransform(75.5,0.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C9CBCC").s().p("ALuhjIAAgKIAKAAIAADbIgKAAIAAgKIAAjHArtBkIAAAKIgKAAIAAjRIAKAAIAADH").cp();
	this.shape_54.setTransform(76,11);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextInput_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.298)").s().p("ALuhjIAADHI3bAAIAAjHIXbAA").cp();
	this.shape_55.setTransform(76,11);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(211,213,214,0.298)").s().p("ArtAFIAAgJIXbAAIAAAJI3bAA").cp();
	this.shape_56.setTransform(76,21.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(109,111,112,0.298)").s().p("ALzAFI3bAAIgKAAIAAgJIXlAAIAAAJ").cp();
	this.shape_57.setTransform(75.5,0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(201,203,204,0.298)").s().p("Ar3hjIAKAAIAADHIAAAKIgKAAIAAjRALuhtIAKAAIAADbIgKAAIAAgKIAAjHIAAgK").cp();
	this.shape_58.setTransform(76,11);

	this.addChild(this.shape_58,this.shape_57,this.shape_56,this.shape_55);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_upSkin = function() {
	this.initialize();

	// skin
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ArtBkIAAjHIXbAAIAADHI3bAA").cp();
	this.shape_59.setTransform(76,11);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6D6F70").s().p("AryAFIAAgJIXlAAIAAAJI3bAAIgKAA").cp();
	this.shape_60.setTransform(75.5,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D3D5D6").s().p("ALuAFI3bAAIAAgJIXbAAIAAAJ").cp();
	this.shape_61.setTransform(76,21.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C9CBCC").s().p("ALuBkIAAjHIAAgKIAKAAIAADbIgKAAIAAgKArthjIAADHIAAAKIgKAAIAAjRIAKAA").cp();
	this.shape_62.setTransform(76,11);

	this.addChild(this.shape_62,this.shape_61,this.shape_60,this.shape_59);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.298)").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_63.setTransform(76,11);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(211,213,214,0.298)").s().p("ALuAFI3bAAIAAgJIXbAAIAAAJ").cp();
	this.shape_64.setTransform(76,21.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(109,111,112,0.298)").s().p("AroAFIgKAAIAAgJIXlAAIAAAJI3bAA").cp();
	this.shape_65.setTransform(75.5,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(201,203,204,0.298)").s().p("ALuBkIAAjHIAAgKIAKAAIAADbIgKAAIAAgKAr3hjIAKAAIAADHIAAAKIgKAAIAAjR").cp();
	this.shape_66.setTransform(76,11);

	this.addChild(this.shape_66,this.shape_65,this.shape_64,this.shape_63);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6633CC").s().p("AGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiLAGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_67.setTransform(41,11);

	this.addChild(this.shape_67);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_68.setTransform(3.5,2);

	this.addChild(this.shape_68);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_69.setTransform(0.5,74);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#94999B","#E7E7E7"],[0,1],-6.4,7,7.5,6.8).s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_70.setTransform(7.5,74);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_71.setTransform(14.5,74);

	this.addChild(this.shape_71,this.shape_70,this.shape_69);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3DbQAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAG1").cp();
	this.shape_72.setTransform(6.5,26);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_73.setTransform(7,49.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_74.setTransform(7,23.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_75.setTransform(14.5,26);

	this.addChild(this.shape_75,this.shape_74,this.shape_73,this.shape_72);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_76.setTransform(14.5,26);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_77.setTransform(7,49.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_78.setTransform(7,23.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3jbIAAG2QAAAegdABIhQAAIAAnzIBQAAQAdABAAAdIAAAA").cp();
	this.shape_79.setTransform(6.5,26);

	this.addChild(this.shape_79,this.shape_78,this.shape_77,this.shape_76);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).s().p("AAaj4QAdABAAAdIAAG1QAAAegdABIhQgBIAAnyIBQAB").cp();
	this.shape_80.setTransform(6.5,26);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_81.setTransform(7,49.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_82.setTransform(7,23.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_83.setTransform(14.5,26);

	this.addChild(this.shape_83,this.shape_82,this.shape_81,this.shape_80);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_84.setTransform(2.5,2.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_85.setTransform(2.5,0.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_86.setTransform(2.5,4.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_87.setTransform(2.5,6.5);

	this.addChild(this.shape_87,this.shape_86,this.shape_85,this.shape_84);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_88.setTransform(7.5,4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("ABLhFIiVAAIAACLICVAAIAAiLAhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_89.setTransform(7.5,7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_90.setTransform(7.5,7);

	this.addChild(this.shape_90,this.shape_89,this.shape_88);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_91.setTransform(7.5,4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3ABLhFIiVAAIAACLICVAAIAAiL").cp();
	this.shape_92.setTransform(7.5,7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_93.setTransform(7.5,7);

	this.addChild(this.shape_93,this.shape_92,this.shape_91);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.List_skin = function() {
	this.initialize();

	// Layer 2
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CCCCCC").s().p("AUou/QASAAAOANQANANAAATIAAdNQAAABgCACQgBACgCAAMgqfAAAQgCAAgBgCQgCgCAAgBIAA9NQAAgTANgNQANgNATAAMApPAAAAVBurQgLgKgOAAMgpPAAAQgPAAgKAKQgKAKAAAPIAAdIMAqVAAAIAA9IQAAgPgKgKIAAAA").cp();
	this.shape_94.setTransform(136.5,96);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AVBurQAKAKAAAPIAAdIMgqVAAAIAA9IQAAgPAKgKQAKgKAPAAMApPAAAQAOAAALAKIAAAA").cp();
	this.shape_95.setTransform(136.5,96);

	this.addChild(this.shape_95,this.shape_94);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,192);


(lib.CellRenderer_upSkin = function() {
	this.initialize();

	// border
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],67.5,-9.8,67.5,3).s().p("ArtBhIAAADIXbAAIAAgDIAKAAIAAANI3vAAIAAgNIAKAAArthjIgKAAIAAgKIXvAAIAAAKIgKAAI3bAA").cp();
	this.shape_96.setTransform(76,11);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B7BABC").s().p("Ar3hhIAKAAIAADDIgKAAIAAjDAL4BiIgKAAIAAjDIAKAAIAADD").cp();
	this.shape_97.setTransform(76,10.9);

	// fill
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_98.setTransform(76,11);

	this.addChild(this.shape_98,this.shape_97,this.shape_96);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedUpSkin = function() {
	this.initialize();

	// border
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("Ar3hgIAAgNIXvAAIAAANIgKAAIAAgDI3bAAIAAADIgKAAALuBkIAKAAIAAAKI3vAAIAAgKIAKAAIXbAA").cp();
	this.shape_99.setTransform(76,11);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B7BABC").s().p("ALuBiIAAjDIAKAAIAADDIgKAAAr3hhIAKAAIAADDIgKAAIAAjD").cp();
	this.shape_100.setTransform(76,11.1);

	// fill
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_101.setTransform(76,11);

	this.addChild(this.shape_101,this.shape_100,this.shape_99);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedOverSkin = function() {
	this.initialize();

	// highlight
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_102.setTransform(76,6.5);

	// fill
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.749)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_103.setTransform(76,11);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("AL4htIAADbI3vAAIAAjbIXvAAALuBkIAAjHI3bAAIAADHIXbAA").cp();
	this.shape_104.setTransform(76,11);

	// border
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_105.setTransform(76,11);

	this.addChild(this.shape_105,this.shape_104,this.shape_103,this.shape_102);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDownSkin = function() {
	this.initialize();

	// border
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_106.setTransform(76,11);

	// fill
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_107.setTransform(76,11);

	this.addChild(this.shape_107,this.shape_106);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDisabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.2)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_108.setTransform(76,6.5);

	// fill
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_109.setTransform(76,11);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("AL4htIAADbI3vAAIAAjbIXvAAALuBkIAAjHI3bAAIAADHIXbAA").cp();
	this.shape_110.setTransform(76,11);

	this.addChild(this.shape_110,this.shape_109,this.shape_108);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.CellRenderer_overSkin = function() {
	this.initialize();

	// border
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_111.setTransform(76,11);

	// fill
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_112.setTransform(76,11);

	this.addChild(this.shape_112,this.shape_111);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_downSkin = function() {
	this.initialize();

	// border
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_113.setTransform(76,11);

	// fill
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_114.setTransform(76,11);

	this.addChild(this.shape_114,this.shape_113);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_disabledSkin = function() {
	this.initialize();

	// border
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_115.setTransform(76,11);

	// fill
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.298)").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_116.setTransform(76,11);

	this.addChild(this.shape_116,this.shape_115);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImOAAIAAhPQgBgeAfABIFwAAIAABs").cp();
	this.shape_117.setTransform(21,6.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).s().p("AjHA3IAAhsIFwAAQAegBAAAeIABBPImPAA").cp();
	this.shape_118.setTransform(61,6.5);

	// fill
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_119.setTransform(21,11);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBkIAAjHIFxAAQAcABAAAdIAACLQAAAdgcABIlxAA").cp();
	this.shape_120.setTransform(61,11);

	// border
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADNhtIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAA").cp();
	this.shape_121.setTransform(20.5,11);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_122.setTransform(61.5,11);

	this.addChild(this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_123.setTransform(52,11);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_124.setTransform(21,11);

	// border
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_125.setTransform(20.5,11);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_126.setTransform(52.5,11);

	this.addChild(this.shape_126,this.shape_125,this.shape_124,this.shape_123);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_127.setTransform(21,11);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_128.setTransform(52,11);

	// border
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_129.setTransform(20.5,11);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_130.setTransform(52.5,11);

	this.addChild(this.shape_130,this.shape_129,this.shape_128,this.shape_127);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_131.setTransform(21,11);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_132.setTransform(52,11);

	// border
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_133.setTransform(20.5,11);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_134.setTransform(52.5,11);

	this.addChild(this.shape_134,this.shape_133,this.shape_132,this.shape_131);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_135.setTransform(21,11);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_136.setTransform(52,11);

	// border
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_137.setTransform(20.5,11);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_138.setTransform(52.5,11);

	this.addChild(this.shape_138,this.shape_137,this.shape_136,this.shape_135);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImPAAIAAhPQAAgeAeAAIFxAAIAABt").cp();
	this.shape_139.setTransform(21,6.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_140.setTransform(61,6.5);

	// fill
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_141.setTransform(41,11);

	// border
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNBkIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAA").cp();
	this.shape_142.setTransform(20.5,11);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_143.setTransform(61.5,11);

	this.addChild(this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape_144.setTransform(41,11);

	// border
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiLAGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_145.setTransform(41,11);

	this.addChild(this.shape_145,this.shape_144);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImPAAIAAhPQAAgeAeAAIFxAAIAABt").cp();
	this.shape_146.setTransform(21,6.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_147.setTransform(61,6.5);

	// fill
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIhjIAADHIlyAAQgdgBABgdIAAiLQgBgdAdgBIFyAA").cp();
	this.shape_148.setTransform(21,11);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBkIAAjHIFyAAQAdABAAAdIAACLQAAAdgdABIlyAA").cp();
	this.shape_149.setTransform(61.1,11);

	// border
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNBkIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAA").cp();
	this.shape_150.setTransform(20.5,11);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_151.setTransform(61.5,11);

	this.addChild(this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.149)"],[0,1],39.5,1.6,39.5,-4.8).s().p("AGQA3IseAAIgBhPQAAgeAeABILiAAQAegBAAAeIABBP").cp();
	this.shape_152.setTransform(41,6.5);

	// fill
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_153.setTransform(41,11);

	// border
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMhtIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAKIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAA").cp();
	this.shape_154.setTransform(20.5,11);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_155.setTransform(61.5,11);

	this.addChild(this.shape_155,this.shape_154,this.shape_153,this.shape_152);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s("#000000").ss(0.1,1,1).p("AGQBuIsfAAIAAjbIMfAAIAADb").cp();
	this.shape_156.setTransform(40,11);

	this.addChild(this.shape_156);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.Trilby = function() {
	this.initialize();

	// Hat
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#999999").s().p("ABHgOQABAGAAAHQAAABgYAIIgZABQgNADgPACQgEAAgCABQgLgCgNgDQgHgBgdgGQABgDAAgCQABAAADABQATABACAAIAtAAIAAAAIAdAAQAGAAATgFQAOgFADgEIAAAA").cp();
	this.shape_157.setTransform(-0.5,3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AA0gpQAGAIAAAPQAEAMADAKQAAABAAABQgEgCgMADQgVAJgHACIgcAAIgDABIglAAQgPgEgNAAQAAgWAAgFQADgMAOgNQAXgTAlAAQAnAAALAPIAAAAAhYAWQACAAABgBQAAAFABAEQgLgCgFAAQAAgCAMgEIAAAAAgrAwIAnAHQABAAAFACIgxAAQgFgCgUABQgQAAgFgIQgEgFgBgFQADACAGABQAaAEAUADIAAAAABNAYQAAgBAAgEQAYAQAAAFQAAAGgeAHIggAAQgIAAgQgDQADgBACgCIAagBQAOAAAJgIQAIgHAAgHIAAAA").cp();
	this.shape_158.setTransform(0,0.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AA0gpQgLgPgnAAQglAAgXATQgOANgDANQAAAEAAAWQANAAAPAFIAlgBIADgBIAcAAQAHgBAVgJQAMgEAEACQAAgBAAAAQgDgLgEgMQAAgPgGgIIAAAAABDgYQAAADAFAVQACAFABAGIAIAAQAKAIAMAIQAGAFAAAJQAAAIgJAGQgLAIgSAAIggAAQgCABgOADIhKAAQgDgBgXgBQgYgEgEgJQgEgIgCgFQgBgCAAgJQAAgLARgFQAFgBADgBQAAgCAAgBQAAgfAKgLQAWgVAXgGQAMgEAVAAQAaAAARAIQAXALgCAXIAAAAABCANQgDAEgOAFQgTAHgGgBIgcAAIgBABIgtAAQgCAAgTgDQgDgBgBAAQAAAEgBADQAdAGAHABQANADALACQACgBAEAAQAPgCANgDIAZgBQAYgJAAgCQAAgIgBgFIAAAAABNAZQAAAGgIAHQgJAIgOAAIgaABQgCACgEABQARADAIAAIAgAAQAegHAAgGQAAgFgYgQQAAAEAAACIAAAAAgrAwQgUgDgagEQgGgBgDgCQABAFAEAFQAFAIAQAAQAUgBAFACIAwAAQgEgCgBAAIgngHAhYAWQgMAEAAACQAFAAALACQgBgEAAgFQgBABgCAAIAAAA").cp();
	this.shape_159.setTransform(0,0.2);

	this.addChild(this.shape_159,this.shape_158,this.shape_157);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-6.5,22.3,13.4);


(lib.GasMask = function() {
	this.initialize();

	// Mask
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#666666").s().p("AAggSQAAAEgDAIQgCAGAAADQAAAQgfABQACgFgFgCQgHgDgEgCQgDgBgIgHIgCAAQAAAAAAgBIAAAAQAHgBAEgDQAHgGALgCQACAAAYgFQAEAAADgBIABAB").cp();
	this.shape_160.setTransform(3.2,6.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#999999").s().p("AAugSQAAADACADQADAMAEAHQgRAGgDABQgHABgYAEQgFABgKAHQgLAIgEABIgQAAQgEgKgFgLQgDgEAAgKQAAgKANgGQADgCACgBQAHgEABgDQACAAABAAQARAAAJgJQAAAAABgBQACACAIADIAbABQAEAEADAHIAAAA").cp();
	this.shape_161.setTransform(6,12);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAqgZIABgBQACAFAEAIQADAJAAAEQAAANgHALQAAgCgBgCQgGgOAAgKIAAgNQAAgDAEgFIAAAAAAGgHQACABAAAGQAAAGgEAHQgHAOgXAAQgZAAAAgZQAAgIAFgFQAIgIAbgDQAKAKAHAFIAAAA").cp();
	this.shape_162.setTransform(1,-4.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAmh8QAEATACAHQACAGAJAIQAKAIACAEQADAMABACQAAABAAAKQAAAMgIAQIgIAOIAMAjQAEABACAEQAAABAAAHQAAAFgCAHQgCAHAAAIQAAABAAABQADACADADIAdABQAFAFAGARQAFALAFAQQAAAHgKAEQgSAFgOAEQgRAEgSAJQgNAGgLAAQgSAAgEgJQgBgKgBgEQAAgCgBgJQgBgJAAgCQAAgOACgFQABgBACgBQAJgGAFgEQgCgBAAgBQgBgGgFgDQgJgDgEgDQgEgCAAgFQAAgCABgCIgBAAQAAAAAAgCQAAAAAAgBQgjgCghgdQgZgWgFgMQgOgjgCgKQgCgIAAgcQAAgzA4gTQA0gSAcAaQATAIAHARIAAAAAAHiMIgJgIQgLgFgWAAQgYAAgHAFQgGAGgHADQgTAJgEAGQgKANgCAIQgBAEAAANQAAAXAEAMQAAABAPApQACAJAaAVQAhAcAdAAIAAgLQAGgGAAgBQACgEAEADQABgBAAADQAAABgFAEQgCAEAAACQAAADAAADQABgBABgCQAEgEAFgCQAFgBAlgEQABgBABAAQAAAAAAgBQAAgKgEgMQgFgLAAgFQAAgCACgCQgGgGgDgPQgBgLABgMIAAgTQAAgDABgBQgDgBgBgCQgBgCADgDQAAgBgJglQgBgEgGgEQgJgFgGgFIAAAAAAHiFQAAABgoAKQgFAAgBgCIAAgBQAAgEAUgEQAQgCAJAAQABgBAAADIAAAAAA0hKQgEAFAAADIAAANQAAANAGAOQABACAAACQAHgMAAgNQAAgFgDgJQgEgIgCgFIgBAAAAahsQgLgBgCAAQgCgCgEgCIgKAAIgMAIIgCgBQgCgBAAgBQAAgEAHgDQAHgEAHAAQAHAAAEACQAHACAGABIADAEIgDACAAWhCQAGAFAAAOQAAAlgmAAQgcAAgJgPQgDgGAAgNQAAgPACgCQAEgHAWgMQASgJANAPIANAIAAQg4QgJgFgIgJQgbACgIAIQgFAFAAALQAAAYAZAAQAVAAAJgNQAEgIAAgHQAAgGgCgCIAAAAABqBkQgDgHgDgFIgcgBQgHgCgCgCQgBABgBAAQgKAIgRAAQgCAAgBAAQgCADgGAFQgCABgDACQgNAGAAALQAAALACAEQAGAKADAKIARAAQADgBAMgHQAJgHAIgBQAYgEAHgCQADAAAQgHQgEgHgDgNQgBgDgBgDIAAAAABAArIAAgBQgDABgEAAQgaAEgDABQgKACgIAGQgEADgGAAIAAABQAAABAAABIACABQAHAGAEABQADACAHADQAFADgCAEQAhgBAAgPQAAgEADgIQACgIAAgDIAAAA").cp();

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AAlhRQAAgDAAABQgLAAgRACQgRAEAAAEIAAABQAAACAFAAQAogKAAgBIAAAAAAmhYQAGAFAJAFQAGAEAAAEQAJAlAAABQgCADABACQAAACADABQgBABAAADIAAATQgBAKACAMQACAPAHAFQgCACAAACQAAAHAEALQAFAMAAAKQAAACgBAAQgBAAAAAAQglAFgFABQgFABgEAEQgBACgCABQgBgDAAgDQAAgCAEgEQAEgEAAgBQAAgCAAAAQgEgDgFAFQAAAAgFAHIAAALQgcAAghgcQgagXgCgKQgPgpAAAAQgEgLAAgXQAAgNABgDQACgJAKgNQAFgGASgJQAIgDAFgGQAIgFAXAAQAUAAALAFIAMAIAA0gOIgNgIQgOgPgTAJQgTAMgFAHQgCADAAAMQAAAOAEAGQAIAPAbAAQAnAAAAglQAAgNgGgFIAAAAAA4g3IADgDIgDgEQgGgBgGgCQgEgCgHAAQgJAAgHAEQgHADAAAEQAAABABABIACABIAMgHIANAAQAEABABACQACAAALACIAAAA").cp();
	this.shape_164.setTransform(-3,-5.2);

	this.addChild(this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-16.5,25.2,33.2);


(lib.BatmanMask = function() {
	this.initialize();

	// Layer 6
	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#666666").s().p("AAXgKQAIAFACAFQAAAAgDAAQgDAAgSgJQAFgIAJAHIAAAAAgYAKQgBADgEABIgDgDQAAgFAEgHQAHgKAJAFQABgBAAADQgMAGAAACQgBAEAAACIAAAA").cp();
	this.shape_165.setTransform(-3.7,-5.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AACgDIAHABQgBAAAAABQgDABgEACQgEAFgMAAQgHAAgJgEIgJgDIgBAAIAAgFIAGAAIAKABIAbABAAiAAQAAgBADgDQACgBABAAQABgBAAAAIAAAEQAAADABAFQgCgBgBgBQgFgCAAgCIAAAA").cp();
	this.shape_166.setTransform(0,-3.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("ABegdQABANACAGQAEAPAAADQgDAHAAACQgBABAAABQgDAEgVAAQgIgCgCAAIgagBQgGgCgLAAQgIAAgBAGQAAABAAAIQgBAGACAEQADAKALAAQAEAAAAgCQAAgCgHgGQgDgCgBgDQARAHAJAAQAKAAAIgGQAFgEABgBIABAAIAEgCQADgCAAgBIADAAQAEAAAFgBQAAABAAACQAAADACADQACAEADACIAAABIAIAQQABAMABAGQgMgBgKgHQgHgFgIAHIAIAEQgtABgIAHQgFALgQAJQAAABAAABQgBABgEAEQgHACgIAHQgNAGgUAAQggAAgCgWQgBgRgFgHQABgCACgCQgFgDAAgFQgBgMgGgPQgGgNAAgKQAAgNAJgTQACgGADgGQABgEADgCIgBAAIAAgBIgBgDQADgHADgMQADgTADgHQAMgbAOgRQACALABAGQABALAFAHQgBABgBABQACABACABQAEAGAEAFQAKAQAFAAQABgBABAAIAAgFQgDgEgLgLQgCgDgCgCIAoAAQAAAAAAAAQAJAAAEgIQAAgBADgLQABgEAEgFIAAABQACgBACgEQABAAABAAQABgBABgBQABgBAAAAQACAAABgBQAEAKADAYQADAZAIAAIAAAAQAFAHAOAKQAPAMACAFIAAAAAgBAVQAAgCABgEQAAgCAKgIQAAgDgBABQgJgDgFAIQgEAJAAAFIADADQAEgBABgDIAAAAAAuAAQgJgGgFAGQASALADAAQADAAAAgCQgCgFgIgEIAAAA").cp();
	this.shape_167.setTransform(-6,-6.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AA9hAQAKADAKAJQAHAGAMAPQACAEAAAGQAAAHACAEQADAJABABQgBADAAAGQABAGgCADIABAAQAAASAAAKQABASAFALIAAAMIgDAAQgPAAgKgFIAAAAQgHAEgTgBQgWgBgKAMIgWAWQgBgBAAgBQgDAEgSAJIgDgBQgLAFgEABIgfAAQgYgEAAgXQAAgKgDgIQgDgGgBgDQgDgDAAgEQgEgTAAAAQgIgLAAgZQAAgPAGgQQAGgOAGgFQgCgCAAAAQAAgXARglQANggAOgGQAEgBADAAQAAgBAAADQAAABgCACQAFAEACAJQACARABADIAAAAQAAACAAADQACAAACAAIAmABIAAAAQAAAAABgBQAEgCAAgEIAGgMQABgBAAgBQACgCACgCQACgDABgCQACgBABgCQACgCABgCIABAAQAAgBABgBQACgDAFgBIAAgBQACAAABAAQABAAABAAIAAABQACABACABQADAEAAAEIAAAEQAAABAAABQgCAOACAEQACAGAEANQAEAMAAACQAAABAAAAIAAAAABdgbQgBgGgQgMQgNgKgFgGIgBAAQgIAAgCgZQgDgYgEgKQgCAAgBABQgBAAgBAAQgBABgBABQAAAAgBABQgCAEgCAAIgBAAQgDAEgCAEQgCAMgBAAQgEAJgIAAQAAAAgBAAIgoAAQACACADACQAKALADAFIAAAFQAAAAgCABQgEAAgLgQQgEgGgDgFQgCgBgCgBQAAgCABAAQgFgIgBgLQAAgGgCgKQgOARgMAaQgEAHgDATQgCAMgDAHIAAAEIAAAAIABABQgDACgBAEQgCAGgDAGQgJATAAAMQAAAKAGAOQAGAOABANQABAEAEAEQgCABAAACQAEAIABARQACAVAhAAQAUAAANgFQAIgIAGgBQAEgEACgBQAAgBAAgBQAQgJAFgMQAIgHAsAAIgHgEQAHgHAHAEQALAHAMABQgBgFgBgMIgJgRIAAgBQgDgBgCgEQgBgDgBgEQAAgBAAgBQgEAAgFAAIgCAAQgBACgDABIgDACIgBAAQgCACgEADQgIAHgLAAQgJAAgQgHQAAADADACQAHAGABACQgBACgDAAQgLAAgDgKQgCgFAAgGQAAgIAAAAQACgGAIAAQALAAAFACIAbAAQACAAAHACQAWAAACgEQABgBABgBQAAgBADgIQAAgCgFgQQgCgFgBgNIAAAAABeAhQAAACAFADQABAAACACQgBgFAAgGIAAgDQAAAAgBAAQgBABgCABQgDADAAACIAAAAAA+AcIgdAAIgKgCIgFAAIgBAHIACAAIAJADQAJAEAHAAQALAAAGgEQAEgFADgBQAAAAABgBIgHgB").cp();
	this.shape_168.setTransform(-5.9,-6.8);

	this.addChild(this.shape_168,this.shape_167,this.shape_166,this.shape_165);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-20.3,22.6,26.9);


(lib.torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAJAAQACBTgFAaQAAACAAACQAAAAABAAQgBABAAADQgBAAAAAAQgBABAAABQgBAAAAAAQgCABgBABQAAAAAAABIgBgBQgBgCgDgBQAAgCgBgBQAAgUgBgZQAAgEAAgFQgBgTABgUQgBgUAAgVQgCgUgFggQgDgnAOgHQACgDACAAQACgBABACQAQACgDArQgHA5AAARIAAAA").cp();
	this.shape_169.setTransform(-0.5,-1.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAGhzIAACKQAEAyAAAaQAAADAAADQABAGAAAFQAAAIgFADIAAAAQgDAAgDABQAAgBAAgBQAAgCgBgBQgHgMgCgyQgBgiABggQAAg6ACgYQAAgQABgOQAAgEAAgDQABgBAAAAQAAgBACgBQABABACAAQABgBAAABQABAAACgBQABACABABIAAAFQAAACABACIAAAA").cp();
	this.shape_170.setTransform(-0.4,-0.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAJg8QABADABADQgCAHAAAKQAAgBgBAAIAABzQABAMABAOQAAAIgDAGQgBADAAADIABAEQgDACgBAEQgDgEgCgCQAAgDgBgEIgCgBQgGhwAAgYQAAgtABgMQABgUACgPQAAgDAAgDQAAgIAAgFQADgBADgDQABADACACQAAACAAABQALAMgBAfQgCAMgBAJIAAAA").cp();
	this.shape_171.setTransform(-0.6,0);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAHhCQAAAAABABQgBACAAACQAAACAAABQAAAGAAAHQAAADAAACIAEBoQAEBFgNAAQgCAAgFgHIAAgJQAAgBAAgBQAAAAAAAAQAAgBgBAAIAAhvQgEgjAAgVQAAgLABgLQgCgRAAgKQAAgNAEgIQAAAAgBAAQAEgDADgEQABgBAAgBQAAABADABQAAABABABQAHgNAAAfQgDAegBAOIAAAA").cp();
	this.shape_172.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169}]}).to({state:[{t:this.shape_170}]},5).to({state:[{t:this.shape_171}]},5).to({state:[{t:this.shape_172}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-13.6,3.4,24.4);


(lib.leg_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAPA1QgHAAgFgTQgEgcgBgBQgHgLgEgJQgJgRAAgJQAAgcAWArQAXApAAAZQAAANgIAAIAAAA").cp();
	this.shape_173.setTransform(2.4,5.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgOgQQgIgRAAgIQAAgKAIABQAIABADANQABADADAKQAGAKABADQABAEAIAUQAGAWAAAEQAAALgIAAQgHAAgFgTQgDgVgCgHQgBgCgLgSIAAAA").cp();
	this.shape_174.setTransform(2.4,5.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgNgPQgJgRAAgIQAAgJAGgBQAHgBAEAOIAMAbQAAABAIAWQAIAYAAAFQAAAJgIAAQgIAAgGgTQgCgWgCgFQAAgBgKgTIAAAA").cp();
	this.shape_175.setTransform(2.5,5.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgXgpQAAgKAGACQAGABAHAMQALATACAIQAEARALAiQAAADgCACQgDADgDAAQgMAAgEgTQgDgVgBgGQAAgDgKgRQgJgTAAgGIAAAA").cp();
	this.shape_176.setTransform(2.6,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_173}]}).to({state:[{t:this.shape_174}]},5).to({state:[{t:this.shape_175}]},5).to({state:[{t:this.shape_176}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,10.7);


(lib.leg_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgCAEQgPgsAAgLQAAgOAJAEQAIAEAAANQACAKAIAUQAIArAAAOQAAACAAAJQgBAJgIAAQgGAAgDgYQAAgbgCgIIAAAA").cp();
	this.shape_177.setTransform(1.8,6.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAJA4QgLAAAAgyQAAgFgHgTQgHgVAAgCQAAgJAGgFQAHgEACARQABAJAJAVQAIAXAAAiQAAALgIAAIAAAA").cp();
	this.shape_178.setTransform(2,6.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgQgsQAAgKAIAAQAHAAAAAKIAAAAQABADABAFIAIAaQAIAuAAADIAAAKQgBAGgGAAQgGAAgEgTQgCgRAAgMQAAgKgNghQgCgDABgFIAAAA").cp();
	this.shape_179.setTransform(2,6.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAJAzQgJAAgPhdQAAgNAJAGQAHAGABAHQABADADALQADAIgBAFQgBAHAEAQQAFATAAAIQAAAKgHAAIAAAA").cp();
	this.shape_180.setTransform(2.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_177}]}).to({state:[{t:this.shape_178}]},5).to({state:[{t:this.shape_179}]},5).to({state:[{t:this.shape_180}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,12.7);


(lib.arm_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgJgDQgLgdAEgDQAIgEAHAJQAEALAAAAQARAagCAVQgDAUgMgWQgDgIgJgVIAAAA").cp();
	this.shape_181.setTransform(1.9,3.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAMAmQgMAAgThAQAAgTAKAMQAHAIAGARQABAIAIAPQADAIAEAHQAAAIgIAAIAAAA").cp();
	this.shape_182.setTransform(2,3.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAUAfQgCADgEAAQgHAAgdg6QAAgGAFgCQAFgDAGAJQABACAFAHQAFAHACACQAAABACAGQACAEACAFQABACAFAGQAEAGAAADQAAADgDADIAAAA").cp();
	this.shape_183.setTransform(1.7,3.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAQAqQgJAAgehGQAAgWALAPQAGAIAIASQAEAGAKANQAIAOAAAJQAAAJgIAAIAAAA").cp();
	this.shape_184.setTransform(1.9,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181}]}).to({state:[{t:this.shape_182}]},5).to({state:[{t:this.shape_183}]},5).to({state:[{t:this.shape_184}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.7,7.6);


(lib.mcPlayer_static_torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAJAAQACBTgFAaQAAACAAACQAAAAABAAQgBABAAADQgBAAAAAAQgBABAAABQgBAAAAAAQgCABgBABQAAAAAAABIgBgBQgBgCgDgBQAAgCgBgBQAAgUgBgZQAAgEAAgFQgBgTABgUQgBgUAAgVQgCgUgFggQgDgnAOgHQACgDACAAQACgBABACQAQACgDArQgHA5AAARIAAAA").cp();
	this.shape_185.setTransform(-0.5,-1.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAGhzIAACKQAEAyAAAaQAAADAAADQABAGAAAFQAAAIgFADIAAAAQgDAAgDABQAAgBAAgBQAAgCgBgBQgHgMgCgyQgBgiABggQAAg6ACgYQAAgQABgOQAAgEAAgDQABgBAAAAQAAgBACgBQABABACAAQABgBAAABQABAAACgBQABACABABIAAAFQAAACABACIAAAA").cp();
	this.shape_186.setTransform(-0.4,-0.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAJg8QABADABADQgCAHAAAKQAAgBgBAAIAABzQABAMABAOQAAAIgDAGQgBADAAADIABAEQgDACgBAEQgDgEgCgCQAAgDgBgEIgCgBQgGhwAAgYQAAgtABgMQABgUACgPQAAgDAAgDQAAgIAAgFQADgBADgDQABADACACQAAACAAABQALAMgBAfQgCAMgBAJIAAAA").cp();
	this.shape_187.setTransform(-0.6,0);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAHhCQAAAAABABQgBACAAACQAAACAAABQAAAGAAAHQAAADAAACIAEBoQAEBFgNAAQgCAAgFgHIAAgJQAAgBAAgBQAAAAAAAAQAAgBgBAAIAAhvQgEgjAAgVQAAgLABgLQgCgRAAgKQAAgNAEgIQAAAAgBAAQAEgDADgEQABgBAAgBQAAABADABQAAABABABQAHgNAAAfQgDAegBAOIAAAA").cp();
	this.shape_188.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185}]}).to({state:[{t:this.shape_186}]},5).to({state:[{t:this.shape_187}]},5).to({state:[{t:this.shape_188}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-13.6,3.4,24.4);


(lib.mcPlayer_static_legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AANhVQAJAOAHASQABACABACQAmBNAAA9QAAALgJAAQgBAAgBAAQgCABgCABQgCgDgBgEQgHgIgDgYQgCgKgBgIQgIgigBgHQgCgEgJgWIgDgHQgDgIgEgIQgDgIgDgHIgBgEQgBgGgCgFQgDAFgEAHQgHARgHASQgQAmgFAnQgBAGAAAHQAAAKgCAJQAAADAAAEQAAANgDAHIgFABQAAgBgCgBQAAABgCACIgIgDQgBgOAAgbQAAgcAEgKQADgLADgJQABgFABgDQAFgPACgKQALgxAXgZQATgWACAaQADAEAEAGIAAAA").cp();
	this.shape_189.setTransform(0,19.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAEhZQgCgYgNAaQAAAAgBABQgHAJgKASQgZAzgEAuQAAABgBACQgGAnAAAIQAAAHABAEIAIADQABgCABgBQABABACAAQAEAAABgBQABgBABAAQAAgLAAgIQAFgMABgNQADgfAEgOQAEgPARgoQAFgNAEgIQACAKAJAUQATAmADAJQABAEAEAPQACALADAPQAFAWAEAKQADAMADAAQAIAAABgKQAAgLAAgEQAAg1gkhEQgLgTgIgKQgEgIgDgFIAAAA").cp();
	this.shape_190.setTransform(0,20.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AAqgNQAGAMAKAoQAJAnAAAGQAAAMgJAAQgMAAgGgkQgJgygCgFQgbg1gHgVQgEAIgHAMQgSAigEAZQgCANgEAhQgBAMgDAKQACAIAAADIAAADQAAABgCACQgBACgEAAQAAAAgBAAQgBACgBACIgIgDQAAgEAAgHQgBgCgBgEIAAgQQAAgHABgHQgBgPABgFIACgJQAGgjAOgfQAMghANgPQAIgJAFABQAFgCAKAQQAWAeAKArIAAAA").cp();
	this.shape_191.setTransform(0.2,20.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AABhUQAAAAAAAAQALANANAYQApBHAAA4QAAAIAAACQgBABAAABQgBAKgHAAQgDAAgDgIIgDgBQgGgkgdhQQgBgDgCgEQgDgIgFgJQgEgOgEgIQgDAHgGALQgTAmgEAXQgCAKgDAsQgBALgCAHQAAADAAADQAAAGgCAEIgCABQgDAFgDAAQgMAAADgnQAAgTADgSQACgbAKgaQAIgWALgWQANgZALgHQAIgGAAASQAAAAgBAEQAAAAABABIAAAA").cp();
	this.shape_192.setTransform(0.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_189}]}).to({state:[{t:this.shape_190}]},5).to({state:[{t:this.shape_191}]},5).to({state:[{t:this.shape_192}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,8.9,13.8,22.1);


(lib.mcPlayer_static_arms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAmgLQADAKAFAaQAHAVAIAZQAAAIgIABQgCAEgFAAQgMgMgCgbQgBgBAAgBQgEgQgFgYQgKgVgHgQQgEgIgBgGQAAAAgBAAQgDAAgBABQgBACgCADQgNAdgFARQgDAZgCAQQgCANgEAHQgCAQgDAKIgFABQgGgFgBgMQAAAAAAgBQgGgBAAgHQAAgJARhFQAMgxASgUQAAAAABgBQACgDABgCQAAAAAAgBQACAAACgBQACgDADADQAAAAAAABQACABACABIAAABQACADAEAFQAQAYAMAqIAAAA").cp();
	this.shape_193.setTransform(-0.4,0.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAYgkQAOAkAIAXQAHATAIAUQAAAIAAACQgBAEgIADIgBAAQgCAEgEAAQgDAAgIggQgBgDAAgCQgJgWgOgfQgKgXgEgPQgEAJgFALQgPAeAAAFQgBAZgDAQQgDASgGAIQAAAAAAABQgBAAgBABQgBABgBAAQgCACgEAAQgMAAADgMQAAgcAIgdQAHgcAOggQAOgcAGgEQAAAAAAgBQABAAACgBQABAAACgBQABABABAAQACABABAAQACACACACQAHAJANAfIAAAA").cp();
	this.shape_194.setTransform(-0.2,0.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAGgmQAAgBAAAAIAAABQgDgCgDAAQAAAAAAAAQgFAAgCADIAAgBQgNAfgGAGQgMAKABAbQABAagOANQgHgCAAgIQAAg0Agg9QAJgSAHgKQAEgDADgCQACABAAAAQAEAGADADQAHALAJATQAjBFAAArQAAALgHAAQgPAAgFghQgEgmgEgLQgDgJgMgYQgBgDgBgCIAAAA").cp();
	this.shape_195.setTransform(-0.3,0);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAAhOQAKgWA0CrQAAAEgDADQgCACgCAAQgCACgEAAQgHAAgJghQgDgKgBgHQgEgKgEgKQgMgfgKggQAAgBAAAAQAAAAgBAAQgCAFgEAIQgRAigEAIQgCAFgFAhQgCANgEAJIAAAFIgDACQgBABgCAAQgCADgCACIgIgDQgBgDAAgHQAAgLABgLQABguAggzQAHgMAHgIQADgBAEgDQADACADAAIAAAA").cp();
	this.shape_196.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193}]}).to({state:[{t:this.shape_194}]},5).to({state:[{t:this.shape_195}]},5).to({state:[{t:this.shape_196}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-9,12.3,18.5);


(lib.mcPlayer_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAXhHQAZAFAPAQQANANAAAOQAAAWgQAdQgRAhgWAMIgkAAQgpgJgMgSQgHgJAAgUQAAgbAPgZQAagsA5AIIAAAA").cp();
	this.shape_197.setTransform(0,-22);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AA+klQAdARAAAfQAAAfgSAiQgZAyguAAQgCAAAAAAIAAAuQABADADAFQAQAYAMAqQAEALAHAkQAFAhAAAGQAAAJgHABQgNgNgCgaQgCghgEgKQgCgEgPgiQgDgGAAgFIAAA9QABARAAAgQAAATgBAOQAFACAIAMQATAdAIAtQAEAQAIAnQAJAnAAAGQAAANgIACQgHgRgHggQgJgpgCgIQgCgIgSgrQgIgXgDgLQgKAZgKAaQgYA8AAA6QAAANgDAHIgFABQgHgJgCgTQgBgHAAgWQAAguAhhCQAMgZAIgLQAAg0gChfQgCAFgCAFQgQAngBADQgEAQgCAdQgCAagEAOIgFAAQgGgFgBgLQgBgFAAgOQAAghAchHQALgdAHgKQAAggADgNQg1gEgSgdQgIgNAAgZQAAgwAdgdQAZgYAkgEQAjgEAbARIAAAAAAXkjQg5gIgaArQgPAZAAAeQAAAUAHAJQAMASApAJIAkAAQAWgMARgiQAQgeAAgXQAAgNgNgOQgPgPgZgFIAAAA").cp();

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AABkdQhFAQAABYQAAAJAUAOQATAOAQACIAAAAQADABADAAQACAAACgBQAhgDAXguQASgjAAgRQAAgYgWgMQgVgMgbAGIAAAAABEi1QgaA0gsACIAAA3QAFAIAOAjQAdBDAAAgIAAALQgBAIgHAAQgCAAgJggQgKglgEgHQgFgNgIgVQAAgHgCgFIAAAjQADBBAAAeQAAALgBAIQAJANAOAfQAmBPAAA1QAAAHgJAAQgGAAgIgmQgKgxgCgGQgHgRgSgpQgEgMgEgIQgDAJgHARQgQAogGARQgGASgBAcQgBAQgBAfQAAAAgCACQgBABgEAAQgKAAADgvQAAg3Aeg7QALgWAIgJQgCg5gChpQgDAIgEALQgMAdgBAIQgBANgEAYQgFAZgBANQAAAAgCACQgBABgEAAQgKAAADgaQAAgyAZgzQANgeAHgDQgBgZACgUQAAgFAAgEQgegDgWgYQgRgTAAgKQAAgVANgjQANgmARgJQA7giAnAaQAeAUAAAfQAAAZgSAlIAAAA").cp();
	this.shape_199.setTransform(0.4,-0.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAAhFQAbgGAVAMQAWAMAAAYQAAARgSAhQgXAughADQgCAAgCAAQgDAAgDgBIAAABQgQgDgTgNQgUgPAAgJQAAhWBFgPIAAAA").cp();
	this.shape_200.setTransform(0.5,-21.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAAhDQAbgEATAMQAVANAAAcQAAASgMAbQgTAqgeAAQguAAgRgjQgJgRAAgYQAAgXAVgSQATgPAagEIAAAA").cp();
	this.shape_201.setTransform(0.3,-21.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAgkrQAXAIAKAMQANAIADAPQABAGAAAQQAAAagOAhQgVAwglAAQgKAAgGgBQAGAWAAAZQAAACAAACQAAABAAAAQAAADAAACIAAABQAHAMAKAVQAjBFAAArQAAALgHAAQgPAAgFghQgEgmgEgLQgEgLgNgcIAACSQACAEAEAFQAUAdAPAtQAYBZAAALQAAAKgIAAQgMAAgGgmQgIg0gBgEQgLgagTgkQgCgGgDgGQAAAAgBAAQgCAAgBAAQgEAIgIAMQgVAkgDAGQgHAPAAAXQAAANABAZQAAADADAJQACAJAAADIAAADQAAABgCACQgBACgEAAQgLAAgCgQIAAgQQAAhKAhg5QAKgSAKgIIAAiXQgNAfgGAEQgMAMABAbQABAagOANQgHgCAAgIQAAg0Agg9QAJgSAHgKQgBgDAAgBQAAgIADgCIAAgDQgDgIAAgPQAAgLABgGQgqgIgQgjQgKgWACgbQAAgeAJgKQAMgNA8geQAJgEAXAJIAAAAAAAkaQgZAEgUAPQgVASAAAXQAAAaAJARQASAjAtAAQAeAAATgqQAMgdAAgSQAAgcgVgNQgTgMgbAEIAAAA").cp();
	this.shape_202.setTransform(0.2,-0.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AA2i0QASgjAAgYQAAgLgggVQgigXgQAMQgdAIgRAVQgPASAAAUQAAAWAMAUQAOAYAcALIAgAAQATgEAUgmIAAAAAAAh6QAAADgBAFQgDAHAAADQABANABANQABAAAAAAQAAABAAABQAAAEABACQAAABAAAAQAGANAPAiQAiBOAAAaQAAAHgBgCQgCAEgGAAQgIAAgJghQgJglgDgKQgBgFgQgiQAAgDAAgEQAAApAAATQAAAwAAAcQAAABAAABQAAABAAACQAAAAADAMQABAEADACQAIAOAOAdQAmBTAAApQAAAPgHAAQgHAAgIgnQgLgwgDgHQgGgOgUgrQgGgRgEgJQgEAIgKAQQgTAjgDATQgEATAAAYQABAOAAAbQAAAGgCAFIgFABQgIgBgCgWQAAgIAAgWQAAg2Aeg4QAKgTAIgHQAAAAgBgBIAAicQgOAcgGAPQgNAogBAEQACAJAAATIAAAFIgDACQgCACgEAAQgLAAACgdQAAgxAhgyQAIgNAHgIQgDgXAAgMQAAgMAEgIQgngGgUgnQgLgXgBgZQAAgcANgSQAQgWAqgQQAdgNAlAYQAkAWAAAbQAAAjgMAdQgXA1g0ABIAAAA").cp();
	this.shape_203.setTransform(0.3,-0.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AA2AgQgUAmgTAEIggAAQgcgMgOgYQgMgUAAgUQAAgTAPgTQARgUAdgJQAQgLAiAWQAgAVAAAMQAAAXgSAiIAAAA").cp();
	this.shape_204.setTransform(0.3,-21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198},{t:this.shape_197}]}).to({state:[{t:this.shape_200},{t:this.shape_199}]},5).to({state:[{t:this.shape_202},{t:this.shape_201}]},5).to({state:[{t:this.shape_204},{t:this.shape_203}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-30.8,18.3,61.7);


(lib.mcPlayer_running_torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgBAAQABgBAAAAQABABABACQgBAAgBgBQAAgBgBAAIAAAA").cp();
	this.shape_205.setTransform(5.2,-15.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAvhTQACAAABADQAAABABAAQABACABABQgCAFAAAIQgBAAgBgBQgFALgPAdQgBABAAAAQAAABABABQgDADgBAEQgGADgBAIQgPAdgDAOQgIAkgHAXQgIAagHALQAAABAAAAQgDAEgCAEQgCACgBACQgOgKAAgJQAAgCAAgCQAGghAuhgQAAAAAAgBQACgEABgEQAAgBAAAAIAAAAQAAgBAAgBQAEgEABgGQABgCABgCIABAAQAKgWAIgNQADgCACgDQADgEABgFQAFgEAEgBIAAAAAgJiUQAAABgBAAQAAgBAAAAQABAAAAAAIAAAA").cp();
	this.shape_206.setTransform(0.3,-6.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAZhkQgCACgBAAIABABQgDADgCADQAAAJgSAgQgBAEgBADQgHAQgGATQgDAIgJAsQgGAjgCAOQAAABgBABQAFAIAHADQAMgSAGgdQAEgPACgjQABgKAGgTIAAAAQAEgPAMgPIAAAAQAAgIADgFIAAgCQAAgBAAgCQAFgNAFgMQAAgBAAAAQAAAAABAAQAAAAAAgBQAAgCAAgBQgDgEgCgDQgDABgCABQgBAAAAABQgBABAAABIAAAA").cp();
	this.shape_207.setTransform(1,-2.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAyhkQgBABgBABQgHAGgGAEQACAAABABQgDAEgEAFQAAAAAAABQAAADgXAiQgIANgFAJQABgBABgBQgqBIgKAfQACALABAFQADAAABACQACgCAEgEQAAAAABgBQAYgrARghQAAABAAACQAAgBACgCQAFgLANgSIAIgRQABgEABgDQASgiAGgLQABgJADgGQgDgCgFgDIAAAAAg5BDIAAABQAAgBABAAQgBAAAAAAIAAAA").cp();
	this.shape_208.setTransform(1.5,-3.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AAFAIQgCgBgCAAQgBgGgEgHIAAgBQAGAEACAEQAAABABAGIAAAA").cp();
	this.shape_209.setTransform(7.6,-23.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AA2h1QAFAAAHAAQgCAIgBAFQgEAIgVAjQgBABAAABQAAABAAAAQgQAZgVAxQgJAJgDAOQgEAFgDAGQAAgBAAgBQgDAIgEAJQgHAQgGANQgKAIgDAQQgCAAgHgKQgCgCgCgBQACgYAbg1QAEgDAEgGQAJgOAAgFQAAgBAAgCQAFgHAGgJQALgWAHgMQADgDADgFQALgRABgIQAOgUAIgIIgBAAQADgBACgCIAAAAAgIAVIAAAAIAAABQAAgBAAAAIAAAA").cp();
	this.shape_210.setTransform(1.7,-0.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAqhvQgKALgRAeQAAAAgBAAQAAACgBABQgDAEgFAIQAAACgCADQgBABgBABIAAABQAAACgBADQAAgBABAAQgBABAAACQghBAgOAoQgDAJgCAHQgBAJgBAHQABAKACAIQAEgDAHgCQgBAAgBAAIAAAAQAPgTAJgcQACgKADgJQAAgBAAgBQAGgWAFgMQABgEAJgSQAAABgBACQACgDACgDQABgEADgEQAJgRACgFQABgDAFgGQACgFAEgGQABgEAEgDQgBAAAAAAQAMgVABgGQgEgLgCAAQgDAAgEACIAAAAAgJghIAAAAQAAAAAAAAIAAAA").cp();
	this.shape_211.setTransform(1.8,-2.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AA2hvQgDACgEADQgJAIgLANQgBACgCADQgDAFgGABQgFAHgGAIQABAAABgBQgCAEgDAEQhCBdAAA4IAAAAQAAAAgBAAQADAEAAAGIAAAAQAAABAAABQABACACADQAAAAAAgBQAEACAHAAIAAgDQAAgDACgDQAAgFABgDQAAAAgBAAQAGgLAIgYQASg4ADgEQAGgKARgYQAAABAAABQADgFAGgDQACgDACgDQAEgEADgEQACgEADgCQAAgCAAgBQAZgfAGgKQgEgIgDgFQgDACgDABIAAAA").cp();
	this.shape_212.setTransform(2.3,-1.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAAgFIAAgBQACAFAAAIQgBgBgBgBQgBgBAAgEQAAgEABgBIAAAA").cp();
	this.shape_213.setTransform(13.8,-18.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAsh0QACgCACgDQABgCABgDQACgBACgBQAGAAAGAFQgCAEAAAIQAAAAAAABQgCAAgBgBQgCAMgXAkQgEAHgEAFQgDADgBAFQgGAIgDALQAAgBAAgBQgDAGgEAIQgVAngDALQgQA0gBACQgEALgDAIQABAAABAAQAAACAAADIAAAAQAAABAAABQgCAEgBAEQgBAAAAABQgCAAgCABQgHgBgHACQgCgCgBAAQgBgCgBgBQAAAAABAAQgBgCABgCQAAgcAwhgQALgYAHgPQgBAAAAAAQACgDACgEQAJgQADgKQAAAAABAAQAQgcALgMIgBAA").cp();
	this.shape_214.setTransform(2.2,-2.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AB0hpQgCgCgFgBQgJAAgHAAQgFAFgHAHQgJAIgJAKQAAAAAAAAQgGAKgMALQgLAPgLARQgKAOgVAqQgLAUgFAMQAAAGgFAGQAAAAAAAAQgBAIgEAFQgBABgBACQAAAEAAAEQAAAKANAAQAEAAADgCQAAgFACgDIAAAAQAAgGABgDQgBgDgBgDQAJgIAMgcQAbg0ABgCQAIgLAMgPQAHgQAUgOQAAAAAAAAQADgDACgDQAYgZAFgIQAAAAABAAQAAgCAAgCIAAAAAhvgZQgEAFAAACQAAAAAAABQABgEADgEIAAAA").cp();
	this.shape_215.setTransform(-2.4,-0.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AABABQgBgBAAAAIABAAIAAAB").cp();
	this.shape_216.setTransform(9.6,-13);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("ACMiYIABAAQAAABAAAAQgBAAAAgBIAAAAAAKg/QAAAFgBAHQgFADgDAEQAAAAgBgBQgFAKgQASQgBACgCABQAAACAAACQgEADgEAEQgTAUgMATQABgDABgDQgHALgGAKQgMAUgjBCIAAAAQgCADgBAEQgIAEgFAFQgBgBAAgBQgDgEACgIQAAgiBKhnQACgCACgBQgBAAAAAAQABgBABgCQACgCABgEQAFgHAEgFQAFgCADgFQABgBAAgCQAIgJAHgIQAKgFALgMIAKAAQACACABABIAAAA").cp();
	this.shape_217.setTransform(8.7,-6.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAAAAQABAAAAABIgBgBIAAAA").cp();
	this.shape_218.setTransform(7.5,-17.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("ABLhiQgCAFgXAiQAAACAAADQgRAQgOAWQgMAQgQAXQgEAFgCAFQgXAfgMAQIACAAQgGAIgHALQgCADgCADQgCAAgCABQgEABgEACIgBgIIAAAAQACgDABgDQgBgCAAgCIAAAAQAAgCACgDQABAAAAgBQAbgsAagoQgBgBAAgCQACgCACgCQAIgJAEgHQAAABAAAAQADgDACgEQAAgDACgDQAtgzAAgHQAAgBAAAAQAGgHAFgEQgCgBgCgBQACgBABgBIAWAAQgCAFgBAFQgBAAAAAAIAAAA").cp();
	this.shape_219.setTransform(1.4,0);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("ACIjOQABABACABQgKAJgOATQgBgBgCABQgDAGgJAMQgEAEgDAEQABAAACgBQgFAIgGAIQhCBfgGAYQgIAIgHANQACADAIAAQADAAADgCQAHgMANgKQABgCABgBQgBAAgBAAQAMgRAKgPQAFgQAUgSQABgCABgBQADgOAQgJQAEgIAFgGQABgFAEgDQABgGAFgCQABgDAAgCQAVgeAIgOQAAgGAAgHQgIgBgIgCIAAAAAiUDIQgCABgBACIAAAEQACgEABgDIAAAA").cp();
	this.shape_220.setTransform(-7.3,9.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AA1hwQgOAMgXAiIAAAAQgBACgBABQgBACgBABQgCAEgDAFQgCABgBABQgyBMgKAjQAKALAGAJIADAAQADgDAFgDQAAgKACgJQAAABgBAAQAEgIAEgKQAMghAPgOQAIgIAMgSQAAABAAABQAGgJAHgIIAAAAQABgIAEgDQAAgBAAgBQABgBAAAAQAXglABgHIAAgBQgCgDAAgDQgCgCgCgBQAAAAgBABQgEABgGACIAAAAAhFByQAAABAAACQABgBAAAAQgBgBAAgBIAAAA").cp();
	this.shape_221.setTransform(2.1,0.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAthuQABABACABQgOALgaAnQgBAAgBgBQAAABAAAAIgBAAQAAABgBABQgBABgBABQgCAHgDAJQgBABgBACQgBABgBABQhABlACAfQgBAHAEACQgCABgCABQAJAAACAIQABgBAAgCIAAAAQAAgHACgFIAAAAQAmhPAMgSQAMgTALgQQABgIAFgDQACgGAFgEQACgGAFgDQALgQAHgKQACgKAOgQQgHgDgIgDQgFAEgGADIAAAA").cp();
	this.shape_222.setTransform(1.4,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_206},{t:this.shape_205}]}).to({state:[{t:this.shape_207}]},2).to({state:[{t:this.shape_208}]},2).to({state:[{t:this.shape_210},{t:this.shape_209}]},2).to({state:[{t:this.shape_211}]},2).to({state:[{t:this.shape_212}]},2).to({state:[{t:this.shape_214},{t:this.shape_213}]},2).to({state:[{t:this.shape_215}]},2).to({state:[{t:this.shape_217},{t:this.shape_216}]},2).to({state:[{t:this.shape_219},{t:this.shape_218}]},2).to({state:[{t:this.shape_220}]},2).to({state:[{t:this.shape_221}]},2).to({state:[{t:this.shape_222}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-21.9,10.7,29.9);


(lib.mcPlayer_running_legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AB7B3QgGAAgNguQgDgKgOg7QgPg6gGgdQgJAMgPASQgWAZgKAKQgBADgDACQgGAFgMACIhGAAQgQgGgWgDQgLgCAAgFQAAgJAJgBQAMgCAhAIIA/AAQAIgEAGAAQAQgeATgYQARgWAKgIQAAgBAAgBQAFAAAEgCQAGAFAIACQgBABAAABQABACABADQAGAOABAQQABAIAEAVQAEAVABAKQAAADAPAyQAOA0AAAPQAAANgJAAIAAAA").cp();
	this.shape_223.setTransform(-11.3,17.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("ABAAAQAAAOgMALQAAAmgBAMQgCApgJACIgIgDIABhPQgdAMg3AAQgJAAgCgEQgBgBAAgEQAAgJA3gHQAbgFAOgFIgHhgQAAgBAAgBQAAgEAAgDIAAgCQAAgSACgEQAEADAFABQACACADACQgCACgBADQAHAQACAOQACAEACAGQACAbAFALQAFAKAAAPIAAAA").cp();
	this.shape_224.setTransform(-5.4,18.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("ABEAZQgEAMgTAGQgPAFgnALQgBAFgBAHQgFAcgFAKQAAABAAAAQAAAKgNAHIgIgDQgBgCAAgGQAAgIAGgFQABgIAHgfQgXAGgEAAQgJAAgCgEQgBgBAAgEQAAgPAsgJQAJglAEgOQAKgqgCgSQAGgaACgEQgCgDAAgBQAAgKADgCQABgDABgDQACAAACAAQAEADAEADQABABABACQAAABgBABQAEADAAAJQAFAHAGALQAhA5AAAgQAAASgBADIAAAAAAUhKQgCAJgCAMQgJAtgHAQQAAAEgEAWQA2gIAAgWQAAgLgSgsQgCgFgKgSIAAAA").cp();
	this.shape_225.setTransform(-4.9,17.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("ABKhDQgXgKgKgGQgJAag1BGQhHBdglAAQgLAAAAgIQAAgCArglQAvgoAMgWQASglAcgkQAJgKAGgGQAAgBAAAAQAAgDAAgDQACgBABgBQAMgBAJgDIAAAAQAXACA3AlQAPgNABAXIAAABQAAAAAAABQAAAGgpAvQgqAugOAJIgIgDQgBgBAAgHQAAgDAWgYQAagbAFgHQAOgVAKgMQgPgFgXgLIAAAA").cp();
	this.shape_226.setTransform(-7.2,19.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AB2hjQgBAAgCAAQgFAAgDgBQAAAAAAABQgjAEgIACQgCABgDAAQgFADgHAAQgEAAgDgBQgLAGgRAQQgfAfgZAiQghAtgzAiQgaARgTAJQAAAIALAAQAbAAA0grQAqgkAFgKQAJgPArgqQAYgXAKgLIA0AAQATgFAZgFQgFAKgHANQgnBPAAARQAAAJALAAQAMAAA4iPQAAAAAAgBIAAgBQAAAAAAgBQgBgRgJAIQgPACgLACQgHAEgIAAQgCAAgDAAIAAAA").cp();
	this.shape_227.setTransform(-7.9,17.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AC1hbQAAADgbBAQgDAHgCAYQgBAUgLAKIgJgDQgBgIAAgRQAAgcAbg1QABgCACgCQgFABgGACQgqAOg5AAQgHAAgEgBQiOCkhBAAQgKAAABgKIAsgeQA1gjAigdQArgoASgUQALgLAIgFIAAgBQAAgBAAgCQAGAFAJAAQABAAACAAIAAAAQAmgDAygNQAPgEASgIQADgBACABQAGABAAAJIAAAAQAAABAAABIAAAA").cp();
	this.shape_228.setTransform(-7.4,15.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("ABtg3QgfgTgMgIQgJANgkAcQgWATgfAWQgNAOgrAWQg6AdguAAQgMAAAAgIQAAgFBCgXQBJgZAagZQAIgJAugjQAYgSANgGQAAgBAAgBQAFgCAEgFQAFgFALgBQAAABgBABQACAAACABQAYAFAbAXQABACAaAUQAWAQAEALQAHAPAFAeQAGAgAAAVQAAAAAAACQADAEAAAJQAAAIgBACQgCAGgGAAQgIAAgCgHQAAgIAAgBQAAgBAAgCQgFgJgCgWQgHgzgCgGQgHgTg2giIAAAA").cp();
	this.shape_229.setTransform(-9.5,18.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("ACHiXIgBAAIABAAQAAAAAAAAIAAAAAAnCYQgNAAgZhuQgFgdgGgcQAAALAAALQAAAYgeAQQgfASgwAAQgMAAgDgEQAAgBAAgEQAAgKAUgFQA5gPAEgCQAagIABgKQgDgJAAgHIAAgoQAAgPAKgLQAAgDABgDQACACADADQAFAFAGAEQgBABgBAAQADAKAEAQQADAKALAxQADARAPA2QAOAyAAAEQAAAIgKABIAAAA").cp();
	this.shape_230.setTransform(-3.5,15.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAMhgQgDgEABgIQAAgEACgFQAAAAACAAQACAAADAAQADACADABQACACACABQAAABgBABQARAZAiBUQAAARgxATQAAAFABAGQAEAcAAAMQAAAOgBADQgBAOgIAAQgIAAgHhLQgeALgvALQgLAAAAgIQAAgFBGgWQAIgDAJgDQgBgFAAgGQAFg4AAgeQAAgLABgIQgBgCgBgCIAAAAAAgg6IgFBHQAAABAAAEQAigOAAgGQAAgCgdg2IAAAA").cp();
	this.shape_231.setTransform(-6.4,18.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("ABehjQAAAFgxA5QgxA5gHAAQgKAAABgKQAAgEA3hAQAQgUAKgMIhIAAQAAAAAAABQgnCjgiApIgIgDQgBgBAAgGQAAgHARgqQASgtADgYQAQgkAFgYQAEgNADgJQAAgBgBgDIAAAAQAAgBADgDQAAgBABAAQACgEACgEIABAAQAKAAAJgCQAAAAAAAAQAAAAAAAAQAAACgCADIBRAAQAPgNAAAXIAAAA").cp();
	this.shape_232.setTransform(-3.4,19.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AB4h4QgBAAgBAAQgFACgHAAQgCAAgCAAQgJABgMABQgdAEgQADQABgBABgCQgMACgKABQAAABgBACQgLANgPAcQgFAIgHAWQgGAWgGAIQgQAVglAjQgtAsgQASIABAGIAIADQAsgTAdghQAdgoAQgUQARgTAVguQAMgYAFgMIAcAAQAtgGARgDQgGAJgGANQglBJAAAaQAAAIALAAQABAAAfhAQAOggAIgSQAAgFAFgIQAGgKAAgCQAAgFgHgFIgBgBQgEABgEAAQgEAAgEgBQgDABgDAAIAAAA").cp();
	this.shape_233.setTransform(-7.6,18.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("ACwh2QAKABAKAqQAJAkAAARQAAACAAANQgBAJgIAAQgFAAgUhjQhIgBgOAFQgIACgEAFIgHAAQgDADgCACIAAAAQgIAOgbAlQgbAlgYAeQAAABAAAAIgBABQgEAFgFAGIgHgDQgHADgKAGQglATgLAJQgNAMhJAYQgLAAAAgJQAtgfAtgYQAygcAWgCQAEgMALgOQAWgYAHgNQAagnALgNQAFgFADgEQACgDAFgCIAAgBQAHgCAJgEQACAAABAAQAFAAAFgBQgBAAAAAAQAWgEAHgCIBBgB").cp();
	this.shape_234.setTransform(-9,17.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("ACLhAQA2AoAEAuQACAggKAJIgKgCQAAgggBgHQgCglgtgfQgSgNgSgHQgBABAAACQgQgCgVABQgGgCgBgCQgBgBgBgBQgKALgdAYQgvAngDAEQgSAUgaATQgxAlgwADQgNABgBgJQAAgHAJgEQAJgEAggFQAIgEBrhSQA3gtATgHQgDgCAAgDQAIAAAGgBQAAAAAAABQAKgFAdAIQADgCAHABQAPACAVAQIAAAA").cp();
	this.shape_235.setTransform(-9.7,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_223}]}).to({state:[{t:this.shape_224}]},2).to({state:[{t:this.shape_225}]},2).to({state:[{t:this.shape_226}]},2).to({state:[{t:this.shape_227}]},2).to({state:[{t:this.shape_228}]},2).to({state:[{t:this.shape_229}]},2).to({state:[{t:this.shape_230}]},2).to({state:[{t:this.shape_231}]},2).to({state:[{t:this.shape_232}]},2).to({state:[{t:this.shape_233}]},2).to({state:[{t:this.shape_234}]},2).to({state:[{t:this.shape_235}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,5.7,26.6,24);


(lib.mcPlayer_running_arms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAqghQAFAFAGAJQAQAXAGAQQANgIAWgMQA0gcAAASQAAAHglAVQglAXgOAAQgDAAgCAAQgBAAgBAAQgBAAAAAAQgFgBgCgDQgBgBAAgEQAAAAABgBQgFgJgIgQQgFgHgEgHQgEgQgUAAQgLAAgEAFIAAAAQgEABguAGQgnAFgEADQgQAJgpAdIgIgDQAAgCgBgGQAAghBjgVQAkgHAegCQANAAAHAAQABAAAAAAQAEABAEAAQABAAABAAQADAEAEABIAAAB").cp();
	this.shape_236.setTransform(-1,-5.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAagnQgCgCgBgCQgBgCAAgBQgBgBgBgBQgEAAgCgCQgBABAAABQgJgBgLAMQgGAGgVAIQgYAIgCABQg5AdAAAZQgBALAKAAQApgrAJgCQAUgGAbgLQAGgDAFgDQgBACgBACQAKACAAAKQAAABgBACQAAABAAABQAAAAAAAAQAAABAAABQAAACAAACQAAABAAABQAAgBAAgBQACAbAIAJIASAAQBUgjAAgLQAAgIgLAAQgDAAglAPQgmASgEABIAAg6QAAgCAAgBQAAgBABgCQgBAAAAgBIAAAA").cp();
	this.shape_237.setTransform(1,-5.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAZhRIAAAAQgDABgDACQgSAKgXAbQg/BDAAAsQgDAMAMAAQACAAADgDQADgDADgGQAFgIAGgOQAJgSALgZQAGgJANgOQABgBACgCQADgDADgEQABAAABgBQgBABAAAAQABAAABAAQAHACAAAHQAAACAAABQAAACAAABQAAADgCADQAAAAAAABQAAABgBABQAAABAAABQAAACgBACQAAABAAABQAAACAAABQAAABAAABQAAAEgBADQAAABAAABQAfApAqAAQAOAAAAgJQAAgHgjgLQgjgMAAgEQAIgqAEgSQABgDACgCIADgUQAAgIgFgEQgCAAgCAAIAAAAAg2BDQAAABgBABQABAAAAAAIAAgC").cp();
	this.shape_238.setTransform(1.7,-3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AB9i7QAAADACACQABADACACQABAJAEAGQAAABAAACQAAAKgMANQgOAOgCAJQACARABAJQABAOgNAAQgEAAgDgCQABABAAABQANAcAAAJQAAAGgBACQgBAFgHADIgJgDQgFgUgHgTQgCgGgEgEQAAgBAAgBQgBgCAAgCQAAgBAAgBQAAgHgFgFQAAAAAAgBQgBgJAAgMQAAgfAnghQAJgIAHgEQADACAFABIAAAAABWhZIAAABQAAgBAAAAIAAAAAiFC8QAAACgBABQAAgBAAgBQAAAAABgBIAAAA").cp();
	this.shape_239.setTransform(-7.8,10.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AA2hbQgBAAgBAAQgCAAgBgBQgPAIgHAAIAAAAQgQAHgPAOQg4AyAABZQAAAIAKAAQAHAAAFgLQABgDABgDQADgIABgKQADgTADgcQAFgXAdgdQADgDAEgDQACgBACgCQgBACgBABQAKABAAAIIAAABQgBABAAAAQABACAAABQAAACgCACQABACAAACQAAADgBADQAAgCABgBQgBADgBACQgBAEgBAEQgKAaAAALQABAUAEASQAEASAHAKQgCAAgCAAQAHACAEAFQADgBAEABQACAAABABQACgCAEgBQAAgFABgDQgBAAAAAAQgCgFgIgWQgKgaAAgKQAAgDAHgRQAHgVABgHQABgDAHgWQAHgXAAgEQAAgFAAgDQgEgBgDgBIAAAAAgcAuQAAABgBABQABAAAAAAQAAgBAAgBIAAAAAghA9QAAABAAABQAAgBAAAAQAAgBAAAAIAAAA").cp();
	this.shape_240.setTransform(0,-1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAmg/QgGAAgEgCQgDgBgFAAQgYAAgeAHQhTATAAAqQgEAQANAAQAfgiAGgGQAWgSAzgGQABAAABAAQABAAABgBQACgBAEAAQACAAABABQABAAABAAQAAAAgBAAQAGADAAAFQABADAAADQAAABAAABQAAABAAABQAAABAAABQAAABAAACQAAAFgCADQgJAZAAAWQAAAKAmANQAiANATAAQAQAAAAgJQAAgIgogLQgcgIgTgDQABgEAHgiQAGgcAAgGQAAgCAAgCQABgBAAAAQgDgGgEgIIAAAAQgBAAgBAAIAAAAAAPgLQAAAAAAABQABgBAAAAQAAAAgBAAIAAAA").cp();
	this.shape_241.setTransform(1.2,-2.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAFgnQAEgDADADQABAAABAAIgBAAQAAAAAAABQACADAAAHQAEAPABAIQAAgBABAAQACAIAFARQAFASAEAKQgBACAAACQAAAGAJACQAAAAABAAQABAAABAAQABAAACAAQBqgxAAgDQAAgQg8AXQgcAMgPAIQgEgUgNgkQgCgFgCgEQABgBABgBQgCgDgCgEQgFgKgDgHQgKgDgWACQgpAFg7ASQgSAFgMAQQgHAJgKAOIABAGIAIADQARgGAKgMQAKgOALgEQAtgQA1gEQACAAAEAAQAAAAAAgBIAAAA").cp();
	this.shape_242.setTransform(1.6,-4.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAjgkQgFgCgCgEQgDAAgDAAIAAAAQhEgVg9AjQgVAMgPAQQgNAMAAADQAAAJAKAAQAQgNAUgLQAogZAWAAQAWAAAaACQAOgHACATQADADAAAFQABgBAAAAQgCALAAANQgBAIABAIQACAPALAAQB+gkAAgMQgBgIgIAAQgTAAgrAPQgWAJgbAKIAAgWQAFgHAAgPQAAgEgBgEQgBgBgBgCQgBgDgBgDQgBgCgBgCIAAAA").cp();
	this.shape_243.setTransform(1.6,-3.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AA8hFQgGAAgEgDQgOACgaAKQg0ATgIAMQgxA7AAAKQAAAIALAAQAEAAATgYQAPgUALgPQAFgIAzgTQABgBACAAQAEgCADgBIABAAQAKAAAAAJQAAADgDADIAAABQAAACgCADQAAABAAAAQAAABAAAAQAAADgCADQgBAAAAAAQAAABAAABQgCAFgCAEQgEAJgEAMQA2A2ATAAQAFAAACgEQACgCAAgDQAAgNgXgNQgcgOgKgHQAFgJAKgaQAKgdABgHQAAgBAAAAQAAgBAAgCQAAgBAAgBQAAgBgBAAQgBgDgBgEQgBAAgBgBIAAAAAgbAqQAAgBAAgBQAAABgBABIABAA").cp();
	this.shape_244.setTransform(-0.3,-2.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAkhKQAAAAAAAAQAFADACAEQACAIACAFQAAAAgBAAQABADAAAFQAAACgNATQgOAUgBADQgBALgBAJQgDARgJAAQgBAAgBgBQAGATAAADQAAALgJAAQgFAAgKgeQAAAAAAAAQAAgFgDgCQgCgLgBgCQAAgGAAgCQAAgDgDgDQgBgEgCgHQAAgdAlgZQAOgJAIgDQABAAAAgBQABABACAAIAAAAAgDgXQADgGAEgHQgJAJgDAMQADgEACgEIAAAAAgtBKIAAAAQAAABgBABIABgC").cp();
	this.shape_245.setTransform(1.7,-0.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("ABAhTQgWgBgNgEQgWAEgjAPQhbAiAAAQQAAAGABACIAIADQARgEAUgNQAVgOAIgFQASgMAngFQAAgBACAAQACgCAEAAQACAAACABQAAAAABAAIgBAAQAFACAAAHQAAACgCADQgBACgCABQgBAFgDAGQAAABAAABQAAAHgBAEQAAACAAABQAAAIgBACQAAACgBABQgBACgBACQAAAAAAABQAAADAAAEQgBAGgBAEQgBAEAAAEQAAALAZAVQgBAAAAAAQABABABABQAFAFAEADQADACAJAFQABABACAAQAGACAEADQATAKATAAQAFAAACgEQACgDAAgCQAAgEgsgWQgCgBgCgBQgBgBgBAAQgmgTAAgHQAAgZAMgfQAGgUADgIQAGgJAGgIIgBgH").cp();
	this.shape_246.setTransform(-0.3,0.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AACgmQgBABAAAAQgKgDgSgDQg0gIgRAHQgLAFgkAMQgeAMAAAMQAAAHALAAQABAABgglQAiAIASAEQACAAADAAQAAAAAAAAQAIgDACAHQADACABADQAEAEAAAGQABgBABgBQAAAQACAGQAEATARALIAbAAQAhgLA2gLQAZgFAAgLQgBgKgKAAQgEAAgKAHQgLAHgCAAQgRAFgfAEQgoAFgHABQgKgdAAgXQAAgBAAgBQgLgEgOgHQgCgBgCgBIAAAA").cp();
	this.shape_247.setTransform(3.5,-2.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAIgjQgWgCgfgKQgagJglALQgUAGgWARQgWARABAHQABAJAJgBQAOgKAQgJQAggWASgCQATgBAbAKQAQAHANACQACgBADAAQACAAACABQACABACAAQAAAAAAAAQAEAAACACQADAAABACQACABABABQAAgBABgBQACAOAGAPQALAiANgBQABAAABAAQACAAABAAQByg4AAgGQgBgPhAAZQgjAQgPAMQgDgFgCgGQgMgWgBgHQAAgIgBgGQgDgCgDgDQgDAAgDgCQgCAAgBgBIgLAAQgDAAgBgBIAAAAAgJAhQgCAAgBAAQAAAEAAAEQADgEACgEQgBAAgBAAIAAAA").cp();
	this.shape_248.setTransform(1.3,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_236}]}).to({state:[{t:this.shape_237}]},2).to({state:[{t:this.shape_238}]},2).to({state:[{t:this.shape_239}]},2).to({state:[{t:this.shape_240}]},2).to({state:[{t:this.shape_241}]},2).to({state:[{t:this.shape_242}]},2).to({state:[{t:this.shape_243}]},2).to({state:[{t:this.shape_244}]},2).to({state:[{t:this.shape_245}]},2).to({state:[{t:this.shape_246}]},2).to({state:[{t:this.shape_247}]},2).to({state:[{t:this.shape_248}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-10,32.6,8.4);


(lib.mcPlayer_jumping_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgKjUQAHgFAAAQQgGAVgEAQQAAAAAAABQgGAJAAALQAAADABACQAAAAgBAAQAAAAAAABIAAAAQgCAJAAAEQAAAoAOArQAHAdACAMQAEAAADAAQATgJAOACQAIABAHABQADgBACAAQAsgCAMAVQADAHAAAbIAAAeQgCAVgLAEQgCADgBAAQgCAAgBgBQgBABgBAAQgEgCgBAAQgBgBgBgEQgBgCAAgCQAKgrAAgFQAAgOAAgEQgCgHgDgEQgFgDgGgDIgWAAQgLgEgcAKIgNAAQAJARAAAUQAAA7ghAuQgFAJgHAKQgBACgEAEQgVAegXAAQgGAAAAgBQgBgBgBgBQAAAAAAgFQABgBAAAAQAAgCAAgBQAVgVAVgdQAog4AAgrQAAgJgDgOQgCgFgCgDQAAACgBABQgJgIgLggQgGgYgEgZQgDgYAAgVQAAgDAAgCQAAAAgBABQgVAaAAAUQAAAOAGAIQAMANAIARIgCAIIgCACQgDACgEAAQgYAAgJggQgEgQAAgRQAAgyAggWQAIgGAHgBQAAAAAAgBQgKADgVAAQgLAOgJAMQgUAYgCAAQgJAAgCgGQgBgDABgEQAAgMAZgdQAegjAeAQQABAAABABQAAgCAAgBQAGgNACgLQAEgSAHAAQADgBABABIAAAA").cp();
	this.shape_249.setTransform(0.2,8.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgDjOQAAAEAAAHQAAACgHAjQgBADAAADQAAABAAAAIAAABQgBADAAADQgDAGAAALQAAACAAACQgCARAAASQAAArARAqQACgDAHgDQAZgMA0AFQATAIAJAgQAGAWAAAZQABAXgKAHIgLgDQAAgBAAgBQgBgBgBgCQgCgCAAgCIADgTQgEgcgHgYQgGgGgFgCQgKgGgLgCIgXAAQgIACgJAEQgBABgBACQgCADgCACQAEADADAHQADAJAAAfQAAAAAAABQAAAGAAAFQAAAXgWAzQghBCgoAAQgEAAgCAAQgGAAgBgFQgBAAAAgBQAAgDgBgCQABgBABAAQACgJANgDQABAAABAAQAOgOAPgQQArg0AAgjQAAgLgGgXQgFgHgCgNQgBgCgBgDQgNgMgFgnQAAgBAAgBQgCgEAAgCIAAgNQgBgEAAgFQgBgMAAgOQAAgDAAgCQgCgNAAgWIAAAAQgBAAAAAAQgUATgBAEQAAASAAAKQgBAHgBAEQAOAWAAANQAAAMgKAAQgKAAgHgVQgEgKgCgLQgCgCAAAAQgBgIAAgSQAAgcAYgaIgKAAQgBAAAAAAQgPAPgJARQgBACAAACQgBgBgBgBQgDACgEAAQgMAAACgKQgCAAgCAAQAMgiAhgKQATgGARAEQABAAABABQABAAAAgBQAEgRAIgPQADgHADgEQgFgBgEgBQAFAAAFABQADgFACABQAGgMACARQADAAADABQgCAAgBAAQgBAAgCAAIAAAA").cp();
	this.shape_250.setTransform(0.6,8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgSjSQAKgLAAAUQAAgCgHAaQgBADgBADQgBAGgBAGQABAAABAAQgCAGAAAHQAAABAAAAQAAABAAABQAAABAAABQABACAAACQABABAAACQAAgBgBAAQABAFAAAFQAAAGgBAEQAGAfAMA4QABALADAKQADgNAOgBQARgBAYAPQABABABAAQAYAGALARQACADACADQABABAAAAQASAUAAAVQAAARgIAHQgBADgCAAQgBACAAABIgFADQAAgFAAgFQAAgBAAAAIgBAAQAAgCgBgBQgBgEgBgHQgFgSgOgWQgIgOgJgIQgRgHgHgBQgLAAgIADQgFAFgEABIgDgBQgBABAAABQANA6AAAFQAAArgOAYQgIAOgRARQgKAMgNAKQgJAGgLAHQgDADgFADIgCgBQgBAAgCABQgBgCgBgBIgBAAQAAgBAAgBQgCgDAAgBQAAgBABgBIAAAAQAVgTAUgZQAhgoAEgfQAAgEgEgeQgFgdgDgJIABgBQgFgQgKgbQgDgJgCgHQgGgLgBgJQgBgGAAgIQAAgFAAgFQAAgPAAgNQAAgBAAAAQgBgEgBgEQgEADgDAEQgVAYAAAVQAAAKALAPQAMAPAAAAQAAALgMAAQgUAAgJgYQgEgMAAgMQAAgrAggcQACgCACgCQgPADgNAEQgHACgIALQgHAJgGAAQgEAAgCgBQgBAAgDgDIgBgJQAAgjBRgFQADgNAIgNQACgQAGAAQACAAABAAIAAAA").cp();
	this.shape_251.setTransform(0.9,8.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("ABYisQACABABAAIgFAAQABAAABgBIAAAAABwAmQAIARAAAVQAAAMgJAAQgMAAgCgSQABgUgCgGQgDgHgRgPQgOgLgPgJIgRAAQgEABgDABQgHAGgIAJQgFAFgDABQAAABgBABQABAEgBAFQABAQAAARQAAAMgCARQgDAWgIAVQgBAFgCAFQgDAGgFAIQgBABgBACQgBABgBACQgUAogcAAQgEABgEAAQgEAAgDgDQAAAAAAgBQgBAAAAgBQgBAEAAgIQAIgCAMgIQAOgKAMgPQAKgOADgTQAEgSAIgTQAFgNAAgQQAAgUgEgSQgBgDgBgEQgFgGgDgPQgBgBAAgCIAAAAQgIgQgEggQgBgIgBgKQAAgFAAgHQAAgGAAgGQgBgIAAgDQAAgDABgKQAAgEAAgEQgBABgBABQgXAVAAAPQAAAMAIANQAJANAAAEQAAAFgEAEQgDADgEAAQgUAAgGgbQgDgNABgOQAAgcAigdQABgBACgBIgYAAQgIAEgFARQgEAPgLAAQgFAAgBgBQgEgDgBAAIAAgJQAAgIAEgKQAEgMAGgGQAUgVAdAFQAHACAGACQABgIAEgMIABgCQABgIAGgIQAAgCABgBQAAAAABABIAAAAQAIgLAAAaQgBAOgBALQgDAGAAAJQAAAEABADQgBADAAAFQAAADABADQgBAAAAAAQgCAaAAAJQAAA6AOAjQABACABACQAGgJAKgEQAQgHAXAHIAQAAQAUAHANAMQAOANAFATIAAAA").cp();
	this.shape_252.setTransform(2.1,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_249}]}).to({state:[{t:this.shape_250}]},5).to({state:[{t:this.shape_251}]},5).to({state:[{t:this.shape_252}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-13.2,24.4,42.9);


(lib.mcPlayer_jumping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AA0kAQAYATAAAbQAAAegMAdQgSAogiAIIgPAAIAAAAIgCAAQAAAAAAAAIgMAAQgBADgBACQgFASgFATQgBAEgBAGQAFABAOALQARAOAPgCQAfgFASgVQAJgLAFgLQAEAAAAABQADABAAAEQACAPgPAQQgSAUgjAFQgVADgWgQQgIgFgHgGQgHAlAFAeQACAOAKAWQAEAJAJARQAEgDAFgCQARgIAPABQA6AFANAQQAFAGAAAbQAAAVgBAFQgEASgOADQgEgBAAAAQgCgBAAgFQAMgkAAgEQAAgVgBgDQgIgRgmAAQgoAAgHAHQgBABgBABQALAKAAAdQgqCKg0AAQgGAAABgBQgCgBAAgBQgBAAAAgEQAXgTAXgZQAugxAAgkQAAgLgKgPQgDgFgCgEQgBABAAACQgKgIgKgeQgHgVgEgWQgGgoAHggIAAgBQgeAUgJATQgIANAEAcQABAGAJAZQABAGgBAEIgFADQgKgJgDgKQgBgDgDgTQgFgjAJgYQANgiAoADQAFgVAMgZQACgEACgDIgcAAQgYAAgPgjQgMgaAAgWQAAgcAQgZQAYgmAzgBQAnAAAaAWIAAAAAA/jRQAAgUgagSQgggWgvAJQgSAGgQAaQgPAZAAARQAAATAKAVQAMAZATADIA9AAQAUACARgpQAPghAAgTIAAAA").cp();
	this.shape_253.setTransform(1.5,-3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("ABOgSQAAASgPAhQgSAogUgBIg8AAQgTgEgNgZQgKgUAAgTQAAgQAPgYQAQgbASgGQAwgIAgAWQAaASAAATIAAAA").cp();
	this.shape_254.setTransform(0,-22.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AAEhKQAUACANAAQAgAeAEAFQACADAAAZQAAAWgKAVQgSAqgqAAQgtAAgVgfQgNgTAAgWQAAgQAOgZQAOgaARgMQASAAAPABIAAAA").cp();
	this.shape_255.setTransform(0,-21.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AA7kCQAcAYAAAqQAAAfgLAYQgUAtg0AAQgEAAgDAAQgDAQgEARQgBAGgBAGQADABACADQAEAGAGADIA7AAQALgEAHgLQADgEACgDQABgFABgFQAAgCAAgDQABAAACAAQAEgHAHgBQABACAAAGQAAADgDAHQAAAKgJANQgLAQgNACIhBAAQgKgCgGgGQgDATAAAQQAAAoACAGQAHAPAJAXQAIgJAXgFQAmgHAhAYQALAFAEAdQACAOAAAPQAAAFAAAJQAAAGgHAAIgHgBQgBgDACgGQABgHAAgDQAAgjgDgGQgLgbg0AAQgOAAgJAKQgCADgCACQAFADACAGQADAIAAAbQAAAXgZAxQghA8gmAAQgLAAgCgDQAAgDAAgBQASgJAKgFQASgJAFgGQAPgSAGgOQAIgSAKgSQAHgKAAgSQAAgJgKgHQgIgIgCgRQgOgKgGgmQgDgaABgbQAAgZAAgPQgBgBgCAAQgKgDgCgBIgUAAQgoAmAAAlQAAAGAEAHQADAHAAALQgBABgBACQgBACgEAAQgLAAgCgSQgBgJABgKQAAglAPgaQAXgnAzAVQAAgCAAgBQAEgdAOgPQgsgFgTggQgOgVAAgaQAAgwAcgcQAYgZAkgBQAigBAZAWIAAAAAADkCQgPgBgSAAQgRAMgOAZQgOAZAAATQAAAWANATQAVAeAtAAQAqAAASgpQAKgWAAgXQAAgZgCgDQgEgFgggfQgNAAgUgBIAAAA").cp();
	this.shape_256.setTransform(0.1,-3.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AAzg+QAXAPAAAUQAAAfgHATQgLAdggAYIgcAAQglAIgTgfQgNgVAAgUQAAhYBJAAQAcgBAXAPIAAAA").cp();
	this.shape_257.setTransform(0.4,-22);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AA4j4QgXgPgcAAQhJAAAABaQAAAVANAUQATAgAkgJIAdAAQAggXALgdQAHgUAAghQAAgTgXgPIAAAAABcjVQAAAlgLAdQgUA1gvAAQgMAAgJgBQAEAFAAAJQgEAUgDARQAHADAHAGQAWAOATAAQAdAAAQgKQAIgFAKgIQAEAAAAABQACABAAAEQAAAFgUAMQgYAPgaAAQgdAAgbgaQgDAcAAARQAAARAVA8QAFgEAIgCQATgGAXADQA9AIAAA7QAAAQgBAJIgFADQgBgdgEgTQgIgkgsAAQgaAAgOAIQgDABgDACQAFAGADAPQADATAAAZQAAAggVAdQgVAfgsASQgGgFAAgDQAVgPAUgVQAngoAAgaQAAgEgGgaQgGgZAAgIQAAgBAAAAQgFgOgKgZQgNghAAgUQAAgXACgSQgDgBgCgBQgCgBgHgEIgkAAQgNAMgIAUQgFAMgGAZQgCAAgFADQgFgFgBgHQAAgXAZgfQAegoAqAaQABgEABgDQABgGADgLQACgKABgHQAAgIABgDQgsgHgPgbQgIgNAAgfQAAg0AcgcQAXgXAjAAQAhAAAbASQAbAUAAAaIAAAA").cp();
	this.shape_258.setTransform(0,-3.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAAhLQAeABAVARQAXATAAAfQgCAUgLAVQgUAqgpAAQgtAAgSgoQgKgWAAgbQAAgeAXgRQAVgQAdABIAAAA").cp();
	this.shape_259.setTransform(0.7,-21.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AABkAQgcgBgVAQQgYARAAAeQAAAdAKAWQATAoAsAAQApAAAVgrQAKgVACgVQAAgggXgTQgVgRgeAAIAAAAAA9j5QAbAYAAAkQAAAZgPAdQgYAugvAAQgEAAgFAAQAAAFgFAcQgBAKgBAKIAAAAQAAABAAACQAAAAAAAAQABgBAHAAQAGAAAEADQAGADAfAAQAqAAAKgNQABgBADgIQACgFAFgBQAEAAAAABQACABAAAEQAAAGgMANQgNAPgLACIhBAAQgEgCgFgCQgGgEgJgDQgCAQAAAOQAAAiACAIQAIAUAJAgQAFgLANgGQASgHAaAFQBAAOAAAwQAAAOgBAHIgFADQgBgagFgQQgJggg4AAQgZAAgIANQgDAGgCADQABAFgBAGIAAAjQAAAogXAkQgZAlggAAQgGAAgDgDQgBADAAgHQAIgCAMgHQAXgNASgaQAQgbAAgfQgCgigBgLQgIgEgEgRQgHgggCgCQgFgLgBgQQAAgKABgSQAAgOADgUQgMAAgMgBQgPgBgOAAQgYATgIAWQgHAWAGAVQgGAFgBAAQgGgDgBgIQgBgBAAgNQAAghALgPQAXglBFAKQACgOAEgQQADgLACgHQgugGgRgsQgKgaACgcQAAgnAbgVQAYgTAiABQAjACAZAVIAAAA").cp();
	this.shape_260.setTransform(0.5,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_254},{t:this.shape_253}]}).to({state:[{t:this.shape_256},{t:this.shape_255}]},5).to({state:[{t:this.shape_258},{t:this.shape_257}]},5).to({state:[{t:this.shape_260},{t:this.shape_259}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-30.9,21.3,55.9);


(lib.mcPlayer_falling_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AA8iaIgaAAQgHACgJADQgLAEgJAEQgEAVAAASQAAAsAPAjQAJATAFAKQAFgBAIACQAbAFALAYQABAIAKAPQAPAWABACQAOAZACAWQAAALAAAWQAAAGAAAGQgBACAAADQAAAQAAACQgCAVgJAFIgJgDQAAgDAAgDQgBgBAAgBIAAgEQAAgDACgGQAAgLAAgOQAAgagIgnQgEgIgCgEQgOgXgGgLQgBAAAAgBQgBgBAAgBQgHgMgTgNQgDgBgCgBIgGAAQACAFAAAFQAAAjgaAuQgZAugWAAQgBABgCAAQgDAAgCgDQgDgCAAgEQAAgEAagiQAcgkAEgJQAIgZAAgQQAAgHABgEQgGgHgFgRQgMgWgFgRQgHgeAAgJQABgNAAgRQAAgOADgdIggABQgMAGgLAMQgPAPgEAJQgEAHgHAQQgFAKgGAHQgCAOgEAAQgHAAgBgKQgBgDAAgGQABgDABgDQACgcAXgdQAWgZARgCQAWgKAYAHQABgDAAgEQACgJAHgXQAFgMAIgHQAMgJAAAUQAAACgLAmQAAABAAABIACAAQACgBADgBQAagKAdACQBFAuAAAIQAAAEgEADIAAABQAAAGgFAAQgEgDgDgDQgKgEgVgQQgSgOgJgFIAAAA").cp();
	this.shape_261.setTransform(-1.2,8.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAZijIAjAAQAKADAXAGQAQAFAIAIQASANAAAQQAAACgBADQAAAAAAABQAAAHgFAAQgDAAgDgDQgFgDgOgNQgWgUgMgHQgqADgOADQgKABgBAAQgCAAgBAAQgFAYAAAQQAAAeARArQAJAXAFAMQAKAJARAVQANAJAFAIQABADANASQAKAOADAIQADAHACAIQATAkAAAVQAAAIgEAPQgGATgGAAIAAAAQgBABgCAAQgEAAgCgDIgBgEIAAgDQAAgDAAAAQAAgCABgFIABgLQAAgRgEgaIAAgBQgLgZgbglQgOgVgOgSQAAAEgBAFQAAAZgBAHQgEAQgRASQgBACgEAFQgFAKgKANQgJAMgHAHQgLALgEAAQgKAAAAgIQAAgIAfgoQAZgfAFgLQABgHACgLQABgMAAgQQgIgLgHgeQgFgMgEgIQgGgQgBgTQAAgDAAgVQgBgEgBgFQAAgKACgLQAAgDAAgDQAAgEABgFQgdAGgPAFQgWAHgNAOQgFAGgGASQgDAJgEAHQgCAGgCAIQgJAAABgJIgDgBQgBgEAAgHQAAgYAXgaQAbgeAvgEQAFgBAEAAQAGgBAEABQABgBAAgBQAFgXACgGQAEgIAGgIQABgCACgCQAMgRAAAYQgGARgFAVQAAAAAAAAQAIgCAMAAQAAAAABAAIAAAA").cp();
	this.shape_262.setTransform(-1.3,7.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("ABgh7QgRgThFgBQgGADgIAEQgIAcAAAbQAAAXAZA0QAPAaALAPQAIAHAKAKQABABAAAAQAGADAHAKQAKAIAEAFQAKAMACAJQADARACAOQAPAoAAAUQACAWgLAGIgJgDQABgDAAgEQgBgEgBgHQABgIAAgGQgHhKgzguQgGgFgGgGQgDALgKATQgDAJgEALQgCAEgHALQAAABAAAAQgGAMgFAJQgDAIgEAHQgFAHgFADQgBABgBABIAAAAQgDAAgCAAQgHAAAAgGQAAgCAKgPQAEgHAFgKQASgdADgLQAGgWAKgTQAAgEAAgEQABgBABAAQgPgUgLgXQgVgsAAghQAAgTAEgMQAAAAAAAAQABgJABgKQgXgCgXARQgJAHgDAFQgDADgFAIQgCACgLATQgKASgHAAQgCAAgCgBIgBAAQgIAAACgKQAAgXAUgSQAFgEAIgGQAkgrAnANIAAAAQAAgEAAgFQAAgQAWgfQATgeAAAgQAAABgNAiQARgGAqAOQBEAVABAYQABADAAACIAAAEQgBAEgFAAQgBAAgCgCIgBAAQgMAAgGgGQgFgJgEgFIAAAA").cp();
	this.shape_263.setTransform(-1.3,7.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAWiOQgQAAgHACQgIAqAAAMQAAAaAcA8QAKARAKASIAAABQAGAIAMAMQAGAHAKALQAIAKAGALQARAkADAGQAEANAAAYQAAACAAACQACAJAAAIQAAAEAAAJQgBAIgIAAQgHAAgHgfQgJgqgBgDQgFgMgPgUQgSgagLgTQgFgIgFgIIgCALQgYBigeAPQgHAIgDAAQgGAAgBgGIAAgBQgEgBAAgGQAAgDASgaQAWgfAJgTQAJgUACgTQABgPAFgEQgQgdgHgPQgFgLgEgNQgKgdAAgdQAAgLAEgUQABgFAAgFQAAABgBAAQgJAFgLAFQgvAYggAjIAAgBQgBACgBABQgIAAAAgHQAAgEABgDQACgHAGgIQAOgRAkgUQAPgJAMgFQAQgIAKgCQABgBAAgBQAAgFAEgKQACgFADgKQADgIAEgGQAEgIAEgDQAJgEAAAMQAAAGgIAlQAVgCAiAGQBSANAAAbQgBAGgDADQgBADgFAAQgCAAgPgOQgEgCgEgCQgegRgzAAIAAAA").cp();
	this.shape_264.setTransform(-0.8,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_261}]}).to({state:[{t:this.shape_262}]},5).to({state:[{t:this.shape_263}]},5).to({state:[{t:this.shape_264}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-13.9,26.8,44.9);


(lib.mcPhysObj_hitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("ACViUIAAEpIkpAAIAAkpIEpAA").cp();

	this.addChild(this.shape_265);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.mcCharacter_hitbox = function() {
	this.initialize();

	// Layer 1
	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(1,1,1).p("AB9krIAAJXIj5AAIAApXID5AA").cp();
	this.shape_266.setTransform(15,30);

	this.addChild(this.shape_266);
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
	this.initialize(mode,startPosition,loop,{},true);

	// Tile
	this.instance = new lib.mcTiles_Spawn();
	this.instance.setTransform(33.2,25.2,1,1,0,0,0,0.8,-6.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF0000").s().p("ACYgxQgGADgrAOQgOAFgJAQQgJAMgKAAQgSAAAAgNQAAgiBBgaQBAgbAAAcQAAANgUAJIAAAAAirhAQAAgZA+AUQA+AUAAAeQAAAFgEAFQgEAGgJAAQgDAAgcgSQgbgSgCgBQgPgGgUgDQgMgDAAgMIAAAAAhKA/QAAgSBMADQBOACAAAVQAAAJgHADQgGADgMAAQhbAAgagHQgMgEAAgMIAAAA").cp();
	this.shape_267.setTransform(31.3,32.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AkZlDIAEAAQgBgBAAgBQACgCASACQAcADAbABQAEgBABgBIBEAAQARAAARABQACgBACABQA1AAAtACQACAAADAAIAOAAIBZAAIAaAAQAHgBAPgBQARgBAfgCQA8AAAQAHQAGABAFAFIAGAAIAAAAIAAAGQAAABABAAQgBABAAABIAAI6QABABACAAQAAABABACQAAAHgOANQgKAKgKAIQgHgFAAgJQACgKgBgDQgDACgBAKQgDAHgLAAQgKAAgEgDQgHgEgBAAQgCACgCADQgBACgDAAQgHAAgBgEQABgHgCgBQgBABgGAGQgGAFgHAAQgFAAgHgDQgHgEgBAAQgDAAgCAGQgCAHgFACQgGgBAAgIQgRAVgGAEQgBABAAABQgBgBAAgBQgFgCAAgDQAAgDgEAAQgGAAgBgGQABgGgCgBIgDgBQgEACgKAOQgGgCABgGQAAgEgPAAQgEAAgCAEQgEAGgFAAQgNAAgRgPQgOgKgIgKQgGAUAAACQgGASgHAAQgGAAgBgBIgBgQQADgLABgIQgpAYgCABQgGgBAAgHQAAgBAAAAQAAgBAAAAQAAgGAAgCIgDgEQgBABgGAJQgFAIgEAAQgCAAgCgDQgBgEgCgCQAAACAAAJQgBAIgIAAQgHAAAAgCQgBgLADgHIgBgDIgLABQgBALAAABQgEAHgJgGQgEAHAAABQgDADgEAAQgGAAABgBQgEgGAEgFQgFgJgLgHQgLgHgDgFQgJAEABAKQAAAQgBADIgGACQgFgCgHgEQgHgGgDgFQgCABgCAIQgDAHgGAEQgDgFgCgDQAAgEgBgBQgBAEgBAEQgCAFgGAAQgGAAAAgCIgBgLIgBAAQgDAMAAABIgFACQgFgCgCgHQgCgFABgGQAAgBgBgBQgBgCgDAAQgEAAgCADQgDADgBAAQgGgCAAgGIABgIQgCAAgEADQgEADgCAAQgGgCAAgGQAAgDALgPIAApBQgBgBAAgBQAAgJALAAIAEAAACShAQATgJAAgNQAAgdg/AbQhBAbAAAiQAAAPARAAQAKAAAJgOQAKgQAOgFQAqgOAHgDIAAAAAhQAwQAAALAMAEQAZAIBbAAQANAAAGgDQAGgDAAgJQAAgWhMgCQhNgCAAASIAAAAAiyhQQAAAMAMADQAUAEAPAGQACAAAcATQAbARAEAAQAIAAAEgGQAEgEAAgGQAAgeg+gUQg+gUAAAZIAAAA").cp();
	this.shape_268.setTransform(31.9,33.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AARAQIgBAAIgQAAQgvgCg2AAIAAgBQgBAAgCABQgRgBgSAAIhDAAQgCABgEABQgagBgdgDQgRgCgDACQABABAAABIgDAAQgDAAgCAAQgMgCAAgLQAAgKAJgDQAJgEAXAAQAVAAACABQABAEAFAFIBkgBQAIgJAXAAQAUAAAIAGQAIAGAPAAQARAAAHgEQAIgFAYAAQAgAAAEAFQAFAEAPAAQAYAAAIgFQAMgIAIgBQArgHAKAHQAOAJAhAAIAugHQAYAAAQANQALAHAAAHQAAALgNADIgGAAQgFgFgFgBQgQgHg8AAQgfACgSABQgNgDgIAAQgTAAgHAFIhZAA").cp();
	this.shape_269.setTransform(32.8,-0.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#91D2FF").s().p("Aj4kpQACgBACgBQAAABABAAQABAAAAABQAAABAAACQAAAFgHAIQgIAHAAAFQAAAIAWAJQAVAKAAAGQAAAGgJAIQgOALgCACQACABAEAEQADAEABABQgBABgBADQgCADgDAAQgOAAgEgSQAAgFAIgHQALgIADgEIABAAQgXgNgGgEQgJgIAAgKQAAgLAEgGQAFgGAMgFIAAAAAC7EiQAAAAAAABIgBAAIgEACQgFgBgCgEIAAg7QAPAAAAAPQABAHgDAJQAAASgBAMIAAAAADrkOQAAACgBABQgCADgEAAQgJAAgBgBQgDgBgJgJIAAAAQgBAAAAgEQAAgDALgLQAMgMAJgBQABgCAAAHQAAAFgFAFQgGAFgCACQAKALAAADIAAAAACKkNIAIgKQAKgKAGAAQABgBAAAGQAAAHgGAIQgGAHgGAAQgBAAgBAAQACACAAABQgCADgBACQgCACgCAAQgIAAgQgKQgEAFgLAKQALgBAPANQASAPAAAEQAAAEgIAGIgHAGQAIgBALAJQAIAGAFAHQgCADgBACQgCACgDAAQgGAAgIgJQgGgJgSADQgCgBgCgBQgCgBAAgEQAAgBAHgJQAGgIACgCQgBgCgBgBQgDAFgJAIQgOALgIAEQgCgBgDgBQgCgCAAgEQAAgDAQgMQALgJAHgDQgDgDgFgEQgJgHgDgGQgPALgHAEQgHgHAAgCQAAgFAXgPQALgGAGgEQgIgFgHgGQAAgHAMgMQAMgMAIgBQABgBAAAHQAAAIgSAQQAXAJAKAGQAAgBAAgCIAAAAABUhIQgSAFgTAAQASAVAIAHQgCADgBACQgCACgDAAQgPAAgTgbQgQgXAAgFQAAgGAHgBQAEAEANAOQAEgEAWgDQATgDASAAQABgCAAAHQAAAEgTAFIAAAAAD5hgQgFAUgFAEQgDgBgBgBQgCgBAAgEQAAgMADgOQAGgWAKgCQABAAAAAGQAAAKgEARIAAAAADTAQQACABAAAEQAAAFgIAJQAAABABABQAKANgDAHQAAADgGAAQgCAAgIgKQgCgCgCgCQgEADgFAEQgGgCAAgGQAAgIANgJQAPgMABgBQABABADAAIAAAAACoAoQgIASgHANQADAAABABQAAABABADQAAAJgKAAQgCAAgBAAQgKAQgIAHQgHgCAAgGQAAgVAZgbQgFACgEAFQgEAEgEAAIgFgBQgCgBAAgBQgBAAAAgEQAAgHAQgHQAQgIAPAAQAAACABAEIAAAAAhgj+QAHAHAAABQAAACgBABQATAOAHAaQgBAAgBACQgBACgEAAQgMAAgIgMQgJgLgFgFQgBAAgBABQgNAKgJAEQgBgBgDgBQgBgCAAgEQAAgEAHgFQAFgEANgIIglgBQgDAAgBgBQAAgBgBgBIAAAAQgBAAAAgEIABAAQgBgBAAgBQABgBADAAQBPhJAAARQAAAFgeAeQgNAMgJAHQAKAAAPAAIAAAAAAAijQgKASgBACQACACAUALQARAIAAAGQAAAEgOAVQgOAXgJAGQgBgBgDgBQgBgCAAgEQAAgIAKgNQAEgIANgPQgDgBgRgLQgUgMAAgCQAPgsATgCQABgCAAAHQAAACgIAQIAAAAAiQguQAAABABAAQABAAAAAEQgRAsAAAHQAAAFAJAMQAIALAAAEQAAAWgMAMQgKAKg0AgQgEgBAAgBQgCgBAAgEQARgMARgMQAigYAAgVQAAgEgJgLQgJgLAAgGQAAgKAJgWQAJgaAKACIAAAAAjMA8QgtgsAAgDQAAgOAVARQATARAMAVQAAACgBACQgCACgEAAIAAAAAgiCXQAFgXAAgOQAJgDACAEQABACAAAIQAAAHgGAdIgGACQgFgGAAgGIAAAAAAeDoQgDACgDABQgGgEAAgTQAAgWAGgCQAFADABACIAAAnAA6EVQgCAXgLAAIgHgBQAAABAAgHQAUiUAABoQAAADAAAZIAAAAAhTDJQgCAIgJAEQgFgCAAgGQAAgEACgJQADgJAAgLQAJgEACAHQABADAAAJQAAAKgBAEIAAAAAiBE4QAAgKgDgVQgCgTAAgCQAAgDAAgDQARAAADAZQACANgCAPQAAAGgCgBIgGABIgHgBAi9DWQARgBADALQACAGgCASQAAAFgEAeIgGACQgDgHAAgdQAAgDgDgLQgEgLAAgKIAAAAAjCEeQgBACgEAAQgDAAgMghIAAgGQATgDADAmQAAAAgCACIAAAAAkFEdQgHAAgEgVIgCgVQAAgKAGgHQAGgHAAAUQAAAGAEANQAEANAAAFQAAADgBAEQgBAAAAABQgBABgEAAIAAAAAESEYIgFADQgJgQgFggQgFgbAAgXQAAgTANAfQAMAfAAAaQAAARgBAJIAAAAADpD1IAAAgQgEACgCABQgHgGAAgOQAAgPAHgFQAFADABACIAAAAACWDsQAAAFgPAhIgDABQgFgCgBgDQgBgBAAgEQABgJAEgIQAHgQAMAAQAAABABADIAAAA").cp();
	this.shape_270.setTransform(33.3,32);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AkqlMQgIAAgDgHQgBgDAAgDQAAgNAOAAQACAAABAAQAEgDAEAAQACAAAeAIQAfAHAOAAQA3AAANgGQAGgHAMgCIBIAAQATgGAkAAQAoABANAHICUAAQABAAAOgEQAUgFAcAAQAWAAAIAHQAMADAAAPQAAAHgFAEQgEACgDABQgBAAgBAAQgEAAgDgCQgDgCgBgDQgHAAgKAAQgUAAgNACQgDABgCAAQgMAFgGABIidAAIgmgHIgPgCQgDAAgQACQgLACgPACIgzABIgHAAQgBABgBABQgKAMguAAQgEAAgEAAQgQAAgXAAQgcAAghgLQgOgEgIgEQgDACgFAAQgBAAgBAAIAAAAAAPiqQAJgQAAgCQAAgHgBACQgUACgNAsQAAACARAMQATALADABQgMAPgGAIQgLANAAAIQAAAEACACQACABACABQAKgGAPgXQANgVAAgEQAAgGgQgIQgWgLgDgCQACgCAKgSIAAAAAhQkFQgOAAgLAAQAKgHAMgMQAegeAAgFQAAgRhPBJQgDAAAAABQAAABAAABIAAAAQAAAEAAAAIAAAAQABABABABQABABACAAIAmABQgOAIgEAEQgIAFAAAEQAAAEACACQACABACABQAIgEANgKQABgBABAAQAGAFAIALQAJAMALAAQAEAAABgCQACgCAAAAQgGgagUgOQABgBAAgCQAAgBgHgHIAAAAAC4AhQgBgEAAgCQgOAAgRAIQgPAHAAAHQAAAEAAAAQABABABABIAFABQAEAAAEgEQAFgFAFgCQgZAbAAAVQAAAHAGABQAIgGAKgRQABAAACAAQAKAAAAgJQgBgDAAgBQgBgBgDABQAHgOAIgSIAAAAADjAKQgCAAgCgCQAAACgQALQgNAJAAAIQAAAHAHABQAFgEAEgDQABACACACQAIAKACAAQAGAAAAgDQADgHgKgNQAAgBgBgBQAIgIAAgGQAAgEgCAAIAAAAAEJhnQAEgRAAgKQAAgGgBAAQgKACgFAWQgEAOAAAMQAAAEACABQABABAEABQAFgEAEgUIAAAAABlhPQASgFAAgEQAAgHgBACQgRAAgTADQgWADgEAEQgNgOgFgEQgGABAAAGQAAAFAQAXQATAbAPAAQACAAACgCQABgCACgDQgHgHgSgVQASAAATgFIAAAAACakUQAAACABABQgLgGgWgJQARgQAAgIQAAgHgBABQgHABgMAMQgMAMAAAHQAHAGAIAFQgHAEgKAGQgXAPAAAFQAAACAGAHQAIgEAOgLQADAGAKAHQAEAEAEADQgHADgLAJQgQAMAAADQAAAEACACQACABACABQAJgEANgLQAJgIAEgFQABABABACQgCACgHAIQgHAJAAABQAAAEACABQADABACABQARgDAHAJQAHAJAGAAQAEAAACgCQABgCACgDQgFgHgIgGQgMgJgIABIAIgGQAHgGAAgEQAAgEgRgPQgPgNgMABQAMgKADgFQARAKAHAAQADAAACgCQABgCACgDQgBgBgBgCQABAAABAAQAFAAAGgHQAGgIAAgHQAAgGgBABQgGAAgJAKIgJAKAD8kVQAAgDgKgLQACgCAGgFQAEgFAAgFQAAgHgBACQgIABgMAMQgLALAAADQAAAEAAAAIAAAAQAKAJACABQACABAIAAQAEAAACgDQABgBABgCIAAAAADLEbQABgMAAgSQADgIAAgIQgBgPgOAAIAAA7QABAEAFABIAFgBQgEAFgEAIQgHAMgHARQgHgHgGgaQgGgXgGAAQgMAAgLARQgFAKgIANIgBgBQAAgGgFgPQgGgPgEAAQgEAAgCACQgCAAgCAAQgKAAgWAbQgMAOgNASIAAAAQgKgtgOhYQgIgwgFAAQgPAAgEBDQgBAbAABRIgBAAQgCgEgOg5QgJgngTAAQgBAAgWA7QgaA+gUATIgBgBQABgkgCgTQgDgigQAAQgHAAgGAbQgHAkgMAQQgHgegEgSQgHgfgLAAQgOAAgJAQQgGAKgFAOIgBAAQABgPgBgJQgBgQgKAAQgJAAgEAHIAAgBQgShfgBgJQgBgJAAhFQAFhbABgZQACAAABAAQgBgEgBgDIAAgEQAAgXgFAKQgBgYAAgeQgBgbgBgjQgBgegBgiQAAgYAEgRQAEgRAAgpIAbAAQAYALAIABQgNAFgFAGQgEAGAAALQAAAKAJAIQAGAEAXANIAAAAQgEAEgKAIQgJAHAAAFQAFASANAAQAEAAACgDQABgDAAgBQgBgBgDgEQgEgEgCgBQACgCAOgLQAJgIAAgGQAAgGgVgKQgVgJAAgIQAAgFAHgHQAIgIAAgFQAAgCgBgBQALAAADAAIBQAAQApgHAfgKIBKAAIAEACIClAAQACgBAgABQAUAAA3ABQAHAoADAUQAFAiAAAWQAAAagBAXQgCAggFAZIAACJQAIASAAAgQAAA7gFA7QgLB0gdAAQgBAAgsgzQgHAAgHAJIAAAAAEjESQABgKAAgRQAAgagNgfQgMgfAAATQAAAXAEAcQAGAfAJAQIAFgCAj1EXQAEAAABgBQABgCAAAAQABgDAAgDQAAgGgDgNQgEgMAAgHQgBgUgGAHQgGAHAAAKIACAVQAEAWAHAAIAAAAAixEYQABgCABAAQgDgngTADIgBAGQAMAhAEAAQAEAAABgBIAAAAAitDPQAAAKAEALQAEALAAADQAAAdADAIIAGgDQADgeAAgFQACgRgCgHQgCgLgSABIAAAAAhwExIAGABIAGgBQACABAAgGQACgPgBgMQgDgagRAAQgBADAAADQAAACADAUQACAUABAKIAAAAAhCDCQABgEAAgKQAAgJgBgDQgDgHgJAEQAAALgCAJQgDAJAAAEQAAAGAGACQAJgEACgIIAAAAABKEOQAAgZAAgDQAAhngUCTQAAAHABAAIAHABQAKAAACgYIAAAAAAvDhIAAgnQgBgCgFgDQgHADAAAVQAAAUAHAEQACgCAEgCIAAAAAgSCQQAAAGAGAGIAGgCQAGgdAAgHQAAgIgBgCQgCgDgKACQAAAOgFAXIAAAAAi7A1QAEAAABgCQABgCABgCQgNgVgTgRQgVgRAAAOQAAAEAuArIAAAAAh/g1QgKgCgKAaQgIAWAAAKQAAAGAJALQAIALAAAEQAAAVghAYQgRAMgRAMQAAAEABACQABAAADABQA0ggALgKQAMgMAAgWQAAgEgJgLQgJgMAAgFQAAgFASguQAAgEgBAAQgBAAAAgBIAAAAACnDlQgBgDAAgBQgNAAgHAQQgDAJgBAIQAAAFAAABQABACAFADIAEgBQAPgiAAgFIAAAAAD5DvQgBgDgFgCQgGAFAAAPQAAANAGAHQADgBADgDIAAgf").cp();
	this.shape_271.setTransform(31.6,32.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgUlnIAiAAIAmAGICdAAQAGgBAMgEQACgBADAAQACAAA0ACQADACAEAAQABAAABAAQAJAcAGAjQAFAjAAAdQAAAYgBAZQgCAegEAgIAABMQABAEgBAFQAAAgAAABQAAAJAEAWQADAXAAAKQAAAUgCArQgDArAAAVQAAAogHAeQgJApgWAKIgSAAQgJgEgCgGQgBgIgDgEQAAABgBAUQgBANgJAAIgFAAQgCgCAAAAQgBgBAAgEQAAgDADgHQACgIAAgDQAAgKgDgFQgGgJgDgLQgNAXgfA/QgEgFAAgXQAAgPgSgrQgnA4gFAAIgHgBIgBgHQAIgSAAgFQAAgKgCgFQgDgGgCgFQgKAKghAfQgaApgEAAQgGAAgBgBIgBgHQAAgDADgIQACgJAAgCQAAgDgNg9QgLg+AAgXIgBgCQgDAogFCQIgGACQgNgVgNgpQgPgvgIgPQgDAkgVAvQgYA1gVAAQgPAAgCgdQAAgkgCgNQgEAKgIAaQgJAZgOAMQgQgQgGgZQgBgHgFgnIAAgCQgKAHgOAiQgOAfgDAAQgGAAAAgBQgDgrAAgXIgBgBQgFAJgEATQgGAQgQAGQgGgBAAgGQAAgDAIgPQAHgPAAgNQAAgOgIglQgKgpAAgEQgDgTABgkQAAgiAAgEIAAhNQAAgTAFgTQgBAAgCAAQAAghgBguQgBgcAAgjQgBgdgBghQAAgwACgZQgEgjAOgIQABAAABAAQAFAAADgDQAIAFAOAEQAhALAcAAQAXAAAQgBQAEABAEAAQAuAAAKgMQAGgCADAAIAzgBQAPgDALgBIAAAAADHEDIAAAAQAAgBAAAAQAHgKAHAAQAsA0ABAAQAdAAALh1QAFg6AAg7QAAghgIgRIAAiKQAFgZACggQABgWAAgaQAAgXgFgiQgDgUgHgoQg3gBgUAAQggAAgCABIilAAIgEgCIhKAAQgfAKgpAHIhQAAQgDgBgLAAQAAAAAAAAQgBAAAAgBQgCAAgCABQgIAAgYgLIgbAAQAAApgEAQQgEARAAAYQABAjABAdQABAjABAcQAAAdABAZQAFgKAAAWIAAAFQABADABADQgBAAgCABQgBAbgFBZQAABFABAJQABAJASBfIAAABQAEgIAJAAQAKAAABARQABAJgBAPIABAAQAFgPAGgJQAJgRAOAAQALAAAHAgQAEASAHAeQAMgQAHgkQAGgcAHAAQAQAAADAjQACATgBAjIABACQAUgTAag/QAWg7ABAAQATAAAJAnQAOA6ACAEIABAAQAAhSABgaQAEhEAPAAQAFAAAIAxQAOBYAKAtIAAAAQANgSAMgOQAWgbAKAAQACAAACAAQACgDAEAAQAEAAAGAQQAFAOAAAHIABABQAIgOAFgJQALgRAMAAQAGAAAGAWQAGAbAHAGQAHgQAHgNQAEgIAEgFIAAAA").cp();
	this.shape_272.setTransform(32,35.3);

	this.hitbox = new lib.tile_hitbox();
	this.hitbox.setTransform(31.4,32,1,1,0,0,0,31,31);
	this.hitbox.alpha = 0;

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#91D2FF").s().p("AEoj+QgCgEgCgDQgFgIgKgIQgDgDgDgCQgCgOgPAAQgOAAgLAHQgEgFgJgCIh2AAQgIAAgDAEQgKgCgKgBQgogGgGAMIhWAAQgBgCgGAAIgoAAQAagGAWgHIBKAAIAEACIClAAQACgBAgABQAUAAA3ABQAEAYADAQQAAAEABADIAAAAAEKjvQABAEABADQgDgCgCABQAAgJAAgJQABAFACAHIAAAAAC6jHQAAABAAACQgJABgPAKQAEgDAAgFQAAgCAAgDIAMAAQAEgBAEAAIAAAAADPjqQgGgFgIgFQAEgDACgDIATAAQACgBAQgFQgIAMgFAJQgHAAgJABIAAAAAEnAnQgBgMgIgJIAAhNQABgHAGgjQAFglAAgHQAAgCAAgBQAEgLABgSQgBA6gHAoIAAB2AEnA0IAABWQgCgVgMAAQABgFAAgFQABgDAAgDQADgEAAgDQAAgJgBgGQAAgIAAgJQAIgCACgIIAAAAAEnCnIAABCQgCgMgPAAQgCAAgIACQgDABgEABIABgBQATgJAAgNQgCgPgLgBQACgGADgFQADACAFAAQALAAADgKIAAAAAEnDxIAAAfQgCgFgFgDQAAgBAAgBQAAgEgEgFQABgBACgBQAHgEABgGIAAAAAETEpIgLAAQgDgEgHgDQgKgGgQAAQACgBACgBQAGgDAAgJQAAgBAAgBQAKADAHACQABAFAHAJQAGAHAGADIAAAAADCEdQgHAAgJABQgoACgKACIhFABQgXAEg3AKIhrAAIiogXQgDgbgDgPQgCgJAAgUQABgKABgJQADAIAKAAIAAAAQABAJAHACQACAAAEABQgRAGAAALQAAAEACAEQAEAHAJABQgRAGAAANQAAAFABADQAEAIALAAQADAAAKgDQAJgCADAAQAMAAAKAAQADAIAWAHQAYAHAZAAQAPAAAFgHQAdgBARgHQACgBACAAQAGAEAMAAQACAAADAAQAAABACAGQAIAIAfAAQAaAAAHgDQAGgCAAgKQAAgBAAgBQA5gDAUgIQAZAMBKABIAAAAAkpCQQAAgRAAgLIAAhgQAFAoALARQgBACAAADQAAAFAEAeQgNAMgGAPIAAAAAkqhMQgCgygChKQAAgYAEgRQACgIABgMQABgPAAgXIAbAAQAZAMAIAAQAOAAAEAAIAnAAQgMACgSAEQgjAGAAAOIAAAAQAAABAAACQgNABAAANQAAAGACACQACAEALAEIAqABQACAAABAAQgCABgCAAQgFgDgHAGQgxALAAANQAAAGACACQACAEAKAEQgJALgFAKQgBgRAAgQQAEguACgUIABgOQAAgcgRAOQgNANgEAPQgBADgBADQgCARAAArQAAAhADAdQgIAIAAANQAAALgBAVQAAACAAACIAAAAAAwjFIAhAAQgEACgGAFQgIgEgPgDIAAAAAD8CMQgEAHgCAIQAAAAgGAPQgHgGgPADQAJgJAMgLQAGgFAFgFQABACABABIAAAAACsCAIABgBQAFgGANgLQAHgHACgGQAIgDAHgEQALgDAJgDQgkAcgbAQIAAAAACiCoIgBACQgDAEADAIQgFgDgFgDQgCgBgCAAQAGgDAJgEIAAAAABdA4QgEAAgEgBQAHgDAGgCQgDADgCADIAAAAACcBcQgEADgEAEQgOgDggANQgDABgDACQgBgCgBAAQAEgCAKgHQALgBAOgCQAMgBAFgFIAGAAABzg8IAeAAQgCABgBACQgMgCgRAAQABgBABAAIAAAAAD8AuQABgDACgDIAAACQgBABAAADQgBAAgBAAIAAAAADCAUQAIgDAGgDQgFAUgSAWQgBACgCACIgbABQAYgXAPgSIAAAAADGg8IAPAAQgdAXgcAbQgKACgNAEQgGACgGACQAFgCAFgEQAxgiASgUIAAAAAD0hDQABAMAAAFIgBAaIgBAAQAAgkgRgFQADAAADAAQAHAAAFgCIAAAAADMhqQgCgBgCgBQABgCABgBQADgEABgDQADgGAEgHQADgHAEgIQAFAQAAANIAAALIgVAAAD3itQABAAACgBQAAAFAAAHQgCgGgBgFIAAAAAB0htQAAgBAAAAQAAgCgBgBIAGABQgDACgCABIAAAAACbiGQAAgCgBgBQAEgDAFgDQAGgEAFgEQgCAEgBAEQAAACgBADIAAAAQgGADgFADQgCgBgCgBIAAAAACci1QABAAABgBQgKAIgNALQAAgDgBgCQAJgHANgGIAAAAAB2kBQAAABABAAQgLADgMADQgnALgYAIIgFAAQgJABgKABIgDAAQgFABgDABQAZgTAMgLIBTAAABdjFIAjAAQgQAIgGAAIgHgFQgDgCgDgBIAAAAAArhmQgBACgBADQgIABgJABQAKgEAJgDIAAAAAAoiWQAAAEAAADQgKgEgNgEQgRgGgLgBQABAAAAAAQAKgGAIgFQAXADAPACQgGAJAAAFIAAAAAhchoQANgHAKgGQAJAKAIAKQgagDgSgBQACgBACgCIAAAAAgiiTQgBABAAACQAAAIAGAEQAIAGAXACQACAAAHADQgNAGgOAGQgHgHgIgHQgIgHgGgFQAGgGADgGQABAAABAAIAAAAAgmjzQgDADgJAEQgGAAgGAAIgOAAIAmgHABuDCQAAAGADAEQgCAAgDAAQAAgCAAAAQAAgFgBgCQgBgCgCgBQADgBAEgBQgBACAAACIAAAAAkMDyQADAAACgBIAAABQgCAAgDAAIAAAAAjZDXQABAAABAAQABAAABAAQgCABgCABQAAgBAAgBIAAAAAhvD+QgBAAgCAAQgNADgDAAQgBAAgMgHIAiAAQgBACgBACIAAAAAhoDBQAAgBAAAAQAAgBgBgBQAKgDANgEQACgBADAAQgEABgDACQgLAEgJAEIAAAAAgMDBQANgHARgHQAKgFAJgDQAEADAGABQgHAEAAAFIAAACIgOAAQgSAEgUADIAAAAABTCiQgOADgJAEQAAgCABAAQACgEAAgEQAWgKAQgHQgQAPgCAFIAAAAABRBpIAAAAQgBAAgBAAQABAAABAAIAAAAAhwBqIACgBQAAgBABgBQABACABABQAHAJAXAAQAaAAAggDQgGABgGACQgXAFgZAKQgBgIgHgDQgTgJgGgEIAAAAAgeA6QAEAHAJAAQAJAAALgCQgBAAAAACQAAAAABAIQABADACABQgIABgIABQgNgGgYgGQAIgFAJgEIAAAAAhUAWQAAgJAHgJQAAgBABgBQAQAQANAMQgUAIgZAJQgHACgEADQgCAAgCgBQgBgKABgDQAXAFAAgVIAAAAAhxgvQgCAAgCACQgBgCgBAAIAGAAAgzgMQgDgDgCgEQADAAADAAQACACADABQAIALAIAHQgLgGgLgIIAAAAAA+gCQgBAAAAABQgBgHgDgDQAGgHAFgGIAjgCQgPAJgaAPIAAAAAA0g3QguAFgQAGQgKgBgLgCQgBgBgBgBQAvgGAjgFIALAAQgEADgEACIAAAAAj3AiQAZAQARAKQgdAAgOACQAAgOABgOIAAAAAjwChQARAGAPAHQgEADgFADQAAAAgBAAQgKAAgJAAQAAgBAAgBQgCgJgBgIIAAAAAibCaQgCACgCADQgEgCgEgBQAGgBAHgDIgBACAi2CVQgGgDgGgCQAFAAAFAAQAAADACACIAAAAAinBoQAAACAAABQgFAAgGABQgCAAgCAAQgDgJgKgHIAngBQgLAJAAAEIAAAAAkPCiQAAADABADQAAAEABALQgCgRAAgEIAAAAAj5BcIAMAAQAAABAAABQAJANAIAIQgUAFAAAJQAAABAAABQgCAAgCAAIgFgnAj2gYQgBgEAAgEQACABACABQgCADgBADIAAAAAjugxQgHACgCAIQAAgKAAgIIAPAAQgEADgCAFIAAAAAiHAXQgGgFgGgGIAMAJQAAABAAABIAAAAAjJAHQAGAGAGAFQgCADgBAFQgKgFgNgGQgIgDgHgCQAFgIAHgJQAIAHAJAHIAAAAAi7g3QAAAFABACQACAFAJAEQgPACAAANIAAABQgHgGgGgEQAHgOAAgDQAAgEgBgDIAKAAQAAAAAAACIAAAAAjghZIgaAAQgBgJgBgJQAGACAJAAQAMAAAZgMQAEgBADgBQggASAAAHQAAADABACIAAAAAjjiXQgCAAgCABQAKgMAIgLQADgEACgEQAGgBAKgEQABAAABAAQADAGAKAAIAWgDQgWAJgIAFIAAAAQgEgKgLAAQgKAAgJAQQgFAHgDAFIAAAAAiTkDIgNAAIADAAIAwAAQgLAEgFAEQgKgHgMgBIAAAA").cp();
	this.shape_273.setTransform(32.1,32);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("Akqk8QAAAAAAABQAGAHAVAAQAIAAAFAAQAJADAPACQALACAIAAQAOABASAAQAHAAAMgBIAZAAQAPgEAKgCQAggGAOgDQABgBABAAIApAAICJAAIAJACIBmAAQAKAAAHgBQAPAAAnACQAIAYAGAdQABAGABAFQAFAjAAAeQAAA1gHA5IAAFyQgCACgDAHQgCAFgEABIgjAAQgHgFgFgDQgKgFgTAAQgHAAgiACQgmACgKACIhJABQg5AJgVAFIhpAAQhegWhIACQgRgDgEgRQgDgNAAg3QAFioAAgZQAAgqgFiuQAAgmABgYQABgFAAgFQgFgnATgGIAAAAAhwkjIgrAAQAAAAgWAEIgnAAQgEAAgOAAQgIAAgZgMIgbAAQAAAXgBAPQgBAMgCAIQgEARAAAYQACBKACAyQgCARAAABQgBAmAEAjQAAACAAADIAABfQAAAMAAARQgFALAAAOQAAAAAAAPQAAAEACAEQgBAJgBAKQAAATACAJQADAQADAbICoAWIBrAAQA3gJAXgFIBFgBQAKgBAogDQAJAAAHgBQAFAAAFAAQAQAAAIgBQAQABAKAFQAHAEADAEIALAAQAEACAEAAQAPAAAAgQQAAgGgDgGIAAgeQABgCAAgCQAAgDgBgBIAAhCQABgBAAgBQAAgBAAgQQAAgFgBgFIAAhXQABgCAAgDQAAgEgBgDIAAh2QAHgoABg6QAAgIAAgJQAAgVgFghQgBgDgBgDQgBgDAAgEQgDgQgEgYQg3gBgUAAQgggBgCABIilAAIgEgCIhKAAQgWAHgaAGIAAAA").cp();
	this.shape_274.setTransform(32.1,32);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("Ah/kTQgDAAgDAAQgaAEgSACQgMABgHAAQgSAAgOgBQgIAAgLgCQgPgCgJgDQgFAAgIAAQgVAAgGgHQAAgBAAAAQgDgEABgEQAAgQAeAAQAKAAAHACQAHgBAKAAQAXAAAGAEQAGADAfAAQAHAAASgEQAegGApgHIBVAAQABgBAEgBIBaAAQARADADABIBdAAQABAAAAAAQABgYAqAOQATAGALAGQAFABAGACQAZAKAAAOQAAAGgDAEQgDAEgHAAQgIAAgNgMQgCABgCAAQgPAAgSgHQgGAEgLACQgIABgJAAIhnAAIgIgCIgOgCIhOAAIgHABIgnABIgpAAIgBAAQgBAAAAABQgOADggAGIAAAAAi+j/QAWgEAAAAIArAAIAoAAQAGAAACACIBVAAQAHgMAnAGQAKABAKACQAEgEAIAAIB1AAQAKACADAFQAMgHAOAAQAPAAABAOQADACAEADQAJAIAGAIQACADABAEQACADABADQAFAhAAAVQAAAJgBAIQgBASgDALQAAABAAACQAAAHgGAlQgFAjgCAHIAABNQAIAJACAMQAAADAAAEQAAADAAACQgCAJgIABQgBAJAAAJQABAGAAAJQAAACgDAFQAAADAAACQgBAGgBAFQANAAACAVQAAAFAAAFQAAAQAAABQAAABAAABQgDAKgMAAQgFAAgDgCQgCAFgCAGQALABABAPQAAANgTAJIAAAAQADgBADAAQAIgCADAAQAOAAADAMQAAABAAADQAAACAAACQgCAGgHAEQgBABgCABQAFAEAAAEQAAABAAACQAEADADAEQADAGAAAGQAAAQgPAAQgEAAgFgCQgFgDgGgHQgHgKgBgEQgIgCgJgDQAAAAAAABQAAAKgHADQgBAAgDABQgHABgQAAQgGAAgFAAQhJgBgZgLQgUAHg5ADQAAABAAABQAAAKgGADQgGACgcAAQgfAAgIgHQgBgGgBgCQgCAAgDAAQgMAAgGgEQgCABgCABQgRAGgdABQgFAIgPAAQgZAAgYgIQgWgGgCgIQgLgBgMAAQgDAAgJADQgKACgDAAQgLAAgEgHQgBgDAAgFQAAgOARgGQgJAAgEgHQgCgEAAgEQAAgLARgHQgEAAgCgBQgHgBgBgKIAAAAQgKAAgDgHQgCgEAAgEQAAgPAAAAQAAgOAFgLQAGgPANgMQgEgfAAgEQAAgDABgDQgLgRgFgnQAAgDAAgCQgEglABgkQAAgBACgRQAAgCAAgCQABgVAAgLQAAgNAIgIQgDgdAAghQAAgrACgRQABgDABgDQAEgPANgNQARgPAAAcIgBAPQgCAUgEAuQAAAQABARQAFgKAJgLQgKgEgCgEQgCgCAAgGQAAgNAxgLQAIgGAEADQACAAACgBQgBAAgCAAIgqgBQgLgEgCgEQgCgCAAgGQAAgNANgBQAAgCAAgBIAAAAQAAgOAkgGQARgEAMgCIAAAAADCjKQAKgBAGAAQAFgJAIgMQgQAFgBABIgTAAQgCADgEADQAIAFAFAFIAAAAACuinQgFAAgDABIgNAAQAAADAAACQAAAFgDADQAOgKAJgBQAAgCABgBIAAAAAD+jPQgCgHgBgFQAAAJgBAJQADgBACACQAAgDgBgEIAAAAABQilQADABADACIAHAFQAGAAAQgIIgjAAABpjhIhSAAQgMALgaATQAFgBAFgBIAEAAQAIgBAJgBIAFAAQAYgIAmgLQAMgDALgDQAAAAgBgBIAAAAACPiVQgMAGgKAHQABACABADQAMgLALgIQgCABgBAAIAAAAACPhmQABABACABQAGgDAFgDIABAAQAAgDABgCQABgEABgEQgFAEgGAEQgFADgEADQABABABACIAAAAABnhNQADgBACgCIgFgBQAAABAAACQAAAAAAABIAAAAADqiNQACAFABAGQAAgHABgFQgCABgCAAIAAAAADAhKIAUAAIAAgLQAAgNgFgQQgDAIgEAHQgDAHgDAGQgCADgDAEQgBABgBACQACABADABIAAAAADngjQgFACgHAAQgCAAgDAAQARAEAAAjIABAAIAAgYQAAgFgBgMIAAAAAC6gcQgSATgyAhQgFADgFADQAGgCAGgCQANgEALgDQAcgZAdgWIgPAAAC2A0QgQASgXAWIAbAAQABgCACgCQARgWAFgUQgFADgIADIAAAAADwBOQAAgBABAAQABgCAAgBIAAgCQgBADgBADIAAAAABmgcQgBAAAAABQARAAALACQACgCABgBIgeAAACQB8IgHAAQgFAFgMABQgNABgLACQgKAHgEABQABABAAABQADgBADgBQAggNAOADQAFgEAEgDIAAAAABRBYQACgDACgDQgGACgHADQAEAAAFABIAAAAACVDIQgJAEgFACQABABACABQAFADAFACQgCgIACgEIABgBACgCgQAagRAlgbQgJACgLAEQgIAEgHACQgDAHgHAHQgMALgFAGIgBABADwCsQgBgCgBgBQgFAEgGAGQgMALgKAIQAPgCAIAFQAFgOAAgBQACgHAFgHIAAAAAAkilQAOADAIAEQAGgFAEgCIggAAAgyjTIgnAHIAOAAQAGAAAHAAQAIgEAEgDIAAAAAgvhzQgBAAgBAAQgDAGgGAGQAHAFAHAHQAIAHAHAHQAPgGAOgGQgHgDgCAAQgZgCgIgGQgFgEAAgIQAAgCAAgBIAAAAAhohIQgCABgDACQASABAbACQgJgJgJgKQgKAGgMAHIAAAAAAbh2QAAgFAGgJQgPgCgVgDQgIAFgLAGQgBAAgBAAQANABAQAGQANAEAKAEQgBgDAAgEIAAAAAAfhGQgKADgJAEQAJgBAHgBQABgDACgCIAAAAAigjjQAMABAKAHQAFgEAMgEIgxAAIgDAAIANAAAjvh3QADgFAEgHQAJgQAKAAQALAAAEAKIAAAAQAIgFAWgJIgWADQgJAAgEgGQgBAAgBAAQgKAEgGABQgCAEgDAEQgIALgKAMQADgBACAAIAAAAAjtg5QgBgCAAgDQAAgHAggSQgDABgEABQgZAMgMAAQgJAAgGgCQABAJABAJIAaAAAjIgYQAAgBAAgBIgJAAQAAAEAAAEQAAADgHAOQAGACAHAGIAAgBQAAgMAPgBQgIgEgDgFQgBgDAAgFIAAAAAjWAnQgJgIgIgIQgHALgFAIQAHACAIADQANAFALAGQAAgGACgCQgGgFgGgGIAAAAAiUA3QAAgCAAgBIgLgIQAFAGAGAFIAAAAAj7gRQACgFAFgEIgQAAQAAAJAAAKQACgJAHgBIAAAAAkDAGQABgDACgDQgCAAgCgBQAAADABAEIAAAAAkGB8IAFAnQACgBACABQAAgBAAgBQAAgJAUgGQgIgIgJgMQAAgBAAgBIgMAAAkcDCQAAADACASQgBgLAAgEQgBgDAAgDIAAAAAi0CIQAAgEALgJIgnAAQAKAIADAJQACAAACAAQAGgBAFAAQAAgCAAgBIAAAAAjDC1QgBgDgBgDQgEABgFAAQAFACAGADIAAAAAioC5IACgBQgIADgFAAQADACAFACQACgDABgDIAAAAAj9DAQACAIABAKQAAABABAAQAIAAAKAAQABAAABAAQAEgDAEgDQgPgGgRgHIAAAAAkEBCQgBAOAAAOQAPgCAcgBQgQgJgagQIAAAAAAogXQADgDAFgCIgLAAQgjAFgwAGQABABABABQAMACAKABQARgGAtgFIAAAAAAyAcQAagQAOgIIgjACQgEAGgHAHQAEADAAAHQAAgBACAAIAAAAAhAASQALAIAMAIQgIgKgJgKQgCgCgDgBQgDAAgDAAQADAEACADIAAAAAh+gQIgGAAQABABACABQABgBACgBIAAAAAhgA2QAAAVgYgFQgBADABAKQACAAACABQAFgDAGgDQAagIATgIQgNgMgQgQQAAABgBABQgGAJAAAJIAAAAAgqBaQgKAEgHAEQAXAHAOAGQAIgBAJgBQgBgBgBgDQgCgIAAgBQAAgBABAAQgMABgKAAQgJAAgDgGIAAAAAh9CJQAGAEAUAKQAHADABAIQAZgKAWgGQAHgBAFgBQggACgaAAQgXAAgHgIQgBgCAAgBQgBABgBAAIgCABABECIQgBAAgBABQABAAABAAIAAgBABGDCQACgFAQgQQgQAIgVAJQAAAFgDAEQAAAAAAABQAJgDANgDIAAAAAgYDhQAWgDAPgEIAPAAIgBgCQAAgFAHgFQgGAAgDgEQgKAEgJAEQgQAIgOAHIAAAAAh0DhQAJgEAKgFQADgBAFgCQgDABgDABQgNADgJADQABACAAABQAAAAAAABIAAAAAh8EdQABgCACgCIgjAAQAMAIABAAQADAAAOgDQABgBABAAIAAAAAjmD3QABABAAABQABgCACgBQgBAAgBAAQgBAAgBABIAAAAAkZESQADAAACgBIAAAAQgCAAgDABIAAAAABhDiQAAgDABgCQgDABgEABQACACABABQACACAAAGQAAAAAAABQACAAADABQgEgFAAgFIAAAA").cp();
	this.shape_275.setTransform(33.4,28.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#703A23").s().p("ACNjkQAAgbA3ApQA2AoAAAcQAAAGgfAIQgkAIgEAEQgIAFADATQACAPgKAAQgFAAgCgOQgCgGAAgHQAAgSAUgKQARgJAlgGIACgCQgEgIgKgNQgLgOgGgHQgLgKgagLQgYgKAAgCIAAAAABfh6QgcgMgegXQgggaAAgOQAAgRAUgUQATgUAAAUQAAAEgMAKQgMAKAAAMQAAALAuAeQAuAfAAABQAAAAgRAiQgRAiAAANQAAAFADAGQADAGAAAGQAAAHgBACQgBAFgGAAQgIAAAAgHQAAgEABgHQgGgLAAgHQAAgMANgcQAHgPAMgYIAAAAADqgiQAAABgJAYQgJAVAAAYQAAAYAbAXQAbAXAAAZQAAALgBADQgDAGgOALQghAaAAACQAAAaAPATQAOATAAAHQAAAKgIAAQgIAAgBgFQAAgFAAAAQAAgBgkhEQAAgCAegYQAegZAAgKQAAgTgbgXQgbgXAAgdQAAgfAQgeQARggAAAWIAAAAACaCMQAAALgbAaQgbAZAAAUQAAAFACAYQAagCAAAKQAAAKgWAAQgOAAgFgYQgCgXAAgBQAAgLAUgaQAZgeAJgMQgDgHgmgQQglgPAAgGQAAgOAuAWQAvAWAAAMIAAAAAg2kEQgMAaAAAFQAAAWAUATQAUASAAAVQAAAKgBABQgCAJgLAAQgHAAAAgHQAAgBADgHQADgGAAgDQAAgIgUgVQgUgUAAgbQAAgQANgQQAOgRAAASIAAAAAhqizQgDAAgTgLQgJgFgJgGQgIAAgFAJQgCAFgDACQgGAYAAAFQAAAUAPAPQAPAOAAAIQAAADgQArQgPAqgBAAQgGAAgBgFQgBgCABgDQAAgFAYhIQAAgBgPgUQgPgTAAgRQAAgTAKgQQAAgBAAgBQAAg2BNA7QAAAIgIAAIAAAAAhOhUQAAAEgHANQgHAOAAAHQAAARAlAdQAlAdAAAHQAAAEgLAGQgLALAAAcQAAAFABAWQAAATgJAAQgKAAADgnQAAguARgMQgTgRgegYQgUgUAAgUQAAgTAOgTQAPgTAAAUIAAAAAkAjeQAOAdAAANQAAAGgGATQgHAUgDAAQgKAAADgMQAAgHAEgJQAEgJAAgGQAAgEgGgTQgGgSAAgGQAAgbANAeIAAAAAjqAJQgGAMAAAFQAAADAQAWQAQAXAAAUQAAANgEAUQgEAVAAARQAAAKgBAEQgDAMgKAAQgIAAABgHIAEgmQAAgCAFgVQAFgWAAgHQAAgXgQgQQgQgQAAgMQAAgQANgQQACgCACgCQgEgKgGgUQgGgUgFgTQAAgaAQAlQARAmAAAVQAAAFgDADQgBABgEAIIAAAAAiKCgIA6AAQAYADAOAEQAaAHAAANQAAAIgIAAQgFAAgQgIQgTgIgOgEIg2ABQAIAKASADQAOACAAAKQgSAsgWAAQgIAAABgHQAAgDAOgOQAPgPADgEQgEgEgDgBQgHgCgPAAQgHgEgIgTQAAgEADgEQAEgEAGAAIAAAA").cp();
	this.shape_276.setTransform(33.1,32);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#80472F").s().p("AD5jzQgFgPgEgOQAAglAhBXQAAAIgHAAQgHAAgKgdIAAAAAB8jHQARAZAAAWQAAARgHAFIgHgCQgBgTgKgXQgKgWAAgKQAAgSASAZIAAAAACcAAQAKAKABAKQAEAYAAAOQAAAMgHAAQgCAAgQhDQAAgPAKAMIAAAAADeCGQAAgKALAGQAKAGAAAJQAAAGgHAFIgHgCQAAgDgDgHQgEgIAAgCIAAAAAhyhtQAMgSAMgNQAXgbAAAYQAAAHgOAQQgPASgJAAQgJAAAAgHIAAAAAjSjqQgIAAgCgLQAAgGAAgFQAAggAJARQAIARAAANQAAAHgHAAIAAAAAjOhgQAAgcAJgIQAIgHAAASQAAAVgCATQgDAlgIAAQgJAAABgHQAAgBACgSQACgRAAgJIAAAAAArAwQgPBCAAAAQgKAAACgaQAAgQAMgXQALgXAAAWIAAAAAA/DTQAAAEgbAbQgJAAABgIQAAgIASgQQARgQAAARIAAAAAjMDPQA1hzAAAuQgrBMgCAAQgJAAABgHIAAAAAkEEcQgMAAAAgaQAAgYAKAQQAJAQAAAJQAAAJgHAAIAAAA").cp();
	this.shape_277.setTransform(32.2,31.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#643926","#412519"],[0,1],0,-22.8,0,22.2).s().p("AjJkgQgBADAAADIABAJIAHACQAHgCAAgJQAAgEAAgDIACAAQAGADAUABQAGABAFAAQAAABABAAQALAQADAAQAIAAAAgHQAAgEgFgIQABgBABAAIAuAAQgGAJAAAKQgCAJAKAAQADAAAGgOQAFgJABgFIAmAAQABABAKACQgCAEAAAFIABAGIAHACQAJgGAAgHIAAgBQAGABAFAAQAIAAAFgCQAFgDAOAAQABAAAFADQAJACAVAAQASAAAHgCQAHgDASAAQBCAAASgGQASgFAIAAQAtARAHADIAABAQgCBJAAAFQAAAbAIBrQAAAXgFAmQgFAmAAAAQAAAKAGAYQAGAXAAAcQAAAegEANQgEAOAAASQAAAAAAAPQAAABABABIgHAAIgsALIhyAAQgfgCgDgBIh4AAQgXADgtAFQgsAFg1AAQguAAgsgOQgIgCgFgBQAIgIABgRIAAgiQgKhdAAgCQAAgHAEgTQADgRABgFIAAhMQABgDACgaQABgZAAgMQAAgNgDgaQgCgagDgKQgDgPgBgXQAAgNAAgYQADglABgVQADgCAFgCQAPgJACgCIBDgBAD7j2QAKAdAHAAQAHAAAAgIQghhXAAAlQAEAOAFAPIAAAAAB+jKQgSgZAAASQAAAKAKAWQAKAXABATIAHACQAHgFAAgRQAAgWgRgZIAAAAAD1giQAAgVgQAgQgRAeAAAeQAAAeAbAXQAbAXAAASQAAALgeAYQgeAZAAACQAlBDAAABQAAABgBAEQABAFAIAAQAIAAAAgJQAAgHgOgTQgPgTAAgaQAAgCAhgaQAOgLADgGQABgEAAgKQAAgagbgXQgbgXAAgXQAAgYAJgWQAJgYAAgBIAAAAABqh6QgMAYgHAPQgNAdAAAMQAAAHAGALQAAAGAAAEQAAAHAIAAQAFAAACgFQAAgCAAgHQAAgGgDgGQgDgFAAgFQAAgOARghQARgiAAgBQAAAAgugfQgugfAAgKQAAgMAMgKQAMgLAAgEQAAgTgTATQgUAUAAARQAAAPAhAZQAeAYAbALIAAAAACYjkQAAACAYAKQAbAMAKAKQAGAGALAOQAKAOAEAIIgBABQgmAGgRAJQgUALAAARQAAAHACAHQACANAGAAQAJAAgCgPQgCgSAHgGQAEgDAkgJQAfgHAAgGQAAgcg2gpQg3goAAAaIAAAAACegDQgKgMAAAPQAQBDACAAQAHAAAAgMQAAgOgEgYQgBgKgKgKIAAAAAClCNQAAgNgugWQgvgVAAANQAAAHAlAPQAnAPACAHQgJAMgZAeQgUAbAAALQAAAAACAYQAFAXAPAAQAVAAAAgJQAAgLgaADQgCgZAAgFQAAgUAbgZQAbgZAAgLIAAAAADgCDQAAACAEAIQADAHAAADIAHACQAHgFAAgGQAAgJgKgGQgLgGAAAKIAAAAAgrkEQAAgSgNARQgOARAAAPQAAAbAUAVQAUAUAAAJQAAADgDAGQgDAGAAABQAAAHAIAAQAKAAADgJQAAgBAAgKQAAgUgUgTQgUgTAAgVQAAgFAMgbIAAAAAhDhTQAAgUgOATQgPASAAAUQAAATAVAUQAeAYATARQgSAMAAAvQgCAmAKAAQAIAAABgTQgCgVAAgFQAAgcALgLQALgHAAgEQAAgHglgdQglgdAAgRQAAgHAHgNQAHgOAAgDIAAAAAheizQAHAAAAgHQhNg8AAA3QAAABABABQgLAPAAATQAAARAPAUQAPATAAACQgYBHAAAFQAAADAAADQABAEAHAAQABAAAPgqQAPgqAAgDQAAgJgPgOQgPgOAAgUQAAgGAHgYQACgCADgEQAEgJAIAAQAJAFAKAGQATAKADAAIAAAAAhwhwQAAAHAJAAQAJAAAPgSQAOgQAAgHQAAgYgXAbQgMANgMASIAAAAAjQjtQAHAAAAgHQAAgNgIgRQgJgRAAAgQAAAFAAAGQACALAIAAIAAAAAj0jeQgOgeAAAcQAAAGAGASQAGASAAAEQAAAHgEAIQgEAJAAAIQgCALAKAAQADAAAGgUQAGgTAAgFQAAgNgNgeIAAAAAjMhjQAAAJgCARQgCASAAABQgBAHAJAAQAIAAADglQACgTAAgVQAAgSgIAHQgJAIAAAcIAAAAAh+CgQgHABgDAEQgEADAAAEQAJAUAHADQAPAAAHADQADABADADQgCAEgQAQQgOANAAADQgBAHAJAAQAWAAARgrQAAgLgNgCQgSgDgJgKIA2AAQAPADATAJQAPAHAGAAQAHAAAAgHQAAgOgZgHQgOgDgYgEIg6AAAjfAJQAEgHACgCQACgCAAgGQAAgVgQglQgRgmAAAaQAGATAFAUQAGAVAEAKQgCABgBADQgOAQAAAPQAAANAQAPQAQAQAAAYQAAAHgFAVQgFAWAAACIgEAlQgBAHAJAAQAKAAACgMQABgEAAgJQAAgRAEgVQAEgVAAgNQAAgUgQgWQgQgXAAgCQAAgFAGgNIAAAAAkCEZQAHAAAAgJQAAgJgJgQQgKgQAAAYQAAAaAMAAIAAAAAjKDMQgBAHAJAAQACAAArhMQAAgug1BzIAAAAABBDQQAAgRgRAQQgSAQAAAIQgBAIAJAAQAbgbAAgEIAAAAAAtAtQAAgWgLAXQgMAXAAAQQgCAaAKAAQAAAAAPhCIAAAA").cp();
	this.shape_278.setTransform(32,32);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#64341F","#411F10"],[0,1],0,-24.6,0,-9.6).s().p("AklkcQgCAVgCAlQgBAYABANQAAAXAEAPQACAKADAaQADAaAAANQAAAMgCAZQgBAagBAFIAABKQgCAFgDARQgDATAAAHQAAACAKBdIAAAiQgCARgIAIQAGABAIACQArAOAuAAQA2AAAsgFQAsgFAXgDIB5AAQADABAfACIByAAIAsgLIAHAAQgBgBAAgBQAAgPAAAAQAAgSAEgOQAEgNAAgeQAAgcgGgXQgGgYAAgKQAAAAAFgmQAFgmAAgVQgIhtAAgbQAAgFAChJIAAhAIACAAQAGAAAEgFQACgDAAgEQABAAAAAAIAABRIgCAEIAACJQABAEAEAcQADAdAAAGQAAAmgFARQgFASAAAYQAAAEAGAbQAGAaAAAcQAAAlgDAKQgDAKAAAoQAAABAAABQAAABAAABQAAAGgRADQghAGgPAEIhzAAQgfgCgEgBIh6AAQgbADgnAGQgnAEg7AAQg8AAgggNQgWgJAAgHQAAgCABgBIgBAAIAAgPQAAgJADgNQADgOAAgIQgKhYAAgGQAAgZAIgdIAAhMQABgEABgZQACgYAAgKQAAglgGgqQgGgrAAgaIAAg1QAAgCAAgBQADABAFAAQADAAAIgEIAAAA").cp();
	this.shape_279.setTransform(32,33.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#2F5B13").s().p("Ai+gXQgCACgDAEQgFAIgDAAQgIAAABgJQAAgBAAgBQABgHAJgFQALgFAAALQAAABgBACIAAAAAjjgOQABACABADQAAADgEAGQgFAJgFAAQgIAAABgJIABgOIABgRQAAgaARArIAAAAAh9gOQASgjAAAaQAAAEgCAFQgBADgBAEQgFAKgGAAQgIAAAAgFQADgHACgFIAAAAAkNgNIAAAAQAAAKgIAAQgGAAgEgKQgBgDAAgEQAAgMAJAGQAJAFABAIIAAAAAg4gTQgCgGAAgCQAAgJAJADQAIADABAHQABACAAACQAAAGgBACQAAADgHADIgHgDQAAgDgCgHQAAAAAAgBIAAAAAgMgXQADgFAEgFQAOgRAAASQAAABgGAKQgCADgBAGQgMAPAAAAQgJAAABgHQAAgIAIgLIAAAAABfgYQAAgLAHgDQAJgCAAANQAAABAAABQAAADgCAEQgDAHgEAAQgHAAgBgFQgBgCABgCQAAgCABgCIAAAAACegUIAAAAQAAgQAIgBQAHAAAAAQQAAABAAAAQAAAHgBACQgBAGgFAAQgGAAgCgIQgBgDABgEIAAAAADdgYIAGgJQAUgSAAATQAAACgFAFQgDAEgHAGQgOAOgCAAQgGAAgBgEQgCgCABgDIANgOAiVARQgFgGgEgHQAAgRAQAPQAHAIAEAFQAGAIAAAFQAAAHgJAAQgCAAgMgQQAAgBgBgBIAAAAAi8ANQABACAAAEQAAAJgIADIgHgDIAAgJQAAgDABgCQABgEAFgCQAFgBACAGIAAAAAhCAPQgBAEgEAKQgGAOgEAAQgKAAADgJQAAgLAGgIQACgEADgDQAMgJAAANQAAABgBACIAAAAAgBAVIAAAAQAAAIgJAGIgHgDIgBgGQAAgFABgDQACgFAFgBQAIgBABAKIAAAAADzAGQgLgEAAgCQAAgLAdAEQAcAFAAAGQAAAHgKAAQgVAAgPgFIAAAAADCAEQgHAFgLAAQgGAAgBgEQgBgCAAgDQAAgMAYAEQAHACAAAGQAAABgFADIAAAAACDAAQAAAFgKAAQgSAAgFgFQgCAAAAgCQAAgKARACQASACAAAIIAAAAABPAQQgCADgEAAQgIAAgIgKQgFgFgCgEQAAgVAfAgQAAADgCACIAAAAAAiADQgCACgCAAIgRAAQgCgCgDgCQgCgBAAAAQAAgFADgBQAFgDAQABQAHACAAAGQAAAAgDADIAAAA").cp();
	this.shape_280.setTransform(32,1.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#418316").s().p("Ai8gbQAGAAAQACQAWADAMAEIAKAAQgDAFgDAHQAAAGAJAAQAGAAAEgLQACgEABgDIAkAAQAJgDAHgCQAAABAAAAQADAHAAADIAHADQAGgDABgDQAAgCAAgGQAAgCAAgCQAFgCAEAAQAEAAAOACQgIALAAAIQgBAIAJAAQAAAAAKgQQADgGADgDQATACAdADQAOAAAOgEQAHgDAIgBQgBACAAACQAAACAAACQABAFAHAAQAEAAADgHQACgEAAgDQABAAACAAQAPAAACAAQADABAGAEIASAAQAAAEAAADQACAIAGAAQAFAAACgGQAAgCAAgHIAfAAQAGgDALgBIgNAOQAAADABACQABAEAGAAQACAAAPgOQAGgGAEgEQAWABAYAKQAZAKAAAIQAAACgDAEQgCADgEABQAAAAgBAAQAAAEgCADQgEAFgGAAIgCAAQgHgDgtgRQgIAAgSAFQgSAFhCAAQgSAAgHAEQgHACgSAAQgVAAgJgCQgFgEgBAAQgOAAgFAEQgFACgIAAQgFAAgHgBQAAgKgHACQgFABgCAEQgKgCgBgBIgmAAQAAgCAAgBQAAgNgLAJQgEADgCAEIguAAQgBAAgBABQgEgGgHgGQgRgRAAARQAFAHAFAHQgFAAgGgBQgUgBgGgDIgCAAQgCgGgFACQgFABgCAEIhDABQgCABgPAKQgFACgDACQgIAEgCAAQgGAAgDgBQgFgEAAgHQAAgDADgDQgDgFAAgEQAAgFAFgDQACgKAOgCQACAAAIAAQADAKAHAAQAHAAAAgKIAAAAQAKgBAOAAIgBAQQgBAHAJAAQAFAAAEgHQAEgIAAgDQgBgDgBgCQAGgBAHgDQACgBADgBQgBABAAABQgBAJAJAAQACAAAGgIQADgEABgCIAAAAADEABQAFgCAAgDQAAgGgHgCQgYgEAAAOQAAACABABQABAEAGAAQALAAAHgEIAAAAAD1ACQAPAFAVAAQAKAAAAgHQAAgGgcgFQgdgEAAANQAAACALACIAAAAACFgEQAAgIgRgCQgSgCAAAKQAAACACACQAGADARAAQAKAAAAgFIAAAAAAkAAQADgCAAgCQAAgGgHgCQgQgBgFADQgDABAAAFQAAACACABQADABADABIAQAAQACAAACgBIAAAAABRAMQACgBAAgEQgfggAAAXQADACAEAFQAIAKAJAAQADAAACgDIAAAA").cp();
	this.shape_281.setTransform(31.8,2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#DBCA93").s().p("ADrjQQAAAGgEAEQgFAFgGAAQgKAAgEgHQgCgEAAgFQAAgPAPAAQAQAAAAAQIAAAAAC1jkQgFAFgGAAQgKAAgEgHQgCgEAAgFQAAgPAPAAQAQAAAAAQQAAAGgEAEIAAAAACbitQAAAGgEAEQgFAFgGAAQgKAAgEgHQgCgEAAgFQAAgPAPAAQAQAAAAAQIAAAAABhhgQAPAAAAAQQAAAFgEAFQgEAFgHAAQgKAAgEgHQgCgFAAgEQAAgPAQAAIAAAAADeh8QgIAAgDgHIgBgFQAAgNAMAAQANAAAAANQAAAEgDADQgDAFgHAAIAAAAACwg0QAAgRAQAAQAPAAAAARQAAAFgCAFQgEAHgJAAQgQAAAAgRIAAAAADnAqQgCgEAAgEQAAgPAPAAQAQAAAAAQQAAAFgEAFQgFAFgGAAQgKAAgEgIIAAAAACnAlQAAAPgPAAQgOAAgFgPIgCgOQAAgZASAFQASAHAAAbIAAAAABRA5QAAgPAQAAQAPAAAAAPQAAAFgEAFQgEAFgHAAQgKAAgEgHQgCgEAAgEIAAAAACRCsQAAAOAAAAQgDALgMAAQgNAAgDgLQAAgCAAgLQAAgZAPAAQAQgBAAAZIAAAAACfBZQAAgSASACQASADAAAVQAAAUgPAAQgKAAgGgMQgFgKAAgGIAAAAAgTjfQgFAFgHAAQgPAAAAgQQAAgPAQAAQAPAAAAAQQAAAGgEAEIAAAAAh3jXQgFAFgHAAQgPAAAAgQQAAgPAQAAQAPAAAAAQQAAAFgEAFIAAAAAh2izQAAgPAPAAQAQAAAAAQQAAAGgEAEQgFAFgHAAQgPAAAAgQIAAAAAhRhlQgEAGgIAAQgQAAgGgLQgDgGAAgGQAAgZAUAKQAVAJAAANQAAAFgEAFIAAAAAgQh4QAAgbAQADQAPADAAAkQAAAFgEAFQgFAFgGAAQgMAAgDgPQgCgHABgIIAAAAAApi/QAAgNAVgGQAUgGAAAVQAAAHgKAHQgIAGgGAAQgRAAAAgQIAAAAAjbj9QgFAFgHAAQgPAAAAgQQAAgPAQAAQAPAAAAAQQAAAGgEAEIAAAAAi3jWQAQgBAAAUQAAAGgEAFQgEAGgIAAQgLAAgDgJQgCgEABgFQAAgRAPgBIAAAAAj9imQAAgPAPAAQAQAAAAAQQAAAFgEAFQgFAFgHAAQgPAAAAgQIAAAAAiRikQAPAAAAAQQAAAGgEAEQgFAFgHAAQgPAAAAgQQAAgPAQAAIAAAAAiogkQAAgPAPAAQAQAAAAAQQAAAFgEAFQgFAFgHAAQgQAAABgQIAAAAAjfAUQgPAAAAgQQAAgNAPAAQAQAAAAAOQAAAFgEAFQgFAFgHAAIAAAAAioAsQAAgRARABQAQACAAAPQAAAHgHAFQgEADgGAAQgKAAgEgIQgCgEAAgEIAAAAAj/gvQgBgEAAgEQAAgRAQgCQAPgBAAAUQAAASgQAAQgLAAgDgKIAAAAAjrCsQAAASgQAAQgLAAgDgJIgBgJQAAgRAQgBQAPgBAAATIAAAAAjyBuQAAAFgEAFQgFAFgHAAQgQAAABgQQAAgPAPAAQAQAAAAAQIAAAAAi5CLQAPAAAAAQQAAAFgEAFQgFAFgHAAQgPAAAAgQQAAgPAQAAIAAAAAATg7QAAgPAPAAQAQAAAAARQAAAFgEAFQgFAFgGAAQgQAAAAgRIAAAAABDAvQAAAFgEAFQgEAFgHAAQgQAAAAgPQAAgPAQAAQAPAAAAAPIAAAAAhSAqQAAAMgBADQgDANgMAAQgNAAgCgNQAAgOAAgBQAAgeAPAAQAQAAAAAeIAAAAAhCgkQAAgVASgIQASgIAAAVQgEAggRAAQgPAAAAgQIAAAAAguBNQgFAFgHAAQgKAAgDgHQgCgIAAAAQAAgPAPAAQAQAAAAAPQAAAFgEAFIAAAAAgzCgQgPAAAAgQQAAgPAQAAQAPAAAAAQQAAAFgEAFQgFAFgHAAIAAAAAAGCBQAQgBAAATQAAAIgFAGQgFAGgHAAQgOAAABgPQAAgWAOgBIAAAAAgVEBQgFAFgHAAQgKAAgEgHQgBgIAAAAQAAgPAPAAQAQAAAAAPQAAAFgEAFIAAAAAA2DvQAAgPAPAAQAQAAAAAQQAAAFgEAFQgFAFgGAAQgKAAgEgIQgCgHAAgBIAAAAAAvC8QgBgDAAgIQAAgVAQAAQAPAAAAAVQAAAUgPAAQgLAAgEgJIAAAAAhrDtQAAAFgEAFQgFAFgHAAQgQAAABgPQAAgPAPAAQAQAAAAAPIAAAAAhtC+QgFAFgHAAQgJAAgEgIQgCgHAAgBQAAgPAQAAQAPAAAAAQQAAAFgEAFIAAAAAjYDjQgFAFgHAAQgKAAgEgHQgBgEAAgEQAAgPAPAAQAQAAAAAPQAAAFgEAFIAAAAAEDC9QAQAAAAAQQAAAFgEAFQgFAFgGAAQgKAAgEgIQgCgDAAgFQAAgPAPAAIAAAAADADPQgIAAgDgHIgBgGQAAgMAMAAQANAAAAAMQAAAEgDAEQgDAFgHAAIAAAAACYD5QAPAAAAAQQAAAFgEAFQgEAFgHAAQgKAAgEgIQgCgDAAgFQAAgPAQAAIAAAA").cp();
	this.shape_282.setTransform(33,31.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#E0D2A6","#E2D4A6"],[0,1],-0.8,24.1,1.4,-28.5).s().p("AEgjuQAHAlAAAYIAAB1QAAAxgFDFQAEBIAFAcIhAgBIgFgBIhDgBIgPgEIhEgBQhAgCgNgCQgBgDgFAAIhXAAIAAACQgUABgEABIgGAAQgmgEgGAAQgKAAgDAFIgQAAQg2AKgsACQABgCAAgDQAAgJgEgTQgEgUAAgKIAAg9QAAgXAKiNQAAgagFg1IAAiOQgCgVAAgpQAAgCAAgCIAgACIIgAAQABASAGAdIAAAAACiD2QgPAAAAAPQAAAEACAEQAEAHAKAAQAGAAAFgFQAEgFAAgFQAAgPgQAAIAAAAADLDMQAGAAAEgFQACgEAAgEQAAgNgMAAQgNAAAAANIABAFQADAIAJAAIAAAAAEOC6QgQAAAAAPQAAAEACAEQAEAHAKAAQAHAAAEgFQAEgFAAgFQAAgPgPAAIAAAAAjODgQAEgFAAgFQAAgQgPAAQgQAAAAAPQAAAEACAEQAEAIAJAAQAHAAAFgFIAAAAAhiC6QAEgFAAgFQAAgPgQAAQgPAAAAAPQAAAAABAIQAEAHAKAAQAHAAAFgFIAAAAAhhDqQAAgQgPAAQgQAAAAAPQAAAQAPAAQAHAAAFgFQAEgFAAgFIAAAAAA6C5QADAJAMAAQAPAAAAgVQAAgVgQAAQgPAAAAAWQAAAHABAEIAAAAABADsQAAAAACAIQAEAHAKAAQAHAAAEgFQAEgFAAgFQAAgPgPAAQgQAAAAAPIAAAAAgLD+QAEgFAAgFQAAgQgPAAQgQAAAAAPQAAABACAHQAEAIAJAAQAHAAAFgFIAAAAAARB+QgRAAAAAWQAAAQAPAAQAHAAAGgHQAFgGAAgHQAAgTgQABIAAAAAgoCcQAHAAAFgFQAEgFAAgFQAAgPgQAAQgPAAAAAPQAAAPAPAAIAAAAAgkBJQAEgEAAgGQAAgPgPAAQgQAAAAAPQAAAAACAIQAEAHAJAAQAHAAAFgFIAAAAAg3goQAAAQAPAAQARAAAEggQAAgVgSAIQgSAIAAAVIAAAAAhIAmQAAgegPABQgQAAAAAdQAAACAAANQACANANAAQANAAADgNQAAgCAAgNIAAAAABOArQAAgPgQAAQgPAAAAAPQAAAPAQAAQAGAAAFgFQAEgEAAgGIAAAAAAdg+QAAAQAQAAQAHAAAEgFQAEgFAAgFQAAgQgPAAQgQAAAAAPIAAAAAivCIQgPAAAAAPQAAAPAPAAQAHAAAFgFQAEgFAAgFQAAgPgQAAIAAAAAjoBqQAAgPgPAAQgQAAAAAPQAAAPAPAAQAHAAAFgFQAEgFAAgFIAAAAAjgCpQAAgTgQABQgPAAAAASIABAIQADAJALAAQAQAAAAgRIAAAAAj0gyQADAJALAAQAQAAAAgSQAAgTgQABQgPABAAARQgBAEACAFIAAAAAieApQAAAEACADQAEAIALAAQAFAAAFgDQAHgEAAgIQAAgPgRgBQgRgCAAASIAAAAAjVAQQAHAAAFgFQAEgFAAgFQAAgNgPAAQgQAAAAANQAAAPAPAAIAAAAAiegoQAAAQAPAAQAHAAAFgFQAEgEAAgGQAAgQgPAAQgQAAAAAPIAAAAAiHinQgPAAAAAPQgBAQAQAAQAHAAAFgFQAEgFAAgFQAAgQgQAAIAAAAAjziqQAAAQAPAAQAHAAAFgFQAEgEAAgGQAAgQgPAAQgQAAAAAPIAAAAAisjZQgQABAAARQAAAEABAFQADAJALAAQAJAAAEgGQADgFAAgHQAAgTgPABIAAAAAjQkAQAEgFAAgFQAAgQgQAAQgPAAAAAPQAAAQAPAAQAHAAAFgFIAAAAAA0jDQAAAQARAAQAFAAAJgGQAKgHAAgHQAAgVgVAGQgUAHAAAMIAAAAAgFh8QgBAIABAHQADAPAMAAQAHAAAEgFQAEgEAAgGQAAgjgQgDQgOgEAAAbIAAAAAhGhoQADgFAAgGQAAgMgUgKQgVgJAAAYQAAAHAEAGQAGAKAPAAQAIAAAFgFIAAAAAhsi2QAAAQAPAAQAHAAAFgFQAEgFAAgFQAAgQgPAAQgQAAAAAPIAAAAAhsjbQAEgEAAgGQAAgQgQAAQgPAAAAAPQgBAQAQAAQAHAAAFgFIAAAAAgIjiQAEgFAAgFQAAgQgQAAQgPAAAAAPQgBAQAQAAQAHAAAFgFIAAAAACpBWQAAAFAFAKQAHAMAJAAQAPAAAAgTQAAgWgSgCQgSgDAAATIAAAAACbCpQAAgZgPABQgQAAAAAZQAAAKABACQADAMAMAAQANAAACgMQAAAAAAgNIAAAAABcA1QAAAEACAEQAEAHAKAAQAGAAAFgFQAEgEAAgGQAAgPgQAAQgPAAAAAPIAAAAACyAhQAAgbgSgGQgSgGAAAaIACANQAFAPAOAAQAPAAAAgPIAAAAADxAmQAEAIAKAAQAHAAAEgFQAEgFAAgFQAAgPgPAAQgQAAAAAPQAAAEACADIAAAAAC7g4QAAARAQAAQAIAAAEgHQADgFAAgFQAAgQgQAAQgPAAAAAQIAAAAADph/QAGAAAEgFQACgEAAgEQAAgMgMAAQgNAAAAAMIABAGQADAHAJAAIAAAAABrhkQgPAAAAAPQAAAFACAEQAEAHAKAAQAGAAAFgFQAEgEAAgGQAAgQgQAAIAAAAACliwQAAgQgPAAQgQAAAAAPQAAAEACAEQAEAIAKAAQAHAAAEgFQAEgFAAgFIAAAAAC/jnQAEgFAAgFQAAgQgPAAQgQAAAAAPQAAAEACAEQAEAIAKAAQAHAAAEgFIAAAAAD1jTQAAgQgPAAQgQAAAAAPQAAAEACAEQAEAIAKAAQAHAAAEgFQAEgFAAgFIAAAA").cp();
	this.shape_283.setTransform(31.9,32.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#B19560").s().p("AE8jAIAACCQAAApgFDMIAFBUQAAADAAARQAAACAAACQAAABAAACQAAADgDADQgCABgEACIhDAAIgFgCIhEgBQgvAOgjgIQgHgCgbgBQgdgBgWgDIhHgBQgDgBgIAAQhEANgngGQgLAAgdABQgdAAgZgBQgagBgDgEQgBgBAAgEQAAgFAJgCQgJgLgCgxQAAhAAAAAIAAhUQAAgMAFgcQAFgcAAgMQAAgZgFgzIAAiPQgDgPAAgeQAAgQAKgRQAAAAAAgBQABgBACgDQACgDAEgCIJKAAQATAAAAAMQAAAEgDACQACAHACAJQABALABAGQACAQAAAxIAAAAAEijwQgGgdgBgSIogAAIghgCQAAACAAACQAAApADAVIAACOQAFA1AAAbQgKCMAAAWIAAA9QAAAKAEAUQADAUAAAIQAAAEgBACQAsgDA3gJIAPAAQADgFAKAAQAHAAAlAEIAHAAQADgCAUgBIAAgBIBYAAQAEAAACACQANADBAABIBEABIAPAEIBDABIAFACIBAABQgFgdgEhHQAFjFAAgxIAAh1QAAgYgHglIAAAA").cp();
	this.shape_284.setTransform(31.8,32.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.rf(["#C5D7D4","#889C98"],[0,1],-0.2,0.2,0,-0.2,0.2,41).s().p("AEljpQAAAiADAYQADAngBBPQAAA5gRCwIAFBuQgMgCgSAAQgVAAg8AGIl/ABQhAgIgZABQADgYACgxQABgwgBgzQAAhZgDgoIAAhzQgCgWAAgsQADhJABgQQACAAABAAQAMAAALgDIClAAIAFABICPAFIDcAAQAKAAAIgBQABAIADAMQAFAUAAAMIAAAA").cp();
	this.shape_285.setTransform(32.4,31.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#6B7775").s().p("AE3kwQAAAFgDAEQABADACADQAHAOAAAUQgBAfACAkQADAsABBZIgCBzQgBARgHAxQgHAwAAACIAFBuQgBAKgCAHQgBAEgCACQgEADgFAAQgFAAgDgCQgNABgVAAIhOAGIl/AAQg2gKgrgCQgBACgCAAQgGAAgDgEQgEgDAAgDQAAgBAAgBQgCgHAAgLQgBgXAGgZIAAjqIgDgGIAAh0QgCgWAAgxIAAg+QAAgDACgMQABgKACgFQACgGADgEQAAgGAHgDQAHgDAcgEICqAAIAFACIBlAAQACABARACQAQABACABIDbAAIAkgHQALAAACAMIAAAAAEljpQAAgMgFgTQgDgMgBgIQgIABgKgBIjcAAIiPgFIgFAAIilAAQgLADgMAAQgBAAgCAAQgBAPgDBJQAAAsACAXIAAByQADAoAABZQABA0gBAwQgCAxgDAYQAZgBBAAHIF/AAQA8gGAVAAQASAAAMABIgFhtQARiwAAg6QABhOgDgnQgDgZAAgiIAAAA").cp();
	this.shape_286.setTransform(32.4,31.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.rf(["#9C863B","#725E2C"],[0,1],0.2,-0.2,0,0.2,-0.2,41.2).s().p("AEgkiQAAAMADALIAAClIgBAFIgFCPIAADcQAAAKABAIQgIABgMADQgUAFgMAAQgiAAgYADQgnADhPgBQg6AAivgRIhuAFQACgMAAgSQAAgVgGg8IgBl/QAIhAgBgZQAYADAxACQAwABA0gBQBYAAAogDIBzAAQAWgCAsAAQBJADAQABQAAACAAABIAAAA").cp();
	this.shape_287.setTransform(32.3,32.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#625025").s().p("AEFlCQADAAAMACQAKABAFACQAGACAEADQAGAAADAHQADAHAEAcIAACqIgCAFIAABlQgBACgCARQgBAQgBACIAADbIAHAkQAAALgMACQgFAAgEgDQgDABgDACQgOAHgUAAQgfgBgkACQgsADhZABIhygCQgSgBgxgHQgvgHgCAAIhvAFQgKgBgGgCQgFgBgBgCQgEgEAAgFQAAgFACgDQAAgNAAgVIgHhOIAAl/QAKg2ACgrQgCgBAAgCQAAgGAFgDQACgEAEAAQAAAAABAAQAHgCAMAAQAXgBAZAGIDpAAIAGgDIB0AAQAWgCAxAAIA+AAAEfkiQAAgBAAgCQgPgBhJgDQgsAAgXACIhyAAQgoADhZAAQgzABgwgBQgxgCgYgDQABAZgIBAIABF/QAGA8AAAVQAAASgCAMIBugFQCvARA6AAQBOABAngDQAZgDAiAAQAMAAATgFQAMgDAIgBQgBgIABgKIAAjcIAFiPIAAgFIAAilQgDgLAAgMIAAAA").cp();
	this.shape_288.setTransform(32.4,32.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#878787").s().p("AD/jdQACAMAAAZQAAATgCAJIgDABQgLgzAAguQAAgIAEgDQAIAbACAPIAAAAACUjQQAAgGAFgCQADARAGAzQAHAxAAAHIgBANIgDADQgFgagHgnQgEgdAAgeQAAAAgBgIIAAAAABriYQAFAhAAAZIAAAHIgEADQgFgEAAgiQAAgBgBgOQAAgNAFgCIAAAAAEbApIgDAEQgDgEAAgWQAAghAGgHQADAGAAAKIgDAuADIAZQAaA+AIAnQAIAlAAA6QAAAMgDAHIgDAAQAAgBgCgxQgBgggFgVQgfhSAAgUQAAgHADgDIAAAAABpA7QgBgiAHgSQAFBMAAACQAAALAAAxQAAAPAAAWQgCAhgCAIIgDABQgDgLADgQIAAhQQgCAEAAgFQgCgmAAgTIAAAAAhEjCQAAAGgCAGIgDABQgEgOgCgJQgBgBAAgPQAAgTAEgCQAIAMAAAjIAAAAAhph2QADAPAAArQAAAjAAAJQgBASgFAcIgDAAQgCgGAAgNQAAgKAEgSIAAheQABgGADgBIAAAAAAnhHQACAXAAAEIgBAPIgDADQgHgjgCgbQgBgOAAgqQAAgCgDgUQgDgXAKgHQADACABAFIAABTQABAJADAaIAAAAAjWjlQADAFAAAFQAAACgHASQgHATAAAKQAAAMAJAUQAKAVAAAfQAAAfgGARQgSAxgDAJIgDAAIgBgMQAAgLAMgeQALgeAAgXQAAgWgJgWQgKgVAAgTQAAgQAFgPQAFgSAJgKIAAAAAkLiEQAAAOgDAHQgCAJgKASQgDgEAAgGQAAgOAEgQQAEgRAHgJQADAHAAALIAAAAAiZBaQADAKAEAvQAEAsAAAKQAAAIgCAGIgCABQgLhdAAgRQAAgMAEgEIAAAAAjOCSQAAARgGAfQgGAhgCAVIgDACQgDgGAAgWQAAgbACgTQAGgjAIgHQAEAFAAAHIAAAAAhzCNQgCgDAAgHQAAgjAIgIQADAEAAAIQAAAGgGAjIgDAAAgtAfQAAAYgHAlQgKAzgDAQIgDACQgDgDAAgHQAAhRAXgxQADAFAAAFIAAAAAAABxQABAHAAANQAAAVgFAVQgEANgNAgIgDAAIgBgLQAAgRARgnQAJgcgBgMIAAAAAA6BVQAAAQgCAKIgDAAQgDgJAAgSQAAgXAEgDQAEAJAAASIAAAAAClDoQgEAcgCAEQgEgDAAgGQAAgOACgSQADgaAFgGQAEAEAAAIQAAAFgEAYIAAAA").cp();
	this.shape_289.setTransform(31.4,31.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#484848").s().p("AElkUQgFAAgRgBQgTgCgGgCIiLAAIgEABIg2AAQgEgBgsgCIhZAAQgCACgMgCQgSgBgcAIIidAAQACAGAAAJQABA0AAABIgEBzQARCWAABJQACB1gGAfQAMgCANAAQAAAAAAABQAAADAcgBQAlgCAKABIBhABQAZACAEABIBjABIAIAGIBrACQAEABAiACIBGACQAQAAAPgHQALgGAEgBIAAhgQgCgGAAgOQAIimAAgdQAAgygJhDQgKhEAAggQAAgQAHgOQgBAAgBAAIAAAAAFJkzQAAAEgBADQABACAAADQAAAEgDACQgLA/AAAkQAAApAIAgQAIAgAAAdQAAAegEAEIAADiQgBAJgBAsQAAANgCAKQAEABAAAGQAAAKgKALQgOAQgYgBIhTAAQgKgDgqgCIiOgBQgVgCg0AAQg0gBgcADQgdACgOgCQgkAIgvgFQgbgDgEAAQgLAAgBgGQgEgCAAgHQAAgDAAgEQgCgCAAgCQAAgCADgCQAAgdADgxQAEg+AAgeQAAhVgHgtQgHgxAAgtQAAgjAIhUQAAgLgEgSQgEgSAAgGQAAgJAHgEQgDgCAAgBQAAgFAIgDQBGgOAmAEQAlAEAagDQAagDAegBQBXgKBWAKQBUgJAfAEQAFAFAwAAIA9AAQAFgDADAAQACgCADAAQAFABAAANIAAAA").cp();
	this.shape_290.setTransform(32.1,32.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#747474").s().p("AElkaQABAAABAAQgHAOAAAQQAAAgAKBEQAJBDAAAyQAAAfgICkQAAAOACAGIAABgQgEABgLAGQgPAHgQAAIhGgCQgigCgEgBIhrgCIgIgGIhjgBQgEgBgZgCIhhgBQgKgBglACQgcABAAgDQAAgBAAAAQgNAAgMACQAGgfgCh1QAAhJgRiWIAEhzQAAgBgBg0QAAgJgCgGICdAAQAcgIASABQAMACACgCIBZAAQAsACAEABIA2AAIAEgBICLAAQAGACATACQARABAFAAIAAAAACdDeQAEgYAAgFQAAgIgDgEQgFAGgDAaQgCASAAAOQAAAGADADQADgEADgcIAAAAAAzBLQAAgSgEgJQgEADAAAXQAAASADAJIACAAQADgKAAgQIAAAAAgGBnQACAMgMAcQgRAnAAARIABALIADAAQANggAEgNQAIgVAAgVQAAgNgCgHIAAAAAg1AWQAAgGgDgFQgXAxAABRQAAAHAEADIADgCQACgQAKgzQAHglAAgXIAAAAAh6CDIACAAQAHgjAAgGQAAgIgEgEQgIAIAAAjQAAAHADADIAAAAAjWCIQAAgHgDgFQgIAHgGAjQgDATAAAbQAAAWAEAGIADgCQABgVAGghQAGgfAAgRIAAAAAihBQQgEAEAAAMQAAARALBdIADgBQACgGAAgIQAAgKgEgsQgFgvgDgKIAAAAAkTiOQAAgLgDgHQgGAJgEARQgEAQAAAOQAAAGACAEQAKgSADgIQACgIAAgOIAAAAAjdjvQgJAKgFASQgFAPAAAQQAAATAJAVQAKAWAAAWQAAAXgMAeQgLAeAAANIABAKIADAAQACgIASgyQAGgRAAgeQAAgggJgUQgKgUAAgNQAAgKAIgTQAHgSAAgBQAAgGgDgFIAAAAAAfhRQgCgagCgJIAAhTQgBgFgCgCQgKAIACAWQAEAVAAABQAAAqABAOQABAbAIAjIADgDIAAgPQAAgEgCgXIAAAAAhwiAQgDABgCAGIAABeQgEAVAAAHQAAANADAGIADAAQAEgaABgUQABgJAAgjQAAgrgDgPIAAAAAhMjMQAAgigHgNQgEADAAASQAAAPAAACQADAIAEAOIACgBQACgGAAgGIAAAAABhAxQABATACAmQAAAFABgEIAABQQgCAQADALIADgBQACgIABghQABgWAAgPQAAgxgBgLQAAgCgEhKQgHAQAAAiIAAAAADAAPQgCADAAAHQAAAUAfBSQAFAVABAgQACAxAAABIACAAQAEgHAAgMQAAg6gIglQgIgngbg+IAAAAAEUAgIADgvQAAgKgDgGQgGAHAAAhQAAAWADAEIADgDABkiiQgFACAAANQABAOAAABQAAAiAFAEIAEgDIAAgHQAAgZgFghIAAAAACNjZQAAAHAAAAQAAAeAFAeQAHAmAEAaIAEgDIAAgNQAAgHgGgxQgGgzgDgRQgFACAAAHIAAAAAD4jnQgCgPgIgbQgEADAAAIQAAAuALAzIACAAQADgKAAgTQAAgZgCgMIAAAA").cp();
	this.shape_291.setTransform(32.1,32.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#2E2E2E").s().p("AD/jdQACAMAAAZQAAATgCAJIgDABQgLgzAAguQAAgIAEgDQAIAbACAPIAAAAACZjYQADARAGAzQAHAxAAAHIgBANIgDADQgFgagHgnQgEgdAAgeQAAAAgBgIQAAgGAFgCIAAAAABriYQAFAhAAAZIAAAHIgEADQgFgEAAgiQAAgBgBgOQAAgNAFgCIAAAAAEbApIgDAEQgDgEAAgWQAAghAGgHQADAGAAAKIgDAuADIAZQAaA+AIAnQAIAlAAA6QAAAMgDAHIgDAAQAAgBgCgxQgBgggFgVQgfhSAAgUQAAgHADgDIAAAAABpA7QgBgiAHgSQAFBMAAACQAAALAAAxQAAAPAAAWQgCAhgCAIIgDABQgDgLADgQIAAhQQgCAEAAgFQgCgmAAgTIAAAAAhMjxQAIAMAAAjQAAAGgCAGIgDABQgEgOgCgJQgBgBAAgPQAAgTAEgCIAAAAAhph2QADAPAAArQAAAjAAAJQgBASgFAcIgDAAQgCgGAAgNQAAgKAEgSIAAheQABgGADgBIAAAAAAnhHQACAXAAAEIgBAPIgDADQgHgjgCgbQgBgOAAgqQAAgCgDgUQgDgXAKgHQADACABAFIAABTQABAJADAaIAAAAAjWjlQADAFAAAFQAAACgHASQgHATAAAKQAAAMAJAUQAKAVAAAfQAAAfgGARQgSAxgDAJIgDAAIgBgMQAAgLAMgeQALgeAAgXQAAgWgJgWQgKgVAAgTQAAgQAFgPQAFgSAJgKIAAAAAkLiEQAAAOgDAHQgCAJgKASQgDgEAAgGQAAgOAEgQQAEgRAHgJQADAHAAALIAAAAAiZBaQADAKAEAvQAEAsAAAKQAAAIgCAGIgCABQgLhdAAgRQAAgMAEgEIAAAAAjOCSQAAARgGAfQgGAhgCAVIgDACQgDgGAAgWQAAgbACgTQAGgjAIgHQAEAFAAAHIAAAAAhzCNQgCgDAAgHQAAgjAIgIQADAEAAAIQAAAGgGAjIgDAAAgtAfQAAAYgHAlQgKAzgDAQIgDACQgDgDAAgHQAAhRAXgxQADAFAAAFIAAAAAAABxQABAHAAANQAAAVgFAVQgEANgNAgIgDAAIgBgLQAAgRARgnQAJgcgBgMIAAAAAA2A6QAEAJAAASQAAAQgCAKIgDAAQgDgJAAgSQAAgXAEgDIAAAAAClC/QAEAEAAAIQAAAFgEAYQgEAcgCAEQgEgDAAgGQAAgOACgSQADgaAFgGIAAAA").cp();
	this.shape_292.setTransform(31.4,31.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#292929").s().p("AElkUQgFAAgRgBQgTgCgGgCIiLAAIgEABIg2AAQgEgBgsgCIhZAAQgCACgMgCQgSgBgcAIIidAAQACAGAAAJQABA0AAABIgEBzQARCWAABJQACB1gGAfQAMgCANAAQAAAAAAABQAAADAcgBQAlgCAKABIBhABQAZACAEABIBjABIAIAGIBrACQAEABAiACIBGACQAQAAAPgHQALgGAEgBIAAhgQgCgGAAgOQAIimAAgdQAAgygJhDQgKhEAAggQAAgQAHgOQgBAAgBAAIAAAAAE/k/QACgCADAAQAFABAAANQAAAEgBADQABACAAADQAAAEgDACQgLA/AAAkQAAApAIAgQAIAgAAAdQAAAegEAEIAADiQgBAJgBAsQAAANgCAKQAEABAAAGQAAAKgKALQgOAQgYgBIhTAAQgKgDgqgCIiOgBQgVgCg0AAQg0gBgcADQgdACgOgCQgkAIgvgFQgbgDgEAAQgLAAgBgGQgEgCAAgHQAAgDAAgEQgCgCAAgCQAAgCADgCQAAgdADgxQAEg+AAgeQAAhVgHgtQgHgxAAgtQAAgjAIhUQAAgLgEgSQgEgSAAgGQAAgJAHgEQgDgCAAgBQAAgFAIgDQBGgOAmAEQAlAEAagDQAagDAegBQBXgKBWAKQBUgJAfAEQAFAFAwAAIA9AAQAFgDADAAIAAAA").cp();
	this.shape_293.setTransform(32.1,32.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#484848").s().p("AElkaQABAAABAAQgHAOAAAQQAAAgAKBEQAJBDAAAyQAAAfgICkQAAAOACAGIAABgQgEABgLAGQgPAHgQAAIhGgCQgigCgEgBIhrgCIgIgGIhjgBQgEgBgZgCIhhgBQgKgBglACQgcABAAgDQAAgBAAAAQgNAAgMACQAGgfgCh1QAAhJgRiWIAEhzQAAgBgBg0QAAgJgCgGICdAAQAcgIASABQAMACACgCIBZAAQAsACAEABIA2AAIAEgBICLAAQAGACATACQARABAFAAIAAAAACeC1QgFAGgDAaQgCASAAAOQAAAGADADQADgEADgcQAEgYAAgFQAAgIgDgEIAAAAAAvAwQgEADAAAXQAAASADAJIACAAQADgKAAgQQAAgSgEgJIAAAAAgGBnQACAMgMAcQgRAnAAARIABALIADAAQANggAEgNQAIgVAAgVQAAgNgCgHIAAAAAg1AWQAAgGgDgFQgXAxAABRQAAAHAEADIADgCQACgQAKgzQAHglAAgXIAAAAAh6CDIACAAQAHgjAAgGQAAgIgEgEQgIAIAAAjQAAAHADADIAAAAAjWCIQAAgHgDgFQgIAHgGAjQgDATAAAbQAAAWAEAGIADgCQABgVAGghQAGgfAAgRIAAAAAihBQQgEAEAAAMQAAARALBdIADgBQACgGAAgIQAAgKgEgsQgFgvgDgKIAAAAAkTiOQAAgLgDgHQgGAJgEARQgEAQAAAOQAAAGACAEQAKgSADgIQACgIAAgOIAAAAAjdjvQgJAKgFASQgFAPAAAQQAAATAJAVQAKAWAAAWQAAAXgMAeQgLAeAAANIABAKIADAAQACgIASgyQAGgRAAgeQAAgggJgUQgKgUAAgNQAAgKAIgTQAHgSAAgBQAAgGgDgFIAAAAAAfhRQgCgagCgJIAAhTQgBgFgCgCQgKAIACAWQAEAVAAABQAAAqABAOQABAbAIAjIADgDIAAgPQAAgEgCgXIAAAAAhwiAQgDABgCAGIAABeQgEAVAAAHQAAANADAGIADAAQAEgaABgUQABgJAAgjQAAgrgDgPIAAAAAhTj7QgEADAAASQAAAPAAACQADAIAEAOIACgBQACgGAAgGQAAgigHgNIAAAAABhAxQABATACAmQAAAFABgEIAABQQgCAQADALIADgBQACgIABghQABgWAAgPQAAgxgBgLQAAgCgEhKQgHAQAAAiIAAAAADAAPQgCADAAAHQAAAUAfBSQAFAVABAgQACAxAAABIACAAQAEgHAAgMQAAg6gIglQgIgngbg+IAAAAAEUAgIADgvQAAgKgDgGQgGAHAAAhQAAAWADAEIADgDABkiiQgFACAAANQABAOAAABQAAAiAFAEIAEgDIAAgHQAAgZgFghIAAAAACSjiQgFACAAAHQAAAHAAAAQAAAeAFAeQAHAmAEAaIAEgDIAAgNQAAgHgGgxQgGgzgDgRIAAAAAD4jnQgCgPgIgbQgEADAAAIQAAAuALAzIACAAQADgKAAgTQAAgZgCgMIAAAA").cp();
	this.shape_294.setTransform(32.1,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_272},{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.hitbox}]},1).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_284},{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.flcontrolsTextInput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_1 = new lib.focusRectSkin();
	this.instance_1.setTransform(126.5,124.4,1,1,0,0,0,41.1,11);

	this.instance_2 = new lib.TextInput_upSkin();
	this.instance_2.setTransform(91.5,29.2,1,1,0,0,0,76,11);

	this.instance_3 = new lib.TextInput_disabledSkin();
	this.instance_3.setTransform(91.5,76.7,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// avatar
	this.instance_4 = new lib.Component_avatar();
	this.instance_4.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.flcontrolsLabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// avatar
	this.instance_5 = new lib.Component_avatar();
	this.instance_5.setTransform(0.1,0,1.25,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,22);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_6 = new lib.arrowIcon();
	this.instance_6.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_7 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_7.setTransform(4,4);

	// fill
	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_295.setTransform(7.6,4.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_296.setTransform(7.5,7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_297.setTransform(7.5,7);

	this.addChild(this.shape_297,this.shape_296,this.shape_295,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_8 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_9 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_9.setTransform(4,5);

	// fill
	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_298.setTransform(7.5,4.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3AhKBGICVAAIAAiLIiVAAIAACL").cp();
	this.shape_299.setTransform(7.5,7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_300.setTransform(7.5,7);

	this.addChild(this.shape_300,this.shape_299,this.shape_298,this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolslistClassesCellRenderer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_10 = new lib.CellRenderer_selectedUpSkin();
	this.instance_10.setTransform(95.6,236.3,1,1,0,0,0,76,11);

	this.instance_11 = new lib.CellRenderer_selectedOverSkin();
	this.instance_11.setTransform(95.6,206.3,1,1,0,0,0,76,11);

	this.instance_12 = new lib.CellRenderer_selectedDownSkin();
	this.instance_12.setTransform(95.6,178.3,1,1,0,0,0,76,11);

	this.instance_13 = new lib.CellRenderer_selectedDisabledSkin();
	this.instance_13.setTransform(95.6,148.6,1,1,0,0,0,76,11);

	this.instance_14 = new lib.CellRenderer_upSkin();
	this.instance_14.setTransform(95.6,56.6,1,1,0,0,0,76,11);

	this.instance_15 = new lib.CellRenderer_overSkin();
	this.instance_15.setTransform(95.6,86.6,1,1,0,0,0,76,11);

	this.instance_16 = new lib.CellRenderer_downSkin();
	this.instance_16.setTransform(95.6,116.6,1,1,0,0,0,76,11);

	this.instance_17 = new lib.CellRenderer_disabledSkin();
	this.instance_17.setTransform(95.6,26.6,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},1).wait(1));

	// avatar
	this.instance_18 = new lib.CellRenderer_upSkin();
	this.instance_18.setTransform(76,11,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.flcontrolsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_19 = new lib.focusRectSkin();
	this.instance_19.setTransform(70.1,310.9,1,1,0,0,0,41.1,11);

	this.instance_20 = new lib.Button_upSkin();
	this.instance_20.setTransform(70,213,1,1,0,0,0,41,11);

	this.instance_21 = new lib.Button_selectedUpSkin();
	this.instance_21.setTransform(88,18.7,1,1,0,0,0,41,11);

	this.instance_22 = new lib.Button_selectedOverSkin();
	this.instance_22.setTransform(88,50.7,1,1,0,0,0,41,11);

	this.instance_23 = new lib.Button_selectedDownSkin();
	this.instance_23.setTransform(88,114.7,1,1,0,0,0,41,11);

	this.instance_24 = new lib.Button_selectedDisabledSkin();
	this.instance_24.setTransform(88.1,82.7,1,1,0,0,0,41.1,11);

	this.instance_25 = new lib.Button_overSkin();
	this.instance_25.setTransform(70,181,1,1,0,0,0,41,11);

	this.instance_26 = new lib.Button_emphasizedSkin();
	this.instance_26.setTransform(70.1,245,1,1,0,0,0,41.1,11);

	this.instance_27 = new lib.Button_downSkin();
	this.instance_27.setTransform(70,149,1,1,0,0,0,41,11);

	this.instance_28 = new lib.Button_disabledSkin();
	this.instance_28.setTransform(70.1,277,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},1).wait(1));

	// avatar
	this.instance_29 = new lib.Component_avatar();
	this.instance_29.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.Headwear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{none:0,trilby:1,gasmask:2,batman:3},true);

	// Headwear
	this.instance_30 = new lib.Trilby();
	this.instance_30.setTransform(-0.3,-5.6,1.115,1,-6.4,0,0,0.5,-5.1);

	this.instance_31 = new lib.GasMask();
	this.instance_31.setTransform(4.8,13.4);

	this.instance_32 = new lib.BatmanMask();
	this.instance_32.setTransform(0.8,2.4,1,1,0,0,0,-3.9,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.weapon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Weapons
	this.instance_33 = new lib.Katana_1("synched",0);

	this.instance_34 = new lib.ElvenDagger("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear = new lib.Headwear();
	this.wear.setTransform(1.3,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.wear).wait(1).to({regX:1.9,regY:8.4,x:3.2,y:-21},0).wait(3).wait(1).to({rotation:0,x:3.5,y:-21.1},0).wait(4).wait(1).to({x:3.4,y:-21.5},0).wait(4).wait(1).to({x:3.1,y:-21.6},0).wait(5));

	// Character
	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AAAhIQA3ANANAQQAEAGAAAbQAAAHAAAEQgEANgHAOQgEAGgDAFQgHALgHAIQgGAHgHAFQgDABgCACIgWAAQgEgCgFgBQgigLgPgNQgNgNAAgTQAAgHAKgoQABgBAAgBQADgEACgEQAGgEAJgFQAbgNAIgGQAEgBABAAIAAAA").cp();
	this.shape_301.setTransform(0,-22);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAAhGQgBAAgDAAQgJAGgaAOQgKAFgGAEQgCADgCAEQgBACgBABQgKAoAAAGQAAATAOANQAPAOAhAKQAFACAEABIAWAAQADgBACgCQAHgEAGgHQAIgJAGgLQAEgFADgGQAHgOAEgMQAAgEAAgIQAAgbgEgFQgNgRg3gMIAAAAABagkQABAGAAAHQAAAFAAAEIAAAHQAAAVgPAhQgHAOgJAKQgSAXgbAAQggAAgYgJQgQgFgMgJQgHgGgFgIQgHgMgBgUQgCgLABgLQAAgfAIgNQAPgYA4gYQAUgKAnAPQAlAOAEAOIABAU").cp();
	this.shape_302.setTransform(0,-22.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAzgzQgRgNgVgEQgIABgGABQgPAEgMAGQgXAZgFAIQgKAQAAAYQAAARACADQADAGAXAXIAyAAQAYgTAQgYQAQgeAAgRQAAgGgCgFQgFgHgKgJIAAAAAA+hIQAbAUAAAdQAAAXgTAhQgLAUgOAMQgWAYgdACIAAAAQAAAAgBAAQgBAAgCAAQAAAAgBAAIgGAAQAAAAgBAAQAAAAgBAAIAAgBQgSgBgPgJQgVgIgIgTQgBgDgBgDQgFgHAAgGQAAgMAEgPQADgtAYgaQAXgaAjAAQAjgBAaATIAAAA").cp();
	this.shape_303.setTransform(0.7,-22);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AAygyQALAJAFAIQABAFAAAGQAAAQgQAfQgPAXgYATIgzAAQgXgXgDgGQgBgDAAgRQAAgYAKgQQAFgHAXgZQAMgHAPgDQAGgCAHAAQAWADAQANIAAAA").cp();
	this.shape_304.setTransform(0.8,-22.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AABhCQAkAFAQAJQAOAMAAAXQAAAIgCAJQgEALgGANQgVArggAAQAAAAgCgDQAAgEgdAAQgGgHgSgVQgGgHgEgHQgDgMAAgMQAAgCAAgBQABgDABgEQAFgNAFgFQAEgEAQgMQAGgFAEgEQAMgFAMgCQAAAAABAAIAAAA").cp();
	this.shape_305.setTransform(0.3,-21.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AADhYQAFAAAHABQAaADAUAPQAcAUAAAgQAAATgRAkQgYAzglAAQgBAAAAAAIgHAAQgEgBgGAAIAAAAQgDgCgFAAQAAAAgCAAQgpgIgQgiQAAgCgBgCQgNgTAAgSQAAgrAcgZQAYgWAkgBQABAAACAAIAAAAAABhAQgBAAAAAAQgMACgMAEQgEAFgGAEQgQAMgEAFQgFAFgFANQgBAEgBADQAAABAAABQAAANADAMQAEAGAGAIQASAUAGAHQAdABAAADQACAEAAAAQAgAAAVgsQAGgMAEgNQACgIAAgHQAAgXgOgNQgQgJgkgEIAAAA").cp();
	this.shape_306.setTransform(0.3,-22.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAqg8QgDgCgEgCQgSgFgagCQgGACgFACQgbAYgFAGQgQASgBARQAAABAAAAQAAABAAAAQACAMAVAcQATAYARAHIAbAAQATgEAUgmQAHgOAFgMQABgJAAgMQAAgOgCgIQgIgJgRgLIAAAAAA8hPQAPALAHAQQAHALAAAMQAAALgBAJQgBAhgHAPQgOAbgxAcIgVAAQgRgEgQgMQgWgLgNgaQAAgBAAAAQgQgYAAgRQAAgYANgUQACgDACgDQAIgLAPgJQAIgGALgFQAIgEAIgDQAPgHAUAEQAWACAQALIAAAA").cp();
	this.shape_307.setTransform(0.1,-21.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AAqg8QASALAHAJQACAIAAAPQABALgCAJQgEAMgIAPQgUAmgTAEIgbAAQgQgIgTgYQgWgcgCgMQABAAgBAAQAAgBAAgBQABgRAQgRQAFgHAbgXQAGgDAFgCQAaACATAFQADACADACIAAAA").cp();
	this.shape_308.setTransform(0,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_302},{t:this.shape_301}]}).to({state:[{t:this.shape_304},{t:this.shape_303}]},5).to({state:[{t:this.shape_306},{t:this.shape_305}]},5).to({state:[{t:this.shape_308},{t:this.shape_307}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-31.6,18.4,19);


(lib.arm_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Weapon
	this.wpnOver = new lib.weapon();
	this.wpnOver.setTransform(8.5,4.6,1,1,66.9,0,0,-0.4,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wpnOver}]}).wait(20));

	// Arm
	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgMgnIAAABQAAAAAAABQAAABABABIAAAAQABACAAAEQABAEABAGQABAOABAFQABAKAAAAQAAADABAKQABAIADAGIADALQAFAEADgNQABgCAAgBQAAgGABgEQgBgBAAgCQAAgBAAAAQgCgNgBgJQAAAAAAAAIgCgXQAAAAAAgBQAAgBAAAAQAAgDgCgDQAAgCgBgDQAAgKgFgCQgGgBgBADQgEAAAAAHIAAAA").cp();
	this.shape_309.setTransform(1.8,4.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAKAJQAFAXAAAGQAAACgDADQgDADgEAAQgLAAgBgPQACgSgCgEQgCgFgCgOQgDgOAAgEQAAgVAMAEQAJAEgBAcQAAABAEAVIAAAA").cp();
	this.shape_310.setTransform(1.9,4.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgJAHQgDgRAAgUQAAgIAHgGQAFgGADAOQAAAIACARQABAMAEAPQADANAAAHQAAAKgIAAQgKAAgEgnIAAAA").cp();
	this.shape_311.setTransform(1.7,4.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgBAeQABgMAAgDQgBgFgGgUQgFgRAAgLQAAgIAJAAQAIAAACAPQAAAQABAFQAFAUAAANQAAAJgCAHQgDAMgIgIQgCgEABgJIAAAA").cp();
	this.shape_312.setTransform(1.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_309}]}).to({state:[{t:this.shape_310}]},5).to({state:[{t:this.shape_311}]},5).to({state:[{t:this.shape_312}]},5).wait(5));

	// Weapon Under
	this.wpnUnder = new lib.weapon();
	this.wpnUnder.setTransform(8.5,4.6,1,1,66.9,0,0,-0.4,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wpnUnder}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-0.1,2.6,10);


(lib.mcPlayer_static_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear_1 = new lib.Headwear();
	this.wear_1.setTransform(1.3,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.wear_1).wait(1).to({regX:1.9,regY:8.4,x:3.2,y:-21},0).wait(3).wait(1).to({rotation:0,x:3.5,y:-21.1},0).wait(4).wait(1).to({x:3.4,y:-21.5},0).wait(4).wait(1).to({x:3.1,y:-21.6},0).wait(5));

	// Character
	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AAAhIQA3ANANAQQAEAGAAAbQAAAHAAAEQgEANgHAOQgEAGgDAFQgHALgHAIQgGAHgHAFQgDABgCACIgWAAQgEgCgFgBQgigLgPgNQgNgNAAgTQAAgHAKgoQABgBAAgBQADgEACgEQAGgEAJgFQAbgNAIgGQAEgBABAAIAAAA").cp();
	this.shape_313.setTransform(0,-22);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAAhGQgBAAgDAAQgJAGgaAOQgKAFgGAEQgCADgCAEQgBACgBABQgKAoAAAGQAAATAOANQAPAOAhAKQAFACAEABIAWAAQADgBACgCQAHgEAGgHQAIgJAGgLQAEgFADgGQAHgOAEgMQAAgEAAgIQAAgbgEgFQgNgRg3gMIAAAAABZg4IABAUQABAGAAAHQAAAFAAAEIAAAHQAAAVgPAhQgHAOgJAKQgSAXgbAAQggAAgYgJQgQgFgMgJQgHgGgFgIQgHgMgBgUQgCgLABgLQAAgfAIgNQAPgYA4gYQAUgKAnAPQAlAOAEAOIAAAA").cp();
	this.shape_314.setTransform(0,-22.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgBhCQgPAEgMAGQgXAZgFAIQgKAQAAAYQAAARACADQADAGAXAXIAyAAQAYgTAQgYQAQgeAAgRQAAgGgCgFQgFgHgKgJQgRgNgVgEQgIABgGABIAAAAAA+hIQAbAUAAAdQAAAXgTAhQgLAUgOAMQgWAYgdACIAAAAQAAAAgBAAQgBAAgCAAQAAAAgBAAIgGAAQAAAAgBAAQAAAAgBAAIAAgBQgSgBgPgJQgVgIgIgTQgBgDgBgDQgFgHAAgGQAAgMAEgPQADgtAYgaQAXgaAjAAQAjgBAaATIAAAA").cp();
	this.shape_315.setTransform(0.7,-22);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgBhAQAGgCAHAAQAWADAQANQALAJAFAIQABAFAAAGQAAAQgQAfQgPAXgYATIgzAAQgXgXgDgGQgBgDAAgRQAAgYAKgQQAFgHAXgZQAMgHAPgDIAAAA").cp();
	this.shape_316.setTransform(0.8,-22.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AAAhCQAAAAABAAQAkAFAQAJQAOAMAAAXQAAAIgCAJQgEALgGANQgVArggAAQAAAAgCgDQAAgEgdAAQgGgHgSgVQgGgHgEgHQgDgMAAgMQAAgCAAgBQABgDABgEQAFgNAFgFQAEgEAQgMQAGgFAEgEQAMgFAMgCIAAAA").cp();
	this.shape_317.setTransform(0.3,-21.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AA9hFQAcAUAAAgQAAATgRAkQgYAzglAAQgBAAAAAAIgHAAQgEgBgGAAIAAAAQgDgCgFAAQAAAAgCAAQgpgIgQgiQAAgCgBgCQgNgTAAgSQAAgrAcgZQAYgWAkgBQABAAACAAQAFAAAHABQAaADAUAPIAAAAAAAhAQgMACgMAEQgEAFgGAEQgQAMgEAFQgFAFgFANQgBAEgBADQAAABAAABQAAANADAMQAEAGAGAIQASAUAGAHQAdABAAADQACAEAAAAQAgAAAVgsQAGgMAEgNQACgIAAgHQAAgXgOgNQgQgJgkgEQgBAAAAAAIAAAA").cp();
	this.shape_318.setTransform(0.3,-22.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAjhAQgSgFgagCQgGACgFACQgbAYgFAGQgQASgBARQAAABAAAAQAAABAAAAQACAMAVAcQATAYARAHIAbAAQATgEAUgmQAHgOAFgMQABgJAAgMQAAgOgCgIQgIgJgRgLQgDgCgEgCIAAAAABSg0QAHALAAAMQAAALgBAJQgBAhgHAPQgOAbgxAcIgVAAQgRgEgQgMQgWgLgNgaQAAgBAAAAQgQgYAAgRQAAgYANgUQACgDACgDQAIgLAPgJQAIgGALgFQAIgEAIgDQAPgHAUAEQAWACAQALQAPALAHAQIAAAA").cp();
	this.shape_319.setTransform(0.1,-21.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAkhAQADACADACQASALAHAJQACAIAAAPQABALgCAJQgEAMgIAPQgUAmgTAEIgbAAQgQgIgTgYQgWgcgCgMQABAAgBAAQAAgBAAgBQABgRAQgRQAFgHAbgXQAGgDAFgCQAaACATAFIAAAA").cp();
	this.shape_320.setTransform(0,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_314},{t:this.shape_313}]}).to({state:[{t:this.shape_316},{t:this.shape_315}]},5).to({state:[{t:this.shape_318},{t:this.shape_317}]},5).to({state:[{t:this.shape_320},{t:this.shape_319}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-31.6,18.4,19);


(lib.mcPlayer_running_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear_2 = new lib.Headwear();
	this.wear_2.setTransform(9.5,-25.7,1,1,0,0,0,0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.wear_2).wait(1).to({regX:1.9,regY:8.4,x:11.4,y:-20.3},0).wait(1).to({x:10.9,y:-18.2},0).wait(1).wait(1).to({x:13.9,y:-19},0).wait(1).wait(1).to({x:15.2,y:-17.7},0).wait(1).wait(1).to({x:14.9,y:-19.7},0).wait(1).wait(1).to({x:15.7,y:-18.7},0).wait(1).wait(1).to({x:13.7,y:-20},0).wait(1).wait(1).to({x:16.2,y:-17},0).wait(1).wait(1).to({x:16.4},0).wait(1).wait(1).to({x:16.2,y:-16.7},0).wait(1).wait(1).to({x:15.9,y:-18.2},0).wait(1).wait(1).to({x:15.4,y:-17.7},0).wait(1).wait(1).to({x:13.4,y:-18.7},0).wait(2));

	// Character
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Ag9gjQAEgNAkgRQAFgDAFgCQANABATAAQAkAAALAeQAFANAAAaQAAAcgCAFQgDANgUAZIg1AAQgMAAgKgEQgCgFgEACQgVgKgMgdQgBAAAAAAQgBgCgBgCQgCgEAAgEQAAgIAKgoIAAAA").cp();
	this.shape_321.setTransform(8.2,-21.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAIhbQA7AFASAmQAHAOAAASQgCAQAAAAQADAZgGAXQgPAtg0AAQgbAAgXgIQgFgGgKgBIAAAAQgVgMgNgVQgMgDAAgbQAAhKA0gZQASgIARABQAEABAAAAQABgBAAgBQADABADAAQAAAAABAAIAAAAAg/giQgKAoAAAJQAAADADAEQABADABACQAAAAABgBQAMAdAUALQAFgDABAGQALAEALAAIA1AAQAVgaADgMQACgFAAgdQAAgZgFgOQgLgegkAAQgTAAgOgBQgEACgGADQgkARgEANIAAAA").cp();
	this.shape_322.setTransform(8.3,-22);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AA6gnQALAJAAAUQACARgKASQgVAkg+AAQgNAAgSgSQgPgQAAgIQAAgIAQgcQASgiAOgJQA6AGAUAPIAAAA").cp();
	this.shape_323.setTransform(7.4,-19.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgxhAQAHgGACgBQAKgGACAAQAbgEAHABQgFACgBAAQAEAAAFAAQABAAAAABQAAAAAAgBQAtADAUAcQAMARAAAUQAAAagLAXQgVAqg2AAQgOAAgNgCQAAAAAAABQAAAAAAAAQgFgDgJgBQABAAAAAAQgYgIgMgRQgLgPAAgQQAAgQACgFQAIgUAEgLQAEgOALgLQABgCAHgFIAAAAAA5gnQgTgPg6gFQgOAJgSAhQgQAdAAAIQAAAIAPAQQASARANAAQA+AAAVgkQAKgSgDgQQAAgVgLgJIAAAA").cp();
	this.shape_324.setTransform(7.4,-19.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("ABPAAQAAA/hLAAQguAAgWgZQgOgPAAgQQAAgRAJgWQANghAaADQBDgCAbAbQAPAPAAAWIAAAA").cp();
	this.shape_325.setTransform(10.8,-20);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("ABAhDQAiAcAAApQAAAbgMATQgWAlg6AAQgXAAgTgGQgBABAAABQgGgGgKgBQgTgJgMgQQgNgSAAgUQAAgrAXgaQAoguBiAlIAAAAABPABQAAgVgPgPQgbgbhDACQgagDgNAhQgJAWAAARQAAAQAOAPQAWAZAuAAQBLAAAAhAIAAAA").cp();
	this.shape_326.setTransform(10.8,-20.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgrA6QgogYAAgfQAAgDADgMQAEgSAHgNQAYgrAyANQALAKAnAVQAdAQAAALQgCAWgKAYQgTAugqAAQgVAAghgTIAAAA").cp();
	this.shape_327.setTransform(12.3,-19.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAAhcQAoADAeAWQAhAWAAAcQgEAcgNAcQgZA3gxAAQgaAAgagPQgBAAAAABQgCgCgCgCQgFgGgHgCQgMgJgJgKQgYgQAAggQAAgzAhgZQAbgVAqAEIAAAAAgrA2QAhAUAVAAQAqAAATgvQAKgXACgWQAAgMgdgPQgngVgLgLQgygNgYArQgHAOgEASQgDALAAAEQAAAeAoAYIAAAA").cp();
	this.shape_328.setTransform(12.3,-19.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgbhLQAvAAAfAoQAXAfAAAXQAAAVgEAHQgIAPgkAOIgiAAQgwgKgNgTQgEgHAAgWQAAgbAIgWQALgkAbgIIAAAA").cp();
	this.shape_329.setTransform(11.8,-22.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgbhMQgbAIgLAjQgIAXAAAaQAAAXAEAGQANATAwAKIAiAAQAkgNAIgQQAEgGAAgVQAAgYgXgeQgfgogvAAIAAAAAAAhcQAkAGAcAeQAdAhAAApQAAAggHAMQgRAgg8AAQgdAAgWgHQgFgEgIgBIAAAAQgSgJgKgQQgLgTACgVQAAg9AdgdQAagaAlAHIAAAA").cp();
	this.shape_330.setTransform(11.8,-22.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgwgzQAVgPAbADQAdADAUAUQAWAVAAAgQAAAcgJALQgLAMgiAAQg1AAgWgeQgMgRAAgVQAAgfAWgQIAAAA").cp();
	this.shape_331.setTransform(12.8,-20.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("Agwg0QgWAQAAAfQAAAUAMASQAWAeA1AAQAiAAALgNQAJgKAAgdQAAgfgWgWQgUgTgdgDQgbgDgVAPIAAAAAAahNQBAAGAABRQAAAcgHAOQgQAfgyAAQgeAAgWgJIAAAAQgFgEgHgCQgTgKgLgSQgNgVABgVQAAghAQgVQAdglBGAQIAAAA").cp();
	this.shape_332.setTransform(12.8,-20);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AAAg/QAcAEAWARQAXARAAASQAAAOgJAXQgLAcgPAIIgvAAQgmgMgPgVQgJgOAAgTQAAhMBHANIAAAA").cp();
	this.shape_333.setTransform(10.5,-22);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAAhVQAkADAbAWQAdAWAAAfQAAAagJAWQgTAtgyAAQgRAAgQgEQAAABAAAAQgDgBgDAAQgFgDgHgBQAAAAABgBQgYgLgPgVQgQgYAAgVQAAgtAegXQAZgUAkADIAAAAAAAg/QhHgNAABMQAAATAJAOQAPAVAmAMIAvAAQAPgIALgcQAJgXAAgOQAAgSgXgRQgWgRgcgEIAAAA").cp();
	this.shape_334.setTransform(10.5,-22);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AhDAwQgLgRAAgQQAAgbAIgQQALgZAigTQBSAaANAJQAJAHAAAdQAAAsgcARQgVANgxAAQgfAAgRgZIAAAA").cp();
	this.shape_335.setTransform(13.3,-19);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("ABpjOQAEACAMAAQAUAAAFAcQACAHAAAbQABAagLAYQgVAvg8AAQgdAAgWgGQAAABgBABQgDgCgCgBQgDgFgJgCQgjgUAAguQAAgOAIgYQAKgfAPgLQAMgIAVgWQAWgNAYAVQADABAlAUIAAAAAgRhaQARAZAdAAQAzAAAVgNQAcgRAAguQAAgdgJgHQgNgJhUgaQggATgLAZQgIAQAAAdQAAAQALARIAAAAAiTDxQABgCACgBQAAABAAAAQgCABgBABIAAAA").cp();
	this.shape_336.setTransform(8.3,-5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("Ag3g6QAWgRAhAFQAgAFAYAVQAbAXAAAaQAAAbgLANQgXAdhFgCQg9guAAgWQAAgqAagUIAAAA").cp();
	this.shape_337.setTransform(13.2,-19.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgjhEQgaAUAAAsQAAAUA9AuQBFACAXgdQALgNAAgZQAAgcgagXQgZgVgggFQghgFgWARIAAAAAAUhkQAoAFAeAbQAgAcAAAlQAAAcgJAPQgOAaguAQIg6AAQgKgGgIgFIAAAAQgDgCgDgBQgGgGgGgEQABAAAAgBQgoghAAgdQAAg2AggZQAbgWApAGIAAAAAh4BmIAAAAIgBAAIABAA").cp();
	this.shape_338.setTransform(11.2,-18.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AhMAIQAAgSAFgYQAIgdAKgIQCDABAAAzQAAAXgMATQgKARgfAgIgsAAQgEgBgUgBQghgPAAgvIAAAA").cp();
	this.shape_339.setTransform(13.2,-18.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AAdhUQBEAXAAAtQAAAbgPAfQgZA1g2AAQgYAAgUgFQAAAAgBABQgDgCgFgBQgDgDgFgBQgVgKgKgTQgKgVAEgXQAAgQAHgeQAIgiAKgJQAigdBBAXIAAAAAhMALQAAAvAiAPQAUABAEABIAsAAQAfggAKgQQALgUAAgXQAAgyiCgCQgLAIgHAdQgGAYAAASIAAAA").cp();
	this.shape_340.setTransform(13.1,-19);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AADhNIAVAAQAQAOAcAOQAMAHAAASQAAAVgVAfQgXAkgaAOIgjAAQgPAAgTgUQgUgWAAgVQAAgeANgTQATgbAygQIAAAA").cp();
	this.shape_341.setTransform(13,-19.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AADhPQgyAQgTAbQgNATAAAeQAAAVAUAWQATAUAPAAIAjAAQAbgOAWgkQAVgfAAgVQAAgSgMgHQgcgOgQgOIgVAAAAAheQAngEAdASQAfAUAAAiQgDAggPAeQgdA8g5AAQgUAAgPgEQgGgDgJAAQgCgBgCgBQgCgCgDgBQABgBAAAAQgQgKgJgRQgLgUABgVQAAgxAfgeQAbgbAogDIAAAA").cp();
	this.shape_342.setTransform(12.9,-19.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("ABKAeQgNASgjAWIg8AAQgYgXgUgPQgHgIAAgWQAAgdALgOQAYgeBKACQAhAKAQATQANAPAAATQAAAUgMAQIAAAA").cp();
	this.shape_343.setTransform(12.6,-19.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AAAibQApAEAfAYQAhAaAAAhQAAAdgNAUQgQAWgtAZIg/AAQgFgDgGgCQgDgFgFgDQgcgVgTgQQgGgGAAggQAAg1AhgZQAcgWArAFIAAAAABKgeQAMgRAAgWQAAgSgNgPQgQgUghgKQhKgCgYAeQgLAOAAAfQAAAWAHAIQAUAQAYAVIA8AAQAjgUANgSIAAAAAgzCdQAAAAAAgBQAAABABAAIgBAA").cp();
	this.shape_344.setTransform(12.6,-13.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgDhMQAbADAZAQQAZAQABARQAEAegKAaQgTA0hAgHQgWgVgYgVQgNgOgCgWQgGhSBOAHIAAAA").cp();
	this.shape_345.setTransform(10,-20.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgEhhQAjABAeAUQAfAVADAhQACAggJAbQgSA4g7AEQgQABgQgEIAAAAQgBgBgCAAQgFgEgIgCQAAAAABgBQgOgIgNgOQgcgggDggQgDgwAcgaQAZgXAoAAIAAAAAgDhJQhNgIAGBRQABAYANAOQAZAVAWAUQA/AIAUg0QAJgbgDgdQgCgRgZgRQgYgQgcgCIAAAA").cp();
	this.shape_346.setTransform(10,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_322},{t:this.shape_321}]}).to({state:[{t:this.shape_324},{t:this.shape_323}]},2).to({state:[{t:this.shape_326},{t:this.shape_325}]},2).to({state:[{t:this.shape_328},{t:this.shape_327}]},2).to({state:[{t:this.shape_330},{t:this.shape_329}]},2).to({state:[{t:this.shape_332},{t:this.shape_331}]},2).to({state:[{t:this.shape_334},{t:this.shape_333}]},2).to({state:[{t:this.shape_336},{t:this.shape_335}]},2).to({state:[{t:this.shape_338},{t:this.shape_337}]},2).to({state:[{t:this.shape_340},{t:this.shape_339}]},2).to({state:[{t:this.shape_342},{t:this.shape_341}]},2).to({state:[{t:this.shape_344},{t:this.shape_343}]},2).to({state:[{t:this.shape_346},{t:this.shape_345}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-31.3,18.4,18.6);


(lib.mcPlayer_running = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Character
	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgVhBQAFgDAFgCQANABATAAQAkAAALAeQAFANAAAaQAAAcgCAFQgDANgUAZIg1AAQgMAAgKgEQgCgFgEACQgVgKgMgdQgBAAAAAAQgBgCgBgCQgCgEAAgEQAAgIAKgoQAEgNAkgRIAAAA").cp();
	this.shape_347.setTransform(8.2,-21.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("ABxkvQAEABACAAQABgBAAgBQADABADAAQAAAAABAAIAAAAQA7AFASAmQAGAOAAASQgBAQAAABQADAagHAWQgOAug0AAQgdAAgXgJQgEALgQAdQAAABAAABQAEAFAGAJQARAaAFAPQANgIAXgMQA0gdAAARQAAAIglAXQglAXgOAAQgDAAgDgBQgBAAgBABQAAAAgBgBQgEgBgCgCQgBgCAAgDQAAgBABgBQgFgJgJgPQgIgRgEgIQgRAhgFAOQgIAigHAYQgHAZgIALQABADABADQAGAOABAQQABAHAEAWQAEAUABALQAAACAPA1QAOA0AAAPQAAANgJAAQgGAAgNgvQgDgJgOg8QgNg7gGgeQgJAMgPASQgWAZgKAKQgBADgDADQgHAFgNABIhGAAQgQgFgWgEQgLgBAAgGQAAgIAJgCQAMgCAhAIIA/AAQAIgEAGAAQASgeATgYQARgWAKgHQADgfAwhoQACgFACgFQgMADgJACQgEABgsAGQgnAFgEADQgQALgpAdIgIgDQAAgCgBgGQAAgiBjgVQAlgIAdgCQANAAAIAAQAOgcAJgOQgVgLgOgVQgLgDAAgcQAAhLA0gZQASgIARABIAAAAABekUQgkARgEANQgKAqAAAIQAAAEADAEQABADABACQAAAAAAgBQANAdAUALQAFgDABAFQAKAEAMAAIA3AAQAUgZAEgNQABgFAAgcQAAgbgFgOQgLgegjAAQgTAAgQgBQgEACgGADIAAAA").cp();
	this.shape_348.setTransform(-3.5,-0.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AA6gnQALAJAAAUQACARgKASQgVAkg+AAQgNAAgSgSQgPgQAAgIQAAgIAQgcQASgiAOgJQA6AGAUAPIAAAA").cp();
	this.shape_349.setTransform(7.4,-19.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AACkUQAHgGACgBQAKgGABAAQAcgEAIABQgEACgDAAQAGAAAFAAQAAAAAAABQAAAAAAgBQAtADAUAcQANARAAAUQAAAcgMAXQgVAqg2AAQgPAAgNgCQAAAAAAABQgFAMgGANQABACAAABIAAA9QADgBAngSQAkgSAEAAQAKAAAAAKQAAALhUAkIgRAAQgHgKgBgaQgGATgCAMQgEAhgDAPQgHAdgLATQAGARADANQACAFACAFQABAbAFALQAFAKAAARQAAAPgLAKQAAAmgBANQgDAogJACIgIgDIAChOQgeALg4AAQgJAAgCgEQgBgBAAgDQAAgJA3gIQAcgEAOgGIgGhhQAAgCgBgBQAAgDAAgEIAAgBQAAgVADgDQACgOAGgjQAJgrADgJQAHgXAIgTQgFADgHADQgbANgUAGQgJADgpArQgKAAABgLQAAgZA6ggQABgBAYgIQAWgHAGgGQANgNAGABQADgEACgEQADgFACgDQgVgIgNgRQgLgPAAgQQAAgQADgHQAIgUADgLQAEgOALgLQABgCAGgFIAAAAABuj7QgTgPg8gFQgOAJgRAhQgQAfAAAIQAAAIAQAQQAPARANAAQBBAAAUgkQAKgSgCgSQAAgVgLgJIAAAA").cp();
	this.shape_350.setTransform(2.1,1.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("ABPAAQAAA/hLAAQguAAgWgZQgOgPAAgQQAAgRAJgWQANghAaADQBDgCAbAbQAPAPAAAWIAAAA").cp();
	this.shape_351.setTransform(10.8,-20);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("ACAkVQAiAcAAAsQAAAagMAUQgWAkg5AAQgaAAgTgFQgFAJgUAlQgCASgHAsQAAAFAhALQAjAKAAAHQAAAJgOAAQgqAAgfgnQAAgFAAgFQgTAggZAtQAEADAAAJQAFAHAGALQAhA5AAAiQAAASgBADQgEAMgTAGQgPAFgoALQgCAFgBAHQgFAcgFAKQAAABAAAAQAAAKgMAHIgIgDQgBgCAAgGQAAgIAFgFQABgIAHgfQgXAGgEAAQgIAAgDgEQAAgBAAgEQAAgPAsgJQAIgnAEgOQAKgqgBgSQAHgbACgDQgCgDAAgBQAAgKADgCQAGgcAxhUQgVAVgIAQQgMAZgIAQQgQAhgGAAQgNAAAEgLQAAgqA/hFQAZgcASgKQADgCACAAQAEgKAGgGQgSgJgLgPQgNgSAAgVQAAgtAWgZQAmguBkAkIAAAAACPjOQAAgYgPgPQgbgahFACQgagEgLAiQgIAVAAAUQAAAPANAQQAUAYAxAAQBKAAAAg/IAAAAAhMBwQgJAtgHASQgCAEgEAWQA4gIAAgWQAAgNgSgsQgBgFgLgSQgBAJgDAMIAAAA").cp();
	this.shape_352.setTransform(4.4,0.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgrA6QgogYAAgfQAAgDADgMQAEgSAHgNQAYgrAyANQALAKAnAVQAdAQAAALQgCAWgKAYQgTAugqAAQgVAAghgTIAAAA").cp();
	this.shape_353.setTransform(12.3,-19.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AB1klQAoAEAeAVQAhAXAAAbQgEAfgNAbQgZA3gxAAQgcAAgagPQgDAGgXAmQAAABgBABQACADAAAJQAAAKgMANQgOAOgCAJQACAQABAIQABAOgNAAQgEAAgDgCQABABAAABQANAcAAAJQAAAGgBACQgBAFgHADIgJgDQgDgVgHgSQgDAIgEAJQgHASgIAOQAXACA2AkQAPgNAAAYIAAAAQAAABAAABQAAAFgpAvQgnAwgOAJIgIgDQgBgBAAgGQAAgDAVgYQAZgeAFgHQANgUAKgNQgPgFgVgKQgXgLgKgFQgJAZg3BJQhGBdglAAQgMAAAAgJQAAgBAsgmQAvgoAMgYQASgkAeglQAIgKAGgGQAAAAAAgBQAAgZAihCQgBgIAAgLQAAgfAlghQAMgLAJgFQAPgXAJgJQgNgKgLgLQgYgPAAggQAAg1AhgZQAbgWAsAEIAAAAABIiQQAhATAXAAQAqAAATguQAKgYACgYQAAgLgdgQQgngVgLgKQg0gNgYArQgHANgEASQgDAMAAAFQAAAfAoAYIAAAAAABAGIAAABQAAgBAAAAIAAAA").cp();
	this.shape_354.setTransform(0.6,0.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AhBgfQALgkAbgIQAvAAAfAoQAXAfAAAXQAAAVgEAHQgIAPgkAOIgiAAQgwgKgNgTQgEgHAAgWQAAgbAIgWIAAAA").cp();
	this.shape_355.setTransform(11.8,-22.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("ABIjwQgHAXAAAcQAAAXAEAGQAMATAxAKIAkAAQAjgNAJgQQADgGAAgVQAAgagXgeQgegogxAAQgbAIgMAjIAAAAACLkrQAlAGAbAeQAdAhAAArQAAAggGAMQgRAgg9AAQgfAAgWgHQAAACAAABQAAAFgNAYQAAAEAAAGQAAAEgHAXQgHAWgBADQgBAHgHATQgHATAAADQAAAJAKAbQAIAWACAFQAPgCASgDQAJgJABASQAAABAAAAIAAABQAAABAAAAQg3CRgNAAQgLAAAAgJQAAgRAnhRQAHgNAGgKQgZAFgUAFIgyAAQgJALgYAXQgtAsgKAPQgFAKgqAkQgzArgcAAQgKAAAAgIQATgJAZgRQAzgiAigvQAZgiAggfQASgRALgFQAAgDAAgEQAAgkA2hrQABgCABgBQgCABgCACQgkAfgFAbQgCAbgDATQgHAkgLAAQgLAAAAgJQAAhYA3gyQATgRATgGQASggAKgKQgSgJgJgQQgMgTADgVQAAg/AdgdQAZgaAnAHIAAAAAAjgCQgGAQgKAlQgJAcgNATIABAAQACgBAFgBQAIgCAkgEQgHgKgEgSQgEgTgBgTQAAgOAOgkQgLAUgBAEIAAAA").cp();
	this.shape_356.setTransform(-2,-1.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgwgzQAVgPAbADQAdADAUAUQAWAVAAAgQAAAcgJALQgLAMgiAAQg1AAgWgeQgMgRAAgVQAAgfAWgQIAAAA").cp();
	this.shape_357.setTransform(12.8,-20.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("ABhjzQgWAQAAAfQAAAWAMASQAWAeA3AAQAiAAALgNQAJgKAAgdQAAghgWgWQgUgTgdgDQgdgDgVAPIAAAAACtkMQBAAGAABTQAAAcgHAOQgQAfgyAAQggAAgWgJQAAACAAACQAAAGghAnQAAABAAACQAAAHgGAcQgHAigBADQATADAcAIQAoAMAAAHQAAAJgQAAQgTAAgigMQgmgNAAgLQAAgUAKgdQgTAYgHALQgCADgSA3QgHAZgFALQAkgDAygNQAOgEATgIQADAAACAAQAGABAAAJIAAAAQAAABAAABQAAADgcBAQgDAHgCAaQgBAUgKAKIgJgDQgBgIAAgRQAAgeAbg1QABgCABgCQgFACgFABQgrAOg2AAQgHAAgEgBQiQCmhBAAQgKAAABgKIAsgeQA1gjAigdQAqgqAUgUQAMgLAHgFIAAgBQAAg3BChdQADgEADgEQgHABgIABQgzAFgWATQgGAFgfAjQgNAAAEgOQAAgtBTgTQAcgHAaABQAGAAAFAAQAOgSANgKQAGgGAFgCQgUgKgMgTQgNgVABgXQAAghAQgVQAdglBIAQIAAAA").cp();
	this.shape_358.setTransform(-1.8,-0.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AAAg/QAcAEAWARQAXARAAASQAAAOgJAXQgLAcgPAIIgvAAQgmgMgPgVQgJgOAAgTQAAhMBHANIAAAA").cp();
	this.shape_359.setTransform(10.5,-22);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("ACdkrQAkADAbAVQAdAXAAAfQAAAcgJAVQgTAtgyAAQgTAAgQgDQgCAMgYAkQgEAHgEAFQACAEACAFQANAmADAUQAPgIAdgMQA8gZAAASQAAADhqAvQgCAAgCAAQgBAAAAAAQgBAAgBAAQgIgCAAgGQAAgCABgCQgEgIgFgSQgFgRgCgKQgEAGgDAHQgXAngEALQgQA0AAACQgEALgEAIQACAAADABQAXAFAbAXQACACAaAUQAVAQAFALQAGAPAGAgQAGAgAAAVQAAABAAABQACAEAAAJQAAAIAAACQgCAGgHAAQgIAAgBgHQgBgIAAgBQAAgBAAgCQgEgJgDgWQgGgzgDgIQgGgTg2giQgggSgMgJQgJANgiAcQgYATgfAYQgNAOgrAWQg6AdguAAQgMAAAAgIQAAgFBCgXQBJgZAagbQAIgJAwgjQAYgRALgHQAAgCAAgCQAAgcAwhgQAMgXAIgQQgBAAgBAAQAEgHAEgIIAAAAQgHABgJAAQg1AEgrAQQgLAEgKAOQgKAOgSAGIgIgDIgBgGQAKgQAHgJQAMgQATgFQA5gSApgFQAYgCAKAEQARgdAKgMQgYgKgOgWQgQgXAAgWQAAgvAdgXQAZgTAmADIAAAAACdkWQhJgMAABLQAAAWAJANQAPAWAmALIAxAAQAPgHALgcQAJgYAAgPQAAgSgXgRQgWgRgcgFIAAAA").cp();
	this.shape_360.setTransform(-5.2,-0.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AhDAwQgLgRAAgQQAAgbAIgQQALgZAigTQBSAaANAJQAJAHAAAdQAAAsgcARQgVANgxAAQgfAAgRgZIAAAA").cp();
	this.shape_361.setTransform(13.3,-19);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("ACekHQAEACAMAAQAUAAAFAcQACAHAAAbQABAagLAYQgVAvg8AAQgdAAgVgGQgFAIgYAZQgCADgDACQACAGAAAGQAAAPgFAJIAAAWQAbgKAWgJQArgRATAAQAIAAABAKQAAAMh+AiQgLAAgCgNQgBgIABgIQAAgNACgNQgPAUgKAOQgBACgbAzQgOAdgJAIQAEAKAFAPQADAKALA0QADAQAPA3QAOAyAAAEQAAAIgKABQgNAAgZhuQgGgegGgdQgBALAAAMQAAAYgeARQgfARgwAAQgMAAgDgEQAAAAAAgEQAAgLAUgFQA5gPAEgBQAagJABgJQgDgMAAgGIAAgoQAAgPAKgLQABgMAEACQAGgMALgXQAXgqAKgNQAMgSAMgQQgfgCgZAAQgWAAgoAaQgUAMgQANQgKAAAAgJQAAgDANgOQAPgQAVgMQA9gjBEAVQAJgKAJgJQAIgHAGgFQgkgTAAgvQAAgOAIgYQAKgfAPgLQAMgIAXgWQAWgNAYAVQADABAlAUIAAAAAAiiTQARAZAfAAQAzAAAVgNQAcgRAAguQAAgdgJgHQgNgJhUgaQgiATgLAZQgIAQAAAdQAAAQALARIAAAA").cp();
	this.shape_362.setTransform(3,0.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("Ag3g6QAWgRAhAFQAgAFAYAVQAbAXAAAaQAAAbgLANQgXAdhFgCQg9guAAgWQAAgqAagUIAAAA").cp();
	this.shape_363.setTransform(13.2,-19.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAekDQgaAUAAAtQAAAVA9AvQBHACAXgdQALgNAAgcQAAgbgagXQgZgVgggFQgjgGgWARIAAAAABXkjQAoAGAeAaQAgAcAAAlQAAAfgJAPQgOAZguARIg8AAQgKgGgIgGQgHAJgQATQgCABgBACQgBAIgKAdQgIAbgEAJQAHAHAcAMQAXAOAAANQAAACgBADQgDAEgFAAQgSAAg0g1QAEgPAFgOQgIALgFAKQgNATgjBBQARAZAiBUQAAATgxAUQAAAEABAGQAEAdAAAMQAAAOgBACQgCAOgIAAQgHAAgHhKQggAKgvAMQgLAAAAgJQAAgEBHgWQAJgEAJgCQgBgGAAgFQAFg6AAgeQAAgMABgIQgBgCgBgBQgDgEACgJQAAghBKhlQACgDACgDQgFACgGACQg0AUgFAHQgMASgPATQgTAXgEAAQgLAAAAgJQAAgIAxg8QAIgMA2gUQAagKAMgCQAOgRAKgJQgmgiAAgeQAAg2AegZQAbgWArAFIAAAAAhMBzIgFBJQAAACAAADQAigNAAgJQAAgCgdg2IAAAA").cp();
	this.shape_364.setTransform(4.5,0.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AhMAIQAAgSAFgYQAIgdAKgIQCDABAAAzQAAAXgMATQgKARgfAgIgsAAQgEgBgUgBQghgPAAgvIAAAA").cp();
	this.shape_365.setTransform(13.2,-18.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("ABukdQBFAXAAAuQAAAcgPAgQgZA1g2AAQgbAAgUgGQgCAGgXAhQABADAAAFQAAACgNATQgMAUgBADQgBANgBAHQgDARgJAAQgBAAgCgBQAHATAAADQAAALgJAAQgIAAgKghQgYAigOASIBTAAQANgNAAAXQAAAFgvA5QgzA7gHAAQgKAAABgKQAAgEA5hCQAQgUAKgMIhKAAQAAAAAAABQgnClgiApIgIgDQgBgBAAgGQAAgHARgqQASgtADgaQAQgkAFgYQAEgNADgJQAAgBAAgDIAAAAQAAgBACgDQAAgBABAAQAagtAbgmQgCgIgCgIQAAgdAngZQANgJAIgDQANgRAJgIQgWgKgHgTQgLgUAFgXQAAgTAHgdQAGgjAKgJQAhgdBDAXIAAAAAAEi8QAAAvAhAPQAUABAEACIAuAAQAfggAKgRQAMgTAAgZQAAgziFgBQgKAIgHAdQgGAYAAATIAAAAAgkgnQAEgHAFgGQgLAJgDAMQACgEADgEIAAAA").cp();
	this.shape_366.setTransform(5,1);

	this.instance_35 = new lib.Headwear();
	this.instance_35.setTransform(17.2,-27.2,1,1,23.7,0,0,0,-0.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AADhNIAVAAQAQAOAcAOQAMAHAAASQAAAVgVAfQgXAkgaAOIgjAAQgPAAgTgUQgUgWAAgVQAAgeANgTQATgbAygQIAAAA").cp();
	this.shape_367.setTransform(13,-19.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("ACDkZQg0AQgTAbQgNATAAAgQAAAVAUAWQATAUAPAAIAlAAQAbgOAWgkQAVghAAgVQAAgSgMgHQgcgOgQgOIgVAAACAkoQAngEAdASQAfAUAAAiQgDAigPAeQgdA8g7AAQgXAAgSgGQgGANgaAmQgDAIgGATQgMAgAAAYQAAAHAmAUQABAAABABQACABACABQAsAVAAAEQAAADgCACQgCAEgFAAQgUAAgUgKQgHASgUArQgfBDgBAAQgIAAAAgJQAAgcAihIQAHgNAFgJQgRACgrAGIgcAAQgFAMgMAYQgWAvgSAVQgQAUgcAoQgdAhgsASIgIgDIgBgFQAQgTAtgrQAkgkARgXQAFgHAHgWQAGgXAFgIQARgcALgNQAHgXBAhdQAFgJAGgHQgCAAgCABQguAGgUANQgIAFgVAOQgUAMgRAEIgIgDQgBgCAAgGQAAgQBbgiQAzgUAWAAQAOgSAJgJQgQgKgJgRQgLgUABgVQAAgzAfgeQAbgbAqgDIAAAAAAhA4QgZgWAAgKQAAgRAEgOQgUAdggArQARgDAagDQARgDANAAIAAAA").cp();
	this.shape_368.setTransform(0.1,0.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("ABKAeQgNASgjAWIg8AAQgYgXgUgPQgHgIAAgWQAAgdALgOQAYgeBKACQAhAKAQATQANAPAAATQAAAUgMAQIAAAA").cp();
	this.shape_369.setTransform(12.6,-19.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("ACekiQAqAEAfAYQAhAaAAAhQAAAdgNAUQgRAYgsAZIhCAAQAAAFgZAoQAAABgBAAQABAEAAAGQgBAXALAdQAHgBAogEQAegEARgEQACgBALgHQALgGAEAAQAKAAAAAKQAAAKgZAEQg2ALggALIgcAAQgRgMgEgRQgBgFAAgSQgMARgIAIQgQAOgNAhQgEAKgDAIQAVgFAHgCIBBgBQAKABAKAqQAJAkAAARQAAACAAANQgBALgIAAQgFAAgUhlQhHgBgPAFQgIACgDAFIgIAAQgCADgDACIAAAAQgGAOgbAlQgcAogZAeQAAAAAAAAIgBABQgEAGgFAFIgHgDQgHAEgKAFQglATgLAJQgNAMhJAYQgLAAAAgJQAtgfAtgYQAzgbAVgDQAEgMALgPQAWgZAJgNQAagnALgNQAFgFAEgDQABgEAFgCQAGgjA3hPQgTgDgmgJQhfAngBAAQgKAAAAgJQAAgMAegMQAjgMALgFQASgIAxAJQATADAMADQAbgoAOgKQgfgbgVgRQgGgGAAggQAAg1AhgZQAdgWAsAFIAAAAADpilQAMgRAAgWQAAgSgNgPQgQgUgigKQhLgCgYAeQgMAOAAAfQAAAWAIAIQATAQAYAXIA/AAQAjgWANgSIAAAA").cp();
	this.shape_370.setTransform(-3.2,0.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgDhMQAbADAZAQQAZAQABARQAEAegKAaQgTA0hAgHQgWgVgYgVQgNgOgCgWQgGhSBOAHIAAAA").cp();
	this.shape_371.setTransform(10,-20.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("ACPkcQAmAAAdAUQAgAWACAgQADAigJAcQgSA4g7AEQgSABgQgFQAAADgcApIAAABQACAHABAOQAAAHAMAVQADAGACAFQAQgMAjgNQBAgcABAQQAAAFhyA4QgCAAgBAAQgBAAgBAAQgOABgLghQgFgOgDgPQgMARgPAVQgMATgmBPQAKgFAdAIQADgCAHABQAPACAVAQQA2AoAEAwQACAggKAJIgKgCQAAgggBgHQgCgngtgfQgSgNgSgHQgBABAAACQgQgCgVABQgGgCgBgCQgBgBgBgBQgIALgdAYQgxApgDAEQgSAUgaATQgxAlgwADQgNABgBgJQAAgHAJgEQAJgEAggFQAIgEBrhUQA5gtATgHQgEgDACgHQgCgfBAhoQABgBAAAAQgOgCgTgHQgZgKgSABQgSABggAWQgRALgOALQgJAAgBgJQAAgJAWgQQAWgRATgGQAlgLAZAIQAgAKAYACQAZgmAOgLQgOgIgMgPQgdgfgCgiQgEgxAdgaQAYgWAoAAIAAAAACRkFQhOgHAGBSQACAYANAOQAYAVAWAVQBCAHATg0QAKgagEggQgBgRgZgQQgZgQgdgDIAAAA").cp();
	this.shape_372.setTransform(-4.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_348},{t:this.shape_347}]}).to({state:[{t:this.shape_350},{t:this.shape_349}]},2).to({state:[{t:this.shape_352},{t:this.shape_351}]},2).to({state:[{t:this.shape_354},{t:this.shape_353}]},2).to({state:[{t:this.shape_356},{t:this.shape_355}]},2).to({state:[{t:this.shape_358},{t:this.shape_357}]},2).to({state:[{t:this.shape_360},{t:this.shape_359}]},2).to({state:[{t:this.shape_362},{t:this.shape_361}]},2).to({state:[{t:this.shape_364},{t:this.shape_363}]},2).to({state:[{t:this.shape_366},{t:this.shape_365}]},2).to({state:[{t:this.shape_368},{t:this.shape_367},{t:this.instance_35}]},2).to({state:[{t:this.shape_370},{t:this.shape_369}]},2).to({state:[{t:this.shape_372},{t:this.shape_371}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-31.3,42.2,61);


(lib.mcPlayer_jumping_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Headwear
	this.wear_3 = new lib.Headwear();
	this.wear_3.setTransform(1.2,-27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wear_3}]}).wait(20));

	// Character
	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAAhXQAlgDAaASQAdATAAAiQAAATgIATQgDAJgEAJQgRApgiAHIgIAAQgMADgLAAQgOAAgMgDIgJAAQgYAAgPgjQgDgGgCgGQgHgSAAgTQAAghAVgYQAYgfAuAAQAAAAAAAAIAAAAABJgTQAAgSgLgJQgSgOg3gHQgnALgOAWQgIANAAAVQAAASAMAUQATAeAjAAQApAAAXgrQAMgWADgWIAAAA").cp();
	this.shape_373.setTransform(0.1,-22);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("ABJgTQgDAWgMAWQgXArgpAAQgjAAgTgeQgMgUAAgSQAAgVAIgNQAOgWAngLQA3AHASAOQALAJAAASIAAAA").cp();
	this.shape_374.setTransform(0.1,-22);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("ABCgtQAAABABABQAEAGAAAVQAAAbgHAWQgNAmgeADIghAAQgsgdgJgHQgCgEgCgFQgBgIAAgOQAAgMACgKQADgKAGgLQAFgJAFgHQASgOAfgHQABAAACAAQA0ATALAJIAAAA").cp();
	this.shape_375.setTransform(0,-21.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("ABBgrQgLgKgzgTQgDAAAAAAQggAHgRAOQgFAHgFAJQgGALgEAKQgBAKAAANQAAAOABAHQACAFACAEQAJAHArAeIAhAAQAfgDAMgnQAHgWAAgbQAAgVgDgGQgBAAgBgBIAAAAABUAqQgSA2g9AAQhAAAgVgrQgLgWACgYQAAgtAcgdQAZgZAkgCQAjgDAaAVQAcAXAAAnQAEAcgJAcIAAAA").cp();
	this.shape_376.setTransform(0,-22);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("ABGggQAAABAAAAQAAAfgIAUQgBADgBADQgBABAAAAQgPAZgjAUIgrAAQgdgcgCgEQgCgEAAgYQAAgMgCgVQABgSARgWQBLgWAdAXQACACACABQAMAMABANIAAAA").cp();
	this.shape_377.setTransform(0.8,-21.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("ABWg1QAFAKAAAeQgBAcgNAaQgaA1g+AAQg1AAgQgmQgBgCgBgCQgIgNAAgeQAAgiANgYQANgtAeADIAMAAQAJgCALAAQAJAAAKACIARAAQApAMALAaIAAAAABGgfQgBgNgLgLQgCgCgCgCQgegWhLAWQgRAWgBASQACATAAANQAAAZACADQADAEAcAdIArAAQAjgVAPgYQABgBAAgBQABgDACgDQAHgTAAgfQAAgBAAgBIAAAA").cp();
	this.shape_378.setTransform(0.8,-21.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("ABGAAQgBAAABABQgEASgIARQgBABAAABQgXAjgxAAQgdAAgPgmQgKgaAAgRQAAgcACgHQAAAAAAgBQAGgIAIgGQAQgMAUgCQA6AIATAYQAKAMAAAcIAAAA").cp();
	this.shape_379.setTransform(1,-22);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AA/g+QAcAaAAAkQAAAcgMAXQgXAsg3AAQgGAAgHgBIgBAAQgBAAgBAAQAAAAAAgBQgugGgRgsQgFgMgCgNQgHgbACgcQAAghAdgPQAagNAjAGQAlAHAaAXIAAAAABIABQAAgcgJgMQgUgXg5gJQgVADgPAMQgJAGgFAHQAAABAAABQgCAHAAAbQAAASAKAZQAPAnAdAAQAxAAAWgjQABgBABgCQAIgRADgRQAAgBAAgBIAAAA").cp();
	this.shape_380.setTransform(0.7,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_374},{t:this.shape_373}]}).to({state:[{t:this.shape_376},{t:this.shape_375}]},5).to({state:[{t:this.shape_378},{t:this.shape_377}]},5).to({state:[{t:this.shape_380},{t:this.shape_379}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-31,18.6,17.8);


(lib.arm_dyn_arm = function() {
	this.initialize();

	// arm_upper
	this.u = new lib.arm_upper();
	this.u.setTransform(1.8,3.3,1,1,0,0,0,1.8,3.3);

	// arm_lower
	this.l = new lib.arm_lower();
	this.l.setTransform(5.1,11,1,1,-14.9,0,0,2,4.9);

	this.addChild(this.l,this.u);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,16);


(lib.arm_dyn = function() {
	this.initialize();

	// Arm
	this.arm = new lib.arm_dyn_arm();
	this.arm.setTransform(3.7,8,1,1,0,0,0,3.7,8);

	this.addChild(this.arm);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,16);


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


(lib.giftedclientitem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{weapon:0},true);

	// Graphic
	this.itemClip = new lib.weapon();
	this.itemClip.setTransform(-9.8,-1.2,1,1,90,0,0,-3.5,10);

	this.timeline.addTween(cjs.Tween.get(this.itemClip).to({_off:true},1).wait(1));

	// Hitbox
	this.itemHitbox = new lib.itemHitbox();
	this.itemHitbox.setTransform(0,0,1,1,0,0,0,7.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.itemHitbox}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.giftedclientlogin = function() {
	this.initialize();

	//  
	this.instance_36 = new lib.mcLoad_Meng();
	this.instance_36.setTransform(-256.6,5,1,1,0,0,0,20.3,62.1);

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
	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#7964AC","#5A4392"],[0,1],-401.1,295.2,-401.3,-68.7).ls(["#3F2F59","#2F234B"],[0,1],180.6,-138.1,-180.4,138.2).ss(6,1,1).p("EA9rgasMh7UAAAQjMAAAACbMAAAAwjQAACbDMAAMB7UAAAQDLAAAAibMAAAgwjQAAibjLAAIAAAA").cp();
	this.shape_381.setTransform(-419.8,-179.8,1,1,0,0,0,-419.9,-179.9);

	this.addChild(this.shape_381,this.btnLogin,this.txtUser,this.txtPass,this.lblGifted,this.lblStatus,this.text_1,this.text,this.instance_36);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-415,-170.9,830.1,342);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_37 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_37.setTransform(4,4);

	// fill
	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_382.setTransform(7.5,4.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_383.setTransform(7.5,7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_384.setTransform(7.5,7);

	this.addChild(this.shape_384,this.shape_383,this.shape_382,this.instance_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_38 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_38.setTransform(4,4);

	// fill
	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_385.setTransform(7.6,4.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_386.setTransform(7.5,7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_387.setTransform(7.5,7);

	this.addChild(this.shape_387,this.shape_386,this.shape_385,this.instance_38);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_39 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_39.setTransform(4,5);

	// fill
	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_388.setTransform(7.5,4.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_389.setTransform(7.5,7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_390.setTransform(7.5,7);

	this.addChild(this.shape_390,this.shape_389,this.shape_388,this.instance_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_40 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_40.setTransform(4,5);

	// fill
	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_391.setTransform(7.5,4.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_392.setTransform(7.5,7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_393.setTransform(7.5,7);

	this.addChild(this.shape_393,this.shape_392,this.shape_391,this.instance_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_41 = new lib.ScrollBar_thumbIcon();
	this.instance_41.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_42 = new lib.ScrollBar_thumbIcon();
	this.instance_42.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_43 = new lib.ScrollBar_thumbIcon();
	this.instance_43.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_44 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_44.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_45 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_45.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_46 = new lib.ScrollArrowDown_upSkin();
	this.instance_46.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_47 = new lib.ScrollThumb_upSkin();
	this.instance_47.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_48 = new lib.ScrollArrowUp_upSkin();
	this.instance_48.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_49 = new lib.ScrollArrowUp_overSkin();
	this.instance_49.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_50 = new lib.ScrollThumb_overSkin();
	this.instance_50.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_51 = new lib.ScrollArrowDown_overSkin();
	this.instance_51.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_52 = new lib.ScrollThumb_downSkin();
	this.instance_52.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_53 = new lib.ScrollArrowDown_downSkin();
	this.instance_53.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_54 = new lib.ScrollArrowUp_downSkin();
	this.instance_54.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_55 = new lib.ScrollTrack_skin();
	this.instance_55.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_56 = new lib.ScrollTrack_skin();
	this.instance_56.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_57 = new lib.ScrollTrack_skin();
	this.instance_57.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_58 = new lib.ScrollTrack_skin();
	this.instance_58.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_59 = new lib.focusRectSkin();
	this.instance_59.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},1).wait(1));

	// avatar
	this.instance_60 = new lib.ScrollTrack_skin();
	this.instance_60.setTransform(7.5,50,1,0.676,0,0,0,7.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.mcPlayer_char = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{static:0,running:8,running_back:37,jumping:66,falling:74,flying:82,flying_back:91,floating:100},true);

	// LArm Dynamic
	this.larm_d = new lib.arm_dyn();
	this.larm_d.setTransform(-3.5,0.2,1,1,0,0,180,3.7,8);

	this.timeline.addTween(cjs.Tween.get(this.larm_d).wait(1).to({regX:20.3,regY:1.4,x:-20,y:-6.2},0).wait(6).wait(1).to({regX:3.7,regY:8,x:-1.6,y:-0.1},0).wait(1).to({regX:20.3,regY:1.4,x:-18.1,y:-6.4},0).wait(1).to({x:-17.9,y:-6.1},0).wait(1).to({x:-17.6,y:-5.7},0).wait(1).to({x:-17.4,y:-5.2},0).wait(1).to({x:-17.7,y:-5.5},0).wait(1).to({x:-18,y:-5.8},0).wait(1).to({x:-18.1,y:-6.1},0).wait(1).to({x:-18.2,y:-6.4},0).wait(1).to({x:-17.5,y:-5.8},0).wait(1).to({x:-16.9,y:-5.1},0).wait(1).to({x:-17,y:-4.8},0).wait(1).to({x:-17.2,y:-4.4},0).wait(1).to({x:-16.5,y:-3.7},0).wait(1).to({x:-15.9,y:-3},0).wait(1).to({x:-16.1,y:-3.1},0).wait(1).to({x:-16.4},0).wait(1).to({x:-16.1,y:-2.9},0).wait(1).to({x:-15.9,y:-2.6},0).wait(1).to({x:-16.3,y:-2.7},0).wait(1).to({x:-16.7,y:-2.8},0).wait(1).to({x:-16.9,y:-2.9},0).wait(1).to({x:-17.1,y:-3},0).wait(1).to({x:-17.6,y:-3.5},0).wait(1).to({x:-18.2,y:-4},0).wait(1).to({x:-17.8,y:-3.8},0).wait(1).to({x:-17.5,y:-3.6},0).wait(1).to({x:-17.4,y:-5.7},0).wait(1).to({y:-7.7},0).wait(1).to({regX:3.7,regY:8,x:-6.7,y:0.9},0).wait(1).to({regX:20.3,regY:1.4,x:-23.5,y:-5.7},0).wait(1).to({x:-23.6,y:-5.8},0).wait(1).to({x:-24.4},0).wait(1).to({x:-25.1,y:-5.7},0).wait(1).to({x:-24.9,y:-5.4},0).wait(1).to({x:-24.6,y:-5},0).wait(1).to({x:-25.1,y:-4.5},0).wait(1).to({x:-25.5,y:-4},0).wait(1).to({x:-26.5,y:-3.7},0).wait(1).to({x:-27.4,y:-3.3},0).wait(1).to({x:-27.3,y:-3.7},0).wait(1).to({x:-27.2,y:-4},0).wait(1).to({x:-26.9,y:-3.8},0).wait(1).to({x:-26.5,y:-3.5},0).wait(1).to({x:-25.7,y:-4.3},0).wait(1).to({x:-24.8,y:-5},0).wait(1).to({x:-24.6,y:-5.6},0).wait(1).to({x:-24.4,y:-6.2},0).wait(1).to({x:-24.5,y:-6},0).wait(1).to({x:-24.6,y:-5.8},0).wait(1).to({y:-5.5},0).wait(1).to({y:-5.2},0).wait(1).to({x:-24.5,y:-4.4},0).wait(1).to({x:-24.4,y:-3.6},0).wait(1).to({x:-23.2,y:-3.5},0).wait(1).to({x:-21.9,y:-3.3},0).wait(1).to({x:-22.4,y:-3.8},0).wait(1).to({x:-22.9,y:-4.3},0).wait(1).to({regX:3.7,regY:8,x:-3,y:0.6},0).wait(1).to({regX:20.3,regY:1.4,x:-19.4,y:-5.2},0).wait(1).to({x:-19.3,y:-4.5},0).wait(1).to({x:-18.7},0).wait(1).to({x:-18.1,y:-4.4},0).wait(3).wait(1).to({regX:3.7,regY:8,x:-1.1,y:0.4},0).wait(1).to({regX:20.3,regY:1.4,x:-18.5,y:-6.3},0).wait(1).to({x:-19.3,y:-6.6},0).wait(1).to({x:-20.5,y:-6},0).wait(1).to({x:-21.7,y:-5.4},0).wait(1).to({x:-21.4,y:-5.3},0).wait(1).to({x:-21.1,y:-5.1},0).wait(1).wait(1).to({regX:3.7,regY:8,x:-0.8,y:0.6},0).wait(1).to({regX:20.3,regY:1.4,x:-17.5,y:-6.2},0).wait(1).to({x:-17.7,y:-6.5},0).wait(1).to({x:-17.8,y:-6.9},0).wait(1).to({x:-18,y:-7.2},0).wait(1).to({x:-18.1,y:-7.6},0).wait(1).to({x:-17.8,y:-7.4},0).wait(1).to({x:-17.4,y:-7.1},0).wait(1).to({x:-17.1,y:-6.9},0).wait(1).to({regX:3.7,regY:8,x:-0.6,y:0.1},0).wait(1).to({regX:20.3,regY:1.4,x:-20,y:-6.7},0).wait(1).to({x:-22.7,y:-7},0).wait(1).to({x:-22.1,y:-6.9},0).wait(1).to({x:-21.4,y:-6.8},0).wait(1).to({x:-21.6,y:-6},0).wait(1).to({x:-21.7,y:-5.1},0).wait(1).to({x:-22.2,y:-4.1},0).wait(1).to({x:-22.6,y:-3.1},0).wait(1).to({regX:3.7,regY:8,x:-2.2,y:4.9},0).wait(1).to({regX:20.3,regY:1.4,x:-18.8,y:-1.6},0).wait(1).to({y:-1.7},0).wait(1).to({x:-18.7,y:-1.8},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2},0).wait(1).to({x:-18.6,y:-2.2},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.4},0).wait(1).to({x:-18.5,y:-2.5},0).wait(1).to({y:-2.6},0).wait(1).to({x:-18.4,y:-2.8},0).wait(1).to({x:-18.5,y:-2.6},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.4},0).wait(1).to({x:-18.6,y:-2.3},0).wait(1).to({y:-2.2},0).wait(1).to({y:-2.1},0).wait(1).to({x:-18.7,y:-1.9},0).wait(1).to({y:-1.8},0).wait(1).to({y:-1.7},0).wait(1).to({x:-18.8,y:-1.6},0).wait(1).to({y:-1.5},0).wait(1).to({y:-1.4},0).wait(1));

	// LArm U
	this.larm_u = new lib.arm_upper();
	this.larm_u.setTransform(-2.3,-4.9,0.998,0.998,44.9,0,0,1.7,4);

	this.timeline.addTween(cjs.Tween.get(this.larm_u).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:45,x:-1.6,y:-5.2},0).wait(6).wait(1).to({regY:3.8,scaleX:1,scaleY:1,rotation:78.7,x:-1.4,y:-6.6},0).wait(1).to({regY:3.3,scaleX:1,scaleY:1,x:-0.8,y:-6.5},0).wait(1).to({x:-0.5,y:-6.2},0).wait(1).to({x:0,y:-6.1},0).wait(1).to({x:0.5,y:-5.9},0).wait(1).to({rotation:80.7,x:0.1},0).wait(1).to({rotation:82.7,x:0,y:-6},0).wait(1).to({rotation:54.6,x:0.8,y:-5.4},0).wait(1).to({rotation:26.6,x:1.8,y:-4.7},0).wait(1).to({rotation:34.1,x:2.4,y:-4.3},0).wait(1).to({rotation:41.5,x:2.9,y:-3.9},0).wait(1).to({rotation:19,x:3.1},0).wait(1).to({rotation:-3.3,x:3.3,y:-3.7},0).wait(1).to({rotation:4,x:3.9,y:-2},0).wait(1).to({rotation:11.5,x:4.6,y:-0.3},0).wait(1).to({rotation:26.5,x:3.9},0).wait(1).to({rotation:41.5,x:3.3,y:-0.2},0).wait(1).to({x:2.9,y:-0.9},0).wait(1).to({x:2.5,y:-1.7},0).wait(1).to({rotation:71.5,x:1.2,y:-1.8},0).wait(1).to({rotation:101.5,x:0,y:-1.9},0).wait(1).to({rotation:109,x:0,y:-2.8},0).wait(1).to({rotation:116.5,x:-0.1,y:-3.7},0).wait(1).to({rotation:120.5,x:-0.9,y:-3.9},0).wait(1).to({rotation:124.6,x:-1.6,y:-4},0).wait(1).to({rotation:120.5,x:-1.1,y:-4.5},0).wait(1).to({rotation:116.5,x:-0.5,y:-4.9},0).wait(1).to({rotation:97.6,x:-0.7,y:-5.8},0).wait(1).to({rotation:78.7,x:-1,y:-6.7},0).wait(1).to({regY:3.6,scaleX:1,scaleY:1,x:-7,y:-4},0).wait(1).to({regY:3.3,scaleX:1,scaleY:1,rotation:67.6,x:-6.5,y:-4.1},0).wait(1).to({rotation:56.5,x:-6.4,y:-4.2},0).wait(1).to({rotation:53.1,x:-7.1,y:-4},0).wait(1).to({rotation:49.6,x:-7.8,y:-3.9},0).wait(1).to({rotation:53.1,x:-7.4,y:-3.1},0).wait(1).to({rotation:56.7,x:-7.1,y:-2.4},0).wait(1).to({rotation:49.1,x:-7.6,y:-2.3},0).wait(1).to({rotation:41.5,x:-7.9,y:-1.7},0).wait(1).to({rotation:19,x:-6.9,y:-1.3},0).wait(1).to({rotation:-3.2,x:-5.9,y:-0.4},0).wait(1).to({rotation:-3.3,x:-5.8,y:-0.6},0).wait(1).to({x:-5.6,y:-0.7},0).wait(1).to({x:-5.5},0).wait(1).to({x:-5.4,y:-0.6},0).wait(1).to({x:-4.5,y:-2.1},0).wait(1).to({x:-3.5,y:-3.6},0).wait(1).to({rotation:4.1,x:-3.3,y:-3.9},0).wait(1).to({rotation:11.6,x:-3,y:-4.3},0).wait(1).to({x:-3.2,y:-3.6},0).wait(1).to({x:-3.4,y:-3},0).wait(1).to({rotation:47.1,x:-5.7,y:-3.4},0).wait(1).to({rotation:82.7,x:-8.1,y:-3.8},0).wait(1).to({rotation:77.1,y:-2.7},0).wait(1).to({rotation:71.5,x:-8.2,y:-1.7},0).wait(1).to({rotation:75.1,x:-6.6,y:-1.6},0).wait(1).to({rotation:78.7,x:-5.2,y:-2.1},0).wait(1).to({x:-6,y:-3.2},0).wait(1).to({x:-6.7,y:-4.2},0).wait(1).to({regX:1.7,regY:3.5,scaleX:1,scaleY:1,rotation:59.9,x:-0.5,y:-4.7},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:63.7,x:-0.3,y:-4.5},0).wait(1).to({rotation:67.4,y:-4.2},0).wait(1).to({rotation:71.2,x:0.4,y:-4.1},0).wait(1).to({rotation:74.9,x:1.2,y:-3.9},0).wait(3).wait(1).to({regX:1.4,regY:3.9,scaleX:1,scaleY:1,rotation:119.8,x:-1.4,y:-7.7},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:112.4,x:-1.6,y:-6.7},0).wait(1).to({rotation:104.8,x:-2.1,y:-6.3},0).wait(1).to({rotation:97.4,x:-4,y:-5.3},0).wait(1).to({rotation:89.9,x:-6,y:-4.4},0).wait(1).to({x:-5.5,y:-4.3},0).wait(1).to({x:-5,y:-4.2},0).wait(1).wait(1).to({regX:1.7,regY:3.5,scaleX:1,scaleY:1,rotation:75,x:1,y:-3.9},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:79.9,x:0.9,y:-4},0).wait(1).to({rotation:85,x:0.6},0).wait(1).to({rotation:90,x:0.3,y:-4.2},0).wait(1).to({rotation:87,x:0.1},0).wait(1).to({rotation:84,x:0,y:-4.4},0).wait(1).to({rotation:80.9,y:-4.2},0).wait(1).to({rotation:77.9,x:0.2,y:-4.1},0).wait(1).to({rotation:74.9,x:0.3,y:-4},0).wait(1).to({regX:1.7,regY:3.5,scaleX:1,scaleY:1,rotation:75,x:1,y:-3.9},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:67.4,x:-1.4,y:-3.6},0).wait(1).to({rotation:59.8,x:-4.2,y:-3.4},0).wait(1).to({rotation:52.4,x:-3.7,y:-3.8},0).wait(1).to({rotation:45,x:-3.3,y:-4.3},0).wait(1).to({x:-3.6},0).wait(1).to({x:-3.8,y:-4.4},0).wait(1).to({rotation:52.5,x:-4.2,y:-3.2},0).wait(1).to({rotation:59.9,x:-4.7,y:-2},0).wait(1).to({regX:1.2,regY:0,scaleX:1,scaleY:1,rotation:44.9,x:1.4,y:-3.3},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,x:-0.4,y:-0.6},0).wait(2).wait(1).to({x:-0.5},0).wait(3).wait(1).to({x:-0.6},0).wait(2).wait(1).to({x:-0.7},0).wait(1).wait(1).to({y:-0.5},0).wait(2).wait(1).to({y:-0.4},0).wait(2).wait(1).to({y:-0.3},0).wait(2).wait(1).to({y:-0.2},0).wait(2));

	// LArm L
	this.larm_l = new lib.arm_lower();
	this.larm_l.setTransform(-4.1,1.9,1.149,0.999,21.1,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.larm_l).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.15,scaleY:1,rotation:21.2,x:16.4,y:5.4},0).wait(6).wait(1).to({regX:0.8,regY:4.6,scaleX:1.12,scaleY:1,rotation:44.9,x:-7.6,y:-1.3},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.12,scaleY:1,x:10.5,y:10},0).wait(1).to({x:10.7,y:10.3},0).wait(1).to({rotation:37.4,x:13.1,y:8.2},0).wait(1).to({rotation:29.9,x:15.2,y:6},0).wait(1).to({rotation:7.4,x:17.4,y:-1.8},0).wait(1).to({rotation:-15,x:16.3,y:-9.3},0).wait(1).to({rotation:-15,x:18.6,y:-7.8},0).wait(1).to({x:20.9,y:-6.3},0).wait(1).to({rotation:-37.4,x:17.4,y:-13.4},0).wait(1).to({rotation:-59.9,x:12,y:-18.2},0).wait(1).to({rotation:-89.9,x:2.6,y:-20.8},0).wait(1).to({rotation:-120,x:-5.2,y:-17.8},0).wait(1).to({x:-5,y:-15.8},0).wait(1).to({x:-4.9,y:-13.7},0).wait(1).to({rotation:-97.4,x:0.5,y:-16.6},0).wait(1).to({rotation:-74.9,x:7.2,y:-16.4},0).wait(1).to({rotation:-44.9,x:15.5,y:-12.5},0).wait(1).to({rotation:-15,x:20.8,y:-3.8},0).wait(1).to({rotation:14.9,x:18.7,y:4.6},0).wait(1).to({rotation:44.9,x:10.9,y:12.9},0).wait(1).to({rotation:52.4,x:8.7,y:13.3},0).wait(1).to({rotation:59.9,x:6.3,y:13.4},0).wait(1).to({x:5.8,y:13},0).wait(1).to({x:5.3,y:12.6},0).wait(1).to({rotation:67.4,x:3.5,y:13.5},0).wait(1).to({rotation:74.9,x:1.4,y:14.1},0).wait(1).to({rotation:59.9,x:6.3,y:12.4},0).wait(1).to({rotation:44.9,x:10.3,y:9.7},0).wait(1).to({regX:0.8,regY:4.5,scaleX:1.12,scaleY:1,rotation:29.8,x:-12,y:1.1},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.12,scaleY:1,rotation:22.4,x:9.7,y:5},0).wait(1).to({rotation:15,x:10.9,y:2.6},0).wait(1).to({rotation:0,y:-2},0).wait(1).to({rotation:-14.9,x:9.4,y:-6.5},0).wait(1).to({rotation:-7.4,x:10.4,y:-3.4},0).wait(1).to({rotation:0,x:11,y:-0.3},0).wait(1).to({rotation:0,y:0},0).wait(1).to({x:10.9,y:0.3},0).wait(1).to({rotation:-14.9,x:12.3,y:-4.4},0).wait(1).to({rotation:-29.9,x:12.4,y:-8.6},0).wait(1).to({rotation:-44.9,x:8.9,y:-12.8},0).wait(1).to({rotation:-60,x:4.7,y:-15.7},0).wait(1).to({rotation:-74.9,x:0,y:-17.4},0).wait(1).to({rotation:-89.9,x:-4.9,y:-17.7},0).wait(1).to({x:-4,y:-19.4},0).wait(1).to({x:-3.1,y:-21.2},0).wait(1).to({rotation:-74.9,x:1.8,y:-20.7},0).wait(1).to({rotation:-59.9,x:7,y:-18.9},0).wait(1).to({rotation:-37.4,x:12.6,y:-13.8},0).wait(1).to({rotation:-15,x:16.2,y:-6.3},0).wait(1).to({rotation:-15,x:11.8,y:-7.1},0).wait(1).to({x:7.4,y:-8},0).wait(1).to({rotation:3.7,x:8.7,y:-0.2},0).wait(1).to({rotation:22.6,x:7.8,y:7.8},0).wait(1).to({rotation:33.8,x:7.4,y:10.9},0).wait(1).to({rotation:44.9,x:5.9,y:13.6},0).wait(1).to({x:5.3,y:12.9},0).wait(1).to({x:4.6,y:12.2},0).wait(1).to({regX:2,regY:4.4,scaleX:1.15,scaleY:1,rotation:-23.6,x:-0.7,y:1.1},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.15,scaleY:1,rotation:-31.2,x:14.2,y:-12.9},0).wait(1).to({rotation:-38.6,x:12.9,y:-14.6},0).wait(1).to({x:13.4,y:-14.8},0).wait(1).to({x:13.9,y:-14.9},0).wait(3).wait(1).to({regX:1.8,regY:4.8,scaleX:1.15,scaleY:1,rotation:126.1,x:-7.9,y:-9.6},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.15,scaleY:1,rotation:103.6,x:-8.6,y:13.3},0).wait(1).to({rotation:81,x:-1.6,y:14.2},0).wait(1).to({rotation:58.6,x:4.2,y:12.2},0).wait(1).to({rotation:36.2,x:8,y:8},0).wait(1).to({x:8.3,y:8.4},0).wait(1).to({x:8.5,y:8.7},0).wait(1).wait(1).to({regX:2,regY:4.5,scaleX:1.15,scaleY:1,rotation:-38.6,x:1.4,y:0.9},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.15,scaleY:1,rotation:-28.6,x:15.6,y:-12.6},0).wait(1).to({rotation:-18.6,x:16.9,y:-9.8},0).wait(1).to({rotation:-8.6,x:17.6,y:-6.8},0).wait(1).to({x:17.2,y:-6.5},0).wait(1).to({x:16.9,y:-6.3},0).wait(1).to({rotation:-13.6,x:16.7,y:-7.8},0).wait(1).to({rotation:-18.6,x:16.4,y:-9.3},0).wait(1).to({rotation:-23.6,x:15.9,y:-10.7},0).wait(1).to({regX:2,regY:4.5,scaleX:1.15,scaleY:1,rotation:-38.6,x:1.4,y:0.9},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.15,scaleY:1,rotation:-53.6,x:7.3,y:-17.8},0).wait(1).to({rotation:-68.6,x:0,y:-19.5},0).wait(1).to({rotation:-31.2,x:10.9,y:-12.1},0).wait(1).to({rotation:6.1,x:15.7,y:0.9},0).wait(1).to({rotation:-1.2,x:15.4,y:-2.1},0).wait(1).to({rotation:-8.7,x:14.8,y:-5.1},0).wait(1).to({x:14,y:-4.3},0).wait(1).to({rotation:-8.6,x:13.2,y:-3.5},0).wait(1).to({regX:1.5,regY:4.8,scaleX:1.15,scaleY:1,rotation:21.1,x:-3.2,y:7.1},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1.15,scaleY:1,x:17.4,y:9.7},0).wait(3).wait(1).to({x:17.3,y:9.6},0).wait(3).wait(1).to({y:9.5},0).wait(3).wait(1).to({y:9.6},0).wait(2).wait(1).to({y:9.7},0).wait(2).wait(1).to({x:17.4,y:9.8},0).wait(2).wait(1).to({y:9.9},0).wait(2));

	// Head
	this.head = new lib.head();
	this.head.setTransform(0,-20.8,1,1,0,0,0,0.2,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:3.3,regY:-21.3,x:3.1,y:-20.3},0).wait(6).wait(1).to({regX:0.2,regY:-21.7,x:5.8,y:-18.7},0).wait(1).to({regX:3.3,regY:-21.3,x:8.6,y:-17.5},0).wait(1).to({x:9.4,y:-17.9},0).wait(1).to({x:10.6,y:-17.2},0).wait(1).to({x:10.9,y:-17.4},0).wait(1).to({x:11.1,y:-17.1},0).wait(1).to({x:11.3,y:-16.7},0).wait(1).to({x:11.4,y:-16.3},0).wait(1).to({x:11.5,y:-15.9},0).wait(1).to({x:11.6,y:-15.4},0).wait(1).to({y:-15},0).wait(1).to({y:-14.6},0).wait(1).to({x:11.5,y:-14.2},0).wait(1).to({x:12.4,y:-14},0).wait(1).to({x:13.3,y:-13.5},0).wait(1).to({x:13.1,y:-13.6},0).wait(1).to({x:12.9,y:-13.8},0).wait(1).to({x:12.6,y:-14},0).wait(1).to({x:12.3,y:-14.2},0).wait(1).to({x:12,y:-14.5},0).wait(1).to({x:11.7,y:-14.8},0).wait(1).to({x:11.4,y:-15},0).wait(1).to({x:11.1,y:-15.2},0).wait(1).to({x:10.8,y:-15.5},0).wait(1).to({x:10.5,y:-15.7},0).wait(1).to({x:10.2,y:-16},0).wait(1).to({x:9.9,y:-16.3},0).wait(1).to({x:9.4,y:-17.3},0).wait(1).to({x:8.9,y:-18.3},0).wait(1).to({regX:0.2,regY:-21.7,x:-3.7,y:-18.7},0).wait(1).to({regX:3.3,regY:-21.3,x:-0.9,y:-18},0).wait(1).to({x:-1.1,y:-17.6},0).wait(1).to({x:-0.7,y:-18.2},0).wait(1).to({x:-2.4,y:-18.7},0).wait(1).to({x:-2.5,y:-18.4},0).wait(1).to({x:-1.4,y:-18},0).wait(1).to({x:-1.7,y:-17.5},0).wait(1).to({x:-2.1,y:-17},0).wait(1).to({x:-2.8},0).wait(1).to({x:-3.6,y:-17.1},0).wait(1).to({x:-3.9,y:-17.4},0).wait(1).to({x:-4.2,y:-17.8},0).wait(1).to({x:-3.7,y:-17.7},0).wait(1).to({x:-3.2,y:-17.8},0).wait(1).to({x:-2.3,y:-18.4},0).wait(1).to({x:-1.5,y:-19.2},0).wait(1).to({x:-0.4,y:-19.4},0).wait(1).to({x:0.5,y:-19.7},0).wait(1).to({x:0.3,y:-19.1},0).wait(1).to({x:0,y:-18.6},0).wait(1).to({x:-0.1,y:-18.3},0).wait(1).to({x:-0.4,y:-18.1},0).wait(1).to({x:-1.1,y:-17.8},0).wait(1).to({x:-1.7,y:-17.4},0).wait(1).to({x:-0.3,y:-17.9},0).wait(1).to({x:1,y:-18},0).wait(1).to({x:0.3,y:-18.1},0).wait(1).to({x:-0.2,y:-18.3},0).wait(1).to({regX:-0.3,regY:-20.6,scaleX:1,scaleY:1,rotation:14.8,x:4.6,y:-17.7},0).wait(1).to({regX:3.3,regY:-21.3,scaleX:1,scaleY:1,rotation:7.4,x:8.2,y:-17.4},0).wait(1).to({rotation:0,x:8,y:-17.5},0).wait(1).to({rotation:-7.4,x:8.6,y:-18},0).wait(1).to({rotation:-14.8,x:9.2,y:-18.4},0).wait(3).wait(1).to({regX:0.8,regY:-21.9,scaleX:1,scaleY:1,rotation:-14.9,x:5.6,y:-19},0).wait(1).to({regX:3.3,regY:-21.3,scaleX:1,scaleY:1,rotation:-7.4,x:6.3,y:-18.3},0).wait(1).to({rotation:0,x:4.6,y:-17.6},0).wait(1).to({rotation:3.7,x:3.6,y:-17.2},0).wait(1).to({rotation:7.4,x:2.5,y:-16.8},0).wait(1).to({y:-16.5},0).wait(1).to({y:-16.1},0).wait(1).wait(1).to({regX:-0.3,regY:-20.6,scaleX:1,scaleY:1,rotation:-14.8,x:5.8,y:-16.8},0).wait(1).to({regX:3.3,regY:-21.3,scaleX:1,scaleY:1,rotation:-11.9,x:9,y:-18.3},0).wait(1).to({rotation:-8.9,x:8.7,y:-18},0).wait(1).to({rotation:-5.9,x:8.5,y:-17.9},0).wait(1).to({rotation:-2.9,x:8.2,y:-17.7},0).wait(1).to({rotation:0,x:8,y:-17.5},0).wait(1).to({rotation:0,x:8.5},0).wait(1).to({x:9},0).wait(1).to({x:9.5},0).wait(1).to({regX:-1.2,regY:-21,rotation:6,x:5.8,y:-16.8},0).wait(1).to({regX:3.3,regY:-21.3,rotation:5,x:7.2,y:-17.2},0).wait(1).to({rotation:3.8,x:4,y:-17.9},0).wait(1).to({rotation:2.5,x:3.3,y:-18.5},0).wait(1).to({rotation:1.3,x:2.6,y:-19.1},0).wait(1).to({rotation:1.6,x:1.6,y:-18.9},0).wait(1).to({rotation:1.9,x:0.5,y:-18.7},0).wait(1).to({x:-0.2,y:-17.7},0).wait(1).to({x:-1,y:-16.7},0).wait(1).to({regX:-0.6,regY:-24.7,rotation:1.5,x:1.6,y:-17.8},0).wait(1).to({regX:3.3,regY:-21.3,rotation:1.1,x:5.5,y:-14.5},0).wait(1).to({rotation:0.6,x:5.6,y:-14.6},0).wait(1).to({rotation:0.1,y:-14.7},0).wait(1).to({rotation:-0.2,y:-14.8},0).wait(1).to({rotation:-0.6,x:5.7,y:-15},0).wait(1).to({rotation:-1.1,y:-15.1},0).wait(1).to({rotation:-1.6,y:-15.2},0).wait(1).to({rotation:-2.1,y:-15.4},0).wait(1).to({rotation:-2.6,x:5.8,y:-15.5},0).wait(1).to({rotation:-3,y:-15.6},0).wait(1).to({rotation:-3.5,y:-15.7},0).wait(1).to({rotation:-3.1,y:-15.6},0).wait(1).to({rotation:-2.6,y:-15.4},0).wait(1).to({rotation:-2.2,x:5.7},0).wait(1).to({rotation:-1.7,y:-15.2},0).wait(1).to({rotation:-1.3,y:-15.1},0).wait(1).to({rotation:-0.8,y:-15},0).wait(1).to({rotation:-0.4,y:-14.9},0).wait(1).to({rotation:0,x:5.6,y:-14.8},0).wait(1).to({rotation:0.3,y:-14.7},0).wait(1).to({rotation:0.7,y:-14.6},0).wait(1).to({rotation:1.2,x:5.5,y:-14.5},0).wait(1).to({rotation:1.6,y:-14.3},0).wait(1));

	// LLeg U
	this.instance_61 = new lib.leg_upper();
	this.instance_61.setTransform(-1.8,15.4,1.143,1,0,0,180,2.5,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(7).wait(1).to({x:-4.9},0).wait(1).to({skewX:-22.3,skewY:157.5,x:-2.3,y:15.8},0).wait(1).to({skewX:-44.8,skewY:135,x:0.2,y:16},0).wait(1).to({skewX:-52.3,skewY:127.5,x:-0.3,y:15.3},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-1,y:14.5},0).wait(1).to({skewX:-67.2,skewY:112.6,x:-2,y:13.5},0).wait(1).to({skewX:-74.7,skewY:105.1,x:-3,y:12.4},0).wait(1).to({skewX:-97.2,skewY:82.6,x:-1.8,y:10.7},0).wait(1).to({skewX:-119.8,skewY:60,x:-0.6,y:8.9},0).wait(1).to({y:8.6},0).wait(1).to({x:-0.7,y:8.3},0).wait(1).to({skewX:-97.2,skewY:82.6,x:-1,y:10.6},0).wait(1).to({skewX:-74.6,skewY:105.2,x:-1.2,y:12.9},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-3,y:14.4},0).wait(1).to({skewX:-44.7,skewY:135.1,x:-4.6,y:15.9},0).wait(1).to({skewX:-37.2,skewY:142.6,x:-5.5},0).wait(1).to({skewX:-29.7,skewY:150.1,x:-6.4,y:15.8},0).wait(1).to({skewX:-22.2,skewY:157.6,x:-6.8,y:15.9},0).wait(1).to({skewX:-14.6,skewY:165.2,x:-7.3,y:16},0).wait(1).to({skewX:-7.1,skewY:172.7,x:-7.4,y:15.9},0).wait(1).to({skewX:0.2,skewY:180.3,x:-7.5,y:15.8},0).wait(1).to({skewX:7.6,skewY:187.7,x:-7.7,y:15.6},0).wait(1).to({skewX:15.1,skewY:195.2,x:-7.9,y:15.4},0).wait(1).to({x:-8.2,y:14.5},0).wait(1).to({x:-8.5,y:13.6},0).wait(1).to({x:-7.6,y:14.5},0).wait(1).to({x:-6.7,y:15.4},0).wait(1).to({skewX:7.5,skewY:187.6,x:-5.8},0).wait(1).to({skewX:0,skewY:180,x:-4.9},0).wait(1).wait(1).to({skewX:7.5,skewY:187.6,x:-5.8},0).wait(1).to({skewX:15.1,skewY:195.2,x:-6.7},0).wait(1).to({x:-7.6,y:14.5},0).wait(1).to({x:-8.5,y:13.6},0).wait(1).to({x:-8.2,y:14.5},0).wait(1).to({x:-7.9,y:15.4},0).wait(1).to({skewX:7.6,skewY:187.7,x:-7.7,y:15.6},0).wait(1).to({skewX:0.2,skewY:180.3,x:-7.5,y:15.8},0).wait(1).to({skewX:-7.1,skewY:172.7,x:-7.4,y:15.9},0).wait(1).to({skewX:-14.6,skewY:165.2,x:-7.3,y:16},0).wait(1).to({skewX:-22.2,skewY:157.6,x:-6.8,y:15.9},0).wait(1).to({skewX:-29.7,skewY:150.1,x:-6.4,y:15.8},0).wait(1).to({skewX:-37.2,skewY:142.6,x:-5.5,y:15.9},0).wait(1).to({skewX:-44.7,skewY:135.1,x:-4.6},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-3.1,y:14.1},0).wait(1).to({skewX:-74.6,skewY:105.2,x:-1.4,y:12.2},0).wait(1).to({skewX:-89.6,skewY:90.2,x:-1.1,y:10.6},0).wait(1).to({skewX:-104.7,skewY:75.2,x:-0.9,y:8.9},0).wait(1).to({x:-1,y:9.4},0).wait(1).to({x:-1.1,y:9.9},0).wait(1).to({skewX:-89.7,skewY:90.1,x:-1.7,y:11.5},0).wait(1).to({skewX:-74.7,skewY:105.1,x:-2.4,y:12.9},0).wait(1).to({skewX:-67.2,skewY:112.6,x:-1.9,y:13.5},0).wait(1).to({skewX:-59.7,skewY:120.1,x:-1.5,y:13.8},0).wait(1).to({skewX:-52.3,skewY:127.5,x:-0.3,y:14.9},0).wait(1).to({skewX:-44.8,skewY:135,x:0.6,y:16},0).wait(1).to({skewX:-22.3,skewY:157.5,x:-2.1,y:15.7},0).wait(1).to({skewX:0,skewY:180,x:-4.9,y:15.4},0).wait(1).to({regX:2.6,regY:4.9,scaleX:1.14,scaleY:1,skewX:-29.6,skewY:150.2,x:-3.3,y:15.9},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-22.1,skewY:157.7,x:-3.8,y:16.1},0).wait(1).to({skewX:-14.6,skewY:165.2,x:-4.6,y:15.8},0).wait(1).to({x:-4.3},0).wait(1).to({x:-4.1},0).wait(3).wait(1).to({regX:2.6,regY:5.2,scaleX:1.14,scaleY:1,x:-3,y:15.2},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-22.2,skewY:157.6,x:-1.2,y:16.3},0).wait(1).to({skewX:-29.6,skewY:150.2,x:0.2,y:17.3},0).wait(1).to({x:0.3,y:17.1},0).wait(1).to({x:0.4,y:16.8},0).wait(1).to({y:16.3},0).wait(1).to({y:15.8},0).wait(1).wait(1).to({regX:2.4,regY:4.9,scaleX:1.14,scaleY:1,skewX:-14.6,skewY:165.2,x:-4.3,y:15.4},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-11.6,skewY:168.2,x:-4.8,y:15.9},0).wait(1).to({skewX:-8.6,skewY:171.2,x:-5.3},0).wait(1).to({skewX:-5.6,skewY:174.2,x:-5.9,y:15.8},0).wait(1).to({skewX:-2.6,skewY:177.2,x:-6.5,y:15.9},0).wait(1).to({skewX:0.2,skewY:180.3,x:-7,y:15.8},0).wait(1).to({skewX:10.2,skewY:190.3,x:-7.3,y:15.2},0).wait(1).to({skewX:20.2,skewY:200.3,x:-7.6,y:14.5},0).wait(1).to({skewX:30.2,skewY:210.3,x:-7.8,y:13.9},0).wait(1).to({regY:5,scaleX:1.14,scaleY:1,skewX:-29.6,skewY:150.2,x:-3.2,y:15.5},0).wait(1).to({regY:5.4,scaleX:1.14,scaleY:1,skewX:-37.1,skewY:142.7,x:-2.7,y:15.2},0).wait(1).to({skewX:-44.6,skewY:135.2,x:-2.5,y:14.6},0).wait(1).to({skewX:-52.1,skewY:127.7,x:0},0).wait(1).to({skewX:-59.7,skewY:120.1,x:2.3,y:14.5},0).wait(1).to({skewX:-67.2,skewY:112.6,x:3.6,y:14.6},0).wait(1).to({skewX:-74.7,skewY:105.1,x:4.7,y:14.7},0).wait(1).to({skewX:-82.2,skewY:97.6,x:4.5,y:15},0).wait(1).to({skewX:-89.8,skewY:90,x:4.3,y:15.3},0).wait(1).to({regX:2.4,regY:5.1,scaleX:1.14,scaleY:1,skewX:-29.6,skewY:150.2,x:0.3,y:18.9},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1.14,scaleY:1,skewX:-29.6,y:19},0).wait(1).to({x:0.4,y:18.9},0).wait(1).to({y:18.8},0).wait(1).to({x:0.5,y:18.6},0).wait(1).to({y:18.5},0).wait(1).to({x:0.6,y:18.3},0).wait(1).to({y:18.2},0).wait(1).to({x:0.7,y:18},0).wait(1).to({y:17.9},0).wait(1).to({x:0.8,y:17.7},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({x:0.7},0).wait(1).to({y:17.8},0).wait(1).to({y:17.9},0).wait(1).wait(1).to({x:0.6,y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).wait(1).to({x:0.5,y:18.3},0).wait(1).to({y:18.4},0).wait(2));

	// LLeg L
	this.instance_62 = new lib.leg_lower();
	this.instance_62.setTransform(-4.8,24.6,1.143,1,0,0,180,1.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(1).to({regX:1.9},0).wait(6).wait(1).to({regX:1.5,regY:6.6,skewX:75,skewY:255.1,x:-12.6,y:20.5},0).wait(1).to({regX:1.9,regY:6.3,skewX:67.5,skewY:247.6,x:-8,y:21},0).wait(1).to({skewX:60,skewY:240.1,x:-3.6,y:22},0).wait(1).to({skewX:52.5,skewY:232.6,x:-3.5,y:21.3},0).wait(1).to({skewX:45,skewY:225.1,y:20.5},0).wait(1).to({skewX:30,skewY:210.1,x:-2.7,y:20.2},0).wait(1).to({skewX:15,skewY:195.1,x:-1.8,y:20},0).wait(1).to({skewX:7.4,skewY:187.5,x:0.3,y:16.8},0).wait(1).to({skewX:0,skewY:179.8,x:2.5,y:13.6},0).wait(1).to({skewX:0,x:2.4,y:13.4},0).wait(1).to({x:2.3,y:13.2},0).wait(1).to({skewX:-15,skewY:164.8,x:2.9,y:17.3},0).wait(1).to({skewX:-30,skewY:149.8,x:3.6,y:21.4},0).wait(1).to({x:0.7,y:23.4},0).wait(1).to({x:-2,y:25.3},0).wait(1).to({skewX:-22.4,skewY:157.4,x:-3.7},0).wait(1).to({skewX:-14.9,skewY:164.9,x:-5.5,y:25.2},0).wait(1).to({skewX:-7.3,skewY:172.5,x:-7.1,y:25.4},0).wait(1).to({skewX:0,skewY:180,x:-8.8,y:25.6},0).wait(1).to({skewX:7.5,skewY:187.6,x:-10.6,y:25.5},0).wait(1).to({skewX:15,skewY:195.1,x:-12.5},0).wait(1).to({skewX:26.1,skewY:206.2,x:-13.9,y:24.1},0).wait(1).to({skewX:37.3,skewY:217.4,x:-15.4,y:22.8},0).wait(1).to({skewX:44.8,skewY:224.9,x:-16.1,y:21.2},0).wait(1).to({skewX:52.3,skewY:232.4,x:-16.9,y:19.7},0).wait(1).to({skewX:67.4,skewY:247.5,x:-15.8,y:18.9},0).wait(1).to({skewX:82.4,skewY:262.5,x:-14.8,y:18.2},0).wait(1).to({skewX:78.7,skewY:258.8,x:-13.6,y:19.1},0).wait(1).to({skewX:75,skewY:255.1,x:-12.4,y:20},0).wait(1).to({regX:1.5,regY:6.6,x:-12.6,y:20.5},0).wait(1).to({regX:1.9,regY:6.3,skewX:78.7,skewY:258.8,x:-13.6,y:19.1},0).wait(1).to({skewX:82.4,skewY:262.5,x:-14.8,y:18.2},0).wait(1).to({skewX:67.4,skewY:247.5,x:-15.8,y:18.9},0).wait(1).to({skewX:52.3,skewY:232.4,x:-16.9,y:19.7},0).wait(1).to({skewX:44.8,skewY:224.9,x:-16.1,y:21.2},0).wait(1).to({skewX:37.3,skewY:217.4,x:-15.4,y:22.8},0).wait(1).to({skewX:26.1,skewY:206.2,x:-13.9,y:24.1},0).wait(1).to({skewX:15,skewY:195.1,x:-12.5,y:25.5},0).wait(1).to({skewX:7.5,skewY:187.6,x:-10.6},0).wait(1).to({skewX:0,skewY:180,x:-8.8,y:25.6},0).wait(1).to({skewX:-7.3,skewY:172.5,x:-7.1,y:25.4},0).wait(1).to({skewX:-14.9,skewY:164.9,x:-5.5,y:25.2},0).wait(1).to({skewX:-22.4,skewY:157.4,x:-3.7,y:25.3},0).wait(1).to({skewX:-30,skewY:149.8,x:-2},0).wait(1).to({x:0.7,y:23.4},0).wait(1).to({x:3.6,y:21.4},0).wait(1).to({skewX:-15,skewY:164.8,x:2.9,y:18.5},0).wait(1).to({skewX:0,skewY:179.8,x:2.3,y:15.5},0).wait(1).to({skewX:0,x:2.2,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({skewX:7.4,skewY:187.5,x:0.3,y:18.1},0).wait(1).to({skewX:15,skewY:195.1,x:-1.5,y:20.4},0).wait(1).to({skewX:30,skewY:210.1,x:-2.5},0).wait(1).to({skewX:45,skewY:225.1,x:-3.5,y:20.5},0).wait(1).to({skewX:52.5,skewY:232.6,y:21.3},0).wait(1).to({skewX:60,skewY:240.1,x:-3.6,y:22},0).wait(1).to({skewX:67.5,skewY:247.6,x:-8,y:21},0).wait(1).to({skewX:75,skewY:255.1,x:-12.4,y:20},0).wait(1).to({regX:2.1,regY:6.6,scaleX:1.14,scaleY:1,skewX:29.8,skewY:209.9,x:-6.9,y:25.1},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:29.8,x:-7.5,y:24.7},0).wait(1).to({x:-8.5,y:24.4},0).wait(1).to({x:-8.4,y:24.3},0).wait(1).to({x:-8.2,y:24.2},0).wait(3).wait(1).to({regX:1.7,regY:5.4,scaleX:1.14,scaleY:1,skewX:14.8,skewY:194.9,x:-5.8,y:24},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:29.9,skewY:210,x:-5.6,y:24.7},0).wait(1).to({skewX:44.8,skewY:224.9,x:-4.9,y:24.6},0).wait(1).to({skewX:41.1,skewY:221.2,x:-4.4,y:24.8},0).wait(1).to({skewX:37.3,skewY:217.4,x:-3.8,y:25},0).wait(1).to({skewX:33.6,skewY:213.7,x:-3.4,y:24.7},0).wait(1).to({skewX:29.9,skewY:210,x:-3,y:24.3},0).wait(1).wait(1).to({regX:2.1,regY:6.8,scaleX:1.14,scaleY:1,skewX:29.8,skewY:209.9,x:-8.8,y:24.5},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:33.6,skewY:213.7,x:-9.3,y:23.8},0).wait(1).to({skewX:37.3,skewY:217.4,x:-10.2,y:23.6},0).wait(1).to({skewX:41.1,skewY:221.2,x:-11.3,y:23.3},0).wait(1).to({skewX:44.8,skewY:224.9,x:-12.3,y:23},0).wait(1).to({skewX:48.6,skewY:228.7,x:-13.2,y:22.7},0).wait(1).to({skewX:52.3,skewY:232.4,x:-14.4,y:21.4},0).wait(1).to({skewX:56.1,skewY:236.2,x:-15.6,y:20},0).wait(1).to({skewX:59.8,skewY:239.9,x:-16.7,y:18.7},0).wait(1).to({regY:6.7,scaleX:1.14,scaleY:1,skewX:14.8,skewY:194.9,x:-4.6,y:25.6},0).wait(1).to({regY:6.3,scaleX:1.14,scaleY:1,skewX:7.3,skewY:187.4,x:-3.2,y:24.6},0).wait(1).to({skewX:0,skewY:179.8,x:-1.9,y:23.9},0).wait(1).to({skewX:0,skewY:179.9,x:0.8,y:23.6},0).wait(1).to({skewY:180,x:3.8,y:23.2},0).wait(1).to({skewY:179.9,x:5.5,y:23},0).wait(1).to({skewX:0,skewY:179.8,x:7.3,y:22.8},0).wait(1).to({skewX:-14.9,skewY:164.9,x:8.7,y:22.3},0).wait(1).to({skewX:-29.9,skewY:149.9,x:10.1,y:21.9},0).wait(1).to({regX:1.7,regY:5.1,scaleX:1.14,scaleY:1,skewX:29.8,skewY:209.9,x:-2,y:26.8},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1.14,scaleY:1,skewX:29.8,x:-2.7,y:27.5},0).wait(1).to({x:-2.6,y:27.4},0).wait(1).to({x:-2.5,y:27.2},0).wait(1).to({x:-2.4,y:27.1},0).wait(1).to({x:-2.3,y:26.9},0).wait(1).to({x:-2.2,y:26.8},0).wait(1).to({x:-2.1,y:26.6},0).wait(1).to({x:-2,y:26.5},0).wait(1).to({x:-1.9,y:26.3},0).wait(1).to({x:-1.8,y:26.2},0).wait(1).to({x:-1.7,y:26},0).wait(1).to({x:-1.8,y:26.1},0).wait(1).to({x:-1.9,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({x:-2,y:26.4},0).wait(1).to({x:-2.1,y:26.5},0).wait(1).to({y:26.6},0).wait(1).to({x:-2.2,y:26.7},0).wait(1).to({x:-2.3},0).wait(1).to({y:26.8},0).wait(1).to({x:-2.4,y:26.9},0).wait(1).to({x:-2.5,y:27},0).wait(1).to({y:27.1},0).wait(1));

	// Torso
	this.torso = new lib.torso();
	this.torso.setTransform(0.2,0,1,1,0,0,0,-0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.torso).wait(7).wait(1).to({regX:-1,regY:-0.4,scaleX:1,scaleY:1,rotation:14.8,x:0,y:0.7},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:12.8,x:0.7,y:1.5},0).wait(1).to({rotation:10.6,x:1.1,y:1.7},0).wait(1).to({rotation:18.1,x:0.4,y:1.2},0).wait(1).to({rotation:25.5,x:0,y:0.7},0).wait(1).to({rotation:28.3,x:-0.4,y:0.1},0).wait(1).to({rotation:31,x:-0.9,y:-0.2},0).wait(1).to({rotation:28.6,x:-0.7,y:-0.4},0).wait(1).to({rotation:26.1,x:-0.5,y:-0.6},0).wait(1).to({rotation:28.3,x:-0.1},0).wait(1).to({rotation:30.5,x:0,y:-0.5},0).wait(1).to({rotation:27.9,y:-0.1},0).wait(1).to({rotation:25.3,y:0.2},0).wait(1).to({rotation:29.9,y:1.2},0).wait(1).to({rotation:34.5,y:2.2},0).wait(1).to({x:0,y:2.1},0).wait(1).to({x:-0.1,y:2},0).wait(1).to({y:2.6},0).wait(1).to({x:0,y:3.2},0).wait(1).to({rotation:32.2,x:0,y:2.7},0).wait(1).to({rotation:29.9,y:2.2},0).wait(1).to({rotation:27.7,x:0.1,y:2.3},0).wait(1).to({rotation:25.6,x:0.3,y:2.6},0).wait(1).to({x:0,y:1.7},0).wait(1).to({x:-0.4,y:0.9},0).wait(1).to({rotation:22.5,x:0,y:1.3},0).wait(1).to({rotation:19.3,x:0.3,y:1.7},0).wait(1).to({rotation:17.2,y:1.4},0).wait(1).to({rotation:15,y:1.2},0).wait(1).to({regX:-1.2,regY:-0.4,rotation:-3.6,x:-3.7,y:0.5},0).wait(1).to({regX:-0.4,regY:-0.1,rotation:-3.4,x:-3.2,y:1},0).wait(1).to({rotation:-3.2,x:-3.6,y:1.3},0).wait(1).to({rotation:-3.5,x:-4.2,y:0.4},0).wait(1).to({rotation:-3.9,x:-4.9,y:-0.2},0).wait(1).to({rotation:-2.9,x:-4.6,y:0.2},0).wait(1).to({rotation:-2,x:-4.4,y:0.7},0).wait(1).to({rotation:-1.5,x:-4.8,y:1},0).wait(1).to({rotation:-1,x:-5.3,y:1.2},0).wait(1).to({rotation:-2.5,x:-6.1,y:1.1},0).wait(1).to({rotation:-4,x:-6.9,y:1.2},0).wait(1).to({rotation:-4.5,x:-6.8,y:0.7},0).wait(1).to({rotation:-4.9,x:-7,y:0.3},0).wait(1).to({rotation:-4,x:-6.6,y:0.1},0).wait(1).to({rotation:-3,x:-6.4,y:0.4},0).wait(1).to({rotation:-2.3,x:-5.9,y:-0.4},0).wait(1).to({rotation:-1.7,x:-4.7,y:-1},0).wait(1).to({rotation:1.2,x:-4.6,y:-1.5},0).wait(1).to({rotation:4.3,x:-4.4,y:-2},0).wait(1).to({x:-4.6,y:-1.3},0).wait(1).to({rotation:4.4,x:-4.7,y:-0.6},0).wait(1).to({rotation:4,x:-5.3,y:-0.4},0).wait(1).to({rotation:3.7,x:-4.8,y:-0.1},0).wait(1).to({rotation:-0.2,x:-4.7,y:0},0).wait(1).to({rotation:-4.3,x:-4.3,y:0.4},0).wait(1).to({x:-2.9,y:0.9},0).wait(1).to({x:-1.4,y:0.7},0).wait(1).to({rotation:-4.4,x:-1.7,y:0.5},0).wait(1).to({rotation:-4.5,x:-2.8,y:0},0).wait(1).to({regX:-0.2,regY:-0.4,scaleX:1,scaleY:1,rotation:14.8,x:-0.7,y:0.2},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:16.4,x:-1,y:1},0).wait(1).to({rotation:17.8,y:1.5},0).wait(1).to({rotation:19.2,x:-0.5,y:1.7},0).wait(1).to({rotation:20.6,x:-0.1,y:1.9},0).wait(3).wait(1).to({regX:-0.1,regY:-0.4,scaleX:1,scaleY:1,rotation:14.8,x:0.7,y:0.2},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:7.4,x:0.3,y:1.5},0).wait(1).to({rotation:0,x:0.2,y:2.5},0).wait(1).to({rotation:-3.1,x:-0.2},0).wait(1).to({rotation:-6.3,x:-0.8},0).wait(1).to({x:-0.5,y:2.9},0).wait(1).to({x:-0.3,y:3.3},0).wait(1).wait(1).to({regX:-0.5,regY:-0.2,scaleX:1,scaleY:1,rotation:20.5,x:0,y:1.8},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:20.6,x:0},0).wait(1).to({x:-0.2,y:1.7},0).wait(1).to({x:-0.3,y:1.6},0).wait(1).to({x:-0.5,y:1.5},0).wait(1).to({x:-0.7,y:1.4},0).wait(1).to({x:-0.4,y:1.5},0).wait(1).to({x:-0.1,y:1.7},0).wait(1).to({x:0,y:1.9},0).wait(1).to({regX:-0.5,regY:-0.2,scaleX:1,scaleY:1,rotation:20.5,y:1.8},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:13,x:-1.5,y:0.8},0).wait(1).to({rotation:5.5,x:-3.2,y:0},0).wait(1).to({rotation:0.7,x:-2},0).wait(1).to({rotation:-4,x:-0.8},0).wait(1).to({rotation:-6.3,x:-0.6,y:0.1},0).wait(1).to({rotation:-8.6,x:-0.5,y:0.5},0).wait(1).to({x:-1.1,y:1.4},0).wait(1).to({x:-1.7,y:2.2},0).wait(1).to({regX:-1.7,regY:1.7,rotation:1.3,x:-0.3,y:4.7},0).wait(1).to({regX:-0.4,regY:-0.1,rotation:1.4,x:0.8,y:2.8},0).wait(1).to({x:0.9,y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({x:1,y:2.3},0).wait(1).to({y:2.2},0).wait(1).to({x:1.1,y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({x:1.2,y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.8},0).wait(1).to({y:1.9},0).wait(1).to({x:1.1},0).wait(1).to({y:2},0).wait(1).to({y:2.1},0).wait(1).to({y:2.2},0).wait(1).to({y:2.3},0).wait(1).to({x:1},0).wait(1).to({y:2.4},0).wait(1).to({y:2.5},0).wait(1).to({y:2.6},0).wait(1).to({y:2.7},0).wait(1));

	// RArm Dynamic
	this.rarm_d = new lib.arm_dyn();
	this.rarm_d.setTransform(0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.rarm_d).wait(1).to({regX:20.3,regY:1.4,x:20.2,y:-6.8},0).wait(6).wait(1).to({regX:2.6,regY:8.2,x:5,y:0},0).wait(1).to({regX:20.3,regY:1.4,x:22.9,y:-6.3},0).wait(1).to({x:23.2,y:-6},0).wait(1).to({y:-5.7},0).wait(1).to({y:-5.4},0).wait(1).to({x:22.8,y:-5.8},0).wait(1).to({x:22.4,y:-6.2},0).wait(1).to({x:22.1},0).wait(1).to({x:21.8},0).wait(1).to({x:22.4,y:-5.5},0).wait(1).to({x:23.1,y:-4.8},0).wait(1).to({x:22.6,y:-4.5},0).wait(1).to({x:22.2,y:-4.2},0).wait(1).to({x:22.6,y:-3.7},0).wait(1).to({x:23.1,y:-3.2},0).wait(1).to({x:23},0).wait(1).to({x:22.9,y:-3.3},0).wait(1).to({x:23.2,y:-3.2},0).wait(1).to({x:23.5,y:-3},0).wait(1).to({x:23.3},0).wait(1).to({x:23},0).wait(1).to({x:23.1,y:-2.7},0).wait(1).to({x:23.2,y:-2.5},0).wait(1).to({x:22.4},0).wait(1).to({x:21.7},0).wait(1).to({x:22.1,y:-3},0).wait(1).to({x:22.5,y:-3.5},0).wait(1).to({x:22.7,y:-5.5},0).wait(1).to({x:23,y:-7.5},0).wait(1).to({regX:2.6,regY:8.2,x:-1.5,y:0.9},0).wait(1).to({regX:20.3,regY:1.4,x:15.7,y:-5.8},0).wait(1).to({x:15.3,y:-6},0).wait(1).to({x:14.7,y:-5.8},0).wait(1).to({x:14,y:-5.6},0).wait(1).to({x:14.3,y:-5.4},0).wait(1).to({x:14.6,y:-5.2},0).wait(1).to({x:14.1,y:-4.8},0).wait(1).to({x:13.6,y:-4.5},0).wait(1).to({x:12.7,y:-4.1},0).wait(1).to({x:11.8,y:-3.8},0).wait(1).to({x:11.9},0).wait(1).to({x:12},0).wait(1).to({x:12.3,y:-3.5},0).wait(1).to({x:12.6,y:-3.3},0).wait(1).to({x:13.4,y:-4.6},0).wait(1).to({x:14.2,y:-5.9},0).wait(1).to({x:14.8,y:-6.2},0).wait(1).to({x:15.3,y:-6.6},0).wait(1).to({x:15,y:-6.5},0).wait(1).to({x:14.8,y:-6.4},0).wait(1).to({x:14.6,y:-6},0).wait(1).to({x:14.3,y:-5.7},0).wait(1).to({x:14.4,y:-4.8},0).wait(1).to({x:14.5,y:-3.9},0).wait(1).to({x:15.9,y:-3.7},0).wait(1).to({x:17.3,y:-3.5},0).wait(1).to({x:16.6,y:-4.1},0).wait(1).to({x:15.8,y:-4.8},0).wait(1).to({regX:2.6,regY:8.2,x:2.9,y:1.5},0).wait(1).to({regX:20.3,regY:1.4,x:20.9,y:-4.4},0).wait(1).to({x:21.1,y:-3.8},0).wait(1).to({x:21.5,y:-4.2},0).wait(1).to({x:21.9,y:-4.6},0).wait(3).wait(1).to({regX:2.6,regY:8.2,x:4.8,y:0.5},0).wait(1).to({regX:20.3,regY:1.4,x:21.6,y:-6.1},0).wait(1).to({x:20.7},0).wait(1).to({x:19.7,y:-5.7},0).wait(1).to({x:18.7,y:-5.3},0).wait(1).to({x:19,y:-4.9},0).wait(1).to({x:19.3,y:-4.5},0).wait(1).wait(1).to({regX:2.6,regY:8.2,x:5.8,y:0.1},0).wait(1).to({regX:20.3,regY:1.4,x:23.2,y:-6.8},0).wait(1).to({x:23,y:-7.2},0).wait(1).to({x:22.7,y:-7.5},0).wait(1).to({x:22.5,y:-7.9},0).wait(1).to({x:22.2,y:-8.2},0).wait(1).to({x:22.5,y:-7.9},0).wait(1).to({x:22.8,y:-7.6},0).wait(1).to({x:23.1,y:-7.4},0).wait(1).to({regX:2.6,regY:8.2,x:5.1,y:-0.1},0).wait(1).to({regX:20.3,regY:1.4,x:19.9,y:-7},0).wait(1).to({x:16.9},0).wait(1).to({x:17.6,y:-7.3},0).wait(1).to({x:18.3,y:-7.6},0).wait(1).to({x:18,y:-6.9},0).wait(1).to({x:17.8,y:-6.3},0).wait(1).to({x:17.3,y:-5.1},0).wait(1).to({x:16.8,y:-4},0).wait(1).to({regX:2.6,regY:8.2,x:3.4,y:5.3},0).wait(1).to({regX:20.3,regY:1.4,x:21.1,y:-1.4},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.7},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2.1},0).wait(1).to({y:-2.2},0).wait(1).to({y:-2.4},0).wait(1).to({y:-2.6},0).wait(1).to({y:-2.7},0).wait(1).to({y:-2.9},0).wait(1).to({x:21.2,y:-3.1},0).wait(1).to({x:21.1,y:-2.9},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.7},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.4},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.1},0).wait(1).to({y:-2},0).wait(1).to({y:-1.9},0).wait(1).to({y:-1.7},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.5},0).wait(1));

	// RArm U
	this.rarm_u = new lib.arm_upper();
	this.rarm_u.setTransform(2.3,-4.7,1,1,0,0,0,1.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.rarm_u).wait(1).to({regX:1.8,regY:3.3,x:2.2,y:-5.1},0).wait(6).wait(1).to({regX:1.9,regY:3.8,x:3.8,y:-3.4},0).wait(1).to({regX:1.8,regY:3.3,rotation:7.5,x:3.6,y:-3.7},0).wait(1).to({rotation:15,x:3.5,y:-3.4},0).wait(1).to({rotation:22.4,x:3.2,y:-3.5},0).wait(1).to({rotation:29.8,x:2.9,y:-3.6},0).wait(1).to({rotation:37.3,x:2.4,y:-3.8},0).wait(1).to({rotation:44.8,x:1.8,y:-4},0).wait(1).to({rotation:59.8,x:0.3,y:-4.9},0).wait(1).to({rotation:74.8,x:-1.1,y:-5.7},0).wait(1).to({rotation:89.9,x:-0.8,y:-6.3},0).wait(1).to({rotation:104.9,x:-0.6,y:-6.8},0).wait(1).to({rotation:112.4,x:-0.8,y:-7.1},0).wait(1).to({rotation:119.8,x:-1,y:-7.5},0).wait(1).to({x:-0.2,y:-6.1},0).wait(1).to({x:0.4,y:-4.7},0).wait(1).to({rotation:104.8,y:-3.9},0).wait(1).to({rotation:89.8,x:0.3,y:-3.2},0).wait(1).to({rotation:82.4,x:0.7,y:-2.6},0).wait(1).to({rotation:75,x:0.9,y:-2.2},0).wait(1).to({rotation:52.5,x:1.5,y:-1},0).wait(1).to({rotation:30,x:2,y:0},0).wait(1).to({rotation:22.4,x:2.3},0).wait(1).to({rotation:14.9,x:2.5},0).wait(1).to({x:2.2,y:-0.1},0).wait(1).to({x:1.9,y:-0.4},0).wait(1).to({x:2.5,y:-0.9},0).wait(1).to({x:3,y:-1.4},0).wait(1).to({rotation:7.4,x:3.3,y:-2.7},0).wait(1).to({rotation:0,x:3.7,y:-3.9},0).wait(1).to({regX:1.3,regY:3,x:-2.7,y:-4.2},0).wait(1).to({regX:1.8,regY:3.3,x:-2.3,y:-3.6},0).wait(1).to({rotation:0,x:-2.5,y:-3.4},0).wait(1).to({x:-3.2,y:-3.7},0).wait(1).to({x:-4,y:-3.9},0).wait(1).to({rotation:7.3,y:-3.3},0).wait(1).to({rotation:14.9,x:-4.2,y:-2.8},0).wait(1).to({rotation:22.4,x:-5.6,y:-2.2},0).wait(1).to({rotation:30,x:-6.8,y:-1},0).wait(1).to({rotation:37.5,x:-8.4,y:-0.9},0).wait(1).to({rotation:45,x:-10,y:-0.8},0).wait(1).to({rotation:67.4,y:-1.6},0).wait(1).to({rotation:89.8,y:-2.5},0).wait(1).to({rotation:74.8,x:-9.7,y:-1.9},0).wait(1).to({rotation:59.8,x:-9.4,y:-1.4},0).wait(1).to({rotation:52.3,x:-8.3,y:-2.7},0).wait(1).to({rotation:44.8,x:-7.2,y:-3.9},0).wait(1).to({rotation:52.3,y:-4.3},0).wait(1).to({rotation:59.8,y:-4.7},0).wait(1).to({rotation:52.4,x:-6.9,y:-4},0).wait(1).to({rotation:44.9,x:-6.7,y:-3.3},0).wait(1).to({rotation:29.9,x:-5.3},0).wait(1).to({rotation:14.9,x:-3.9,y:-2.9},0).wait(1).to({rotation:7.3,x:-3.6,y:-2},0).wait(1).to({rotation:0,x:-3.4,y:-1},0).wait(1).to({rotation:7.4,x:-1.9,y:-1.1},0).wait(1).to({rotation:15,x:-0.2,y:-1.2},0).wait(1).to({rotation:3.8,x:-0.5,y:-1.9},0).wait(1).to({rotation:-7.3,x:-0.8,y:-2.7},0).wait(1).to({regX:2.2,regY:3.6,scaleX:1,scaleY:1,rotation:104.8,x:-0.7,y:-8.1},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:105,x:-0.1,y:-8.3},0).wait(1).to({x:0,y:-8.1},0).wait(1).to({x:0.2,y:-7.6},0).wait(1).to({x:0.5,y:-7.1},0).wait(3).wait(1).to({regX:1.9,regY:3.8,rotation:270.1,x:6,y:-7.2},0).wait(1).to({regX:1.8,regY:3.3,rotation:277.6,x:4.5,y:-7},0).wait(1).to({rotation:285.1,x:3.6,y:-6.9},0).wait(1).to({x:3.1,y:-6.7},0).wait(1).to({x:2.6,y:-6.4},0).wait(1).to({x:2.3,y:-6.3},0).wait(1).to({x:2.1,y:-6.2},0).wait(1).wait(1).to({regX:2.5,regY:3.7,scaleX:1,scaleY:1,rotation:464.8,x:0.2,y:-6.5},0).wait(1).to({regX:1.8,regY:3.3,scaleX:1,scaleY:1,rotation:465,x:0.7,y:-7},0).wait(1).to({x:0.5},0).wait(1).to({x:0.4,y:-6.9},0).wait(1).to({x:0.3,y:-7.1},0).wait(1).to({x:0.2,y:-7.2},0).wait(1).to({x:0.6},0).wait(1).to({x:1},0).wait(1).to({x:1.4},0).wait(1).to({regX:2.5,regY:3.7,rotation:450,x:0.8,y:-5.7},0).wait(1).to({regX:1.8,regY:3.3,rotation:427.4,x:-1.3,y:-5.5},0).wait(1).to({rotation:404.9,x:-4,y:-4.3},0).wait(1).to({rotation:382.4,x:-1.7,y:-4.5},0).wait(1).to({rotation:359.9,x:0.4,y:-4.6},0).wait(1).to({rotation:352.5,x:0.3,y:-4.8},0).wait(1).to({rotation:345.1,x:0.1},0).wait(1).to({rotation:337.5,x:-0.2,y:-3.5},0).wait(1).to({rotation:330,x:-0.7,y:-2.3},0).wait(1).to({regX:2.1,regY:3.6,rotation:360,x:2.7,y:-0.5},0).wait(1).to({regX:1.8,regY:3.3,x:2.5,y:-0.8},0).wait(1).wait(1).to({x:2.6,y:-0.9},0).wait(1).wait(1).to({x:2.7,y:-1},0).wait(1).wait(1).to({x:2.8},0).wait(1).to({y:-1.1},0).wait(1).to({x:2.9},0).wait(1).to({y:-1.2},0).wait(1).to({x:3},0).wait(1).wait(1).to({y:-1.1},0).wait(1).to({x:2.9},0).wait(1).to({y:-1},0).wait(1).wait(1).to({y:-0.9},0).wait(1).wait(1).to({x:2.8,y:-0.8},0).wait(1).wait(1).to({y:-0.7},0).wait(1).wait(1).to({y:-0.6},0).wait(1));

	// RArm L
	this.rarm_l = new lib.arm_lower();
	this.rarm_l.setTransform(5.2,3.3,1,1,-7.2,0,0,1.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.rarm_l).wait(1).to({regX:19.2,regY:-0.1,x:21.5,y:-5},0).wait(6).wait(1).to({regX:0.7,regY:3.6,rotation:-104.8,x:8.7,y:-1.2},0).wait(1).to({regX:19.2,regY:-0.1,x:-0.2,y:-17.7},0).wait(1).to({x:-0.8,y:-17.4},0).wait(1).to({rotation:-89.8,x:2.8,y:-18.1},0).wait(1).to({rotation:-74.8,x:6.9,y:-17.5},0).wait(1).to({rotation:-44.8,x:13.9,y:-13.9},0).wait(1).to({rotation:-14.8,x:18.2,y:-6.1},0).wait(1).to({rotation:0,x:16.7,y:-2.7},0).wait(1).to({rotation:15.1,x:13.8,y:0.8},0).wait(1).to({rotation:37.5,x:10.7,y:5.8},0).wait(1).to({rotation:60,x:5.1,y:9.5},0).wait(1).to({rotation:67.6,x:2.7},0).wait(1).to({rotation:75.1,x:0,y:9.2},0).wait(1).to({rotation:67.7,x:3.3,y:10},0).wait(1).to({rotation:60.2,x:6.3,y:10.5},0).wait(1).to({rotation:52.7,x:8.3,y:10.8},0).wait(1).to({rotation:45.2,x:10.1,y:10.9},0).wait(1).to({rotation:22.7,x:14.5,y:5.6},0).wait(1).to({rotation:0.1,x:16,y:0},0).wait(1).to({rotation:-29.7,x:15.2,y:-7.6},0).wait(1).to({rotation:-59.8,x:10.5,y:-11.9},0).wait(1).to({rotation:-74.8,x:6.7,y:-13.6},0).wait(1).to({rotation:-89.7,x:2.7,y:-14},0).wait(1).to({rotation:-97.3,x:0.1,y:-14.1},0).wait(1).to({rotation:-104.8,x:-2.2,y:-14},0).wait(1).to({x:-1.7,y:-14.4},0).wait(1).to({x:-1.3,y:-14.8},0).wait(1).to({x:-0.4,y:-16.4},0).wait(1).to({x:0.3,y:-18.1},0).wait(1).to({regX:1,regY:2.6,x:1,y:-0.6},0).wait(1).to({regX:19.2,regY:-0.1,x:-6,y:-17.4},0).wait(1).to({x:-5.9,y:-17.3},0).wait(1).to({x:-6.7},0).wait(1).to({x:-7.6,y:-17.4},0).wait(1).to({rotation:-97.3,x:-6.2,y:-17.1},0).wait(1).to({rotation:-89.7,x:-4.7,y:-16.7},0).wait(1).to({rotation:-74.8,x:-1.9,y:-15.4},0).wait(1).to({rotation:-59.8,x:0.5,y:-13},0).wait(1).to({rotation:-29.7,x:5.3,y:-7.2},0).wait(1).to({rotation:0.1,x:6.4,y:1.3},0).wait(1).to({rotation:22.7,x:4.2,y:6.5},0).wait(1).to({rotation:45.2,x:-0.5,y:11},0).wait(1).to({rotation:37.7,x:1.6,y:10.3},0).wait(1).to({rotation:30.2,x:3.7,y:9.5},0).wait(1).to({x:5.2,y:8.5},0).wait(1).to({x:6.7,y:7.6},0).wait(1).to({x:6.3,y:7.2},0).wait(1).to({rotation:30.1,x:5.9,y:6.9},0).wait(1).to({rotation:22.6,x:7.8,y:5.1},0).wait(1).to({rotation:15.1,x:9.2,y:3.2},0).wait(1).to({rotation:0,x:11.9,y:-1.2},0).wait(1).to({rotation:-14.8,x:13.4,y:-5.5},0).wait(1).to({rotation:-44.8,x:9.1,y:-12.3},0).wait(1).to({rotation:-74.8,x:1.8,y:-15},0).wait(1).to({rotation:-89.8,x:-1.4,y:-15.5},0).wait(1).to({rotation:-104.8,x:-4.7,y:-14.8},0).wait(1).to({rotation:-108.5,x:-5.5,y:-16},0).wait(1).to({rotation:-112.3,x:-6.2,y:-17},0).wait(1).to({regX:2.1,regY:5.8,scaleX:1,scaleY:1,rotation:52.7,x:-7.4,y:-4.1},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1,scaleY:1,rotation:52.7,x:7.7,y:6},0).wait(1).to({x:7.8,y:6.2},0).wait(1).to({x:8.3,y:6.5},0).wait(1).to({x:8.8,y:6.7},0).wait(3).wait(1).to({regX:2.6,regY:5.6,scaleX:1,scaleY:1,rotation:-112.1,x:13,y:-11.4},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1,scaleY:1,rotation:-104.6,x:2.5,y:-24.7},0).wait(1).to({rotation:-97.1,x:3.8,y:-24.6},0).wait(1).to({rotation:-82.1,x:7.7,y:-24.7},0).wait(1).to({rotation:-67.1,x:11.8,y:-23.5},0).wait(1).to({x:11.6,y:-23.4},0).wait(1).to({rotation:-67.2,x:11.5,y:-23.3},0).wait(1).wait(1).to({regX:1.6,regY:5.9,scaleX:1,scaleY:1,rotation:37.6,x:-5.6,y:-2.3},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1,scaleY:1,rotation:39.6,x:11.4,y:4},0).wait(1).to({rotation:41.5,x:10.9,y:4.6},0).wait(1).to({rotation:43.4,x:10.3,y:5},0).wait(1).to({rotation:45.3,x:9.7,y:5.3},0).wait(1).to({rotation:47.2,x:9.1,y:5.6},0).wait(1).to({rotation:54,x:8.1,y:7.1},0).wait(1).to({rotation:60.8,x:6.9,y:8.3},0).wait(1).to({rotation:67.7,x:5.5,y:9.4},0).wait(1).to({regX:1.8,regY:6,scaleX:1,scaleY:1,rotation:52.7,x:-5.6,y:-1.5},0).wait(1).to({regX:19.2,regY:-0.1,scaleX:1,scaleY:1,rotation:30.1,x:12.2,y:4.6},0).wait(1).to({rotation:7.6,x:12,y:0.4},0).wait(1).to({rotation:-7.2,x:15.6,y:-4.4},0).wait(1).to({rotation:-22.1,x:18,y:-8.8},0).wait(1).to({rotation:-29.6,x:17.1,y:-11.3},0).wait(1).to({rotation:-37.1,x:15.9,y:-13.6},0).wait(1).to({rotation:-52.1,x:12.3,y:-15.7},0).wait(1).to({rotation:-67.2,x:8.3,y:-16.6},0).wait(1).to({regX:0.5,regY:3.3,rotation:-7.1,x:4.1,y:6.2},0).wait(1).to({regX:19.2,regY:-0.1,rotation:-7.1,x:22.3,y:0.3},0).wait(1).wait(1).to({x:22.4,y:0.2},0).wait(1).wait(1).to({x:22.5,y:0.1},0).wait(1).wait(1).to({x:22.6,y:0},0).wait(1).wait(1).to({x:22.7},0).wait(1).wait(1).to({x:22.8,y:0},0).wait(1).to({y:0},0).wait(1).wait(1).to({y:0.1},0).wait(1).to({x:22.7},0).wait(1).to({y:0.2},0).wait(1).to({y:0.3},0).wait(1).to({y:0.4},0).wait(1).wait(1).to({y:0.5},0).wait(1).to({y:0.6},0).wait(1).to({y:0.7},0).wait(1).to({x:22.6},0).wait(1));

	// RLeg U
	this.instance_63 = new lib.leg_upper();
	this.instance_63.setTransform(2.2,15.6,1,1,0,0,0,2.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(1).to({regX:2.5,x:2.3},0).wait(6).wait(1).to({regX:2.4,x:-0.6,y:16.1},0).wait(1).to({regX:2.5,rotation:7.5,x:-0.4,y:16.4},0).wait(1).to({rotation:15,x:-0.3,y:16.7},0).wait(1).to({rotation:22.4,x:-2.8,y:15.6},0).wait(1).to({rotation:29.8,x:-5.4,y:14.5},0).wait(1).to({rotation:44.8,x:-7.8,y:14.1},0).wait(1).to({rotation:59.8,x:-10.2,y:13.6},0).wait(1).to({rotation:67.4,x:-10,y:12.9},0).wait(1).to({rotation:74.9,x:-9.7,y:12},0).wait(1).to({x:-9.8,y:11.9},0).wait(1).to({x:-10,y:11.7},0).wait(1).to({x:-9.4,y:12.2},0).wait(1).to({x:-8.8,y:12.6},0).wait(1).to({rotation:52.4,x:-8.1,y:14.2},0).wait(1).to({rotation:30,x:-7.3,y:15.7},0).wait(1).to({rotation:7.4,x:-5.5,y:15.3},0).wait(1).to({rotation:-15,x:-3.8,y:15},0).wait(1).to({rotation:-44.9,x:-3,y:13.1},0).wait(1).to({rotation:-74.8,x:-2.3,y:11.3},0).wait(1).to({x:-1.4,y:10.8},0).wait(1).to({x:-0.6,y:10.4},0).wait(1).to({x:0,y:10.5},0).wait(1).to({x:0.5,y:10.7},0).wait(1).to({rotation:-59.9,x:0.1,y:11.2},0).wait(1).to({rotation:-45,x:-0.2,y:11.6},0).wait(1).to({rotation:-30,x:-0.5,y:13.6},0).wait(1).to({rotation:-14.9,x:-0.8,y:15.6},0).wait(1).to({rotation:-7.4,x:-0.6,y:15.8},0).wait(1).to({rotation:0,x:-0.5,y:16.1},0).wait(1).to({regX:2.4,x:-0.6},0).wait(1).to({regX:2.5,rotation:-7.4,y:15.8},0).wait(1).to({rotation:-14.9,x:-0.8,y:15.6},0).wait(1).to({rotation:-30,x:-0.5,y:13.6},0).wait(1).to({rotation:-45,x:-0.2,y:11.6},0).wait(1).to({rotation:-52.5,x:0,y:11.7},0).wait(1).to({rotation:-60,x:0.1,y:11.9},0).wait(1).to({rotation:-67.4,x:-0.2,y:11.4},0).wait(1).to({rotation:-74.8,x:-0.8,y:11},0).wait(1).to({x:-1.1},0).wait(1).to({x:-1.5},0).wait(1).to({rotation:-44.9,x:-2.3,y:13},0).wait(1).to({rotation:-15,x:-3.1,y:15.1},0).wait(1).to({rotation:7.4,x:-5.1,y:15.3},0).wait(1).to({rotation:30,x:-7.3,y:15.7},0).wait(1).to({rotation:52.4,x:-8.1,y:14.2},0).wait(1).to({rotation:74.9,x:-8.8,y:12.6},0).wait(1).to({x:-9.4,y:12.2},0).wait(1).to({x:-10,y:11.7},0).wait(1).to({x:-9.8,y:11.9},0).wait(1).to({x:-9.7,y:12},0).wait(1).to({rotation:67.4,x:-10,y:12.9},0).wait(1).to({rotation:59.8,x:-10.2,y:13.6},0).wait(1).to({rotation:44.8,x:-7.8,y:14.1},0).wait(1).to({rotation:29.8,x:-5.4,y:14.5},0).wait(1).to({rotation:22.4,x:-2.8,y:15.6},0).wait(1).to({rotation:15,x:-0.3,y:16.7},0).wait(1).to({rotation:7.5,x:-0.4,y:16.4},0).wait(1).to({rotation:0,x:-0.5,y:16.1},0).wait(1).to({regX:3.4,regY:6.4,scaleX:1,scaleY:1,rotation:-74.8,x:1.9,y:9.8},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1,scaleY:1,rotation:-82.2,x:0.4,y:9.9},0).wait(1).to({rotation:-89.8,x:0.1,y:9.4},0).wait(1).to({x:0.2,y:9.3},0).wait(1).to({x:0.4,y:9.2},0).wait(3).wait(1).to({regX:2.3,regY:4.7,scaleX:1,scaleY:1,rotation:-74.8,x:2.9,y:9.5},0).wait(1).to({regX:2.5,regY:5.4,scaleX:1,scaleY:1,rotation:-59.8,x:4.1,y:11.5},0).wait(1).to({rotation:-44.8,x:4.6,y:13.6},0).wait(1).to({rotation:-37.2,x:4.7,y:14.3},0).wait(1).to({rotation:-29.7,y:15},0).wait(1).to({y:14.7},0).wait(1).to({y:14.5},0).wait(1).wait(1).to({regX:3.3,regY:5.9,rotation:-89.8,x:1.3,y:8.2},0).wait(1).to({regX:2.5,regY:5.4,rotation:-83.8,x:0.9,y:9.4},0).wait(1).to({rotation:-77.8,x:1,y:10},0).wait(1).to({rotation:-71.8,x:1.1,y:10.4},0).wait(1).to({rotation:-65.8,x:1.2,y:11},0).wait(1).to({rotation:-59.8,x:1.3,y:11.5},0).wait(1).to({rotation:-54.8,x:1,y:12},0).wait(1).to({rotation:-49.8,x:0.7,y:12.6},0).wait(1).to({rotation:-44.8,x:0.4,y:13.2},0).wait(1).to({regX:3.3,regY:5.9,rotation:-89.8,x:1.3,y:8.2},0).wait(1).to({regX:2.5,regY:5.4,rotation:-74.8,x:0.7,y:9.3},0).wait(1).to({rotation:-59.8,y:9.6},0).wait(1).to({rotation:-59.7,x:2.6,y:10.1},0).wait(1).to({x:4.6,y:10.6},0).wait(1).to({rotation:-67.2,x:5.5,y:10.4},0).wait(1).to({rotation:-74.7,x:6.2,y:10.3},0).wait(1).to({x:5.6,y:11.1},0).wait(1).to({x:5,y:12},0).wait(1).to({regY:5.3,scaleX:1,scaleY:1,rotation:-14.6,x:3.6,y:16.8},0).wait(1).to({regY:5.4,scaleX:1,scaleY:1,rotation:-14.6,x:3.7},0).wait(1).to({y:16.7},0).wait(1).to({y:16.5},0).wait(1).to({y:16.4},0).wait(1).to({y:16.3},0).wait(1).to({y:16.2},0).wait(1).to({y:16.1},0).wait(1).to({y:16},0).wait(1).to({y:15.8},0).wait(1).to({y:15.7},0).wait(1).to({y:15.6},0).wait(1).wait(1).to({y:15.7},0).wait(1).wait(1).to({y:15.8},0).wait(1).wait(1).to({y:15.9},0).wait(1).wait(1).to({y:16},0).wait(1).wait(1).to({y:16.1},0).wait(3));

	// RLeg L
	this.instance_64 = new lib.leg_lower();
	this.instance_64.setTransform(4.6,24.8,1,1,0,0,0,1.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(1).to({regX:1.9,x:4.7},0).wait(6).wait(1).to({regX:1.8,x:2.1,y:25.3},0).wait(1).to({regX:1.9,rotation:7.5,x:1.1,y:25.6},0).wait(1).to({rotation:15,x:0,y:25.9},0).wait(1).to({rotation:22.4,x:-3.9,y:24.9},0).wait(1).to({rotation:29.8,x:-7.8,y:24.1},0).wait(1).to({rotation:44.9,x:-12.2,y:22.2},0).wait(1).to({rotation:59.9,x:-16.5,y:20.2},0).wait(1).to({rotation:67.4,x:-17.1,y:18.5},0).wait(1).to({rotation:74.9,x:-17.7,y:16.9},0).wait(1).to({rotation:82.5,x:-18.1,y:16.2},0).wait(1).to({rotation:90,x:-18.6,y:15.4},0).wait(1).to({rotation:97.5,x:-18.2,y:15.3},0).wait(1).to({rotation:105,x:-17.7,y:15},0).wait(1).to({x:-15.6,y:17.4},0).wait(1).to({x:-13.5,y:19.7},0).wait(1).to({rotation:89.9,x:-9.9,y:20.4},0).wait(1).to({rotation:74.8,x:-6.3,y:21.2},0).wait(1).to({rotation:59.9,x:-3.5,y:18.5},0).wait(1).to({rotation:44.9,x:-0.7,y:15.9},0).wait(1).to({rotation:37.4,x:0.5,y:15.7},0).wait(1).to({rotation:29.9,x:2,y:15.5},0).wait(1).to({rotation:14.9,x:4.1,y:15.7},0).wait(1).to({rotation:0,x:6.1,y:15.8},0).wait(1).to({rotation:0,x:5.6,y:17.4},0).wait(1).to({x:5,y:19.1},0).wait(1).to({x:3.8,y:21.4},0).wait(1).to({x:2.6,y:23.7},0).wait(1).to({rotation:0,x:2.4,y:24.5},0).wait(1).to({x:2.2,y:25.3},0).wait(1).to({regX:1.8,x:2.1},0).wait(1).to({regX:1.9,x:2.4,y:24.5},0).wait(1).to({rotation:0,x:2.6,y:23.7},0).wait(1).to({x:3.8,y:21.4},0).wait(1).to({x:5,y:19.1},0).wait(1).to({x:5.4,y:18.5},0).wait(1).to({x:5.8,y:17.9},0).wait(1).to({rotation:14.9,x:3.8,y:17.1},0).wait(1).to({rotation:29.9,x:1.7,y:16.2},0).wait(1).to({rotation:37.4,x:0.9,y:16.1},0).wait(1).to({rotation:44.9,x:0.2,y:16},0).wait(1).to({rotation:59.9,x:-2.6,y:18.8},0).wait(1).to({rotation:74.8,x:-5.6,y:21.6},0).wait(1).to({rotation:89.9,x:-9.6,y:20.6},0).wait(1).to({rotation:105,x:-13.5,y:19.7},0).wait(1).to({x:-15.6,y:17.4},0).wait(1).to({x:-17.7,y:15},0).wait(1).to({rotation:97.5,x:-18.2,y:15.3},0).wait(1).to({rotation:90,x:-18.6,y:15.4},0).wait(1).to({rotation:82.5,x:-18.1,y:16.2},0).wait(1).to({rotation:74.9,x:-17.7,y:16.9},0).wait(1).to({rotation:67.4,x:-17.1,y:18.5},0).wait(1).to({rotation:59.9,x:-16.5,y:20.2},0).wait(1).to({rotation:44.9,x:-12.2,y:22.2},0).wait(1).to({rotation:29.8,x:-7.8,y:24.1},0).wait(1).to({rotation:22.4,x:-3.9,y:24.9},0).wait(1).to({rotation:15,x:0,y:25.9},0).wait(1).to({rotation:7.5,x:1.1,y:25.6},0).wait(1).to({rotation:0,x:2.2,y:25.3},0).wait(1).to({regX:0.9,regY:6.2,scaleX:1,scaleY:1,rotation:29.9,x:4.3,y:14.8},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:30,x:4.5,y:14.6},0).wait(1).to({x:3.9,y:13.8},0).wait(1).to({x:4,y:13.7},0).wait(1).to({x:4.1,y:13.6},0).wait(3).wait(1).to({regX:1.8,rotation:0,x:9.1,y:15},0).wait(1).to({regX:1.9,rotation:-7.3,x:10.3,y:17.6},0).wait(1).to({rotation:-14.8,x:11.4,y:20.2},0).wait(1).to({rotation:-11,x:10.6,y:21.6},0).wait(1).to({rotation:-7.2,x:9.9,y:23},0).wait(1).to({rotation:-3.4,y:23.2},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.2},0).wait(1).to({regX:0.9,regY:6.2,scaleX:1,scaleY:1,rotation:29.9,x:3.3,y:13},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:34.5,x:3.7,y:14.3},0).wait(1).to({rotation:39,x:3.3,y:15},0).wait(1).to({rotation:43.4,x:2.9,y:15.6},0).wait(1).to({rotation:47.9,x:2.4,y:16.3},0).wait(1).to({rotation:52.4,x:2,y:17},0).wait(1).to({rotation:54.9,x:1.4,y:17.8},0).wait(1).to({rotation:57.4,x:0.8,y:18.6},0).wait(1).to({rotation:59.9,x:0.2,y:19.4},0).wait(1).to({regX:0.9,regY:6.2,scaleX:1,scaleY:1,rotation:29.9,x:3.3,y:13},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:18.7,x:4.6,y:14.7},0).wait(1).to({rotation:7.5,x:5.1,y:15.8},0).wait(1).to({rotation:-3.6,x:8.3,y:16},0).wait(1).to({rotation:-14.9,x:11.5,y:16.3},0).wait(1).to({rotation:-22.4,x:12.8,y:15.2},0).wait(1).to({rotation:-29.9,x:14.2,y:14.1},0).wait(1).to({rotation:-37.4,x:13.9,y:14.3},0).wait(1).to({rotation:-44.9,x:13.5,y:14.4},0).wait(1).to({regX:2.1,regY:7.8,scaleX:1,scaleY:1,rotation:15.1,x:6.3,y:27.8},0).wait(1).to({regX:1.9,regY:6.3,scaleX:1,scaleY:1,rotation:15.2,x:6.4,y:26.1},0).wait(1).to({y:26},0).wait(1).to({x:6.3,y:25.8},0).wait(1).to({y:25.7},0).wait(1).to({y:25.5},0).wait(1).to({y:25.4},0).wait(1).to({x:6.2,y:25.2},0).wait(1).to({y:25.1},0).wait(1).to({y:24.9},0).wait(1).to({x:6.1,y:24.8},0).wait(1).to({y:24.6},0).wait(1).to({y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25},0).wait(1).to({y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.3},0).wait(1).to({y:25.4},0).wait(1).to({y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.7},0).wait(1).to({y:25.8},0).wait(1).to({y:25.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-30.8,18.4,62);


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
p.nominalBounds = new cjs.Rectangle(-63,-78.2,124.1,108.9);


(lib.mcPlayer_char_old = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{static:0,running:1,jumping:2,falling:3},true);

	// Head
	this.head_1 = new lib.mcPlayer_static_head();
	this.head_1.setTransform(0.2,0.1);

	this.head_2 = new lib.mcPlayer_running_head();
	this.head_2.setTransform(8.9,-6.1,1,1,0,0,0,8.4,-6.3);

	this.head_3 = new lib.mcPlayer_jumping_head();
	this.head_3.setTransform(-1,-10.2,1,1,0,0,0,-0.4,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.head_1}]}).to({state:[{t:this.head_2}]},1).to({state:[{t:this.head_3}]},1).to({state:[{t:this.head_3}]},1).wait(1));

	// Torso
	this.torso_1 = new lib.mcPlayer_static_torso();
	this.torso_1.setTransform(-0.3,-6.3,1,1,0,0,0,-0.6,-6.4);

	this.torso_2 = new lib.mcPlayer_running_torso();
	this.torso_2.setTransform(0.6,3,1,1,0,0,0,0.1,2.9);

	this.instance_65 = new lib.mcPlayer_jumping_body();
	this.instance_65.setTransform(0.1,8.6,1,1,0,0,0,0.5,5.9);

	this.instance_66 = new lib.mcPlayer_falling_body("synched",0);
	this.instance_66.setTransform(0.2,10.7,1,1,0,0,0,0.8,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.torso_1}]}).to({state:[{t:this.torso_2}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).wait(1));

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

	this.instance_67 = new lib.mcPlayer_running();
	this.instance_67.setTransform(-2.7,-0.2,1,1,0,0,0,-3.3,-0.5);
	this.instance_67.alpha = 0;

	this.instance_68 = new lib.mcPlayer_jumping("synched",0);
	this.instance_68.setTransform(-0.1,3,1,1,0,0,0,0.5,-0.2);
	this.instance_68.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ref}]}).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[]},1).wait(1));

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
	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.rf(["#9487B2","#523D83"],[0,1],0,0,0,0,0,118.1).s().p("As2iFQFVg4HhAAQHiAAFVA4QFWA4AABNQAABPlWA4QlVA3niAAQnhAAlVg3QlWg4AAhPQAAhNFWg4IAAAA").cp();
	this.shape_394.setTransform(504.7,219.2);

	// Back
	this.instance_69 = new lib.mcCharScreen_bg("single",0);
	this.instance_69.setTransform(332.2,139.2,1,1,0,0,0,0,-139.1);

	this.addChild(this.instance_69,this.shape_394,this.btnHeadNext,this.btnHeadPrev,this.displayHead,this.text_2,this.btnSave,this.btnCancel,this.displayMain);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,664.3,278.3);


(lib.flcontrolsUIScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_70 = new lib.ScrollBar_thumbIcon();
	this.instance_70.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_71 = new lib.ScrollBar_thumbIcon();
	this.instance_71.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_72 = new lib.ScrollBar_thumbIcon();
	this.instance_72.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_73 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_73.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_74 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_74.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_75 = new lib.ScrollArrowDown_upSkin();
	this.instance_75.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_76 = new lib.ScrollThumb_upSkin();
	this.instance_76.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_77 = new lib.ScrollArrowUp_upSkin();
	this.instance_77.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_78 = new lib.ScrollArrowUp_overSkin();
	this.instance_78.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_79 = new lib.ScrollThumb_overSkin();
	this.instance_79.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_80 = new lib.ScrollArrowDown_overSkin();
	this.instance_80.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_81 = new lib.ScrollThumb_downSkin();
	this.instance_81.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_82 = new lib.ScrollArrowDown_downSkin();
	this.instance_82.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_83 = new lib.ScrollArrowUp_downSkin();
	this.instance_83.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_84 = new lib.ScrollTrack_skin();
	this.instance_84.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_85 = new lib.ScrollTrack_skin();
	this.instance_85.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_86 = new lib.ScrollTrack_skin();
	this.instance_86.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_87 = new lib.ScrollTrack_skin();
	this.instance_87.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_88 = new lib.focusRectSkin();
	this.instance_88.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70}]},1).wait(1));

	// avatar
	this.instance_89 = new lib.Component_avatar();
	this.instance_89.setTransform(7.5,50,0.188,4.545,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_89).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.flcontrolsTextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Assets
	this.instance_90 = new lib.flcontrolsUIScrollBar();
	this.instance_90.setTransform(173.9,230.4,1,1,0,0,0,7.5,50);

	this.instance_91 = new lib.focusRectSkin();
	this.instance_91.setTransform(140.4,136.4,1,1,0,0,0,41.1,11);

	this.instance_92 = new lib.TextArea_upSkin();
	this.instance_92.setTransform(105.4,44,1,1,0,0,0,76,11);

	this.instance_93 = new lib.TextArea_disabledSkin();
	this.instance_93.setTransform(105.4,91.5,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90}]},1).wait(1));

	// avatar
	this.instance_94 = new lib.Component_avatar();
	this.instance_94.setTransform(50,22,1.25,2,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_94).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,44);


(lib.flcontrolsList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_95 = new lib.flcontrolsScrollBar();
	this.instance_95.setTransform(166.5,183.6,1,1,0,0,0,7.5,50.3);

	this.instance_96 = new lib.focusRectSkin();
	this.instance_96.setTransform(136.1,322.3,1,1,0,0,0,41.1,11);

	this.instance_97 = new lib.flcontrolslistClassesCellRenderer();
	this.instance_97.setTransform(101,277.3,1,1,0,0,0,76,11);

	this.instance_98 = new lib.List_skin();
	this.instance_98.setTransform(121,67.6,0.39,0.39,0,0,0,136,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95}]},1).wait(1));

	// avatar
	this.instance_99 = new lib.Component_avatar();
	this.instance_99.setTransform(62.6,50,1.25,4.545,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_99).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,100);


(lib.giftedclientworldUi = function() {
	this.initialize();

	// Border
	this.instance_100 = new lib.Border();
	this.instance_100.setTransform(1269,180.1,0.569,0.494,0,0,0,744,405.1);
	this.instance_100.cache(-1,-1,1492,814);

	this.instance_101 = new lib.Border();
	this.instance_101.setTransform(-422.7,181,0.569,0.494,0,0,0,744,405.1);
	this.instance_101.cache(-1,-1,1492,814);

	this.instance_102 = new lib.Border();
	this.instance_102.setTransform(423,540.1,0.606,0.444,0,0,0,744,405.1);
	this.instance_102.cache(-1,-1,1492,814);

	this.instance_103 = new lib.Border();
	this.instance_103.setTransform(422.5,-179.7,0.606,0.445,0,180,0,744,405.1);
	this.instance_103.cache(-1,-1,1492,814);

	// UI
	this.indAdminTile = new lib.giftedclienttiles();
	this.indAdminTile.setTransform(776,287);

	this.btnLobby = new lib.flcontrolsButton();
	this.btnLobby.setTransform(780,25.4,1,1,0,0,0,50,11);

	this.txtMsg = new lib.flcontrolsTextInput();
	this.txtMsg.setTransform(179.8,349,3.589,1,0,0,0,50,11);
	this.txtMsg.alpha = 0.801;

	this.txtChat = new lib.flcontrolsTextArea();
	this.txtChat.setTransform(179.9,267.6,3.591,3.228,0,0,0,50,21.9);
	this.txtChat.alpha = 0.602;

	this.addChild(this.txtChat,this.txtMsg,this.btnLobby,this.indAdminTile,this.instance_103,this.instance_102,this.instance_101,this.instance_100);
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
	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#7964AC","#5A4392"],[0,1],-402.5,295.2,-402.7,-68.7).ls(["#3F2F59","#2F234B"],[0,1],181.2,-138.1,-181.1,138.2).ss(6,1,1).p("EA95gasMh7wAAAQjMAAAACbMAAAAwjQAACbDMAAMB7wAAAQDLAAAAibMAAAgwjQAAibjLAAIAAAA").cp();
	this.shape_395.setTransform(420,177);

	this.addChild(this.shape_395,this.lblLobby,this.lblVer,this.txtConsole,this.txtMsg_1,this.btnSend,this.lstUsers,this.btnJoin,this.btnChar,this.btnLogout);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.5,6,1086,342);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;