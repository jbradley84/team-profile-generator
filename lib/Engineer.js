const Employee = require('../lib/Employee');

class Engineer extends Employee {
   constructor(github = '') {
      super();

      this.github = github;
   }

   getGithub() {
      return {
         github: this.github
      };
   }
}

module.exports = Engineer