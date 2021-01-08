import React from "react";

import CarouselIntro from "../components/CarouselIntro"
import ProductsCategories from "../components/ProductsCategories"
import TopSeller from "../components/TopSeller"

const Home = () => {
  return (
    <div>
      <CarouselIntro/>
      <ProductsCategories/>
      <TopSeller/>
    </div>
  )
};

export default Home;
