// Challenge
// Using the JavaScript language, have the function WeightedPath(strArr) take strArr which will be an array of strings which models a non-looping weighted Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes along with their weights (integers) separated by the pipe symbol (|). They will look like this: (A|B|3, B|C|12 .. Brick Street|Main Street|14 .. etc.). Although, there may exist no connections at all.
//
// An example of strArr may be: ["4","A","B","C","D","A|B|1","B|D|9","B|C|3","C|D|4"]. Your program should return the shortest path when the weights are added up from node to node from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-C-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A|B|1","A|E|9","B|C|2","C|D|1","D|F|2","E|D|6","F|G|2"]. The output for this array should be A-B-C-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A. A path may not go through any Node more than once.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"
// Output:"A-B-D"
//
// Input:"4","x","y","z","w","x|y|2","y|z|14", "z|y|31"
// Output:-1
