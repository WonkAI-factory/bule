import { Card, CardContent } from "@/components/ui/card";
import { Search, Map, Lightbulb, Rocket } from "lucide-react";

export function Method() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "DIAGNÓSTICO ESTRATÉGICO",
      description: "Análisis profundo del contexto, el candidato y su potencial digital."
    },
    {
      number: 2,
      icon: Map,
      title: "MAPEO DEL ELECTORADO",
      description: "Investigación sociopolítica y elaboración de data confiable para identificar la militancia y audiencias objetivo."
    },
    {
      number: 3,
      icon: Lightbulb,
      title: "ESTRATEGIA 360",
      description: "Diseño de la hoja de ruta de comunicación y campaña, enfocada en la conversión y la militancia digital."
    },
    {
      number: 4,
      icon: Rocket,
      title: "EJECUCIÓN Y OPTIMIZACIÓN",
      description: "Implementación fluida de acciones y acompañamiento continuo, ajustando la estrategia con base en el análisis de resultados en tiempo real."
    }
  ];

  return (
    <section id="metodo" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A2329] mb-6 text-center">
          Nuestro Método: La Ruta Científica hacia el Éxito
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
          En Bulé, no trabajamos con suposiciones. Nuestro método es una fórmula comprobada que garantiza la alineación estratégica, la ejecución precisa y la optimización constante, siempre bajo el más estricto secreto profesional.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4A2329] via-[#A65656] to-[#8B4848] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="border-2 border-[#4A2329]/20 hover:shadow-xl transition hover:border-[#A65656]">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#4A2329] text-white flex items-center justify-center text-2xl font-bold">
                              {step.number}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Icon className="w-6 h-6 text-[#A65656]" />
                              <h3 className="text-xl font-bold text-[#4A2329]">{step.title}</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#A65656] text-white items-center justify-center shadow-lg z-10">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
