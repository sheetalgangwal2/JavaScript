//Scope 

let  a = 10;
const b = 20;
var e = 50;

console.log(a);                //global scope

function greet(){
    let c = 30;
    console.log(c)
;    console.log(a);
    console.log(e);
}

greet();            //also golabbly scope


if(true){
    console.log(b);          //also globally scope
    let d = 40;
    console.log(d);
} 


// console.log(c);         //the val of c assgn in function so outside it give error

// console.log(d);         //same as c 

console.log(e);




