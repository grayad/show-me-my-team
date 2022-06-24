const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Alexus');

    expect(employee.name).toBe('Alexus');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name value", () => {
    const employee = new Employee('Alexus');

    expect(employee.getName()).toHaveProperty('name')
});

test("gets employee's id value", () => {
    const employee = new Employee('Alexus');

    expect(employee.getId()).toHaveProperty('id')
});

test("gets employee's email value", () => {
    const employee = new Employee('Alexus');

    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets employee's role value", () => {
    const employee = new Employee('Alexus');

    expect(employee.getRole()).toHaveProperty('role','employee');
});