import CategoryMenu from "@/components/CategoryMenu";
import Container from "@/components/Container";
import FeaturedCategories from "@/components/FeaturedCategories";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/product/ProductGrid";
import ShoppingCartModal from "@/components/product/ShoppingCartModal";
// import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
// import ShoppingCartModal from "@/components/ShoppingCartModal";
import { getCategories } from "@/sanity/queries";

import React from "react";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <div className="bg-shop-light-pink">
      {/* <CategoryMenu categories={categories} /> */}
      <HomeBanner />
      {/* <ShoppingCartModal /> */}
      {/* <ProductGrid /> */}
      {/* <HomeCategories categories={categories} /> */}
      <ProductGrid />
      <ShoppingCartModal />
    </div>
  );
};

export default Home;
