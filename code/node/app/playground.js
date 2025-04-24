const BankAccount = require("./bank");

const account = new BankAccount("John", 1000);
console.log(account.getBalance());

console.log(account.deposit(500));
console.log(account.getBalance());

console.log(account.withdraw(200));
console.log(account.getBalance());
