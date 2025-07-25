import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Product {
  name: string;
  description: string;
  image: string;
  details: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-card rounded-lg shadow-2xl max-w-2xl w-full m-4 overflow-hidden" onClick={e => e.stopPropagation()}>
        <Card className="border-0">
          <CardHeader className="p-0">
            <div className="relative h-64 w-full">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-3xl font-bold text-primary mb-4">{product.name}</CardTitle>
            <p className="text-muted-foreground text-lg mb-4">{product.description}</p>
            <p className="text-foreground">{product.details}</p>
            <button 
              onClick={onClose} 
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
            >
              Close
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductModal;
