import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import DeadPage from "./Components/DeadPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route>
          <DeadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
