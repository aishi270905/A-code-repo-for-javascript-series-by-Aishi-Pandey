let score = 33
let score1 = "33"
let score2 = "33abc"
console.log(typeof(score))
console.log(typeof(score1))
let valueInNumber = Number(score1)
let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber))
console.log(typeof(valueInNumber2))
console.log(valueInNumber)
console.log(valueInNumber2)
//true => 1; false => 0
let isLoggedin=1
let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn)
//"" => false
//"Aishi" => true
let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber)
console.log(typeof stringNumber)

//**************Operations*************

let value = 3
let negValue = -value
console.log(negValue)
console.log(2**2)//power => 2^2

let str1 = "Hello"
let str2 = "Aishi"
let str3 = str1+str2
console.log(str3)

console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(1 + "2")

console.log(null > 0)  //comparisons(><>=<=) works differently than equiality check.Conversion converts null to a number(0)
console.log(null == 0)
console.log(null >= 0)

console.log("2" === 2) //checks strictly as if checks its datatype also


