import { useReducer, useState } from "react";
import reducer from "./Utils/useReducer";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");

  const handleSubmit = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: Math.random(), title: text, completed: false },
    });
    setText("");
    console.log(todos);
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  };

  return (
    <div className="App">
      <h1>Todos using useReducer</h1>
      <input
        vvalue={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={handleSubmit}>Add</button>
      <div>
        {todos?.todos.map((item) => (
          <>
            <h3>
              {item.title} ---- {item.completed}
            </h3>
            <button onClick={(id) => handleToggle(item.id)}>toggle</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
