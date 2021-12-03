import GetPrime from "./Components/GetPrime";
import { useState } from "react";
// import { useCallback } from "react";
import "./App.css";

function App() {
  const [prime, setPrime] = useState(1);
  const [prime2, setPrime2] = useState(1);

  const addBoth = () => {
    setPrime((prev) => prev + 15);
    setPrime2((prev) => prev + 15);
  };

  const next1 = () => setPrime((prev) => prev + 1);
  const next2 = () => setPrime2((prev) => prev + 1);

  // const next1 = useCallback(() => setPrime((prev) => prev + 1),[]);
  // const next2 = useCallback(() => setPrime2((prev) => prev + 1),[]);

  return (
    <div className="App">
      <button onClick={addBoth}>Add Both By 15</button>
      <GetPrime label="first" value={prime} next={next1} />
      <GetPrime label="Second" value={prime2} next={next2} />
    </div>
  );
}

export default App;
