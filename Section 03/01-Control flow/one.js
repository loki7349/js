// if
// const isUserloggegIn=true
// const temp=41

// if(temp ===41){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed");
//<, >, <=, >=, ==, !=, ===

//if(3===  "3"){
//    console.log(isUserloggegIn);
//}

// const score=200

// if (score >100) {
//     const power="fly"
//     console.log(`user power is: ${power}`);
// }
// console.log(`user power is: ${power}`);

//Short-Hand Notation
const balance=1000
// if (balance>500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less then 900");
// }else{
//     console.log("less than 1200")
// }


const userLoggedin= true
const debitCard= true
const logeedInGoogle= false
const loggedInFromEmail= true

if(userLoggedin && debitCard){
    console.log("Allow to buy course");
}


if(logeedInGoogle || loggedInFromEmail ){
    console.log("user logged in");
}