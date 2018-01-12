// Challenge
// Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr,
//which will only contain two strings of equal length that represent binary numbers, and return a final binary string
//that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where
//there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example:
//if strArr is ["1001", "0100"] then your program should return the string "1101"
// Sample Test Cases
// Input:"100", "000"
// Output:"100"
//
// Input:"00011", "01010"
// Output:"01011"


let BitwiseOne = (strArr) => {
  let arr1 = strArr[0].split('');
  let arr2 = strArr[1].split('');
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
    result.push(Math.max(arr1[i], arr2[i]))
  }
  return result.join('').toString();
}


BitwiseOne(["00000011", "01100010"])