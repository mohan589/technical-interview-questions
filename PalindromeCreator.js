// Using the JavaScript language, have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible. If the input string is already a palindrome, your program should return the string palindrome.

// The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string.

// Input:"mmop"
// Output:"not possible"

// Input:"kjjjhjjj"
// Output:"k"
// Hint
// Try looping through the string and removing every character to see if it produces a palindrome. Then you can also try and remove different pairs of letters within the string as well.

const isPalindrome = (str) => str === str.split('').reverse().join('')

function PalindromeCreator (str) {
  for (var i = 0; i < str.length; i++) {
    // str minus 1 char:
    let temp1 = str.slice(0, i)
    let temp2 = str.slice(i + 1)
    let removedLetter = str[i]
    console.log(removedLetter + '\n' + 'part 1:  ' + temp1, '\npart 2:  ' + temp2 + '\n')
    let tempStr = temp1 + temp2

    if (isPalindrome(tempStr)) {
      return str[i]
    }
  }
}

PalindromeCreator('abjchba')
