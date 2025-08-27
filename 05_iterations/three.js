//callBack function

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function(item){
//   console.log(item);
})

//callBack function using array function
coding.forEach((item) => {
//    console.log(item);
})

//another way
function printMe(item){
//    console.log(item);
}
//coding.forEach(printMe);

//iteration for the series of objects inside an array using forEach

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})
