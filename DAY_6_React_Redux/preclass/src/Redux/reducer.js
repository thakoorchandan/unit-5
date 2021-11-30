import { ADD_TODO } from "./actionTypes";

const initState = {
  todos: [
    {
      id: 1,
      title: "Learn Redux",
      status: false,
    },
  ],
};

export const reducer = (state = initState, { type, payload }) => {
  // console.log(state);
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return {
        ...state,
      };
  }
};
