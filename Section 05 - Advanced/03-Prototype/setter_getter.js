class user{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email= value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password= value
    }
}

const Loki=new user("loki@gmail.com", "abc")
console.log(Loki.password);
console.log(Loki.email);