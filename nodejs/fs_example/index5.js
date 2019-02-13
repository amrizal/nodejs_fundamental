console.log ("Watching for Directory Changes");

var fs = require ('fs');

//'persistent' means continuously watch this directory
fs.watch ("DirectoryA", {persistent:true}, function (event, filename){
	if (event == "rename"){
		console.log ("rename event in directory: " + filename);
	}
	else if (event == "change"){
		console.log ("change event in directory: " + filename);
	}
});