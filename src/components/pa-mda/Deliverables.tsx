import { BookOpen, Compass, Sparkles, Headphones, Calendar, ShieldCheck, Gift } from "lucide-react";
import { CtaButton } from "./CtaButton";

const itens = [
  {
    icon: BookOpen,
    title: "9 aulas profundas e diretas",
    desc: "Para entender e reorganizar sua autoimagem, seu valor interno e seus padrões afetivos.",
  },
  {
    icon: Compass,
    title: "Aula inicial de orientação",
    desc: "Para saber exatamente por onde começar.",
  },
  {
    icon: Sparkles,
    title: "RPA — Protocolo de Reprogramação da Autoimagem",
    desc: "Para trabalhar a forma como você se vê, se trata e se posiciona.",
  },
  {
    icon: Headphones,
    title: "7 podcasts guiados",
    desc: "Para integrar o conteúdo na sua rotina emocional.",
  },
  {
    icon: Calendar,
    title: "Acesso por 1 ano",
    desc: "Para assistir, revisar e aplicar no seu tempo.",
  },
  {
    icon: ShieldCheck,
    title: "7 dias de garantia incondicional",
    desc: "Quando a oferta estiver disponível para compra.",
  },
];

export function Deliverables() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-serif text-sm italic text-raspberry">o que você recebe</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-wine text-balance sm:text-4xl md:text-5xl">
            O Mapa da Autoestima é vendido separadamente por{" "}
            <span className="whitespace-nowrap text-raspberry line-through decoration-wine/30 decoration-2">
              R$ 997
            </span>
            .
            <br />
            <span className="italic font-serif font-normal">
              Mas dentro do Código, você pode ser sorteada para receber uma condição especial.
            </span>
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-wine/75 sm:text-lg">
            O Mapa da Autoestima não é um curso motivacional. É uma jornada completa de
            reorganização da autoestima. Dentro dele, você recebe:
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-raspberry/10 bg-white p-7 transition hover:border-raspberry/30 hover:shadow-[var(--shadow-soft)]"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md"
                style={{ background: "var(--gradient-rose)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold leading-snug text-wine">{title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-wine/70">{desc}</p>
            </div>
          ))}
        </div>

        <div
          className="relative mt-20 overflow-hidden rounded-[2.5rem] p-10 sm:p-14"
          style={{ background: "var(--gradient-purple-rose)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-light)" }}
          />
          <div className="relative mx-auto max-w-2xl text-center text-cream">
            <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Gift className="h-6 w-6 text-cream" />
            </div>
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              Como funciona o sorteio
            </h3>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-cream/90 sm:text-lg">
              <p>
                Durante a masterclass do Código do Desapego, você verá um botão para{" "}
                <span className="rounded-md bg-lime/80 px-1.5 font-semibold text-wine">
                  pegar o seu número do sorteio
                </span>
                . Guarde esse número.
              </p>
              <p>No final da aula, eu vou revelar quem foi sorteada.</p>
              <p>
                As pessoas sorteadas poderão receber uma <strong>condição especial</strong> para
                acessar o Mapa da Autoestima, sem pagar o preço normal de R$ 997.
              </p>
              <p className="font-serif italic text-pink">
                Essa condição aparece somente dentro da experiência do Código do Desapego e é uma
                forma de premiar quem acompanha a masterclass até o final.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton variant="primary">
                Assistir à masterclass e pegar meu número do sorteio
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}