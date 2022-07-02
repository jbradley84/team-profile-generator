const Intern = require('../lib/Intern');

test('creates an intern object', () => {
   const intern = new Intern();

   expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school as an object", () => {
   const intern = new Intern();

   expect(intern.getSchool()).toHaveProperty('school');
});