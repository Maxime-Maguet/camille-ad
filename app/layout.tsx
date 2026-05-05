import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

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
  title: "Camille — Assistante de Direction Freelance · Toulouse",
  description:
    "Assistante de direction freelance spécialisée secteur propreté. RH, comptabilité, accompagnement IA. Toulouse et périphérie.",
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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
