'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  fill, 
  width, 
  height, 
  className = '', 
  sizes,
  priority = false,
  loading = 'lazy',
  ...props 
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    // Try with a different path format
    if (src.startsWith('/')) {
      setImgSrc(`${process.env.NODE_ENV === 'production' ? '' : ''}${src}`);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`bg-gray-200 animate-pulse ${className}`} />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
        sizes={sizes}
        priority={priority}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  );
};
