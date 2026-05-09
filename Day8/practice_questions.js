// JavaScript Coding Problems for Practice


//                                                 1. Variables & Data Types

// Question 1. Create a program that swaps two numbers without using a third variable.

function swapNumbers(a,b){
    a = a + b; // Step 1: Add both numbers and store the result in 'a'
    b = a - b; // Step 2: Subtract 'b' from the new 'a' to get the original value of 'a' and store it in 'b'
    a = a - b; // Step 3: Subtract the new 'b' from the new 'a' to get the original value of 'b' and store it in 'a'
    return [a, b]; // Return the swapped values as an array
}

console.log(swapNumbers(2,5));



// Question 2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.

function typeCheck(value){
    switch (typeof(value)) {
        case 'number':
            return "The value is a number.";    
        case 'string':
            return "The value is a string.";
        case 'boolean':
            return "The value is a boolean.";
        case 'undefined':
            return "The value is undefined.";
        case 'object':
            if (value === null) {
                return "The value is null.";
            } else {
                return "The value is an object.";
            }
        default:
            return "The value is of an unknown type.";
    }

}

console.log(typeCheck());


// Question 2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.


// either can be done this way too

function typeCheck(value){
    if(typeof value === 'number'){
        return "The value is a number.";
    }
    else if(typeof value === 'string'){
        return "The value is a string.";
    }
    else if(typeof value === 'boolean'){
        return "The value is a boolean.";
    }
    else if(typeof value === 'undefined'){
        return "The value is undefined.";
    }
    else if(value === null){
        return "The value is null.";
    }   
    else{
        return "The value is of an unknown type.";
    }
}

console.log(typeCheck(85+ "af"));




// Question 3. Convert temperature from Celsius to Fahrenheit using variables.

//Using Arrow function
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32; // Formula to convert Celsius to Fahrenheit
}

console.log(celsiusToFahrenheit(100)); 


//Using normal function

function celsiusToFahrenheit1(celsius) {
    return (celsius * 9/5) + 32; // Formula to convert Celsius to Fahrenheit
}

console.log(celsiusToFahrenheit1(37));





// Question 4. Create a simple calculator using variables and arithmetic operators.

function calculator(num1, num2, operation){
    switch (operation) {
        case '+':
            return num1 + num2; 
        case '-':
            return num1 - num2; 
        case '*':
            return num1 * num2; 
        case '/':
            if (num2 !== 0) {
                return num1 / num2; 
            } else {
                return "Error";
            }  
        default:
            return "Invalid operation";
    }       
}

calculate = calculator(7855, 5, '*');
console.log(calculate);
console.log(calculator(250, 5, '+')); 


const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));


// Question 5. Write a program that takes a user’s birth year and calculates age.


function calculateAge(birthYear){
    const currentYear = new Date().getFullYear(); // Get the current year
    return currentYear - birthYear; // Calculate age by subtracting birth year from current year
}
console.log(calculateAge(1998));

//                                                                     2. Strings



// Question 1. Reverse a string without using built-in reverse methods.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Append characters in reverse order
    }
    return reversed;
}

console.log(reverseString("Hello, World!"));

// Question 2. Count the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { 
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello, World!")); 

// Question 3. Check whether a string is a palindrome.

// Question 4. Capitalize the first letter of every word in a sentence.

// Question 5. Find the longest word in a sentence.



// 5. Create a number guessing game using loops
 function numberGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    let attempts = 0;
    let guessedCorrectly = false;
    while (!guessedCorrectly) {
        const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempts++;
        if (userGuess === randomNumber) {
            guessedCorrectly = true;
            console.log(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
        } else if (userGuess < randomNumber) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }   
    }
}

// Print all prime numbers between 1 and 100

function isPrime(a) {
    if (a <= 1) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) { 
        if (a % i === 0) return false;
    }
    return true;
}


// Create a function that returns the greatest of three numbers

function greatestOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1; 
    } else if (num2 >= num1 && num2 >= num3) {
        return num2; 
    } else {
        return num3; 
    }
}


