// Given an array of numbers in sorted order, count the paris of numbers whose sum is less than X

let defaultArr = [2, 4, 6, 8, 9]
const x = 14

let counter = 0

function repeater (arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[arr.length - 1]
    if (sum < x) {
      counter = counter + 1
    }

    if (sum > x) {
      let currentArray = arr.slice(0, arr.length - 1)
      repeater(currentArray)
      break
    }
  }
}

repeater(defaultArr)

console.log(counter, 'counter')
