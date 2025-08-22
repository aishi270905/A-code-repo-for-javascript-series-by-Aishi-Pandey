const user = {
    username: "Aishi",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //'this' is used to reffer the current context inside an object(it does not work inside function)
        console.log(this); // gives the current context or current variable
    }
}

//user.welcomeMessage()
//user.username = "puja"
//user.welcomeMessage()

//console.log(this); //refers an empty object because there is no context in the global

//       Arrow Function

const one = (num1, num2) =>{             // *inside arrow function 'this' would not work* 
    return num1 + num2
}
console.log(one(3, 4));

//inplisit return (another way of calling arrow function)

const two = (num1, num2) => num1 + num2  //shorter syntax
const three = (num1, num2) => ({username: "Aishi"})
console.log(two(4,5));
console.log(three(4,5));