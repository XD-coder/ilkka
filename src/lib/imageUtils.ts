// Utility functions for loading images dynamically

export const loadImagesFromDirectory = (directory: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `/${directory}/${i + 1}.png`);
};

export const heroImages = loadImagesFromDirectory('heroImages', 3);
export const productImages = loadImagesFromDirectory('Products', 8);
export const productMarqueImages = loadImagesFromDirectory('ProductMarque', 5);

// Alternative approach for more control over specific images
export const loadSpecificImages = (directory: string, imageNames: string[]): string[] => {
  return imageNames.map(name => `/${directory}/${name}`);
};

// For better type safety, you can also define image sets
export interface ImageSet {
  directory: string;
  images: string[];
}

export const imageConfig = {
  hero: {
    directory: 'heroImages',
    count: 3,
    images: loadImagesFromDirectory('heroImages', 3)
  },
  products: {
    directory: 'Products',
    count: 8,
    images: loadImagesFromDirectory('Products', 8)
  },
  productMarque: {
    directory: 'ProductMarque',
    count: 5,
    images: loadImagesFromDirectory('ProductMarque', 5)
  }
} as const;
