const library=[
    {
    title : "Rich Dad and Poor Dada",
    Author: "loki",
    status:{
        own:true,
        reading:false,
        read:false
    }
},
{
    title : "the Monk",
    Author: "jay shetty",
    status:{
        own:true,
        reading:false,
        read:false
    }
},
{
    title : "MahaBharata",
    Author: "shankaracharya",
    status:{
        own:true,
        reading:false,
        read:false
    }
}]

library[2].status.read=true
library[2].status.read=true
library[2].status.read=true
console.log(library);

//step3

const {title: firstbook}=library[0];

console.log(firstbook);

//step4
const libraryJson=JSON.stringify(library)
console.log(libraryJson);