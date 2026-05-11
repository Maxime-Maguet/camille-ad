import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/seo";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500"],
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
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
