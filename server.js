var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

var user = require('./routes/user');
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
  mongoose.connect('mongodb://localhost/opendatake');
}

// API Routes
app.get('/users', user.findAll);

app.get('/api/routes', api.routes);
app.get('/api/shapes', api.shapes);
app.get('/api/trips', api.trips);

// everything else goes to index.html
app.get('/*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// start server
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
