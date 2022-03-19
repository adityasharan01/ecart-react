import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductFilterProvider } from "./Context/product-filter";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductFilterProvider>
        <App />
      </ProductFilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
