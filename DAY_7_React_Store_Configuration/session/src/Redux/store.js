import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { todoReducer } from "./TodosStore/reducer";
import { counterReducer } from "./CounterStore/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});

const middleware1 = (store) => (next) => (action) => {
  console.log("Middle ware 1", store.getState());
  next(action);
  console.log("Middleware 1 Exciting");
};

const middleware2 = (stroe) => (next) => (action) => {
  console.log("Middle ware 2", store.getState());
  next(action);
  console.log("Middle ware 2 Exiting");
};

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(middleware1, middleware2),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log(store.getState());

// store.subscribe(() => {
//   console.log("store change");
// });
