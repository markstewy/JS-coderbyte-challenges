// Challenge
// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the
//string in reversed order.
// Sample Test Cases
// Input:"coderbyte"
// Output:"etybredoc"
//
// Input:"I Love Code"
// Output:"edoC evoL I"


function reverse (string) {
	return string.split('').reverse().join('');
}
