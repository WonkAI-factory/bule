import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Instagram } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    interes: "",
    mensaje: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Solicitud Enviada",
      description: "Nos pondremos en contacto con usted a la brevedad. Gracias por su confianza.",
    });

    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      interes: "",
      mensaje: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="section-container bg-[#4A2329] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Conversemos. Transforma tu Campaña.
        </h1>

        <p className="text-xl leading-relaxed mb-12 text-center text-gray-200">
          El éxito político requiere estrategia, data y la mejor ejecución digital. Le invitamos a ponerse en contacto con nuestro equipo para una consulta inicial confidencial. Estamos listos para llevar su militancia al dominio digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-[#A65656] mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Email</p>
              <a href="mailto:contacto@buleconsultora.com" className="text-white hover:text-[#A65656] transition break-all">
                contacto@buleconsultora.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-[#A65656] mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Teléfono</p>
              <a href="tel:+54XXXXXXXXXX" className="text-white hover:text-[#A65656] transition">
                +54 XXXXXXXXXX
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition">
            <CardContent className="p-6 text-center">
              <Instagram className="w-8 h-8 text-[#A65656] mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Instagram</p>
              <a href="https://instagram.com/buleconsultora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A65656] transition">
                @buleconsultora
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/5 border-white/20">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nombre" className="text-white">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-white">Teléfono *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <Label htmlFor="interes" className="text-white">Interés *</Label>
                <Select value={formData.interes} onValueChange={(value) => handleChange("interes", value)} required>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Seleccione una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estrategia">Estrategia</SelectItem>
                    <SelectItem value="marketing">Marketing/Datos</SelectItem>
                    <SelectItem value="comunicacion">Comunicación</SelectItem>
                    <SelectItem value="general">Consulta General</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje" className="text-white">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-32"
                  placeholder="Cuéntenos sobre su campaña y sus necesidades..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#A65656] hover:bg-[#8B4848] text-white text-lg py-6"
              >
                SOLICITAR ASESORÍA CONFIDENCIAL
              </Button>

              <p className="text-sm text-gray-400 text-center">
                Garantizamos máxima discreción y el uso exclusivo de la información para fines de contacto.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
