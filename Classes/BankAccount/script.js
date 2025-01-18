class BankAccount {
  constructor(amount){
    this.amount = amount
  }
  getBalance() {
    console.log(this.amount)
  }
  deposit(dep) {
    this.amount += dep
  }
  withdraw(num) {
    this.amount -= num
  }
  
}
const myAcc = new BankAccount(10000)
myAcc.getBalance()
myAcc.withdraw(500)
myAcc.deposit(5110)
myAcc.withdraw(1000)
myAcc.getBalance()