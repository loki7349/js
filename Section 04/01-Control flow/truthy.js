const usermail = "loki@argon.ai"

if (usermail) {
    console.log("Got user mail");
} else {
    console.log("Don't have user email");
}

// ->falsy value<-

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ->truthy value<-

// "0", 'false', " ", [], {}, function(){}

//const userMail= []

// if (userMail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyobj = {}

// if(Object.keys(emptyobj).length===0){
//     console.log("object is empty");
// }

//Nullish coalescing Operator(??): null undefined

let val1;
//val1=5 ?? 10
//val1= null ?? 10
// val1= undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//terniary Operator

// condition ? true : false 

const icedTeaPrice =100

icedTeaPrice <= 80 ? console.log("less than 80") : console.log("more then 80");;