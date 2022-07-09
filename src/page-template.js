const fs = require('fs');

let teamCards = [];

generateTeam = data => {
   for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
      
      if (role === "Manager") {
         teamCards.push(managerCard(data[i]));
      }

      if (role === "Engineer") {
         teamCards.push(engineerCard(data[i]));
      }

      if (role === "Intern") {
         teamCards.push(internCard(data[i]));
      }
   }
   console.log(teamCards);
   return teamCards = teamCards.join(``);
};

let managerCard = (data) => {
   return `
   <div class="bg-slate-100 rounded shadow-md">
      <div class="bg-blue-500 rounded-t">
         <h2 class="p-2 text-white text-2xl font-semibold">${data.name}</h2>
         <h3 class="p-2 text-white text-xl font-semibold"><i class="fa-solid fa-user-tie"></i> Manager</h3>
      </div>
      <div>
         <div class="bg-white mx-4 mt-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">ID: <span class="font-medium">${data.id}</span></p>
         </div>
         <div class="bg-white mx-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">Email: <span class="font-medium text-cyan-500 hover:text-black"><a href="mailto:${data.email}">${data.email}</a></span></p>
         </div>
         <div class="bg-white mx-4 mb-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">Office Number: <span class="font-medium">${data.officeNumber}</span></p>
         </div>
      </div>
   </div>
   `
}

let engineerCard = (data) => {
   return `
   <div class="bg-slate-100 rounded shadow-md">
      <div class="bg-blue-500 rounded-t">
         <h2 class="p-2 text-white text-2xl font-semibold">${data.name}</h2>
         <h3 class="p-2 text-white text-xl font-semibold"><i class="fa-solid fa-robot"></i> Engineer</h3>
      </div>
      <div>
         <div class="bg-white mx-4 mt-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">ID: <span class="font-medium">${data.id}</span></p>
         </div>
         <div class="bg-white mx-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">Email: <span class="font-medium text-cyan-500 hover:text-black"><a href="mailto:${data.email}">${data.email}</a></span></p>
         </div>
         <div class="bg-white mx-4 mb-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">Github Username: <span class="font-medium text-cyan-500 hover:text-black"><a href="http://github.com/${data.github}" target="_blank">${data.github}</a></span></p>
         </div>
      </div>
   </div>
   `
}

let internCard = (data) => {
   return `
   <div class="bg-slate-100 rounded shadow-md">
      <div class="bg-blue-500 rounded-t">
         <h2 class="p-2 text-white text-2xl font-semibold">${data.name}</h2>
         <h3 class="p-2 text-white text-xl font-semibold"><i class="fa-solid fa-graduation-cap"></i> Intern</h3>
      </div>
      <div>
         <div class="bg-white mx-4 mt-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">ID: <span class="font-medium">${data.id}</span></p>
         </div>
         <div class="bg-white mx-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">Email: <span class="font-medium text-cyan-500 hover:text-black"><a href="mailto:${data.email}">${data.email}</a></span></p>
         </div>
         <div class="bg-white mx-4 mb-4 p-2 border-2 border-solid border-slate-300">
            <p class="p-2">School: <span class="font-medium">${data.school}</span></p>
         </div>
      </div>
   </div>
   `
}

generatePage = teamArray => {
   return `
   <!DOCTYPE html>
   <html lang="en">
   
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://kit.fontawesome.com/6e1e3196b2.js" crossorigin="anonymous"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Team Page</title>
   </head>
   
   <body>
      <header class="mb-5 bg-red-600 border-8 border-solid border-white">
         <h1 class="p-10 text-white text-center text-3xl font-semibold">My Team</h1>
      </header>

      <div class="p-4 grid grid-cols-4 gap-4">
      ${generateTeam(teamArray)}
      </div>
      
   </body>
   
   </html>
   `
}

module.exports = generatePage;