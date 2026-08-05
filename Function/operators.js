let arr = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80, 90, 100];

const [first, second, ...num]  = arr;
console.log(first, second, num);

const ans = [...arr, ...arr2];          //use ... to arrange in single line
console.log(ans);





// second wayy to create function


const addNum = function(numa, numb, ...num){
    return numa + numb + num;
}


console.log(addNum(2 , 2));




//Arrow function

// const addNumber = (numk, numl, ...num)=>{
//     return numk +numl
// }

// console.log(addNumber(4, 7));
