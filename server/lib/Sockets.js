var net = require('net');
var io = require('socket.io');

var handleData = require('./Handlers').handleData;
var empty = require('./Helpers').empty;
var User = require('./User');
var users = require('./Users');
var count = users.count;

var servers = {tcp:{},io:{}};

// Set up the TCP server
servers.tcp.start = function(tcpPort){
    if(!tcpPort){tcpPort=7000;}

    // Set up event listeners
    var tcp = net.createServer(function(socket){
        socket.setEncoding('utf8');
        socket.setKeepAlive(true,10000);
        var local = {}; // Local scope socket info (retains for close event when socket no longer exists)
        local.remoteAddress = socket.remoteAddress;
        var user = {};
        user = new User(++count,'guest'+count,socket);
        users[count] = user;
        
        socket.addListener('connect',function(){
            console.log("TCP client connected from " + local.remoteAddress);
        });
        socket.addListener('data',function(data){
            // console.log(data); // Print raw data
            data = data.split("\0");
            for(var i=0;i<data.length;i++){
                var datum = data[i].replace(/\0/g,"");
                if(!empty(datum)){
                    handleData.call(user,datum);
                }
            }
        });
        socket.addListener('close',function(e){
            delete(users[user.id]);
            users.send("/ud " + user.id);
            console.log("TCP client disconnected from " + local.remoteAddress);
            if(e){console.log(", transmission error");}
        });
        
    });
    
    // Start listening for connections
    tcp.listen(tcpPort, function(){
        console.log("TCP listening on " + tcpPort);
    });
    
    // Export
    servers.tcp = tcp;
}

// Set up the Socket.io server
servers.io.start = function(ioPort){
    if(!ioPort){ioPort=7001;}
    
    // Start listening for connections
    io = io.listen(ioPort,{log:false},function(){
        console.log("Socket.io listening on " + ioPort);
    });
    
    // Set up event listeners
    io.sockets.on('connection',function(socket){
        var user = {};
        user = new User(++count,"guest"+count,socket,"Socket.io");
        users[count] = user;
        
        socket.on('connect',function(){
            console.log("Socket.io client connected");    
        });
        socket.on('message',function(data){
            handleData.call(user,data);
        });
        socket.on('disconnect',function(){
            delete(users[user.id]);
            users.send(user.id);
            console.log("Socket.io client disconnected");
        });
    });
    
    // Export
    servers.io = io;
}

module.exports = servers;