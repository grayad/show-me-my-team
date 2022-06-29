const Employee = require('./Employee');

// constructor to create engineer object from employee class
class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        // call parent Employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // methods
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return "Manager"
    };
};

module.exports = Manager;