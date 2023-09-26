let d ;
d=new Date();

console.log(d,typeof d)

d=d.toString();

d=new Date(2023, 9, 21,21, 53,0);
console.log(d)

d=new Date('2023-09-21');
console.log(d);

console.log('------------------');
let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let myCreateDate= new Date(2023, 9,21);
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());


console.log('===================');

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newS=new Date()
console.log(newS)
console.log(newS.getMonth()+1);
console.log(newS.getDate());
console.log(newS.valueOf());
newS.toLocaleString('default',{
    weekday: "long",
    
})

console.log(newS);

let t;
let r=new Date();
t=r.getFullYear();
console.log(t);

t=`${r.getFullYear()}-${d.getMonth()+1}-${r.getDate()}`
console.log(t);