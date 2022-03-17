import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cart, Wishlist, ProductList } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
