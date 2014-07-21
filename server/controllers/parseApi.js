
var fs = require('fs'),
	path = require('path'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	rootPath = require('../config/env')[env].rootPath,
	csvParser = require('csv-parser'); 	// https://github.com/mafintosh/csv-parser

module.exports = {
	routes: function(req, res){
		readCSV('routes', function(routes){
			res.send(routes)
		});
	},
	shapes: function(req, res){
		// this file is big
		readCSV('shapes', function(shapes){
			res.send(shapes)
		});
	},
	trips: function(req, res){
		readCSV('trips', function(trips){
			res.send(trips)
		});
	}
};

// takes filename and callback.
// callback recieves and array of js objects from file
var readCSV = function(toRead, cb){
	var fullData = [];
	fs.createReadStream(rootPath + '/raw_data/' + toRead + '.csv')
		.pipe(csvParser())
		.on('data', function(data){
			fullData.push(data)
		})
		.on('end', function(){
			cb(fullData);
		})
}