var request = require('request');
var fs = require('fs');

var data = {
	 userFirstName :"John"
	,userLastName :"Doe"
	,myBuffer: new Buffer.alloc(1)//buffer for passing file data
	,myFile: fs.createReadStream (__dirname + '/images/spinach.jpg')//read stream containing file data to pass
}

//request.post ('http://localhost:3456').form (data);

//request.post ('http://localhost:3456', {form:data});

var callback = function (error, response, body){
	if (error)
		console.log(error);
	else
		console.log(body);
}

//request.post ('http://localhost:3456', {form:data}, callback);

request.post ('http://localhost:3456', {formData:data}, function optionalCallback (err, response, body){
	if (err){
		return console.error ('oops, therer was a problem uploading');
	}
	console.log ('File uploaded to server');
});