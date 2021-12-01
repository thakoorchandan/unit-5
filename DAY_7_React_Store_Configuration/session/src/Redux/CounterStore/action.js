import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });
export const subCount = (data) => ({ type: SUB_COUNT, payload: data });
