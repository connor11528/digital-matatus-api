var routes = require('../data/routes.min.json');
var shapes = require('../data/shapes.min.json');
var trips = require('../data/trips.min.json');

exports.routes = function(req, res){
	res.jsonp(routes)
};

exports.shapes = function(req, res){
	res.jsonp(shapes)
};

exports.trips = function(req, res){
	res.jsonp(trips)
};