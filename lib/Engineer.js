const Employee = require('./Employee');

// constructor to create engineer object from employee class
class Engineer extends Employee{
    constructor (name, id, email, github) {
        // call parent Employee constructor
        super(name, id, email);

        // this.github = github;
        this.github = 'jane@github.com'
    }

    // methods
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;