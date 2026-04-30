let a = 5;
let b = 10;


let str = "Finally! Wipro is here!";

//Mathematical operations on a and b:

console.log("Addition" , a + b);
console.log("Multiplication", a * b);
console.log("Division" , a / b);
console.log("Subtraction", a - b);
console.log("Modulus", a % b);

// String operations
console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-5):", str.substring(10, 15));   //15 is not included it is exclusive

// Logical operations --> bool
console.log("a > b:", a > b); // F
console.log("a < b:", a < b); // T
console.log("a == b:", a == b); // F === Strict equality (checks value and type)
console.log("a != b:", a != b); // T
console.log("a >= b:", a >= b); // F
console.log("a <= b:", a <= b); // T