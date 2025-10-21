"use client"

export default function Home() {
  const scrollToSection = () => {
    document.getElementById("content-section")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Sección Inicial */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-blue-800 text-white relative">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold">Bienvenido</h1>
          <p className="text-xl md:text-2xl text-blue-100">Descubre más contenido abajo</p>
        </div>

        {/* Flecha que rebota */}
        <button
          onClick={scrollToSection}
          className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium text-white">Conocer más</span>
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </section>

      {/* Sección de Contenido */}
      <section id="content-section" className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">¡Llegaste a la sección de contenido!</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Esta es la sección a la que te lleva la flecha. Puedes agregar aquí todo el contenido que necesites: texto,
            imágenes, tarjetas, formularios, etc.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Característica 1</h3>
              <p className="text-gray-600">Contenido de ejemplo</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Característica 2</h3>
              <p className="text-gray-600">Contenido de ejemplo</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Característica 3</h3>
              <p className="text-gray-600">Contenido de ejemplo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
