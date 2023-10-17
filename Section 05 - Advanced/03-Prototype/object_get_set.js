const User1= {
    _email: "tea@gmail.com",
    _password: "qwerty",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea = Object.create(User1)
console.log(tea.email);