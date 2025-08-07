import Services from "@/components/services";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Services - Medical Equipment Supply, Training & Support",
  description: "ILKKA Healthcare offers comprehensive healthcare services including medical equipment supply, technical training, maintenance support, and consultation services across Ethiopia and Somaliland.",
  keywords: [
    "healthcare services Ethiopia",
    "medical equipment supply",
    "medical training services",
    "equipment maintenance",
    "healthcare consultation",
    "medical support services",
    "healthcare solutions Somaliland",
    "medical equipment installation",
    "healthcare training programs"
  ],
  openGraph: {
    title: "Healthcare Services - ILKKA Healthcare",
    description: "Comprehensive healthcare services including equipment supply, training, maintenance, and consultation across Ethiopia and Somaliland.",
    url: "https://ilkka-healthcare.com/services",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ILKKA Healthcare Services",
      },
    ],
  },
  alternates: {
    canonical: "https://ilkka-healthcare.com/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Services',
    description: 'Comprehensive healthcare services including medical equipment supply, training, and support',
    url: 'https://ilkka-healthcare.com/services',
    provider: {
      '@type': 'Organization',
      name: 'ILKKA Healthcare',
      url: 'https://ilkka-healthcare.com'
    },
    serviceType: 'Healthcare Services',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Ethiopia'
      },
      {
        '@type': 'Country', 
        name: 'Somaliland'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Healthcare Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Equipment Supply',
            description: 'Comprehensive range of medical equipment from leading manufacturers'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Training',
            description: 'Professional training programs for medical equipment operation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Support',
            description: 'Ongoing maintenance and technical support services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Healthcare Consultation',
            description: 'Expert consultation for healthcare facility planning and setup'
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
          name: 'Services',
          item: 'https://ilkka-healthcare.com/services'
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
                Healthcare Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive healthcare services designed to support medical professionals 
                and healthcare facilities across Ethiopia and Somaliland.
              </p>
            </header>
          </div>
          <Services />
        </div>
      </main>
      <Footer />
    </>
  );
}
