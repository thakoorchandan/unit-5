import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todos/action";

function TodoInput() {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    };
    const addTodoAction = addTodo(payload);
    dispatch(addTodoAction);
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <input
        value={title}
        placeholder="Add Something"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
