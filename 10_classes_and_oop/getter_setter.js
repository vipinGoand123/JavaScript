class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}vipin`;
    }
    set password(password){
        this._password = password;
    }

    get email(){
        return`vipin${this._email}`
    }

    set email(email){
        this._email = email
    }
}

const vipin = new User("vipin@gmail.com","abc");
console.log(vipin.password)
console.log(vipin.email)