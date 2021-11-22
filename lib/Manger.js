// manager class
const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(id, name, phone, email) {
    super(email, id, name);
    this.phone = phone;
  }
  getRole() {
    return "Manager";
  }
  getRole() {
    return this.phone;
  }
}

module.exports = Manager;
