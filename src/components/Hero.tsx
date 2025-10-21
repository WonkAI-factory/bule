import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = () => {
    const element = document.getElementById('propuesta');
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F6F2E9]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzUyMUExRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="section-container relative z-10 text-center text-[#521A1F]">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            BULÉ CONSULTORA
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-[#6B2026] mb-8">
           Nuestra estrategia, tu éxito.
          </p>
        </div>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-[#521A1F] hover:bg-[#6B2026] text-[#F6F2E9] text-lg px-8 py-6 rounded-lg shadow-2xl transform transition hover:scale-105 mb-16"
        >
          TRANSFORMA TU CAMPAÑA
        </Button>

        <div className="mt-16">
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 mb-8">
            <strong className="text-[#521A1F]">Tu campaña necesita conectar con la gente real.</strong> Nosotros llevamos tu mensaje desde las calles hasta las redes sociales, con estrategia que funciona.
          </p>
        </div>
      </div>

      {/* Flecha flotante suave */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToSection}
          className="flex flex-col items-center justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-1000 bg-transparent p-6 group animate-gentle-bounce"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium text-[#521A1F] group-hover:text-[#6B2026] transition-colors duration-700 text-center whitespace-nowrap">Conocer más</span>
          <div className="w-10 h-10 rounded-full border-2 border-[#521A1F] flex items-center justify-center bg-[#521A1F] group-hover:bg-[#6B2026] group-hover:border-[#6B2026] transition-all duration-700 shadow-lg group-hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#F6F2E9]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
