const Manager = require("../lib/Manager");

test("Can instantiate manager instance", () => {
  const manager = new Manager();
  expect(typeof manager).toBe("object");
});
