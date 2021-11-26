const inquirer = require("inquirer");
var fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manger");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = ["manager", "engineer","intern"];

function addEmployee() {
  // questions section
  inquirer
    .prompt([
      {
        employeeName: "input",
        name: "name",
        message: "Enter employee's name",
        validate: (employeeNameInput) => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "link",
        message: "Enter employee work email",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please enter employee's work email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's ID",
      },
      {
        type: "input",
        name: "role",
        message: "Enter employee's role",
      },
      {
        type: "input",
        name: "phone",
        message: "Enter employee's office phone number",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another employee?",
        default: false,
      },
    ])

    .then((data) => {
      if (data.role === "manager") {
        const employee = new Manager(
          data.id,
          data.name,
          data.phone,
          data.email
        );
        employees.push(employee);
      } else if (data.role === "engineer") {
        const employee = new Engineer(
          data.id,
          data.name,
          data.github,
          data.email
        );
        employees.push(employee);
      } else if (data.role === "intern") {
        const employee = new Intern(
          data.id,
          data.name,
          data.school,
          data.email
        );
        employees.push(employee);
      }

      if (data.confirmAddEmployee) {
        addEmployee();
      } else writeNewFile();
    });
}
function writeNewFile() {
  fs.writeFile("Generated-HTML.html", generateHTML(employees), (err) => {
    if (err) throw err;
  });
}

addEmployee();
// get info from the user for different types of employees
// push each one into an array of employees
// send that data to generateHTML to return a bunch of html code for writefile
