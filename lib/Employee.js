// main employee class
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return this.Employee;
  }
  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
