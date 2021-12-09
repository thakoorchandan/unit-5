// Speeds up the development process
// How our code is supposed to behave
// TDD --->> Test Driven Development
// Start to write test cases first, then write your code
// Enfoce a habit to start writing test cases

// test (description, function)

function test(description, fn) {
  console.log(description);

  fn();
}

function expect(recieved) {
  function toBe(output) {
    if (recieved === output) {
      console.log("test passed");
    } else {
      console.log("test failed");
      console.log("received: ", recieved);
      console.log("expected: ", output);
    }
  }
  return { toBe };
}

test("add 1 and 2, sum should be 3", () => {
  expect(1 + 1).toBe(3);
});
