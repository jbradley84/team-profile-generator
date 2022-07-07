const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
   const engineer = new Engineer('Brenda', 54, 'brenda@company.com', 'brendahub');

   expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's role as an object", () => {
   const engineer = new Engineer('Brenda', 54, 'brenda@company.com');

   expect(engineer.getRole()).toEqual('Engineer');
});