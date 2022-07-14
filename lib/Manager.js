const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  generateCard() {
    return `
    <div class="card>
    <h2 class"font-bold text-2xl">${this.getName()}</h2>
    <ul class="list-disc"></ul>

    </div>"`;
  }
}

module.exports = Manager;