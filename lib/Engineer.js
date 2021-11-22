// engineer class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, github, email) {
    super(email, id, name);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getRole() {
    return this.engineer;
  }
}

module.exports = Engineer;
