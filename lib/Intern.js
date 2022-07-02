function Intern(school = '') {
   this.school = school;
}

Intern.prototype.getSchool = function () {
   return {
      school: this.school
   };
}

module.exports = Intern;