const marvel_heros=["thor","Ironman","Spriderman"]
const dc_heros=["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

const allheros=marvel_heros.concat(dc_heros)
console.log(allheros);
//Spread operator
const allnewheors=[...marvel_heros, ...dc_heros]
//console.log(allnewheors);

const another_arr=[1,2,3,[4,5,6],7,[8,9,[1,2]]]

const real_another_arr=another_arr.flat(Infinity);
 console.log(real_another_arr);




console.log(Array.isArray("loki"));
console.log(Array.from("loki"));
console.log(Array.from({name: "loki"}));//interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


