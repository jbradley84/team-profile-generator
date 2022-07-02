function Intern(school = '') {
   this.school = school;

   this.getSchool = function() {
      return {
         school: this.school
      };
   };
}

module.exports = Intern;