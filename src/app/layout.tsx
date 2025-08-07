import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ilkka Healthcare - Medical Equipment & Supplies | Ethiopia & Somaliland",
    template: "%s | Ilkka Healthcare"
  },
  description: "Leading medical equipment supplier in Ethiopia and Somaliland. Quality healthcare products, blood pressure monitors, medical supplies, and professional healthcare solutions.",
  keywords: [
    "medical equipment Ethiopia",
    "healthcare supplies Somaliland", 
    "blood pressure monitors",
    "medical devices",
    "healthcare products",
    "medical supplies Ethiopia",
    "healthcare equipment",
    "Ilkka Healthcare",
    "medical technology",
    "diagnostic equipment",
    "patient monitoring",
    "healthcare solutions"
  ],
  authors: [{ name: "Ilkka Healthcare" }],
  creator: "Ilkka Healthcare",
  publisher: "Ilkka Healthcare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ilkka-healthcare.com",
    siteName: "Ilkka Healthcare",
    title: "Ilkka Healthcare - Medical Equipment & Supplies",
    description: "Leading medical equipment supplier in Ethiopia and Somaliland. Quality healthcare products and professional solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ilkka Healthcare Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilkka Healthcare - Medical Equipment & Supplies",
    description: "Leading medical equipment supplier in Ethiopia and Somaliland. Quality healthcare products and professional solutions.",
    images: ["/logo.png"],
    creator: "@ilkkahealthcare",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://ilkka-healthcare.com",
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ilkka Healthcare',
    description: 'Leading medical equipment supplier in Ethiopia and Somaliland',
    url: 'https://ilkka-healthcare.com',
    logo: 'https://ilkka-healthcare.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+251-xxx-xxxx', // Replace with actual phone
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Amharic', 'Somali']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Ethiopia',
      addressRegion: 'Addis Ababa'
    },
    sameAs: [
      'https://facebook.com/ilkkahealthcare',
      'https://twitter.com/ilkkahealthcare',
      'https://linkedin.com/company/ilkkahealthcare'
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ilkka-healthcare.com/products?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://ilkka-healthcare.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="ET" />
        <meta name="geo.placename" content="Ethiopia" />
        <meta name="geo.position" content="9.1450;40.4897" />
        <meta name="ICBM" content="9.1450, 40.4897" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
