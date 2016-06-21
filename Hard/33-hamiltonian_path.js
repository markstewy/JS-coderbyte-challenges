// Challenge
// Using the JavaScript language, have the function HamiltonianPath(strArr) take strArr which will be an array of length three. The first part of the array will be a list of vertices in a graph in the form (A,B,C,...), the second part of the array will be the edges connecting the vertices in the form
// (A-B,C-D,...) where each edge is bidirectional. The last part of the array will be a set of vertices in the form (X,Y,Z,...) and your program will have to determine whether or not the set of vertices given forms a Hamiltonian path on the graph which means that every vertex in the graph is visited only once in the order given. For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"] then the vertices (C,A,D,B) in this order do in fact form a Hamiltonian path on the graph so your program should return the string yes. If for example the last part of the array was (D,A,B,C) then this doesn't form a Hamiltonian path because once you get to B you can't get to C in the graph without passing through the visited vertices again. Here your program should return the vertex where the path had to terminate, in this case your program should return B.
//
// The graph will have at least 2 vertices and all the vertices in the graph will be connected.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"(A,B,C)","(B-A,C-B)","(C,B,A)"
// Output:yes
//
// Input:"(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q,X)"
// Output:Q
