import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TabsSection } from "@/components/TabsSection";
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <main id="inicio" className="overflow-x-hidden w-full bg-[#F6F2E9]">
        <Hero />
        <TabsSection />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
