var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var main = require('./routes/main');
var user = require('./routes/user');
var route = require('./routes/route');

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
app.get('/routes', route.findAll);
app.get('/routes/:id', route.findById);
app.post('/routes', route.addRoute);
app.put('/route/:id', route.updateRoute);
app.delete('/route/:id', route.deleteRoute);

// everything else goes to index.html
app.get('/*', main.index);

// start server
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
