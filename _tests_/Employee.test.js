const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewEmployee,
  validateEmployee,
} = require("../_tests_/Employee.test");

jest.mock("fs");
test("creates an employee object", () => {
  const employee = createNewEmployee({ name: "Daren", id: "1" }, employee);

  expect(employee.name).toBe("Daren");
  expect(employee.id).toBe("1");
});

test("filters by query", () => {
  const startingEmployee = [
    {
      name: "Eric",
      id: "3",
      email: "Eric@workemail.com",
      role: "HR",
    },
    {
      name: "Daren",
      id: "1",
      email: "Daren@workemail.com",
      role: "Boss Man",
    },
  ];

  const updatedEmployee = filterByQuery({ role: "Eric" }, startingEmployee);

  expect(updatedEmployee.length).toEqual(1);
});

test("finds by id", () => {
  const startingEmployee = [
    {
      name: "Eric",
      id: "3",
      email: "Eric@workemail.com",
      role: "HR",
    },
    {
      name: "Daren",
      id: "1",
      email: "Daren@workemail.com",
      role: "Boss Man",
    },
  ];

  const result = findById("3", startingEmployee);

  expect(result.name).toBe("Eric");
});

test("validates roles", () => {
  const employee = {
    name: "Eric",
    id: "3",
    email: "Eric@workemail.com",
    role: "HR",
  };

  const invalidEmployee = {
    name: "Erica",
    id: "4",
    email: "Erica@workemail.com",
    role: "HRS",
  };

  const result = validateEmployee(employee);
  const result2 = validateEmployee(invalidEmployee);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
