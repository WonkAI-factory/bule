// Google Analytics Events Tracking para Bulé Consultora
// Agregar este código después de configurar Google Analytics 4

// Función helper para enviar eventos a GA4
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Trackear clics en WhatsApp
export const trackWhatsAppClick = () => {
  trackEvent('contact_whatsapp', {
    method: 'whatsapp',
    content_type: 'contact_button'
  });
};

// Trackear clics en Email
export const trackEmailClick = () => {
  trackEvent('contact_email', {
    method: 'email',
    content_type: 'contact_button'
  });
};

// Trackear clics en Instagram
export const trackInstagramClick = () => {
  trackEvent('social_click', {
    platform: 'instagram',
    content_type: 'social_link'
  });
};

// Trackear envío de formulario
export const trackFormSubmission = (formName: string, interest: string) => {
  trackEvent('form_submission', {
    form_name: formName,
    interest_category: interest,
    content_type: 'contact_form'
  });
};

// Trackear navegación a secciones
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
    content_type: 'navigation'
  });
};

// Trackear scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    percent_scrolled: percentage,
    content_type: 'engagement'
  });
};

// Trackear tiempo en página
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    time_seconds: seconds,
    content_type: 'engagement'
  });
};

// Trackear CTA clicks
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    content_type: 'conversion'
  });
};

// INSTRUCCIONES DE USO:
// 
// 1. Importar en Contact.tsx:
//    import { trackFormSubmission, trackWhatsAppClick, trackEmailClick } from '@/lib/analytics';
// 
// 2. Agregar en los event handlers:
//    
//    // En el link de WhatsApp:
//    <a 
//      href="https://wa.me/5491130487843" 
//      onClick={trackWhatsAppClick}
//    >
//
//    // En el link de Email:
//    <a 
//      href="mailto:buleconsultora@gmail.com"
//      onClick={trackEmailClick}
//    >
//
//    // Al enviar formulario exitosamente:
//    trackFormSubmission('contact_form', interests);
//
// 3. Para trackear scroll depth, agregar en App.tsx o main.tsx:
//
//    useEffect(() => {
//      let scrollTimeout: NodeJS.Timeout;
//      const handleScroll = () => {
//        clearTimeout(scrollTimeout);
//        scrollTimeout = setTimeout(() => {
//          const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
//          if (scrollPercent >= 25 && scrollPercent < 50) trackScrollDepth(25);
//          else if (scrollPercent >= 50 && scrollPercent < 75) trackScrollDepth(50);
//          else if (scrollPercent >= 75 && scrollPercent < 100) trackScrollDepth(75);
//          else if (scrollPercent >= 100) trackScrollDepth(100);
//        }, 100);
//      };
//      window.addEventListener('scroll', handleScroll);
//      return () => window.removeEventListener('scroll', handleScroll);
//    }, []);

// Type declarations para TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

export {};
