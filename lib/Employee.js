// constructor to create employee object with name, id, and email properties
class Employee {
    constructor(name = '', id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    };

    // creates employee method to get employee's name
    getName() {
        return this.name;
    };

    // creates employee method to get employee's id
    getId() {
        return this.id;
    };

    // creates employee method to get employee's email
    getEmail() {
        return this.email;
    };

    // creates employee method to get employee's role
    getRole() {
        return "Employee"
    };
};

// const Alexus = new Employee('Alexus', 1, 'alexus@gmail.com');

module.exports = Employee;