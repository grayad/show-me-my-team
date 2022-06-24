// empty employee array that will hold employee names
const team = [];

// constructor to create employee object with name, id, and email properties
function Employee(name = '', id, email) {
    this.name = name;
    team.push(this.name);

    // this.id = id;
    this.id=team.length;

    // this.email = email;
    this.email='alexus@gmail.com';
};

// creates employee method to get employee's name as an object
Employee.prototype.getName = function() {
    return {
      name: this.name
    };
};

// creates employee method to get employee's id as an object
Employee.prototype.getId = function() {
    return {
      id: this.id
    };
};

// creates employee method to get employee's email as an object
Employee.prototype.getEmail = function() {
    return {
      email: this.email
    };
};

// creates employee method to get employee's role as an object
Employee.prototype.getRole = function() {
    return {
      role: 'employee'
    };
};

// const Alexus = new Employee('Alexus', 1, 'alexus@gmail.com');

module.exports = Employee;