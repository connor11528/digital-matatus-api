var express = require('express'),
	http = require('http'),
	path = require('path'),
	port = process.env.PORT || 3000;
// var mongoose = require('mongoose');

var api = require('./routes/api');

var app = express();

// all environments
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.favicon());

app.use(express.cookieParser('your secret here'));
app.use(express.session());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  // mongoose.connect('mongodb://localhost/opendatake');
}

// API Routes
app.get('/api/v1/routes', api.routes);
app.get('/api/v1/routes/:route_id', api.route)

app.get('/api/v1/shapes', api.shapes);
app.get('/api/v1/shapes/:shape_id', api.ashape)

app.get('/api/v1/trips', api.trips);

// everything else goes to index.html
app.get('/*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// start server
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
