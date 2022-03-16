import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import Wishlist from "./Pages/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
