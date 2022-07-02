const Manager = require('../lib/Manager');

test('creates a manager object', () => {
   const manager = new Manager();

   expect(manager.officeNumber).toEqual(expect.any(Number));
});