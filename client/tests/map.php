<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
			.row{line-height:1px;white-space:nowrap}
			.map{display:inline-block;}
			.tilerow{height:3px;}
			.t,.e{display:inline-block;height:1px;width:1px;padding:1px;margin:0;}
			.t{background-color:#333;}
			.e{background-color:#CCC;}
		</style>
	</head>
	<body>
		<?php 
			echo file_get_contents('http://localhost:8080/map');
		?>
	</body>
</html>
