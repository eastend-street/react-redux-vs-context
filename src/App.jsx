import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import "./App.css";
import reducer, { initialState } from "./store/reducers";

import ShopContext from "./contexts/shopContext";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => <ProductsPage state={state} dispatch={dispatch} />}
            exact
          />
          <Route
            path="/cart"
            component={CartPage}
            render={() => <CartPage state={state} dispatch={dispatch} />}
            exact
          />
        </Switch>
      </BrowserRouter>
    </ShopContext.Provider>
  );
};

export default App;
