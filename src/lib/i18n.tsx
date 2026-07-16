import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const es: Dict = {
  // Nav
  "nav.services": "Servicios",
  "nav.process": "Proceso",
  "nav.works": "Trabajos",
  "nav.faq": "FAQ",
  "nav.contact": "Contacto",
  "nav.cta": "Empezar proyecto",

  // Hero
  "hero.subtitle": "Desarrollamos soluciones digitales a medida para negocios que quieren crecer online.",
  "hero.primary": "Nuestros servicios",
  "hero.secondary": "Contactanos",
  "hero.whatsapp": "o escribinos por WhatsApp",

  // Services
  "services.label": "Servicios",
  "services.title": "Seis formas de iluminar tu presencia digital",
  "services.subtitle": "Elegí el servicio que mejor encaja con tu momento. Todos pensados para negocios reales que necesitan resultados claros.",
  "services.more": "Conocer más",
  "services.landing.title": "Landing Pages",
  "services.landing.desc": "Sitios de una página enfocados en conversión, listos en días.",
  "services.catalog.title": "Catálogos digitales",
  "services.catalog.desc": "Mostrá tus productos con o sin checkout completo, con botón directo a WhatsApp.",
  "services.institutional.title": "Sitios institucionales",
  "services.institutional.desc": "Para ONGs, clubes e iglesias, con secciones de actividades y novedades.",
  "services.portfolio.title": "Portfolios digitales",
  "services.portfolio.desc": "Para abogados, diseñadores, fotógrafos y consultores que necesitan una vidriera online.",
  "services.ecommerce.title": "Ecommerce",
  "services.ecommerce.desc": "Te ayudamos a montar tu tienda en Tienda Nube, Empretienda, Shopify y otras plataformas.",
  "services.branding.title": "Branding y copywriting",
  "services.branding.desc": "Creamos la identidad y los textos que hacen sonar tu marca con claridad y personalidad.",

  // Process
  "process.label": "Cómo trabajamos",
  "process.title": "Un proceso simple, en tres pasos",
  "process.step1.title": "Diagnóstico",
  "process.step1.desc": "Entendemos tu negocio, tu audiencia y los objetivos del proyecto.",
  "process.step2.title": "Desarrollo con IA",
  "process.step2.desc": "Construimos rápido y prolijo usando herramientas de IA de punta.",
  "process.step3.title": "Lanzamiento y soporte",
  "process.step3.desc": "Deploy, capacitación y mantenimiento continuo para que sigas creciendo.",

  // Portfolio
  "works.label": "Trabajos",
  "works.title": "Proyectos recientes",
  "works.subtitle": "Una muestra de trabajos hechos para negocios e instituciones de Mar del Plata y el país.",
  "works.tag.institutional": "Sitio institucional",
  "works.tag.landing": "Landing page",
  "works.tag.ecommerce": "E-commerce",

  // FAQ
  "faq.label": "Preguntas frecuentes",
  "faq.title": "Lo que más nos preguntan",
  "faq.q1": "¿Cuánto tarda un proyecto?",
  "faq.a1": "La mayoría de los proyectos están listos entre 5 y 15 días hábiles, según el servicio y la complejidad. Te damos un plazo concreto en el diagnóstico inicial.",
  "faq.q2": "¿Qué necesito para empezar?",
  "faq.a2": "Sólo una idea clara de lo que querés comunicar. Si tenés logo, textos o fotos, mejor. Si no, te guiamos paso a paso para armar todo.",
  "faq.q3": "¿Puedo combinar servicios? (ej. landing + catálogo)",
  "faq.a3": "Sí. De hecho la mayoría de los clientes combinan dos o tres servicios. Armamos un presupuesto integrado con descuento por combo.",
  "faq.q4": "¿Trabajan con plataformas gratuitas?",
  "faq.a4": "Sí, podemos publicar en Netlify o Vercel sin costo de hosting. También integramos con Tienda Nube, Shopify y otras plataformas según el caso.",
  "faq.q5": "¿Atienden fuera de Mar del Plata?",
  "faq.a5": "Sí, trabajamos con clientes de toda Argentina y Latinoamérica de forma 100% remota.",

  // Final CTA
  "cta.title": "¿Empezamos tu proyecto?",
  "cta.subtitle": "Contanos qué necesitás y armamos juntos la mejor solución. Te respondemos en menos de 24 horas.",
  "cta.whatsapp": "Hablar por WhatsApp",
  "cta.write": "Escribir un mensaje",

  // Contact
  "contact.label": "Contacto",
  "contact.title": "Encendamos tu próximo proyecto",
  "contact.subtitle": "Contanos en qué estás pensando. Te respondemos en menos de 24 hs.",
  "contact.wa.title": "WhatsApp",
  "contact.wa.desc": "Respuesta rápida",
  "contact.ig.desc": "Detrás de escena y proyectos",
  "contact.mail.desc": "Para propuestas detalladas",
  "contact.form.name": "Nombre",
  "contact.form.email": "Email",
  "contact.form.phone": "Teléfono (opcional)",
  "contact.form.service": "¿Qué servicio te interesa?",
  "contact.form.serviceSelect": "Elegí un servicio…",
  "contact.form.serviceOther": "No estoy seguro / combinar varios",
  "contact.form.message": "Mensaje",
  "contact.form.privacy": "Tus datos se usan solo para responder tu consulta.",
  "contact.form.submit": "Enviar mensaje",
  "contact.form.err.name": "Contanos tu nombre.",
  "contact.form.err.email": "Ingresá un email válido.",
  "contact.form.err.service": "Elegí un servicio.",
  "contact.form.err.message": "Mensaje muy corto (mínimo 10 caracteres).",
  "contact.sent.title": "¡Gracias!",
  "contact.sent.desc": "Recibimos tu mensaje. Te respondemos en menos de 24 horas.",

  // Footer
  "footer.tagline": "Estudio digital en Mar del Plata. Soluciones claras para hacer crecer tu negocio online.",
  "footer.nav": "Navegación",
  "footer.contact": "Contacto",
  "footer.follow": "Seguinos",
  "footer.location": "Mar del Plata, Argentina",
  "footer.copyright": "Lumen Estudio · Mar del Plata, Argentina",

  // Floating
  "float.wa": "Chatear por WhatsApp",
};

const en: Dict = {
  "nav.services": "Services",
  "nav.process": "Process",
  "nav.works": "Work",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.cta": "Start a project",

  "hero.subtitle": "We build custom digital solutions for businesses that want to grow online.",
  "hero.primary": "Our services",
  "hero.secondary": "Contact us",
  "hero.whatsapp": "or message us on WhatsApp",

  "services.label": "Services",
  "services.title": "Six ways to light up your digital presence",
  "services.subtitle": "Pick the service that fits your moment. All designed for real businesses that need clear results.",
  "services.more": "Learn more",
  "services.landing.title": "Landing Pages",
  "services.landing.desc": "Single-page sites focused on conversion, ready in days.",
  "services.catalog.title": "Digital catalogs",
  "services.catalog.desc": "Show your products with or without full checkout, with a direct WhatsApp button.",
  "services.institutional.title": "Institutional sites",
  "services.institutional.desc": "For NGOs, clubs and churches, with activity and news sections.",
  "services.portfolio.title": "Digital portfolios",
  "services.portfolio.desc": "For lawyers, designers, photographers and consultants who need an online showcase.",
  "services.ecommerce.title": "Ecommerce",
  "services.ecommerce.desc": "We help you set up your store on Tienda Nube, Empretienda, Shopify and other platforms.",
  "services.branding.title": "Branding & copywriting",
  "services.branding.desc": "We craft the identity and words that make your brand sound clear and distinctive.",

  "process.label": "How we work",
  "process.title": "A simple process, in three steps",
  "process.step1.title": "Discovery",
  "process.step1.desc": "We understand your business, audience and project goals.",
  "process.step2.title": "AI-powered build",
  "process.step2.desc": "We build fast and clean using cutting-edge AI tools.",
  "process.step3.title": "Launch & support",
  "process.step3.desc": "Deploy, training and ongoing maintenance so you keep growing.",

  "works.label": "Work",
  "works.title": "Recent projects",
  "works.subtitle": "A sample of work done for businesses and institutions in Mar del Plata and across the country.",
  "works.tag.institutional": "Institutional site",
  "works.tag.landing": "Landing page",
  "works.tag.ecommerce": "E-commerce",

  "faq.label": "Frequently asked questions",
  "faq.title": "The things people ask us most",
  "faq.q1": "How long does a project take?",
  "faq.a1": "Most projects are ready in 5 to 15 business days, depending on the service and complexity. We give you a concrete timeline during discovery.",
  "faq.q2": "What do I need to get started?",
  "faq.a2": "Just a clear idea of what you want to communicate. If you have a logo, copy or photos, even better. If not, we guide you step by step.",
  "faq.q3": "Can I combine services? (e.g. landing + catalog)",
  "faq.a3": "Yes. In fact most clients combine two or three services. We put together an integrated quote with a bundle discount.",
  "faq.q4": "Do you work with free platforms?",
  "faq.a4": "Yes, we can publish on Netlify or Vercel with no hosting costs. We also integrate with Tienda Nube, Shopify and other platforms as needed.",
  "faq.q5": "Do you take clients outside Mar del Plata?",
  "faq.a5": "Yes, we work with clients from all over Argentina and Latin America, 100% remotely.",

  "cta.title": "Shall we start your project?",
  "cta.subtitle": "Tell us what you need and we'll build the best solution together. We reply within 24 hours.",
  "cta.whatsapp": "Chat on WhatsApp",
  "cta.write": "Write a message",

  "contact.label": "Contact",
  "contact.title": "Let's spark your next project",
  "contact.subtitle": "Tell us what you're thinking. We reply within 24 hours.",
  "contact.wa.title": "WhatsApp",
  "contact.wa.desc": "Quick reply",
  "contact.ig.desc": "Behind the scenes and projects",
  "contact.mail.desc": "For detailed proposals",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.phone": "Phone (optional)",
  "contact.form.service": "Which service are you interested in?",
  "contact.form.serviceSelect": "Pick a service…",
  "contact.form.serviceOther": "Not sure / combine several",
  "contact.form.message": "Message",
  "contact.form.privacy": "Your data is only used to reply to your inquiry.",
  "contact.form.submit": "Send message",
  "contact.form.err.name": "Tell us your name.",
  "contact.form.err.email": "Enter a valid email.",
  "contact.form.err.service": "Pick a service.",
  "contact.form.err.message": "Message too short (minimum 10 characters).",
  "contact.sent.title": "Thank you!",
  "contact.sent.desc": "We received your message. We'll reply within 24 hours.",

  "footer.tagline": "Digital studio in Mar del Plata. Clear solutions to grow your business online.",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.follow": "Follow us",
  "footer.location": "Mar del Plata, Argentina",
  "footer.copyright": "Lumen Estudio · Mar del Plata, Argentina",

  "float.wa": "Chat on WhatsApp",
};

const dicts: Record<Lang, Dict> = { es, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lumen.lang");
      if (stored === "en" || stored === "es") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lumen.lang", l);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  const t = (k: string) => dicts[lang][k] ?? dicts.es[k] ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for components rendered outside provider (SSR safety)
    return { lang: "es", setLang: () => {}, t: (k) => dicts.es[k] ?? k };
  }
  return ctx;
}
