import About from "@/components/sections/About";
import Band from "@/components/sections/Band";
import Contact from "@/components/sections/Contact";
import CTAStrip from "@/components/sections/CTAStrip";
import Hero from "@/components/sections/Hero";
import IASection from "@/components/sections/IASection";
import SectionPlaceholder from "@/components/sections/SectionPlaceholder";
import Preuve from "@/components/sections/Preuve";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Preuve />
      <SectionPlaceholder
        id="pourquoi"
        label="Pourquoi moi"
        title="Vous vous"
        subtitle="reconnaissez ?"
      />
      <SectionPlaceholder
        id="tarifs"
        label="Tarifs"
        title="Des tarifs clairs,"
        subtitle="sans engagement."
      />
      <Band />
      <IASection />
      <CTAStrip />
      <Contact />
    </main>
  );
}
