// for local testing
var net = require('net');

var socket = net.createConnection(12345,"gifted-hex72.dotcloud.com");
socket.on("connect",function(){
	console.log("Motherfucking connected!");
	this.on("data",function(data){
		console.log(data.toString());
	});
});