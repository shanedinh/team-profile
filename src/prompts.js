const inquirer = require('inquirer');
const Manager = require('../lib/Manager');

class buildTeam {
    constructor() {
        this.manager;
        this.team = [];
    }

    initializePrompt() {
        inquirer
            .prompt({
                type: "input",
                name: "manager",
                message: "Enter manager's name:",
                validate: managerInput => {
                    if (managerInput) {
                        this.startNewTeam
                        return true;
                    } else {
                        console.log("Please enter manager's name:");
                        return false;
                    }
                }
            });
        //     .then(({ name }) => {
        //         this.manager = new Manager(name);
        //         this.startNewTeam();
        // });
    }

    startNewTeam() {
        this.team.push(new Manager(this.manager));
    
        inquirer
            .prompt([
                {
                  type: 'input',
                  name: 'id',
                  message: "Enter manager's id number:",
                  validate: idInput => {
                      if (idInput) {
                          return true;
                      } else {
                          console.log("Please enter manager's id number:");
                          return false;
                      }
                    }
                },
                {
                  type: 'input',
                  name: 'email',
                  message: "Enter manager's email address:",
                  validate: emailInput => {
                      if (emailInput) {
                          return true;
                      } else {
                          console.log("Please enter manager's email adderess:")
                          return false;
                      }
                  }
                }
            ])
    }
}

module.exports = buildTeam;