const post={
    id:1,
    title:"Post one",
    body: "this is the body"
}

//convert to Json String
const str=JSON.stringify(post)
//parse json

const obj=JSON.parse(str)

const posts=[
    {
        id:1,
        title:"Post one",
        body: "this is the body"
    },
    {
        id:2,
        title:"Post two",
        body: "this is the body"
    }
];

const str2=JSON.stringify(posts)
console.log(str2);