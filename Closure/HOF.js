//higher order function

// assigned a function into a function 

function double(value){

    return function execute(num){
   return num*value;
        
    }
    
}

const n = double(20)(10);
console.log(n);