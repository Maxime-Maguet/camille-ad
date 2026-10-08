import type { Metadata } from "next";
import {
  baseUrl,
  siteDescription,
  siteName,
  siteTitle,
} from "@/lib/seo";
import { faqItems } from "@/lib/content/tarifs";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Providers from "@/components/Providers";

const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

const instrumentSans = localFont({
  src: "./fonts/instrument-sans-latin-wght-normal.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${siteName}`,
    default: siteTitle,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: baseUrl,
    siteName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Camille — Assistante administrative freelance en Haute-Garonne et dans le Tarn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "gdKHWpCIJS8Kj8cofp7g6rSL9HC4TLcXbixclyZnTEQ",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#business`,
  name: "Camille Maguet",
  url: baseUrl,
  image: `${baseUrl}/og-image.png`,
  description: siteDescription,
  email: "camille.maguet.assist@outlook.fr",
  priceRange: "€€",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Haute-Garonne" },
    { "@type": "AdministrativeArea", name: "Tarn" },
  ],
  serviceType: [
    "Secrétariat",
    "RH",
    "Paie Silae",
    "Pré-comptabilité",
    "Facturation et relances",
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function jsonLdScript(jsonLd: object) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(playfair.variable, instrumentSans.variable, "font-sans")}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(faqPageJsonLd),
          }}
        />
        <Providers>
          <Nav />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
