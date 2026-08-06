//to run code an execution context create :
//1 memeory allocation
//2 execution phase


//console.log(a);    //undefined

var a = 10;
//console.log(a);      //10
var b = 20;

function addnum(num1, num2){
    var sum = num1 + num2;
    return sum;
}

var sumresult1 = addnum(a, b);
var sumresult2 = addnum(2, 2);
var sumresult3 = addnum(6, 3);

console.log(sumresult1, sumresult2, sumresult3);





//let const 


//console.log(m);         // uninitialised (temporal dead zone)             also for const
let m = 20;
const n = 40;

const addnumber = function(numk, numl){
    const sum = numk + numl;
    return sum;
}


const result = addnumber(m , n)
console.log(result);