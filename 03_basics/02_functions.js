// function calculateCartPrice(num1) {
//     return num1;
// }
// console.log(calculateCartPrice(2));



// function calculateCartPrice(...num) {
//     return num;
// }
// console.log(calculateCartPrice(200, 300, 400));



// function calculateCartPrice(val1, val2, ...num) {
//     return num;
// }
// console.log(calculateCartPrice(200, 300, 400));



const user = {
    userName: "Vipin",
    prices: 199
}


function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user);

// handleObject({
//     userName: "Sam",
//     price: 399
// });


const myNewArray = [200, 400, 100, 600]

function returnSecondVal(getArray) {
    return getArray[1]
}

// console.log(returnSecondVal(myNewArray))
console.log(returnSecondVal([200, 400, 100, 600]))