const employee = require("./Employee");

class engineer extends employee {
  constructor(id, name, github, email) {
    super(email, id, name);
    this.github = github;
  }
  getRole() {
    return "engineer";
  }
  getRole() {
    return this.engineer;
  }
}

module.exports = engineer;
