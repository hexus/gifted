<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CreateJS Test Client</title>

<script src="http://code.jquery.com/jquery-1.8.2.js"></script>
<script src="http://code.createjs.com/easeljs-0.5.0.min.js"></script>
<script src="http://code.createjs.com/tweenjs-0.3.0.min.js"></script>
<script src="http://code.createjs.com/movieclip-0.5.0.min.js"></script>
<script src="http://code.createjs.com/preloadjs-0.2.0.min.js"></script>
<script src="assets.js"></script>
<script src="gifted.js"></script>

<script>
var canvas, stage;

function init() {
	canvas = document.getElementById("canvas");
	
	var player = new Player();
	player.x = 90
	player.y = 180;
	stage = new createjs.Stage(canvas);
	stage.addChild(player);
	
	stage.onClick = function(){
		player.gotoAndPlay("running");
	};
	
	var dom = {};
	dom.head_prev = new createjs.DOMElement($("#char_head_prev")[0]);
	dom.head_next = new createjs.DOMElement($("#char_head_next")[0]);
	dom.head_prev.regX = 0;
	dom.head_prev.regY = 0;
	dom.head_prev.x = 20;
	dom.head_prev.y = 60;
	dom.head_next.x = 140;
	dom.head_next.y = 60;
	
	stage.addChild(dom.head_prev);
	stage.addChild(dom.head_next);
	
	createjs.Ticker.setFPS(32);
	createjs.Ticker.addListener(stage);
	
	dom.head_frame = 0;
	
	$("#char_head_prev").click(function(){
		if(dom.head_frame>0){
			dom.head_frame--;
		}else{
			dom.head_frame = player.char.head.wear.timeline.duration-1;
		}
		player.char.head.wear.gotoAndStop(dom.head_frame);
	});
	
	$("#char_head_next").click(function(){
		if(dom.head_frame<player.char.head.wear.timeline.duration-1){
			dom.head_frame++;
		}else{
			dom.head_frame = 0;
		}
		player.char.head.wear.gotoAndStop(dom.head_frame);
	});
	
	// unhide client div
}

$(document).ready(init);
</script>
</head>

<body onload="init();" style="background-color:#D4D4D4">
	<div id="client">
		<input id="char_head_prev" type="button" value="<"/>
		<input id="char_head_next" type="button" value=">"/>
		<canvas id="canvas" width="846" height="360" style="background-color:#666666"></canvas>
	</div>
</body>
</html>