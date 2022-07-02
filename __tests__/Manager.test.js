const Manager = require('../lib/Manager');

test('creates a manager object', () => {
   const manager = new Manager();

   expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getOfficeNumber
test("gets manager's office number as an object", () => {
   const manager = new Manager();

   expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
});