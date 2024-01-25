/*  ++++++++++ Singleton ++++++++++ */
// Object.create



/*  ++++++++++ Object leteral ++++++++++ */


const mySym = Symbol("key1")


const JsUser = {
    [mySym]: "myKey1",
    name: "Vipin",
    age: 25,
    location: "Lucknow",
    email: "vipingoand99@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Thursday"]
}

// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);

JsUser.email = "vipingoand96@gmail.com"
// console.log(JsUser);


// Object.freeze(JsUser)
JsUser.email = "vipingoand05@gmail.com";
// console.log(JsUser);




JsUser.greeting = function () {
    console.log("Hello js User");
}


JsUser.greeting2 = function () {
    console.log(`Hello js User ${this.name}`);
}

console.log(JsUser.greeting2());