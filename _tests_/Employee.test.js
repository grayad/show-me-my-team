const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Alexus');

    expect(employee.name).toBe('Alexus');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name as an object", () => {
    const employee = new Employee('Alexus');

    expect(employee.getName()).toHaveProperty('name')
});

test("gets employee's id as an object", () => {
    const employee = new Employee('Alexus');

    expect(employee.getId()).toHaveProperty('id')
});

test("gets employee's email as an object", () => {
    const employee = new Employee('Alexus');

    expect(employee.getEmail()).toHaveProperty('email')
});

test("gets employee's role as an object", () => {
    const employee = new Employee('Alexus');

    expect(employee.getRole()).toHaveProperty('role','employee');
});