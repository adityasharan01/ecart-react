import React from 'react';
import Nav from '../../Components/Nav/Nav';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './WishList.css';

function Wishlist() {
  return (
    <div className='px-2'>
      <Nav/>
      <main class="p-3">
        <div class="heading p-2 flex center-div">
          <h3>My wishlist <span>(2)</span></h3>
        </div>

        <div class="wishlist-products">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </main>
    </div>
  )
}

export default Wishlist