var sum = require("../index.js");

// console.log(sum(3, 5));

describe("test case inside __tests__ for sum function", function () {
  test("Sum function is defined", function () {
    expect(sum).toBeDefined();
  });
});

test("toBe", () => {
  // === or triple equal to
  expect(10).toBe(10);
});
