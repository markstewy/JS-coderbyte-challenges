// Challenge
// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if
//it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols
//with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded
//by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
// Sample Test Cases
// Input:"+d+=3=+s+"
// Output:"true"
//
// Input:"f++d+"
// Output:"false"

var simpleSymbol = function(str) {
        var strArr = str.split("");
        var checker = true;

        if (/[a-zA-Z]/.test(strArr[0]) || !/[a-zA-Z]/.test(strArr)) {
            checker = false;
            return checker;
        }
        for (var i = 0; i < strArr.length; i++) {
            if (/[a-zA-Z]/.test(strArr[i])) {
                if (strArr[i - 1] === "+" && strArr[i + 1] === "+") {
                    checker = true;
                } else {
                    checker = false;
                    return checker;
                }
            }
        } //end for loop
        return checker;
    } //end function


simpleSymbol("f++d+")
