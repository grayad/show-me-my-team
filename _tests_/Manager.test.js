const Manager = require('../lib/Manager.js');

test("gets manager's office number", () => {
    const manager = new Manager('Jane');

    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.office).toBeGreaterThanOrEqual(1);
});

test("override employee role to 'manager'", () => {
    const manager = new Manager('Jane');

    expect(manager.getRole()).toHaveProperty('role','manager');
});