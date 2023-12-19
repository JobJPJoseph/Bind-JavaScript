// Your code here

class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    sayName() {
        return console.log(`${this.name} says hello`);
    }

    sayOccupation() {
        return console.log(`${this.name} is a ${this.occupation}`);
    }

}

module.exports = { Employee, };
