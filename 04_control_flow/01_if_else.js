/* ++++++++++ If Condition ++++++++++++ */

// const isUserloggedIn = true;
// const temperature = 20;

// if (temperature < 30) {
//     console.log("Less than 30")
// }

// else{
//     console.log("Temperature is greater than 30")
// }


// const score = 200;
// if (score>100) {
//     const power = "fly";
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`);


// const balance = 1000;
// if (balance>500) console.log("Test"), console.log("test2");


// if (balance<500) {
//     console.log("Less than 500");
// }
// else if (balance<750) {
//     console.log("less than 750")
// } 
// else if (balance<900) {
//     console.log("less than 900")
// } 
// else{
//     console.log("less than 1200")
// } 


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loogedInFromEmail = true;

if (userLoggedIn && debitCard && 2===3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loogedInFromEmail) {
    console.log("User logged in")
}


// NUllish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20

console.log(val1)



// Terniary Operator


// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log("less than 80"):console.log("More than 80");