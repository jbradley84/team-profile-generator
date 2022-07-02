function Manager(officeNumber = 1) {
   this.officeNumber = officeNumber;
}

Manager.prototype.getOfficeNumber = function () {
   return {
      officeNumber: this.officeNumber
   };
}

module.exports = Manager;