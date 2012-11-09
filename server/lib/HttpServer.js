var fs = require('fs');
var http = require('http');
var mime = require('mime');
var config = require('./Config');
var helpers = require('./Helpers');
var User = require('./User');
var users = require('./Users');
var empty = helpers.empty;
var href = helpers.href;
var php = helpers.php;
var readFile = helpers.readFile;

// Simple http server that responds with server information and client files

var server = http.createServer(function(request, response) { // One day this will server the game client
    console.log('Requested: ' + request.url);
    var req = request.url.split("/");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req[1]){ // req[0] always empty?
        case "users":
            var resp = {};
            for(var i in users) // Synchronous because I'm truly lazy
                if(users[i] instanceof User)
                    resp[i] = {name:users[i].name,socketType:users[i].socketType}
            resp = JSON.stringify(resp);
            response.end(resp);
            break;
        case "env":
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(config));
            break;
        case "php":
        	php("-v",function(out){
        		response.end(out);
        	});
        	break;
        case "port":
        	response.end(config.listenPort.toString());
        	break;
        case "client":
            if(req[2]!=undefined){
                if(!empty(req[2])){ // if this is a client resource being requested
                    try{
                        response.writeHead(200, {'Content-Type': mime.lookup(req[2])});
                        if(request.url.substr(-4)==".php"){
                        	response.writeHead(200, {'Content-Type': 'text/html'});
                        	console.log(req[2]);
                        	php(req[2],function(out){
                        		response.end(out);
                        	},true);
                        }else{
                        	readFile(req[2], function(data){
                        		response.end(data);
                        	},true);
                        }
                    }catch(e){
                        response.writeHead(404); response.end();
                    }
                }else{
                    try{
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        //var clientHtml = fs.readFileSync(config.basePath+'index.php', 'utf-8'); // no php execution obv
                        if(!config.live){
	                        php(config.clientPath,function(out){
	                        	response.end(out);
	                        },false);
                        }else{
                        	response.writeHead(301,{'Location':config.connectUrl});
                        	response.end("Redirecting to live client");
                        }
                    }catch(e){
                        response.writeHead(404, {'Content-Type': 'text/html'});
                        response.end("Sorry, we couldn't find the client.<br/>"+e);
                    }
                }
            }else{
            	response.writeHead(301,{'Location':'/client/'}); 
                response.end(); // Add a trailing slash if a request is made without one
            }
            break;
        case "favicon.ico":
            try{
                response.writeHead(200, {'Content-Type': 'image/x-icon'});
                fs.readFileSync(config.basePath+'favicon.ico',function(e,ico){
                	response.end(ico);
                });
            }catch(e){
                response.writeHead(404);
                response.end();
            }
            break;
        default:
        	response.writeHead(200, {'Content-type':'text/html'});
            response.end("Welcome. If you'd like to connect, please visit " + href(config.connectUrl));
            break;
    }
});
server.start = function(port){
    if(!port){port=8080};
    server.listen(port, function(){
        console.log("HTTP listening on " + port);
    });
}

module.exports = server;