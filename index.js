const inquirer = require("inquirer");
var fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

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
        name: "email",
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
        type: "list",
        name: "role",
        message: "Enter employee's role",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        type: "input",
        name: "phone",
        message: "Enter employee's office phone number",
      },
      {
        type: "input",
        name: "github",
        message: "Enter employee's github",
      },
      {
        type: "input",
        name: "school",
        message: "Enter employee's school",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another employee?",
        default: false,
      },
    ])

    .then((data) => {
      console.log("data", data);
      if (data.role === "Manager") {
        const manager = new Manager(data.id, data.name, data.phone, data.email);
        employees.push(manager);
      } else if (data.role === "Engineer") {
        const engineer = new Engineer(
          data.id,
          data.name,
          data.github,
          data.email
        );
        employees.push(engineer);
      } else if (data.role === "Intern") {
        const intern = new Intern(data.id, data.name, data.school, data.email);
        employees.push(intern);
      }

      if (data.confirmAddEmployee) {
        addEmployee();
      } else {
        console.log("List of employees", employees);
        writeNewFile();
      }
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
