// Challenge
// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed
//which will always be a positive integer and return its multiplicative persistence which is the number of times you must
//multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3
//because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
// Sample Test Cases
// Input:4
// Output:0
//
// Input:25
// Output:2

//As the input num grows in size you have to deal with scientific notation and auto rounding that may eliminate digits
//To avoid any errors, enter all numbers as a string. The function below will also work with number inputs, but does not
//account for any rounding or scientific notation

var multiplicativePersistence = function(num) {
    var numArr = num.toString().split("");
    var counter = 0;

    do {
        var total = 1;
        for (var i = 0; i < numArr.length; i++) {
            total = total * Number(numArr[i]);
        }
        console.log(total)
        numArr = total.toString().split("");
		counter++;

    }
    while (total > 9);
    return counter;
}

// multiplicativePersistence(9994123419)
multiplicativePersistence("12345")
