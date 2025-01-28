/*Exercise 17: Protecting Object Properties with Closures

Problem:

Create a constructor function `BankAccount` that takes an initial balance. 

Provide methods 'deposit' and 'withdraw' to interact with this balance. 

Use closures to protect the balance from being accessed or modified directly.*/

function BankAccount(initial) {
    let account = initial
    //start(initial) {
    //const account = {balance: initial}
    /* Object.defineProperty(account, "account.balance", {
        
        enumerable: false,
        configurable: false,
        writable: false
    })  */
   //Object.seal(account)
    //return account
//},
    this.deposit = function (amt) {
        
        account += amt;
        //console.log(account)
        return account
    }

    this.withdraw = function (amt) {
        account -= amt;
        return account
    }

    this.getbalance = function () {
        return account
    }
    return account
}

/* const deposit = function(account, val) {
    account.balance = account.balance + val;
    return account.balance
} */

const max = new BankAccount(1000)
console.log(max.getbalance())
max.deposit(400)
console.log(max.getbalance())
max.withdraw(400)
console.log(max.getbalance())
max.account = 400;
console.log(max.getbalance())
//console.log(max)
//console.log(max.balance)
//max.balance = 400
//console.log(max.balance) 
//console.log(max)
