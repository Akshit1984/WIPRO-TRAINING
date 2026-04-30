//QUESTION 1
//The Swapper: Create two variables, a and b, and assign them numbers.
// Write a few lines of code to swap their values so that a gets b's value and vice-versa.


let a = 2;
let b = 6;
console.log("Before Swap: a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After Swap: a =", a, "b =", b);





// QUESTION 2
//Type Checker: Write a function that takes one input and console.log's a message saying "This is a number" or
// "This is a string" based on the data type provided.


function checkType(input) {
    if (typeof input === "number") {
        console.log("It's a number");
    } else if (typeof input === "string") {
        console.log("It's a string");
    } else {
        console.log("This is neither a number nor a string");
    }
}

checkType(22); 
checkType("AKSHIT SHARMA"); 




//QUESTION 3
// Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD"

let fullName = "John Doe";
const space = fullName.indexOf(" ");
let shortName = fullName[0] + fullName[space+1];
console.log(shortName); 




// QUESTION 4
//The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.

let messy = " Javascript is fun ";
console.log("Before triming and changing case:", messy);
console.log("Length of string:", messy.length);
let spaceremover = messy.trim().toLowerCase();

console.log("After triming and changing case:", spaceremover);
console.log("Length of string:", spaceremover.length);

//QUESTION 5
//The Switcher: Write a switch statement that takes a variable let choice = "A" and logs "Choice is A", "Choice is B", or "Invalid choice" based on the value of choice.

let choice = "A";
switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;
    default:
        console.log("Invalid choice");
}




// QUESTION 6
//The Looping Logger: Given an array let arr = [1, 2, 3, 4, 5], write code to log each element multiplied by 2 using a for loop, a while loop, and the forEach method.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log("Elements multiplied by 2", ":", arr[i] * 2);
}
let lengthOfArr = arr.length;
let i = 0;
while ( i <lengthOfArr) {
    console.log("Elements multiplied by 2", ":", arr[i] * 2);
    i++;
}

arr.forEach(function(x) {
    console.log("Elements multiplied by 2 ",":", x * 2);
});