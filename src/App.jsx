import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import "./App.css";
import reducer, { initialState } from "./store/reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={()=> <ProductsPage state={state} dispatch={dispatch} />} exact />
        <Route path="/cart" render={()=> <CartPage state={state} dispatch={dispatch} />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
