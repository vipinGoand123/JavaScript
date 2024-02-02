// ES6

class User {
    constructor(username, eamil, password){
        this.username = username;
        this.eamil = password;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Vipin", "vipin@gmail.com", "1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the seen

function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai1 = new User("Vipin Goand", "vipin1@gmail.com", "1234")

console.log(chai1.encryptPassword());
console.log(chai1.changeUsername());