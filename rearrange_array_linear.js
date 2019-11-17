const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = []

for (let i = 0; i < arr.length / 2; i++) {
  result.push(arr[arr.length - i - 1])
  result.push(arr[i])
}

console.log(result)
