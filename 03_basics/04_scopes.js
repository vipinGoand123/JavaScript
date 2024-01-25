function one() {
    const userName = "Vipin";

    function two() {
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website)

    two();
}
one();



if(true){
    const userName = "Ashu";
    if(userName === "Ashu"){
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);



/* ++++++++++++++ Iteresting ++++++++++++++ */

console.log(addOne(5));

function addOne(num) {
    return num+1;
}




const addTwo = function (num) {
    return num + 2;
}

addTwo(5)