/* +++++++++++ Array +++++++++++++ */

const myArr = [0, 1, 2, 3, 4, 5, 6];

const name = ["Vipin", "Anand", "Munna", "Ashu"];

const myNumber = new Array(23, 24, 32, 25, 22);



// console.log(myArr[1]);


/* +++++++++++ Array Methods +++++++++++++ */

// myArr.push(7);
// myArr.push(8);
// myArr.pop();

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

/* +++++++++++ Slice, Splice +++++++++++++ */

console.log("A", myArr)
const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2)