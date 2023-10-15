
class User1{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `234`
    }
}

const loki = new User1("loki")
// console.log(loki.createId())

class teacher extends User1{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone = new teacher("iphone", "i@phone.com")

console.log(iphone.createId());