//function

function greeting(){
    console.log("hello world!");
}


//function call
greeting();



//add numbers using function
// function addnumb(num1, num2, num3=0, num4=0){
//     const sum = num1+ num2 + num3 + num4;
//     console.log(sum);
// }




//rest oper

function addnumb(...num){            //creates array
    
    let sum=0;

    for(let n of num){
        sum+=n;
    }

    console.log(sum);
}


addnumb(2, 2);
addnumb(10, 20);

// console.log(greeting);
// console.log(greeting());       //show undefined

addnumb (2, 3, 4);
addnumb(2, 4, 6,43)

//
addnumb(23, 56, 3, 55, 33, 2, 5, 87, 90, 65, 12, 7)




