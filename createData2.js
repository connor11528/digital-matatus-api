
var fs = require('fs');
var through = require('through');
var split = require('split');
var shape_ids = [];

var source = fs.createReadStream('data/shapes.txt');
var target = fs.createWriteStream('./output3.txt');

var tr = through(write, end);

source
	.pipe(split())
	.pipe(tr)

// Function definitions

function write(line){
	var line = line.toString();
	var splitted = line.split(',');
	
	// if it's not in array
	if (shape_ids.indexOf(splitted[0]) > -1){
		shape_ids.push(splitted[0]);
	}
}   

function end(){
	shape_ids = JSON.stringify(shape_ids);
	target.write(shape_ids);
	console.log('data written');
}




//~ var readableStream = fs.createReadStream('data/shapes.txt');
//~ var writeableStream = fs.createWriteStream('./output3.txt');
//~ 
//~ readableStream.pipe(split(transformLine)).pipe(writeableStream)
//~ 
//~ 
//~ function transformLine(){
	//~ 
	//~ 
//~ }
