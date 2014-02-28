shape_ids = []

File.open("data/shapes.txt").readlines.each do |line|
   data = line.split(',')
   shape_id = data.first
   
   if !shape_ids.include? shape_id
       shape_ids.push(shape_id)
   end
end

puts shape_ids.length
