// Challenge
// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return
//the second lowest and second greatest numbers, respectively, separated by a space.
//For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain
//at least 2 numbers. It can get tricky if there's just two numbers!

// Sample Test Cases
// Input:1, 42, 42, 180
// Output:"42 42"
//
// Input:4, 90
// Output:"90 4"


var secondGreatLow = function(arr) {
    arrAsc = arr.sort(function(a, b) {
        return a - b
    });
    //console.log(arrAsc)
    var secondLow;
    var secondHigh;

    if (arrAsc.length === 2) {
        seondLow = arrAsc[1];
        secondHigh = arrAsc[0];
        return [secondLow, secondHigh];
    } else if (arrAsc.length === 3) {
        secondLow = arrAsc[1];
        secondHigh = arrAsc[1];
        return [secondLow, secondHigh];
    } else {
        secondLow = arrAsc[1];
        secondHigh = arrAsc[arrAsc.length - 2];
        return [secondLow, secondHigh];
    }
};

secondGreatLow([1, 2, 3, 234, 234, 44, 44, 43, 45, 4, 2, 4, 7, 4, 500, 400]);
