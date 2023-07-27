class Employees {
    #salary;
    #isHired = true;
    constructor(name, position, salary, isHired) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.isHired = isHired;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(amount) {
        this.#salary = amount;
    }

    getStatus() {
        return this.#isHired;
    }

    setStatus(command) {
        if (command === "hire") {
            this.#isHired = true;
        } else if (command === "fire") {
            this.#isHired = false;
        } else {
            throw new Error("Invalid command");
        }
    }

}

//
const preston = new Employees("Preston", "Engineer", 100000);
console.log(preston.getSalary()); // 100000
preston.setSalary(105000);
console.log(preston.getSalary()); // 105000

module.exports = {
    Employees,
}