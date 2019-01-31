console.log ("Connecting to A PostGreSQL server");

var pg = require ('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'myNodeJsDb',
  password: 'password',
  port: 5432,
};

//Using direct connection
var client = new pg.Client(config);

client.connect (function (err){
	if (err){
		return console.log ("error connecting", err);
	}
	
	client.query ("INSERT INTO foodgroups (name, description) VALUES ('test group', 'test description')", function (err, result){
			if (err){
				return console.error ("There was an error inserting the row", err);
			}
			
			console.log (result);
			client.end();
	});
});

//Using pooled connection
const pool = new pg.Pool(config);

pool.connect(function (err, client, done){
	if (err){
		return console.log ("error getting a client from pool", err);
	}
	
	client.query ("SELECT * FROM foodgroups", function (err, result){
		done();//release client connection back to the pool
		
		if (err){
			return console.error ("There was an error running the query", err);
		}
		
		console.log (result.rows);
	});
});

