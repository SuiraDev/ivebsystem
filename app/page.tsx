import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { ProblemSection } from "./components/ProblemSection";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ParallaxSection } from "./components/ParallaxSection";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { BusinessModel } from "./components/BusinessModel";
import { TechCarousel } from "./components/TechCarousel";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-cyan/30 relative">
      <ScrollProgress />
      <BackToTop />
      
      <Navbar />
      <Hero />
      <Stats />
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none"></div>
        <RevealOnScroll>
          <ProblemSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <Services />
      </RevealOnScroll>

      <ParallaxSection imagePath="/images/parallax-bg.png" height="300px">
        <RevealOnScroll>
          <div className="text-center space-y-4 px-6">
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              Pronto para <span className="gradient-text">escalar?</span>
            </h3>
            <p className="text-neutral-400 font-light">Vamos transformar sua visão em realidade técnica.</p>
          </div>
        </RevealOnScroll>
      </ParallaxSection>
      
      <div className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
        <RevealOnScroll>
          <BusinessModel />
        </RevealOnScroll>
        
        <TechCarousel />
        
        <RevealOnScroll>
          <Process />
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      
      <Footer />
      
      <WhatsAppCTA />
    </main>
  );
}
