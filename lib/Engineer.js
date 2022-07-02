const Employee = require('../lib/Employee');

class Engineer {
   constructor(github = '') {
      this.github = github;
   }

   getGithub() {
      return {
         github: this.github
      };
   }
}

// inherit prototype methods from Employee
Engineer.prototype = Object.create(Employee.prototype);

module.exports = Engineer