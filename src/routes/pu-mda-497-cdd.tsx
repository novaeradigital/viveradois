import { createFileRoute } from "@tanstack/react-router";
import dep1 from "@/assets/cdd-depoimento-1.webp.asset.json";
import dep2 from "@/assets/cdd-depoimento-2.webp.asset.json";
import dep3 from "@/assets/cdd-depoimento-3.webp.asset.json";
import dep4 from "@/assets/cdd-depoimento-4.webp.asset.json";
import dep5 from "@/assets/cdd-depoimento-5.webp.asset.json";
import dep6 from "@/assets/cdd-depoimento-6.webp.asset.json";
import dep7 from "@/assets/cdd-depoimento-7.webp.asset.json";
import dep8 from "@/assets/cdd-depoimento-8.webp.asset.json";
import dep9 from "@/assets/cdd-depoimento-9.webp.asset.json";
import dep10 from "@/assets/cdd-depoimento-10.webp.asset.json";
import logoMda from "@/assets/logo-mapa-autoestima.png.asset.json";

export const Route = createFileRoute("/pu-mda-497-cdd")({
  head: () => ({
    meta: [
      { title: "Mapa da Autoestima — Reconstrua o seu próprio centro" },
      {
        name: "description",
        content:
          "O próximo passo depois do Código do Desapego: reorganize a estrutura interna que te fez se perder. Condição especial para alunas.",
      },
      { property: "og:title", content: "Mapa da Autoestima — Reconstrua o seu próprio centro" },
      {
        property: "og:description",
        content:
          "Saia do Ciclo do Não Merecimento e construa autoestima de dentro para fora. Acesso por 1 ano, garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const depoimentosA = [
  { src: dep1.url, name: "Juliana" },
  { src: dep2.url, name: "Patrícia Soares" },
  { src: dep3.url, name: "Renata Carini" },
  { src: dep4.url, name: "Camila" },
  { src: dep5.url, name: "Fernanda Marques" },
];
const depoimentosB = [
  { src: dep6.url, name: "Larissa Lopes" },
  { src: dep7.url, name: "Aline" },
  { src: dep8.url, name: "Vanessa Silva" },
  { src: dep9.url, name: "Tatiane" },
  { src: dep10.url, name: "Bruna Cafarezzi" },
];

const CHECKOUT_URL = "https://checkout.ticto.app/O5E782838";

const ctaClass =
  "inline-flex items-center justify-center text-center rounded-full px-10 py-5 text-base sm:text-lg font-bold font-display tracking-wide text-white uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_25px_70px_-15px_rgba(197,55,113,0.7)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink/60";
const ctaStyle = { backgroundImage: "var(--gradient-rose)", boxShadow: "var(--shadow-soft)" };

function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 80" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bm-pink-497" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f28bc0" />
          <stop offset="55%" stopColor="#ec168f" />
          <stop offset="100%" stopColor="#c53771" />
        </linearGradient>
        <radialGradient id="bm-glow-497" cx="50%" cy="42%" r="35%">
          <stop offset="0%" stopColor="#fff7c2" />
          <stop offset="60%" stopColor="#f5cd99" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f5cd99" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M32 2c-16 0-28 12-28 28 0 19 22 38 27 47 .5.9 1.5.9 2 0 5-9 27-28 27-47 0-16-12-28-28-28z"
        fill="url(#bm-pink-497)"
      />
      <circle cx="32" cy="32" r="14" fill="url(#bm-glow-497)" />
      <circle cx="32" cy="25" r="3.2" fill="#fcf5eb" />
      <path d="M24 44c0-5 3.6-9 8-9s8 4 8 9" fill="#fcf5eb" />
    </svg>
  );
}

function Marquee({
  items,
  direction,
}: {
  items: { src: string; name: string }[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];
  const trackClass = direction === "left" ? "marquee-track" : "marquee-track reverse";
  return (
    <div className="marquee-mask overflow-hidden py-4">
      <div className={`flex gap-6 ${trackClass}`}>
        {loop.map((t, i) => (
          <img
            key={`${t.name}-${i}`}
            src={t.src}
            alt={`Depoimento de ${t.name}, aluna do Código do Desapego`}
            loading="lazy"
            className="shrink-0 w-[280px] sm:w-[320px] h-auto"
          />
        ))}
      </div>
    </div>
  );
}

function OfertaBox({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="relative mx-auto max-w-xl rounded-3xl p-[2px]"
      style={{ backgroundImage: "var(--gradient-rose)" }}
    >
      <div className="rounded-[calc(1.5rem-2px)] bg-cream px-8 py-10 text-center">
        <p className="font-serif italic text-sm uppercase tracking-[0.25em] text-raspberry">
          Oferta especial para alunas do Código do Desapego
        </p>
        <p className="mt-6 text-base text-foreground/60">
          De: <span className="line-through">R$ 990,00</span>
        </p>
        <p className="mt-1 font-display text-foreground/70 text-lg">Por:</p>
        <p
          className="mt-2 font-display font-extrabold text-5xl sm:text-6xl bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-purple-rose)" }}
        >
          12x R$ 51,40
        </p>
        <p className="mt-2 text-foreground/70">
          ou <span className="font-bold text-raspberry">R$ 497 à vista</span>
        </p>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener" className={`${ctaClass} mt-8 w-full`} style={ctaStyle}>
          Sim, quero entrar no Mapa
        </a>
        <p className="mt-4 text-xs text-foreground/60">
          Acesso por 1 ano. Garantia incondicional de 7 dias.
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="pa-mda-root min-h-screen bg-cream text-foreground overflow-x-hidden">
      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <BrandMark className="h-9 w-9" />
          <span className="font-display font-extrabold text-raspberry tracking-tight">
            Mapa da Autoestima
          </span>
        </div>
        <a
          href={CHECKOUT_URL} target="_blank" rel="noopener"
          className="hidden sm:inline-flex font-display font-bold text-sm text-raspberry hover:text-wine transition-colors"
        >
          Quero minha vaga →
        </a>
      </header>

      {/* 1. HERO */}
      <section className="relative isolate px-6 pb-24 pt-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[700px] max-w-5xl opacity-70 blur-3xl"
          style={{ backgroundImage: "var(--gradient-light)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-lavender px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-raspberry">
              <span className="h-1.5 w-1.5 rounded-full bg-raspberry" />
              Continuação do Código do Desapego
            </span>
            <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-wine">
              Agora que você tirou o ex do centro…{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-rose)" }}
              >
                é hora de reconstruir o seu próprio centro.
              </span>
            </h1>
            <p className="mt-6 font-serif text-lg sm:text-xl text-foreground/80 leading-relaxed">
              O Código do Desapego te ajuda a sair da crise, interromper recaídas e recuperar
              controle emocional. Mas o{" "}
              <strong className="text-raspberry not-italic">Mapa da Autoestima</strong> é o próximo
              passo para reorganizar a estrutura interna que fez você se perder tanto dentro desse
              vínculo.
            </p>

            <p className="mt-10 font-serif italic text-foreground/80">
              Você acabou de entender que o problema não era apenas “esquecer alguém”. O ex virou
              fonte de segurança, validação, pertencimento e futuro afetivo. O Código te mostra
              como interromper esse sequestro emocional. Mas existe uma pergunta mais profunda:
            </p>
            <p className="mt-3 font-display font-bold text-2xl text-raspberry">
              por que alguém conseguiu ocupar tanto espaço dentro de você?
            </p>
            <p className="mt-3 text-foreground/80">É aqui que entra o Mapa da Autoestima.</p>

            <ul className="mt-8 space-y-3 text-left mx-auto max-w-xl">
              {[
                "sair do Ciclo do Não Merecimento;",
                "parar de se doar demais e receber de menos;",
                "deixar de transformar rejeição em prova de falta de valor;",
                "reorganizar sua autoimagem de dentro para fora;",
                "desenvolver autonomia emocional;",
                "aprender a se posicionar sem culpa;",
                "construir relações saudáveis, sem se abandonar para ser escolhida.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-foreground/85">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundImage: "var(--gradient-rose)" }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Oferta card */}
          <div className="mt-14">
            <OfertaBox />
          </div>
        </div>
      </section>

      {/* 2. CONTINUAÇÃO */}
      <section className="px-6 py-24" style={{ backgroundImage: "var(--gradient-sunset)" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src={logoMda.url}
              alt="Mapa da Autoestima — Do Ciclo do Não Merecimento à Autodeterminação"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-wine leading-tight">
              O Código resolve a crise imediata.{" "}
              <span className="text-raspberry">O Mapa muda o padrão.</span>
            </h2>
            <div className="mt-8 space-y-5 font-serif text-lg text-foreground/80 leading-relaxed">
              <p>
                O Código do Desapego foi criado para o momento mais urgente: quando você ainda pensa
                nele, sente vontade de mandar mensagem, olha o perfil, revive cenas e tenta entender
                por que ainda está presa.
              </p>
              <p>
                Ele te faz interromper as recaídas, nomear gatilhos, enxergar a realidade da relação,
                separar a pessoa real da pessoa esperada e trocar o impulso por uma ação de
                reconstrução.
              </p>
              <p>
                Mas o Código não foi criado para reorganizar toda a sua vida afetiva. Ele tira o ex
                do centro emocional.
              </p>
              <p>
                O <strong className="text-raspberry not-italic">Mapa da Autoestima</strong>{" "}
                reorganiza a estrutura interna que permitiu que ele ocupasse esse centro, impedindo
                que outros o ocupem.
              </p>
              <p>
                Porque, se essa estrutura não mudar, você pode até superar esse ex… mas se prender a
                outro vínculo com a mesma dinâmica.
              </p>
            </div>
            <p className="mt-8 font-display font-bold text-xl text-wine">
              Outro rosto. Outro nome. Outra história. <br />
              <span className="text-raspberry">Mas o mesmo padrão.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. O PROBLEMA */}
      <section className="bg-lavender/60 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-wine leading-tight">
            Você não precisa apenas esquecer esse ex.{" "}
            <span className="text-raspberry">
              Você precisa entender por que aceitou se abandonar por ele.
            </span>
          </h2>
          <div className="mt-8 space-y-4 text-foreground/85 leading-relaxed">
            <p>Talvez, agora, a dor imediata esteja mais clara.</p>
            <p>Você entendeu que a saudade não é uma ordem.</p>
            <p>
              Entendeu que a vontade de mandar mensagem pode ser apenas o sequestro da identidade
              afetiva.
            </p>
            <p>Entendeu que nem toda lembrança precisa virar recaída.</p>
            <p>Mas existe uma camada mais profunda.</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Por que você aceitou tão pouco por tanto tempo?",
              "Por que teve medo de exigir clareza?",
              "Por que se sentiu culpada por se priorizar?",
              "Por que a ausência dele parecia tirar seu valor?",
              "Por que tentou ser compreensiva, madura e paciente… mesmo quando ele estava te machucando?",
            ].map((q) => (
              <li
                key={q}
                className="rounded-2xl bg-cream p-5 font-serif italic text-foreground/85 ring-1 ring-pink/20"
              >
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-display text-xl text-wine">
            Essa resposta já não está mais no ex.{" "}
            <span className="text-raspberry">Está em você.</span>
          </p>
          <p className="mt-3 text-foreground/80">
            Está na sua autoimagem, e na forma como você aprendeu a se enxergar, se valorizar, se
            adaptar, se calar e buscar amor.
          </p>
        </div>
      </section>

      {/* 4. CICLO DO NÃO MERECIMENTO */}
      <section
        className="relative px-6 py-24 text-cream"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,247,194,0.15), transparent 40%), linear-gradient(160deg, #5a1633 0%, #c53771 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">
            O padrão que faz você se doar demais e receber de menos tem nome.
          </h2>
          <p className="mt-6 font-serif italic text-2xl text-lavender">
            E ele se chama{" "}
            <span className="font-display not-italic font-extrabold text-cream">
              Ciclo do Não Merecimento.
            </span>
          </p>
          <div className="mt-10 space-y-5 text-cream/85 leading-relaxed">
            <p>
              O Ciclo do Não Merecimento acontece quando você começa a acreditar, mesmo sem
              perceber, que precisa se esforçar demais para ser amada.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 my-6 font-display font-bold text-lg">
              {[
                "Tenta ser compreensiva.",
                "Tenta não cobrar.",
                "Tenta não parecer carente.",
                "Engole o que sente.",
                "Aceita migalhas.",
                "Se adapta.",
                "Espera.",
                "Insiste.",
              ].map((w) => (
                <span
                  key={w}
                  className="rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-center backdrop-blur"
                >
                  {w}
                </span>
              ))}
            </div>
            <p>
              E, no final, é você quem fica exausta, insegura e emocionalmente drenada. Não porque
              você é fraca. Mas porque, em algum lugar da sua história, você aprendeu que amor
              vinha como recompensa.
            </p>
            <p className="font-serif italic text-cream/90">
              Se fosse fácil. Se não desse trabalho. Se agradava. Se correspondia. Se se adaptava.
            </p>
            <p>
              E, quando isso entra na vida adulta, você começa a chamar{" "}
              <strong className="text-lime not-italic">autoabandono de amor.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 5. O QUE MUDA */}
      <section className="relative px-6 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mx-auto h-full max-w-3xl opacity-60 blur-3xl"
          style={{ backgroundImage: "var(--gradient-light)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-wine leading-tight">
            O Mapa da Autoestima não te dá mais uma frase bonita.{" "}
            <span className="text-raspberry">Ele reestrutura a autoimagem.</span>
          </h2>
          <div className="mt-8 space-y-4 text-foreground/85 leading-relaxed">
            <p>Você já entendeu muita coisa.</p>
            <p>Já sabe que se doa demais. Já percebeu que aceita pouco.</p>
            <p>Já prometeu que nunca mais voltaria para esse padrão.</p>
            <p className="font-display font-bold text-xl text-wine">
              Mas entender racionalmente não basta.
            </p>
            <p>
              Porque, na hora da emoção, quem decide não é a sua razão, ou a sua consciência. É a
              sua estrutura interna. É sua autoimagem.
            </p>
          </div>
          <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
            {[
              "É a culpa que aparece quando você se prioriza.",
              "É o medo de ser rejeitada.",
              "É a sensação de que precisa ser escolhida para se sentir suficiente.",
              "É por isso que o Mapa existe.",
            ].map((t) => (
              <p
                key={t}
                className="rounded-2xl bg-white/70 p-5 font-serif italic text-foreground/85 ring-1 ring-pink/20"
              >
                {t}
              </p>
            ))}
          </div>
          <p className="mt-10 font-display text-xl text-raspberry">
            Para reorganizar a estrutura que sustenta suas escolhas afetivas.
          </p>
        </div>
      </section>

      {/* 6. MÉTODO */}
      <section className="px-6 py-24 bg-cream">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-serif italic text-raspberry">o método</span>
            <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-wine leading-tight">
              Como o Mapa reorganiza sua autoestima por dentro
            </h2>
            <p className="mt-6 text-foreground/80">
              O Mapa da Autoestima é um processo de reestruturação emocional baseado em três
              pilares. Eles te levam do{" "}
              <strong className="text-raspberry">Ciclo do Não Merecimento</strong> ao{" "}
              <strong className="text-raspberry">Ciclo da Autodeterminação</strong>.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Visão Progressiva",
                d: "Você aprende a olhar para sua história sem transformar dor em condenação. Para de usar o passado para se atacar, de transformar rejeição em identidade e erro em fracasso. E começa a perguntar: “o que essa experiência precisa me ensinar?”",
              },
              {
                n: "02",
                t: "Autenticidade Psicológica",
                d: "Você aprende a se reconhecer de forma real. Sem se inflar, nem se diminuir. Sem se moldar para caber. Sem fingir leveza enquanto se destrói por dentro. Identifica necessidades, limites, valor e responsabilidade.",
              },
              {
                n: "03",
                t: "Alinhamento com Propósito",
                d: "Você deixa de decidir por medo, carência, culpa ou urgência. Passa a decidir com direção, critério interno e clareza sobre a vida que quer construir. Uma mulher com propósito tem eixo.",
              },
            ].map((p) => (
              <article
                key={p.n}
                className="relative rounded-3xl bg-white p-8 ring-1 ring-pink/15 shadow-[0_30px_60px_-40px_rgba(197,55,113,0.45)] transition-transform hover:-translate-y-1"
              >
                <div
                  className="font-display font-black text-6xl bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-purple-rose)" }}
                >
                  {p.n}
                </div>
                <h3 className="mt-3 font-display font-extrabold text-2xl text-wine">
                  Pilar — {p.t}
                </h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. O QUE VOCÊ RECEBE */}
      <section className="px-6 py-24" style={{ backgroundImage: "var(--gradient-cream)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-wine text-center leading-tight">
            Ao entrar no Mapa da Autoestima, você recebe:
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Aula inicial de orientação",
                d: "Para entender onde está, como o processo funciona e por onde começar. Você não entra perdida — entra com caminho.",
              },
              {
                t: "Aulas profundas e diretas",
                d: "Pensadas para reorganizar sua autoimagem, sua forma de interpretar relações e sua capacidade de se posicionar. Sem enrolação, sem labirinto.",
              },
              {
                t: "RPA — Protocolo de Reprogramação da Autoimagem",
                d: "Um protocolo para trabalhar a forma como você se enxerga. Entender sua autoimagem é uma coisa; reprogramar como você se percebe é outra.",
              },
              {
                t: "7 podcasts guiados",
                d: "Áudios de consolidação emocional para integrar o conteúdo no dia a dia. Não são áudios motivacionais — reforçam a nova estrutura interna.",
              },
              {
                t: "Suporte durante o processo",
                d: "Para tirar dúvidas, receber orientação e não se sentir sozinha durante a jornada.",
              },
              {
                t: "Acesso por 1 ano",
                d: "Assista no seu ritmo, reveja aulas, volte aos podcasts e revisite o RPA sempre que precisar.",
              },
              {
                t: "Garantia incondicional de 7 dias",
                d: "Entre, acesse o conteúdo, sinta o método e decida. Se não fizer sentido, basta solicitar o reembolso dentro do prazo.",
              },
            ].map((it, i) => (
              <div
                key={it.t}
                className="flex gap-5 rounded-3xl bg-white/85 p-6 ring-1 ring-pink/15 backdrop-blur"
              >
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display font-extrabold text-xl text-white"
                  style={{ backgroundImage: "var(--gradient-rose)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-wine">{it.t}</h3>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARA QUEM É / NÃO É */}
      <section className="px-6 py-24 bg-cream">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-lavender/60 p-8 ring-1 ring-pink/15">
            <h3 className="font-display font-extrabold text-2xl text-wine">
              O Mapa não é para você se…
            </h3>
            <ul className="mt-5 space-y-3 text-foreground/80">
              {[
                "você quer manipular alguém para voltar;",
                "você procura uma fórmula mágica;",
                "você quer apenas uma frase de motivação rápida;",
                "você quer continuar culpando apenas o outro sem olhar para sua estrutura;",
                "você não quer se comprometer minimamente com sua reconstrução;",
                "você espera que autoestima seja apenas “se sentir bem” o tempo todo.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-wine/40" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl p-8 ring-1 ring-pink/30"
            style={{ backgroundImage: "var(--gradient-cream)" }}
          >
            <h3 className="font-display font-extrabold text-2xl text-raspberry">
              O Mapa é para você se…
            </h3>
            <ul className="mt-5 space-y-3 text-foreground/85">
              {[
                "você sente que precisa se posicionar com firmeza;",
                "você sente que se abandona nos relacionamentos;",
                "você entende seus padrões, mas continua repetindo;",
                "você quer construir relações mais maduras, recíprocas e seguras;",
                "você quer reorganizar sua autoestima de forma real, não apenas “pensar positivo”.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundImage: "var(--gradient-rose)" }}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener" className={`${ctaClass} mt-8 w-full`} style={ctaStyle}>
              Quero construir minha estrutura interna hoje!
            </a>
          </div>
        </div>
      </section>

      {/* 9. PROVA / CARROSSEIS */}
      <section className="px-0 py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-serif italic text-raspberry">depoimentos</span>
          <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-wine leading-tight">
            Mulheres diferentes.{" "}
            <span className="text-raspberry">O mesmo padrão.</span>
          </h2>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Talvez você tenha pensado que isso acontecia só com você. Mas esse padrão aparece em
            muitas mulheres — que funcionam bem por fora, trabalham, cuidam da casa, aconselham
            amigas, parecem fortes… mas nos relacionamentos não conseguem se posicionar.
          </p>
          <p className="mt-4 font-display font-bold text-wine">
            O Mapa foi criado exatamente para essa mulher.
          </p>
        </div>
        <div className="mt-14 space-y-6">
          <Marquee items={depoimentosA} direction="left" />
          <Marquee items={depoimentosB} direction="right" />
        </div>
      </section>

      {/* 11. OFERTA FINAL */}
      <section
        id="oferta-final"
        className="relative px-6 py-24 text-cream overflow-hidden"
        style={{ backgroundImage: "var(--gradient-purple-rose)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundImage: "var(--gradient-light)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">
              Entre agora no Mapa da Autoestima com a condição especial do Código do Desapego
            </h2>
            <div className="mt-6 space-y-4 text-cream/85 leading-relaxed">
              <p>Você já deu o primeiro passo. Entendeu que o ex não era apenas uma pessoa.</p>
              <p className="font-display font-bold text-lime">
                Ele virou um centro emocional.
              </p>
              <p>Agora, o próximo passo é reconstruir o seu próprio centro.</p>
              <p>
                O Mapa é para você que quer reconstruir a própria estrutura interna — que quer que
                o próprio valor venha de dentro, sem precisar de validação externa.
              </p>
            </div>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2 text-cream/90 text-sm">
              {[
                "Aula inicial de orientação",
                "9 aulas profundas e diretas",
                "RPA — Reprogramação da Autoimagem",
                "7 podcasts guiados",
                "Suporte durante o processo",
                "Acesso por 1 ano",
                "Garantia incondicional de 7 dias",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-wine text-xs font-extrabold">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-cream p-8 sm:p-10 text-foreground shadow-[0_40px_120px_-40px_rgba(0,0,0,0.5)]">
            <p className="font-serif italic text-sm uppercase tracking-[0.25em] text-raspberry text-center">
              Resumo da oferta
            </p>
            <p className="mt-6 text-center text-foreground/60">
              De: <span className="line-through">R$ 990,00</span>
            </p>
            <p className="mt-1 text-center font-display text-foreground/70">Por:</p>
            <p
              className="mt-2 text-center font-display font-black text-5xl sm:text-6xl bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-purple-rose)" }}
            >
              12x R$ 51,40
            </p>
            <p className="mt-2 text-center text-foreground/70">
              ou <span className="font-bold text-raspberry">R$ 497 à vista</span>
            </p>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener" className={`${ctaClass} mt-8 w-full`} style={ctaStyle}>
              Sim, quero entrar no Mapa da Autoestima
            </a>
            <p className="mt-4 text-xs text-foreground/60 text-center">
              Compra segura. Acesso imediato. Garantia incondicional de 7 dias.
            </p>
          </div>
        </div>
      </section>

      {/* 12. URGÊNCIA */}
      <section className="px-6 py-24 bg-wine text-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
            Essa condição é especial para quem chegou até aqui pelo{" "}
            <span className="text-lime">Código do Desapego.</span>
          </h2>
          <div className="mt-8 space-y-4 text-cream/80 leading-relaxed">
            <p>Esta oferta especial pode não aparecer novamente depois que você sair desta página.</p>
            <p>O valor pode ser reajustado. Os bônus podem mudar. A condição pode sair do ar.</p>
            <p className="font-display font-bold text-cream">
              Mas a decisão principal não é sobre preço.
            </p>
            <p>É sobre o que você escolhe fazer agora que entendeu o padrão.</p>
            <p>
              Você pode continuar tentando se controlar pela força. Ou pode começar a reorganizar a
              estrutura que faz você repetir o mesmo ciclo.
            </p>
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener" className={`${ctaClass} mt-10`} style={ctaStyle}>
            Quero começar minha reconstrução interna
          </a>
        </div>
      </section>

      {/* 13. GARANTIA */}
      <section className="px-6 py-24 bg-cream">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.6fr_1fr]">
          <div className="relative mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 -m-10 blur-3xl opacity-70"
              style={{ backgroundImage: "var(--gradient-light)" }}
            />
            <div
              className="relative grid h-56 w-56 place-items-center rounded-full text-center font-display text-white"
              style={{ backgroundImage: "var(--gradient-rose)" }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-90">Garantia</p>
                <p className="font-black text-6xl leading-none">7</p>
                <p className="text-sm font-bold">dias incondicional</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-wine leading-tight">
              Você tem 7 dias para decidir sem risco.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Entre no Mapa da Autoestima. Assista às primeiras aulas. Conheça o processo. Veja
                se a proposta faz sentido para você.
              </p>
              <p>
                Se dentro de 7 dias sentir que não é o momento, basta solicitar o reembolso. Sem
                justificativa. Sem constrangimento. Sem risco.
              </p>
              <p className="font-display font-bold text-wine">
                O risco não está em entrar. O risco está em continuar vivendo o mesmo padrão sem
                reorganizar a estrutura que sustenta esse ciclo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FECHAMENTO */}
      <section
        className="relative px-6 py-28 overflow-hidden"
        style={{ backgroundImage: "var(--gradient-cream)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[500px] max-w-3xl -translate-y-1/2 opacity-70 blur-3xl"
          style={{ backgroundImage: "var(--gradient-light)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-wine leading-tight">
            O Código te ajudou a sair da crise.{" "}
            <span className="text-raspberry">O Mapa te ajuda a mudar a raiz.</span>
          </h2>
          <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed">
            <p>Esquecer o ex resolve uma dor.</p>
            <p>
              Reorganizar sua autoestima muda a forma como você ama, escolhe, se posiciona e se
              protege.
            </p>
            <p>A pergunta agora não é mais:</p>
            <p className="font-serif italic text-xl text-foreground/70">
              “Como eu paro de pensar nele?”
            </p>
            <p>A pergunta é:</p>
            <p className="font-display font-extrabold text-2xl text-raspberry">
              “Como eu reorganizo minha autoestima para nunca mais precisar me abandonar por amor?”
            </p>
            <p>
              Se esse é o seu próximo passo, clique no botão abaixo e seja protagonista da sua
              própria história, a partir de hoje.
            </p>
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener" className={`${ctaClass} mt-10`} style={ctaStyle}>
            Sim, eu quero entrar no Mapa da Autoestima
          </a>
        </div>
      </section>

      <footer className="bg-wine px-6 py-10 text-center text-cream/70 text-sm">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
          <BrandMark className="h-8 w-8" />
          <p className="font-display font-bold text-cream">Mapa da Autoestima</p>
          <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}