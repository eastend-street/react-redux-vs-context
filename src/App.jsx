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

  addProductToCart = product => {
    let updatedCart;
    let updatedItemIndex;
    updatedCart = [...this.state.cart];
    updatedItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({
      cart: updatedCart
    });
    // return { ...this.state, cart: updatedCart };
  };
  removeProductFromCart = product => {
    let updatedCart;
    let updatedItemIndex;
    updatedCart = [...this.state.cart];
    updatedItemIndex = updatedCart.findIndex(item => item.id === product);

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({
      cart: updatedCart
    });
    // return { ...state, cart: updatedCart };
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart
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
