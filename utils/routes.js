var fs = require('fs');

var writeStream = fs.createWriteStream('routes.json');

fs.readFile('data/routes.txt', function(err, file){
	if(err) throw err;
	
	var json = {},
	prettyJSON;
	
	var lines = file.toString().split('\n');
	
	for(i in lines){
		var line = lines[i].split(',');
		
		json[line[0]] = {
			'short_name': line[2],
			'long_name': line[3],
			'description': line[4],
		};
	}
	
	prettyJSON = JSON.stringify(json, undefined, 2);
	
	// write string to file
	writeStream.write(prettyJSON);
});
