import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children, store }) => {
  const { dispatch, getState } = store;
  const value = { dispatch, getState };
  const [state, setState] = React.useState(0);
  const forceUpdate = () => setState((prev) => prev + 1);
  store.subscribe(forceUpdate);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };

// 1. State
// 2. getState
// 3. Dispatch
// 4. Subscribe
