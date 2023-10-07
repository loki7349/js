// let myName = "loki   "

// console.log(myName.truelength);

let myHero = ["thor","Ironman"]

let heroPower = {
    thor: "Hammer",
    IronMan: "IronSuite",

    getIronManPower: function(){
        console.log(`Iron power is ${this.IronMan}`);
    }
}

Object.prototype.Loki = function(){
    // console.log(`Loki is present in all objects`);
}

Array.prototype.heyLoki = function(){
    // console.log(`Loki says Hello`);
}

// heroPower.Loki()
myHero.Loki()

myHero.heyLoki()
// heroPower.heyLoki()

//inheritance

const User={
    name: "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo: true 
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true ,
    __proto__: TeachingSupport
}


teacher.__proto__ = User

//new approach of proto modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName="ChaiAndCode"

String.prototype.truelength = function(){
    console.log(this);
    // console.log(`${this.name}`)
    console.log(`True length is ${ this.trim().length}`);


}

anotherUserName.truelength()
"Loki".truelength()
"icetea".truelength()