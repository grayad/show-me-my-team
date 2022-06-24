const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Jane');

    expect(typeof(employee)).toBe("object");
});

test("gets employee's name value", () => {
    const employee = new Employee('Jane');

    expect(employee.name).toBe('Jane');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toHaveProperty('name')
});

test("gets employee's id value", () => {
    const employee = new Employee('Jane');

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.id).toBeGreaterThanOrEqual(1);
    expect(employee.getId()).toHaveProperty('id');
});

test("gets employee's email value", () => {
    const employee = new Employee('Jane');

    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets employee's role value", () => {
    const employee = new Employee('Jane');

    expect(employee.getRole()).toHaveProperty('role','employee');
});