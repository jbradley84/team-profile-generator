const Employee = require('../lib/Employee');

class Manager {
   constructor(officeNumber = 1) {
      this.officeNumber = officeNumber;
   }

   getOfficeNumber() {
      return {
         officeNumber: this.officeNumber
      };
   }
}

// inherit prototype methods from Employee
Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;