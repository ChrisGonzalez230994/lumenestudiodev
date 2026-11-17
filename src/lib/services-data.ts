// Lumen services: prices, key features and full detail (ES / EN).
// Source: "Servicios.docx" (2026-11). Prices in USD.

export type L = { es: string; en: string };
export type Item = { title: L; desc: L };
export type Group = { title: L; items: Item[] };

export type Service = {
  id: string;
  tag: string; // short mono label
  name: L;
  tagline: L;
  price: L;
  priceNote: L; // e.g. "pago único" / "+ USD 10 / mes"
  key: L[]; // 4–5 highlights shown on the card
  groups: Group[]; // full detail, shown when expanded
};

const it = (tEs: string, dEs: string, tEn: string, dEn: string): Item => ({
  title: { es: tEs, en: tEn },
  desc: { es: dEs, en: dEn },
});
const l = (es: string, en: string): L => ({ es, en });

const ONE_TIME = l("Pago único · sin mantenimiento mensual", "One-time payment · no monthly fee");

export const SERVICES: Service[] = [
  {
    id: "landing-pages",
    tag: "01 / ONE PAGE",
    name: l("Landing Page", "Landing Page"),
    tagline: l(
      "Una sola página, pensada para convertir visitas en clientes.",
      "A single page built to turn visitors into clients.",
    ),
    price: l("USD 300", "USD 300"),
    priceNote: ONE_TIME,
    key: [
      l("Diseño 100% único, sin plantillas", "100% unique design, no templates"),
      l(
        "WhatsApp en cada paso, con el mensaje ya escrito",
        "WhatsApp on every step, message pre-written",
      ),
      l(
        "Formulario que te llega armado a WhatsApp o mail",
        "Form that reaches your WhatsApp or email ready to read",
      ),
      l("Mapa, reseñas de Google y galería", "Map, Google reviews and gallery"),
      l("Optimizada para celular y visible en Google", "Mobile-first and visible on Google"),
    ],
    groups: [
      {
        title: l("Todo lo que incluye", "Everything included"),
        items: [
          it(
            "Diseño 100% único",
            "Estructura a medida adaptada a tu marca y a tu tipo de negocio, sin plantillas genéricas.",
            "100% unique design",
            "Custom structure tailored to your brand and business, no generic templates.",
          ),
          it(
            "Todo lo importante en una página",
            "Presentación, servicios, galería de fotos, sobre nosotros, preguntas frecuentes, ubicación y contacto.",
            "Everything in one page",
            "Intro, services, photo gallery, about us, FAQ, location and contact.",
          ),
          it(
            "WhatsApp en cada paso",
            'Botones de WhatsApp en toda la página, con el mensaje ya escrito para que tu cliente solo toque "enviar".',
            "WhatsApp on every step",
            'WhatsApp buttons across the page with the message pre-written, so your client just taps "send".',
          ),
          it(
            "Formulario inteligente",
            "Tu cliente completa sus datos y la consulta te llega armada a tu WhatsApp o a tu mail, con validación para que no falte nada.",
            "Smart form",
            "Your client fills in their details and the inquiry reaches your WhatsApp or email ready to read, validated so nothing is missing.",
          ),
          it(
            "Turnos y reservas",
            "Botones que llevan a tu sistema de turnos o a reservas por WhatsApp.",
            "Bookings",
            "Buttons that link to your booking system or to WhatsApp reservations.",
          ),
          it(
            "Ubicación con mapa",
            'Mapa de Google integrado, horarios y botón "Cómo llegar".',
            "Location with map",
            'Embedded Google Map, opening hours and a "Get directions" button.',
          ),
          it(
            "Reseñas de Google",
            "Mostramos las opiniones reales de tus clientes con link a tu perfil.",
            "Google reviews",
            "We show your clients' real reviews with a link to your profile.",
          ),
          it(
            "Galería de trabajos o espacios",
            "Fotos de tu local, tus productos o tus trabajos, con visor ampliado o carrusel deslizable.",
            "Work or space gallery",
            "Photos of your place, products or work, with a lightbox or swipeable carousel.",
          ),
          it(
            "Preguntas frecuentes",
            "Respuestas desplegables a las dudas más comunes, para ahorrarte consultas repetidas.",
            "FAQ",
            "Expandable answers to the most common questions, saving you repeated inquiries.",
          ),
          it(
            "Detalles que suman",
            'Animaciones suaves, menú adaptado al celular, botón "volver arriba" y, si lo necesitás, versión en inglés.',
            "Extra touches",
            'Smooth animations, mobile menu, "back to top" button and, if you need it, an English version.',
          ),
          it(
            "Velocidad e impacto",
            "Optimizada para celulares y con carga ultrarrápida para que nadie se vaya.",
            "Speed and impact",
            "Optimized for phones with ultra-fast loading so nobody leaves.",
          ),
          it(
            "Visible en Google",
            "SEO básico y una vista previa prolija cuando compartís el link por WhatsApp o redes.",
            "Visible on Google",
            "Basic SEO and a clean preview when you share the link on WhatsApp or social media.",
          ),
          it(
            "Modificaciones",
            "Incluye 1 ronda de revisión para pulir detalles antes del lanzamiento.",
            "Revisions",
            "Includes 1 round of revisions before launch.",
          ),
          it(
            "Inversión única",
            "No cobramos mantenimiento mensual. La web es tuya de por vida.",
            "One-time investment",
            "No monthly maintenance fee. The website is yours for life.",
          ),
        ],
      },
    ],
  },
  {
    id: "portfolios",
    tag: "02 / PERSONAL",
    name: l("Portfolio Profesional", "Professional Portfolio"),
    tagline: l(
      "Tu trayectoria, tus trabajos y tu contacto en una página que se presenta sola.",
      "Your career, your work and your contact in one page that speaks for you.",
    ),
    price: l("USD 150 a 200", "USD 150 to 200"),
    priceNote: ONE_TIME,
    key: [
      l(
        "Portada con tu foto, tu rol y contadores animados",
        "Cover with your photo, role and animated counters",
      ),
      l("Galería de trabajos con filtros por categoría", "Work gallery with category filters"),
      l("CV descargable en español e inglés", "Downloadable CV in Spanish and English"),
      l(
        "LinkedIn, GitHub, redes y webs en un solo lugar",
        "LinkedIn, GitHub, socials and sites in one place",
      ),
      l("Contacto directo a tu WhatsApp o mail", "Direct contact to your WhatsApp or email"),
    ],
    groups: [
      {
        title: l("Todo lo que incluye", "Everything included"),
        items: [
          it(
            "Presentación que impacta",
            "Portada con tu foto, tu rol, una frase de presentación y contadores animados con tus logros (años de experiencia, proyectos, clientes).",
            "A striking intro",
            "Cover with your photo, role, a short pitch and animated counters for your achievements (years of experience, projects, clients).",
          ),
          it(
            "Tu historia, bien contada",
            'Sección "Sobre mí" con resumen profesional y una línea de tiempo de experiencia laboral y formación.',
            "Your story, well told",
            '"About me" section with a professional summary and a timeline of work experience and education.',
          ),
          it(
            "Habilidades a la vista",
            "Tarjetas por área de conocimiento y barras de nivel por herramienta que se llenan al hacer scroll.",
            "Skills at a glance",
            "Cards by knowledge area and skill bars per tool that fill as you scroll.",
          ),
          it(
            "Galería de trabajos con filtros",
            "Tus proyectos ordenados por categoría, con captura, nombre y link, y un proyecto destacado con video de recorrido en celular.",
            "Filterable work gallery",
            "Your projects sorted by category, with screenshot, name and link, plus a featured project with a mobile walkthrough video.",
          ),
          it(
            "CV descargable",
            "Botones para bajar tu CV en PDF, en español y en inglés.",
            "Downloadable CV",
            "Buttons to download your CV as a PDF, in Spanish and English.",
          ),
          it(
            "Todos tus links en un solo lugar",
            "LinkedIn, GitHub, Instagram, WhatsApp, mail y tus webs publicadas, con un indicador en vivo que muestra que están online.",
            "All your links in one place",
            "LinkedIn, GitHub, Instagram, WhatsApp, email and your published sites, with a live indicator showing they're online.",
          ),
          it(
            "Contacto directo",
            "Formulario que manda el mensaje armado a tu WhatsApp o a tu mail, con el motivo de la consulta incluido.",
            "Direct contact",
            "A form that sends the message to your WhatsApp or email, including the reason for the inquiry.",
          ),
          it(
            "Diseño 100% a medida",
            "Colores, tipografía y estilo adaptados a tu perfil, sin plantillas genéricas.",
            "100% custom design",
            "Colors, typography and style adapted to your profile, no generic templates.",
          ),
          it(
            "Rápido y adaptado al celular",
            "Carga liviana y diseño que se acomoda a cualquier pantalla.",
            "Fast and mobile-ready",
            "Lightweight loading and a layout that fits any screen.",
          ),
          it(
            "Modificaciones",
            "Incluye 1 ronda de revisión antes del lanzamiento.",
            "Revisions",
            "Includes 1 round of revisions before launch.",
          ),
          it(
            "Inversión única",
            "No cobramos mantenimiento mensual. La web es tuya de por vida.",
            "One-time investment",
            "No monthly maintenance fee. The website is yours for life.",
          ),
        ],
      },
      {
        title: l("Dos versiones", "Two versions"),
        items: [
          it(
            "Portfolio Esencial · USD 120 a 150",
            "Portada, sobre mí, habilidades, trabajos y contacto. CV en un idioma y subdominio gratuito.",
            "Essential Portfolio · USD 120 to 150",
            "Cover, about me, skills, work and contact. CV in one language and a free subdomain.",
          ),
          it(
            "Portfolio Completo · USD 180 a 220",
            "Todas las secciones e interacciones, CV en español e inglés, dominio propio configurado y 2 rondas de revisión.",
            "Complete Portfolio · USD 180 to 220",
            "All sections and interactions, CV in Spanish and English, your own domain set up and 2 rounds of revisions.",
          ),
        ],
      },
      {
        title: l("Extras opcionales", "Optional extras"),
        items: [
          it(
            "Redacción de bio y textos · USD 30 a 50",
            "A partir de una charla o de tu CV.",
            "Bio and copywriting · USD 30 to 50",
            "Based on a conversation or your CV.",
          ),
          it(
            "Traducción al inglés · USD 30",
            "Del sitio o del CV.",
            "English translation · USD 30",
            "Of the site or the CV.",
          ),
          it(
            "Rediseño del CV en PDF · USD 30 a 40",
            "Con la misma estética del portfolio.",
            "PDF CV redesign · USD 30 to 40",
            "Matching the portfolio's look.",
          ),
        ],
      },
    ],
  },
  {
    id: "institucionales",
    tag: "03 / EMPRESAS",
    name: l("Sitio Institucional", "Corporate Website"),
    tagline: l(
      "Tu carta de presentación online, completa y profesional.",
      "Your complete, professional business card online.",
    ),
    price: l("USD 600", "USD 600"),
    priceNote: ONE_TIME,
    key: [
      l("Hasta 5 páginas con navegación clara", "Up to 5 pages with clear navigation"),
      l(
        "Panel autoadministrable para textos, fotos y notas",
        "Self-managed panel for copy, images and posts",
      ),
      l("Blog o novedades para atraer visitas", "Blog or news section to attract visitors"),
      l(
        "SEO por página, Search Console y Google Maps",
        "On-page SEO, Search Console and Google Maps",
      ),
      l(
        "Estadísticas de visitas y 2 rondas de revisión",
        "Visitor analytics and 2 rounds of revisions",
      ),
    ],
    groups: [
      {
        title: l("Todo lo que incluye", "Everything included"),
        items: [
          it(
            "Estructura completa",
            "Hasta 5 páginas (Inicio, Nosotros, Servicios, Contacto y una a elección), con menú y navegación clara.",
            "Complete structure",
            "Up to 5 pages (Home, About, Services, Contact and one of your choice), with a clear menu and navigation.",
          ),
          it(
            "Una página por servicio",
            "Cada servicio o área con su propio espacio, lo que además ayuda a aparecer en más búsquedas de Google.",
            "A page per service",
            "Each service or area gets its own space, which also helps you show up in more Google searches.",
          ),
          it(
            "Identidad exclusiva",
            "Diseño 100% a medida y alineado a la estética de tu marca.",
            "Exclusive identity",
            "100% custom design aligned with your brand.",
          ),
          it(
            "Equipo y trayectoria",
            "Presentación del equipo con fotos, historia de la empresa, valores y línea de tiempo.",
            "Team and history",
            "Team presentation with photos, company history, values and timeline.",
          ),
          it(
            "Prueba social",
            "Reseñas de Google, testimonios, logos de clientes y casos de éxito.",
            "Social proof",
            "Google reviews, testimonials, client logos and case studies.",
          ),
          it(
            "Blog o Novedades",
            "Espacio para publicar notas, noticias y artículos que atraigan visitas calificadas.",
            "Blog or News",
            "A place to publish posts, news and articles that attract qualified visitors.",
          ),
          it(
            "Panel autoadministrable",
            "Editá textos, imágenes y artículos de forma simple, con total autonomía y sin depender de nadie.",
            "Self-managed panel",
            "Edit copy, images and articles easily, fully on your own.",
          ),
          it(
            "Contacto completo",
            "Formularios por área (consultas, presupuestos, trabajá con nosotros), WhatsApp, mapa y horarios.",
            "Full contact",
            "Forms by area (inquiries, quotes, work with us), WhatsApp, map and opening hours.",
          ),
          it(
            "Bilingüe (opcional)",
            "Versión en inglés con selector de idioma.",
            "Bilingual (optional)",
            "English version with a language switcher.",
          ),
          it(
            "Visible en Google",
            "SEO On-Page por página, alta en Google Search Console y conexión con tu perfil de Google Maps.",
            "Visible on Google",
            "On-page SEO for every page, Google Search Console setup and connection to your Google Maps profile.",
          ),
          it(
            "Medición de visitas",
            "Estadísticas configuradas para que sepas cuánta gente entra y desde dónde.",
            "Visitor analytics",
            "Analytics set up so you know how many people visit and from where.",
          ),
          it(
            "Capacitación",
            "Video tutorial para que aprendas a usar el panel.",
            "Training",
            "Video tutorial so you learn how to use the panel.",
          ),
          it(
            "Modificaciones",
            "Incluye 2 rondas de revisión para que quede impecable antes del lanzamiento.",
            "Revisions",
            "Includes 2 rounds of revisions before launch.",
          ),
          it(
            "Inversión única",
            "No cobramos mantenimiento mensual. La web es tuya de por vida.",
            "One-time investment",
            "No monthly maintenance fee. The website is yours for life.",
          ),
        ],
      },
    ],
  },
  {
    id: "catalogos",
    tag: "04 / PEDIDOS",
    name: l("Catálogo Digital + Pedidos por WhatsApp", "Digital Catalog + WhatsApp Orders"),
    tagline: l(
      "Tus productos online y los pedidos directo a tu WhatsApp.",
      "Your products online and orders straight to your WhatsApp.",
    ),
    price: l("USD 250", "USD 250"),
    priceNote: l("+ USD 10 / mes de alojamiento", "+ USD 10 / month hosting"),
    key: [
      l("El pedido te llega armado a tu WhatsApp", "Orders reach your WhatsApp fully itemized"),
      l("Sin comisiones por venta: cobrás vos", "No sales commissions: you get paid directly"),
      l("Entregado con 50 productos cargados", "Delivered with 50 products loaded"),
      l("Se actualiza desde Google Sheets o un panel", "Updated from Google Sheets or a panel"),
      l("Código QR para mostrador, mesas o packaging", "QR code for counter, tables or packaging"),
    ],
    groups: [
      {
        title: l("Cómo funciona", "How it works"),
        items: [
          it(
            "Tu cliente arma su pedido",
            "Elige productos, cantidades y variantes (tamaño, sabor, color, talle) y los suma al carrito.",
            "Your client builds the order",
            "They pick products, quantities and variants (size, flavor, color) and add them to the cart.",
          ),
          it(
            "Pedido directo a tu WhatsApp",
            "Con un toque, el pedido te llega ordenado con productos, cantidades, subtotal, total y los datos del cliente.",
            "Order straight to WhatsApp",
            "With one tap, you get the order with products, quantities, subtotal, total and client details.",
          ),
          it(
            "Datos del pedido",
            "Nombre, entrega a domicilio o retiro, dirección, forma de pago (efectivo, transferencia, Mercado Pago) y aclaraciones.",
            "Order details",
            "Name, delivery or pickup, address, payment method (cash, transfer, Mercado Pago) and notes.",
          ),
          it(
            "Sin comisiones por venta",
            "Cobrás vos directamente, sin intermediarios.",
            "No sales commissions",
            "You get paid directly, no middlemen.",
          ),
        ],
      },
      {
        title: l("El catálogo", "The catalog"),
        items: [
          it(
            "Diseño a medida",
            "Con tu logo, tus colores y la estética de tu marca.",
            "Custom design",
            "With your logo, colors and brand style.",
          ),
          it(
            "Productos organizados",
            "Categorías con navegación rápida, buscador y fotos.",
            "Organized products",
            "Categories with quick navigation, search and photos.",
          ),
          it(
            "Fichas de producto",
            "Foto, descripción, precio y variantes, con opción de precio con descuento.",
            "Product pages",
            "Photo, description, price and variants, with optional sale price.",
          ),
          it(
            "Etiquetas destacadas",
            '"Nuevo", "Más pedido", "Promo", "Sin TACC", "Vegano", "Sin stock".',
            "Highlight tags",
            '"New", "Best seller", "Promo", "Gluten-free", "Vegan", "Out of stock".',
          ),
          it(
            "Promociones y combos",
            "Sección de ofertas, combos y productos del día.",
            "Deals and combos",
            "Section for offers, combos and daily specials.",
          ),
          it(
            "Horarios de atención",
            "Muestra si el local está abierto o cerrado y avisa si alguien pide fuera de horario.",
            "Opening hours",
            "Shows whether you're open or closed and warns about out-of-hours orders.",
          ),
          it(
            "Zonas y costos de envío",
            "Costo según la zona elegida y monto mínimo de pedido, si lo necesitás.",
            "Delivery zones and costs",
            "Cost by zone and an optional minimum order amount.",
          ),
          it(
            "Información del negocio",
            "Ubicación con mapa, horarios, redes sociales y formas de pago.",
            "Business info",
            "Location map, hours, social media and payment methods.",
          ),
        ],
      },
      {
        title: l("Administración y difusión", "Management and reach"),
        items: [
          it(
            "Lista para vender",
            "Entregamos con 50 productos cargados, con fotos y descripciones.",
            "Ready to sell",
            "Delivered with 50 products loaded, with photos and descriptions.",
          ),
          it(
            "Actualización con Google Sheets",
            "Importá o exportá tu lista de productos desde una planilla y todo el catálogo se actualiza automáticamente.",
            "Google Sheets sync",
            "Import or export your product list from a spreadsheet and the whole catalog updates automatically.",
          ),
          it(
            "Panel de administración",
            "Agregá, editá o pausá productos, cambiá precios y marcá sin stock desde el panel.",
            "Admin panel",
            "Add, edit or pause products, change prices and mark items out of stock from the panel.",
          ),
          it(
            "Capacitación",
            "Video tutorial para que sepas actualizar todo.",
            "Training",
            "Video tutorial so you can update everything.",
          ),
          it(
            "Un link para todo",
            "Pensado para la bio de Instagram, los estados de WhatsApp y el catálogo de WhatsApp Business.",
            "One link for everything",
            "Made for your Instagram bio, WhatsApp statuses and WhatsApp Business catalog.",
          ),
          it(
            "Código QR",
            "Diseño de QR para el mostrador, las mesas, el packaging o los volantes.",
            "QR code",
            "QR design for the counter, tables, packaging or flyers.",
          ),
          it(
            "Rápido y pensado para el celular",
            "Carga al instante, porque casi todos los pedidos se hacen desde el teléfono.",
            "Fast and mobile-first",
            "Loads instantly, since almost every order comes from a phone.",
          ),
          it(
            "Visible en Google",
            "SEO básico y una vista previa prolija cuando compartís el link.",
            "Visible on Google",
            "Basic SEO and a clean preview when you share the link.",
          ),
          it(
            "Modificaciones",
            "Incluye 1 ronda de revisión.",
            "Revisions",
            "Includes 1 round of revisions.",
          ),
          it(
            "Alojamiento",
            "USD 10 por mes: servidor, base de datos, certificado de seguridad y monitoreo 24/7.",
            "Hosting",
            "USD 10 per month: server, database, SSL certificate and 24/7 monitoring.",
          ),
        ],
      },
    ],
  },
  {
    id: "tiendas",
    tag: "05 / PLATAFORMAS",
    name: l(
      "Tienda en Tiendanube, Empretienda o Shopify",
      "Store on Tiendanube, Empretienda or Shopify",
    ),
    tagline: l(
      "Vendé online en las plataformas más conocidas, sin complicarte.",
      "Sell online on the best-known platforms, hassle-free.",
    ),
    price: l("USD 250", "USD 250"),
    priceNote: l(
      "Pago único · más el plan de la plataforma",
      "One-time payment · plus the platform's plan",
    ),
    key: [
      l("Te ayudamos a elegir la plataforma ideal", "We help you pick the right platform"),
      l("Medios de pago y envíos configurados", "Payment methods and shipping set up"),
      l("Entregada con 50 productos cargados", "Delivered with 50 products loaded"),
      l(
        "Conectada con Instagram, Facebook y WhatsApp",
        "Connected to Instagram, Facebook and WhatsApp",
      ),
      l("Plantillas en Canva y capacitación", "Canva templates and training"),
    ],
    groups: [
      {
        title: l("Todo lo que incluye", "Everything included"),
        items: [
          it(
            "Te ayudamos a elegir",
            "Comparamos Tiendanube, Empretienda y Shopify según tu volumen, tus productos y tu presupuesto.",
            "We help you choose",
            "We compare Tiendanube, Empretienda and Shopify based on your volume, products and budget.",
          ),
          it(
            "Configuramos todo",
            "Medios de pago (Mercado Pago, transferencia, tarjetas), envíos (Correo Argentino, Andreani, moto o retiro en local), datos administrativos y políticas de cambio.",
            "We set everything up",
            "Payment methods (Mercado Pago, transfer, cards), shipping (Correo Argentino, Andreani, courier or pickup), business details and return policies.",
          ),
          it(
            "Lista para vender",
            "Cargamos categorías y tus 50 productos principales, con variantes de talle y color, fotos y descripciones.",
            "Ready to sell",
            "We load categories and your top 50 products, with size and color variants, photos and descriptions.",
          ),
          it(
            "Diseño de la tienda",
            "Home con banners armados, colores y tipografía de tu marca, y plantilla adaptada a tu estilo.",
            "Store design",
            "Home with ready-made banners, your brand's colors and fonts, and a theme adapted to your style.",
          ),
          it(
            "Ventas por redes",
            "Conectamos la tienda con Instagram Shopping, Facebook y el botón de WhatsApp.",
            "Social selling",
            "We connect the store to Instagram Shopping, Facebook and a WhatsApp button.",
          ),
          it(
            "Plantillas en Canva",
            "Diseños editables para banners, guía de talles, promociones y posteos.",
            "Canva templates",
            "Editable designs for banners, size guides, promotions and posts.",
          ),
          it(
            "Capacitación",
            "Video e instructivo para que sepas cargar productos, gestionar pedidos y actualizar precios.",
            "Training",
            "Video and guide so you can add products, manage orders and update prices.",
          ),
          it(
            "Dominio propio",
            "Lo conectamos a tu tienda.",
            "Your own domain",
            "We connect it to your store.",
          ),
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    tag: "06 / A MEDIDA",
    name: l("E-commerce Personalizado", "Custom E-commerce"),
    tagline: l(
      "Vendé online con una tienda a la altura de tu marca.",
      "Sell online with a store that lives up to your brand.",
    ),
    price: l("USD 900", "USD 900"),
    priceNote: l("+ USD 20 / mes de alojamiento", "+ USD 20 / month hosting"),
    key: [
      l(
        "Diseño y desarrollo a medida, sin comisiones",
        "Custom design and build, no platform fees",
      ),
      l(
        "Panel propio para productos, stock y pedidos",
        "Your own panel for products, stock and orders",
      ),
      l(
        "Mercado Pago integrado: tarjetas y cuotas",
        "Mercado Pago built in: cards and installments",
      ),
      l("Cupones, filtros, buscador y aviso de stock", "Coupons, filters, search and stock alerts"),
      l(
        "Entregado con 30 productos y 2 rondas de revisión",
        "Delivered with 30 products and 2 rounds of revisions",
      ),
    ],
    groups: [
      {
        title: l("Todo lo que incluye", "Everything included"),
        items: [
          it(
            "Diseño único y desarrollo a medida",
            "Sin plantillas y sin comisiones de plataforma, pensada para tu negocio.",
            "Unique design, custom build",
            "No templates and no platform fees, built for your business.",
          ),
          it(
            "Panel de administración propio",
            "Cargá y editá productos, fotos, precios y stock, gestioná pedidos y creá cupones desde tu celular o tu computadora.",
            "Your own admin panel",
            "Add and edit products, photos, prices and stock, manage orders and create coupons from your phone or computer.",
          ),
          it(
            "Lista para vender",
            "Entregamos con los primeros 30 productos cargados, con variantes, fotos y categorías.",
            "Ready to sell",
            "Delivered with the first 30 products loaded, with variants, photos and categories.",
          ),
          it(
            "Pagos online",
            "Mercado Pago integrado (tarjetas, cuotas y transferencia). El pedido se marca como pagado automáticamente.",
            "Online payments",
            "Mercado Pago built in (cards, installments and transfer). Orders are marked as paid automatically.",
          ),
          it(
            "Envíos configurados",
            "Costos por zona, retiro en el local o envío a domicilio.",
            "Shipping set up",
            "Costs by zone, store pickup or home delivery.",
          ),
          it(
            "Experiencia de compra completa",
            "Buscador, filtros por categoría, talle o precio, carrito y checkout simple.",
            "Complete shopping experience",
            "Search, filters by category, size or price, cart and simple checkout.",
          ),
          it(
            "Herramientas de venta",
            "Cupones de descuento, productos relacionados, ofertas y aviso de stock.",
            "Sales tools",
            "Discount coupons, related products, offers and stock alerts.",
          ),
          it(
            "Pedidos al instante",
            "Mail automático a tu cliente y aviso para vos en cada venta.",
            "Instant order alerts",
            "Automatic email to your client and a notification for you on every sale.",
          ),
          it(
            "Visible en Google",
            "SEO para productos y categorías, y estadísticas de visitas.",
            "Visible on Google",
            "SEO for products and categories, plus visitor analytics.",
          ),
          it(
            "Autonomía total",
            "Te capacitamos para que manejes stock, precios y pedidos sin depender de nadie.",
            "Full autonomy",
            "We train you to manage stock, prices and orders on your own.",
          ),
          it(
            "Modificaciones",
            "Incluye 2 rondas de revisión para que quede perfecta.",
            "Revisions",
            "Includes 2 rounds of revisions.",
          ),
          it(
            "Alojamiento",
            "USD 20 por mes: servidor, base de datos, certificado de seguridad, copias de respaldo y monitoreo 24/7.",
            "Hosting",
            "USD 20 per month: server, database, SSL certificate, backups and 24/7 monitoring.",
          ),
          it(
            "La tienda es tuya",
            "El diseño, los productos y los datos son 100% de tu propiedad.",
            "The store is yours",
            "The design, products and data are 100% yours.",
          ),
        ],
      },
    ],
  },
];

// "Incluido en todos los servicios"
export const INCLUDED = {
  design: it(
    "Diseño a medida",
    "Con tu logo, tus colores y la identidad de tu marca, sin plantillas genéricas.",
    "Custom design",
    "With your logo, colors and brand identity, no generic templates.",
  ),
  mobile: it(
    "Pensado para el celular",
    "Se ve y funciona perfecto en cualquier pantalla.",
    "Mobile-first",
    "Looks and works perfectly on any screen.",
  ),
  domain: it(
    "Dominio y publicación",
    "Te ayudamos a registrar tu dominio (.com.ar o .com) y dejamos la web publicada y funcionando.",
    "Domain and launch",
    "We help you register your domain (.com.ar or .com) and leave the site live and running.",
  ),
  monitor: it(
    "Monitoreo 24/7",
    "Controlamos tu web cada 5 minutos y, si se cae, nos enteramos al instante.",
    "24/7 monitoring",
    "We check your site every 5 minutes and know instantly if it goes down.",
  ),
  yours: it(
    "Es tuya",
    "Una vez terminada, es 100% de tu propiedad y sin costos ocultos.",
    "It's yours",
    "Once finished, it's 100% yours with no hidden costs.",
  ),
};
