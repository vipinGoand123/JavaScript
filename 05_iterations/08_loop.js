
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce( function(acc, currVal){
//     console.log(`acc: ${acc} and Current Value: ${currVal}`)
//     return acc+currVal
// }, 0)

// const myTotal = myNums.reduce( (acc, currVal)=>  acc+currVal, 0)

// const myTotal = myNums.reduce( (acc, currVal)=>{
//     console.log(`acc: ${acc} and Current Value: ${currVal}`)
//     return acc+currVal
// }, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile App dev Course",
        price: 5999
    },
    {
        itemName: "Data science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc + item.price, 0)
console.log(priceToPay);