import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Join Orbit Marketing, Inc. | Launch Your Career in Marketing",
  description:
    "Orbit Marketing supports growing brands with structured marketing strategies. Join our team in Greenville, South Carolina. Entry-level opportunities available in marketing, sales, and brand management.",
  keywords: [
    "marketing jobs",
    "entry level marketing",
    "sales jobs",
    "brand manager",
    "Greenville SC jobs",
    "marketing careers",
  ],
  authors: [{ name: "Orbit Marketing, Inc." }],
  openGraph: {
    title: "Join Orbit Marketing, Inc. | Launch Your Career",
    description:
      "Launching Brands into their Next Phase. Entry-level opportunities in marketing, sales, and brand management.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Orbit Marketing, Inc.",
              description:
                "Orbit Marketing supports growing brands by providing structured marketing strategies and hands-on execution.",
              url: "https://orbitmarketinginc.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Greenville",
                addressRegion: "South Carolina",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Recruitment",
                email: "placeholder@placeholder.com",
              },
            }),
          }}
        />
        {/* JSON-LD Schema for Example JobPosting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: "Entry Level Marketing Positions",
              description:
                "Sample job posting - Entry-level opportunities in marketing, sales, and brand management. Training provided.",
              identifier: {
                "@type": "PropertyValue",
                name: "Orbit Marketing",
                value: "SAMPLE-001",
              },
              datePosted: new Date().toISOString(),
              employmentType: "FULL_TIME",
              hiringOrganization: {
                "@type": "Organization",
                name: "Orbit Marketing, Inc.",
                sameAs: "https://orbitmarketinginc.com",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Greenville",
                  addressRegion: "South Carolina",
                  addressCountry: "US",
                },
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: {
                  "@type": "QuantitativeValue",
                  value: "To be discussed",
                  unitText: "HOUR",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-space-accent focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}