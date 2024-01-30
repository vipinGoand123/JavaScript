const coding = ['js', 'ruby', 'java', 'python', 'php'];

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((value)=>{
//     console.log(value);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "PHP",
        languageFileName: "php"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})