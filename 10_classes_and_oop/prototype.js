let myName = 'Vipin    ';

// console.log(myName.trueLength())



let myHeros = ["Thor", "Spiderman", "Ironman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",
    Ironman: "Fly",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.Spiderman}`)
    }
}

Object.prototype.vipin = function (){
    console.log(`Vipin is present in all object`)
}

Array.prototype.heyVipin = function(){
    console.log(`Vipin say hello`)
}

// heroPower.vipin()

// myHeros.vipin()
// myHeros.heyVipin()
// heroPower.heyVipin()



// Inheritance

const User = {
    name: "Ashu",
    email: "ashu@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// Mordern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function (){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"Vipin".trueLength()

"iceTea".trueLength()