console.log ("Accessing MongoDb with Mongoose");

var mongoose = require ('mongoose');

mongoose.connect ('mongodb://localhost:27017/myNodeJsDb');

var db = mongoose.connection;

db.on ('error', console.error.bind (console, 'connection error'));

db.once ('open', function (){
	console.log ("Connected to database");
	
	var foodGroupSchema = mongoose.Schema ({
		name: String,
		description: String
	});
	
	var FoodGroup = mongoose.model ('FoodGroup', foodGroupSchema);
	
	FoodGroup.find ({}, function (err, foodgroups){
		if (err){
			return console.error (err);
		}
		
		console.log (foodgroups);
	});
	
	var randomObject = new FoodGroup ({
		name: "RandomObject",
		description: "Hi! I'm a random fake food group"
	});
	
	randomObject.save (function (err, foodgroups){
		if (err){
			return console.error (err);
		}
		
		console.log ("foodgroup saved");
	});
});