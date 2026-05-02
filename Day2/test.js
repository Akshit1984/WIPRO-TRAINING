// Question 1: The Guest List Formatter
// Goal: Practice Template Literals and Array Methods.
// Write a function called formatGuests that takes an array of names. The function should:
// Remove the first name from the list (it’s the host, not a guest).
// Add "Guest: " before each remaining name using .map().
// Return a single string where each guest is on a new line.




function formatGuests(names) {
    names.shift(); // shift function is used to remove the first element from the array as we discussed earliere
    let addname = names.map(name => `Guest: ${name}`);
    return addname.join("\n");
}


let arrOfNames = ["Akshit", "Aaryan", "Aman", "Amit"];
console.log(formatGuests(arrOfNames));  




// Question 2: The Logic Gate (Filter & Math)
// Goal: Practice Arrow Functions, filter, and Math methods.
// Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
// Filter the array to keep only the numbers.
// Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
// Return the final array.






let getHighNumbers = (mixedArray) => {
    return mixedArray.filter(x  => typeof x === "number").filter(y => y > Math.floor(Math.random()*50)+1);
}

let mixedArr=[99, 11 , 3 , "Akshit" , 23, "Aryan", 45];
console.log(getHighNumbers(mixedArr));  




// Question 3: The Price Calculator
// Goal: Practice Type Conversion and splice.
// You have an array of prices, but they are currently strings. Write a script that:
// Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
// Converts the remaining string prices into actual numbers.
// Calculates the sum of those numbers using an arrow function.
// Prints: "Total Price: $[sum]" using a template literal.




let prices = ["52.74","12.01","3.99","46.66","96.47","52.68","85.95","12.512"];
prices.pop(); // use to remove the last element from the array;
let convertToNumber = prices.map(x => Number(x));


let sum = 0;
convertToNumber.forEach(x => sum += x);
console.log(`Total Price: $${sum}`); 

