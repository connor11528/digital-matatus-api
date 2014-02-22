var fs = require('fs');

fs.readFile('data/shapes.txt', 'utf-8', function(err, data){
	if (err) throw err;
	var lines = data.toString().split('\n');
	var shape_ids = [];
	
	// get all shape_ids
	for(var j = 0; j < lines.length; j++){
		var shape = lines[j].split(',');
		if (shape_ids.indexOf(shape[0]) > -1){
			
		} else {
			shape_ids.push(shape[0]);
		}
	}
	
	console.log(shape_ids);
	
	// add all corresponding points
	for(var i = 0; i < shape_ids.length; i++){
		var shape_id = shape_ids[i];
		
		
		for(var j = 0; j < lines.length; j++){
			var line = lines[j].split(',');
			var waypoints = [];
			if(shape_id === line[0]){
				waypoints.push(line[0]);
				waypoints = JSON.stringify(waypoints, null, 4);	// make array pretty
			
				fs.writeFile('output2.txt', waypoints, function(err){
					if (err) throw err;
					console.log('Wrote a route on output2.txt');
				});
			}
		}
	}
});

function Shape(shape_id){
	this.shape_id = shape_id;
	this.waypoints = [];
}









