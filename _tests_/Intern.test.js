const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewIntern
  validateIntern,
} = require("../_tests_/Intern.test");

jest.mock("fs");
test("creates an intern object", () => {
  const intern = createNewIntern({ name: "Mark", id: "2" }, intern);

  expect(intern.name).toBe("Mark);
  expect(intern.id).toBe("2");
});

test("filters by query", () => {
  const startingIntern = [
    {
      name: "Mark",
      id: "2",
      email: "Mark@workemail.com",
      role: "Lowly Intern",
    },
    {
      name: "Sam",
      id: "4",
      email: "Sam@workemail.com",
      role: "Lowly Intern 2",
    },
  ];

  const updatedIntern = filterByQuery({ name: "Sam" }, startingIntern);

  expect(updatedIntern.length).toEqual(4);
});

test("finds by id", () => {
  const startingIntern = [
    {
        name: "Mark",
        id: "2",
        email: "Mark@workemail.com",
        role: "Lowly Intern",
      },
      {
        name: "Sam",
        id: "4",
        email: "Sam@workemail.com",
        role: "Lowly Intern 2",
      },
  ];

  const result = findById("4", startingIntern);

  expect(result.name).toBe("Sam");
});

test("validates roles", () => {
  const intern = {
    name: "Sam",
    id: "4",
    email: "Sam@workemail.com",
    role: "Lowly Intern 2",
  
  };

  const invalidIntern = {
    name: "Markas",
        id: "5",
        email: "Markas@workemail.com",
        role: "Lowly Intern 3",
  };

  const result = validateIntern(intern);
  const result2 = validateIntern(invalidIntern);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
