require 'json'
route_ids = Hash.new

File.open("data/trips.txt").readlines.each do |line|
   data = line.split(',')
   route_id = data[0]
   shape_id = data[-1].strip
   
   route_ids[route_id] = shape_id
   
end

json = JSON.pretty_generate(route_ids)

File.open('trips.json', 'w'){ |file| 
	file.write(json) 
	puts 'wrote object to trips.json'
}
