const employee = require('../lib/Employee');

test('creates an employee object', () => {
   const employee = new Employee('Brenda');

   expect(employee.name).toBe('Brenda');
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toBe(expect.any(String));
});