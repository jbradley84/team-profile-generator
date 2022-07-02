function Employee(name = '', id = 1, email = '') {
   this.name = name;
   this.id = id;
   this.email = email;
}

Employee.prototype.getName = function () {
   return {
      name: this.name
   }
}

Employee.prototype.getId = function () {
   return {
      id: this.id
   };
}

Employee.prototype.getEmail = function () {
   return {
      email: this.email
   };
}

module.exports = Employee;