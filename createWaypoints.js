//~ STREAMS
var fs = require('fs');

// read shape file to add waypoints
fs.readFile('output.txt', 'utf-8', function(err, data){
	if (err) throw err;
				
	var routes = JSON.parse(data);
	// find route with matching shape_id
	for (var i = 0; i < routes.length; i++){
		var route = routes[i];
		
	}			
})
