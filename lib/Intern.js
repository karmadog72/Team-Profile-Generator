// intern class
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(id, name, school, email) {
    super(email, id, name);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getRole() {
    return this.School;
  }
}

module.exports = Intern;
