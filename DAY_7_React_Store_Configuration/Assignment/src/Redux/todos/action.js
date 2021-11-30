import { ADD_TODO } from "./actionTypes";

// Action creator

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
