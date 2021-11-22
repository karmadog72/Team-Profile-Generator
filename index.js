const inquirer = require("inquirer");
var fs = require("fs");
const Manager = require("./lib/Manger");
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
      console.log(data);
      var generateHTML = generateHTML(data);
      console.log(generateHTML);
      fs.writeFile("Generated-HTML", generateHTML, (err) => {
        if (err) throw err;
      });
    });
}
