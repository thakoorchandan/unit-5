import "./App.css";
import { useReducer, useState, useEffect } from "react";
// import Delay from "./Components/useDelay";
// import useFetch from "./Utils/useFetch";

// function App() {
//   const { loading, error, data } = useFetch("https://reqres.in/api/users");

//   return loading ? (
//     "Loading..."
//   ) : error ? (
//     "Error...!!"
//   ) : (
//     <div className="App">
//       <Delay />
//       <div>
//         {data?.data.map((item) => (
//           <h2>{item.first_name}</h2>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case "INC_COUNT":
//       return {
//         ...state,
//         count: state.count + payload,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// function App() {
//   const [state, setState] = useReducer(reducer, { count: 0 });

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <h1>Count: {state.count}</h1>
//       <button
//         onClick={() => {
//           setState({ type: "INC_COUNT", payload: 1 });
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// }

// export default App;

function throttle(fn, wait) {
  let lastCall = 0;
  return function () {
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      fn();
    }
  };
}

function debouncer(fn, delay) {
  var debounce;
  return function () {
    debounce && clearTimeout(debounce);
    debounce = setTimeout(function () {
      fn();
    }, delay);
  };
}

function App() {
  const [state, setState] = useState();
  const handleChange = (e) => {
    debouncer((e) => setState(e.target.value), 800);
  };

  useEffect(() => {}, []);
  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default App;
