// // ACTIONS
// const ADD_TODO = "ADD_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

// // ACTIONS CREATORS
// const addTodo = (payload) => ({
//   type: ADD_TODO,
//   payload: {
//     title: payload,
//     status: false,
//   },
// });

// const toggleTodo = (payload) => ({
//   type: TOGGLE_TODO,
//   payload,
// });

// // Reducer
// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todo: [...state.todo, payload],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todo: state.todo.map((item) =>
//           item.title === payload ? { ...item, status: !item.status } : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

// // Action is an object which has some type and payload

// const initState = {
//   todo: [],
// };

// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.state = initState;
//   }

//   // Retrieve the state
//   getState() {
//     return this.state;
//   }

//   // Dispatch and action
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

// var store = new Store(reducer, initState);

// console.log(store.getState());

// store.dispatch(addTodo("BUY BREAD"));
// store.dispatch(addTodo("BUY MILK"));
// store.dispatch(toggleTodo("BUY MILK"));

// console.log(store.getState());
