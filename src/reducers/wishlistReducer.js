import { isItemInList } from "../utils";

const initialState = {
  wishlist: [],
};

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: !isItemInList(action.payload._id, state.wishlist)
          ? [...state.wishlist, { ...action.payload }]
          : [...state.wishlist],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
