import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram } from "lucide-react";

interface StatusState {
  ok: boolean;
  text: string;
}

interface PayloadData {
  nonce: string;
  recaptchaToken: string;
  name: string;
  email: string;
  phone: string;
  interests: string;
  message: string;
}

interface ApiResponse {
  ok: boolean;
  error?: string;
}

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = '6LcJ-O0rAAAAAIq3IdPWrrvTtRC16PSARSmLlfmF';
const WEBAPP_URL = 'https://rapid-bread-0675.wonkai-factory.workers.dev';
const NONCE_ENDPOINT = `${WEBAPP_URL}?action=nonce`;

export function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusState | null>(null);

  function showStatus(ok: boolean, text: string): void {
    setStatus({ ok, text });
    setTimeout(() => setStatus(null), 6000);
  }

  async function getNonce(): Promise<string> {
    const res = await fetch(NONCE_ENDPOINT, { method:'GET', cache:'no-store' });
    if(!res.ok) throw new Error('No se pudo obtener nonce');
    const j = await res.json();
    if(!j.ok || !j.nonce) throw new Error('Nonce inválido');
    return j.nonce;
  }

  async function sendPayload(payload: PayloadData): Promise<ApiResponse> {
    const res = await fetch(WEBAPP_URL, {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus(null);

    if (!message.trim() || (!email.trim() && !name.trim())) {
      showStatus(false, 'Completá al menos mensaje y nombre o email.');
      return;
    }

    setLoading(true);
    try {
      const nonce = await getNonce();

      if (typeof window.grecaptcha === 'undefined') {
        throw new Error('reCAPTCHA no cargado. Agregá el script en public/index.html');
      }
      const recaptchaToken = await window.grecaptcha.execute(SITE_KEY, { action: 'submit' });

      const payload = {
        nonce,
        recaptchaToken,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        interests: interests.trim(),
        message: message.trim()
      };

      const result = await sendPayload(payload);

      if (result && result.ok) {
        showStatus(true, '¡Mensaje enviado exitosamente! Te contactaré pronto.');
        setName(''); 
        setEmail(''); 
        setPhone('');
        setInterests('');
        setMessage('');
      } else {
        console.error('Server reply:', result);
        const err = result && result.error ? result.error : 'error_desconocido';
        showStatus(false, 'No se pudo enviar: ' + err);
      }
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      showStatus(false, 'Error en el envío: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="section-container bg-[#521A1F] text-white overflow-hidden">
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
              <Mail className="w-8 h-8 text-[#F6F2E9] mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Email</p>
              <a href="mailto:buleconsultora@gmail.com" className="text-white hover:text-[#F6F2E9] transition break-all">
                buleconsultora@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-[#F6F2E9] mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Teléfono</p>
              <a href="https://wa.me/5491130487843" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F6F2E9] transition">
                +54 9 1130487843
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition">
            <CardContent className="p-6 text-center">
              <Instagram className="w-8 h-8 text-[#F6F2E9] mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Instagram</p>
              <a href="https://instagram.com/buleconsultora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F6F2E9] transition">
                @buleconsultora
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/5 border-white/20">
          <CardContent className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white">Nombre Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Teléfono *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <Label htmlFor="interests" className="text-white">Interés *</Label>
                <Select value={interests} onValueChange={(value) => setInterests(value)} required>
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
                <Label htmlFor="message" className="text-white">Mensaje *</Label>
                <Textarea
                  id="message"
                  required
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-32"
                  placeholder="Cuéntenos sobre su campaña y sus necesidades..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-[#F6F2E9] hover:bg-white text-[#521A1F] text-lg py-6"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-[#521A1F] border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  'SOLICITAR ASESORÍA CONFIDENCIAL'
                )}
              </Button>

              {status && (
                <div className={`
                  mt-6 p-4 rounded-xl text-center font-medium
                  ${status.ok 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                  }
                `}>
                  {status.text}
                </div>
              )}

              <p className="text-sm text-gray-400 text-center">
                Garantizamos máxima discreción y el uso exclusivo de la información para fines de contacto.
              </p>
              <p className="text-xs text-center text-gray-400">
                🔒 Protegido por reCAPTCHA v3 - Envío seguro garantizado
              </p>
            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
