import { Button } from "@/components/ui/button";

export function CTASection() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-container bg-gradient-to-r from-[#4A2329] to-[#A65656] text-white text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para llevar tu militancia al dominio digital?
        </h2>
        <p className="text-xl mb-8 text-gray-100 leading-relaxed">
          Conectamos la realidad de la gente con las herramientas digitales. Es momento de hacer que tu campaña hable el idioma de la gente.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-white text-[#4A2329] hover:bg-gray-100 text-lg px-10 py-6 rounded-lg shadow-xl transform transition hover:scale-105"
        >
          SOLICITAR ASESORÍA CONFIDENCIAL
        </Button>
      </div>
    </section>
  );
}
