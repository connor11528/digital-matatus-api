var manApi = require('../controllers/manApi'),
	parseApi = require('../controllers/parseApi')

module.exports = function(app){
	// API from data converted manually (data_transform/)
	app.get('/api/v1/routes', manApi.routes);
	app.get('/api/v1/routes/:route_id', manApi.route)
	app.get('/api/v1/routes/getShape/:route_id', manApi.getShape)
	app.get('/api/v1/shapes', manApi.shapes);
	app.get('/api/v1/shapes/:shape_id', manApi.ashape)
	app.get('/api/v1/trips', manApi.trips);

	// API using the CSV parser (raw_data/)
	app.get('/api/routes', parseApi.routes)
	app.get('/api/shapes', parseApi.shapes)
	app.get('/api/trips', parseApi.trips)

	// everything else goes to index.html
	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
}
