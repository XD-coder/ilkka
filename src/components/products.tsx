'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { productsData } from '@/lib/data';
import ProductModal from './ProductModal';

interface Product {
  name: string;
  description: string;
  image: string;
  details: string;
  category: string;
  features: string[];
  specifications: Record<string, string | undefined>;
  price: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsData.map((product: Product, index: number) => (
              <div key={index} onClick={() => handleCardClick(product)} className="cursor-pointer">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-primary mb-2">{product.name}</CardTitle>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </>
  );
};

export default Products;
