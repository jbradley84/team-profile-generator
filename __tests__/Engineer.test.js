const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
   const engineer = new Engineer();

   expect(engineer.github).toEqual(expect.any(String));
});