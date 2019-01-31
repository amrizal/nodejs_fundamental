console.log ("Accessing MongoDB with MongoSkin");

var mongo = require ('mongoskin');
var _ = require ('underscore');

var db = mongo.db ('mongodb://localhost:27017/myNodeJsDb');

db.collection ('foodgroups').find ().toArray (function (err, result){
	if (err){
		throw err;
	}
	
	_.each (result, function (doc){
		console.log (doc._id, doc.name, doc.description);
	});
});

db.collection ('foodgroups').insert ({name:'randomMongoskin', description:"Hi I'm a random Mongoskin"}, function (err, result){
	if (err){
		throw err;
	}
	
	console.log ("document inserted");
});