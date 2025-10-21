import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BarChart, Palette } from "lucide-react";

export function About() {
  const teamRoles = [
    {
      icon: Target,
      title: "ASESORES ESTRATÉGICOS",
      description: "Diseñan la hoja de ruta de la campaña. Son el puente entre la política pura y la ejecución digital."
    },
    {
      icon: Users,
      title: "ESPECIALISTAS EN COMUNICACIÓN",
      description: "Expertos en gestión de crisis, relaciones públicas y desarrollo de mensajes que generan resonancia."
    },
    {
      icon: BarChart,
      title: "EXPERTOS EN MARKETING Y DATOS",
      description: "El motor de la campaña digital. Maestros del targeting, SEO y la movilización digital."
    },
    {
      icon: Palette,
      title: "DISEÑADORES Y GESTORES DE CONTENIDO (CM)",
      description: "Crean la identidad visual impactante y ejecutan la estrategia en redes sociales con profesionalismo."
    }
  ];

  return (
    <section id="quienes-somos" className="section-container bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#521A1F] mb-8 text-center">
          Bulé Consultora: La Nueva Política Digital
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Somos una firma de consultoría política especializada en comunicación y estrategia digital en Argentina. Nuestro propósito es simple: proveer las herramientas y el know-how para que los líderes políticos conviertan su base territorial en un éxito sostenible en el entorno digital.
        </p>

        <div className="my-16">
          <h2 className="text-3xl font-bold text-[#521A1F] mb-6 text-center">
            Nuestra Filosofía: Pasión, Ciencia y Vocación
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Nuestro equipo combina la pasión por la política con un enfoque riguroso de cientificismo y datos. Esto nos permite diseñar campañas que no solo resuenan con el electorado, sino que se optimizan en tiempo real para alcanzar los objetivos. Trabajamos con la realidad territorial y la precisión de la analítica.
          </p>
        </div>

        <div className="my-16">
          <h2 className="text-3xl font-bold text-[#521A1F] mb-10 text-center">
            El Equipo Bulé: Expertise Multidisciplinaria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="border-[#521A1F]/20 hover:shadow-lg transition hover:border-[#6B2026]">
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-[#521A1F] mb-4" />
                    <h3 className="text-xl font-bold text-[#521A1F] mb-3">{role.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{role.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <blockquote className="border-l-4 border-[#521A1F] pl-6 py-4 my-12 bg-[#F6F2E9] rounded-r-lg">
          <p className="text-xl italic text-[#521A1F] font-medium">
            "Garantizamos que cada decisión esté fundamentada en datos, tendencias y análisis político."
          </p>
        </blockquote>
      </div>
    </section>
  );
}
