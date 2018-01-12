// Challenge
// Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings 
//stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both 
//integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements 
//will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program 
//should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.
// Sample Test Cases
// Input:"(1 1)","(1 3)","(3 1)","(3 3)"
// Output:4
//
// Input:"(0 0)","(1 0)","(1 1)","(0 1)"
// Output:1


let RectangleArea = (strArr) => {
  let cleanArr = strArr.map((set) => {
    return set.substring(1, set.length-1).split(' ');
  }).sort()
  return Math.abs((cleanArr[1][0] - cleanArr[2][0]) * (cleanArr[1][1] - cleanArr[2][1]));
}


RectangleArea(["(3 1)","(3 5)", "(1 1)","(1 5)"]);