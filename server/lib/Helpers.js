var config = require('./Config');
var fs = require('fs');
var exec = require('child_process').exec;
var h = {};
module.exports = h;

// Helper functions
var chr = h.chr = function(n){return String.fromCharCode(n);}
var empty = h.empty = function(o){return o=="" || o==0 || o==undefined || o=={};}
var href = h.href = function(href){return "<a href=\"" + href + "\">" + href + "</a>";}

// Execute a PHP command and asynchronously return the output
h.php = function(file,callback,base){
    if(base!=false){base=true;}
    exec("php "+((base)?config.basePath:'')+file,{maxBuffer:4096*1024},function(e,out,eout){
        if(!empty(out)){
            if(typeof callback == "function"){
                callback(out);
            }
        }else{
            h.readFile(file,callback,base);
        }
    });
}

// Read a client file and asynchronously return the contents 
h.readFile = function(file,callback,base){
    if(base!=true){base=false;}
    if(typeof callback == 'function'){
        fs.readFile(((base)?config.basePath:'')+file,'utf-8',function(e,data){
            if(!e){
                callback(data);
            }else{
                callback(JSON.stringify(e));
            }
        });
    }
}

h.readStream = function(url,base){
    if(base!=true){base=false;}
    return fs.createReadStream(((base)?config.basePath:'')+url);
}

// Synchronously read a file
h.readFileSync = function(file,base){
    if(base!=false){base=false;}
    return fs.readFileSync(((base)?config.basePath:'')+file,'utf-8');
}

// Synchronously parse JSON from a file
h.readJsonSync = function(file,base){
    return JSON.parse(h.readFileSync(file,base));
}
