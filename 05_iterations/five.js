//reudce function
const myNums = [1, 2, 3, 4]
const myTotal = myNums.reduce(function(acc,currVal){
//    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0  )
//console.log(myTotal);

//reduce function using array function

const myTotal1 = myNums.reduce((acc,curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:1999
    },
    {
        itemName: "data science course",
        price:3999
    },
    {
        itemName: "mobile dev course",
        price:5999
    },
    
]

const totalBillToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(totalBillToPay);