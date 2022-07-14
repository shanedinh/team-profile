const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateManager = function (manager) {
    return `
    <div class="card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl p-3">${manager.name}</h2>
            <h4 class="italic text-2xl p-3">Manager</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="pl-2">ID #: ${manager.id}</p></br>
        <p class="pl-2">Email: ${manager.email}</p></br>
        <p class="pl-2">Office #: ${manager.officeNumber}</p></br>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
  return `
    <div class="card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl p-3">${engineer.name}</h2>
            <h4 class="italic text-2xl p-3">Engineer</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="pl-2">ID #: ${engineer.id}</p></br>
        <p class="pl-2">Email: ${engineer.email}</p></br>
        <p class="pl-2">GitHub: ${engineer.github}</p></br>
        </div>
    </div>
    `;
};

const generateEmployee = function (employee) {
  return `
    <div class="card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl p-3">${employee.name}</h2>
            <h4 class="italic text-2xl p-3">Employee</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="pl-2">ID #: ${employee.id}</p></br>
        <p class="pl-2">Email: ${employee.email}</p></br>
        </div>
    </div>
    `;
};

const generateIntern = function (intern) {
  return `
    <div class="card border border-black rounded shadow-xl h-100 w-50px">
        <div class="card border bg-blue-700 border-black">
            <div class="card-header text-white">
            <h2 class="font-bold text-4xl p-3">${intern.name}</h2>
            <h4 class="italic text-2xl p-3">Intern</h4>
            </div>
        </div>
        <div class="card-body">
        <p class="pl-2">ID #: ${intern.id}</p></br>
        <p class="pl-2">Email: ${intern.email}</p></br>
        <p class="pl-2">School: ${intern.school}</p></br>
        </div>
    </div>
    `;
};

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
                <nav class="border-b-2 sticky top-0 bg-gradient-to-r from-red-300 via-red-600 to-red-300">
                    <p class="text-4xl ml-5 p-2 text-white text-center">Team Profile</p>
                </nav>
            </header>
        </body>
        </div>
        <main class="gap-5 columns-4">
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