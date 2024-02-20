class BankAccount {
  balance = 0;

  showBalance = () => {
    console.log(this.balance);
  };
}

const bank = new BankAccount(10000000);
bank.showBalance();

class Animal {
  constructor(hhhjhj) {
    console.log("Hi I'm an Animal");
  }

  greet = () => {
    console.log("Wassup!");
  };
}

class Dog extends Animal {
  //   constructor() {
  //     sup;
  //     console.log("Hi I'm a Dog");
  //   }
}

const bobby = new Dog();

bobby.greet();
