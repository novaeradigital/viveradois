import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Check, MessageCircle, Shield, AlertTriangle } from "lucide-react";
import logo from "@/assets/logotipo.png.asset.json";
import bgSunset from "@/assets/bg-sunset.webp.asset.json";

export const Route = createFileRoute("/vad-obg")({
  head: () => ({
    meta: [
      { title: "Obrigado — Viver a Dois" },
      {
        name: "description",
        content:
          "Obrigado pela sua inscrição no Viver a Dois. A jornada de vocês começou. Verifique seu e-mail para acessar o curso.",
      },
      { property: "og:title", content: "Obrigado — Viver a Dois" },
      {
        property: "og:description",
        content:
          "Obrigado pela sua inscrição no Viver a Dois. A jornada de vocês começou.",
      },
    ],
  }),
  component: ObrigadoPage,
});

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

function GoldButton({ children, className = "", href = "#" }: { children: React.ReactNode; className?: string; href?: string }) {
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

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <NextStep />
      <Together />
      <StartGuide />
      <WhatYouWillFind />
      <ImportantNotice />
      <Support />
      <Closing />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <BgImage src={bgSunset.url} overlay="from-background/70 via-background/80 to-background" />
      <BlurOrbs />
      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
          <Check className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-5xl lg:text-6xl">
          Obrigado pela sua inscrição no{" "}
          <span className="text-gradient-gold italic">Viver a Dois</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          A jornada de vocês começou.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-foreground/80">
          Vocês acabam de dar um passo importante para cuidar do relacionamento com mais consciência, maturidade e direção.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-foreground/70">
          O Viver a Dois foi criado para casais que não querem apenas “conversar mais uma vez sobre os problemas”, mas desejam seguir um caminho claro para reconstruir a comunicação, fortalecer a conexão emocional e criar uma vida a dois com mais parceria, presença e propósito.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-foreground/70">
          A partir de agora, vocês terão acesso a uma jornada guiada, com aulas, reflexões e exercícios práticos para aplicar dentro da própria casa.
        </p>
      </div>
    </section>
  );
}

function NextStep() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-gold/30 bg-card/50 p-8 backdrop-blur-2xl md:p-12 text-center shadow-[var(--shadow-gold)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-background/60 backdrop-blur-md">
            <Mail className="h-6 w-6 text-gold" />
          </div>
          <h2 className="mt-6 text-2xl font-medium md:text-3xl">
            Próximo passo: <span className="text-gradient-gold italic">acesse o curso</span>
          </h2>
          <p className="mt-4 text-foreground/85">
            O acesso ao Viver a Dois será enviado para o e-mail cadastrado no momento da compra.
          </p>
          <p className="mt-2 text-muted-foreground">
            Verifique sua caixa de entrada nos próximos minutos.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Caso não encontre, confira também as abas: <span className="text-gold">Promoções</span>, <span className="text-gold">Spam</span> e <span className="text-gold">Lixo eletrônico</span>.
          </p>
          <div className="mt-8">
            <GoldButton href="https://pay.kiwify.com.br/U4QDdxM">Acessar meu curso agora</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Together() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-gold">Importeer important</p>
        <h2 className="mt-4 text-2xl font-medium md:text-4xl">
          Façam essa jornada <span className="text-gradient-gold italic">juntos</span>
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85 md:text-lg">
          <p>O Viver a Dois não foi pensado para apontar culpados.</p>
          <p>Ele foi criado para ajudar o casal a olhar para a relação com mais clareza.</p>
          <p>Por isso, a recomendação é que vocês assistam às aulas juntos, conversem sobre os temas apresentados e façam os exercícios com abertura, respeito e disposição.</p>
          <p className="pt-2 text-2xl italic text-gold md:text-3xl font-display">
            O objetivo não é vencer uma discussão. É reconstruir uma direção comum.
          </p>
        </div>
      </div>
    </section>
  );
}

function StartGuide() {
  const steps = [
    "Separem um momento tranquilo da semana.",
    "Assistam à primeira aula sem interrupções.",
    "Façam os exercícios propostos com honestidade.",
    "Evitem transformar a aula em julgamento.",
    "Usem o conteúdo como ponto de partida para uma conversa mais madura.",
  ];
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Como começar</p>
          <h2 className="mt-4 text-2xl font-medium md:text-4xl">
            Comecem da <span className="text-gradient-gold italic">melhor forma</span>
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Para aproveitar melhor o programa, sigam esta orientação:
        </p>
        <div className="mt-10 space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-xl">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                {i + 1}
              </span>
              <span className="text-foreground/90 pt-0.5">{step}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
          Vocês não precisam resolver tudo no primeiro dia. Precisam apenas começar de forma consciente.
        </p>
      </div>
    </section>
  );
}

function WhatYouWillFind() {
  const topics = [
    "Fundamentos do casamento e da aliança",
    "Comunicação e escuta",
    "Acolhimento emocional",
    "Intimidade e sexualidade",
    "Finanças e responsabilidades",
    "Filhos e rotina",
    "Crises e conflitos",
    "Famílias de origem",
    "Tempo do casal",
    "Construção de futuro",
    "Propósito comum para a vida a dois",
  ];
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <BlurOrbs />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">O que esperar</p>
          <h2 className="mt-4 text-2xl font-medium md:text-4xl">
            O que vocês vão encontrar dentro do{" "}
            <span className="text-gradient-gold italic">Viver a Dois</span>
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Ao longo da jornada, vocês passarão por temas essenciais para a construção de um relacionamento mais saudável:
        </p>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
          {topics.map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur-xl">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-foreground/90">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
          Cada módulo foi pensado para ajudar vocês a saírem do automático e voltarem a caminhar na mesma direção.
        </p>
      </div>
    </section>
  );
}

function ImportantNotice() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-destructive/30 bg-card/40 p-8 backdrop-blur-2xl md:p-12">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive/80" />
            <h2 className="text-xl font-medium md:text-2xl">Uma orientação importante</h2>
          </div>
          <p className="mt-6 text-foreground/85">
            O Viver a Dois é uma jornada educativa e terapêutica para casais, mas <strong className="text-gold">não substitui</strong> acompanhamento psicológico individual, terapia de casal em casos graves, atendimento médico ou suporte emergencial.
          </p>
          <p className="mt-4 text-foreground/85">
            Em situações de violência, ameaça, abuso, risco emocional intenso ou sofrimento grave, busquem ajuda profissional especializada imediatamente.
          </p>
          <p className="mt-4 text-muted-foreground">
            Cuidar da relação também significa cuidar da segurança emocional e física de cada pessoa envolvida.
          </p>
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-background/60 backdrop-blur-md">
          <MessageCircle className="h-6 w-6 text-gold" />
        </div>
        <h2 className="mt-6 text-2xl font-medium md:text-3xl">Precisa de ajuda?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Caso tenha qualquer dificuldade com o acesso, pagamento ou plataforma, fale com nossa equipe de suporte.
        </p>
        <div className="mt-8">
          <GoldButton href="https://wa.me/">Falar com o suporte</GoldButton>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <BgImage src={bgSunset.url} overlay="from-background/80 via-background/85 to-background/95" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-2xl font-medium md:text-4xl">
          Antes de sair desta página
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/85">
          Conversem ainda hoje sobre um ponto simples:
        </p>
        <p className="mx-auto mt-4 max-w-xl text-2xl italic text-gold md:text-3xl font-display">
          “O que nós dois queremos reconstruir a partir de agora?”
        </p>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Essa pergunta pode ser o primeiro passo para transformar uma tentativa isolada em um novo compromisso.
        </p>
        <p className="mx-auto mt-8 text-xl font-medium text-gold">
          Bem-vindos ao Viver a Dois.
        </p>
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
        <div className="mt-4 flex gap-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
            Voltar para o site
          </Link>
        </div>
      </div>
    </footer>
  );
}
