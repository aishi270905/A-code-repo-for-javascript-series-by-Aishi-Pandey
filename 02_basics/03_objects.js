//crearion of objects: 1)singleton(declaring using constructors)  2)literals

//object literals

const mySym = Symbol("key1")  //assgining symbol
const JsUser = { //object
    name: "Aishi",
    "full name": "Aishi pandey",
    [mySym]: "mykey1",  //syntax for using a symbol as a key inside an object
    age: 19,
    location:"sohra",
    email:"aishi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

//changing values of an object
JsUser.email = "aishi@linkdin.com"
//Object.freeze(JsUser) //objects freeze here so after this any changes wont be considered
JsUser.email = "aishi@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`); //string interpulation; "this" is used for referencing same object
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

/*
=> Use . (dot notation) when:

1)You know the property name in advance.
2)The property name is a valid identifier

=> Use [] (bracket notation) when:

1)The property name is stored in a variable.
2)The property name is not a valid identifier (e.g., has spaces, starts with a number, or special characters).

*/