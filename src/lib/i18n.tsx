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
  "hero.tagline": "Claridad digital para tu negocio.",
  "hero.subtitle": "Sitios web, Landing pages y e-Commerce para emprendedores y PyMEs. Nosotros nos ocupamos de la parte digital, para que crecer sea simple para vos.",
  "hero.primary": "Nuestros servicios",
  "hero.secondary": "Contactanos",
  "hero.whatsapp": "o escribinos por WhatsApp",

  // Services
  "services.label": "Servicios",
  "services.title": "Seis formas de iluminar tu presencia digital",
  "services.subtitle": "Elegí el servicio que mejor encaja con tu momento. Todos pensados para negocios reales que necesitan resultados claros.",
  "services.more": "Conocer más",
  "services.landing.title": "Landing Pages",
  "services.landing.desc": "Una página, un objetivo: que el visitante te escriba. Lista en días, no en semanas.",
  "services.catalog.title": "Catálogos digitales",
  "services.catalog.desc": "Tus productos siempre visibles, y en un solo lugar.",
  "services.institutional.title": "Sitios institucionales",
  "services.institutional.desc": "Pensado para instituciones y organizaciones que quieren ser encontradas, no solo existir online.",
  "services.portfolio.title": "Portfolios digitales",
  "services.portfolio.desc": "Tu trabajo, tu estilo, tu trayectoria: todo en un mismo lugar, listo para mostrar.",
  "services.ecommerce.title": "Ecommerce",
  "services.ecommerce.desc": "Tu tienda online lista para vender las 24hs, en la plataforma que mejor te quede.",
  "services.branding.title": "Branding y copywriting",
  "services.branding.desc": "Que tu marca se entienda en 3 segundos y se recuerde después.",

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
  "faq.q1": "¿Cuánto cuesta un proyecto?",
  "faq.a1": "Una landing page base arranca desde los 170 USD / $250.000 aprox., y un e-commerce a medida desde los 500 USD / $750.000 aprox. Tenemos paquetes con precios y especificaciones que se adaptan a lo que necesites.",
  "faq.q2": "¿Cuánto tarda un proyecto?",
  "faq.a2": "Una landing page simple tarda entre 2 y 5 días, y un e-commerce entre 7 y 14 días aprox. Todo depende de la complejidad y el alcance que se quiera lograr — te damos un plazo concreto en el diagnóstico inicial.",
  "faq.q3": "¿Puedo combinar servicios? (ej. landing + catálogo)",
  "faq.a3": "Sí. De hecho la mayoría de los clientes combinan dos o tres servicios. Armamos un presupuesto integrado con descuento por combo.",
  "faq.q4": "¿Qué pasa después de que mi sitio está publicado?",
  "faq.a4": "Podés seguir usándolo tranquilo: te dejamos herramientas para que gestiones ciertos contenidos, y si preferís que nos encarguemos nosotros de futuros cambios, ofrecemos mantenimiento.",
  "faq.q5": "¿Cómo se comienza un proyecto?",
  "faq.a5": "Nos escribís por WhatsApp o el formulario contándonos qué necesitás. Coordinamos una charla para entender tu negocio y objetivos, y de ahí te armamos una propuesta con alcance y plazos concretos.",
  "faq.q6": "¿Cómo es la forma de pago?",
  "faq.a6": "Trabajamos con una seña del 50% para reservar el proyecto y el saldo restante contra entrega (o en cuotas según el alcance). Te lo detallamos junto con el presupuesto.",
  "faq.q7": "¿El dominio y el hosting quedan a mi nombre?",
  "faq.a7": "Sí. Tanto el dominio como el hosting quedan siempre a tu nombre — vos sos dueño de tu sitio, nosotros solo lo construimos y lo mantenemos si así lo elegís. Si nunca compraste un dominio o hosting, te asesoramos y te ayudamos a conseguirlo sin costo adicional.",
  "faq.q8": "¿Qué pasa si no tengo logo ni identidad de marca todavía?",
  "faq.a8": "No hay problema. Ofrecemos branding y copywriting como servicio, así que podemos armar tu identidad desde cero antes de construir el sitio.",
  "faq.q9": "¿Puedo pedir cambios durante el desarrollo?",
  "faq.a9": "Sí. En el diagnóstico definimos el alcance, pero siempre hay una instancia de revisión antes de la entrega final para ajustar lo que necesites. Después de la entrega, ofrecemos un servicio de mantenimiento mensual mínimo por si necesitás modificar algo.",

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

  "hero.tagline": "Digital clarity for your business.",
  "hero.subtitle": "Websites, landing pages and e-commerce for founders and small businesses. We handle the digital side, so growing is simple for you.",
  "hero.primary": "Our services",
  "hero.secondary": "Contact us",
  "hero.whatsapp": "or message us on WhatsApp",

  "services.label": "Services",
  "services.title": "Six ways to light up your digital presence",
  "services.subtitle": "Pick the service that fits your moment. All designed for real businesses that need clear results.",
  "services.more": "Learn more",
  "services.landing.title": "Landing Pages",
  "services.landing.desc": "One page, one goal: getting the visitor to reach out. Ready in days, not weeks.",
  "services.catalog.title": "Digital catalogs",
  "services.catalog.desc": "Your products always visible, all in one place.",
  "services.institutional.title": "Institutional sites",
  "services.institutional.desc": "Built for institutions and organizations that want to be found, not just exist online.",
  "services.portfolio.title": "Digital portfolios",
  "services.portfolio.desc": "Your work, your style, your track record: all in one place, ready to show.",
  "services.ecommerce.title": "Ecommerce",
  "services.ecommerce.desc": "Your online store ready to sell 24/7, on the platform that fits you best.",
  "services.branding.title": "Branding & copywriting",
  "services.branding.desc": "So your brand is understood in 3 seconds and remembered afterwards.",

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
  "faq.q1": "How much does a project cost?",
  "faq.a1": "A base landing page starts at around USD 170, and a custom e-commerce at around USD 500. We have packages with prices and specs that adapt to what you need.",
  "faq.q2": "How long does a project take?",
  "faq.a2": "A simple landing page takes 2 to 5 days, and an e-commerce 7 to 14 days approx. It all depends on complexity and scope — we give you a concrete timeline in the initial discovery.",
  "faq.q3": "Can I combine services? (e.g. landing + catalog)",
  "faq.a3": "Yes. In fact most clients combine two or three services. We put together an integrated quote with a bundle discount.",
  "faq.q4": "What happens after my site is live?",
  "faq.a4": "You can keep using it with peace of mind: we leave you tools to manage certain content, and if you'd rather we handle future changes, we offer maintenance.",
  "faq.q5": "How does a project start?",
  "faq.a5": "You message us on WhatsApp or through the form telling us what you need. We set up a call to understand your business and goals, and from there we build a proposal with clear scope and timelines.",
  "faq.q6": "How does payment work?",
  "faq.a6": "We take a 50% deposit to reserve the project and the balance on delivery (or in instalments depending on scope). We detail it along with the quote.",
  "faq.q7": "Are the domain and hosting in my name?",
  "faq.a7": "Yes. Both the domain and hosting are always in your name — you own your site, we just build it and maintain it if you choose so. If you've never bought a domain or hosting, we advise you and help you get it at no extra cost.",
  "faq.q8": "What if I don't have a logo or brand identity yet?",
  "faq.a8": "No problem. We offer branding and copywriting as a service, so we can build your identity from scratch before building the site.",
  "faq.q9": "Can I request changes during development?",
  "faq.a9": "Yes. We define scope during discovery, but there's always a review round before final delivery to adjust whatever you need. After delivery, we offer a minimal monthly maintenance service in case you need changes.",

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
