import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X, Key, ShieldCheck, Sparkles, Heart, BookOpen, Headphones, Compass, Flame } from "lucide-react";
import womanSilhouette from "@/assets/woman-silhouette.jpg";
import authorPortraitAsset from "@/assets/author-portrait.png.asset.json";
const authorPortrait = authorPortraitAsset.url;
import protocoloPraticoAsset from "@/assets/codigo-do-desapego-protocolo-pratico.png.asset.json";
import protocoloMadrugadaAsset from "@/assets/codigo-do-desapego-protocolo-madrugada.png.asset.json";
import etapasProcessoAsset from "@/assets/codigo-do-desapego-etapas-processo.png.asset.json";
import libertacaoCapaAsset from "@/assets/codigo-do-desapego-libertacao-7-dias-capa.png.asset.json";
import libertacaoMapaAsset from "@/assets/codigo-do-desapego-libertacao-7-dias-mapa.png.asset.json";
import recuperacaoEstadoCapaAsset from "@/assets/codigo-do-desapego-recuperacao-estado-capa.png.asset.json";
import depoimento1Asset from "@/assets/cdd-depoimento-1.webp.asset.json";
import depoimento2Asset from "@/assets/cdd-depoimento-2.webp.asset.json";
import depoimento3Asset from "@/assets/cdd-depoimento-3.webp.asset.json";
import depoimento4Asset from "@/assets/cdd-depoimento-4.webp.asset.json";
import depoimento5Asset from "@/assets/cdd-depoimento-5.webp.asset.json";
import depoimento6Asset from "@/assets/cdd-depoimento-6.webp.asset.json";
import depoimento7Asset from "@/assets/cdd-depoimento-7.webp.asset.json";
import depoimento8Asset from "@/assets/cdd-depoimento-8.webp.asset.json";
import depoimento9Asset from "@/assets/cdd-depoimento-9.webp.asset.json";
import depoimento10Asset from "@/assets/cdd-depoimento-10.webp.asset.json";

export const Route = createFileRoute("/cdd-pv")({
  head: () => ({
    meta: [
      { title: "Código do Desapego — Esqueça seu ex de verdade" },
      {
        name: "description",
        content:
          "Um protocolo prático para interromper recaídas emocionais, parar de stalkear e recuperar o controle emocional. Por apenas R$ 27,00 com 7 dias de garantia.",
      },
      { property: "og:title", content: "Código do Desapego — Esqueça seu ex de verdade" },
      {
        property: "og:description",
        content:
          "Pare de obedecer ao impulso de mandar mensagem, stalkear e procurar sinais. Recupere sua autonomia emocional.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://checkout.ticto.app/OE44217BB";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function VTurbPlayer() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[data-vturb-player="6a7cbea69ce229b9e74427d4"]'
    );
    if (existing) return;

    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/5e971d8f-4dc9-4092-90b8-55044e7b18bc/players/6a7cbea69ce229b9e74427d4/v4/player.js";
    s.async = true;
    s.dataset.vturbPlayer = "6a7cbea69ce229b9e74427d4";
    document.head.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return (
    <vturb-smartplayer
      id="vid-6a7cbea69ce229b9e74427d4"
      style={{ display: "block", margin: "0 auto", width: "100%", height: "100%" }}
    >
      <div
        className="vturb-player-placeholder"
        style={{
          position: "relative",
          width: "100%",
          padding: "56.25% 0 0",
          zIndex: 0,
          backgroundColor: "black",
        }}
      />
    </vturb-smartplayer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-ink font-sans text-[#F1E7D4] antialiased selection:bg-gold/40 selection:text-ink">
      <Hero />
      <Problema />
      <Solucao />
      <Diferencial />
      <Depoimentos />
      <ParaQuem />
      <Entregavel />
      <CTA />
      <Autor />
      <Garantia />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <header className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(201,151,58,0.2), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(26,42,74,0.5), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-16 text-center md:pt-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-coffee/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft">
            <Key className="h-3.5 w-3.5" /> Código do Desapego
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.05] text-[#F4E7CC] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Esqueça seu ex agora, começando pelo que{" "}
            <em className="text-gold">realmente</em> te prende a ele.
          </h1>

          <div className="mx-auto mt-10 w-full max-w-3xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/20 bg-[#0F0A07] shadow-[0_30px_80px_-30px_rgba(201,151,58,0.35)]">
              <VTurbPlayer />
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#E2D5B8]/85 md:text-lg">
            Um protocolo prático para interromper recaídas emocionais, parar de
            stalkear, resistir à vontade de mandar mensagem e recuperar o
            controle emocional — sem depender apenas de tempo, bloqueio ou
            força de vontade.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <GoldButton href={CHECKOUT_URL}>Quero fazer um detox do meu ex</GoldButton>
            <p className="max-w-md text-sm leading-relaxed text-sand/80">
              Por apenas <span className="text-gold-soft font-semibold">R$ 27,00</span>, acesso por 1 ano à
              metodologia que devolve sua segurança emocional — com{" "}
              <span className="text-gold-soft">garantia incondicional de 7 dias</span>.
            </p>
          </div>
        </motion.div>
      </div>
      <Divider />
    </header>
  );
}

/* ───────────────────────── PROBLEMA ───────────────────────── */
function Problema() {
  return (
    <Section bg="coffee">
      <SectionEyebrow>O que está acontecendo com você</SectionEyebrow>
      <SectionTitle>
        Você sabe que precisa seguir em frente… mas alguma coisa dentro de você ainda <em className="text-gold">procura por ele</em>.
      </SectionTitle>

      <Prose>
        <p>Racionalmente, você já entendeu que acabou.</p>
        <p>
          Você sabia que essa relação te machucava, que ele não te entregava o
          mínimo, que você se sentia sozinha, ansiosa, insegura e
          emocionalmente em segundo plano.
        </p>
        <p>Mas, mesmo sabendo disso, você ainda pega o celular sem perceber.</p>
        <p>
          Olha o perfil dele. Relê conversas antigas. Procura sinais. Interpreta
          stories. Imagina se ele está com outra. Fantasia uma mensagem, uma
          volta, uma explicação, um arrependimento.
        </p>
        <p className="text-gold-soft">E depois se sente pior.</p>
        <p>Não é só saudade.</p>
        <p className="font-display text-2xl italic text-[#F4E7CC] md:text-3xl">
          É a sensação de ter perdido o comando de si mesma.
        </p>
        <p>
          Você sabe o que deveria fazer… mas, quando a dor aperta, uma parte
          sua continua voltando para ele dentro da sua cabeça.
        </p>
        <p>
          E é exatamente por isso que frases como "bloqueia", "ocupa a cabeça",
          "segue sua vida" ou "tenha amor-próprio" não resolvem.
        </p>
        <p>
          Porque o problema não é falta de informação. O problema é que desde a
          sua infância, nos venderam a ideia de que o amor sempre vem de fora,
          que ele é eterno e imutável, e que nós precisamos ser preenchidos por
          alguém. É a famosa história do príncipe encantado que vem salvar uma
          princesa que espera passivamente, e que vivem juntos felizes para
          sempre.
        </p>
        <p>
          Essa ideia que te venderam desde a infância moldou a sua percepção
          do amor, e hoje você apenas projeta esse Relacionamento Disney em
          alguém: o seu ex.
        </p>
        <p>
          O seu emocional associa aquela pessoa a amor, validação,
          pertencimento, segurança e ao futuro que nos ensinaram.
        </p>
        <p>
          Enquanto essa associação continuar ativa, você não sofre apenas pelo
          ex.
        </p>
        <p className="font-display text-2xl italic text-gold-soft md:text-3xl">
          Você sofre pela vida afetiva que acreditava que viveria através dele.
        </p>
      </Prose>
    </Section>
  );
}

/* ───────────────────────── SOLUÇÃO ───────────────────────── */
function Solucao() {
  const fases = [
    {
      n: "01",
      t: "Enxergar",
      d: "A relação como ela realmente era — não como você imaginava ou esperava que fosse.",
    },
    {
      n: "02",
      t: "Separar",
      d: "A pessoa real da pessoa esperada. O homem de carne e osso da expectativa projetada.",
    },
    {
      n: "03",
      t: "Recuperar",
      d: "A segurança emocional que você colocou nas mãos dele de volta para o seu centro.",
    },
  ];

  const beneficios = [
    "Parar de obedecer automaticamente à vontade de mandar mensagem.",
    "Reduzir o impulso de stalkear, procurar sinais e reler conversas.",
    "Enxergar com mais clareza quem ele realmente foi na relação.",
    "Separar o que aconteceu daquilo que você esperava que acontecesse.",
    "Parar de romantizar migalhas, ausências e momentos ambíguos.",
    "Recuperar a sensação de dignidade depois de recaídas emocionais.",
    "Criar um plano prático para atravessar crises de saudade e ansiedade.",
    "Redirecionar a energia emocional que estava presa nele para reconstruir você.",
  ];

  return (
    <Section bg="ink">
      <SectionEyebrow>A solução</SectionEyebrow>
      <SectionTitle>
        O desapego começa quando você separa o homem real da{" "}
        <em className="text-gold">expectativa que projetou nele</em>.
      </SectionTitle>

      <Prose>
        <p>
          O Código do Desapego foi criado para ajudar você a interromper o
          circuito emocional que mantém seu ex no centro da sua mente.
        </p>
        <p>
          Não é um método de joguinho. Não é fingir indiferença. Não é
          transformar amor em raiva. E também não é uma lista de proibições
          que só aumenta sua ansiedade.
        </p>
      </Prose>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {fases.map((f) => (
          <motion.div
            key={f.n}
            {...fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-b from-coffee/60 to-ink p-8"
          >
            <div className="font-display text-5xl text-gold/40">{f.n}</div>
            <h3 className="mt-4 font-display text-2xl text-gold-soft">{f.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/80">{f.d}</p>
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-80" />
          </motion.div>
        ))}
      </div>

      <Prose className="mt-14">
        <p>
          Porque, na verdade, você não está presa ao ex de carne e osso. Você
          está presa ao que ele <em className="text-gold-soft">representava</em>{" "}
          dentro de você.
        </p>
        <p>
          À promessa de amor. À esperança de ser escolhida. À fantasia de
          futuro. À sensação de que, se ele voltasse, sua dor finalmente
          passaria.
        </p>
        <p>O Código do Desapego existe para desmontar essa confusão.</p>
        <p>
          Para fazer a realidade falar mais alto que a projeção afetiva Disney.
        </p>
        <p>
          E para ajudar você a atravessar essa fase sem transformar saudade em
          recaída, carência em humilhação e dor em auto abandono.
        </p>
      </Prose>

      <div className="mt-16">
        <h3 className="font-display text-2xl text-gold-soft md:text-3xl">Benefícios concretos</h3>
        <p className="mt-2 text-sand/70">O Código do Desapego serve para:</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {beneficios.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-xl border border-bronze/20 bg-coffee/30 p-4 text-sm leading-relaxed text-[#E8DCC2]"
            >
              <Key className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ───────────────────────── DIFERENCIAL ───────────────────────── */
function Diferencial() {
  const pares = [
    ["a relação real", "da relação imaginada"],
    ["o ex real", "do ex projetado inconscientemente"],
    ["o amor real", "do sequestro da identidade afetiva"],
    ["a saudade verdadeira", "da abstinência emocional"],
    ["o desejo de voltar", "da necessidade de se sentir segura"],
  ];
  return (
    <Section bg="night">
      <SectionEyebrow>Por que é diferente</SectionEyebrow>
      <SectionTitle>
        O Código não te proíbe de sentir. Ele te ensina a desfazer a{" "}
        <em className="text-gold">projeção</em> que alimenta o impulso.
      </SectionTitle>

      <Prose>
        <p>A maioria dos conselhos sobre término tenta resolver o problema pela superfície.</p>
        <p className="italic text-sand/70">
          "Bloqueia." "Não manda mensagem." "Some." "Faz ele sentir sua falta."
          "Faça mais coisas sozinha." "Pensa nos defeitos dele." "Treine na
          academia." "Foque no trabalho"...
        </p>
        <p>Mas, quando a madrugada chega e a ansiedade sobe, esses conselhos ficam pequenos.</p>
        <p>
          Porque o impulso não nasce da sua razão. Ele nasce de uma associação
          emocional mais profunda.
        </p>
        <p>
          Seu emocional aprendeu a projetar naquela pessoa alívio, validação,
          esperança e segurança. Por isso, tentar esquecer à força geralmente
          falha.
        </p>
        <p>O Código do Desapego segue o outro caminho.</p>
        <p>Ele não começa perguntando: "Como faço para esquecer?"</p>
        <p>Ele pergunta:</p>
      </Prose>

      <motion.blockquote
        {...fadeUp}
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/30 bg-ink/60 p-8 text-center font-display text-2xl italic text-gold-soft md:text-3xl"
      >
        "O que essa pessoa passou a representar dentro de mim?"
      </motion.blockquote>

      <p className="mt-12 text-center text-sand/80">A partir disso, você aprende a separar:</p>
      <ul className="mx-auto mt-6 max-w-2xl space-y-3">
        {pares.map(([a, b]) => (
          <li
            key={a}
            className="flex flex-col gap-1 rounded-lg border-l-2 border-gold/60 bg-coffee/30 px-5 py-3 text-[#E8DCC2] sm:flex-row sm:items-baseline sm:gap-3"
          >
            <span className="font-display text-lg text-gold-soft">{a}</span>
            <span className="text-sand/70">{b}</span>
          </li>
        ))}
      </ul>

      <Prose className="mt-14">
        <p>Esse é o diferencial.</p>
        <p>O Código não te coloca em guerra contra seus sentimentos e lembranças.</p>
        <p>
          Ele te dá um método para{" "}
          <em className="text-gold-soft">entender, interromper e ressignificar</em>{" "}
          o que hoje parece mais forte do que você.
        </p>
      </Prose>
    </Section>
  );
}

/* ───────────────────────── DEPOIMENTOS ───────────────────────── */
function Depoimentos() {
  const depoimentos = [
    { src: depoimento1Asset.url, nome: "Juliana" },
    { src: depoimento2Asset.url, nome: "Patrícia Soares" },
    { src: depoimento3Asset.url, nome: "Renata Carini" },
    { src: depoimento4Asset.url, nome: "Camila" },
    { src: depoimento5Asset.url, nome: "Fernanda Marques" },
    { src: depoimento6Asset.url, nome: "Larissa Lopes" },
    { src: depoimento7Asset.url, nome: "Aline" },
    { src: depoimento8Asset.url, nome: "Vanessa Silva" },
    { src: depoimento9Asset.url, nome: "Tatiane" },
    { src: depoimento10Asset.url, nome: "Bruna Cafarezzi" },
  ];
  const linhaA = [...depoimentos, ...depoimentos];
  const linhaB = [...depoimentos.slice().reverse(), ...depoimentos.slice().reverse()];
  return (
    <Section bg="coffee">
      <SectionEyebrow>Você não está sozinha</SectionEyebrow>
      <SectionTitle>O que mulheres dizem depois do <em className="text-gold">Código do Desapego</em></SectionTitle>

      <Prose>
        <p>
          Relatos reais de mulheres que atravessaram o término e recuperaram
          a clareza emocional com o método.
        </p>
      </Prose>

      <div className="mt-14 space-y-6 marquee-mask">
        <div className="overflow-hidden">
          <div className="marquee-track">
            {linhaA.map((d, i) => (
              <DepoimentoCard key={`a-${i}`} src={d.src} nome={d.nome} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track reverse">
            {linhaB.map((d, i) => (
              <DepoimentoCard key={`b-${i}`} src={d.src} nome={d.nome} />
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-2xl text-center font-display text-xl italic text-gold-soft md:text-2xl">
        O Código foi criado justamente para esse momento: quando você já
        entendeu que precisa seguir, mas ainda não consegue sustentar essa
        decisão por dentro.
      </p>
    </Section>
  );
}

function DepoimentoCard({ src, nome }: { src: string; nome: string }) {
  return (
    <figure className="relative w-[260px] flex-none overflow-hidden rounded-2xl border border-gold/20 bg-ink/40 p-2 shadow-[0_20px_60px_-30px_rgba(201,151,58,0.4)] sm:w-[300px]">
      <img
        src={src}
        alt={`Depoimento de ${nome} sobre o Código do Desapego`}
        loading="lazy"
        className="h-auto w-full rounded-xl"
      />
      <figcaption className="mt-2 px-2 pb-1 text-center text-[0.65rem] uppercase tracking-[0.25em] text-bronze">
        {nome} · Aluna
      </figcaption>
    </figure>
  );
}

/* ───────────────────────── PARA QUEM É ───────────────────────── */
function ParaQuem() {
  const naoEPara = [
    "Você procura joguinhos para fazer seu ex correr atrás.",
    "Você quer fazer alguém voltar.",
    "Você não acredita que foi programada a esperar a valorização de fora.",
    "Você não quer olhar para a realidade da relação.",
    "Você espera uma promessa mágica de apagar sentimentos em minutos.",
    "Você não está disposta a aplicar o passo a passo quando os gatilhos aparecerem.",
    "Você precisa de acompanhamento psicológico individual para um quadro emocional grave.",
  ];
  const ePara = [
    "Você terminou e sente que perdeu o controle emocional.",
    "Você sabe que precisa seguir, mas continua pensando nele.",
    "Você sente vontade de mandar mensagem, stalkear ou procurar sinais.",
    "Você passa madrugadas imaginando se ele já está com outra pessoa.",
    "Você sente vergonha de ainda esperar algo dele.",
    "Você já tentou bloquear, ocupar a cabeça ou focar em você, mas ainda recai.",
    "Você quer um processo prático, direto e aplicável nos momentos de crise.",
    "Você quer parar de transformar saudade em dor.",
  ];
  return (
    <Section bg="ink">
      <SectionEyebrow>Para quem é</SectionEyebrow>
      <SectionTitle>O Código do Desapego é para você?</SectionTitle>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-bronze/20 bg-coffee/40 p-8"
        >
          <h3 className="font-display text-2xl text-sand/80">Não é para você se</h3>
          <ul className="mt-6 space-y-3">
            {naoEPara.map((x) => (
              <li key={x} className="flex gap-3 text-sm leading-relaxed text-sand/70">
                <X className="mt-0.5 h-4 w-4 flex-none text-bronze" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-gold/40 bg-gradient-to-b from-coffee/60 to-ink p-8 shadow-[0_30px_60px_-40px_rgba(201,151,58,0.6)]"
        >
          <h3 className="font-display text-2xl text-gold-soft">É para você se</h3>
          <ul className="mt-6 space-y-3">
            {ePara.map((x) => (
              <li key={x} className="flex gap-3 text-sm leading-relaxed text-[#F1E2C3]">
                <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
        <GoldButton href={CHECKOUT_URL}>O Código do Desapego é para mim!</GoldButton>
      </div>
    </Section>
  );
}

/* ───────────────────────── ENTREGÁVEL ───────────────────────── */
function Entregavel() {
  const itens = [
    {
      icon: BookOpen,
      t: "Masterclass Código do Desapego",
      d: "Uma aula prática para entender por que você não consegue esquecer, o que realmente te prende ao ex e como começar a interromper esse circuito emocional.",
    },
    {
      icon: Compass,
      t: "Protocolo de 5 Passos do Desapego",
      d: "O passo a passo central do método para interromper o impulso, nomear o gatilho, enxergar a realidade, separar a pessoa real da esperada e trocar a recaída por reconstrução.",
    },
    {
      icon: Sparkles,
      t: "Exercícios de realidade e expectativa",
      d: "Ferramentas práticas para separar lembrança, fantasia, projeção e fatos concretos.",
    },
    {
      icon: Heart,
      t: "Ritual de Recuperação Emocional",
      d: "Um guia para usar antes de mandar mensagem, desbloquear, stalkear ou buscar sinais.",
    },
    {
      icon: Headphones,
      t: "Áudio de emergência emocional",
      d: "Um áudio para momentos de ansiedade, saudade intensa e fissura emocional.",
    },
    {
      icon: Flame,
      t: "Protocolo de Libertação Emocional de 7 Dias",
      d: "Um plano simples para atravessar a primeira semana com mais direção, clareza e controle.",
    },
  ];

  const destaques = [
    {
      title: "Protocolo prático central",
      description: "O material principal com os 5 passos para interromper recaídas e recuperar clareza emocional.",
      image: protocoloPraticoAsset.url,
      alt: "Prévia do Protocolo Prático do Código do Desapego com capa escura em dourado",
      size: "large" as const,
    },
    {
      title: "Libertação emocional em 7 dias",
      description: "Uma jornada guiada para atravessar a semana mais sensível com direção e autonomia.",
      image: libertacaoCapaAsset.url,
      alt: "Prévia da capa do Protocolo de Libertação Emocional de 7 Dias",
      size: "small" as const,
    },
    {
      title: "Ritual de recuperação de estado",
      description: "Um recurso rápido para voltar ao seu centro nos momentos de crise.",
      image: recuperacaoEstadoCapaAsset.url,
      alt: "Prévia da capa do Ritual de Recuperação de Estado",
      size: "small" as const,
    },
  ];

  const galeria = [
    {
      title: "Mapa das etapas do processo",
      description: "Visual organizado das etapas que ajudam você a sair do modo automático e voltar para si.",
      image: etapasProcessoAsset.url,
      alt: "Infográfico com as etapas do Ritual de Recuperação de Estado",
    },
    {
      title: "Protocolo da madrugada",
      description: "Checklist e ações curtas para proteger você nos horários mais vulneráveis.",
      image: protocoloMadrugadaAsset.url,
      alt: "Prévia do Protocolo da Madrugada com checklist e ações curtas",
    },
    {
      title: "Mapa dos 7 dias",
      description: "Visão prática do caminho de reconstrução emocional ao longo da primeira semana.",
      image: libertacaoMapaAsset.url,
      alt: "Infográfico dos 7 dias da libertação emocional",
    },
  ];

  return (
    <Section bg="coffee">
      <SectionEyebrow>O que você recebe</SectionEyebrow>
      <SectionTitle>O que você recebe dentro do Código do Desapego</SectionTitle>

      <Prose>
        <p>
          Ao entrar no Código do Desapego, você recebe um kit prático para
          aplicar durante os primeiros dias de maior dor emocional.
        </p>
        <p>
          Não é um curso longo. Não é uma formação. Não é uma sequência de
          aulas teóricas para você assistir e continuar igual.
        </p>
        <p className="font-display text-2xl italic text-gold-soft">
          É um código de aplicação imediata para atravessar recaídas, gatilhos e impulsos.
        </p>
      </Prose>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {destaques.map((item) => (
          <motion.figure
            key={item.title}
            {...fadeUp}
            className={`group overflow-hidden rounded-[1.75rem] border border-gold/20 bg-ink/40 ${
              item.size === "large" ? "lg:row-span-2" : ""
            }`}
          >
            <div className={`relative overflow-hidden ${item.size === "large" ? "aspect-[0.92]" : "aspect-[1.04]"}`}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/14 to-transparent" />
            </div>
            <figcaption className="space-y-2 p-6">
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-bronze">Prévia do material</div>
              <h3 className="font-display text-2xl text-gold-soft">{item.title}</h3>
              <p className="text-sm leading-relaxed text-sand/80">{item.description}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {itens.map((it, i) => (
          <motion.div
            key={it.t}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            className="flex gap-5 rounded-2xl border border-gold/15 bg-ink/40 p-6 transition-colors hover:border-gold/40"
          >
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-gold to-bronze text-ink">
              <it.icon className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-1 font-display text-xl text-gold-soft">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/80">{it.d}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-bronze">
            <span className="h-px w-8 bg-bronze/60" />
            Veja por dentro
          </div>
          <h3 className="font-display text-3xl text-[#F4E7CC] md:text-4xl">
            Materiais visuais pensados para te orientar com clareza nos momentos mais sensíveis.
          </h3>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {galeria.map((item, index) => (
            <motion.figure
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.06 }}
              className="overflow-hidden rounded-2xl border border-gold/15 bg-ink/35"
            >
              <div className="aspect-[0.8] overflow-hidden border-b border-gold/10 bg-ink/50">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-5">
                <h4 className="font-display text-xl text-gold-soft">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-sand/75">{item.description}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,151,58,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32 lg:px-10">
        <motion.h2
          {...fadeUp}
          className="font-display text-3xl font-medium leading-tight text-[#F4E7CC] md:text-5xl"
        >
          Você pode continuar tentando esquecer na força… ou pode começar a{" "}
          <em className="text-gold">desprogramar</em> o que realmente te prende.
        </motion.h2>

        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-[#E2D5B8]/85 md:text-lg">
          <p>O tempo vai passar. Mas tempo sozinho não reorganiza o que continua ativo dentro de você.</p>
          <p>Bloquear pode ajudar. Mas bloqueio sozinho não desativa a esperança.</p>
          <p>
            Ocupar a cabeça pode aliviar por algumas horas. Mas não resolve a
            madrugada, o gatilho, a lembrança, a foto, a vontade de saber se
            ele sente falta.
          </p>
          <p className="text-gold-soft">Por isso, o Código existe.</p>
          <p>
            Para te dar um caminho prático quando a sua razão já entendeu, mas
            o seu emocional ainda não obedece.
          </p>
          <p>
            Por apenas{" "}
            <span className="font-display text-2xl text-gold">R$ 27</span>, você
            pode esquecer todas as relações que sequestraram sua identidade
            emocional, e viver com o controle sobre o seu próprio centro emocional.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <GoldButton href={CHECKOUT_URL} large>
            Quero entrar no Código do Desapego
          </GoldButton>
          <p className="max-w-md text-sm leading-relaxed text-sand/70">
            Condição especial de validação. O acesso está disponível por tempo
            limitado e sofrerá reajuste quando a próxima etapa do projeto for
            liberada. Você tem 7 dias para decidir se é para você, sem risco.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── AUTOR ───────────────────────── */
function Autor() {
  return (
    <Section bg="night">
      <SectionEyebrow>Quem criou</SectionEyebrow>
      <SectionTitle>Quem criou o Código do Desapego</SectionTitle>

      <div className="mt-12 grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gold/20 blur-2xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/30">
            <img
              src={authorPortrait}
              alt="João Rafael, terapeuta e criador do Código do Desapego"
              loading="lazy"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-5 text-base leading-relaxed text-[#E2D5B8]/90 md:text-lg">
          <p>
            O Código do Desapego foi criado por{" "}
            <strong className="text-gold-soft">João Rafael</strong>, terapeuta e
            fundador do Instituto Nacional de Terapias Integrativas (INTI), a
            partir da observação clínica de mulheres que, mesmo conscientes,
            inteligentes e emocionalmente maduras em várias áreas da vida, não
            conseguiam se libertar de vínculos afetivos que já tinham acabado.
          </p>
          <p>
            Em seus estudos de Jung, psicologia do espírito e, por fim, no
            consultório, João percebeu que o problema não era apenas "falta de
            amor-próprio", "apego afetivo" ou "saudade".
          </p>
          <p>
            Na verdade, o que mantinha a mulher presa era uma confusão mais
            profunda entre a pessoa real, a expectativa projetada e a segurança
            emocional que ela acreditava que viveria através daquele vínculo.
          </p>
          <p>
            O Código do Desapego nasceu para traduzir essa percepção em um
            processo simples, prático e aplicável: um protocolo para ajudar
            mulheres a interromper recaídas, recuperar clareza e começar a
            retirar o ex do centro emocional da própria vida.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── GARANTIA ───────────────────────── */
function Garantia() {
  return (
    <Section bg="coffee">
      <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
        <motion.div {...fadeUp} className="mx-auto">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-gold/60 bg-gradient-to-br from-gold/20 to-transparent text-center">
            <div className="absolute inset-3 rounded-full border border-gold/30" />
            <div>
              <ShieldCheck className="mx-auto h-8 w-8 text-gold" />
              <div className="mt-1 font-display text-4xl text-gold-soft">7</div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-bronze">dias de garantia</div>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionEyebrow>Garantia</SectionEyebrow>
          <SectionTitle>Você tem 7 dias para testar sem risco.</SectionTitle>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#E2D5B8]/90">
            <p>
              Ao entrar no Código do Desapego, você tem{" "}
              <strong className="text-gold-soft">7 dias de garantia incondicional</strong>.
            </p>
            <p>
              Isso significa que você pode acessar o conteúdo, assistir à
              masterclass, conhecer e decidir se faz sentido para você.
            </p>
            <p>
              Se sentir que não é o momento, basta solicitar o reembolso dentro
              do prazo de garantia.{" "}
              <span className="text-gold-soft">Sem constrangimento. Sem justificativa. Sem risco.</span>
            </p>
            <p>
              A ideia é simples: você só permanece se sentir que o Código pode
              te ajudar a atravessar essa fase com mais clareza, dignidade e
              controle emocional.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "O Código do Desapego é um curso?",
      a: "Não! É muito mais direto do que um curso convencional. Ele funciona como uma masterclass com foco 100% prático, exercícios e ferramentas de apoio para momentos de crise emocional.",
    },
    {
      q: "Serve para quem terminou há pouco tempo?",
      a: "Sim. O Código foi pensado principalmente para a fase da dor imediata: quando a pessoa ainda está ansiosa, confusa, querendo procurar sinais, stalkear ou mandar mensagem.",
    },
    {
      q: "Serve para quem terminou há meses ou anos?",
      a: "Sim, desde que ainda exista apego emocional, recaída, obsessão mental, idealização ou dificuldade de seguir em frente.",
    },
    {
      q: "Eu preciso ter bloqueado meu ex para funcionar?",
      a: "Não. O Código não depende apenas de bloqueio. Ele te ajuda a entender o impulso por trás da vontade de procurar, mandar mensagem ou buscar sinais.",
    },
    {
      q: "Isso vai me fazer esquecer meu ex imediatamente?",
      a: "O Código não vai apagar a memória ou sentimento de forma mágica. Ele foi criado para ajudar você a interromper o circuito de recaída, reduzir a idealização e recuperar o controle emocional a partir da aplicação dos passos. Em outras palavras, o código não apaga lembranças e experiências, mas ele te faz ressignificar essas emoções e sentimentos, devolvendo para você o seu próprio centro emocional.",
    },
    {
      q: "E se eu ainda amo meu ex?",
      a: "Você não precisa odiar alguém para desapegar. O objetivo não é transformar amor em raiva. O objetivo é ajudar você a enxergar a realidade, separar expectativa do fato e parar de se abandonar por uma relação que te machucou.",
    },
    {
      q: "Esse método substitui terapia?",
      a: "Não. O Código é um material educativo e prático de apoio emocional. Ele não substitui psicoterapia, diagnóstico, acompanhamento médico ou atendimento psicológico individual.",
    },
    {
      q: "Por quanto tempo terei acesso?",
      a: "Você terá acesso por um ano ao conteúdo com todos os bônus e pelo preço de lançamento, se comprar hoje.",
    },
    {
      q: "Tem garantia?",
      a: "Sim! Você tem 7 dias de garantia incondicional para testar o Código sem risco. Se realmente não for para você, basta pedir o reembolso.",
    },
    {
      q: "Qual é o meu próximo passo?",
      a: "Clique no botão abaixo, entre no Código do Desapego e comece hoje a aplicar o protocolo para interromper recaídas emocionais e recuperar o controle sobre si mesma.",
    },
  ];
  return (
    <Section bg="ink">
      <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
      <SectionTitle>Dúvidas frequentes — FAQ</SectionTitle>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-gold/15 bg-coffee/40 px-5"
            >
              <AccordionTrigger className="text-left font-display text-lg text-gold-soft hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#E2D5B8]/85">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={womanSilhouette}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32 lg:px-10">
        <motion.h2
          {...fadeUp}
          className="font-display text-3xl font-medium leading-tight text-[#F4E7CC] md:text-5xl"
        >
          Esse é o preço único das suas madrugadas, da sua{" "}
          <em className="text-gold">paz de espírito</em> e da sua autonomia
          emocional.
        </motion.h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <GoldButton href={CHECKOUT_URL} large>
            Quero entrar no Código do Desapego
          </GoldButton>
          <p className="text-sm text-sand/70">R$ 27,00 · Acesso por 1 ano · 7 dias de garantia</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink py-10 text-center text-xs text-sand/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="font-display text-base tracking-wide text-gold-soft">Código do Desapego</div>
        <p className="mt-2">© {new Date().getFullYear()} João Rafael · INTI. Todos os direitos reservados.</p>
        <p className="mt-1 text-[0.7rem] text-sand/40">
          Este material é educativo e não substitui acompanhamento psicológico ou médico individual.
        </p>
      </div>
    </footer>
  );
}

/* ───────────────────────── PRIMITIVES ───────────────────────── */
function Section({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: "ink" | "coffee" | "night";
}) {
  const bgClass =
    bg === "ink" ? "bg-ink" : bg === "coffee" ? "bg-coffee" : "bg-night";
  return (
    <section className={`relative ${bgClass}`}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">{children}</div>
      <Divider />
    </section>
  );
}

function Divider() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
    />
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-bronze">
      <span className="h-px w-8 bg-bronze/60" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fadeUp}
      className="max-w-4xl font-display text-3xl font-medium leading-[1.1] text-[#F4E7CC] md:text-5xl"
    >
      {children}
    </motion.h2>
  );
}

function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[#E2D5B8]/85 md:text-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

function GoldButton({
  href,
  children,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold font-sans font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_18px_40px_-15px_rgba(201,151,58,0.7)] transition-transform hover:scale-[1.02] active:scale-[0.99] ${
        large ? "px-10 py-5 text-sm md:text-base" : "px-8 py-4 text-xs md:text-sm"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}
