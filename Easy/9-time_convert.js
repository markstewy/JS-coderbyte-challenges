// Challenge
// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the
//number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).
//Separate the number of hours and minutes with a colon.
// Sample Test Cases
// Input:126
// Output:"2:6"
//
// Input:45
// Output:"0:45"


var timeConvert = function(mins) {
	var remainder;
	var  hours;

	if(mins < 60) {
		hours = 0;
		remainder = mins;
	}
	else {
		hours = Math.floor(mins/60);
		remainder = mins%60;
	}


	return(hours + ":" + remainder);
}


timeConvert(125)
