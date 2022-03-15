import React from 'react'
import Nav from '../../Components/Nav/Nav';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import "./Home.css";

function Home() {
  return (
    <div className='px-1'>
      <Nav/>
      <div className="banner my-1">
        <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" srcset="" />
      </div>
      <div className="category my-2">
        <CategoryCard category="All"/>
        <CategoryCard category="Men"/>
        <CategoryCard category="Women"/>
        <CategoryCard category="Boy"/>
        <CategoryCard category="Girl"/>
      </div>
     
    </div>
  )
}

export default Home;