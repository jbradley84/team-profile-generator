const Manager = require('../lib/Manager');

test('creates a manager object', () => {
   const manager = new Manager('Brenda', 54, 'brenda@company.com', 207);

   expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getOfficeNumber
test("gets manager's office number as an object", () => {
   const manager = new Manager('Brenda', 54, 'brenda@company.com');

   expect(manager.getRole()).toEqual('Manager');
});