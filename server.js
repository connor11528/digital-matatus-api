var express = require('express'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	app = express();

// ENVIRONMENS
var envConfig = require('./server/config/env')[env];
console.log(envConfig)

// EXPRESS CONFIG
require('./server/config/express')(app, envConfig)

// development only
app.use(express.logger('dev'));
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// API Routes
require('./server/config/routes')(app)

// start server
app.listen(envConfig.port, function(){
  console.log('Express server listening on port ' + envConfig.port);
});
