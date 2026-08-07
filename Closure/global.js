let global = 10;

function greet(){

    let global = 40;
    console.log(global);    //now it gives 40 not 10  coz 40 is in fnction
}

greet();



function createCounter(){


    let count = 0;

    function increment(){
        // console.log("i am increment function");
        count++
        return count;
    }

    //return increment();             //undefined
    return increment;
}

// const count =createCounter();
// count()

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());