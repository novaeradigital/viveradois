import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/pa-mda/Hero";
import { WhyNext } from "@/components/pa-mda/WhyNext";
import { Desire } from "@/components/pa-mda/Desire";
import { Deliverables } from "@/components/pa-mda/Deliverables";
import { Testimonials } from "@/components/pa-mda/Testimonials";
import { Footer } from "@/components/pa-mda/Footer";

export const Route = createFileRoute("/pa-mda")({
  head: () => ({
    meta: [
      { title: "Mapa da Autoestima — Masterclass e Sorteio" },
      {
        name: "description",
        content:
          "Assista à masterclass do Código do Desapego e participe do sorteio para acessar o Mapa da Autoestima em condição especial.",
      },
      { property: "og:title", content: "Mapa da Autoestima — Masterclass e Sorteio" },
      {
        property: "og:description",
        content:
          "Reorganize sua autoestima e construa relações sem se abandonar. Participe do sorteio durante a masterclass.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaMdaPage,
});

function PaMdaPage() {
  return (
    <main className="pa-mda-root min-h-screen bg-cream">
      <Hero />
      <WhyNext />
      <Desire />
      <Deliverables />
      <Testimonials />
      <Footer />
    </main>
  );
}