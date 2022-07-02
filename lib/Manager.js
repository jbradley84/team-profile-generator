const Employee = require('../lib/Employee');

class Manager extends Employee {
   constructor(officeNumber = 1) {
      super();

      this.officeNumber = officeNumber;
   }

   getOfficeNumber() {
      return {
         officeNumber: this.officeNumber
      };
   }
}

module.exports = Manager;