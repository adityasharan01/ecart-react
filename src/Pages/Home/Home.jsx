import React from 'react'
import Nav from '../../Components/Nav/Nav';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import "./Home.css";

function Home() {
  return (
    <div className='px-1'>
      <Nav/>
      <div className="banner my-1">
        <img src="/images/watches.avif" alt="" srcset="" />
      </div>
      <div className="category my-2">
        <CategoryCard category="All" imgSrc="/images/all-watch.webp"/>
        <CategoryCard category="Men" imgSrc="/images/men-watch.webp"/>
        <CategoryCard category="Women" imgSrc="/images/women-watch.webp"/>
        <CategoryCard category="Boy" imgSrc="/images/boys-watch.webp"/>
        <CategoryCard category="Girl" imgSrc="/images/girl-watch.webp"/>
      </div>
     
    </div>
  )
}

export default Home;