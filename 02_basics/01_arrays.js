//array

const myArr = [0,1,2,3,4,5,6]
console.log(myArr[2]);

//Array methods

myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(-1) //adds elements in the beginning
console.log(myArr);
myArr.shift() // removes the first element
console.log(myArr);
console.log(myArr.includes(9)); //search if element is present
console.log(myArr.indexOf(5)); //search where element is present

const newArr = myArr.join()
console.log(newArr); //binds the array and convert into string
console.log(typeof newArr);

console.log("A ",myArr);

const myn1= myArr.slice(1,3);
console.log(myn1); //it cuts from portion of the array excluding the range
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2); //it cuts portion from the array icluding range
console.log("C ",myArr);

// *the difference between slice and splice is splice changes the main array after cutting it.*