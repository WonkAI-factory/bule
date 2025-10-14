import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Megaphone, TrendingUp } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "I. ESTRATEGIA POLÍTICA Y GESTIÓN",
      color: "bg-[#4A2329]",
      items: [
        "Estrategia de Campaña y Posicionamiento Competitivo",
        "Diagnóstico situacional y medición de la opinión pública",
        "Asesoramiento profesional y formación continua del equipo",
        "Manejo de Crisis, negociación y alianzas estratégicas",
        "Auditoría Operativa y seguimiento del presupuesto",
        "Organización y amplificación digital de eventos y actos"
      ]
    },
    {
      icon: Megaphone,
      title: "II. COMUNICACIÓN DIGITAL, REDES Y CONTENIDO",
      color: "bg-[#A65656]",
      items: [
        "Manejo Profesional de Redes Sociales (Engagement y gestión de comunidad)",
        "Estrategias de prensa, relaciones con medios y seguimiento mediático 360",
        "Desarrollo de mensajes y comunicación de logros",
        "Diseño y producción de piezas publicitarias para todos los formatos (Gráfica, Digital, TV)",
        "Comunicación interna y externa (Clima organizacional y relación con la comunidad)"
      ]
    },
    {
      icon: TrendingUp,
      title: "III. MARKETING ELECTORAL Y ANÁLISIS DE DATOS (SEO FOCUSED)",
      color: "bg-[#8B4848]",
      items: [
        "Planificación e implementación de campañas 100% SEO y Targeting",
        "Asesoría en diseño, alojamiento y marketing electoral web",
        "Analítica Electoral: Encuestas online, Social Listening y armado de base de datos (CRM político)",
        "Marketing directo para movilizar potenciales votantes (Email Marketing y Retargeting)",
        "Seguimiento del impacto, control de gestión y apoyo logístico virtual"
      ]
    }
  ];

  return (
    <section id="servicios" className="section-container bg-[#F5F0EA] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A2329] mb-6 text-center">
          Nuestros Servicios: Soluciones Integrales para la Victoria
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
          Nuestra oferta está diseñada para la política del siglo XXI. Fusionamos la visión estratégica con la ejecución digital para ofrecer soluciones modulares y personalizadas a las necesidades de cada campaña.
        </p>

        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden border-2 border-[#4A2329]/20 hover:shadow-xl transition">
                <CardHeader className={`${service.color} text-white`}>
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-[#A65656] text-xl mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
