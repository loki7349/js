//const tinderUser=new Object() -->singleton 


const tinderUser={}

tinderUser.id="12qwa"
tinderUser.name="sam"
tinderUser.isLogged=false

//console.log(tinderUser);

const regularUser={
    email:"sam21@gmail.com",
    fullName:{
        userFullName:{
        firstNm: "loki",
        lastNm: "B"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstNm )

const obj1={
    1:"a",
    2:"b"
}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));