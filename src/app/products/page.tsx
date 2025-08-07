import ProductSearch from "@/components/ProductSearch";
import ProductMarque from "@/components/ProductMarque";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Products & Equipment - Blood Pressure Monitors, Healthcare Supplies",
  description: "Explore ILKKA Healthcare's comprehensive range of medical equipment including blood pressure monitors, diagnostic tools, patient monitoring devices, and healthcare supplies for Ethiopia and Somaliland.",
  keywords: [
    "medical products Ethiopia",
    "blood pressure monitors",
    "healthcare equipment",
    "diagnostic tools",
    "patient monitoring devices",
    "medical supplies Somaliland",
    "healthcare products",
    "medical devices",
    "ILKKA products",
    "medical equipment catalog"
  ],
  openGraph: {
    title: "Medical Products & Equipment - ILKKA Healthcare",
    description: "Comprehensive range of medical equipment and healthcare supplies. Quality blood pressure monitors, diagnostic tools, and patient monitoring devices.",
    url: "https://ilkka-healthcare.com/products",
    images: [
      {
        url: "/Products/1.png",
        width: 1200,
        height: 630,
        alt: "ILKKA Healthcare Medical Products",
      },
    ],
  },
  alternates: {
    canonical: "https://ilkka-healthcare.com/products",
  },
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Medical Products & Equipment',
    description: 'Comprehensive range of medical equipment and healthcare supplies from ILKKA Healthcare',
    url: 'https://ilkka-healthcare.com/products',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Medical Equipment Catalog',
      description: 'ILKKA Healthcare medical equipment and supplies catalog',
      numberOfItems: '50+', // Update with actual number
      itemListElement: [
        {
          '@type': 'Product',
          name: 'Blood Pressure Monitors',
          category: 'Diagnostic Equipment',
          description: 'Professional-grade blood pressure monitoring devices',
          brand: {
            '@type': 'Brand',
            name: 'ILKKA Healthcare'
          }
        },
        {
          '@type': 'Product',
          name: 'Patient Monitoring Systems',
          category: 'Medical Devices',
          description: 'Advanced patient monitoring and diagnostic equipment',
          brand: {
            '@type': 'Brand',
            name: 'ILKKA Healthcare'
          }
        },
        {
          '@type': 'Product',
          name: 'Healthcare Supplies',
          category: 'Medical Supplies',
          description: 'Quality healthcare supplies and consumables',
          brand: {
            '@type': 'Brand',
            name: 'ILKKA Healthcare'
          }
        }
      ]
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ilkka-healthcare.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://ilkka-healthcare.com/products'
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Medical Products & Equipment
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of medical equipment and healthcare supplies, 
                trusted by professionals across Ethiopia and Somaliland.
              </p>
            </header>
          </div>
          
          <ProductSearch />
          <ProductMarque />
        </div>
      </main>
      <Footer />
    </>
  );
}
