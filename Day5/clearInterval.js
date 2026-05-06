// const timeoutId = setTimeout(() => {
//     console.log("Data received");
// }, 5000);
// console.log("test");
 
// clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
console.log("check ");
 // After some time, we can clear the interval
//here setInterval will run first but it will take 3 seconds to run and in the meantime clearInterval will run and it will clear the interval before it can log "Checking for new data..." and then it will log "check 2"

clearInterval(i);
console.log("check 2");


// const x = setInterval(() => {
//     console.log("Checking why clearInterval is working first ");
// }, 0.1);

// clearInterval(x);
