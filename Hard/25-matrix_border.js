// Challenge
// Using the JavaScript language, have the function MatrixBorder(strArr) read the strArr parameter being passed which will represent an NxN matrix filled with 1's and 0's. Your program should determine the number of swaps between two rows or two columns that must be made to change the matrix such that the border of the matrix contains all 1's and the inside contains 0's. The format of strArr will be: ["(n,n,n...)","(...)",...] where n represents either a 1 or 0. The smallest matrix will be a 3x3 and the largest will be a 6x6 matrix.
//
// For example: if strArr is: ["(0,1,1)","(1,1,1)","(1,1,1)"] then you can swap the first two columns and then swap the first two rows to create a matrix with the 1's on the border and the 0 on the inside, therefore your program should output 2.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"(0,1,1)","(1,1,1)","(1,1,1)"
// Output:2
//
// Input:"(0,1,0,1)","(1,1,1,1)","(0,1,0,1)","(1,1,1,1)"
// Output:2
