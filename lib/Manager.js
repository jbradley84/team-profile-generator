function Manager(officeNumber = 1) {
   this.officeNumber = officeNumber;

   this.getOfficeNumber = function() {
      return {
         officeNumber: this.officeNumber
      };
   };
}

module.exports = Manager;