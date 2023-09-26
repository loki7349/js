console.log(100);
console.log("hello world");

const x=100;
console.log(x);

console.error('Alert');

console.warn('Warning');


console.group('Simple');
console.log(x);

console.error('Alert');

console.warn('Warning');
console.groupEnd();

const styles='padding: 10px; backgroud-color: white; color: green';

console.log('%cHello world', styles);