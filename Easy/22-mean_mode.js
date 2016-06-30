// Challenge
// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and
//return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1
//because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and
//will not contain more than one mode.
// Sample Test Cases
// Input:1, 2, 3
// Output:0
//
// Input:4, 4, 4, 6, 2
// Output:1


var meanMode = function(arr) {
    var sum = 0;
    var mean;
    var counter = 0;
    var high = 0;
    var highPosition;
    var mode;
    arr = arr.sort();

    //calc mean
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    mean = sum / arr.length;

    // calc mode **doesn't yet account for multiple modes**
    for (var j = 1; j < arr.length; j++) {
        if (arr[j] === arr[j - 1]) {
            counter++;
            if (counter > high) {
                high = counter;
                highPosition = j;
            }
        }
    }

    if (arr[highPosition] === mean) {
        return 1;
    } else {
        return 0;
    }

}

meanMode([1, 3, 3, 3, 5])
