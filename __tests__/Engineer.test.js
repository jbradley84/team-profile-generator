const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
   const engineer = new Engineer();

   expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github as an object", () => {
   const engineer = new Engineer();

   expect(engineer.getGithub()).toHaveProperty('github');
});