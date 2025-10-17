import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Megaphone,
  TrendingUp,
  Target,
  Users,
  BarChart,
  Palette,
  Search,
  Map,
  Lightbulb,
  Rocket,
} from "lucide-react";

export function TabsSection() {
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
        "Organización y amplificación digital de eventos y actos",
      ],
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
        "Comunicación interna y externa (Clima organizacional y relación con la comunidad)",
      ],
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
        "Seguimiento del impacto, control de gestión y apoyo logístico virtual",
      ],
    },
  ];

  const teamRoles = [
    {
      icon: Target,
      title: "ASESORES ESTRATÉGICOS",
      description:
        "Diseñan la hoja de ruta de la campaña. Son el puente entre la política pura y la ejecución digital.",
    },
    {
      icon: Users,
      title: "ESPECIALISTAS EN COMUNICACIÓN",
      description:
        "Expertos en gestión de crisis, relaciones públicas y desarrollo de mensajes que generan resonancia.",
    },
    {
      icon: BarChart,
      title: "EXPERTOS EN MARKETING Y DATOS",
      description:
        "El motor de la campaña digital. Maestros del targeting, SEO y la movilización digital.",
    },
    {
      icon: Palette,
      title: "DISEÑADORES Y GESTORES DE CONTENIDO (CM)",
      description:
        "Crean la identidad visual impactante y ejecutan la estrategia en redes sociales con profesionalismo.",
    },
  ];

  const steps = [
    {
      number: 1,
      icon: Search,
      title: "DIAGNÓSTICO ESTRATÉGICO",
      description:
        "Análisis profundo del contexto, el candidato y su potencial digital.",
    },
    {
      number: 2,
      icon: Map,
      title: "MAPEO DEL ELECTORADO",
      description:
        "Investigación sociopolítica y elaboración de data confiable para identificar la militancia y audiencias objetivo.",
    },
    {
      number: 3,
      icon: Lightbulb,
      title: "ESTRATEGIA 360",
      description:
        "Diseño de la hoja de ruta de comunicación y campaña, enfocada en la conversión y la militancia digital.",
    },
    {
      number: 4,
      icon: Rocket,
      title: "EJECUCIÓN Y OPTIMIZACIÓN",
      description:
        "Implementación fluida de acciones y acompañamiento continuo, ajustando la estrategia con base en el análisis de resultados en tiempo real.",
    },
  ];

  return (
    <section
      id="propuesta"
      className="section-container bg-[#F5F0EA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2329] mb-6">
            Conoce Nuestra Propuesta
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Una consultoría política integral que combina experiencia
            territorial con innovación digital
          </p>
        </div>

        <Tabs defaultValue="servicios" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 border border-[#4A2329]/20">
            <TabsTrigger
              value="servicios"
              className="text-sm md:text-base font-medium transition-all duration-200 data-[state=active]:bg-[#4A2329] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-[#4A2329] data-[state=inactive]:hover:bg-[#4A2329]/10"
            >
              Servicios
            </TabsTrigger>
            <TabsTrigger
              value="equipo"
              className="text-sm md:text-base font-medium transition-all duration-200 data-[state=active]:bg-[#4A2329] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-[#4A2329] data-[state=inactive]:hover:bg-[#4A2329]/10"
            >
              Nuestro Equipo
            </TabsTrigger>
            <TabsTrigger
              value="metodo"
              className="text-sm md:text-base font-medium transition-all duration-200 data-[state=active]:bg-[#4A2329] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-[#4A2329] data-[state=inactive]:hover:bg-[#4A2329]/10"
            >
              Nuestro Método
            </TabsTrigger>
          </TabsList>

          <TabsContent value="servicios" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4A2329] mb-4">
                Soluciones Integrales para el Éxito
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Nuestra oferta está diseñada para la política del siglo XXI.
                Fusionamos la visión estratégica con la ejecución digital para
                ofrecer soluciones modulares y personalizadas.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-2 border-[#4A2329]/20 hover:shadow-xl transition"
                  >
                    <CardHeader className={`${service.color} text-white`}>
                      <div className="flex items-center gap-4">
                        <Icon className="w-8 h-8" />
                        <CardTitle className="text-2xl">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="text-[#A65656] text-xl mt-1">
                              •
                            </span>
                            <span className="text-gray-700 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="equipo" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4A2329] mb-4">
                El Equipo Bulé: Expertise Multidisciplinaria
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Nuestro equipo combina la pasión por la política con un enfoque
                riguroso de cientificismo y datos. Esto nos permite diseñar
                campañas que no solo resuenan con el electorado, sino que se
                optimizan en tiempo real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamRoles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <Card
                    key={index}
                    className="border-[#4A2329]/20 hover:shadow-lg transition hover:border-[#A65656]"
                  >
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-[#A65656] mb-4" />
                      <h3 className="text-xl font-bold text-[#4A2329] mb-3">
                        {role.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {role.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <blockquote className="border-l-4 border-[#A65656] pl-6 py-4 mt-12 bg-white/50 rounded-r-lg">
              <p className="text-xl italic text-[#4A2329] font-medium">
                "Garantizamos que cada decisión esté fundamentada en datos,
                tendencias y análisis político."
              </p>
            </blockquote>
          </TabsContent>

          <TabsContent value="metodo" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4A2329] mb-4">
                La Ruta hacia el Éxito
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                En Bulé, no trabajamos con suposiciones. Nuestro método es una
                fórmula comprobada que garantiza la alineación estratégica, la
                ejecución precisa y la optimización constante.
              </p>
            </div>

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
                          <h3 className="text-sm font-bold text-[#4A2329] leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
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
                    <div
                      key={index}
                      className={`relative flex items-center ${
                        isEven ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Ícono circular central */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#A65656] text-white shadow-lg z-10">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Card */}
                      <div className={`w-5/12 ${isEven ? "pr-8" : "pl-8"}`}>
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
                                  <h3 className="text-xl font-bold text-[#4A2329]">
                                    {step.title}
                                  </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                  {step.description}
                                </p>
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
