import React from "react";
import { Link, Route } from "react-router-dom";
import Loginpage from "./LoginPage";
import Home from "./Home";

function Router() {
  return (
    <>
      <div>
        <Link to="/">Tasks</Link>
        <Link to="/login">Login</Link>
      </div>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Loginpage />
      </Route>
    </>
  );
}

export default Router;
