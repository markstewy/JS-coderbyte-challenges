// Challenge
// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be
//two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes
//between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output
//should be 60. If str is 1:00pm-11:00am the output should be 1320.
// Sample Test Cases
// Input:"12:30pm-12:00am"
// Output:690
//
// Input:"1:23am-1:08am"
// Output:1425




//NOT COMPLETE
//
// var time = function (str) {
//
// 	var strArr = str.split("-");
// 	var regex = /[p]/;
// //	var regex2 = /^\d+$/;
// 	var pm = [false, false];
//
// 	//idenfifying am and pm
// 	for(var i=0; i < strArr.length; i++ ) {
// 		if(regex.test(strArr[i])) {
// 			pm[i] = true;
// 			}
// 	}
//
//
//
// 	var start = strArr[0].split("")
// 	start.pop(); start.pop();
// 	start = start.toString();
// 	var end = strArr[1].split("")
// 	end.pop(); end.pop()
//
//
//
// console.log(pm)
// console.log(start)
// console.log(end)
//
//
// }
//
// time("1:23am-11:08pm")
