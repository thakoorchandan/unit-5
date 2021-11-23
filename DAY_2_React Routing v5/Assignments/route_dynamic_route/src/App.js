import { Route, Switch } from "react-router-dom";
import "./App.css";
import All_Products from "./Components/All_Products";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Product_Id from "./Components/Product_Id";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact={true} component={All_Products} />
        <Route exact path="/products/:id" component={Product_Id} />
      </Switch>
    </div>
  );
}

export default App;
