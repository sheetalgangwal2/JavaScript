//this call apply bind

//strict mode vs non strict mode


// 'use strict'
// function greet(name, name){
//     console.log(name, name);
// }

// greet("sheetal", "naina");   //naina naina      before use strict




// console.log(window);    //error in node js



//global object: in window it is colled window, in node js, it is called global
// console.log(globalThis); 




//about this keyword       => in node js it point to empty an d in browser it is point in global

// 'use strict'
// console.log(this);         //{}




//function

const user = {
    name:"sheetal",
    age:19,
    greet: function(){
        console.log(`hi ${this.name}`);
    }
}

//this == user


user.greet();