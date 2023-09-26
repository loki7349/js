const course={
    courseName:"js on hindi",
    price:"999",
    courseInstructore:"hitesh"
}
//Destucture
const {courseInstructore: Instructor}=course

//console.log(courseInstructore);
console.log(Instructor);

//{
 //   name:"loki",
   // Coursename:"js in hindi",
    //price: "free"

//};

const todo={
    id:1,
    title:'take out trash',
    user:{
        name:'john'
    },
}
const {
    id:todoId,
    title,
    user:{name},
}=todo


console.log(todoId);

//Destructur arrays

const number=[12,4334,56,76];
const[first, second, ...nums]=number

console.log(first,second,nums);

