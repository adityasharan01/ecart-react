import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
