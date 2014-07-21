var express = require('express'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	app = express();

// ENVIRONMENS
var envConfig = require('./server/config/env')[env];

// EXPRESS CONFIG
require('./server/config/express')(app, envConfig)

// API Routes
require('./server/config/routes')(app)

// start server
app.listen(envConfig.port, function(){
  console.log('Express server listening on port ' + envConfig.port);
});
