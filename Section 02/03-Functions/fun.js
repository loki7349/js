

function sayMyName(){

console.log("L");
console.log("o");
console.log("k");
console.log("e");
console.log("s");
console.log("h");
}
sayMyName();

//function addTwuNumbers(number1, number2){
  //  console.log(number1+number2);
//}

//addTwuNumbers(3,5);
//addTwuNumbers(3,"7")
function addTwuNumbers(number1, number2){
    //let result=number1+number2;
    //console.log("hitesh");
    return number1+number2
}


const result=addTwuNumbers(2,5)
//console.log(result);

//function loginUserMessage(username){
  //  return `${username} just logged in`
//}
//console.log(loginUserMessage("loki"))
//console.log(loginUserMessage())
function loginUserMessage(username="sam"){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("loki"));

function calculateCartPrice(val1, val2 ,...num1){  //...Rest operator
    return num1
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,344,34));

const user={
    username1:"loki",
    prices:99
}

function handleObject(anyObaject){
    console.log(`Usernaem is ${anyObaject.username1} and price is ${anyObaject.price}`);
}
//handleObject(user)
handleObject({
    username1 :"sam",
    price:990
})


const myNewArray=[200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));