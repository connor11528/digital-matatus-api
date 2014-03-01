require 'json'
shape_ids = Hash.new

# create hash of unique shape_ids with array of array of coordinates matched to each
File.open("data/shapes.txt").readlines.each do |line|
   data = line.split(',')
   shape_id = data.first
   
   if !shape_ids[shape_id]
		# add shape_id to hash if it's not present
		shape_ids[shape_id] = [ [data[1], data[2]] ]
	else
		shape_ids[shape_id].push([data[1], data[2]])
   end
end

# turn hash to json
json = JSON.pretty_generate(shape_ids)

# write to file
File.open('output3.json', 'w'){ |file| 
	file.write(json) 
	puts 'wrote json'
}
