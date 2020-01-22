const findLongestIncreasingSequence = (source) => {
  let length = source.length

  let findLongestIncreasingSequence = Array(length).fill(1)

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (source[i] > source[j] && (findLongestIncreasingSequence[i] < findLongestIncreasingSequence[j] + 1)) {
        findLongestIncreasingSequence[i] = findLongestIncreasingSequence[j] + 1
      }
    }
  }

  let maximum = 0

  for (let i = 0; i < length; i++) {
    maximum = Math.max(maximum, findLongestIncreasingSequence[i])
  }
  return maximum
}

const source = [10, 22, 9, 33, 21, 50, 41, 60]

try {
  console.log(findLongestIncreasingSequence(source))
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e)
  }
}
