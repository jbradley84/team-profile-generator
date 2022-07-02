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
test("gets employee's ID number as an object", () => {
   const employee = new Employee();

   expect(employee.getId()).toHaveProperty('id');
});

// getEmail
test("gets employee's email as an object", () => {
   const employee = new Employee();

   expect(employee.getEmail()).toHaveProperty('email');
});

// getRole
// test("gets employee's role as an object", () => {
//    const employee = new Employee();

//    expect(employee.getId()).toHaveProperty('id');
// });