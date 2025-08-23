const userEmail = "aishi@gmail.com"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}

// **NOTES: falsy values => false, 0, -0, NaN, undefined, BigInt 0n, "" ,null
//          truthy value => "0", 'false', " ", [], {}, function(){}

const userEmail1 = []  //empty array
if(userEmail1.length === 0){
    console.log("email is empty");
}

const empObj ={}
if(Object.keys(empObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator(??): null undefined
//  usage:when you only want to handle null or undefined but still allow valid falsy values like 0, false, or "".

let val1 = undefined ?? 15
console.log(val1); //If value is null or undefined, then it will print val1 .

let val2 = null ?? 10
console.log(val2);

let val3 = 10 ?? 15
console.log(val3);  //If value is not null or undefined, then first input(i.e,10) will be printed.

// Ternary Operator(a shorthand way of writing an if...else statement in a single line.)
//syntax: condition ? expressionIfTrue : expressionIfFalse
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.group("less than 80")