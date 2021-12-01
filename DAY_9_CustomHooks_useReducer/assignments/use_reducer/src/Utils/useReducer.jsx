const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case "TOGGLE_TODO": {
      if (state.todos.map((item) => item.id)) {
        return state;
      }
      return {
        ...state,
        completed: !state.todos.completed,
      };
    }
  }
};

export default reducer;
