// Challenge
// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
//For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
// Sample Test Cases
// Input:99946
// Output:9-9-946
//
// Input:56730
// Output:567-30


var dashInsert = function(str) {
    var strArr = str.split("");

    for (var i = strArr.length - 1; i > -1; i--) {
        if (strArr[i - 1] % 2 !== 0 && strArr[i] % 2 !== 0 && i !== 0) {
            strArr.splice(i, 0, "-")
        }
    }
    return strArr.join("")
}

dashInsert("1100211134554112")
