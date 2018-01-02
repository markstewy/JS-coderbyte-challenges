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


var longestWord = function(str) {
    var strScrub = str.replace(/[^A-Za-z\s]/g, "").split(" ")
    var letterCount = 0;
    var longest;
    for (var i = 0; i < strScrub.length; i++) {
        if (strScrub[i].length > letterCount) {
            letterCount = strScrub[i].length;
            longest = strScrub[i];
        }
    }
    return longest;
}

longestWord("lebr#on will win game 7 !!!!")
