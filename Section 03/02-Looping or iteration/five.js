// For Each


const coding=["js","rb","java","python","cpp"]
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (cval) => {console.log(cval);} )

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach( (item, index, arr) => { console.log(item,index,arr);})

const mycode=[
    {
        langName: "javaScript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

mycode.forEach( (item) => { console.log(item.langFileName);})