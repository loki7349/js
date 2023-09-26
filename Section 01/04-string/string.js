const name='lokesh';

const repocount=5;
//console.log(name+ repocount + "value")

console.log(`Hello my name is ${name} 'and my repo count is ${repocount}`);
const gameName=new String('lokesh-p');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const news=gameName.substring(0,4);

console.log(news)


const another=gameName.slice(-8,4)

console.log(another);

const newss="   lokesh   ";
console.log(newss);
console.log(newss.trim());

const url="https://lokesh.com/loki";

console.log(url.replace('loki','p'))


console.log(url.includes('p'))

//challenge to capitalize the first letter
const name1='loki';
console.log(`${name1.charAt(0).toUpperCase()}${name1.substring(1)}`);

let s="0123456788dfhh"

console.log(s.slice(0,6));

console.log("Hello world".indexOf("orld"));

console.log("chandrayana two isro".indexOf("two"));

let ans="js react"
console.log(ans.at());

console.log(ans.anchor("loki"));

let isro="aditya l1";
console.log(isro.charAt(4));

let charcode="a".charCodeAt();
console.log(charcode);

let repeat1="lucy-onePiece "
console.log(repeat1.repeat(4));