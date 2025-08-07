'use client';

import React, { useState, useMemo } from 'react';
import { productsData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(productsData.map(product => product.category))];
    return cats;
  }, []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Healthcare Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search through our comprehensive range of medical supplies and equipment
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products, features, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center text-muted-foreground mb-6">
            {filteredProducts.length === 0 ? (
              <p>No products found matching your criteria</p>
            ) : (
              <p>
                Showing {filteredProducts.length} of {productsData.length} products
                {searchTerm && (
                  <span> for &ldquo;{searchTerm}&rdquo;</span>
                )}
                {selectedCategory !== 'All' && (
                  <span> in {selectedCategory}</span>
                )}
              </p>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product: Product, index: number) => (
              <div key={index} onClick={() => handleCardClick(product)} className="cursor-pointer">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={index < 4} // Prioritize first 4 images
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        {product.category}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-bold text-primary mb-2 line-clamp-2">{product.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-foreground">{product.price}</span>
                      <button className="text-primary hover:text-primary/80 text-sm font-medium">
                        View Details →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="w-24 h-24 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.347 0-4.518.402-6.294 1.139C4.295 16.5 3 17.45 3 18.5V19h18v-.5c0-1.05-1.295-2-2.706-2.361A7.962 7.962 0 0112 15c-2.347 0-4.518.402-6.294 1.139z" />
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default ProductSearch;
