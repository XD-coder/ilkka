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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Medical Equipment & Healthcare Solutions",
  description: "Ilkka Healthcare provides premium medical equipment, blood pressure monitors, and healthcare supplies in Ethiopia and Somaliland. Trusted by healthcare professionals.",
  openGraph: {
    title: "Ilkka Healthcare - Medical Equipment & Healthcare Solutions",
    description: "Premium medical equipment and healthcare supplies in Ethiopia and Somaliland. Trusted by healthcare professionals.",
    url: "https://ilkka-healthcare.com",
    images: [
      {
        url: "/heroImages/1.png",
        width: 1200,
        height: 630,
        alt: "Ilkka Healthcare Medical Equipment",
      },
    ],
  },
};

const page = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ilkka Healthcare - Home',
    description: 'Leading medical equipment supplier in Ethiopia and Somaliland',
    url: 'https://ilkka-healthcare.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'Ilkka Healthcare',
      description: 'Medical equipment and healthcare supplies provider',
      offers: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Medical Equipment and Healthcare Supplies',
          category: 'Medical Equipment'
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
};

export default page;
