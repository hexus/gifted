<?php
	try{ // Check for dotCloud environment
		$env = file_get_contents("/home/dotcloud/environment.json");
	}catch(Exception $e){} // Handled below
	
	if(empty($env)){ // Local
		$env = $_ENV;
		$port = 7001;
		$url = "http://localhost:".$port;
	}else{ // dotCloud
		$env = json_decode($env, true);
		$port = $env['PORT_GAME2'];
		$url = "http://".$env['DOTCLOUD_SERVER_GAME2_HOST'].":".$port;
	}
?>	