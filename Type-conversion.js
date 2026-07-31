//TYPE CONVERSION

// 1 string converision to number

let z = "10";
let c = Number(z);

console.log(c);        //10
console.log(typeof c);   //number



let k = 10;
let l = "10";
console.log(k==l);      //true
console.log(k===l);     //false                  modern dev




let d = "121ac";
let e = Number(d);
console.log(e);           //NaN     not a number
console.log(typeof e);    //number


// 2 Number conversion to String

// let p = "10";
// console.log(typeof p);

//but

let p = 10;
let q = String(p);
console.log(typeof p);


// 3 Boolean to number

console.log(Number(true));     // 1 for true
console.log(Number(false));    // 0 for false


// 4 Null to number
console.log(Number(null));    //0


// 5 Undefined to number;
console.log(Number(undefined));      //Nan


// 6 boolean to string
console.log(String(true));    //true
console.log(typeof String(true));      //string

console.log(String(false));          //false
console.log(typeof String(false));          //string

//similar for mull and undefined


// 7 into Boolean
console.log(Boolean(10));             //true
console.log(typeof Boolean(10));       //boolean


console.log(Boolean("hello"));        //true
console.log(typeof Boolean("hello"));    //boolean


console.log(Boolean (null));            //false
console.log(typeof Boolean(null))         //booelan

console.log(Boolean(undefined));            //false
console.log(typeof Boolean(undefined));     //boolean

console.log(Boolean(0));                  //false
console.log(typeof Boolean(0));               //undefined



//computer scince challenge
let a = 0.1;
let b = 0.2;

let j = a+b;

console.log(j);           //0.30000000000000004
console.log(j==0.3);      //false


// if i try this
let u = "0.1";
let v = "0.2";

let i = Number(u);
let n = Number(v);

let w = i+j;          

console.log(w);      //got 0.4 
console.log(w==0.3);    //false





// 1 Null is loosely equal to undefined only

console.log(null == undefined);    //true
console.log(null === undefined);   //false

console.log(null==0);           //false
console.log(null=="");           //fasle
console.log(null==true);         //false
console.log(null==false);       //false



// < , > , <= , >=    then null --> number , undefined -->NaN
console.log(null>=0);         //true
console.log(null<=0);         //true
console.log(null>0);          //false
console.log(null<0);          //false

console.log(null>=undefined);   //false
console.log(null<undefined);    //false


console.log("world">"hello");       //true       word to word compare    , also campared to ascii value

console.log(10>"10");              //false  camparison should be of equal type

console.log(NaN == NaN);         //false