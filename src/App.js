import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart, Home, Login, Product, ProductList, Register } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/productList" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
