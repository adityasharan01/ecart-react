import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../Components";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-hero-section center-div">
        <section className="hero-disc center-div">
          <h1 className="text-center">Watches for every moment</h1>
          <Link to="/products" className="btn btn-primary btn-link btn-shop">
            Shop now
          </Link>
        </section>
      </div>
      <div className="category my-2">
        <CategoryCard category="All" imgSrc="/images/all-watch.webp" />
        <CategoryCard category="Mens" imgSrc="/images/men-watch.webp" />
        <CategoryCard category="Womens" imgSrc="/images/women-watch.webp" />
        <CategoryCard category="Boys" imgSrc="/images/boys-watch.webp" />
        <CategoryCard category="Girls" imgSrc="/images/girl-watch.webp" />
      </div>
    </div>
  );
}

export default Home;
