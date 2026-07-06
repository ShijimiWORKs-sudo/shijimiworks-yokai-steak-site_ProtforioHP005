import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Team from "@/components/Team";
import Strength from "@/components/Strength";
import Process from "@/components/Process";
import Price from "@/components/Price";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concept />
        <Service />
        <Works />
        <Team />
        <Strength />
        <Process />
        <Price />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
