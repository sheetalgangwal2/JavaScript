// Non primitive dt are mutable (changeable)

//  Array 

let arr = [10, 20.34 , 21, "sheetal" , true];
arr.push(77);
arr[0] = ('hello')
console.log(arr);
console.log(typeof arr);     //object

// Object 
// [sheetal 123123 18 gen] 
let obj = {
    name: "sheetal",
    account: 123123,
    age:18,
    category: "gen",
}

obj.name = 'vijay'

console.log(obj);
console.log(obj.name);
console.log(typeof obj);



// Function 
function add(){
    console.log("hello")
}


 add();         //  function call 

//function ko varaible ke andar likhna 

let s = function add(){
    console.log("hello")
}

console.log(s);
console.log(s());          //function call

console.log(typeof s);