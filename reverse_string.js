// reverse a sting

const str = 'my name is mohan'
console.log('Input Data: ', str)
let arr = str.split(' ')
let outPut = ''
for (let i = 0; i < arr.length; i++) {
  outPut = outPut + arr[arr.length - i - 1] + ' '
}

console.log('Output Data: ', outPut)
