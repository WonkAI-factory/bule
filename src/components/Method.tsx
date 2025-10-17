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
    <section id="metodo" className="section-container bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A2329] mb-6 text-center">
          Nuestro Método: La Ruta hacia el Éxito
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          En Bulé, no trabajamos con suposiciones. Nuestro método es una fórmula comprobada que garantiza la alineación estratégica, la ejecución precisa y la optimización constante, siempre bajo el más estricto secreto profesional.
        </p>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex gap-4">
                {/* Stepper column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-full bg-[#A65656] text-white flex items-center justify-center shadow-lg z-10">
                    <Icon className="w-7 h-7" />
                  </div>
                  {/* Connecting line */}
                  {!isLast && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#A65656] to-[#8B4848] mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 min-w-0">
                  <div className="bg-white border-2 border-[#4A2329]/20 rounded-lg p-4 shadow-md hover:shadow-lg transition hover:border-[#A65656]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#4A2329] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-sm font-bold text-[#4A2329] leading-tight">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4A2329] via-[#A65656] to-[#8B4848] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Ícono circular central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#A65656] text-white shadow-lg z-10">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Card */}
                  <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
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

                  {/* Espaciador */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
