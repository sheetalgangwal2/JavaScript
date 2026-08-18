// const obj1 = {
//     name:"sheetal",
//     age:19,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }
// }


// const obj2 = {
//     name:"vijay",
//     age:20,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }
// }

// const obj3 = {
//     name:"naina",
//     age:30,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }
// }



class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayhi(){
        console.log(`hi ${this.name}`);
    }
}


const Person1 = new Person("Sheetal", 19);
const Person2 = new Person("vijay", 20);
const Person3 = new Person("naina", 30);

console.log(Person1);
console.log(Person2.name);
console.log(Person3.sayhi());    //undefined







class Customer extends Person {
    constructor(name, age, account, balance){
        super(name, age);
        this.account = account;
        this.balance = balance;
    }


    checkBalance(){
        return this.balance;
    }
}

const c1 = new Customer("sheetal", 19, 12, 500);

console.log(c1);
console.log(c1.account);
console.log(c1.checkBalance());