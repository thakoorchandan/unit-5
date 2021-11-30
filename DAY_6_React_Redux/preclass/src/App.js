import "./App.css";
import Todo from "./Components/Todo";
import TodoInput from "./Components/TodoInput";

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoInput />
      <Todo />
    </div>
  );
}

export default App;
