import React from "react";
import { ProductCard, Nav } from "../../Components";
import { useWishlist } from "../../Context/wishlist";
import "./WishList.css";

function Wishlist() {
  const { state } = useWishlist();
  const { wishlist } = state;
  return (
    <div className="px-2">
      <Nav />
      <main className="p-3">
        <div className="heading p-2 flex center-div">
          <h3>
            My wishlist <span>({wishlist?.length})</span>
          </h3>
        </div>

        <div className="wishlist-products">
          {wishlist?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
