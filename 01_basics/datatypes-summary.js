//#Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
const bigNumber = 2345678456789345678n //save as BigInt

//Reference(Non-Primitive)
//Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"] //Array
let myObj = {
    name: "Aishi",
    age:19,
} // object
const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof bigNumber)


//JAVASCRIPT IS DYNAMICALLY TYPED

//-------------------------------------------------------------------------

//stack(Primitive), Heap(Non-Primitive)