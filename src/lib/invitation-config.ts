// ============================================================
// LUMEN INVITACIONES — CONFIG
// Editá este archivo para personalizar la invitación por evento.
// ============================================================

export type InvitationConfig = {
  eventSlug: string; // identificador único en la base (rsvp_responses.event_slug)
  type: "wedding" | "birthday" | "anniversary" | "baptism" | "other";
  honorees: string; // p.ej. "Sofía & Mateo" o "Valentina"
  tagline?: string; // p.ej. "Nos casamos" o "Mis 15"
  dateISO: string; // ISO 8601 — usado para countdown y meta
  dateLabel: string; // formato bonito p/ mostrar
  coverPhotoUrl?: string;

  ceremony?: {
    title: string;
    time: string;
    venue: string;
    address: string;
    mapsQuery: string; // se usa para Google Maps
  };
  reception?: {
    title: string;
    time: string;
    venue: string;
    address: string;
    mapsQuery: string;
  };
  dressCode?: string;

  story?: {
    title: string;
    text: string;
    photos: string[]; // URLs (vacío = placeholders con gradientes)
  };

  gifts?: {
    title: string;
    note: string;
    items: { label: string; value: string; href?: string }[];
  };

  music?: {
    src: string; // URL del MP3
    title?: string;
  };

  // Tokens de color — sobreescribibles por evento.
  // Se inyectan como CSS variables en el contenedor de la invitación.
  theme: {
    primary: string; // amarillo cálido
    accent: string; // mostaza
    cream: string;
    bg: string;
    ink: string;
    serif: string; // font-family para titulares
    sans: string;
  };

  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
};

export const invitationConfig: InvitationConfig = {
  eventSlug: "sofia-mateo-2026",
  type: "wedding",
  honorees: "Sofía & Mateo",
  tagline: "Nos casamos",
  dateISO: "2026-11-15T19:00:00-03:00",
  dateLabel: "15 de Noviembre, 2026",

  ceremony: {
    title: "Ceremonia",
    time: "19:00 hs",
    venue: "Capilla Santa Clara",
    address: "Av. del Libertador 1234, Buenos Aires",
    mapsQuery: "Capilla Santa Clara Buenos Aires",
  },
  reception: {
    title: "Recepción",
    time: "21:00 hs",
    venue: "Estancia La Candela",
    address: "Ruta 8 km 42, Pilar",
    mapsQuery: "Estancia La Candela Pilar",
  },
  dressCode: "Elegante de noche",

  story: {
    title: "Nuestra historia",
    text:
      "Hace siete años, una tarde de otoño, nos cruzamos en una cafetería de Palermo. Desde entonces, cada capítulo lo escribimos juntos. Hoy queremos celebrar con vos el comienzo del próximo.",
    photos: [], // dejar vacío para usar placeholders con gradientes suaves
  },

  gifts: {
    title: "Regalos",
    note: "Tu presencia es nuestro mejor regalo. Si querés acompañarnos con algo más, dejamos estos datos:",
    items: [
      { label: "Alias bancario", value: "sofia.mateo.boda" },
      { label: "Mercado Pago", value: "sofiamateo" },
    ],
  },

  // music: { src: "/music/song.mp3", title: "Nuestra canción" },

  theme: {
    primary: "#F2D98D",
    accent: "#E0B84D",
    cream: "#FBF0D2",
    bg: "#FAF7F0",
    ink: "#2B2B2B",
    serif: "'Playfair Display', Georgia, serif",
    sans: "'Inter', system-ui, sans-serif",
  },

  meta: {
    title: "Sofía & Mateo · 15.11.2026",
    description: "Nos casamos. Acompañanos a celebrar este día tan especial.",
  },
};
