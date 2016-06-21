// Challenge
// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
//For the test cases, the parameter num will be any number from 1 to 1000.
// Sample Test Cases
// Input:12
// Output:78
//
// Input:140
// Output:9870

var simpleAdding = function (n) {
	var total = 0
	for (var i = 0; i <= n; i ++) {
		total = total + i;
	}
	return total;
}

simpleAdding(12)
