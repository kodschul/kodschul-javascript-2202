class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be positive";
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.balance}`;
      }
      return "Insufficient funds";
    }
    return "Withdrawal amount must be positive";
  }

  getBalance() {
    return `Current balance: $${this.balance}`;
  }
}

module.exports = BankAccount;
