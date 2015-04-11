var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'us-cdbr-azure-southcentral-e.cloudapp.net',
   user: 'b9c638fb27f6cd',
   password: '29c42091',
   database: 'ennimaTestDB1',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
connection.end();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
