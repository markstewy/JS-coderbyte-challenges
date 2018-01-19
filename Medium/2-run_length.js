// Challenge
// Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// Sample Test Cases
// Input:"aabbcde"
// Output:"2a2b1c1d1e"
//
// Input:"wwwbbbw"
// Output:"3w3b1w"


let  RunLength = (str) => {
  let results = []
  let strArr = str.split('')
  let counter = 1
  for (i=0; i<strArr.length; i++) {
    if(strArr[i] === strArr[i+1]) {
      counter++
    } else {
      if(counter > 1) {
        results.push(counter.toString() + strArr[i].toString())
      } else {
        results.push(strArr[i])
      }
      counter = 1
    }
  }
  return results.join('')
}

RunLength("wwweeedddddfsf")