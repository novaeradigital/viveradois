import { createFileRoute } from "@tanstack/react-router";
import { PartyPopper, Mail, Clock, Shield, HelpCircle, Smartphone } from "lucide-react";

export const Route = createFileRoute("/po-cdd")({
  head: () => ({
    meta: [
      { title: "Parabéns! Sua compra foi confirmada — Mapa da Autoestima" },
      { name: "description", content: "Sua compra do Mapa da Autoestima foi confirmada. Acesse as instruções para entrar na área de membros." },
      { property: "og:title", content: "Parabéns! Sua compra foi confirmada — Mapa da Autoestima" },
      { property: "og:description", content: "Sua compra do Mapa da Autoestima foi confirmada. Acesse as instruções para entrar na área de membros." },
    ],
  }),
  component: ConfirmacaoPage,
});

function ConfirmacaoPage() {
  return (
    <div className="po-cdd-root">
      <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 animate-fade-in">
            <PartyPopper className="mr-2 h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Compra confirmada</span>
          </div>

          <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl animate-fade-in delay-100">
            🎉 Parabéns! Sua compra foi confirmada
          </h1>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground animate-fade-in delay-200">
            <p>
              Você acaba de dar um passo importante na sua reconstrução emocional.
            </p>
            <p>
              Você já passou pelo <strong>Código do Desapego</strong>, entendeu como tirar o ex do centro emocional e agora avançou para o <strong>Mapa da Autoestima</strong>, que é o próximo passo para reorganizar a estrutura interna que te fez se abandonar por amor.
            </p>
            <p>
              A partir de agora, você terá acesso ao processo que vai te ajudar a trabalhar sua autoimagem, seu valor interno, sua autocoerência e sua direção emocional.
            </p>
            <p>
              E, caso você também tenha adquirido o <strong>Mapa Personalizado da Autoestima</strong>, você receberá as orientações para agendar suas sessões individuais com João Rafael.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-border" />

      {/* O que acontece agora? */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            O que acontece agora?
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Você receberá um e-mail com as instruções de acesso à sua área de membros.
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Nesse e-mail, você encontrará os dados para acessar os produtos adquiridos.
          </p>

          <h3 className="mt-10 font-serif text-xl font-semibold tracking-tight text-foreground">
            Se você comprou o Mapa da Autoestima
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Você receberá acesso ao:
          </p>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h4 className="text-base font-bold text-card-foreground">Mapa da Autoestima</h4>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Processo de reorganização da autoimagem, fortalecimento da autoestima e reconstrução dos padrões emocionais que fazem você aceitar pouco, se adaptar demais e se abandonar em relações confusas.
            </p>
          </div>

          <h4 className="mt-8 text-lg font-semibold text-foreground">
            Se você comprou a versão anual
          </h4>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Seu acesso será liberado por <strong>1 ano</strong>.
          </p>

          <h4 className="mt-8 text-lg font-semibold text-foreground">
            Se você comprou o Mapa Light
          </h4>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Seu acesso será liberado por <strong>3 meses</strong>.
          </p>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-border" />

      {/* Acesse sua área de membros */}
      <section className="px-6 py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Acesse sua área de membros!
          </h2>

          <ol className="mt-8 list-decimal list-inside space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>Clique no botão abaixo para acessar a área de alunos.</li>
            <li>Faça login usando o e-mail utilizado na compra.</li>
            <li>Se for seu primeiro acesso na Ticto com esse e-mail, clique no link de ativação recebido por e-mail e defina uma senha segura.</li>
          </ol>

          <div className="mt-10">
            <div className="mt-4">
              <a
                href="https://institutointi.ticto.club"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                ENTRAR NA ÁREA DE MEMBROS
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-border" />

      {/* Importante */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Importante
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-base leading-relaxed text-card-foreground">
                  O acesso costuma ser liberado em até <strong>5 minutos</strong> para pagamentos por cartão de crédito ou Pix.
                </p>
                <p className="mt-2 text-base leading-relaxed text-card-foreground">
                  Compras por boleto bancário podem levar de <strong>24 a 72 horas úteis</strong> para compensação e liberação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-base leading-relaxed text-card-foreground">
                  Você receberá no seu e-mail as instruções da <strong>Ticto</strong> assim que o pagamento for confirmado.
                </p>
                <p className="mt-2 text-base leading-relaxed text-card-foreground">
                  Se não encontrar o e-mail, verifique as pastas <strong>Spam</strong>, <strong>Lixo Eletrônico</strong> e a aba <strong>Promoções</strong> do Gmail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <Smartphone className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-base leading-relaxed text-card-foreground">
                  Você também pode acessar pelo celular baixando o aplicativo oficial da <strong>Ticto{"\u00a0"}</strong> na App Store ou Google Play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-border" />

      {/* Seus dados estão seguros */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Seus dados estão seguros
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                O acesso aos produtos é pessoal e intransferível.
              </p>
              <p>
                Sua jornada ficará protegida na área de membros da <strong>Ticto</strong>, e você poderá assistir às aulas no seu tempo, com segurança e praticidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-border" />

      {/* Precisa de ajuda? */}
      <section className="px-6 py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Precisa de ajuda?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Se tiver dúvidas sobre acesso, login, liberação do conteúdo ou agendamento da consultoria, entre em contato pelo WhatsApp:
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center rounded-xl border border-primary bg-card px-8 py-4 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                SUPORTE NO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-16 bg-secondary/30" />
      </main>
    </div>
  );
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/po-cdd')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/po-cdd"!</div>
}
