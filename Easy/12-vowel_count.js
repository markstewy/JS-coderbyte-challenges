// Challenge
// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return
//the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.
// Sample Test Cases
// Input:"hello"
// Output:2
//
// Input:"coderbyte"
// Output:3


var vowelCounter = function(str) {
    counter = 0;
    strArr = str.split("");

    for (var i = 0; i < strArr.length; i++) {
        if (/[aAeEiIoOuU]/.test(strArr[i])) {
            counter++;
        }
    }
    return counter;
}

vowelCounter("aeiouezz")
