// Challenge
// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return
//the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.
// Sample Test Cases
// Input:4
// Output:24
//
// Input:8
// Output:40320

var factorial = function(num) {
	var prod = 1;
	for(var i = num; i > 0; i--) {
		prod = prod * i;
	}
	return prod
}

factorial(4);
