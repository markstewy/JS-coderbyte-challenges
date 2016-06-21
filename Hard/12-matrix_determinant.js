// Challenge
// Using the JavaScript language, have the function MatrixDeterminant(strArr) read strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["1","2","<>","3","4"]. The contents of this array are row1=[1 2] and row2=[3 4]. Your program should take the given array of elements, create the proper matrix, and then calculate the determinant. For the example above, your program should return -2. If the matrix is not a square matrix, return -1. The maximum size of strArr will be a 6x6 matrix. The determinant will always be an integer.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"5","0","<>","0","5"
// Output:25
//
// Input:"1","2","4","<>","2","1","1","<>","4","1","1"
// Output:-4
