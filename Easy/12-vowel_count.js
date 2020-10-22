// Challenge
// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return
//the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.
// Sample Test Cases
// Input:"hello"
// Output:2
//
// Input:"coderbyte"
// Output:3

const VowelCount = (str) => {
    var patt = /[aeiouAEIOU]/g;
    var vowl_count = str.match(patt);
    return vowl_count.length;
}
console.log(VowelCount(str));
