var a = 300 //global scope
if(true){ //block scope
    let a = 10
    const b = 20
    c = 30
    console.log("Inner: ",a);
}
console.log(a);
//console.log(b); //cannot access out of block scope

//in nested function child function can access parent funcion
function one(){
    const username = "Aishi"
    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website); //can't be accesed outside of the function

    two()
}

one() 

//++++++++++++++++++++++++++interesting+++++++++++++++++++++++++

console.log(addnum(5));  //for this method function can be executed even above the function 
function addnum(num){  //one way to write function
    return num + 1
}

const addtwo = function(num){ //another way of writing function by storing it in somewhere

    return num + 2
}

console.log(addtwo(5)); //it needed to be written below to be executed



