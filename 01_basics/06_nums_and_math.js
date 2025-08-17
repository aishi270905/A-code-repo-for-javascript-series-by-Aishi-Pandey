const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance); //showing an object

console.log(balance.toString());
console.log(balance.toString().length); //converts to string
console.log(balance.toFixed(1)); //digits afters decimal

const otherNumber = 123.789
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++maths+++++++++++
console.log(Math);
console.log(Math.abs(-4)); //-ve turns to +ve
console.log(Math.round(4.6)); // round off a number
console.log(Math.floor(4.9)); //floor value
console.log(Math.min(4,3,7,8));
console.log(Math.max(4,3,7,8));
console.log(Math.random()); //always between 0 and 1
console.log(Math.random() * 10 + 1); //always between 1 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() *  (max - min + 1)) + min); 




