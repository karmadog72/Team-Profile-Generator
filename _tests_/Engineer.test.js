const Engineer = require("../lib/Engineer");

test("Can instantiate engineer instance", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});
