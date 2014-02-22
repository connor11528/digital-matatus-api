// stop_id,stop_code,stop_name,stop_desc,stop_lat,stop_lon,zone_id,stop_url,location_type,parent_station

var fs = require('fs');
var file = process.argv[2];

var routes = [];

fs.readFile('data/stops.txt', 'utf-8', function(err, data){
	if (err) throw err;
	
	var lines = data.toString().split('\n');
	var stops = [];
	// add each line string to routes array
	for(var i = 0; i < lines.length; i++){
		var stop = lines[i].split(',');
		
		stopObj = {
			stop_id: stop[0],
			stop_code: stop[1],
			stop_name: stop[2],
			stop_desc: stop[3],
			stop_lat: stop[4],
			stop_lon: stop[5],
			zone_id: stop[6],
			stop_url: stop[7],
			location_type: stop[8],
			parent_station: stop[9]
		};
		stops.push(stopObj);
	}
	stops = JSON.stringify(stops, null, 4)
	
	fs.writeFile('output.txt', stops, function(err){
		if (err) throw err;
		console.log('It\'s saved!');
	});
});

