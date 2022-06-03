import * as Actions from "../actions/cartActions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      case Actions.REMOVE_PRODUCT_FROM_CART:
        let finalCart = [...state.cart]
        finalCart.splice(action.payload, 1)
        return {
          ...state,
          cart: [...finalCart],
        }
    default:
      return state;
  }
};

export default cartReducer;
