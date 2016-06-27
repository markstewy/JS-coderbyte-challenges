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


var palindrome = function(str) {
    strArr = str.split("");
    strArrScrub = [];
    strPalindrome = [];
    var checker = true;

    for (var i = 0; i < strArr.length; i++) {
        if (/[a-zA-Z]/.test(strArr[i])) {
            strArrScrub.push((strArr[i].toLowerCase()));
        }
    }
   // console.log(strArrScrub);
   //console.log(strArrScrub.length-1);

    for (var x = strArrScrub.length - 1; x >= 0; x--) {

   //	console.log(strArrScrub[x])
   //	console.log(strArrScrub[strArrScrub.length - (x+1)])

        if (strArrScrub[x] !== strArrScrub[strArrScrub.length - 1 - x]) {
            checker = false;
            return checker;
        }
    }
    return checker;
}

palindrome("rar")

//**need to think of a better way to solve this**
