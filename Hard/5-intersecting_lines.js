// Challenge
// Using the JavaScript language, have the function IntersectingLines(strArr) take strArr which will be an array of 4 coordinates in the form: (x,y). Your program should take these points where the first 2 form a line and the last 2 form a line, and determine whether the lines intersect, and if they do, at what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"], then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3) intersect at (9/5,12/5). Your output should therefore be the 2 points in fraction form in the following format: (9/5,12/5). If there is no denominator for the resulting points, then the output should just be the integers like so: (12,3). If any of the resulting points is negative, add the negative sign to the numerator like so: (-491/63,-491/67). If there is no intersection, your output should return the string "no intersection". The input points and the resulting points can be positive or negative integers.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"(9,-2)","(-2,9)","(3,4)","(10,11)"
// Output:"(3,4)"
//
// Input:"(1,2)","(3,4)","(-5,-6)","(-7,-8)"
// Output:"no intersection"
