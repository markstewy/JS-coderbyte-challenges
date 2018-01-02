#Javascript ES6 — Arrow Functions and Lexical `this`
https://medium.com/@reasoncode/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4

#let const and block scoping
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
    updateFunctions.push(function() {return i;});
}
console.log(updateFunctions[0]());
//retunrs 2  you would expect it to return 0 since that was the value assigned during the first iteration. This isn't the case because var is not a block level variable.

let updateFunctions = [];
for (let i = 0; i < 2; i++) {
    updateFunctions.push(function() {return i;});
}
console.log(updateFunctions[0]());
//use let and it will return 0 as expected. let and const are block level variables, use them instead of var.

#default function parameters



#Rest and Spread

#Object Literal Expressions

#for ... of Loops

#Octal and Binary Literals

#Template Literals

#Destructuring
