const user = {
    username: "loki",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log("got user details from DB");
        // console.log(`Username ${username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount; 
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`wlcome ${this.username}`);
    }

    return this
}

const UserOne=new User("loki", 12, true)
const UserTwo= new User("Bandar", 12, true)
console.log(UserOne.constructor);
// console.log(UserTwo);
// ?-->new keyword<--//
// step1
// new object create

// Step 2
// constructor calls bcz of new keyword

// step 3
// All tha values and arguements injected in this keyword 

// step 4
// function will give all values



