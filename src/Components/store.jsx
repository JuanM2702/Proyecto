import { createStore } from 'redux';

const initialState = {
  cart: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productInCart = state.cart.find(item => item.sku === action.product.sku);
      if (productInCart) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.sku === productInCart.sku
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }]
        };
      }
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.sku === action.sku && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.sku !== action.sku)
      };
    default:
      return state;
  }
}

const store = createStore(cartReducer);

export default store;
