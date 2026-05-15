// 2. Strings
// 1. Reverse a string without using built-in reverse methods.

function reverse_string(string){
    let str = "";
    for(let i = string.length-1; i >= 0; i--){
       str +=  string[i];
    }
    return str;

}

console.log(reverse_string("Akshit"));



// rest operator is using spread operation in object








// 2. Count the number of vowels in a string.
// 3. Check whether a string is a palindrome.
// 4. Capitalize the first letter of every word in a sentence.
// 5. Find the longest word in a sentence.