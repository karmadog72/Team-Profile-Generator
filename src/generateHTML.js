const { profile } = require("console");
const fs = require("fs");
const { resolve } = require("path/posix");
const Engineer = require("../lib/Engineer");

const managerCard = () => `
  <h1>Manager<h1>
  <div>${this.getName()}</div>
`;
// const engineerCard = ``

function createCards(data) {
  console.log(data);
  let result = "";
  // for loop that loops over data and returns cards to the html below
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    const employeeTemplate = `
      <h3>NAME: ${data[i].name}</h3>
      <h3>ID: ${data[i].id}</h3>
      <h3>PHONE NUMBER: ${data[i].phone}</h3>
      <h3>EMAIL: ${data[i].email}</h3>
      <h3>GITHUB:${data[i].github}</h3>
      <h3>SCHOOL:${data[i].school}<h/3>
    `;

    result += employeeTemplate;
  }

  return result;
}

function generateHTML(arrayOfEmployees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/style.css">
  <title>Team-Profile-Generator</title>
  </head>
  <body>
  ${createCards(arrayOfEmployees)}
    <header>
    <nav class="navbar navbar-light  mb-5" style="background-color: #a3d8ec;">
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" >
            <!--Team Cards-->
            ${arrayOfEmployees}
        </div>
    </div>
</main>
  </body>
  `;
}

module.exports = generateHTML;

// application goes through inquirer prompt gets employees then send that array to generateHTML
// generateHTML loops over the array and makes a manager, engineer or intern card to populate
// into the html
// returns that to index.js which writes the file
