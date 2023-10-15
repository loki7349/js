class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourses(){
        console.log(`New courses added by ${this.username}`);
    }
}

const chai= new Teacher("chai", "chai@gmail.com", "123")

chai.addCourses()
const masalachai = new User("masalaChai")
masalachai.logMe()

console.log(chai instanceof user);

