class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const Vipin = new User("Vipin");

// console.log(Vipin.createId());


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iphone", "i@iphone.com")

// iPhone.logMe()
// console.log(iPhone.createId())