// constructor to create employee object with name, id, and email properties
class Employee {
    constructor(name = '', id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    };

    // creates employee method to get employee's name as an object
    getName() {
        return {
            name: this.name
        };
    };

    // creates employee method to get employee's id as an object
    getId() {
        return {
            id: this.id
        };
    };

    // creates employee method to get employee's email as an object
    getEmail() {
        return {
            email: this.email
        };
    };

    // creates employee method to get employee's role as an object
    getRole() {
        return {
            role: 'employee'
        };
    };
};

// const Alexus = new Employee('Alexus', 1, 'alexus@gmail.com');

module.exports = Employee;