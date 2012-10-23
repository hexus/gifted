var fs = require('fs');
var http = require('http');
var mime = require('mime');
var config = require('./Config');
var helpers = require('./Helpers');
var empty = helpers.empty;

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
        case "client":
            if(req[2]!=undefined){
                if(!empty(req[2])){ // if this is a client resource being requested
                    try{
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        var fileHtml = fs.readFileSync(config.basePath+req[2], 'utf-8'); // no php execution obv
                        response.end(fileHtml);
                    }catch(e){
                        response.writeHead(404); response.end();
                    }
                }else{
                    try{
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        var clientHtml = fs.readFileSync(config.basePath+'index.php', 'utf-8'); // no php execution obv
                        response.end(clientHtml);
                    }catch(e){
                        response.writeHead(404, {'Content-Type': 'text/html'});
                        response.end("404: Sorry, we couldn't find the client.<br/>"+e);
                    }                
                }
            }else{
                response.end("Add a slash to the end your request! Like this: /client/\nThank you :)");
            }
            break;
        case "favicon.ico":
            try{
                response.writeHead(200, {'Content-Type': 'image/x-icon'});
                var ico = fs.readFileSync(config.basePath+'favicon.ico');
                response.end(ico)
            }catch(e){
                response.writeHead(404);
                response.end();
            }
            break;
        default:
            response.end("Welcome. If you'd like to connect, please use " + config.connectUrl);
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