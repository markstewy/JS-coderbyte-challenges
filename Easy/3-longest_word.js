// Challenge
// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the
//largest word in the string. If there are two or more words that are the same length, return the first word from the string
//with that length. Ignore punctuation and assume sen will not be empty.
// Sample Test Cases
// Input:"fun&!! time"
// Output:"time"
//
// Input:"I love dogs"
// Output:"love"


var longestWord = function (str) {

var word = str.replace(/[^A-Za-z\s]/g, "").split(" ")
console.log(word.length)
var letterCount = 0;
var longest;
	for (var i = 0; i < word.length; i++) {
		if(word[i].length > letterCount) {
			letterCount = word[i].length;
			longest = word[i];
		}
	}
return longest;
}

longestWord ("the warriors# will win game 7 !!!!")
