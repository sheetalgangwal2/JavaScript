//class based

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// const p1 = new Person("sheetal", 20);
// console.log(p1);



// //Arrow function                  //this doesnot ecist in arrow function 


// `use strict`
// const greet = ()=>{
//     console.log(this);
// }

// function meet(){
//     console.log(this);
// }

// greet();            //{}
// meet();




// `use strict`

const user = {
    name:"sheetal",
    greet:function(){
        const that =this;
        function meet(){
            console.log(that);
        }
        meet();
    }
}

user.greet();