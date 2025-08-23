//when you run a ful series of code, all the code should not run at the same time, it should run one by one when required - it is called CONTROL FLOW

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy course");
}