import About from "@/components/about";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Leading Medical Equipment Supplier",
  description: "Learn about ILKKA Healthcare, founded by passionate healthcare professionals. We provide quality medical equipment and supplies across Ethiopia and Somaliland with a focus on care and quality.",
  keywords: [
    "about Ilkka Healthcare",
    "medical equipment company Ethiopia",
    "healthcare supplier Somaliland",
    "medical company history",
    "healthcare professionals",
    "medical equipment team"
  ],
  openGraph: {
    title: "About ILKKA Healthcare - Medical Equipment Specialists",
    description: "Founded by healthcare professionals, ILKKA Healthcare delivers quality medical equipment across Ethiopia and Somaliland.",
    url: "https://ilkka-healthcare.com/about",
    images: [
      {
        url: "/team.png",
        width: 1200,
        height: 630,
        alt: "ILKKA Healthcare Team",
      },
    ],
  },
  alternates: {
    canonical: "https://ilkka-healthcare.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ILKKA Healthcare',
    description: 'Learn about ILKKA Healthcare, a leading medical equipment supplier in Ethiopia and Somaliland',
    url: 'https://ilkka-healthcare.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'ILKKA Healthcare',
      foundingDate: '2020', // Update with actual founding date
      description: 'Leading medical equipment supplier in Ethiopia and Somaliland',
      url: 'https://ilkka-healthcare.com',
      logo: 'https://ilkka-healthcare.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Ethiopia',
        addressRegion: 'Addis Ababa'
      },
      founder: {
        '@type': 'Person',
        name: 'ILKKA Healthcare Founders' // Update with actual founder names
      },
      numberOfEmployees: '50+', // Update with actual number
      slogan: 'Care & Quality in Healthcare'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
