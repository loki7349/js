// for

for (let i = 0; i< 10; i++) {
    const element = i;
    if (element== 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);/


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    // console.log(" ");
    
    
}

let myArray =["hanuman", "superman","batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// Break n Continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Dtected 5");
//         break;
//     }
//     console.log(`value of i: ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log("Detected 5");
        continue
    }
    // console.log(`value of i: ${index}`);
    
}