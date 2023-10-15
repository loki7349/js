function SetName(username){
    this.username=username
}

function CreateUser(username, email, password){
    SetName.call(this,username)

    this.email= email
    this.password=password
}

const chai1 = new CreateUser("chai", "loki@gmail.com", "123")
console.log(chai1);