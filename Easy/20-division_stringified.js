// Challenge
// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed,
//divide num1 by num2, and return the result as a string with properly formatted commas.
//If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1").
//
//For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
// Sample Test Cases
// Input:5 & num2 = 2
// Output:"3"
//
// Input:6874 & num2 = 67
// Output:"103"


var divisionStringified = function(num1, num2) {
    var quotient;
    var negative;
    var commas;
    var commaOffset;

    quotient = (num1 / num2).toString().split("")
    negative = false;
    //negative quotient check
    if ((num1 <= 0 && num2 > 0) || (num2 <= 0 && num1 > 0) || num1 === 0 || num2 === 0) {
        negative = true;
        quotient.shift();
    }

    commas = Math.ceil((quotient.length / 3) - 1);
    commaOffset = 3;

    for (var i = 0; i < commas; i++) {
        quotient.splice(quotient.length - commaOffset, 0, ",")
        commaOffset = commaOffset + 4;
    }
    if (negative) {
        return "-" + quotient.join("");
    } else {
        return quotient.join("");
    }
};

divisionStringified(1231231231, -1);
