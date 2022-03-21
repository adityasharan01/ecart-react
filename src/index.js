import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductFilterProvider } from "./Context/product-filter";
import { WishlistProvider } from "./Context/wishlist";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductFilterProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </ProductFilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
