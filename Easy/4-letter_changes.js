// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify
//it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet
//(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return
//this modified string.
// Sample Test Cases
// Input:"hello*3"
// Output:"Ifmmp*3"
//
// Input:"fun times!"
// Output:"gvO Ujnft!"


var change = function(str) {
        var alphabet = ["a", "b", "c", "d", "E", "e", "f", "g", "h", "I", "i", "j", "k", "l", "m", "n", "O", "o", "p", "q", "r", "s", "t", "U", "u", "v", "w", "x", "y", "z"];
        //**the alphabet array key includes two of each vowel so I don't have to write any if statemnt to change vowels back to upper case.**
        var changedArr = [];
        var strArr = str.split("")

        for (var i = 0; i < strArr.length; i++) {
            //console.log(alphabet[alphabet.indexOf(strArr[i].toLowerCase())]);
            if ((strArr[i].toLowerCase()) === "z") {
                changedArr.push("A");
            } else if (alphabet.indexOf(strArr[i].toLowerCase()) !== -1) {
                changedArr.push(alphabet[alphabet.indexOf(strArr[i].toLowerCase()) + 1]);
            } else {
                changedArr.push(strArr[i]);
            }
        } //end for loop
        return changedArr.join("");
    } //end function

change("zadHCn t123a!@#")
    //change("fun times!")
