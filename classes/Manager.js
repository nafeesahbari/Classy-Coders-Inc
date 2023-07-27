const { Employees } = require("./Employees");

class Manager extends Employees {
    #employeesManaged
    constructor(name, position, salary, isHired, department, employeesManaged) {
        super(name, position, salary, isHired);
        this.department = department;
        this.#employeesManaged = employeesManaged;
    }

    getEmployeesManaged() {
        return this.#employeesManaged;
    }

    setEmployeesManaged(employees) {
        this.#employeesManaged = employees;
    }

}

// const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10);
// console.log(jenna.getEmployeesManaged()); // []

// const preston = new Employees("Preston", "Engineer", 100000);
// console.log(jenna.setEmployeesManaged(preston));
// console.log(jenna.getEmployeesManaged()); // [ Employee ]

module.exports = {
    Manager,
}