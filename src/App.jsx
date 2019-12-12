import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import "./App.css";
import ShopContext from "./contexts/shopContext";

class App extends Component {
  state = {
    products: [
      { id: "p1", title: "Gaming Mouse", price: 29.99 },
      { id: "p2", title: "Harry Potter 3", price: 9.99 },
      { id: "p3", title: "Used plastic bottle", price: 0.99 },
      { id: "p4", title: "Half-dried plant", price: 2.99 }
    ],
    cart: []
  };

  addItemToCart = () => {};
  removeItemFromCart = () => {};

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          addItemToCart: this.addItemToCart,
          removeItemFromCart: this.removeItemFromCart
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </ShopContext.Provider>
    );
  }
}

export default App;
