import { createFileRoute } from "@tanstack/react-router";
import { PartyPopper, Mail, Clock, Shield, Smartphone, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/po-mda-997")({
  head: () => ({
    meta: [
      { title: "Parabéns! Sua compra do Mapa da Autoestima foi confirmada" },
      {
        name: "description",
        content:
          "Sua compra do Mapa da Autoestima foi confirmada. Acesse agora sua área de membros e comece sua jornada de autoestima.",
      },
      { property: "og:title", content: "Parabéns! Sua compra do Mapa da Autoestima foi confirmada" },
      {
        property: "og:description",
        content:
          "Sua compra do Mapa da Autoestima foi confirmada. Acesse agora sua área de membros e comece sua jornada de autoestima.",
      },
    ],
  }),
  component: ObrigadoMdaPage,
});

function ObrigadoMdaPage() {
  return (
    <div className="po-cdd-root">
      <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-32 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-full opacity-80 blur-3xl"
              style={{ background: "var(--gradient-light)" }}
            />
            <div
              className="absolute -left-24 top-40 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-cream)" }}
            />
            <div
              className="absolute -right-20 top-10 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-rose)" }}
            />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--pa-raspberry)]/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--pa-raspberry)] backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" /> Compra confirmada
            </div>

            <h1
              className="font-serif text-3xl font-extrabold leading-[1.08] tracking-tight text-[color:var(--pa-wine)] sm:text-4xl md:text-5xl"
            >
              <span className="inline-flex items-center justify-center gap-3">
                <PartyPopper className="h-8 w-8 text-[color:var(--pa-raspberry)] sm:h-10 sm:w-10" />
              </span>
              <br />
              Parabéns! Sua compra do{" "}
              <span
                className="italic font-serif font-semibold"
                style={{
                  background: "var(--gradient-purple-rose)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Mapa da Autoestima
              </span>{" "}
              foi{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">confirmada</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full"
                  style={{ background: "var(--pa-lime)" }}
                />
              </span>
            </h1>

            <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-[color:var(--pa-wine)]/80 sm:text-lg">
              <p>
                Você acaba de dar um passo fundamental rumo a uma autoestima estruturada
                e uma vida com mais clareza e sentido.
              </p>
              <p>
                A partir de agora, você não anda mais sozinha: tudo no curso foi criado
                para te ajudar a estruturar sua autoimagem de forma prática e madura —
                para que, enfim, você possa viver com mais leveza e segurança no seu
                propósito pessoal.
              </p>
            </div>
          </div>
        </section>

        {/* Acesse sua área de membros */}
        <section className="relative px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] sm:p-12"
              style={{ background: "var(--gradient-cream)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-70 blur-3xl"
                style={{ background: "var(--gradient-light)" }}
              />
              <h2 className="relative font-serif text-2xl font-extrabold tracking-tight text-[color:var(--pa-wine)] sm:text-3xl">
                Acesse agora sua área de membros
              </h2>

              <ol className="relative mt-8 space-y-4 text-base leading-relaxed text-[color:var(--pa-wine)]/85">
                {[
                  "Clique no botão abaixo para acessar a área de alunos.",
                  "Faça login usando o e-mail utilizado na compra.",
                  "Se for seu primeiro acesso na Astron Members com esse e-mail, defina uma senha segura ao clicar no link de ativação recebido por e-mail.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold text-white shadow-md"
                      style={{ background: "var(--gradient-rose)" }}
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="relative mt-10 flex justify-center">
                <a
                  href="https://institutointi.ticto.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn group relative inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                  style={{ background: "var(--gradient-purple-rose)" }}
                >
                  <span className="relative z-10">Entrar na área de membros</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Importante */}
        <section className="px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-extrabold tracking-tight text-[color:var(--pa-wine)] sm:text-3xl">
              Importante
            </h2>

            <div className="mt-8 grid gap-5">
              {[
                {
                  icon: Clock,
                  body: (
                    <>
                      O acesso é liberado geralmente em até{" "}
                      <strong>5 minutos</strong> para Cartão de Crédito ou Pix.
                      Compras por boleto bancário podem levar de{" "}
                      <strong>24 a 72 horas úteis</strong> para compensação e
                      liberação.
                    </>
                  ),
                },
                {
                  icon: Mail,
                  body: (
                    <>
                      Você receberá no seu e-mail as instruções da{" "}
                      <strong>Ticto</strong> assim que o pagamento for confirmado.
                      Se não encontrar o e-mail, verifique as pastas{" "}
                      <strong>Spam</strong>, <strong>Lixo Eletrônico</strong> e a
                      aba <strong>Promoções</strong> (no Gmail).
                    </>
                  ),
                },
                {
                  icon: Smartphone,
                  body: (
                    <>
                      Você também pode baixar o aplicativo da Ticto na{" "}
                      <strong>App Store</strong> ou <strong>Google Play</strong>{" "}
                      para assistir às aulas onde quiser.
                    </>
                  ),
                },
              ].map(({ icon: Icon, body }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-[color:var(--pa-lavender)] bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-md"
                    style={{ background: "var(--gradient-rose)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-relaxed text-[color:var(--pa-wine)]/85">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seus dados estão seguros */}
        <section className="px-6 pb-24 pt-6 sm:pb-32">
          <div className="mx-auto max-w-3xl">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/60 p-8 text-center shadow-[var(--shadow-soft)] sm:p-12"
              style={{ background: "var(--gradient-purple-rose)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full opacity-60 blur-3xl"
                style={{ background: "var(--gradient-light)" }}
              />
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                <Shield className="h-6 w-6 text-[color:var(--pa-raspberry)]" />
              </div>
              <h2 className="relative mt-6 font-serif text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Seus dados estão seguros
              </h2>
              <div className="relative mx-auto mt-5 max-w-xl space-y-3 text-base leading-relaxed text-white/85">
                <p>O acesso ao curso é pessoal e intransferível.</p>
                <p>
                  Sua jornada é protegida pela melhor tecnologia{" "}
                  <strong className="text-white">Ticto</strong> — e a equipe está
                  sempre à disposição para garantir sua tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[color:var(--pa-lavender)] bg-white/50 py-8 text-center text-xs text-[color:var(--pa-wine)]/60">
          © {new Date().getFullYear()} Mapa da Autoestima — Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}