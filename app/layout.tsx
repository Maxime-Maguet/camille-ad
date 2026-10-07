import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/seo";
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
    default: "Camille AD — Assistante de Direction Freelance Toulouse",
  },
  description:
    "Assistante de direction freelance spécialisée secteur propreté à Toulouse. Externalisation RH, paie, comptabilité et accompagnement IA. TPE/PME 30–100 salariés.",
  openGraph: {
    title: "Camille AD — Assistante de Direction Freelance Toulouse",
    description:
      "Externalisation RH, comptabilité et accompagnement IA pour les entreprises du secteur propreté. Toulouse et périphérie.",
    url: baseUrl,
    siteName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Camille AD — Assistante de Direction Freelance Toulouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camille AD — Assistante de Direction Freelance Toulouse",
    description:
      "Externalisation RH, comptabilité et accompagnement IA pour les entreprises du secteur propreté. Toulouse et périphérie.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#business`,
  name: "Camille AD",
  url: baseUrl,
  image: `${baseUrl}/og-image.png`,
  description:
    "Assistante de direction freelance spécialisée dans le secteur de la propreté à Toulouse. Externalisation RH, paie, comptabilité et accompagnement IA pour TPE/PME.",
  telephone: "+33638376182",
  email: "camille.mcofficemanager@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressRegion: "Occitanie",
    postalCode: "31000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6047,
    longitude: 1.4442,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 43.6047,
      longitude: 1.4442,
    },
    geoRadius: "50000",
  },
  serviceType: [
    "Administration et ressources humaines",
    "Comptabilité et facturation",
    "Accompagnement intelligence artificielle",
  ],
};

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
      <body className="overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
