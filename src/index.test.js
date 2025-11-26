const sayHi = require("./index.js");

test("Says 'Hello Mike' when 'Mike' is passed", () => {
  expect(sayHi("Mikeo")).toBe("Hello Mike");
});
