import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Involved from "@/components/Involved";
import About from "@/components/About";
import Archive from "@/components/Archive";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const { section } = useParams();

  // The site uses hash routing, so an in-page link such as "#volunteers" arrives
  // here as a route param. Scroll to that section so nav links and shared links
  // (bsidessrilanka.lk/#volunteers) both land in the right place.
  useEffect(() => {
    if (!section) return;
    document.getElementById(section)?.scrollIntoView();
  }, [section]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Involved />
        <About />
        <Archive />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
