import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/lumen/Header";
import { Hero } from "@/components/lumen/Hero";
import { Services } from "@/components/lumen/Services";
import { HowWeWork } from "@/components/lumen/HowWeWork";

import { Portfolio } from "@/components/lumen/Portfolio";
import { FAQ } from "@/components/lumen/FAQ";
import { FinalCTA } from "@/components/lumen/FinalCTA";
import { Contact } from "@/components/lumen/Contact";
import { Footer } from "@/components/lumen/Footer";

const TITLE = "Lumen — Soluciones digitales en Mar del Plata";
const DESCRIPTION =
  "Estudio digital en Mar del Plata: landing pages, catálogos, invitaciones y menús QR, portfolios, sitios institucionales y e-commerce. Listos en días.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lumen",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mar del Plata",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  email: "hola@lumendev.estudio",
  sameAs: ["https://instagram.com/lumendev.estudio"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <PricingTeaser />
      <Portfolio />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
