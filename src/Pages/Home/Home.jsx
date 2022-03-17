import React from 'react'
import Nav from '../../Components/Nav/Nav';
import { CategoryCard } from '../../Components';
import "./Home.css";

function Home() {
  return (
    <div className='px-1'>
      <Nav/>
      <div className="banner my-1">
        <img src="/images/watches.avif" alt="banner image" />
      </div>
      <div className="category my-2">
        <CategoryCard category="All" imgSrc="/images/all-watch.webp"/>
        <CategoryCard category="Mens" imgSrc="/images/men-watch.webp"/>
        <CategoryCard category="Womens" imgSrc="/images/women-watch.webp"/>
        <CategoryCard category="Boys" imgSrc="/images/boys-watch.webp"/>
        <CategoryCard category="Girls" imgSrc="/images/girl-watch.webp"/>
      </div>
     
    </div>
  )
}

export default Home;