import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { z } from "zod";
import heroImg from "@/assets/coragem-hero.jpg";
import joaoRafael from "@/assets/joao-rafael.png.asset.json";

export const Route = createFileRoute("/acoragemdeseescolher")({
  head: () => ({
    meta: [
      { title: "A Coragem de se Escolher — Masterclass Online e Gratuita" },
      {
        name: "description",
        content:
          "Masterclass online e gratuita: como parar de se autoabandonar e se tornar protagonista da sua própria vida. Inscrição gratuita.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "A Coragem de se Escolher — Masterclass Online e Gratuita" },
      {
        property: "og:description",
        content:
          "Como parar de se autoabandonar e se tornar protagonista da sua própria vida. Inscrição gratuita.",
      },
    ],
  }),
  component: CoragemPage,
});

/* Data da masterclass — ajustar quando definida */
const EVENT_DAY = "[DIA DA SEMANA]";
const EVENT_DATE = "[DATA]";
const EVENT_TIME = "19H45";
const EVENT_LINE = `${EVENT_DAY}, ${EVENT_DATE} • ${EVENT_TIME} • ONLINE`;
/* Página de obrigado — definir posteriormente */
const THANK_YOU_URL = "";

function scrollToForm() {
  document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => document.getElementById("mc-nome")?.focus(), 700);
}

function Cta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={scrollToForm}
      className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cor-amber to-cor-gold px-8 py-5 text-center text-base font-extrabold uppercase tracking-wide text-cor-black shadow-[0_18px_50px_-18px_rgba(242,193,78,0.7)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] sm:w-auto sm:text-lg ${className}`}
    >
      {children}
    </button>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`mc-reveal ${className}`}>
      {children}
    </div>
  );
}

const schema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome completo.").max(100, "Nome muito longo."),
  whatsapp: z
    .string()
    .trim()
    .regex(/^[0-9()\s+-]{10,20}$/, "Digite um WhatsApp válido com DDD.")
    .max(20),
  email: z.string().trim().email("Digite um e-mail válido.").max(255),
});

function Form() {
  const [values, setValues] = useState({ nome: "", whatsapp: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
    if (THANK_YOU_URL) window.location.href = THANK_YOU_URL;
  }

  const field =
    "w-full rounded-xl border border-cor-gold/30 bg-cor-black/60 px-4 py-4 text-base text-cor-cream placeholder:text-cor-cream/40 outline-none focus:border-cor-amber";

  return (
    <div
      id="inscricao"
      className="mx-auto w-full max-w-lg rounded-3xl border border-cor-gold/30 bg-cor-brown/70 p-6 shadow-[0_30px_90px_-40px_rgba(242,193,78,0.5)] sm:p-8"
    >
      {done ? (
        <div className="py-8 text-center">
          <p className="mc-serif text-3xl text-cor-amber">Inscrição confirmada!</p>
          <p className="mt-3 text-cor-cream/80">
            Você receberá os detalhes da masterclass no WhatsApp e no e-mail informados.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-4">
          <p className="mc-serif text-center text-2xl text-cor-cream sm:text-3xl">
            Garanta sua vaga <span className="text-cor-amber">gratuita</span>
          </p>
          <div>
            <label htmlFor="mc-nome" className="mb-1 block text-sm text-cor-cream/70">
              Nome
            </label>
            <input
              id="mc-nome"
              className={field}
              value={values.nome}
              maxLength={100}
              onChange={(e) => setValues({ ...values, nome: e.target.value })}
              placeholder="Seu nome"
            />
            {errors.nome && <p className="mt-1 text-sm text-cor-amber">{errors.nome}</p>}
          </div>
          <div>
            <label htmlFor="mc-whats" className="mb-1 block text-sm text-cor-cream/70">
              WhatsApp
            </label>
            <input
              id="mc-whats"
              inputMode="tel"
              className={field}
              value={values.whatsapp}
              maxLength={20}
              onChange={(e) => setValues({ ...values, whatsapp: e.target.value })}
              placeholder="(00) 00000-0000"
            />
            {errors.whatsapp && <p className="mt-1 text-sm text-cor-amber">{errors.whatsapp}</p>}
          </div>
          <div>
            <label htmlFor="mc-email" className="mb-1 block text-sm text-cor-cream/70">
              E-mail
            </label>
            <input
              id="mc-email"
              inputMode="email"
              className={field}
              value={values.email}
              maxLength={255}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="seu@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-cor-amber">{errors.email}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-cor-amber to-cor-gold px-6 py-5 text-base font-extrabold uppercase tracking-wide text-cor-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
          >
            Quero participar gratuitamente
          </button>
          <p className="text-center text-sm text-cor-cream/60">Inscrição gratuita</p>
        </form>
      )}
    </div>
  );
}

function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-cor-gold/25 bg-cor-black/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        type="button"
        onClick={scrollToForm}
        className="w-full rounded-full bg-gradient-to-r from-cor-amber to-cor-gold py-4 text-base font-extrabold uppercase tracking-wide text-cor-black"
      >
        Quero participar
      </button>
    </div>
  );
}

function CoragemPage() {
  return (
    <div className="coragem-root min-h-screen overflow-x-hidden pb-24 lg:pb-0">
      {/* HERO */}
      <section className="mc-sunset relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cor-amber sm:text-sm">
              Masterclass online e gratuita
            </p>
            <h1 className="mc-serif mt-4 text-4xl font-bold uppercase leading-[1.05] text-cor-cream sm:text-5xl lg:text-6xl">
              A coragem de <span className="text-cor-amber">se escolher</span>
            </h1>
            <div className="mc-gold-line my-6 max-w-xs" />
            <p className="text-base leading-relaxed text-cor-cream/80 sm:text-lg">
              Você cuida, considera, cede, tenta não decepcionar ninguém...
            </p>
            <p className="mc-serif mt-4 text-2xl font-semibold uppercase leading-tight text-cor-cream sm:text-3xl">
              Mas em que momento você começou a deixar você mesma para depois?
            </p>
            <p className="mt-6 text-base leading-relaxed text-cor-cream/75">
              Descubra por que você pode continuar se colocando em segundo plano mesmo quando já
              sabe que precisa se priorizar — e como começar a construir a Segurança Interna
              necessária para confiar mais em si, sustentar suas escolhas e assumir o comando da
              própria vida.
            </p>
            <p className="mt-7 inline-block rounded-full border border-cor-gold/40 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-cor-amber">
              {EVENT_LINE}
            </p>
            <div className="mt-8">
              <Cta>Quero participar da masterclass</Cta>
              <p className="mt-3 text-sm text-cor-cream/60">Inscrição gratuita</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-cor-amber/10 blur-3xl" />
            <img
              src={heroImg}
              alt="Mulher olhando para a luz dourada do pôr do sol"
              width={1024}
              height={1280}
              className="relative w-full rounded-[2rem] border border-cor-gold/25 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 02 — IDENTIFICAÇÃO */}
      <section className="bg-cor-black px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mc-serif text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Talvez você se reconheça aqui...
          </h2>
          <div className="mc-gold-line my-7 max-w-[10rem]" />
          <div className="space-y-5 text-base leading-relaxed text-cor-cream/80 sm:text-lg">
            <p>
              Você se preocupa tanto com as pessoas que ama que, muitas vezes, as necessidades delas
              acabam vindo antes das suas.
            </p>
            <p>
              Você sabe que precisa colocar alguns limites, mas quando alguém reage mal, começa a se
              sentir culpada ou volta atrás.
            </p>
            <p>
              Você toma uma decisão, mas basta alguém importante discordar para começar a duvidar do
              que pensa, sente ou quer.
            </p>
            <p>
              Em algumas relações, percebe que cede, se adapta e aceita mais do que gostaria por
              medo de decepcionar, gerar conflito ou perder alguém.
            </p>
            <p>
              E talvez você tenha passado tanto tempo tentando dar conta de tudo e de todos que, em
              alguns momentos, surge uma pergunta difícil de ignorar:
            </p>
          </div>
          <p className="mc-serif mt-10 text-center text-3xl font-bold uppercase leading-tight text-cor-amber sm:text-4xl">
            “E a vida que eu quero viver?”
          </p>
        </Reveal>
      </section>

      {/* 03 — QUEBRA DE CRENÇA */}
      <section className="mc-sunset px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mc-serif text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Talvez o problema não seja você não saber{" "}
            <span className="text-cor-amber">o que precisa fazer.</span>
          </h2>
          <div className="mt-8 space-y-3 text-base leading-relaxed text-cor-cream/80 sm:text-lg">
            <p>Você provavelmente já sabe que precisa se priorizar mais.</p>
            <p>Talvez já tenha percebido que precisa dizer alguns “nãos”.</p>
            <p>Colocar limites.</p>
            <p>Confiar mais em si.</p>
            <p>Parar de depender tanto da aprovação dos outros.</p>
            <p>
              Fazer escolhas pensando também naquilo que é importante para você.
            </p>
          </div>
          <div className="my-12 flex items-center justify-center">
            <div className="mc-gold-line w-full max-w-sm" />
          </div>
          <p className="mc-serif text-center text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Mas saber não significa <span className="text-cor-amber">conseguir sustentar.</span>
          </p>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-cor-cream/80 sm:text-lg">
            <p>
              Porque muitas vezes tentamos mudar o comportamento... sem desenvolver a estrutura
              emocional necessária para sustentar a mudança.
            </p>
            <p>
              E é justamente sobre essa{" "}
              <span className="font-semibold text-cor-amber">estrutura</span> que vamos conversar na
              masterclass A Coragem de se Escolher.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 04 — O QUE VOCÊ VAI DESCOBRIR */}
      <section className="bg-cor-black px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mc-serif text-center text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
              Nesta masterclass, você vai descobrir:
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                n: "01",
                t: "Por que pode ser tão difícil se priorizar",
                d: "Você vai compreender alguns dos principais erros que podem fazer você continuar se colocando em segundo plano, mesmo quando racionalmente já sabe o que deveria fazer.",
              },
              {
                n: "02",
                t: "Como começar a construir Segurança Interna",
                d: "Você vai entender como começar a construir dentro de si uma base para confiar mais no que pensa, sente e escolhe, sem depender constantemente da aprovação de outras pessoas.",
              },
              {
                n: "03",
                t: "Os 3 movimentos para começar a se escolher",
                d: "Você vai conhecer três movimentos que podem ajudar você a sair do automático, reconhecer o que quer construir e começar a desenvolver as habilidades necessárias para sustentar suas próprias escolhas.",
              },
            ].map((c) => (
              <Reveal key={c.n}>
                <div className="h-full rounded-2xl border border-cor-gold/25 bg-cor-brown/50 p-7">
                  <p className="mc-serif text-5xl font-bold text-cor-gold/60">{c.n}</p>
                  <h3 className="mc-serif mt-4 text-2xl font-semibold uppercase leading-tight text-cor-cream">
                    {c.t}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-cor-cream/75">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — DESEJO */}
      <section className="mc-sunset px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mc-serif text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Se escolher não significa deixar de amar, cuidar ou considerar as outras pessoas.
          </p>
          <p className="mc-serif mt-6 text-2xl font-bold uppercase leading-tight text-cor-amber sm:text-3xl">
            Significa parar de se excluir da equação.
          </p>
          <div className="mc-gold-line my-10" />
          <div className="space-y-5 text-base leading-relaxed text-cor-cream/80 sm:text-lg">
            <p>É poder ouvir quem você ama sem deixar de ouvir a própria voz.</p>
            <p>É considerar o outro sem deixar de se considerar.</p>
            <p>
              É conseguir fazer escolhas sem precisar que todo mundo concorde para confiar em você.
            </p>
            <p>
              É aprender a colocar limites sem sentir que, para se escolher, precisa deixar de amar.
            </p>
            <p>
              É começar a construir uma vida mais alinhada com quem você é e com aquilo que
              realmente quer viver.
            </p>
            <p>
              Porque talvez a questão não seja deixar de considerar as pessoas que são importantes
              para você.
            </p>
          </div>
          <p className="mc-serif mt-10 text-center text-3xl font-bold uppercase leading-tight text-cor-amber sm:text-4xl">
            Mas aprender a fazer escolhas sem se abandonar no caminho.
          </p>
        </Reveal>
      </section>

      {/* 06 — CTA INTERMEDIÁRIO */}
      <section className="bg-cor-black px-5 py-16 sm:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-cor-gold/35 bg-gradient-to-b from-cor-brown to-cor-black p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cor-amber/20 blur-3xl" />
            <h2 className="mc-serif relative text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
              A coragem de se escolher pode começar aqui.
            </h2>
            <p className="relative mt-6 text-base text-cor-cream/80 sm:text-lg">
              Participe gratuitamente da masterclass online:
            </p>
            <p className="mc-serif relative mt-2 text-2xl font-bold uppercase text-cor-amber sm:text-3xl">
              A coragem de se escolher
            </p>
            <p className="relative mt-4 text-sm font-semibold uppercase tracking-wider text-cor-cream/80">
              {EVENT_DAY}, {EVENT_DATE} • {EVENT_TIME}
            </p>
            <div className="relative mt-8">
              <Cta>Quero garantir minha inscrição</Cta>
              <p className="mt-3 text-sm text-cor-cream/60">Inscrição gratuita</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 07 — PARA QUEM É */}
      <section className="mc-sunset px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mc-serif text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Essa masterclass é para você que...
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              "cuida de todo mundo, mas quase sempre deixa você mesma por último;",
              "percebe que, em algumas relações, se doa, cede e se adapta mais do que gostaria;",
              "sabe que precisa colocar limites, mas tem dificuldade de sustentá-los quando o outro reage;",
              "começa a duvidar do que sente ou decide quando alguém importante discorda de você;",
              "sente culpa quando se prioriza, diz não ou faz uma escolha pensando também em você;",
              "percebe que depende demais da validação das outras pessoas para confiar nas próprias decisões;",
              "ou simplesmente sente que passou tanto tempo correspondendo às expectativas dos outros que precisa voltar a descobrir:",
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-cor-amber" />
                <span className="min-w-0 text-base leading-relaxed text-cor-cream/80 sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mc-serif mt-10 text-center text-3xl font-bold uppercase leading-tight text-cor-amber sm:text-4xl">
            “O que eu quero para a minha vida?”
          </p>
        </Reveal>
      </section>

      {/* 08 — QUEM VAI CONDUZIR */}
      <section className="bg-cor-black px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-5xl">
          <h2 className="mc-serif text-center text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Quem vai conduzir essa conversa
          </h2>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <img
              src={joaoRafael.url}
              alt="João Rafael, terapeuta e criador do Mapa da Autoestima"
              loading="lazy"
              className="w-full rounded-3xl border border-cor-gold/25 object-cover"
            />
            <div>
              <p className="mc-serif text-3xl font-bold uppercase text-cor-amber sm:text-4xl">
                João Rafael
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-cor-cream/70">
                Terapeuta e criador do Mapa da Autoestima
              </p>
              <div className="mc-gold-line my-6 max-w-[10rem]" />
              <div className="space-y-4 text-base leading-relaxed text-cor-cream/80">
                <p>
                  Ao longo dos meus atendimentos, comecei a perceber algo se repetindo na história
                  de muitas mulheres.
                </p>
                <p>
                  Mulheres competentes, responsáveis, que cuidavam das pessoas ao redor, davam conta
                  de muitas coisas... mas que, aos poucos, iam deixando a si mesmas para depois.
                </p>
                <p>
                  Isso podia aparecer nos relacionamentos, na família, no trabalho, nas escolhas ou
                  na necessidade constante de aprovação.
                </p>
                <p>
                  Foi observando esse padrão que comecei a aprofundar meu trabalho sobre autoestima
                  feminina e sobre aquilo que permite a uma mulher se escolher sem precisar deixar
                  de considerar quem ama.
                </p>
                <p>
                  E foi dessa experiência que nasceu a conversa que quero ter com você nesta
                  masterclass.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 09 — CONVITE FINAL */}
      <section className="mc-sunset px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mc-serif text-3xl font-bold uppercase leading-tight text-cor-cream sm:text-4xl">
            Talvez esteja na hora de <span className="text-cor-amber">começar a se escolher</span>{" "}
            também.
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-cor-cream/80 sm:text-lg">
            <p>Você não precisa esperar deixar de sentir medo.</p>
            <p>Não precisa ter todas as respostas.</p>
            <p>
              E não precisa deixar de amar ou considerar as pessoas que são importantes para você.
            </p>
            <p>Mas pode começar a construir algo diferente:</p>
            <p>mais confiança no que você sente;</p>
            <p>mais segurança para sustentar suas escolhas;</p>
            <p>mais liberdade para colocar limites;</p>
            <p>e mais espaço para construir uma vida que também faça sentido para você.</p>
          </div>
          <p className="mc-serif mt-12 text-center text-3xl font-bold uppercase leading-tight text-cor-amber sm:text-4xl">
            Se escolher não é deixar de cuidar das pessoas que são importantes para você. É parar de
            se abandonar enquanto cuida delas.
          </p>
          <div className="mt-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cor-amber sm:text-sm">
              Masterclass online e gratuita
            </p>
            <p className="mc-serif mt-3 text-3xl font-bold uppercase text-cor-cream sm:text-4xl">
              A coragem de se escolher
            </p>
            <p className="mt-3 text-base text-cor-cream/75">
              Como parar de se autoabandonar e se tornar protagonista da própria vida.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-cor-cream/80">
              {EVENT_DAY}, {EVENT_DATE} • {EVENT_TIME}
            </p>
            <div className="mt-8">
              <Cta>Quero participar gratuitamente</Cta>
            </div>
          </div>
          <div className="mt-14">
            <Form />
          </div>
        </Reveal>
      </section>

      {/* FECHAMENTO */}
      <footer className="bg-cor-black px-5 py-16 text-center sm:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mc-gold-line mb-10" />
          <p className="mc-serif text-2xl font-bold uppercase leading-tight text-cor-cream sm:text-3xl">
            A coragem de se escolher começa com uma escolha. E essa escolha pode começar hoje.
          </p>
          <p className="mc-serif mt-6 text-2xl text-cor-amber sm:text-3xl">
            Você já se escolheu hoje?
          </p>
          <p className="mt-10 text-xs text-cor-cream/40">
            © {new Date().getFullYear()} João Rafael — Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <StickyCta />
    </div>
  );
}
