import { createStore } from "redux";
import { addTodo, toggleTodo } from "./action";
import reducer from "./reducer";

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

const initState = {
  todo: [],
};
const store = createStore(reducer, initState);

// var store = new Store(reducer, initState);

// console.log(store.getState());

store.dispatch(addTodo("BUY BREAD"));
store.dispatch(addTodo("BUY MILK"));
store.dispatch(toggleTodo("BUY MILK"));

// console.log(store.getState());

export default store;
