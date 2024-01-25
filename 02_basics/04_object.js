// const tiderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Simaran"
tinderUser.isLoggedIn = false
tinderUser.age = 21

// console.log(tinderUser);


const regularUser = {
    email: "vipin@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vipin",
            lastname: "Goand"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};
const obj4 = {7: "g", 8: "h", 9: "i"};

// const obj3  = {obj1, obj2}
// console.log(obj3);


// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);


// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);



const users = [
    {
        id: 1,
        email: "vipin@gmail.com"
    },

    {
        id: 2,
        email: "vipin2@gmail.com"
    },

    {
        id: 3,
        email: "vipi3@gmail.com"
    },

    {
        id: 4,
        email: "vipin4@gmail.com"
    }
]


users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
