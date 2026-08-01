//Number
let b = 3.3423;

console.log(b.toFixed(2));     //3.34
console.log(b.toFixed(6));     //3.342300

console.log(typeof b.toFixed(2));   //string


console.log(b.toPrecision(3))         //3.34


let a = new Number(20);
let d = new Number(20);
console.log(a);             //[Number: 20]
console.log(typeof a);      //object

console.log(a==b);         //false         coz they are obj 