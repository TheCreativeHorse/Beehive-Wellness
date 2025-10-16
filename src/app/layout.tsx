import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beehive Wellness - Lung & IV Therapy | Brampton & Scarborough",
  description: "Restore your health with personalized lung and IV therapy treatments. Expert naturopathic care in Brampton and Scarborough. Book your wellness session today - 20% off first visit!",
  keywords: "lung therapy, IV therapy, naturopathic doctor, wellness, Brampton, Scarborough, health restoration, breathing therapy, vitamin therapy",
  authors: [{ name: "Beehive Wellness" }],
  creator: "Beehive Wellness",
  publisher: "Beehive Wellness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://beehivewellness.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Beehive Wellness - Lung & IV Therapy | Brampton & Scarborough",
    description: "Restore your health with personalized lung and IV therapy treatments. Expert naturopathic care in Brampton and Scarborough.",
    url: 'https://beehivewellness.ca',
    siteName: 'Beehive Wellness',
    images: [
      {
        url: '/images/pexels-tara-winstead-8849272.jpg',
        width: 1200,
        height: 630,
        alt: 'Beehive Wellness - Lung & IV Therapy',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beehive Wellness - Lung & IV Therapy | Brampton & Scarborough",
    description: "Restore your health with personalized lung and IV therapy treatments. Expert naturopathic care in Brampton and Scarborough.",
    images: ['/images/pexels-tara-winstead-8849272.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQL2GHFN7G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQL2GHFN7G');
            `,
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Beehive Wellness",
              "description": "Naturopathic clinic specializing in lung and IV therapy treatments",
              "url": "https://beehivewellness.ca",
              "telephone": "437-430-2442",
              "email": "info@beehivewellness.ca",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Unit #127, 40 Finchgate Blvd",
                  "addressLocality": "Brampton",
                  "addressRegion": "ON",
                  "postalCode": "L6T 3H9",
                  "addressCountry": "CA"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Unit #210, 2130 Lawrence Ave E",
                  "addressLocality": "Scarborough",
                  "addressRegion": "ON",
                  "postalCode": "M1R 3A6",
                  "addressCountry": "CA"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": "43.6833",
                  "longitude": "-79.7667"
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": "43.7731",
                  "longitude": "-79.2578"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "medicalSpecialty": ["Naturopathic Medicine", "Lung Therapy", "IV Therapy"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wellness Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Lung Therapy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "IV Therapy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Combined Therapy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Health Consultation"
                    }
                  }
                ]
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "Dr. Sany Seifi",
                  "jobTitle": "Clinic Director / Owner",
                  "description": "ND (AB), Bs Pharm, PhD"
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dr. Farhad Esmaelbeigi",
                  "jobTitle": "Naturopathic Doctor",
                  "description": "MD, General Surgeon, Cancer Fellowship in Iran"
                },
                {
                  "@type": "Person",
                  "name": "Dr. Sean Kerr",
                  "jobTitle": "Chiropractor",
                  "description": "DC"
                },
                {
                  "@type": "Person",
                  "name": "Dr. Maryam Jahanshahi",
                  "jobTitle": "Naturopathic Doctor",
                  "description": "BSc, MSc, ND"
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "CAD"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
