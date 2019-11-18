// reverse array elments positions to first to last

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr.length / 2; i++) {
  let tempFirst = arr[i]
  let tempLast = arr[arr.length - i - 1]
  arr[arr.length - i - 1] = tempFirst
  arr[i] = tempLast
}

console.log(arr)
