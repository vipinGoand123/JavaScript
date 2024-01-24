/* +++++++++++ Dates +++++++++++++ */

let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2024, 0, 24);
// let myCreatedDate = new Date(2024, 0, 24, 5, 4);
// let myCreatedDate = new Date("2024-01-24");
let myCreatedDate = new Date("01-24-2024");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate  = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})

