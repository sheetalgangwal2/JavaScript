//Array
let marks = [100, 98, 68, 92, 56];
 
console.log(marks);
console.log(marks.length);




let arr = [34, "hello", 67, true, 98, "world"];

console.log(arr[3]);

arr[2] = "sheetal";                 //ARRAY IS MUTABLE
//typeof array is OBJECT

//add new el in end in array
arr.push(false);
arr.push(100);

//delete el from end
arr.pop();

//add new el in starting
arr.unshift(200);

//delete el fom starting
arr.shift();
//using shift and unshift are not recommended 


console.log(arr);          



//ilterate         1-1 krke print krna
let arr2 = [10, 20, 30, 40, 50];


//1st way
// for(let i=0; i<arr2.length; i++){
//     console.log(arr2[i]);
// }


//2nd way
for(let num of arr2){
    console.log(num);
}


let arr3 = [1, 2 ,3, 4];
arr4 = arr3
arr4.push(10);

console.log(arr3);               //copy by reference




//slicing    and   splicing
arr5 = [2, 4, 6, 8, 10];
console.log(arr5.slice(2, 4));       //[6,8]

console.log(arr5.splice(1, 3));       //trim original array    [4,6,8]
console.log(arr5);                     //[2,10]


//adding both arrays             concat
const arr6 = [12, 14, 16, 18, 20];
const arr7 = ["sheetal", true , 10];
const arr10 = [30, 40, 50];

// arr6.push(arr7);
// console.log(arr6);

const arr8 =arr6.concat(arr7, arr10);
console.log(arr8)

