var express = require('express');
var router = express.Router();
var mysql = require('mysql');


function addUser(id, user, email){
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
	
	var query = connection.query('INSERT INTO usuarios(idusuarios, name, email) VALUES(?, ?, ?)', [id, user, email], function(error, result){
	   if(error){
	      throw error;
	   }else{
	      console.log(result);
	   }
	 }
	);
	connection.end();
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new',function(req,res,next){
	console.log(req);
	if(req.query.us!=null){
		console.log("chingon");
		if(req.query.em!=null)
		{
			if(req.query.id!=null)
			{
				console.log("agrega");
				addUser(req.query.id, req.query.us, req.query.em);
			}
			
		}
	}
	res.send('cool');
});
module.exports = router;
