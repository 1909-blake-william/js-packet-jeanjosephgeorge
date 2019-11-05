// Javascript Homework
// Due next Friday Morning
//
// Jean Joseph George
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}
console.log("\nSOLUTION 1:");
console.log(fib(7));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray) {
let arr = numArray;
let loop = true;

for (let x = 0; x < arr.length; x++) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        } else {
        continue;
        }
        }
    }
return arr;
} 
console.log("\nSOLUTION 2")
console.log(bubbleSort([7, 2, 1, 23, 7, 3, 2, 6]));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr){
    let newStr = someStr.split('').reverse().join('');
    return newStr;
}
console.log("\nSOLUTION 3:")
console.log(reverseStr("Jean"));

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum){
    if(someNum <= 1){
        return 1;
    } else {
        return (someNum) * factorial(someNum-1);
    }
}
console.log("\nSOLUTION 4:")
console.log(factorial(6));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset){

    let arr = someStr.split('');
    let newArr = []
    
    if(offset+length > someStr.length){
        return alert('Incompatible values');
    } else {
        for(let i = offset; i<= offset+length; i++){
            newArr.push(arr[i]);
        }    
    }
    return newArr.join('');
}
console.log("\nSOLUTION 5:")
console.log(substring("0123456789", 4, 4));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum){
    let sn = someNum.toString();
    let vl = (sn[sn.length-1]);
    
    if (vl == 1 || vl == 3 || vl == 5 || vl == 7 || vl ==9){
        console.log(`The number ${someNum} is odd`)
    } else {
        console.log(`The number ${someNum} is even`)
    }
}
console.log('\nSOLUTION 6:')
isEven(7);

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let value;

    for (let i = 0; i<someStr.length/2; i++){
        if(someStr[i] ==  someStr[someStr.length-1-i]){
            value = true
            continue
        } else {
            value = false;
            break;
        }
    }
    return value;
}
console.log("\nSOLUTION 7:")
console.log(isPalindrome("mangnam"))


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    let newObject = someObj

    for (let element in newObject){
        console.log(`${element} and the value is ${newObject[element]}`);
    }
}
console.log("\nSOLUTION 9:");
console.log(traverseObject({a:1, b:2, c:3}))

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age){
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);

console.log("\nSOLUTION 12:")
console.log(`The name I've set is ${john.name} & the age parameter is ${john.age}`)

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

function getPerson(name,age){
    let nName = name;
    let nAge = age;

    this.name = function getName(){
        return nName;
    }

    this.age = function getAge(){
        return nAge;
    }
}

let jean = new getPerson("Jean",35);

console.log("\nSOLUTION 13:")
console.log(`The name I've set is ${jean.name()} & my age is ${jean.age()}`);
