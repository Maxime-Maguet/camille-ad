import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CTAStrip from "@/components/sections/CTAStrip";
import Hero from "@/components/sections/Hero";
import Pourquoi from "@/components/sections/Pourquoi";
import Preuve from "@/components/sections/Preuve";
import Services from "@/components/sections/Services";
import Tarifs from "@/components/sections/Tarifs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Preuve />
      <Pourquoi />
      <Tarifs />
      <About />
      <CTAStrip />
      <Contact />
    </main>
  );
}
