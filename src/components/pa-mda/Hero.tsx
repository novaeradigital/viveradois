import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 opacity-70"
        style={{ background: "var(--gradient-light)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(180deg, transparent, var(--cream))" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-raspberry/20 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-raspberry backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Masterclass + Sorteio
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-wine text-balance sm:text-5xl md:text-6xl">
            Você acabou de entrar no{" "}
            <span className="italic font-serif font-normal text-raspberry">Código do Desapego</span>.
            Agora assista à masterclass e participe do{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">sorteio</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full"
                style={{ background: "var(--pa-lime)" }}
              />
            </span>{" "}
            do Mapa da Autoestima.
          </h1>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[2.5rem] blur-2xl opacity-80"
            style={{ background: "var(--gradient-light)" }}
          />
          <div
            className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/60 shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-purple-rose)" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl">
                <Play className="h-8 w-8 translate-x-0.5 fill-raspberry text-raspberry" />
              </div>
              <p className="mt-5 px-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                Sua masterclass está pronta
              </p>
              <p className="mt-2 px-6 font-serif text-xs italic text-white/70">
                [ VSL 1 — Mapa da Autoestima / Sorteio ]
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-sans text-base leading-relaxed text-wine/75 sm:text-lg">
          O Código vai te ajudar a tirar o ex do centro emocional. E, durante a masterclass,
          você poderá ser sorteada para receber uma condição especial de acesso ao{" "}
          <strong className="font-semibold text-raspberry">Mapa da Autoestima</strong>, o processo
          criado para reorganizar a estrutura interna que permitiu que alguém ocupasse esse centro.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl justify-center">
          <CtaButton variant="primary">Assistir à masterclass e participar do sorteio</CtaButton>
        </div>
      </div>
    </section>
  );
}