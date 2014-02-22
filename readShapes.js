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
	
	// add all corresponding points
	for(var j = 0; j < lines.length; j++){
		
		var shape = lines[j].split(',');
		if(shape_ids.indexOf(shape[0])){
			
		}
			if(shape[0] === shape_ids[i]){
				listOfPoints.push({
					lat:shape[1],
					lon:shape[2]
				});
				console.log(listOfPoints);
			}
	}
	
	waypoints = JSON.stringify(waypoints, null, 4);	// make array pretty
			
	fs.writeFile('output2.txt', waypoints, function(err){
		if (err) throw err;
		console.log('Wrote a route on output2.txt');
	});
});
