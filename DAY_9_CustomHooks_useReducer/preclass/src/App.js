import "./App.css";
import Button from "./Component/Button";
import CustomHooks from "./Component/CustomHooks";

function App() {
  return (
    <div className="App" style={{ color: "#FFFFFF", background: "#121212" }}>
      <h1>Hello</h1>
      <h2>useContext Hooks </h2>
      <Button label="button" />
      <CustomHooks />
    </div>
  );
}

export default App;
