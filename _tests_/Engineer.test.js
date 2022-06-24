const Engineer = require('../lib/Engineer.js');

test("gets engineer's github username", () => {
    const engineer = new Engineer('Jane');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github.length).toBeGreaterThan(0);
});

test("override employee role to 'engineer'", () => {
    const engineer = new Engineer('Jane');

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});

