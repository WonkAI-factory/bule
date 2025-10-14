import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Method } from "@/components/Method";
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="inicio">
        <Hero />
        <About />
        <Services />
        <Method />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
