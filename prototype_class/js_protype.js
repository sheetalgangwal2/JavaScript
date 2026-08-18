//Prototype And Classes

const obj ={
    name:"sheetal",
    age:19,
    greet: function(){
        console.log("hello")
    }
}


// console.log(obj.name);
// obj.greet()


console.log(obj.hasOwnProperty("name"));    //true cause name key exist
console.log(obj.hasOwnProperty("number"));   //false

console.log(obj.toString());


// const arr = [10, 20, 30];
// console.log(arr.length);


const obj2 = {
    account:30
}

obj2.__proto__ = obj;


console.log(obj2.name)