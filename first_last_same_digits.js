// Given a range of numbers, count the numbers which have same first and last digits
// Ex: Between 7 and 20 such numbersare 8,9 and 11
let firstDigit = 0
let lastDigit = 0

for (let i = 8; i < 20; i++) {
  if (i < 10) {
    firstDigit = i
    lastDigit = i
  } else {
    firstDigit = Math.floor(i / 10)
    lastDigit = i % 10
  }

  if (firstDigit === lastDigit) {
    console.log(i)
  }
}
