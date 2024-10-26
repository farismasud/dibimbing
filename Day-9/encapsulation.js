class BankAccount {
    #balance;

    constructor(owner, balance) {
        this.owner = owner
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
        console.log(`Deposited $${amount}. New balance is $${this.#balance}.`)
    }

    getBalance() {
        return this.#balance
    }
}
const accout = new BankAccount('John', 1000)
accout.deposit(500)
console.log(accout.getBalance())