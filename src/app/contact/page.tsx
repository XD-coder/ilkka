import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with ILKKA Healthcare",
  description: "Contact ILKKA Healthcare for medical equipment inquiries, support, and partnership opportunities. Serving Ethiopia and Somaliland with quality healthcare solutions.",
  keywords: [
    "contact ILKKA Healthcare",
    "medical equipment inquiries",
    "healthcare support Ethiopia",
    "medical supplier contact",
    "healthcare consultation",
    "medical equipment quotes",
    "ILKKA customer service",
    "healthcare partnership"
  ],
  openGraph: {
    title: "Contact ILKKA Healthcare - Medical Equipment Specialists",
    description: "Get in touch with ILKKA Healthcare for medical equipment inquiries, support, and partnership opportunities across Ethiopia and Somaliland.",
    url: "https://ilkka-healthcare.com/contact",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact ILKKA Healthcare",
      },
    ],
  },
  alternates: {
    canonical: "https://ilkka-healthcare.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ILKKA Healthcare',
    description: 'Contact information and form for ILKKA Healthcare medical equipment supplier',
    url: 'https://ilkka-healthcare.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'ILKKA Healthcare',
      url: 'https://ilkka-healthcare.com',
      logo: 'https://ilkka-healthcare.com/logo.png',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+251-xxx-xxxx', // Update with actual phone
          email: 'info@ilkka-healthcare.com', // Update with actual email
          availableLanguage: ['English', 'Amharic', 'Somali'],
          areaServed: ['Ethiopia', 'Somaliland']
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Sales',
          telephone: '+251-xxx-xxxx', // Update with actual phone
          email: 'sales@ilkka-healthcare.com', // Update with actual email
          availableLanguage: ['English', 'Amharic', 'Somali']
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Technical Support',
          telephone: '+251-xxx-xxxx', // Update with actual phone
          email: 'support@ilkka-healthcare.com', // Update with actual email
          availableLanguage: ['English', 'Amharic', 'Somali']
        }
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Ethiopia',
        addressRegion: 'Addis Ababa',
        addressLocality: 'Addis Ababa',
        streetAddress: 'Your Street Address' // Update with actual address
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '9.1450',
        longitude: '40.4897'
      }
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
          name: 'Contact',
          item: 'https://ilkka-healthcare.com/contact'
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
                Contact ILKKA Healthcare
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get in touch with our healthcare experts for inquiries about medical equipment, 
                support services, or partnership opportunities.
              </p>
            </header>
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
