const { Employees } = require("./Employees");

class SalesPerson extends Employees {
    #totalSales = 0;
    constructor(name, position, salary, isHired, clients) {
        super(name, position, salary, isHired);
        this.clients = clients;
    }
    getSalesNumber() {
        this.#totalSales = this.#totalSales;
    }
    makeSale(amount) {
        this.#totalSales += amount;
    }

}

// const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])
// console.log(malik.getSalesNumber()); // 0
// console.log(malik.makeSale(10500));
// console.log(malik.makeSale(20000));
// console.log(malik.getSalesNumber()); // 30500

module.exports = {
    SalesPerson,
}