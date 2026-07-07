export function WhyNext() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-rose)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-purple-rose)" }}
      />

      <div className="relative mx-auto max-w-3xl px-5">
        <p className="mb-4 text-center font-serif text-sm italic text-raspberry">
          o próximo passo natural
        </p>
        <h2 className="text-center font-display text-3xl font-extrabold leading-tight text-wine text-balance sm:text-4xl md:text-5xl">
          O Código tira o ex do centro.
          <br />
          <span className="italic font-serif font-normal text-raspberry">
            O Mapa reconstrói o centro
          </span>{" "}
          dentro de você.
        </h2>

        <div className="mx-auto mt-12 space-y-6 font-sans text-base leading-[1.8] text-wine/80 sm:text-lg">
          <p>
            O <strong className="font-semibold text-raspberry">Código do Desapego</strong> foi
            criado para tirar você do estado de urgência emocional.
          </p>
          <p>
            Ele te ajuda a interromper recaídas, nomear gatilhos, enxergar a realidade da relação,
            separar a pessoa real da pessoa esperada e começar a reconstruir segurança emocional
            fora do ex.
          </p>
          <p>Mas, quando esse primeiro movimento acontece, uma pergunta mais profunda aparece:</p>

          <blockquote className="relative my-10 rounded-3xl border border-raspberry/15 bg-white/70 p-8 text-center font-serif text-xl italic leading-snug text-wine shadow-[var(--shadow-soft)] sm:text-2xl">
            <span
              aria-hidden
              className="absolute -top-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full"
              style={{ background: "var(--gradient-rose)" }}
            />
            por que essa relação conseguiu ocupar tanto espaço dentro de mim?
          </blockquote>

          <p>Porque o problema não era apenas esquecer uma pessoa.</p>
          <p>
            Era perceber que, em algum momento, sua segurança, seu valor, sua esperança e sua
            sensação de futuro ficaram emocionalmente dependentes de um vínculo.
          </p>
          <p>O Código ajuda você a tirar o ex desse lugar.</p>
          <p>
            Mas o próximo passo é{" "}
            <span className="rounded-md bg-lime/40 px-1.5 font-semibold text-wine">
              reorganizar a estrutura interna
            </span>{" "}
            que permitiu que alguém ocupasse esse lugar.
          </p>
          <p>
            É aqui que entra o{" "}
            <strong className="font-semibold text-raspberry">Mapa da Autoestima</strong>.
          </p>
          <p>Não para te dar mais uma dose de alívio.</p>
          <p>
            Mas para reorganizar sua autoimagem, sair do ciclo do não merecimento e construir uma
            autoestima estruturada, para que você não precise mais se abandonar por amor.
          </p>
        </div>
      </div>
    </section>
  );
}