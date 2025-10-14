# Personalización de la Landing Page - Bulé Consultora

## Datos de Contacto

Para personalizar los datos de contacto en la landing page, edita los siguientes archivos:

### 1. Sección de Contacto Principal
**Archivo:** `src/components/Contact.tsx`

Busca y reemplaza:
- Email: `contacto@buleconsultora.com`
- Teléfono: `+54 XXXXXXXXXX`
- Instagram: `@buleconsultora` y `https://instagram.com/buleconsultora`

### 2. Footer
**Archivo:** `src/components/Footer.tsx`

Busca y reemplaza los mismos datos:
- Email: `contacto@buleconsultora.com`
- Teléfono: `+54 XXXXXXXXXX`
- Instagram: `@buleconsultora` y `https://instagram.com/buleconsultora`

## Colores de la Marca

Los colores están definidos en `src/index.css`:
- **Color Primario Oscuro:** `#4A2329` (hsl: 0 40% 30%)
- **Color Secundario/Acento:** `#A65656` (hsl: 0 25% 42%)
- **Color Fondo Claro:** `#F5F0EA` (hsl: 39 23% 95%)
- **Color Gris:** `#C8C6C6` (hsl: 0 2% 78%)

Para cambiar los colores, modifica las variables CSS en el archivo `src/index.css`.

## Estructura de la Landing Page

1. **Hero:** Sección principal con título y CTA
2. **About:** Quiénes somos y equipo
3. **Services:** Servicios ofrecidos (3 categorías)
4. **Method:** Nuestro método de trabajo (4 pasos)
5. **CTA Section:** Llamada a la acción intermedia
6. **Contact:** Formulario de contacto
7. **Footer:** Pie de página con enlaces y contacto

## Funcionalidad del Formulario

Actualmente el formulario muestra un mensaje de éxito mediante un toast notification.

Para integrar con un backend o servicio de email:
1. Abre `src/components/Contact.tsx`
2. Busca la función `handleSubmit`
3. Reemplaza el código de ejemplo con tu integración (por ejemplo: Supabase, EmailJS, etc.)

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```
