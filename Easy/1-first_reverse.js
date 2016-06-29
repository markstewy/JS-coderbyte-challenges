// Challenge
// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the
//string in reversed order.
// Sample Test Cases
// Input:"coderbyte"
// Output:"etybredoc"
//
// Input:"I Love Code"
// Output:"edoC evoL I"


var rev = function(str) {
    return str.split("").reverse().join("");
};
rev("mark is a great guy, you should hire him!");







// The Long Way

var rev = function(str) {
    var arr = str.split("");
    var revStr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revStr = revStr + arr[i];
    }
    console.log(revStr);
    return revStr;
}
rev("mark is a great guy, you should hire him!")


// OR

var rev = function(str) {
    var revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str.charAt(i);
    }
    console.log(revStr);
    return revStr;
}
rev("mark is a great guy, you should hire him!")
