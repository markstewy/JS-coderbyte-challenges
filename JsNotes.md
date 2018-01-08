#array.slice (copy)
    array.slice(start, end)
        start - zero based position (included)
        end - zero based position (up to but not included)
        returns copied items, original array unchanged (copy)

#array.splice (cut)
    array.splice(start, end, insert1, insert2, insertEtc)
        start - zero based position (included)
        end - number of values (including 1st value referenced in start position)
        returns cut items, orginal array changed (cut)
        optinal insert new values

#array.map

#array.filter

#array.reduce
        Superincreasing = (arr) => {
            superArr = true;
                arr.reduce((total, currVal, currIndex, numArr) => {
                console.log(total)
                console.log(currVal)
                    if(currVal > total) {
                        return (total + currVal); //if you want to add to total through interations total += currVal won't work, simply return a value from the iteration and it will be assigned to the total for you
                    } else {
                        superArr = false; //you can't skip a loop or return out of a reduce loop ie. return false; wouldn't work (this is a weakness for performance on long arrays that could be cut short if superArr is deternmined false early on, but reduce has to finish the entire array loop)
                    }
                })
                return superArr;
        }


Superincreasing([1, 3, 6, 13, 54, 1000] )

#fn.apply(obj)
        example:
        =======================
        var person = {
            firstName:"John",
            lastName: "Doe",
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }
        }
        var myObject = {
            firstName:"Mary",
            lastName: "Doe",
        }
        person.fullName.apply(myObject);  // Will return "Mary Doe"
        ========================

    strict mode: scope becomes 'this' in the invoked function
        non-strict mode: if the first arg is null or undefined it is replaced with global scope
                            if first arg is defined, that is the scope

#fn.apply(arr)
        example:
        =======================
        Math.max.apply(null,[1,2,3]); // Will also return 3
        ========================

        strict mode: scope becomes 'this' in the invoked function
        non-strict mode: if the first arg is null or undefined it is replaced with global scope
                            if first arg is defined, that is the scope


#fn.call

#fn().bind(newScope) 
    bind new scope with .bind **this won't work on => functions because the scope is always set to context of the fn being called
    same is true with apply and call


#typeof
    typeof "John"              // Returns "string" 
    typeof 3.14                // Returns "number"
    typeof true                // Returns "boolean"
    typeof false               // Returns "boolean"
    typeof x                   // Returns "undefined" (if x has no value)
    typeof {name:'John', age:34} // Returns "object"
    typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
    typeof null                  // Returns "object"
    typeof function myFunc(){}   // Returns "function"

The typeof operator returns "object" for arrays because in JavaScript arrays are objects.


#object.hasOwnProperty("namestring")
    shape1.hasOwnProperty("corner");

    returns true or false

#instanceof
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits instanceof Array;
    //returns true

    The instanceof operator returns true when used on a matching type