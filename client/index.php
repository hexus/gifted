<?php include('env.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>CreateJS Test Client</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script data-main="js/gifted.js" src="js/require.js"></script>
	
	<!--
	<script src="http://code.jquery.com/jquery-1.8.2.js"></script>
	<script src="http://code.createjs.com/easeljs-0.5.0.min.js"></script>
	<script src="http://code.createjs.com/tweenjs-0.3.0.min.js"></script>
	<script src="http://code.createjs.com/movieclip-0.5.0.min.js"></script>
	<script src="http://code.createjs.com/preloadjs-0.2.0.min.js"></script>
	<script src="<?=$url?>/socket.io/socket.io.js"></script>
	<script src="assets.js"></script>
	<script src="gifted.js"></script>
	<!-- -->
</head>

<body>
	<div id="wrap">
		<div id="client">
			<div id="worldList">
				<h2>Worlds:</h2>
			</div>
			<div id="lobby">
				<input id="headwear_prev" type="button" value="<"/>
				<input id="headwear_next" type="button" value=">"/>
				<div id="chat">
					<textarea id="buffer" readonly></textarea><br/>
					<input id="msg" type="text" value=""/> <input id="send" type="button" value="Send"/>
				</div>
			</div>
			<div id="world">
				
			</div>
			<canvas id="canvas" width="846" height="360"></canvas>
		</div>
	</div>
</body>
</html>