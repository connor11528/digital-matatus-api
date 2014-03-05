var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var main = require('./routes/main');
var user = require('./routes/user');
var route = require('./routes/route');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/opendatake');
}

// ROUTES
app.get('/', main.index);
app.get('/users', user.findAll);

// Route routes
app.get('/routes', route.findAll);
app.get('/routes/:id', route.findById);
app.post('/routes', route.addRoute);
app.put('/route/:id', route.updateRoute);
app.delete('/route/:id', route.deleteRoute);

// start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
