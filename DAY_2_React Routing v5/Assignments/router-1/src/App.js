import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Navbar/index";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Components/Services";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about-us" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
