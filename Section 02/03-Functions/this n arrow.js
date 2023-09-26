const user1={
    username:"loki",
    price:987,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

//user1.welcomeMsg()

//user1.username="preet"
//user1.welcomeMsg()

//console.log(this);


function chai(){
    let usernm="loki"
    //console.log(this.usernm);
}
//chai()


const chai1= ()=>{
    let usernm="loki"
    console.log(this);
}

//chai1()

// arrow fun: syntax-> () => {}

//Simle or Explicit Arrow function
//const addtwo=(num1, num2) => {
//    return num1+num2
//}


//Implicit Arrow function
//const addtwo=(num1, num2) => (num1+num2)


const addtwo=(num1, num2) =>( {username: "loki"})

console.log(addtwo(3,4));