const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// generate manager card
const generateManager = function (manager) {
    return `
    <div class="p-2 card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl pl-3 pt-1">${manager.name}</h2>
            <h4 class="italic text-2xl pl-3">Manager</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="p-1">ID #: ${manager.id}</p>
        <p class="p-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="p-1">Office #: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

//generate engineer card 
const generateEngineer = function (engineer) {
  return `
    <div class="p-2 card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl pl-3 pt-1">${engineer.name}</h2>
            <h4 class="italic text-2xl pl-3">Engineer</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="p-1">ID #: ${engineer.id}</p>
        <p class="p-1">Email: <a href="https://github.com/${engineer.email}">${engineer.github}</a></p>
        <p class="p-1">GitHub: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        </div>
    </div>
    `;
};

//generate intern card 
const generateIntern = function (intern) {
  return `
    <div class="p-2 card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl pl-3 pt-1">${intern.name}</h2>
            <h4 class="italic text-2xl pl-3">Intern</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="p-1">ID #: ${intern.id}</p>
        <p class="p-1">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="p-1">School: ${intern.school}</p>
        </div>
    </div>
    `;
};

//generate team cards, called from generated individual cards
generateTeamCards = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole();

        if (role === 'Manager') {
            const manCard = generateManager(employee);

            pageArray.push(manCard);
        }

        if (role === 'Engineer') {
            const engCard = generateEngineer(employee);

            pageArray.push(engCard);
        }

        if (role === 'Employee') {
            const empCard = generateEmployee(employee);

            pageArray.push(empCard);
        }

        if (role === 'Intern') {
            const intCard = generateIntern(employee);

            pageArray.push(intCard);
        }
    }

    const employeeCards = pageArray.join('');

    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

//generate general html for page
const generatePage =  function (employeeCards) {
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale-1">
            <script src="https://cdn.tailwindcss.com"></script>
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <nav class="border-b-2 sticky top-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500">
                    <p class="text-4xl ml-5 p-2 text-white text-center">My Team</p>
                </nav>
            </header>
        </body>
        </div>
        <main class="columns-4">
            <div class="container">
            <div class="row">
                    ${employeeCards}
            </div>
            </div>
        </main>
    </html>
            `
};




module.exports = generatePage;
module.exports = generateTeamCards;