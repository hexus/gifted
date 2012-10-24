<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>CreateJS Test Client</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script src="http://code.jquery.com/jquery-1.8.2.js"></script>
	<script src="http://code.createjs.com/easeljs-0.5.0.min.js"></script>
	<script src="http://code.createjs.com/tweenjs-0.3.0.min.js"></script>
	<script src="http://code.createjs.com/movieclip-0.5.0.min.js"></script>
	<script src="http://code.createjs.com/preloadjs-0.2.0.min.js"></script>
	<script src="http://localhost:7001/socket.io/socket.io.js"></script>
	<script src="assets.js"></script>
	<script src="gifted.js"></script>
<script>
var canvas, stage, socket, player, dom, aspect=2.35;

function init() {
	canvas = document.getElementById("canvas");
	
	player = new Player();
	player.x = 90;
	player.y = 180;
	player.scaleX = player.scaleY = 3;

	player.onClick = function(){
		player.char.gotoAndPlay("running");
	};
	
	dom = {};
	dom.head_prev = new createjs.DOMElement($("#char_head_prev")[0]);
	dom.head_next = new createjs.DOMElement($("#char_head_next")[0]);
	dom.head_prev.regX = dom.head_prev.regY = 0;
	dom.head_prev.x = 20;
	dom.head_prev.y = 80;
	dom.head_next.x = 140;
	dom.head_next.y = 80;
	
	dom.chat = new createjs.DOMElement($('#chat')[0]);
	dom.chat.regX = parseInt($('#chat').css('width'),10);
	dom.chat.x = canvas.width-20; // Right aligned
	dom.chat.regY = parseInt($('#chat').css('height'),10)/2;
	dom.chat.y = canvas.height/2;
	
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
	
	stage = new createjs.Stage(canvas);
	stage.addChild(player);
	stage.addChild(dom.head_prev);
	stage.addChild(dom.head_next);
	stage.addChild(dom.chat);
	
	createjs.Ticker.setFPS(32);
	createjs.Ticker.addListener(stage);
	
	socket = io.connect('http://localhost:7001');
	
	socket.on('connect',function(){
		console.log("Socket.io connected fine!");
		socket.send('/login-pls');
		socket.on('message',function(data){
			console.log("Socket.io data: " + data);
		});
	});
	
	// unhide client div
}

/* * / // I doubt this will be useful in the end, too ugly-looking. Will just offer full screen or default res centred.
$(window).resize(function(){
	canvas.width = window.innerWidth;
	canvas.height = (canvas.width) / aspect; 
	stage.scaleX = stage.scaleY = canvas.width/846;
});
/* */

$(document).ready(function(){
	init();
	//$(window).resize();
});
</script>
</head>

<body>
	<div id="wrap">
		<div id="client">
			<input id="char_head_prev" type="button" value="<"/>
			<input id="char_head_next" type="button" value=">"/>
			<div id="chat">
				<textarea id="buffer" readonly>Swag swag swag.</textarea><br/>
				<input id="msg" type="text" value="Swag."/> <input id="send" type="button" value="Send"/>
			</div>
			<canvas id="canvas" width="846" height="360"></canvas>
		</div>
	</div>
</body>
</html>