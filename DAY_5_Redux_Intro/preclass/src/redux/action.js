import { ADD_TODO } from "./actionTypes";
import { TOGGLE_TODO } from "./actionTypes";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: {
    title: payload,
    status: false,
  },
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});
