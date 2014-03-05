var mongoose = require('mongoose');

exports.findAll = function(req, res){
	res.send([{message: 'message1'}, {message: 'message2'}])
};

exports.findById = function(req, res){
	res.send({id:req.params.id, name: 'the name', description: 'the description'})
};
	
exports.addRoute = function(){},
exports.updateRoute = function(){},
exports.deleteRoute = function(){}
