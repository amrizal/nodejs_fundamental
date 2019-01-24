var connect = require('connect');

var app = connect()
	.use(function(req, res){
		if (req.url == "/hello"){
			console.log("sending plain");
			res.end("Hello from app");
		}
		else if (req.url == "/printRequestHeaders"){
			var headers = req.headers;
			console.log("echoing headers");
			console.log(headers);
			res.end("Headers printed in console");
		}
		else{
			res.end("Nothing else matched");
		}
	})
	.listen(3456);

console.log("Listening to port 3456");