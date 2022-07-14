const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateManager = function (manager) {
    return `
    <div class="columns-4">
        <div class="card">
            <div class="card-header text-black">
            <h2>${manager.name}</h2>
            </div>
        </div>
        <div class="card-body">
        <p>ID #: ${manager.id}</p></br>
        <p>Email: ${manager.email}</p></br>
        <p>Office #: ${manager.officeNumber}</p></br>
        </div>
    </div>
    `
}

const generateEngineer = function (engineer) {
  return `
    <div class="columns-4">
        <div class="card">
            <div class="card-header text-black">
            <h2>${engineer.name}</h2>
            </div>
        </div>
        <div class="card-body">
        <p>ID #: ${engineer.id}</p></br>
        <p>Email: ${engineer.email}</p></br>
        <p>GitHub: ${engineer.github}</p></br>
        </div>
    </div>
    `;
};

const generateEmployee = function (employee) {
  return `
    <div class="columns-4">
        <div class="card">
            <div class="card-header text-black">
            <h2>${employee.name}</h2>
            </div>
        </div>
        <div class="card-body">
        <p>ID #: ${employee.id}</p></br>
        <p>Email: ${employee.email}</p></br>
        </div>
    </div>
    `;
};

const generateIntern = function (intern) {
  return `
    <div class="columns-4">
        <div class="card">
            <div class="card-header text-black">
            <h2>${intern.name}</h2>
            </div>
        </div>
        <div class="card-body">
        <p>ID #: ${intern.id}</p></br>
        <p>Email: ${intern.email}</p></br>
        <p>School: ${intern.school}</p></br>
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
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${employeeCards}
            </div>
        </main>
    </html>
            `
};




module.exports = generatePage;
module.exports = generateTeamCards;