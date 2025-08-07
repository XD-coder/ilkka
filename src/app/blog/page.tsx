import Blog from "@/components/blog";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Blog - Medical News, Tips & Industry Insights",
  description: "Stay updated with the latest healthcare news, medical equipment guides, industry insights, and health tips from ILKKA Healthcare experts. Quality content for healthcare professionals.",
  keywords: [
    "healthcare blog",
    "medical news Ethiopia",
    "healthcare tips",
    "medical equipment guides",
    "health industry insights",
    "healthcare professionals blog",
    "medical technology news",
    "healthcare updates Somaliland",
    "medical equipment reviews",
    "health awareness"
  ],
  openGraph: {
    title: "Healthcare Blog - ILKKA Healthcare",
    description: "Latest healthcare news, medical equipment guides, and industry insights from ILKKA Healthcare experts.",
    url: "https://ilkka-healthcare.com/blog",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ILKKA Healthcare Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://ilkka-healthcare.com/blog",
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ILKKA Healthcare Blog',
    description: 'Healthcare news, medical equipment guides, and industry insights',
    url: 'https://ilkka-healthcare.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'ILKKA Healthcare',
      url: 'https://ilkka-healthcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ilkka-healthcare.com/logo.png'
      }
    },
    inLanguage: 'en-US',
    audience: {
      '@type': 'Audience',
      audienceType: 'Healthcare Professionals'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Healthcare'
      },
      {
        '@type': 'Thing',
        name: 'Medical Equipment'
      },
      {
        '@type': 'Thing',
        name: 'Health Technology'
      }
    ],
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
          name: 'Blog',
          item: 'https://ilkka-healthcare.com/blog'
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
                Healthcare Blog & Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay informed with the latest healthcare news, medical equipment guides, 
                and industry insights from our healthcare experts.
              </p>
            </header>
          </div>
          <Blog />
        </div>
      </main>
      <Footer />
    </>
  );
}
