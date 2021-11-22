const employee = require("./Employee.js");

class manager extends employee {
  constructor(id, name, phone, email) {
    super(email, id, name);
    this.phone = phone;
  }
  getRole() {
    return "manager";
  }
  getRole() {
    return this.phone;
  }
}

module.exports = manager;
