const user = {
    username: "Vipin",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to our website`)
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Ashu"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let userName = "Vipin"
//     console.log(this)
// }

// one()



// const chai = function () {
//     let userName = "Vipin"
//     console.log(this.userName)
// } 

// chai();


// const chai =  ()=> {
//     let userName = "Vipin"
//     console.log(this)
// } 

// chai();



// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4))


// const addTwo = (num1, num2)=> num1+num2;
// console.log(addTwo(3,4))



// const addTwo = (num1, num2)=> (num1+num2)
// console.log(addTwo(3,4))



const addTwo = (num1, num2)=> ({username: "Vipin"})
console.log(addTwo(3,4))


// const myArray = [2, 3, 4, 5, 6]
// myArray.forEach()