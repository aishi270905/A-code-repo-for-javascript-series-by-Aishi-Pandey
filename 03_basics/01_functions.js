function sayMyName(){
    console.log("A");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("i");
}
sayMyName(); //function execution

function addTwoNumbers(number1, number2){ //number1, number2 are parameters

    return (number1 + number2);
}
const result = addTwoNumbers(3,4);
console.log(addTwoNumbers(3,4)); //3, 4 are arguments
console.log(addTwoNumbers(3,null));
console.log("Result: ",result);

function loginUserMessage(username = "Person"){ //if nothing is passed , atleast it will show person instead of undefined and will later overwrite the input
    if(username === undefined){
        console.log("Please return a user name");
        return
    }
    return `${username} just loggin in`
}

console.log(loginUserMessage("Aishi"));
console.log(loginUserMessage("")); //empty string will return nothing
console.log(loginUserMessage()); //not paasing any value will print undefined

function calculateCartPrice(...num1){ //rest operator for functions
    return num1
}
console.log(calculateCartPrice(200,300,400,500)); //return array

//how object is passed to function
const user = {
    username: "Aishi",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
//method of directly passing object to function

handleObject({
    username: "Aishi",
    price: 399
})

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));