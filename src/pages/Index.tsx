import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Press from "@/components/Press";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Team />
      <Press />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
