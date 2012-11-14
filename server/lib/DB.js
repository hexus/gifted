var config = require('./Config')
var mysql = require('mysql');
var db = {
	//connected:false
}; 
db.connection = c = mysql.createConnection(config.db);
module.exports = db;

db.init = function(listen){
    db.connection.connect(function(err){
        if(err){
            console.log("Database Connection " + err);
        }else{
			db.test(function(exists){
			    if(!exists){
			    	console.log('Creating database ' + config.db.database);
			        db.create(function(){
			        	listen();
			        });
			    }else{
			    	db.connection.query('USE ' + config.db.database,function(err,result){
			    		listen();
			    	});
			    }
			});
        }
    });
}

db.test = function(callback){
    c.query("USE "+config.db.database,function(err,rows){
        callback(!err);
    });
}

db.create = function(callback){
    c.query(config.db.sql,function(err,result){
        if(err){
        	console.log("Database Creation " + err);
        }
        console.log(config.db.database + 'created');
        callback();
    });
}
