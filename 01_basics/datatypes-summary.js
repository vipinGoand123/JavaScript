/* 
*************** Primitive data types ************

 7 Types: 

    1=> String
    2=> Number
    3=> Boolean
    4=> Null
    5=> Undefined
    6=> Symbol
    7=> BigInt

*************** Reference data types (Non primitive) ************

    1=> Array,
    2=> Object,
    3=> Function,

    
*/


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);


const name = ["Vipin", "Ashu", "Anand"]

let myObj ={
    name: "Vipin Goand",
    age: 22,
}

const  myfunction = function() {
    console.log("hello World")
}


/*

************** Memory Allocation ***********

Stack (Primitive),  Heap (None Premitive)


*/


let myName = "Vipin";

let anotherName = myName;
anotherName = "Ashu"

console.log(anotherName);


let userOne = {
    email: "vipingoand99@gmail.com",
    upi: "user@ybl"
}


let userTwo = userOne;
userTwo.email = "vipingoand@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);