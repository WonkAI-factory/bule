import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#321E23] text-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#A65656]">BULÉ</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
           Nuestra estrategia, tu éxito.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-300 hover:text-[#A65656] transition text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("propuesta")}
                  className="text-gray-300 hover:text-[#A65656] transition text-sm"
                >
                  Nuestra Propuesta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-[#A65656] transition text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Estrategia Política</li>
              <li>Comunicación Digital</li>
              <li>Marketing Electoral</li>
              <li>Análisis de Datos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#A65656]" />
                <a href="mailto:buleconsultora@gmail.com" className="text-gray-300 hover:text-[#A65656] transition break-all">
                  buleconsultora@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#A65656]" />
                <a href="https://wa.me/5491130487843" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A65656] transition">
                  +54 9 1130487843
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Instagram className="w-4 h-4 text-[#A65656]" />
                <a href="https://instagram.com/buleconsultora" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A65656] transition">
                  @buleconsultora
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Bulé Consultora. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400">
              Secreto Profesional | Máxima Discreción
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
