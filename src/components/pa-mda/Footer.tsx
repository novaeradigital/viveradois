export function Footer() {
  return (
    <footer className="bg-wine py-10 text-center text-cream/70">
      <div className="mx-auto max-w-3xl px-5">
        <p className="font-display text-lg font-bold text-cream">Mapa da Autoestima</p>
        <p className="mt-2 font-sans text-xs">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}