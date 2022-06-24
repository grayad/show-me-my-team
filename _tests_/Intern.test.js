const Intern = require('../lib/Intern.js');

test("gets intern's school", () => {
    const intern = new Intern('Jane');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.school.length).toBeGreaterThan(0);
})

test("override employee role to 'intern'", () => {
    const intern = new Intern('Jane');

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});