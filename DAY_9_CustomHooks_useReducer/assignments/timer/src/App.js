import "./App.css";
import Timer from "./Utils/useTimer";

function App() {
  const initialMinute = 0;
  const initialSeconds = 0;
  const initialMilliSeconds = 0;
  return (
    <div className="App">
      <Timer props={(initialMinute, initialSeconds, initialMilliSeconds)} />
    </div>
  );
}

export default App;
