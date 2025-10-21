import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "propuesta", label: "Nuestra Propuesta" },
    { id: "contacto", label: "Contacto" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/70 shadow-lg border-b border-[#521A1F]/10' 
        : 'backdrop-blur-sm bg-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className={`bg-white rounded-full p-2 shadow-md transition-all duration-300 ${
              isScrolled ? 'shadow-lg' : 'shadow-md'
            }`}>
              <img 
                src="/logo.png" 
                alt="BULÉ Logo" 
                className="h-12 w-auto"
              />
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition font-medium ${
                  isScrolled 
                    ? 'text-[#521A1F] hover:text-[#6B2026] border-b-2 border-transparent hover:border-[#6B2026] pb-1' 
                    : 'text-[#521A1F] hover:text-[#6B2026] border-b-2 border-transparent hover:border-[#6B2026] pb-1'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition ${
              isScrolled ? 'text-[#521A1F]' : 'text-[#521A1F]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#521A1F]/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-[#521A1F] hover:text-[#6B2026] transition py-2 font-medium border-b border-transparent hover:border-[#6B2026]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
