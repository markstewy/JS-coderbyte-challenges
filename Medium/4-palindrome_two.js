// Challenge
// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
// Sample Test Cases
// Input:"Noel - sees Leon"
// Output:"true"
//
// Input:"A war at Tarawa!"
// Output:"true"


let PalindromeTwo = (str) => {
  let strArr = str.split('')
  let palindrome = true
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[strArr.length - 1 - i]) {
      palindrome = false
      return palindrome
    }
  }
  return palindrome
}

PalindromeTwo('asdfghjklkjhgfdsa')