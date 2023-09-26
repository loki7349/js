//String

const firstName='sara';
const out=firstName;

console.log(firstName, typeof firstName);

const space='isro';

function agency(){
    const space1='ch-3';
    console.log(space, space1);
}
agency();



//number

const age=23;
const temp=37.2;
console.log(age,temp);

//Boolean

const hasKids=true;
 console.log(hasKids);

//null
const aptNumber=null;

const output=aptNumber;

console.log(aptNumber,typeof aptNumber);

//undefined

let score;

const outpt=score;
console.log(score,typeof outpt);

//symbol

const id=Symbol('id');
const id1=id;
console.log(id, typeof id)

//Bigint

const n=3445454435454n;

const outpu=n;

console.log(n, typeof n);

//reference type

const numbers=[2,3,4,5];

const person={
    name:'bard',
};

function sayHello(){
    console.log('Hello');
}
const outtu=sayHello;

console.log(outtu, typeof outtu)