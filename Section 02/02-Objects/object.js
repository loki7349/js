//SingleTon

//Object literals

const mySym=Symbol("key1")

const jsUser={
    name:"loki",
    "full name":"loki b",
    [mySym]: "mykey1",
    age:23,
    Location: "bangolre",
    email:"loki@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondat","Saturday"]



}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym], jsUser[mySym]);
console.log(jsUser[mySym]);

jsUser.email="lokeshargon19l@gmail.com";
//Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);


}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());