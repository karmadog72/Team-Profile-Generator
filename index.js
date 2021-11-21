const fs = require("fs");
const path = require("path");
const express = require("express");
const { employees } = require("./data/");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("filename"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function filterByQuery(query, employeesArray) {
  let employeesArray = [];
  let filteredResults = employeesArray;
  if (query.employees) {
    if (typeof query.employees === "string") {
      employeesArray = [query.employees];
    } else {
      employeesArray = query.employees;
    }
    employeesArray.forEach((name) => {
      filteredResults = filteredResults.filter(
        (employees) => employees.employees.indexOf(name) !== -1
      );
    });
  }
  if (query.role) {
    filteredResults = filteredResults.filter(
      (employees) => employees.role === query.role
    );
  }
  if (query.email) {
    filteredResults = filteredResults.filter(
      (employees) => employees.email === query.email
    );
  }
  if (query.name) {
    filteredResults = filteredResults.filter(
      (employees) => employees.name === query.name
    );
  }
  return filteredResults;
}

function findById(id, employeesArray) {
  const result = employeesArray.filter((employees) => employees.id === id)[0];
  return result;
}

function createNewEmployee(body, employeesArray) {
  const employees = body;
  employeesArray.push(employee);
  fs.writeFileSync(
    path.join(__dirname, "./data/file.json"),
    JSON.stringify({ employees: employeesArray }, null, 2)
  );
  return employees;
}

function validateEmployees(employee) {
  if (!employee.name || typeof employee.name !== "string") {
    return false;
  }
  if (!employee.role || typeof employee.role !== "string") {
    return false;
  }
  if (!employee.email || typeof employee.email !== "string") {
    return false;
  }
  if (!employee.employees || !Array.isArray(employee.employees)) {
    return false;
  }
  return true;
}

app.get("/api/filepath", (req, res) => {
  let results = employees;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

app.get("/api/file/:id", (req, res) => {
  const result = findById(req.params.id, employees);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

app.post("/api/file", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = employees.length.toString();

  if (!validateEmployees(req.body)) {
    res.status(400).send("The employee is not properly formatted.");
  } else {
    const employee = createNewEmployee(req.body, employee);
    res.json(employee);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/Employee", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/file.html"));
});

app.get("/Intern", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/file.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
