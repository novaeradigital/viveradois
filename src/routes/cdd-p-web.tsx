import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle,
  Sparkles,
  Map,
  Heart,
  Shield,
  MessageCircle,
  PartyPopper,
  Mail,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/cdd-p-web")({
  head: () => ({
    meta: [
      { title: "Parabéns! Sua compra foi confirmada — Mapa da Autoestima" },
      {
        name: "description",
        content:
          "Sua compra do Mapa da Autoestima foi confirmada. Acesse sua área de membros e comece sua reconstrução emocional.",
      },
      {
        property: "og:title",
        content: "Parabéns! Sua compra foi confirmada — Mapa da Autoestima",
      },
      {
        property: "og:description",
        content:
          "Sua compra do Mapa da Autoestima foi confirmada. Acesse sua área de membros e comece sua reconstrução emocional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CddPWebPage,
});

const MEMBERS_AREA_URL = "https://institutointi.ticto.club";
const WHATSAPP_SUPPORT_URL = "#INSERIR_LINK_DO_SUPORTE_WHATSAPP";

function CddPWebPage() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-mapa-cream via-mapa-lavender to-mapa-cream text-foreground"
      style={{
        // Scope the Mapa da Autoestima typography to this page only.
        ["--font-display" as any]: '"Nunito", sans-serif',
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-10 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="gradient-glow h-[32rem] w-[32rem] opacity-40" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full gradient-rose shadow-lg shadow-mapa-pink/25">
            <PartyPopper className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-mapa-wine sm:text-4xl md:text-5xl">
            Parabéns! Sua compra foi confirmada
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-mapa-wine/80 sm:text-lg">
            Você acaba de dar um passo importante na sua reconstrução emocional.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mapa-wine/80 sm:text-lg">
            Você já passou pelo <strong className="text-mapa-rose">Código do Desapego</strong>, entendeu como tirar o ex do centro emocional e agora avançou para o{" "}
            <strong className="text-mapa-purple">Mapa da Autoestima</strong>, que é o próximo passo para reorganizar a estrutura interna que te fez se abandonar por amor.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mapa-wine/80 sm:text-lg">
            A partir de agora, você terá acesso ao processo que vai te ajudar a trabalhar sua autoimagem, seu valor interno, sua autocoerência e sua direção emocional.
          </p>
          <p className="mt-4 font-body text-sm italic text-mapa-wine/70 sm:text-base">
            E, caso você também tenha adquirido o <strong className="text-mapa-rose">Mapa Personalizado da Autoestima</strong>, você receberá as orientações para agendar suas sessões individuais com João Rafael.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-8 px-4 pb-20">
        {/* O que acontece agora? */}
        <section className="glass-card rounded-3xl p-6 shadow-xl shadow-mapa-rose/10 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mapa-sunset/40">
              <Mail className="h-5 w-5 text-mapa-wine" />
            </div>
            <h2 className="font-display text-xl font-bold text-mapa-wine sm:text-2xl">
              O que acontece agora?
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-mapa-wine/80">
            Você receberá um e-mail com as instruções de acesso à sua área de membros.
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-mapa-wine/80">
            Nesse e-mail, você encontrará os dados para acessar os produtos adquiridos.
          </p>
        </section>

        {/* Produtos adquiridos */}
        <section className="space-y-5">
          <h2 className="font-display text-xl font-bold text-mapa-wine sm:text-2xl">
            Se você comprou o Mapa da Autoestima
          </h2>
          <div className="glass-card rounded-3xl p-6 shadow-lg shadow-mapa-purple/10 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-purple-rose shadow-md">
                <Map className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-mapa-wine sm:text-xl">
                Mapa da Autoestima
              </h3>
            </div>
            <p className="font-body text-base leading-relaxed text-mapa-wine/80">
              Processo de reorganização da autoimagem, fortalecimento da autoestima e reconstrução dos padrões emocionais que fazem você aceitar pouco, se adaptar demais e se abandonar em relações confusas.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-mapa-sunset/20 p-4">
                <p className="font-heading text-sm font-semibold text-mapa-wine">Versão anual</p>
                <p className="mt-1 font-body text-sm text-mapa-wine/70">
                  Seu acesso será liberado por <strong className="text-mapa-rose">1 ano</strong>.
                </p>
              </div>
              <div className="rounded-2xl bg-mapa-lavender/60 p-4">
                <p className="font-heading text-sm font-semibold text-mapa-wine">Mapa Light</p>
                <p className="mt-1 font-body text-sm text-mapa-wine/70">
                  Seu acesso será liberado por <strong className="text-mapa-rose">3 meses</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl border-l-4 border-mapa-lime p-6 shadow-lg shadow-mapa-lime/10 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mapa-lime shadow-md">
                <Sparkles className="h-5 w-5 text-mapa-wine" />
              </div>
              <h3 className="font-display text-lg font-bold text-mapa-wine sm:text-xl">
                Se você também comprou o Mapa Personalizado da Autoestima
              </h3>
            </div>
            <p className="font-body text-base leading-relaxed text-mapa-wine/80">
              Além do acesso ao Mapa, você receberá orientações para agendar suas{" "}
              <strong className="text-mapa-rose">2 sessões individuais com João Rafael</strong>, onde será feita a leitura personalizada da sua história, dos seus padrões afetivos e das 4 camadas da sua autoestima.
            </p>
          </div>
        </section>

        {/* CTA principal */}
        <section className="relative overflow-hidden rounded-3xl gradient-rose p-8 text-center shadow-2xl shadow-mapa-rose/30 sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-mapa-lime/20 blur-2xl" />
          <div className="relative">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Acesse sua área de membros!
            </h2>
            <ol className="mt-5 space-y-2 text-left font-body text-sm text-white/90 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">1</span>
                <span>Clique no botão abaixo para acessar a área de alunos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">2</span>
                <span>Faça login usando o e-mail utilizado na compra.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">3</span>
                <span>
                  Se for seu primeiro acesso na Astron Members com esse e-mail, clique no link de ativação recebido por e-mail e defina uma senha segura.
                </span>
              </li>
            </ol>
            <a
              href={MEMBERS_AREA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-display text-base font-bold text-mapa-rose shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl sm:text-lg"
            >
              Entrar na área de membros
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-3 font-body text-xs text-white/80 sm:text-sm">
              {MEMBERS_AREA_URL}
            </p>
          </div>
        </section>

        {/* Importante */}
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-mapa-wine sm:text-2xl">
            Importante
          </h2>
          <div className="mt-4 space-y-3 font-body text-base leading-relaxed text-mapa-wine/80">
            <p>
              O acesso costuma ser liberado em até <strong className="text-mapa-rose">5 minutos</strong> para pagamentos por cartão de crédito ou Pix.
            </p>
            <p>
              Compras por boleto bancário podem levar de <strong className="text-mapa-rose">24 a 72 horas úteis</strong> para compensação e liberação.
            </p>
            <p>
              Você receberá no seu e-mail as instruções da <strong className="text-mapa-purple">Astron Members</strong> assim que o pagamento for confirmado.
            </p>
            <p>
              Se não encontrar o e-mail, verifique as pastas <strong className="text-mapa-wine">Spam</strong>, <strong className="text-mapa-wine">Lixo Eletrônico</strong> e a aba <strong className="text-mapa-wine">Promoções</strong> do Gmail.
            </p>
            <div className="flex items-start gap-3 rounded-2xl bg-mapa-sunset/20 p-4">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-mapa-purple" />
              <p className="text-sm sm:text-base">
                Você também pode acessar pelo celular baixando o aplicativo oficial da <strong className="text-mapa-purple">Astron Members</strong> na App Store ou Google Play.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre a consultoria */}
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mapa-lavender">
              <Heart className="h-5 w-5 text-mapa-rose" />
            </div>
            <h2 className="font-display text-xl font-bold text-mapa-wine sm:text-2xl">
              Sobre a consultoria, se você adquiriu
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-mapa-wine/80">
            Se você comprou o <strong className="text-mapa-rose">Mapa Personalizado da Autoestima</strong>, fique atenta ao seu e-mail.
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-mapa-wine/80">
            Você receberá as instruções para agendar a primeira sessão individual.
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-mapa-wine/80">
            Nessa consultoria, João Rafael vai te ajudar a entender onde sua autoestima mais se desorganiza, quais padrões afetivos aparecem na sua história e como aplicar o Mapa da Autoestima com mais direção.
          </p>
        </section>

        {/* Seus dados estão seguros */}
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mapa-lime/60">
              <Shield className="h-5 w-5 text-mapa-wine" />
            </div>
            <h2 className="font-display text-xl font-bold text-mapa-wine sm:text-2xl">
              Seus dados estão seguros
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-mapa-wine/80">
            O acesso aos produtos é pessoal e intransferível.
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-mapa-wine/80">
            Sua jornada ficará protegida na área de membros da <strong className="text-mapa-purple">Astron Members</strong>, e você poderá assistir às aulas no seu tempo, com segurança e praticidade.
          </p>
        </section>

        {/* Precisa de ajuda? */}
        <section className="text-center">
          <h2 className="font-display text-xl font-bold text-mapa-wine sm:text-2xl">
            Precisa de ajuda?
          </h2>
          <p className="mt-3 font-body text-base leading-relaxed text-mapa-wine/80">
            Se tiver dúvidas sobre acesso, login, liberação do conteúdo ou agendamento da consultoria, entre em contato pelo WhatsApp:
          </p>
          <a
            href={WHATSAPP_SUPPORT_URL}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-mapa-rose bg-white px-7 py-3 font-display text-base font-bold text-mapa-rose transition-colors hover:bg-mapa-rose hover:text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com o suporte
          </a>
          <p className="mt-2 font-body text-xs text-mapa-wine/60">
            [INSERIR LINK DO SUPORTE WHATSAPP]
          </p>
        </section>

        {/* Checklist rápido */}
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h2 className="mb-5 font-display text-xl font-bold text-mapa-wine sm:text-2xl">
            Checklist rápido
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Pagamento confirmado",
              "E-mail de acesso recebido",
              "Login realizado na área de membros",
              "Mapa da Autoestima liberado",
              "Código do Desapego disponível, caso esteja incluído no seu acesso",
              "Instruções da consultoria recebidas, caso você tenha adquirido",
              "Suporte via WhatsApp disponível em caso de dúvida",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-mapa-lime" />
                <span className="font-body text-sm leading-relaxed text-mapa-wine/80 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Rodapé */}
        <footer className="pt-6 text-center">
          <div className="mx-auto mb-4 h-px max-w-xs bg-gradient-to-r from-transparent via-mapa-pink to-transparent" />
          <p className="font-display text-lg font-bold text-mapa-wine">Mapa da Autoestima</p>
          <p className="mt-1 font-body text-sm text-mapa-wine/60">
            Instituto Inti — sua reconstrução emocional começou.
          </p>
        </footer>
      </div>
    </main>
  );
}