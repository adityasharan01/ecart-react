import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../Components";
import { useWishlist } from "../../Context/wishlist";
import "./WishList.css";

function Wishlist() {
  const { state } = useWishlist();
  const { wishlist } = state;
  return (
    <main>
      <div className="heading p-2 flex center-div">
        <h3>
          My wishlist <span>({wishlist?.length})</span>
        </h3>
      </div>
      {!wishlist.length && (
        <div className="message center-div">
          <p className="text-center">
            Your wishlist is empty.{" "}
            <Link to="/products" className="btn-link">
              Continue shopping
            </Link>{" "}
            🤗
          </p>
        </div>
      )}

      <div className="wishlist-products">
        {wishlist?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Wishlist;
