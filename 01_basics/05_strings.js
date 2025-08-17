const name = "Aishi"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Aishi-hc-game')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)//prints 1st 4 letters
console.log(newString);

const anotherString = gameName.slice(-6,4)//Can accept negative indices
console.log(anotherString);

const newStringOne = "  Aishi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hhtps:goo%20gle.com" //if someone has mistakenly added space
console.log(url.replace('%20','-'));
console.log(url.includes('pandey')); //to find a keyword
console.log(url.includes('com')); //to find a keyword

console.log(gameName.split('-')) //converts to an array in the basis of the separator(i.e, -)