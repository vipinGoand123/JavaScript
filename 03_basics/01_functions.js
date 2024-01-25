
function sayMyName() {
    console.log("V");
    console.log("i");
    console.log("p");
    console.log("i");
    console.log("n");
}

// sayMyName();

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

// addTwoNumber(3,"4")
// addTwoNumber(3,"a")
// addTwoNumber(3, null)

function addTwoNumber(number1, number2) {
//    let result = number1 + number2;
//    return result

return number1 + number2;
}

const result = addTwoNumber(3, 8);

// console.log("Result", result);


function loginUserMessage(userName="Test") {
    // if (userName === undefined) {
    //     console.log("Please enter a name")
    //     return
    // }
    // else{
    //     return `${userName} just logged in`
    // }

    if (!userName) {
        console.log("Please enter a name")
        return
    }
    else{
        return `${userName} just logged in`
    }
}

// console.log(loginUserMessage("Vipin"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("vipin"));
