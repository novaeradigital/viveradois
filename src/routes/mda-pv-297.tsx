import { createFileRoute } from "@tanstack/react-router";

const CHECKOUT_URL = "https://lp.institutointi.com/pu-mda-497-cdd";
const CHECKOUT_URL_ANNUAL = "https://lp.institutointi.com/pu-mda-497-cdd";

// Mapa da Autoestima brand palette (scoped to this route)
const BRAND = {
  pink: "#f28bc0",
  pinkStrong: "#ec168f",
  raspberry: "#c53771",
  cream: "#fcf5eb",
  sunset: "#f5cd99",
  lavender: "#fbdae5",
  violet: "#8d3fc1",
  violetDeep: "#7b3fbd",
  lime: "#d6f21f",
  glow: "#fff7c2",
} as const;

const GRADIENTS = {
  pink: `linear-gradient(135deg, ${BRAND.pink} 0%, ${BRAND.pinkStrong} 55%, ${BRAND.raspberry} 100%)`,
  cream: `linear-gradient(135deg, ${BRAND.cream} 0%, ${BRAND.lavender} 60%, ${BRAND.pink} 100%)`,
  sunset: `linear-gradient(180deg, ${BRAND.sunset} 0%, ${BRAND.cream} 100%)`,
  violet: `linear-gradient(135deg, ${BRAND.violetDeep} 0%, #9638cc 50%, ${BRAND.raspberry} 100%)`,
  glow: `radial-gradient(circle at center, ${BRAND.glow} 0%, ${BRAND.sunset} 35%, transparent 70%)`,
} as const;

const FONT_DISPLAY = '"Nunito", system-ui, sans-serif';
const FONT_HEADING = '"Fraunces", Georgia, serif';
const FONT_BODY = '"Poppins", system-ui, sans-serif';

export const Route = createFileRoute("/mda-pv-297")({
  head: () => ({
    meta: [
      { title: "Mapa da Autoestima — Versão Light por R$297" },
      {
        name: "description",
        content:
          "O mesmo Mapa da Autoestima, os mesmos conteúdos e bônus, agora por R$297 com 3 meses de acesso. Comece hoje sua reconexão.",
      },
      { property: "og:title", content: "Mapa da Autoestima — Versão Light por R$297" },
      {
        property: "og:description",
        content:
          "Reorganize sua autoimagem, fortaleça sua autoestima e pare de se abandonar. Acesso por 3 meses por R$297.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SalesPage,
});

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex w-full max-w-xl items-center justify-center rounded-full px-8 py-5 text-center text-base font-extrabold uppercase tracking-wide text-white shadow-[0_20px_50px_-15px_rgba(197,55,113,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(197,55,113,0.9)] sm:text-lg"
      style={{ backgroundImage: GRADIENTS.pink, fontFamily: FONT_DISPLAY }}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 30px rgba(255,247,194,0.4)" }}
      />
    </a>
  );
}

function SecondaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL_ANNUAL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full max-w-xl items-center justify-center rounded-full border-2 bg-transparent px-8 py-5 text-center text-sm font-bold uppercase tracking-wide transition hover:text-white sm:text-base"
      style={{
        fontFamily: FONT_DISPLAY,
        borderColor: BRAND.raspberry,
        color: BRAND.raspberry,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.raspberry)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      {children}
    </a>
  );
}

function Bloom({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ backgroundImage: GRADIENTS.glow }}
    />
  );
}

function SalesPage() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: BRAND.cream,
        color: "#2b0f1f",
        fontFamily: FONT_BODY,
      }}
    >
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
        style={{ backgroundImage: GRADIENTS.pink }}
      >
        <Bloom className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff7c2 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center text-white">
          <p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ fontFamily: FONT_HEADING, fontStyle: "italic", color: BRAND.glow }}
          >
            Mapa da Autoestima · Versão Light
          </p>
          <h1
            className="text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            Comece agora por{" "}
            <span className="relative inline-block" style={{ color: BRAND.glow }}>
              R$297
            </span>
            , com acesso por 3 meses.
          </h1>
          <p
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
            style={{ fontFamily: FONT_HEADING, fontStyle: "italic" }}
          >
            Você viu a oferta completa do <strong className="not-italic font-semibold">Mapa da Autoestima</strong> por R$497 com acesso anual.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Mas, se neste momento você prefere começar da forma mais rápida, esta é uma última alternativa:
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <PrimaryCTA>Quero o Mapa Light — R$297 por 3 meses</PrimaryCTA>
            <SecondaryCTA>
              <span className="text-white/90">Prefiro a versão por 1 ano — R$497</span>
            </SecondaryCTA>
          </div>
        </div>
      </section>

      {/* EQUIVALÊNCIA */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-3">
            {[
              "O mesmo Mapa da Autoestima.",
              "Os mesmos conteúdos.",
              "Os mesmos bônus.",
            ].map((t) => (
              <h2
                key={t}
                className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
                style={{ color: BRAND.raspberry, fontFamily: FONT_DISPLAY }}
              >
                {t}
              </h2>
            ))}
          </div>

          <div
            className="mx-auto mt-12 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #c53771, transparent)" }}
          />

          <h3
            className="mt-12 text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ color: BRAND.violetDeep, fontFamily: FONT_DISPLAY }}
          >
            Por R$297, com acesso por 3 meses.
          </h3>
        </div>
      </section>

      {/* DIFERENÇA */}
      <section
        className="relative px-6 py-24 sm:py-28"
        style={{ backgroundColor: BRAND.lavender }}
      >
        <Bloom className="-right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 opacity-40" />
        <div className="relative mx-auto max-w-2xl text-center">
          <p
            className="text-2xl leading-snug sm:text-3xl"
            style={{ fontFamily: FONT_HEADING, fontStyle: "italic", color: BRAND.raspberry }}
          >
            A diferença não está no método.
          </p>
          <p
            className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl"
            style={{ color: BRAND.violetDeep, fontFamily: FONT_HEADING }}
          >
            Está apenas no tempo de acesso.
          </p>

          <p
            className="mx-auto mt-10 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(43,15,31,0.8)" }}
          >
            Você terá acesso ao processo criado para reorganizar sua autoimagem,
            fortalecer sua autoestima e ajudar você a parar de repetir vínculos
            onde se doa demais, aceita pouco e se abandona para ser escolhida.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: BRAND.raspberry }}
            >
              Dentro do Mapa
            </p>
            <h2
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: BRAND.violetDeep, fontFamily: FONT_HEADING }}
            >
              Você recebe:
            </h2>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Aulas diretas e estruturadas",
                body: "Sem enrolação. Conteúdo objetivo para você aplicar desde o primeiro encontro.",
              },
              {
                title: "Os 3 pilares do método",
                body: "Visão Progressiva, Autenticidade Psicológica e Alinhamento com Propósito.",
              },
              {
                title: "RPA — Protocolo de Reprogramação da Autoimagem",
                body: "O coração do método, para reconstruir como você se enxerga por dentro.",
              },
              {
                title: "Bônus de integração e materiais de apoio",
                body: "Recursos extras para sustentar a transformação no dia a dia.",
              },
              {
                title: "7 dias de garantia incondicional",
                body: "Experimente sem risco. Se não for para você, devolvemos 100%.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-[0_8px_30px_-15px_rgba(197,55,113,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(197,55,113,0.4)]"
                style={{ border: `1px solid ${BRAND.lavender}` }}
              >
                <span
                  aria-hidden
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-50 transition group-hover:opacity-80"
                  style={{ backgroundImage: GRADIENTS.cream }}
                />
                <div className="relative">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{ backgroundImage: GRADIENTS.pink }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-bold sm:text-xl"
                    style={{ fontFamily: FONT_DISPLAY, color: BRAND.raspberry }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "rgba(43,15,31,0.75)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p
            className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed sm:text-lg"
            style={{ fontFamily: FONT_HEADING, fontStyle: "italic", color: "rgba(43,15,31,0.8)" }}
          >
            Esta versão é ideal se você entendeu que precisa começar agora,
            mas prefere não se carregar com o acesso anual neste momento.
          </p>
        </div>
      </section>

      {/* PREÇO */}
      <section
        className="relative isolate overflow-hidden px-6 py-24 text-white sm:py-32"
        style={{ backgroundImage: GRADIENTS.violet }}
      >
        <Bloom className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p
            className="text-xl text-white/85 line-through decoration-2 sm:text-2xl"
            style={{
              fontFamily: FONT_HEADING,
              fontStyle: "italic",
              textDecorationColor: `${BRAND.lime}b3`,
            }}
          >
            De R$497 por 1 ano
          </p>

          <h2
            className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            Agora: <span style={{ color: BRAND.lime }}>R$297</span>
          </h2>
          <p className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl">por 3 meses</p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <PrimaryCTA>Quero o Mapa Light — R$297 por 3 meses</PrimaryCTA>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundImage: GRADIENTS.sunset }}
      >
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div
            className="rounded-3xl bg-white/70 p-8 backdrop-blur-sm"
            style={{ border: `1px solid ${BRAND.raspberry}26` }}
          >
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: BRAND.raspberry }}
            >
              Código do Desapego
            </p>
            <p className="text-lg leading-relaxed sm:text-xl" style={{ color: "rgba(43,15,31,0.85)" }}>
              Te ajuda a tirar o ex do centro emocional.
            </p>
          </div>
          <div
            className="rounded-3xl p-8 text-white shadow-[0_20px_50px_-20px_rgba(123,63,189,0.6)]"
            style={{ backgroundImage: GRADIENTS.violet }}
          >
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: BRAND.lime }}
            >
              Mapa da Autoestima
            </p>
            <p className="text-lg leading-relaxed sm:text-xl">
              Te ajuda a reorganizar a estrutura interna que permitiu que alguém ocupasse esse centro.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs FINAIS */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <h2
            className="mb-4 text-2xl font-bold sm:text-3xl"
            style={{ color: BRAND.violetDeep, fontFamily: FONT_HEADING }}
          >
            Escolha como você quer começar:
          </h2>
          <PrimaryCTA>Quero o Mapa Light — R$297 por 3 meses</PrimaryCTA>
          <SecondaryCTA>Prefiro a versão por 1 ano — R$497 por 1 ano</SecondaryCTA>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        className="relative px-6 py-12 text-center text-white"
        style={{ backgroundColor: BRAND.raspberry }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #fff7c2 1.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative">
          <p
            className="text-sm tracking-wide"
            style={{ fontFamily: FONT_HEADING, fontStyle: "italic" }}
          >
            Mapa da Autoestima
          </p>
          <p className="mt-2 text-xs text-white/70">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}