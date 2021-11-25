// Action Creator

import {
  ADD_COUNT,
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  SUB_COUNT,
} from "./actionTypes";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });
export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

// TODOS
export const addTodo = (todo) => ({
  type: ADD_TODO,
  //   payload: { id: 1, status: false, title: todo },
  payload: todo,
});

export const addTodoLoading = () => ({ type: ADD_TODO_LOADING });
export const addTodoSuccess = () => ({ type: ADD_TODO_SUCCESS });
export const addTodoError = () => ({ type: ADD_TODO_ERROR });
