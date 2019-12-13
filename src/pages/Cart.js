import React, { useContext } from "react";

import MainNavigation from "../components/MainNavigation";
import { REMOVE_PRODUCT_FROM_CART } from "../store/actions";
import "./Cart.css";
import ShopContext from "../contexts/shopContext";

const CartPage = () => {
  const { state, dispatch } = useContext(ShopContext);

  const getCartItemCount = () => {
    return state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);
  };

  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={getCartItemCount()} />
      <main className="cart">
        {state.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {state.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: REMOVE_PRODUCT_FROM_CART,
                      payload: cartItem.id
                    })
                  }
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartPage);
