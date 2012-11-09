var config = require('./Config')
var mysql = require('mysql');
var connection = mysql.createConnection(config.db);
module.exports = connection;
