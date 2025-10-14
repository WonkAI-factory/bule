import { Button } from "@/components/ui/button";
import { TrendingUp, Database, Shield } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A2329] via-[#3D2027] to-[#321E23]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="section-container relative z-10 text-center text-white">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            BULÉ CONSULTORA
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-[#A65656] mb-8">
            Tu militancia territorial, nuestro éxito digital.
          </p>
        </div>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-[#A65656] hover:bg-[#8B4848] text-white text-lg px-8 py-6 rounded-lg shadow-2xl transform transition hover:scale-105 mb-16"
        >
          TRANSFORMA TU CAMPAÑA
        </Button>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Estrategia Política Digital con Pulso de Calle.
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200 mb-12">
            En la política actual, la base se construye en la calle y se amplifica en la red. Bulé Consultora es la firma especializada en trasladar el pulso de la militancia territorial al entorno digital, transformando la participación orgánica en campañas de alto impacto y resultados medibles.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
              <TrendingUp className="w-12 h-12 text-[#A65656] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ENFOQUE DATA-DRIVEN</h3>
              <p className="text-gray-200">Cada decisión se basa en análisis sociopolíticos y Big Data.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
              <Database className="w-12 h-12 text-[#A65656] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">SINERGIA TOTAL</h3>
              <p className="text-gray-200">Un equipo multidisciplinario experto en política, marketing y SEO.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition">
              <Shield className="w-12 h-12 text-[#A65656] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">SECRETO PROFESIONAL</h3>
              <p className="text-gray-200">Máxima discreción, ética y compromiso con la victoria.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
