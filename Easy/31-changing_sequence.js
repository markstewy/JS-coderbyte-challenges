// Challenge
// Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored 
//in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing 
//and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is 
//the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. 
//The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. 
//If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.
// Sample Test Cases
// Input:-4, -2, 9, 10
// Output:-1
//
// Input:5, 4, 3, 2, 10, 11
// Output:3



function ChangingSequence(arr) {
    let op;
    //find the first change and identify increase or decrease
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
          if(!op) {
            op = 'greater'
          } else if(op !== 'greater') {
            return i - 1
          }
        } else if(arr[i] < arr[i - 1]) {
          if(!op) {
            op = 'less'
          } else if(op !== 'less') {
            return i - 1
          }
        }
    }
}

ChangingSequence([1, 2, 4, 6, 4, 3, 1]);

//this solution is meant to handle any number of equal values at the beginning or in the middle of the array without breaking