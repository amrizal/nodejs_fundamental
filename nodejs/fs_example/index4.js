console.log ("Writing files");

var fs = require ('fs');

var data = "This is a string I am writing to a file";

var data2 = "A second string";

fs.writeFile ("DirectoryA/myTestFile.txt", data, function (err){
	if (err){
		console.log (err);
	}
	else {
		console.log ("Data saved to file");
	}
});

var data3 = "Some data I'm appending";

fs.appendFile ("DirectoryA/myTestFile.txt", data3, function (err){
	if (err){
		console.log (err);
	}
	else {
		console.log ("Data appended to file");
	}
});