import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../Redux/action";
import axios from "axios";

export const Todos = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(getTodoLoading());
    try {
      const { data } = await axios.get("http://localhost:3001/todos");
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  };

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.todos);
  const [text, setText] = useState("");

  return loading ? (
    <h1>...Loading, Please Wait</h1>
  ) : (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todos"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={async () => {
          dispatch(addTodoLoading());
          const payload = { status: false, title: text, id: Math.random() };
          try {
            const { data } = await axios.post(
              "http://localhost:3001/todos",
              payload
            );
            dispatch(addTodoSuccess(data));
            getData();
          } catch (err) {
            dispatch(addTodoError(err));
          }
        }}
      >
        Add
      </button>
      {data.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
};

// ADD Todo
// Toggle Todo
// Remove Todo
