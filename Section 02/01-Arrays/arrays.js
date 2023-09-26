const myArr=[1,2,3,4,5,6]
console.log(myArr);

const myarr2=new Array(1,2,3)
console.log(myarr2);

//Array Methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

myArr.unshift(9)
myArr.shift
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(19));
console.log(myArr);

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);

//slice splice

console.log("A", myArr);
const myA=myArr.slice(1,3)
console.log(myA);
console.log("B", myArr);

const myA1=myArr.splice(1,3)
console.log("c", myArr);
console.log(myA1);

console.log("***************");
const course=["HTML", "CSS","JavaScript"]
console.log(course);
course[1]="geeksforgeeks"
console.log(course);

console.log(course.toString());

course.length=4
console.log(course);
course.length=2
console.log(course);

const  course1=["Reactjs", "AI&ML","Data Science","Nodejs"]
for (let i = 0; i < course1.length; i++) {
    console.log(course1[i]);
    
}

function func(){
    let num1=[11,22,33],
        num2=[44,55,66],
        num3=[77,88,99]
        console.log(num1.concat(num2,num3));
}
func()

function foo(){
    const items=[12,24,36]
    const copy=[]
    items.forEach(function(item){
        copy.push(item+item+2)
    })
    console.log(copy);
}
foo()

function foo1(){
    let a1=[1,2,3,4,5,6]
    console.log(a1.join('|'));
}
foo1()

let le=[3,4,5];
let iterator=le.keys()
for(let key of iterator){
    console.log(key);
}
    

let arrr=[10,20,30,40,50]
function sumofarr(sum, num) {
    return sum+num
}

function mygeeks(item){
    console.log(arrr.reduce(sumofarr));
}
mygeeks()

function re(){let rev=["lokeah",'preeti']
let ree=rev.reverse()
console.log(ree);
}
re()