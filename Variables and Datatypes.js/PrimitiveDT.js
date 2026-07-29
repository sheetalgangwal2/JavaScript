// primitive dt are immutable (can't changeable) 

// 7 types 


// Number 
let a = 10;
let b = 3.14;

let k = a;
a = 55;
console.log(a);     //55
// console.log(a, b)

console.log(typeof a);


// String 
let c = "hello, I am sheetal";
let d = 'yeah'
console.log(c, d)


// Boolean 
let login = true;
let f = false;
console.log(login, f)


// Undefined 
let user;
// const p;   error 
console.log(user)


// Bigint             last me n taki pata chle big int hai
let num = 4357329659375710860861n;
console.log(num)


// Null               intentionally absence of any obj value
let e = null;
console.log(e)
console.log(typeof e);        //object

// Symbol 
const id1 = Symbol("id");

const id2 = Symbol("id");

console.log(id1)
console.log(id1 == id2)         //false