arr = [1,2,3,4,5,6,7,8,9,10]

res = []
arr.each do |item|
  max = arr[arr.length - 1]
  min = arr[0]
  res << max
  res << min
  arr.pop
  arr.shift
end

puts res