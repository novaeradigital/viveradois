const imagines = [
  "viver relações sem precisar se perder para ser escolhida.",
  "sentir saudade sem transformar isso em mensagem.",
  "parar de aceitar migalhas só porque tem apego a alguém.",
  "não depender de ninguém para ter o que merece.",
  "deixar de sofrer com ausência, frieza e ambiguidade nas suas relações.",
  "entrar em uma relação mantendo seus limites, sua direção e sua própria vida.",
];

const padroes = [
  "se doando demais",
  "aceitando pouco",
  "tentando ser compreensiva o tempo todo",
  "sentindo culpa por se posicionar",
  "dependendo da resposta de alguém para se sentir suficiente",
  "repetindo vínculos que começam diferentes, mas terminam com a mesma sensação",
];

export function Desire() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--gradient-cream)" }}
    >
      <div className="relative mx-auto max-w-4xl px-5">
        <h2 className="text-center font-display text-3xl font-extrabold leading-tight text-wine text-balance sm:text-4xl md:text-5xl">
          Imagine viver relações sem precisar{" "}
          <span className="italic font-serif font-normal text-raspberry">se perder</span> para ser
          escolhida.
        </h2>

        <ul className="mx-auto mt-14 max-w-2xl space-y-4">
          {imagines.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur transition hover:bg-white"
            >
              <span
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: "var(--gradient-rose)" }}
              >
                {i + 1}
              </span>
              <p className="font-sans text-base leading-relaxed text-wine/85 sm:text-lg">
                <span className="font-serif italic text-raspberry">Imagine</span> {t}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-16 max-w-2xl space-y-5 text-center font-sans text-base leading-relaxed text-wine/80 sm:text-lg">
          <p>
            Esse é o tipo de reconstrução que o{" "}
            <strong className="font-semibold text-raspberry">Mapa da Autoestima</strong> começa a
            construir.
          </p>
          <p className="font-serif text-xl italic text-wine sm:text-2xl">
            Para você conseguir amar sem se abandonar.
          </p>
          <p>
            Porque o objetivo não é apenas esquecer relações ruins. É construir uma vida afetiva
            onde você não precise viver tentando se recuperar de pessoas que te quebraram por
            dentro.
          </p>
        </div>

        <div className="mt-20 rounded-[2rem] border border-raspberry/15 bg-wine p-8 text-cream shadow-[var(--shadow-soft)] sm:p-12">
          <p className="text-center font-display text-xl font-bold sm:text-2xl">
            O Mapa existe para mulheres que querem parar de viver assim:
          </p>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
            {padroes.map((p) => (
              <li
                key={p}
                className="rounded-full border border-cream/15 bg-white/5 px-4 py-2 font-sans text-sm text-cream/90"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-2xl space-y-3 text-center font-sans text-base leading-relaxed text-cream/85">
            <p>O Mapa da Autoestima trabalha a raiz desse padrão.</p>
            <p className="font-serif text-lg italic text-pink">
              A autoimagem. O valor interno. A forma como você se enxerga.
            </p>
            <p className="font-serif text-lg italic text-pink">
              A forma como se posiciona. E a forma como escolhe o amor que aceita viver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}