function recursiveArray (array, i) {
  if (i >= array.length) return
  console.log(array[i])
  recursiveArray(array, i + 1)
}

recursiveArray([1, 2, 3], 0)
