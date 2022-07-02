function Employee(name = '', id = 1, email = '') {
   this.name = name;
   this.id = id;
   this.email = email;

   this.getName = function() {
      return {
         name: this.name
      };
   };
}

module.exports = Employee;