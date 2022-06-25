const Employee = require('./Employee');

// constructor to create engineer object from employee class
class Intern extends Employee{
    constructor (name, id, email, school) {
        // call parent Employee constructor
        super(name, id, email);

        this.school = school

    }

    // methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;