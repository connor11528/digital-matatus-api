// stop_id,stop_code,stop_name,stop_desc,stop_lat,stop_lon,zone_id,stop_url,location_type,parent_station

var fs = require('fs');
var file = process.argv[2];

var routes = [];

fs.readFile('data/routes.txt', 'utf-8', function(err, data){
	if (err) throw err;
	
	var lines = data.toString().split('\n');
	
	// loop over file one line at a time
	for(var i = 0; i < lines.length; i++){
		var route = lines[i].split(',');
		
		// create route objects
		routeObj = {
			name: route[2],
			waypoints: [],
			route_id: route[0],
			shape_id: ''
		};
		// add to array of route objects
		routes.push(routeObj);
	}
	routes.shift();	// remove title
	
	// read trips.txt file in order to add shape id to route objects
	fs.readFile('data/trips.txt', 'utf-8', function(err, data){
		var lines = data.toString().split('\n');
		
		var ids = [];
		
		// get and store all route and shape ids
		for(var i = 0; i < lines.length; i++){
			var trip = lines[i].split(',');
						
			var id = {
				route_id: trip[0],
				shape_id: trip[6]
			};
			
			ids.push(id);
		}

		// routes = JSON.parse(routes);

		// add shape_ids to objects
		for(var i = 0; i < routes.length; i++){
			for(var j = 0; j < ids.length; j++){
				// console.log(ids[j].route_id)
				if(routes[i].route_id === ids[j].route_id){
					// remove new lines
					ids[j].shape_id = ids[j].shape_id.replace(/\r?\n|\r/g, '');
					routes[i].shape_id = ids[j].shape_id;
				}
			}
		}
		
		routes = JSON.stringify(routes, null, 4);	// make array pretty
		
		// write to output.txt
		fs.writeFile('output.txt', routes, function(err){
			if (err) throw err;
			console.log('It\'s saved!');
		});
	});	
});
