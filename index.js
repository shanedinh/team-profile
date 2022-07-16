const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require('./src/generatePage.js');
const teamList = [];


// Prompts for questions 
const buildTeam = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter employee's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "idNumber",
        message: "Enter employee's id number:",
        validate: (idNumberInput) => {
          if (idNumberInput) {
            return true;
          } else {
            console.log("Please enter employee's id number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "Enter employee's email address:",
        validate: (employeeEmail) => {
          if (employeeEmail) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        name: "employeeRole",
        message: "Please verify employee's role:",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ]);

    // additional prompts for specialized questions depending on employee type
  if(answers.employeeRole === 'Manager') {
      const optManager = await inquirer.prompt([
          {
              type: 'input',
              name: 'officeNumber',
              message: "Enter manager's office number:",
              validate: officeNumber => {
                  if (officeNumber) {
                      return true;
                  } else {
                      console.log("Please enter manager's office number.")
                      return false;
                  }
              }
          }
      ])
      const newManager = new Manager(answers.name, answers.idNumber, answers.employeeEmail, optManager.officeNumber);
      console.log(newManager)
      teamList.push(newManager)
  } else if (answers.employeeRole === 'Engineer') {
      const optEngineer = await inquirer.prompt([
          {
              type: 'input',
              name: 'github',
              message: "Enter engineer's github username:",
              validate: githubInput => {
                  if (githubInput) {
                      return true;
                  } else {
                      console.log("Please enter engineer's github username.")
                      return false;
                  }
              }
          }
      ])
      const newEngineer = new Engineer(answers.name, answers.idNumber, answers.employeeEmail, optEngineer.github)
      console.log(newEngineer)
      teamList.push(newEngineer)
  } else if (answers.employeeRole === 'Intern') {
      const optIntern = await inquirer.prompt([
          {
              type: 'input',
              name: 'school',
              message: "Enter intern's school name:",
              validate: schoolInput => {
                  if (schoolInput) {
                      return true;
                  } else {
                      console.log("Please enter intern's school name.")
                      return false;
                  }
              }
          }
      ])
      const newIntern = new Intern(answers.name, answers.idNumber, answers.employeeEmail, optIntern.school)
      console.log(newIntern)
      teamList.push(newIntern)
  }
};

promptQuestions()

// ask to add a new employee - add or end and build team profile
async function promptQuestions() {
    await buildTeam();

    const addNewRole = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'addRole',
            message: "Would you like to add a new role to the team?",
        }
    ])
    if (addNewRole.addRole) {
        return promptQuestions();
    } else {
        console.log(teamList);
        return writeFile();
    }
};

function writeFile() {
    fs.writeFileSync('./dist/index.html', generatePage(teamList), console.log("Team built!"),
    (err) => console.log("Error"));
}
