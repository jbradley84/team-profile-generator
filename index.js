const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const generatePage = require('./src/page-template');

const teamArray = [];
let employee;

const banner = () => {
   console.log(`
   ====================
   BUILD MANAGER's TEAM
   ====================
   `)
};

const promptManager = () => {
   // run manager prompt
   return inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "Please enter TEAM MANAGER's name."
      },
      {
         type: "input",
         name: "id",
         message: "Please enter TEAM MANAGER's employee ID number."
      },
      {
         type: "input",
         name: "email",
         message: "Please enter TEAM MANAGER's company email address."
      },
      {
         type: "input",
         name: "officeNumber",
         message: "Please enter TEAM MANAGER's office number."
      },
   ])
      .then(managerData => {
         const { name, id, email, officeNumber } = managerData;
         const manager = new Manager(name, id, email, officeNumber);

         teamArray.push(manager);
         banner();
         teamMenu();
      });
};

const teamMenu = () => {
   console.log("Hold up.")
   return inquirer.prompt([
      {
         type: "list",
         name: "role",
         message: "What would you like to do?",
         choices: ['Add an ENGINEER', 'Add an INTERN', 'FINISH BUILDING TEAM']
      }
   ])
   .then(menuChoice => {
      let { role } = menuChoice;
      
      if (role === "Add an ENGINEER") {
         promptEngineer();
      } else if (role === "Add an INTERN") {
         promptIntern();
      } else if (role === "FINISH BUILDING TEAM") {
         console.log(teamArray);
         return teamArray;
      }
   })
   
}

const promptEngineer = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "Please enter ENGINEER's name."
      },
      {
         type: "input",
         name: "id",
         message: "Please enter ENGINEER's ID number."
      },
      {
         type: "input",
         name: "email",
         message: "Please enter ENGINEER's company email address."
      },
      {
         type: "input",
         name: "github",
         message: "Please enter ENGINEER's GitHub username."
      }
   ])
   .then(employeeData => {
      let { name, id, email, github } = employeeData;
      
      employee = new Engineer(name, id, email, github);
      teamArray.push(employee);
      return teamMenu();
   })
}

const promptIntern = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "Please enter INTERN's name."
      },
      {
         type: "input",
         name: "id",
         message: "Please enter INTERN's ID number."
      },
      {
         type: "input",
         name: "email",
         message: "Please enter INTERN's company email address."
      },
      {
         type: "input",
         name: "school",
         message: "Please enter INTERN's school name."
      }
   ])
   .then(employeeData => {
      let { name, id, email, school } = employeeData;
      
      employee = new Intern(name, id, email, school);
      teamArray.push(employee);
      return teamMenu();
   })
}

promptManager()
   
