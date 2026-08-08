//Foreach

// const arr = [10, 20, 30, 40 ,"sheetal", 50]; 

// arr.forEach((number, index, arr)=>{                //index and arr are optional
//     console.log(number, index,arr);
// })



// arr.forEach((number)=>{                //index and arr are optional
//     console.log(number);
// })


const arr = [10, 20, 30, 40 ,"sheetal", 50];
let sum = 0;

arr.forEach((number)=>{
    sum+=number;
})

console.log(sum);

