var fs = require('fs');
var http = require('http');
var mime = require('mime');
var zlib = require('zlib');
var config = require('./Config');
var global = require('./Global');
var helpers = h = require('./Helpers');
var Room = require('./Room');
var Map = require('./shared/Map');
var User = require('./User');
var rooms = global.rooms;
var users = global.users;
var empty = helpers.empty;
var href = helpers.href;
var php = helpers.php;
var readFile = helpers.readFile;
var readStream = helpers.readStream;

// Simple http server that responds with server information and client files

var server = http.createServer(function(request, response) { // One day this will server the game client
    console.log('Requested: ' + request.url);
    var req = request.url.split("/");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req[1]){ // req[0] always empty?
        case "users":
            var resp = {};
            for(var i in users.get()){ // Synchronous because I'm truly lazy
                if(users.get(i) instanceof User){
                	var u = users.get(i);
                	var r = (u.room instanceof Room) ? u.room.name : '';
                    resp[i] = {name:u.name,socketType:u.socketType,room:r,inLobby:u.inLobby}
                }
            }
            resp = JSON.stringify(resp);
            response.end(resp);
            break;
        case "rooms":
        	response.end(rooms.list());
        	break;
        case "global":
        	response.end(JSON.stringify(global));
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
        case "map":
        	response.writeHead(200,{'Content-Type':'text/plain'});
        	var r = rooms.get();
        	var resp = {};
        	for(i in r){
        		var m = r[i].map;
        		resp[i] = {
        			name: m.name,
        			width: m.getWorldSize().width * m.getRegionSize().width,
        			height: m.getWorldSize().height * m.getRegionSize().height,
        			spawn: {
        				x: m.getSpawn().x,
        				y: m.getSpawn().y
        			},
        			flat: m.flatLinear()
        		}
        	}
        	response.end(JSON.stringify(resp));
        	break;
        case "socket":
            response.end(config.socketUrl);
            break;
        case "port":
        	response.end(config.listenPort.toString());
        	break;
        case "client":
            if(req[2]!=undefined){
                if(!empty(req[2])){ // if this is a client resource being requested
                    var url = request.url.substr(1);
                    var type = mime.lookup(req[req.length-1]);
                    var acceptEncoding = request.headers['accept-encoding'] || '';
                    
                    if(req[3]=='shared'){ // shared module request
                        url = 'server/lib/shared/'+req[req.length-1];
                    }
                    
                    try{
                        if(acceptEncoding.match(/\bgzip\b/)){
                            response.writeHead(200, { 'Content-Type': type, 'Content-Encoding': 'gzip' });
                            var file = readStream(url,true);
                            file.on('open',function(){ // if found, stream
                                file.pipe(zlib.createGzip()).pipe(response);    
                            });
                            file.on('error',function(err){ // otherwise 404
                                response.writeHead(404);
                                response.end();
                            });
                        }else{
                            response.writeHead(200, {'Content-Type': type});
                            readFile(url,function(data){
                                response.end(data);
                            },true);
                        }
                    }catch(e){
                        response.writeHead(404); 
                        response.end();
                    }
                }else{
                    try{
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        readFile(config.clientPath,function(out){
                        	response.end(out);
                        },false);
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
                fs.readFile(config.basePath+'client/favicon.ico',function(e,ico){
                	response.end(ico);
                });
            }catch(e){
                response.writeHead(404);
                response.end();
            }
            break;
        default:
        	response.writeHead(200, {'Content-type':'text/html'});
            response.end("Welcome. If you'd like to connect, please visit " + href(config.clientUrl));
            break;
    }
});

server.start = function(port){
    port = port || config.httpPort;
    server.listen(config.httpPort, function(){
        console.log("HTTP listening on " + port);
    });
}

server.handleRequest = function(){
    
}

module.exports = server;