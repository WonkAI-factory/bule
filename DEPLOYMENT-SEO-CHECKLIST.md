# Checklist de Deployment SEO - Bulé Consultora

## ✅ Pre-Deployment Checklist

### 1. Contenido y Meta Tags
- [ ] Verificar que todos los meta tags estén presentes en index.html
- [ ] Confirmar que lang="es-AR" esté configurado
- [ ] Verificar canonical URL apunta a https://consultorabule.com.ar
- [ ] Revisar que Open Graph images existan

### 2. Imágenes Requeridas (CREAR ANTES DE DEPLOY)
```bash
# Ubicación: /public/
- logo.png (512x512px)
- og-image.jpg (1200x630px) - Imagen para Facebook/LinkedIn
- twitter-image.jpg (1200x675px) - Imagen para Twitter
- icon-192.png (192x192px) - PWA icon
- icon-512.png (512x512px) - PWA icon
- apple-touch-icon.png (180x180px) - iOS icon
- favicon.ico (48x48px) - Favicon estándar
```

### 3. Archivos de Configuración
- [x] robots.txt configurado
- [x] sitemap.xml actualizado
- [x] manifest.json creado
- [x] .htaccess para Apache
- [ ] Verificar que todos apunten al dominio correcto

### 4. Build y Optimización
```bash
# Antes de hacer deploy, ejecutar:
npm run build

# Verificar que el build sea exitoso
# Revisar tamaño de bundles en dist/
```

### 5. Testing Pre-Deploy
- [ ] Probar en localhost:4173 (preview)
- [ ] Verificar que todas las secciones carguen
- [ ] Probar formulario de contacto
- [ ] Verificar responsive design

## 🚀 Post-Deployment Checklist

### 1. Verificación Técnica (Día 1)
- [ ] Confirmar que https:// funciona correctamente
- [ ] Verificar que www redirige a no-www (o viceversa)
- [ ] Confirmar que sitemap.xml es accesible: https://consultorabule.com.ar/sitemap.xml
- [ ] Confirmar que robots.txt es accesible: https://consultorabule.com.ar/robots.txt
- [ ] Verificar manifest.json: https://consultorabule.com.ar/manifest.json

### 2. Testing SEO (Día 1)
Usar las siguientes herramientas:

#### Google Rich Results Test
```
https://search.google.com/test/rich-results
URL: https://consultorabule.com.ar
```
Verificar:
- [ ] Organization schema detectado
- [ ] ProfessionalService schema detectado
- [ ] Sin errores de estructura

#### Google PageSpeed Insights
```
https://pagespeed.web.dev/
URL: https://consultorabule.com.ar
```
Objetivo:
- [ ] Desktop Score > 90
- [ ] Mobile Score > 80
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s

#### Google Mobile-Friendly Test
```
https://search.google.com/test/mobile-friendly
URL: https://consultorabule.com.ar
```
- [ ] Sitio mobile-friendly confirmado

### 3. Google Search Console (Semana 1)

#### Setup Inicial
1. [ ] Ir a https://search.google.com/search-console
2. [ ] Agregar propiedad: consultorabule.com.ar
3. [ ] Verificar propiedad (método recomendado: HTML file)
4. [ ] Verificar también versión www si aplica

#### Envío de Sitemap
```
En Google Search Console:
Sitemaps > Agregar sitemap
URL: https://consultorabule.com.ar/sitemap.xml
```
- [ ] Sitemap enviado
- [ ] Esperar 24-48 horas para procesamiento
- [ ] Verificar que no haya errores

#### Inspección de URL
Probar las siguientes URLs:
- [ ] https://consultorabule.com.ar/ (principal)
- [ ] https://consultorabule.com.ar/#servicios
- [ ] https://consultorabule.com.ar/#contacto

### 4. Google Analytics 4 (Semana 1)

#### Configuración
1. [ ] Crear cuenta en Google Analytics 4
2. [ ] Crear propiedad "Bulé Consultora"
3. [ ] Obtener Measurement ID (formato: G-XXXXXXXXXX)
4. [ ] Agregar código de seguimiento al sitio

#### Código a agregar en index.html:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Eventos a Configurar
- [ ] Form submission (contacto)
- [ ] WhatsApp click
- [ ] Email click
- [ ] Instagram click
- [ ] Scroll depth

### 5. Google My Business (Semana 1-2)

- [ ] Crear perfil en https://business.google.com
- [ ] Categoría: "Consultor de Marketing" o "Consultor"
- [ ] Completar todos los campos:
  - Nombre: Bulé Consultora
  - Dirección: (Si tienen oficina física)
  - Teléfono: +54 9 11 3048-7843
  - Sitio web: https://consultorabule.com.ar
  - Horarios: (Configurar)
- [ ] Agregar descripción optimizada con keywords
- [ ] Subir fotos del equipo/oficina (mínimo 5)
- [ ] Solicitar reseñas a clientes existentes

### 6. Redes Sociales (Semana 1)

#### Instagram: @buleconsultora
- [ ] Actualizar bio con link al sitio
- [ ] Agregar keywords relevantes
- [ ] Publicar contenido regularmente (3x semana)
- [ ] Stories diarias
- [ ] Usar hashtags: #ConsultoríaPolítica #MarketingElectoral #PolíticaArgentina

#### LinkedIn (Crear)
- [ ] Crear página de empresa
- [ ] Completar todos los campos
- [ ] Conectar con profesionales del sector
- [ ] Publicar artículos de blog
- [ ] Compartir casos de éxito

#### Facebook (Opcional)
- [ ] Crear página profesional
- [ ] Link al sitio web
- [ ] Sincronizar con Instagram
- [ ] Publicaciones programadas

### 7. Monitoreo Continuo

#### Semanal
- [ ] Revisar Google Search Console
- [ ] Verificar posición de keywords principales
- [ ] Analizar tráfico en Google Analytics
- [ ] Responder mensajes/comentarios en redes

#### Mensual
- [ ] Actualizar sitemap.xml si hay cambios
- [ ] Publicar 2-4 artículos de blog nuevos
- [ ] Analizar backlinks
- [ ] Revisar competencia
- [ ] Optimizar páginas con bajo rendimiento

### 8. Keywords a Monitorear

Posiciones objetivo para los primeros 3 meses:

#### Alta Prioridad (Objetivo: Top 10)
- consultoría política argentina
- marketing electoral argentina
- consultor político argentina
- asesor de campaña política

#### Media Prioridad (Objetivo: Top 20)
- estrategia electoral digital
- comunicación política argentina
- gestión de redes sociales políticas
- análisis electoral

#### Baja Prioridad (Long-tail)
- como ganar elecciones en argentina
- mejor consultor político buenos aires
- agencia marketing político argentina

### 9. Content Marketing Plan

#### Mes 1
- [ ] Artículo: "Cómo ganar elecciones en Argentina 2025"
- [ ] Artículo: "Marketing electoral: Guía completa"
- [ ] Caso de estudio: Éxito de cliente (anonimizado)
- [ ] Infografía: "El proceso de campaña"

#### Mes 2
- [ ] Artículo: "Redes sociales para políticos"
- [ ] Artículo: "SEO político en Argentina"
- [ ] Video: Presentación del equipo
- [ ] Checklist descargable: "Campaña electoral exitosa"

#### Mes 3
- [ ] Artículo: "Análisis de datos electorales"
- [ ] Artículo: "Comunicación de crisis política"
- [ ] Webinar: "Estrategias digitales 2025"
- [ ] E-book: "Manual de marketing electoral"

### 10. Backlinks Strategy

#### Directorios Argentinos (Mes 1)
- [ ] Páginas Amarillas
- [ ] Guía de Empresas Argentina
- [ ] Directorio de Consultoras

#### Medios y Blogs (Mes 2-3)
- [ ] Guest post en blogs de política
- [ ] Menciones en medios digitales
- [ ] Entrevistas en podcasts políticos
- [ ] Colaboraciones con universidades

#### Social Proof (Continuo)
- [ ] Testimonios de clientes en video
- [ ] Casos de éxito publicados
- [ ] Premios/reconocimientos (si aplica)

## 📊 KPIs a Medir

### Tráfico
- Sesiones mensuales: Objetivo 1,000+ al tercer mes
- Usuarios nuevos: 80%+
- Tasa de rebote: <60%
- Tiempo en sitio: >2 minutos

### SEO
- Keywords en Top 10: 3+ al tercer mes
- Keywords en Top 20: 10+ al tercer mes
- Backlinks: 20+ al tercer mes
- Domain Authority: >20 al sexto mes

### Conversiones
- Form submissions: 10+ mensuales
- Llamadas: 5+ mensuales
- WhatsApp mensajes: 10+ mensuales

## 🔧 Herramientas Recomendadas

### Gratis
- Google Search Console
- Google Analytics
- Google My Business
- Ubersuggest (keywords)
- AnswerThePublic (ideas de contenido)

### Pagos (Opcional)
- SEMrush o Ahrefs (análisis SEO)
- Hotjar (heatmaps)
- Canva Pro (diseño)
- Buffer/Hootsuite (social media)

## 📞 Soporte

Si necesitas ayuda con alguno de estos pasos:
- Email: buleconsultora@gmail.com
- WhatsApp: +54 9 11 3048-7843

---

**Última actualización**: 21 de octubre de 2025
