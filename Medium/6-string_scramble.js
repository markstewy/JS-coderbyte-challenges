// Challenge
// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string 
//true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" 
//and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.
// Sample Test Cases
// Input:"cdore" & str2= "coder"
// Output:"true"
//
// Input:"h3llko" & str2 = "hello"
// Output:"false"


let StringScramble = (str1,str2) => {
    let str1Arr = str1.split('')
    let str2Arr = str2.split('')
    
    for (let i = 0; i < str2Arr.length; i++) {
        if (str1Arr.indexOf(str2Arr[i]) < 0) {
            return false
        } else {
          console.log(str1Arr)
          str1Arr.splice(str1Arr.indexOf(str2Arr[i]), 1)
        }
    }
    return true 
}

StringScramble('coderdsss', 'codesss')