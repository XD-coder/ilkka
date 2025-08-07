import { imageConfig } from './imageUtils';

// Generate product data with dynamic images
const generateProductData = () => {
  const productNames = [
    'Advanced Blood Pressure Monitor',
    'Digital Thermometer Pro',
    'Pulse Oximeter Elite',
    'Glucometer Advanced',
    'Stethoscope Professional',
    'Medical Scale Digital',
    'Nebulizer Compact',
    'First Aid Kit Complete'
  ];

  const productDescriptions = [
    'Professional-grade digital blood pressure monitor with advanced accuracy technology.',
    'Fast and accurate digital thermometer with fever alarm and flexible tip.',
    'Professional pulse oximeter with advanced sensor technology for accurate readings.',
    'Advanced blood glucose monitoring system with smart connectivity features.',
    'High-quality stethoscope designed for medical professionals and students.',
    'Precision digital scale for accurate weight measurements in medical settings.',
    'Compact and efficient nebulizer for respiratory therapy treatments.',
    'Comprehensive first aid kit with all essential medical supplies.'
  ];

  const categories = [
    'Monitoring Devices',
    'Diagnostic Tools',
    'Monitoring Devices',
    'Diagnostic Tools',
    'Medical Instruments',
    'Medical Equipment',
    'Respiratory Equipment',
    'Emergency Supplies'
  ];

  return imageConfig.products.images.map((image, index) => ({
    name: productNames[index] || `Medical Product ${index + 1}`,
    description: productDescriptions[index] || `Professional medical equipment for healthcare providers.`,
    image: image,
    details: `Professional-grade medical equipment designed for accuracy and reliability in healthcare settings. Features advanced technology and user-friendly design.`,
    category: categories[index] || 'Medical Equipment',
    features: ['Professional Grade', 'High Accuracy', 'User Friendly', 'Reliable'],
    specifications: {
      'Certification': 'CE/FDA Approved',
      'Warranty': '2 Years',
      'Usage': 'Professional/Home',
      'Quality': 'Medical Grade'
    },
    price: `$${(Math.floor(Math.random() * 200) + 50).toFixed(2)}`
  }));
};

export const productsData = generateProductData();
