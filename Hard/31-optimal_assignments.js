// Challenge
// Using the JavaScript language, have the function OptimalAssignments(strArr) read strArr which will represent an NxN matrix and it will be in the following format: ["(n,n,n...)","(...)",...] where the n's represent integers. This matrix represents a machine at row i performing task at column j. The cost for this is matrix[i][j]. Your program should determine what machine should perform what task so as to minimize the whole cost and it should return the pairings of machines to tasks in the following format: (i-j)(...)... Only one machine can perform one task. For example: if strArr is ["(5,4,2)","(12,4,3)","(3,4,13)"] then your program should return (1-3)(2-2)(3-1) because assigning the machines to these tasks gives the least cost. The matrix will range from 2x2 to 6x6, there will be no negative costs in the matrix, and there will always be a unique answer.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"(1,2,1)","(4,1,5)","(5,2,1)"
// Output:"(1-1)(2-2)(3-3)"
//
// Input:"(13,4,7,6)","(1,11,5,4)","(6,7,2,8)","(1,3,5,9)"
// Output:"(1-2)(2-4)(3-3)(4-1)"
