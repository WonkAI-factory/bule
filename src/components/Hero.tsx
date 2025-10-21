import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F6F2E9]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBMjMyOSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="section-container relative z-10 text-center text-[#4A2329]">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            BULÉ CONSULTORA
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-[#A65656] mb-8">
           Nuestra estrategia, tu éxito.
          </p>
        </div>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-[#521A1F] hover:bg-[#A65656] text-[#F6F2E9] text-lg px-8 py-6 rounded-lg shadow-2xl transform transition hover:scale-105 mb-16"
        >
          TRANSFORMA TU CAMPAÑA
        </Button>

        <div className="mt-16">
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 mb-8">
            <strong className="text-[#4A2329]">Tu campaña necesita conectar con la gente real.</strong> Nosotros llevamos tu mensaje desde las calles hasta las redes sociales, con estrategia que funciona.
          </p>
        </div>
      </div>
    </section>
  );
}
