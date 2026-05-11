// let name = "Akshit";
// console.log(name);

//for running it  use :: npx tsx index.ts   OR  npx  ts-node index.ts


let name: string = "Akshit";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
 
console.log(add(5, 10));