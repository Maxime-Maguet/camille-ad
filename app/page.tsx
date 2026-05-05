import About from "@/components/sections/About";
import Band from "@/components/sections/Band";
import Contact from "@/components/sections/Contact";
import CTAStrip from "@/components/sections/CTAStrip";
import Hero from "@/components/sections/Hero";
import IASection from "@/components/sections/IASection";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="pt-16.5 min-h-[300vh]">
      <Hero />
      <About />
      <Services />
      <Band />
      <IASection />
      <CTAStrip />
      <Contact />
    </main>
  );
}
