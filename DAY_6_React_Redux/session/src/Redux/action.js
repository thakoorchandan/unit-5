// Action Creator

import {
  ADD_COUNT,
  SUB_COUNT,
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./actionTypes";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });
export const subCount = (data) => ({ type: SUB_COUNT, payload: data });

// TODOS
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const addTodoLoading = () => ({ type: ADD_TODO_LOADING });
export const addTodoSuccess = (data) => ({
  type: ADD_TODO_SUCCESS,
  payload: data,
});
export const addTodoError = (err) => ({ type: ADD_TODO_ERROR, payload: err });

export const getTodoLoading = () => ({ type: GET_TODO_LOADING });
export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data,
});
export const getTodoError = (err) => ({ type: GET_TODO_ERROR, payload: err });
