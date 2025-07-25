import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import {Hero} from "@/components/hero";
import ProductMarque from "@/components/ProductMarque";
import Products from "@/components/products";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />    
      <About />
      <Products />
      <ProductMarque />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
