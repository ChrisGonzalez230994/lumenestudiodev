import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/lumen/Header";
import { Hero } from "@/components/lumen/Hero";
import { Services } from "@/components/lumen/Services";
import { HowWeWork } from "@/components/lumen/HowWeWork";
import { Pricing } from "@/components/lumen/Pricing";
import { Portfolio } from "@/components/lumen/Portfolio";
import { Contact } from "@/components/lumen/Contact";
import { Footer } from "@/components/lumen/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — Claridad digital para tu negocio" },
      {
        name: "description",
        content:
          "Estudio digital especializado en landing pages, automatización con IA y e-commerce. Construimos rápido, con luz y propósito.",
      },
      { property: "og:title", content: "Lumen — Claridad digital para tu negocio" },
      {
        property: "og:description",
        content:
          "Landing pages, automatización con IA y tiendas online. Hechos con desarrollo asistido por IA.",
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
      <Pricing />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
