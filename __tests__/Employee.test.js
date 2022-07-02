const Employee = require('../lib/Employee');

test('creates an employee object', () => {
   const employee = new Employee();

   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

// getName
test("gets employee's name as an object", () => {
   const employee = new Employee();

   expect(employee.getName()).toHaveProperty('name');
});

// getId
// getEmail
// getRole