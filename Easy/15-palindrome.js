// Challenge
// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string
//true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
//For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
// Sample Test Cases
// Input:"never odd or even"
// Output:"true"
//
// Input:"eye"
// Output:"true"


function Palindrome(str) {
  let str1 = [];
  str1 = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str1[i] == " ") {
      str1.splice(i, 1);
    }
  }
  if (str1.join("") == str1.reverse().join("")) {
    return true;
  }
  return false;
}
console.log(Palindrome(str));

//**need to think of a better way to solve this**
