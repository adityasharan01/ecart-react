import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductFilterProvider } from "./Context/product-filter";
import { WishlistProvider } from "./Context/wishlist";
import { CartProvider } from "./Context/cart";
import { AuthProvider } from "./Context/auth";
import { AddressProvider } from "./Context/address";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductFilterProvider>
        <WishlistProvider>
          <CartProvider>
            <AuthProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </AuthProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductFilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
