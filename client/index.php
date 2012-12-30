<?php include('env.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CreateJS Test Client</title>
		<link rel="stylesheet" type="text/css" href="layout.css"/>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script data-main="js/gifted.js" src="js/require.js"></script>
	</head>
	<body>
		<div id="wrap">
			<div id="client">
				<div id="worldList" class="screen">
					<h2>Choose a world</h2>
				</div>
				<div id="lobby" class="screen">
					<input id="headwear_prev" class="outfit" type="button" value="<"/>
					<input id="headwear_next" class="outfit" type="button" value=">"/>
					<div id="chat">
						<div id="chat_top">
							<input id="play" type="button" value="Play">
							<input id="leave" type="button" value="Leave">
						</div>
						<textarea id="buffer" readonly></textarea><br/>
						<input id="msg" type="text" value=""/> <input id="send" type="button" value="Send"/>
					</div>
				</div>
				<div id="world" class="screen">
					
				</div>
				<canvas id="canvas" width="846" height="360"></canvas>
			</div>
		</div>
	</body>
</html>