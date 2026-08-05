const addNumber = (num1, num2)=> num1+ num2;

// const sqNum = (num) => num * num

//if single paramemter ..no need to use bracket()
const sqNum = (num) => num * num;

console.log(sqNum(3));




const greeting = ()=>( {name: "sheetal", age: 19})

console.log(greeting());






//IIFE

(function hello(){
    console.log("hello");
})();

//calls automatically immediately
(()=>{
    console.log("world");
})();


