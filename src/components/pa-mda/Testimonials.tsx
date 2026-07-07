import { CtaButton } from "./CtaButton";

import t1 from "@/assets/testimonials/cdd-depoimento-1.json";
import t2 from "@/assets/testimonials/cdd-depoimento-2.json";
import t3 from "@/assets/testimonials/cdd-depoimento-3.json";
import t4 from "@/assets/testimonials/cdd-depoimento-4.json";
import t5 from "@/assets/testimonials/cdd-depoimento-5.json";
import t6 from "@/assets/testimonials/cdd-depoimento-6.json";
import t7 from "@/assets/testimonials/cdd-depoimento-7.json";
import t8 from "@/assets/testimonials/cdd-depoimento-8.json";
import t9 from "@/assets/testimonials/cdd-depoimento-9.json";
import t10 from "@/assets/testimonials/cdd-depoimento-10.json";

const row1 = [t1, t2, t3, t4, t5];
const row2 = [t6, t7, t8, t9, t10];

function MarqueeRow({
  items,
  direction,
}: {
  items: { url: string; original_filename: string }[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];
  const animClass =
    direction === "left"
      ? "animate-[marquee-left_70s_linear_infinite]"
      : "animate-[marquee-right_70s_linear_infinite]";
  return (
    <div className="group relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40"
        style={{ background: "linear-gradient(90deg, var(--cream), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40"
        style={{ background: "linear-gradient(270deg, var(--cream), transparent)" }}
      />
      <div
        className={`flex w-max gap-6 ${animClass} group-hover:[animation-play-state:paused]`}
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="w-[260px] shrink-0 overflow-hidden rounded-2xl border border-raspberry/10 bg-white shadow-[0_20px_50px_-25px_rgba(197,55,113,0.35)] sm:w-[300px]"
          >
            <img
              src={item.url}
              alt={`Depoimento ${item.original_filename}`}
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-serif text-sm italic text-raspberry">depoimentos reais</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-wine text-balance sm:text-4xl md:text-5xl">
            O que muda quando a mulher começa a{" "}
            <span className="italic font-serif font-normal text-raspberry">
              reorganizar a própria autoestima
            </span>
          </h2>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      <div className="relative mx-auto mt-20 max-w-3xl px-5">
        <div className="space-y-5 text-center font-sans text-base leading-relaxed text-wine/80 sm:text-lg">
          <p>
            Mulheres que entram no Mapa começam a perceber que o problema nunca foi apenas{" "}
            <em className="font-serif">amar demais</em>.
          </p>
          <p className="font-serif text-xl italic text-wine sm:text-2xl">
            O problema era se abandonar demais. Aceitar de menos. Esperar demais.
          </p>
          <p>
            E quando essa consciência começa a se organizar, você para de olhar apenas para o homem
            que foi embora. E começa a olhar para a estrutura interna que te fazia aceitar menos do
            que merecia.
          </p>
          <p>
            O <strong className="font-semibold text-raspberry">Código do Desapego</strong> te ajuda
            a atravessar a crise. O{" "}
            <strong className="font-semibold text-raspberry">Mapa da Autoestima</strong> te ajuda a
            reorganizar a raiz.
          </p>
        </div>

        <div className="mt-16 rounded-[2rem] border border-raspberry/15 bg-white p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
          <p className="font-display text-xl font-bold text-wine sm:text-2xl">
            Você já comprou o Código.
          </p>
          <p className="mt-3 font-sans text-base leading-relaxed text-wine/75 sm:text-lg">
            Agora assista à masterclass até o final, pegue seu número e participe do sorteio. Essa é
            a sua chance de acessar o <strong className="text-raspberry">Mapa da Autoestima</strong>{" "}
            com uma condição especial.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton variant="primary">
              Quero assistir à masterclass e participar do sorteio
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}