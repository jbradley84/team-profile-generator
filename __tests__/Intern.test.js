const Intern = require('../lib/Intern');

test('creates an intern object', () => {
   const intern = new Intern('Brenda', 54, 'brenda@company.com', 'Coding University');

   expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's role as an object", () => {
   const intern = new Intern('Brenda', 54, 'brenda@company.com');

   expect(intern.getRole()).toEqual('Intern');
});