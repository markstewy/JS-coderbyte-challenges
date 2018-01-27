// Challenge
// Using the JavaScript language, have the function BinaryTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements: the first element will be a binary tree with all unique values in a format similar to how a binary heap is implemented with NULL nodes at any level represented with a #, the second and third elements will be two different values, and your goal is to find the lowest common ancestor of these two values. For example: if strArr is
// ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"] then this tree looks like the following:

//
//
//
// For the input above, your program should return 5 because that is the value of the node that is the LCA of the two nodes with values 6 and 4. You can assume the two nodes you are searching for in the tree will exist somewhere in the tree.
// Sample Test Cases
// Input:"[5, 2, 6, 1, #, 8, #]", "2", "6"
// Output:5
//
// Input:"[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"
// Output:12
