// Challenge
// Using the JavaScript language, have the function OverlappingRectangles(strArr) read the strArr parameter being passed which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2. It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should determine the area of the space where the two rectangles overlap, and then output the number of times this overlapping region can fit into the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. The coordinates will all be integers. If there's no overlap between the two rectangles return 0.
// Sample Test Cases
// Input:"(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"
// Output:6
//
// Input:"(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"
// Output:3
