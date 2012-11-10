var config = require('./Config')
var mysql = require('mysql');
var db = {}; 
db.connection = c = mysql.createConnection(config.db);
module.exports = db;

db.connect = function(){
    db.connection.connect(function(err){
        if(err){
            console.log("Database " + err);
        }
    });
}

db.create = function(callback){
    c.query(config.db.sql,function(err,result){
        console.log(err);
        console.log(result);
        callback();
    });
}

db.testDatabase = function(callback){
    c.query("USE "+config.db.database,function(err,rows){
        callback(!err);
    });
}
