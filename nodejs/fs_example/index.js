console.log ("Navigating Directories");

var fs = require ('fs');

fs.readdir ('DirectoryA', function (err, files) {
	if (err){
		console.log (err);
	}
	else {
		console.log ("--- Directory Listing ---");
		
		files.forEach (function (file){
			var filePath = 'DirectoryA/' + file;
			
			fs.stat (filePath, function (error, stats){
				if (error){
					console.log (error);
				}
				else if (stats){
					if (stats.isFile ()){
						console.log (file + " is a file");
					}
					else if (stats.isDirectory ()){
						console.log (file + " is a directory");
					}
				}
			});
		});
	}
});

//blocking call
var contentsSync = fs.readdirSync ('DirectoryA');
console.log (contentsSync);