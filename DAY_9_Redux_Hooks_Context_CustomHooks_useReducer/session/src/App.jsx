import "./App.css";
import { useReducer, useState } from "react";
import Sample from "./Components/Sample";
import useFetch from "./Utils/useFetch";

// function App() {
//   const { loading, error, data } = useFetch("https://reqres.in/api/users");

//   return loading ? (
//     "Loading..."
//   ) : error ? (
//     "Error...!!"
//   ) : (
//     <div className="App">
//       <Sample />
//       <div>
//         {data?.data.map((item) => (
//           <h2>{item.first_name}</h2>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INC_COUNT":
      return {
        ...state,
        count: state.count + payload,
      };
    default:
      return {
        ...state,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC_COUNT", payload: 1 });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
