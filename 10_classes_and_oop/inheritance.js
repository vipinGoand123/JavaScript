class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "Chai@teacher.com", "123");

chai.addCourse();
// chai.logMe();

const masalaChai = new User("Masala", "Cmasalahai@teacher.com", "123");

masalaChai.logMe();

console.log(chai instanceof User)