// Challenge
// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr 
//and determine if the array forms a superincreasing sequence where each element in the array is greater than the 
//sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] 
//then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing 
//sequence isn't formed, then your program should return the string "false"
// Sample Test Cases
// Input:1,2,3,4
// Output:"false"
//
// Input:1,2,5,10
// Output:"true"

Superincreasing = (arr) => {
    superArr = true;
      arr.reduce((total, currVal, currIndex, numArr) => {
          if(currVal > total) {
              return (total + currVal); //if you want to add to total through each interation, total += currVal won't work, simply return a value from the iteration and it will be assigned to the total for you
          } else {
              superArr = false; //you can't skip a loop or return out of a reduce loop ie. return false; wouldn't work (this is a weakness for performance on long arrays that could be cut short if superArr is deternmined false early on, but reduce has to finish the entire array loop)
          }
      })
      return superArr;
  }
  
  
  Superincreasing([1, 3, 6, 13, 54, 1000] )
