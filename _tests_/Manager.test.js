const Manager = require('../lib/Manager.js');

test("gets manager's officeNumber", () => {
    const manager = new Manager('Jane');

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.officeNumber).toBeGreaterThanOrEqual(1);
});

test("override employee role to 'manager'", () => {
    const manager = new Manager('Jane');

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});