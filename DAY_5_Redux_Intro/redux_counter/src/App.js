import "./App.css";
import React from "react";
import Counter from "./Components/Counter";
import { AppContext } from "./Redux/AppContextProvider";

function App() {
  const { getState } = React.useContext(AppContext);
  const { counter } = getState();
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
