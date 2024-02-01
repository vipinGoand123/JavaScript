// fetch('https://somthing.com').then().catch().finally()

const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolve");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "Chai", email: "Chai@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user.username);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "vipin", password: "1234" });
    } else {
      reject("ERROR: Somthing went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejectes");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascipt", password: "1234" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: Internal server error");
//     }
// }

// getAllUsers();

fetch("https://api.github.com/users/vipingoand123")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
