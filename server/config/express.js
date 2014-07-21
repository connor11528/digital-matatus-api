var express = require('express'),
	path = require('path');

module.exports = function(app, envConfig){
	app.use(express.static(path.join(envConfig.rootPath, 'public')));
	
	app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.json());
	app.use(express.favicon());

}