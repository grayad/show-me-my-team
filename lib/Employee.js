function Employee(name = '', id, email) {
    this.name = name;

    // this.id = id;
    this.id=Math.floor(Math.random ());
    // this.email = email;
    this.email='alexus@gmail.com';
};

Employee.prototype.getName = function() {
    return {
      name: this.name
    };
};

Employee.prototype.getId = function() {
    return {
      id: this.id
    };
};

Employee.prototype.getEmail = function() {
    return {
      email: this.email
    };
};

Employee.prototype.getRole = function() {
    return {
      role: 'employee'
    };
};

// const Alexus = new Employee('Alexus', 1, 'alexus@gmail.com');

module.exports = Employee;