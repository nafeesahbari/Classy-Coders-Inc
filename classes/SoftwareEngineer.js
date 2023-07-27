const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees{
    #programmingLanguages;
    constructor(name, position, salary, isHired, programmingLanguages) {
        super(name, position, salary, isHired);
        this.#programmingLanguages = programmingLanguages;
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }
    setProgrammingLanguage(language) {
        this.#programmingLanguages = new language;
    }

}

// const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
// console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
// console.log(programmer.setProgrammingLanguage("C#")); 
// console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"]

module.exports = {
    SoftwareEngineer,
}