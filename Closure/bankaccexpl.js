//private bank aacc

function createBankAcc(){

let balance = 500;

let user= {
    deposit: function(amount){
        if(typeof amount =="number" && amount>0){
        balance+=amount;
        return balance;
        }
    },

    withdraw: function(amount){
        if(typeof amount =="number"  && amount>0 && balance>=amount){
            balance-=amount;
            return balance;
        }
    }, 

    getBalance: function(){
        return balance;
    }

    }

return user;
}


// console.log(user.getBalance());

// console.log(user.deposit(200));
// console.log(user.withdraw(400));
// console.log(user.getBalance());



const customer = createBankAcc();
console.log(customer);
console.log(customer.withdraw(300));
console.log(customer.deposit(1000));