const { sum, sub } = require("../index");

describe("Addition", () => {
  test("Addition of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
    expect(sum(3, 4)).toBe(7);
    expect(sum(4, 5)).toBe(9);
    expect(sum(5, 6)).toBe(11);
  });
  test("Addition of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("Addition of two numbers", () => {
    expect(sum(3, 4)).toBe(7);
  });
});

describe("Substraction", () => {
  test("Subtsraction of two numbers", () => {
    expect(sub(1, 2)).toBe(1);
    expect(sub(2, 4)).toBe(2);
    expect(sub(3, 5)).toBe(2);
    expect(sub(4, 8)).toBe(4);
  });
});
