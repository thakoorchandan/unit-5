import React from "react";
import { useState } from "react";

function Factorial() {
  const [num, setNum] = useState(0);
  const [factNum, setFactNum] = useState(0);
  const [fib, setFib] = useState(0);

  function fibonacci(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  function factorial(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  const handleCalculate = () => {
    let fibonacciNum = fibonacci(num);
    let factorialNum = factorial(num);
    setFactNum(factorialNum);
    setFib(fibonacciNum);
  };

  const handleChange = (e) => {
    setNum(e.target.value);
    setFactNum(0);
    setFib(0);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => handleChange(e)}
        value={num}
        minLength="1"
        maxLength="2"
        placeholder="Enter Any Number"
      />
      <button onClick={handleCalculate}>Calculate</button>

      <h2>{`Factorial of ${num} is ${factNum}`}</h2>
      <h2>{`Fibonacci of ${num} is ${fib}`}</h2>
    </div>
  );
}

export default Factorial;
