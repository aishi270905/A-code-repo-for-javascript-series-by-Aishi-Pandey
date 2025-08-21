//two ways of declaring empty Object
const tinderUser = new Object() //it is singleton object
const tinder_user = {} // it is non-singleton object
console.log(tinderUser);
console.log(tinder_user);

tinderUser.id = "123abc"
tinderUser.name = "Aishi"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// object inside object
const regularUser = {
    email: "aishi@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Aishi",
            secondName: "Pandey"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

//combining objects
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = Object.assign({}, obj1, obj2)  //syntax: Object.assign(targect(here it is empty set),source)
//another way: using spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);

//when inputs are coming from database, it comes in the form of array of objects
const users = [
    {
        id: 1,
        email: "aishi@gmail.com"
    },
    {
        id: 2,
        email: "aishi@google.com"
    },
    {
        id: 3,
        email: "aishi@linkdin.com"
    }
]
console.log(users[1].email); //accesing of the data inside the array of objects

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it stores the keys of the object in the form of array so the data type is array which later can be used for running loops and all
console.log(Object.values(tinderUser)); //it stores the values of the keys in the array form
console.log(Object.entries(tinderUser)); //shows both keys and values(arrays inside array)

console.log(tinderUser.hasOwnProperty('isLogged')); //checks if the property is there in the object(it can be used while running loop through an object in case it does not find the searching property)


//destructuring objects
const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}
const {courseInstructor: instructor} = course //destructuring vaules
console.log(instructor);

