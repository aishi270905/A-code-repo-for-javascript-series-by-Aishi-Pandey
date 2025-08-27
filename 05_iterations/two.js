//  for of (In JavaScript, the for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, NodeLists, etc. It gives you the values directly, not the indices).
// ["", "", ""]
// [{}, {}, {}]
//Usually used for arrays, strings, maps, sets.

const arr = [1, 2, 3, 4, 5, 6]
for (const val of arr) {
//    console.log(val);
}

const greetings = "Hello World"
for (const greet of greetings) {
  //  console.log(`Each char is ${greet}`);
}

// Maps (it is a datatype which is similar to array, it just follows the insertion order while printing and it only prints the unique values(no duplicates) )

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('Fr', 'France')

console.log(map);

for(const [key,value] of map){ // for printing map we can use for of loop, but not for objects
//    console.log(key, ':- ', value );
}

//for object printing, for in loop is used
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//        console.log(`${key} shortcut is for ${myObject[key]}`); //for printing value it is the syntax: objectName[key]
    
}

//for in loop on arrays → gives indexes, not values.

const programming = ["js", "rb", "py", "cpp"]

for(const key in programming){
   console.log([programming[key]]);
}

