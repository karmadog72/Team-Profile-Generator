const Intern = require("../lib/Intern");

test("Can instantiate intern instance", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});
