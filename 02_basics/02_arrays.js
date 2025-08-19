const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Fllash", "Batman"]

//const Heros = marvel_heros.push(dc_heros); // it creates array inside array
//console.log(Heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //it concatinate two arrays

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //it spreads the arrays.Advantage of this is it can join more than two arrays but concat can do upto two only

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //merge all inner arrays in all array
console.log(real_another_array);

console.log(Array.isArray("Aishi")) //checks if the given input is an array
console.log(Array.from("Aishi")) //converts everything in an array
console.log(Array.from({name: "Aishi"})) //interesting!!  (compiler does not understand which to converts- the keys or the inputs), thats why it gives empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); 