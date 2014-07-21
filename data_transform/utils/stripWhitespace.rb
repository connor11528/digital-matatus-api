str = ""
File.open("../data/trips.json").readlines.each do |line|
	str += line.gsub(/\s+/, "")
end

print str

# write to file
File.open('../data/trips.min.json', 'w'){ |file| 
	file.write(str) 
	puts 'wrote string to trips.min.json'
}