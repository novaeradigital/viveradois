import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logotipo.png.asset.json";
import expert from "@/assets/expert.jpg.asset.json";

import bgSunset from "@/assets/bg-sunset.webp.asset.json";
import bgForWhom from "@/assets/bg-forwhom.webp.asset.json";
import dep1 from "@/assets/depoimentos/depoimento-1.webp.asset.json";
import dep2 from "@/assets/depoimentos/depoimento-2.webp.asset.json";
import dep3 from "@/assets/depoimentos/depoimento-3.webp.asset.json";
import dep4 from "@/assets/depoimentos/depoimento-4.webp.asset.json";
import dep5 from "@/assets/depoimentos/depoimento-5.webp.asset.json";
import dep6 from "@/assets/depoimentos/depoimento-6.webp.asset.json";
import dep7 from "@/assets/depoimentos/depoimento-7.webp.asset.json";
import dep8 from "@/assets/depoimentos/depoimento-8.webp.asset.json";
import dep9 from "@/assets/depoimentos/depoimento-9.webp.asset.json";
import dep10 from "@/assets/depoimentos/depoimento-10.webp.asset.json";
import { Check, X, MessageCircle, Sparkles, Shield, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/viveradois-pv")({
  head: () => ({
    meta: [
      { title: "Viver a Dois — Construindo um Relacionamento Maduro" },
      {
        name: "description",
        content:
          "Jornada guiada para casais reconstruírem comunicação, conexão emocional e propósito comum. Terapia de casal em casa, conduzida passo a passo.",
      },
      { property: "og:title", content: "Viver a Dois — Construindo um Relacionamento Maduro" },
      {
        property: "og:description",
        content:
          "Reconstrua a comunicação, fortaleça a conexão e crie um propósito comum para a vida a dois.",
      },
    ],
  }),
  component: Index,
});

const CTA_URL = "#checkout";

function GoldButton({ children, className = "", href = CTA_URL }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-gold)] ${className}`}
      style={{ background: "var(--gradient-gold)" }}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}

function BgImage({ src, overlay = "from-background/85 via-background/75 to-background/95" }: { src: string; overlay?: string }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} aria-hidden />
    </>
  );
}

function BlurOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold-soft/10 blur-3xl" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Problem />
      <Solution />
      <Different />
      <Testimonials />
      <ForWhom />
      <Modules />
      <FinalCTA />
      <Author />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <BgImage src={bgSunset.url} overlay="from-background/70 via-background/80 to-background" />
      <BlurOrbs />
      <div className="relative mx-auto max-w-5xl px-6 pt-6 pb-24 text-center md:pt-10 md:pb-32">
        <h1 className="mt-8 text-balance text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
          O relacionamento <span className="text-gradient-gold italic">não melhora</span> sozinho.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          Ele melhora quando duas pessoas aprendem a caminhar a mesma direção.
        </p>
        <div className="mx-auto mt-8 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-gold/30 shadow-[var(--shadow-gold)]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SDzwyMpACE0"
            title="Vídeo de apresentação Viver a Dois"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-base text-foreground/80 md:text-lg">
          Viver a Dois é uma jornada guiada para casais que desejam reconstruir a comunicação, fortalecer a conexão emocional, resolver os principais conflitos da convivência e criar um propósito comum para a vida a dois — mesmo que hoje o relacionamento esteja desgastado, distante ou perdido.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <GoldButton>QUERO COMEÇAR AGORA</GoldButton>
          <p className="text-sm text-muted-foreground">12x de R$103,11 ou R$997 à vista</p>
          <p className="text-xs uppercase tracking-widest text-gold/80">
            <Shield className="mr-1 inline h-3.5 w-3.5" /> Garantia incondicional de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const lines = [
    "As conversas viram discussões.",
    "As diferenças viram disputas.",
    "As responsabilidades viram sobrepesos.",
    "O parceiro deixa de ser um aliado e passa a parecer um adversário.",
  ];
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-2xl md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">O problema</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">
            O problema nem sempre é a <span className="text-gradient-gold italic">falta de amor.</span>
          </h2>
          <div className="mt-8 space-y-4 text-lg text-foreground/85 md:text-xl">
            <p>A maioria dos casais não se separa porque deixou de amar.</p>
            <p>Se separa porque deixou de se entender.</p>
            <div className="my-6 space-y-2 border-l-2 border-gold/40 pl-5 text-muted-foreground">
              {lines.map((l) => <p key={l}>{l}</p>)}
            </div>
            <p>Com o tempo, a rotina engole a conexão. Os filhos exigem atenção. As contas acumulam pressão. O cansaço substitui a presença.</p>
            <p>E aquilo que começou como um relacionamento cheio de sonhos se transforma em uma convivência automática.</p>
            <p className="pt-4 text-foreground">Muitos casais passam anos tentando resolver os sintomas sem enxergar a causa. E a causa geralmente é simples:</p>
            <p className="text-2xl italic text-gold md:text-3xl font-display">
              Eles perderam o propósito comum que os unia.
            </p>
            <p className="text-muted-foreground">Estão vivendo juntos. Mas não estão caminhando juntos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const benefits = [
    "Melhorar a comunicação do casal",
    "Reduzir discussões repetitivas",
    "Aprender técnicas de escuta e acolhimento",
    "Fortalecer a intimidade emocional",
    "Recuperar a conexão física e afetiva",
    "Alinhar objetivos e planos de vida",
    "Organizar a relação com dinheiro e responsabilidades",
    "Construir acordos mais saudáveis",
    "Lidar melhor com crises e mudanças",
    "Desenvolver um propósito comum para a família",
  ];
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <BlurOrbs />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">A solução</p>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight md:text-5xl">
            Uma <span className="text-gradient-gold italic">terapia de casal em casa</span><br className="hidden md:block" /> — conduzida passo a passo.
          </h2>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-muted-foreground">
          Vocês serão guiados por uma jornada estruturada para compreender os verdadeiros núcleos de atrito da relação e farão exercícios práticos para reconstruir o vínculo. Tudo isso através de uma abordagem terapêutica real, baseada no método sistêmico e transpessoal utilizado pela psicóloga Priscilla.
        </p>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-3 md:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur-xl">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              <span className="text-sm text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Different() {
  const pillars = ["Valores", "Propósito", "Intimidade", "Finanças", "Filhos", "Rotina", "Famílias de origem", "Responsabilidades", "Crescimento individual e conjunto"];
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-gold/20 bg-card/40 p-8 backdrop-blur-2xl md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">O que torna diferente</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">
            Não é um curso de <span className="italic text-gradient-gold">frases prontas</span> sobre casamento.
          </h2>
          <p className="mt-6 text-lg text-foreground/85">
            A maioria dos conteúdos sobre relacionamento ensina apenas técnicas isoladas. O Viver a Dois trabalha a estrutura completa da relação — porque um relacionamento envolve muito mais do que comunicação.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <span key={p} className="rounded-full border border-gold/30 bg-background/40 px-4 py-2 text-sm text-gold backdrop-blur-md">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            O programa foi organizado em módulos sequenciais que acompanham a jornada real de um casal, desde os fundamentos do vínculo até a construção de um projeto de vida compartilhado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { src: dep1.url, name: "Maria Clara" },
    { src: dep2.url, name: "Rosangele" },
    { src: dep3.url, name: "Marlene" },
    { src: dep4.url, name: "Patricia" },
    { src: dep5.url, name: "Cidinha" },
    { src: dep6.url, name: "João Carlos" },
    { src: dep7.url, name: "Luiz Neto" },
    { src: dep8.url, name: "José Roberto" },
    { src: dep9.url, name: "Marcio" },
    { src: dep10.url, name: "Edson Bernardes" },
  ];
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => {
      api.off("select", onSelect);
      clearInterval(id);
    };
  }, [api]);
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Casais que viveram a jornada</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">
            Histórias que <span className="text-gradient-gold italic">se reencontraram.</span>
          </h2>
        </div>
        <div className="mt-12 px-12">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {items.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <figure className="h-full rounded-2xl border border-gold/20 bg-card/50 p-3 backdrop-blur-xl shadow-[var(--shadow-gold)]">
                    <img
                      src={t.src}
                      alt={`Depoimento de ${t.name} sobre o curso Viver a Dois`}
                      loading="lazy"
                      className="w-full rounded-xl"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gold/40 bg-background/60 text-gold backdrop-blur-md hover:bg-gold hover:text-primary-foreground" />
            <CarouselNext className="border-gold/40 bg-background/60 text-gold backdrop-blur-md hover:bg-gold hover:text-primary-foreground" />
          </Carousel>
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const not = [
    "Quem procura soluções mágicas",
    "Quem deseja mudar apenas o parceiro",
    "Quem não está disposto a refletir sobre si mesmo",
    "Quem não pretende dedicar tempo ao relacionamento",
    "Quem já decidiu encerrar a relação e não deseja mais investir nela",
  ];
  const yes = [
    "Casais que vivem discussões frequentes",
    "Casais que sentem que estão se afastando",
    "Casais que desejam fortalecer a relação",
    "Casais com dificuldades de comunicação",
    "Casais que enfrentam conflitos sobre dinheiro",
    "Casais com filhos e sobrecarga na rotina",
    "Casais que desejam construir um futuro juntos",
    "Casais que não podem investir em terapia particular neste momento",
  ];
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <BgImage src={bgForWhom.url} overlay="from-background/40 via-background/50 to-background/70" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-medium md:text-5xl">
          Para quem é <span className="text-gradient-gold italic">- e para quem não é.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-destructive/30 bg-card/40 p-8 backdrop-blur-2xl">
            <h3 className="text-xl text-muted-foreground">Não é para</h3>
            <ul className="mt-6 space-y-3">
              {not.map((n) => (
                <li key={n} className="flex items-start gap-3 text-foreground/80">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gold/40 bg-card/40 p-8 backdrop-blur-2xl shadow-[var(--shadow-gold)]">
            <h3 className="text-xl text-gold">Para quem é</h3>
            <ul className="mt-6 space-y-3">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3 text-foreground/95">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const mods = [
    { n: "01", t: "Fundamentos do Casamento e da Aliança", items: ["O que sustenta um relacionamento saudável", "Amor, liberdade e responsabilidade", "Do 'eu e você' para o 'nós'"] },
    { n: "02", t: "Comunicação e Intimidade", items: ["Comunicação assertiva", "Escuta e acolhimento", "Intimidade emocional", "Sexualidade e desejo"] },
    { n: "03", t: "Vida Prática e Convivência", items: ["Finanças", "Tarefas domésticas", "Educação dos filhos", "Organização da rotina"] },
    { n: "04", t: "Crises e Desafios", items: ["Como atravessar crises", "Rotina e monotonia", "Confiança e lealdade"] },
    { n: "05", t: "Tempo do Casal", items: ["Equilíbrio entre individualidade e casamento", "Relação com famílias de origem"] },
    { n: "06", t: "Crescimento e Projeto de Vida", items: ["Construção de futuro", "Visão compartilhada", "Renovação do propósito do casal"] },
  ];
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <BlurOrbs />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">A jornada</p>
          <h2 className="mt-4 text-3xl font-medium md:text-5xl">
            6 módulos. Uma <span className="text-gradient-gold italic">vida a dois reconstruída.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mods.map((m) => (
            <article key={m.n} className="group rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-2xl transition-all hover:border-gold/40 hover:shadow-[var(--shadow-gold)]">
              <div className="text-5xl font-display text-gradient-gold leading-none">{m.n}</div>
              <h3 className="mt-4 text-xl text-foreground">{m.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {m.items.map((i) => (
                  <li key={i} className="flex gap-2"><Sparkles className="h-3.5 w-3.5 shrink-0 mt-1 text-gold/70" />{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-muted-foreground">
          Além de exercícios práticos, reflexões guiadas e atividades para aplicação imediata no relacionamento.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="checkout" className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl border border-gold/30 bg-card/50 p-10 backdrop-blur-2xl md:p-14 shadow-[var(--shadow-gold)]">
          <h2 className="text-balance text-3xl font-medium leading-tight md:text-5xl">
            Vocês não precisam de mais uma conversa sobre os problemas.
          </h2>
          <p className="mt-6 text-lg text-gradient-gold italic font-display md:text-2xl">
            Precisam de um caminho claro para reconstruir aquilo que está se perdendo.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <GoldButton href="https://pay.kiwify.com.br/U4QDdxM">QUERO TRANSFORMAR MEU RELACIONAMENTO</GoldButton>
            <p className="text-sm text-foreground/80">12x de R$103,11 ou R$997 à vista</p>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Comecem hoje. Vocês terão 7 dias para assistir às aulas e decidir se o programa faz sentido. Se não fizer, basta solicitar o reembolso. <span className="text-gold">Sem riscos.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <BlurOrbs />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold/25 blur-3xl" aria-hidden />
          <img
            src={expert.url}
            alt="Priscilla Collela"
            className="relative w-full rounded-3xl border border-gold/30 shadow-[var(--shadow-gold)]"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Quem conduz</p>
          <h2 className="mt-3 text-4xl font-medium md:text-5xl">
            <span className="text-gradient-gold">Priscilla Collela</span>
          </h2>
          <p className="mt-1 text-sm text-gold/80">CRP 06/70489</p>
          <p className="mt-2 text-lg text-muted-foreground">Psicóloga clínica com ênfase em terapia de casais.</p>
          <div className="mt-6 space-y-4 text-foreground/85">
            <p>Ao longo de <strong className="text-gold">23 anos</strong> de atendimento, Priscilla observou que muitos casais buscavam ajuda apenas quando a relação já estava profundamente desgastada — e que muitos não tinham condições financeiras de manter um processo terapêutico contínuo.</p>
            <p>Então ela e seu marido <strong>João Rafael</strong>, Terapeuta Junguiano criaram o Viver a Dois, para levar os principais fundamentos trabalhados em consultório para um formato acessível, estruturado e aplicável dentro da própria casa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-gold/40 bg-card/50 p-10 text-center backdrop-blur-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="mt-6 text-3xl font-medium md:text-4xl">
            Garantia <span className="text-gradient-gold italic">Incondicional de 7 dias</span>
          </h2>
          <p className="mt-6 text-foreground/85">
            Vocês terão acesso completo ao programa. Assistam às aulas. Conheçam a metodologia. Façam os exercícios. Se entenderem que o programa não é para vocês, basta solicitar o cancelamento dentro do prazo.
          </p>
          <p className="mt-4 text-gold">O risco é totalmente nosso.</p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "O curso é como uma terapia de casal?", a: "Ele foi criado como uma alternativa para casais que não podem investir em terapia neste momento e como complemento para quem deseja aprofundar o trabalho realizado em consultório." },
  { q: "Precisamos assistir juntos?", a: "O ideal é que sim, pois os exercícios foram desenvolvidos para serem realizados em casal." },
  { q: "Funciona para casais que estão em crise?", a: "O Viver a Dois foi pensado especialmente para esse grupo de casais. Inclusive um dos módulos é dedicado especificamente a conflitos, crises e momentos de desgaste." },
  { q: "Funciona para quem está bem e quer fortalecer a relação?", a: "Também. O curso não foi criado apenas para resolver problemas, mas também para fortalecer relacionamentos saudáveis." },
  { q: "Quanto tempo teremos de acesso?", a: "O acesso será imediato, assim que o pagamento for feito, e será por 12 meses." },
  { q: "E se meu parceiro estiver resistente?", a: "Muitos casais começam assim. A recomendação é apresentar a proposta como uma oportunidade de crescimento conjunto, não como uma tentativa de apontar culpados." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">FAQ</p>
          <h2 className="mt-4 text-3xl font-medium md:text-5xl">Dúvidas <span className="text-gradient-gold italic">frequentes</span></h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base font-medium md:text-lg">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <GoldButton>QUERO COMEÇAR AGORA</GoldButton>
          <p className="mt-3 text-sm text-muted-foreground">12x de R$103,11 · Garantia de 7 dias</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <img src={logo.url} alt="Viver a Dois" className="h-16 w-auto opacity-80" />
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          © Viver a Dois · Construindo um relacionamento maduro
        </p>
      </div>
    </footer>
  );
}
