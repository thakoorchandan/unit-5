// Action creator created an action
// It is a function which returns an object that defines the action
// An action is an object with a key called type to define what type of the action it is

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";

const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload,
  };
};

const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload,
  };
};

export { addCounter, reduceCounter };
