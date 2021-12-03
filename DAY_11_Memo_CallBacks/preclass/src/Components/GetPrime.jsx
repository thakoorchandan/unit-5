import { useMemo } from "react";
import React from "react";

const isPrime = (n) => {
  let count = 0;
  if (n === 1 || n === 0) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
};

const getNthPrimeNo = (n) => {
  let count = 1;
  let i = 0;
  while (count <= n) {
    i++;
    let res = isPrime(i);
    if (res) {
      count++;
    }
  }
  return i;
};

const GetPrime = ({ value, label, next }) => {
  console.log(`Getting ${value}th Prime Number`);

  //   const val = getNthPrimeNo(value);

  // useMemo :- Expensive operation is being memorised
  const val = useMemo(() => getNthPrimeNo(value), [value]);

  return (
    <div>
      <h3>{label}</h3>
      <h3>The {value} th Prime Number is</h3>
      <h5>{val}</h5>
      <button onClick={next}>Next</button>
    </div>
  );
};

// React.memo
// Higher Order Component
// export default React.memo(GetPrime, (prevProp, nextProps) => {
//   return prevProp.value === nextProps.value;
// });

export default React.memo(GetPrime);
