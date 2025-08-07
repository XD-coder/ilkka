import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import {Hero} from "@/components/hero";
import ProductMarque from "@/components/ProductMarque";
import Products from "@/components/products";
import ProductSearch from "@/components/ProductSearch";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Products />
      <ProductSearch />
      <ProductMarque />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
