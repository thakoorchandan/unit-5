import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      return setNum((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="App">
      <h1>{num}</h1>
    </div>
  );
}

export default App;
