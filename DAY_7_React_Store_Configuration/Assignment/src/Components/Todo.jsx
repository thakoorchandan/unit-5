import React from "react";
import { useSelector } from "react-redux";

function Todo() {
  const todoItems = useSelector((state) => state.app.todos);
  return (
    <div>
      {todoItems.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default Todo;
