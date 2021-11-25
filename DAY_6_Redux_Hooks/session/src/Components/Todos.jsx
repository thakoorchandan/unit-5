import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todos"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          const payload = { status: false, title: text };
          dispatch(addTodo(payload));
          console.log(todos);
        }}
      >
        Add
      </button>
      {todos.map((e) => (
        <div>{e.title}</div>
      ))}
    </div>
  );
};

// ADD Todo
// Remove Todo
