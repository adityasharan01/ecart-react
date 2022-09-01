import { isItemInList } from "../utils";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_CART":
      return {
        cart: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: !isItemInList(action.payload._id, state.cart)
          ? [...state.cart, { ...action.payload }]
          : [...state.cart],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
