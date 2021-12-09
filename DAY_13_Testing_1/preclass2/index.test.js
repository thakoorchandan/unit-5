var sum = require("./index.js");

// console.log(sum(3, 5));

describe("test case for sum function", function () {
  test("Sum function is defined", function () {
    expect(sum).toBeDefined();
  });
});
