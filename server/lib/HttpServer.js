var fs = require('fs');
var http = require('http');
var mime = require('mime');
var config = require('./Config');
var helpers = require('./Helpers');
var empty = helpers.empty;
var href = helpers.href;
var exec = require('child_process').exec;

// Execute a client PHP script and asynchronously return the output
function php(file,callback,base){
	if(base!=false){base=true;}
	exec("php "+((base)?config.basePath:'')+file,function(e,out,eout){
		console.log(e + out + eout);
		if(typeof callback == "function"){
			callback(out);
		}
	});
}

// Read a client file and asynchronously return the contents 
function readFile(file,callback,base){
	if(base!=false){base=true;}
		if(typeof callback == 'function'){
			fs.readFile(((base)?config.basePath:'')+file,'utf-8',function(e,data){
			if(!e){
				callback(data);
			}else{
				callback("404");
			}
		});
	}
}

// Simple http server that responds with server information and client files

var server = http.createServer(function(request, response) { // One day this will server the game client
    console.log('Received request for ' + request.url);
    var req = request.url.split("/");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req[1]){ // req[0] always empty?
        case "users":
            var resp = {};
            for(var i in users)
                if(users[i] instanceof User)
                    resp[i] = {id:i,name:users[i].name}
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
        	},false);
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
                        	php(req[2],function(out){
                        		response.end(out);
                        	});
                        }else{
                        	readFile(req[2], function(data){
                        		response.end(data);
                        	});
                        }
                    }catch(e){
                        response.writeHead(404); response.end();
                    }
                }else{
                    try{
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        //var clientHtml = fs.readFileSync(config.basePath+'index.php', 'utf-8'); // no php execution obv
                        php(config.clientPath,function(out){
                        	response.end(out);
                        },false);
                    }catch(e){
                        response.writeHead(404, {'Content-Type': 'text/html'});
                        response.end("404: Sorry, we couldn't find the client.<br/>"+e);
                    }                
                }
            }else{
            	// response.writeHead(300,{'Location':''}); // todo
                response.end("Add a slash to the end your request! Like this: /client/\nThank you :)");
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