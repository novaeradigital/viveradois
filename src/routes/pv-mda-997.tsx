import { createFileRoute } from "@tanstack/react-router";

const CHECKOUT_URL = "https://institutointi.ticto.club";
const WHATSAPP_URL = "https://wa.me/5511999999999";

const BRAND = {
  pink: "#f28bc0",
  pinkStrong: "#ec168f",
  raspberry: "#c53771",
  cream: "#fcf5eb",
  sunset: "#f5cd99",
  lavender: "#fbdae5",
  violet: "#8d3fc1",
  violetDeep: "#7b3fbd",
  wine: "#3a0e26",
  lime: "#d6f21f",
  glow: "#fff7c2",
  ink: "#2b0f1f",
} as const;

const GRADIENTS = {
  pink: `linear-gradient(135deg, ${BRAND.pink} 0%, ${BRAND.pinkStrong} 55%, ${BRAND.raspberry} 100%)`,
  cream: `linear-gradient(135deg, ${BRAND.cream} 0%, ${BRAND.lavender} 60%, ${BRAND.pink} 100%)`,
  sunset: `linear-gradient(180deg, ${BRAND.sunset} 0%, ${BRAND.cream} 100%)`,
  violet: `linear-gradient(135deg, ${BRAND.violetDeep} 0%, #9638cc 50%, ${BRAND.raspberry} 100%)`,
  glow: `radial-gradient(circle at center, ${BRAND.glow} 0%, ${BRAND.sunset} 35%, transparent 70%)`,
  wine: `linear-gradient(160deg, ${BRAND.wine} 0%, #5a1740 60%, ${BRAND.raspberry} 130%)`,
} as const;

const F_DISPLAY = '"Nunito", system-ui, sans-serif';
const F_HEADING = '"Fraunces", Georgia, serif';
const F_BODY = '"Poppins", system-ui, sans-serif';

export const Route = createFileRoute("/pv-mda-997")({
  head: () => ({
    meta: [
      { title: "Mapa da Autoestima — Saia do Ciclo do Não Merecimento" },
      {
        name: "description",
        content:
          "Um processo profundo e prático para estruturar sua autoestima nos 7 núcleos da autoestima feminina. Do ciclo do não merecimento à autodeterminação.",
      },
      { property: "og:title", content: "Mapa da Autoestima — Saia do Ciclo do Não Merecimento" },
      {
        property: "og:description",
        content:
          "Estruture sua autoestima por dentro. Pare de se abandonar para ser amada. Acesso por 1 ano, 7 dias de garantia incondicional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SalesPage,
});

function Bloom({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ backgroundImage: GRADIENTS.glow }}
    />
  );
}

function CTA({
  children,
  variant = "pink",
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode;
  variant?: "pink" | "violet" | "outline";
  href?: string;
}) {
  const base =
    "group relative inline-flex w-full max-w-2xl items-center justify-center rounded-full px-8 py-5 text-center text-base font-extrabold uppercase tracking-wide transition hover:-translate-y-0.5 sm:text-lg";

  if (variant === "outline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-2 bg-transparent`}
        style={{
          fontFamily: F_DISPLAY,
          borderColor: BRAND.raspberry,
          color: BRAND.raspberry,
        }}
      >
        {children}
      </a>
    );
  }

  const bg = variant === "violet" ? GRADIENTS.violet : GRADIENTS.pink;
  const shadow =
    variant === "violet"
      ? "0_20px_50px_-15px_rgba(123,63,189,0.7)"
      : "0_20px_50px_-15px_rgba(197,55,113,0.7)";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} text-white shadow-[${shadow}]`}
      style={{ backgroundImage: bg, fontFamily: F_DISPLAY }}
    >
      <span className="relative z-10 text-balance leading-tight">{children}</span>
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow ? (
        <p
          className="mb-4 text-xs font-bold uppercase tracking-[0.35em]"
          style={{ color: light ? BRAND.lime : BRAND.raspberry }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="text-3xl font-black leading-[1.1] sm:text-4xl md:text-5xl"
        style={{
          fontFamily: F_DISPLAY,
          color: light ? "#fff" : BRAND.wine,
        }}
      >
        {children}
      </h2>
    </div>
  );
}

function Bullets({
  items,
  numbered = false,
  variant = "cream",
}: {
  items: React.ReactNode[];
  numbered?: boolean;
  variant?: "cream" | "lavender" | "wine";
}) {
  const bg =
    variant === "wine"
      ? "rgba(255,247,194,0.08)"
      : variant === "lavender"
        ? "#ffffffcc"
        : "#ffffff";
  const border =
    variant === "wine" ? "rgba(255,247,194,0.18)" : `${BRAND.lavender}`;
  const text = variant === "wine" ? "#fff7ecd9" : "rgba(43,15,31,0.85)";
  return (
    <ul className="mx-auto grid max-w-3xl gap-3 sm:gap-4">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-start gap-4 rounded-2xl p-5 backdrop-blur-sm"
          style={{
            backgroundColor: bg,
            border: `1px solid ${border}`,
            color: text,
          }}
        >
          <span
            className="mt-0.5 flex h-8 min-w-8 items-center justify-center rounded-full text-xs font-black text-white"
            style={{ backgroundImage: GRADIENTS.pink, fontFamily: F_DISPLAY }}
          >
            {numbered ? String(i + 1).padStart(2, "0") : "•"}
          </span>
          <span className="text-base leading-relaxed sm:text-lg">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Prose({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mx-auto max-w-3xl text-base leading-relaxed sm:text-lg ${className}`}
      style={{ color: light ? "rgba(255,247,236,0.85)" : "rgba(43,15,31,0.82)" }}
    >
      {children}
    </p>
  );
}

function Sub({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mx-auto max-w-3xl text-xl font-semibold leading-snug sm:text-2xl ${className}`}
      style={{
        fontFamily: F_HEADING,
        fontStyle: "italic",
        color: light ? BRAND.glow : BRAND.violetDeep,
      }}
    >
      {children}
    </p>
  );
}

const TESTIMONIALS = [
  {
    name: "Ana Paula",
    city: "Goiânia (GO)",
    text: `Eu sempre achei que o problema era que eu me envolvia com homens errados. Era o que todo mundo dizia. Mas no fundo eu sabia que tinha alguma coisa em mim… porque a história sempre se repetia. Eu começava bem, me entregava, fazia dar certo… e aos poucos ia me apagando. Quando percebia, estava aceitando coisas que nunca imaginei aceitar. Esse curso foi a primeira vez que eu entendi que não era só eles. Era como minha autoestima tinha lacunas que eu tentava preencher no relacionamento. E isso foi duro de ver… mas foi o que funcionou. Hoje eu ainda estou no processo, mas uma coisa mudou: eu não me abandono mais como antes.`,
  },
  {
    name: "Juliana",
    city: "Campinas (SP)",
    text: `Teve um dia que eu li uma mensagem dele e senti um aperto no peito… e pensei: "por que eu continuo aqui?" Mas mesmo assim eu continuei. O Mapa me fez entender uma coisa que ninguém nunca tinha me explicado: eu não ficava porque amava demais… eu ficava porque minha autoestima não estava estruturada por dentro. Hoje é óbvio, mas mudou tudo. Eu comecei a perceber meus padrões enquanto ainda estava vivendo eles. E hoje eu já não vivo eles mais.`,
  },
  {
    name: "Carla",
    city: "Salvador (BA)",
    text: `Eu era aquela pessoa que entendia tudo. Via vídeo, lia, conversava com amigas… sabia exatamente o que estava errado. Mas na hora de agir, eu travava. Isso me dava uma sensação horrível de fraqueza. Quando vi o João Rafael, achei que seria mais do mesmo. Mas não foi. Ele não tenta te convencer de nada… ele vai mostrando, e quando você vê, você está enxergando diferente. Não é motivação, é estrutura mesmo.`,
  },
  {
    name: "Renata",
    city: "Curitiba (PR)",
    text: `Eu não me achava uma pessoa insegura. Eu trabalho, resolvo minha vida, sou independente… mas em relacionamento eu virava outra pessoa. Aceitava migalhas. Esperava mensagem. Me adaptava. Foi muito estranho perceber que isso não era "falta de amor próprio", como todo mundo falava. Eram núcleos da minha autoestima que estavam fragilizados, e eu nunca tinha ouvido isso antes. Depois disso, começou a resolver. Pela primeira vez.`,
  },
  {
    name: "Mariana",
    city: "Belo Horizonte (MG)",
    text: `O que mais me marcou foi quando eu percebi que eu sempre estava tentando "merecer" ser amada. Eu nunca tinha colocado isso em palavras. Eu fazia tudo certo, me doava, tentava ser leve… mas no fundo sempre vinha aquela sensação de que não me preenchia. Hoje isso não aparece mais. Graças ao João Rafael e ao Mapa da Autoestima.`,
  },
  {
    name: "Fernanda",
    city: "Porto Alegre (RS)",
    text: `Eu cheguei no curso achando que ia aprender a "lidar melhor com relacionamento". Mas na verdade eu entendi por que eu sempre acabava nos mesmos. Foi meio doído, porque eu tinha várias ilusões… mas ao mesmo tempo me deu uma paz estranha. Porque eu vi que não era azar. Não é dedo podre. É o ciclo. E eu consegui sair dele!`,
  },
];

const FAQ = [
  {
    q: "Isso é terapia?",
    a: "Não. É um curso estruturado para ajudar você a entender e reorganizar sua autoestima.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não. O conteúdo é acessível, mesmo para quem nunca viu o tema.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias para testar sem risco.",
  },
  {
    q: "Por que o investimento é R$ 997?",
    a: "Porque o Mapa da Autoestima não é um conteúdo avulso de motivação. É um processo estruturado de reconstrução interna, com aulas profundas, protocolos, podcasts guiados, suporte e acesso por um ano. O valor reflete a profundidade do método e a transformação que ele se propõe a conduzir.",
  },
  {
    q: "E se eu pagar e perceber que não é para mim?",
    a: "Você tem 7 dias de garantia incondicional. Acesse o conteúdo, assista às primeiras aulas e sinta se o método faz sentido para você. Se não fizer, basta pedir o reembolso dentro do prazo. Sem justificativa. Sem constrangimento.",
  },
  {
    q: "Eu já fiz terapia, cursos e acompanho conteúdos sobre autoestima. O que tem de diferente aqui?",
    a: "O Mapa da Autoestima não trabalha apenas com entendimento racional. Ele organiza a autoestima em 7 núcleos emocionais e mostra como as lacunas nesses núcleos alimentam o Ciclo do Não Merecimento. A proposta não é só explicar seu padrão, mas ajudar você a reconstruir a verdadeira estrutura interna que sustenta novas escolhas.",
  },
];

function SalesPage() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: BRAND.cream,
        color: BRAND.ink,
        fontFamily: F_BODY,
      }}
    >
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden px-6 pt-24 pb-28 sm:pt-32 sm:pb-36"
        style={{ backgroundImage: GRADIENTS.wine }}
      >
        <Bloom className="left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 opacity-40" />
        <Bloom className="right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 opacity-30" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff7c2 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <h1
            className="text-3xl font-black leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ fontFamily: F_DISPLAY }}
          >
            Você vive presa no{" "}
            <br />
            <span style={{ color: BRAND.lime }}>CICLO DO NÃO <br /> MERECIMENTO</span>
          </h1>
          <p
            className="mx-auto mt-8 max-w-2xl text-xl leading-snug text-white/95 sm:text-2xl"
            style={{ fontFamily: F_HEADING, fontStyle: "italic" }}
          >
            se doando, se adaptando, tentando ser reconhecida… mas ainda se sentindo insuficiente.
          </p>
          <div
            className="mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-white/20 bg-black/30 backdrop-blur-sm"
          >
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">
                VSL
              </p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Existe um padrão invisível que faz você acreditar que precisa merecer tudo o que
            recebe, inclusive o próprio valor. Esse ciclo tem causa. Tem lógica. E pode ser
            quebrado.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
            <CTA>Quero parar de me sentir insuficiente nos meus relacionamentos!</CTA>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VIVE HOJE */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundColor: BRAND.cream }}
      >
        <Bloom className="-left-32 top-20 h-[400px] w-[400px] opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="A realidade que você conhece">
            O que você vive hoje:
          </SectionTitle>
          <div className="mx-auto mt-10 space-y-5">
            <Prose>
              Você tenta ser você mesma, e tenta manter a chama acesa, se esforça, se dedica…
            </Prose>
            <Prose>
              Mas, de alguma forma, você se vê repetindo os mesmos padrões emocionais. Você
              quer relações que te representem. Quer leveza. Quer segurança interna.
            </Prose>
          </div>
          <div className="mt-12">
            <Sub className="text-center">Mas acaba:</Sub>
          </div>
          <div className="mt-10">
            <Bullets
              numbered
              items={[
                "Se adaptando demais",
                "Flexibilizando os próprios limites",
                "Sofrendo com relacionamentos tóxicos",
                "Se silenciando para não perder alguém",
                "Carregando culpas que nunca foram suas",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ORIGEM DO CICLO */}
      <section
        className="relative px-6 py-24 text-white sm:py-32"
        style={{ backgroundImage: GRADIENTS.violet }}
      >
        <Bloom className="right-1/4 top-10 h-[400px] w-[400px] opacity-30" />
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="Ninguém te disse isso" light>
            A origem do ciclo
          </SectionTitle>
          <div className="mt-10 space-y-5">
            <Prose light>
              Lá na infância, sem perceber, aprendemos que o amor vem como recompensa:
            </Prose>
          </div>
          <div className="mt-8">
            <Bullets
              variant="wine"
              items={["Boas notas", "Bom comportamento", "Obediência", "Não dar trabalho"]}
            />
          </div>
          <div className="mt-12 text-center">
            <Sub light>A criança aprende rápido:</Sub>
            <p
              className="mx-auto mt-6 max-w-2xl text-2xl font-bold leading-snug sm:text-3xl"
              style={{ color: BRAND.glow, fontFamily: F_DISPLAY }}
            >
              👉 "Eu só sou amada quando correspondo."
            </p>
            <Prose light className="mt-8">
              E esse padrão emocional — que nasceu para nos proteger — acaba se tornando a{" "}
              <strong style={{ color: "#fff" }}>Programação Afetiva da Autoestima</strong>.
              Você não mede seu valor pelo que você é. Você mede pelo quanto consegue agradar.
            </Prose>
          </div>

          <div className="mt-20">
            <SectionTitle light>E é assim que nasce o Ciclo do Não Merecimento</SectionTitle>
            <Prose light className="mt-8">
              Com o tempo, partes essenciais da sua autoestima deixam de se estruturar como
              deveriam. Sua segurança interna, sua identidade, seu autovalor, sua autonomia
              emocional, sua autoproteção, sua reconexão interior e sua autodireção ficam
              marcadas por lacunas emocionais. E quando esses núcleos ficam fragilizados, você
              começa a buscar no relacionamento aquilo que deveria estar sendo sustentado
              dentro de você.
            </Prose>
          </div>
        </div>
      </section>

      {/* COMO ESSE CICLO TE PRENDE */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundColor: BRAND.lavender }}
      >
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="O mecanismo interno">
            Como esse ciclo te prende?
          </SectionTitle>
          <div className="mt-10 space-y-5">
            <Prose>
              Quanto mais seus núcleos internos estão fragilizados, mais você tenta se
              preencher no outro. Quanto mais você tenta se preencher no outro, mais você se
              perde de si mesma. E quanto menos valor interno sente, menos acredita merecer.
            </Prose>
            <Prose>
              Esse é o mecanismo emocional que mantém o ciclo vivo. Não porque você escolhe
              isso — mas porque essa estrutura se retroalimenta dentro de você e passa a
              definir silenciosamente:
            </Prose>
          </div>
          <div className="mt-10">
            <Bullets
              numbered
              variant="lavender"
              items={[
                "Quem você atrai",
                "Como você é tratada",
                "O que você aceita",
                "Que tipo de amor acredita merecer",
              ]}
            />
          </div>
        </div>
      </section>

      {/* O QUE QUASE NINGUÉM TE CONTA */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="A verdade estrutural">
            O que quase ninguém te conta
          </SectionTitle>
          <Prose className="mt-10">
            Você não repete padrões porque quer. Você repete padrões porque não tem estrutura
            interna suficiente para sustentar escolhas diferentes.
          </Prose>
          <Sub className="mt-12 text-center">É por isso que:</Sub>
          <div className="mt-10">
            <Bullets
              items={[
                "Você entende tudo racionalmente… mas não muda;",
                "Você promete para si mesma… e volta atrás;",
                'Você sente que "não é suficiente"… mesmo se doando tanto;',
                'Você vive na corda bamba entre "eu não quero perder" e "eu não quero me perder".',
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-2xl space-y-4 text-center">
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundImage: GRADIENTS.pink }}
            >
              <p className="text-lg font-bold sm:text-xl" style={{ fontFamily: F_DISPLAY }}>
                👉 Sem Autoestima Estruturada, nada se sustenta.
              </p>
            </div>
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundImage: GRADIENTS.violet }}
            >
              <p className="text-lg font-bold sm:text-xl" style={{ fontFamily: F_DISPLAY }}>
                👉 Com Autoestima Estruturada, tudo muda.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <CTA>Quero parar de aceitar menos do que eu mereço</CTA>
          </div>
        </div>
      </section>

      {/* A TRANSFORMAÇÃO */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundImage: GRADIENTS.sunset }}
      >
        <Bloom className="left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 opacity-50" />
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="A saída que ninguém mostra">A transformação</SectionTitle>
          <Sub className="mt-10 text-center">A solução não está em:</Sub>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "ser menos intensa",
              "fazer joguinhos emocionais",
              "engolir mais o que sente",
              "tentar pensar positivo",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-2xl bg-white/80 p-5 backdrop-blur-sm"
                style={{ border: `1px solid ${BRAND.raspberry}20` }}
              >
                <span className="text-xl">❌</span>
                <span className="text-base sm:text-lg" style={{ color: BRAND.ink }}>
                  {t}
                </span>
              </div>
            ))}
          </div>
          <Prose className="mt-12">
            Nada disso reorganiza a raiz do problema. A transformação acontece quando sua
            autoestima passa a nascer de dentro — não do olhar de outras pessoas.
          </Prose>
          <Sub className="mt-12 text-center">Quando isso acontece, algo profundo desperta:</Sub>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Sua voz ecoa.",
              "Sua segurança se ergue.",
              "Sua luz própria resplandece.",
            ].map((t, i) => (
              <div
                key={t}
                className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_30px_-15px_rgba(197,55,113,0.35)]"
                style={{ border: `1px solid ${BRAND.lavender}` }}
              >
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundImage: GRADIENTS.pink, fontFamily: F_DISPLAY }}
                >
                  <span className="text-base font-black">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="text-lg font-bold sm:text-xl"
                  style={{ color: BRAND.raspberry, fontFamily: F_DISPLAY }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
          <Prose className="mt-12 text-center">
            E é aqui que a mudança verdadeira acontece: 👉 Você sai do{" "}
            <strong>Ciclo do Não Merecimento</strong> e entra no{" "}
            <strong>Ciclo da Autodeterminação</strong>.
          </Prose>

          <div className="mt-20">
            <SectionTitle>O ciclo onde:</SectionTitle>
            <ul className="mx-auto mt-10 grid max-w-2xl gap-3">
              {[
                "suas escolhas representam quem você é",
                "sua vida deixa de ser reação e vira intenção",
                "você decide com clareza, não com medo",
                "o amor deixa de ser luta e vira consequência",
                "você não se abandona mais para ser amada",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-4 rounded-2xl bg-white/85 p-5 backdrop-blur-sm"
                  style={{ border: `1px solid ${BRAND.pink}55` }}
                >
                  <span
                    className="mt-0.5 text-lg font-black"
                    style={{ color: BRAND.raspberry }}
                  >
                    ✓
                  </span>
                  <span className="text-base sm:text-lg">{t}</span>
                </li>
              ))}
            </ul>
            <Prose className="mt-10 text-center">
              Esse é o <strong>destino emocional</strong> que você sempre buscou — mas{" "}
              <strong>nunca soube nomear</strong>.
            </Prose>
          </div>
        </div>
      </section>

      {/* O MÉTODO */}
      <section
        className="relative px-6 py-24 text-white sm:py-32"
        style={{ backgroundImage: GRADIENTS.wine }}
      >
        <Bloom className="right-0 top-0 h-[500px] w-[500px] translate-x-1/3 opacity-30" />
        <div className="relative mx-auto max-w-4xl">
          <SectionTitle eyebrow="Como você chega lá" light>
            O método
          </SectionTitle>
          <Prose light className="mt-10">
            Foi por isso que eu criei o <strong style={{ color: BRAND.glow }}>Mapa da Autoestima</strong>.
            Um processo profundo e prático para estruturar sua autoestima por dentro e
            conduzir você, passo a passo, do Ciclo do Não Merecimento ao Ciclo da
            Autodeterminação.
          </Prose>
          <Sub light className="mt-10 text-center">
            Ele se organiza nos 7 Núcleos da Autoestima Feminina, construídos em 3 fases terapêuticas:
          </Sub>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Fase 01",
                title: "Voltar para Si",
                body:
                  "Para recuperar seu centro psicológico, reconstruir sua relação consigo mesma e fortalecer as bases da sua autoestima.",
                nuc: "Segurança Interna, Identidade e Autovalor.",
              },
              {
                phase: "Fase 02",
                title: "Libertar-se do Ciclo",
                body:
                  "Para romper os padrões emocionais que alimentam a dependência afetiva, o Ciclo do Não Merecimento e os vínculos que ferem a sua autoestima.",
                nuc: "Autonomia Emocional e Autoproteção Afetiva.",
              },
              {
                phase: "Fase 03",
                title: "Construir a Própria Vida",
                body:
                  "Para se reconectar com sua essência, seus valores e aquilo que realmente faz sentido para você, transformando reações emocionais em escolhas conscientes.",
                nuc: "Reconexão Interior e Autodireção.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="relative overflow-hidden rounded-3xl p-7 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255,247,236,0.08)",
                  border: "1px solid rgba(255,247,194,0.22)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: BRAND.lime }}
                >
                  {f.phase}
                </p>
                <h3
                  className="mt-2 text-2xl font-black"
                  style={{ fontFamily: F_DISPLAY, color: "#fff" }}
                >
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/85">{f.body}</p>
                <p
                  className="mt-5 text-sm font-semibold"
                  style={{ color: BRAND.glow, fontFamily: F_HEADING, fontStyle: "italic" }}
                >
                  Núcleos: <span className="not-italic">{f.nuc}</span>
                </p>
              </div>
            ))}
          </div>
          <Prose light className="mt-12 text-center">
            Quando esses sete núcleos se estruturam, sua vida emocional deixa de ser
            sobrevivência e passa a ser escolha.
          </Prose>
          <div className="mt-12 flex justify-center">
            <CTA variant="pink">Hoje vou parar de me abandonar para ser amada!</CTA>
          </div>
        </div>
      </section>

      {/* POR QUE NADA FUNCIONOU */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="Se você tentou de tudo">
            Por que nada funcionou até agora?
          </SectionTitle>
          <Sub className="mt-10 text-center">Porque você tentou:</Sub>
          <div className="mt-8">
            <Bullets
              items={[
                "Mudar comportamento",
                "Controlar emoções",
                "Entender racionalmente seus padrões",
              ]}
            />
          </div>
          <div className="mt-12 space-y-5">
            <Prose>
              Mas não mudou a estrutura interna que sustenta tudo isso. Por isso você
              melhora… e depois volta. Por isso você diz "agora vai" e depois recua.
            </Prose>
            <p
              className="mx-auto max-w-2xl text-center text-xl font-black sm:text-2xl"
              style={{ color: BRAND.raspberry, fontFamily: F_DISPLAY }}
            >
              Não é falta de esforço. É falta de Autoestima Estruturada.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundImage: GRADIENTS.cream }}
      >
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle>Para quem é o Mapa da Autoestima</SectionTitle>
          <div className="mt-12">
            <Bullets
              items={[
                "Para quem se abandona para não perder",
                "Para quem aceita menos do que merece",
                'Para quem vive insegura mesmo sabendo que "não deveria"',
                "Para quem se adapta demais",
                "Para quem sente que está sempre devendo emocionalmente",
                "Para quem quer reconstruir a própria história afetiva por dentro",
              ]}
            />
          </div>
          <Prose className="mt-12 text-center">
            Este curso não é para quem quer fórmulas mágicas. É para quem está cansada de
            carregar dores antigas e quer, de fato, sair do ciclo onde vive presa.
          </Prose>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="relative mx-auto max-w-4xl">
          <SectionTitle eyebrow="Sua entrega completa">O que você recebe</SectionTitle>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              "Aulas profundas e diretas (aprox. 15 min cada)",
              "Linguagem clara e acessível",
              "Várias trilhas, para você trabalhar todos os aspectos da autoestima",
              "Inovação e atualização constante",
              "7 áudios de consolidação emocional",
              "Acesso por 1 ano",
              "Garantia incondicional de 7 dias",
            ].map((t) => (
              <li
                key={t}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_8px_30px_-15px_rgba(197,55,113,0.25)] transition hover:-translate-y-1"
                style={{ border: `1px solid ${BRAND.lavender}` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
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
                  <p
                    className="text-base font-semibold leading-snug sm:text-lg"
                    style={{ color: BRAND.wine, fontFamily: F_DISPLAY }}
                  >
                    {t}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Prose className="mt-12 text-center">
            Tudo pensado para transformar — não sobrecarregar.
          </Prose>
          <div className="mt-12 flex justify-center">
            <CTA>Quero quebrar esse padrão de uma vez</CTA>
          </div>
        </div>
      </section>

      {/* DUAS COLUNAS: DOR + OFERTA */}
      <section
        className="relative px-6 py-24 text-white sm:py-32"
        style={{ backgroundImage: GRADIENTS.violet }}
      >
        <Bloom className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-25" />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-14">
            {/* ESQUERDA — Dor / Conscientização */}
            <div>
              <p
                className="mb-4 text-xs font-bold uppercase tracking-[0.35em]"
                style={{ color: BRAND.glow }}
              >
                A escolha é sua
              </p>
              <h2
                className="text-3xl font-black leading-tight sm:text-4xl"
                style={{ fontFamily: F_DISPLAY }}
              >
                Você pode continuar vivendo esse ciclo… ou pode interromper isso agora.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                Porque a verdade é que, enquanto nada muda dentro de você… você pode até
                mudar de pessoa, mas o <strong>final emocional continuará sendo o mesmo</strong>.
                Você continua:
              </p>
              <ul className="mt-6 space-y-3">
                {["se adaptando", "se diminuindo", 'e se perguntando, no silêncio… "por que isso sempre acontece comigo?"'].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-3 text-white/90">
                      <span style={{ color: BRAND.lime }}>—</span>
                      <span className="text-base sm:text-lg">{t}</span>
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                E não é falta de força. Não é falta de consciência.{" "}
                <strong>É a estrutura interna que ainda não foi reorganizada</strong>.
              </p>
              <p
                className="mt-8 text-xl font-semibold italic leading-snug sm:text-2xl"
                style={{ color: BRAND.glow, fontFamily: F_HEADING }}
              >
                E você pode começar essa estruturação agora. Não daqui a alguns meses. Não
                quando "se sentir pronta". Agora.
              </p>
            </div>

            {/* DIREITA — Oferta */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
              style={{
                backgroundColor: "rgba(252,245,235,0.08)",
                border: "1px solid rgba(255,247,194,0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Bloom className="right-0 top-0 h-64 w-64 opacity-40" />
              <div className="relative">
                <p
                  className="text-lg font-semibold line-through decoration-2"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecorationColor: `${BRAND.lime}b3`,
                    fontFamily: F_HEADING,
                    fontStyle: "italic",
                  }}
                >
                  De R$ 1.497,00
                </p>
                <h3
                  className="mt-3 text-4xl font-black leading-tight sm:text-5xl"
                  style={{ fontFamily: F_DISPLAY, color: "#fff" }}
                >
                  por <span style={{ color: BRAND.lime }}>R$ 997,00</span>
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/80">
                  por tempo limitado
                </p>

                <p className="mt-8 text-base leading-relaxed text-white/90 sm:text-lg">
                  Um investimento na reconstrução da sua estrutura interna — contra o preço
                  emocional que você já pagou até aqui tentando se adaptar, se diminuir e se
                  perder por alguém.
                </p>

                <div className="mt-8">
                  <CTA>👉 Eu não aguento mais me perder por alguém — quero sair disso agora</CTA>
                </div>

                <div
                  className="mt-10 rounded-2xl p-6"
                  style={{
                    backgroundColor: "rgba(255,247,194,0.1)",
                    border: `1px solid ${BRAND.lime}55`,
                  }}
                >
                  <p
                    className="text-lg font-bold sm:text-xl"
                    style={{ color: BRAND.glow, fontFamily: F_DISPLAY }}
                  >
                    E é de graça por 7 dias.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                    Você pode ver as aulas, sentir o processo e entender se isso realmente
                    faz sentido para você. E se não fizer, é simples: você pede o reembolso.
                    Sem justificativa. Sem constrangimento.{" "}
                    <strong className="text-white">
                      O risco não está em entrar. O risco está em continuar exatamente como
                      está
                    </strong>
                    .
                  </p>
                </div>

                <p className="mt-8 text-base italic leading-relaxed text-white/90 sm:text-lg">
                  Em algum momento, você vai precisar escolher:{" "}
                  <em>
                    continuar se adaptando para não perder alguém… ou parar de se perder para
                    continuar
                  </em>
                  .
                </p>

                <p
                  className="mt-8 text-lg font-semibold italic sm:text-xl"
                  style={{ color: BRAND.glow, fontFamily: F_HEADING }}
                >
                  Se esse momento chegou para você…
                </p>
                <div className="mt-6">
                  <CTA variant="pink">👉 Começar minha reconstrução interna</CTA>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <Bloom className="right-0 top-20 h-[400px] w-[400px] opacity-40" />
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle eyebrow="Histórias reais de transformação">Depoimentos</SectionTitle>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_10px_40px_-20px_rgba(197,55,113,0.3)] transition hover:-translate-y-1"
                style={{ border: `1px solid ${BRAND.lavender}` }}
              >
                <span
                  aria-hidden
                  className="absolute -right-4 -top-6 text-[110px] font-black leading-none opacity-15"
                  style={{ color: BRAND.pink, fontFamily: F_HEADING }}
                >
                  “
                </span>
                <p
                  className="relative text-base italic leading-relaxed sm:text-lg"
                  style={{ color: "rgba(43,15,31,0.85)", fontFamily: F_HEADING }}
                >
                  {t.text}
                </p>
                <footer className="relative mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                    style={{ backgroundImage: GRADIENTS.pink, fontFamily: F_DISPLAY }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold sm:text-base"
                      style={{ color: BRAND.raspberry, fontFamily: F_DISPLAY }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-500 sm:text-sm">{t.city}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section
        className="relative px-6 py-24 sm:py-28"
        style={{ backgroundImage: GRADIENTS.sunset }}
      >
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full text-white shadow-[0_20px_50px_-15px_rgba(197,55,113,0.6)]"
            style={{ backgroundImage: GRADIENTS.pink }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <SectionTitle>Garantia</SectionTitle>
          <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left">
            {[
              "Você tem 7 dias de garantia incondicional.",
              "Acesse tudo, sinta o método, veja se é para você.",
              "Se não fizer sentido, basta pedir o reembolso.",
              "Sem explicações. Sem constrangimento.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span
                  className="mt-1 text-lg font-black"
                  style={{ color: BRAND.raspberry }}
                >
                  ✓
                </span>
                <span className="text-base sm:text-lg" style={{ color: BRAND.ink }}>
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MOMENTO DA ESCOLHA */}
      <section
        className="relative px-6 py-24 text-white sm:py-32"
        style={{ backgroundImage: GRADIENTS.wine }}
      >
        <Bloom className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionTitle eyebrow="É agora" light>
            Momento em que você escolhe sua vida
          </SectionTitle>
          <Prose light className="mt-10">
            Se você sente que carrega uma história que nunca se sustenta… se vive se
            abandonando para ser amada… se repete padrões que não refletem quem você é…
          </Prose>
          <Sub light className="mt-8">
            Então talvez seja hora de fazer algo diferente:
          </Sub>
          <div
            className="mx-auto mt-10 max-w-2xl rounded-2xl p-6"
            style={{
              backgroundColor: "rgba(255,247,194,0.1)",
              border: `1px solid ${BRAND.lime}44`,
            }}
          >
            <p
              className="text-lg font-bold leading-snug sm:text-xl"
              style={{ color: BRAND.glow, fontFamily: F_DISPLAY }}
            >
              👉 Sair do Ciclo do Não Merecimento e entrar, finalmente, no Ciclo da
              Autodeterminação.
            </p>
          </div>
          <Prose light className="mt-10">
            Clique abaixo e comece agora sua reconstrução interna — com leveza, clareza e
            estrutura.
          </Prose>
          <div className="mt-12 flex justify-center">
            <CTA variant="pink">Quero estruturar minha autoestima e mudar minha vida emocional</CTA>
          </div>
        </div>
      </section>

      {/* SOBRE JOÃO RAFAEL */}
      <section className="relative px-6 py-24 sm:py-32" style={{ backgroundColor: BRAND.cream }}>
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="Quem conduz o método">Sobre João Rafael</SectionTitle>
          <Prose className="mt-10">
            João Rafael é terapeuta integrativo e fundador do Instituto Nacional de Terapias
            Integrativas. Ao longo de anos, acompanhou de perto dezenas de pessoas que
            funcionavam bem por fora, mas se sentiam inseguras, cobradas e desconectadas por
            dentro. Seu trabalho une psicologia, espiritualidade prática e respeito pelo
            ritmo emocional de cada pessoa — sem julgamentos e sem fórmulas mágicas.
          </Prose>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundColor: BRAND.lavender }}
      >
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle eyebrow="Tire suas dúvidas">Perguntas frequentes</SectionTitle>
          <div className="mt-12 space-y-4">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group overflow-hidden rounded-2xl bg-white p-6 shadow-[0_6px_20px_-10px_rgba(197,55,113,0.25)]"
                style={{ border: `1px solid ${BRAND.pink}44` }}
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold sm:text-lg"
                  style={{ color: BRAND.wine, fontFamily: F_DISPLAY }}
                >
                  <span>{f.q}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition group-open:rotate-45"
                    style={{ backgroundImage: GRADIENTS.pink }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p
                  className="mt-4 text-sm leading-relaxed sm:text-base"
                  style={{ color: "rgba(43,15,31,0.8)" }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CTA variant="violet" href={WHATSAPP_URL}>
              📲 Ficou com dúvida? Clique aqui e fale pelo WhatsApp
            </CTA>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ backgroundImage: GRADIENTS.cream }}
      >
        <Bloom className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Prose className="text-lg sm:text-xl">
            Se você sente que algo dentro de você <strong>nunca se sustenta</strong>, se vive
            se <strong>cobrando</strong> e se sentindo insuficiente, talvez esteja na hora de
            parar de se <strong>culpar</strong> e <strong>começar</strong> a se compreender.
          </Prose>
          <div
            className="mx-auto mt-10 max-w-2xl rounded-2xl p-6 text-white"
            style={{ backgroundImage: GRADIENTS.pink }}
          >
            <p className="text-lg font-bold sm:text-xl" style={{ fontFamily: F_DISPLAY }}>
              👉 O Mapa da Autoestima é o primeiro passo dessa mudança.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <CTA>Quero estruturar minha autoestima e ver meus relacionamentos florescerem!</CTA>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        className="relative px-6 py-14 text-center text-white"
        style={{ backgroundColor: BRAND.wine }}
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
            className="text-base tracking-wide"
            style={{ fontFamily: F_HEADING, fontStyle: "italic", color: BRAND.glow }}
          >
            Mapa da Autoestima
          </p>
          <p className="mt-2 text-xs text-white/70">
            © {new Date().getFullYear()} Instituto Nacional de Terapias Integrativas — Todos
            os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}