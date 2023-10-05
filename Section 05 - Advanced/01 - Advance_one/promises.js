const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, Cryptography, network

    setTimeout(function(){
        console.log('Async task is complte');
        resolve()
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promisethree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "chai", email: "chai@example.com"})
    }, 1000);
})


promisethree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({userName: "loki", password:"loki@1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either  resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({userName: "loki", password: "loki@123"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000);
})

async function consumePromise(){
    try {
        const response=await promiseFive
    console.log(response);
}catch (error) {
        console.log(error);
    }
}
consumePromise();

// async function getAlluser(){
//     try {
//         constresponse=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("ERROR: ",error);
//     }
// }

// getAlluser()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))
