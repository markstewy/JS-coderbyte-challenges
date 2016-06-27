// Challenge
// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string
//true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered
//in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there
//are 6 x's and 5 o's.

// Sample Test Cases
// Input:"xooxxo"
// Output:"true"
//
// Input:"x"
// Output:"false"


var xo = function(str) {
    strArr = str.split("");
    xCount = 0;
    oCount = 0;

    for (var i = 0; i < strArr.length; i++) {
        if (/[xX]/.test(strArr[i])) {
            xCount++;
        } else if (/[oO]/.test(strArr[i])) {
            oCount++
        }
    }
    if (oCount === xCount) {
        return true;
    } else {
        return false;
    }
}

xo("xxxxxoooo")
