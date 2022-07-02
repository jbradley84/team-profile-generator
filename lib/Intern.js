const Employee = require('../lib/Employee');

class Intern {
   constructor(school = '') {
      this.school = school;
   }

   getSchool() {
      return {
         school: this.school
      };
   }
}

// inherit prototype methods from Employee
Intern.prototype = Object.create(Employee.prototype);

module.exports = Intern;