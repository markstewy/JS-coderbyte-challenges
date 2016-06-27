// Challenge
// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the
//string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
//If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the
// numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio.
//Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will
//not be entered, and no array will contain all the same elements.

// Sample Test Cases
// Input:5,10,15
// Output:"Arithmetic"
//
// Input:2,4,16,24
// Output:-1


var arithGeo = function(arr) {
    arithArr = [];
    geoArr = [];
    arithChecker = true;
    geoChecker = true;

//calculate difference and quotient of sequential elements of the array
    for (var i = 1; i < arr.length; i++) {
        arithArr.push(arr[i] - arr[i - 1]);
        geoArr.push(arr[i] / arr[i - 1]);
    } // end for

//test every element in new geo and arith arrays and update checker booleans
    for (var x = 1; x < arr.length - 1; x++) {
        if (arithArr[x] !== arithArr[x - 1]) {
            arithChecker = false;
        }
        if (geoArr[x] !== geoArr[x - 1]) {
            geoChecker = false;
        }

    } //end for

//return results
    if (arithChecker === true) {
        return "Arithmetic";
    } else if (geoChecker === true) {
        return "Geometric";
    } else {
        return -1;
    }

}

arithGeo([3, 6, 12, 24])
