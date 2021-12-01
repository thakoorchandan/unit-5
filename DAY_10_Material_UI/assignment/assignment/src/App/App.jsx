import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Dashboard";
import Orders from "../Dashboard/Components/Orders";
import { SiteLayout } from "./Components/SiteLayout";

function App() {
  return (
    <>
      <SiteLayout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </SiteLayout>
    </>
  );
}

export default App;
