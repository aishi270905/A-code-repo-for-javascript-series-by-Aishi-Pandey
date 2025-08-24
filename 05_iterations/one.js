//  for loop
    for(let i = 1; i <=10 ; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++){
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

// break and continue
for(let index = 1; index<=10 ; index++){
    if(index == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`Value is : ${index}`);
}
for(let index = 1; index<=10 ; index++){
    if(index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`Value is : ${index}`);
}

