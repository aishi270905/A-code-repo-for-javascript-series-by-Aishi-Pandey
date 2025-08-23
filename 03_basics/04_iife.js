// Immediately Invoked Function Expressions

(function one(){
    console.log("DB connected.");  //it works to keep away the pollution of the global scope that might meddle into the work of the function and also it is used to execute immediately.
})(); //mandatory use of ';' to end one iife and start others

( (name) => {  //another syntax
    console.log(`DB two connected ${name} `);
})("Aishi")

